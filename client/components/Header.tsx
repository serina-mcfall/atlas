import { Link, useLocation } from 'react-router'
import styles from './Header.module.css'

export default function Header() {
  const location = useLocation()
  const onHome = location.pathname === '/'

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.wordmark}>
        Atlas
      </Link>
      {!onHome && (
        <Link to="/" className={styles.back}>
          ← back to library
        </Link>
      )}
    </header>
  )
}
