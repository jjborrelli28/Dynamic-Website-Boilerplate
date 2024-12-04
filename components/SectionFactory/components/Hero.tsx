import Media from '@/components/Media'
import RichText from '@/components/RichText'
import { type CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { type Document } from '@contentful/rich-text-types'
import { type Asset, type Entry } from 'contentful'

export type HeroProps = {
  fields: {
    title: string
    subtitle: string
    richText: Document
    media: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    cta:
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
  }
}

const Hero = ({ fields }: HeroProps) => {
  const { richText, media } = fields

  return (
    <section className="min-h-screen bg-white">
      <div className="container mx-auto px-5 py-16">
        <Media fields={media?.fields} fill className="-z-10 object-cover" />
        <RichText content={richText} />
      </div>
    </section>
  )
}

export default Hero
