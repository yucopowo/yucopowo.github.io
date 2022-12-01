/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/flix) es2022 development */
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

// esm-build-a98748cdd4d39628e6c5ed51b3bdd78872c4a7cf-7132c2da/node_modules/highlight.js/lib/languages/flix.js
var require_flix = __commonJS({
  'esm-build-a98748cdd4d39628e6c5ed51b3bdd78872c4a7cf-7132c2da/node_modules/highlight.js/lib/languages/flix.js'(
    exports,
    module
  ) {
    function flix(hljs) {
      const CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
      };
      const STRING = {
        className: 'string',
        variants: [
          {
            begin: '"',
            end: '"'
          }
        ]
      };
      const NAME = {
        className: 'title',
        relevance: 0,
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
      };
      const METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
      };
      return {
        name: 'Flix',
        keywords: {
          literal: 'true false',
          keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE, CHAR, STRING, METHOD, hljs.C_NUMBER_MODE]
      };
    }
    module.exports = flix;
  }
});

// esm-build-a98748cdd4d39628e6c5ed51b3bdd78872c4a7cf-7132c2da/mod.js
var __module = __toESM(require_flix());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
