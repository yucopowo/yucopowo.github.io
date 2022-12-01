/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/xml) es2022 development */
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

// esm-build-1fb6d84be59e73941ab320bc745976c9b092e461-45f0e201/node_modules/highlight.js/lib/languages/xml.js
var require_xml = __commonJS({
  'esm-build-1fb6d84be59e73941ab320bc745976c9b092e461-45f0e201/node_modules/highlight.js/lib/languages/xml.js'(
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
    function optional(re) {
      return concat('(', re, ')?');
    }
    function concat(...args) {
      const joined = args.map(x => source(x)).join('');
      return joined;
    }
    function either(...args) {
      const joined = '(' + args.map(x => source(x)).join('|') + ')';
      return joined;
    }
    function xml(hljs) {
      const TAG_NAME_RE = concat(/[A-Z_]/, optional(/[A-Z0-9_.-]*:/), /[A-Z0-9_.-]*/);
      const XML_IDENT_RE = /[A-Za-z0-9._:-]+/;
      const XML_ENTITIES = {
        className: 'symbol',
        begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
      };
      const XML_META_KEYWORDS = {
        begin: /\s/,
        contains: [
          {
            className: 'meta-keyword',
            begin: /#?[a-z_][a-z1-9_-]+/,
            illegal: /\n/
          }
        ]
      };
      const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
        begin: /\(/,
        end: /\)/
      });
      const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, {
        className: 'meta-string'
      });
      const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, {
        className: 'meta-string'
      });
      const TAG_INTERNALS = {
        endsWithParent: true,
        illegal: /</,
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: XML_IDENT_RE,
            relevance: 0
          },
          {
            begin: /=\s*/,
            relevance: 0,
            contains: [
              {
                className: 'string',
                endsParent: true,
                variants: [
                  {
                    begin: /"/,
                    end: /"/,
                    contains: [XML_ENTITIES]
                  },
                  {
                    begin: /'/,
                    end: /'/,
                    contains: [XML_ENTITIES]
                  },
                  {
                    begin: /[^\s"'=<>`]+/
                  }
                ]
              }
            ]
          }
        ]
      };
      return {
        name: 'HTML, XML',
        aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf', 'svg'],
        case_insensitive: true,
        contains: [
          {
            className: 'meta',
            begin: /<![a-z]/,
            end: />/,
            relevance: 10,
            contains: [
              XML_META_KEYWORDS,
              QUOTE_META_STRING_MODE,
              APOS_META_STRING_MODE,
              XML_META_PAR_KEYWORDS,
              {
                begin: /\[/,
                end: /\]/,
                contains: [
                  {
                    className: 'meta',
                    begin: /<![a-z]/,
                    end: />/,
                    contains: [XML_META_KEYWORDS, XML_META_PAR_KEYWORDS, QUOTE_META_STRING_MODE, APOS_META_STRING_MODE]
                  }
                ]
              }
            ]
          },
          hljs.COMMENT(/<!--/, /-->/, {
            relevance: 10
          }),
          {
            begin: /<!\[CDATA\[/,
            end: /\]\]>/,
            relevance: 10
          },
          XML_ENTITIES,
          {
            className: 'meta',
            begin: /<\?xml/,
            end: /\?>/,
            relevance: 10
          },
          {
            className: 'tag',
            begin: /<style(?=\s|>)/,
            end: />/,
            keywords: {
              name: 'style'
            },
            contains: [TAG_INTERNALS],
            starts: {
              end: /<\/style>/,
              returnEnd: true,
              subLanguage: ['css', 'xml']
            }
          },
          {
            className: 'tag',
            begin: /<script(?=\s|>)/,
            end: />/,
            keywords: {
              name: 'script'
            },
            contains: [TAG_INTERNALS],
            starts: {
              end: /<\/script>/,
              returnEnd: true,
              subLanguage: ['javascript', 'handlebars', 'xml']
            }
          },
          {
            className: 'tag',
            begin: /<>|<\/>/
          },
          {
            className: 'tag',
            begin: concat(/</, lookahead(concat(TAG_NAME_RE, either(/\/>/, />/, /\s/)))),
            end: /\/?>/,
            contains: [
              {
                className: 'name',
                begin: TAG_NAME_RE,
                relevance: 0,
                starts: TAG_INTERNALS
              }
            ]
          },
          {
            className: 'tag',
            begin: concat(/<\//, lookahead(concat(TAG_NAME_RE, />/))),
            contains: [
              {
                className: 'name',
                begin: TAG_NAME_RE,
                relevance: 0
              },
              {
                begin: />/,
                relevance: 0,
                endsParent: true
              }
            ]
          }
        ]
      };
    }
    module.exports = xml;
  }
});

// esm-build-1fb6d84be59e73941ab320bc745976c9b092e461-45f0e201/mod.js
var __module = __toESM(require_xml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
