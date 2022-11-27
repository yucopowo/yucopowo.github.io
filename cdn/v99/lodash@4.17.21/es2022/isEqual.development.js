/* esm.sh - esbuild bundle(lodash@4.17.21/isEqual) es2022 development */
import __lodash__baseIsEqual$ from '/cdn/v99/lodash@4.17.21/es2022/_baseIsEqual.development.js';
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

// esm-build-b7a7ab5035ede93ac4c72bd4bf2f92e839d55fc8-76717e2f/node_modules/lodash/isEqual.js
var require_isEqual = __commonJS({
  'esm-build-b7a7ab5035ede93ac4c72bd4bf2f92e839d55fc8-76717e2f/node_modules/lodash/isEqual.js'(exports, module) {
    var baseIsEqual = __lodash__baseIsEqual$;
    function isEqual(value, other) {
      return baseIsEqual(value, other);
    }
    module.exports = isEqual;
  }
});

// esm-build-b7a7ab5035ede93ac4c72bd4bf2f92e839d55fc8-76717e2f/mod.js
var __module = __toESM(require_isEqual());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };