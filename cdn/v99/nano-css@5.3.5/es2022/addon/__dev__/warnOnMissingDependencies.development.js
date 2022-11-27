/* esm.sh - esbuild bundle(nano-css@5.3.5/addon/__dev__/warnOnMissingDependencies) es2022 development */
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

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js
var require_warnOnMissingDependencies = __commonJS({
  'esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/__dev__/warnOnMissingDependencies.js'(
    exports,
    module
  ) {
    'use strict';

    var pkgName = 'nano-css';
    module.exports = function warnOnMissingDependencies(addon, renderer, deps) {
      var missing = [];
      for (var i = 0; i < deps.length; i++) {
        var name = deps[i];
        if (!renderer[name]) {
          missing.push(name);
        }
      }
      if (missing.length) {
        var str = 'Addon "' + addon + '" is missing the following dependencies:';
        for (var j = 0; j < missing.length; j++) {
          str += '\n require("' + pkgName + '/addon/' + missing[j] + '").addon(nano);';
        }
        throw new Error(str);
      }
    };
  }
});

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/mod.js
var __module = __toESM(require_warnOnMissingDependencies());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
