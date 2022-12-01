/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/protobuf) es2022 development */
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

// esm-build-7e01560df37688fe9476e0330990dfeb765ceb0e-880847e7/node_modules/highlight.js/lib/languages/protobuf.js
var require_protobuf = __commonJS({
  'esm-build-7e01560df37688fe9476e0330990dfeb765ceb0e-880847e7/node_modules/highlight.js/lib/languages/protobuf.js'(
    exports,
    module
  ) {
    function protobuf(hljs) {
      return {
        name: 'Protocol Buffers',
        keywords: {
          keyword: 'package import option optional required repeated group oneof',
          built_in:
            'double float int32 int64 uint32 uint64 sint32 sint64 fixed32 fixed64 sfixed32 sfixed64 bool string bytes',
          literal: 'true false'
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          {
            className: 'class',
            beginKeywords: 'message enum service',
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
            className: 'function',
            beginKeywords: 'rpc',
            end: /[{;]/,
            excludeEnd: true,
            keywords: 'rpc returns'
          },
          {
            begin: /^\s*[A-Z_]+(?=\s*=[^\n]+;$)/
          }
        ]
      };
    }
    module.exports = protobuf;
  }
});

// esm-build-7e01560df37688fe9476e0330990dfeb765ceb0e-880847e7/mod.js
var __module = __toESM(require_protobuf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
