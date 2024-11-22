const parseSlug = (slug: string[], preview: boolean) => {
  if (!slug || (slug.length === 1 && slug[0] === 'preview')) return 'homepage'

  if (preview) return slug.slice(0, -1).join('/')

  return slug.join('/')
}

export default parseSlug
