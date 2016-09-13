var Cop = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [106, 246, 386];
  _.hp = 1;
  _.n = 'cop';
  _.inherits(Sprite);
  _.im = $.svg.n('<g><rect fill="#007fff" height="20" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="24"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="0"/><rect fill="#000000" height="3" id="3" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="14" y="12"/><rect fill="#000000" height="3" id="4" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="2" y="12"/><rect fill="#0000bf" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="5" y="56"/><rect fill="#0000bf" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="25" y="56"/><rect fill="#0000bf" height="20" id="7" stroke="#000" stroke-opacity="null" stroke-width="0" width="18" x="23" y="0"/><rect fill="#0000bf" height="8" id="8" stroke="#000" stroke-opacity="null" stroke-width="0" width="25" x="0" y="0"/><rect fill="#0000bf" height="13" id="9" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="43"/><path d="m14,33l3,-3l3,3l-3,3l-3,-3z" fill="#ffff00" id="A" stroke="#000" stroke-opacity="null" stroke-width="0"/></g>', 40, 64);
  Sprite.call(_, x, _.hs[y], 30, 64);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    if (_.b.r < 0) _.a = 0;

    $.g.pb.c(_, function(c, b) {
      $.s.p('eh');
      if (b.n !== 'l') b.a = 0;
      _.hp -= 1;
      if (_.hp <= 0) _.a = 0;
    });
  };

  _.r = function() {
    $.x.s();
    $.x.di(_.im, _.x, _.y);
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
  _.n = 'cop';
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 43, 64);
  _.an = new Animator([0, 1], 100);
  _.an.cb = function(i) {
    $.s.p('cs');
  };
  _.im = $.svg.n('<g><rect fill="#718927" height="32" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="16" y="24"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="16" y="0"/><rect fill="#005400" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="22" y="56"/><rect fill="#005400" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="42" y="56"/><rect fill="#005400" height="20" id="7" stroke="#000" stroke-opacity="null" stroke-width="0" width="16" x="40" y="0"/><rect fill="#005400" height="8" id="8" stroke="#000" stroke-opacity="null" stroke-width="0" width="25" x="16" y="0"/><rect fill="#cccccc" height="64" id="B" stroke="#000" stroke-opacity="null" stroke-width="0" width="12" x="0" y="0"/><rect fill="#e5e5e5" height="15" id="C" stroke="#000" stroke-opacity="null" stroke-width="0" width="23" x="16" y="8"/><rect fill="#005400" height="7" id="D" stroke="#000" stroke-opacity="null" stroke-width="0" width="25" x="16" y="24"/><rect fill="#005400" height="16" id="E" stroke="#000" stroke-opacity="null" stroke-width="0" width="16" x="16" y="31"/></g>', 56, 64);

  _.u = function() {
    if (_.x > 640) {
      _.x -= $.e / 1000 * $.sp;
      if (_.x <= 1200 && !_.ws) {
        _.ws = 1;
        $.g.w.a(new Warning(_.l));
        $.s.p('wr');
      }
    } else {
      _.x -= $.e / 1000 * ($.sp + _.sp);
      _.an.u();
    }
    _.ur();
    if (_.b.r < 0) _.a = 0;

    $.g.pb.c(_, function(c, b) {
      $.s.p('eh');
      if (b.n !== 'l') b.a = 0;
      _.hp -= 1;
      if (_.hp <= 0) _.a = 0;
    });
  };

  _.r = function() {
    $.x.s();
    $.x.di(_.im, _.x, _.y);
    $.x.r();
  };
};

var Explosive = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [122, 262, 402];
  _.n = 'exp';
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 48, 48);
  _.an = new Animator([0, 1], 200);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    _.an.u();
    if (_.b.r < 0) _.a = 0;

    $.g.pb.c(_, function(c, b) {
      if (b.n !== 'l') return;
      _.a = 0;
      $.g.x.a(new Explosion(_.x + (_.w / 2), _.y + (_.h / 2)));
      $.s.p('xp');
    });
  };

  _.r = function() {
    $.x.s();
    $.x.fs("#e20000");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.fs("#ffff00");
    $.x.bp();
    $.x.mv(_.x + 24, _.y + 8);
    $.x.lt(_.x + 40, _.y + 40);
    $.x.lt(_.x + 8, _.y + 40);
    $.x.lt(_.x + 24, _.y + 8);
    $.x.f();
    if (_.an.g() === 0) {
      $.x.fs("black");
      $.x.fr(_.x + 22, _.y + 20, 5, 13);
      $.x.fr(_.x + 22, _.y + 35, 5, 4);
    }
    $.x.r();
  };
};

var LaserWall = function(x, y) {
  var _ = this;
  // Possible heights
  _.hs = [60, 200, 340];
  _.inherits(Sprite);
  Sprite.call(_, x, _.hs[y], 11, 110);
  _.an = new Animator([17, 11], 100);

  _.u = function() {
    _.x -= $.e / 1000 * $.sp;
    _.ur();
    _.an.u();
    if (_.b.r < 0) _.a = 0;
  };

  _.r = function() {
    $.x.s();
    $.x.fs("#00ff34");
    $.x.fr(_.x - (_.an.g() - 7) / 2, _.y, _.an.g(), _.h);
    $.x.r();
  };
};
