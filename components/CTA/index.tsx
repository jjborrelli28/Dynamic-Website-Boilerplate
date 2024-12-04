import ButtonWrapper, { type ButtonWrapperProps } from './components/ButtonWrapper'
import LinkWrapper, { type LinkWrapperProps } from './components/LinkWrapper'

type CTAProps = ButtonWrapperProps | LinkWrapperProps

const CTA = (props: CTAProps) => {
  const componentType =
    'onClick' in props ? 'button' : 'href' in props ? 'link' : null

  switch (componentType) {
    case 'button':
      return (
        <ButtonWrapper {...(props as ButtonWrapperProps)}>
          {props.children}
        </ButtonWrapper>
      )
    case 'link':
      return (
        <LinkWrapper {...(props as LinkWrapperProps)}>
          {props.children}
        </LinkWrapper>
      )
    default:
      return null
  }
}

export default CTA

