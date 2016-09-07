var BaseParallax = function(w, sp, sf, dw) {
  var _ = this;
  _.w = w;
  _.off = 0;
  _.sp = sp * sf; // Speed
  _.sf = sf; // Speed fraction
  _.dt = 0; // Distance traveled
  _.c = document.createElement('canvas');
  _.c.width = _.w;
  _.c.height = $.vh;
  _.cx = _.c.getContext('2d');
  _.dw = dw;

  _.fr = function(x, y, w, h) {
    // To avoid anti-aliasing
    _.cx.fillRect(floor(x), floor(y), w, h);
  };
  // Set fillStyle
  _.fs = function(c) {
    _.cx.fillStyle = c;
  };

  _.u = function(e) {
    _.dt += ($.e / 1000) * ($.sp * _.sf);
    _.off = _.dt % _.w;
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

  // Draw the image (called only once)
  _.dw();
};

var Parallax1 = function(sp) {
  var _ = this;
  _.inherits(BaseParallax);
  BaseParallax.call(_, 800, sp, 3 / 4, function() {
    _.cx.save();
    _.fs("#1e1b35");
    _.fr(20, 240, 100, 480);
    _.fr(160, 220, 100, 480);
    _.fr(290, 320, 100, 480);
    _.fr(450, 120, 100, 480);
    _.fr(600, 350, 100, 480);
    _.fr(700, 350, 100, 480);
    _.fr(0, 400, _.w, 480);
    _.cx.restore();
  });
};

var Parallax2 = function(sp) {
  var _ = this;
  _.inherits(BaseParallax);
  BaseParallax.call(_, 1000, sp, 1 / 2, function() {
    _.cx.save();
    _.fs("#212541");
    _.fr(0, 140, 75, 480);
    _.fr(120, 120, 75, 480);
    _.fr(240, 200, 75, 480);
    _.fr(360, 170, 75, 480);
    _.fr(480, 150, 75, 480);
    _.fr(600, 230, 75, 480);
    _.fr(700, 200, 75, 480);
    _.fr(800, 240, 75, 480);
    _.fr(900, 250, 75, 480);
    _.fr(0, 350, _.w, 480);
    _.cx.restore();
  });
};

var Parallax3 = function(sp) {
  var _ = this;
  _.inherits(BaseParallax);
  BaseParallax.call(_, 1200, sp, 1 / 4, function() {
    _.cx.save();
    _.fs("#272a4d");
    _.fr(0, 20, 70, 480);
    _.fr(100, 40, 60, 480);
    _.fr(200, 25, 60, 480);
    _.fr(300, 40, 70, 480);
    _.fr(400, 20, 60, 480);
    _.fr(500, 120, 60, 480);
    _.fr(600, 25, 70, 480);
    _.fr(700, 80, 60, 480);
    _.fr(800, 20, 60, 480);
    _.fr(900, 40, 70, 480);
    _.fr(1000, 25, 60, 480);
    _.fr(1100, 160, 60, 480);
    _.fr(0, 300, _.w, 480);
    _.cx.restore();
  });
};
