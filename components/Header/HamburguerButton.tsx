import clsx from 'clsx'
import type { Dispatch, SetStateAction } from 'react'
import CTA from '../CTA'

type HamburgerProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const HamburgerButton = ({ isOpen, setIsOpen }: HamburgerProps) => {
  const toggleIsOpen = () => setIsOpen((prevState) => !prevState)

  return (
    <CTA
      onClick={toggleIsOpen}
      unstyled
      className="flex h-6 w-6 flex-col items-center justify-center space-y-1.5 lg:hidden"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <span
        className={clsx(
          'h-[3px] w-6 bg-black transition-transform duration-300 ease-out',
          isOpen && 'translate-y-[9px] rotate-45',
        )}
      />
      <span
        className={clsx(
          'h-[3px] w-6 bg-black transition-all duration-300 ease-out',
          isOpen && 'scale-x-0 bg-transparent',
        )}
      />
      <span
        className={clsx(
          'h-[3px] w-6 bg-black transition-transform duration-300 ease-out',
          isOpen && 'translate-y-[-9px] -rotate-45',
        )}
      />
    </CTA>
  )
}

export default HamburgerButton
