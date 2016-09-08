var MenuScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.d = 100; // Delay before enabling the keyboard
  _.sd = rndr(1000, 2000); // Screen Delay before showing the BSOD
  _.c = 0; // Counter
  _.rdy = 0; // Ready to change scene

  _.bs = new BSOD(100);

  _.update = function() {
    var _ = this;
    _.c += $.e;
    if (_.c > _.d && !_.rdy) _.rdy = 1;
    if (_.c > _.sd) {
      _.bs.s();
      _.sd = rndr(5000, 7000);
      _.c = 0;
    }

    $.x.clr('ivory');

    $.x.s();
    $.x.ct('Prison Escape', 75, 200, 0, 0, "small-caps bold");
    $.x.ct('Press Enter to play', 20, 420, "firebrick");
    $.x.ct("Created by @satanas82 for the js13k compo 2016", 14, 470, "gray");
    $.x.r();

    _.bs.u();
    _.bs.r();

    if ($.i.p(13) && _.rdy) {
      _.exit();
      $.scn.game.start();
    }
  };
};
