var Coin = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [125, 265, 405];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 24, 24);
  _.n = 'c';
  _.an = new Animator([0, 1, 2, 3], 80);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
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
      $.x.bp();
      $.x.e(_.x + 12, _.y + (_.h / 2), 7, 12, 0, 0, PI * 2);
      $.x.f();
      $.x.fs("black");
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
  _.h1 = $.svg.n(data.h);
  _.h2 = $.svg.n(data.h.replace('e22222', 'f00'));

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
