/* esm.sh - esbuild bundle(@babel/plugin-transform-react-jsx@7.19.0/lib/development) es2022 development */
import * as ___babel_plugin_transform_react_jsx_lib_create_plugin$ from '/cdn/v99/@babel/plugin-transform-react-jsx@7.19.0/es2022/lib/create-plugin.development.js';
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

// esm-build-e27b8034edbe93e63a0fc32f446f8a1b7919bba5-a070e8c8/node_modules/@babel/plugin-transform-react-jsx/lib/development.js
var require_development = __commonJS({
  'esm-build-e27b8034edbe93e63a0fc32f446f8a1b7919bba5-a070e8c8/node_modules/@babel/plugin-transform-react-jsx/lib/development.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _createPlugin = ___babel_plugin_transform_react_jsx_lib_create_plugin$;
    var _default = (0, _createPlugin.default)({
      name: 'transform-react-jsx/development',
      development: true
    });
    exports.default = _default;
  }
});

// esm-build-e27b8034edbe93e63a0fc32f446f8a1b7919bba5-a070e8c8/mod.js
var __module = __toESM(require_development());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
