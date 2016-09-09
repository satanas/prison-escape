var Player = function() {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hi = 1; // Height index
  _.hp = 3;
  _.sd = 350; // Shooting Delay
  _.sc = 0; // Shooting Counter
  _.rs = 180; // Running speed
  _.inherits(Sprite);
  Sprite.call(_, 120, _.hs[_.hi], 40, 64);
  var x = '<svg width="40" height="64" xmlns="http://www.w3.org/2000/svg"> <g> <rect id="1" height="32" width="40" y="26" x="0" stroke-opacity="null" stroke-width="0" fill="#ff930f" stroke="#000"/> <rect id="2" height="24" width="40" y="2" x="0" stroke-opacity="null" stroke-width="0" fill="#ffd4aa" stroke="#000"/> <rect id="3" height="5" width="4" y="11" x="34" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000"/> <rect id="4" height="5" width="4" y="11" x="22" stroke-opacity="null" stroke-width="0" stroke="#000" fill="#000000"/> <rect id="5" height="8" width="8" y="56" x="10" stroke-opacity="null" stroke-width="0" fill="#ff930f" stroke="#000"/> <rect id="6" height="8" width="8" y="56" x="23" stroke-opacity="null" stroke-width="0" fill="#ff930f" stroke="#000"/> </g> </svg>';
  var y = '<svg width="40" height="64" xmlns="http://www.w3.org/2000/svg"> <g> <rect stroke="#000" fill="#ff930f" stroke-width="0" stroke-opacity="null" x="0.062508" y="24.062175" width="39.937449" height="32.00031" id="svg_1"/> <rect stroke="#000" fill="#ffd4aa" stroke-width="0" stroke-opacity="null" x="0.062508" y="0.062486" width="39.937449" height="23.999999" id="svg_2"/> <rect fill="#000000" stroke="#000" stroke-width="0" stroke-opacity="null" x="33.999956" y="9.312486" width="4.25" height="5.25" id="svg_4"/> <rect fill="#000000" stroke="#000" stroke-width="0" stroke-opacity="null" x="21.999956" y="9.312486" width="4.25" height="5.25" id="svg_5"/> <rect stroke="#000" fill="#ff930f" stroke-width="0" stroke-opacity="null" x="5.18748" y="55.999987" width="8" height="8.000013" id="svg_6"/> <rect stroke="#000" fill="#ff930f" stroke-width="0" stroke-opacity="null" x="25.375018" y="56.062486" width="8" height="7.937514" id="svg_7"/> </g> </svg>';
  _.xx1 = 'data:image/svg+xml;base64,' + window.btoa(x);
  //_.p2 = 'data:image/svg+xml;base64,' + window.btoa('<svg height=64 width=40 xmlns=http://www.w3.org/2000/svg><g><g id=svg_3><g id=svg_8><rect fill=#ff930f height=32 id=svg_1 stroke=#000 stroke-opacity=null stroke-width=0 width=40 x=0 y=26 /><rect fill=#ffd4aa height=24 id=svg_2 stroke=#000 stroke-opacity=null stroke-width=0 width=40 x=0 y=2 /><rect fill=#000000 height=5 id=svg_4 stroke=#000 stroke-opacity=null stroke-width=0 width=4 x=34 y=11 /><rect fill=#000000 height=5 id=svg_5 stroke=#000 stroke-opacity=null stroke-width=0 width=4 x=22 y=11 /><rect fill=#ff930f height=8 id=svg_6 stroke=#000 stroke-opacity=null stroke-width=0 width=8 x=10 y=56 /><rect fill=#ff930f height=8 id=svg_7 stroke=#000 stroke-opacity=null stroke-width=0 width=8 x=23 y=56 /></g></g></g></svg>');
  _.xx2 = 'data:image/svg+xml;base64,' + window.btoa(y);
  //_.im = 'data:image/svg+xml;base64,' + window.btoa(_.im);
  _.src1 = new Image();
  _.src1.src = _.xx1;
  _.src1.width = '40';
  _.src1.height = '64';

  _.src2 = new Image();
  _.src2.src = _.xx2;
  _.src2.width = '40';
  _.src2.height = '64';

  _.at = 100; // Animation timer
  _.ac = 0; // Animation counter
  _.af = 0; // Animation

  _.esc = function() {
    return (_.x > $.vw);
  };

  _.u = function() {
    if (_.hp <= 0) return;
    if (_.sc > 0) _.sc -= $.e;

    _.ac += $.e;
    if (_.ac > _.at) {
      _.ac = 0;
      _.af = (_.af) ? 0 : 1;
    }

    if ($.dt > $.de) {
      if (_.x < $.vw) _.x += ($.e / 1000) * _.rs
      return;
    }

    // Up
    if ($.i.d(38)) {
      _.hi = (_.hi - 1 < 0) ? 0 : _.hi - 1;
      _.y = _.hs[_.hi];
    } else if ($.i.d(40)) {
      _.hi = (_.hi + 1 > _.hs.length - 1) ? _.hs.length - 1 : _.hi + 1;
      _.y = _.hs[_.hi];
    } else if ($.i.d(32)) {
      if (_.sc <= 0) {
        _.sc = _.sd;
        $.g.pb.a(new Bullet(_.x + _.w, _.y + (_.h/ 2)));
      }
    }
    _.ur();

    // Collisions with coins
    $.g.c.c(_, function(p, c) {
      c.a = 0;
      $.cc += 1;
    });

    // Collisions with enemies
    $.g.e.c(_, function(p, e) {
      _.hp -= 1;
      e.a = 0;
    });
    $.i.c();
  };

  _.r = function() {
    $.x.s();
    //$.x.fs("red");
    //$.x.fr(_.x, _.y, _.w, _.h);
    if (_.af) {
      $.x.di(_.src1, _.x, _.y);
    } else {
      $.x.di(_.src2, _.x, _.y);
    }
    $.x.r();
  };
};

var GameOverPlayer = function() {
  var _ = this;
  _.inherits(Sprite);
  Sprite.call(_, 280, 120, 80, 160);

  _.u = function() {
  };

  _.r = function() {
    $.x.s();
    $.x.fs("red");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
