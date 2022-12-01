/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/awk) es2022 development */
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

// esm-build-ce35087f77c50ce89446ce870c1442a60f3bf1e3-06d4eac0/node_modules/highlight.js/lib/languages/awk.js
var require_awk = __commonJS({
  'esm-build-ce35087f77c50ce89446ce870c1442a60f3bf1e3-06d4eac0/node_modules/highlight.js/lib/languages/awk.js'(
    exports,
    module
  ) {
    function awk(hljs) {
      const VARIABLE = {
        className: 'variable',
        variants: [
          {
            begin: /\$[\w\d#@][\w\d_]*/
          },
          {
            begin: /\$\{(.*?)\}/
          }
        ]
      };
      const KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
      const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /(u|b)?r?'''/,
            end: /'''/,
            relevance: 10
          },
          {
            begin: /(u|b)?r?"""/,
            end: /"""/,
            relevance: 10
          },
          {
            begin: /(u|r|ur)'/,
            end: /'/,
            relevance: 10
          },
          {
            begin: /(u|r|ur)"/,
            end: /"/,
            relevance: 10
          },
          {
            begin: /(b|br)'/,
            end: /'/
          },
          {
            begin: /(b|br)"/,
            end: /"/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      return {
        name: 'Awk',
        keywords: {
          keyword: KEYWORDS
        },
        contains: [VARIABLE, STRING, hljs.REGEXP_MODE, hljs.HASH_COMMENT_MODE, hljs.NUMBER_MODE]
      };
    }
    module.exports = awk;
  }
});

// esm-build-ce35087f77c50ce89446ce870c1442a60f3bf1e3-06d4eac0/mod.js
var __module = __toESM(require_awk());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
