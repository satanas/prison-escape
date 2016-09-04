/* Start game on load */
window.addEventListener('load', function() {
  $.start();
});

$.start = function() {
  $.init();
  // Input
  $.i = new Input();
  // Collisions system
  //$.o = new Collisions();
  // Sound manager
  //$.s = new Sounds();
  // Bind keyboard
  $.i.b([13, 65, 37, 38, 39, 40, 49, 50, 51, 52]);

  // Sounds
  //$.s.a('s', [0,,0.0989,0.3295,0.2402,0.4314,,,,,,0.4986,0.5758,,,,,,1,,,,,0.5]);
  //$.s.a('bl', [0,,0.1622,0.2831,0.0177,0.7183,0.0176,-0.6492,,,,,,0.4253,0.0418,,,,1,,,,,0.5]);
  //$.s.a('el', [0,,0.116,0.0087,0.0639,0.5799,0.2,-0.2526,,,,,,0.7269,-0.239,,,,1,,,,,0.5]);
  //$.s.a('bu', [3,,0.143,0.6199,0.3681,0.0101,,0.0635,,,,0.6529,0.8676,,,,,,1,,,,,0.5]);
  //$.s.a('j', [0,,0.1294,,0.2786,0.3422,,0.2308,,,,,,0.1903,,,,,1,,,,,0.5]);
  //$.s.a('d', [1,0.0178,0.5066,0.022,0.8284,0.2873,,-0.0044,-0.4035,-0.049,0.3671,-0.4245,0.5258,0.544,0.0047,0.2887,,-0.2925,0.959,0.0046,,0.0715,-0.0178,0.5]);
  //$.s.a('k', [0,0.0173,0.3085,,0.931,0.544,,-0.2297,-0.096,0.0762,0.647,0.9264,-0.981,,0.002,,0.0321,0.2727,0.9998,-0.0649,0.4995,0.0222,-0.2578,0.5]);
  ////$.s.a('ad', [0,0.0206,0.174,0.1609,0.9405,0.6377,0.0504,0.0941,0.6764,0.2293,0.2062,1,0.0577,0.8306,-0.0722,0.5709,-0.3102,0.4869,0.8615,-0.0143,0.5708,0.1613,0.2586,0.5]);
  ////$.s.a('ad', [0,,0.3789,,0.3857,0.4568,,0.1294,,0.4663,0.4357,,,0.0749,,,,,1,,,,,0.5]);
  //$.s.a('ad', [0,,0.3789,,0.3857,0.4568,,0.1294,,0.4663,0.4357,,,0.0749,,,,,1,,,,,0.5]);
  //// Pill
  //$.s.a('pl', [0,,0.062,,0.2621,0.7185,,-0.5637,,,,,,0.0385,,,,,1,,,0.1982,,0.5]);
  //// Timeout alert
  //$.s.a('toa', [1,,0.657,0.0013,0.5775,0.2682,,0.2757,-0.2594,,,-0.1283,0.179,,0.1387,0.8701,-0.4883,-0.0501,0.8942,0.0035,0.506,0.0001,-0.0001,0.5]);
  //// Timeout tick
  //$.s.a('tot', [1,,0.0515,,0.1604,0.4166,,0.1333,,,,,,,,0.7266,,,1,,,,,0.5]);
  //$.s.a('xp', [3,,0.28,0.47,0.3694,0.26,,-0.3587,,,,,,,,,,-0.157,1,,,,,0.5]);
  //// Sparks
  //$.s.a('sp', [1,,0.1795,,0.0004,0.7687,0.0614,-0.6142,,,,,,0.3246,0.0199,,,,1,,,0.2508,,0.33]);
  //// BGM normal
  //$.s.a('b1', [1,0.2235,0.01,0.0178,0.7708,0.278,,-0.3022,0.8384,,0.9594,-0.3439,0.5078,0.3697,,0.8606,-0.0006,-0.6092,0.9437,0.3918,,0.0087,0.0603,0.23]);
  //$.s.a('b2', [2,0.467,0.3716,0.1497,0.4058,0.5584,,-0.0246,-0.0415,0.079,0.9803,-0.9292,,,0.713,,-0.0277,-0.3878,0.9875,,0.1455,0.0099,,0.29]);
  //$.s.a('b3', [2,0.0034,0.0882,0.36,0.7488,0.13,,,-0.0409,,,0.909,0.8699,0.1297,,0.0077,-0.0222,0.0108,0.9316,0.7784,0.4954,0.002,-0.1106,0.21]);
  //$.s.a('b4', [0,0.0897,0.9729,0.1514,0.7771,0.6074,,0.3006,0.9111,,,0.232,,0.8576,-0.193,0.6595,0.0443,-0.2262,0.3791,-0.0462,,0.0012,-0.0822,0.28]);
  //$.s.a('b5', [2,0.5118,0.5396,0.2344,0.0218,0.4481,,0.0003,0.8822,,,-0.7807,0.1024,,0.3144,0.8573,-0.0234,-0.3532,0.3484,-0.0216,0.2002,0.7388,0.0003,0.33]);
  //$.s.a('b6', [2,0.6502,0.0578,0.1576,0.8114,0.6487,,0.0119,0.0109,0.2188,0.9252,-0.4009,,,0.4876,,-0.4963,0.0723,0.9595,0.1278,,0.4881,0.0167,0.3]);
  //$.s.a('b7', [0,0.5891,0.445,0.002,0.7999,0.24,,0.0006,-0.0051,-0.9503,0.0566,0.3562,,0.1992,,0.3551,0.2477,0.0299,0.8817,,,0.0074,0.1778,0.16]);

  //// Raibow
  ////$.s.a('rb', [2,0.0011,0.4012,0.0045,0.454,0.4418,,0.0677,-0.2605,0.0059,0.6015,0.9339,0.4048,0.8791,-0.0004,-0.8487,0.9497,0.0279,0.3169,0.2484,0.6989,0.0055,-0.1299,0.5]);
  //$.s.a('rb', [2,0.1327,0.22,0.19,0.3846,0.78,,0.28,-0.12,,,0.4599,,0.8248,-0.0232,0.4414,-0.0004,0.5222,0.9392,-0.0046,0.9288,0.1549,0.0534,0.5]);

  //// Electricity
  //// 0,,0.1622,0.2831,0.0177,0.7183,0.0176,-0.6492,,,,,,0.4253,0.0418,,,,1,,,,,0.5
  //// fire
  //// 3,,0.1609,0.2651,0.0737,0.0628,,0.1112,,,,,,,,0.494,-0.2988,-0.1508,1,,,,,0.5
  //// jump
  //// 0,,0.1294,,0.2786,0.3422,,0.2308,,,,,,0.1903,,,,,1,,,,,0.5
  //// hurt (menu)
  //// 0,,0.082,,0.209,0.567,,-0.4477,,,,,,0.1973,,,,,1,,,0.1923,,0.5
  //// 3,,0.2836,0.6111,0.1022,0.0655,,-0.2237,,,,,,,,,,,1,,,,,0.5
  //// Dead
  //// 1,0.0178,0.5066,0.022,0.8284,0.2873,,-0.0044,-0.4035,-0.049,0.3671,-0.4245,0.5258,0.544,0.0047,0.2887,,-0.2925,0.959,0.0046,,0.0715,-0.0178,0.5

  $.ingame = 0;
  // Scenes
  $.menu = new MenuScene();

  $.menu.loop();
};

