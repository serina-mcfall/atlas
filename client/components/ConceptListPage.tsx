import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

import { fetchConcepts } from '../apis/concepts.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'
import TopicSection from './TopicSection.tsx'

function ConceptListPage() {
  useEffect(() => {
    document.title = 'Atlas'
  }, [])

  const concepts = useQuery({
    queryKey: ['concepts'],
    queryFn: () => fetchConcepts(),
  })

  if (concepts.isPending) {
    return <LoadingIndicator />
  }

  if (concepts.isError || !concepts.data) {
    return <ErrorMessage error={concepts.error} />
  }

  const byTopic = new Map<string, typeof concepts.data>()
  for (const concept of concepts.data) {
    const list = byTopic.get(concept.topic) ?? []
    list.push(concept)
    byTopic.set(concept.topic, list)
  }

  return (
    <>
      <p>
        Atlas is a library of code-concept sheets — short, diagram-led
        explanations of things I keep coming back to. Each topic is
        colour-coded; click any concept to read.
      </p>
      {Array.from(byTopic.entries()).map(([topic, list]) => (
        <TopicSection key={topic} topic={topic} concepts={list} />
      ))}
    </>
  )
}

export default ConceptListPage
