/* esm.sh - esbuild bundle(space-separated-tokens@1.1.5) es2022 development */
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

// esm-build-cc3a0dff57e3a6df0297b2798173fba5a1974fad-8dd8b679/node_modules/space-separated-tokens/index.js
var require_space_separated_tokens = __commonJS({
  'esm-build-cc3a0dff57e3a6df0297b2798173fba5a1974fad-8dd8b679/node_modules/space-separated-tokens/index.js'(exports) {
    'use strict';

    exports.parse = parse2;
    exports.stringify = stringify2;
    var empty = '';
    var space = ' ';
    var whiteSpace = /[ \t\n\r\f]+/g;
    function parse2(value) {
      var input = String(value || empty).trim();
      return input === empty ? [] : input.split(whiteSpace);
    }
    function stringify2(values) {
      return values.join(space).trim();
    }
  }
});

// esm-build-cc3a0dff57e3a6df0297b2798173fba5a1974fad-8dd8b679/mod.js
var __module = __toESM(require_space_separated_tokens());
var { parse, stringify } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, parse, stringify };
