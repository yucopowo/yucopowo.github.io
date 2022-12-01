/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/java) es2022 development */
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

// esm-build-9fc017b2b879e847aa4bed23e4fd1ca433aafe9d-5ba1b09a/node_modules/highlight.js/lib/languages/java.js
var require_java = __commonJS({
  'esm-build-9fc017b2b879e847aa4bed23e4fd1ca433aafe9d-5ba1b09a/node_modules/highlight.js/lib/languages/java.js'(
    exports,
    module
  ) {
    var decimalDigits = '[0-9](_*[0-9])*';
    var frac = `\\.(${decimalDigits})`;
    var hexDigits = '[0-9a-fA-F](_*[0-9a-fA-F])*';
    var NUMERIC = {
      className: 'number',
      variants: [
        {
          begin: `(\\b(${decimalDigits})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})[fFdD]?\\b`
        },
        {
          begin: `\\b(${decimalDigits})((${frac})[fFdD]?\\b|\\.([fFdD]\\b)?)`
        },
        {
          begin: `(${frac})[fFdD]?\\b`
        },
        {
          begin: `\\b(${decimalDigits})[fFdD]\\b`
        },
        {
          begin: `\\b0[xX]((${hexDigits})\\.?|(${hexDigits})?\\.(${hexDigits}))[pP][+-]?(${decimalDigits})[fFdD]?\\b`
        },
        {
          begin: '\\b(0|[1-9](_*[0-9])*)[lL]?\\b'
        },
        {
          begin: `\\b0[xX](${hexDigits})[lL]?\\b`
        },
        {
          begin: '\\b0(_*[0-7])*[lL]?\\b'
        },
        {
          begin: '\\b0[bB][01](_*[01])*[lL]?\\b'
        }
      ],
      relevance: 0
    };
    function java(hljs) {
      var JAVA_IDENT_RE = '[\xC0-\u02B8a-zA-Z_$][\xC0-\u02B8a-zA-Z_$0-9]*';
      var GENERIC_IDENT_RE = JAVA_IDENT_RE + '(<' + JAVA_IDENT_RE + '(\\s*,\\s*' + JAVA_IDENT_RE + ')*>)?';
      var KEYWORDS =
        'false synchronized int abstract float private char boolean var static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do';
      var ANNOTATION = {
        className: 'meta',
        begin: '@' + JAVA_IDENT_RE,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            contains: ['self']
          }
        ]
      };
      const NUMBER = NUMERIC;
      return {
        name: 'Java',
        aliases: ['jsp'],
        keywords: KEYWORDS,
        illegal: /<\/|#/,
        contains: [
          hljs.COMMENT('/\\*\\*', '\\*/', {
            relevance: 0,
            contains: [
              {
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: 'doctag',
                begin: '@[A-Za-z]+'
              }
            ]
          }),
          {
            begin: /import java\.[a-z]+\./,
            keywords: 'import',
            relevance: 2
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'class',
            beginKeywords: 'class interface enum',
            end: /[{;=]/,
            excludeEnd: true,
            relevance: 1,
            keywords: 'class interface enum',
            illegal: /[:"\[\]]/,
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: 'new throw return else',
            relevance: 0
          },
          {
            className: 'class',
            begin: 'record\\s+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: true,
            excludeEnd: true,
            end: /[{;=]/,
            keywords: KEYWORDS,
            contains: [
              {
                beginKeywords: 'record'
              },
              {
                begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: true,
                relevance: 0,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [hljs.C_BLOCK_COMMENT_MODE]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            className: 'function',
            begin: '(' + GENERIC_IDENT_RE + '\\s+)+' + hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin: true,
            end: /[{;=]/,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              {
                begin: hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
                returnBegin: true,
                relevance: 0,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [ANNOTATION, hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, NUMBER, hljs.C_BLOCK_COMMENT_MODE]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          NUMBER,
          ANNOTATION
        ]
      };
    }
    module.exports = java;
  }
});

// esm-build-9fc017b2b879e847aa4bed23e4fd1ca433aafe9d-5ba1b09a/mod.js
var __module = __toESM(require_java());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
