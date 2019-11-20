import React from 'react'

// LoadButton
export default ({ handleOnload }) => {
  return (
    <button className='load-button' onClick={() => handleOnload()}>
      LOAD
    </button>
  )
}
