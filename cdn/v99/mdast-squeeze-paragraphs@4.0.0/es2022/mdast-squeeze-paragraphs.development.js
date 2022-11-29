/* esm.sh - esbuild bundle(mdast-squeeze-paragraphs@4.0.0) es2022 development */
import __unist_util_remove$ from '/cdn/v99/unist-util-remove@2.1.0/es2022/unist-util-remove.development.js';
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

// esm-build-bc66b478ea5a3ddf879fc0344f0ae0957cd8dfc6-dafe199a/node_modules/mdast-squeeze-paragraphs/index.js
var require_mdast_squeeze_paragraphs = __commonJS({
  'esm-build-bc66b478ea5a3ddf879fc0344f0ae0957cd8dfc6-dafe199a/node_modules/mdast-squeeze-paragraphs/index.js'(
    exports,
    module
  ) {
    'use strict';

    var remove = __unist_util_remove$;
    module.exports = squeeze;
    var whiteSpaceOnly = /^\s*$/;
    function squeeze(tree) {
      return remove(
        tree,
        {
          cascade: false
        },
        isEmptyParagraph
      );
    }
    function isEmptyParagraph(node) {
      return node.type === 'paragraph' && node.children.every(isEmptyText);
    }
    function isEmptyText(node) {
      return node.type === 'text' && whiteSpaceOnly.test(node.value);
    }
  }
});

// esm-build-bc66b478ea5a3ddf879fc0344f0ae0957cd8dfc6-dafe199a/mod.js
var __module = __toESM(require_mdast_squeeze_paragraphs());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
