/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/fix) es2022 development */
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

// esm-build-b7b1fad71388cdfb687a2984f0aa05959bad4c8f-1bea5ded/node_modules/highlight.js/lib/languages/fix.js
var require_fix = __commonJS({
  'esm-build-b7b1fad71388cdfb687a2984f0aa05959bad4c8f-1bea5ded/node_modules/highlight.js/lib/languages/fix.js'(
    exports,
    module
  ) {
    function fix(hljs) {
      return {
        name: 'FIX',
        contains: [
          {
            begin: /[^\u2401\u0001]+/,
            end: /[\u2401\u0001]/,
            excludeEnd: true,
            returnBegin: true,
            returnEnd: false,
            contains: [
              {
                begin: /([^\u2401\u0001=]+)/,
                end: /=([^\u2401\u0001=]+)/,
                returnEnd: true,
                returnBegin: false,
                className: 'attr'
              },
              {
                begin: /=/,
                end: /([\u2401\u0001])/,
                excludeEnd: true,
                excludeBegin: true,
                className: 'string'
              }
            ]
          }
        ],
        case_insensitive: true
      };
    }
    module.exports = fix;
  }
});

// esm-build-b7b1fad71388cdfb687a2984f0aa05959bad4c8f-1bea5ded/mod.js
var __module = __toESM(require_fix());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
