/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/dockerfile) es2022 development */
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

// esm-build-9c1643ba2827b77e7b9d2cfda5d2b105e8a69dac-88fea63b/node_modules/highlight.js/lib/languages/dockerfile.js
var require_dockerfile = __commonJS({
  'esm-build-9c1643ba2827b77e7b9d2cfda5d2b105e8a69dac-88fea63b/node_modules/highlight.js/lib/languages/dockerfile.js'(
    exports,
    module
  ) {
    function dockerfile(hljs) {
      return {
        name: 'Dockerfile',
        aliases: ['docker'],
        case_insensitive: true,
        keywords: 'from maintainer expose env arg user onbuild stopsignal',
        contains: [
          hljs.HASH_COMMENT_MODE,
          hljs.APOS_STRING_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE,
          {
            beginKeywords: 'run cmd entrypoint volume add copy workdir label healthcheck shell',
            starts: {
              end: /[^\\]$/,
              subLanguage: 'bash'
            }
          }
        ],
        illegal: '</'
      };
    }
    module.exports = dockerfile;
  }
});

// esm-build-9c1643ba2827b77e7b9d2cfda5d2b105e8a69dac-88fea63b/mod.js
var __module = __toESM(require_dockerfile());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
