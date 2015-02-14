(function(){
  var droll, React, App, roll, notify, ref$;
  droll = require('droll');
  React = require('react');
  App = React.createFactory(require('./lib/App'));
  require('./lib/App.css');
  roll = function(){
    var roll;
    roll = droll.roll;
    return {
      characteristics: {
        str: roll('3d6').total,
        con: roll('3d6').total,
        pow: roll('3d6').total,
        dex: roll('3d6').total,
        app: roll('3d6').total,
        edu: roll('2d6+6').total,
        siz: roll('2d6+6').total,
        int: roll('2d6+6').total
      }
    };
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
