import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Link } from 'react-router'

import { Concept } from '../../models/Concept.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

const rootURL = new URL(`/api/v1`, document.baseURI)

function ConceptListPage() {
  useEffect(() => {
    document.title = 'Atlas'
  }, [])

  const concepts = useQuery({
    queryKey: ['concepts'],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/concepts`)
      return res.body as Concept[]
    },
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
        <li key={concept.id}>
          <Link to={`/${concept.id}`}>
            {concept.title} by {concept.source.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ConceptListPage
