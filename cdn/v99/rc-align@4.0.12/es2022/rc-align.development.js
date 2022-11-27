/* esm.sh - esbuild bundle(rc-align@4.0.12) es2022 development */
// esm-build-214919805c7192ab9762d3d18ce6885558d0e9ec-322b082a/node_modules/rc-align/es/Align.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { composeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import isVisible from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/isVisible.development.js';
import { alignElement, alignPoint } from '/cdn/v99/dom-align@1.12.4/es2022/dom-align.development.js';
import addEventListener from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/addEventListener.development.js';
import isEqual from '/cdn/v99/lodash@4.17.21/es2022/isEqual.development.js';

// esm-build-214919805c7192ab9762d3d18ce6885558d0e9ec-322b082a/node_modules/rc-align/es/util.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import ResizeObserver from '/cdn/v99/resize-observer-polyfill@1.5.1/es2022/resize-observer-polyfill.development.js';
import contains from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/contains.development.js';
function isSamePoint(prev, next) {
  if (prev === next) return true;
  if (!prev || !next) return false;
  if ('pageX' in next && 'pageY' in next) {
    return prev.pageX === next.pageX && prev.pageY === next.pageY;
  }
  if ('clientX' in next && 'clientY' in next) {
    return prev.clientX === next.clientX && prev.clientY === next.clientY;
  }
  return false;
}
function restoreFocus(activeElement, container) {
  if (
    activeElement !== document.activeElement &&
    contains(container, activeElement) &&
    typeof activeElement.focus === 'function'
  ) {
    activeElement.focus();
  }
}
function monitorResize(element, callback) {
  var prevWidth = null;
  var prevHeight = null;
  function onResize(_ref) {
    var _ref2 = _slicedToArray(_ref, 1),
      target = _ref2[0].target;
    if (!document.documentElement.contains(target)) return;
    var _target$getBoundingCl = target.getBoundingClientRect(),
      width = _target$getBoundingCl.width,
      height = _target$getBoundingCl.height;
    var fixedWidth = Math.floor(width);
    var fixedHeight = Math.floor(height);
    if (prevWidth !== fixedWidth || prevHeight !== fixedHeight) {
      Promise.resolve().then(function() {
        callback({
          width: fixedWidth,
          height: fixedHeight
        });
      });
    }
    prevWidth = fixedWidth;
    prevHeight = fixedHeight;
  }
  var resizeObserver = new ResizeObserver(onResize);
  if (element) {
    resizeObserver.observe(element);
  }
  return function() {
    resizeObserver.disconnect();
  };
}

// esm-build-214919805c7192ab9762d3d18ce6885558d0e9ec-322b082a/node_modules/rc-align/es/hooks/useBuffer.js
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useBuffer_default = function(callback, buffer) {
  var calledRef = React.useRef(false);
  var timeoutRef = React.useRef(null);
  function cancelTrigger() {
    window.clearTimeout(timeoutRef.current);
  }
  function trigger(force) {
    cancelTrigger();
    if (!calledRef.current || force === true) {
      if (callback() === false) {
        return;
      }
      calledRef.current = true;
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
      }, buffer);
    } else {
      timeoutRef.current = window.setTimeout(function() {
        calledRef.current = false;
        trigger();
      }, buffer);
    }
  }
  return [
    trigger,
    function() {
      calledRef.current = false;
      cancelTrigger();
    }
  ];
};

