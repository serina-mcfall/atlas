import type { ComponentProps } from 'react'

export const mdxComponents = {
  h1: (props: ComponentProps<'h1'>) => <h2 {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h3 {...props} />,
  p: (props: ComponentProps<'p'>) => <p {...props} />,
  a: (props: ComponentProps<'a'>) => <a {...props} />,
  code: (props: ComponentProps<'code'>) => <code {...props} />,
  pre: (props: ComponentProps<'pre'>) => <pre {...props} />,
}
