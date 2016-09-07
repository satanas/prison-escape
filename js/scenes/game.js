var GameScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);

  _.dt = 0; // Distance traveled
  _.de = 100000; // Distance to escape
  _.xc = 300; // Max coins per play
  $.sp = 250; // Speed in pixels per second

  _.p = new Player();
  // Groups
  $.g.p = new Group(); // Platforms
  $.g.pb = new Group(); // Player bullets
  $.g.c = new Group(); // Coins

  _.px1 = new Parallax1($.sp);
  _.px2 = new Parallax2($.sp);
  _.px3 = new Parallax3($.sp);

  $.g.p.a(new Platform(170));
  $.g.p.a(new Platform(310));
  $.g.p.a(new Platform(450));


  var spawnCoinsSegment = function(x, y, n) {
    for (var i=0; i<n; i++) {
      $.g.c.a(new Coin(x + (50 * i), y));
    }
    return n * 74;
  };

  var spawnCoins = function() {
    var b, s, y, n;
    b = rndr(700, 1000);

    while (_.xc > 0) {
      y = rnde([0, 1, 2]);
      n = rndr(3, 10);
      n = (_.xc >= n) ? n : _.xc;

      b += spawnCoinsSegment(b, y, n);
      _.xc -= n;
      b += rndr(200, 700)
    }
  };

  spawnCoins();

  _.update = function() {
    $.x.clr('#1e4458');
    _.dt += ($.e / 1000) * $.sp;
    console.log($.g.c.e.length);

    // Update
    _.px3.u();
    _.px2.u();
    _.px1.u();
    $.g.pb.u();
    $.g.c.u();
    _.p.u();

    // Render
    _.px3.r();
    _.px2.r();
    _.px1.r();
    $.g.p.r();
    $.g.c.r();
    _.p.r();
    $.g.pb.r();

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    //if (.e < 160) {
    //}
  };
};
