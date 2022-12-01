/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/clean) es2022 development */
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

// esm-build-cb95596607164ee2a4148a531d81ce905b5b938b-2becbfe7/node_modules/highlight.js/lib/languages/clean.js
var require_clean = __commonJS({
  'esm-build-cb95596607164ee2a4148a531d81ce905b5b938b-2becbfe7/node_modules/highlight.js/lib/languages/clean.js'(
    exports,
    module
  ) {
    function clean(hljs) {
      return {
        name: 'Clean',
        aliases: ['icl', 'dcl'],
        keywords: {
          keyword:
            'if let in with where case of class instance otherwise implementation definition system module from import qualified as special code inline foreign export ccall stdcall generic derive infix infixl infixr',
          built_in: 'Int Real Char Bool',
          literal: 'True False'
        },
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.C_NUMBER_MODE,
          {
            begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>'
          }
        ]
      };
    }
    module.exports = clean;
  }
});

// esm-build-cb95596607164ee2a4148a531d81ce905b5b938b-2becbfe7/mod.js
var __module = __toESM(require_clean());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
