var MenuScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.d = 100; // Delay before enabling the keyboard
  _.c = 0; // Counter

  _.update = function() {
    var _ = this;
    if (_.c < _.d) _.c += $.e;
    $.x.clr('ivory');

    $.x.s();
    $.x.ct('Prison Escape', 75, 200, 0, 0, "small-caps bold");
    $.x.ct('Press Enter to play', 20, 420, "firebrick");
    $.x.ct("Created by @satanas82 for the js13k compo 2016", 14, 470, "gray");
    $.x.r();

    if ($.i.p(13) && _.c >= _.d) {
      _.exit();
      $.scn.game.start();
    }
  };
};
