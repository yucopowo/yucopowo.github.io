/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/aspectj) es2022 development */
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

// esm-build-52ba0fbac812a4250e706f1695bf4dd2011561bb-4950eb9c/node_modules/highlight.js/lib/languages/aspectj.js
var require_aspectj = __commonJS({
  'esm-build-52ba0fbac812a4250e706f1695bf4dd2011561bb-4950eb9c/node_modules/highlight.js/lib/languages/aspectj.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function aspectj(hljs) {
      const KEYWORDS =
        'false synchronized int abstract float private char boolean static null if const for true while long throw strictfp finally protected import native final return void enum else extends implements break transient new catch instanceof byte super volatile case assert short package default double public try this switch continue throws privileged aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization staticinitialization withincode target within execution getWithinTypeName handler thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents warning error soft precedence thisAspectInstance';
      const SHORTKEYS = 'get set args call';
      return {
        name: 'AspectJ',
        keywords: KEYWORDS,
        illegal: /<\/|#/,
        contains: [
          hljs.COMMENT(/\/\*\*/, /\*\//, {
            relevance: 0,
            contains: [
              {
                begin: /\w+@/,
                relevance: 0
              },
              {
                className: 'doctag',
                begin: /@[A-Za-z]+/
              }
            ]
          }),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'class',
            beginKeywords: 'aspect',
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:;"\[\]]/,
            contains: [
              {
                beginKeywords: 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
              },
              hljs.UNDERSCORE_TITLE_MODE,
              {
                begin: /\([^\)]*/,
                end: /[)]+/,
                keywords: KEYWORDS + ' ' + SHORTKEYS,
                excludeEnd: false
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /[{;=]/,
            excludeEnd: true,
            relevance: 0,
            keywords: 'class interface',
            illegal: /[:"\[\]]/,
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            beginKeywords: 'pointcut after before around throwing returning',
            end: /[)]/,
            excludeEnd: false,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                returnBegin: true,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              }
            ]
          },
          {
            begin: /[:]/,
            returnBegin: true,
            end: /[{;]/,
            relevance: 0,
            excludeEnd: false,
            keywords: KEYWORDS,
            illegal: /["\[\]]/,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                keywords: KEYWORDS + ' ' + SHORTKEYS,
                relevance: 0
              },
              hljs.QUOTE_STRING_MODE
            ]
          },
          {
            beginKeywords: 'new throw',
            relevance: 0
          },
          {
            className: 'function',
            begin: /\w+ +\w+(\.\w+)?\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
            returnBegin: true,
            end: /[{;=]/,
            keywords: KEYWORDS,
            excludeEnd: true,
            contains: [
              {
                begin: concat(hljs.UNDERSCORE_IDENT_RE, /\s*\(/),
                returnBegin: true,
                relevance: 0,
                contains: [hljs.UNDERSCORE_TITLE_MODE]
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                relevance: 0,
                keywords: KEYWORDS,
                contains: [hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE, hljs.C_BLOCK_COMMENT_MODE]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: /@[A-Za-z]+/
          }
        ]
      };
    }
    module.exports = aspectj;
  }
});

// esm-build-52ba0fbac812a4250e706f1695bf4dd2011561bb-4950eb9c/mod.js
var __module = __toESM(require_aspectj());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
