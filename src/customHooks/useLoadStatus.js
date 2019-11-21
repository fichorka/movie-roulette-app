import { useEffect } from 'react'

// useMovieFetch
export default (state, dispatch) => {
  useEffect(() => {
    let temp
    if (state.movies.length && state.movies.length % 6 === 0 && !state.isLoading) temp = true
    else temp = false
    dispatch({ type: 'SET_IS_LOADED', isLoaded: temp })
  }, [state.movies.length, state.isLoading])
}
