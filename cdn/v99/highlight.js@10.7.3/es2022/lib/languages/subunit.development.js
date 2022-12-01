/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/subunit) es2022 development */
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

// esm-build-50bb624918f7b94069a5821a0eb0373de454206c-e31de88d/node_modules/highlight.js/lib/languages/subunit.js
var require_subunit = __commonJS({
  'esm-build-50bb624918f7b94069a5821a0eb0373de454206c-e31de88d/node_modules/highlight.js/lib/languages/subunit.js'(
    exports,
    module
  ) {
    function subunit(hljs) {
      const DETAILS = {
        className: 'string',
        begin: '\\[\n(multipart)?',
        end: '\\]\n'
      };
      const TIME = {
        className: 'string',
        begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}.\\d+Z'
      };
      const PROGRESSVALUE = {
        className: 'string',
        begin: '(\\+|-)\\d+'
      };
      const KEYWORDS = {
        className: 'keyword',
        relevance: 10,
        variants: [
          {
            begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?'
          },
          {
            begin: '^progress(:?)(\\s+)?(pop|push)?'
          },
          {
            begin: '^tags:'
          },
          {
            begin: '^time:'
          }
        ]
      };
      return {
        name: 'SubUnit',
        case_insensitive: true,
        contains: [DETAILS, TIME, PROGRESSVALUE, KEYWORDS]
      };
    }
    module.exports = subunit;
  }
});

// esm-build-50bb624918f7b94069a5821a0eb0373de454206c-e31de88d/mod.js
var __module = __toESM(require_subunit());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
