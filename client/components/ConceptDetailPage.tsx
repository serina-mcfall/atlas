import { useEffect } from 'react'
import { useParams } from 'react-router'

import { Concept } from '../../models/Concept.ts'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

const rootURL = new URL(`/api/v1`, document.baseURI)

interface Props extends Concept {}

function ConceptDetailPage() {
  const params = useParams()
  const id = Number(params.id)

  const concept = useQuery({
    queryKey: ['concepts', id],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/concepts/${id}`)
      return res.body as Concept
    },
  })

  if (isNaN(id)) {
    throw new Error(`Invalid id: ${params.id}`)
  }

  if (concept.isPending) {
    return <LoadingIndicator />
  }

  if (concept.isError || !concept.data) {
    return <ErrorMessage error={concept.error} />
  }

  return <ConceptDetail {...concept.data} />
}

function ConceptDetail({
  source,
  license,
  title,
  diagramUrl,
  comments,
}: Props) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} — Atlas`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <>
      <h2>{title}</h2>
      <img src={diagramUrl} alt={`${title}, concept by ${source.name}`} />
      <dl>
        <dt>Source</dt>
        <dd>
          <a href={source.url}>{source.name}</a>
        </dd>
        <dt>License</dt>
        <dd>
          <a href={license.url}>{license.name}</a>
        </dd>
      </dl>
      {comments.length > 0 && (
        <>
          <h3>Comments</h3>
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default ConceptDetailPage
