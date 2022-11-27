/* esm.sh - esbuild bundle(fast-shallow-equal@1.0.0) es2022 development */
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

// esm-build-a1868c899750f8b1cc187482b0c11afcda7f0712-a8bfab0a/node_modules/fast-shallow-equal/index.js
var require_fast_shallow_equal = __commonJS({
  'esm-build-a1868c899750f8b1cc187482b0c11afcda7f0712-a8bfab0a/node_modules/fast-shallow-equal/index.js'(exports) {
    var keyList = Object.keys;
    exports.equal = function equal2(a, b) {
      if (a === b) return true;
      if (!(a instanceof Object) || !(b instanceof Object)) return false;
      var keys = keyList(a);
      var length = keys.length;
      for (var i = 0; i < length; i++) if (!(keys[i] in b)) return false;
      for (var i = 0; i < length; i++) if (a[keys[i]] !== b[keys[i]]) return false;
      return length === keyList(b).length;
    };
  }
});

// esm-build-a1868c899750f8b1cc187482b0c11afcda7f0712-a8bfab0a/mod.js
var __module = __toESM(require_fast_shallow_equal());
var { equal } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, equal };
