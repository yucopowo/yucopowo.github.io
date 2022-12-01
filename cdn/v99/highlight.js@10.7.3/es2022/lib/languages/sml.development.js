/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/sml) es2022 development */
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

// esm-build-621ab9c21c0009d91df363dfb89e8106a16136c4-9c404052/node_modules/highlight.js/lib/languages/sml.js
var require_sml = __commonJS({
  'esm-build-621ab9c21c0009d91df363dfb89e8106a16136c4-9c404052/node_modules/highlight.js/lib/languages/sml.js'(
    exports,
    module
  ) {
    function sml(hljs) {
      return {
        name: 'SML (Standard ML)',
        aliases: ['ml'],
        keywords: {
          $pattern: '[a-z_]\\w*!?',
          keyword:
            'abstype and andalso as case datatype do else end eqtype exception fn fun functor handle if in include infix infixr let local nonfix of op open orelse raise rec sharing sig signature struct structure then type val with withtype where while',
          built_in: 'array bool char exn int list option order real ref string substring vector unit word',
          literal: 'true false NONE SOME LESS EQUAL GREATER nil'
        },
        illegal: /\/\/|>>/,
        contains: [
          {
            className: 'literal',
            begin: /\[(\|\|)?\]|\(\)/,
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
            begin: "[a-z_]\\w*'[\\w']*"
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
            begin: /[-=]>/
          }
        ]
      };
    }
    module.exports = sml;
  }
});

// esm-build-621ab9c21c0009d91df363dfb89e8106a16136c4-9c404052/mod.js
var __module = __toESM(require_sml());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
