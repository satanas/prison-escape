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
  var x = '<g><rect fill="#ff930f" height="32" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="26"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="2"/><rect fill="#000000" height="5" id="3" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="34" y="11"/><rect fill="#000000" height="5" id="4" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="22" y="11"/><rect fill="#ff930f" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="10" y="56"/><rect fill="#ff930f" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="23" y="56"/></g>';
  var y = '<g><rect fill="#ff930f" height="32" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="24"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="0"/><rect fill="#000000" height="5" id="3" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="34" y="9"/><rect fill="#000000" height="5" id="4" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="22" y="9"/><rect fill="#ff930f" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="5" y="56"/><rect fill="#ff930f" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="25" y="56"/></g>';
  _.src1 = $.svg.n(x, 40, 64);
  _.src2 = $.svg.n(y, 40, 64);

  _.an = new Animator([_.src1, _.src2], 100);

  _.esc = function() {
    return (_.x > $.vw);
  };

  _.u = function() {
    if (_.hp <= 0) return;
    if (_.sc > 0) _.sc -= $.e;

    _.an.u();

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
    $.x.di(_.an.g(), _.x, _.y);
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
