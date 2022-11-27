/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useEvent) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/node_modules/rc-util/es/hooks/useEvent.js
var useEvent_exports = {};
__export(useEvent_exports, {
  default: () => useEvent
});
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useEvent(callback) {
  var fnRef = React.useRef();
  fnRef.current = callback;
  var memoFn = React.useCallback(function() {
    var _fnRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_fnRef$current = fnRef.current) === null || _fnRef$current === void 0
      ? void 0
      : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
  }, []);
  return memoFn;
}

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/mod.js
var { default: __default, ...__rest } = useEvent_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
