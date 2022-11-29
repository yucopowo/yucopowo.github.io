/* esm.sh - esbuild bundle(unist-util-remove-position@2.0.1) es2022 development */
import __unist_util_visit$ from '/cdn/v99/unist-util-visit@2.0.3/es2022/unist-util-visit.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-16f8b6889388863de943c3c49645ab2dddbb0480-2a4eea0e/node_modules/unist-util-remove-position/index.js
var require_unist_util_remove_position = __commonJS({
  'esm-build-16f8b6889388863de943c3c49645ab2dddbb0480-2a4eea0e/node_modules/unist-util-remove-position/index.js'(
    exports,
    module
  ) {
    'use strict';

    var visit = __unist_util_visit$;
    module.exports = removePosition;
    function removePosition(node, force) {
      visit(node, force ? hard : soft);
      return node;
    }
    function hard(node) {
      delete node.position;
    }
    function soft(node) {
      node.position = void 0;
    }
  }
});

// esm-build-16f8b6889388863de943c3c49645ab2dddbb0480-2a4eea0e/mod.js
var __module = __toESM(require_unist_util_remove_position());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
