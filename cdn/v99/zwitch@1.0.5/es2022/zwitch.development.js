/* esm.sh - esbuild bundle(zwitch@1.0.5) es2022 development */
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

// esm-build-57515179b3e4756762a492c726385e5d339ea7ef-a6ac9a4b/node_modules/zwitch/index.js
var require_zwitch = __commonJS({
  'esm-build-57515179b3e4756762a492c726385e5d339ea7ef-a6ac9a4b/node_modules/zwitch/index.js'(exports, module) {
    'use strict';

    module.exports = factory;
    var noop = Function.prototype;
    var own = {}.hasOwnProperty;
    function factory(key, options) {
      var settings = options || {};
      function one(value) {
        var fn = one.invalid;
        var handlers = one.handlers;
        if (value && own.call(value, key)) {
          fn = own.call(handlers, value[key]) ? handlers[value[key]] : one.unknown;
        }
        return (fn || noop).apply(this, arguments);
      }
      one.handlers = settings.handlers || {};
      one.invalid = settings.invalid;
      one.unknown = settings.unknown;
      return one;
    }
  }
});

// esm-build-57515179b3e4756762a492c726385e5d339ea7ef-a6ac9a4b/mod.js
var __module = __toESM(require_zwitch());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
