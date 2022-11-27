/* esm.sh - esbuild bundle(dayjs@1.11.6/plugin/localeData) es2022 development */
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

// esm-build-976c6752052d1fd0826335632393517adf072a92-50e91129/node_modules/dayjs/plugin/localeData.js
var require_localeData = __commonJS({
  'esm-build-976c6752052d1fd0826335632393517adf072a92-50e91129/node_modules/dayjs/plugin/localeData.js'(
    exports,
    module
  ) {
    !(function(n, e) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = e())
        : 'function' == typeof define && define.amd
        ? define(e)
        : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).dayjs_plugin_localeData = e());
    })(exports, function() {
      'use strict';

      return function(n, e, t) {
        var r = e.prototype,
          o = function(n2) {
            return n2 && (n2.indexOf ? n2 : n2.s);
          },
          u = function(n2, e2, t2, r2, u2) {
            var i2 = n2.name ? n2 : n2.$locale(),
              a2 = o(i2[e2]),
              s2 = o(i2[t2]),
              f =
                a2 ||
                s2.map(function(n3) {
                  return n3.slice(0, r2);
                });
            if (!u2) return f;
            var d = i2.weekStart;
            return f.map(function(n3, e3) {
              return f[(e3 + (d || 0)) % 7];
            });
          },
          i = function() {
            return t.Ls[t.locale()];
          },
          a = function(n2, e2) {
            return (
              n2.formats[e2] ||
              (function(n3) {
                return n3.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(n4, e3, t2) {
                  return e3 || t2.slice(1);
                });
              })(n2.formats[e2.toUpperCase()])
            );
          },
          s = function() {
            var n2 = this;
            return {
              months: function(e2) {
                return e2 ? e2.format('MMMM') : u(n2, 'months');
              },
              monthsShort: function(e2) {
                return e2 ? e2.format('MMM') : u(n2, 'monthsShort', 'months', 3);
              },
              firstDayOfWeek: function() {
                return n2.$locale().weekStart || 0;
              },
              weekdays: function(e2) {
                return e2 ? e2.format('dddd') : u(n2, 'weekdays');
              },
              weekdaysMin: function(e2) {
                return e2 ? e2.format('dd') : u(n2, 'weekdaysMin', 'weekdays', 2);
              },
              weekdaysShort: function(e2) {
                return e2 ? e2.format('ddd') : u(n2, 'weekdaysShort', 'weekdays', 3);
              },
              longDateFormat: function(e2) {
                return a(n2.$locale(), e2);
              },
              meridiem: this.$locale().meridiem,
              ordinal: this.$locale().ordinal
            };
          };
        (r.localeData = function() {
          return s.bind(this)();
        }),
          (t.localeData = function() {
            var n2 = i();
            return {
              firstDayOfWeek: function() {
                return n2.weekStart || 0;
              },
              weekdays: function() {
                return t.weekdays();
              },
              weekdaysShort: function() {
                return t.weekdaysShort();
              },
              weekdaysMin: function() {
                return t.weekdaysMin();
              },
              months: function() {
                return t.months();
              },
              monthsShort: function() {
                return t.monthsShort();
              },
              longDateFormat: function(e2) {
                return a(n2, e2);
              },
              meridiem: n2.meridiem,
              ordinal: n2.ordinal
            };
          }),
          (t.months = function() {
            return u(i(), 'months');
          }),
          (t.monthsShort = function() {
            return u(i(), 'monthsShort', 'months', 3);
          }),
          (t.weekdays = function(n2) {
            return u(i(), 'weekdays', null, null, n2);
          }),
          (t.weekdaysShort = function(n2) {
            return u(i(), 'weekdaysShort', 'weekdays', 3, n2);
          }),
          (t.weekdaysMin = function(n2) {
            return u(i(), 'weekdaysMin', 'weekdays', 2, n2);
          });
      };
    });
  }
});

// esm-build-976c6752052d1fd0826335632393517adf072a92-50e91129/mod.js
var __module = __toESM(require_localeData());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
