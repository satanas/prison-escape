var Coin = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [125, 265, 405];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 24, 24);
  _.an = new Animator([0, 1, 2, 3], 100);

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
      $.x.sr(_.x + 9, _.y + 8, 6, 8);
    } else if (_.an.g() === 1 || _.an.g() === 3) {
      $.x.bp();
      $.x.e(_.x + 12, _.y + (_.h / 2), 7, 12, 0, 0, PI * 2);
      $.x.f();
      $.x.fs("black");
      $.x.sr(_.x + 10, _.y + 8, 3, 8);
    } else if (_.an.g() === 2) {
      $.x.fr(_.x + 9, _.y, 6, _.h);
    }
    $.x.r();
  };
};
