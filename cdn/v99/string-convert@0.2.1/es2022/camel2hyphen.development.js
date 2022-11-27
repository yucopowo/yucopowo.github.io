/* esm.sh - esbuild bundle(string-convert@0.2.1/camel2hyphen) es2022 development */
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

// esm-build-c4125af030907cf5ab29aa224162f626cede38f4-9a9ed96c/node_modules/string-convert/camel2hyphen.js
var require_camel2hyphen = __commonJS({
  'esm-build-c4125af030907cf5ab29aa224162f626cede38f4-9a9ed96c/node_modules/string-convert/camel2hyphen.js'(
    exports,
    module
  ) {
    var camel2hyphen = function(str) {
      return str
        .replace(/[A-Z]/g, function(match) {
          return '-' + match.toLowerCase();
        })
        .toLowerCase();
    };
    module.exports = camel2hyphen;
  }
});

// esm-build-c4125af030907cf5ab29aa224162f626cede38f4-9a9ed96c/mod.js
var __module = __toESM(require_camel2hyphen());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
