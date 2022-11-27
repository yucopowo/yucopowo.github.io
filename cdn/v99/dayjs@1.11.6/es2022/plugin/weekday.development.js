/* esm.sh - esbuild bundle(dayjs@1.11.6/plugin/weekday) es2022 development */
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

// esm-build-98b4679f8ee6d37c1f414cca41d608c5ee3e28fb-bd4cfa88/node_modules/dayjs/plugin/weekday.js
var require_weekday = __commonJS({
  'esm-build-98b4679f8ee6d37c1f414cca41d608c5ee3e28fb-bd4cfa88/node_modules/dayjs/plugin/weekday.js'(exports, module) {
    !(function(e, t) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekday = t());
    })(exports, function() {
      'use strict';

      return function(e, t) {
        t.prototype.weekday = function(e2) {
          var t2 = this.$locale().weekStart || 0,
            i = this.$W,
            n = (i < t2 ? i + 7 : i) - t2;
          return this.$utils().u(e2) ? n : this.subtract(n, 'day').add(e2, 'day');
        };
      };
    });
  }
});

// esm-build-98b4679f8ee6d37c1f414cca41d608c5ee3e28fb-bd4cfa88/mod.js
var __module = __toESM(require_weekday());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
