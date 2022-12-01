/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/nix) es2022 development */
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

// esm-build-87961b14d7a35f17037b134558c467efc3860c99-c1f19b38/node_modules/highlight.js/lib/languages/nix.js
var require_nix = __commonJS({
  'esm-build-87961b14d7a35f17037b134558c467efc3860c99-c1f19b38/node_modules/highlight.js/lib/languages/nix.js'(
    exports,
    module
  ) {
    function nix(hljs) {
      const NIX_KEYWORDS = {
        keyword: 'rec with let in inherit assert if else then',
        literal: 'true false or and null',
        built_in: 'import abort baseNameOf dirOf isNull builtins map removeAttrs throw toString derivation'
      };
      const ANTIQUOTE = {
        className: 'subst',
        begin: /\$\{/,
        end: /\}/,
        keywords: NIX_KEYWORDS
      };
      const ATTRS = {
        begin: /[a-zA-Z0-9-_]+(\s*=)/,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'attr',
            begin: /\S+/
          }
        ]
      };
      const STRING = {
        className: 'string',
        contains: [ANTIQUOTE],
        variants: [
          {
            begin: "''",
            end: "''"
          },
          {
            begin: '"',
            end: '"'
          }
        ]
      };
      const EXPRESSIONS = [hljs.NUMBER_MODE, hljs.HASH_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, STRING, ATTRS];
      ANTIQUOTE.contains = EXPRESSIONS;
      return {
        name: 'Nix',
        aliases: ['nixos'],
        keywords: NIX_KEYWORDS,
        contains: EXPRESSIONS
      };
    }
    module.exports = nix;
  }
});

// esm-build-87961b14d7a35f17037b134558c467efc3860c99-c1f19b38/mod.js
var __module = __toESM(require_nix());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
