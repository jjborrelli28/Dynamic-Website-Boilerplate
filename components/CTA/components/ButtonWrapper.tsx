import clsx from 'clsx'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import type { CommonProps } from '..'

type ButtonHTMLProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonVariants = 'fill' | 'outline'

export interface ButtonWrapperProps extends CommonProps, ButtonHTMLProps {
  variant?: 'fill' | 'outline'
}

const baseButtonStyles =
  ' px-6 py-2 font-semibold  transition duration-300  focus:outline-none'

const fillButtonStyles = clsx(
  baseButtonStyles,
  'bg-blue-900 text-white hover:bg-blue-800',
)

const outlineButtonStyles = clsx(
  baseButtonStyles,
  'border border-blue-800 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white',
)

export const buttonVariants = {
  fill: fillButtonStyles,
  outline: outlineButtonStyles,
}

const ButtonWrapper = (props: ButtonWrapperProps) => {
  const { className, variant = 'fill', ...restProps } = props

  const styles = buttonVariants[variant]

  return (
    <button className={clsx(styles, className)} {...restProps}>
      {props.children}
    </button>
  )
}

export default ButtonWrapper
