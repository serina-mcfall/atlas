import express from 'express'
import data from './data/art.ts'

const server = express()

//http://localhost:3000/api/v1/artwork
server.get('/api/v1/artwork', (req, res) => {
  console.log('GET /api/v1/artwork hit')
  res.json(data)
})

export default server

// Routes
