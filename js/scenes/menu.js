var MenuScene = function() {
  var _ = this;
  _.inherits(Scene);
  Scene.call(_);
  _.kd = 100; // Delay before enabling the keyboard
  _.ld = 1500; // Lock delay
  _.cd = 2500;
  _.c = 0; // Counter
  _.rdy = 0; // Ready to change scene
  _.lck = 0; // Locked?
  _.crd = 0; // Credits
  _.an = new Animator([0, 1], 350);

  _.update = function() {
    var _ = this;
    _.c += $.e;
    _.an.u();

    if (_.c > _.kd && !_.rdy) _.rdy = 1;
    if (_.c > _.cd && !_.crd) _.crd = 1;
    if (_.c > _.ld && !_.lck) {
      $.s.p('do');
      _.lck = 1;
    }

    $.x.clr('#fff');
    $.x.s();
    $.x.ct('PRISON', 75, 200, 'black', 'courier');
    $.x.ct('ESCAPE', 75, 275, '#ff7f00', 'courier');
    if (_.lck) {
      $.x.fs('black');
      $.x.fr(140, 80, 15, 270);
      $.x.fr(490, 80, 15, 270);
      //$.x.fr(309, 80, 12, 50);
      //$.x.fr(309, 300, 12, 50);
      $.x.fr(257, 80, 12, 50);
      $.x.fr(257, 300, 12, 50);
      $.x.fr(374, 80, 12, 50);
      $.x.fr(374, 300, 12, 50);
      if (_.an.g()) {
        $.x.ct('Press Enter to play', 18, 430, 'firebrick', 'courier');
      }
    }

    if (_.crd ) {
      $.x.ct("Created by @satanas82 for the js13k compo 2016", 13, 370, '#ccc', 'serif');
    }

    $.x.r();

    if ($.i.p(13) && _.rdy) {
      _.exit();
      $.scn.intro = new IntroScene();
      $.scn.intro.start();
    }
  };
};
