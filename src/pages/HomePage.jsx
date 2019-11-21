import React from 'react'
import LoadButton from '../components/LoadButton.jsx'
import RouletteButton from '../components/RouletteButton.jsx'
import { Link } from 'react-router-dom'
import useCards from '../customHooks/useCards.jsx'
import RouletteModal from '../components/RouletteModal.jsx'

// HomePage
export default ({ state, dispatch }) => {
  function handleOnload () {
    dispatch({ type: 'SET_IS_LOADING', isLoading: true })
  }
  const cards = useCards(state)

  return (
    <div id='home-page' className='page left'>
      <div className='content'>
        <nav>
          <Link to={`/movies/${state.movieId}`}>
            <div className='nav-button right-button'>›</div>
          </Link>
        </nav>

        {/* ***cards*** */}
        {cards}

      </div>

      {/* floating buttons */}
      <LoadButton handleOnload={handleOnload} />
      <RouletteButton state={state} />

      <RouletteModal state={state} />
    </div>
  )
}
