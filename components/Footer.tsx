import type { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import type { Document } from '@contentful/rich-text-types'
import type { Asset, Entry } from 'contentful'
import { Fragment } from 'react'
import CTA from './CTA'
import Media from './Media'
import RichText from './RichText'
import { ListItem, Paragraph, UnorderedList } from './Typography'

export type FooterProps = {
  fields: {
    name: string
    logo?: Asset<'WITHOUT_UNRESOLVABLE_LINKS', string> | undefined
    navigationLinks?: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
    socialLinks: (
      | Entry<CTAEntrySkeleton, 'WITHOUT_UNRESOLVABLE_LINKS', string>
      | undefined
    )[]
    richText?: Document
    copyright: string
  }
}

const Footer = ({ fields }: FooterProps) => {
  const { logo, navigationLinks, socialLinks, richText, copyright } = fields

  return (
    <footer className="bg-orange-100 px-5 py-20">
      <div className="container mx-auto flex flex-col gap-y-5">
        {logo && (
          <div className="mb-5 flex items-center gap-x-5">
            <CTA href="/" aria-label="Logo">
              <Media
                fields={logo.fields}
                height={logo.fields.file?.details.image?.height}
                width={logo.fields.file?.details.image?.width}
                className="max-h-10 max-w-10"
              />
            </CTA>
          </div>
        )}

        {richText && <RichText content={richText} className="text-center" />}

        {navigationLinks && (
          <nav className="mx-auto">
            <UnorderedList className="!mb-0 flex list-none gap-x-2.5">
              {navigationLinks.map((navigationLink, i) => {
                if (!navigationLink) return null

                const { label, url } = navigationLink.fields

                return (
                  <Fragment key={i}>
                    <ListItem className="!ml-0 font-semibold">
                      <CTA href={url}>{label}</CTA>
                    </ListItem>
                    {i !== navigationLinks.length - 1 && (
                      <ListItem className="!ml-0 font-semibold">|</ListItem>
                    )}
                  </Fragment>
                )
              })}
            </UnorderedList>
          </nav>
        )}

        <Paragraph className="mx-auto !mb-0 text-lg font-semibold">
          {copyright}
        </Paragraph>

        <nav className="mx-auto">
          <UnorderedList className="!mb-0 flex list-none gap-x-5">
            {socialLinks.map((socialLink, i) => {
              if (!socialLink) return null

              const { label, url, icon, iconOption } = socialLink.fields

              return (
                <ListItem key={i} className="!ml-0">
                  <CTA
                    href={url}
                    icon={icon}
                    iconOption={iconOption}
                    aria-label={label}
                  >
                    {label}
                  </CTA>
                </ListItem>
              )
            })}
          </UnorderedList>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
