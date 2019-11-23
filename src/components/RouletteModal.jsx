import React, { Fragment } from 'react'

// RouletteModal
export default ({ state, dispatch }) => {
  function closeModal () {
    dispatch({ type: 'TOGGLE_MODAL' })
  }
  const visibilityClass = state.isModalVisible ? ' visible' : ''
  return (
    <div className={'modal' + visibilityClass}>
      <form
        className='form' onChange={e => {
          dispatch({ type: 'SET_SELECTED_GENRE', selectedGenre: e.target.value })
          dispatch({ type: 'TOGGLE_MODAL' })
        }}
      >
        <h1 className='title'>Movie Roulette</h1>
        <span className='close-btn' onClick={closeModal}>X</span>
        <span className='query'>Select genre:</span>
        <div className='content'>
          {state.genres.map(g => {
            return (
              <Fragment key={g.id}>
                <input type='radio' id={g.id} name='genre' value={g.id} />
                <label htmlFor={g.id}>{g.name}</label><br />
              </Fragment>
            )
          })}
        </div>
        <button className='roll-button'>ROLL</button>
      </form>
    </div>
  )
}
