require! {
  react: { Component, PropTypes, { div }:DOM }:React
}

Characteristics = React.createFactory require './Characteristics'

class App extends Component
  (@props) ->
  render: ~>
    Characteristics!

module.exports = App
