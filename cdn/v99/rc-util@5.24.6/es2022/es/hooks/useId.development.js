/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useId) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-c31d2ca4b4eb59ac6056194c5d4518ab53ee62ba-cbf4a5bf/node_modules/rc-util/es/hooks/useId.js
var useId_exports = {};
__export(useId_exports, {
  default: () => useId,
  resetUuid: () => resetUuid
});
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getUseId() {
  var fullClone = _objectSpread({}, React);
  return fullClone.useId;
}
var uuid = 0;
function resetUuid() {
  if (true) {
    uuid = 0;
  }
}
function useId(id) {
  var _React$useState = React.useState('ssr-id'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  var useOriginId = getUseId();
  var reactNativeId = useOriginId === null || useOriginId === void 0 ? void 0 : useOriginId();
  React.useEffect(function() {
    if (!useOriginId) {
      var nextId = uuid;
      uuid += 1;
      setInnerId('rc_unique_'.concat(nextId));
    }
  }, []);
  if (id) {
    return id;
  }
  if (false) {
    return 'test-id';
  }
  return reactNativeId || innerId;
}

// esm-build-c31d2ca4b4eb59ac6056194c5d4518ab53ee62ba-cbf4a5bf/mod.js
var { default: __default, ...__rest } = useId_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