var GameScene = function() {
  var _ = this;
  // Time associated variables and methods
  _.t = {
    l: 0, // Level time
    s: 0, // Start time
    e: 0, // Elapsed time
    w: 0, // Timeout warning
    bf: 0 // Background music
  };
  _.ssp = 0; // Summary screen sound played
  _.wn = 0; // Time warnings before dead
  // Victory messages
  _.vmsg = rnde([
    "The aim of all live, is death–S. Freud",
    "Nothing in life is certain but death and taxes–B. Franklin",
    "Immortality: a fate worse than death–E. Shoaff",
    "You only die once–"
  ]);

  // Globals
  $.rbe = 0; // Rainbow effect?
  $.lvl = 1; // Current level

  _.init = function() {
    $.rbe = 0;
    $.ingame = 1;
    _.dd = 1000; // Delay after death
    _.t.s = 0;
    _.t.e = 0;
    _.t.w = 0;
    _.lv = new Levels();
    _.m = new Map(30, 24);
    _.m.l(_.lv.l[$.lvl].m);
    _.t.l = _.lv.l[$.lvl].t;
    $.c.sw(_.m.w * 32, _.m.h * 32);
    // Groups
    $.g.b = new Group(); // Blocks
    $.g.t = new Group(); // Traps
    $.g.z = new Group(); // Triggers
    $.g.p = new Group(); // Pills
    $.g.r = new Group(); // Rainbows
    $.g.e = new Group(); // Sensors
    $.g.x = new Group(); // Explosions

    var x, y, cx, cy;
    for (y=0; y<_.m.h; y++) {
      for (x=0; x<_.m.w; x++) {
        cx = x * 32;
        cy = y * 32;
        if (_.m.m[x][y] === "#") $.g.b.a(new Block(cx, cy));
        if (_.m.m[x][y] === "@") _.p = new Player(cx, cy, _.lv.l[$.lvl].l);
        if (_.m.m[x][y] === "T") $.g.z.a(new TNT(cx, cy));
        if (_.m.m[x][y] === "F") $.g.t.a(new Fire(cx, cy));
        if (_.m.m[x][y] === "S") $.g.t.a(new Saw(cx, cy));
        if (_.m.m[x][y] === "E") $.g.t.a(new Electricity(cx, cy));
        if (_.m.m[x][y] === "R") $.g.r.a(new Rainbow(cx, cy, 80));
        if (_.m.m[x][y] === "r") $.g.r.a(new Rainbow(cx, cy, 48));
        if (_.m.m[x][y] === "=") $.g.r.a(new RainbowBlock(cx, cy));
        if (_.m.m[x][y] === "P") $.g.p.a(new Pill(cx, cy));
        if (_.m.m[x][y] === "W") $.g.z.a(new Water(cx, cy));
      }
    }

    _.h = new HUD(_.p, _);
    // Load level dialogs
    _.lv.l[$.lvl].s.forEach(function(s) {
      _.p.say(s.t, s.d, s.w);
    });
    // Load level sensors
    _.lv.l[$.lvl].e.forEach(function(e) {
      $.g.e.a(new MessageSensor(e.x * 32, e.y * 32, e.w * 32, e.h * 32, e.t, e.d))
    });

    $.c.st(_.p);
  };

  _.loop = function() {
    $.e = (_.t.s !== 0) ? new Date() - _.t.s : 0;
    _.t.l -= $.e;

    // This is to avoid wormholes:
    // https://hacks.mozilla.org/2011/08/animating-with-javascript-from-setinterval-to-requestanimationframe/
    if ($.e < 160) {
      // Change bg color if under rainbow effects
      ($.rbe) ? $.x.clr($.RB.bg): $.x.clr(_.lv.bgc);

      _.p.u(); // Update player
      $.g.t.u(); // Update traps
      $.g.z.u(); // Update triggers
      $.g.p.u(); // Update pills
      $.g.e.u(); // Update sensors
      $.g.x.u(); // Update explosions
      _.h.u(); // Update HUD

      // Update camera. Always at the end of all updates
      $.c.u();

      // Render objects with camera. Order defines who paints first
      $.g.b.r(); // Render blocks
      $.g.p.r(); // Render pills
      $.g.t.r(); // Render traps
      $.g.z.r(); // Render triggers
      $.c.r(_.p); // Render player
      $.g.r.r(); // Render rainbows
      $.g.e.r(); // Render sensors
      $.g.x.r(); // Render explosions

      // Check time to show warnings
      _.cw();
      // Play bg fx
      _.bgfx();

      // If player still alive
      if (_.p.a > 0) {
        // If time is out, keep the player alive (in other words, lose)
        if (_.t.l < 20) {
          _.dd = 300;
          _.p.k();
        }
        // Render HUD
        _.h.r();
      } else {
        // Decrement the death delay or show the finish screen
        if (_.dd > 0) {
          _.dd -= $.e;
        } else {
          if (_.p.a === 0 && $.lvl >= 7) _.end();
          if (_.p.a === 0 && $.lvl < 7) _.next();
          if (_.p.a !== 0) _.game_over()
        }
      }
      $.i.u();
    }

    _.t.s = new Date();
    if ($.ingame) {
      raf(_.loop.bind(_));
    } else {
      return;
    }
  };

  _.start = function() {
    _.init();
    _.loop();
  };

  // Game Over
  _.game_over = function() {
    if (!_.ssp) {
      _.ssp = 1
      $.s.p('k');
    }
    var c = 'hotpink';
    $.x.s();
    _.mo();
    $.x.ct("You're Still Alive", 60, 130, c, 0, "small-caps");
    $.x.ct("And here that is a tragedy!", 35, 200, c, 0, "italic");
    $.x.ct('Press Enter to try again', 20, 440, c);
    $.x.r();

    if ($.i.p(13)) {
      $.s.p('s');
      return _.init();
    }
  };

  // Next level
  _.next = function() {
    if (!_.ssp) {
      _.ssp = 1
      $.s.p('ad');
    }
    var c = '#fff', a, x;
    $.x.s();
    _.mo();
    $.x.ct('Rest In Peace', 70, 130, c, 0, "small-caps");
    $.x.ct(_.vmsg.split('–')[0], 25, 200, "firebrick", 0, 'italic');
    a = _.vmsg.split('–')[1];
    if (a) {
      x = 500 - $.x.mt(_.vmsg.split('–')[1]).width;
      $.x.ft(a, x, 250);
    }
    $.x.ct('Press Enter to play next level', 20, 440, c);
    $.x.r();

    if ($.i.p(13)) {
      $.s.p('s');
      $.lvl += 1;
      return _.init();
    }
  };

  _.end = function() {
    if (!_.ssp) {
      _.ssp = 1
      $.s.p('ad');
    }
    var c = '#fff';
    $.x.s();
    _.mo();
    $.x.ct("The End", 90, 130, "firebrick", 0, "small-caps");
    $.x.ct("Thanks for playing!", 30, 200, c);
    $.x.ct('Press Enter to exit', 20, 440, c);
    $.x.ct("Created by @satanas82 for the js13k compo 2015", 18, 470, "gray");
    $.x.r();

    if ($.i.p(13)) {
      $.lvl = 1;
      $.ingame = 0;
      $.i.c();
      $.s.p('s');
      $.menu.loop();
    }
  };

  // Modal
  _.mo = function() {
    $.x.fs("rgba(0,0,0,0.75)");
    $.x.fr(0, 0, $.vw, $.vh);
  };

  // Check time to show warnings
  _.cw = function() {
    if (_.t.l <= 30000 && _.wn === 0) {
      _.p.say(["Come on!", "You only have to die"], 3200);
      _.wn = 1;
    } else if (_.t.l <= 20000 && _.wn === 1) {
      _.p.say(["I'm not joking"], 3000);
      _.wn = 2;
      $.s.p('toa');
    } else if (_.t.l <= 15000 && _.wn === 2) {
      _.p.say(["Time is running out!"], 3500);
      _.wn = 3;
    } else if (_.t.l <= 10000 && _.wn === 3) {
      _.p.say(["Tic, tac, tic, tac", "Die, die, die"], 3500);
      _.wn = 4;
    } else if (_.t.l <= 6000 && _.wn === 4) {
      _.p.say(["Seriously... DIE!!!"], 4000);
      _.wn = 5;
    }

    // Tick sound
    if (_.t.l <= 15000 && _.t.l > 0 && _.p.a) {
      _.t.w += $.e;
      if (_.t.w >= 500) {
        _.t.w = 0;
        $.s.p('tot');
      }
    }
  };

  // Play BGM (actually BG FX)
  _.bgfx = function() {
    if (_.p.a) {
      _.t.bf += $.e;
      if ($.rbe) {
        if (_.t.bf >= 50) {
          _.t.bf = 0;
          $.s.p('rb');
        }
      } else {
        if (_.t.bf >= 2500) {
          _.t.bf = 0;
          $.s.p(rnde(['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7']));
        }
      }
    }
  };
};
