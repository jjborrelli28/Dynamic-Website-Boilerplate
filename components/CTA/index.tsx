import ButtonWrapper, { type ButtonWrapperProps } from './components/ButtonWrapper'
import LinkWrapper, { type LinkWrapperProps } from './components/LinkWrapper'

type CTAProps = ButtonWrapperProps | LinkWrapperProps

const CTA = (props: CTAProps) => {
  return 'onClick' in props ? (
    <ButtonWrapper {...(props as ButtonWrapperProps)}>
      {props.children}
    </ButtonWrapper>
  ) : 'href' in props ? (
    <LinkWrapper {...(props as LinkWrapperProps)}>{props.children}</LinkWrapper>
  ) : null
}

export default CTA
