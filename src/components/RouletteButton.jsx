import React from 'react'

// RouletteButton
export default ({ dispatch }) => {
  return (
    <button
      className='button roulette' onClick={() => dispatch({ type: 'TOGGLE_MODAL' })}
    >
      ⤮
    </button>
  )
}
