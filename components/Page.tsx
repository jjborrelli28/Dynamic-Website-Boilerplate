import { Params } from '@/app/[[...slug]]/layout'
import getPageData from '@/lib/contentful/getPageData'
import { notFound } from 'next/navigation'

export const revalidate = 10

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params
  const data = await getPageData(slug)

  if (!data) {
    notFound()
  }

  return <div>Page path: {data.name}</div>
}

export default Page
