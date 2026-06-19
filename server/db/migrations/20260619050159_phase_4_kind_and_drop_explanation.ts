import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('concepts', (t) => {
    t.dropColumn('explanation')
    t.string('kind').notNullable().defaultTo('concept')
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('concepts', (t) => {
    t.dropColumn('kind')
    t.text('explanation').notNullable().defaultTo('')
  })
}
