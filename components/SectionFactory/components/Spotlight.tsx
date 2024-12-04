import RichText from '@/components/RichText'
import { type Document } from '@contentful/rich-text-types'
import { type Asset } from 'contentful'

export type SpotlightProps = {
  fields: {
    title: string
    subtitle: string
    richText: Document
    media: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  }
}

const Spotlight = ({ fields }: SpotlightProps) => {
  const { richText } = fields

  return (
    <section className="min-h-[75vh] bg-violet-500">
      <div className="container mx-auto px-5 py-16">
        <RichText content={richText} />
      </div>
    </section>
  )
}

export default Spotlight
