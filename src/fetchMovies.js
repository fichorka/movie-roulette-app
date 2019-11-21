const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDE4M2E5N2YyZWQ4NmU4ZDVmNDAzZjFkMjVhYmMwYSIsInN1YiI6IjVkYzQ3NzdkNjgxODg4MDAxOWJjNjE2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QyZpDrUJm_uKVZNalshlpy41jbXoRDNNOgUuzozpiU'

const url = 'https://api.themoviedb.org/3'
const discoverEndpoint = url + '/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&include_'
const movieEndpoint = url + '/movie/'

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json; charset=utf-8'
  }
}

// fetch functions
export function randomMovieId () {
  const randomPage = Math.ceil(Math.random() * 100)
  const randomIndex = Math.floor(Math.random() * 20)
  const endpoint = discoverEndpoint + `&page=${randomPage}`
  return (
    window.fetch(endpoint, options)
      .then(res => res.json())
      .then(res => { return res.results[randomIndex] })
      .catch(err => console.log(err))
  )
}

export function productionCompanies (id) {
  const endpoint = movieEndpoint + id
  return (
    window.fetch(endpoint, options)
      .then(res => res.json())
      .then(res => { return { production_companies: res.production_companies } })
      .catch(err => console.log(err))
  )
}

export function fetchMovie () {
  return (
    randomMovieId()
      .then(res => productionCompanies(res.id)
        .then(res2 => ({ ...res, ...res2 }))
        .then(res3 => res3))
  )
}
