import React from 'react'
import { Link } from 'react-router-dom'

// Card
export default ({ movie }) => {
  const { id = null, title = 'n/a', original_language = 'n/a', release_date = 'n/a', poster_path = 'n/a' } = movie

  const year = release_date.slice(0, release_date.indexOf('-'))
  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className='card'>
          <div className='img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${poster_path})` }} />

          <div className='textbox'>
            <h2 className='title'>{`${title} (${year})`}</h2>
            <span className='lang'>language: {original_language}</span>
          </div>
        </div>
      </Link>
    </>
  )
}
