/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/haml) es2022 development */
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

// esm-build-b9d60d6c4912520a343c6003f37f55931ba58cf3-1d077e4d/node_modules/highlight.js/lib/languages/haml.js
var require_haml = __commonJS({
  'esm-build-b9d60d6c4912520a343c6003f37f55931ba58cf3-1d077e4d/node_modules/highlight.js/lib/languages/haml.js'(
    exports,
    module
  ) {
    function haml(hljs) {
      return {
        name: 'HAML',
        case_insensitive: true,
        contains: [
          {
            className: 'meta',
            begin: '^!!!( (5|1\\.1|Strict|Frameset|Basic|Mobile|RDFa|XML\\b.*))?$',
            relevance: 10
          },
          hljs.COMMENT('^\\s*(!=#|=#|-#|/).*$', false, {
            relevance: 0
          }),
          {
            begin: '^\\s*(-|=|!=)(?!#)',
            starts: {
              end: '\\n',
              subLanguage: 'ruby'
            }
          },
          {
            className: 'tag',
            begin: '^\\s*%',
            contains: [
              {
                className: 'selector-tag',
                begin: '\\w+'
              },
              {
                className: 'selector-id',
                begin: '#[\\w-]+'
              },
              {
                className: 'selector-class',
                begin: '\\.[\\w-]+'
              },
              {
                begin: /\{\s*/,
                end: /\s*\}/,
                contains: [
                  {
                    begin: ':\\w+\\s*=>',
                    end: ',\\s+',
                    returnBegin: true,
                    endsWithParent: true,
                    contains: [
                      {
                        className: 'attr',
                        begin: ':\\w+'
                      },
                      hljs.APOS_STRING_MODE,
                      hljs.QUOTE_STRING_MODE,
                      {
                        begin: '\\w+',
                        relevance: 0
                      }
                    ]
                  }
                ]
              },
              {
                begin: '\\(\\s*',
                end: '\\s*\\)',
                excludeEnd: true,
                contains: [
                  {
                    begin: '\\w+\\s*=',
                    end: '\\s+',
                    returnBegin: true,
                    endsWithParent: true,
                    contains: [
                      {
                        className: 'attr',
                        begin: '\\w+',
                        relevance: 0
                      },
                      hljs.APOS_STRING_MODE,
                      hljs.QUOTE_STRING_MODE,
                      {
                        begin: '\\w+',
                        relevance: 0
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            begin: '^\\s*[=~]\\s*'
          },
          {
            begin: /#\{/,
            starts: {
              end: /\}/,
              subLanguage: 'ruby'
            }
          }
        ]
      };
    }
    module.exports = haml;
  }
});

// esm-build-b9d60d6c4912520a343c6003f37f55931ba58cf3-1d077e4d/mod.js
var __module = __toESM(require_haml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
