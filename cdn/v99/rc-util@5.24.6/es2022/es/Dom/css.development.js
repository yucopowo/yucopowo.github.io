/* esm.sh - esbuild bundle(rc-util@5.24.6/es/Dom/css) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-97e10ed644df3c92d35da01e60f932864bd37d72-1d2919dc/node_modules/rc-util/es/Dom/css.js
var css_exports = {};
__export(css_exports, {
  get: () => get,
  getClientSize: () => getClientSize,
  getDocSize: () => getDocSize,
  getOffset: () => getOffset,
  getOuterHeight: () => getOuterHeight,
  getOuterWidth: () => getOuterWidth,
  getScroll: () => getScroll,
  set: () => set
});
var PIXEL_PATTERN = /margin|padding|width|height|max|min|offset/;
var removePixel = {
  left: true,
  top: true
};
var floatMap = {
  cssFloat: 1,
  styleFloat: 1,
  float: 1
};
function getComputedStyle(node) {
  return node.nodeType === 1 ? node.ownerDocument.defaultView.getComputedStyle(node, null) : {};
}
function getStyleValue(node, type, value) {
  type = type.toLowerCase();
  if (value === 'auto') {
    if (type === 'height') {
      return node.offsetHeight;
    }
    if (type === 'width') {
      return node.offsetWidth;
    }
  }
  if (!(type in removePixel)) {
    removePixel[type] = PIXEL_PATTERN.test(type);
  }
  return removePixel[type] ? parseFloat(value) || 0 : value;
}
function get(node, name) {
  var length = arguments.length;
  var style = getComputedStyle(node);
  name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;
  return length === 1 ? style : getStyleValue(node, name, style[name] || node.style[name]);
}
function set(node, name, value) {
  var length = arguments.length;
  name = floatMap[name] ? ('cssFloat' in node.style ? 'cssFloat' : 'styleFloat') : name;
  if (length === 3) {
    if (typeof value === 'number' && PIXEL_PATTERN.test(name)) {
      value = ''.concat(value, 'px');
    }
    node.style[name] = value;
    return value;
  }
  for (var x in name) {
    if (name.hasOwnProperty(x)) {
      set(node, x, name[x]);
    }
  }
  return getComputedStyle(node);
}
function getOuterWidth(el) {
  if (el === document.body) {
    return document.documentElement.clientWidth;
  }
  return el.offsetWidth;
}
function getOuterHeight(el) {
  if (el === document.body) {
    return window.innerHeight || document.documentElement.clientHeight;
  }
  return el.offsetHeight;
}
function getDocSize() {
  var width = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
  var height = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
  return {
    width,
    height
  };
}
function getClientSize() {
  var width = document.documentElement.clientWidth;
  var height = window.innerHeight || document.documentElement.clientHeight;
  return {
    width,
    height
  };
}
function getScroll() {
  return {
    scrollLeft: Math.max(document.documentElement.scrollLeft, document.body.scrollLeft),
    scrollTop: Math.max(document.documentElement.scrollTop, document.body.scrollTop)
  };
}
function getOffset(node) {
  var box = node.getBoundingClientRect();
  var docElem = document.documentElement;
  return {
    left: box.left + (window.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || document.body.clientLeft || 0),
    top: box.top + (window.pageYOffset || docElem.scrollTop) - (docElem.clientTop || document.body.clientTop || 0)
  };
}

// esm-build-97e10ed644df3c92d35da01e60f932864bd37d72-1d2919dc/mod.js
var { default: __default, ...__rest } = css_exports;
var mod_default = __default !== void 0 ? __default : __rest;
export { mod_default as default };

export {getClientSize, getOffset};
