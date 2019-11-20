import React from 'react'
import { Link } from 'react-router-dom'
import useStarRating from '../hookExtensions/useStarRating'
import { selectMovie } from '../reducers'

// MoviePage
export default ({ state }) => {
  const movie = selectMovie(state) || {}
  console.log(state.movies[0])
  const { title = 'Movie not found', release_date = 'n/a', backdrop_path = '', overview = '', vote_average = 'n/a', popularity = 'n/a', production_companies = [], original_language = 'n/a' } = movie

  const year = release_date.slice(0, release_date.indexOf('-'))
  const displayTitle = movie ? `${title} (${year})` : title
  const stars = useStarRating(vote_average)
  return (
    <div id='movie-page' className='page right'>
      <Link to='/'><div className='nav-button left-button'>‹</div></Link>
      <div className='content'>
        <h1 className='title'>{displayTitle}</h1>
        <div className='img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdrop_path})` }}>
          <p className='textbox'>{overview}</p>
        </div>
        <div className='details'>
          <span className='row'>
            <span className='name'>Rating: </span><span className='value'>{vote_average}</span>
          </span>
          <span className='row'>
            <span className='name'>Popularity: </span><span className='value'>{popularity}</span><br />
          </span>
          <span className='row'>
            <span className='name'>Language: </span><span className='value'>{original_language}</span><br />
          </span>
          <span className='row'>
            <span className='name'>Companies: </span>
            {production_companies.map((c, i) => {
              const lineEnd = (i + 1 === production_companies.length ? '' : ', ')
              return <span key={c.id} className='value'>{c.name + lineEnd}</span>
            })}
          </span>
        </div>
        <div className='rating'>
          <div id='stars'>
            {stars}
          </div>
        </div>

      </div>
    </div>
  )
}
