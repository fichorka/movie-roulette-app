import { useEffect } from 'react'

// useGenreSet
export default ({ selectedGenre }, dispatch) => {
  useEffect(() => {
    if (selectedGenre) {
      dispatch({ type: 'REMOVE_ALL_MOVIES' })
      dispatch({ type: 'SET_IS_LOADING', isLoading: true })
    }
  }, [selectedGenre])
}
