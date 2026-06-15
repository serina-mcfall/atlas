// @vitest-environment jsdom
import { describe, it, expect, afterEach } from 'vitest'
import nock from 'nock'
import { fetchConcepts, fetchConcept } from './concepts.ts'

afterEach(() => {
  nock.cleanAll()
})

describe('fetchConcepts', () => {
  it('returns concept data when the API responds successfully', async () => {
    const mockConcepts = [
      {
        slug: 'react-components',
        title: 'React Components',
        topic: 'React',
        summary: 'Functions that return UI.',
        diagramUrl: '/diagrams/react-components.svg',
        explanation: 'Placeholder explanation.',
        source: null,
        relatedConcepts: [],
      },
    ]

    const scope = nock('http://localhost:3000')
      .get('/api/v1/concepts')
      .reply(200, mockConcepts)

    const result = await fetchConcepts()

    expect(result).toEqual(mockConcepts)
    expect(scope.isDone()).toBe(true)
  })
})

describe('fetchConcept', () => {
  it('returns the concept matching the slug', async () => {
    const mockConcept = {
      slug: 'react-components',
      title: 'React Components',
      topic: 'React',
      summary: 'Functions that return UI.',
      diagramUrl: '/diagrams/react-components.svg',
      explanation: 'Placeholder explanation.',
      source: null,
      relatedConcepts: [],
    }

    const scope = nock('http://localhost:3000')
      .get('/api/v1/concepts/react-components')
      .reply(200, mockConcept)

    const result = await fetchConcept('react-components')

    expect(result).toEqual(mockConcept)
    expect(scope.isDone()).toBe(true)
  })
})
