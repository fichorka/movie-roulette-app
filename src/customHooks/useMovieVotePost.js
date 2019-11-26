import { useEffect } from 'react'
import { postMovieVote } from '../fetchMovies'

// useMovieVotePost
export default ({ rateQueue, sessionId }, dispatch) => {
  useEffect(() => {
    if (rateQueue.length > 0) {
      const { id, value } = rateQueue[0]
      postMovieVote(id, value, sessionId)
        .then(() => dispatch({ type: 'SAVE_OWN_MOVIE_VOTE', id, value }))
    }
  }, [rateQueue.length])
}
