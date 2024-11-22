export type FooterProps = {
  fields: {
    name: string
  }
}

const Footer = ({ fields }: FooterProps) => {
  console.log(fields)

  return <footer>Footer</footer>
}

export default Footer
