import { type CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import { type Document } from '@contentful/rich-text-types'
import { type Asset, type Entry } from 'contentful'
import { Fragment } from 'react'
import CTA from './CTA'
import Media from './Media'
import RichText from './RichText'
import { Heading2, ListItem, Paragraph, UnorderedList } from './Typography'

export type FooterProps = {
  fields: {
    name: string
    logo?: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    navigationLinks: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
    socialLinks: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
    richText: Document
    copyright: string
  }
}

const Footer = ({ fields }: FooterProps) => {
  const { name, logo, navigationLinks, socialLinks, richText, copyright } =
    fields

  return (
    <footer className="bg-orange-200 py-10">
      <div className="container mx-auto flex flex-col gap-y-5 px-5">
        <div className="mb-5 flex items-center gap-x-5">
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
          <Heading2 className="mb-0">{name}</Heading2>
        </div>

        <RichText content={richText} className="text-center" />

        {navigationLinks && (
          <nav className="flex justify-center">
            <UnorderedList className="mb-0 flex list-none gap-x-2.5">
              {navigationLinks.map((navigationLink, i) => {
                if (!navigationLink) return null

                const { label, url } = navigationLink.fields

                return (
                  <Fragment key={i}>
                    <ListItem className="ml-0">
                      <CTA href={url} className="font-medium">
                        {label}
                      </CTA>
                    </ListItem>
                    {i !== navigationLinks.length - 1 && (
                      <span className="font-semibold">|</span>
                    )}
                  </Fragment>
                )
              })}
            </UnorderedList>
          </nav>
        )}

        <div className="flex justify-center">
          <Paragraph className="mb-0 text-lg font-semibold">
            {copyright}
          </Paragraph>
        </div>

        {socialLinks && (
          <nav className="flex justify-center gap-x-5">
            {socialLinks.map((socialLink, i) => {
              if (!socialLink) return null

              const { label, url, icon, iconOption } = socialLink.fields

              return (
                <CTA
                  key={i}
                  href={url}
                  icon={icon}
                  iconOption={iconOption}
                  iconClassName="text-3xl"
                >
                  {label}
                </CTA>
              )
            })}
          </nav>
        )}
      </div>
    </footer>
  )
}

export default Footer
