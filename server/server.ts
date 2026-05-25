import express from 'express'
import data from './data/art.ts'

const server = express()

//http://localhost:3000/api/v1/artwork
server.get('/api/v1/artwork', (req, res) => {
  console.log('GET /api/v1/artwork hit')
  res.json(data)
})

server.get('/api/v1/artwork/:id', (req, res) => {
  const id = Number(req.params.id)
  const artwork = data.find((a) => a.id === id)
  if (!artwork) {
    res.sendStatus(404)
  } else {
    res.json(artwork)
  }
})

export default server

// Routes
