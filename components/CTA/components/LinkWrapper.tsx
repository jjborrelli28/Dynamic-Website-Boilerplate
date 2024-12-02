import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

export interface LinkWrapperProps extends LinkProps {
  children: ReactNode
}

const LinkWrapper = (props: LinkWrapperProps) => {
  return <Link {...props}>{props.children}</Link>
}

export default LinkWrapper
