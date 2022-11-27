/* esm.sh - esbuild bundle(@antv/dom-util@2.0.4) es2022 development */
// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/add-event-listener.js
function addEventListener(target, eventType, callback) {
  if (target) {
    if (typeof target.addEventListener === 'function') {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    }
    if (typeof target.attachEvent === 'function') {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  }
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/create-dom.js
var TABLE;
var TABLE_TR;
var FRAGMENT_REG;
var CONTAINERS;
function initConstants() {
  TABLE = document.createElement('table');
  TABLE_TR = document.createElement('tr');
  FRAGMENT_REG = /^\s*<(\w+|!)[^>]*>/;
  CONTAINERS = {
    tr: document.createElement('tbody'),
    tbody: TABLE,
    thead: TABLE,
    tfoot: TABLE,
    td: TABLE_TR,
    th: TABLE_TR,
    '*': document.createElement('div')
  };
}
function createDom(str) {
  if (!TABLE) {
    initConstants();
  }
  var name = FRAGMENT_REG.test(str) && RegExp.$1;
  if (!name || !(name in CONTAINERS)) {
    name = '*';
  }
  var container = CONTAINERS[name];
  str = typeof str === 'string' ? str.replace(/(^\s*)|(\s*$)/g, '') : str;
  container.innerHTML = '' + str;
  var dom = container.childNodes[0];
  if (dom && container.contains(dom)) {
    container.removeChild(dom);
  }
  return dom;
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-style.js
function getStyle(dom, name, defaultValue) {
  var v;
  try {
    v = window.getComputedStyle ? window.getComputedStyle(dom, null)[name] : dom.style[name];
  } catch (e) {
  } finally {
    v = v === void 0 ? defaultValue : v;
  }
  return v;
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-height.js
function getHeight(el, defaultValue) {
  var height = getStyle(el, 'height', defaultValue);
  if (height === 'auto') {
    height = el.offsetHeight;
  }
  return parseFloat(height);
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-outer-height.js
function getOuterHeight(el, defaultValue) {
  var height = getHeight(el, defaultValue);
  var bTop = parseFloat(getStyle(el, 'borderTopWidth')) || 0;
  var pTop = parseFloat(getStyle(el, 'paddingTop')) || 0;
  var pBottom = parseFloat(getStyle(el, 'paddingBottom')) || 0;
  var bBottom = parseFloat(getStyle(el, 'borderBottomWidth')) || 0;
  var mTop = parseFloat(getStyle(el, 'marginTop')) || 0;
  var mBottom = parseFloat(getStyle(el, 'marginBottom')) || 0;
  return height + bTop + bBottom + pTop + pBottom + mTop + mBottom;
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-width.js
function getHeight2(el, defaultValue) {
  var width = getStyle(el, 'width', defaultValue);
  if (width === 'auto') {
    width = el.offsetWidth;
  }
  return parseFloat(width);
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-outer-width.js
function getOuterWidth(el, defaultValue) {
  var width = getHeight2(el, defaultValue);
  var bLeft = parseFloat(getStyle(el, 'borderLeftWidth')) || 0;
  var pLeft = parseFloat(getStyle(el, 'paddingLeft')) || 0;
  var pRight = parseFloat(getStyle(el, 'paddingRight')) || 0;
  var bRight = parseFloat(getStyle(el, 'borderRightWidth')) || 0;
  var mRight = parseFloat(getStyle(el, 'marginRight')) || 0;
  var mLeft = parseFloat(getStyle(el, 'marginLeft')) || 0;
  return width + bLeft + bRight + pLeft + pRight + mLeft + mRight;
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/get-ratio.js
function getRatio() {
  return window.devicePixelRatio ? window.devicePixelRatio : 2;
}

// esm-build-900ecc86fb7cacccf76a8ab3791974c07e1e12d9-55a34202/node_modules/@antv/dom-util/esm/modify-css.js
function modifyCSS(dom, css) {
  if (dom) {
    for (var key in css) {
      if (css.hasOwnProperty(key)) {
        dom.style[key] = css[key];
      }
    }
  }
  return dom;
}
export {
  addEventListener,
  createDom,
  getHeight,
  getOuterHeight,
  getOuterWidth,
  getRatio,
  getStyle,
  getHeight2 as getWidth,
  modifyCSS
};
