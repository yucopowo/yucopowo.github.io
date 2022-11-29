/* esm.sh - esbuild bundle(is-buffer@2.0.5) es2022 development */
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

// esm-build-5f21a994dcdb6dcc34f9616bac894e985835e8e3-7ef07694/node_modules/is-buffer/index.js
var require_is_buffer = __commonJS({
  'esm-build-5f21a994dcdb6dcc34f9616bac894e985835e8e3-7ef07694/node_modules/is-buffer/index.js'(exports, module) {
    module.exports = function isBuffer(obj) {
      return (
        obj != null &&
        obj.constructor != null &&
        typeof obj.constructor.isBuffer === 'function' &&
        obj.constructor.isBuffer(obj)
      );
    };
  }
});

// esm-build-5f21a994dcdb6dcc34f9616bac894e985835e8e3-7ef07694/mod.js
var __module = __toESM(require_is_buffer());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
