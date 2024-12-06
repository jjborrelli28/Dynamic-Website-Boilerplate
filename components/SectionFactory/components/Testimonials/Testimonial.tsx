import Media from '@/components/Media'
import RichText from '@/components/RichText'
import { Heading3, Paragraph } from '@/components/Typography'
import type { Document } from '@contentful/rich-text-types'
import type { Asset } from 'contentful'

type Testimonial = {
  fields: {
    name: string
    role: string
    richText: Document
    photo: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  }
}

const Testimonial = ({ fields }: Testimonial) => {
  const { name, role, richText, photo } = fields

  return (
    <div className="flex flex-col gap-y-10 border border-pink-300 p-5">
      <Media
        fields={photo?.fields}
        height={photo?.fields.file?.details.image?.height}
        width={photo?.fields.file?.details.image?.width}
        className="w-full"
      />

      <div className="flex flex-col gap-y-2.5">
        <RichText content={richText} />
        <Heading3 className="!mb-0 text-xl tracking-wide">{name}</Heading3>
        <Paragraph className="-mt-2.5 tracking-wide">{role}</Paragraph>
      </div>
    </div>
  )
}

export default Testimonial
