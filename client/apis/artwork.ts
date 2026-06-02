import request from 'superagent'
import { Artwork } from '../../models/Artwork.ts'

const baseURL = 'http://localhost:3000'

export async function fetchArtworks(): Promise<Artwork[]> {
  const res = await request.get(`${baseURL}/api/v1/artwork`)
  return res.body as Artwork[]
}
