React = require 'react'
{ Component, PropTypes, { div }:DOM } = React

class App extends Component
  @propTypes =
    color: PropTypes.string
  @defaultProps =
    color: \red
  (@props) ->
    @state = color: @props.color
  render: ~>
    div do
      className: \app
      style:
        background: @state.color
      onClick: ~>
        @setState color:
          if @state.color is \red
            then \green
            else \red
      'click me'

module.exports = App
