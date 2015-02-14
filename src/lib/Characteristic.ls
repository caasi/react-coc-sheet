require! {
  react: { Component, { div, span }:DOM }:React
  './utils': { cx }
}

class Characteristic extends Component
  @defaultProps =
    extreme: 10
  (@props) ->
  render: ->
    { extreme } = @props
    regular = extreme * 5
    hard    = Math.ceil regular / 2
    div do
      className: cx \coc-sheet \characteristic
      div do
        className: \regular
        regular
      div do
        className: \hard
        hard
      div do
        className: \extreme
        extreme

module.exports = Characteristic
