/* esm.sh - esbuild bundle(trim@0.0.1) es2022 development */
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

// esm-build-6c51dff75765770af4947420be7c902257b8f00a-49097ea3/node_modules/trim/index.js
var require_trim = __commonJS({
  'esm-build-6c51dff75765770af4947420be7c902257b8f00a-49097ea3/node_modules/trim/index.js'(exports, module) {
    exports = module.exports = trim;
    function trim(str) {
      return str.replace(/^\s*|\s*$/g, '');
    }
    exports.left = function(str) {
      return str.replace(/^\s*/, '');
    };
    exports.right = function(str) {
      return str.replace(/\s*$/, '');
    };
  }
});

// esm-build-6c51dff75765770af4947420be7c902257b8f00a-49097ea3/mod.js
var __module = __toESM(require_trim());
var { left, right } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, left, right };
