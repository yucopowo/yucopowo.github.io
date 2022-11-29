/* esm.sh - esbuild bundle(lodash@4.17.21/_compareAscending) es2022 development */
import __lodash_isSymbol$ from '/cdn/v99/lodash@4.17.21/es2022/isSymbol.development.js';
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

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/_compareAscending.js
var require_compareAscending = __commonJS({
  'esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/_compareAscending.js'(
    exports,
    module
  ) {
    var isSymbol = __lodash_isSymbol$;
    function compareAscending(value, other) {
      if (value !== other) {
        var valIsDefined = value !== void 0,
          valIsNull = value === null,
          valIsReflexive = value === value,
          valIsSymbol = isSymbol(value);
        var othIsDefined = other !== void 0,
          othIsNull = other === null,
          othIsReflexive = other === other,
          othIsSymbol = isSymbol(other);
        if (
          (!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
          (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
          (valIsNull && othIsDefined && othIsReflexive) ||
          (!valIsDefined && othIsReflexive) ||
          !valIsReflexive
        ) {
          return 1;
        }
        if (
          (!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
          (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
          (othIsNull && valIsDefined && valIsReflexive) ||
          (!othIsDefined && valIsReflexive) ||
          !othIsReflexive
        ) {
          return -1;
        }
      }
      return 0;
    }
    module.exports = compareAscending;
  }
});

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/mod.js
var __module = __toESM(require_compareAscending());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
