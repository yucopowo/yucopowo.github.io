/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/inherits) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-a0558e0c3eb1cd8d8e6da59bc7578e98f84ed01f-94aacc32/node_modules/@babel/runtime/helpers/esm/inherits.js
var inherits_exports = {};
__export(inherits_exports, {
  default: () => _inherits
});

// esm-build-a0558e0c3eb1cd8d8e6da59bc7578e98f84ed01f-94aacc32/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
  return _setPrototypeOf(o, p);
}

// esm-build-a0558e0c3eb1cd8d8e6da59bc7578e98f84ed01f-94aacc32/node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, 'prototype', {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// esm-build-a0558e0c3eb1cd8d8e6da59bc7578e98f84ed01f-94aacc32/mod.js
var { default: __default, ...__rest } = inherits_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
