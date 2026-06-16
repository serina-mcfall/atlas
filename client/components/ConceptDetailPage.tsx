import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { fetchConcept } from '../apis/concepts.ts'
import ConceptSheet from './ConceptSheet.tsx'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

function ConceptDetailPage() {
  const { slug } = useParams()

  const concept = useQuery({
    queryKey: ['concepts', slug],
    queryFn: () => fetchConcept(slug!),
    enabled: Boolean(slug),
  })

  useEffect(() => {
    if (concept.data) {
      const previousTitle = document.title
      document.title = `${concept.data.title} — Atlas`
      return () => {
        document.title = previousTitle
      }
    }
  }, [concept.data])

  if (concept.isPending) {
    return <LoadingIndicator />
  }

  if (concept.isError || !concept.data) {
    return <ErrorMessage error={concept.error} />
  }

  return <ConceptSheet concept={concept.data} />
}

export default ConceptDetailPage
