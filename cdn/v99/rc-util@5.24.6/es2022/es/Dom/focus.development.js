/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/focus) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-4a661ebaad4e41f9b24a1a0df0589449ebef0618-780cc013/node_modules/rc-util/es/Dom/focus.js
var focus_exports = {};
__export(focus_exports, {
  backLastFocusNode: () => backLastFocusNode,
  clearLastFocusNode: () => clearLastFocusNode,
  getFocusNodeList: () => getFocusNodeList,
  limitTabRange: () => limitTabRange,
  saveLastFocusNode: () => saveLastFocusNode
});
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import isVisible from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/isVisible.development.js';
function focusable(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  if (isVisible(node)) {
    var nodeName = node.nodeName.toLowerCase();
    var isFocusableElement =
      ['input', 'select', 'textarea', 'button'].includes(nodeName) ||
      node.isContentEditable ||
      (nodeName === 'a' && !!node.getAttribute('href'));
    var tabIndexAttr = node.getAttribute('tabindex');
    var tabIndexNum = Number(tabIndexAttr);
    var tabIndex = null;
    if (tabIndexAttr && !Number.isNaN(tabIndexNum)) {
      tabIndex = tabIndexNum;
    } else if (isFocusableElement && tabIndex === null) {
      tabIndex = 0;
    }
    if (isFocusableElement && node.disabled) {
      tabIndex = null;
    }
    return tabIndex !== null && (tabIndex >= 0 || (includePositive && tabIndex < 0));
  }
  return false;
}
function getFocusNodeList(node) {
  var includePositive = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var res = _toConsumableArray(node.querySelectorAll('*')).filter(function(child) {
    return focusable(child, includePositive);
  });
  if (focusable(node, includePositive)) {
    res.unshift(node);
  }
  return res;
}
var lastFocusElement = null;
function saveLastFocusNode() {
  lastFocusElement = document.activeElement;
}
function clearLastFocusNode() {
  lastFocusElement = null;
}
function backLastFocusNode() {
  if (lastFocusElement) {
    try {
      lastFocusElement.focus();
    } catch (e) {}
  }
}
function limitTabRange(node, e) {
  if (e.keyCode === 9) {
    var tabNodeList = getFocusNodeList(node);
    var lastTabNode = tabNodeList[e.shiftKey ? 0 : tabNodeList.length - 1];
    var leavingTab = lastTabNode === document.activeElement || node === document.activeElement;
    if (leavingTab) {
      var target = tabNodeList[e.shiftKey ? tabNodeList.length - 1 : 0];
      target.focus();
      e.preventDefault();
    }
  }
}

// esm-build-4a661ebaad4e41f9b24a1a0df0589449ebef0618-780cc013/mod.js
var { default: __default, ...__rest } = focus_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };

export {getFocusNodeList};
