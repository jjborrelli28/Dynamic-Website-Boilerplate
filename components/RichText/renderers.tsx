import {
  type Block,
  BLOCKS,
  type Inline,
  INLINES,
  MARKS,
} from '@contentful/rich-text-types'
import { type ReactNode } from 'react'
import {
  Blockquote,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  HorizontalRule,
  Hyperlink,
  ListItem,
  OrderedList,
  Paragraph,
  UnorderedList,
} from '../Typography'

export type BlockClass = {
  [key in BLOCKS]?: string
}

type _Node = Block | Inline

type Children = ReactNode | ReactNode[]

export const createBlockRenderers = (blockClass: BlockClass = {}) => {
  return {
    [BLOCKS.HEADING_1]: (_node: _Node, children: Children) => (
      <Heading1 className={blockClass[BLOCKS.HEADING_1]}>{children}</Heading1>
    ),
    [BLOCKS.HEADING_2]: (_node: _Node, children: Children) => (
      <Heading2 className={blockClass[BLOCKS.HEADING_2]}>{children}</Heading2>
    ),
    [BLOCKS.HEADING_3]: (_node: _Node, children: Children) => (
      <Heading3 className={blockClass[BLOCKS.HEADING_3]}>{children}</Heading3>
    ),
    [BLOCKS.HEADING_4]: (_node: _Node, children: Children) => (
      <Heading4 className={blockClass[BLOCKS.HEADING_4]}>{children}</Heading4>
    ),
    [BLOCKS.HEADING_5]: (_node: _Node, children: Children) => (
      <Heading5 className={blockClass[BLOCKS.HEADING_5]}>{children}</Heading5>
    ),
    [BLOCKS.HEADING_6]: (_node: _Node, children: Children) => (
      <Heading6 className={blockClass[BLOCKS.HEADING_6]}>{children}</Heading6>
    ),
    [BLOCKS.PARAGRAPH]: (_node: _Node, children: Children) => {
      if (Array.isArray(children) && children[0] === '') return null

      return (
        <Paragraph className={blockClass[BLOCKS.PARAGRAPH]}>
          {children}
        </Paragraph>
      )
    },
    [BLOCKS.OL_LIST]: (_node: _Node, children: Children) => (
      <OrderedList className={blockClass[BLOCKS.OL_LIST]}>
        {children}
      </OrderedList>
    ),
    [BLOCKS.UL_LIST]: (_node: _Node, children: Children) => (
      <UnorderedList className={blockClass[BLOCKS.UL_LIST]}>
        {children}
      </UnorderedList>
    ),
    [BLOCKS.LIST_ITEM]: (_node: _Node, children: Children) => (
      <ListItem className={blockClass[BLOCKS.LIST_ITEM]}>{children}</ListItem>
    ),
    [BLOCKS.QUOTE]: (__node: _Node, children: Children) => (
      <Blockquote className={blockClass[BLOCKS.QUOTE]}>{children}</Blockquote>
    ),
    [BLOCKS.HR]: () => <HorizontalRule className={blockClass[BLOCKS.HR]} />,
  }
}

export type InlineClass = {
  [key in INLINES]?: string
}

export const createInlineRenderers = (inlineClass: InlineClass = {}) => ({
  [INLINES.HYPERLINK]: (_node: _Node, children: Children) => (
    <Hyperlink href={_node.data.uri} className={inlineClass[INLINES.HYPERLINK]}>
      {children}
    </Hyperlink>
  ),
})

export type TextMarkClass = {
  [key in MARKS]?: string
}

export const createTextMarkRenderers = (textMarkClass: TextMarkClass = {}) => ({
  [MARKS.BOLD]: (text: Children) => (
    <strong className={textMarkClass[MARKS.BOLD]}>{text}</strong>
  ),
  [MARKS.ITALIC]: (text: Children) => (
    <i className={textMarkClass[MARKS.ITALIC]}>{text}</i>
  ),
  [MARKS.UNDERLINE]: (text: Children) => (
    <u className={textMarkClass[MARKS.UNDERLINE]}>{text}</u>
  ),
  [MARKS.CODE]: (text: Children) => (
    <span className={textMarkClass[MARKS.CODE]}>{text}</span>
  ),
  [MARKS.SUBSCRIPT]: (text: Children) => (
    <sub className={textMarkClass[MARKS.SUBSCRIPT]}>{text}</sub>
  ),
  [MARKS.SUPERSCRIPT]: (text: Children) => (
    <sup className={textMarkClass[MARKS.SUPERSCRIPT]}>{text}</sup>
  ),
})