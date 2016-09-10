var MenuScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.d = 100; // Delay before enabling the keyboard
  _.sd = rndr(1000, 2000); // Screen Delay before showing the BSOD
  _.c = 0; // Counter
  _.rdy = 0; // Ready to change scene

  _.bs = new BSOD(100);

  //$.s.p('m1');
  //$.s.p('m2');
  $.s.p('m4');
  _.update = function() {
    var _ = this;
    _.c += $.e;
    if (_.c > _.d && !_.rdy) _.rdy = 1;
    //if (_.c > _.sd) {
    //  _.bs.s();
    //  _.sd = rndr(5000, 7000);
    //  _.c = 0;
    //}

    //$.x.clr('#c9e4ff');
    $.x.clr('#fff');

    $.x.s();
    $.x.ft('PRISON', 75, 100, 200, 'black', 'courier');
    $.x.ft('ESCAPE', 75, 260, 275, '#ff7f00', 'courier');
    $.x.fs('black');
    $.x.fr(110, 225, 12, 56);
    $.x.fr(140, 225, 8, 56);
    $.x.fr(170, 225, 8, 56);
    $.x.fr(200, 225, 8, 56);
    $.x.fr(230, 225, 12, 56);
    $.x.ct('Press Enter to play', 18, 420, 'firebrick', 'courier');
    $.x.ct("Created by @satanas82 for the js13k compo 2016", 13, 470, 'gray', 'serif');

    $.x.r();

    _.bs.u();
    _.bs.r();

    if ($.i.p(13) && _.rdy) {
      _.exit();
      //$.scn.intro = new IntroScene();
      //$.scn.intro.start();

      $.scn.game = new GameScene();
      $.scn.game.start();
    }
  };
};
