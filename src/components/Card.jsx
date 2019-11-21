import React from 'react'
import { Link } from 'react-router-dom'

// Card
export default ({ movie }) => {
  const {
    id = null,
    displayTitle = 'n/a',
    language = 'n/a',
    posterPath = 'n/a'
  } = movie

  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className='card'>
          <div className='img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${posterPath})` }} />

          <div className='textbox'>
            <h2 className='title'>{displayTitle}</h2>
            <span className='lang'>language: {language}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
