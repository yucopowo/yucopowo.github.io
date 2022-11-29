/* esm.sh - esbuild bundle(is-alphabetical@1.0.4) es2022 development */
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

// esm-build-2f6a30b03a798ffc6339f2413b8c7ae5a9111f21-7eec119c/node_modules/is-alphabetical/index.js
var require_is_alphabetical = __commonJS({
  'esm-build-2f6a30b03a798ffc6339f2413b8c7ae5a9111f21-7eec119c/node_modules/is-alphabetical/index.js'(exports, module) {
    'use strict';

    module.exports = alphabetical;
    function alphabetical(character) {
      var code = typeof character === 'string' ? character.charCodeAt(0) : character;
      return (code >= 97 && code <= 122) || (code >= 65 && code <= 90);
    }
  }
});

// esm-build-2f6a30b03a798ffc6339f2413b8c7ae5a9111f21-7eec119c/mod.js
var __module = __toESM(require_is_alphabetical());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
