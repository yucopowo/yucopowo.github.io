/* esm.sh - esbuild bundle(hastscript@6.0.0/svg) es2022 development */
import __hastscript_factory$ from '/cdn/v99/hastscript@6.0.0/es2022/factory.development.js';
import __hastscript_svg_case_sensitive_tag_names_json$ from '/cdn/v99/hastscript@6.0.0/es2022/svg-case-sensitive-tag-names.json.development.js';
import __property_information_svg$ from '/cdn/v99/property-information@5.6.0/es2022/svg.development.js';
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

// esm-build-5e4afe4f2a566f9a4a1620029a8dfe2fea5f7e2a-dd444b97/node_modules/hastscript/svg.js
var require_svg = __commonJS({
  'esm-build-5e4afe4f2a566f9a4a1620029a8dfe2fea5f7e2a-dd444b97/node_modules/hastscript/svg.js'(exports, module) {
    'use strict';

    var schema = __property_information_svg$;
    var caseSensitive = __hastscript_svg_case_sensitive_tag_names_json$;
    var factory = __hastscript_factory$;
    var svg = factory(schema, 'g', caseSensitive);
    svg.displayName = 'svg';
    module.exports = svg;
  }
});

// esm-build-5e4afe4f2a566f9a4a1620029a8dfe2fea5f7e2a-dd444b97/mod.js
var __module = __toESM(require_svg());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
