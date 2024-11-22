export type HeroProps = {
  fields: {
    name: string
  }
}

const Hero = ({ fields }: HeroProps) => {
  console.log(fields)

  return <section>Hero</section>
}

export default Hero
