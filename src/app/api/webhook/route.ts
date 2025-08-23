import { db } from "@/db"
import { stripe } from "@/lib/stripe"
import { headers } from "next/headers"
import { NextResponse } from "next/server"
import Stripe from "stripe"

export async function POST (req: Request) {
    try {
        const body = await req.text()
        const signature = (await headers()).get("stripe-signature")

        if (!signature) {
            return new Response('Invalid Signature', {status: 400})
        }

    const event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)

        if (event.type === "checkout.session.completed"){
            const session = event.data.object as Stripe.Checkout.Session

            const {userId, orderId} = session.metadata || {
                userId: null,
                orderId: null,
            }
            if (!userId || !orderId) {
                throw new Error ('Invalid request metadata')
            }

            const customerDetails = session.customer_details
            if (!customerDetails) {
                throw new Error('Missing customer details on session')
            }

            if (!customerDetails.email) {
                throw new Error('Missing user email')
            }

            if (!customerDetails.name) {
                throw new Error('Missing customer name')
            }

            const address = customerDetails.address
            if (!address) {
                throw new Error('Missing customer address')
            }

            const { city, country, postal_code, line1, state } = address
            if (!city || !country || !postal_code || !line1) {
                throw new Error('Incomplete customer address')
            }

            await db.order.update ({
                where : {
                    id: orderId,
                }, 
                data: {
                    isPaid: true,
                    shippingAddress:{
                        create:{
                            name: customerDetails.name,
                            city,
                            country,
                            postalCode: postal_code,
                            street: line1,
                            state: state ?? undefined,

                        }
                    },
                    billingAddress:{
                        create:{
                            name: customerDetails.name,
                            city,
                            country,
                            postalCode: postal_code,
                            street: line1,
                            state: state ?? undefined,

                        }
                    },
                }
            })
        }
        return NextResponse.json({result: event, ok:true})
    } catch (error) {
        console.error(error)
        
        return NextResponse.json(
            {message: 'Something went wrong', ok: false},
            {status: 500}
        )
    }
}