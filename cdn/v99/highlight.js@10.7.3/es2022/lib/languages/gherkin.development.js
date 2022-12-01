/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/gherkin) es2022 development */
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

// esm-build-ca84b0b01bab8344d45462edbb41365aac0f6372-701832c7/node_modules/highlight.js/lib/languages/gherkin.js
var require_gherkin = __commonJS({
  'esm-build-ca84b0b01bab8344d45462edbb41365aac0f6372-701832c7/node_modules/highlight.js/lib/languages/gherkin.js'(
    exports,
    module
  ) {
    function gherkin(hljs) {
      return {
        name: 'Gherkin',
        aliases: ['feature'],
        keywords:
          'Feature Background Ability Business Need Scenario Scenarios Scenario Outline Scenario Template Examples Given And Then But When',
        contains: [
          {
            className: 'symbol',
            begin: '\\*',
            relevance: 0
          },
          {
            className: 'meta',
            begin: '@[^@\\s]+'
          },
          {
            begin: '\\|',
            end: '\\|\\w*$',
            contains: [
              {
                className: 'string',
                begin: '[^|]+'
              }
            ]
          },
          {
            className: 'variable',
            begin: '<',
            end: '>'
          },
          hljs.HASH_COMMENT_MODE,
          {
            className: 'string',
            begin: '"""',
            end: '"""'
          },
          hljs.QUOTE_STRING_MODE
        ]
      };
    }
    module.exports = gherkin;
  }
});

// esm-build-ca84b0b01bab8344d45462edbb41365aac0f6372-701832c7/mod.js
var __module = __toESM(require_gherkin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
