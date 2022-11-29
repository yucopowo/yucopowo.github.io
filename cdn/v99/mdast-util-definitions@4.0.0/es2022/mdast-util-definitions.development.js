/* esm.sh - esbuild bundle(mdast-util-definitions@4.0.0) es2022 development */
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

// esm-build-93d2b440cfd2b460fc42c82986943bfe91abaf0c-fb5caad3/node_modules/mdast-util-definitions/index.js
var require_mdast_util_definitions = __commonJS({
  'esm-build-93d2b440cfd2b460fc42c82986943bfe91abaf0c-fb5caad3/node_modules/mdast-util-definitions/index.js'(
    exports,
    module
  ) {
    'use strict';

    var visit = __unist_util_visit$;
    module.exports = getDefinitionFactory;
    var own = {}.hasOwnProperty;
    function getDefinitionFactory(node, options) {
      return getterFactory(gather(node, options));
    }
    function gather(node) {
      var cache = {};
      if (!node || !node.type) {
        throw new Error('mdast-util-definitions expected node');
      }
      visit(node, 'definition', ondefinition);
      return cache;
      function ondefinition(definition) {
        var id = normalise(definition.identifier);
        if (!own.call(cache, id)) {
          cache[id] = definition;
        }
      }
    }
    function getterFactory(cache) {
      return getter;
      function getter(identifier) {
        var id = identifier && normalise(identifier);
        return id && own.call(cache, id) ? cache[id] : null;
      }
    }
    function normalise(identifier) {
      return identifier.toUpperCase();
    }
  }
});

// esm-build-93d2b440cfd2b460fc42c82986943bfe91abaf0c-fb5caad3/mod.js
var __module = __toESM(require_mdast_util_definitions());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
