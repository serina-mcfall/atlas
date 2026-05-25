import { useEffect } from 'react'
import { useParams } from 'react-router'

import { Artwork } from '../../models/Artwork.ts'
import { useQuery } from '@tanstack/react-query'
import request from 'superagent'
import LoadingIndicator from './LoadingIndicator.tsx'
import ErrorMessage from './ErrorMessage.tsx'

const rootURL = new URL(`/api/v1`, document.baseURI)

interface Props extends Artwork {}

function ArtworkDetailPage() {
  const params = useParams()
  const id = Number(params.id)

  const artwork = useQuery({
    queryKey: ['artwork', id],
    queryFn: async () => {
      const res = await request.get(`${rootURL}/artwork/${id}`)
      return res.body as Artwork
    },
  })

  if (isNaN(id)) {
    throw new Error(`Invalid id: ${params.id}`)
  }

  if (artwork.isPending) {
    return <LoadingIndicator />
  }

  if (artwork.isError || !artwork.data) {
    return <ErrorMessage error={artwork.error} />
  }

  return <ArtworkDetail {...artwork.data} />
}

function ArtworkDetail({ artist, license, title, imageUrl, comments }: Props) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} — Art Gallery`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  return (
    <>
      <h2>{title}</h2>
      <img src={imageUrl} alt={`${title}, artwork by ${artist.name}`} />
      <dl>
        <dt>Artist</dt>
        <dd>
          <a href={artist.url}>{artist.name}</a>
        </dd>
        <dt>License</dt>
        <dd>
          <a href={license.url}>{license.name}</a>
        </dd>
      </dl>
      {comments.length > 0 && (
        <>
          <h3>Comments</h3>
          <ul className="comments-list">
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default ArtworkDetailPage
