import { useEffect } from 'react'
import { fetchImageConfig } from '../fetchFunctions'
import extractImageConfigData from '../utilities/extractImageConfigData'

// useImageConfigFetch
export default ({ isImageConfigFetched, isLoaded }, dispatch) => {
  useEffect(() => {
    if (isLoaded && !isImageConfigFetched) {
      fetchImageConfig()
        .then(res => extractImageConfigData(res))
        .then(res => dispatch({ type: 'SET_IMAGE_CONFIG', imageConfig: res }))
        .then(() => dispatch({ type: 'SET_IS_IMAGE_CONFIG_FETCHED', isImageConfigFetched: true }))
    }
  }, [isLoaded, isImageConfigFetched])
}
