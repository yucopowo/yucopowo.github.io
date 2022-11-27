/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/typeof) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-5c82f07471e390811bc378c5804f63206af3a2ab-d3adf064/node_modules/@babel/runtime/helpers/esm/typeof.js
var typeof_exports = {};
__export(typeof_exports, {
  default: () => _typeof
});
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

// esm-build-5c82f07471e390811bc378c5804f63206af3a2ab-d3adf064/mod.js
var { default: __default, ...__rest } = typeof_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
