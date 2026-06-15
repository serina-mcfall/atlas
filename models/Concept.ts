export interface Concept {
  id: number
  title: string
  comments: string[]
  diagramUrl: string
  source: {
    name: string
    url: string
  }
  license: {
    url: string
    name: string
  }
}
