// @vitest-environment jsdom
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import React from 'react'
import TopicSection from './TopicSection.tsx'

const concepts = [
  {
    slug: 'usestate-vs-usereducer',
    title: 'useState vs useReducer',
    summary: 'Coupled state',
  },
  {
    slug: 'react-context',
    title: 'React context',
    summary: 'Prop drilling escape',
  },
]

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>)
}

describe('TopicSection', () => {
  it('renders the topic label', () => {
    renderWithRouter(<TopicSection topic="react" concepts={concepts} />)
    expect(screen.getByRole('heading', { level: 2, name: /react/i })).toBeInTheDocument()
  })

  it('renders all concept cards as children', () => {
    renderWithRouter(<TopicSection topic="react" concepts={concepts} />)
    expect(screen.getByText(/useState vs useReducer/i)).toBeInTheDocument()
    expect(screen.getByText(/React context/i)).toBeInTheDocument()
  })

  it('sets data-topic on its wrapping element so CSS variables resolve', () => {
    const { container } = renderWithRouter(
      <TopicSection topic="databases" concepts={[]} />,
    )
    expect(container.firstChild).toHaveAttribute('data-topic', 'databases')
  })
})
