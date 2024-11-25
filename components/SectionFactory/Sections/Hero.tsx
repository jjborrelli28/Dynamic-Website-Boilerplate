import Media from '@/components/Media'
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
  const { media } = fields

  return (
    <section className="min-h-screen bg-blue-500">
      <div className="container mx-auto px-5 pt-16">
        <Media fields={media?.fields} fill className="-z-10 object-cover" />
        <h1 className="text-5xl font-bold">{fields.name}</h1>
      </div>
    </section>
  )
}

export default Hero
