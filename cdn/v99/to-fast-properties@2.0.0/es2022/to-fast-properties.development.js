/* esm.sh - esbuild bundle(to-fast-properties@2.0.0) es2022 development */
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

// esm-build-5e4bcef4ecba1aa62b41fc430d60e497a450b646-5fed409f/node_modules/to-fast-properties/index.js
var require_to_fast_properties = __commonJS({
  'esm-build-5e4bcef4ecba1aa62b41fc430d60e497a450b646-5fed409f/node_modules/to-fast-properties/index.js'(
    exports,
    module
  ) {
    'use strict';

    var fastProto = null;
    function FastObject(o) {
      if (fastProto !== null && typeof fastProto.property) {
        const result = fastProto;
        fastProto = FastObject.prototype = null;
        return result;
      }
      fastProto = FastObject.prototype = o == null ? /* @__PURE__ */ Object.create(null) : o;
      return new FastObject();
    }
    FastObject();
    module.exports = function toFastproperties(o) {
      return FastObject(o);
    };
  }
});

// esm-build-5e4bcef4ecba1aa62b41fc430d60e497a450b646-5fed409f/mod.js
var __module = __toESM(require_to_fast_properties());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
