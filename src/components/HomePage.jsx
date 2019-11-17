import React from 'react'
import Card from './Card.jsx'

// HomePage
export default () => {
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
    </div>
  )
}
