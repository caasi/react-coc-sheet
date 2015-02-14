(function(){
  var React, Component, PropTypes, DOM, div, Characteristics, App;
  React = require('react'), Component = React.Component, PropTypes = React.PropTypes, DOM = React.DOM, div = DOM.div;
  Characteristics = React.createFactory(require('./Characteristics'));
  App = (function(superclass){
    var prototype = extend$((import$(App, superclass).displayName = 'App', App), superclass).prototype, constructor = App;
    function App(props){
      this.props = props;
      this.render = bind$(this, 'render', prototype);
    }
    prototype.render = function(){
      return Characteristics();
    };
    return App;
  }(Component));
  module.exports = App;
  function bind$(obj, key, target){
    return function(){ return (target || obj)[key].apply(obj, arguments) };
  }
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
