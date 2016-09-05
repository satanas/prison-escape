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

var Parallax1 = function() {
  var _ = this;
  _.w = 800;
  _.off = 0;
  _.c = document.createElement('canvas');
  _.c.width = $.vw;
  _.c.height = $.vh;
  _.cx = _.c.getContext('2d');

  _.fr = function(x, y, w, h) {
    // To avoid anti-aliasing
    _.cx.fillRect(floor(x), floor(y), w, h);
  }
  // Set fillStyle
  _.fs = function(c) {
    _.cx.fillStyle = c;
  };

  _.cx.save();
  _.fs("#212246");
  _.fr(20, 240, 80, 480);
  _.fr(160, 220, 80, 480);
  _.fr(290, 320, 80, 480);
  _.fr(450, 120, 80, 480);
  _.fr(600, 350, 80, 480);
  _.fr(700, 350, 80, 480);
  _.cx.restore();

  _.u = function(dt) {
    _.off = dt % _.w;
  };

  _.r = function() {
    $.x.s();
    // Maximum width
    var w1 = _.w - _.off,
        w2 = $.vw - w1;
    $.x.di(_.c, _.off, 0, w1, $.vh, 0, 0, w1, $.vh);
    $.x.di(_.c, 0, 0, w2, $.vh, $.vw - w2, 0, w2, $.vh);
    $.x.r();
  };
};
