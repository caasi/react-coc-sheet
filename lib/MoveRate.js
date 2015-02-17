(function(){
  var React, Component, PropTypes, DOM, div, cx, MoveRate;
  React = require('react'), Component = React.Component, PropTypes = React.PropTypes, DOM = React.DOM, div = DOM.div;
  cx = require('./utils').cx;
  MoveRate = (function(superclass){
    var prototype = extend$((import$(MoveRate, superclass).displayName = 'MoveRate', MoveRate), superclass).prototype, constructor = MoveRate;
    MoveRate.defaultProps = {
      str: 10,
      dex: 10,
      siz: 10
    };
    function MoveRate(props){
      this.props = props;
    }
    prototype.render = function(){
      var ref$, str, dex, siz, moveRate;
      ref$ = this.props, str = ref$.str, dex = ref$.dex, siz = ref$.siz;
      moveRate = (function(){
        switch (false) {
        case !(str < siz && dex < siz):
          return 7;
        case !(str > siz && dex > siz):
          return 9;
        default:
          return 8;
        }
      }());
      return div({
        className: cx('coc-sheet', 'move-rate')
      }, div({
        className: 'title'
      }, 'Move Rate'), div({
        className: 'value'
      }, moveRate), div({
        className: 'plus'
      }), div({
        className: 'minus'
      }));
    };
    return MoveRate;
  }(Component));
  module.exports = MoveRate;
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
