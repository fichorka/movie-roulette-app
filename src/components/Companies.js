import React from 'react'

// extractMovieData
export default ({ companies = [] }) => {
  const len = companies.length
  return (
    companies.map((c, i) => {
      const lineEnd = (i + 1 === len ? '' : ', ')
      return <span key={c.id} className='value'>{c.name + lineEnd}</span>
    })
  )
}
