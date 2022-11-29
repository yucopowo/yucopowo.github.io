/* esm.sh - esbuild bundle(@emotion/weak-memoize@0.2.5) es2022 development */
// esm-build-fb3b025a144a13611c037e06fbda13b899e87b3b-0675c1df/node_modules/@emotion/weak-memoize/dist/weak-memoize.esm.js
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
var weak_memoize_esm_default = weakMemoize;
export { weak_memoize_esm_default as default };
