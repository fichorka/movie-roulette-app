// root reducer
export default (state, action) => {
  console.log('reducer')
  switch (action.type) {
    case 'SET_PAGE':
      console.log(action.page)
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
    default:
      return state
  }
}
