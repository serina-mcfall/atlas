import { describe, it, expect, beforeAll, afterAll } from 'vitest'
import request from 'supertest'
import server from './server.ts'
import connection from './db/connection.ts'

beforeAll(async () => {
  await connection.migrate.latest()
  await connection.seed.run()
})

afterAll(async () => {
  await connection.destroy()
})

describe('GET /api/v1/concepts', () => {
  it('returns a list of concepts', async () => {
    const res = await request(server).get('/api/v1/concepts')
    expect(res.status).toBe(200)
    expect(res.body).toHaveLength(5)
    expect(res.body[0]).toHaveProperty('slug')
    expect(res.body[0]).toHaveProperty('topic')
  })
})

describe('GET /api/v1/concepts/:slug', () => {
  it('returns the matching concept by slug', async () => {
    const res = await request(server).get('/api/v1/concepts/react-components')
    expect(res.status).toBe(200)
    expect(res.body.slug).toBe('react-components')
  })

  it('returns 404 for an unknown slug', async () => {
    const res = await request(server).get('/api/v1/concepts/does-not-exist')
    expect(res.status).toBe(404)
  })
})
