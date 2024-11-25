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
    <section className="min-h-screen">
      <Media fields={media?.fields} fill className="-z-10 object-cover" />
      <div>Hero</div>
    </section>
  )
}

export default Hero
