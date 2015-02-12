require! {
  path
  nib
  webpack
  'webpack-dev-server': WebpackDevServer
  'gulp'
  'gulp-util': gutil
  'gulp-livescript': livescript
  'gulp-stylus': stylus
  'gulp-jade': jade
  './configs/dev.webpack.config': dev-config
  './configs/webpack.config': config
}

# http://stackoverflow.com/questions/7697038/more-than-10-lines-in-a-node-js-stack-error
Error.stackTraceLimit = Infinity

options =
  src:   path.resolve './src'
  build: path.resolve '.'

gulp.task \html ->
  gulp
    .src "#{options.src}/*.jade"
    .pipe jade!
    .pipe gulp.dest options.build

gulp.task \js ->
  gulp
    .src "#{options.src}/**/*.ls"
    .pipe livescript!
    .pipe gulp.dest options.build

gulp.task \css ->
  gulp
    .src "#{options.src}/**/*.styl"
    .pipe stylus use: [nib!]
    .pipe gulp.dest options.build

gulp.task \compile <[html js css]>

gulp.task \hot <[compile]> ->
  port = 8080
  host = 'localhost'
  dev-config.entry.0 = "webpack-dev-server/client?http://#host:#port"
  server = new WebpackDevServer do
    webpack dev-config
    publicPath: dev-config.output.publicPath
    hot: true
  server.listen port, host, (err) ->
    throw gutil.PluginError '[webpack-dev-server]', err if err
    gutil.log '[webpack]', "listening at #host:#port"

gulp.task \build <[compile]> (done) ->
  webpack do
    config
    (err, stats) ->
      throw gutil.PluginError '[webpack]', err if err
      #gutil.log stats
      done!

gulp.task \watch <[hot]> ->
  gulp
    ..watch "#{options.src}/**/*.ls"   <[compile]>
    ..watch "#{options.src}/**/*.styl" <[compile]>
    ..watch "#{options.src}/*.jade"    <[compile]>

gulp.task \default <[watch]>
