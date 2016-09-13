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
  _.pw = new Powering(_);

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

  _.si = function() {
    _.iv = 1;
    _.ic = _.id;
  };

  _.u = function() {
    if (_.hp <= 0) return;
    if (_.sc > 0) _.sc -= $.e;

    _.pw.u();
    if (!_.pw.ip()) _.an.u();
    if (_.pw.ip()) return;

    if ($.dt > $.de) {
      if (_.x < $.vw) _.x += ($.e / 1000) * _.rs
      return;
    }

    _.ia.u();
    if (_.iv) {
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
      if (_.sc <= 0 && (_.pw.v <= 0 || _.pw.v === 3)) {
        _.sc = _.sd;
        $.s.p('sh');
        $.g.pb.a(new Bullet(_.x + _.w, _.y + (_.h / 2)));
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
      } else if (c.n === 'h') {
        // Hearts
        _.hp += 1;
        _.hp = (_.hp > _.mhp) ? _.mhp : _.hp;
        $.s.p('hp');
      } else if (c.n === 'p') {
        if (_.pw.v === 1) return;

        $.s.p('pw');
        var pw = c.g();
        if (c.n === 'a') {
          _.pw.s(1);
        } else if (c.n === 'l') {
          _.pw.s(2);
          $.g.pb.a(new Laser(_));
        } else if (c.n === 'm') {
          _.pw.s(3);
          $.mg = 1;
        }
      }
    });

    // Collisions with enemies
    if (!_.iv) {
      $.g.e.c(_, function(p, e) {
        if (_.pw.v === 1) return;
        _.hp -= 1;
        _.si();
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
    if (_.pw.v === 1 && !_.pw.ip()) {
      $.x.s();
      $.x.fs(data.pw[_.pw.v].c);
      $.x.bp();
      if (_.pw.ie()) {
        if (_.ia.g()) $.x.arc(_.x + (_.w / 2), _.y + (_.h / 2), 40, 0, PI * 2);
      } else {
        $.x.arc(_.x + (_.w / 2), _.y + (_.h / 2), 40, 0, PI * 2);
      }
      $.x.f();
      $.x.r();
    } else if (_.pw.v === 3 && !_.pw.ip()) {
      $.x.s();
      $.x.ss(data.pw[_.pw.v].c);
      $.x.bp();
      if (_.pw.ie()) {
        if (_.ia.g()) $.x.arc(_.x + (_.w / 2), _.y + (_.h / 2), 100, 0, PI * 2);
      } else {
        $.x.arc(_.x + (_.w / 2), _.y + (_.h / 2), 100, 0, PI * 2);
      }
      $.x.k();
      $.x.r();
    }
    if (_.pw.ip()) _.pw.r(_.y);
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
  };

  _.r = function() {
    $.x.s();
    if (!_.d) {
      $.x.di(_.an.g(), _.x, _.y);
    } else {
      $.x.di(_.an.g(), _.x, _.y);
    }
    $.x.r();
  };
};

var Powering = function(pi) {
  var _ = this;
  _.pi = pi; // Player instance
  _.pwt = 0; // Power up time
  _.pt = 1000; // Presentation time
  _.wt = 1500; // Warning time
  _.c = 0; // Counter
  _.v = 0; // Power up value (1: adrenaline, 2: s-weapon)
  _.ps = 0; // Previous speed;
  _.p = 0; // Presented?

  _.u = function() {
    if (_.v > 0) {
      _.c -= $.e;
      if (_.c <= 0 && !_.p) {
        _.p = 1;
        _.c = data.pw[_.v].t;
      }
      if (_.v === 1 && _.p) $.s.p('ad');
      if (_.v === 2 && _.p) $.s.p('la');
    }
    if (_.c <= 0 && _.p) {
      if (_.v === 1) _.pi.si(); // Give player invincibility after adrenaline
      if (_.v === 2) $.g.pb.clr();
      if (_.v === 3) $.mg = 0;
      _.v = 0;
    }
  };

  // Set power up
  _.s = function(v) {
    _.ps = $.sp;
    _.p = 0;
    _.v = v;
    _.c = _.pt;
  };

  // Is presenting the power?
  _.ip = function() {
    return (_.v > 0 && !_.p);
  };

  // Is the power ending?
  _.ie = function() {
    return (_.v > 0 && _.p && _.c <= _.wt);
  };

  // Render power up presentation
  _.r = function(y) {
    $.x.s();
    var y = y - 46;
    $.x.fs(data.pw[_.v].b);
    $.x.fr(0, y, $.vw, 110);
    $.x.fs(data.pw[_.v].c);
    $.x.fr(0, y + 30, $.vw, 5);
    $.x.fr(0, y + 85, $.vw, 5);
    $.x.fs(data.pw[_.v].c);
    $.x.fr(0, y + 40, $.vw, 40);
    $.x.ct(data.pw[_.v].n, 37, y + 69, '#ff1493', 'courier');
    $.x.r();
  };
};
