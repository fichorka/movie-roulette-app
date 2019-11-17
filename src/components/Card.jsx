import React from 'react'
import Placeholder from './Placeholder.jsx'
import { Link } from 'react-router-dom'

// Card
export default (props) => {
  return (
    <>
      <Link to={`/movies/${props.id}`}>
        <div className='card'>
          <Placeholder />
          <div className='textbox'>
            <h2 className='title'>Title</h2>
            <span className='lang'>language: en</span>
          </div>
        </div>
      </Link>
    </>
  )
}
