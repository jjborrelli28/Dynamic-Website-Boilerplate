import Media from '@/components/Media'
import RichText from '@/components/RichText'
import { Heading3 } from '@/components/Typography'
import type { Document } from '@contentful/rich-text-types'
import { Asset } from 'contentful'

type FeatureProps = {
  fields: {
    title: string
    richText: Document
    icon: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  }
}

const Feature = ({ fields }: FeatureProps) => {
  const { title, richText, icon } = fields

  return (
    <div className="flex flex-col gap-y-5">
      <div className="flex items-center gap-x-5">
        <Media
          fields={icon?.fields}
          height={icon?.fields.file?.details.image?.height}
          width={icon?.fields.file?.details.image?.width}
          className="h-10 w-10"
        />
        <Heading3 className="mb-0">{title}</Heading3>
      </div>

      <RichText content={richText} />
    </div>
  )
}

export default Feature
