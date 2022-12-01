/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/brainfuck) es2022 development */
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

// esm-build-2b7a007abf44caefce9256a82904716b1843ffee-55b630bd/node_modules/highlight.js/lib/languages/brainfuck.js
var require_brainfuck = __commonJS({
  'esm-build-2b7a007abf44caefce9256a82904716b1843ffee-55b630bd/node_modules/highlight.js/lib/languages/brainfuck.js'(
    exports,
    module
  ) {
    function brainfuck(hljs) {
      const LITERAL = {
        className: 'literal',
        begin: /[+-]/,
        relevance: 0
      };
      return {
        name: 'Brainfuck',
        aliases: ['bf'],
        contains: [
          hljs.COMMENT('[^\\[\\]\\.,\\+\\-<> \r\n]', '[\\[\\]\\.,\\+\\-<> \r\n]', {
            returnEnd: true,
            relevance: 0
          }),
          {
            className: 'title',
            begin: '[\\[\\]]',
            relevance: 0
          },
          {
            className: 'string',
            begin: '[\\.,]',
            relevance: 0
          },
          {
            begin: /(?:\+\+|--)/,
            contains: [LITERAL]
          },
          LITERAL
        ]
      };
    }
    module.exports = brainfuck;
  }
});

// esm-build-2b7a007abf44caefce9256a82904716b1843ffee-55b630bd/mod.js
var __module = __toESM(require_brainfuck());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
