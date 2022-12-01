/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/ini) es2022 development */
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

// esm-build-06305a6f0d38fe0960e4a41c9d3d70eaaaadee1e-9dec858f/node_modules/highlight.js/lib/languages/ini.js
var require_ini = __commonJS({
  'esm-build-06305a6f0d38fe0960e4a41c9d3d70eaaaadee1e-9dec858f/node_modules/highlight.js/lib/languages/ini.js'(
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
    function either(...args) {
      const joined = '(' + args.map(x => source(x)).join('|') + ')';
      return joined;
    }
    function ini(hljs) {
      const NUMBERS = {
        className: 'number',
        relevance: 0,
        variants: [
          {
            begin: /([+-]+)?[\d]+_[\d_]+/
          },
          {
            begin: hljs.NUMBER_RE
          }
        ]
      };
      const COMMENTS = hljs.COMMENT();
      COMMENTS.variants = [
        {
          begin: /;/,
          end: /$/
        },
        {
          begin: /#/,
          end: /$/
        }
      ];
      const VARIABLES = {
        className: 'variable',
        variants: [
          {
            begin: /\$[\w\d"][\w\d_]*/
          },
          {
            begin: /\$\{(.*?)\}/
          }
        ]
      };
      const LITERALS = {
        className: 'literal',
        begin: /\bon|off|true|false|yes|no\b/
      };
      const STRINGS = {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {
            begin: "'''",
            end: "'''",
            relevance: 10
          },
          {
            begin: '"""',
            end: '"""',
            relevance: 10
          },
          {
            begin: '"',
            end: '"'
          },
          {
            begin: "'",
            end: "'"
          }
        ]
      };
      const ARRAY = {
        begin: /\[/,
        end: /\]/,
        contains: [COMMENTS, LITERALS, VARIABLES, STRINGS, NUMBERS, 'self'],
        relevance: 0
      };
      const BARE_KEY = /[A-Za-z0-9_-]+/;
      const QUOTED_KEY_DOUBLE_QUOTE = /"(\\"|[^"])*"/;
      const QUOTED_KEY_SINGLE_QUOTE = /'[^']*'/;
      const ANY_KEY = either(BARE_KEY, QUOTED_KEY_DOUBLE_QUOTE, QUOTED_KEY_SINGLE_QUOTE);
      const DOTTED_KEY = concat(ANY_KEY, '(\\s*\\.\\s*', ANY_KEY, ')*', lookahead(/\s*=\s*[^#\s]/));
      return {
        name: 'TOML, also INI',
        aliases: ['toml'],
        case_insensitive: true,
        illegal: /\S/,
        contains: [
          COMMENTS,
          {
            className: 'section',
            begin: /\[+/,
            end: /\]+/
          },
          {
            begin: DOTTED_KEY,
            className: 'attr',
            starts: {
              end: /$/,
              contains: [COMMENTS, ARRAY, LITERALS, VARIABLES, STRINGS, NUMBERS]
            }
          }
        ]
      };
    }
    module.exports = ini;
  }
});

// esm-build-06305a6f0d38fe0960e4a41c9d3d70eaaaadee1e-9dec858f/mod.js
var __module = __toESM(require_ini());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
