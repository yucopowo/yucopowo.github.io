/* esm.sh - esbuild bundle(supports-color@5.5.0) es2022 development */
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

// esm-build-36cc74ec51dde21af6975fb871c221d77aa0beb5-f21ccd00/node_modules/supports-color/browser.js
var require_browser = __commonJS({
  'esm-build-36cc74ec51dde21af6975fb871c221d77aa0beb5-f21ccd00/node_modules/supports-color/browser.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = {
      stdout: false,
      stderr: false
    };
  }
});

// esm-build-36cc74ec51dde21af6975fb871c221d77aa0beb5-f21ccd00/mod.js
var __module = __toESM(require_browser());
var { stdout, stderr } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, stderr, stdout };
