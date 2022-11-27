/* esm.sh - esbuild bundle(strict-uri-encode@2.0.0) es2022 development */
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

// esm-build-627c8cd717a70441a703c2d868329d8eb793e7a5-c7e43208/node_modules/strict-uri-encode/index.js
var require_strict_uri_encode = __commonJS({
  'esm-build-627c8cd717a70441a703c2d868329d8eb793e7a5-c7e43208/node_modules/strict-uri-encode/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = str =>
      encodeURIComponent(str).replace(
        /[!'()*]/g,
        x =>
          `%${x
            .charCodeAt(0)
            .toString(16)
            .toUpperCase()}`
      );
  }
});

// esm-build-627c8cd717a70441a703c2d868329d8eb793e7a5-c7e43208/mod.js
var __module = __toESM(require_strict_uri_encode());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
