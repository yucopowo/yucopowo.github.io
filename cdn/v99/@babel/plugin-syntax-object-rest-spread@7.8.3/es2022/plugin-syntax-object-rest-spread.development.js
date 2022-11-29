/* esm.sh - esbuild bundle(@babel/plugin-syntax-object-rest-spread@7.8.3) es2022 development */
import ___babel_helper_plugin_utils$ from '/cdn/v99/@babel/helper-plugin-utils@7.20.2/es2022/helper-plugin-utils.development.js';
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

// esm-build-20f106dcf8706dcd935a3795e79095edc1fa4a0b-bae8eadc/node_modules/@babel/plugin-syntax-object-rest-spread/lib/index.js
var require_lib = __commonJS({
  'esm-build-20f106dcf8706dcd935a3795e79095edc1fa4a0b-bae8eadc/node_modules/@babel/plugin-syntax-object-rest-spread/lib/index.js'(
    exports
  ) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    exports.default = void 0;
    var _helperPluginUtils = ___babel_helper_plugin_utils$;
    var _default = (0, _helperPluginUtils.declare)(api => {
      api.assertVersion(7);
      return {
        name: 'syntax-object-rest-spread',
        manipulateOptions(opts, parserOpts) {
          parserOpts.plugins.push('objectRestSpread');
        }
      };
    });
    exports.default = _default;
  }
});

// esm-build-20f106dcf8706dcd935a3795e79095edc1fa4a0b-bae8eadc/mod.js
var __module = __toESM(require_lib());
var __esModule = true;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { __esModule, mod_default as default };
