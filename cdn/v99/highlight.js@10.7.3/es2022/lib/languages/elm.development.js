/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/elm) es2022 development */
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

// esm-build-e01b83cf25d8076e8e34e76cbbf865a02e6f59da-2b61e925/node_modules/highlight.js/lib/languages/elm.js
var require_elm = __commonJS({
  'esm-build-e01b83cf25d8076e8e34e76cbbf865a02e6f59da-2b61e925/node_modules/highlight.js/lib/languages/elm.js'(
    exports,
    module
  ) {
    function elm(hljs) {
      const COMMENT = {
        variants: [
          hljs.COMMENT('--', '$'),
          hljs.COMMENT(/\{-/, /-\}/, {
            contains: ['self']
          })
        ]
      };
      const CONSTRUCTOR = {
        className: 'type',
        begin: "\\b[A-Z][\\w']*",
        relevance: 0
      };
      const LIST = {
        begin: '\\(',
        end: '\\)',
        illegal: '"',
        contains: [
          {
            className: 'type',
            begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
          },
          COMMENT
        ]
      };
      const RECORD = {
        begin: /\{/,
        end: /\}/,
        contains: LIST.contains
      };
      const CHARACTER = {
        className: 'string',
        begin: "'\\\\?.",
        end: "'",
        illegal: '.'
      };
      return {
        name: 'Elm',
        keywords:
          'let in if then else case of where module import exposing type alias as infix infixl infixr port effect command subscription',
        contains: [
          {
            beginKeywords: 'port effect module',
            end: 'exposing',
            keywords: 'port effect module where command subscription exposing',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
          },
          {
            begin: 'import',
            end: '$',
            keywords: 'import as exposing',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
          },
          {
            begin: 'type',
            end: '$',
            keywords: 'type alias',
            contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
          },
          {
            beginKeywords: 'infix infixl infixr',
            end: '$',
            contains: [hljs.C_NUMBER_MODE, COMMENT]
          },
          {
            begin: 'port',
            end: '$',
            keywords: 'port',
            contains: [COMMENT]
          },
          CHARACTER,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          CONSTRUCTOR,
          hljs.inherit(hljs.TITLE_MODE, {
            begin: "^[_a-z][\\w']*"
          }),
          COMMENT,
          {
            begin: '->|<-'
          }
        ],
        illegal: /;/
      };
    }
    module.exports = elm;
  }
});

// esm-build-e01b83cf25d8076e8e34e76cbbf865a02e6f59da-2b61e925/mod.js
var __module = __toESM(require_elm());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
