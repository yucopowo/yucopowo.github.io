/* esm.sh - esbuild bundle(markdown-escapes@1.0.4) es2022 development */
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

// esm-build-1930f2679cd63d378fa18764ee37fdf8c0fced6a-ccf1f913/node_modules/markdown-escapes/index.js
var require_markdown_escapes = __commonJS({
  'esm-build-1930f2679cd63d378fa18764ee37fdf8c0fced6a-ccf1f913/node_modules/markdown-escapes/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = escapes;
    var defaults = ['\\', '`', '*', '{', '}', '[', ']', '(', ')', '#', '+', '-', '.', '!', '_', '>'];
    var gfm = defaults.concat(['~', '|']);
    var commonmark = gfm.concat(['\n', '"', '$', '%', '&', "'", ',', '/', ':', ';', '<', '=', '?', '@', '^']);
    escapes.default = defaults;
    escapes.gfm = gfm;
    escapes.commonmark = commonmark;
    function escapes(options) {
      var settings = options || {};
      if (settings.commonmark) {
        return commonmark;
      }
      return settings.gfm ? gfm : defaults;
    }
  }
});

// esm-build-1930f2679cd63d378fa18764ee37fdf8c0fced6a-ccf1f913/mod.js
var __module = __toESM(require_markdown_escapes());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
