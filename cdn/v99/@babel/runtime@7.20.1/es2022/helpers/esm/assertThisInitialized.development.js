/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/assertThisInitialized) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-dd954eb5107e307e6f915186adcca698516a8cd1-dc5fee6b/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
var assertThisInitialized_exports = {};
__export(assertThisInitialized_exports, {
  default: () => _assertThisInitialized
});
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

// esm-build-dd954eb5107e307e6f915186adcca698516a8cd1-dc5fee6b/mod.js
var { default: __default, ...__rest } = assertThisInitialized_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
