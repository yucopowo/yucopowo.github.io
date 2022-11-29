/* esm.sh - esbuild bundle(lodash@4.17.21/_isIterateeCall) es2022 development */
import __lodash__isIndex$ from '/cdn/v99/lodash@4.17.21/es2022/_isIndex.development.js';
import __lodash_isArrayLike$ from '/cdn/v99/lodash@4.17.21/es2022/isArrayLike.development.js';
import __lodash_eq$ from '/cdn/v99/lodash@4.17.21/es2022/eq.development.js';
import __lodash_isObject$ from '/cdn/v99/lodash@4.17.21/es2022/isObject.development.js';
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

// esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  'esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/node_modules/lodash/_isIterateeCall.js'(
    exports,
    module
  ) {
    var eq = __lodash_eq$;
    var isArrayLike = __lodash_isArrayLike$;
    var isIndex = __lodash__isIndex$;
    var isObject = __lodash_isObject$;
    function isIterateeCall(value, index, object) {
      if (!isObject(object)) {
        return false;
      }
      var type = typeof index;
      if (
        type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object
      ) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// esm-build-318b3857f13adab986a0de7ea392951710cb51f5-5bf41928/mod.js
var __module = __toESM(require_isIterateeCall());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
