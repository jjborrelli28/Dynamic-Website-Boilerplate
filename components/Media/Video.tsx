import { AssetFields } from 'contentful'

export type VideoProps = {
  fields: AssetFields | undefined
}

const Video = ({ fields }: VideoProps) => {
  console.log(fields)

  return <div>Video</div>
}

export default Video
