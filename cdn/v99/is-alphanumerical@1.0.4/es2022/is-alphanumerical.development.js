/* esm.sh - esbuild bundle(is-alphanumerical@1.0.4) es2022 development */
import __is_decimal$ from '/cdn/v99/is-decimal@1.0.4/es2022/is-decimal.development.js';
import __is_alphabetical$ from '/cdn/v99/is-alphabetical@1.0.4/es2022/is-alphabetical.development.js';
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

// esm-build-3cf47a9d45fec4f0987881e3a6d7f6cd8969091d-9df28fef/node_modules/is-alphanumerical/index.js
var require_is_alphanumerical = __commonJS({
  'esm-build-3cf47a9d45fec4f0987881e3a6d7f6cd8969091d-9df28fef/node_modules/is-alphanumerical/index.js'(
    exports,
    module
  ) {
    'use strict';

    var alphabetical = __is_alphabetical$;
    var decimal = __is_decimal$;
    module.exports = alphanumerical;
    function alphanumerical(character) {
      return alphabetical(character) || decimal(character);
    }
  }
});

// esm-build-3cf47a9d45fec4f0987881e3a6d7f6cd8969091d-9df28fef/mod.js
var __module = __toESM(require_is_alphanumerical());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
