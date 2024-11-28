import {
  documentToReactComponents,
  NodeRenderer,
} from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { useMemo } from 'react'
import {
  BlockClass,
  createBlockRenderers,
  createInlineRenderers,
  createTextMarkRenderers,
  InlineClass,
  TextMarkClass,
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

export const RichText = ({
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
