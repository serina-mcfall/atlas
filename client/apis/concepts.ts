import request from 'superagent'
import { Concept } from '../../models/Concept.ts'

const baseURL = 'http://localhost:3000'

export async function fetchConcepts(): Promise<Concept[]> {
  const res = await request.get(`${baseURL}/api/v1/concepts`)
  return res.body as Concept[]
}
