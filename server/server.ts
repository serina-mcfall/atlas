import express from 'express'
import { getAllConcepts, getConceptBySlug } from './db/concepts.ts'

const server = express()

server.get('/api/v1/concepts', async (req, res) => {
  try {
    const concepts = await getAllConcepts()
    res.json(concepts)
  } catch (err) {
    res.sendStatus(500)
  }
})

server.get('/api/v1/concepts/:slug', async (req, res) => {
  try {
    const concept = await getConceptBySlug(req.params.slug)
    if (!concept) {
      res.sendStatus(404)
    } else {
      res.json(concept)
    }
  } catch (err) {
    res.sendStatus(500)
  }
})

export default server
