import parseSlug from '@/helpers/parseSlug'
import client from './client'
import { PageEntrySkeleton } from './getPageData'

const getHeader = async (slug: string[]) => {
  const preview = slug?.[slug?.length - 1] === 'preview'
  const parsedSlug = parseSlug(slug, preview)

  try {
    const response = await client(
      preview,
    ).withoutUnresolvableLinks.getEntries<PageEntrySkeleton>({
      content_type: 'page',
      'fields.slug': parsedSlug,
      select: ['fields.header'],
      include: 6,
    })

    const header = response.items[0]?.fields?.header

    if (!header) {
      console.warn(`Header not found for slug: ${parsedSlug}`)

      return null
    }

    return header.fields
  } catch (error) {
    console.error(`Error fetching header: ${error}`)

    return null
  }
}

export default getHeader
