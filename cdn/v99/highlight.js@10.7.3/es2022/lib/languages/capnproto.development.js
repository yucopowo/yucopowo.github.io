/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/capnproto) es2022 development */
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

// esm-build-3b109fb02c02722452b61467613594ef64ca9aae-07447dcc/node_modules/highlight.js/lib/languages/capnproto.js
var require_capnproto = __commonJS({
  'esm-build-3b109fb02c02722452b61467613594ef64ca9aae-07447dcc/node_modules/highlight.js/lib/languages/capnproto.js'(
    exports,
    module
  ) {
    function capnproto(hljs) {
      return {
        name: 'Cap\u2019n Proto',
        aliases: ['capnp'],
        keywords: {
          keyword:
            'struct enum interface union group import using const annotation extends in of on as with from fixed',
          built_in:
            'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 Text Data AnyPointer AnyStruct Capability List',
          literal: 'true false'
        },
        contains: [
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          hljs.HASH_COMMENT_MODE,
          {
            className: 'meta',
            begin: /@0x[\w\d]{16};/,
            illegal: /\n/
          },
          {
            className: 'symbol',
            begin: /@\d+\b/
          },
          {
            className: 'class',
            beginKeywords: 'struct enum',
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
            className: 'class',
            beginKeywords: 'interface',
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
          }
        ]
      };
    }
    module.exports = capnproto;
  }
});

// esm-build-3b109fb02c02722452b61467613594ef64ca9aae-07447dcc/mod.js
var __module = __toESM(require_capnproto());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
