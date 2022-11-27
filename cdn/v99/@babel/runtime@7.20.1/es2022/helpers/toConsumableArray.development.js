/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/toConsumableArray) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
var toConsumableArray_exports = {};
__export(toConsumableArray_exports, {
  default: () => _toConsumableArray
});

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if ((typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) || iter['@@iterator'] != null)
    return Array.from(iter);
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

// esm-build-66cedce76f6400dae290e09f163c7f2425933e08-9f226dde/mod.js
var { default: __default, ...__rest } = toConsumableArray_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
