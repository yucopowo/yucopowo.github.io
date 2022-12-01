/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/nginx) es2022 development */
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

// esm-build-be5482d34f24c26aef66d217ac5a19bd2729d131-1c5bbcf0/node_modules/highlight.js/lib/languages/nginx.js
var require_nginx = __commonJS({
  'esm-build-be5482d34f24c26aef66d217ac5a19bd2729d131-1c5bbcf0/node_modules/highlight.js/lib/languages/nginx.js'(
    exports,
    module
  ) {
    function nginx(hljs) {
      const VAR = {
        className: 'variable',
        variants: [
          {
            begin: /\$\d+/
          },
          {
            begin: /\$\{/,
            end: /\}/
          },
          {
            begin: /[$@]/ + hljs.UNDERSCORE_IDENT_RE
          }
        ]
      };
      const DEFAULT = {
        endsWithParent: true,
        keywords: {
          $pattern: '[a-z/_]+',
          literal:
            'on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll'
        },
        relevance: 0,
        illegal: '=>',
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            className: 'string',
            contains: [hljs.BACKSLASH_ESCAPE, VAR],
            variants: [
              {
                begin: /"/,
                end: /"/
              },
              {
                begin: /'/,
                end: /'/
              }
            ]
          },
          {
            begin: '([a-z]+):/',
            end: '\\s',
            endsWithParent: true,
            excludeEnd: true,
            contains: [VAR]
          },
          {
            className: 'regexp',
            contains: [hljs.BACKSLASH_ESCAPE, VAR],
            variants: [
              {
                begin: '\\s\\^',
                end: '\\s|\\{|;',
                returnEnd: true
              },
              {
                begin: '~\\*?\\s+',
                end: '\\s|\\{|;',
                returnEnd: true
              },
              {
                begin: '\\*(\\.[a-z\\-]+)+'
              },
              {
                begin: '([a-z\\-]+\\.)+\\*'
              }
            ]
          },
          {
            className: 'number',
            begin: '\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b'
          },
          {
            className: 'number',
            begin: '\\b\\d+[kKmMgGdshdwy]*\\b',
            relevance: 0
          },
          VAR
        ]
      };
      return {
        name: 'Nginx config',
        aliases: ['nginxconf'],
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s+\\{',
            returnBegin: true,
            end: /\{/,
            contains: [
              {
                className: 'section',
                begin: hljs.UNDERSCORE_IDENT_RE
              }
            ],
            relevance: 0
          },
          {
            begin: hljs.UNDERSCORE_IDENT_RE + '\\s',
            end: ';|\\{',
            returnBegin: true,
            contains: [
              {
                className: 'attribute',
                begin: hljs.UNDERSCORE_IDENT_RE,
                starts: DEFAULT
              }
            ],
            relevance: 0
          }
        ],
        illegal: '[^\\s\\}]'
      };
    }
    module.exports = nginx;
  }
});

// esm-build-be5482d34f24c26aef66d217ac5a19bd2729d131-1c5bbcf0/mod.js
var __module = __toESM(require_nginx());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
