/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/go) es2022 development */
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

// esm-build-c2d8df76bf274466ffe952657409b7023287fc09-639b098b/node_modules/highlight.js/lib/languages/go.js
var require_go = __commonJS({
  'esm-build-c2d8df76bf274466ffe952657409b7023287fc09-639b098b/node_modules/highlight.js/lib/languages/go.js'(
    exports,
    module
  ) {
    function go(hljs) {
      const GO_KEYWORDS = {
        keyword:
          'break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune',
        literal: 'true false iota nil',
        built_in: 'append cap close complex copy imag len make new panic print println real recover delete'
      };
      return {
        name: 'Go',
        aliases: ['golang'],
        keywords: GO_KEYWORDS,
        illegal: '</',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'string',
            variants: [
              hljs.QUOTE_STRING_MODE,
              hljs.APOS_STRING_MODE,
              {
                begin: '`',
                end: '`'
              }
            ]
          },
          {
            className: 'number',
            variants: [
              {
                begin: hljs.C_NUMBER_RE + '[i]',
                relevance: 1
              },
              hljs.C_NUMBER_MODE
            ]
          },
          {
            begin: /:=/
          },
          {
            className: 'function',
            beginKeywords: 'func',
            end: '\\s*(\\{|$)',
            excludeEnd: true,
            contains: [
              hljs.TITLE_MODE,
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: GO_KEYWORDS,
                illegal: /["']/
              }
            ]
          }
        ]
      };
    }
    module.exports = go;
  }
});

// esm-build-c2d8df76bf274466ffe952657409b7023287fc09-639b098b/mod.js
var __module = __toESM(require_go());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
