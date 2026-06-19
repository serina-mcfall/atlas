import { Link } from 'react-router'
import { Concept } from '../../models/Concept.ts'
import TopicChip from './TopicChip.tsx'
import styles from './ConceptSheet.module.css'
import { getConceptBody } from '../lib/conceptBodies.ts'
import { mdxComponents } from './mdxComponents.tsx'

interface Props {
  concept: Concept
}

export default function ConceptSheet({ concept }: Props) {
  return (
    <article className={styles.sheet} data-topic={concept.topic}>
      <h1 className={styles.title}>{concept.title}</h1>
      <div className={styles.topicChipSlot}>
        <TopicChip topic={concept.topic} />
      </div>
      <p className={styles.summary}>{concept.summary}</p>
      <div className={styles.diagram}>
        <img src={concept.diagramUrl} alt={`Diagram for ${concept.title}`} />
      </div>
      <div className={styles.explanation}>
        {(() => {
          const Body = getConceptBody(concept.slug)
          return Body ? (
            <Body components={mdxComponents} />
          ) : (
            <p>Body coming in a focused session.</p>
          )
        })()}
      </div>
      {concept.source && (
        <p className={styles.source}>
          Source: <a href={concept.source.url}>{concept.source.name}</a>
        </p>
      )}
      {concept.relatedConcepts.length > 0 && (
        <nav className={styles.related} aria-label="Related concepts">
          <span className={styles.relatedLabel}>Related:</span>
          {concept.relatedConcepts.map((r, i) => (
            <span key={r.slug}>
              {i > 0 && <span className={styles.relatedDivider}> · </span>}
              <Link to={`/${r.slug}`}>{r.title}</Link>
            </span>
          ))}
        </nav>
      )}
    </article>
  )
}
