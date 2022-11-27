/* esm.sh - esbuild bundle(lodash@4.17.21/_Stack) es2022 development */
import __lodash__ListCache$ from '/cdn/v99/lodash@4.17.21/es2022/_ListCache.development.js';
import __lodash__stackSet$ from '/cdn/v99/lodash@4.17.21/es2022/_stackSet.development.js';
import __lodash__stackHas$ from '/cdn/v99/lodash@4.17.21/es2022/_stackHas.development.js';
import __lodash__stackGet$ from '/cdn/v99/lodash@4.17.21/es2022/_stackGet.development.js';
import __lodash__stackDelete$ from '/cdn/v99/lodash@4.17.21/es2022/_stackDelete.development.js';
import __lodash__stackClear$ from '/cdn/v99/lodash@4.17.21/es2022/_stackClear.development.js';
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_Stack.js'(exports, module) {
    var ListCache = __lodash__ListCache$;
    var stackClear = __lodash__stackClear$;
    var stackDelete = __lodash__stackDelete$;
    var stackGet = __lodash__stackGet$;
    var stackHas = __lodash__stackHas$;
    var stackSet = __lodash__stackSet$;
    function Stack(entries) {
      var data = (this.__data__ = new ListCache(entries));
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype['delete'] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_Stack());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
