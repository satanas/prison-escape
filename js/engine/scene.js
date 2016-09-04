var Scene = function() {
  var _ = this;
  // Exit the loop
  _.ex = 0;
  // Time-related variables and methods
  _.t = {
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
  if (!_.ex) {
    raf(_.loop.bind(_));
  } else {
    return;
  }
};

Scene.prototype.exit = function() {
  this.ex = 1;
}
