require! webpack

module.exports =
  entry:
    * ''
    * 'webpack/hot/only-dev-server'
    * '.'
  devtool: 'source-map'
  output:
    path: __dirname
    filename: 'bundle.js'
    publicPath: '/'
  plugins:
    * new webpack.HotModuleReplacementPlugin
    * new webpack.optimize.UglifyJsPlugin
    * new webpack.NoErrorsPlugin
  module:
    loaders:
      * test: /\.css$/, loader: 'style!css'
      * test: /\.js$/, loader: 'react-hot', exclude: /node_modules/

