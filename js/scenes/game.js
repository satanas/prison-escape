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
    $.cam.sw(_.m.w * 32, _.m.h * 32);
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

    $.cam.st(_.p);
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
      $.cam.u();

      // Render objects with camera. Order defines who paints first
      $.g.b.r(); // Render blocks
      $.g.p.r(); // Render pills
      $.g.t.r(); // Render traps
      $.g.z.r(); // Render triggers
      $.cam.r(_.p); // Render player
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
