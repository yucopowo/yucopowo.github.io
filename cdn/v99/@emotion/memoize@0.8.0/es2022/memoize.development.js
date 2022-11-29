/* esm.sh - esbuild bundle(@emotion/memoize@0.8.0) es2022 development */
// esm-build-4918bfb6e2b11d3cda86887b916a58891c200a8c-4c022c3e/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_esm_default = memoize;
export { emotion_memoize_esm_default as default };