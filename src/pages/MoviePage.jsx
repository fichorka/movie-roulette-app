import React from 'react'
import { Link } from 'react-router-dom'
import { selectMovie } from '../reducers'
import getImageUrl from '../utilities/getImageUrl'
import extractMovieData from '../utilities/extractMovieData'

// MoviePage
export default ({ state }) => {
  const movie = selectMovie(state, state.movieId) || extractMovieData({})

  const {
    displayTitle,
    backdropPath,
    overview,
    voteAverage,
    popularity,
    language,
    companies,
    stars
  } = movie

  const { backdropSizeIndex: i } = state

  const {
    baseUrl,
    backdropSizes
  } = state.imageConfig

  const imageUrl = getImageUrl(baseUrl, backdropSizes[i], backdropPath)

  return (
    <div id='movie-page' className='page right'>
      <nav><Link to='/'><div className='nav-button left'>‹</div></Link></nav>
      <div className='content'>
        <h1 className='title'>{displayTitle}</h1>
        <div className='img' style={{ backgroundImage: imageUrl }} />
        <p className='textbox'>{overview}</p>
        <div className='rating'>
          <div id='stars'>
            {stars}
          </div>
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
            <span className='value'>
              {companies}
            </span>
          </span>
        </div>
      </div>
    </div>
  )
}
