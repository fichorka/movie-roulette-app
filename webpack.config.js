const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname),
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, './devBuild'),
    filename: 'main.js',
    publicPath: '/'
  },
  devServer: {
    open: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, './src'),
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, './src'),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './template/index.html' })
  ]
}
