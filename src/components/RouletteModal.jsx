import React from 'react'

// RouletteModal
export default (props) => {
  const { state } = props
  const visibilityClass = state.isModalVisible ? ' visible' : ''
  return (
    <div className={'modal' + visibilityClass}>
      <form className='form'>
        <h1 className='title'>Movie Roulette</h1>
        <div className='content'>
          <span>Select genre:</span>
          <input type='radio' id='drama' name='genre' value='drama' />
          <label htmlFor='drama'>drama</label><br />
          <input type='radio' id='action' name='genre' value='action' />
          <label htmlFor='action'>action</label><br />
          <input type='radio' id='comedy' name='genre' value='comedy' />
          <label htmlFor='comedy'>comedy</label><br />
        </div>
      </form>
    </div>
  )
}
