import React from 'react'

// LoadButton
export default ({ isLoaded, dispatch }) => {
  function handleLoad () {
    dispatch({ type: 'SET_IS_LOADING', isLoading: true })
  }
  const handleClick = isLoaded ? handleLoad : null
  const loadingClass = isLoaded ? '' : ' loading'
  return (
    <button className={`button load${loadingClass}`} onClick={() => handleClick()}>
      LOAD
    </button>
  )
}
