var Scene = function() {
  // Time-related variables and methods
  this.t = {
    s: 0, // Start time
    e: 0 // Elapsed time
  };
};

Scene.prototype.loop = function() {
  var _ = this;
  // Calculate elapsed time
  _.t.e = (_.t.s !== 0) ? now() - _.t.s : 0;
  // Update scene
  _.update();
  // Set start time
  _.t.s = now();
  raf(_.loop.bind(_));
};

Scene.prototype.update = function() {
}
