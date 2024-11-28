import Media from '@/components/Media'
import { RichText } from '@/components/RichText'
import { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

export type HeroProps = {
  fields: {
    name: string
    content: Document
    media: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  }
}

const Hero = ({ fields }: HeroProps) => {
  const { content, media } = fields

  return (
    <section className="min-h-screen bg-blue-500">
      <div className="container mx-auto px-5 py-16">
        <Media fields={media?.fields} fill className="-z-10 object-cover" />
        <RichText content={content} />
      </div>
    </section>
  )
}

export default Hero
