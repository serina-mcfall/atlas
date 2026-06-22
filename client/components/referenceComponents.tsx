import type { ReactNode } from 'react'
import styles from './referenceComponents.module.css'

interface SectionProps {
  num: string
  title: string
  children: ReactNode
}

export function Section({ num, title, children }: SectionProps) {
  return (
    <section className={styles.section} aria-labelledby={`section-${num}`}>
      <header className={styles.sectionHeader}>
        <h2 id={`section-${num}`} className={styles.sectionTitle}>
          {title}
        </h2>
        <span className={styles.sectionNum}>{num}</span>
        <div className={styles.cmdList}>{children}</div>
      </header>
    </section>
  )
}

interface CmdProps {
  code: string
  desc: string
}

export function Cmd({ code, desc }: CmdProps) {
  return (
    <div className={styles.cmdRow}>
      <code className={styles.cmdCode}>{code}</code>
      <span className={styles.cmdDesc}>{desc}</span>
    </div>
  )
}
