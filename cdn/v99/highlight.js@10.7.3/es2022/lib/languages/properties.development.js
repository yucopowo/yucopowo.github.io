/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/properties) es2022 development */
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

// esm-build-932963db988b77225f16049d2f35c869033da870-16cb48c8/node_modules/highlight.js/lib/languages/properties.js
var require_properties = __commonJS({
  'esm-build-932963db988b77225f16049d2f35c869033da870-16cb48c8/node_modules/highlight.js/lib/languages/properties.js'(
    exports,
    module
  ) {
    function properties(hljs) {
      var WS0 = '[ \\t\\f]*';
      var WS1 = '[ \\t\\f]+';
      var EQUAL_DELIM = WS0 + '[:=]' + WS0;
      var WS_DELIM = WS1;
      var DELIM = '(' + EQUAL_DELIM + '|' + WS_DELIM + ')';
      var KEY_ALPHANUM = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+';
      var KEY_OTHER = '([^\\\\:= \\t\\f\\n]|\\\\.)+';
      var DELIM_AND_VALUE = {
        end: DELIM,
        relevance: 0,
        starts: {
          className: 'string',
          end: /$/,
          relevance: 0,
          contains: [
            {
              begin: '\\\\\\\\'
            },
            {
              begin: '\\\\\\n'
            }
          ]
        }
      };
      return {
        name: '.properties',
        case_insensitive: true,
        illegal: /\S/,
        contains: [
          hljs.COMMENT('^\\s*[!#]', '$'),
          {
            returnBegin: true,
            variants: [
              {
                begin: KEY_ALPHANUM + EQUAL_DELIM,
                relevance: 1
              },
              {
                begin: KEY_ALPHANUM + WS_DELIM,
                relevance: 0
              }
            ],
            contains: [
              {
                className: 'attr',
                begin: KEY_ALPHANUM,
                endsParent: true,
                relevance: 0
              }
            ],
            starts: DELIM_AND_VALUE
          },
          {
            begin: KEY_OTHER + DELIM,
            returnBegin: true,
            relevance: 0,
            contains: [
              {
                className: 'meta',
                begin: KEY_OTHER,
                endsParent: true,
                relevance: 0
              }
            ],
            starts: DELIM_AND_VALUE
          },
          {
            className: 'attr',
            relevance: 0,
            begin: KEY_OTHER + WS0 + '$'
          }
        ]
      };
    }
    module.exports = properties;
  }
});

// esm-build-932963db988b77225f16049d2f35c869033da870-16cb48c8/mod.js
var __module = __toESM(require_properties());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
