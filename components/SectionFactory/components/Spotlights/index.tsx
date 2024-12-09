import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { SpotlightEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import Spotlight from './Spotlight'

export type SpotlightsProps = {
  fields: {
    title: string
    subtitle?: string
    richText?: Document
    spotlights: (
      | Entry<SpotlightEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const index = ({ fields }: SpotlightsProps) => {
  const { title, richText, spotlights } = fields

  return (
    <section id="spotlights" className="bg-yellow-100 px-5 py-20">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="flex flex-col lg:py-10">
          {spotlights.map((spotlight, i) => {
            if (!spotlight) return null

            return <Spotlight key={i} fields={spotlight?.fields} />
          })}
        </div>
      </div>
    </section>
  )
}

export default index
