import type { Knex } from 'knex'

export async function seed(knex: Knex): Promise<void> {
  await knex('related_concepts').del()
  await knex('concept_tags').del()
  await knex('concepts').del()
  await knex('tags').del()
  await knex('topics').del()

  const [react, databases] = await knex('topics')
    .insert([
      { slug: 'react', name: 'React' },
      { slug: 'databases', name: 'Databases' },
    ])
    .returning('id')

  await knex('concepts').insert([
    {
      slug: 'react-components',
      title: 'React Components',
      summary: 'Functions that return UI.',
      diagram_url: '/diagrams/react-components.svg',
      explanation: 'Placeholder explanation — replaced in Phase 4.',
      source_name: null,
      source_url: null,
      topic_id: react.id ?? react,
    },
    {
      slug: 'database-query-travel',
      title: 'How a database query travels',
      summary: 'From the client to the disk and back.',
      diagram_url: '/diagrams/query-travel.svg',
      explanation: 'Placeholder explanation — replaced in Phase 4.',
      source_name: null,
      source_url: null,
      topic_id: databases.id ?? databases,
    },
    {
      slug: 'usestate-vs-usereducer',
      title: 'useState vs useReducer',
      summary: 'When to reach for which.',
      diagram_url: '/diagrams/usestate-usereducer.svg',
      explanation: 'Placeholder explanation — replaced in Phase 4.',
      source_name: null,
      source_url: null,
      topic_id: react.id ?? react,
    },
    {
      slug: 'aria-modal',
      title: 'What aria-modal actually does',
      summary: 'And what it does not do for you.',
      diagram_url: '/diagrams/aria-modal.svg',
      explanation: 'Placeholder explanation — replaced in Phase 4.',
      source_name: null,
      source_url: null,
      topic_id: react.id ?? react,
    },
  ])
}
