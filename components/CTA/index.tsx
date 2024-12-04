import { type IconOptions, type Icons } from '@/lib/contentful/getPageData'
import DynamicIcon from '../DynamicIcon'
import ButtonWrapper, {
  type ButtonWrapperProps,
} from './components/ButtonWrapper'
import LinkWrapper, { type LinkWrapperProps } from './components/LinkWrapper'
import clsx from 'clsx'

export type CommonProps = {
  icon?: Icons
  iconOption?: IconOptions
  iconClassName?: string
}

type CTAProps = ButtonWrapperProps | LinkWrapperProps

const CTA = (props: CTAProps) => {
  const componentType =
    'onClick' in props ? 'button' : 'href' in props ? 'link' : null
  const { children, icon, iconOption, iconClassName, ...restProps } = props
  const Icon = icon && DynamicIcon[icon]
  const childrenToRender = !Icon ? (
    children
  ) : iconOption === 'Icon on the left' ? (
    <>
      <Icon className={clsx(iconClassName)} /> {children}
    </>
  ) : iconOption === 'Is an icon' ? (
    <Icon className={clsx(iconClassName)} />
  ) : iconOption === 'Icon on the right' ? (
    <>
      {children} <Icon className={clsx(iconClassName)} />
    </>
  ) : (
    <>
      <Icon className={clsx(iconClassName)} /> {children}
    </>
  )

  switch (componentType) {
    case 'button':
      return (
        <ButtonWrapper {...(restProps as ButtonWrapperProps)}>
          {childrenToRender}
        </ButtonWrapper>
      )
    case 'link':
      return (
        <LinkWrapper {...(restProps as LinkWrapperProps)}>
          {childrenToRender}
        </LinkWrapper>
      )
    default:
      return null
  }
}

export default CTA
