/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/apache) es2022 development */
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

// esm-build-be42661e5d762aef7a282d8a365d6d30fe4154ee-2800ad92/node_modules/highlight.js/lib/languages/apache.js
var require_apache = __commonJS({
  'esm-build-be42661e5d762aef7a282d8a365d6d30fe4154ee-2800ad92/node_modules/highlight.js/lib/languages/apache.js'(
    exports,
    module
  ) {
    function apache(hljs) {
      const NUMBER_REF = {
        className: 'number',
        begin: /[$%]\d+/
      };
      const NUMBER = {
        className: 'number',
        begin: /\d+/
      };
      const IP_ADDRESS = {
        className: 'number',
        begin: /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{1,5})?/
      };
      const PORT_NUMBER = {
        className: 'number',
        begin: /:\d{1,5}/
      };
      return {
        name: 'Apache config',
        aliases: ['apacheconf'],
        case_insensitive: true,
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            className: 'section',
            begin: /<\/?/,
            end: />/,
            contains: [
              IP_ADDRESS,
              PORT_NUMBER,
              hljs.inherit(hljs.QUOTE_STRING_MODE, {
                relevance: 0
              })
            ]
          },
          {
            className: 'attribute',
            begin: /\w+/,
            relevance: 0,
            keywords: {
              nomarkup:
                'order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername'
            },
            starts: {
              end: /$/,
              relevance: 0,
              keywords: {
                literal: 'on off all deny allow'
              },
              contains: [
                {
                  className: 'meta',
                  begin: /\s\[/,
                  end: /\]$/
                },
                {
                  className: 'variable',
                  begin: /[\$%]\{/,
                  end: /\}/,
                  contains: ['self', NUMBER_REF]
                },
                IP_ADDRESS,
                NUMBER,
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ],
        illegal: /\S/
      };
    }
    module.exports = apache;
  }
});

// esm-build-be42661e5d762aef7a282d8a365d6d30fe4154ee-2800ad92/mod.js
var __module = __toESM(require_apache());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
