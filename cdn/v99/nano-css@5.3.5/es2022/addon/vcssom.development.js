/* esm.sh - esbuild bundle(nano-css@5.3.5/addon/vcssom) es2022 development */
import __nano_css_addon___dev___warnOnMissingDependencies$ from '/cdn/v99/nano-css@5.3.5/es2022/addon/__dev__/warnOnMissingDependencies.development.js';
import { removeRule as __nano_css_addon_vcssom_removeRule$removeRule } from '/cdn/v99/nano-css@5.3.5/es2022/addon/vcssom/removeRule.development.js';
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

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/vcssom.js
var require_vcssom = __commonJS({
  'esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/node_modules/nano-css/addon/vcssom.js'(exports) {
    'use strict';

    var removeRule = __nano_css_addon_vcssom_removeRule$removeRule;
    exports.addon = function(renderer) {
      if (!renderer.client) return;
      if (true) {
        __nano_css_addon___dev___warnOnMissingDependencies$('cssom', renderer, ['createRule']);
      }
      var kebab = renderer.kebab;
      function VRule(selector, prelude) {
        this.rule = renderer.createRule(selector, prelude);
        this.decl = {};
      }
      VRule.prototype.diff = function(newDecl) {
        var oldDecl = this.decl;
        var style = this.rule.style;
        var property;
        for (property in oldDecl) if (newDecl[property] === void 0) style.removeProperty(property);
        for (property in newDecl)
          if (newDecl[property] !== oldDecl[property]) style.setProperty(kebab(property), newDecl[property]);
        this.decl = newDecl;
      };
      VRule.prototype.del = function() {
        removeRule(this.rule);
      };
      function VSheet() {
        this.tree = {};
      }
      VSheet.prototype.diff = function(newTree) {
        var oldTree = this.tree;
        for (var prelude in oldTree) {
          if (newTree[prelude] === void 0) {
            var rules = oldTree[prelude];
            for (var selector in rules) rules[selector].del();
          }
        }
        for (var prelude in newTree) {
          if (oldTree[prelude] === void 0) {
            for (var selector in newTree[prelude]) {
              var rule = new VRule(selector, prelude);
              rule.diff(newTree[prelude][selector]);
              newTree[prelude][selector] = rule;
            }
          } else {
            var oldRules = oldTree[prelude];
            var newRules = newTree[prelude];
            for (var selector in oldRules) if (!newRules[selector]) oldRules[selector].del();
            for (var selector in newRules) {
              var rule = oldRules[selector];
              if (rule) {
                rule.diff(newRules[selector]);
                newRules[selector] = rule;
              } else {
                rule = new VRule(selector, prelude);
                rule.diff(newRules[selector]);
                newRules[selector] = rule;
              }
            }
          }
        }
        this.tree = newTree;
      };
      renderer.VRule = VRule;
      renderer.VSheet = VSheet;
    };
  }
});

// esm-build-87476769b54bc45c762dfb898e648c7bf2734650-5b8acba0/mod.js
var __module = __toESM(require_vcssom());
var { addon } = __module;
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { addon, mod_default as default };
