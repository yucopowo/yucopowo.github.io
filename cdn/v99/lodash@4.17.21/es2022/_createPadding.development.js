/* esm.sh - esbuild bundle(lodash@4.17.21/_createPadding) es2022 development */
import __lodash__stringToArray$ from '/cdn/v99/lodash@4.17.21/es2022/_stringToArray.development.js';
import __lodash__stringSize$ from '/cdn/v99/lodash@4.17.21/es2022/_stringSize.development.js';
import __lodash__hasUnicode$ from '/cdn/v99/lodash@4.17.21/es2022/_hasUnicode.development.js';
import __lodash__castSlice$ from '/cdn/v99/lodash@4.17.21/es2022/_castSlice.development.js';
import __lodash__baseToString$ from '/cdn/v99/lodash@4.17.21/es2022/_baseToString.development.js';
import __lodash__baseRepeat$ from '/cdn/v99/lodash@4.17.21/es2022/_baseRepeat.development.js';
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

// esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/node_modules/lodash/_createPadding.js
var require_createPadding = __commonJS({
  'esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/node_modules/lodash/_createPadding.js'(exports, module) {
    var baseRepeat = __lodash__baseRepeat$;
    var baseToString = __lodash__baseToString$;
    var castSlice = __lodash__castSlice$;
    var hasUnicode = __lodash__hasUnicode$;
    var stringSize = __lodash__stringSize$;
    var stringToArray = __lodash__stringToArray$;
    var nativeCeil = Math.ceil;
    function createPadding(length, chars) {
      chars = chars === void 0 ? ' ' : baseToString(chars);
      var charsLength = chars.length;
      if (charsLength < 2) {
        return charsLength ? baseRepeat(chars, length) : chars;
      }
      var result = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
      return hasUnicode(chars) ? castSlice(stringToArray(result), 0, length).join('') : result.slice(0, length);
    }
    module.exports = createPadding;
  }
});

// esm-build-856655b9ff0338656ecfc44e4d41ea293873731a-5d9824ff/mod.js
var __module = __toESM(require_createPadding());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
