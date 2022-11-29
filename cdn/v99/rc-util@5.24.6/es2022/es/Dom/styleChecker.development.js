/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/styleChecker) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-5271da7e680f403797618299e024f68738145cc8-a11d18a3/node_modules/rc-util/es/Dom/styleChecker.js
var styleChecker_exports = {};
__export(styleChecker_exports, {
  isStyleSupport: () => isStyleSupport
});
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var isStyleNameSupport = function isStyleNameSupport2(styleName) {
  if (canUseDom() && window.document.documentElement) {
    var styleNameList = Array.isArray(styleName) ? styleName : [styleName];
    var documentElement = window.document.documentElement;
    return styleNameList.some(function(name) {
      return name in documentElement.style;
    });
  }
  return false;
};
var isStyleValueSupport = function isStyleValueSupport2(styleName, value) {
  if (!isStyleNameSupport(styleName)) {
    return false;
  }
  var ele = document.createElement('div');
  var origin = ele.style[styleName];
  ele.style[styleName] = value;
  return ele.style[styleName] !== origin;
};
function isStyleSupport(styleName, styleValue) {
  if (!Array.isArray(styleName) && styleValue !== void 0) {
    return isStyleValueSupport(styleName, styleValue);
  }
  return isStyleNameSupport(styleName);
}

// esm-build-5271da7e680f403797618299e024f68738145cc8-a11d18a3/mod.js
var { default: __default, ...__rest } = styleChecker_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };

export {isStyleSupport};
