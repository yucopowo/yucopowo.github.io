/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/crystal) es2022 development */
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

// esm-build-26a27e9cca20154adc08f42265e0c1cd32807cc9-9b355c82/node_modules/highlight.js/lib/languages/crystal.js
var require_crystal = __commonJS({
  'esm-build-26a27e9cca20154adc08f42265e0c1cd32807cc9-9b355c82/node_modules/highlight.js/lib/languages/crystal.js'(
    exports,
    module
  ) {
    function crystal(hljs) {
      const INT_SUFFIX = '(_?[ui](8|16|32|64|128))?';
      const FLOAT_SUFFIX = '(_?f(32|64))?';
      const CRYSTAL_IDENT_RE = '[a-zA-Z_]\\w*[!?=]?';
      const CRYSTAL_METHOD_RE =
        '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|[=!]~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~|]|//|//=|&[-+*]=?|&\\*\\*|\\[\\][=?]?';
      const CRYSTAL_PATH_RE = '[A-Za-z_]\\w*(::\\w+)*(\\?|!)?';
      const CRYSTAL_KEYWORDS = {
        $pattern: CRYSTAL_IDENT_RE,
        keyword:
          'abstract alias annotation as as? asm begin break case class def do else elsif end ensure enum extend for fun if include instance_sizeof is_a? lib macro module next nil? of out pointerof private protected rescue responds_to? return require select self sizeof struct super then type typeof union uninitialized unless until verbatim when while with yield __DIR__ __END_LINE__ __FILE__ __LINE__',
        literal: 'false nil true'
      };
      const SUBST = {
        className: 'subst',
        begin: /#\{/,
        end: /\}/,
        keywords: CRYSTAL_KEYWORDS
      };
      const EXPANSION = {
        className: 'template-variable',
        variants: [
          {
            begin: '\\{\\{',
            end: '\\}\\}'
          },
          {
            begin: '\\{%',
            end: '%\\}'
          }
        ],
        keywords: CRYSTAL_KEYWORDS
      };
      function recursiveParen(begin, end) {
        const contains = [
          {
            begin,
            end
          }
        ];
        contains[0].contains = contains;
        return contains;
      }
      const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
        variants: [
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /`/,
            end: /`/
          },
          {
            begin: '%[Qwi]?\\(',
            end: '\\)',
            contains: recursiveParen('\\(', '\\)')
          },
          {
            begin: '%[Qwi]?\\[',
            end: '\\]',
            contains: recursiveParen('\\[', '\\]')
          },
          {
            begin: '%[Qwi]?\\{',
            end: /\}/,
            contains: recursiveParen(/\{/, /\}/)
          },
          {
            begin: '%[Qwi]?<',
            end: '>',
            contains: recursiveParen('<', '>')
          },
          {
            begin: '%[Qwi]?\\|',
            end: '\\|'
          },
          {
            begin: /<<-\w+$/,
            end: /^\s*\w+$/
          }
        ],
        relevance: 0
      };
      const Q_STRING = {
        className: 'string',
        variants: [
          {
            begin: '%q\\(',
            end: '\\)',
            contains: recursiveParen('\\(', '\\)')
          },
          {
            begin: '%q\\[',
            end: '\\]',
            contains: recursiveParen('\\[', '\\]')
          },
          {
            begin: '%q\\{',
            end: /\}/,
            contains: recursiveParen(/\{/, /\}/)
          },
          {
            begin: '%q<',
            end: '>',
            contains: recursiveParen('<', '>')
          },
          {
            begin: '%q\\|',
            end: '\\|'
          },
          {
            begin: /<<-'\w+'$/,
            end: /^\s*\w+$/
          }
        ],
        relevance: 0
      };
      const REGEXP = {
        begin: '(?!%\\})(' + hljs.RE_STARTERS_RE + '|\\n|\\b(case|if|select|unless|until|when|while)\\b)\\s*',
        keywords: 'case if select unless until when while',
        contains: [
          {
            className: 'regexp',
            contains: [hljs.BACKSLASH_ESCAPE, SUBST],
            variants: [
              {
                begin: '//[a-z]*',
                relevance: 0
              },
              {
                begin: '/(?!\\/)',
                end: '/[a-z]*'
              }
            ]
          }
        ],
        relevance: 0
      };
      const REGEXP2 = {
        className: 'regexp',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
        variants: [
          {
            begin: '%r\\(',
            end: '\\)',
            contains: recursiveParen('\\(', '\\)')
          },
          {
            begin: '%r\\[',
            end: '\\]',
            contains: recursiveParen('\\[', '\\]')
          },
          {
            begin: '%r\\{',
            end: /\}/,
            contains: recursiveParen(/\{/, /\}/)
          },
          {
            begin: '%r<',
            end: '>',
            contains: recursiveParen('<', '>')
          },
          {
            begin: '%r\\|',
            end: '\\|'
          }
        ],
        relevance: 0
      };
      const ATTRIBUTE = {
        className: 'meta',
        begin: '@\\[',
        end: '\\]',
        contains: [
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            className: 'meta-string'
          })
        ]
      };
      const CRYSTAL_DEFAULT_CONTAINS = [
        EXPANSION,
        STRING,
        Q_STRING,
        REGEXP2,
        REGEXP,
        ATTRIBUTE,
        hljs.HASH_COMMENT_MODE,
        {
          className: 'class',
          beginKeywords: 'class module struct',
          end: '$|;',
          illegal: /=/,
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.inherit(hljs.TITLE_MODE, {
              begin: CRYSTAL_PATH_RE
            }),
            {
              begin: '<'
            }
          ]
        },
        {
          className: 'class',
          beginKeywords: 'lib enum union',
          end: '$|;',
          illegal: /=/,
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.inherit(hljs.TITLE_MODE, {
              begin: CRYSTAL_PATH_RE
            })
          ]
        },
        {
          beginKeywords: 'annotation',
          end: '$|;',
          illegal: /=/,
          contains: [
            hljs.HASH_COMMENT_MODE,
            hljs.inherit(hljs.TITLE_MODE, {
              begin: CRYSTAL_PATH_RE
            })
          ],
          relevance: 2
        },
        {
          className: 'function',
          beginKeywords: 'def',
          end: /\B\b/,
          contains: [
            hljs.inherit(hljs.TITLE_MODE, {
              begin: CRYSTAL_METHOD_RE,
              endsParent: true
            })
          ]
        },
        {
          className: 'function',
          beginKeywords: 'fun macro',
          end: /\B\b/,
          contains: [
            hljs.inherit(hljs.TITLE_MODE, {
              begin: CRYSTAL_METHOD_RE,
              endsParent: true
            })
          ],
          relevance: 2
        },
        {
          className: 'symbol',
          begin: hljs.UNDERSCORE_IDENT_RE + '(!|\\?)?:',
          relevance: 0
        },
        {
          className: 'symbol',
          begin: ':',
          contains: [
            STRING,
            {
              begin: CRYSTAL_METHOD_RE
            }
          ],
          relevance: 0
        },
        {
          className: 'number',
          variants: [
            {
              begin: '\\b0b([01_]+)' + INT_SUFFIX
            },
            {
              begin: '\\b0o([0-7_]+)' + INT_SUFFIX
            },
            {
              begin: '\\b0x([A-Fa-f0-9_]+)' + INT_SUFFIX
            },
            {
              begin: '\\b([1-9][0-9_]*[0-9]|[0-9])(\\.[0-9][0-9_]*)?([eE]_?[-+]?[0-9_]*)?' + FLOAT_SUFFIX + '(?!_)'
            },
            {
              begin: '\\b([1-9][0-9_]*|0)' + INT_SUFFIX
            }
          ],
          relevance: 0
        }
      ];
      SUBST.contains = CRYSTAL_DEFAULT_CONTAINS;
      EXPANSION.contains = CRYSTAL_DEFAULT_CONTAINS.slice(1);
      return {
        name: 'Crystal',
        aliases: ['cr'],
        keywords: CRYSTAL_KEYWORDS,
        contains: CRYSTAL_DEFAULT_CONTAINS
      };
    }
    module.exports = crystal;
  }
});

// esm-build-26a27e9cca20154adc08f42265e0c1cd32807cc9-9b355c82/mod.js
var __module = __toESM(require_crystal());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
