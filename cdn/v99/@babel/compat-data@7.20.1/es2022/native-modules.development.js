/* esm.sh - esbuild bundle(@babel/compat-data@7.20.1/native-modules) es2022 development */
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

// esm-build-3200cd3b408f99c526fddbd3991ba470b2130529-aa60a433/node_modules/@babel/compat-data/data/native-modules.json
var require_native_modules = __commonJS({
  'esm-build-3200cd3b408f99c526fddbd3991ba470b2130529-aa60a433/node_modules/@babel/compat-data/data/native-modules.json'(
    exports,
    module
  ) {
    module.exports = {
      'es6.module': {
        chrome: '61',
        and_chr: '61',
        edge: '16',
        firefox: '60',
        and_ff: '60',
        node: '13.2.0',
        opera: '48',
        op_mob: '48',
        safari: '10.1',
        ios: '10.3',
        samsung: '8.2',
        android: '61',
        electron: '2.0',
        ios_saf: '10.3'
      }
    };
  }
});

// esm-build-3200cd3b408f99c526fddbd3991ba470b2130529-aa60a433/node_modules/@babel/compat-data/native-modules.js
var require_native_modules2 = __commonJS({
  'esm-build-3200cd3b408f99c526fddbd3991ba470b2130529-aa60a433/node_modules/@babel/compat-data/native-modules.js'(
    exports,
    module
  ) {
    module.exports = require_native_modules();
  }
});

// esm-build-3200cd3b408f99c526fddbd3991ba470b2130529-aa60a433/mod.js
var __module = __toESM(require_native_modules2());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
