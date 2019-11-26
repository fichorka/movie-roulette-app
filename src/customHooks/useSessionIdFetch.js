import { useEffect } from 'react'
import { fetchSessionId } from '../fetchMovies'

// useSessionIdFetch
export default ({ sessionId }, dispatch) => {
  useEffect(() => {
    if (!sessionId) {
      fetchSessionId()
        .then(res => dispatch({ type: 'SET_SESSION_ID', id: res }))
    }
  }, [sessionId])
}
