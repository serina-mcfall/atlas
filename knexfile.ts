import type { Knex } from 'knex'

const config: Record<string, Knex.Config> = {
  development: {
    client: 'better-sqlite3',
    connection: { filename: './server/db/atlas.sqlite3' },
    useNullAsDefault: true,
    migrations: { directory: './server/db/migrations' },
    seeds: { directory: './server/db/seeds' },
  },

  test: {
    client: 'better-sqlite3',
    connection: { filename: ':memory:' },
    useNullAsDefault: true,
    migrations: { directory: './server/db/migrations' },
    seeds: { directory: './server/db/seeds' },
  },
}

export default config
