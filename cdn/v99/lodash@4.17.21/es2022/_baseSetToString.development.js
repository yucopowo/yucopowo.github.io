/* esm.sh - esbuild bundle(lodash@4.17.21/_baseSetToString) es2022 development */
import __lodash_identity$ from '/cdn/v99/lodash@4.17.21/es2022/identity.development.js';
import __lodash__defineProperty$ from '/cdn/v99/lodash@4.17.21/es2022/_defineProperty.development.js';
import __lodash_constant$ from '/cdn/v99/lodash@4.17.21/es2022/constant.development.js';
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

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  'esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseSetToString.js'(
    exports,
    module
  ) {
    var constant = __lodash_constant$;
    var defineProperty = __lodash__defineProperty$;
    var identity = __lodash_identity$;
    var baseSetToString = !defineProperty
      ? identity
      : function(func, string) {
          return defineProperty(func, 'toString', {
            configurable: true,
            enumerable: false,
            value: constant(string),
            writable: true
          });
        };
    module.exports = baseSetToString;
  }
});

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/mod.js
var __module = __toESM(require_baseSetToString());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
