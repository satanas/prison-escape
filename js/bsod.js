var BSOD = function(t) {
  var _ = this;
  _.inherits(Sprite);
  _.dt = t || 500;
  Sprite.call(_, 0, 0, $.vw, $.vh);

  // Start
  _.s = function() {
    _.ct = _.dt;
    _.sw = 1;
    $.s.p('bs');
  };

  _.u = function() {
    _.ct -= $.e;
    if (_.ct < 0) _.sw = 0;
  };

  _.r = function() {
    if (!_.sw) return;

    $.x.s();
    $.x.fs("blue");
    $.x.fr(_.x, _.y, _.w, _.h);
    $.x.fs("#d3d3d3");
    $.x.fr(250, 142, 140, 25)
    $.x.ct('Exception', 20, 160, "blue", "courier");
    $.x.ct('An exception 06 has occured at 0028:C13B3ADCF82 in', 18, 220, "#d3d3d3", "courier");
    $.x.ct('VxD while locking 0028:C000459488. This was called', 18, 245, "#d3d3d3", "courier");
    $.x.ct('by VMM(01) 00005913. Security system applications', 18, 270, "#d3d3d3", "courier");
    $.x.ct('will be terminated immediately.', 18, 295, "#d3d3d3", "courier");
    $.x.ct('*** STOP: 0x0000008E (0xC0000005 0x00690076)', 18, 420, "#d3d3d3", "courier");
    $.x.r();
  };
};
