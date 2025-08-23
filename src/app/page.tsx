import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import UserReview from "@/components/UserReview";
import { ArrowRight, Check, Star } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
      <div className="bg-slate-50">
        <section>
          <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
            <div className="cursor-default col-span-2 px-6 lg:px-0 lg:pt-4">
              <div className="relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start">
                <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                  <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                  <img src='/logo.png' className='w-full' alt='Pixelle logo' />
                </div>
                <h1 className="relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-[#212121]  text-5xl md:text-6xl lg:text-7xl">
                    Your Image on a <span className="bg-[#ff6600] px-2 text-white">Custom</span> Phone Case
                </h1>
                <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
                  Make your phone case as unique as your camera roll. <span className="font-semibold">Pixelle</span>  lets your memories live on—beautifully.
                </p>

                <ul className="mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start">
                  <div className="space-y-2">
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className='h-5 w-5 shrink-0 text-[#06923E]'/>
                        High-quality, durable material
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className='h-5 w-5 shrink-0 text-[#06923E]'/>
                        5 year print guarantee
                    </li>
                    <li className="flex gap-1.5 items-center text-left">
                      <Check className='h-5 w-5 shrink-0 text-[#06923E]'/>
                        Covers available for all smartphone models
                    </li>
                  </div>
                </ul>

                <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="flex -space-x-4">
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-1.jpg"
                      alt='user image'
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-2.jpg"
                      alt='user image'
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-3.jpg"
                      alt='user image'
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-4.jpg"
                      alt='user image'
                    />
                    <img 
                      className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                      src="/users/user-5.jpg"
                      alt='user image'
                    />
                  </div>

                  <div className="flex flex-col justify-between items-center sm:items-start">
                    <div className="flex gap-0.5">
                      <Star className="h-4 w-4 text-[#06923E] fill-[#06923E]"/>
                      <Star className="h-4 w-4 text-[#06923E] fill-[#06923E]"/>
                      <Star className="h-4 w-4 text-[#06923E] fill-[#06923E]"/>
                      <Star className="h-4 w-4 text-[#06923E] fill-[#06923E]"/>
                      <Star className="h-4 w-4 text-[#06923E] fill-[#06923E]"/>
                    </div>
                    <p>
                      <span className="font-semibold">1.25K</span> happy customers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit">
              <div className="relative md:max-w-xl">
                <img 
                  src="/your-image.png"
                  className="absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block"
                  alt='Your image mockup'
                />
                <img 
                  src="/line.png"
                  className="absolute w-20 -left-6 -bottom-6 select-none"
                  alt=""
                />
                <Phone className="w-64" imgSrc="/testimonials/1.jpg" />
              </div>
            </div>
          </MaxWidthWrapper>
        </section>

        {/* value proposition section */}
        <section className="bg-slate-100 py-24">
          <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
            <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6">
              <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-[#212121]">
                What our 
                <span className="relative px-2">
                  customers 
                  <Icons.underline className="hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-[#ff6600]"/>
                </span> 
                say
              </h2>
              <img 
                src="/heart.png"
                className="w-20 order-0 lg:order-2"
                alt="Heart"
              />
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16">
              <UserReview 
                message={["The case feels durable and I even got a compliment on the design. Had the case for two and a half months now and ", 
                  "the image is super clear",", on the case I had before, the image started fading into a yellow-ish color after a couple of weeks. Love it."]}
                name="Ashish"
                icon="/users/user-1.jpg"
              />
              <UserReview 
                message={["I usually keep my phone together with my keys in my pocket and that led to some pretty heavy scratchmarks on all of my last phone cases. This one, besides a barely noticable scratch on the corner, ", 
                  "looks brand new after about half a year",". I dig it."]}
                name="Neha"
                icon="/users/user-4.jpg"
              />
            </div>
          </MaxWidthWrapper>

          <div className="pt-16">
            <Reviews />
          </div>
        </section>

        <section>
          <MaxWidthWrapper className="py-24">
            <div className="mb-12 px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-[#212121]">
                    Upload your photo and get{' '}
                    <span className="px-2 bg-[#06923E] text-white">
                      your own case
                    </span>
                  </h2>

              </div>
            </div>

              <div className='mx-auto justify-items-center max-w-6xl px-6 lg:px-8'>
                <div className='relative flex flex-col items-center md:grid grid-cols-2 gap-40'>
                  <img
                    src='/arrow.png'
                    className='absolute top-[25rem] md:top-1/2 -translate-y-1/2 z-10 left-1/2 -translate-x-1/2 rotate-90 md:rotate-0'
                    alt=""
                  />

                  <div className='relative h-80 md:h-full w-full md:justify-self-end max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 lg:rounded-2xl'>
                    <img
                      src='/woman-cup.jpg'
                      className='rounded-md object-cover bg-white shadow-2xl ring-1 ring-gray-900/10 h-full w-full'
                      alt='Woman holding cup'
                    />
                  </div>

                  <Phone className='w-60' imgSrc='/woman-cup-cover.jpg' />
                </div>
            </div>          
            
              <ul className='mx-auto mt-12 max-w-prose sm:text-lg space-y-2 w-fit'>
                <li className='w-fit'>
                  <Check className='h-5 w-5 text-[#06923E] inline mr-1.5' />
                  High-quality silicone material
                </li>
                <li className='w-fit'>
                  <Check className='h-5 w-5 text-[#06923E] inline mr-1.5' />
                  Scratch and fingerprint resistant coating
                </li>
                <li className='w-fit'>
                  <Check className='h-5 w-5 text-[#06923E] inline mr-1.5' />
                  Wireless charging compatible
                </li>
                <li className='w-fit'>
                  <Check className='h-5 w-5 text-[#06923E] inline mr-1.5' />5 year
                  print warranty
                </li>

                <div className='flex justify-center'>
                  <Link
                    className={buttonVariants({
                      size: 'lg',
                      className: 'mx-auto mt-8',
                    })}
                    href='/configure/upload'>
                    Create your case now <ArrowRight className='h-4 w-4 ml-1.5' />
                  </Link>
                </div>
            </ul>
          </MaxWidthWrapper>
        </section>
      </div>       

  );
}

export default Page