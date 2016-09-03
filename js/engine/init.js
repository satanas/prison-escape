window.raf = window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(a){ window.setTimeout(a,1E3/60); };

window.caf = window.cancelAnimationFrame ||
  window.mozCancelAnimationFrame;

var $ = {},
    dbg = false,
    abs = Math.abs,
    cos = Math.cos,
    sin = Math.sin,
    ceil = Math.ceil,
    floor = Math.floor,
    max = Math.max,
    pow = Math.pow,
    sqrt = Math.sqrt,
    round = Math.round,
    rnd = Math.random,
    now = Date.now,
    PI = Math.PI,
    // Check if a number Is In Range
    iir = function(n, l, h) {
      if (n < l) return l;
      if (n > h) return h;
      return n;
    },
    // Generate random integer in a (min, max) range
    rndr = function(a, b) {
      return floor(rnd() * (b - a)) + a;
    },
    // Choose random element from array
    rnde = function(e) {
      return e[rndr(0, e.length)];
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

// Initialize all variables
// cid: canvas id
// w: width
// h: height
$.init = function(cid, w, h) {
  $._w = w;
  $._h = h;
  // $.g = Collision groups
  $.g = {};
  // $.e = Elapsed time since previous frame
  $.e = 0;
  // Get canvas
  var c = $.byId(cid);
  // $.x = Canvas context
  $.x = c.getContext('2d');
  // $.vh = Viewport height
  $.vh = c.height = window.innerHeight;
  // $.vw = Viewport width
  $.vw = c.width = $.vh * w / h;
  // Camera system
  $.c = new Camera($.vw, $.vh);
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
