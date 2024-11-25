export type SpotlightProps = {
  fields: {
    name: string
  }
}

const Spotlight = ({ fields }: SpotlightProps) => {
  console.log(fields)

  return (
    <section className="h-[75vh] bg-violet-500">
      <div className="container mx-auto px-5 pt-16">
        <h2 className="text-5xl font-bold">{fields.name}</h2>
      </div>
    </section>
  )
}

export default Spotlight
