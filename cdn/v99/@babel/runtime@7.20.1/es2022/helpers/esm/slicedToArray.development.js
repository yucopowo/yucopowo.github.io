/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/slicedToArray) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
var slicedToArray_exports = {};
__export(slicedToArray_exports, {
  default: () => _slicedToArray
});

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) || arr['@@iterator'];
  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _s, _e;
  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest()
  );
}

// esm-build-2d92dca6ed82761df6160c1ef658a47cad738508-2dfdacc4/mod.js
var { default: __default, ...__rest } = slicedToArray_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
