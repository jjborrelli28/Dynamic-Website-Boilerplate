import clsx from 'clsx'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { CommonProps } from '..'

type ButtonHTMLProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export interface ButtonWrapperProps extends CommonProps, ButtonHTMLProps {}

export const buttonStyles =
  'bg-blue-900 px-6 py-2 font-semibold text-white transition duration-300 hover:bg-blue-800 focus:outline-none'

const ButtonWrapper = (props: ButtonWrapperProps) => {
  const { className, ...restProps } = props

  return (
    <button className={clsx(buttonStyles, className)} {...restProps}>
      {props.children}
    </button>
  )
}

export default ButtonWrapper
