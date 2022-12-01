/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/ocaml) es2022 development */
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

// esm-build-4b2f8f1c975cf196646a0d0c24544eef984bb6ff-bc1f5166/node_modules/highlight.js/lib/languages/ocaml.js
var require_ocaml = __commonJS({
  'esm-build-4b2f8f1c975cf196646a0d0c24544eef984bb6ff-bc1f5166/node_modules/highlight.js/lib/languages/ocaml.js'(
    exports,
    module
  ) {
    function ocaml(hljs) {
      return {
        name: 'OCaml',
        aliases: ['ml'],
        keywords: {
          $pattern: '[a-z_]\\w*!?',
          keyword:
            'and as assert asr begin class constraint do done downto else end exception external for fun function functor if in include inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method mod module mutable new object of open! open or private rec sig struct then to try type val! val virtual when while with parser value',
          built_in:
            'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit in_channel out_channel ref',
          literal: 'true false'
        },
        illegal: /\/\/|>>/,
        contains: [
          {
            className: 'literal',
            begin: '\\[(\\|\\|)?\\]|\\(\\)',
            relevance: 0
          },
          hljs.COMMENT('\\(\\*', '\\*\\)', {
            contains: ['self']
          }),
          {
            className: 'symbol',
            begin: "'[A-Za-z_](?!')[\\w']*"
          },
          {
            className: 'type',
            begin: "`[A-Z][\\w']*"
          },
          {
            className: 'type',
            begin: "\\b[A-Z][\\w']*",
            relevance: 0
          },
          {
            begin: "[a-z_]\\w*'[\\w']*",
            relevance: 0
          },
          hljs.inherit(hljs.APOS_STRING_MODE, {
            className: 'string',
            relevance: 0
          }),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {
            illegal: null
          }),
          {
            className: 'number',
            begin:
              '\\b(0[xX][a-fA-F0-9_]+[Lln]?|0[oO][0-7_]+[Lln]?|0[bB][01_]+[Lln]?|[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
            relevance: 0
          },
          {
            begin: /->/
          }
        ]
      };
    }
    module.exports = ocaml;
  }
});

// esm-build-4b2f8f1c975cf196646a0d0c24544eef984bb6ff-bc1f5166/mod.js
var __module = __toESM(require_ocaml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
