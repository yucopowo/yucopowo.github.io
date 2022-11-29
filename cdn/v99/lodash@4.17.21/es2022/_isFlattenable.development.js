/* esm.sh - esbuild bundle(lodash@4.17.21/_isFlattenable) es2022 development */
import __lodash_isArray$ from '/cdn/v99/lodash@4.17.21/es2022/isArray.development.js';
import __lodash_isArguments$ from '/cdn/v99/lodash@4.17.21/es2022/isArguments.development.js';
import __lodash__Symbol$ from '/cdn/v99/lodash@4.17.21/es2022/_Symbol.development.js';
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

// esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  'esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/node_modules/lodash/_isFlattenable.js'(exports, module) {
    var Symbol2 = __lodash__Symbol$;
    var isArguments = __lodash_isArguments$;
    var isArray = __lodash_isArray$;
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/mod.js
var __module = __toESM(require_isFlattenable());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
