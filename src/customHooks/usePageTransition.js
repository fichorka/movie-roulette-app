import { useEffect } from 'react'

// usePageTransition
export default ({ prevPage, page }) => {
  useEffect(() => {
    switch (page) {
      case 'home':
        document.getElementById('home-page').classList.add('current')
        document.getElementById('movie-page').classList.remove('current')
        break
      case 'movies':
      {
        const moviePage = document.getElementById('movie-page')
        moviePage.classList.add('current')
        document.getElementById('home-page').classList.remove('current')

        // for those browsers that don't support sroll method
        try {
          moviePage.scroll({ top: 0, left: 0, behavior: 'smooth' })
        } catch (err) {
          console.log(err)
        }
        break
      }
    }
    if (page === null) {
      document.getElementById('home-page').classList.add('transitionable')
      document.getElementById('movie-page').classList.add('transitionable')
    }
  }, [prevPage, page])
}
