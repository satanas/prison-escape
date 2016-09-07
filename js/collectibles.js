var Coin = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [125, 265, 405];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 24, 24);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("yellow");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
