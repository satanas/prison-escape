var $ = {}, dbg = false;

// Get canvas
$.cv = document.querySelector("canvas");

// Initialize all variables
// cid: canvas id
// w: width
// h: height
$.init = function(w, h) {
  // $.vh = Viewport height
  $.vh = $.cv.height;
  // $.vw = Viewport width
  $.vw = $.cv.width;
  // $.g = Collision groups
  $.g = {};
  // $.e = Elapsed time since previous frame
  $.e = 0;
  // $.x = Canvas context
  $.x = $.cv.getContext('2d');
  // Camera system
  $.cam = new Camera($.vw, $.vh);
  // Game Scenes
  $.scn = {};
  $.svg = new SVG();
  // Rename common used methods
  // FIXME: use a local var until the end (to avoid repeating $.x)
  $.x.s = $.x.save;
  $.x.r = $.x.restore;
  $.x.f = $.x.fill;
  $.x.k = $.x.stroke;
  $.x.tn = $.x.translate;
  $.x.ro = $.x.rotate;
  $.x.ft = $.x.fillText;
  $.x.sr = $.x.strokeRect;
  $.x.cr = $.x.clearRect;
  $.x.mt = $.x.measureText;
  $.x.di = $.x.drawImage;
  $.x.sc = $.x.scale;
  $.x.bp = $.x.beginPath;
  $.x.mv = $.x.moveTo;
  $.x.lt = $.x.lineTo;
  $.x.e = $.x.ellipse;
  // fillRect
  $.x.fr = function(x, y, w, h) {
    // To avoid anti-aliasing
    $.x.fillRect(floor(x), floor(y), w, h);
  }
  // Set fillStyle
  $.x.fs = function(c) {
    $.x.fillStyle = c;
  };
  // Set strokeStyle
  $.x.ss = function(c) {
    $.x.strokeStyle = c;
  };
  // Clear screen
  $.x.clr = function(c) {
    $.x.cr(0, 0, $.vw, $.vh);
    $.x.fs(c || "black");
    $.x.fr(0, 0, $.vw, $.vh);
  };
  // Global alpha
  $.x.ga = function(a) {
    $.x.globalAlpha = a;
  };
  // Render centered text
  // t: text
  // s: size
  // y: y coordinate
  // c: font color
  // f: family
  // v: variant
  $.x.ct = function(t, s, y, c, f, v) {
    f = f || "serif";
    v = v || '';
    $.x.fs(c || "#000");
    $.x.font = v + " " + String(s) + "px " + f;
    var x = $.x.mt(t);
    $.x.ft(t, ($.vw - x.width) / 2, y);
  };
};

// Gets a DOM element by id
$.byId = function(i) {
  return document.getElementById(i);
};

// Shows a DOM object putting its opacity in one
$.show = function(i) {
  $.byId(i).style.opacity = 1;
};

// Hides a DOM object putting its opacity in zero
$.hide = function(i) {
  $.byId(i).style.opacity = 0;
};

function resize() {
  var h = window.innerHeight;
  var w = h * $.cv.width / $.cv.height;

  $.cv.style.width = w+'px';
  $.cv.style.height = h+'px';
}

window.addEventListener('load', resize, false);
window.addEventListener('resize', resize, false);
