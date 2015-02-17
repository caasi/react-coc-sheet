(function(){
  var droll, React, App, getDamageBonus, getBuild, roll, notify, ref$;
  droll = require('droll');
  React = require('react');
  App = React.createFactory(require('./lib/App'));
  require('./lib/App.css');
  getDamageBonus = function(str, siz){
    var value;
    value = (str + siz) * 5;
    switch (false) {
    case !(2 <= value && value < 65):
      return -2;
    case !(65 <= value && value < 85):
      return -1;
    case !(85 <= value && value < 125):
      return 0;
    case !(125 <= value && value < 165):
      return droll.roll('1d4').total;
    case !(165 <= value && value < 205):
      return droll.roll('1d6').total;
    default:
      return NaN;
    }
  };
  getBuild = function(str, siz){
    var value;
    value = (str + siz) * 5;
    switch (false) {
    case !(2 <= value && value < 65):
      return -2;
    case !(65 <= value && value < 85):
      return -1;
    case !(85 <= value && value < 125):
      return 0;
    case !(125 <= value && value < 165):
      return 1;
    case !(165 <= value && value < 205):
      return 2;
    default:
      return NaN;
    }
  };
  roll = function(){
    var roll, data, ref$, str, siz, x$, y$;
    roll = droll.roll;
    data = {
      characteristics: {
        str: roll('3d6').total,
        con: roll('3d6').total,
        pow: roll('3d6').total,
        dex: roll('3d6').total,
        app: roll('3d6').total,
        edu: roll('2d6+6').total,
        siz: roll('2d6+6').total,
        int: roll('2d6+6').total,
        luck: roll('3d6').total
      }
    };
    ref$ = data.characteristics, str = ref$.str, siz = ref$.siz;
    x$ = data;
    y$ = x$.characteristics;
    y$.damageBonus = getDamageBonus(str, siz);
    y$.build = getBuild(str, siz);
    return x$;
  };
  notify = function(arg$){
    var action, ref$;
    action = arg$.action;
    switch (false) {
    case action !== 'roll-characteristics':
      return React.render(App((ref$ = roll(), ref$.notify = notify, ref$)), document.getElementById('container'));
    default:
      return console.warn('unknown action');
    }
  };
  React.render(App((ref$ = roll(), ref$.notify = notify, ref$)), document.getElementById('container'));
}).call(this);
