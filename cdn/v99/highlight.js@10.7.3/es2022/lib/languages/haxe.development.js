/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/haxe) es2022 development */
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

// esm-build-afb119b333a595c4c8bfb3a3363eb5e98e7f6a05-ffd01087/node_modules/highlight.js/lib/languages/haxe.js
var require_haxe = __commonJS({
  'esm-build-afb119b333a595c4c8bfb3a3363eb5e98e7f6a05-ffd01087/node_modules/highlight.js/lib/languages/haxe.js'(
    exports,
    module
  ) {
    function haxe(hljs) {
      const HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';
      return {
        name: 'Haxe',
        aliases: ['hx'],
        keywords: {
          keyword:
            'break case cast catch continue default do dynamic else enum extern for function here if import in inline never new override package private get set public return static super switch this throw trace try typedef untyped using var while ' +
            HAXE_BASIC_TYPES,
          built_in: 'trace this',
          literal: 'true false null _'
        },
        contains: [
          {
            className: 'string',
            begin: "'",
            end: "'",
            contains: [
              hljs.BACKSLASH_ESCAPE,
              {
                className: 'subst',
                begin: '\\$\\{',
                end: '\\}'
              },
              {
                className: 'subst',
                begin: '\\$',
                end: /\W\}/
              }
            ]
          },
          hljs.QUOTE_STRING_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.C_NUMBER_MODE,
          {
            className: 'meta',
            begin: '@:',
            end: '$'
          },
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword': 'if else elseif end error'
            }
          },
          {
            className: 'type',
            begin: ':[ 	]*',
            end: '[^A-Za-z0-9_ 	\\->]',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          },
          {
            className: 'type',
            begin: ':[ 	]*',
            end: '\\W',
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: 'type',
            begin: 'new *',
            end: '\\W',
            excludeBegin: true,
            excludeEnd: true
          },
          {
            className: 'class',
            beginKeywords: 'enum',
            end: '\\{',
            contains: [hljs.TITLE_MODE]
          },
          {
            className: 'class',
            beginKeywords: 'abstract',
            end: '[\\{$]',
            contains: [
              {
                className: 'type',
                begin: '\\(',
                end: '\\)',
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: 'type',
                begin: 'from +',
                end: '\\W',
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: 'type',
                begin: 'to +',
                end: '\\W',
                excludeBegin: true,
                excludeEnd: true
              },
              hljs.TITLE_MODE
            ],
            keywords: {
              keyword: 'abstract from to'
            }
          },
          {
            className: 'class',
            begin: '\\b(class|interface) +',
            end: '[\\{$]',
            excludeEnd: true,
            keywords: 'class interface',
            contains: [
              {
                className: 'keyword',
                begin: '\\b(extends|implements) +',
                keywords: 'extends implements',
                contains: [
                  {
                    className: 'type',
                    begin: hljs.IDENT_RE,
                    relevance: 0
                  }
                ]
              },
              hljs.TITLE_MODE
            ]
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: '\\(',
            excludeEnd: true,
            illegal: '\\S',
            contains: [hljs.TITLE_MODE]
          }
        ],
        illegal: /<\//
      };
    }
    module.exports = haxe;
  }
});

// esm-build-afb119b333a595c4c8bfb3a3363eb5e98e7f6a05-ffd01087/mod.js
var __module = __toESM(require_haxe());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
