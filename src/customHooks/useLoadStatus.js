import { useEffect } from 'react'

// useLoadStatus
export default ({ movies, isLoading }, dispatch) => {
  useEffect(() => {
    let result
    if (movies.length && movies.length % 6 === 0 && !isLoading) result = true
    else result = false
    dispatch({ type: 'SET_IS_LOADED', isLoaded: result })
  }, [movies.length, isLoading])
}
