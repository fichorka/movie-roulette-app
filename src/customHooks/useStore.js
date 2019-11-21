import { useReducer } from 'react'
import rootReducer from '../reducers'

const initialState = {
  prevPage: null,
  page: null,
  isModalVisible: false,
  isLoading: true,
  movies: [],
  isLoaded: false,
  imageConfig: {
    baseUrl: 'https://image.tmdb.org/t/p/',
    backdropSize: 'w1280',
    posterSize: 'w500'
  }
}

// useStore
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return { state, dispatch }
}
