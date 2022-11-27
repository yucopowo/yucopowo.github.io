/* esm.sh - esbuild bundle(lodash@4.17.21/_getTag) es2022 development */
import __lodash__toSource$ from '/cdn/v99/lodash@4.17.21/es2022/_toSource.development.js';
import __lodash__baseGetTag$ from '/cdn/v99/lodash@4.17.21/es2022/_baseGetTag.development.js';
import __lodash__WeakMap$ from '/cdn/v99/lodash@4.17.21/es2022/_WeakMap.development.js';
import __lodash__Set$ from '/cdn/v99/lodash@4.17.21/es2022/_Set.development.js';
import __lodash__Promise$ from '/cdn/v99/lodash@4.17.21/es2022/_Promise.development.js';
import __lodash__Map$ from '/cdn/v99/lodash@4.17.21/es2022/_Map.development.js';
import __lodash__DataView$ from '/cdn/v99/lodash@4.17.21/es2022/_DataView.development.js';
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

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  'esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/node_modules/lodash/_getTag.js'(exports, module) {
    var DataView = __lodash__DataView$;
    var Map = __lodash__Map$;
    var Promise2 = __lodash__Promise$;
    var Set = __lodash__Set$;
    var WeakMap = __lodash__WeakMap$;
    var baseGetTag = __lodash__baseGetTag$;
    var toSource = __lodash__toSource$;
    var mapTag = '[object Map]';
    var objectTag = '[object Object]';
    var promiseTag = '[object Promise]';
    var setTag = '[object Set]';
    var weakMapTag = '[object WeakMap]';
    var dataViewTag = '[object DataView]';
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (
      (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
      (Map && getTag(new Map()) != mapTag) ||
      (Promise2 && getTag(Promise2.resolve()) != promiseTag) ||
      (Set && getTag(new Set()) != setTag) ||
      (WeakMap && getTag(new WeakMap()) != weakMapTag)
    ) {
      getTag = function(value) {
        var result = baseGetTag(value),
          Ctor = result == objectTag ? value.constructor : void 0,
          ctorString = Ctor ? toSource(Ctor) : '';
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// esm-build-ba70eea459e66d66058d47feeb102c5d88b0c5af-8df07122/mod.js
var __module = __toESM(require_getTag());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
