/* esm.sh - esbuild bundle(unist-util-stringify-position@2.0.3) es2022 development */
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

// esm-build-a7047bf8f7218b71e42c2466f33b2ef8b68e0439-bf3edeaa/node_modules/unist-util-stringify-position/index.js
var require_unist_util_stringify_position = __commonJS({
  'esm-build-a7047bf8f7218b71e42c2466f33b2ef8b68e0439-bf3edeaa/node_modules/unist-util-stringify-position/index.js'(
    exports,
    module
  ) {
    'use strict';

    var own = {}.hasOwnProperty;
    module.exports = stringify;
    function stringify(value) {
      if (!value || typeof value !== 'object') {
        return '';
      }
      if (own.call(value, 'position') || own.call(value, 'type')) {
        return position(value.position);
      }
      if (own.call(value, 'start') || own.call(value, 'end')) {
        return position(value);
      }
      if (own.call(value, 'line') || own.call(value, 'column')) {
        return point(value);
      }
      return '';
    }
    function point(point2) {
      if (!point2 || typeof point2 !== 'object') {
        point2 = {};
      }
      return index(point2.line) + ':' + index(point2.column);
    }
    function position(pos) {
      if (!pos || typeof pos !== 'object') {
        pos = {};
      }
      return point(pos.start) + '-' + point(pos.end);
    }
    function index(value) {
      return value && typeof value === 'number' ? value : 1;
    }
  }
});

// esm-build-a7047bf8f7218b71e42c2466f33b2ef8b68e0439-bf3edeaa/mod.js
var __module = __toESM(require_unist_util_stringify_position());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
