import {
  FooterEntrySkeleton,
  HeroEntrySkeleton,
  SpotlightEntrySkeleton,
} from '@/lib/contentful/getPageData'
import { Entry } from 'contentful'
import SECTION_LIST from './Sections/SECTION_LIST'

type Section =
  | Entry<HeroEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<SpotlightEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | Entry<FooterEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
  | undefined

type SectionFactoryProps = {
  sections: Section[] | undefined
}

const SectionFactory = ({ sections }: SectionFactoryProps) => {
  if (!sections) return null

  return sections.map((section: Section) => {
    if (!section) return null

    const Section = SECTION_LIST[section.sys.contentType.sys.id]

    return <Section key={section.fields.name} fields={section.fields} />
  })
}

export default SectionFactory
