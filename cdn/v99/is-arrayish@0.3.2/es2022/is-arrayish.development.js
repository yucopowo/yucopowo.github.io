/* esm.sh - esbuild bundle(is-arrayish@0.3.2) es2022 development */
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

// esm-build-b0e76ec4f1e951236adce3e999daf0f1df9b793e-5e50974d/node_modules/is-arrayish/index.js
var require_is_arrayish = __commonJS({
  'esm-build-b0e76ec4f1e951236adce3e999daf0f1df9b793e-5e50974d/node_modules/is-arrayish/index.js'(exports, module) {
    module.exports = function isArrayish(obj) {
      if (!obj || typeof obj === 'string') {
        return false;
      }
      return (
        obj instanceof Array ||
        Array.isArray(obj) ||
        (obj.length >= 0 &&
          (obj.splice instanceof Function ||
            (Object.getOwnPropertyDescriptor(obj, obj.length - 1) && obj.constructor.name !== 'String')))
      );
    };
  }
});

// esm-build-b0e76ec4f1e951236adce3e999daf0f1df9b793e-5e50974d/mod.js
var __module = __toESM(require_is_arrayish());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
