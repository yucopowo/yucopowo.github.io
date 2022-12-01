/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dts) es2022 development */
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

// esm-build-71c3ab7181ccbaecd16f8459f3b4b1ef8ba5bf4b-519b07a6/node_modules/highlight.js/lib/languages/dts.js
var require_dts = __commonJS({
  'esm-build-71c3ab7181ccbaecd16f8459f3b4b1ef8ba5bf4b-519b07a6/node_modules/highlight.js/lib/languages/dts.js'(
    exports,
    module
  ) {
    function dts(hljs) {
      const STRINGS = {
        className: 'string',
        variants: [
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            begin: '((u8?|U)|L)?"'
          }),
          {
            begin: '(u8?|U)?R"',
            end: '"',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: "'\\\\?.",
            end: "'",
            illegal: '.'
          }
        ]
      };
      const NUMBERS = {
        className: 'number',
        variants: [
          {
            begin: '\\b(\\d+(\\.\\d*)?|\\.\\d+)(u|U|l|L|ul|UL|f|F)'
          },
          {
            begin: hljs.C_NUMBER_RE
          }
        ],
        relevance: 0
      };
      const PREPROCESSOR = {
        className: 'meta',
        begin: '#',
        end: '$',
        keywords: {
          'meta-keyword': 'if else elif endif define undef ifdef ifndef'
        },
        contains: [
          {
            begin: /\\\n/,
            relevance: 0
          },
          {
            beginKeywords: 'include',
            end: '$',
            keywords: {
              'meta-keyword': 'include'
            },
            contains: [
              hljs.inherit(STRINGS, {
                className: 'meta-string'
              }),
              {
                className: 'meta-string',
                begin: '<',
                end: '>',
                illegal: '\\n'
              }
            ]
          },
          STRINGS,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
      const DTS_REFERENCE = {
        className: 'variable',
        begin: /&[a-z\d_]*\b/
      };
      const DTS_KEYWORD = {
        className: 'meta-keyword',
        begin: '/[a-z][a-z\\d-]*/'
      };
      const DTS_LABEL = {
        className: 'symbol',
        begin: '^\\s*[a-zA-Z_][a-zA-Z\\d_]*:'
      };
      const DTS_CELL_PROPERTY = {
        className: 'params',
        begin: '<',
        end: '>',
        contains: [NUMBERS, DTS_REFERENCE]
      };
      const DTS_NODE = {
        className: 'class',
        begin: /[a-zA-Z_][a-zA-Z\d_@]*\s\{/,
        end: /[{;=]/,
        returnBegin: true,
        excludeEnd: true
      };
      const DTS_ROOT_NODE = {
        className: 'class',
        begin: '/\\s*\\{',
        end: /\};/,
        relevance: 10,
        contains: [
          DTS_REFERENCE,
          DTS_KEYWORD,
          DTS_LABEL,
          DTS_NODE,
          DTS_CELL_PROPERTY,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          STRINGS
        ]
      };
      return {
        name: 'Device Tree',
        keywords: '',
        contains: [
          DTS_ROOT_NODE,
          DTS_REFERENCE,
          DTS_KEYWORD,
          DTS_LABEL,
          DTS_NODE,
          DTS_CELL_PROPERTY,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          NUMBERS,
          STRINGS,
          PREPROCESSOR,
          {
            begin: hljs.IDENT_RE + '::',
            keywords: ''
          }
        ]
      };
    }
    module.exports = dts;
  }
});

// esm-build-71c3ab7181ccbaecd16f8459f3b4b1ef8ba5bf4b-519b07a6/mod.js
var __module = __toESM(require_dts());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
