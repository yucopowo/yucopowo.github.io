/* esm.sh - esbuild bundle(lodash@4.17.21/_baseAssignIn) es2022 development */
import __lodash_keysIn$ from '/cdn/v99/lodash@4.17.21/es2022/keysIn.development.js';
import __lodash__copyObject$ from '/cdn/v99/lodash@4.17.21/es2022/_copyObject.development.js';
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

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  'esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/_baseAssignIn.js'(exports, module) {
    var copyObject = __lodash__copyObject$;
    var keysIn = __lodash_keysIn$;
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/mod.js
var __module = __toESM(require_baseAssignIn());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };