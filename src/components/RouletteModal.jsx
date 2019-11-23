import React, { Fragment } from 'react'

// RouletteModal
export default ({ state, dispatch }) => {
  function closeModal () {
    dispatch({ type: 'TOGGLE_MODAL' })
  }
  function handleSubmit (e) {
    const { target } = e
    for (const t in target) {
      if (target[t].checked) {
        dispatch({ type: 'SET_SELECTED_GENRE', selectedGenre: target[t].value })
        dispatch({ type: 'TOGGLE_MODAL' })
        break
      }
    }
  }
  const visibilityClass = state.isModalVisible ? ' visible' : ''
  return (
    <div className={'modal' + visibilityClass}>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault()
          handleSubmit(e)
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
        <input className='roll-button' type='submit' value='ROLL' />
      </form>
    </div>
  )
}
