import React from 'react'

// RouletteButton
export default (props) => {
  return (
    <button
      className='button roulette' onClick={() => props.dispatch({ type: 'TOGGLE_MODAL' })}
    >
      XXX
    </button>
  )
}
