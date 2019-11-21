import { useEffect } from 'react'
import { fetchMovie } from '../fetchMovies'

// useMovieFetch
export default (isLoading, dispatch) => {
  useEffect(() => {
    if (isLoading) {
      for (let i = 6; i > 0; i--) {
        fetchMovie()
          .then(res => dispatch({ type: 'ADD_MOVIE', movies: res })).then(() => { if (i === 1) dispatch({ type: 'SET_IS_LOADING', isLoading: false }) })
      }
    }
  }, [isLoading])
}
