import parseSlug from '@/helpers/parseSlug'
import { EntryFieldTypes } from 'contentful'
import client from './client'

type MetadataFields = {
  title: EntryFieldTypes.Text
  description: EntryFieldTypes.Text
}

type MetadataEntrySkeleton = {
  contentTypeId: 'metadata'
  fields: MetadataFields
}

type CTAFields = {
  name: EntryFieldTypes.Text[]
  url: EntryFieldTypes.Text[]
  icon: EntryFieldTypes.AssetLink
}

export type CTAEntrySkeleton = {
  contentTypeId: 'cta'
  fields: CTAFields
}

type HeaderFields = {
  name: EntryFieldTypes.Text
  logo: EntryFieldTypes.AssetLink
  navigationLinks: EntryFieldTypes.EntryLink<CTAEntrySkeleton>[]
}

type HeaderEntrySkeleton = {
  contentTypeId: 'header'
  fields: HeaderFields
}

export type PageFields = {
  name: EntryFieldTypes.Text
  slug: EntryFieldTypes.Text
  metadata?: EntryFieldTypes.EntryLink<MetadataEntrySkeleton>
  header?: EntryFieldTypes.EntryLink<HeaderEntrySkeleton>
}

export type PageEntrySkeleton = {
  contentTypeId: 'page'
  fields: PageFields
}

const getPageData = async (slug: string[]) => {
  const preview = slug?.[slug?.length - 1] === 'preview'
  const parsedSlug = parseSlug(slug, preview)

  try {
    const response = await client(
      preview,
    ).withoutUnresolvableLinks.getEntries<PageEntrySkeleton>({
      content_type: 'page',
      'fields.slug': parsedSlug,
      include: 3,
    })

    const pageData = response.items[0]?.fields

    if (!pageData) {
      console.warn(`Page not found for slug: ${parsedSlug}`)

      return null
    }

    return pageData
  } catch (error) {
    console.error(`Error fetching page data: ${error}`)

    return null
  }
}

export default getPageData
