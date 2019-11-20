import React, { useReducer, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import MoviePage from './pages/MoviePage.jsx'
import rootReducer from './reducers'
import usePageTransition from './hookExtensions/usePageTransition'
import RouletteModal from './components/RouletteModal.jsx'
import { randomMovieId, productionCompanies } from './fetchMovies'

const initialState = {
  prevPage: null,
  page: null,
  isModalVisible: false,
  isLoading: true,
  // movies: [{}, {}, {}, {}, {}, {}]
  movies: []
}
// App component
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  console.log(state)
  usePageTransition(state.prevPage, state.page)
  console.log('App')

  // should be executed only once, not 3 times
  useEffect(() => {
    if (state.isLoading) {
      for (let i = 6; i > 0; i--) {
        randomMovieId()
          .then(res => productionCompanies(res.id)
            .then(res2 => ({ ...res, ...res2 }))
            .then(res3 => dispatch({ type: 'ADD_MOVIE', movies: res }))).then(() => { if (i === 1) dispatch({ type: 'SET_SHOULD_LOAD', isLoading: false }) })
      }
    }
  }, [state.isLoading])
  return (
    <>
      <Router>
        <HomePage state={state} dispatch={dispatch} />
        <MoviePage state={state} />
        <RouletteModal state={state} />

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
