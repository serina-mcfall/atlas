import type { MDXComponents } from 'mdx/types'

export const mdxComponents: MDXComponents = {
  h1: (props) => <h2 {...props} />,
  h2: (props) => <h3 {...props} />,
  p: (props) => <p {...props} />,
  a: (props) => <a {...props} />,
  code: (props) => <code {...props} />,
  pre: (props) => <pre {...props} />,
}
