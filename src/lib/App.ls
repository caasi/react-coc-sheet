require! {
  react: { Component, PropTypes, { div }:DOM }:React
}

Characteristics = React.createFactory require './Characteristics'

class App extends Component
  @defaultProps =
    characteristics: {}
    notify: ->
  (@props) ->
  render: ~>
    { characteristics, notify } = @props
    Characteristics do
      characteristics <<< { notify }

module.exports = App
