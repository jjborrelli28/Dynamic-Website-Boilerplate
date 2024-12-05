import type { TestimonialEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'

export type TestimonialsProps = {
  fields: {
    title: string
    richText: Document
    testimonials: (
      | Entry<TestimonialEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Testimonials = ({ fields }: TestimonialsProps) => {
  console.log(fields)

  return <div>Testimonials</div>
}

export default Testimonials
