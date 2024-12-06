import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { FeatureEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import Feature from './Feature'

export type FeaturesProps = {
  fields: {
    title: string
    richText?: Document
    features: (
      | Entry<FeatureEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Features = ({ fields }: FeaturesProps) => {
  const { title, richText, features } = fields

  return (
    <section className="bg-green-100 px-5 py-20">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="grid-rows-auto grid grid-cols-1 gap-5 py-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {features.map((features, i) => {
            if (!features) return null

            return <Feature key={i} fields={features.fields} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
