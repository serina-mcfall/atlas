import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router'

import { fetchConcepts } from '../apis/concepts.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

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

  return (
    <ul>
      {concepts.data.map((concept) => (
        <li key={concept.slug}>
          <Link to={`/${concept.slug}`}>
            {concept.title} ({concept.topic})
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ConceptListPage
