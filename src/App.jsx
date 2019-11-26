import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import { useStore, useThemeSwitch, usePageTransition, useMovieFetch, useGenreSet, useLoadStatus, useImageConfigFetch, useSessionIdFetch, useMovieVotePost, useGenreFetch } from './customHooks'
import ThemeSwitch from './components/ThemeSwitch.jsx'

// App component
export default () => {
  // initializes state/store
  const { state, dispatch } = useStore()

  // manages element's (#app) class name to reflect theme state
  useThemeSwitch(state)

  // manages pages' class name to reflect current page set in state
  usePageTransition(state)

  // calls fetch function for getting 6 movies, if isLoading === true
  useMovieFetch(state, dispatch)

  // clears all movies and manages isLoading state on genreChange
  useGenreSet(state, dispatch)

  // manages isLoaded state
  useLoadStatus(state, dispatch)

  // calls fetch function, after initial 6 movies are fetched, for getting configuration on image urls
  useImageConfigFetch(state, dispatch)

  // Calls fetch function once for getting guestSessionId
  useSessionIdFetch(state, dispatch)

  // Calls fetch function for posting user vote to API when user rates a movie
  useMovieVotePost(state, dispatch)

  // runs only the first time user opens a modal
  useGenreFetch(state, dispatch)

  return (
    <>
      <Router>

        <HomePage state={state} dispatch={dispatch} />
        <MoviePage state={state} dispatch={dispatch} />

        {/* using routes for state updates */}
        <Switch>
          <Route
            exact path='/' render={() => {
              dispatch({ type: 'SET_PAGE', page: 'home' })
            }}
          />

          <Route
            path='/movies/:id' render={({ match }) => {
              dispatch({ type: 'SET_MOVIE_ID', movieId: Number(match.params.id) || null })
              dispatch({ type: 'SET_PAGE', page: 'movies' })
            }}
          />
        </Switch>
        <ThemeSwitch dispatch={dispatch} />
      </Router>
    </>
  )
}
