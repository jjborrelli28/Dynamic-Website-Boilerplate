import { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { Asset, Entry } from 'contentful'
import CTA from '../app/CTA'
import Media from './Media'

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
  const { logo, navigationLinks } = fields

  return (
    <header className="sticky left-0 top-0 z-50 p-5 backdrop-blur-lg">
      {logo && <Media fields={logo.fields} />}
      <nav>
        {navigationLinks.map((navigationLink, i) => {
          if (!navigationLink) return null

          const { name, url } = navigationLink?.fields

          return (
            <CTA key={i} href={url}>
              {name}
            </CTA>
          )
        })}
      </nav>
    </header>
  )
}

export default Header
