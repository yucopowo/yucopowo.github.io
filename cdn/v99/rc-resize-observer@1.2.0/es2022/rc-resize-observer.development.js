/* esm.sh - esbuild bundle(rc-resize-observer@1.2.0) es2022 development */
// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import { warning } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/SingleObserver/index.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import { composeRef, supportRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import findDOMNode from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/findDOMNode.development.js';

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/utils/observerUtil.js
import ResizeObserver from '/cdn/v99/resize-observer-polyfill@1.5.1/es2022/resize-observer-polyfill.development.js';
var elementListeners = /* @__PURE__ */ new Map();
function onResize(entities) {
  entities.forEach(function(entity) {
    var _elementListeners$get;
    var target = entity.target;
    (_elementListeners$get = elementListeners.get(target)) === null || _elementListeners$get === void 0
      ? void 0
      : _elementListeners$get.forEach(function(listener) {
          return listener(target);
        });
  });
}
var resizeObserver = new ResizeObserver(onResize);
function observe(element, callback) {
  if (!elementListeners.has(element)) {
    elementListeners.set(element, /* @__PURE__ */ new Set());
    resizeObserver.observe(element);
  }
  elementListeners.get(element).add(callback);
}
function unobserve(element, callback) {
  if (elementListeners.has(element)) {
    elementListeners.get(element).delete(callback);
    if (!elementListeners.get(element).size) {
      resizeObserver.unobserve(element);
      elementListeners.delete(element);
    }
  }
}

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/SingleObserver/DomWrapper.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DomWrapper = /* @__PURE__ */ (function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [
    {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }
  ]);
  return DomWrapper2;
})(React.Component);

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/Collection.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var CollectionContext = /* @__PURE__ */ React2.createContext(null);
function Collection(_ref) {
  var children = _ref.children,
    onBatchResize = _ref.onBatchResize;
  var resizeIdRef = React2.useRef(0);
  var resizeInfosRef = React2.useRef([]);
  var onCollectionResize = React2.useContext(CollectionContext);
  var onResize2 = React2.useCallback(
    function(size, element, data) {
      resizeIdRef.current += 1;
      var currentId = resizeIdRef.current;
      resizeInfosRef.current.push({
        size,
        element,
        data
      });
      Promise.resolve().then(function() {
        if (currentId === resizeIdRef.current) {
          onBatchResize === null || onBatchResize === void 0 ? void 0 : onBatchResize(resizeInfosRef.current);
          resizeInfosRef.current = [];
        }
      });
      onCollectionResize === null || onCollectionResize === void 0 ? void 0 : onCollectionResize(size, element, data);
    },
    [onBatchResize, onCollectionResize]
  );
  return /* @__PURE__ */ React2.createElement(
    CollectionContext.Provider,
    {
      value: onResize2
    },
    children
  );
}

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/SingleObserver/index.js
function SingleObserver(props) {
  var children = props.children,
    disabled = props.disabled;
  var elementRef = React3.useRef(null);
  var wrapperRef = React3.useRef(null);
  var onCollectionResize = React3.useContext(CollectionContext);
  var isRenderProps = typeof children === 'function';
  var mergedChildren = isRenderProps ? children(elementRef) : children;
  var sizeRef = React3.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  });
  var canRef = !isRenderProps && /* @__PURE__ */ React3.isValidElement(mergedChildren) && supportRef(mergedChildren);
  var originRef = canRef ? mergedChildren.ref : null;
  var mergedRef = React3.useMemo(
    function() {
      return composeRef(originRef, elementRef);
    },
    [originRef, elementRef]
  );
  var propsRef = React3.useRef(props);
  propsRef.current = props;
  var onInternalResize = React3.useCallback(function(target) {
    var _propsRef$current = propsRef.current,
      onResize2 = _propsRef$current.onResize,
      data = _propsRef$current.data;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var offsetWidth = target.offsetWidth,
      offsetHeight = target.offsetHeight;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (
      sizeRef.current.width !== fixedWidth ||
      sizeRef.current.height !== fixedHeight ||
      sizeRef.current.offsetWidth !== offsetWidth ||
      sizeRef.current.offsetHeight !== offsetHeight
    ) {
      var size = {
        width: fixedWidth,
        height: fixedHeight,
        offsetWidth,
        offsetHeight
      };
      sizeRef.current = size;
      var mergedOffsetWidth = offsetWidth === Math.round(width) ? width : offsetWidth;
      var mergedOffsetHeight = offsetHeight === Math.round(height) ? height : offsetHeight;
      var sizeInfo = _objectSpread(
        _objectSpread({}, size),
        {},
        {
          offsetWidth: mergedOffsetWidth,
          offsetHeight: mergedOffsetHeight
        }
      );
      onCollectionResize === null || onCollectionResize === void 0
        ? void 0
        : onCollectionResize(sizeInfo, target, data);
      if (onResize2) {
        Promise.resolve().then(function() {
          onResize2(sizeInfo, target);
        });
      }
    }
  }, []);
  React3.useEffect(
    function() {
      var currentElement = findDOMNode(elementRef.current) || findDOMNode(wrapperRef.current);
      if (currentElement && !disabled) {
        observe(currentElement, onInternalResize);
      }
      return function() {
        return unobserve(currentElement, onInternalResize);
      };
    },
    [elementRef.current, disabled]
  );
  return /* @__PURE__ */ React3.createElement(
    DomWrapper,
    {
      ref: wrapperRef
    },
    canRef
      ? /* @__PURE__ */ React3.cloneElement(mergedChildren, {
          ref: mergedRef
        })
      : mergedChildren
  );
}

// esm-build-1fcc2497439f940cc64907066277eafbe8ab3ab8-ea257476/node_modules/rc-resize-observer/es/index.js
var INTERNAL_PREFIX_KEY = 'rc-observer-key';
function ResizeObserver2(props) {
  var children = props.children;
  var childNodes = typeof children === 'function' ? [children] : toArray(children);
  if (true) {
    if (childNodes.length > 1) {
      warning(
        false,
        'Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.'
      );
    } else if (childNodes.length === 0) {
      warning(false, '`children` of ResizeObserver is empty. Nothing is in observe.');
    }
  }
  return childNodes.map(function(child, index) {
    var key =
      (child === null || child === void 0 ? void 0 : child.key) || ''.concat(INTERNAL_PREFIX_KEY, '-').concat(index);
    return /* @__PURE__ */ React4.createElement(
      SingleObserver,
      _extends({}, props, {
        key
      }),
      child
    );
  });
}
ResizeObserver2.Collection = Collection;
var es_default = ResizeObserver2;
export { es_default as default };
