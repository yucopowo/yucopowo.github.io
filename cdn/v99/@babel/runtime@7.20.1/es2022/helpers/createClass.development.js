/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/createClass) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-d7c19717fcf0d238090d36f1e972daf654553ebf-309a7efd/node_modules/@babel/runtime/helpers/esm/createClass.js
var createClass_exports = {};
__export(createClass_exports, {
  default: () => _createClass
});
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, 'prototype', {
    writable: false
  });
  return Constructor;
}

// esm-build-d7c19717fcf0d238090d36f1e972daf654553ebf-309a7efd/mod.js
var { default: __default, ...__rest } = createClass_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
