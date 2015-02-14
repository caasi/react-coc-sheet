(function(){
  var React, Component, DOM, div, span, cx, Characteristic;
  React = require('react'), Component = React.Component, DOM = React.DOM, div = DOM.div, span = DOM.span;
  cx = require('./utils').cx;
  Characteristic = (function(superclass){
    var prototype = extend$((import$(Characteristic, superclass).displayName = 'Characteristic', Characteristic), superclass).prototype, constructor = Characteristic;
    Characteristic.defaultProps = {
      title: '???',
      extreme: 10
    };
    prototype.render = function(){
      var ref$, title, extreme, regular, hard;
      ref$ = this.props, title = ref$.title, extreme = ref$.extreme;
      regular = extreme * 5;
      hard = Math.ceil(regular / 2);
      return div({
        className: cx('coc-sheet', 'characteristic')
      }, div({
        className: 'title'
      }, title), div({
        className: 'regular'
      }, regular), div({
        className: 'hard'
      }, hard), div({
        className: 'extreme'
      }, extreme));
    };
    function Characteristic(){
      Characteristic.superclass.apply(this, arguments);
    }
    return Characteristic;
  }(Component));
  module.exports = Characteristic;
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
}).call(this);
