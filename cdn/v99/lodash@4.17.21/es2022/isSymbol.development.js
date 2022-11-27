/* esm.sh - esbuild bundle(lodash@4.17.21/isSymbol) es2022 development */
import __lodash_isObjectLike$ from '/cdn/v99/lodash@4.17.21/es2022/isObjectLike.development.js';
import __lodash__baseGetTag$ from '/cdn/v99/lodash@4.17.21/es2022/_baseGetTag.development.js';
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ (x =>
  typeof require !== 'undefined'
    ? require
    : typeof Proxy !== 'undefined'
    ? new Proxy(x, {
        get: (a, b) => (typeof require !== 'undefined' ? require : a)[b]
      })
    : x)(function(x) {
  if (typeof require !== 'undefined') return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) =>
  function __require2() {
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/isSymbol.js'(exports, module) {
    var baseGetTag = __lodash__baseGetTag$;
    var isObjectLike = __lodash_isObjectLike$;
    var symbolTag = '[object Symbol]';
    function isSymbol(value) {
      return typeof value == 'symbol' || (isObjectLike(value) && baseGetTag(value) == symbolTag);
    }
    module.exports = isSymbol;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_isSymbol());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
