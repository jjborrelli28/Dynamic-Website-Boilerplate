import { notFound } from 'next/navigation'
import getPageProps from './getPageData'

type PageProps = {
  params: Promise<{ slug: string[] }>
}

export const revalidate = 10

const Page = async ({ params }: PageProps) => {
  const { slug } = await params
  const data = await getPageProps(slug)

  if (!data) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">{data.name}</h1>
    </div>
  )
}

export default Page
