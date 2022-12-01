/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/python) es2022 development */
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

// esm-build-8617ece971ba8056976a747a4d7302db650cf301-de6e7cb2/node_modules/highlight.js/lib/languages/python.js
var require_python = __commonJS({
  'esm-build-8617ece971ba8056976a747a4d7302db650cf301-de6e7cb2/node_modules/highlight.js/lib/languages/python.js'(
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
    function python(hljs) {
      const RESERVED_WORDS = [
        'and',
        'as',
        'assert',
        'async',
        'await',
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'nonlocal|10',
        'not',
        'or',
        'pass',
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield'
      ];
      const BUILT_INS = [
        '__import__',
        'abs',
        'all',
        'any',
        'ascii',
        'bin',
        'bool',
        'breakpoint',
        'bytearray',
        'bytes',
        'callable',
        'chr',
        'classmethod',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'exec',
        'filter',
        'float',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'hex',
        'id',
        'input',
        'int',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'list',
        'locals',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'range',
        'repr',
        'reversed',
        'round',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'vars',
        'zip'
      ];
      const LITERALS = ['__debug__', 'Ellipsis', 'False', 'None', 'NotImplemented', 'True'];
      const TYPES = [
        'Any',
        'Callable',
        'Coroutine',
        'Dict',
        'List',
        'Literal',
        'Generic',
        'Optional',
        'Sequence',
        'Set',
        'Tuple',
        'Type',
        'Union'
      ];
      const KEYWORDS = {
        $pattern: /[A-Za-z]\w+|__\w+__/,
        keyword: RESERVED_WORDS,
        built_in: BUILT_INS,
        literal: LITERALS,
        type: TYPES
      };
      const PROMPT = {
        className: 'meta',
        begin: /^(>>>|\.\.\.) /
      };
      const SUBST = {
        className: 'subst',
        begin: /\{/,
        end: /\}/,
        keywords: KEYWORDS,
        illegal: /#/
      };
      const LITERAL_BRACKET = {
        begin: /\{\{/,
        relevance: 0
      };
      const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
            end: /'''/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
            relevance: 10
          },
          {
            begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
            end: /"""/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT],
            relevance: 10
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'''/,
            end: /'''/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"""/,
            end: /"""/,
            contains: [hljs.BACKSLASH_ESCAPE, PROMPT, LITERAL_BRACKET, SUBST]
          },
          {
            begin: /([uU]|[rR])'/,
            end: /'/,
            relevance: 10
          },
          {
            begin: /([uU]|[rR])"/,
            end: /"/,
            relevance: 10
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])'/,
            end: /'/
          },
          {
            begin: /([bB]|[bB][rR]|[rR][bB])"/,
            end: /"/
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])'/,
            end: /'/,
            contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
          },
          {
            begin: /([fF][rR]|[rR][fF]|[fF])"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE, LITERAL_BRACKET, SUBST]
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE
        ]
      };
      const digitpart = '[0-9](_?[0-9])*';
      const pointfloat = `(\\b(${digitpart}))?\\.(${digitpart})|\\b(${digitpart})\\.`;
      const NUMBER = {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: `(\\b(${digitpart})|(${pointfloat}))[eE][+-]?(${digitpart})[jJ]?\\b`
          },
          {
            begin: `(${pointfloat})[jJ]?`
          },
          {
            begin: '\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?\\b'
          },
          {
            begin: '\\b0[bB](_?[01])+[lL]?\\b'
          },
          {
            begin: '\\b0[oO](_?[0-7])+[lL]?\\b'
          },
          {
            begin: '\\b0[xX](_?[0-9a-fA-F])+[lL]?\\b'
          },
          {
            begin: `\\b(${digitpart})[jJ]\\b`
          }
        ]
      };
      const COMMENT_TYPE = {
        className: 'comment',
        begin: lookahead(/# type:/),
        end: /$/,
        keywords: KEYWORDS,
        contains: [
          {
            begin: /# type:/
          },
          {
            begin: /#/,
            end: /\b\B/,
            endsWithParent: true
          }
        ]
      };
      const PARAMS = {
        className: 'params',
        variants: [
          {
            className: '',
            begin: /\(\s*\)/,
            skip: true
          },
          {
            begin: /\(/,
            end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            keywords: KEYWORDS,
            contains: ['self', PROMPT, NUMBER, STRING, hljs.HASH_COMMENT_MODE]
          }
        ]
      };
      SUBST.contains = [STRING, NUMBER, PROMPT];
      return {
        name: 'Python',
        aliases: ['py', 'gyp', 'ipython'],
        keywords: KEYWORDS,
        illegal: /(<\/|->|\?)|=>/,
        contains: [
          PROMPT,
          NUMBER,
          {
            begin: /\bself\b/
          },
          {
            beginKeywords: 'if',
            relevance: 0
          },
          STRING,
          COMMENT_TYPE,
          hljs.HASH_COMMENT_MODE,
          {
            variants: [
              {
                className: 'function',
                beginKeywords: 'def'
              },
              {
                className: 'class',
                beginKeywords: 'class'
              }
            ],
            end: /:/,
            illegal: /[${=;\n,]/,
            contains: [
              hljs.UNDERSCORE_TITLE_MODE,
              PARAMS,
              {
                begin: /->/,
                endsWithParent: true,
                keywords: KEYWORDS
              }
            ]
          },
          {
            className: 'meta',
            begin: /^[\t ]*@/,
            end: /(?=#)|$/,
            contains: [NUMBER, PARAMS, STRING]
          }
        ]
      };
    }
    module.exports = python;
  }
});

// esm-build-8617ece971ba8056976a747a4d7302db650cf301-de6e7cb2/mod.js
var __module = __toESM(require_python());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
