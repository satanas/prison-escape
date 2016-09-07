var Level = function() {
  var _ = this;
  _.xc = 300; // Max coins per game
  _.xe = 100; // Max enemies per game
  _.xx = 60; // Max explosives per game
  // Element positions (as arrays)
  _.pos = {
    c: [
      [],
      [],
      []
    ],
    e: [
      [],
      [],
      []
    ],
  };

  _.gen = function() {
    spawnCoins();
    spawnEnemies();
    spawnExplosives();
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

      bb = b - 50;
      b += spawnCoinsSegment(b, y, n);
      _.xc -= n;
      _.pos.c[y].push([bb, b]);
      b += rndr(200, 700)
    }
  };

  var isEmpty = function(x, y) {
    var arr = Object.keys(_.pos), ll, rl;

    for (var j=0; j<arr.length; j++) {
      for (var i=0; i<_.pos[arr[j]][y].length; i++) {
        ll = _.pos[arr[j]][y][i][0];
        rl = _.pos[arr[j]][y][i][1];
        if (x >= ll && x <= rl) return false;
      }
    }
    return true
  };

  var spawnEnemies = function() {
    var b = 0, y, bb;

    while (_.xe > 0) {
      //bb = b + rndr(200, 400);
      bb = b + rndr(600, 800);
      y = rnde([0, 1, 2]);

      if (!isEmpty(bb, y)) continue;

      b = bb;
      _.xe -= 1;
      _.pos.e[y].push([b - 50, b + 100]);
      $.g.e.a(new Cop(b, y));
    }
  };

  var spawnExplosives = function() {
    var b = 0, y, bb;

    while (_.xx > 0) {
      bb = b + rndr(600, 800);
      y = rnde([0, 1, 2]);

      if (!isEmpty(bb, y)) continue;

      b = bb;
      _.xx -= 1;
      _.pos.e[y].push([b - 50, b + 100]);
      $.g.e.a(new Explosive(b, y));
    }
  };
};
