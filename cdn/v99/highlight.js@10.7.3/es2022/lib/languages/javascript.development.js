/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/javascript) es2022 development */
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

// esm-build-a32b71e84d44c9c6785162c13af3de274234c350-f50ef292/node_modules/highlight.js/lib/languages/javascript.js
var require_javascript = __commonJS({
  'esm-build-a32b71e84d44c9c6785162c13af3de274234c350-f50ef292/node_modules/highlight.js/lib/languages/javascript.js'(
    exports,
    module
  ) {
    var IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
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
    function javascript(hljs) {
      const hasClosingTag = (match, { after }) => {
        const tag = '</' + match[0].slice(1);
        const pos = match.input.indexOf(tag, after);
        return pos !== -1;
      };
      const IDENT_RE$1 = IDENT_RE;
      const FRAGMENT = {
        begin: '<>',
        end: '</>'
      };
      const XML_TAG = {
        begin: /<[A-Za-z0-9\\._:-]+/,
        end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
        isTrulyOpeningTag: (match, response) => {
          const afterMatchIndex = match[0].length + match.index;
          const nextChar = match.input[afterMatchIndex];
          if (nextChar === '<') {
            response.ignoreMatch();
            return;
          }
          if (nextChar === '>') {
            if (
              !hasClosingTag(match, {
                after: afterMatchIndex
              })
            ) {
              response.ignoreMatch();
            }
          }
        }
      };
      const KEYWORDS$1 = {
        $pattern: IDENT_RE,
        keyword: KEYWORDS,
        literal: LITERALS,
        built_in: BUILT_INS
      };
      const decimalDigits = '[0-9](_?[0-9])*';
      const frac = `\\.(${decimalDigits})`;
      const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
      const NUMBER = {
        className: 'number',
        variants: [
          {
            begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b`
          },
          {
            begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b`
          },
          {
            begin: `\\b(0|[1-9](_?[0-9])*)n\\b`
          },
          {
            begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b'
          },
          {
            begin: '\\b0[bB][0-1](_?[0-1])*n?\\b'
          },
          {
            begin: '\\b0[oO][0-7](_?[0-7])*n?\\b'
          },
          {
            begin: '\\b0[0-7]+n?\\b'
          }
        ],
        relevance: 0
      };
      const SUBST = {
        className: 'subst',
        begin: '\\$\\{',
        end: '\\}',
        keywords: KEYWORDS$1,
        contains: []
      };
      const HTML_TEMPLATE = {
        begin: 'html`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'xml'
        }
      };
      const CSS_TEMPLATE = {
        begin: 'css`',
        end: '',
        starts: {
          end: '`',
          returnEnd: false,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          subLanguage: 'css'
        }
      };
      const TEMPLATE_STRING = {
        className: 'string',
        begin: '`',
        end: '`',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      };
      const JSDOC_COMMENT = hljs.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
        relevance: 0,
        contains: [
          {
            className: 'doctag',
            begin: '@[A-Za-z]+',
            contains: [
              {
                className: 'type',
                begin: '\\{',
                end: '\\}',
                relevance: 0
              },
              {
                className: 'variable',
                begin: IDENT_RE$1 + '(?=\\s*(-)|$)',
                endsParent: true,
                relevance: 0
              },
              {
                begin: /(?=[^\n])\s/,
                relevance: 0
              }
            ]
          }
        ]
      });
      const COMMENT = {
        className: 'comment',
        variants: [JSDOC_COMMENT, hljs.C_BLOCK_COMMENT_MODE, hljs.C_LINE_COMMENT_MODE]
      };
      const SUBST_INTERNALS = [
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        HTML_TEMPLATE,
        CSS_TEMPLATE,
        TEMPLATE_STRING,
        NUMBER,
        hljs.REGEXP_MODE
      ];
      SUBST.contains = SUBST_INTERNALS.concat({
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS$1,
        contains: ['self'].concat(SUBST_INTERNALS)
      });
      const SUBST_AND_COMMENTS = [].concat(COMMENT, SUBST.contains);
      const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
        {
          begin: /\(/,
          end: /\)/,
          keywords: KEYWORDS$1,
          contains: ['self'].concat(SUBST_AND_COMMENTS)
        }
      ]);
      const PARAMS = {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        keywords: KEYWORDS$1,
        contains: PARAMS_CONTAINS
      };
      return {
        name: 'Javascript',
        aliases: ['js', 'jsx', 'mjs', 'cjs'],
        keywords: KEYWORDS$1,
        exports: {
          PARAMS_CONTAINS
        },
        illegal: /#(?![$_A-z])/,
        contains: [
          hljs.SHEBANG({
            label: 'shebang',
            binary: 'node',
            relevance: 5
          }),
          {
            label: 'use_strict',
            className: 'meta',
            relevance: 10,
            begin: /^\s*['"]use (strict|asm)['"]/
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          HTML_TEMPLATE,
          CSS_TEMPLATE,
          TEMPLATE_STRING,
          COMMENT,
          NUMBER,
          {
            begin: concat(
              /[{,\n]\s*/,
              lookahead(concat(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/, IDENT_RE$1 + '\\s*:'))
            ),
            relevance: 0,
            contains: [
              {
                className: 'attr',
                begin: IDENT_RE$1 + lookahead('\\s*:'),
                relevance: 0
              }
            ]
          },
          {
            begin: '(' + hljs.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
            keywords: 'return throw case',
            contains: [
              COMMENT,
              hljs.REGEXP_MODE,
              {
                className: 'function',
                begin:
                  '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' + hljs.UNDERSCORE_IDENT_RE + ')\\s*=>',
                returnBegin: true,
                end: '\\s*=>',
                contains: [
                  {
                    className: 'params',
                    variants: [
                      {
                        begin: hljs.UNDERSCORE_IDENT_RE,
                        relevance: 0
                      },
                      {
                        className: null,
                        begin: /\(\s*\)/,
                        skip: true
                      },
                      {
                        begin: /\(/,
                        end: /\)/,
                        excludeBegin: true,
                        excludeEnd: true,
                        keywords: KEYWORDS$1,
                        contains: PARAMS_CONTAINS
                      }
                    ]
                  }
                ]
              },
              {
                begin: /,/,
                relevance: 0
              },
              {
                className: '',
                begin: /\s/,
                end: /\s*/,
                skip: true
              },
              {
                variants: [
                  {
                    begin: FRAGMENT.begin,
                    end: FRAGMENT.end
                  },
                  {
                    begin: XML_TAG.begin,
                    'on:begin': XML_TAG.isTrulyOpeningTag,
                    end: XML_TAG.end
                  }
                ],
                subLanguage: 'xml',
                contains: [
                  {
                    begin: XML_TAG.begin,
                    end: XML_TAG.end,
                    skip: true,
                    contains: ['self']
                  }
                ]
              }
            ],
            relevance: 0
          },
          {
            className: 'function',
            beginKeywords: 'function',
            end: /[{;]/,
            excludeEnd: true,
            keywords: KEYWORDS$1,
            contains: [
              'self',
              hljs.inherit(hljs.TITLE_MODE, {
                begin: IDENT_RE$1
              }),
              PARAMS
            ],
            illegal: /%/
          },
          {
            beginKeywords: 'while if switch catch for'
          },
          {
            className: 'function',
            begin: hljs.UNDERSCORE_IDENT_RE + '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
            returnBegin: true,
            contains: [
              PARAMS,
              hljs.inherit(hljs.TITLE_MODE, {
                begin: IDENT_RE$1
              })
            ]
          },
          {
            variants: [
              {
                begin: '\\.' + IDENT_RE$1
              },
              {
                begin: '\\$' + IDENT_RE$1
              }
            ],
            relevance: 0
          },
          {
            className: 'class',
            beginKeywords: 'class',
            end: /[{;=]/,
            excludeEnd: true,
            illegal: /[:"[\]]/,
            contains: [
              {
                beginKeywords: 'extends'
              },
              hljs.UNDERSCORE_TITLE_MODE
            ]
          },
          {
            begin: /\b(?=constructor)/,
            end: /[{;]/,
            excludeEnd: true,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: IDENT_RE$1
              }),
              'self',
              PARAMS
            ]
          },
          {
            begin: '(get|set)\\s+(?=' + IDENT_RE$1 + '\\()',
            end: /\{/,
            keywords: 'get set',
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                begin: IDENT_RE$1
              }),
              {
                begin: /\(\)/
              },
              PARAMS
            ]
          },
          {
            begin: /\$[(.]/
          }
        ]
      };
    }
    module.exports = javascript;
  }
});

// esm-build-a32b71e84d44c9c6785162c13af3de274234c350-f50ef292/mod.js
var __module = __toESM(require_javascript());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };