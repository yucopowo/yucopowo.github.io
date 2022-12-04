/* esm.sh - esbuild bundle(@babel/register@7.18.9) es2022 development */
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

// esm-build-8be0749e13e8d12708b04bd10637c51047076ae7-5578445e/node_modules/@babel/register/lib/browser.js
var require_browser = __commonJS({
  'esm-build-8be0749e13e8d12708b04bd10637c51047076ae7-5578445e/node_modules/@babel/register/lib/browser.js'(
    exports,
    module
  ) {
    function register() {}
    module.exports = Object.assign(register, {
      default: register,
      register,
      revert: function revert() {},
      __esModule: true
    });
  }
});

// esm-build-8be0749e13e8d12708b04bd10637c51047076ae7-5578445e/mod.js
var __module = __toESM(require_browser());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
