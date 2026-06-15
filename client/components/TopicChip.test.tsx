// @vitest-environment jsdom

import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TopicChip from './TopicChip.tsx'

describe('TopicChip', () => {
  it('renders the topic label', () => {
    render(<TopicChip topic="react" />)
    expect(screen.getByText(/react/i)).toBeInTheDocument()
  })

  it('exposes the topic via data attribute for CSS', () => {
    const { container } = render(<TopicChip topic="databases" />)
    expect(container.firstChild).toHaveAttribute('data-topic', 'databases')
  })
})
