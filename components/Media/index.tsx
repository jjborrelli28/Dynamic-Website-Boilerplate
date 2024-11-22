import Image, { ImageProps } from './Image'
import Video, { VideoProps } from './Video'

type MediaProps = ImageProps | VideoProps

const Media = ({ fields, ...props }: MediaProps) => {
  const type = fields?.file?.contentType

  if (type?.startsWith('image')) {
    return <Image fields={fields} alt={fields?.description ?? ''} {...props} />
  } else if (type?.startsWith('video')) {
    return <Video fields={fields} />
  } else {
    return null
  }
}

export default Media
