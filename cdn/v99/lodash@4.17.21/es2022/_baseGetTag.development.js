/* esm.sh - esbuild bundle(lodash@4.17.21/_baseGetTag) es2022 development */
import __lodash__getRawTag$ from '/cdn/v99/lodash@4.17.21/es2022/_getRawTag.development.js';
import __lodash__Symbol$ from '/cdn/v99/lodash@4.17.21/es2022/_Symbol.development.js';
import __lodash__objectToString$ from '/cdn/v99/lodash@4.17.21/es2022/_objectToString.development.js';
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

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  'esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseGetTag.js'(exports, module) {
    var Symbol2 = __lodash__Symbol$;
    var getRawTag = __lodash__getRawTag$;
    var objectToString = __lodash__objectToString$;
    var nullTag = '[object Null]';
    var undefinedTag = '[object Undefined]';
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/mod.js
var __module = __toESM(require_baseGetTag());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
