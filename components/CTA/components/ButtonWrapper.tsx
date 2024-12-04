import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'
import { type CommonProps } from '..'

type ButtonHTMLProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export interface ButtonWrapperProps extends CommonProps, ButtonHTMLProps {}

const ButtonWrapper = (props: ButtonWrapperProps) => {
  return <button {...props}>{props.children}</button>
}

export default ButtonWrapper
