import { useReducer } from 'react'
import rootReducer from '../reducers'

const initialState = {
  prevPage: null,
  page: null,
  isModalVisible: false,
  isLoading: true,
  movies: [],
  isLoaded: false
}

// useStore
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return { state, dispatch }
}
