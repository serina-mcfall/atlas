// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import React from 'react'
import ConceptSheet from './ConceptSheet.tsx'

const concept = {
  slug: 'usestate-vs-usereducer',
  title: 'useState vs useReducer',
  topic: 'react',
  summary: 'When state transitions are coupled, useReducer.',
  diagramUrl: 'https://example.com/diagram.svg',
  explanation: 'Long explanation body here.',
  source: { name: 'Dan Abramov', url: 'https://overreacted.io' },
  relatedConcepts: [{ slug: 'react-context', title: 'React context' }],
}

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('ConceptSheet', () => {
  it('sets data-topic on the wrapping element', () => {
    const { container } = renderWithRouter(<ConceptSheet concept={concept} />)
    expect(container.firstChild).toHaveAttribute('data-topic', 'react')
  })

  it('renders the title as h1', () => {
    renderWithRouter(<ConceptSheet concept={concept} />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /useState vs useReducer/i,
      }),
    ).toHaveTextContent('useState vs useReducer')
  })

  it('renders the diagram with alt text from the title', () => {
    renderWithRouter(<ConceptSheet concept={concept} />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('src', 'https://example.com/diagram.svg')
    expect(img).toHaveAttribute(
      'alt',
      expect.stringContaining('useState vs useReducer'),
    )
  })

  it('renders the source link when source is present', () => {
    renderWithRouter(<ConceptSheet concept={concept} />)
    expect(screen.getByRole('link', { name: /Dan Abramov/i })).toHaveAttribute(
      'href',
      'https://overreacted.io',
    )
  })

  it('does not render source when source is null', () => {
    renderWithRouter(<ConceptSheet concept={{ ...concept, source: null }} />)
    expect(screen.queryByText(/Source:/i)).not.toBeInTheDocument()
  })

  it('renders related concepts as links', () => {
    renderWithRouter(<ConceptSheet concept={concept} />)
    expect(
      screen.getByRole('link', { name: /React context/i }),
    ).toHaveAttribute('href', '/react-context')
  })
})
