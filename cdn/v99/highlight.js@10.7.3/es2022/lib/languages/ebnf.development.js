/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/ebnf) es2022 development */
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

// esm-build-0cf9b48955c1ed5219119793bd4e6cad5f86b7cf-8d895ec1/node_modules/highlight.js/lib/languages/ebnf.js
var require_ebnf = __commonJS({
  'esm-build-0cf9b48955c1ed5219119793bd4e6cad5f86b7cf-8d895ec1/node_modules/highlight.js/lib/languages/ebnf.js'(
    exports,
    module
  ) {
    function ebnf(hljs) {
      const commentMode = hljs.COMMENT(/\(\*/, /\*\)/);
      const nonTerminalMode = {
        className: 'attribute',
        begin: /^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/
      };
      const specialSequenceMode = {
        className: 'meta',
        begin: /\?.*\?/
      };
      const ruleBodyMode = {
        begin: /=/,
        end: /[.;]/,
        contains: [
          commentMode,
          specialSequenceMode,
          {
            className: 'string',
            variants: [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              {
                begin: '`',
                end: '`'
              }
            ]
          }
        ]
      };
      return {
        name: 'Extended Backus-Naur Form',
        illegal: /\S/,
        contains: [commentMode, nonTerminalMode, ruleBodyMode]
      };
    }
    module.exports = ebnf;
  }
});

// esm-build-0cf9b48955c1ed5219119793bd4e6cad5f86b7cf-8d895ec1/mod.js
var __module = __toESM(require_ebnf());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
