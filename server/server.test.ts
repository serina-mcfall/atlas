import { describe, it, expect } from 'vitest'
import request from 'supertest'
import server from './server.ts'

describe('GET /api/v1/artwork', () => {
  it('returns a list of artworks', async () => {
    const res = await request(server).get('/api/v1/artwork')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(4)
  })
})
