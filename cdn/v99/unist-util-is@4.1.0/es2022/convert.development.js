/* esm.sh - esbuild bundle(unist-util-is@4.1.0/convert) es2022 development */
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

// esm-build-9fa81cb4cb01b0cd5f72ea6880faf8b4741afb46-7ff37646/node_modules/unist-util-is/convert.js
var require_convert = __commonJS({
  'esm-build-9fa81cb4cb01b0cd5f72ea6880faf8b4741afb46-7ff37646/node_modules/unist-util-is/convert.js'(exports, module) {
    'use strict';

    module.exports = convert;
    function convert(test) {
      if (test == null) {
        return ok;
      }
      if (typeof test === 'string') {
        return typeFactory(test);
      }
      if (typeof test === 'object') {
        return 'length' in test ? anyFactory(test) : allFactory(test);
      }
      if (typeof test === 'function') {
        return test;
      }
      throw new Error('Expected function, string, or object as test');
    }
    function allFactory(test) {
      return all;
      function all(node) {
        var key;
        for (key in test) {
          if (node[key] !== test[key]) return false;
        }
        return true;
      }
    }
    function anyFactory(tests) {
      var checks = [];
      var index = -1;
      while (++index < tests.length) {
        checks[index] = convert(tests[index]);
      }
      return any;
      function any() {
        var index2 = -1;
        while (++index2 < checks.length) {
          if (checks[index2].apply(this, arguments)) {
            return true;
          }
        }
        return false;
      }
    }
    function typeFactory(test) {
      return type;
      function type(node) {
        return Boolean(node && node.type === test);
      }
    }
    function ok() {
      return true;
    }
  }
});

// esm-build-9fa81cb4cb01b0cd5f72ea6880faf8b4741afb46-7ff37646/mod.js
var __module = __toESM(require_convert());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
