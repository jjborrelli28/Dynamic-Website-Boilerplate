export type FooterProps = {
  fields: {
    name: string
  }
}

const Footer = ({ fields }: FooterProps) => {
  console.log(fields)

  return <div>Footer</div>
}

export default Footer
