import Media from '@/components/Media'
import RichText from '@/components/RichText'
import type { imagePositions } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import clsx from 'clsx'
import type { Asset } from 'contentful'
import { Heading3 } from '../../../Typography'

export type SpotlightProps = {
  fields: {
    title: string
    subtitle?: string
    richText: Document
    media: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    imagePosition?: imagePositions
  }
}

const imagePositions = {
  Left: {
    image: 'order-1',
    content: 'order-2',
  },
  Right: {
    image: 'order-2',
    content: 'order-1',
  },
}

const Spotlight = ({ fields }: SpotlightProps) => {
  const { title, richText, media, imagePosition = 'Left' } = fields

  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
      <div
        className={clsx(
          imagePositions[imagePosition].content,
          'flex flex-col justify-center lg:p-20',
        )}
      >
        <Heading3>{title}</Heading3>

        <RichText content={richText} />
      </div>

      <Media
        fields={media?.fields}
        height={media?.fields.file?.details.image?.height}
        width={media?.fields.file?.details.image?.width}
        className={clsx(imagePositions[imagePosition].image)}
      />
    </div>
  )
}

export default Spotlight
