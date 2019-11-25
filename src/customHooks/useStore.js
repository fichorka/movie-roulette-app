import { useReducer } from 'react'
import rootReducer from '../reducers'
import { IMAGE_CONFIG } from '../utilities/constants.js'

// useStore
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  return { state, dispatch }
}

// for dev
const MOVIE = {
  backdropPath: '/rRhoMIqgdX9wEtRUOLsqXKkH9I0.jpg',
  companies: Array(4),
  0: 'Dune Entertainment, ',
  1: 'Scott Free Productions, ',
  2: 'Brandywine Productions, ',
  3: '20th Century Fox',
  length: 4,
  displayTitle: 'Prometheus (2012)',
  id: 70981,
  language: 'en',
  overview: 'A team of explorers discover a clue to the origins of mankind on Earth, leading them on a journey to the darkest corners of the universe. There, they must fight a terrifying battle to save the future of the human race.',
  popularity: 22.604,
  posterPath: '/ng8ALjSDhUmwLl7vtjUWIZNQSlt.jpg',
  stars: '★★★★★★☆☆☆☆',
  voteAverage: 6.4
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
  theme: 1
  // dev Templates
  // movies: [
  //   MOVIE,
  //   MOVIE,
  //   MOVIE,
  //   MOVIE,
  //   MOVIE,
  //   MOVIE
  // ]
}
