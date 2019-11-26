import React from 'react'

// MovieDetails
export default ({ voteAverage, popularity, language, companies }) => {
  return (
    <div className='details'>
      <span className='row'>
        <span className='name'>Rating: </span><span className='value'>{voteAverage}</span>
      </span>
      <span className='row'>
        <span className='name'>Popularity: </span><span className='value'>{popularity}</span><br />
      </span>
      <span className='row'>
        <span className='name'>Language: </span><span className='value'>{language}</span><br />
      </span>
      <span className='row'>
        <span className='name'>Companies: </span>
        <span className='value'>
          {companies}
        </span>
      </span>
    </div>
  )
}
