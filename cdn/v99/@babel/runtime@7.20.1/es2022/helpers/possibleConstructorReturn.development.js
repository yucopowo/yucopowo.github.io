/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/possibleConstructorReturn) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-3d2972d07945659e3a6e87ff7a5cde2c9483579a-342b89af/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
var possibleConstructorReturn_exports = {};
__export(possibleConstructorReturn_exports, {
  default: () => _possibleConstructorReturn
});

// esm-build-3d2972d07945659e3a6e87ff7a5cde2c9483579a-342b89af/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(obj2) {
            return typeof obj2;
          }
        : function(obj2) {
            return obj2 && 'function' == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype
              ? 'symbol'
              : typeof obj2;
          }),
    _typeof(obj)
  );
}

// esm-build-3d2972d07945659e3a6e87ff7a5cde2c9483579a-342b89af/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// esm-build-3d2972d07945659e3a6e87ff7a5cde2c9483579a-342b89af/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

// esm-build-3d2972d07945659e3a6e87ff7a5cde2c9483579a-342b89af/mod.js
var { default: __default, ...__rest } = possibleConstructorReturn_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
