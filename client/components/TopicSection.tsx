import ConceptCard from './ConceptCard.tsx'
import TopicChip from './TopicChip.tsx'
import styles from './TopicSection.module.css'

interface ConceptSummary {
  slug: string
  title: string
  summary: string
}

interface Props {
  topic: string
  concepts: ConceptSummary[]
}

export default function TopicSection({ topic, concepts }: Props) {
  return (
    <section
      className={styles.section}
      data-topic={topic}
      aria-labelledby={`topic-${topic}`}
    >
      <header className={styles.header}>
        <h2 id={`topic-${topic}`} className={styles.heading}>
          <TopicChip topic={topic} />
        </h2>
        <span className={styles.count}>
          {concepts.length} {concepts.length === 1 ? 'concept' : 'concepts'}
        </span>
      </header>
      <div className={styles.grid}>
        {concepts.map((c) => (
          <ConceptCard key={c.slug} {...c} />
        ))}
      </div>
    </section>
  )
}
