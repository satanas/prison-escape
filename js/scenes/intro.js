var IntroScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.x = 70;
  _.y = 210;
  _.sd = [600, 2300, 1800, 1200, 1600, 1200, 1200, 1000, 2000];
  _.c = 0; // Counter
  _.gc = 1; // Gate closed?
  _.ss = 0; // Scene status (index). 0=waiting text1, 1=waiting text2, 2=bsod, 3=stand, 4=open doors, 5=running away

  _.p = new IntroPlayer();
  _.bs = new BSOD(100);
  $.scn.game = new GameScene();

  _.update = function() {
    var _ = this;
    _.c += $.e;
    if (_.c >= _.sd[_.ss]) {
      _.c = 0;
      _.ss += 1;
      if (_.ss === 4) _.bs.s();
      if (_.ss === 5) $.s.p('si');
      if (_.ss === 6) {
        _.gc = 0;
        $.s.p('do');
      }
      if (_.ss === 7) _.p.an.d = 70;
    }

    if (_.ss < 4) _.p.u();
    if (_.ss === 7) _.p.ra();

    _.dj();
    _.dd();
    _.p.r();
    _.dbs();
    _.df();

    if (_.ss >= 1 && $.i.d(27)) {
      _.exit();
      $.scn.game.start();
    }

    if (_.ss === 8) _.fout($.scn.game, 1000);
  };

  // Draw jail
  _.dj = function() {
    $.x.clr('black');
    $.x.s();
    $.x.fs('#b2b2b2');
    $.x.fr(_.x, _.y, 500, 110);
    $.x.fs(data.wc);
    $.x.fr(_.x, _.y, 500, 20);
    $.x.fr(_.x, _.y + 110, 500, 20);
    $.x.fr(_.x, _.y, 20, 110);
    $.x.fr(_.x + 360, _.y, 20, 33);
    $.x.fs('#999');
    $.x.fr(_.x + 158, _.y + 25, 68, 35);
    $.x.fs('#134458');
    $.x.fr(_.x + 164, _.y + 29, 56, 27);
    $.x.fs('#999');
    $.x.fr(_.x + 172, _.y + 29, 8, 30);
    $.x.fr(_.x + 188, _.y + 29, 8, 30);
    $.x.fr(_.x + 204, _.y + 29, 8, 30);
    $.x.fs('#666');
    $.x.fr(_.x + 33, _.y + 89, 111, 7);
    $.x.fr(_.x + 39, _.y + 95, 7, 15);
    $.x.fr(_.x + 130, _.y + 95, 7, 15);

    // Gate
    if (_.gc) {
      $.x.fs('black');
      $.x.fr(_.x + 364, _.y + 33, 13, 77);
    } else {
      $.x.fs('#333');
      $.x.fr(_.x + 370, _.y + 33, 96, 77);
      $.x.fs('#b2b2b2');
      $.x.fr(_.x + 382, _.y + 39, 8, 65)
      $.x.fr(_.x + 398, _.y + 39, 8, 65)
      $.x.fr(_.x + 414, _.y + 39, 8, 65)
      $.x.fr(_.x + 430, _.y + 39, 8, 65)
      $.x.fr(_.x + 446, _.y + 39, 8, 65)
      $.x.fr(_.x + 462, _.y + 39, 8, 65)
    }
    $.x.ct('Press Esc to skip intro', 10, 465, '#fff', 'courier');
    $.x.r();
  }

  // Draw dialogs
  _.dd = function() {
    if (_.ss > 4) return;

    $.x.s();
    if (_.ss >= 1)
      $.x.ct('It was a regular day in the prison', 25, 120, 'white', 'courier');

    if (_.ss >= 2)
      $.x.ct('When suddenly...', 25, 420, 'white', 'courier');
    $.x.r();
  };

  // Draw BSOD
  _.dbs = function() {
    if (_.ss === 4) _.bs.r();
  };

  // Draw fix for the screen
  _.df = function() {
    if (_.ss === 4) return;

    $.x.s();
    $.x.fs('black');
    $.x.fr(570, 180, 70, 200);
    $.x.r();
  };
};
