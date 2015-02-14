(function(){
  var slice$ = [].slice;
  module.exports = {
    cx: function(){
      var args;
      args = slice$.call(arguments);
      return args.join(' ');
    }
  };
}).call(this);
