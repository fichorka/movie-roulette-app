import React from 'react'
import Card from './Card.jsx'
import LoadButton from './LoadButton.jsx'
import RouletteButton from './RouletteButton.jsx'

// HomePage
export default (props) => {
  const { state, dispatch } = props
  return (
    <div id='home-page' className='page left'>
      <div>
        <Card id='12345' />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <LoadButton />
      <RouletteButton dispatch={dispatch} state={state} />
    </div>
  )
}
