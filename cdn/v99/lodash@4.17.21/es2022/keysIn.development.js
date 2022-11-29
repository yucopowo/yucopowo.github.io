/* esm.sh - esbuild bundle(lodash@4.17.21/keysIn) es2022 development */
import __lodash_isArrayLike$ from '/cdn/v99/lodash@4.17.21/es2022/isArrayLike.development.js';
import __lodash__baseKeysIn$ from '/cdn/v99/lodash@4.17.21/es2022/_baseKeysIn.development.js';
import __lodash__arrayLikeKeys$ from '/cdn/v99/lodash@4.17.21/es2022/_arrayLikeKeys.development.js';
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

// esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  'esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/node_modules/lodash/keysIn.js'(exports, module) {
    var arrayLikeKeys = __lodash__arrayLikeKeys$;
    var baseKeysIn = __lodash__baseKeysIn$;
    var isArrayLike = __lodash_isArrayLike$;
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/mod.js
var __module = __toESM(require_keysIn());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
