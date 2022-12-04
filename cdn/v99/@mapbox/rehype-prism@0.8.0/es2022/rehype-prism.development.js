/* esm.sh - esbuild bundle(@mapbox/rehype-prism@0.8.0) es2022 development */
import __hast_util_to_string$ from '/cdn/v99/hast-util-to-string@1.0.4/es2022/hast-util-to-string.development.js';
import __unist_util_visit$ from '/cdn/v99/unist-util-visit@2.0.3/es2022/unist-util-visit.development.js';
import __refractor$ from '/cdn/v99/refractor@3.6.0/es2022/refractor.development.js';
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

// esm-build-554e28946fff6aa62d7e6a3fc9009575c5e9ac10-649c735a/node_modules/@mapbox/rehype-prism/index.js
var require_rehype_prism = __commonJS({
  'esm-build-554e28946fff6aa62d7e6a3fc9009575c5e9ac10-649c735a/node_modules/@mapbox/rehype-prism/index.js'(
    exports,
    module
  ) {
    'use strict';

    var visit = __unist_util_visit$;
    var nodeToString = __hast_util_to_string$;
    var refractor = __refractor$;
    module.exports = options => {
      options = options || {};
      if (options.alias) {
        refractor.alias(options.alias);
      }
      return tree => {
        visit(tree, 'element', visitor);
      };
      function visitor(node, index, parent) {
        if (!parent || parent.tagName !== 'pre' || node.tagName !== 'code') {
          return;
        }
        const lang = getLanguage(node);
        if (lang === null) {
          return;
        }
        let result;
        try {
          parent.properties.className = (parent.properties.className || []).concat('language-' + lang);
          result = refractor.highlight(nodeToString(node), lang);
        } catch (err) {
          if (options.ignoreMissing && /Unknown language/.test(err.message)) {
            return;
          }
          throw err;
        }
        node.children = result;
      }
    };
    function getLanguage(node) {
      const className = node.properties.className || [];
      for (const classListItem of className) {
        if (classListItem.slice(0, 9) === 'language-') {
          return classListItem.slice(9).toLowerCase();
        }
      }
      return null;
    }
  }
});

// esm-build-554e28946fff6aa62d7e6a3fc9009575c5e9ac10-649c735a/mod.js
var __module = __toESM(require_rehype_prism());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
