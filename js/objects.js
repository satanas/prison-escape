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

var Warning = function(y) {
  var _ = this;
  _.hs = [106, 246, 386];
  _.inherits(Sprite);
  _.lt = 1000;
  _.bt = 150; // Blink time
  _.sw = 1; // Show warning
  _.c = 0; // Counter
  Sprite.call(_, 600, _.hs[y], 16, 48);

  _.u = function() {
    _.lt -= $.e;
    _.c += $.e;
    if (_.c >= _.bt) {
      _.c = 0;
      _.sw = (_.sw) ? 0 : 1;
    }
    if (_.lt <= 0) _.a = 0;
  };

  _.r = function() {
    if (_.sw) {
      $.x.s();
      $.x.fs("red");
      $.x.fr(_.x, _.y, _.w, _.h - 16);
      $.x.fr(_.x, _.y + _.h - 12, _.w, 10);
      $.x.r();
    }
  };
};
