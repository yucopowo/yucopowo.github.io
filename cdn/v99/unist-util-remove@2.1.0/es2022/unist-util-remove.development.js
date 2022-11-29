/* esm.sh - esbuild bundle(unist-util-remove@2.1.0) es2022 development */
import __unist_util_is_convert$ from '/cdn/v99/unist-util-is@4.1.0/es2022/convert.development.js';
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

// esm-build-5a5d5c73933dd13f3c7dcf80dad9775b4148a257-0322a4dc/node_modules/unist-util-remove/index.js
var require_unist_util_remove = __commonJS({
  'esm-build-5a5d5c73933dd13f3c7dcf80dad9775b4148a257-0322a4dc/node_modules/unist-util-remove/index.js'(
    exports,
    module
  ) {
    'use strict';

    var convert = __unist_util_is_convert$;
    module.exports = remove;
    function remove(tree, options, test) {
      var is = convert(test || options);
      var cascade = options.cascade == null ? true : options.cascade;
      return preorder(tree, null, null);
      function preorder(node, index, parent) {
        var children = node.children;
        var childIndex = -1;
        var position = 0;
        if (is(node, index, parent)) {
          return null;
        }
        if (children && children.length) {
          while (++childIndex < children.length) {
            if (preorder(children[childIndex], childIndex, node)) {
              children[position++] = children[childIndex];
            }
          }
          if (cascade && !position) {
            return null;
          }
          children.length = position;
        }
        return node;
      }
    }
  }
});

// esm-build-5a5d5c73933dd13f3c7dcf80dad9775b4148a257-0322a4dc/mod.js
var __module = __toESM(require_unist_util_remove());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
