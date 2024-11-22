export type HeroProps = {
  fields: {
    name: string
  }
}

const Hero = ({ fields }: HeroProps) => {
  console.log(fields)

  return <div>Hero</div>
}

export default Hero
