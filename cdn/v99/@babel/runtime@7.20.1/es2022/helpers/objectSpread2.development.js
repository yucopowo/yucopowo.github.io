/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/objectSpread2) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-a86eea20a3fee383c9ae898c711627a2562a1a55-d0837d71/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2_exports = {};
__export(objectSpread2_exports, {
  default: () => _objectSpread2
});

// esm-build-a86eea20a3fee383c9ae898c711627a2562a1a55-d0837d71/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// esm-build-a86eea20a3fee383c9ae898c711627a2562a1a55-d0837d71/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

// esm-build-a86eea20a3fee383c9ae898c711627a2562a1a55-d0837d71/mod.js
var { default: __default, ...__rest } = objectSpread2_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
