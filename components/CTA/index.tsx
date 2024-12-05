import type { IconOptions, Icons } from '@/lib/contentful/getPageData'
import clsx from 'clsx'
import DynamicIcon from '../DynamicIcon'
import ButtonWrapper, {
  type ButtonWrapperProps,
} from './components/ButtonWrapper'
import LinkWrapper, { type LinkWrapperProps } from './components/LinkWrapper'

export type CommonProps = {
  icon?: Icons
  iconOption?: IconOptions
  iconClassName?: string
}

type CTAProps = ButtonWrapperProps | LinkWrapperProps

const baseStyles = 'w-fit flex items-center gap-x-1'

const CTA = (props: CTAProps) => {
  const componentType =
    'onClick' in props ? 'button' : 'href' in props ? 'link' : null
  const { children, className, icon, iconOption, iconClassName, ...restProps } =
    props
  const Icon = icon && DynamicIcon[icon]
  const childrenToRender = !Icon ? (
    children
  ) : iconOption === 'Icon on the left' ? (
    <>
      <Icon className={clsx('text-md', iconClassName)} /> {children}
    </>
  ) : iconOption === 'Is an icon' ? (
    <Icon className={clsx('text-3xl', iconClassName)} />
  ) : iconOption === 'Icon on the right' ? (
    <>
      {children} <Icon className={clsx('text-md', iconClassName)} />
    </>
  ) : (
    <>
      <Icon className={clsx(iconClassName)} /> {children}
    </>
  )

  switch (componentType) {
    case 'button':
      return (
        <ButtonWrapper
          className={clsx(baseStyles, className)}
          {...(restProps as ButtonWrapperProps)}
        >
          {childrenToRender}
        </ButtonWrapper>
      )
    case 'link':
      return (
        <LinkWrapper
          className={clsx(baseStyles, className)}
          {...(restProps as LinkWrapperProps)}
        >
          {childrenToRender}
        </LinkWrapper>
      )
    default:
      return null
  }
}

export default CTA
