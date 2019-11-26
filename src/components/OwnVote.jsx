import React from 'react'

// OwnVote
export default ({ movieId, vote, dispatch }) => {
  function handleVote (newVote) {
    dispatch({ type: 'RATE_MOVIE', value: newVote, id: movieId })
  }
  function renderStars (stars) {
    const result = []
    for (let i = 1; i < 11; i++) {
      result.push(
        <span key={`star${i}`} className='star' onClick={() => handleVote(i)}>
          {i > vote ? '☆' : '★'}
        </span>
      )
    }
    return result
  }
  return (
    <div className='stars'>
      {renderStars(vote)}
    </div>
  )
}
