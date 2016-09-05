var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  // Distance traveled
  _.dt = 0;
  // Speed
  _.sp = 250; // pixels per second

  // Groups
  $.g.p = new Group(); // Platforms

  _.px1 = new Parallax1(_.sp);
  _.px2 = new Parallax2(_.sp);
  _.px3 = new Parallax3(_.sp);

  $.g.p.a(new Platform(170));
  $.g.p.a(new Platform(310));
  $.g.p.a(new Platform(450));


  _.update = function() {
    $.x.clr('#1e4458');
    _.dt += (_.t.e / 1000) * _.sp;

    _.px3.u(_.t.e);
    _.px2.u(_.t.e);
    _.px1.u(_.t.e);

    //$.cam.u();

    _.px3.r(); // Render Parallax
    _.px2.r(); // Render Parallax
    _.px1.r(); // Render Parallax
    $.g.p.r(); // Render Platforms

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if (.e < 160) {
    //}
  };
};
