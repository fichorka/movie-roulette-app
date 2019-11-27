import { useEffect } from 'react'
import { fetchGenres } from '../fetchFunctions'

// useGenreFetch
export default ({ isModalVisible, isGenresFetched }, dispatch) => {
  useEffect(() => {
    if (isModalVisible && !isGenresFetched) {
      fetchGenres()
        .then(res => dispatch({ type: 'SET_GENRES', genres: res }))
        .then(() => dispatch({ type: 'SET_IS_GENRES_FETCHED', isGenresFetched: true }))
    }
  }, [isModalVisible, isGenresFetched])
}