// esm-build-214919805c7192ab9762d3d18ce6885558d0e9ec-322b082a/node_modules/rc-align/es/Align.js
function getElement(func) {
  if (typeof func !== 'function') return null;
  return func();
}
function getPoint(point) {
  if (_typeof(point) !== 'object' || !point) return null;
  return point;
}
var Align = function Align2(_ref, ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    target = _ref.target,
    align = _ref.align,
    onAlign = _ref.onAlign,
    monitorWindowResize = _ref.monitorWindowResize,
    _ref$monitorBufferTim = _ref.monitorBufferTime,
    monitorBufferTime = _ref$monitorBufferTim === void 0 ? 0 : _ref$monitorBufferTim;
  var cacheRef = React2.useRef({});
  var nodeRef = React2.useRef();
  var childNode = React2.Children.only(children);
  var forceAlignPropsRef = React2.useRef({});
  forceAlignPropsRef.current.disabled = disabled;
  forceAlignPropsRef.current.target = target;
  forceAlignPropsRef.current.align = align;
  forceAlignPropsRef.current.onAlign = onAlign;
  var _useBuffer = useBuffer_default(function() {
      var _forceAlignPropsRef$c = forceAlignPropsRef.current,
        latestDisabled = _forceAlignPropsRef$c.disabled,
        latestTarget = _forceAlignPropsRef$c.target,
        latestAlign = _forceAlignPropsRef$c.align,
        latestOnAlign = _forceAlignPropsRef$c.onAlign;
      if (!latestDisabled && latestTarget) {
        var source = nodeRef.current;
        var result;
        var element = getElement(latestTarget);
        var point = getPoint(latestTarget);
        cacheRef.current.element = element;
        cacheRef.current.point = point;
        cacheRef.current.align = latestAlign;
        var _document = document,
          activeElement = _document.activeElement;
        if (element && isVisible(element)) {
          result = alignElement(source, element, latestAlign);
        } else if (point) {
          result = alignPoint(source, point, latestAlign);
        }
        restoreFocus(activeElement, source);
        if (latestOnAlign && result) {
          latestOnAlign(source, result);
        }
        return true;
      }
      return false;
    }, monitorBufferTime),
    _useBuffer2 = _slicedToArray2(_useBuffer, 2),
    _forceAlign = _useBuffer2[0],
    cancelForceAlign = _useBuffer2[1];
  var resizeMonitor = React2.useRef({
    cancel: function cancel() {}
  });
  var sourceResizeMonitor = React2.useRef({
    cancel: function cancel() {}
  });
  React2.useEffect(function() {
    var element = getElement(target);
    var point = getPoint(target);
    if (nodeRef.current !== sourceResizeMonitor.current.element) {
      sourceResizeMonitor.current.cancel();
      sourceResizeMonitor.current.element = nodeRef.current;
      sourceResizeMonitor.current.cancel = monitorResize(nodeRef.current, _forceAlign);
    }
    if (
      cacheRef.current.element !== element ||
      !isSamePoint(cacheRef.current.point, point) ||
      !isEqual(cacheRef.current.align, align)
    ) {
      _forceAlign();
      if (resizeMonitor.current.element !== element) {
        resizeMonitor.current.cancel();
        resizeMonitor.current.element = element;
        resizeMonitor.current.cancel = monitorResize(element, _forceAlign);
      }
    }
  });
  React2.useEffect(
    function() {
      if (!disabled) {
        _forceAlign();
      } else {
        cancelForceAlign();
      }
    },
    [disabled]
  );
  var winResizeRef = React2.useRef(null);
  React2.useEffect(
    function() {
      if (monitorWindowResize) {
        if (!winResizeRef.current) {
          winResizeRef.current = addEventListener(window, 'resize', _forceAlign);
        }
      } else if (winResizeRef.current) {
        winResizeRef.current.remove();
        winResizeRef.current = null;
      }
    },
    [monitorWindowResize]
  );
  React2.useEffect(function() {
    return function() {
      resizeMonitor.current.cancel();
      sourceResizeMonitor.current.cancel();
      if (winResizeRef.current) winResizeRef.current.remove();
      cancelForceAlign();
    };
  }, []);
  React2.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {
        return _forceAlign(true);
      }
    };
  });
  if (/* @__PURE__ */ React2.isValidElement(childNode)) {
    childNode = /* @__PURE__ */ React2.cloneElement(childNode, {
      ref: composeRef(childNode.ref, nodeRef)
    });
  }
  return childNode;
};
var RcAlign = /* @__PURE__ */ React2.forwardRef(Align);
RcAlign.displayName = 'Align';
var Align_default = RcAlign;

// esm-build-214919805c7192ab9762d3d18ce6885558d0e9ec-322b082a/node_modules/rc-align/es/index.js
var es_default = Align_default;
export { es_default as default };
