(function(){
  var React, Component, DOM, div, span, button, cx, Characteristic, STR, DEX, POW, CON, APP, EDU, SIZ, INT, MoveRate, Characteristics;
  React = require('react'), Component = React.Component, DOM = React.DOM, div = DOM.div, span = DOM.span, button = DOM.button;
  cx = require('./utils').cx;
  Characteristic = require('./Characteristic');
  STR = (function(superclass){
    var prototype = extend$((import$(STR, superclass).displayName = 'STR', STR), superclass).prototype, constructor = STR;
    STR.defaultProps = {
      title: 'STR'
    };
    function STR(){
      STR.superclass.apply(this, arguments);
    }
    return STR;
  }(Characteristic));
  DEX = (function(superclass){
    var prototype = extend$((import$(DEX, superclass).displayName = 'DEX', DEX), superclass).prototype, constructor = DEX;
    DEX.defaultProps = {
      title: 'DEX'
    };
    function DEX(){
      DEX.superclass.apply(this, arguments);
    }
    return DEX;
  }(Characteristic));
  POW = (function(superclass){
    var prototype = extend$((import$(POW, superclass).displayName = 'POW', POW), superclass).prototype, constructor = POW;
    POW.defaultProps = {
      title: 'POW'
    };
    function POW(){
      POW.superclass.apply(this, arguments);
    }
    return POW;
  }(Characteristic));
  CON = (function(superclass){
    var prototype = extend$((import$(CON, superclass).displayName = 'CON', CON), superclass).prototype, constructor = CON;
    CON.defaultProps = {
      title: 'CON'
    };
    function CON(){
      CON.superclass.apply(this, arguments);
    }
    return CON;
  }(Characteristic));
  APP = (function(superclass){
    var prototype = extend$((import$(APP, superclass).displayName = 'APP', APP), superclass).prototype, constructor = APP;
    APP.defaultProps = {
      title: 'APP'
    };
    function APP(){
      APP.superclass.apply(this, arguments);
    }
    return APP;
  }(Characteristic));
  EDU = (function(superclass){
    var prototype = extend$((import$(EDU, superclass).displayName = 'EDU', EDU), superclass).prototype, constructor = EDU;
    EDU.defaultProps = {
      title: 'EDU'
    };
    function EDU(){
      EDU.superclass.apply(this, arguments);
    }
    return EDU;
  }(Characteristic));
  SIZ = (function(superclass){
    var prototype = extend$((import$(SIZ, superclass).displayName = 'SIZ', SIZ), superclass).prototype, constructor = SIZ;
    SIZ.defaultProps = {
      title: 'SIZ'
    };
    function SIZ(){
      SIZ.superclass.apply(this, arguments);
    }
    return SIZ;
  }(Characteristic));
  INT = (function(superclass){
    var prototype = extend$((import$(INT, superclass).displayName = 'INT', INT), superclass).prototype, constructor = INT;
    INT.defaultProps = {
      title: 'INT'
    };
    function INT(){
      INT.superclass.apply(this, arguments);
    }
    return INT;
  }(Characteristic));
  STR = React.createFactory(STR);
  DEX = React.createFactory(DEX);
  POW = React.createFactory(POW);
  CON = React.createFactory(CON);
  APP = React.createFactory(APP);
  EDU = React.createFactory(EDU);
  SIZ = React.createFactory(SIZ);
  INT = React.createFactory(INT);
  MoveRate = React.createFactory(require('./MoveRate'));
  Characteristics = (function(superclass){
    var prototype = extend$((import$(Characteristics, superclass).displayName = 'Characteristics', Characteristics), superclass).prototype, constructor = Characteristics;
    Characteristics.defaultProps = {
      str: 10,
      con: 10,
      pow: 10,
      dex: 10,
      app: 10,
      edu: 10,
      siz: 10,
      int: 10,
      luck: 10,
      damageBonus: 0,
      build: 0,
      notify: function(){}
    };
    function Characteristics(props){
      this.props = props;
      this.render = bind$(this, 'render', prototype);
    }
    prototype.render = function(){
      var ref$, str, con, pow, dex, app, edu, siz, int, luck, damageBonus, build, san, mp, hp, this$ = this;
      ref$ = this.props, str = ref$.str, con = ref$.con, pow = ref$.pow, dex = ref$.dex, app = ref$.app, edu = ref$.edu, siz = ref$.siz, int = ref$.int, luck = ref$.luck, damageBonus = ref$.damageBonus, build = ref$.build;
      san = pow * 5;
      mp = pow;
      hp = Math.floor((siz + con) / 10);
      return div({
        className: cx('coc-sheet', 'characteristics')
      }, span({
        className: 'title'
      }, 'Characteristics'), button({
        className: 'roll',
        onClick: function(){
          return this$.props.notify({
            action: 'roll-characteristics'
          });
        }
      }, 'roll'), STR({
        extreme: str
      }), DEX({
        extreme: dex
      }), POW({
        extreme: pow
      }), CON({
        extreme: con
      }), APP({
        extreme: app
      }), EDU({
        extreme: edu
      }), SIZ({
        extreme: siz
      }), INT({
        extreme: int
      }), MoveRate({
        str: str,
        dex: dex,
        siz: siz
      }), div({
        className: 'damage-bonus'
      }, "Damage Bonus: " + damageBonus), div({
        className: 'build'
      }, "Build: " + build), div({
        className: 'luck'
      }, "Luck: " + luck));
    };
    return Characteristics;
  }(Component));
  module.exports = Characteristics;
  function extend$(sub, sup){
    function fun(){} fun.prototype = (sub.superclass = sup).prototype;
    (sub.prototype = new fun).constructor = sub;
    if (typeof sup.extended == 'function') sup.extended(sub);
    return sub;
  }
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
}).call(this);
