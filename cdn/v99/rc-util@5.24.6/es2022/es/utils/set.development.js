/* esm.sh - esbuild bundle(rc-util@5.24.6/es/utils/set) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-448800c9276523a8ca553901550cea0560bcb608-354ce41d/node_modules/rc-util/es/utils/set.js
var set_exports = {};
__export(set_exports, {
  default: () => set
});
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _toArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toArray.development.js';
import get from '/cdn/v99/rc-util@5.24.6/es2022/es/utils/get.development.js';
function internalSet(entity, paths, value, removeIfUndefined) {
  if (!paths.length) {
    return value;
  }
  var _paths = _toArray(paths),
    path = _paths[0],
    restPath = _paths.slice(1);
  var clone;
  if (!entity && typeof path === 'number') {
    clone = [];
  } else if (Array.isArray(entity)) {
    clone = _toConsumableArray(entity);
  } else {
    clone = _objectSpread({}, entity);
  }
  if (removeIfUndefined && value === void 0 && restPath.length === 1) {
    delete clone[path][restPath[0]];
  } else {
    clone[path] = internalSet(clone[path], restPath, value, removeIfUndefined);
  }
  return clone;
}
function set(entity, paths, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (paths.length && removeIfUndefined && value === void 0 && !get(entity, paths.slice(0, -1))) {
    return entity;
  }
  return internalSet(entity, paths, value, removeIfUndefined);
}

// esm-build-448800c9276523a8ca553901550cea0560bcb608-354ce41d/mod.js
var { default: __default, ...__rest } = set_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
