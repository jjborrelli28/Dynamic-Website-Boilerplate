import { RichText } from '@/components/RichText'
import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

export type SpotlightProps = {
  fields: {
    name: string
    content: Document
    media: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  }
}

const Spotlight = ({ fields }: SpotlightProps) => {
  const { content } = fields

  return (
    <section className="min-h-[75vh] bg-violet-500">
      <div className="container mx-auto px-5 py-16">
        <RichText content={content} />
      </div>
    </section>
  )
}

export default Spotlight
