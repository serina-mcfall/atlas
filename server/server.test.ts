import { describe, it, expect } from 'vitest'
import request from 'supertest'
import server from './server.ts'

describe('GET /api/v1/concepts', () => {
  it('returns a list of concepts', async () => {
    const res = await request(server).get('/api/v1/concepts')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(4)
  })
})

describe('GET /api/v1/concepts/:id', () => {
  it('returns the matching concept', async () => {
    const res = await request(server).get('/api/v1/concepts/2')
    expect(res.status).toBe(200)
    expect(res.body.id).toBe(2)
  })

  it('returns 404 for an unknown id', async () => {
    const res = await request(server).get('/api/v1/concepts/999')
    expect(res.status).toBe(404)
  })
})
