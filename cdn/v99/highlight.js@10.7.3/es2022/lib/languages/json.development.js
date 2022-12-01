/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/json) es2022 development */
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

// esm-build-ca9d7ec4e4dbf1eb1309274275899f0a5a235095-af1b296c/node_modules/highlight.js/lib/languages/json.js
var require_json = __commonJS({
  'esm-build-ca9d7ec4e4dbf1eb1309274275899f0a5a235095-af1b296c/node_modules/highlight.js/lib/languages/json.js'(
    exports,
    module
  ) {
    function json(hljs) {
      const LITERALS = {
        literal: 'true false null'
      };
      const ALLOWED_COMMENTS = [hljs.C_LINE_COMMENT_MODE, hljs.C_BLOCK_COMMENT_MODE];
      const TYPES = [hljs.QUOTE_STRING_MODE, hljs.C_NUMBER_MODE];
      const VALUE_CONTAINER = {
        end: ',',
        endsWithParent: true,
        excludeEnd: true,
        contains: TYPES,
        keywords: LITERALS
      };
      const OBJECT = {
        begin: /\{/,
        end: /\}/,
        contains: [
          {
            className: 'attr',
            begin: /"/,
            end: /"/,
            contains: [hljs.BACKSLASH_ESCAPE],
            illegal: '\\n'
          },
          hljs.inherit(VALUE_CONTAINER, {
            begin: /:/
          })
        ].concat(ALLOWED_COMMENTS),
        illegal: '\\S'
      };
      const ARRAY = {
        begin: '\\[',
        end: '\\]',
        contains: [hljs.inherit(VALUE_CONTAINER)],
        illegal: '\\S'
      };
      TYPES.push(OBJECT, ARRAY);
      ALLOWED_COMMENTS.forEach(function(rule) {
        TYPES.push(rule);
      });
      return {
        name: 'JSON',
        contains: TYPES,
        keywords: LITERALS,
        illegal: '\\S'
      };
    }
    module.exports = json;
  }
});

// esm-build-ca9d7ec4e4dbf1eb1309274275899f0a5a235095-af1b296c/mod.js
var __module = __toESM(require_json());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
