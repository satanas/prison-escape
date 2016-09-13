var Level = function(de, md) {
  var _ = this;
  _.md = md; // Min distance to start showing elements
  _.de = de; // Distance to escape
  _.xc = 400; // Max coins per game
  _.xe = 120; // Max enemies per game
  _.xx = 60; // Max explosives per game
  _.xr = 50; // Max running cops per game
  _.xw = 40; // Max laser walls per game
  _.xh = 30; // Max hearts per game
  _.xp = 20; // Max powerups per game
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
    ]
  };

  // Generate Level
  // p: player instance
  _.gen = function(p) {
    spwCoins(p);
    _.spawn(_.xe, 0, 50, 'e', Cop);
    _.spawn(_.xx, 200, 50, 'e', Explosive);
    _.spawn(_.xr, 500, 50, 'e', RunningCop);
    _.spawn(_.xw, 1000, 10, 'e', LaserWall);
    _.spawn(_.xh, 8000, 25, 'c', Heart);
    _.spawn(_.xp, 3000, 32, 'c', PowerUp);
  };

  // Last enemy
  _.lep = function() {
    var la = function(y) {
      return _.pos.e[y][_.pos.e[y].length - 1][1];
    };
    return max(la(0), la(1), la(2));
  };

  _.empty = function(x, y) {
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

  var _spwCoinsSeg = function(x, y, n, p) {
    for (var i=0; i<n; i++) {
      $.g.c.a(new Coin(x + (50 * i), y, p));
    }
    return n * 74;
  };

  var spwCoins = function(p) {
    var b, s, y, n, bb;
    b = rndr(700, 1000);

    while (_.xc > 0) {
      y = rnde([0, 1, 2]);
      n = rndr(3, 10);
      n = (_.xc >= n) ? n : _.xc;

      bb = b - 50;
      b += _spwCoinsSeg(b, y, n, p);
      _.xc -= n;
      _.pos.c[y].push([bb, b]);
      b += rndr(200, 700)
    }
  };

  // n: number of elements
  // b: base distance for first element to show up
  // w: width separation for each element
  // t: type of element (c: collectible, e: enemy)
  // cl: class to be instantiated
  _.spawn = function(n, b, w, t, cl) {
    var y, bb,
        th = rnde([300, 400, 500]); // Threshold to randomize separation between elements
        cr = (_.de - _.md - b) / n, // Calculated range
        sr = cr - th, // Start range
        er = cr + th; // End range

    b += _.md;

    while (n > 0) {
      bb = b + rndr(sr, er);
      y = rnde([0, 1, 2]);

      if (!_.empty(bb, y)) continue;

      b = bb;
      n -= 1;
      _.pos[t][y].push([b - w, b + (w * 2)]);
      $.g[t].a(new cl(b, y));
    }
  };

  //$.g.c.a(new Heart(850, 1));
  //$.g.c.a(new PowerUp(850, 2));
};
