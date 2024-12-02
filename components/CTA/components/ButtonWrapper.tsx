import { type ButtonHTMLAttributes, type DetailedHTMLProps } from 'react'

export type ButtonWrapperProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const ButtonWrapper = (props: ButtonWrapperProps) => {
  return <button {...props}>{props.children}</button>
}

export default ButtonWrapper
