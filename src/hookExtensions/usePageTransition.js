import { useEffect } from 'react'

// usePageTransition
export default (prevPage, page) => {
  useEffect(() => {
    console.log('page switch')
    switch (page) {
      case 'home':
        document.getElementById('home-page').classList.add('current')
        document.getElementById('movie-page').classList.remove('current')
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        break
      case 'movies':
        document.getElementById('movie-page').classList.add('current')
        document.getElementById('home-page').classList.remove('current')
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
        break
    }
    if (page === null) {
      console.log('transitoin initalization')
      document.getElementById('home-page').classList.add('transitionable')
      document.getElementById('movie-page').classList.add('transitionable')
    }
  }, [prevPage, page])
}
