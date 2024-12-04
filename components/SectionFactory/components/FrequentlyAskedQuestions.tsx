import { type FAQEntrySkeleton } from '@/lib/contentful/getPageData'
import { type Document } from '@contentful/rich-text-types'
import { type Entry } from 'contentful'

export type FrequentlyAskedQuestionsProps = {
  fields: {
    title: string
    richText: Document
    medias: (
      | Entry<FAQEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const FrequentlyAskedQuestions = ({
  fields,
}: FrequentlyAskedQuestionsProps) => {
  console.log(fields)

  return <div>FrequentlyAskedQuestions</div>
}

export default FrequentlyAskedQuestions
