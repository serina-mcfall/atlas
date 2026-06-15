export interface Concept {
  slug: string
  title: string
  topic: string
  summary: string
  diagramUrl: string
  explanation: string
  source: { name: string; url: string } | null
  relatedConcepts: { slug: string; title: string }[]
}
