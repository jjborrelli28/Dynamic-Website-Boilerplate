import {
  documentToReactComponents,
  type NodeRenderer,
} from '@contentful/rich-text-react-renderer'
import { type BLOCKS, type Document } from '@contentful/rich-text-types'
import { useMemo } from 'react'
import {
  type BlockClass,
  createBlockRenderers,
  createInlineRenderers,
  createTextMarkRenderers,
  type InlineClass,
  type TextMarkClass,
} from './renderers'

type Renderers = {
  [key in BLOCKS]?: NodeRenderer
}

type RichTextProps = {
  content: Document
  className?: string
  renderers?: Renderers
  blockClass?: BlockClass
  inlineClass?: InlineClass
  textMarkClass?: TextMarkClass
}

const RichText = ({
  content,
  className,
  renderers,
  blockClass,
  inlineClass,
  textMarkClass,
}: RichTextProps) => {
  const options = {
    renderNode: {
      ...renderers,
      ...useMemo(() => createBlockRenderers(blockClass), [blockClass]),
      ...useMemo(() => createInlineRenderers(inlineClass), [inlineClass]),
    },
    renderMark: useMemo(
      () => createTextMarkRenderers(textMarkClass),
      [textMarkClass],
    ),
  }

  return (
    <div className={className}>
      {documentToReactComponents(content, options)}
    </div>
  )
}

export default RichText