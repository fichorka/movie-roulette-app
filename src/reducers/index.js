// root reducer
export default (state, action) => {
  console.log('reducer')
  switch (action.type) {
    case 'SET_PAGE':
      if (state.page === action.page) return state
      return {
        ...state,
        prevPage: state.page,
        page: action.page
      }
    case 'SET_MOVIE_ID':
      if (state.movieId === action.movieId) return state
      return {
        ...state,
        movieId: action.movieId
      }
    case 'TOGGLE_MODAL':
      return {
        ...state,
        isModalVisible: !state.isModalVisible
      }
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [
          ...state.movies,
          action.movies
        ]
      }
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: action.isLoading
      }
    case 'SET_IS_LOADED':
      return {
        ...state,
        isLoaded: action.isLoaded
      }
    case 'SET_GENRES':
      return {
        ...state,
        genres: action.genres
      }
    case 'SET_IS_GENRES_FETCHED':
      return {
        ...state,
        isGenresFetched: action.isGenresFetched
      }
    case 'SET_IMAGE_CONFIG':
      return {
        ...state,
        imageConfig: action.imageConfig
      }
    case 'SET_IS_IMAGE_CONFIG_FETCHED':
      return {
        ...state,
        isImageConfigFetched: action.isImageConfigFetched
      }
    default:
      return state
  }
}

// selectors
export const selectMovie = (state, id) => (state.movies.filter(m => m.id === id)[0])
