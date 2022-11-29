/* esm.sh - esbuild bundle(is-hexadecimal@1.0.4) es2022 development */
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

// esm-build-bcb7c9c69e64b591c4cd37dddfb348fb1c694106-8136ce7a/node_modules/is-hexadecimal/index.js
var require_is_hexadecimal = __commonJS({
  'esm-build-bcb7c9c69e64b591c4cd37dddfb348fb1c694106-8136ce7a/node_modules/is-hexadecimal/index.js'(exports, module) {
    'use strict';

    module.exports = hexadecimal;
    function hexadecimal(character) {
      var code = typeof character === 'string' ? character.charCodeAt(0) : character;
      return (code >= 97 && code <= 102) || (code >= 65 && code <= 70) || (code >= 48 && code <= 57);
    }
  }
});

// esm-build-bcb7c9c69e64b591c4cd37dddfb348fb1c694106-8136ce7a/mod.js
var __module = __toESM(require_is_hexadecimal());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
