import React from 'react'
import { Link } from 'react-router-dom'
import getImageUrl from '../utilities/getImageUrl'

// Card
export default ({ state, movie }) => {
  const {
    id = null,
    displayTitle = 'n/a',
    language = 'n/a',
    posterPath = 'n/a',
    voteAverage
  } = movie

  const {
    baseUrl,
    posterSize
  } = state.imageConfig

  const imageUrl = getImageUrl(baseUrl, posterSize, posterPath)

  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className='card'>
          <div className='img' style={{ backgroundImage: imageUrl }} />

          <div className='textbox'>
            <h2 className='title'>{displayTitle}</h2>
            <span className='lang'>language: {language}</span>
          </div>
          <span className='floating-rating'>
            {voteAverage}
          </span>
        </div>
      </Link>
    </>
  )
}
