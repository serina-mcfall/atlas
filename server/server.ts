import express from 'express'
import data from './data/concepts.ts'

const server = express()

server.get('/api/v1/concepts', (req, res) => {
  res.json(data)
})

server.get('/api/v1/concepts/:id', (req, res) => {
  const id = Number(req.params.id)
  const concept = data.find((c) => c.id === id)
  if (!concept) {
    res.sendStatus(404)
  } else {
    res.json(concept)
  }
})

export default server
