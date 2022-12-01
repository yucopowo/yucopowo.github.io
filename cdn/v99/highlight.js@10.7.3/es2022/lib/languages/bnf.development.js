/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/bnf) es2022 development */
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

// esm-build-a2b0beadeb1bdf6f1b614784cbc6e4bedb7a57a8-b2901abd/node_modules/highlight.js/lib/languages/bnf.js
var require_bnf = __commonJS({
  'esm-build-a2b0beadeb1bdf6f1b614784cbc6e4bedb7a57a8-b2901abd/node_modules/highlight.js/lib/languages/bnf.js'(
    exports,
    module
  ) {
    function bnf(hljs) {
      return {
        name: 'Backus\u2013Naur Form',
        contains: [
          {
            className: 'attribute',
            begin: /</,
            end: />/
          },
          {
            begin: /::=/,
            end: /$/,
            contains: [
              {
                begin: /</,
                end: />/
              },
              hljs.C_LINE_COMMENT_MODE,
              hljs.C_BLOCK_COMMENT_MODE,
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE
            ]
          }
        ]
      };
    }
    module.exports = bnf;
  }
});

// esm-build-a2b0beadeb1bdf6f1b614784cbc6e4bedb7a57a8-b2901abd/mod.js
var __module = __toESM(require_bnf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
