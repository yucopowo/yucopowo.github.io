/* esm.sh - esbuild bundle(lodash@4.17.21/_baseIsNative) es2022 development */
import __lodash__toSource$ from '/cdn/v99/lodash@4.17.21/es2022/_toSource.development.js';
import __lodash_isObject$ from '/cdn/v99/lodash@4.17.21/es2022/isObject.development.js';
import __lodash__isMasked$ from '/cdn/v99/lodash@4.17.21/es2022/_isMasked.development.js';
import __lodash_isFunction$ from '/cdn/v99/lodash@4.17.21/es2022/isFunction.development.js';
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

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  'esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/node_modules/lodash/_baseIsNative.js'(exports, module) {
    var isFunction = __lodash_isFunction$;
    var isMasked = __lodash__isMasked$;
    var isObject = __lodash_isObject$;
    var toSource = __lodash__toSource$;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      '^' +
        funcToString
          .call(hasOwnProperty)
          .replace(reRegExpChar, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$'
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// esm-build-544038da1014d35f2034baa1458d39a3149ecd05-5a2086bd/mod.js
var __module = __toESM(require_baseIsNative());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
