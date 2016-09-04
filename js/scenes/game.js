var GameScene = function() {
  var _ = this;
  _.name = 'Game';
  Scene.call(_);

  _.start = function() {
    console.log('starting game');
    _.init();
    _.loop();
  };

  _.init = function() {
  };

  _.update = function() {
    $.x.clr('black');
    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if ($.e < 160) {
    //  // Change bg color if under rainbow effects
    //  ($.rbe) ? $.x.clr($.RB.bg): $.x.clr(_.lv.bgc);

    //  _.p.u(); // Update player
    //  $.g.t.u(); // Update traps
    //  $.g.z.u(); // Update triggers
    //  $.g.p.u(); // Update pills
    //  $.g.e.u(); // Update sensors
    //  $.g.x.u(); // Update explosions
    //  _.h.u(); // Update HUD

    //  // Update camera. Always at the end of all updates
    //  $.cam.u();

    //  // Render objects with camera. Order defines who paints first
    //  $.g.b.r(); // Render blocks
    //  $.g.p.r(); // Render pills
    //  $.g.t.r(); // Render traps
    //  $.g.z.r(); // Render triggers
    //  $.cam.r(_.p); // Render player
    //  $.g.r.r(); // Render rainbows
    //  $.g.e.r(); // Render sensors
    //  $.g.x.r(); // Render explosions
    //}
  };
};

GameScene.prototype = Object.create(Scene.prototype);
GameScene.prototype.constructor = GameScene;
