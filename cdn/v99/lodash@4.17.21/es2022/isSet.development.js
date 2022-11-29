/* esm.sh - esbuild bundle(lodash@4.17.21/isSet) es2022 development */
import __lodash__nodeUtil$ from '/cdn/v99/lodash@4.17.21/es2022/_nodeUtil.development.js';
import __lodash__baseUnary$ from '/cdn/v99/lodash@4.17.21/es2022/_baseUnary.development.js';
import __lodash__baseIsSet$ from '/cdn/v99/lodash@4.17.21/es2022/_baseIsSet.development.js';
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

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  'esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/isSet.js'(exports, module) {
    var baseIsSet = __lodash__baseIsSet$;
    var baseUnary = __lodash__baseUnary$;
    var nodeUtil = __lodash__nodeUtil$;
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/mod.js
var __module = __toESM(require_isSet());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
