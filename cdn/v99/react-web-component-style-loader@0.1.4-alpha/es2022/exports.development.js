/* esm.sh - esbuild bundle(react-web-component-style-loader@0.1.4-alpha/exports) es2022 development */
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

// esm-build-b281b4b7f7ed39fe56dc5e3b0efb7737052556cb-9d243c48/node_modules/react-web-component-style-loader/exports.js
var require_exports = __commonJS({
  'esm-build-b281b4b7f7ed39fe56dc5e3b0efb7737052556cb-9d243c48/node_modules/react-web-component-style-loader/exports.js'(
    exports,
    module
  ) {
    var exportedStyles = {
      styleElements: []
    };
    module.exports = exportedStyles;
  }
});

// esm-build-b281b4b7f7ed39fe56dc5e3b0efb7737052556cb-9d243c48/mod.js
var __module = __toESM(require_exports());
var { styleElements } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, styleElements };
