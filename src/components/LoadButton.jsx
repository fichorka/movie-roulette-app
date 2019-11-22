import React from 'react'

// LoadButton
export default ({ handleOnload }) => {
  return (
    <button className='button load' onClick={() => handleOnload()}>
      LOAD
    </button>
  )
}
