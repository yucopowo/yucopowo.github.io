/* esm.sh - esbuild bundle(unherit@1.1.3) es2022 development */
import __inherits$ from '/cdn/v99/inherits@2.0.4/es2022/inherits.development.js';
import __xtend$ from '/cdn/v99/xtend@4.0.2/es2022/xtend.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-79be66d7a7f3f712cac3348edb107f6ac03f3511-5e6bb4b0/node_modules/unherit/index.js
var require_unherit = __commonJS({
  'esm-build-79be66d7a7f3f712cac3348edb107f6ac03f3511-5e6bb4b0/node_modules/unherit/index.js'(exports, module) {
    'use strict';

    var xtend = __xtend$;
    var inherits = __inherits$;
    module.exports = unherit;
    function unherit(Super) {
      var result;
      var key;
      var value;
      inherits(Of, Super);
      inherits(From, Of);
      result = Of.prototype;
      for (key in result) {
        value = result[key];
        if (value && typeof value === 'object') {
          result[key] = 'concat' in value ? value.concat() : xtend(value);
        }
      }
      return Of;
      function From(parameters) {
        return Super.apply(this, parameters);
      }
      function Of() {
        if (!(this instanceof Of)) {
          return new From(arguments);
        }
        return Super.apply(this, arguments);
      }
    }
  }
});

// esm-build-79be66d7a7f3f712cac3348edb107f6ac03f3511-5e6bb4b0/mod.js
var __module = __toESM(require_unherit());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
