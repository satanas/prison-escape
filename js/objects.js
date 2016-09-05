var Platform = function(y) {
  var _ = this;
  _.inherits(Sprite);
  Sprite.call(_, 0, y, $.vw, 30);

  _.r = function() {
    $.x.s();
    $.x.fs("#57464a");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
