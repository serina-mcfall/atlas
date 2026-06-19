export interface Concept {
  slug: string
  title: string
  topic: string
  kind: 'concept' | 'reference'
  summary: string
  diagramUrl: string
  source: { name: string; url: string } | null
  relatedConcepts: { slug: string; title: string }[]
}
