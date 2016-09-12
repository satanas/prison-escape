var Player = function() {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hi = 1; // Height index
  _.mhp = 3; // Max hp
  _.hp = _.mhp;
  _.sd = 150; // Shooting Delay
  _.sc = 0; // Shooting Counter
  _.rs = 180; // Running speed
  _.iv = 0; // Invincible
  _.id = 1000; // Invincibility delay
  _.ic = 0; // Invincibility counter
  _.inherits(Sprite);
  Sprite.call(_, 120, _.hs[_.hi], 40, 64);

  _.an = new Animator([$.svg.n(data.p[0], 40, 64), $.svg.n(data.p[1], 40, 64)], 100);
  _.an.cb = function(i) {
    // Step sounds
    $.s.p('st');
  };
  _.ia = new Animator([0, 1], 100); // Invincibility animator

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

    if (_.iv) {
      _.ia.u();
      _.ic -= $.e;
      if (_.ic <= 0 || _.hp <= 0) _.iv = 0;
    }

    // Up
    if ($.i.d(38)) {
      _.hi = (_.hi - 1 < 0) ? 0 : _.hi - 1;
      _.y = _.hs[_.hi];
      $.s.p('j');
    } else if ($.i.d(40)) {
      _.hi = (_.hi + 1 > _.hs.length - 1) ? _.hs.length - 1 : _.hi + 1;
      _.y = _.hs[_.hi];
      $.s.p('j');
    } else if ($.i.d(32)) {
      if (_.sc <= 0) {
        _.sc = _.sd;
        $.s.p('sh');
        $.g.pb.a(new Bullet(_.x + _.w, _.y + (_.h/ 2)));
      }
    }
    _.ur();

    // Collisions with collectibles
    $.g.c.c(_, function(p, c) {
      c.a = 0;
      if (c.n === 'c') {
        // Coins
        $.cc += 1;
        $.s.p('c');
      } else if (c.n = 'h') {
        // Hearts
        _.hp += 1;
        _.hp = (_.hp > _.mhp) ? _.mhp : _.hp;
        $.s.p('hp');
      }
    });

    // Collisions with enemies
    if (!_.iv) {
      $.g.e.c(_, function(p, e) {
        _.hp -= 1;
        _.iv = 1;
        _.ic = _.id;
        if (e.n === 'cop') {
          $.s.p('hu');
          e.sp = 0;
        }
        if (e.n === 'exp') {
          e.a = 0;
          $.g.x.a(new Explosion(_.x + (_.w / 2), _.y + (_.h / 2)));
          $.s.p('xp');
        }
      });
    }
    $.i.c();
  };

  _.r = function() {
    $.x.s();
    if (_.iv && _.hp > 0) {
      if (_.ia.g()) $.x.di(_.an.g(), _.x, _.y);
    } else {
      $.x.di(_.an.g(), _.x, _.y);
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
    $.x.fs("#ffd4aa");
    $.x.fr(_.x, _.y, _.w, 60);
    $.x.fs("#ff930f");
    $.x.fr(_.x, _.y + 60, _.w, 80);
    $.x.fr(_.x + 10, _.y + 140, 20, 20);
    $.x.fr(_.x + 50, _.y + 140, 20, 20);
    $.x.fs("#000");
    $.x.fr(_.x + 12, _.y + 27, 11, 11);
    $.x.fr(_.x + 57, _.y + 27, 11, 11);
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

  _.an = new Animator([$.svg.n(data.p[0], 40, 64), $.svg.n(data.p[1], 40, 64)], 150);
  _.an.cb = function(i) {
    $.s.p('st');
  };

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
    //if (_.an.g() !== _.cf) {
    //  $.s.p('st');
    //  _.cf = _.an.g();
    //}
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

var Powering = function() {
  _.t = 3000; // Power up time
  _.c = 0; // Counter
  _.p = 0; // Power up (1: adrenaline, 2: s-weapon)
  //_.an = new Animator([0, 1], )

  _.u = function() {
    if (_.p > 0) _.c -= $.e;
  };

  // Set power up
  _.s = function(p) {
    _.p = p;
    _.c = _.t;
  };
};
