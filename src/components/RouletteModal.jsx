import React, { Fragment } from 'react'

// RouletteModal
export default (props) => {
  const { state } = props
  const visibilityClass = state.isModalVisible ? ' visible' : ''
  return (
    <div className={'modal' + visibilityClass}>
      <form className='form'>
        <h1 className='title'>Movie Roulette</h1>
        <span className='query'>Select genre:</span>
        <div className='content'>
          {state.isModalVisible && state.isGenresFetched && state.genres.map(g => {
            return (
              <Fragment key={g.id}>
                <input type='radio' id={g.id} name='genre' value={g.id} />
                <label htmlFor={g.id}>{g.name}</label><br />
              </Fragment>
            )
          })}
        </div>
        {/* <input type='radio' id='drama' name='genre' value='drama' />
          <label htmlFor='drama'>drama</label><br />
          <input type='radio' id='action' name='genre' value='action' />
          <label htmlFor='action'>action</label><br />
          <input type='radio' id='comedy' name='genre' value='comedy' />
          <label htmlFor='comedy'>comedy</label><br /> */}

      </form>
    </div>
  )
}
