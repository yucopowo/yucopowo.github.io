/* esm.sh - esbuild bundle(unist-builder@2.0.3) es2022 development */
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

// esm-build-ef0ddbd7f4ba4554d948c0fd46610c06538d7c1f-6eb9cb23/node_modules/unist-builder/index.js
var require_unist_builder = __commonJS({
  'esm-build-ef0ddbd7f4ba4554d948c0fd46610c06538d7c1f-6eb9cb23/node_modules/unist-builder/index.js'(exports, module) {
    'use strict';

    module.exports = u;
    function u(type, props, value) {
      var node;
      if ((value === null || value === void 0) && (typeof props !== 'object' || Array.isArray(props))) {
        value = props;
        props = {};
      }
      node = Object.assign(
        {
          type: String(type)
        },
        props
      );
      if (Array.isArray(value)) {
        node.children = value;
      } else if (value !== null && value !== void 0) {
        node.value = String(value);
      }
      return node;
    }
  }
});

// esm-build-ef0ddbd7f4ba4554d948c0fd46610c06538d7c1f-6eb9cb23/mod.js
var __module = __toESM(require_unist_builder());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
