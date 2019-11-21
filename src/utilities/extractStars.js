
// extractStars
export default (rating) => {
  const filledStars = Math.round(rating)
  const hollowStars = 10 - Math.round(rating)
  let result = ''
  for (let i = 0; i < filledStars; i++) {
    result += '★'
  }
  for (let i = 0; i < hollowStars; i++) {
    result += '☆'
  }
  return result
}
