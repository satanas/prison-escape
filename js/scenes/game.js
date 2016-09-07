var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  // Global variables
  $.dt = 0; // Distance traveled
  $.cc = 0; // Collected coins
  _.de = 100000; // Distance to escape
  $.sp = 550; // Speed in pixels per second

  $.scn.gover = new GameOverScene();

  _.p = new Player();
  // Groups
  $.g.p = new Group(); // Platforms
  $.g.pb = new Group(); // Player bullets
  $.g.c = new Group(); // Coins
  $.g.e = new Group(); // Enemies
  $.g.w = new Group(); // Warnings

  _.px1 = new Parallax1($.sp);
  _.px2 = new Parallax2($.sp);
  _.px3 = new Parallax3($.sp);

  $.g.p.a(new Platform(170));
  $.g.p.a(new Platform(310));
  $.g.p.a(new Platform(450));

  _.lvl = new Level();
  _.lvl.gen();

  _.update = function() {
    $.x.clr('#1e4458');
    $.dt += ($.e / 1000) * $.sp;

    // Update
    _.px3.u();
    _.px2.u();
    _.px1.u();
    $.g.pb.u();
    $.g.c.u();
    $.g.e.u();
    $.g.w.u();
    _.p.u();

    // Render
    _.px3.r();
    _.px2.r();
    _.px1.r();
    $.g.p.r();
    $.g.e.r();
    $.g.c.r();
    _.p.r();
    $.g.pb.r();
    $.g.w.r();

    if (_.p.hp <= 0) {
      $.sp = 0;
      _.fout($.scn.gover, 1500);
    }

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if (.e < 160) {
    //}
  };
};
