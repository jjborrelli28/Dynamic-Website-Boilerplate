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
import dynamicSectionComponents from './dynamicSectionComponents'

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

    const Section = dynamicSectionComponents[section.sys.contentType.sys.id]

    return <Section key={i} fields={section.fields} />
  })
}

export default SectionFactory