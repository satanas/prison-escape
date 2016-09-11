var Explosion = function(x, y, r) {
  var _ = this;
  _.inherits(Sprite);
  Sprite.call(_, x, y);
  _.rd = r || 22; // Maximum radius
  _.pt = 45; //Phase time
  _.pc = 0; // Phase counter
  _.p = 0; // Phase

  _.u = function() {
    _.pc += $.e;
    if (_.pc > _.pt) {
      _.p += 1;
      _.pc = 0;
    }
    if (_.p > 5) _.a = 0;
  };

  _.r = function(r) {
    $.x.s();
    if (_.p < 3) {
      $.x.fs("white");
      $.x.bp();
      $.x.arc(r.x, r.y, _.rd / (3 - _.p), 0, 2 * PI);
      $.x.f();
    } else if (_.p === 3) {
      $.x.fs("orange");
      $.x.bp();
      $.x.arc(r.x, r.y, _.rd * 1.5, 0, 2 * PI);
      $.x.f();
    } else if (_.p === 4) {
      $.x.fs("red");
      $.x.bp();
      $.x.arc(r.x, r.y, _.rd * 2, 0, 2 * PI);
      $.x.f();
    } else if (_.p > 4) {
      $.x.fs("white");
      $.x.bp();
      $.x.arc(r.x, r.y, _.rd, 0, 2 * PI);
      $.x.f();
    }
    $.x.r();
  };
};
