var data = {
  // Player
  p: [
    '<g><rect fill="#ff930f" height="32" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="26"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="2"/><rect fill="#000000" height="5" id="3" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="34" y="11"/><rect fill="#000000" height="5" id="4" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="22" y="11"/><rect fill="#ff930f" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="10" y="56"/><rect fill="#ff930f" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="23" y="56"/></g>',
    '<g><rect fill="#ff930f" height="32" id="1" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="24"/><rect fill="#ffd4aa" height="24" id="2" stroke="#000" stroke-opacity="null" stroke-width="0" width="40" x="0" y="0"/><rect fill="#000000" height="5" id="3" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="34" y="9"/><rect fill="#000000" height="5" id="4" stroke="#000" stroke-opacity="null" stroke-width="0" width="4" x="22" y="9"/><rect fill="#ff930f" height="8" id="5" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="5" y="56"/><rect fill="#ff930f" height="8" id="6" stroke="#000" stroke-opacity="null" stroke-width="0" width="8" x="25" y="56"/></g>'
  ],
  // Heart
  h: '<g><path fill="#e22222" d="m12,6 c4.5,-13 22.5,0 0,17 c-22.5,-17 -4.5,-30 0,-17l0,0z" id="svg1" stroke="#e22222"/></g>',
  pwi: '<g><path stroke-width="0" fill="#f00" d="m16,1c-8.3,0 -15,6.8 -15,15c0,8.3 6.8,15 15,15c8.3,0 15,-6.8 15,-15c0,-8.3 -6.7,-15 -15,-15zm1.3762,24l-2.8,0l0,-2.7l2.8,0l0,2.7zm0,-5.6l0,0.9l-2.8,0l0,-1c0,-3.3 3.7,-3.8 3.7,-6.2c0,-1 -1,-1.9 -2,-2c-1.3,0 -2.4,1 -2.4,1l-1.6,-2c0,0 1.6,-1.6 4.3,-1.6c2.6,0 5,1.6 5,4.3c0,3.8 -4,4.2 -4,6.7l0,0l0,0l0,0l-0.2,-0.1z" id="1"/></g>',
  // Walls color
  wc: '#776e7a',
  pw: [
    0,
    {
      t: 3000,
      b: 'blue',
      c: 'aqua',
      f: 'red',
      n: 'ADRENALINE BOOST'
    }, {
      t: 6000,
      b: '#bf00bf',
      c: '#7cfc00',
      f: 'red',
      n: 'SUPER DUPER LASER'
    }, {
      t: 6000,
      b: '#f00',
      c: '#ff0',
      f: 'red',
      n: 'HIPER MAGNETISM'
    }
  ]
};

// Calculare distance traveled
var cdt = function(dt) {
  dt = dt || $.dt;
  return floor(dt / 100);
};
