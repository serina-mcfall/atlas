import type { ComponentType } from 'react'

interface MDXModule {
  default: ComponentType<{
    components?: Record<string, ComponentType<unknown>>
  }>
}

const modules = import.meta.glob<MDXModule>('../content/concepts/*.mdx', {
  eager: true,
})

export function getConceptBody(slug: string) {
  const path = `../content/concepts/${slug}.mdx`
  return modules[path]?.default ?? null
}
