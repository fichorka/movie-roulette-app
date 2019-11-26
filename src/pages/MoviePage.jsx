import React from 'react'
import { Link } from 'react-router-dom'
import { selectMovie } from '../reducers'
import getImageUrl from '../utilities/getImageUrl'
import extractMovieData from '../utilities/extractMovieData'
import OwnVote from '../components/OwnVote.jsx'
import MovieDetails from '../components/MovieDetails.jsx'

// MoviePage
export default ({ state, dispatch }) => {
  const movie = selectMovie(state, state.movieId) || extractMovieData({})

  const {
    id,
    displayTitle,
    backdropPath,
    overview,
    voteAverage,
    popularity,
    language,
    companies,
    ownVote
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
        <OwnVote vote={ownVote} movieId={id} dispatch={dispatch} />
        <MovieDetails voteAverage={voteAverage} popularity={popularity} language={language} companies={companies} />
      </div>
    </div>
  )
}
