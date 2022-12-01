/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/nim) es2022 development */
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

// esm-build-d16cac85fb556a9cac5b9ac4e72091ea0fcb9f55-ed2b1199/node_modules/highlight.js/lib/languages/nim.js
var require_nim = __commonJS({
  'esm-build-d16cac85fb556a9cac5b9ac4e72091ea0fcb9f55-ed2b1199/node_modules/highlight.js/lib/languages/nim.js'(
    exports,
    module
  ) {
    function nim(hljs) {
      return {
        name: 'Nim',
        keywords: {
          keyword:
            'addr and as asm bind block break case cast const continue converter discard distinct div do elif else end enum except export finally for from func generic if import in include interface is isnot iterator let macro method mixin mod nil not notin object of or out proc ptr raise ref return shl shr static template try tuple type using var when while with without xor yield',
          literal: 'shared guarded stdin stdout stderr result true false',
          built_in:
            'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float float32 float64 bool char string cstring pointer expr stmt void auto any range array openarray varargs seq set clong culong cchar cschar cshort cint csize clonglong cfloat cdouble clongdouble cuchar cushort cuint culonglong cstringarray semistatic'
        },
        contains: [
          {
            className: 'meta',
            begin: /\{\./,
            end: /\.\}/,
            relevance: 10
          },
          {
            className: 'string',
            begin: /[a-zA-Z]\w*"/,
            end: /"/,
            contains: [
              {
                begin: /""/
              }
            ]
          },
          {
            className: 'string',
            begin: /([a-zA-Z]\w*)?"""/,
            end: /"""/
          },
          hljs.QUOTE_STRING_MODE,
          {
            className: 'type',
            begin: /\b[A-Z]\w+\b/,
            relevance: 0
          },
          {
            className: 'number',
            relevance: 0,
            variants: [
              {
                begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/
              },
              {
                begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/
              },
              {
                begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/
              },
              {
                begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/
              }
            ]
          },
          hljs.HASH_COMMENT_MODE
        ]
      };
    }
    module.exports = nim;
  }
});

// esm-build-d16cac85fb556a9cac5b9ac4e72091ea0fcb9f55-ed2b1199/mod.js
var __module = __toESM(require_nim());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
