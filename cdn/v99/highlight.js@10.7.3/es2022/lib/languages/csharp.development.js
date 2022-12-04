/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/csharp) es2022 development */
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

// esm-build-8b5c4a9ddc08f304913767afe976932b9b40013f-b3031032/node_modules/highlight.js/lib/languages/csharp.js
var require_csharp = __commonJS({
  'esm-build-8b5c4a9ddc08f304913767afe976932b9b40013f-b3031032/node_modules/highlight.js/lib/languages/csharp.js'(
    exports,
    module
  ) {
    function csharp(hljs) {
      const BUILT_IN_KEYWORDS = [
        'bool',
        'byte',
        'char',
        'decimal',
        'delegate',
        'double',
        'dynamic',
        'enum',
        'float',
        'int',
        'long',
        'nint',
        'nuint',
        'object',
        'sbyte',
        'short',
        'string',
        'ulong',
        'uint',
        'ushort'
      ];
      const FUNCTION_MODIFIERS = [
        'public',
        'private',
        'protected',
        'static',
        'internal',
        'protected',
        'abstract',
        'async',
        'extern',
        'override',
        'unsafe',
        'virtual',
        'new',
        'sealed',
        'partial'
      ];
      const LITERAL_KEYWORDS = ['default', 'false', 'null', 'true'];
      const NORMAL_KEYWORDS = [
        'abstract',
        'as',
        'base',
        'break',
        'case',
        'class',
        'const',
        'continue',
        'do',
        'else',
        'event',
        'explicit',
        'extern',
        'finally',
        'fixed',
        'for',
        'foreach',
        'goto',
        'if',
        'implicit',
        'in',
        'interface',
        'internal',
        'is',
        'lock',
        'namespace',
        'new',
        'operator',
        'out',
        'override',
        'params',
        'private',
        'protected',
        'public',
        'readonly',
        'record',
        'ref',
        'return',
        'sealed',
        'sizeof',
        'stackalloc',
        'static',
        'struct',
        'switch',
        'this',
        'throw',
        'try',
        'typeof',
        'unchecked',
        'unsafe',
        'using',
        'virtual',
        'void',
        'volatile',
        'while'
      ];
      const CONTEXTUAL_KEYWORDS = [
        'add',
        'alias',
        'and',
        'ascending',
        'async',
        'await',
        'by',
        'descending',
        'equals',
        'from',
        'get',
        'global',
        'group',
        'init',
        'into',
        'join',
        'let',
        'nameof',
        'not',
        'notnull',
        'on',
        'or',
        'orderby',
        'partial',
        'remove',
        'select',
        'set',
        'unmanaged',
        'value|0',
        'var',
        'when',
        'where',
        'with',
        'yield'
      ];
      const KEYWORDS = {
        keyword: NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),
        built_in: BUILT_IN_KEYWORDS,
        literal: LITERAL_KEYWORDS
      };
      const TITLE_MODE = hljs.inherit(hljs.TITLE_MODE, {
        begin: '[a-zA-Z](\\.?\\w)*'
      });
      const NUMBERS = {
        className: 'number',
        variants: [
          {
            begin: "\\b(0b[01']+)"
          },
          {
            begin: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
          },
          {
            begin: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
          }
        ],
        relevance: 0
      };
      const VERBATIM_STRING = {
        className: 'string',
        begin: '@"',
        end: '"',
        contains: [
          {
            begin: '""'
          }
        ]
      };
      const VERBATIM_STRING_NO_LF = hljs.inherit(VERBATIM_STRING, {
        illegal: /\n/
      });
      const SUBST = {
        className: 'subst',
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS
      };
      const SUBST_NO_LF = hljs.inherit(SUBST, {
        illegal: /\n/
      });
      const INTERPOLATED_STRING = {
        className: 'string',
        begin: /\$"/,
        end: '"',
        illegal: /\n/,
        contains: [
          {
            begin: /\{\{/
          },
          {
            begin: /\}\}/
          },
          hljs.BACKSLASH_ESCAPE,
          SUBST_NO_LF
        ]
      };
      const INTERPOLATED_VERBATIM_STRING = {
        className: 'string',
        begin: /\$@"/,
        end: '"',
        contains: [
          {
            begin: /\{\{/
          },
          {
            begin: /\}\}/
          },
          {
            begin: '""'
          },
          SUBST
        ]
      };
      const INTERPOLATED_VERBATIM_STRING_NO_LF = hljs.inherit(INTERPOLATED_VERBATIM_STRING, {
        illegal: /\n/,
        contains: [
          {
            begin: /\{\{/
          },
          {
            begin: /\}\}/
          },
          {
            begin: '""'
          },
          SUBST_NO_LF
        ]
      });
      SUBST.contains = [
        INTERPOLATED_VERBATIM_STRING,
        INTERPOLATED_STRING,
        VERBATIM_STRING,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.C_BLOCK_COMMENT_MODE
      ];
      SUBST_NO_LF.contains = [
        INTERPOLATED_VERBATIM_STRING_NO_LF,
        INTERPOLATED_STRING,
        VERBATIM_STRING_NO_LF,
        hljs.APOS_STRING_MODE,
        hljs.QUOTE_STRING_MODE,
        NUMBERS,
        hljs.inherit(hljs.C_BLOCK_COMMENT_MODE, {
          illegal: /\n/
        })
      ];
      const STRING = {
        variants: [
          INTERPOLATED_VERBATIM_STRING,
          INTERPOLATED_STRING,
          VERBATIM_STRING,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      const GENERIC_MODIFIER = {
        begin: '<',
        end: '>',
        contains: [
          {
            beginKeywords: 'in out'
          },
          TITLE_MODE
        ]
      };
      const TYPE_IDENT_RE = hljs.IDENT_RE + '(<' + hljs.IDENT_RE + '(\\s*,\\s*' + hljs.IDENT_RE + ')*>)?(\\[\\])?';
      const AT_IDENTIFIER = {
        begin: '@' + hljs.IDENT_RE,
        relevance: 0
      };
      return {
        name: 'C#',
        aliases: ['cs', 'c#'],
        keywords: KEYWORDS,
        illegal: /::/,
        contains: [
          hljs.COMMENT('///', '$', {
            returnBegin: true,
            contains: [
              {
                className: 'doctag',
                variants: [
                  {
                    begin: '///',
                    relevance: 0
                  },
                  {
                    begin: '<!--|-->'
                  },
                  {
                    begin: '</?',
                    end: '>'
                  }
                ]
              }
            ]
          }),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'meta',
            begin: '#',
            end: '$',
            keywords: {
              'meta-keyword': 'if else elif endif define undef warning error line region endregion pragma checksum'
            }
          },
          STRING,
          NUMBERS,
          {
            beginKeywords: 'class interface',
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:,]/,
            contains: [
              {
                beginKeywords: 'where class'
              },
              TITLE_MODE,
              GENERIC_MODIFIER,
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          {
            beginKeywords: 'namespace',
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [TITLE_MODE, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
          },
          {
            beginKeywords: 'record',
            relevance: 0,
            end: /[{;=]/,
            illegal: /[^\s:]/,
            contains: [TITLE_MODE, GENERIC_MODIFIER, hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE]
          },
          {
            className: 'meta',
            begin: '^\\s*\\[',
            excludeBegin: true,
            end: '\\]',
            excludeEnd: true,
            contains: [
              {
                className: 'meta-string',
                begin: /"/,
                end: /"/
              }
            ]
          },
          {
            beginKeywords: 'new return throw await else',
            relevance: 0
          },
          {
            className: 'function',
            begin: '(' + TYPE_IDENT_RE + '\\s+)+' + hljs.IDENT_RE + '\\s*(<.+>\\s*)?\\(',
            returnBegin: true,
            end: /\s*[{;=]/,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: [
              {
                beginKeywords: FUNCTION_MODIFIERS.join(' '),
                relevance: 0
              },
              {
                begin: hljs.IDENT_RE + '\\s*(<.+>\\s*)?\\(',
                returnBegin: true,
                contains: [hljs.TITLE_MODE, GENERIC_MODIFIER],
                relevance: 0
              },
              {
                className: 'params',
                begin: /\(/,
                end: /\)/,
                excludeBegin: true,
                excludeEnd: true,
                keywords: KEYWORDS,
                relevance: 0,
                contains: [STRING, NUMBERS, hljs.C_BLOCK_COMMENT_MODE]
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          AT_IDENTIFIER
        ]
      };
    }
    module.exports = csharp;
  }
});

// esm-build-8b5c4a9ddc08f304913767afe976932b9b40013f-b3031032/mod.js
var __module = __toESM(require_csharp());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };