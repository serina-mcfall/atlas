import styles from './TopicChip.module.css'

interface Props {
  topic: string
}

export default function TopicChip({ topic }: Props) {
  return (
    <span className={styles.chip} data-topic={topic}>
      {topic}
    </span>
  )
}
