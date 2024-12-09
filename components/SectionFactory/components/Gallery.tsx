import Media from '@/components/Media'
import RichText from '@/components/RichText'
import { Heading2 } from '@/components/Typography'
import type { Document } from '@contentful/rich-text-types'
import type { Asset } from 'contentful'

export type GalleryProps = {
  fields: {
    title: string
    richText?: Document
    medias: (Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[]
  }
}

const Gallery = ({ fields }: GalleryProps) => {
  const { title, richText, medias } = fields

  return (
    <section id="gallery" className="bg-teal-100 px-5 py-10">
      <div className="container mx-auto">
        <Heading2>{title}</Heading2>

        {richText && <RichText content={richText} />}

        <div className="grid-rows-auto grid grid-cols-1 gap-5 py-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-12">
          {medias.map((media, i) => {
            if (!media) return null

            return (
              <Media
                key={i}
                fields={media?.fields}
                height={media?.fields.file?.details.image?.height}
                width={media?.fields.file?.details.image?.width}
                className="h-full w-full object-cover"
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Gallery
