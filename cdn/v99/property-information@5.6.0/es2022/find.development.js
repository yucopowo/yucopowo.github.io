/* esm.sh - esbuild bundle(property-information@5.6.0/find) es2022 development */
import __property_information_lib_util_info$ from '/cdn/v99/property-information@5.6.0/es2022/lib/util/info.development.js';
import __property_information_lib_util_defined_info$ from '/cdn/v99/property-information@5.6.0/es2022/lib/util/defined-info.development.js';
import __property_information_normalize$ from '/cdn/v99/property-information@5.6.0/es2022/normalize.development.js';
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

// esm-build-ed533ef3855fbab10cc5fe98e252db96ce4c45ae-9036241a/node_modules/property-information/find.js
var require_find = __commonJS({
  'esm-build-ed533ef3855fbab10cc5fe98e252db96ce4c45ae-9036241a/node_modules/property-information/find.js'(
    exports,
    module
  ) {
    'use strict';

    var normalize = __property_information_normalize$;
    var DefinedInfo = __property_information_lib_util_defined_info$;
    var Info = __property_information_lib_util_info$;
    var data = 'data';
    module.exports = find;
    var valid = /^data[-\w.:]+$/i;
    var dash = /-[a-z]/g;
    var cap = /[A-Z]/g;
    function find(schema, value) {
      var normal = normalize(value);
      var prop = value;
      var Type = Info;
      if (normal in schema.normal) {
        return schema.property[schema.normal[normal]];
      }
      if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
        if (value.charAt(4) === '-') {
          prop = datasetToProperty(value);
        } else {
          value = datasetToAttribute(value);
        }
        Type = DefinedInfo;
      }
      return new Type(prop, value);
    }
    function datasetToProperty(attribute) {
      var value = attribute.slice(5).replace(dash, camelcase);
      return data + value.charAt(0).toUpperCase() + value.slice(1);
    }
    function datasetToAttribute(property) {
      var value = property.slice(4);
      if (dash.test(value)) {
        return property;
      }
      value = value.replace(cap, kebab);
      if (value.charAt(0) !== '-') {
        value = '-' + value;
      }
      return data + value;
    }
    function kebab($0) {
      return '-' + $0.toLowerCase();
    }
    function camelcase($0) {
      return $0.charAt(1).toUpperCase();
    }
  }
});

// esm-build-ed533ef3855fbab10cc5fe98e252db96ce4c45ae-9036241a/mod.js
var __module = __toESM(require_find());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
