/* esm.sh - esbuild bundle(parse5@6.0.1/lib/extensions/location-info/open-element-stack-mixin) es2022 development */
import __parse5_lib_utils_mixin$ from '/cdn/v99/parse5@6.0.1/es2022/lib/utils/mixin.development.js';
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

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js
var require_open_element_stack_mixin = __commonJS({
  'esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/node_modules/parse5/lib/extensions/location-info/open-element-stack-mixin.js'(
    exports,
    module
  ) {
    'use strict';

    var Mixin = __parse5_lib_utils_mixin$;
    var LocationInfoOpenElementStackMixin = class extends Mixin {
      constructor(stack, opts) {
        super(stack);
        this.onItemPop = opts.onItemPop;
      }
      _getOverriddenMethods(mxn, orig) {
        return {
          pop() {
            mxn.onItemPop(this.current);
            orig.pop.call(this);
          },
          popAllUpToHtmlElement() {
            for (let i = this.stackTop; i > 0; i--) {
              mxn.onItemPop(this.items[i]);
            }
            orig.popAllUpToHtmlElement.call(this);
          },
          remove(element) {
            mxn.onItemPop(this.current);
            orig.remove.call(this, element);
          }
        };
      }
    };
    module.exports = LocationInfoOpenElementStackMixin;
  }
});

// esm-build-873b7aace78e62110b609e731a51dc31d943d310-abf1d744/mod.js
var __module = __toESM(require_open_element_stack_mixin());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
