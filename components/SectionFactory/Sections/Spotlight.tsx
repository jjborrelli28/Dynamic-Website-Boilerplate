export type SpotlightProps = {
  fields: {
    name: string
  }
}

const Spotlight = ({ fields }: SpotlightProps) => {
  console.log(fields)

  return <section>Spotlight</section>
}

export default Spotlight
