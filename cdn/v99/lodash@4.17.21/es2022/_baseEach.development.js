/* esm.sh - esbuild bundle(lodash@4.17.21/_baseEach) es2022 development */
import __lodash__createBaseEach$ from '/cdn/v99/lodash@4.17.21/es2022/_createBaseEach.development.js';
import __lodash__baseForOwn$ from '/cdn/v99/lodash@4.17.21/es2022/_baseForOwn.development.js';
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

// esm-build-0e7c069a2598a1228a2c32bdd0465bdcd453abfb-95cb559e/node_modules/lodash/_baseEach.js
var require_baseEach = __commonJS({
  'esm-build-0e7c069a2598a1228a2c32bdd0465bdcd453abfb-95cb559e/node_modules/lodash/_baseEach.js'(exports, module) {
    var baseForOwn = __lodash__baseForOwn$;
    var createBaseEach = __lodash__createBaseEach$;
    var baseEach = createBaseEach(baseForOwn);
    module.exports = baseEach;
  }
});

// esm-build-0e7c069a2598a1228a2c32bdd0465bdcd453abfb-95cb559e/mod.js
var __module = __toESM(require_baseEach());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };