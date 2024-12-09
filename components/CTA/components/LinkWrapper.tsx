'use client'

import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import { Link as ReactScrollLink } from 'react-scroll'
import type { CommonProps } from '..'
import { buttonVariants, type ButtonVariants } from './ButtonWrapper'

export interface LinkWrapperProps extends LinkProps, CommonProps {
  children: ReactNode
  className?: string
  isButton?: boolean
  variant?: ButtonVariants
  unstyled?: boolean
}

const LinkWrapper = (props: LinkWrapperProps) => {
  const {
    isButton = false,
    variant = 'fill',
    className,
    unstyled,
    href,
    children,
    ...restProps
  } = props

  const buttonStyles = buttonVariants[variant]

  return typeof href === 'string' && href.startsWith('#') ? (
    <ReactScrollLink
      to={href.slice(1)}
      href={href}
      smooth={true}
      duration={300}
      offset={-80}
      className={clsx(unstyled ?? (isButton && buttonStyles), className)}
    >
      {children}
    </ReactScrollLink>
  ) : (
    <Link
      href={href}
      className={clsx(unstyled ?? (isButton && buttonStyles), className)}
      {...restProps}
    >
      {children}
    </Link>
  )
}

export default LinkWrapper
