var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  // Distance traveled
  _.dt = 0;
  // Speed
  _.sp = 250; // pixels per second

  _.p = new Player();
  // Groups
  $.g.p = new Group(); // Platforms
  $.g.pb = new Group(); // Player bullets

  _.px1 = new Parallax1(_.sp);
  _.px2 = new Parallax2(_.sp);
  _.px3 = new Parallax3(_.sp);

  $.g.p.a(new Platform(170));
  $.g.p.a(new Platform(310));
  $.g.p.a(new Platform(450));

  _.update = function() {
    $.x.clr('#1e4458');
    _.dt += ($.e / 1000) * _.sp;

    // Update
    _.px3.u();
    _.px2.u();
    _.px1.u();
    $.g.pb.u();
    _.p.u();

    // Render
    _.px3.r();
    _.px2.r();
    _.px1.r();
    $.g.p.r();
    _.p.r();
    $.g.pb.r();

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if (.e < 160) {
    //}
  };
};
