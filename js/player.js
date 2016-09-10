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

  _.an = new Animator([$.svg.n(data.p[0], 40, 64), $.svg.n(data.p[1], 40, 64)], 100);

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
      $.s.p('c');
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

var IntroPlayer = function() {
  var _ = this;
  _.ox = 320;
  _.inherits(Sprite);
  Sprite.call(_, _.ox, 256, 40, 64);
  _.d = 0; // Direction
  _.sp = 60; // Walking speed
  _.rsp = 300; // Run away speed
  _.md = 40; // Max displacement
  _.wd = 500; // Waiting Delay
  _.c = 0; // Counter

  _.an = new Animator([$.svg.n(data.p[0], 40, 64), $.svg.n(data.p[1], 40, 64)], 100);

  _.u = function() {
    if (_.c <= 0) {
      _.an.u();
      if (_.d === 1) {
        _.x += _.sp * ($.e / 1000);
        if (_.x >= _.ox + _.md) {
          _.d = 0;
          _.c = _.wd;
        }
      } else if (_.d === 0) {
        _.x -= _.sp * ($.e / 1000);
        if (_.x <= _.ox - _.md) {
          _.d = 1;
          _.c = _.wd;
        }
      }
    } else {
      _.c -= $.e;
    }
  };

  // Run away
  _.ra = function() {
    _.an.u();
    _.x += _.rsp * ($.e / 1000);
  };

  _.r = function() {
    $.x.s();
    if (!_.d) {
      //$.x.tn(_.w, 0)
      //$.x.sc(-1, 1);
      $.x.di(_.an.g(), _.x, _.y);
    } else {
      $.x.di(_.an.g(), _.x, _.y);
    }
    $.x.r();
  };
};
