/* esm.sh - esbuild bundle(dayjs@1.11.6/plugin/weekOfYear) es2022 development */
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

// esm-build-7a851a8b8a8489f2bbc3f18baffeb65fd02e6811-51d9a5b9/node_modules/dayjs/plugin/weekOfYear.js
var require_weekOfYear = __commonJS({
  'esm-build-7a851a8b8a8489f2bbc3f18baffeb65fd02e6811-51d9a5b9/node_modules/dayjs/plugin/weekOfYear.js'(
    exports,
    module
  ) {
    !(function(e, t) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_plugin_weekOfYear = t());
    })(exports, function() {
      'use strict';

      var e = 'week',
        t = 'year';
      return function(i, n, r) {
        var f = n.prototype;
        (f.week = function(i2) {
          if ((void 0 === i2 && (i2 = null), null !== i2)) return this.add(7 * (i2 - this.week()), 'day');
          var n2 = this.$locale().yearStart || 1;
          if (11 === this.month() && this.date() > 25) {
            var f2 = r(this)
                .startOf(t)
                .add(1, t)
                .date(n2),
              s = r(this).endOf(e);
            if (f2.isBefore(s)) return 1;
          }
          var a = r(this)
              .startOf(t)
              .date(n2)
              .startOf(e)
              .subtract(1, 'millisecond'),
            o = this.diff(a, e, true);
          return o < 0
            ? r(this)
                .startOf('week')
                .week()
            : Math.ceil(o);
        }),
          (f.weeks = function(e2) {
            return void 0 === e2 && (e2 = null), this.week(e2);
          });
      };
    });
  }
});

// esm-build-7a851a8b8a8489f2bbc3f18baffeb65fd02e6811-51d9a5b9/mod.js
var __module = __toESM(require_weekOfYear());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
