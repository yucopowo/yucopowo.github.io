/* esm.sh - esbuild bundle(collapse-white-space@1.0.6) es2022 development */
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

// esm-build-ffb674e42b7cae7733100b54a997696d3716df1b-4207d3c9/node_modules/collapse-white-space/index.js
var require_collapse_white_space = __commonJS({
  'esm-build-ffb674e42b7cae7733100b54a997696d3716df1b-4207d3c9/node_modules/collapse-white-space/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = collapse;
    function collapse(value) {
      return String(value).replace(/\s+/g, ' ');
    }
  }
});

// esm-build-ffb674e42b7cae7733100b54a997696d3716df1b-4207d3c9/mod.js
var __module = __toESM(require_collapse_white_space());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
