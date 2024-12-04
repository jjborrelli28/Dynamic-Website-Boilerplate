import {
  type BlogEntrySkeleton,
  type CallToActionEntrySkeleton,
  type FeaturesEntrySkeleton,
  type FrequentlyAskedQuestionsEntrySkeleton,
  type GalleryEntrySkeleton,
  type HeroEntrySkeleton,
  type SpotlightEntrySkeleton,
  type TestimonialsEntrySkeleton,
} from '@/lib/contentful/getPageData'
import { type Entry } from 'contentful'
import DynamicSection from './DynamicSection'
import { type BlogProps } from './components/Blog'
import { type CallToActionProps } from './components/CallToAction'
import { type FeaturesProps } from './components/Features'
import { type FrequentlyAskedQuestionsProps } from './components/FrequentlyAskedQuestions'
import { type GalleryProps } from './components/Gallery'
import { type HeroProps } from './components/Hero'
import { type SpotlightProps } from './components/Spotlight'
import { type TestimonialsProps } from './components/Testimonials'

type Section =
  | Entry<BlogEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<CallToActionEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<FeaturesEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<
      FrequentlyAskedQuestionsEntrySkeleton,
      'WITHOUT_UNRESOLVABLE_LINKS',
      string
    >
  | Entry<GalleryEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<HeroEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<SpotlightEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<TestimonialsEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | undefined

type SectionFactoryProps = {
  sections: Section[] | undefined
}

const SectionFactory = ({ sections }: SectionFactoryProps) => {
  if (!sections) return null

  return sections.map((section, i) => {
    if (!section) return null

    const contentTypeId = section.sys.contentType.sys.id
    const fields = section.fields

    switch (contentTypeId) {
      case 'blog':
        return (
          <DynamicSection.blog key={i} fields={fields as BlogProps['fields']} />
        )
      case 'callToAction':
        return (
          <DynamicSection.callToAction
            key={i}
            fields={fields as CallToActionProps['fields']}
          />
        )
      case 'features':
        return (
          <DynamicSection.features
            key={i}
            fields={fields as FeaturesProps['fields']}
          />
        )

      case 'frequentlyAskedQuestions':
        return (
          <DynamicSection.frequentlyAskedQuestions
            key={i}
            fields={fields as FrequentlyAskedQuestionsProps['fields']}
          />
        )
      case 'gallery':
        return (
          <DynamicSection.gallery
            key={i}
            fields={fields as GalleryProps['fields']}
          />
        )
      case 'hero':
        return (
          <DynamicSection.hero key={i} fields={fields as HeroProps['fields']} />
        )

      case 'spotlight':
        return (
          <DynamicSection.spotlight
            key={i}
            fields={fields as SpotlightProps['fields']}
          />
        )
      case 'testimonials':
        return (
          <DynamicSection.testimonials
            key={i}
            fields={fields as TestimonialsProps['fields']}
          />
        )
      default:
        return null
    }
  })
}

export default SectionFactory