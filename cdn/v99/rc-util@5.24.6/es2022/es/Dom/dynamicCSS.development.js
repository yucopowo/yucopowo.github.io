/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/dynamicCSS) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-6d5de7e03b3501522cc1608935c7582fdfd90cdb-c7209be5/node_modules/rc-util/es/Dom/dynamicCSS.js
var dynamicCSS_exports = {};
__export(dynamicCSS_exports, {
  clearContainerCache: () => clearContainerCache,
  injectCSS: () => injectCSS,
  removeCSS: () => removeCSS,
  updateCSS: () => updateCSS
});
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
import contains from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/contains.development.js';
var APPEND_ORDER = 'data-rc-order';
var MARK_KEY = 'rc-util-key';
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    mark = _ref.mark;
  if (mark) {
    return mark.startsWith('data-') ? mark : 'data-'.concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head = document.querySelector('head');
  return head || document.body;
}
function getOrder(prepend) {
  if (prepend === 'queue') {
    return 'prependQueue';
  }
  return prepend ? 'prepend' : 'append';
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === 'STYLE';
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp,
    prepend = option.prepend;
  var styleNode = document.createElement('style');
  styleNode.setAttribute(APPEND_ORDER, getOrder(prepend));
  if (csp === null || csp === void 0 ? void 0 : csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (prepend === 'queue') {
      var existStyle = findStyles(container).filter(function(node) {
        return ['prepend', 'prependQueue'].includes(node.getAttribute(APPEND_ORDER));
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function removeCSS(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var existNode = findExistNode(key, option);
  if (existNode) {
    var container = getContainer(option);
    container.removeChild(existNode);
  }
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS('', option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function clearContainerCache() {
  containerCache.clear();
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if (
      ((_option$csp = option.csp) === null || _option$csp === void 0 ? void 0 : _option$csp.nonce) &&
      existNode.nonce !==
        ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)
    ) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// esm-build-6d5de7e03b3501522cc1608935c7582fdfd90cdb-c7209be5/mod.js
var { default: __default, ...__rest } = dynamicCSS_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };


export {removeCSS, updateCSS, injectCSS};
