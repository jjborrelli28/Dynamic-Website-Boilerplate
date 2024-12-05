import CTA from '@/components/CTA'
import type { LinkWrapperProps } from '@/components/CTA/components/LinkWrapper'
import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

type Typography = PropsWithChildren<{ className?: string }>

export const Heading1 = ({ children, className }: Typography) => (
  <h1 className={clsx('mb-6 text-6xl font-extrabold leading-tight', className)}>
    {children}
  </h1>
)

export const Heading2 = ({ children, className }: Typography) => (
  <h2 className={clsx('mb-5 text-4xl font-bold leading-tight', className)}>
    {children}
  </h2>
)

export const Heading3 = ({ children, className }: Typography) => (
  <h3 className={clsx('mb-4 text-3xl font-semibold leading-snug', className)}>
    {children}
  </h3>
)

export const Heading4 = ({ children, className }: Typography) => (
  <h4 className={clsx('mb-3 text-2xl font-semibold leading-snug', className)}>
    {children}
  </h4>
)

export const Heading5 = ({ children, className }: Typography) => (
  <h5 className={clsx('mb-2 text-xl font-medium leading-normal', className)}>
    {children}
  </h5>
)

export const Heading6 = ({ children, className }: Typography) => (
  <h6 className={clsx('mb-2 text-lg font-medium leading-normal', className)}>
    {children}
  </h6>
)

export const Paragraph = ({ children, className }: Typography) => (
  <p className={clsx('mb-2 text-base font-normal leading-relaxed', className)}>
    {children}
  </p>
)

export const OrderedList = ({ children, className }: Typography) => (
  <ol className={clsx('mb-4 list-decimal', className)}>{children}</ol>
)

export const UnorderedList = ({ children, className }: Typography) => (
  <ul className={clsx('mb-4 list-disc', className)}>{children}</ul>
)

export const ListItem = ({ children, className }: Typography) => (
  <li className={clsx('ml-4', className)}> {children}</li>
)

export const Blockquote = ({ children, className }: Typography) => (
  <blockquote
    className={clsx(
      'mb-4 border-l-4 border-gray-400 pl-4 italic text-gray-600',
      className,
    )}
  >
    {children}
  </blockquote>
)

export const HorizontalRule = ({ className }: { className?: string }) => (
  <hr className={clsx('my-6 border-t-2 border-gray-300', className)} />
)

export const Hyperlink = (props: LinkWrapperProps & { className?: string }) => (
  <CTA
    href={props.href}
    className={clsx(
      'text-blue-500 underline hover:text-blue-700',
      props?.className,
    )}
  >
    {props.children}
  </CTA>
)
