/* esm.sh - esbuild bundle(lodash@4.17.21/_baseFlatten) es2022 development */
import __lodash__isFlattenable$ from '/cdn/v99/lodash@4.17.21/es2022/_isFlattenable.development.js';
import __lodash__arrayPush$ from '/cdn/v99/lodash@4.17.21/es2022/_arrayPush.development.js';
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

// esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  'esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/node_modules/lodash/_baseFlatten.js'(exports, module) {
    var arrayPush = __lodash__arrayPush$;
    var isFlattenable = __lodash__isFlattenable$;
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1,
        length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// esm-build-712702fdb162fbe1f067b7507fb8875e2ce6b253-62505fae/mod.js
var __module = __toESM(require_baseFlatten());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
