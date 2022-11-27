/* esm.sh - esbuild bundle(gl-matrix@3.4.3/esm/common.js) es2022 development */
// esm-build-1b206830d4ca16836d2274dd81c12df9ce7b5f1b-31af1cd4/node_modules/gl-matrix/esm/common.js
var EPSILON = 1e-6;
var ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = Math.random;
function setMatrixArrayType(type) {
  ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
function toRadian(a) {
  return a * degree;
}
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
}
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0,
      i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };
export { ARRAY_TYPE, EPSILON, RANDOM, equals, setMatrixArrayType, toRadian };
