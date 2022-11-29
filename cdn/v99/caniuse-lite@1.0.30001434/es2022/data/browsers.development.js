/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001434/data/browsers) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod ||
        (0, cb[__getOwnPropNames(cb)[0]])(
          (mod = {
            exports: {}
          }).exports,
          mod
        ),
      mod.exports
    );
  };
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', {
          value: mod,
          enumerable: true
        })
      : target,
    mod
  )
);

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/data/browsers.js
var require_browsers = __commonJS({
  'esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/data/browsers.js'(
    exports,
    module
  ) {
    module.exports = {
      A: 'ie',
      B: 'edge',
      C: 'firefox',
      D: 'chrome',
      E: 'safari',
      F: 'opera',
      G: 'ios_saf',
      H: 'op_mini',
      I: 'android',
      J: 'bb',
      K: 'op_mob',
      L: 'and_chr',
      M: 'and_ff',
      N: 'ie_mob',
      O: 'and_uc',
      P: 'samsung',
      Q: 'and_qq',
      R: 'baidu',
      S: 'kaios'
    };
  }
});

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/mod.js
var __module = __toESM(require_browsers());
var { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, mod_default as default };
