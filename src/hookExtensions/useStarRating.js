import { useEffect } from 'react'

export default (rating) => {
  useEffect(() => {
    const filledStars = Math.round(rating)
    const hollowStars = 10 - Math.round(rating)
    let result = ''
    for (let i = 0; i < filledStars; i++) {
      result += '★'
    }
    for (let i = 0; i < hollowStars; i++) {
      result += '☆'
    }
    document.getElementById('stars').textContent = result
  }, [rating])
}
