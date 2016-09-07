var Player = function() {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hi = 1; // Height index
  _.hp = 3;
  _.inherits(Sprite);
  Sprite.call(_, 120, _.hs[_.hi], 48, 64);

  _.u = function() {
    if (_.hp <= 0) return;
    // Up
    if ($.i.d(38)) {
      _.hi = (_.hi - 1 < 0) ? 0 : _.hi - 1;
      _.y = _.hs[_.hi];
    } else if ($.i.d(40)) {
      _.hi = (_.hi + 1 > _.hs.length - 1) ? _.hs.length - 1 : _.hi + 1;
      _.y = _.hs[_.hi];
    } else if ($.i.d(32)) {
      $.g.pb.a(new Bullet(_.x + _.w, _.y + (_.h/ 2)));
    }
    _.ur();

    // Collisions with coins
    $.g.c.c(_, function(p, c) {
      c.a = 0;
      $.cc += 1;
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
    $.x.fs("red");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
