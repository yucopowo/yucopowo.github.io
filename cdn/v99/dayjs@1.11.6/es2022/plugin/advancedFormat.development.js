/* esm.sh - esbuild bundle(dayjs@1.11.6/plugin/advancedFormat) es2022 development */
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

// esm-build-ee1a44e6b906937519aa0183a1a89e79a5976b9c-7b64f77e/node_modules/dayjs/plugin/advancedFormat.js
var require_advancedFormat = __commonJS({
  'esm-build-ee1a44e6b906937519aa0183a1a89e79a5976b9c-7b64f77e/node_modules/dayjs/plugin/advancedFormat.js'(
    exports,
    module
  ) {
    !(function(e, t) {
      'object' == typeof exports && 'undefined' != typeof module
        ? (module.exports = t())
        : 'function' == typeof define && define.amd
        ? define(t)
        : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).dayjs_plugin_advancedFormat = t());
    })(exports, function() {
      'use strict';

      return function(e, t) {
        var r = t.prototype,
          n = r.format;
        r.format = function(e2) {
          var t2 = this,
            r2 = this.$locale();
          if (!this.isValid()) return n.bind(this)(e2);
          var s = this.$utils(),
            a = (e2 || 'YYYY-MM-DDTHH:mm:ssZ').replace(
              /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
              function(e3) {
                switch (e3) {
                  case 'Q':
                    return Math.ceil((t2.$M + 1) / 3);
                  case 'Do':
                    return r2.ordinal(t2.$D);
                  case 'gggg':
                    return t2.weekYear();
                  case 'GGGG':
                    return t2.isoWeekYear();
                  case 'wo':
                    return r2.ordinal(t2.week(), 'W');
                  case 'w':
                  case 'ww':
                    return s.s(t2.week(), 'w' === e3 ? 1 : 2, '0');
                  case 'W':
                  case 'WW':
                    return s.s(t2.isoWeek(), 'W' === e3 ? 1 : 2, '0');
                  case 'k':
                  case 'kk':
                    return s.s(String(0 === t2.$H ? 24 : t2.$H), 'k' === e3 ? 1 : 2, '0');
                  case 'X':
                    return Math.floor(t2.$d.getTime() / 1e3);
                  case 'x':
                    return t2.$d.getTime();
                  case 'z':
                    return '[' + t2.offsetName() + ']';
                  case 'zzz':
                    return '[' + t2.offsetName('long') + ']';
                  default:
                    return e3;
                }
              }
            );
          return n.bind(this)(a);
        };
      };
    });
  }
});

// esm-build-ee1a44e6b906937519aa0183a1a89e79a5976b9c-7b64f77e/mod.js
var __module = __toESM(require_advancedFormat());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
