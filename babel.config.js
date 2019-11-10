module.exports = function (api) {
  api.cache(true)

  const presets = [['@babel/preset-env', { target: 'defaults' }], '@babel/preset-react']

  return {
    presets
  }
}
