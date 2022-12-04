/* esm.sh - esbuild bundle(hast-util-to-string@1.0.4) es2022 development */
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

// esm-build-30b5041b6defb8d5b432a9c89a6a31e013fe91be-b8f76191/node_modules/hast-util-to-string/index.js
var require_hast_util_to_string = __commonJS({
  'esm-build-30b5041b6defb8d5b432a9c89a6a31e013fe91be-b8f76191/node_modules/hast-util-to-string/index.js'(
    exports,
    module
  ) {
    'use strict';

    module.exports = toString;
    function toString(node) {
      if ('children' in node) {
        return all(node);
      }
      return 'value' in node ? node.value : '';
    }
    function one(node) {
      if (node.type === 'text') {
        return node.value;
      }
      return node.children ? all(node) : '';
    }
    function all(node) {
      var children = node.children;
      var length = children.length;
      var index = -1;
      var result = [];
      while (++index < length) {
        result[index] = one(children[index]);
      }
      return result.join('');
    }
  }
});

// esm-build-30b5041b6defb8d5b432a9c89a6a31e013fe91be-b8f76191/mod.js
var __module = __toESM(require_hast_util_to_string());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
