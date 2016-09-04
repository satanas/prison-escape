var MenuScene = function() {
  var _ = this;
  _.d = 100; // Delay before enabling the keyboard
  _.c = 0; // Counter
  Scene.call(_);
};
MenuScene.prototype = Object.create(Scene.prototype);
MenuScene.prototype.constructor = MenuScene;

MenuScene.prototype.update = function() {
  var _ = this;
  if (_.c < _.d) _.c += _.t.e;
  $.x.clr('ivory');

  $.x.s();
  $.x.ct('Please, Die', 75, 200, 0, 0, "small-caps bold");
  $.x.ct('Press Enter to play', 20, 420, "firebrick");
  $.x.ct("Created by @satanas82 for the js13k compo 2016", 14, 470, "gray");
  $.x.r();

  if ($.i.p(13) && _.c >= _.d) {
    return $.scn.game.start();
  }
};
