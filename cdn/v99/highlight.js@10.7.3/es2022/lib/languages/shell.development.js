/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/shell) es2022 development */
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

// esm-build-e638fb061fff5cf4a4648dafb17041313075c1ea-4d9307a9/node_modules/highlight.js/lib/languages/shell.js
var require_shell = __commonJS({
  'esm-build-e638fb061fff5cf4a4648dafb17041313075c1ea-4d9307a9/node_modules/highlight.js/lib/languages/shell.js'(
    exports,
    module
  ) {
    function shell(hljs) {
      return {
        name: 'Shell Session',
        aliases: ['console'],
        contains: [
          {
            className: 'meta',
            begin: /^\s{0,3}[/~\w\d[\]()@-]*[>%$#]/,
            starts: {
              end: /[^\\](?=\s*$)/,
              subLanguage: 'bash'
            }
          }
        ]
      };
    }
    module.exports = shell;
  }
});

// esm-build-e638fb061fff5cf4a4648dafb17041313075c1ea-4d9307a9/mod.js
var __module = __toESM(require_shell());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
