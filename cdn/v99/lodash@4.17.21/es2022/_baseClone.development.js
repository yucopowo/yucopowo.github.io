/* esm.sh - esbuild bundle(lodash@4.17.21/_baseClone) es2022 development */
import __lodash_keys$ from '/cdn/v99/lodash@4.17.21/es2022/keys.development.js';
import __lodash_isSet$ from '/cdn/v99/lodash@4.17.21/es2022/isSet.development.js';
import __lodash_isBuffer$ from '/cdn/v99/lodash@4.17.21/es2022/isBuffer.development.js';
import __lodash_isObject$ from '/cdn/v99/lodash@4.17.21/es2022/isObject.development.js';
import __lodash__cloneBuffer$ from '/cdn/v99/lodash@4.17.21/es2022/_cloneBuffer.development.js';
import __lodash__baseAssign$ from '/cdn/v99/lodash@4.17.21/es2022/_baseAssign.development.js';
import __lodash__assignValue$ from '/cdn/v99/lodash@4.17.21/es2022/_assignValue.development.js';
import __lodash__Stack$ from '/cdn/v99/lodash@4.17.21/es2022/_Stack.development.js';
import __lodash__initCloneObject$ from '/cdn/v99/lodash@4.17.21/es2022/_initCloneObject.development.js';
import __lodash__initCloneByTag$ from '/cdn/v99/lodash@4.17.21/es2022/_initCloneByTag.development.js';
import __lodash__getAllKeysIn$ from '/cdn/v99/lodash@4.17.21/es2022/_getAllKeysIn.development.js';
import __lodash__copyArray$ from '/cdn/v99/lodash@4.17.21/es2022/_copyArray.development.js';
import __lodash_keysIn$ from '/cdn/v99/lodash@4.17.21/es2022/keysIn.development.js';
import __lodash_isMap$ from '/cdn/v99/lodash@4.17.21/es2022/isMap.development.js';
import __lodash__copySymbols$ from '/cdn/v99/lodash@4.17.21/es2022/_copySymbols.development.js';
import __lodash__baseAssignIn$ from '/cdn/v99/lodash@4.17.21/es2022/_baseAssignIn.development.js';
import __lodash__getTag$ from '/cdn/v99/lodash@4.17.21/es2022/_getTag.development.js';
import __lodash__getAllKeys$ from '/cdn/v99/lodash@4.17.21/es2022/_getAllKeys.development.js';
import __lodash__copySymbolsIn$ from '/cdn/v99/lodash@4.17.21/es2022/_copySymbolsIn.development.js';
import __lodash__arrayEach$ from '/cdn/v99/lodash@4.17.21/es2022/_arrayEach.development.js';
import __lodash_isArray$ from '/cdn/v99/lodash@4.17.21/es2022/isArray.development.js';
import __lodash__initCloneArray$ from '/cdn/v99/lodash@4.17.21/es2022/_initCloneArray.development.js';
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

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  'esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/node_modules/lodash/_baseClone.js'(exports, module) {
    var Stack = __lodash__Stack$;
    var arrayEach = __lodash__arrayEach$;
    var assignValue = __lodash__assignValue$;
    var baseAssign = __lodash__baseAssign$;
    var baseAssignIn = __lodash__baseAssignIn$;
    var cloneBuffer = __lodash__cloneBuffer$;
    var copyArray = __lodash__copyArray$;
    var copySymbols = __lodash__copySymbols$;
    var copySymbolsIn = __lodash__copySymbolsIn$;
    var getAllKeys = __lodash__getAllKeys$;
    var getAllKeysIn = __lodash__getAllKeysIn$;
    var getTag = __lodash__getTag$;
    var initCloneArray = __lodash__initCloneArray$;
    var initCloneByTag = __lodash__initCloneByTag$;
    var initCloneObject = __lodash__initCloneObject$;
    var isArray = __lodash_isArray$;
    var isBuffer = __lodash_isBuffer$;
    var isMap = __lodash_isMap$;
    var isObject = __lodash_isObject$;
    var isSet = __lodash_isSet$;
    var keys = __lodash_keys$;
    var keysIn = __lodash_keysIn$;
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = '[object Arguments]';
    var arrayTag = '[object Array]';
    var boolTag = '[object Boolean]';
    var dateTag = '[object Date]';
    var errorTag = '[object Error]';
    var funcTag = '[object Function]';
    var genTag = '[object GeneratorFunction]';
    var mapTag = '[object Map]';
    var numberTag = '[object Number]';
    var objectTag = '[object Object]';
    var regexpTag = '[object RegExp]';
    var setTag = '[object Set]';
    var stringTag = '[object String]';
    var symbolTag = '[object Symbol]';
    var weakMapTag = '[object WeakMap]';
    var arrayBufferTag = '[object ArrayBuffer]';
    var dataViewTag = '[object DataView]';
    var float32Tag = '[object Float32Array]';
    var float64Tag = '[object Float64Array]';
    var int8Tag = '[object Int8Array]';
    var int16Tag = '[object Int16Array]';
    var int32Tag = '[object Int32Array]';
    var uint8Tag = '[object Uint8Array]';
    var uint8ClampedTag = '[object Uint8ClampedArray]';
    var uint16Tag = '[object Uint16Array]';
    var uint32Tag = '[object Uint32Array]';
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[
      dataViewTag
    ] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[
      float64Tag
    ] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[
      mapTag
    ] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[
      setTag
    ] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[
      uint8ClampedTag
    ] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result,
        isDeep = bitmask & CLONE_DEEP_FLAG,
        isFlat = bitmask & CLONE_FLAT_FLAG,
        isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value),
          isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat
              ? copySymbolsIn(value, baseAssignIn(result, value))
              : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? (isFlat ? getAllKeysIn : getAllKeys) : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// esm-build-3c45f77d0390394d6ba3b804bd9e15c4b79d2d55-4b8ce394/mod.js
var __module = __toESM(require_baseClone());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
