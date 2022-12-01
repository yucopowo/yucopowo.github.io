/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/asciidoc) es2022 development */
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

// esm-build-5bd511a3d466fdc62a86ac7106887765cb1fbf37-081f7839/node_modules/highlight.js/lib/languages/asciidoc.js
var require_asciidoc = __commonJS({
  'esm-build-5bd511a3d466fdc62a86ac7106887765cb1fbf37-081f7839/node_modules/highlight.js/lib/languages/asciidoc.js'(
    exports,
    module
  ) {
    function source(re) {
      if (!re) return null;
      if (typeof re === 'string') return re;
      return re.source;
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function asciidoc(hljs) {
      const HORIZONTAL_RULE = {
        begin: "^'{3,}[ \\t]*$",
        relevance: 10
      };
      const ESCAPED_FORMATTING = [
        {
          begin: /\\[*_`]/
        },
        {
          begin: /\\\\\*{2}[^\n]*?\*{2}/
        },
        {
          begin: /\\\\_{2}[^\n]*_{2}/
        },
        {
          begin: /\\\\`{2}[^\n]*`{2}/
        },
        {
          begin: /[:;}][*_`](?![*_`])/
        }
      ];
      const STRONG = [
        {
          className: 'strong',
          begin: /\*{2}([^\n]+?)\*{2}/
        },
        {
          className: 'strong',
          begin: concat(/\*\*/, /((\*(?!\*)|\\[^\n]|[^*\n\\])+\n)+/, /(\*(?!\*)|\\[^\n]|[^*\n\\])*/, /\*\*/),
          relevance: 0
        },
        {
          className: 'strong',
          begin: /\B\*(\S|\S[^\n]*?\S)\*(?!\w)/
        },
        {
          className: 'strong',
          begin: /\*[^\s]([^\n]+\n)+([^\n]+)\*/
        }
      ];
      const EMPHASIS = [
        {
          className: 'emphasis',
          begin: /_{2}([^\n]+?)_{2}/
        },
        {
          className: 'emphasis',
          begin: concat(/__/, /((_(?!_)|\\[^\n]|[^_\n\\])+\n)+/, /(_(?!_)|\\[^\n]|[^_\n\\])*/, /__/),
          relevance: 0
        },
        {
          className: 'emphasis',
          begin: /\b_(\S|\S[^\n]*?\S)_(?!\w)/
        },
        {
          className: 'emphasis',
          begin: /_[^\s]([^\n]+\n)+([^\n]+)_/
        },
        {
          className: 'emphasis',
          begin: "\\B'(?!['\\s])",
          end: "(\\n{2}|')",
          contains: [
            {
              begin: "\\\\'\\w",
              relevance: 0
            }
          ],
          relevance: 0
        }
      ];
      const ADMONITION = {
        className: 'symbol',
        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
        relevance: 10
      };
      const BULLET_LIST = {
        className: 'bullet',
        begin: '^(\\*+|-+|\\.+|[^\\n]+?::)\\s+'
      };
      return {
        name: 'AsciiDoc',
        aliases: ['adoc'],
        contains: [
          hljs.COMMENT('^/{4,}\\n', '\\n/{4,}$', {
            relevance: 10
          }),
          hljs.COMMENT('^//', '$', {
            relevance: 0
          }),
          {
            className: 'title',
            begin: '^\\.\\w.*$'
          },
          {
            begin: '^[=\\*]{4,}\\n',
            end: '\\n^[=\\*]{4,}$',
            relevance: 10
          },
          {
            className: 'section',
            relevance: 10,
            variants: [
              {
                begin: '^(={1,6})[ 	].+?([ 	]\\1)?$'
              },
              {
                begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'
              }
            ]
          },
          {
            className: 'meta',
            begin: '^:.+?:',
            end: '\\s',
            excludeEnd: true,
            relevance: 10
          },
          {
            className: 'meta',
            begin: '^\\[.+?\\]$',
            relevance: 0
          },
          {
            className: 'quote',
            begin: '^_{4,}\\n',
            end: '\\n_{4,}$',
            relevance: 10
          },
          {
            className: 'code',
            begin: '^[\\-\\.]{4,}\\n',
            end: '\\n[\\-\\.]{4,}$',
            relevance: 10
          },
          {
            begin: '^\\+{4,}\\n',
            end: '\\n\\+{4,}$',
            contains: [
              {
                begin: '<',
                end: '>',
                subLanguage: 'xml',
                relevance: 0
              }
            ],
            relevance: 10
          },
          BULLET_LIST,
          ADMONITION,
          ...ESCAPED_FORMATTING,
          ...STRONG,
          ...EMPHASIS,
          {
            className: 'string',
            variants: [
              {
                begin: "``.+?''"
              },
              {
                begin: "`.+?'"
              }
            ]
          },
          {
            className: 'code',
            begin: /`{2}/,
            end: /(\n{2}|`{2})/
          },
          {
            className: 'code',
            begin: '(`.+?`|\\+.+?\\+)',
            relevance: 0
          },
          {
            className: 'code',
            begin: '^[ \\t]',
            end: '$',
            relevance: 0
          },
          HORIZONTAL_RULE,
          {
            begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+?\\[[^[]*?\\]',
            returnBegin: true,
            contains: [
              {
                begin: '(link|image:?):',
                relevance: 0
              },
              {
                className: 'link',
                begin: '\\w',
                end: '[^\\[]+',
                relevance: 0
              },
              {
                className: 'string',
                begin: '\\[',
                end: '\\]',
                excludeBegin: true,
                excludeEnd: true,
                relevance: 0
              }
            ],
            relevance: 10
          }
        ]
      };
    }
    module.exports = asciidoc;
  }
});

// esm-build-5bd511a3d466fdc62a86ac7106887765cb1fbf37-081f7839/mod.js
var __module = __toESM(require_asciidoc());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
