var Player = function() {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  // Height index
  _.hi = 1;
  _.inherits(Sprite);
  Sprite.call(_, 120, _.hs[_.hi], 48, 64);

  _.u = function() {
    // Up
    if ($.i.d(38)) {
      _.hi = (_.hi - 1 < 0) ? 0 : _.hi - 1;
      _.y = _.hs[_.hi];
    } else if ($.i.d(40)) {
      _.hi = (_.hi + 1 > _.hs.length - 1) ? _.hs.length - 1 : _.hi + 1;
      _.y = _.hs[_.hi];
    }
    $.i.c();
  };

  _.r = function() {
    $.x.s();
    $.x.fs("red");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
