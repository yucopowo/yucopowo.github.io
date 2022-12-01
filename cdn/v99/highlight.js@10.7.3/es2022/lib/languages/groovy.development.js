/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/groovy) es2022 development */
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

// esm-build-82a42d3c2ac35af601452d5072a368e8efbe700c-7b0271e1/node_modules/highlight.js/lib/languages/groovy.js
var require_groovy = __commonJS({
  'esm-build-82a42d3c2ac35af601452d5072a368e8efbe700c-7b0271e1/node_modules/highlight.js/lib/languages/groovy.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function lookahead(re) {
      return concat('(?=', re, ')');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function variants(variants2, obj = {}) {
      obj.variants = variants2;
      return obj;
    }
    function groovy(hljs) {
      const IDENT_RE = '[A-Za-z0-9_$]+';
      const COMMENT = variants([
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
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
        })
      ]);
      const REGEXP = {
        className: 'regexp',
        begin: /~?\/[^\/\n]+\//,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const NUMBER = variants([hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]);
      const STRING = variants(
        [
          {
            begin: /"""/,
            end: /"""/
          },
          {
            begin: /'''/,
            end: /'''/
          },
          {
            begin: '\\$/',
            end: '/\\$',
            relevance: 10
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ],
        {
          className: 'string'
        }
      );
      return {
        name: 'Groovy',
        keywords: {
          built_in: 'this super',
          literal: 'true false null',
          keyword:
            'byte short char int long boolean float double void def as in assert trait abstract static volatile transient public private protected synchronized final class interface enum if else for while switch case break default continue throw throws try catch finally implements extends new import package return instanceof'
        },
        contains: [
          hljs.SHEBANG({
            binary: 'groovy',
            relevance: 10
          }),
          COMMENT,
          STRING,
          REGEXP,
          NUMBER,
          {
            className: 'class',
            beginKeywords: 'class interface trait enum',
            end: /\{/,
            illegal: ':',
            contains: [
              {
                beginKeywords: 'extends implements'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            className: 'meta',
            begin: '@[A-Za-z]+',
            relevance: 0
          },
          {
            className: 'attr',
            begin: IDENT_RE + '[ 	]*:',
            relevance: 0
          },
          {
            begin: /\?/,
            end: /:/,
            relevance: 0,
            contains: [COMMENT, STRING, REGEXP, NUMBER, 'self']
          },
          {
            className: 'symbol',
            begin: '^[ 	]*' + lookahead(IDENT_RE + ':'),
            excludeBegin: true,
            end: IDENT_RE + ':',
            relevance: 0
          }
        ],
        illegal: /#|<\//
      };
    }
    module.exports = groovy;
  }
});

// esm-build-82a42d3c2ac35af601452d5072a368e8efbe700c-7b0271e1/mod.js
var __module = __toESM(require_groovy());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
