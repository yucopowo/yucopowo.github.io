/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/coffeescript) es2022 development */
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

// esm-build-bfeff331d6914f0cc57cba66c0b92c8cc36c8d7d-f5f9ae8f/node_modules/highlight.js/lib/languages/coffeescript.js
var require_coffeescript = __commonJS({
  'esm-build-bfeff331d6914f0cc57cba66c0b92c8cc36c8d7d-f5f9ae8f/node_modules/highlight.js/lib/languages/coffeescript.js'(
    exports,
    module
  ) {
    var KEYWORDS = [
      'as',
      'in',
      'of',
      'if',
      'for',
      'while',
      'finally',
      'var',
      'new',
      'function',
      'do',
      'return',
      'void',
      'else',
      'break',
      'catch',
      'instanceof',
      'with',
      'throw',
      'case',
      'default',
      'try',
      'switch',
      'continue',
      'typeof',
      'delete',
      'let',
      'yield',
      'const',
      'class',
      'debugger',
      'async',
      'await',
      'static',
      'import',
      'from',
      'export',
      'extends'
    ];
    var LITERALS = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'];
    var TYPES = [
      'Intl',
      'DataView',
      'Number',
      'Math',
      'Date',
      'String',
      'RegExp',
      'Object',
      'Function',
      'Boolean',
      'Error',
      'Symbol',
      'Set',
      'Map',
      'WeakSet',
      'WeakMap',
      'Proxy',
      'Reflect',
      'JSON',
      'Promise',
      'Float64Array',
      'Int16Array',
      'Int32Array',
      'Int8Array',
      'Uint16Array',
      'Uint32Array',
      'Float32Array',
      'Array',
      'Uint8Array',
      'Uint8ClampedArray',
      'ArrayBuffer',
      'BigInt64Array',
      'BigUint64Array',
      'BigInt'
    ];
    var ERROR_TYPES = [
      'EvalError',
      'InternalError',
      'RangeError',
      'ReferenceError',
      'SyntaxError',
      'TypeError',
      'URIError'
    ];
    var BUILT_IN_GLOBALS = [
      'setInterval',
      'setTimeout',
      'clearInterval',
      'clearTimeout',
      'require',
      'exports',
      'eval',
      'isFinite',
      'isNaN',
      'parseFloat',
      'parseInt',
      'decodeURI',
      'decodeURIComponent',
      'encodeURI',
      'encodeURIComponent',
      'escape',
      'unescape'
    ];
    var BUILT_IN_VARIABLES = [
      'arguments',
      'this',
      'super',
      'console',
      'window',
      'document',
      'localStorage',
      'module',
      'global'
    ];
    var BUILT_INS = [].concat(BUILT_IN_GLOBALS, BUILT_IN_VARIABLES, TYPES, ERROR_TYPES);
    function coffeescript(hljs) {
      const COFFEE_BUILT_INS = ['npm', 'print'];
      const COFFEE_LITERALS = ['yes', 'no', 'on', 'off'];
      const COFFEE_KEYWORDS = ['then', 'unless', 'until', 'loop', 'by', 'when', 'and', 'or', 'is', 'isnt', 'not'];
      const NOT_VALID_KEYWORDS = ['var', 'const', 'let', 'function', 'static'];
      const excluding = list => kw => !list.includes(kw);
      const KEYWORDS$1 = {
        keyword: KEYWORDS.concat(COFFEE_KEYWORDS).filter(excluding(NOT_VALID_KEYWORDS)),
        literal: LITERALS.concat(COFFEE_LITERALS),
        built_in: BUILT_INS.concat(COFFEE_BUILT_INS)
      };
      const JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
      const SUBST = {
        className: 'subst',
        begin: /#\{/,
        end: /\}/,
        keywords: KEYWORDS$1
      };
      const EXPRESSIONS = [
        hljs.BINARY_NUMBER_MODE,
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
              begin: /'''/,
              end: /'''/,
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: /'/,
              end: /'/,
              contains: [hljs.BACKSLASH_ESCAPE]
            },
            {
              begin: /"""/,
              end: /"""/,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST]
            },
            {
              begin: /"/,
              end: /"/,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST]
            }
          ]
        },
        {
          className: 'regexp',
          variants: [
            {
              begin: '///',
              end: '///',
              contains: [SUBST, hljs.HASH_COMMENT_MODE]
            },
            {
              begin: '//[gim]{0,3}(?=\\W)',
              relevance: 0
            },
            {
              begin: /\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/
            }
          ]
        },
        {
          begin: '@' + JS_IDENT_RE
        },
        {
          subLanguage: 'javascript',
          excludeBegin: true,
          excludeEnd: true,
          variants: [
            {
              begin: '```',
              end: '```'
            },
            {
              begin: '`',
              end: '`'
            }
          ]
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
            keywords: KEYWORDS$1,
            contains: ['self'].concat(EXPRESSIONS)
          }
        ]
      };
      return {
        name: 'CoffeeScript',
        aliases: ['coffee', 'cson', 'iced'],
        keywords: KEYWORDS$1,
        illegal: /\/\*/,
        contains: EXPRESSIONS.concat([
          hljs.COMMENT('###', '###'),
          hljs.HASH_COMMENT_MODE,
          {
            className: 'function',
            begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + POSSIBLE_PARAMS_RE,
            end: '[-=]>',
            returnBegin: true,
            contains: [TITLE, PARAMS]
          },
          {
            begin: /[:\(,=]\s*/,
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
            begin: JS_IDENT_RE + ':',
            end: ':',
            returnBegin: true,
            returnEnd: true,
            relevance: 0
          }
        ])
      };
    }
    module.exports = coffeescript;
  }
});

// esm-build-bfeff331d6914f0cc57cba66c0b92c8cc36c8d7d-f5f9ae8f/mod.js
var __module = __toESM(require_coffeescript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };