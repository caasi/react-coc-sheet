require! {
  react: { Component, { div, span }:DOM }:React
  './utils': { cx }
}

Characteristic = require './Characteristic'

class STR extends Characteristic
class DEX extends Characteristic
class POW extends Characteristic
class CON extends Characteristic
class APP extends Characteristic
class EDU extends Characteristic
class SIZ extends Characteristic
class INT extends Characteristic

STR = React.createFactory STR
DEX = React.createFactory DEX
POW = React.createFactory POW
CON = React.createFactory CON
APP = React.createFactory APP
EDU = React.createFactory EDU
SIZ = React.createFactory SIZ
INT = React.createFactory INT

class Characteristics extends Component
  @defaultProps =
    str: 10
    con: 10
    pow: 10
    dex: 10
    app: 10
    edu: 10
    siz: 10
    int: 10
  (@props) ->
  render: ~>
    { str, con, pow, dex, app, edu, siz, int } = @props
    div do
      className: cx \coc-sheet \characteristics
      span do
        className: \title
        \Characteristics
      #Characteristic extreme: str
      STR extreme: str
      DEX extreme: dex
      POW extreme: pow
      CON extreme: con
      APP extreme: app
      EDU extreme: edu
      SIZ extreme: siz
      INT extreme: int
      #MoveRate!

module.exports = Characteristics
