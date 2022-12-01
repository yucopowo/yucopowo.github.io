/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dust) es2022 development */
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

// esm-build-7c5042f93d147a4a707ebddc655b16d217709e78-b11e6bed/node_modules/highlight.js/lib/languages/dust.js
var require_dust = __commonJS({
  'esm-build-7c5042f93d147a4a707ebddc655b16d217709e78-b11e6bed/node_modules/highlight.js/lib/languages/dust.js'(
    exports,
    module
  ) {
    function dust(hljs) {
      const EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
      return {
        name: 'Dust',
        aliases: ['dst'],
        case_insensitive: true,
        subLanguage: 'xml',
        contains: [
          {
            className: 'template-tag',
            begin: /\{[#\/]/,
            end: /\}/,
            illegal: /;/,
            contains: [
              {
                className: 'name',
                begin: /[a-zA-Z\.-]+/,
                starts: {
                  endsWithParent: true,
                  relevance: 0,
                  contains: [hljs.QUOTE_STRING_MODE]
                }
              }
            ]
          },
          {
            className: 'template-variable',
            begin: /\{/,
            end: /\}/,
            illegal: /;/,
            keywords: EXPRESSION_KEYWORDS
          }
        ]
      };
    }
    module.exports = dust;
  }
});

// esm-build-7c5042f93d147a4a707ebddc655b16d217709e78-b11e6bed/mod.js
var __module = __toESM(require_dust());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
