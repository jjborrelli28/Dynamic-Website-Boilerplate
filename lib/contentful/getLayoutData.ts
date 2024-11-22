import parseSlug from '@/helpers/parseSlug'
import client from './client'
import { PageEntrySkeleton } from './getPageData'

const getLayoutData = async (slug: string[]) => {
  const preview = slug?.[slug?.length - 1] === 'preview'
  const parsedSlug = parseSlug(slug, preview)

  try {
    const response = await client(
      preview,
    ).withoutUnresolvableLinks.getEntries<PageEntrySkeleton>({
      content_type: 'page',
      'fields.slug': parsedSlug,
      select: ['fields.metadata', 'fields.header', 'fields.footer'],
      include: 3,
    })

    const metadata = response.items[0]?.fields?.metadata
    const header = response.items[0]?.fields?.header
    const footer = response.items[0]?.fields?.footer

    if (!metadata) {
      console.warn(`Metadata not found for slug: ${parsedSlug}`)
    }

    if (!header) {
      console.warn(`Header not found for slug: ${parsedSlug}`)
    }

    if (!footer) {
      console.warn(`Footer not found for slug: ${parsedSlug}`)
    }

    if (!metadata && !header && !footer)
      return { metadata: null, header: null, footer: null }

    return { metadata, header, footer }
  } catch (error) {
    console.error(`Error fetching layout data: ${error}`)

    return { metadata: null, header: null, footer: null }
  }
}

export default getLayoutData
