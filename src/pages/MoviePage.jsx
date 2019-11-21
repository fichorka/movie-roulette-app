import React from 'react'
import { Link } from 'react-router-dom'
import { selectMovie } from '../reducers'
import extractMovieData from '../utilities/extractMovieData'

// MoviePage
export default ({ state }) => {
  const movie = selectMovie(state) || {}

  const {
    displayTitle,
    backdropPath,
    overview,
    voteAverage,
    popularity,
    language,
    companies,
    stars
  } = extractMovieData(movie)

  return (
    <div id='movie-page' className='page right'>
      <Link to='/'><div className='nav-button left-button'>‹</div></Link>
      <div className='content'>
        <h1 className='title'>{displayTitle}</h1>
        <div className='img' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${backdropPath})` }}>
          <p className='textbox'>{overview}</p>
        </div>
        <div className='details'>
          <span className='row'>
            <span className='name'>Rating: </span><span className='value'>{voteAverage}</span>
          </span>
          <span className='row'>
            <span className='name'>Popularity: </span><span className='value'>{popularity}</span><br />
          </span>
          <span className='row'>
            <span className='name'>Language: </span><span className='value'>{language}</span><br />
          </span>
          <span className='row'>
            <span className='name'>Companies: </span>
            {companies}
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
