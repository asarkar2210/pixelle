import { NextResponse } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function GET(request: Request) {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const url = new URL(request.url)
  const cookieHeader = request.headers.get('cookie') || ''
  const cookieNames = cookieHeader
    .split(';')
    .map((c) => c.trim().split('=')[0])
    .filter(Boolean)

  return NextResponse.json({
    host: url.host,
    href: url.href,
    user: user ? { id: user.id, email: user.email } : null,
    cookies: cookieNames,
  })
}
