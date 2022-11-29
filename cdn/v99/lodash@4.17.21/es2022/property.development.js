/* esm.sh - esbuild bundle(lodash@4.17.21/property) es2022 development */
import __lodash__baseProperty$ from '/cdn/v99/lodash@4.17.21/es2022/_baseProperty.development.js';
import __lodash__toKey$ from '/cdn/v99/lodash@4.17.21/es2022/_toKey.development.js';
import __lodash__isKey$ from '/cdn/v99/lodash@4.17.21/es2022/_isKey.development.js';
import __lodash__basePropertyDeep$ from '/cdn/v99/lodash@4.17.21/es2022/_basePropertyDeep.development.js';
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/property.js
var require_property = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/property.js'(exports, module) {
    var baseProperty = __lodash__baseProperty$;
    var basePropertyDeep = __lodash__basePropertyDeep$;
    var isKey = __lodash__isKey$;
    var toKey = __lodash__toKey$;
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_property());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
