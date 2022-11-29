/* esm.sh - esbuild bundle(lodash@4.17.21/_baseOrderBy) es2022 development */
import __lodash__compareMultiple$ from '/cdn/v99/lodash@4.17.21/es2022/_compareMultiple.development.js';
import __lodash__baseUnary$ from '/cdn/v99/lodash@4.17.21/es2022/_baseUnary.development.js';
import __lodash__baseMap$ from '/cdn/v99/lodash@4.17.21/es2022/_baseMap.development.js';
import __lodash__baseIteratee$ from '/cdn/v99/lodash@4.17.21/es2022/_baseIteratee.development.js';
import __lodash__baseGet$ from '/cdn/v99/lodash@4.17.21/es2022/_baseGet.development.js';
import __lodash__arrayMap$ from '/cdn/v99/lodash@4.17.21/es2022/_arrayMap.development.js';
import __lodash_identity$ from '/cdn/v99/lodash@4.17.21/es2022/identity.development.js';
import __lodash_isArray$ from '/cdn/v99/lodash@4.17.21/es2022/isArray.development.js';
import __lodash__baseSortBy$ from '/cdn/v99/lodash@4.17.21/es2022/_baseSortBy.development.js';
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

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/_baseOrderBy.js
var require_baseOrderBy = __commonJS({
  'esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/_baseOrderBy.js'(exports, module) {
    var arrayMap = __lodash__arrayMap$;
    var baseGet = __lodash__baseGet$;
    var baseIteratee = __lodash__baseIteratee$;
    var baseMap = __lodash__baseMap$;
    var baseSortBy = __lodash__baseSortBy$;
    var baseUnary = __lodash__baseUnary$;
    var compareMultiple = __lodash__compareMultiple$;
    var identity = __lodash_identity$;
    var isArray = __lodash_isArray$;
    function baseOrderBy(collection, iteratees, orders) {
      if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
          if (isArray(iteratee)) {
            return function(value) {
              return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
            };
          }
          return iteratee;
        });
      } else {
        iteratees = [identity];
      }
      var index = -1;
      iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
      var result = baseMap(collection, function(value, key, collection2) {
        var criteria = arrayMap(iteratees, function(iteratee) {
          return iteratee(value);
        });
        return {
          criteria: criteria,
          index: ++index,
          value: value
        };
      });
      return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
      });
    }
    module.exports = baseOrderBy;
  }
});

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/mod.js
var __module = __toESM(require_baseOrderBy());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
