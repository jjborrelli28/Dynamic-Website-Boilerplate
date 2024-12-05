import type { Document } from '@contentful/rich-text-types'
import type { Asset } from 'contentful'

export type GalleryProps = {
  fields: {
    title: string
    richText: Document
    medias: (Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined)[]
  }
}

const Gallery = ({ fields }: GalleryProps) => {
  console.log(fields)

  return <div>Gallery</div>
}

export default Gallery
