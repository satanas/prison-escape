var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  // Distance traveled
  _.dt = 0;
  // Speed
  _.sp = 5; // pixels per second

  // Groups
  $.g.p = new Group(); // Platforms

  $.g.p.a(new Platform(120));

  _.update = function() {
    $.x.clr('white');
    _.dt += (_.t.e / 1000) * _.sp;

    //$.g.p.u();

    //$.cam.u();

    $.g.p.r(); // Render Platforms

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if (.e < 160) {
    //}
  };
};
