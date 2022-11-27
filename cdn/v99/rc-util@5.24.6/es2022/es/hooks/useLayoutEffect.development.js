/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useLayoutEffect) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/node_modules/rc-util/es/hooks/useLayoutEffect.js
var useLayoutEffect_exports = {};
__export(useLayoutEffect_exports, {
  default: () => useLayoutEffect_default,
  useLayoutUpdateEffect: () => useLayoutUpdateEffect
});
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var useLayoutEffect2 = canUseDom() ? React.useLayoutEffect : React.useEffect;
var useLayoutEffect_default = useLayoutEffect2;
export var useLayoutUpdateEffect = function useLayoutUpdateEffect2(callback, deps) {
  var firstMountRef = React.useRef(true);
  useLayoutEffect2(function() {
    if (!firstMountRef.current) {
      return callback();
    }
  }, deps);
  useLayoutEffect2(function() {
    firstMountRef.current = false;
    return function() {
      firstMountRef.current = true;
    };
  }, []);
};

// esm-build-520b00ab7042cb906b065ce3c590d3238d3a858d-8926d365/mod.js
var { default: __default, ...__rest } = useLayoutEffect_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
