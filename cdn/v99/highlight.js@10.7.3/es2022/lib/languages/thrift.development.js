/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/thrift) es2022 development */
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

// esm-build-52430790ddd04a31390a45b0c523eaa1002f2401-227be2fb/node_modules/highlight.js/lib/languages/thrift.js
var require_thrift = __commonJS({
  'esm-build-52430790ddd04a31390a45b0c523eaa1002f2401-227be2fb/node_modules/highlight.js/lib/languages/thrift.js'(
    exports,
    module
  ) {
    function thrift(hljs) {
      const BUILT_IN_TYPES = 'bool byte i16 i32 i64 double string binary';
      return {
        name: 'Thrift',
        keywords: {
          keyword: 'namespace const typedef struct enum service exception void oneway set list map required optional',
          built_in: BUILT_IN_TYPES,
          literal: 'true false'
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'struct enum service exception',
            end: /\{/,
            illegal: /\n/,
            contains: [
              hljs.inherit(hljs.TITLE_MODE, {
                starts: {
                  endsWithParent: true,
                  excludeEnd: true
                }
              })
            ]
          },
          {
            begin: '\\b(set|list|map)\\s*<',
            end: '>',
            keywords: BUILT_IN_TYPES,
            contains: ['self']
          }
        ]
      };
    }
    module.exports = thrift;
  }
});

// esm-build-52430790ddd04a31390a45b0c523eaa1002f2401-227be2fb/mod.js
var __module = __toESM(require_thrift());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
