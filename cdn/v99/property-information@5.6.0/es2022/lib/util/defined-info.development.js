/* esm.sh - esbuild bundle(property-information@5.6.0/lib/util/defined-info) es2022 development */
import __property_information_lib_util_types$ from '/cdn/v99/property-information@5.6.0/es2022/lib/util/types.development.js';
import __property_information_lib_util_info$ from '/cdn/v99/property-information@5.6.0/es2022/lib/util/info.development.js';
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

// esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/node_modules/property-information/lib/util/defined-info.js
var require_defined_info = __commonJS({
  'esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/node_modules/property-information/lib/util/defined-info.js'(
    exports,
    module
  ) {
    'use strict';

    var Info = __property_information_lib_util_info$;
    var types = __property_information_lib_util_types$;
    module.exports = DefinedInfo;
    DefinedInfo.prototype = new Info();
    DefinedInfo.prototype.defined = true;
    var checks = [
      'boolean',
      'booleanish',
      'overloadedBoolean',
      'number',
      'commaSeparated',
      'spaceSeparated',
      'commaOrSpaceSeparated'
    ];
    var checksLength = checks.length;
    function DefinedInfo(property, attribute, mask, space) {
      var index = -1;
      var check;
      mark(this, 'space', space);
      Info.call(this, property, attribute);
      while (++index < checksLength) {
        check = checks[index];
        mark(this, check, (mask & types[check]) === types[check]);
      }
    }
    function mark(values, key, value) {
      if (value) {
        values[key] = value;
      }
    }
  }
});

// esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/mod.js
var __module = __toESM(require_defined_info());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
