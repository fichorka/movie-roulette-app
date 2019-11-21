import React, { useState, useEffect } from 'react'
import Card from '../components/Card.jsx'

// useCards
export default (state) => {
  function renderCards () {
    return state.movies.map(m => (
      <Card key={m.id} movie={m} />
    ))
  }

  const [cards, setCards] = useState(renderCards())

  useEffect(() => {
    if (state.isLoaded) {
      setCards(renderCards())
    }
  }, [state.isLoaded])

  return cards
}
