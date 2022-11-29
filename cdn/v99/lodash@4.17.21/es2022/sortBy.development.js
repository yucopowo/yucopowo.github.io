/* esm.sh - esbuild bundle(lodash@4.17.21/sortBy) es2022 development */
import __lodash__baseOrderBy$ from '/cdn/v99/lodash@4.17.21/es2022/_baseOrderBy.development.js';
import __lodash__baseFlatten$ from '/cdn/v99/lodash@4.17.21/es2022/_baseFlatten.development.js';
import __lodash__isIterateeCall$ from '/cdn/v99/lodash@4.17.21/es2022/_isIterateeCall.development.js';
import __lodash__baseRest$ from '/cdn/v99/lodash@4.17.21/es2022/_baseRest.development.js';
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

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/sortBy.js
var require_sortBy = __commonJS({
  'esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/node_modules/lodash/sortBy.js'(exports, module) {
    var baseFlatten = __lodash__baseFlatten$;
    var baseOrderBy = __lodash__baseOrderBy$;
    var baseRest = __lodash__baseRest$;
    var isIterateeCall = __lodash__isIterateeCall$;
    var sortBy = baseRest(function(collection, iteratees) {
      if (collection == null) {
        return [];
      }
      var length = iteratees.length;
      if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
      } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [iteratees[0]];
      }
      return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
    });
    module.exports = sortBy;
  }
});

// esm-build-795def69ba2a02e138f0fb49b612a5e28578ad0d-eb60d47a/mod.js
var __module = __toESM(require_sortBy());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
