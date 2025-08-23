import { db } from '@/db'
import { notFound } from 'next/navigation'
import React from 'react'
import DesignPreview from './DesignPreview'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
    const { id } = await searchParams

    if (!id || typeof id !== 'string') {
        return notFound()
    }

    const configuration = await db.configuration.findUnique({ where: { id } })

    if (!configuration) {
        return notFound()
    }

    return (
        <MaxWidthWrapper>
            <DesignPreview configuration={configuration} />
        </MaxWidthWrapper>
    )
}