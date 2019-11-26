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
    case 'REMOVE_ALL_MOVIES':
      return {
        ...state,
        movies: []
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
    case 'SET_SELECTED_GENRE':
      return {
        ...state,
        selectedGenre: action.selectedGenre
      }
    case 'SWITCH_THEME':
    {
      let theme = state.theme
      if (state.theme > 3) {
        theme = 1
      } else {
        theme += 1
      }
      // debugger
      return {
        ...state,
        theme: theme
      }
    }
    case 'RATE_MOVIE':
      return {
        ...state,
        rateQueue: [...state.rateQueue, { id: action.id, value: action.value }]
      }
    case 'SAVE_OWN_MOVIE_VOTE': {
      // save a vote to a movie
      const newMovies = state.movies.map(m => {
        if (m.id === action.id) m.ownVote = action.value
        return m
      })

      // remove a movie from the queue
      const newQueue = state.rateQueue
      newQueue.shift()
      return {
        ...state,
        movies: newMovies,
        rateQueue: newQueue
      }
    }
    case 'SET_SESSION_ID':
      return {
        ...state,
        sessionId: action.id
      }
    case 'SET_OWN_MOVIE_RATINGS':
      // not needed now
      return {
        ...state,
        ratedMovies: action.movies
      }
    default:
      return state
  }
}

// selectors
export const selectMovie = (state, id) => (state.movies.filter(m => m.id === id)[0])
