/* esm.sh - esbuild bundle(is-word-character@1.0.4) es2022 development */
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

// esm-build-0b9a82f21b9368b347da7e1855850341487ce5dd-1c6fc161/node_modules/is-word-character/index.js
var require_is_word_character = __commonJS({
  'esm-build-0b9a82f21b9368b347da7e1855850341487ce5dd-1c6fc161/node_modules/is-word-character/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = wordCharacter;
    var fromCode = String.fromCharCode;
    var re = /\w/;
    function wordCharacter(character) {
      return re.test(typeof character === 'number' ? fromCode(character) : character.charAt(0));
    }
  }
});

// esm-build-0b9a82f21b9368b347da7e1855850341487ce5dd-1c6fc161/mod.js
var __module = __toESM(require_is_word_character());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
