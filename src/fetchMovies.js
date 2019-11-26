const bearerToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDE4M2E5N2YyZWQ4NmU4ZDVmNDAzZjFkMjVhYmMwYSIsInN1YiI6IjVkYzQ3NzdkNjgxODg4MDAxOWJjNjE2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5QyZpDrUJm_uKVZNalshlpy41jbXoRDNNOgUuzozpiU'

const url = 'https://api.themoviedb.org/3'
const discoverEndpoint = url + '/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false'
const movieEndpoint = url + '/movie/'
const genreEnpoint = url + '/genre/movie/list?language=en-US'
const imageConfigEndpoint = url + '/configuration'
const authEndpoint = url + '/authentication/guest_session/new'

const options = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${bearerToken}`,
    'Content-Type': 'application/json;charset=utf-8'
  }
}

export function postMovieVote (id, vote, sessionId) {
  const endpoint = movieEndpoint + `${id}/rating?guest_session_id=${sessionId}`
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({ value: vote })
  }
  return (
    window.fetch(endpoint, options)
      .then(res => res.status_code)
  )
}

// fetch functions
export function randomMovieId (genreId) {
  const randomPage = Math.ceil(Math.random() * 100)
  const randomIndex = Math.floor(Math.random() * 20)
  const genreQuery = genreId ? `&with_genres=${genreId}` : ''
  const pageQuery = `&page=${randomPage}`
  const endpoint = discoverEndpoint + `${pageQuery}${genreQuery}`
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

export function fetchMovie (genreId) {
  return (
    randomMovieId(genreId)
      .then(res => productionCompanies(res.id)
        .then(res2 => ({ ...res, ...res2 }))
        .then(res3 => res3))
  )
}

export function fetchGenres () {
  const endpoint = genreEnpoint
  return (
    window.fetch(endpoint, options)
      .then(res => res.json())
      .then(res => { return res.genres })
      .catch(err => console.log(err))
  )
}

export function fetchImageConfig () {
  const endpoint = imageConfigEndpoint
  return (
    window.fetch(endpoint, options)
      .then(res => res.json())
      .then(res => { return res.images })
      .catch(err => console.log(err))
  )
}

export function fetchSessionId () {
  const endpoint = authEndpoint
  return (
    window.fetch(endpoint, options)
      .then(res => res.json())
      .then(res => res.guest_session_id)
      .catch(err => console.log(err))
  )
}
