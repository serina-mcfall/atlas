import connection from './connection.ts'
import { Concept } from '../../models/Concept.ts'

export async function getAllConcepts(db = connection): Promise<Concept[]> {
  const rows = await db('concepts')
    .join('topics', 'concepts.topic_id', 'topics.id')
    .select(
      'concepts.slug as slug',
      'concepts.title as title',
      'topics.slug as topic',
      'concepts.summary as summary',
      'concepts.diagram_url as diagramUrl',
      'concepts.kind as kind',
      'concepts.source_name as sourceName',
      'concepts.source_url as sourceUrl',
    )
  return rows.map(toConcept)
}

export async function getConceptBySlug(
  slug: string,
  db = connection,
): Promise<Concept | undefined> {
  const row = await db('concepts')
    .join('topics', 'concepts.topic_id', 'topics.id')
    .where('concepts.slug', slug)
    .select(
      'concepts.id as id',
      'concepts.slug as slug',
      'concepts.title as title',
      'topics.slug as topic',
      'concepts.summary as summary',
      'concepts.diagram_url as diagramUrl',
      'concepts.kind as kind',
      'concepts.source_name as sourceName',
      'concepts.source_url as sourceUrl',
    )
    .first()

  if (!row) return undefined

  const related = await db('related_concepts')
    .join('concepts', 'related_concepts.related_concept_id', 'concepts.id')
    .where('related_concepts.concept_id', row.id)
    .select('concepts.slug as slug', 'concepts.title as title')

  return { ...toConcept(row), relatedConcepts: related }
}

interface Row {
  slug: string
  title: string
  topic: string
  summary: string
  diagramUrl: string
  kind: 'concept' | 'reference'
  sourceName: string | null
  sourceUrl: string | null
}

function toConcept(row: Row): Concept {
  return {
    slug: row.slug,
    title: row.title,
    topic: row.topic,
    summary: row.summary,
    diagramUrl: row.diagramUrl,
    kind: row.kind,
    source:
      row.sourceName && row.sourceUrl
        ? { name: row.sourceName, url: row.sourceUrl }
        : null,
    relatedConcepts: [],
  }
}
