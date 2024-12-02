import { type CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { type Asset, type Entry } from 'contentful'
import CTA from './CTA'
import Media from './Media'
import clsx from 'clsx'

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
    <header className="sticky left-0 top-0 z-50 p-5 shadow-xl backdrop-blur-md">
      <div
        className={clsx(
          'container mx-auto flex items-center',
          logo ? 'justify-between' : 'justify-end',
        )}
      >
        {logo && (
          <CTA href="/" aria-label="Logo">
            <Media
              fields={logo.fields}
              height={logo.fields.file?.details.image?.height}
              width={logo.fields.file?.details.image?.width}
              className="max-h-10 max-w-10"
            />
          </CTA>
        )}
        <nav className="text-md flex gap-5">
          {navigationLinks.map((navigationLink, i) => {
            if (!navigationLink) return null

            const { label, url } = navigationLink?.fields

            return (
              <CTA key={i} href={url}>
                {label}
              </CTA>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

export default Header
