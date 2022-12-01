/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/elixir) es2022 development */
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

// esm-build-fb884968b2233553ef71ca91ffafdca68346ab15-393ea97c/node_modules/highlight.js/lib/languages/elixir.js
var require_elixir = __commonJS({
  'esm-build-fb884968b2233553ef71ca91ffafdca68346ab15-393ea97c/node_modules/highlight.js/lib/languages/elixir.js'(
    exports,
    module
  ) {
    function elixir(hljs) {
      const ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*(!|\\?)?';
      const ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
      const ELIXIR_KEYWORDS = {
        $pattern: ELIXIR_IDENT_RE,
        keyword:
          'and false then defined module in return redo retry end for true self when next until do begin unless nil break not case cond alias while ensure or include use alias fn quote require import with|0'
      };
      const SUBST = {
        className: 'subst',
        begin: /#\{/,
        end: /\}/,
        keywords: ELIXIR_KEYWORDS
      };
      const NUMBER = {
        className: 'number',
        begin: '(\\b0o[0-7_]+)|(\\b0b[01_]+)|(\\b0x[0-9a-fA-F_]+)|(-?\\b[1-9][0-9_]*(\\.[0-9_]+([eE][-+]?[0-9]+)?)?)',
        relevance: 0
      };
      const SIGIL_DELIMITERS = `[/|([{<"']`;
      const LOWERCASE_SIGIL = {
        className: 'string',
        begin: '~[a-z](?=' + SIGIL_DELIMITERS + ')',
        contains: [
          {
            endsParent: true,
            contains: [
              {
                contains: [hljs.BACKSLASH_ESCAPE, SUBST],
                variants: [
                  {
                    begin: /"/,
                    end: /"/
                  },
                  {
                    begin: /'/,
                    end: /'/
                  },
                  {
                    begin: /\//,
                    end: /\//
                  },
                  {
                    begin: /\|/,
                    end: /\|/
                  },
                  {
                    begin: /\(/,
                    end: /\)/
                  },
                  {
                    begin: /\[/,
                    end: /\]/
                  },
                  {
                    begin: /\{/,
                    end: /\}/
                  },
                  {
                    begin: /</,
                    end: />/
                  }
                ]
              }
            ]
          }
        ]
      };
      const UPCASE_SIGIL = {
        className: 'string',
        begin: '~[A-Z](?=' + SIGIL_DELIMITERS + ')',
        contains: [
          {
            begin: /"/,
            end: /"/
          },
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /\//,
            end: /\//
          },
          {
            begin: /\|/,
            end: /\|/
          },
          {
            begin: /\(/,
            end: /\)/
          },
          {
            begin: /\[/,
            end: /\]/
          },
          {
            begin: /\{/,
            end: /\}/
          },
          {
            begin: /</,
            end: />/
          }
        ]
      };
      const STRING = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST],
        variants: [
          {
            begin: /"""/,
            end: /"""/
          },
          {
            begin: /'''/,
            end: /'''/
          },
          {
            begin: /~S"""/,
            end: /"""/,
            contains: []
          },
          {
            begin: /~S"/,
            end: /"/,
            contains: []
          },
          {
            begin: /~S'''/,
            end: /'''/,
            contains: []
          },
          {
            begin: /~S'/,
            end: /'/,
            contains: []
          },
          {
            begin: /'/,
            end: /'/
          },
          {
            begin: /"/,
            end: /"/
          }
        ]
      };
      const FUNCTION = {
        className: 'function',
        beginKeywords: 'def defp defmacro',
        end: /\B\b/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: ELIXIR_IDENT_RE,
            endsParent: true
          })
        ]
      };
      const CLASS = hljs.inherit(FUNCTION, {
        className: 'class',
        beginKeywords: 'defimpl defmodule defprotocol defrecord',
        end: /\bdo\b|$|;/
      });
      const ELIXIR_DEFAULT_CONTAINS = [
        STRING,
        UPCASE_SIGIL,
        LOWERCASE_SIGIL,
        hljs.HASH_COMMENT_MODE,
        CLASS,
        FUNCTION,
        {
          begin: '::'
        },
        {
          className: 'symbol',
          begin: ':(?![\\s:])',
          contains: [
            STRING,
            {
              begin: ELIXIR_METHOD_RE
            }
          ],
          relevance: 0
        },
        {
          className: 'symbol',
          begin: ELIXIR_IDENT_RE + ':(?!:)',
          relevance: 0
        },
        NUMBER,
        {
          className: 'variable',
          begin: '(\\$\\W)|((\\$|@@?)(\\w+))'
        },
        {
          begin: '->'
        },
        {
          begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
          contains: [
            hljs.HASH_COMMENT_MODE,
            {
              begin: /\/: (?=\d+\s*[,\]])/,
              relevance: 0,
              contains: [NUMBER]
            },
            {
              className: 'regexp',
              illegal: '\\n',
              contains: [hljs.BACKSLASH_ESCAPE, SUBST],
              variants: [
                {
                  begin: '/',
                  end: '/[a-z]*'
                },
                {
                  begin: '%r\\[',
                  end: '\\][a-z]*'
                }
              ]
            }
          ],
          relevance: 0
        }
      ];
      SUBST.contains = ELIXIR_DEFAULT_CONTAINS;
      return {
        name: 'Elixir',
        keywords: ELIXIR_KEYWORDS,
        contains: ELIXIR_DEFAULT_CONTAINS
      };
    }
    module.exports = elixir;
  }
});

// esm-build-fb884968b2233553ef71ca91ffafdca68346ab15-393ea97c/mod.js
var __module = __toESM(require_elixir());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
