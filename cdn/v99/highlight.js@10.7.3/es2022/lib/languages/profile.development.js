/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/profile) es2022 development */
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

// esm-build-9448e69c01f015a6f41a67c91ad304c2cab2eec7-463a7bda/node_modules/highlight.js/lib/languages/profile.js
var require_profile = __commonJS({
  'esm-build-9448e69c01f015a6f41a67c91ad304c2cab2eec7-463a7bda/node_modules/highlight.js/lib/languages/profile.js'(
    exports,
    module
  ) {
    function profile(hljs) {
      return {
        name: 'Python profiler',
        contains: [
          hljs.C_NUMBER_MODE,
          {
            begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}',
            end: ':',
            excludeEnd: true
          },
          {
            begin: '(ncalls|tottime|cumtime)',
            end: '$',
            keywords: 'ncalls tottime|10 cumtime|10 filename',
            relevance: 10
          },
          {
            begin: 'function calls',
            end: '$',
            contains: [hljs.C_NUMBER_MODE],
            relevance: 10
          },
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          {
            className: 'string',
            begin: '\\(',
            end: '\\)$',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }
        ]
      };
    }
    module.exports = profile;
  }
});

// esm-build-9448e69c01f015a6f41a67c91ad304c2cab2eec7-463a7bda/mod.js
var __module = __toESM(require_profile());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
