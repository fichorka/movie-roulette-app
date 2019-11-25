import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import useStore from './customHooks/useStore'
import usePageTransition from './customHooks/usePageTransition'
import useMovieFetch from './customHooks/useMovieFetch.js'
import useLoadStatus from './customHooks/useLoadStatus.js'
import useGenreFetch from './customHooks/useGenreFetch.js'
import useImageConfigFetch from './customHooks/useImageConfigFetch.js'
import useGenreSet from './customHooks/useGenreSet.js'
import useThemeSwitch from './customHooks/useThemeSwitch.js'

// App component
export default () => {
  // initialize store
  const { state, dispatch } = useStore()

  // manages element's (#app) class name to reflect theme state
  useThemeSwitch(state.theme)

  // manages pages' class name to reflect current page
  usePageTransition(state.prevPage, state.page)

  // calls fetch functions if isLoading === true
  useMovieFetch(state, dispatch)

  // removes and fetches new movies on genre change
  useGenreSet(state, dispatch)

  // manage isLoaded state
  useLoadStatus(state, dispatch)

  // runs after all the movies are fetched
  useImageConfigFetch(state, dispatch)

  // runs only the first time user opens a modal
  useGenreFetch(state, dispatch)
  console.log(state)

  return (
    <>
      <Router>

        <HomePage state={state} dispatch={dispatch} />
        <MoviePage state={state} />

        {/* using routes for store updates */}
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
        <div className='ui-button' onClick={() => dispatch({ type: 'SWITCH_THEME' })}>☀</div>
      </Router>
    </>
  )
}
