import parseSlug from '@/helpers/parseSlug'
import { EntryFieldTypes } from 'contentful'
import client from './client'

type MetadataEntrySkeleton = {
  contentTypeId: 'metadata'
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
  }
}

export type CTAEntrySkeleton = {
  contentTypeId: 'cta'
  fields: {
    name: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    icon?: EntryFieldTypes.AssetLink
  }
}

type HeaderEntrySkeleton = {
  contentTypeId: 'header'
  fields: {
    name: EntryFieldTypes.Text
    logo?: EntryFieldTypes.AssetLink
    navigationLinks: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CTAEntrySkeleton>
    >
  }
}

export type HeroEntrySkeleton = {
  contentTypeId: 'hero'
  fields: {
    name: EntryFieldTypes.Text
  }
}

export type SpotlightEntrySkeleton = {
  contentTypeId: 'spotlight'
  fields: {
    name: EntryFieldTypes.Text
  }
}

export type FooterEntrySkeleton = {
  contentTypeId: 'footer'
  fields: {
    name: EntryFieldTypes.Text
  }
}

export type PageEntrySkeleton = {
  contentTypeId: 'page'
  fields: {
    name: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    metadata?: EntryFieldTypes.EntryLink<MetadataEntrySkeleton>
    header?: EntryFieldTypes.EntryLink<HeaderEntrySkeleton>
    sections?: EntryFieldTypes.Array<
      | EntryFieldTypes.EntryLink<HeroEntrySkeleton>
      | EntryFieldTypes.EntryLink<SpotlightEntrySkeleton>
      | EntryFieldTypes.EntryLink<FooterEntrySkeleton>
    >
  }
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
