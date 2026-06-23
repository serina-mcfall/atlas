import { Concept } from '../../models/Concept.ts'
import TopicChip from './TopicChip.tsx'
import { getConceptBody } from '../lib/conceptBodies.ts'
import { Section, Cmd } from './referenceComponents.tsx'
import styles from './ReferenceSheet.module.css'

interface Props {
  concept: Concept
}

const mdxComponents = { Section, Cmd }

export default function ReferenceSheet({ concept }: Props) {
  const Body = getConceptBody(concept.slug)
  return (
    <article className={styles.sheet} data-topic={concept.topic}>
      <header className={styles.header}>
        <div className={styles.topicChipSlot}>
          <TopicChip topic={concept.topic} />
        </div>
        <h1 className={styles.title}>{concept.title}</h1>
        <p className={styles.summary}>{concept.summary}</p>
      </header>
      <div className={styles.grid}>
        {Body ? (
          <Body components={mdxComponents} />
        ) : (
          <p>Body coming in a focused session.</p>
        )}
      </div>
    </article>
  )
}
