/* esm.sh - esbuild bundle(@emotion/memoize@0.7.4) es2022 development */
// esm-build-77875853dd131dca73e6aaeda1d3ba55bafa1bf0-64ecee19/node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_esm_default = memoize;
export { memoize_esm_default as default };
