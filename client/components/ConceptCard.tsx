import { Link } from 'react-router'
import styles from './ConceptCard.module.css'

interface Props {
  slug: string
  title: string
  summary: string
}

export default function ConceptCard({ slug, title, summary }: Props) {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>
        <Link to={`/${slug}`} className={styles.titleLink}>
          {title}
        </Link>
      </h3>
      <p className={styles.summary}>{summary}</p>
    </article>
  )
}
