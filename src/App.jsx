import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.jsx'

class App extends Component {
  render () {
    return (
      <>
        <Router>
          <Switch>
            <Route
              path='/' render={() => (
                <Home />
              )}
            />

            {/* <Route
              path='/:id' render={(match) => (
                <DetailsPage match={match} />
              )}
            /> */}
          </Switch>
        </Router>

      </>
    )
  }
}

export default App
