import { useReducer } from 'react'
import rootReducer from '../reducers'
import { IMAGE_CONFIG } from '../utilities/constants.js'

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
  genres: [],
  isGenresFetched: false,
  imageConfig: IMAGE_CONFIG,
  backdropSizeIndex: 2,
  posterSizeIndex: 4,
  selectedGenre: '',
  theme: 1,
  ratedMovies: [],
  rateQueue: [],
  sessionId: null,
  ownVote: 0
}
