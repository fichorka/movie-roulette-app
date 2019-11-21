export default (baseUrl, size, path) => {
  return path ? `url(${baseUrl}${size}${path})` : null
}
