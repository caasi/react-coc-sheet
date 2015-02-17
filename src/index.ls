require! {
  droll
  react: React
}

App = React.createFactory require './lib/App'
require './lib/App.css'

get-damage-bonus = (str, siz) ->
  value = (str + siz) * 5
  switch
  | 2   <= value < 65  => -2
  | 65  <= value < 85  => -1
  | 85  <= value < 125 =>  0
  | 125 <= value < 165 => droll.roll \1d4 .total
  | 165 <= value < 205 => droll.roll \1d6 .total
  | otherwise          => NaN

get-build = (str, siz) ->
  value = (str + siz) * 5
  switch
  | 2   <= value < 65  => -2
  | 65  <= value < 85  => -1
  | 85  <= value < 125 =>  0
  | 125 <= value < 165 =>  1
  | 165 <= value < 205 =>  2
  | otherwise          => NaN

roll = ->
  { roll } = droll
  data = characteristics:
    str: roll \3d6 .total
    con: roll \3d6 .total
    pow: roll \3d6 .total
    dex: roll \3d6 .total
    app: roll \3d6 .total
    edu: roll \2d6+6 .total
    siz: roll \2d6+6 .total
    int: roll \2d6+6 .total
    luck: roll \3d6 .total
  { str, siz } = data.characteristics
  data
    ..characteristics
      ..damage-bonus = get-damage-bonus str, siz
      ..build        = get-build        str, siz

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
