import { useEffect } from 'react'

// usePageTransition
export default (isLoading) => {
  useEffect(() => {
    if (isLoading) discoverMovies()
  }, [isLoading])
}
