/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/actionscript) es2022 development */
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

// esm-build-739e6769496f9590b9b1153842ade491f4ff2586-db10bcad/node_modules/highlight.js/lib/languages/actionscript.js
var require_actionscript = __commonJS({
  'esm-build-739e6769496f9590b9b1153842ade491f4ff2586-db10bcad/node_modules/highlight.js/lib/languages/actionscript.js'(
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
    function actionscript(hljs) {
      const IDENT_RE = /[a-zA-Z_$][a-zA-Z0-9_$]*/;
      const IDENT_FUNC_RETURN_TYPE_RE = /([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)/;
      const AS3_REST_ARG_MODE = {
        className: 'rest_arg',
        begin: /[.]{3}/,
        end: IDENT_RE,
        relevance: 10
      };
      return {
        name: 'ActionScript',
        aliases: ['as'],
        keywords: {
          keyword:
            'as break case catch class const continue default delete do dynamic each else extends final finally for function get if implements import in include instanceof interface internal is namespace native new override package private protected public return set static super switch this throw try typeof use var void while with',
          literal: 'true false null undefined'
        },
        contains: [
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'class',
            beginKeywords: 'package',
            end: /\{/,
            contains: [hljs.TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'class interface',
            end: /\{/,
            excludeEnd: true,
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.TITLE_MODE
            ]
          },
          {
            className: 'meta',
            beginKeywords: 'import include',
            end: /;/,
            keywords: {
              'meta-keyword': 'import include'
            }
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /[{;]/,
            excludeEnd: true,
            illegal: /\S/,
            contains: [
              hljs.TITLE_MODE,
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                contains: [
                  hljs.APOS_STRING_MODE,
                  hljs.QUOTE_STRING_MODE,
                  hljs.C_LINE_COMMENT_MODE,
                  hljs.C_BLOCK_COMMENT_MODE,
                  AS3_REST_ARG_MODE
                ]
              },
              {
                begin: concat(/:\s*/, IDENT_FUNC_RETURN_TYPE_RE)
              }
            ]
          },
          hljs.METHOD_GUARD
        ],
        illegal: /#/
      };
    }
    module.exports = actionscript;
  }
});

// esm-build-739e6769496f9590b9b1153842ade491f4ff2586-db10bcad/mod.js
var __module = __toESM(require_actionscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
