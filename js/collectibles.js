var Coin = function(x, y, p) {
  var _ = this;
  // Possible heights
  _.hs = [125, 265, 405];
  _.ms = 1500; // Magnetism speed
  _.md = pow(300, 2); // Min distance for magnetism
  _.p = p; // Player instance
  _.mg = 0; // Magnetized
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 24, 24);
  _.n = 'c';
  _.an = new Animator([0, 1, 2, 3], 80);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    if ($.mg && $.cam.inView(_) && !_.mg) _.mg = 1;

    if (_.mg) {
      var px = p.x + (p.w / 2),
          py = p.y + (p.h / 2),
          dt2 = pow(px - _.x, 2) + pow(py - _.y, 2);

      if (dt2 <= _.md) {
        var ang = atan((p.y - _.y) / (p.x - _.x)); // * 180 / PI;
        if (p.x > _.x) ang += PI;
        _.x -=  cos(ang) * ($.e / 1000) * _.ms;
        _.y -=  sin(ang) * ($.e / 1000) * _.ms;
      }
    }
    _.ur();
    _.an.u();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("#ffcd0b");
    if (_.an.g() === 0) {
      $.x.bp();
      $.x.arc(_.x + (_.w / 2), _.y + (_.h / 2), 12, 0, PI * 2);
      $.x.f();
      $.x.fs("black");
    } else if (_.an.g() === 1 || _.an.g() === 3) {
      if ($.x.e) {
        $.x.bp();
        $.x.e(_.x + 12, _.y + (_.h / 2), 7, 12, 0, 0, PI * 2);
        $.x.f();
        $.x.fs("black");
      }
    } else if (_.an.g() === 2) {
      $.x.fr(_.x + 9, _.y, 6, _.h);
    }
    $.x.r();
  };
};

var Heart = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [125, 265, 405];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 24, 24);
  _.n = 'h';
  _.an = new Animator([0, 1], 250);
  _.h1 = $.svg.n(data.h, 24, 24);
  _.h2 = $.svg.n(data.h.replace('e22222', 'f00'), 24, 24);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    _.an.u();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    if (_.an.g()) {
      $.x.di(_.h1, _.x, _.y);
    } else {
      $.x.di(_.h2, _.x, _.y);
    }
    $.x.r();
  };
};

var PowerUp = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [124, 261, 401];
  _.inherits(Sprite);
  _.n = 'p';
  Sprite.call(_, x, _.hs[y], 32, 32);
  _.an = new Animator([
    $.svg.n(data.pwi, 32, 32),
    $.svg.n(data.pwi.replace('f00', 'ff0'), 32, 32),
    $.svg.n(data.pwi.replace('f00', '00f'), 32, 32),
    $.svg.n(data.pwi.replace('f00', 'f0f'), 32, 32),
    $.svg.n(data.pwi.replace('f00', '0f0'), 32, 32),
    $.svg.n(data.pwi.replace('f00', 'fff'), 32, 32)
  ], 150);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    _.an.u();
    if (_.b.r < 0) _.a = 0;
  };

  // Get power up type
  _.g = function() {
    _.n = rnde(['a', 'l', 'm', 'm', 'a', 'l']);
    return _.n;
  };

  _.r = function() {
    $.x.s();
    $.x.di(_.an.g(), _.x, _.y);
    $.x.r();
  };
};
