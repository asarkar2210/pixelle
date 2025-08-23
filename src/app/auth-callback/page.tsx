'use client'

import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { getAuthStatus } from './actions'
import { useRouter } from 'next/navigation'
import { Loader2 } from 'lucide-react'

const Page = () => {
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ['auth-callback'],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
  })

  // Navigate after render when auth succeeds to avoid setState during render
  useEffect(() => {
    if (!data?.success) return
    const configurationId = window.localStorage.getItem('configurationId')
    if (configurationId) {
      window.localStorage.removeItem('configurationId')
      router.replace(`/configure/preview?id=${configurationId}`)
    } else {
      router.replace('/')
    }
  }, [data?.success, router])

  return (
    <div className='w-full mt-24 flex justify-center'>
      <div className='flex flex-col items-center gap-2'>
        <Loader2 className='h-8 w-8 animate-spin text-zinc-500' />
        <h3 className='font-semibold text-xl'>Logging you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  )
}

export default Page