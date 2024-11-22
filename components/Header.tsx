import { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { Asset, Entry } from 'contentful'

type HeaderProps = {
  fields: {
    name: string
    logo?: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    navigationLinks: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
  }
}

const Header = ({ fields }: HeaderProps) => {
  console.log(fields)

  return <header>Header</header>
}

export default Header
