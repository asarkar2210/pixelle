import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import DesignPreview from './DesignPreview'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

interface PageProps  {
    searchParams : {
        [key: string] : string | string[] | undefined
    }
}

const page = async ({searchParams} : PageProps) => {

    const {id} = await searchParams

    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({
        where: {id},
    })

    if (!configuration) {
        return notFound()
    }

  return (
    <MaxWidthWrapper>
        <DesignPreview configuration={configuration} />
    </MaxWidthWrapper>
    
  )
}

export default page