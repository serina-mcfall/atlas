// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import React from 'react'
import ReferenceSheet from './ReferenceSheet.tsx'

const concept = {
  slug: 'terminal',
  title: 'Terminal — the commands I use most',
  topic: 'terminal',
  kind: 'reference' as const,
  summary: 'A quick lookup card for the bash/zsh commands worth not having to Google.',
  diagramUrl: '',
  source: null,
  relatedConcepts: [],
}

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('ReferenceSheet', () => {
  it('sets data-topic on the wrapping element', () => {
    const { container } = renderWithRouter(<ReferenceSheet concept={concept} />)
    expect(container.firstChild).toHaveAttribute('data-topic', 'terminal')
  })

  it('renders the title as an h1', () => {
    renderWithRouter(<ReferenceSheet concept={concept} />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Terminal — the commands I use most/i,
      }),
    ).toBeInTheDocument()
  })

  it('renders the summary', () => {
    renderWithRouter(<ReferenceSheet concept={concept} />)
    expect(
      screen.getByText(/quick lookup card for the bash/i),
    ).toBeInTheDocument()
  })

  it('does NOT render a diagram element', () => {
    renderWithRouter(<ReferenceSheet concept={concept} />)
    expect(screen.queryByRole('img')).not.toBeInTheDocument()
  })
})
