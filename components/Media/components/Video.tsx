import type { AssetFields } from 'contentful'

export type VideoProps = {
  fields: AssetFields | undefined
  className?: string
}

const Video = (props: VideoProps) => {
  const src = props.fields?.file?.url

  if (!src) return null

  return (
    <video controls width="100%" className={props.className}>
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default Video
