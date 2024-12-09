import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { TestimonialEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Entry } from 'contentful'
import Testimonial from './Testimonial'

export type TestimonialsProps = {
  fields: {
    title: string
    richText?: Document
    testimonials: (
      | Entry<TestimonialEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Testimonials = ({ fields }: TestimonialsProps) => {
  const { title, richText, testimonials } = fields

  return (
    <section id="testimonials" className="bg-pink-100 px-5 py-20">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="grid-rows-auto grid grid-cols-1 gap-5 py-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {testimonials.map((testimonial, i) => {
            if (!testimonial) return null

            return <Testimonial key={i} fields={testimonial.fields} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
