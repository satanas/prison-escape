var Level = function() {
  var _ = this;
  _.xc = 300; // Max coins per game
  _.xe = 100; // Max enemies per game
  _.xx = 60; // Max explosives per game
  _.xr = 40; // Max running cops per game
  _.xw = 40; // Max laser walls per game
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
    spawnRunningEnemies();
    spawnLaserWalls();
    console.log(_.lep());
  };

  // Last enemy
  _.lep = function() {
    var la = function(y) {
      return _.pos.e[y][_.pos.e[y].length - 1][1];
    };
    return max(la(0), la(1), la(2));
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
        if (x >= ll && x <= rl) return 0;
      }
    }
    return 1
  };

  var spawnEnemies = function() {
    var b = 0, y, bb;

    while (_.xe > 0) {
      bb = b + rndr(800, 1200);
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
      bb = b + rndr(1400, 1800);
      y = rnde([0, 1, 2]);

      if (!isEmpty(bb, y)) continue;

      b = bb;
      _.xx -= 1;
      _.pos.e[y].push([b - 50, b + 100]);
      $.g.e.a(new Explosive(b, y));
    }
  };

  var spawnLaserWalls = function() {
    var b = 1000, y, bb;

    while (_.xw > 0) {
      bb = b + rndr(2200, 2700);
      y = rnde([0, 1, 2]);

      if (!isEmpty(bb, y)) continue;

      b = bb;
      _.xw -= 1;
      _.pos.e[y].push([b - 10, b + 10]);
      $.g.e.a(new LaserWall(b, y));
    }
  };

  var spawnRunningEnemies = function() {
    var b = 0, y, bb;

    while (_.xr > 0) {
      bb = b + rndr(2200, 2700);
      y = rnde([0, 1, 2]);

      if (!isEmpty(bb, y)) continue;

      b = bb;
      _.xr -= 1;
      _.pos.e[y].push([b - 50, b + 100]);
      $.g.e.a(new RunningCop(b, y));
    }
  };

  $.g.e.a(new RunningCop(1200, 1));
};
