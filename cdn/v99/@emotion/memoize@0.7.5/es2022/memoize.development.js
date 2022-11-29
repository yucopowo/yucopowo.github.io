/* esm.sh - esbuild bundle(@emotion/memoize@0.7.5) es2022 development */
// esm-build-3752d38c668404d32721dcb3fda328919fa09ed9-40829c81/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js
function memoize(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0) cache[arg] = fn(arg);
    return cache[arg];
  };
}
var emotion_memoize_esm_default = memoize;
export { emotion_memoize_esm_default as default };
