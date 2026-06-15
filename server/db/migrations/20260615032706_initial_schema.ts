import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('topics', (t) => {
    t.increments('id').primary()
    t.string('slug').notNullable().unique()
    t.string('name').notNullable()
  })

  await knex.schema.createTable('concepts', (t) => {
    t.increments('id').primary()
    t.string('slug').notNullable().unique()
    t.string('title').notNullable()
    t.string('summary').notNullable()
    t.string('diagram_url').notNullable()
    t.text('explanation').notNullable()
    t.string('source_name')
    t.string('source_url')
    t.integer('topic_id').references('id').inTable('topics').notNullable()
    t.timestamp('created_at').defaultTo(knex.fn.now())
  })

  await knex.schema.createTable('tags', (t) => {
    t.increments('id').primary()
    t.string('slug').notNullable().unique()
    t.string('name').notNullable()
  })

  await knex.schema.createTable('concept_tags', (t) => {
    t.integer('concept_id').references('id').inTable('concepts').notNullable()
    t.integer('tag_id').references('id').inTable('tags').notNullable()
    t.primary(['concept_id', 'tag_id'])
  })

  await knex.schema.createTable('related_concepts', (t) => {
    t.integer('concept_id').references('id').inTable('concepts').notNullable()
    t.integer('related_concept_id')
      .references('id')
      .inTable('concepts')
      .notNullable()
    t.primary(['concept_id', 'related_concept_id'])
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('related_concepts')
  await knex.schema.dropTableIfExists('concept_tags')
  await knex.schema.dropTableIfExists('tags')
  await knex.schema.dropTableIfExists('concepts')
  await knex.schema.dropTableIfExists('topics')
}
