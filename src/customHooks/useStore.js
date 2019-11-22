import { useReducer } from 'react'
import rootReducer from '../reducers'
import { IMAGE_CONFIG, GENRES } from '../utilities/constants.js'

// useStore
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return { state, dispatch }
}

const initialState = {
  prevPage: null,
  page: null,
  isModalVisible: false,
  isLoading: true,
  movies: [],
  isLoaded: false,
  imageConfig: IMAGE_CONFIG,
  genres: GENRES
}
