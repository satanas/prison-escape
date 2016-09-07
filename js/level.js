var Level = function() {
  var _ = this;
  _.xc = 300; // Max coins per play
  // Element positions (as arrays)
  _.pos = {
    c: [
      [],
      [],
      []
    ],
  };

  _.gen = function() {
    spawnCoins();
    console.log(_.pos.c);
  };

  var spawnCoinsSegment = function(x, y, n) {
    for (var i=0; i<n; i++) {
      $.g.c.a(new Coin(x + (50 * i), y));
    }
    return n * 74;
  };

  var spawnCoins = function() {
    var b, s, y, n, bb;
    b = rndr(700, 1000);

    while (_.xc > 0) {
      y = rnde([0, 1, 2]);
      n = rndr(3, 10);
      n = (_.xc >= n) ? n : _.xc;

      bb = b;
      b += spawnCoinsSegment(b, y, n);
      _.xc -= n;
      _.pos.c[y].push([bb, b]);
      b += rndr(200, 700)
    }
  };

  var isCoin = function(x, y) {
    for (var i=0; i<_.pos.c[y].length; i++) {
      if (x >= _.pos.c[y][0] && x <= _.pos.c[y][1]) return true;
    }
    return false
  };

  var spawnEnemies = function() {
  };
};
