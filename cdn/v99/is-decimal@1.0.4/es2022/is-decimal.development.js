/* esm.sh - esbuild bundle(is-decimal@1.0.4) es2022 development */
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

// esm-build-f2f545b04d74150786db7038d9562daba7045c14-eff2818c/node_modules/is-decimal/index.js
var require_is_decimal = __commonJS({
  'esm-build-f2f545b04d74150786db7038d9562daba7045c14-eff2818c/node_modules/is-decimal/index.js'(exports, module) {
    'use strict';

    module.exports = decimal;
    function decimal(character) {
      var code = typeof character === 'string' ? character.charCodeAt(0) : character;
      return code >= 48 && code <= 57;
    }
  }
});

// esm-build-f2f545b04d74150786db7038d9562daba7045c14-eff2818c/mod.js
var __module = __toESM(require_is_decimal());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
