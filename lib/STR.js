(function(){
  var React, DOM, div, Characteristic, STR;
  React = require('react'), DOM = React.DOM, div = DOM.div;
  Characteristic = require('./Characteristic');
  STR = (function(superclass){
    var prototype = extend$((import$(STR, superclass).displayName = 'STR', STR), superclass).prototype, constructor = STR;
    function STR(){
      STR.superclass.apply(this, arguments);
    }
    return STR;
  }(Characteristic));
  module.exports = STR;
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
