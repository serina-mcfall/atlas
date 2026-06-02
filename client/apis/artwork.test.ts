import { describe, it, expect, afterEach } from 'vitest'
import nock from 'nock'
import { fetchArtworks } from './artwork.ts'

afterEach(() => {
  nock.cleanAll()
})

describe('fetchArtworks', () => {
  it('returns artwork data when the API responds successfully', async () => {
    const mockArtworks = [
      {
        id: 1,
        title: 'Mock Painting',
        comments: ['nice'],
        imageUrl: '/images/mock.jpg',
        artist: { name: 'Mock Artist', url: 'http://example.com' },
        license: { name: 'CC BY 4.0', url: 'http://example.com/license' },
      },
    ]

    const scope = nock('http://localhost:3000')
      .get('/api/v1/artwork')
      .reply(200, mockArtworks)

    const result = await fetchArtworks()

    expect(result).toEqual(mockArtworks)
    expect(scope.isDone()).toBe(true)
  })
})
