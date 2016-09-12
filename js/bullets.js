var Bullet = function(x, y) {
  var _ = this;
  _.sp = 600;
  _.n = 'b';
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

var Laser = function(p) {
  var _ = this;
  _.p = p; // Player instance
  _.n = 'l';
  _.inherits(Sprite);
  Sprite.call(_, p.x, p.y + (p.h / 2) - 20, $.vw - 80, 16);

  _.u = function() {
    _.y = _.p.y + (_.p.h / 2) - 10;
    _.ur();
  };

  _.r = function() {
    $.x.s();
    $.x.fs(data.pw[2].c);
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
