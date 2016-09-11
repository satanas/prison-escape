var GameOverScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.d = 100; // Delay before enabling the keyboard
  _.c = 0; // Counter
  _.p = new GameOverPlayer();
  _.dd = new Door();
  _.an = new Animator([0, 1], 350);
  _.fc = '#fff'; // Font color
  _.ft = 'courier'; // Font family
  _.fv = 'small-caps'; // Font variant

  _.update = function() {
    var _ = this;
    if (_.c < _.d) _.c += $.e;

    _.an.u();
    _.p.u();
    _.dd.u();

    $.x.clr('silver');
    $.x.s();
    $.x.fs('#999');
    $.x.fr(0, 240, $.vw, 3);
    $.x.r();

    _.p.r();
    _.dd.r();

    $.x.s();
    $.x.fs(data.wc);
    $.x.fr(0, 0, 160, $.vh);
    $.x.fr(480, 0, 160, $.vh);
    $.x.r();

    if (_.dd.cl) {
      $.x.ct('You ran ' + cdt().toString() + ' mts', 50, 250, _.fc, _.ft, _.fv);
      $.x.ct('collected ' + $.cc + ' coins', 30, 300, _.fc, _.ft, _.fv);
      $.x.ct('and still behind bars', 30, 360, _.fc, _.ft, _.fv);
      if (_.an.g()) {
        $.x.ct('Press Enter to play again', 15, 440, 'yellow', 'courier');
      }
      $.x.ct('Esc to exit', 10, 460, '#999', 'courier');
    }

    if ($.i.p(13) && _.c >= _.d) {
      _.exit();
      $.scn.game = new GameScene();
      $.scn.game.start();
    } else if ($.i.p(27) && _.c >= _.d) {
      _.exit();
      $.scn.menu = new MenuScene();
      $.scn.menu.start();
    }
  };
};
