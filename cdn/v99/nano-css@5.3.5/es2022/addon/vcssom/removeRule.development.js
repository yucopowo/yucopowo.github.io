/* esm.sh - esbuild bundle(nano-css@5.3.5/addon/vcssom/removeRule) es2022 development */
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

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/vcssom/removeRule.js
var require_removeRule = __commonJS({
  'esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/vcssom/removeRule.js'(
    exports
  ) {
    function removeRule2(rule) {
      var maxIndex = rule.index;
      var sh = rule.parentStyleSheet;
      var rules = sh.cssRules || sh.rules;
      maxIndex = Math.max(maxIndex, rules.length - 1);
      while (maxIndex >= 0) {
        if (rules[maxIndex] === rule) {
          sh.deleteRule(maxIndex);
          break;
        }
        maxIndex--;
      }
    }
    exports.removeRule = removeRule2;
  }
});

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/mod.js
var __module = __toESM(require_removeRule());
var { removeRule } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default, removeRule };
