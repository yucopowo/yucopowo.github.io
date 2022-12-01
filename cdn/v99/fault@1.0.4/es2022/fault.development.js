/* esm.sh - esbuild bundle(fault@1.0.4) es2022 development */
import __format$ from '/cdn/v99/format@0.2.2/es2022/format.development.js';
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

// esm-build-d96258e625c804b33fabd1798bf0a93ec7b9ed22-68e350a9/node_modules/fault/index.js
var require_fault = __commonJS({
  'esm-build-d96258e625c804b33fabd1798bf0a93ec7b9ed22-68e350a9/node_modules/fault/index.js'(exports, module) {
    'use strict';

    var formatter = __format$;
    var fault = create(Error);
    module.exports = fault;
    fault.eval = create(EvalError);
    fault.range = create(RangeError);
    fault.reference = create(ReferenceError);
    fault.syntax = create(SyntaxError);
    fault.type = create(TypeError);
    fault.uri = create(URIError);
    fault.create = create;
    function create(EConstructor) {
      FormattedError.displayName = EConstructor.displayName || EConstructor.name;
      return FormattedError;
      function FormattedError(format) {
        if (format) {
          format = formatter.apply(null, arguments);
        }
        return new EConstructor(format);
      }
    }
  }
});

// esm-build-d96258e625c804b33fabd1798bf0a93ec7b9ed22-68e350a9/mod.js
var __module = __toESM(require_fault());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
