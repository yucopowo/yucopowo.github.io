/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001434/dist/unpacker/browsers) es2022 development */
import __caniuse_lite_data_browsers$ from '/cdn/v99/caniuse-lite@1.0.30001434/es2022/data/browsers.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/dist/unpacker/browsers.js
var require_browsers = __commonJS({
  'esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/node_modules/caniuse-lite/dist/unpacker/browsers.js'(
    exports,
    module
  ) {
    module.exports.browsers = __caniuse_lite_data_browsers$;
  }
});

// esm-build-14f343cfb187a61daecd185a09b87ea6f5804535-bec5d544/mod.js
var __module = __toESM(require_browsers());
var { browsers } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { browsers, mod_default as default };
