import { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { Asset, Entry } from 'contentful'

type HeaderFields = {
  name: string
  logo: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
  navigationLinks:
    | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>[]
    | undefined
}

const Header = ({ fields }: { fields: HeaderFields }) => {
  console.log(fields)

  return <header>Header</header>
}

export default Header
