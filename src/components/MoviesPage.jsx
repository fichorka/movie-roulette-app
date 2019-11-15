import React from 'react'
import { Link } from 'react-router-dom'

// Movies Page
export default (props) => {
  return (
    <div id='movies-page' className='page right'>
      <h1>Movie Details</h1>
      <p>{props.state.movieId}</p>
      <Link to='/'>Home Page</Link>
    </div>
  )
}
