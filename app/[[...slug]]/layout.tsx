import Header from '@/components/Header'
import getHeader from '@/lib/contentful/getHeader'
import getMetadata from '@/lib/contentful/getMetadata'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import './../globals.css'

export type Params = Promise<{ slug: string[] }>

export async function generateMetadata({
  params,
}: {
  params: Params
}): Promise<Metadata> {
  const { slug } = await params
  const metadata = await getMetadata(slug)

  return metadata
}

export default async function DynamicLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Params
}) {
  const { slug } = await params
  const headerFields = await getHeader(slug)

  return (
    <html lang="en">
      <body>
        {headerFields && <Header fields={headerFields} />}
        {children}
      </body>
    </html>
  )
}
