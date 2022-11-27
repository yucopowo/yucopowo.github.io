/* esm.sh - esbuild bundle(ts-easing@0.2.0) es2022 development */
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

// esm-build-29b71ef62829e61c694dd8c07707c6c6bb1fff42-8daf765a/node_modules/ts-easing/lib/index.js
var require_lib = __commonJS({
  'esm-build-29b71ef62829e61c694dd8c07707c6c6bb1fff42-8daf765a/node_modules/ts-easing/lib/index.js'(exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.easing = {
      linear: function(t) {
        return t;
      },
      quadratic: function(t) {
        return t * (-(t * t) * t + 4 * t * t - 6 * t + 4);
      },
      cubic: function(t) {
        return t * (4 * t * t - 9 * t + 6);
      },
      elastic: function(t) {
        return t * (33 * t * t * t * t - 106 * t * t * t + 126 * t * t - 67 * t + 15);
      },
      inQuad: function(t) {
        return t * t;
      },
      outQuad: function(t) {
        return t * (2 - t);
      },
      inOutQuad: function(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      },
      inCubic: function(t) {
        return t * t * t;
      },
      outCubic: function(t) {
        return --t * t * t + 1;
      },
      inOutCubic: function(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      },
      inQuart: function(t) {
        return t * t * t * t;
      },
      outQuart: function(t) {
        return 1 - --t * t * t * t;
      },
      inOutQuart: function(t) {
        return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
      },
      inQuint: function(t) {
        return t * t * t * t * t;
      },
      outQuint: function(t) {
        return 1 + --t * t * t * t * t;
      },
      inOutQuint: function(t) {
        return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
      },
      inSine: function(t) {
        return -Math.cos(t * (Math.PI / 2)) + 1;
      },
      outSine: function(t) {
        return Math.sin(t * (Math.PI / 2));
      },
      inOutSine: function(t) {
        return -(Math.cos(Math.PI * t) - 1) / 2;
      },
      inExpo: function(t) {
        return Math.pow(2, 10 * (t - 1));
      },
      outExpo: function(t) {
        return -Math.pow(2, -10 * t) + 1;
      },
      inOutExpo: function(t) {
        t /= 0.5;
        if (t < 1) return Math.pow(2, 10 * (t - 1)) / 2;
        t--;
        return (-Math.pow(2, -10 * t) + 2) / 2;
      },
      inCirc: function(t) {
        return -Math.sqrt(1 - t * t) + 1;
      },
      outCirc: function(t) {
        return Math.sqrt(1 - (t = t - 1) * t);
      },
      inOutCirc: function(t) {
        t /= 0.5;
        if (t < 1) return -(Math.sqrt(1 - t * t) - 1) / 2;
        t -= 2;
        return (Math.sqrt(1 - t * t) + 1) / 2;
      }
    };
  }
});

// esm-build-29b71ef62829e61c694dd8c07707c6c6bb1fff42-8daf765a/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { easing } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default, easing };
