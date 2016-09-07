var Cop = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hp = 1;
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 48, 64);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    if (_.b.r < 0) _.a = 0;

    $.g.pb.c(_, function(c, b) {
      _.hp -= 1;
      if (_.hp < 0) _.a = 0;
    });
  };

  _.r = function() {
    $.x.s();
    $.x.fs("blue");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};

var RunningCop = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hp = 3;
  _.sp = 200;
  _.l = y;
  _.ws = 0; // Warning sent
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 48, 64);

  _.u = function() {
    if (_.x > 640) {
      _.x -= $.e / 1000 * $.sp;
      if (_.x <= 1200 && !_.ws) {
        _.ws = 1;
        $.g.w.a(new Warning(_.l));
      }
    } else {
      _.x -= $.e / 1000 * ($.sp + _.sp);
    }
    _.ur();
    if (_.b.r < 0) _.a = 0;

    $.g.pb.c(_, function(c, b) {
      _.hp -= 1;
      if (_.hp < 0) _.a = 0;
    });
  };

  _.r = function() {
    $.x.s();
    $.x.fs("blue");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.fr(_.x - 20, _.y, 12, _.h);
    $.x.r();
  };
};

var Explosive = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [122, 262, 402];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 48, 48);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("purple");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};

var LaserWall = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [60, 200, 340];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 12, 110);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("green");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
