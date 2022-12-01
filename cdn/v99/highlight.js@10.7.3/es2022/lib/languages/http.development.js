/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/http) es2022 development */
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

// esm-build-f27889172cf6f96ad2bd700108fcc1befe2d2311-452bde4c/node_modules/highlight.js/lib/languages/http.js
var require_http = __commonJS({
  'esm-build-f27889172cf6f96ad2bd700108fcc1befe2d2311-452bde4c/node_modules/highlight.js/lib/languages/http.js'(
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
    function http(hljs) {
      const VERSION = 'HTTP/(2|1\\.[01])';
      const HEADER_NAME = /[A-Za-z][A-Za-z0-9-]*/;
      const HEADER = {
        className: 'attribute',
        begin: concat('^', HEADER_NAME, '(?=\\:\\s)'),
        starts: {
          contains: [
            {
              className: 'punctuation',
              begin: /: /,
              relevance: 0,
              starts: {
                end: '$',
                relevance: 0
              }
            }
          ]
        }
      };
      const HEADERS_AND_BODY = [
        HEADER,
        {
          begin: '\\n\\n',
          starts: {
            subLanguage: [],
            endsWithParent: true
          }
        }
      ];
      return {
        name: 'HTTP',
        aliases: ['https'],
        illegal: /\S/,
        contains: [
          {
            begin: '^(?=' + VERSION + ' \\d{3})',
            end: /$/,
            contains: [
              {
                className: 'meta',
                begin: VERSION
              },
              {
                className: 'number',
                begin: '\\b\\d{3}\\b'
              }
            ],
            starts: {
              end: /\b\B/,
              illegal: /\S/,
              contains: HEADERS_AND_BODY
            }
          },
          {
            begin: '(?=^[A-Z]+ (.*?) ' + VERSION + '$)',
            end: /$/,
            contains: [
              {
                className: 'string',
                begin: ' ',
                end: ' ',
                excludeBegin: true,
                excludeEnd: true
              },
              {
                className: 'meta',
                begin: VERSION
              },
              {
                className: 'keyword',
                begin: '[A-Z]+'
              }
            ],
            starts: {
              end: /\b\B/,
              illegal: /\S/,
              contains: HEADERS_AND_BODY
            }
          },
          hljs.inherit(HEADER, {
            relevance: 0
          })
        ]
      };
    }
    module.exports = http;
  }
});

// esm-build-f27889172cf6f96ad2bd700108fcc1befe2d2311-452bde4c/mod.js
var __module = __toESM(require_http());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
