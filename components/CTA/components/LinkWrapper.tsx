import Link, { type LinkProps } from 'next/link'
import { type ReactNode } from 'react'
import { type CommonProps } from '..'

export interface LinkWrapperProps extends LinkProps, CommonProps {
  children: ReactNode
}

const LinkWrapper = (props: LinkWrapperProps) => {
  return <Link {...props}>{props.children}</Link>
}

export default LinkWrapper
