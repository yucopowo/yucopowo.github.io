/* esm.sh - esbuild bundle(lodash@4.17.21/_MapCache) es2022 development */
import __lodash__mapCacheSet$ from '/cdn/v99/lodash@4.17.21/es2022/_mapCacheSet.development.js';
import __lodash__mapCacheHas$ from '/cdn/v99/lodash@4.17.21/es2022/_mapCacheHas.development.js';
import __lodash__mapCacheGet$ from '/cdn/v99/lodash@4.17.21/es2022/_mapCacheGet.development.js';
import __lodash__mapCacheDelete$ from '/cdn/v99/lodash@4.17.21/es2022/_mapCacheDelete.development.js';
import __lodash__mapCacheClear$ from '/cdn/v99/lodash@4.17.21/es2022/_mapCacheClear.development.js';
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

// esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  'esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/node_modules/lodash/_MapCache.js'(exports, module) {
    var mapCacheClear = __lodash__mapCacheClear$;
    var mapCacheDelete = __lodash__mapCacheDelete$;
    var mapCacheGet = __lodash__mapCacheGet$;
    var mapCacheHas = __lodash__mapCacheHas$;
    var mapCacheSet = __lodash__mapCacheSet$;
    function MapCache(entries) {
      var index = -1,
        length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype['delete'] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// esm-build-c30df86ea0a308f781b88568f19a82a2390b25e5-46e135eb/mod.js
var __module = __toESM(require_MapCache());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
