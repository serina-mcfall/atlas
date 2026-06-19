import type { ComponentType } from 'react'
import type { MDXComponents } from 'mdx/types'

interface MDXModule {
  default: ComponentType<{
    components?: MDXComponents
  }>
}

const modules = import.meta.glob<MDXModule>('../content/concepts/*.mdx', {
  eager: true,
})

export function getConceptBody(slug: string) {
  const path = `../content/concepts/${slug}.mdx`
  return modules[path]?.default ?? null
}
