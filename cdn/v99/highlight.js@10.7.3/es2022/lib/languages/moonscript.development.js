/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/moonscript) es2022 development */
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

// esm-build-5439fb5f797cfbff8a5ec3e269e14dfa88f0e708-6843d896/node_modules/highlight.js/lib/languages/moonscript.js
var require_moonscript = __commonJS({
  'esm-build-5439fb5f797cfbff8a5ec3e269e14dfa88f0e708-6843d896/node_modules/highlight.js/lib/languages/moonscript.js'(
    exports,
    module
  ) {
    function moonscript(hljs) {
      const KEYWORDS = {
        keyword:
          'if then not for in while do return else elseif break continue switch and or unless when class extends super local import export from using',
        literal: 'true false nil',
        built_in:
          '_G _VERSION assert collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring module next pairs pcall print rawequal rawget rawset require select setfenv setmetatable tonumber tostring type unpack xpcall coroutine debug io math os package string table'
      };
      const JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      const SUBST = {
        className: 'subst',
        begin: /#\{/,
        end: /\}/,
        keywords: KEYWORDS
      };
      const EXPRESSIONS = [
        hljs.inherit(hljs.C_NUMBER_MODE, {
          starts: {
            end: '(\\s*/)?',
            relevance: 0
          }
        }),
        {
          className: 'string',
          variants: [
            {
              begin: /'/,
              end: /'/,
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: /"/,
              end: /"/,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST]
            }
          ]
        },
        {
          className: 'built_in',
          begin: '@__' + hljs.IDENT_RE
        },
        {
          begin: '@' + hljs.IDENT_RE
        },
        {
          begin: hljs.IDENT_RE + '\\\\' + hljs.IDENT_RE
        }
      ];
      SUBST.contains = EXPRESSIONS;
      const TITLE = hljs.inherit(hljs.TITLE_MODE, {
        begin: JS_IDENT_RE
      });
      const POSSIBLE_PARAMS_RE = '(\\(.*\\)\\s*)?\\B[-=]>';
      const PARAMS = {
        className: 'params',
        begin: '\\([^\\(]',
        returnBegin: true,
        contains: [
          {
            begin: /\(/,
            end: /\)/,
            keywords: KEYWORDS,
            contains: ['self'].concat(EXPRESSIONS)
          }
        ]
      };
      return {
        name: 'MoonScript',
        aliases: ['moon'],
        keywords: KEYWORDS,
        illegal: /\/\*/,
        contains: EXPRESSIONS.concat([
          hljs.COMMENT('--', '$'),
          {
            className: 'function',
            begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + POSSIBLE_PARAMS_RE,
            end: '[-=]>',
            returnBegin: true,
            contains: [TITLE, PARAMS]
          },
          {
            begin: /[\(,:=]\s*/,
            relevance: 0,
            contains: [
              {
                className: 'function',
                begin: POSSIBLE_PARAMS_RE,
                end: '[-=]>',
                returnBegin: true,
                contains: [PARAMS]
              }
            ]
          },
          {
            className: 'class',
            beginKeywords: 'class',
            end: '$',
            illegal: /[:="\[\]]/,
            contains: [
              {
                beginKeywords: 'extends',
                endsWithParent: true,
                illegal: /[:="\[\]]/,
                contains: [TITLE]
              },
              TITLE
            ]
          },
          {
            className: 'name',
            begin: JS_IDENT_RE + ':',
            end: ':',
            returnBegin: true,
            returnEnd: true,
            relevance: 0
          }
        ])
      };
    }
    module.exports = moonscript;
  }
});

// esm-build-5439fb5f797cfbff8a5ec3e269e14dfa88f0e708-6843d896/mod.js
var __module = __toESM(require_moonscript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
