import type { PostEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'

export type FeaturesProps = {
  fields: {
    title: string
    richText: Document
    features: (
      | Entry<PostEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Features = ({ fields }: FeaturesProps) => {
  console.log(fields)

  return <div>Features</div>
}

export default Features
