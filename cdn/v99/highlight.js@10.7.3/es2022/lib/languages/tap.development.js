/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/tap) es2022 development */
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

// esm-build-011d983b80ab07ae05a2a9e173fab23dc8f9ccaf-c2d7753f/node_modules/highlight.js/lib/languages/tap.js
var require_tap = __commonJS({
  'esm-build-011d983b80ab07ae05a2a9e173fab23dc8f9ccaf-c2d7753f/node_modules/highlight.js/lib/languages/tap.js'(
    exports,
    module
  ) {
    function tap(hljs) {
      return {
        name: 'Test Anything Protocol',
        case_insensitive: true,
        contains: [
          hljs.HASH_COMMENT_MODE,
          {
            className: 'meta',
            variants: [
              {
                begin: '^TAP version (\\d+)$'
              },
              {
                begin: '^1\\.\\.(\\d+)$'
              }
            ]
          },
          {
            begin: /---$/,
            end: '\\.\\.\\.$',
            subLanguage: 'yaml',
            relevance: 0
          },
          {
            className: 'number',
            begin: ' (\\d+) '
          },
          {
            className: 'symbol',
            variants: [
              {
                begin: '^ok'
              },
              {
                begin: '^not ok'
              }
            ]
          }
        ]
      };
    }
    module.exports = tap;
  }
});

// esm-build-011d983b80ab07ae05a2a9e173fab23dc8f9ccaf-c2d7753f/mod.js
var __module = __toESM(require_tap());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
