/* esm.sh - esbuild bundle(rc-util@5.24.6/es/getScrollBarSize) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-fa035d8b34d2a86a6eab28f0cd154f71fd85f6ba-42310e6e/node_modules/rc-util/es/getScrollBarSize.js
var getScrollBarSize_exports = {};
__export(getScrollBarSize_exports, {
  default: () => getScrollBarSize,
  getTargetScrollBarSize: () => getTargetScrollBarSize
});
var cached;
function getScrollBarSize(fresh) {
  if (typeof document === 'undefined') {
    return 0;
  }
  if (fresh || cached === void 0) {
    var inner = document.createElement('div');
    inner.style.width = '100%';
    inner.style.height = '200px';
    var outer = document.createElement('div');
    var outerStyle = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.top = '0';
    outerStyle.left = '0';
    outerStyle.pointerEvents = 'none';
    outerStyle.visibility = 'hidden';
    outerStyle.width = '200px';
    outerStyle.height = '150px';
    outerStyle.overflow = 'hidden';
    outer.appendChild(inner);
    document.body.appendChild(outer);
    var widthContained = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var widthScroll = inner.offsetWidth;
    if (widthContained === widthScroll) {
      widthScroll = outer.clientWidth;
    }
    document.body.removeChild(outer);
    cached = widthContained - widthScroll;
  }
  return cached;
}
function ensureSize(str) {
  var match = str.match(/^(.*)px$/);
  var value = Number(match === null || match === void 0 ? void 0 : match[1]);
  return Number.isNaN(value) ? getScrollBarSize() : value;
}
function getTargetScrollBarSize(target) {
  if (typeof document === 'undefined' || !target || !(target instanceof Element)) {
    return {
      width: 0,
      height: 0
    };
  }
  var _getComputedStyle = getComputedStyle(target, '::-webkit-scrollbar'),
    width = _getComputedStyle.width,
    height = _getComputedStyle.height;
  return {
    width: ensureSize(width),
    height: ensureSize(height)
  };
}

// esm-build-fa035d8b34d2a86a6eab28f0cd154f71fd85f6ba-42310e6e/mod.js
var { default: __default, ...__rest } = getScrollBarSize_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };

export {getScrollBarSize};

export {getTargetScrollBarSize};
