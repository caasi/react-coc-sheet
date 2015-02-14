require! {
  droll
  react: React
}

App = React.createFactory require './lib/App'
require './lib/App.css'

roll = ->
  { roll } = droll
  characteristics:
    str: roll \3d6 .total
    con: roll \3d6 .total
    pow: roll \3d6 .total
    dex: roll \3d6 .total
    app: roll \3d6 .total
    edu: roll \2d6+6 .total
    siz: roll \2d6+6 .total
    int: roll \2d6+6 .total

notify = ({ action }) ->
  | action is \roll-characteristics
    React.render do
      App roll! <<< { notify }
      document.getElementById \container
  | otherwise
    console.warn 'unknown action'

React.render do
  App roll! <<< { notify }
  document.getElementById \container
