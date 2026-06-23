// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Section, Cmd } from './referenceComponents'

describe('Section', () => {
  it('renders the title as an h2', () => {
    render(
      <Section num="01" title="Navigation">
        <Cmd code="cd <dir>" desc="change directory" />
      </Section>,
    )
    expect(
      screen.getByRole('heading', { level: 2, name: /Navigation/i }),
    ).toBeInTheDocument()
  })

  it('renders the section number alongside the title', () => {
    render(
      <Section num="03" title="Search">
        <Cmd code="grep" desc="search files" />
      </Section>,
    )
    expect(screen.getByText(/03/)).toBeInTheDocument()
  })

  it('renders children inside the section', () => {
    render(
      <Section num="01" title="Navigation">
        <Cmd code="pwd" desc="print working directory" />
      </Section>,
    )
    expect(screen.getByText(/pwd/)).toBeInTheDocument()
    expect(screen.getByText(/print working directory/)).toBeInTheDocument()
  })
})

describe('Cmd', () => {
  it('renders the command in a code element', () => {
    render(<Cmd code="ls -la" desc="list with hidden files" />)
    expect(screen.getByText('ls -la').tagName).toBe('CODE')
  })

  it('renders the description', () => {
    render(<Cmd code="cd <dir>" desc="change directory" />)
    expect(screen.getByText(/change directory/)).toBeInTheDocument()
  })
})
