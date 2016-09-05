var Platform = function(y) {
  var _ = this;
  _.inherits(Sprite);
  Sprite.call(_, 0, y, $.vw, 40);

  _.r = function() {
    $.x.s();
    $.x.fs("black");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.r();
  };
};
