import {
  HeroEntrySkeleton,
  SpotlightEntrySkeleton,
} from '@/lib/contentful/getPageData'
import { Entry } from 'contentful'
import dynamicSectionComponents from './dynamicSectionComponents'

type Section =
  | Entry<HeroEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<SpotlightEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
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
