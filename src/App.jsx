import React, { useReducer } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import MoviePage from './components/MoviePage.jsx'
import rootReducer from './reducers'
import usePageTransition from './hookExtensions/usePageTransition'
import RouletteModal from './components/RouletteModal.jsx'

const initialState = { prevPage: null, page: null, isModalVisible: false }
// App component
export default () => {
  const [state, dispatch] = useReducer(rootReducer, initialState)
  console.log(state)
  usePageTransition(state.prevPage, state.page)
  console.log('App')
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
              dispatch({ type: 'SET_MOVIE_ID', movieId: match.params.id })
              dispatch({ type: 'SET_PAGE', page: 'movies' })
            }}
          />
        </Switch>
      </Router>
    </>
  )
}
