/* esm.sh - esbuild bundle(lodash@4.17.21/_baseMatchesProperty) es2022 development */
import __lodash__baseIsEqual$ from '/cdn/v99/lodash@4.17.21/es2022/_baseIsEqual.development.js';
import __lodash__toKey$ from '/cdn/v99/lodash@4.17.21/es2022/_toKey.development.js';
import __lodash__matchesStrictComparable$ from '/cdn/v99/lodash@4.17.21/es2022/_matchesStrictComparable.development.js';
import __lodash__isStrictComparable$ from '/cdn/v99/lodash@4.17.21/es2022/_isStrictComparable.development.js';
import __lodash__isKey$ from '/cdn/v99/lodash@4.17.21/es2022/_isKey.development.js';
import __lodash_hasIn$ from '/cdn/v99/lodash@4.17.21/es2022/hasIn.development.js';
import __lodash_get$ from '/cdn/v99/lodash@4.17.21/es2022/get.development.js';
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_baseMatchesProperty.js'(
    exports,
    module
  ) {
    var baseIsEqual = __lodash__baseIsEqual$;
    var get = __lodash_get$;
    var hasIn = __lodash_hasIn$;
    var isKey = __lodash__isKey$;
    var isStrictComparable = __lodash__isStrictComparable$;
    var matchesStrictComparable = __lodash__matchesStrictComparable$;
    var toKey = __lodash__toKey$;
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue
          ? hasIn(object, path)
          : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_baseMatchesProperty());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
