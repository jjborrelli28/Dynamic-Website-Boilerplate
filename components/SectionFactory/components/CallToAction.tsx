import CTA from '@/components/CTA'
import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'

export type CallToActionProps = {
  fields: {
    title: string
    richText?: Document
    ctas: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const CallToAction = ({ fields }: CallToActionProps) => {
  const { title, richText, ctas } = fields

  return (
    <section className="bg-indigo-100 px-5 py-20">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="my-10 flex justify-center gap-5">
          {ctas.map((cta, i) => {
            if (!cta) return null

            const { label, url } = cta.fields

            return (
              <CTA key={i} href={url} isButton variant={i ? 'fill' : 'outline'}>
                {label}
              </CTA>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CallToAction
