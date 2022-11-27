/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/createSuper) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/createSuper.js
var createSuper_exports = {};
__export(createSuper_exports, {
  default: () => _createSuper
});

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
  return _getPrototypeOf(o);
}

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/typeof.js
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

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError('Derived constructors may only return object or undefined');
  }
  return _assertThisInitialized(self);
}

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

// esm-build-6ae6a134006b550609af75d1486c32afa8de8bc9-f092876d/mod.js
var { default: __default, ...__rest } = createSuper_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
