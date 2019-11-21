import extractStars from './extractStars'
import extractCompanies from './extractCompanies'

// extractMovieData
export default (movie) => {
  const {
    title = 'Movie not found',
    release_date = 'n/a',
    backdrop_path = '',
    overview = '',
    vote_average = 'n/a',
    popularity = 'n/a',
    production_companies = ['n/a'],
    original_language = 'n/a'
  } = movie
  debugger

  const year = movie ? ` (${release_date.slice(0, release_date.indexOf('-'))})` : ''
  const displayTitle = `${title} (${year})`
  const stars = extractStars(vote_average)
  const companies = extractCompanies(production_companies)

  return {
    displayTitle,
    backdropPath: backdrop_path,
    overview,
    voteAverage: vote_average,
    popularity,
    language: original_language,
    companies,
    stars
  }
}
