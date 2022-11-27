/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/defineProperty) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-64e3d3ef857fb28eb1d38715d9d293f392db55ad-d7714603/node_modules/@babel/runtime/helpers/esm/defineProperty.js
var defineProperty_exports = {};
__export(defineProperty_exports, {
  default: () => _defineProperty
});
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// esm-build-64e3d3ef857fb28eb1d38715d9d293f392db55ad-d7714603/mod.js
var { default: __default, ...__rest } = defineProperty_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
