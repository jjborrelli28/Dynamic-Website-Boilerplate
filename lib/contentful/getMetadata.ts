import parseSlug from '@/helpers/parseSlug'
import client from './client'
import { PageEntrySkeleton } from './getPageData'

const defaultMetadata = {
  title: 'Next App',
  description:
    'Next App created with Typescript, Tailwind and Contentful as CMS',
}

const getMetadata = async (slug: string[]) => {
  const preview = slug?.[slug?.length - 1] === 'preview'
  const parsedSlug = parseSlug(slug, preview)

  try {
    const response = await client(
      preview,
    ).withoutUnresolvableLinks.getEntries<PageEntrySkeleton>({
      content_type: 'page',
      'fields.slug': parsedSlug,
      select: ['fields.metadata'],
      include: 3,
    })

    const metadata = response.items[0]?.fields?.metadata

    if (!metadata) {
      console.warn(`Metadata not found for slug: ${parsedSlug}`)

      return defaultMetadata
    }

    return metadata.fields
  } catch (error) {
    console.error(`Error fetching metadata: ${error}`)

    return defaultMetadata
  }
}

export default getMetadata
