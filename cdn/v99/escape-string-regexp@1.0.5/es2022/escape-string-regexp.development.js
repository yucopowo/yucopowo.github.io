/* esm.sh - esbuild bundle(escape-string-regexp@1.0.5) es2022 development */
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

// esm-build-5140a46591e1ce6ea19638bbec0ce49b5fa610e6-28206b5e/node_modules/escape-string-regexp/index.js
var require_escape_string_regexp = __commonJS({
  'esm-build-5140a46591e1ce6ea19638bbec0ce49b5fa610e6-28206b5e/node_modules/escape-string-regexp/index.js'(
    exports,
    module
  ) {
    'use strict';

    var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
    module.exports = function(str) {
      if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
      }
      return str.replace(matchOperatorsRe, '\\$&');
    };
  }
});

// esm-build-5140a46591e1ce6ea19638bbec0ce49b5fa610e6-28206b5e/mod.js
var __module = __toESM(require_escape_string_regexp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };