import type { PostEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'

export type BlogProps = {
  fields: {
    title: string
    richText: Document
    posts: (
      | Entry<PostEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Blog = ({ fields }: BlogProps) => {
  console.log(fields)

  return <div>Blog</div>
}

export default Blog
