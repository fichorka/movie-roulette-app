import React from 'react'

// RouletteButton
export default (props) => {
  return (
    <button
      className='floating-button' onClick={() => props.dispatch({ type: 'TOGGLE_MODAL' })}
    >
      XXX
    </button>
  )
}
