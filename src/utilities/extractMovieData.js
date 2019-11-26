import extractCompanies from './extractCompanies'

// extractMovieData
export default (movie, dispatch) => {
  const {
    id,
    title = '(Unknown title)',
    release_date = 'n/a',
    backdrop_path = '',
    poster_path = '',
    overview = '',
    vote_average = 0,
    popularity = 'n/a',
    production_companies = [{ name: 'n/a' }],
    original_language = 'n/a'
  } = movie

  const year = movie.id ? `${release_date.slice(0, release_date.indexOf('-'))}` : ''
  const displayTitle = movie.id ? `${title} (${year})` : title
  const companies = extractCompanies(production_companies)
  const ownVote = 0

  return {
    id,
    displayTitle,
    backdropPath: backdrop_path,
    posterPath: poster_path,
    overview,
    voteAverage: vote_average,
    popularity,
    language: original_language,
    companies,
    ownVote
  }
}
