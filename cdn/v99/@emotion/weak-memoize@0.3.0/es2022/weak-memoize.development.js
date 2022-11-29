/* esm.sh - esbuild bundle(@emotion/weak-memoize@0.3.0) es2022 development */
// esm-build-f988888fd4a602e68440a3be7860c84cb3ee246b-a2b22f3b/node_modules/@emotion/weak-memoize/dist/emotion-weak-memoize.esm.js
var weakMemoize = function weakMemoize2(func) {
  var cache = /* @__PURE__ */ new WeakMap();
  return function(arg) {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};
var emotion_weak_memoize_esm_default = weakMemoize;
export { emotion_weak_memoize_esm_default as default };
