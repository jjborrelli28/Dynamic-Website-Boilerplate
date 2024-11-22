export type SpotlightProps = {
  fields: {
    name: string
  }
}

const Spotlight = ({ fields }: SpotlightProps) => {
  console.log(fields)

  return <div>Spotlight</div>
}

export default Spotlight
