import { createClient } from 'contentful'

const client = (preview = false) =>
  createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '',
    accessToken:
      (preview
        ? process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_ACCESS_TOKEN
        : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN) ?? '',
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  })

export default client
