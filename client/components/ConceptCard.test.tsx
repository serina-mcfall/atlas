// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import ConceptCard from './ConceptCard.tsx'
import React from 'react'

const concept = {
  slug: 'usestate-vs-usereducer',
  title: 'useState vs useReducer',
  summary: 'When state transitions are coupled, useReducer.',
}

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('ConceptCard', () => {
  it('renders the title', () => {
    renderWithRouter(<ConceptCard {...concept} />)
    expect(screen.getByText(/useState vs useReducer/i)).toBeInTheDocument()
  })
  it('renders the summary', () => {
    renderWithRouter(<ConceptCard {...concept} />)
    expect(
      screen.getByText(/when state transitions are coupled/i),
    ).toBeInTheDocument()
  })
  it('links to the concept sheet by slug', () => {
    renderWithRouter(<ConceptCard {...concept} />)
    const link = screen.getByRole('link', { name: /useState vs useReducer/i })
    expect(link).toHaveAttribute('href', '/usestate-vs-usereducer')
  })
})
