(function(){
  var React, Component, PropTypes, DOM, div, App;
  React = require('react');
  Component = React.Component, PropTypes = React.PropTypes, DOM = React.DOM, div = DOM.div;
  App = (function(superclass){
    var prototype = extend$((import$(App, superclass).displayName = 'App', App), superclass).prototype, constructor = App;
    App.propTypes = {
      color: PropTypes.string
    };
    App.defaultProps = {
      color: 'red'
    };
    function App(props){
      this.props = props;
      this.render = bind$(this, 'render', prototype);
      this.state = {
        color: this.props.color
      };
    }
    prototype.render = function(){
      var this$ = this;
      return div({
        className: 'app',
        style: {
          background: this.state.color
        },
        onClick: function(){
          return this$.setState({
            color: this$.state.color === 'red' ? 'green' : 'red'
          });
        }
      }, 'click me');
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
