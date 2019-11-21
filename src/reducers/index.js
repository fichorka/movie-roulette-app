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
    default:
      return state
  }
}

// selectors
export const selectMovie = (state) => (state.movies.filter(m => m.id === state.movieId)[0])
