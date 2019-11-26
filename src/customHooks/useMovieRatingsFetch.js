import { useEffect } from 'react'
import { fetchRatedMovies } from '../fetchMovies'

// useMovieRatingsFetch
export default ({ sessionId, rateQueue }, dispatch) => {
  useEffect(() => {
    if (sessionId && rateQueue.length === 0) {
      // timeout is required for a server to have time for storing the last post of movie rating
      window.setTimeout(() => fetchRatedMovies(sessionId, 1)
        .then(res => dispatch({ type: 'SET_OWN_MOVIE_RATINGS', movies: res })), 1000)
    }
  }, [sessionId, rateQueue.length])
}
