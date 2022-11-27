/* esm.sh - esbuild bundle(lodash@4.17.21/_ListCache) es2022 development */
import __lodash__listCacheDelete$ from '/cdn/v99/lodash@4.17.21/es2022/_listCacheDelete.development.js';
import __lodash__listCacheClear$ from '/cdn/v99/lodash@4.17.21/es2022/_listCacheClear.development.js';
import __lodash__listCacheSet$ from '/cdn/v99/lodash@4.17.21/es2022/_listCacheSet.development.js';
import __lodash__listCacheHas$ from '/cdn/v99/lodash@4.17.21/es2022/_listCacheHas.development.js';
import __lodash__listCacheGet$ from '/cdn/v99/lodash@4.17.21/es2022/_listCacheGet.development.js';
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

// esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  'esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/node_modules/lodash/_ListCache.js'(exports, module) {
    var listCacheClear = __lodash__listCacheClear$;
    var listCacheDelete = __lodash__listCacheDelete$;
    var listCacheGet = __lodash__listCacheGet$;
    var listCacheHas = __lodash__listCacheHas$;
    var listCacheSet = __lodash__listCacheSet$;
    function ListCache(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype['delete'] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/mod.js
var __module = __toESM(require_ListCache());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
