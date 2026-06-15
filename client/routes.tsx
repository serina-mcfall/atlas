import { createRoutesFromElements, Route } from 'react-router'
import ConceptListPage from './components/ConceptListPage.tsx'
import ConceptDetailPage from './components/ConceptDetailPage.tsx'
import Layout from './components/Layout.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<ConceptListPage />} />
    <Route path="/:slug" element={<ConceptDetailPage />} />
  </Route>,
)
