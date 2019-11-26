import { useEffect } from 'react'
import { fetchMovie } from '../fetchMovies'
import extractMovieData from '../utilities/extractMovieData'

// useMovieFetch
export default ({ isLoading, selectedGenre }, dispatch) => {
  useEffect(() => {
    if (isLoading) {
      for (let i = 6; i > 0; i--) {
        fetchMovie(selectedGenre)
          .then(res => extractMovieData(res, dispatch))
          .then(res => dispatch({ type: 'ADD_MOVIE', movies: res }))
          .then(() => { if (i === 1) dispatch({ type: 'SET_IS_LOADING', isLoading: false }) })
      }
    }
  }, [isLoading, selectedGenre])
}
