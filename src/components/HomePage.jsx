import React from 'react'
import { Link } from 'react-router-dom'

// HomePage
export default () => {
  return (
    <div id='home-page' className='page left'>
      <h1>Heading</h1>
      <Link to='/movies/id567'>Movies Page</Link>
    </div>
  )
}
