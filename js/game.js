/* Start game on load */
window.addEventListener('load', function() {
  $.init();
  // Input
  $.i = new Input();
  // Collisions system
  $.o = new Collisions();
  // Sound manager
  $.s = new Sound();
  // Bind keyboard
  $.i.b([13, 38, 40, 32, 27]);

  // Sounds
  $.s.a('c', [0,,0.0112,0.02,0.33,0.696,,,,,,0.48,0.6797,,,,,,1,,,,,0.5], 4);

  $.scn.menu = new MenuScene();
  $.scn.menu.loop();
});
