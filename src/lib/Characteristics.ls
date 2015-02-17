require! {
  react: { Component, { div, span, button }:DOM }:React
  './utils': { cx }
}

Characteristic = require './Characteristic'

class STR extends Characteristic
  @defaultProps = title: \STR
class DEX extends Characteristic
  @defaultProps = title: \DEX
class POW extends Characteristic
  @defaultProps = title: \POW
class CON extends Characteristic
  @defaultProps = title: \CON
class APP extends Characteristic
  @defaultProps = title: \APP
class EDU extends Characteristic
  @defaultProps = title: \EDU
class SIZ extends Characteristic
  @defaultProps = title: \SIZ
class INT extends Characteristic
  @defaultProps = title: \INT

STR = React.createFactory STR
DEX = React.createFactory DEX
POW = React.createFactory POW
CON = React.createFactory CON
APP = React.createFactory APP
EDU = React.createFactory EDU
SIZ = React.createFactory SIZ
INT = React.createFactory INT
MoveRate = React.createFactory require './MoveRate'

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
    luck: 10
    damage-bonus: 0
    build: 0
    notify: ->
  (@props) ->
  render: ~>
    { str, con, pow, dex, app, edu, siz, int, luck, damage-bonus, build } = @props
    san = pow * 5
    mp = pow
    hp = Math.floor((siz + con) / 10)
    div do
      className: cx \coc-sheet \characteristics
      span do
        className: \title
        \Characteristics
      button do
        onClick: ~> @props.notify action: \roll-characteristics
        \roll
      #Characteristic extreme: str
      STR extreme: str
      DEX extreme: dex
      POW extreme: pow
      CON extreme: con
      APP extreme: app
      EDU extreme: edu
      SIZ extreme: siz
      INT extreme: int
      MoveRate { str, dex, siz }
      div do
        className: \damage-bonus
        "Damage Bonus: #damage-bonus"
      div do
        className: \build
        "Build: #build"
      div do
        className: \luck
        "Luck: #luck"


module.exports = Characteristics
