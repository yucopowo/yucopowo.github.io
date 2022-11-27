/* esm.sh - esbuild bundle(lodash@4.17.21/_stringToArray) es2022 development */
import __lodash__unicodeToArray$ from '/cdn/v99/lodash@4.17.21/es2022/_unicodeToArray.development.js';
import __lodash__hasUnicode$ from '/cdn/v99/lodash@4.17.21/es2022/_hasUnicode.development.js';
import __lodash__asciiToArray$ from '/cdn/v99/lodash@4.17.21/es2022/_asciiToArray.development.js';
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

// esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/node_modules/lodash/_stringToArray.js
var require_stringToArray = __commonJS({
  'esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/node_modules/lodash/_stringToArray.js'(exports, module) {
    var asciiToArray = __lodash__asciiToArray$;
    var hasUnicode = __lodash__hasUnicode$;
    var unicodeToArray = __lodash__unicodeToArray$;
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    module.exports = stringToArray;
  }
});

// esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/mod.js
var __module = __toESM(require_stringToArray());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
