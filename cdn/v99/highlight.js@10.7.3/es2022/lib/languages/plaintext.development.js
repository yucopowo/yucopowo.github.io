/* esm.sh - esbuild bundle(highlight.js@10.7.3/lib/languages/plaintext) es2022 development */
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

// esm-build-cb313b3b3519c9807f2368b38f6151dcb94838c9-9b8022bf/node_modules/highlight.js/lib/languages/plaintext.js
var require_plaintext = __commonJS({
  'esm-build-cb313b3b3519c9807f2368b38f6151dcb94838c9-9b8022bf/node_modules/highlight.js/lib/languages/plaintext.js'(
    exports,
    module
  ) {
    function plaintext(hljs) {
      return {
        name: 'Plain text',
        aliases: ['text', 'txt'],
        disableAutodetect: true
      };
    }
    module.exports = plaintext;
  }
});

// esm-build-cb313b3b3519c9807f2368b38f6151dcb94838c9-9b8022bf/mod.js
var __module = __toESM(require_plaintext());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
