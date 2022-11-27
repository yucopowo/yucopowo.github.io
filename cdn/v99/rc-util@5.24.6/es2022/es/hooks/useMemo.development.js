/* esm.sh - esbuild bundle(rc-util@5.24.6/es/hooks/useMemo) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-8dce9cf3b9acf490de66c5496bbf13fb60a77d4d-e1eb30d8/node_modules/rc-util/es/hooks/useMemo.js
var useMemo_exports = {};
__export(useMemo_exports, {
  default: () => useMemo
});
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useMemo(getValue, condition, shouldUpdate) {
  var cacheRef = React.useRef({});
  if (!('value' in cacheRef.current) || shouldUpdate(cacheRef.current.condition, condition)) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }
  return cacheRef.current.value;
}

// esm-build-8dce9cf3b9acf490de66c5496bbf13fb60a77d4d-e1eb30d8/mod.js
var { default: __default, ...__rest } = useMemo_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
