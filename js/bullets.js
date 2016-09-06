var Bullet = function(x, y) {
  var _ = this;
  _.sp = 400;
  _.inherits(Sprite);
  Sprite.call(_, x, y, 8, 8);

  _.u = function() {
    _.x += $.e / 1000 * _.sp;
    _.ur();
    if (!$.cam.inView(_)) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("white");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
