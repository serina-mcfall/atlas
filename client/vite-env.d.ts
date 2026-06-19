/// <reference types="vite/client" />

declare module '*.mdx' {
  import { ComponentType } from 'react'
  import type { MDXComponents } from 'mdx/types'
  const MDXComponent: ComponentType<{
    components?: MDXComponents
  }>
  export default MDXComponent
}
