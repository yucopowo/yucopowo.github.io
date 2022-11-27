/* esm.sh - esbuild bundle(form-data@4.0.0) es2022 development */
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

// esm-build-6f1fd3e1bdfbee74f2ec7bd66828d60d6a2a4c15-49d19d3f/node_modules/form-data/lib/browser.js
var require_browser = __commonJS({
  'esm-build-6f1fd3e1bdfbee74f2ec7bd66828d60d6a2a4c15-49d19d3f/node_modules/form-data/lib/browser.js'(exports, module) {
    module.exports = typeof self == 'object' ? self.FormData : window.FormData;
  }
});

// esm-build-6f1fd3e1bdfbee74f2ec7bd66828d60d6a2a4c15-49d19d3f/mod.js
var __module = __toESM(require_browser());
var { LINE_BREAK, DEFAULT_CONTENT_TYPE } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { DEFAULT_CONTENT_TYPE, LINE_BREAK, mod_default as default };
