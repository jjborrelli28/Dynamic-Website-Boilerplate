'use client'

import CTA from '@/components/CTA'
import { Heading3 } from '@/components/Typography'
import clsx from 'clsx'
import { useState } from 'react'

type FAQProps = {
  fields: {
    question: string
    answer: string
  }
}

const FAQ = ({ fields }: FAQProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleIsOpen = () => setIsOpen((prevState) => !prevState)

  const { question, answer } = fields

  return (
    <div>
      <div className="flex justify-between border-b-2 border-black p-5">
        <Heading3 className="!mb-0">{question}</Heading3>
        <CTA
          onClick={toggleIsOpen}
          icon="ArrowDownward"
          iconOption="Is an icon"
          unstyled
          className={clsx(
            'flex !h-10 !w-10 items-center justify-center rounded-full border-2 border-black !p-0 transition-transform',
            isOpen && 'rotate-180',
          )}
        />
      </div>

      <div
        className={clsx(
          'grid grid-cols-1 transition-[grid-template-rows,opacity]',
          isOpen ? 'opacity-1 grid-rows-[1fr]' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <div className="overflow-hidden">
          <div className="p-5">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
