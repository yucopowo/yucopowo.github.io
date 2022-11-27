/* esm.sh - esbuild bundle(nano-css@5.3.5/addon/cssom) es2022 development */
import __nano_css_addon___dev___warnOnMissingDependencies$ from '/cdn/v99/nano-css@5.3.5/es2022/addon/__dev__/warnOnMissingDependencies.development.js';
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

// esm-build-9032225827837a4cfd29a89ba2fa026ef8604a99-be1a5e32/node_modules/nano-css/addon/cssom.js
var require_cssom = __commonJS({
  'esm-build-9032225827837a4cfd29a89ba2fa026ef8604a99-be1a5e32/node_modules/nano-css/addon/cssom.js'(exports) {
    'use strict';

    exports.addon = function(renderer) {
      if (!renderer.client) return;
      if (true) {
        __nano_css_addon___dev___warnOnMissingDependencies$('cssom', renderer, ['sh']);
      }
      document.head.appendChild((renderer.msh = document.createElement('style')));
      renderer.createRule = function(selector, prelude) {
        var rawCss = selector + '{}';
        if (prelude) rawCss = prelude + '{' + rawCss + '}';
        var sheet = prelude ? renderer.msh.sheet : renderer.sh.sheet;
        var index = sheet.insertRule(rawCss, sheet.cssRules.length);
        var rule = (sheet.cssRules || sheet.rules)[index];
        rule.index = index;
        if (prelude) {
          var selectorRule = (rule.cssRules || rule.rules)[0];
          rule.style = selectorRule.style;
          rule.styleMap = selectorRule.styleMap;
        }
        return rule;
      };
    };
  }
});

// esm-build-9032225827837a4cfd29a89ba2fa026ef8604a99-be1a5e32/mod.js
var __module = __toESM(require_cssom());
var { addon } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { addon, mod_default as default };
