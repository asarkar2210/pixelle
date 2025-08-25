"use client"
import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'

const NavBar = () => {
    const { user, isLoading, isAuthenticated } = useKindeBrowserClient() as any
    const isAdmin = !!(
        user?.email && process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
        user.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL
    )
  return (
    <nav className='sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'>
        <MaxWidthWrapper>
            <div className='flex h-14 items-center justify-between border-b border-zinc-200'>
                <Link href='/' className='flex z-40 font-semibold'>
                    <span className='text-[#FF6600]'>Pix</span>elle
                </Link>
            
            <div className='h-full flex items-center space-x-4'>
                {isLoading ? null : isAuthenticated ? (
                    <>
                        <a href='/api/auth/logout' className={buttonVariants({ size:"sm", variant:"ghost" })}>
                            Sign Out
                        </a>
                        {isAdmin ? (
                            <Link 
                                href='/dashboard' 
                                className={buttonVariants({
                                    size:"sm", 
                                    variant:"ghost",
                        })}>
                            Dashboard ✨
                        </Link>
                    ) : null}
                        <Link 
                            href='/configure/upload' 
                            className={buttonVariants({
                                size:"sm", 
                                className:"hidden sm:flex items-center gap-1",
                        })}>
                            Create Case
                            <ArrowRight className='ml-1.5 h-5 w-5'/>
                        </Link>                    
                    </>
                ) : (
                    <>
                        <a href='/api/auth/register' className={buttonVariants({ size:"sm", variant:"ghost" })}>
                            Sign Up
                        </a>
                        
                        <a href='/api/auth/login' className={buttonVariants({ size:"sm", variant:"ghost" })}>
                            Login
                        </a>

                        <div className='h-8 w-px bg-zinc-200 hidden sm:block' />

                        <Link
                            href='/configure/upload'
                            className={buttonVariants({
                                size: 'sm',
                                className: 'hidden sm:flex items-center gap-1',
                        })}>
                            Create case
                            <ArrowRight className='ml-1.5 h-5 w-5' />
                        </Link>
                                         
                    </>                    
                )}
            </div>
        </div>    
        </MaxWidthWrapper>
    </nav>
  )
}

export default NavBar