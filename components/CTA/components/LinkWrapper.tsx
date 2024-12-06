import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import type { ReactNode } from 'react'
import type { CommonProps } from '..'
import { buttonVariants, type ButtonVariants } from './ButtonWrapper'

export interface LinkWrapperProps extends LinkProps, CommonProps {
  children: ReactNode
  className?: string
  isButton?: boolean
  variant?: ButtonVariants
}

const LinkWrapper = (props: LinkWrapperProps) => {
  const { isButton = false, variant = 'fill', className, ...restProps } = props

  const buttonStyles = buttonVariants[variant]

  return (
    <Link className={clsx(isButton && buttonStyles, className)} {...restProps}>
      {props.children}
    </Link>
  )
}

export default LinkWrapper
