/* esm.sh - esbuild bundle(ccount@1.1.0) es2022 development */
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

// esm-build-3ada5301551f4a475f143dd1953c81ee4e24847c-54c85870/node_modules/ccount/index.js
var require_ccount = __commonJS({
  'esm-build-3ada5301551f4a475f143dd1953c81ee4e24847c-54c85870/node_modules/ccount/index.js'(exports, module) {
    'use strict';

    module.exports = ccount;
    function ccount(source, character) {
      var value = String(source);
      var count = 0;
      var index;
      if (typeof character !== 'string') {
        throw new Error('Expected character');
      }
      index = value.indexOf(character);
      while (index !== -1) {
        count++;
        index = value.indexOf(character, index + character.length);
      }
      return count;
    }
  }
});

// esm-build-3ada5301551f4a475f143dd1953c81ee4e24847c-54c85870/mod.js
var __module = __toESM(require_ccount());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
