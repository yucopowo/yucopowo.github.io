/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/step21) es2022 development */
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

// esm-build-cdcf8e22ef37747672f59621102642e5cbf42081-d717f993/node_modules/highlight.js/lib/languages/step21.js
var require_step21 = __commonJS({
  'esm-build-cdcf8e22ef37747672f59621102642e5cbf42081-d717f993/node_modules/highlight.js/lib/languages/step21.js'(
    exports,
    module
  ) {
    function step21(hljs) {
      const STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
      const STEP21_KEYWORDS = {
        $pattern: STEP21_IDENT_RE,
        keyword: 'HEADER ENDSEC DATA'
      };
      const STEP21_START = {
        className: 'meta',
        begin: 'ISO-10303-21;',
        relevance: 10
      };
      const STEP21_CLOSE = {
        className: 'meta',
        begin: 'END-ISO-10303-21;',
        relevance: 10
      };
      return {
        name: 'STEP Part 21',
        aliases: ['p21', 'step', 'stp'],
        case_insensitive: true,
        keywords: STEP21_KEYWORDS,
        contains: [
          STEP21_START,
          STEP21_CLOSE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.COMMENT('/\\*\\*!', '\\*/'),
          hljs.C_NUMBER_MODE,
          hljs.inherit(hljs.APOS_STRING_MODE, {
            illegal: null
          }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          }),
          {
            className: 'string',
            begin: "'",
            end: "'"
          },
          {
            className: 'symbol',
            variants: [
              {
                begin: '#',
                end: '\\d+',
                illegal: '\\W'
              }
            ]
          }
        ]
      };
    }
    module.exports = step21;
  }
});

// esm-build-cdcf8e22ef37747672f59621102642e5cbf42081-d717f993/mod.js
var __module = __toESM(require_step21());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
