'use client'

import type { CTAEntrySkeleton } from '@/lib/contentful/getPageData'
import clsx from 'clsx'
import type { Asset, Entry } from 'contentful'
import { useEffect, useState } from 'react'
import CTA from '../CTA'
import Media from '../Media'
import { ListItem, UnorderedList } from '../Typography'
import HamburgerButton from './HamburguerButton'

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
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const { logo, navigationLinks } = fields

  return (
    <header
      className={clsx(
        'fixed left-0 top-0 z-50 w-full p-5 shadow-xl backdrop-blur-md transition-colors',
        isOpen && 'bg-[rgba(255,255,255,0.5)] lg:bg-transparent',
      )}
    >
      <div className="container mx-auto flex flex-col justify-between gap-x-5 lg:flex-row lg:items-center">
        <div className="flex items-center justify-between gap-x-5">
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

          <HamburgerButton {...{ isOpen, setIsOpen }} />
        </div>

        <nav
          className={clsx(
            'grid grid-cols-1 grid-rows-[0fr] transition-[grid-template-rows,opacity,padding] lg:grid-rows-[1fr]',
            isOpen &&
              'opacity-1 h-[calc(100vh_-_80px)] grid-rows-[1fr] pb-5 pt-10 lg:h-auto lg:pb-0 lg:pt-0',
          )}
        >
          <UnorderedList className="!mb-0 flex list-none flex-col gap-5 overflow-hidden lg:flex-row">
            {navigationLinks.map((navigationLink, i) => {
              if (!navigationLink) return null

              const { label, url } = navigationLink?.fields

              return (
                <ListItem
                  key={i}
                  className="!ml-0 flex items-center font-semibold"
                >
                  <CTA href={url}>{label}</CTA>
                </ListItem>
              )
            })}
          </UnorderedList>
        </nav>
      </div>
    </header>
  )
}

export default Header
