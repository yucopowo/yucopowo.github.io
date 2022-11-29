/* esm.sh - esbuild bundle(unist-util-visit@2.0.3) es2022 development */
import __unist_util_visit_parents$ from '/cdn/v99/unist-util-visit-parents@3.1.1/es2022/unist-util-visit-parents.development.js';
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

// esm-build-2da987296c865e10a2be7b93831d462bbc06b046-b42524c0/node_modules/unist-util-visit/index.js
var require_unist_util_visit = __commonJS({
  'esm-build-2da987296c865e10a2be7b93831d462bbc06b046-b42524c0/node_modules/unist-util-visit/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = visit;
    var visitParents = __unist_util_visit_parents$;
    var CONTINUE = visitParents.CONTINUE;
    var SKIP = visitParents.SKIP;
    var EXIT = visitParents.EXIT;
    visit.CONTINUE = CONTINUE;
    visit.SKIP = SKIP;
    visit.EXIT = EXIT;
    function visit(tree, test, visitor, reverse) {
      if (typeof test === 'function' && typeof visitor !== 'function') {
        reverse = visitor;
        visitor = test;
        test = null;
      }
      visitParents(tree, test, overload, reverse);
      function overload(node, parents) {
        var parent = parents[parents.length - 1];
        var index = parent ? parent.children.indexOf(node) : null;
        return visitor(node, index, parent);
      }
    }
  }
});

// esm-build-2da987296c865e10a2be7b93831d462bbc06b046-b42524c0/mod.js
var __module = __toESM(require_unist_util_visit());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
