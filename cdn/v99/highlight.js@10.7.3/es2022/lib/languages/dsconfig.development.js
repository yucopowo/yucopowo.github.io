/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dsconfig) es2022 development */
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

// esm-build-d7ec9db55ba6597b1f1c06eb0dfce5074e133d62-a0de0c45/node_modules/highlight.js/lib/languages/dsconfig.js
var require_dsconfig = __commonJS({
  'esm-build-d7ec9db55ba6597b1f1c06eb0dfce5074e133d62-a0de0c45/node_modules/highlight.js/lib/languages/dsconfig.js'(
    exports,
    module
  ) {
    function dsconfig(hljs) {
      const QUOTED_PROPERTY = {
        className: 'string',
        begin: /"/,
        end: /"/
      };
      const APOS_PROPERTY = {
        className: 'string',
        begin: /'/,
        end: /'/
      };
      const UNQUOTED_PROPERTY = {
        className: 'string',
        begin: /[\w\-?]+:\w+/,
        end: /\W/,
        relevance: 0
      };
      const VALUELESS_PROPERTY = {
        className: 'string',
        begin: /\w+(\-\w+)*/,
        end: /(?=\W)/,
        relevance: 0
      };
      return {
        keywords: 'dsconfig',
        contains: [
          {
            className: 'keyword',
            begin: '^dsconfig',
            end: /\s/,
            excludeEnd: true,
            relevance: 10
          },
          {
            className: 'built_in',
            begin: /(list|create|get|set|delete)-(\w+)/,
            end: /\s/,
            excludeEnd: true,
            illegal: '!@#$%^&*()',
            relevance: 10
          },
          {
            className: 'built_in',
            begin: /--(\w+)/,
            end: /\s/,
            excludeEnd: true
          },
          QUOTED_PROPERTY,
          APOS_PROPERTY,
          UNQUOTED_PROPERTY,
          VALUELESS_PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      };
    }
    module.exports = dsconfig;
  }
});

// esm-build-d7ec9db55ba6597b1f1c06eb0dfce5074e133d62-a0de0c45/mod.js
var __module = __toESM(require_dsconfig());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
