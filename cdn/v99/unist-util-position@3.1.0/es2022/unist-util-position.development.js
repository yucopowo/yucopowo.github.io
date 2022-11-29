/* esm.sh - esbuild bundle(unist-util-position@3.1.0) es2022 development */
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

// esm-build-348a4b75257f70a13f0ac6de35c23c2ee0afabbc-ad0c72ac/node_modules/unist-util-position/index.js
var require_unist_util_position = __commonJS({
  'esm-build-348a4b75257f70a13f0ac6de35c23c2ee0afabbc-ad0c72ac/node_modules/unist-util-position/index.js'(
    exports,
    module
  ) {
    'use strict';

    var start = factory('start');
    var end = factory('end');
    module.exports = position;
    position.start = start;
    position.end = end;
    function position(node) {
      return {
        start: start(node),
        end: end(node)
      };
    }
    function factory(type) {
      point.displayName = type;
      return point;
      function point(node) {
        var point2 = (node && node.position && node.position[type]) || {};
        return {
          line: point2.line || null,
          column: point2.column || null,
          offset: isNaN(point2.offset) ? null : point2.offset
        };
      }
    }
  }
});

// esm-build-348a4b75257f70a13f0ac6de35c23c2ee0afabbc-ad0c72ac/mod.js
var __module = __toESM(require_unist_util_position());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
