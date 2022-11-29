/* esm.sh - esbuild bundle(camelcase-css@2.0.1) es2022 development */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) =>
  function __require() {
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

// esm-build-e980be144f56d4742b6dfeed49c701fb3bec11a7-026e5e9e/node_modules/camelcase-css/index-es5.js
var require_index_es5 = __commonJS({
  'esm-build-e980be144f56d4742b6dfeed49c701fb3bec11a7-026e5e9e/node_modules/camelcase-css/index-es5.js'(
    exports,
    module
  ) {
    'use strict';

    var pattern = /-(\w|$)/g;
    var callback = function callback2(dashChar, char) {
      return char.toUpperCase();
    };
    var camelCaseCSS = function camelCaseCSS2(property) {
      property = property.toLowerCase();
      if (property === 'float') {
        return 'cssFloat';
      } else if (
        property.charCodeAt(0) === 45 &&
        property.charCodeAt(1) === 109 &&
        property.charCodeAt(2) === 115 &&
        property.charCodeAt(3) === 45
      ) {
        return property.substr(1).replace(pattern, callback);
      } else {
        return property.replace(pattern, callback);
      }
    };
    module.exports = camelCaseCSS;
  }
});

// esm-build-e980be144f56d4742b6dfeed49c701fb3bec11a7-026e5e9e/mod.js
var __module = __toESM(require_index_es5());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
