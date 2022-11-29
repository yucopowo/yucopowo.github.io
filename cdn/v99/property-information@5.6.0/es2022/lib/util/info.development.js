/* esm.sh - esbuild bundle(property-information@5.6.0/lib/util/info) es2022 development */
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

// esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/node_modules/property-information/lib/util/info.js
var require_info = __commonJS({
  'esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/node_modules/property-information/lib/util/info.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = Info;
    var proto = Info.prototype;
    proto.space = null;
    proto.attribute = null;
    proto.property = null;
    proto.boolean = false;
    proto.booleanish = false;
    proto.overloadedBoolean = false;
    proto.number = false;
    proto.commaSeparated = false;
    proto.spaceSeparated = false;
    proto.commaOrSpaceSeparated = false;
    proto.mustUseProperty = false;
    proto.defined = false;
    function Info(property, attribute) {
      this.property = property;
      this.attribute = attribute;
    }
  }
});

// esm-build-a2a9915bda6213ba0917c5818238ece37b816c5c-db03aca6/mod.js
var __module = __toESM(require_info());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };