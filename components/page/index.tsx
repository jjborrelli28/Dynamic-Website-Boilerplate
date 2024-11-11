import NotFound from '../404NotFound'
import getPageProps from './getPageData'

export const revalidate = 10

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const data = await getPageProps(slug)

  if (!data) {
    return <NotFound />
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold">{data.name}</h1>
    </div>
  )
}

export default Page
