import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { FAQEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import FAQ from './FAQ'

export type FrequentlyAskedQuestionsProps = {
  fields: {
    title: string
    richText?: Document
    faqs: (
      | Entry<FAQEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const FrequentlyAskedQuestions = ({
  fields,
}: FrequentlyAskedQuestionsProps) => {
  const { title, richText, faqs } = fields

  return (
    <section id="frequentlyAskedQuestions" className="bg-gray-100 px-5 py-20">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="flex flex-col py-10">
          {faqs.map((faq, i) => {
            if (!faq) return null

            return <FAQ key={i} fields={faq.fields} />
          })}
        </div>
      </div>
    </section>
  )
}

export default FrequentlyAskedQuestions
