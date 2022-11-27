/* esm.sh - esbuild bundle(lodash@4.17.21/padStart) es2022 development */
import __lodash_toString$ from '/cdn/v99/lodash@4.17.21/es2022/toString.development.js';
import __lodash_toInteger$ from '/cdn/v99/lodash@4.17.21/es2022/toInteger.development.js';
import __lodash__stringSize$ from '/cdn/v99/lodash@4.17.21/es2022/_stringSize.development.js';
import __lodash__createPadding$ from '/cdn/v99/lodash@4.17.21/es2022/_createPadding.development.js';
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

// esm-build-9d3925a89d57ec4c22cb2bba59948828aab37eac-f30423a1/node_modules/lodash/padStart.js
var require_padStart = __commonJS({
  'esm-build-9d3925a89d57ec4c22cb2bba59948828aab37eac-f30423a1/node_modules/lodash/padStart.js'(exports, module) {
    var createPadding = __lodash__createPadding$;
    var stringSize = __lodash__stringSize$;
    var toInteger = __lodash_toInteger$;
    var toString = __lodash_toString$;
    function padStart(string, length, chars) {
      string = toString(string);
      length = toInteger(length);
      var strLength = length ? stringSize(string) : 0;
      return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
    }
    module.exports = padStart;
  }
});

// esm-build-9d3925a89d57ec4c22cb2bba59948828aab37eac-f30423a1/mod.js
var __module = __toESM(require_padStart());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
