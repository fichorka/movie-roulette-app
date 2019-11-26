import React from 'react'
import LoadButton from '../components/LoadButton.jsx'
import RouletteButton from '../components/RouletteButton.jsx'
import { Link } from 'react-router-dom'
import useCards from '../customHooks/useCards.jsx'
import RouletteModal from '../components/RouletteModal.jsx'

// HomePage
export default ({ state, dispatch }) => {
  const cards = useCards(state)
  const { movieId, isLoaded } = state

  return (
    <div id='home-page' className='page left'>
      <div className='content'>
        <nav>
          <Link to={`/movies/${movieId}`}>
            <div className='nav-button right'>›</div>
          </Link>
        </nav>

        {/* ***cards*** */}
        {cards}

      </div>

      {/* floating buttons */}
      <LoadButton isLoaded={isLoaded} dispatch={dispatch} />
      <RouletteButton dispatch={dispatch} />

      <RouletteModal state={state} dispatch={dispatch} />
    </div>
  )
}
