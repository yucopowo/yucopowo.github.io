/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useState) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/node_modules/rc-util/es/hooks/useState.js
var useState_exports = {};
__export(useState_exports, {
  default: () => useSafeState
});
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useSafeState(defaultValue) {
  var destroyRef = React.useRef(false);
  var _React$useState = React.useState(defaultValue),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  React.useEffect(function() {
    destroyRef.current = false;
    return function() {
      destroyRef.current = true;
    };
  }, []);
  function safeSetState(updater, ignoreDestroy) {
    if (ignoreDestroy && destroyRef.current) {
      return;
    }
    setValue(updater);
  }
  return [value, safeSetState];
}

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/mod.js
var { default: __default, ...__rest } = useState_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
