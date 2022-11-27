/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/isVisible) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-4a661ebaad4e41f9b24a1a0df0589449ebef0618-780cc013/node_modules/rc-util/es/Dom/isVisible.js
var isVisible_exports = {};
__export(isVisible_exports, {
  default: () => isVisible_default
});
var isVisible_default = function(element) {
  if (!element) {
    return false;
  }
  if (element instanceof HTMLElement && element.offsetParent) {
    return true;
  }
  if (element instanceof SVGGraphicsElement && element.getBBox) {
    var _element$getBBox = element.getBBox(),
      width = _element$getBBox.width,
      height = _element$getBBox.height;
    if (width || height) {
      return true;
    }
  }
  if (element instanceof HTMLElement && element.getBoundingClientRect) {
    var _element$getBoundingC = element.getBoundingClientRect(),
      _width = _element$getBoundingC.width,
      _height = _element$getBoundingC.height;
    if (_width || _height) {
      return true;
    }
  }
  return false;
};

// esm-build-4a661ebaad4e41f9b24a1a0df0589449ebef0618-780cc013/mod.js
var { default: __default, ...__rest } = isVisible_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };
