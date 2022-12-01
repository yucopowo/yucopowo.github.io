/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/livescript) es2022 development */
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

// esm-build-88abadd1c0ddc719d1b1afdfcdea7fef7e95481d-57b683f1/node_modules/highlight.js/lib/languages/livescript.js
var require_livescript = __commonJS({
  'esm-build-88abadd1c0ddc719d1b1afdfcdea7fef7e95481d-57b683f1/node_modules/highlight.js/lib/languages/livescript.js'(
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
    function livescript(hljs) {
      const LIVESCRIPT_BUILT_INS = ['npm', 'print'];
      const LIVESCRIPT_LITERALS = ['yes', 'no', 'on', 'off', 'it', 'that', 'void'];
      const LIVESCRIPT_KEYWORDS = [
        'then',
        'unless',
        'until',
        'loop',
        'of',
        'by',
        'when',
        'and',
        'or',
        'is',
        'isnt',
        'not',
        'it',
        'that',
        'otherwise',
        'from',
        'to',
        'til',
        'fallthrough',
        'case',
        'enum',
        'native',
        'list',
        'map',
        '__hasProp',
        '__extends',
        '__slice',
        '__bind',
        '__indexOf'
      ];
      const KEYWORDS$1 = {
        keyword: KEYWORDS.concat(LIVESCRIPT_KEYWORDS),
        literal: LITERALS.concat(LIVESCRIPT_LITERALS),
        built_in: BUILT_INS.concat(LIVESCRIPT_BUILT_INS)
      };
      const JS_IDENT_RE = '[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
      const TITLE = hljs.inherit(hljs.TITLE_MODE, {
        begin: JS_IDENT_RE
      });
      const SUBST = {
        className: 'subst',
        begin: /#\{/,
        end: /\}/,
        keywords: KEYWORDS$1
      };
      const SUBST_SIMPLE = {
        className: 'subst',
        begin: /#[A-Za-z$_]/,
        end: /(?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
        keywords: KEYWORDS$1
      };
      const EXPRESSIONS = [
        hljs.BINARY_NUMBER_MODE,
        {
          className: 'number',
          begin:
            '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
          relevance: 0,
          starts: {
            end: '(\\s*/)?',
            relevance: 0
          }
        },
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
              contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
            },
            {
              begin: /"/,
              end: /"/,
              contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
            },
            {
              begin: /\\/,
              end: /(\s|$)/,
              excludeEnd: true
            }
          ]
        },
        {
          className: 'regexp',
          variants: [
            {
              begin: '//',
              end: '//[gim]*',
              contains: [SUBST, hljs.HASH_COMMENT_MODE]
            },
            {
              begin: /\/(?![ *])(\\.|[^\\\n])*?\/[gim]*(?=\W)/
            }
          ]
        },
        {
          begin: '@' + JS_IDENT_RE
        },
        {
          begin: '``',
          end: '``',
          excludeBegin: true,
          excludeEnd: true,
          subLanguage: 'javascript'
        }
      ];
      SUBST.contains = EXPRESSIONS;
      const PARAMS = {
        className: 'params',
        begin: '\\(',
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
      const SYMBOLS = {
        begin: '(#=>|=>|\\|>>|-?->|!->)'
      };
      return {
        name: 'LiveScript',
        aliases: ['ls'],
        keywords: KEYWORDS$1,
        illegal: /\/\*/,
        contains: EXPRESSIONS.concat([
          hljs.COMMENT('\\/\\*', '\\*\\/'),
          hljs.HASH_COMMENT_MODE,
          SYMBOLS,
          {
            className: 'function',
            contains: [TITLE, PARAMS],
            returnBegin: true,
            variants: [
              {
                begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B->\\*?',
                end: '->\\*?'
              },
              {
                begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\)\\s*)?\\B[-~]{1,2}>\\*?',
                end: '[-~]{1,2}>\\*?'
              },
              {
                begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\)\\s*)?\\B!?[-~]{1,2}>\\*?',
                end: '!?[-~]{1,2}>\\*?'
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
    module.exports = livescript;
  }
});

// esm-build-88abadd1c0ddc719d1b1afdfcdea7fef7e95481d-57b683f1/mod.js
var __module = __toESM(require_livescript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
