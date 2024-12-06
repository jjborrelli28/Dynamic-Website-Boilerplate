import CTA from '@/components/CTA'
import Media from '@/components/Media'
import RichText from '@/components/RichText'
import { Heading1, Heading2 } from '@/components/Typography'
import type { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Asset, Entry } from 'contentful'

export type HeroProps = {
  fields: {
    title: string
    subtitle?: string
    richText: Document
    media?: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    cta?:
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
  }
}

const Hero = ({ fields }: HeroProps) => {
  const { title, subtitle, richText, media, cta } = fields

  return (
    <section className="relative -mt-20 min-h-screen bg-blue-100 px-5 py-20">
      <div className="container relative z-10 mx-auto flex flex-col gap-5 py-20">
        <Heading1>{title}</Heading1>

        {subtitle && <Heading2 className="xl:w-1/2">{subtitle}</Heading2>}

        <RichText content={richText} className="xl:w-1/2" />

        {cta && (
          <CTA href={cta?.fields.url} isButton>
            {cta?.fields.label}
          </CTA>
        )}
      </div>

      {media && <Media fields={media?.fields} fill className="object-cover" />}
    </section>
  )
}

export default Hero
