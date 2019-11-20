import React, { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'
import LoadButton from '../components/LoadButton.jsx'
import RouletteButton from '../components/RouletteButton.jsx'
import { Link } from 'react-router-dom'

// HomePage
export default ({ state, dispatch }) => {
  function handleOnload () {
    dispatch({ type: 'SET_SHOULD_LOAD', isLoading: true })
  }
  function renderMovies () {
    return state.movies.map(m => (
      <Card key={m.id} movie={m} />
    ))
  }
  const [moviex, setMoviex] = useState(renderMovies())
  useEffect(() => {
    if (state.movies.length && state.movies.length % 6 === 0 && !state.isLoading) {
      setMoviex(renderMovies())
    }
  }, [state.movies.length, state.isLoading])

  return (
    <div id='home-page' className='page left'>
      <div className='content'>
        <Link to={`/movies/${state.movieId}`}><div className='nav-button right-button'>›</div></Link>
        {moviex}
        {/* {!state.isLoading && state.movies.map(m => (
          <Card key={m.id} movie={m} />
        ))} */}
      </div>
      <LoadButton handleOnload={handleOnload} />
      <RouletteButton state={state} />
    </div>
  )
}
