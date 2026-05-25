import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import { Link } from 'react-router'

import { Artwork } from '../../models/Artwork.ts'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

const rootURL = new URL(`/api/v1`, document.baseURI)

function ArtworkListPage() {
  useEffect(() => {
    document.title = 'Art Gallery'
  }, [])

  const artworks = useQuery({
    queryKey: ['artwork'],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/artwork`)
      return res.body as Artwork[]
    },
  })

  if (artworks.isPending) {
    return <LoadingIndicator />
  }

  if (artworks.isError || !artworks.data) {
    return <ErrorMessage error={artworks.error} />
  }

  return (
    <ul>
      {artworks.data.map((artwork) => (
        <li key={artwork.id}>
          <Link to={`/${artwork.id}`}>
            {artwork.title} by {artwork.artist.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default ArtworkListPage
