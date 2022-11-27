/* esm.sh - esbuild bundle(rc-util@5.24.6/es/omit) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-30219a956782d906bd87204d6d8b61d63b646c66-f75ce0db/node_modules/rc-util/es/omit.js
var omit_exports = {};
__export(omit_exports, {
  default: () => omit
});
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
function omit(obj, fields) {
  var clone = _objectSpread({}, obj);
  if (Array.isArray(fields)) {
    fields.forEach(function(key) {
      delete clone[key];
    });
  }
  return clone;
}

// esm-build-30219a956782d906bd87204d6d8b61d63b646c66-f75ce0db/mod.js
var { default: __default, ...__rest } = omit_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
