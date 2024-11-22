import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getLayoutData from '@/lib/contentful/getLayoutData'
import { ReactNode } from 'react'
import './../globals.css'

export type Params = Promise<{ slug: string[] }>

export default async function DynamicLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Params
}) {
  const { slug } = await params
  const { metadata, header, footer } = await getLayoutData(slug)

  return (
    <html lang="en">
      <head>
        <title>{metadata?.fields?.title ?? 'Next App'}</title>
        <meta
          name="description"
          content={
            metadata?.fields?.description ??
            'Next.js application built with Typescript, Tailwind and Contentful as CMS'
          }
        />
      </head>
      <body>
        {header && <Header fields={header.fields} />}
        <main>{children}</main>
        {footer && <Footer fields={footer.fields} />}
      </body>
    </html>
  )
}
