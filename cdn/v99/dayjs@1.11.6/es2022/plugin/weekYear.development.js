/* esm.sh - esbuild bundle(dayjs@1.11.6/plugin/weekYear) es2022 development */
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

// esm-build-9a1757f47fef8c2e3230052991a7ea1b5f71a076-a007411c/node_modules/dayjs/plugin/weekYear.js
var require_weekYear = __commonJS({
  'esm-build-9a1757f47fef8c2e3230052991a7ea1b5f71a076-a007411c/node_modules/dayjs/plugin/weekYear.js'(exports, module) {
    !(function(e, t) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekYear = t());
    })(exports, function() {
      'use strict';

      return function(e, t) {
        t.prototype.weekYear = function() {
          var e2 = this.month(),
            t2 = this.week(),
            n = this.year();
          return 1 === t2 && 11 === e2 ? n + 1 : 0 === e2 && t2 >= 52 ? n - 1 : n;
        };
      };
    });
  }
});

// esm-build-9a1757f47fef8c2e3230052991a7ea1b5f71a076-a007411c/mod.js
var __module = __toESM(require_weekYear());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
