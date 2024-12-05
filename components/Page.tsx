import type { Params } from '@/app/[[...slug]]/layout'
import getPageData from '@/lib/contentful/getPageData'
import { notFound } from 'next/navigation'
import SectionFactory from './SectionFactory'

export const revalidate = 10

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params
  const data = await getPageData(slug)

  if (!data) {
    notFound()
  }

  return <SectionFactory sections={data.sections} />
}

export default Page
