import knexConfig from '../../knexfile.ts'
import knex from 'knex'

const env = process.env.NODE_ENV || 'development'
const connection = knex(knexConfig[env])

export default connection
