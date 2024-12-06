import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import type { CommonProps } from '..'
import { buttonStyles } from './ButtonWrapper'

export interface LinkWrapperProps extends LinkProps, CommonProps {
  children: ReactNode
  className?: string
  isButton?: boolean
}

const LinkWrapper = (props: LinkWrapperProps) => {
  const { isButton = false, className, ...restProps } = props

  return (
    <Link className={clsx(isButton && buttonStyles, className)} {...restProps}>
      {props.children}
    </Link>
  )
}

export default LinkWrapper
