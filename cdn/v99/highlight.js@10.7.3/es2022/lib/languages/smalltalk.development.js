/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/smalltalk) es2022 development */
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

// esm-build-f7866c55b7597a77d163937196ab94c5376ab91b-c5a33c97/node_modules/highlight.js/lib/languages/smalltalk.js
var require_smalltalk = __commonJS({
  'esm-build-f7866c55b7597a77d163937196ab94c5376ab91b-c5a33c97/node_modules/highlight.js/lib/languages/smalltalk.js'(
    exports,
    module
  ) {
    function smalltalk(hljs) {
      const VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
      const CHAR = {
        className: 'string',
        begin: '\\$.{1}'
      };
      const SYMBOL = {
        className: 'symbol',
        begin: '#' + hljs.UNDERSCORE_IDENT_RE
      };
      return {
        name: 'Smalltalk',
        aliases: ['st'],
        keywords: 'self super nil true false thisContext',
        contains: [
          hljs.COMMENT('"', '"'),
          hljs.APOS_STRING_MODE,
          {
            className: 'type',
            begin: '\\b[A-Z][A-Za-z0-9_]*',
            relevance: 0
          },
          {
            begin: VAR_IDENT_RE + ':',
            relevance: 0
          },
          hljs.C_NUMBER_MODE,
          SYMBOL,
          CHAR,
          {
            begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
            returnBegin: true,
            end: /\|/,
            illegal: /\S/,
            contains: [
              {
                begin: '(\\|[ ]*)?' + VAR_IDENT_RE
              }
            ]
          },
          {
            begin: '#\\(',
            end: '\\)',
            contains: [hljs.APOS_STRING_MODE, CHAR, hljs.C_NUMBER_MODE, SYMBOL]
          }
        ]
      };
    }
    module.exports = smalltalk;
  }
});

// esm-build-f7866c55b7597a77d163937196ab94c5376ab91b-c5a33c97/mod.js
var __module = __toESM(require_smalltalk());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
