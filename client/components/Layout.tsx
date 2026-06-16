import { Outlet } from 'react-router'

import Header from './Header.tsx'
import Footer from './Footer.tsx'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.wrap}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
