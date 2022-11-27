/* esm.sh - esbuild bundle(@babel/runtime@7.20.1/helpers/esm/objectWithoutProperties) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-378a698e2563a1d7323a95bf52dfb952ac463d96-4345a7a9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties_exports = {};
__export(objectWithoutProperties_exports, {
  default: () => _objectWithoutProperties
});

// esm-build-378a698e2563a1d7323a95bf52dfb952ac463d96-4345a7a9/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}

// esm-build-378a698e2563a1d7323a95bf52dfb952ac463d96-4345a7a9/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}

// esm-build-378a698e2563a1d7323a95bf52dfb952ac463d96-4345a7a9/mod.js
var { default: __default, ...__rest } = objectWithoutProperties_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
