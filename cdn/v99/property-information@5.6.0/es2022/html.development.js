/* esm.sh - esbuild bundle(property-information@5.6.0/html) es2022 development */
import __property_information_lib_xlink$ from '/cdn/v99/property-information@5.6.0/es2022/lib/xlink.development.js';
import __property_information_lib_util_merge$ from '/cdn/v99/property-information@5.6.0/es2022/lib/util/merge.development.js';
import __property_information_lib_html$ from '/cdn/v99/property-information@5.6.0/es2022/lib/html.development.js';
import __property_information_lib_aria$ from '/cdn/v99/property-information@5.6.0/es2022/lib/aria.development.js';
import __property_information_lib_xmlns$ from '/cdn/v99/property-information@5.6.0/es2022/lib/xmlns.development.js';
import __property_information_lib_xml$ from '/cdn/v99/property-information@5.6.0/es2022/lib/xml.development.js';
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

// esm-build-a11c6b0df4b797445b4965319a05a28a8717d9a0-5ff2e753/node_modules/property-information/html.js
var require_html = __commonJS({
  'esm-build-a11c6b0df4b797445b4965319a05a28a8717d9a0-5ff2e753/node_modules/property-information/html.js'(
    exports,
    module
  ) {
    'use strict';

    var merge = __property_information_lib_util_merge$;
    var xlink = __property_information_lib_xlink$;
    var xml = __property_information_lib_xml$;
    var xmlns = __property_information_lib_xmlns$;
    var aria = __property_information_lib_aria$;
    var html = __property_information_lib_html$;
    module.exports = merge([xml, xlink, xmlns, aria, html]);
  }
});

// esm-build-a11c6b0df4b797445b4965319a05a28a8717d9a0-5ff2e753/mod.js
var __module = __toESM(require_html());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
