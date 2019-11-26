import React from 'react'

// LoadButton
export default ({ handleOnload, isLoaded }) => {
  const loadingClass = isLoaded ? '' : ' loading'
  const handleClick = isLoaded ? handleOnload : () => {}
  return (
    <button className={`button load${loadingClass}`} onClick={() => handleClick()}>
      LOAD
    </button>
  )
}
