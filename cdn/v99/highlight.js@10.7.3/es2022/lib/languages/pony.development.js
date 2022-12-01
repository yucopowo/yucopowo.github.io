/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/pony) es2022 development */
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

// esm-build-5bfc9084be6cc09ef1ad5ef7c4490d2fc370d9ba-f69f8cb3/node_modules/highlight.js/lib/languages/pony.js
var require_pony = __commonJS({
  'esm-build-5bfc9084be6cc09ef1ad5ef7c4490d2fc370d9ba-f69f8cb3/node_modules/highlight.js/lib/languages/pony.js'(
    exports,
    module
  ) {
    function pony(hljs) {
      const KEYWORDS = {
        keyword:
          'actor addressof and as be break class compile_error compile_intrinsic consume continue delegate digestof do else elseif embed end error for fun if ifdef in interface is isnt lambda let match new not object or primitive recover repeat return struct then trait try type until use var where while with xor',
        meta: 'iso val tag trn box ref',
        literal: 'this false true'
      };
      const TRIPLE_QUOTE_STRING_MODE = {
        className: 'string',
        begin: '"""',
        end: '"""',
        relevance: 10
      };
      const QUOTE_STRING_MODE = {
        className: 'string',
        begin: '"',
        end: '"',
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const SINGLE_QUOTE_CHAR_MODE = {
        className: 'string',
        begin: "'",
        end: "'",
        contains: [hljs.BACKSLASH_ESCAPE],
        relevance: 0
      };
      const TYPE_NAME = {
        className: 'type',
        begin: '\\b_?[A-Z][\\w]*',
        relevance: 0
      };
      const PRIMED_NAME = {
        begin: hljs.IDENT_RE + "'",
        relevance: 0
      };
      const NUMBER_MODE = {
        className: 'number',
        begin: '(-?)(\\b0[xX][a-fA-F0-9]+|\\b0[bB][01]+|(\\b\\d+(_\\d+)?(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
        relevance: 0
      };
      return {
        name: 'Pony',
        keywords: KEYWORDS,
        contains: [
          TYPE_NAME,
          TRIPLE_QUOTE_STRING_MODE,
          QUOTE_STRING_MODE,
          SINGLE_QUOTE_CHAR_MODE,
          PRIMED_NAME,
          NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      };
    }
    module.exports = pony;
  }
});

// esm-build-5bfc9084be6cc09ef1ad5ef7c4490d2fc370d9ba-f69f8cb3/mod.js
var __module = __toESM(require_pony());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
