/* esm.sh - esbuild bundle(unist-util-generated@1.1.6) es2022 development */
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

// esm-build-e66f1e998d5ee5a61c67df5b3d3f60ca88dc6111-9fc7157c/node_modules/unist-util-generated/index.js
var require_unist_util_generated = __commonJS({
  'esm-build-e66f1e998d5ee5a61c67df5b3d3f60ca88dc6111-9fc7157c/node_modules/unist-util-generated/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = generated;
    function generated(node) {
      return (
        !node ||
        !node.position ||
        !node.position.start ||
        !node.position.start.line ||
        !node.position.start.column ||
        !node.position.end ||
        !node.position.end.line ||
        !node.position.end.column
      );
    }
  }
});

// esm-build-e66f1e998d5ee5a61c67df5b3d3f60ca88dc6111-9fc7157c/mod.js
var __module = __toESM(require_unist_util_generated());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
