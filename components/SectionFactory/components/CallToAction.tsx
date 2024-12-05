import type { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'

export type CallToActionProps = {
  fields: {
    title: string
    richText: Document
    ctas: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const CallToAction = ({ fields }: CallToActionProps) => {
  console.log(fields)

  return <div>CallToAction</div>
}

export default CallToAction
