/* esm.sh - esbuild bundle(state-toggle@1.0.3) es2022 development */
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

// esm-build-8944a8e3f3da66a7be81312b55284f36788dac08-fb61c56f/node_modules/state-toggle/index.js
var require_state_toggle = __commonJS({
  'esm-build-8944a8e3f3da66a7be81312b55284f36788dac08-fb61c56f/node_modules/state-toggle/index.js'(exports, module) {
    'use strict';

    module.exports = factory;
    function factory(key, state, ctx) {
      return enter;
      function enter() {
        var context = ctx || this;
        var current = context[key];
        context[key] = !state;
        return exit;
        function exit() {
          context[key] = current;
        }
      }
    }
  }
});

// esm-build-8944a8e3f3da66a7be81312b55284f36788dac08-fb61c56f/mod.js
var __module = __toESM(require_state_toggle());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
