import { type AssetFields } from 'contentful'
import NextImage, { type ImageProps as NextImageProps } from 'next/image'

export interface ImageProps extends Omit<NextImageProps, 'src'> {
  fields: AssetFields | undefined
}

const Image = (props: ImageProps) => {
  const { fields, ...restProps } = props

  const src = fields?.file?.url ? `https:${fields.file.url}` : undefined

  if (!src) return null

  return <NextImage {...{ src, ...restProps }} />
}

export default Image
