import { AssetFields } from 'contentful'
import NextImage, { ImageProps as NextImageProps } from 'next/image'

export type ImageProps = {
  fields: AssetFields | undefined
} & Omit<NextImageProps, 'src'>

const Image = ({ fields, ...props }: ImageProps) => {
  const src = fields?.file?.url ? `https:${fields.file.url}` : undefined

  if (!src) return null

  const imageProps = {
    src,

    ...props,
  }

  return <NextImage {...imageProps} />
}

export default Image
