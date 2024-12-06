import parseSlug from '@/helpers/parseSlug'
import type { EntryFieldTypes } from 'contentful'
import client from './client'

export type Icons =
  | 'GitHub'
  | 'LinkedIn'
  | 'Facebook'
  | 'Instagram'
  | 'Twitter'
  | 'X'
  | 'YouTube'
  | 'WhatsApp'
  | 'ArrowForward'
  | 'ArrowBack'
  | 'ArrowUpward'
  | 'ArrowDownward'
  | 'Add'
  | 'Delete'
  | 'Edit'
  | 'Check'
  | 'Close'
  | 'Search'
  | 'Success'
  | 'Warning'
  | 'Error'
  | 'Info'

export type IconOptions =
  | 'Icon on the left'
  | 'Is an icon'
  | 'Icon on the right'

export type CTAEntrySkeleton = {
  contentTypeId: 'cta'
  fields: {
    label: EntryFieldTypes.Text
    url: EntryFieldTypes.Text
    icon?: EntryFieldTypes.Text<Icons>
    iconOption?: EntryFieldTypes.Text<IconOptions>
  }
}

// Global components

type MetadataEntrySkeleton = {
  contentTypeId: 'metadata'
  fields: {
    title: EntryFieldTypes.Text
    description: EntryFieldTypes.Text
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

type FooterEntrySkeleton = {
  contentTypeId: 'footer'
  fields: {
    name: EntryFieldTypes.Text
    logo?: EntryFieldTypes.AssetLink
    navigationLinks?: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CTAEntrySkeleton>
    >
    socialLinks: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<CTAEntrySkeleton>
    >
    richText?: EntryFieldTypes.RichText
    copyright: EntryFieldTypes.Text
  }
}

// Global components and sections

export type PostEntrySkeleton = {
  contentTypeId: 'post'
  fields: {
    title: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    excerpt: EntryFieldTypes.Text
    thumbnail: EntryFieldTypes.AssetLink
    richText: EntryFieldTypes.RichText
    publishDate: EntryFieldTypes.Text
  }
}

export type BlogEntrySkeleton = {
  contentTypeId: 'blog'
  fields: {
    title: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    posts: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<PostEntrySkeleton>>
  }
}

export type CallToActionEntrySkeleton = {
  contentTypeId: 'callToAction'
  fields: {
    title: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    ctas: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<CTAEntrySkeleton>>
  }
}

export type FeatureEntrySkeleton = {
  contentTypeId: 'feature'
  fields: {
    title: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    icon: EntryFieldTypes.AssetLink
  }
}

export type FeaturesEntrySkeleton = {
  contentTypeId: 'features'
  fields: {
    title: EntryFieldTypes.Text
    richText?: EntryFieldTypes.RichText
    features: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<FeatureEntrySkeleton>
    >
  }
}

export type FAQEntrySkeleton = {
  contentTypeId: 'faq'
  fields: {
    question: EntryFieldTypes.Text
    answer: EntryFieldTypes.Text
  }
}

export type FrequentlyAskedQuestionsEntrySkeleton = {
  contentTypeId: 'frequentlyAskedQuestions'
  fields: {
    title: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    medias: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<FAQEntrySkeleton>>
  }
}

export type GalleryEntrySkeleton = {
  contentTypeId: 'gallery'
  fields: {
    title: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    medias: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  }
}

export type HeroEntrySkeleton = {
  contentTypeId: 'hero'
  fields: {
    title: EntryFieldTypes.Text
    subtitle?: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    media?: EntryFieldTypes.AssetLink
    cta?: EntryFieldTypes.EntryLink<CTAEntrySkeleton>
  }
}

export type imagePositions = 'Left' | 'Right'

export type SpotlightEntrySkeleton = {
  contentTypeId: 'spotlight'
  fields: {
    title: EntryFieldTypes.Text
    subtitle?: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    media: EntryFieldTypes.AssetLink
    imagePosition?: EntryFieldTypes.Text<imagePositions>
  }
}

export type SpotlightsEntrySkeleton = {
  contentTypeId: 'spotlights'
  fields: {
    title: EntryFieldTypes.Text
    subtitle?: EntryFieldTypes.Text
    richText?: EntryFieldTypes.RichText
    spotlights: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<SpotlightEntrySkeleton>
    >
  }
}

export type TestimonialEntrySkeleton = {
  contentTypeId: 'testimonial'
  fields: {
    name: EntryFieldTypes.Text
    role: EntryFieldTypes.Text
    richText: EntryFieldTypes.RichText
    photo: EntryFieldTypes.AssetLink
  }
}

export type TestimonialsEntrySkeleton = {
  contentTypeId: 'testimonials'
  fields: {
    title: EntryFieldTypes.Text
    richText?: EntryFieldTypes.RichText
    testimonials: EntryFieldTypes.Array<
      EntryFieldTypes.EntryLink<TestimonialEntrySkeleton>
    >
  }
}

// Page

export type PageEntrySkeleton = {
  contentTypeId: 'page'
  fields: {
    name: EntryFieldTypes.Text
    slug: EntryFieldTypes.Text
    metadata?: EntryFieldTypes.EntryLink<MetadataEntrySkeleton>
    header?: EntryFieldTypes.EntryLink<HeaderEntrySkeleton>
    sections?: EntryFieldTypes.Array<
      | EntryFieldTypes.EntryLink<BlogEntrySkeleton>
      | EntryFieldTypes.EntryLink<CallToActionEntrySkeleton>
      | EntryFieldTypes.EntryLink<FeaturesEntrySkeleton>
      | EntryFieldTypes.EntryLink<FrequentlyAskedQuestionsEntrySkeleton>
      | EntryFieldTypes.EntryLink<GalleryEntrySkeleton>
      | EntryFieldTypes.EntryLink<HeroEntrySkeleton>
      | EntryFieldTypes.EntryLink<SpotlightsEntrySkeleton>
      | EntryFieldTypes.EntryLink<TestimonialsEntrySkeleton>
    >
    footer?: EntryFieldTypes.EntryLink<FooterEntrySkeleton>
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
