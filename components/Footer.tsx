export type FooterProps = {
  fields: {
    name: string
  }
}

const Footer = ({ fields }: FooterProps) => {
  console.log(fields)

  return (
    <footer className="h-[50vh] bg-red-500">
      <div className="px- container mx-auto pt-10">
        <h2 className="text-5xl font-bold">{fields.name}</h2>
      </div>
    </footer>
  )
}

export default Footer
