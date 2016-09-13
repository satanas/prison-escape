var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  // Global variables
  $.mg = 0; // Magnetism
  $.dt = 0; // Distance traveled
  $.cc = 0; // Collected coins
  _.de = 100000; // Min distance to escape
  $.sp = 0; // Speed in pixels per second
  _.mis = 300; // Min speed
  _.mxs = 900; // Max speed
  _.gos = 0; // Game over sound
  _.wis = 0; // Winning sound
  _.fc = '#fff'; // Font color
  _.ft = 'courier'; // Font family
  _.fv = 'small-caps'; // Font variant
  _.an = new Animator([0, 1], 350);

  $.scn.gover = new GameOverScene();

  // Groups
  $.g.p = new Group(); // Platforms
  $.g.pb = new Group(); // Player bullets
  $.g.c = new Group(); // Collectibles
  $.g.e = new Group(); // Enemies
  $.g.w = new Group(); // Warnings
  $.g.x = new Group(); // Explosions

  _.p = new Player();

  _.px1 = new Parallax1($.sp);
  _.px2 = new Parallax2($.sp);
  _.px3 = new Parallax3($.sp);

  $.g.p.a(new Platform(170));
  $.g.p.a(new Platform(310));
  $.g.p.a(new Platform(450));

  _.lvl = new Level(_.de, 1000);
  _.lvl.gen(_.p);
  $.de = _.lvl.lep();
  //$.de = 6000;

  _.hud = new HUD(_.p);
  $.g.w.a(new Instructions());

  _.update = function() {
    $.x.clr('#1e4458');

    // Update
    _.px3.u();
    _.px2.u();
    _.px1.u();
    if ($.dt < $.de) {
      if (!_.p.pw.ip()) $.g.e.u();
      $.g.c.u();
      $.g.pb.u();
      $.g.w.u();
      _.hud.u();
    }
    _.p.u();
    $.g.x.u();

    // Render
    _.px3.r();
    _.px2.r();
    _.px1.r();
    $.g.p.r();
    if ($.dt < $.de) {
      $.g.e.r();
      $.g.c.r();
      $.g.pb.r();
      $.g.w.r();
      _.hud.r();
    }
    _.p.r();
    $.g.x.r();

    if (_.p.hp <= 0) {
      $.sp = 0;
      _.fout($.scn.gover, 1500);
      if (!_.gos) {
        $.s.p('go');
        _.gos = 1;
      }
    } else if (_.p.pw.ip()) {
      $.sp = 0;
    } else if ($.dt < $.de) {
      $.sp = _.mis + ($.dt * _.mxs) / _.de;
      if (_.p.pw.v === 1) {
        $.sp = 1500;
      }
    }

    // Player escaped
    if (_.p.esc()) {
      _.end();
      if (!_.wis) {
        $.s.p('wi');
        _.wis = 1;
      }
      if ($.i.p(13)) {
        _.exit();
        $.scn.game = new GameScene();
        $.scn.game.start();
      } else if ($.i.p(27)) {
        _.exit();
        $.scn.menu = new MenuScene();
        $.scn.menu.start();
      }
    } else {
      $.dt += ($.e / 1000) * $.sp;
    }
  };

  _.end = function() {
    _.an.u();
    $.x.s();
    $.x.fs('rgba(0,0,0,0.15');
    $.x.fr(0, 0, $.vw, $.vh);
    $.x.ct('You escaped!', 65, 120, '#0f0', _.ft, _.fv);
    $.x.ct('Running ' + cdt(_.de).toString() + ' mts to freedom', 30, 235, _.fc, _.ft, _.fv);
    $.x.ct('And collecting ' + $.cc + ' coins', 30, 280, _.fc, _.ft, _.fv);
    if (_.an.g()) {
      $.x.ct('Press Enter to play again', 15, 400, 'yellow', 'courier');
    }
    $.x.ct('Esc to exit', 10, 440, '#999', 'courier');
    $.x.r();
  }
};
