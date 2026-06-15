import request from 'superagent'
import { Concept } from '../../models/Concept.ts'

const rootURL = new URL('/api/v1', document.baseURI).toString()

export async function fetchConcepts(): Promise<Concept[]> {
  const res = await request.get(`${rootURL}/concepts`)
  return res.body as Concept[]
}

export async function fetchConcept(slug: string): Promise<Concept> {
  const res = await request.get(`${rootURL}/concepts/${slug}`)
  return res.body as Concept
}
