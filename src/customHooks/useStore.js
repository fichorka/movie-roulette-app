import { useReducer } from 'react'
import rootReducer from '../reducers'

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
  imageConfig: {
    baseUrl: 'https://image.tmdb.org/t/p/',
    backdropSize: 'w1280',
    posterSize: 'w500'
  },
  // consider fetching genres dynamically
  genres: [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]
}
