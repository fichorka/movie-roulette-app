// extractCompanies
export default (companies) => {
  const len = companies.length
  return companies.map((c, i) => {
    const lineEnd = (i + 1 === len ? '' : ', ')
    return c.name + lineEnd
  })
}
