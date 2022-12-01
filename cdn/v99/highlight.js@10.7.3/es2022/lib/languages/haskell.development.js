/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/haskell) es2022 development */
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

// esm-build-c33fd2879b79abe7a1c0dc38ab7c95425228a798-f549305f/node_modules/highlight.js/lib/languages/haskell.js
var require_haskell = __commonJS({
  'esm-build-c33fd2879b79abe7a1c0dc38ab7c95425228a798-f549305f/node_modules/highlight.js/lib/languages/haskell.js'(
    exports,
    module
  ) {
    function haskell(hljs) {
      const COMMENT = {
        variants: [
          hljs.COMMENT('--', '$'),
          hljs.COMMENT(/\{-/, /-\}/, {
            contains: ['self']
          })
        ]
      };
      const PRAGMA = {
        className: 'meta',
        begin: /\{-#/,
        end: /#-\}/
      };
      const PREPROCESSOR = {
        className: 'meta',
        begin: '^#',
        end: '$'
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
          PRAGMA,
          PREPROCESSOR,
          {
            className: 'type',
            begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'
          },
          hljs.inherit(hljs.TITLE_MODE, {
            begin: "[_a-z][\\w']*"
          }),
          COMMENT
        ]
      };
      const RECORD = {
        begin: /\{/,
        end: /\}/,
        contains: LIST.contains
      };
      return {
        name: 'Haskell',
        aliases: ['hs'],
        keywords:
          'let in if then else case of where do module import hiding qualified type data newtype deriving class instance as default infix infixl infixr foreign export ccall stdcall cplusplus jvm dotnet safe unsafe family forall mdo proc rec',
        contains: [
          {
            beginKeywords: 'module',
            end: 'where',
            keywords: 'module where',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
          },
          {
            begin: '\\bimport\\b',
            end: '$',
            keywords: 'import qualified as hiding',
            contains: [LIST, COMMENT],
            illegal: '\\W\\.|;'
          },
          {
            className: 'class',
            begin: '^(\\s*)?(class|instance)\\b',
            end: 'where',
            keywords: 'class family instance where',
            contains: [CONSTRUCTOR, LIST, COMMENT]
          },
          {
            className: 'class',
            begin: '\\b(data|(new)?type)\\b',
            end: '$',
            keywords: 'data family type newtype deriving',
            contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
          },
          {
            beginKeywords: 'default',
            end: '$',
            contains: [CONSTRUCTOR, LIST, COMMENT]
          },
          {
            beginKeywords: 'infix infixl infixr',
            end: '$',
            contains: [hljs.C_NUMBER_MODE, COMMENT]
          },
          {
            begin: '\\bforeign\\b',
            end: '$',
            keywords: 'foreign import export ccall stdcall cplusplus jvm dotnet safe unsafe',
            contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]
          },
          {
            className: 'meta',
            begin: '#!\\/usr\\/bin\\/env runhaskell',
            end: '$'
          },
          PRAGMA,
          PREPROCESSOR,
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
        ]
      };
    }
    module.exports = haskell;
  }
});

// esm-build-c33fd2879b79abe7a1c0dc38ab7c95425228a798-f549305f/mod.js
var __module = __toESM(require_haskell());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
