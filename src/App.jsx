import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import useStore from './customHooks/useStore'
import usePageTransition from './customHooks/usePageTransition'
import useMovieFetch from './customHooks/useMovieFetch.js'
import useLoadStatus from './customHooks/useLoadStatus.js'
import useGenreFetch from './customHooks/useGenreFetch.js'

// App component
export default () => {
  // initialize store
  const { state, dispatch } = useStore()

  usePageTransition(state.prevPage, state.page)

  // calls fetch functions if isLoading === true
  useMovieFetch(state.isLoading, dispatch)

  // manage isLoaded state
  useLoadStatus(state, dispatch)

  //
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
      </Router>
    </>
  )
}
