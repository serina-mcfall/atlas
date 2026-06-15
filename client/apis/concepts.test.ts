import { describe, it, expect, afterEach } from 'vitest'
import nock from 'nock'
import { fetchConcepts } from './concepts.ts'

afterEach(() => {
  nock.cleanAll()
})

describe('fetchConcepts', () => {
  it('returns concept data when the API responds successfully', async () => {
    const mockConcepts = [
      {
        id: 1,
        title: 'Mock Painting',
        comments: ['nice'],
        diagramUrl: '/images/mock.svg',
        source: { name: 'Mock Source', url: 'http://example.com' },
        license: { name: 'CC BY 4.0', url: 'http://example.com/license' },
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
