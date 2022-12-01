/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/prolog) es2022 development */
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

// esm-build-e233d4dbae5a3f4bf7c329fe21d2cd39af676f1c-292db2f8/node_modules/highlight.js/lib/languages/prolog.js
var require_prolog = __commonJS({
  'esm-build-e233d4dbae5a3f4bf7c329fe21d2cd39af676f1c-292db2f8/node_modules/highlight.js/lib/languages/prolog.js'(
    exports,
    module
  ) {
    function prolog(hljs) {
      const ATOM = {
        begin: /[a-z][A-Za-z0-9_]*/,
        relevance: 0
      };
      const VAR = {
        className: 'symbol',
        variants: [
          {
            begin: /[A-Z][a-zA-Z0-9_]*/
          },
          {
            begin: /_[A-Za-z0-9_]*/
          }
        ],
        relevance: 0
      };
      const PARENTED = {
        begin: /\(/,
        end: /\)/,
        relevance: 0
      };
      const LIST = {
        begin: /\[/,
        end: /\]/
      };
      const LINE_COMMENT = {
        className: 'comment',
        begin: /%/,
        end: /$/,
        contains: [hljs.PHRASAL_WORDS_MODE]
      };
      const BACKTICK_STRING = {
        className: 'string',
        begin: /`/,
        end: /`/,
        contains: [hljs.BACKSLASH_ESCAPE]
      };
      const CHAR_CODE = {
        className: 'string',
        begin: /0'(\\'|.)/
      };
      const SPACE_CODE = {
        className: 'string',
        begin: /0'\\s/
      };
      const PRED_OP = {
        begin: /:-/
      };
      const inner = [
        ATOM,
        VAR,
        PARENTED,
        PRED_OP,
        LIST,
        LINE_COMMENT,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.APOS_STRING_MODE,
        BACKTICK_STRING,
        CHAR_CODE,
        SPACE_CODE,
        hljs.C_NUMBER_MODE
      ];
      PARENTED.contains = inner;
      LIST.contains = inner;
      return {
        name: 'Prolog',
        contains: inner.concat([
          {
            begin: /\.$/
          }
        ])
      };
    }
    module.exports = prolog;
  }
});

// esm-build-e233d4dbae5a3f4bf7c329fe21d2cd39af676f1c-292db2f8/mod.js
var __module = __toESM(require_prolog());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
