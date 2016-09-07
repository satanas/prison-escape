var GameOverScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.d = 100; // Delay before enabling the keyboard
  _.c = 0; // Counter
  _.p = new GameOverPlayer();
  _.dd = new Door();

  _.update = function() {
    var _ = this;
    if (_.c < _.d) _.c += $.e;

    _.p.u();
    _.dd.u();

    $.x.clr('silver');

    _.p.r();
    _.dd.r();
    $.x.s();

    $.x.fs('gray');
    $.x.fr(0, 0, 160, $.vh);
    $.x.fr(480, 0, 160, $.vh);
    $.x.r();

    if (_.dd.cl) {
      $.x.ct('You ran 13000 mts', 65, 250, "white", 0, "small-caps bold");
      $.x.ct('and collected 300 coins', 45, 300, "white", 0, "small-caps bold");
      $.x.ct('But still behind bars', 32, 370, "white", 0, "small-caps bold");
      $.x.ct('Press Enter to play again', 20, 440, "white");
    }

    if ($.i.p(13) && _.c >= _.d) {
      _.exit();
      $.scn.game = new GameScene();
      $.scn.game.start();
    }
  };
};
