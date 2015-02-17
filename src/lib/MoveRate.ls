require! {
  react: { Component, PropTypes, { div }:DOM }:React
  './utils': { cx }
}

class MoveRate extends Component
  @defaultProps =
    str: 10
    dex: 10
    siz: 10
  (@props) ->
  render: ->
    { str, dex, siz } = @props
    move-rate = switch
    | str < siz and dex < siz => 7
    | str > siz and dex > siz => 9
    | otherwise               => 8
    div do
      className: cx \coc-sheet \move-rate
      div do
        className: \title
        'Move Rate'
      div do
        className: \value
        move-rate
      div do
        className: \plus
      div do
        className: \minus

module.exports = MoveRate;
