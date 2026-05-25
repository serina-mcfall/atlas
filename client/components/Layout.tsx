import { Outlet } from 'react-router'

import Header from './Header.tsx'
import Footer from './Footer.tsx'

export default function Layout() {
  return (
    <>
      <div id="page-container">
        <div id="content-wrap">
          <Header />
          <main id="main-content">
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </>
  )
}
