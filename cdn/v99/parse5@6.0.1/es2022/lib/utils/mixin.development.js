/* esm.sh - esbuild bundle(parse5@6.0.1/lib/utils/mixin) es2022 development */
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/utils/mixin.js
var require_mixin = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/utils/mixin.js'(
    exports,
    module
  ) {
    'use strict';

    var Mixin = class {
      constructor(host) {
        const originalMethods = {};
        const overriddenMethods = this._getOverriddenMethods(this, originalMethods);
        for (const key of Object.keys(overriddenMethods)) {
          if (typeof overriddenMethods[key] === 'function') {
            originalMethods[key] = host[key];
            host[key] = overriddenMethods[key];
          }
        }
      }
      _getOverriddenMethods() {
        throw new Error('Not implemented');
      }
    };
    Mixin.install = function(host, Ctor, opts) {
      if (!host.__mixins) {
        host.__mixins = [];
      }
      for (let i = 0; i < host.__mixins.length; i++) {
        if (host.__mixins[i].constructor === Ctor) {
          return host.__mixins[i];
        }
      }
      const mixin = new Ctor(host, opts);
      host.__mixins.push(mixin);
      return mixin;
    };
    module.exports = Mixin;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_mixin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
