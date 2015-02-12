require! webpack

module.exports =
  entry: '.'
  output:
    filename: 'bundle.js'
  plugins:
    * new webpack.optimize.UglifyJsPlugin
    * new webpack.NoErrorsPlugin
  module:
    loaders:
      * test: /\.css$/, loader: 'style!css'
      ...

