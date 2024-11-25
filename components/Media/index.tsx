import Image, { ImageProps } from './components/Image'
import Video, { VideoProps } from './components/Video'

type MediaProps = Omit<ImageProps, 'alt'> | VideoProps

const Media = (props: MediaProps) => {
  const type = props.fields?.file?.contentType

  if (!type) return null

  return type?.startsWith('image') ? (
    <Image
      {...{
        alt: props.fields?.description ?? '',
        ...props,
      }}
    />
  ) : type?.startsWith('video') ? (
    <Video {...props} />
  ) : null
}

export default Media
