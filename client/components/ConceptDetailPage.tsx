import { useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'

import { Concept } from '../../models/Concept.ts'
import { fetchConcept } from '../apis/concepts.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

function ConceptDetailPage() {
  const { slug } = useParams()

  const concept = useQuery({
    queryKey: ['concepts', slug],
    queryFn: () => fetchConcept(slug!),
    enabled: Boolean(slug),
  })

  if (concept.isPending) {
    return <LoadingIndicator />
  }

  if (concept.isError || !concept.data) {
    return <ErrorMessage error={concept.error} />
  }

  return <ConceptDetail {...concept.data} />
}

function ConceptDetail({
  title,
  topic,
  summary,
  diagramUrl,
  explanation,
  source,
  relatedConcepts,
}: Concept) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} — Atlas`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <div data-topic={topic}>
      <h2>{title}</h2>
      <p className="concept-topic">{topic}</p>
      <p className="concept-summary">{summary}</p>
      <img src={diagramUrl} alt={`${title} diagram`} />
      <div className="concept-explanation">{explanation}</div>
      {source && (
        <dl>
          <dt>Source</dt>
          <dd>
            <a href={source.url}>{source.name}</a>
          </dd>
        </dl>
      )}
      {relatedConcepts.length > 0 && (
        <nav aria-label="Related concepts">
          <h3>Related concepts</h3>
          <ul>
            {relatedConcepts.map((related) => (
              <li key={related.slug}>
                <Link to={`/${related.slug}`}>{related.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

export default ConceptDetailPage
