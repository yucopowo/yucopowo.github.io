/* esm.sh - esbuild bundle(rc-virtual-list@3.4.11) es2022 development */
// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/List.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef6, useState as useState3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/Filler.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Filler = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
  var height = _ref.height,
    offset = _ref.offset,
    children = _ref.children,
    prefixCls = _ref.prefixCls,
    onInnerResize = _ref.onInnerResize;
  var outerStyle = {};
  var innerStyle = {
    display: 'flex',
    flexDirection: 'column'
  };
  if (offset !== void 0) {
    outerStyle = {
      height,
      position: 'relative',
      overflow: 'hidden'
    };
    innerStyle = _objectSpread(
      _objectSpread({}, innerStyle),
      {},
      {
        transform: 'translateY('.concat(offset, 'px)'),
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0
      }
    );
  }
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      style: outerStyle
    },
    /* @__PURE__ */ React.createElement(
      ResizeObserver,
      {
        onResize: function onResize(_ref2) {
          var offsetHeight = _ref2.offsetHeight;
          if (offsetHeight && onInnerResize) {
            onInnerResize();
          }
        }
      },
      /* @__PURE__ */ React.createElement(
        'div',
        {
          style: innerStyle,
          className: classNames(_defineProperty({}, ''.concat(prefixCls, '-holder-inner'), prefixCls)),
          ref
        },
        children
      )
    )
  );
});
Filler.displayName = 'Filler';
var Filler_default = Filler;

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/ScrollBar.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
var MIN_SIZE = 20;
function getPageY(e) {
  return 'touches' in e ? e.touches[0].pageY : e.pageY;
}
var ScrollBar = /* @__PURE__ */ (function(_React$Component) {
  _inherits(ScrollBar2, _React$Component);
  var _super = _createSuper(ScrollBar2);
  function ScrollBar2() {
    var _this;
    _classCallCheck(this, ScrollBar2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.moveRaf = null;
    _this.scrollbarRef = /* @__PURE__ */ React2.createRef();
    _this.thumbRef = /* @__PURE__ */ React2.createRef();
    _this.visibleTimeout = null;
    _this.state = {
      dragging: false,
      pageY: null,
      startTop: null,
      visible: false
    };
    _this.delayHidden = function() {
      clearTimeout(_this.visibleTimeout);
      _this.setState({
        visible: true
      });
      _this.visibleTimeout = setTimeout(function() {
        _this.setState({
          visible: false
        });
      }, 2e3);
    };
    _this.onScrollbarTouchStart = function(e) {
      e.preventDefault();
    };
    _this.onContainerMouseDown = function(e) {
      e.stopPropagation();
      e.preventDefault();
    };
    _this.patchEvents = function() {
      window.addEventListener('mousemove', _this.onMouseMove);
      window.addEventListener('mouseup', _this.onMouseUp);
      _this.thumbRef.current.addEventListener('touchmove', _this.onMouseMove);
      _this.thumbRef.current.addEventListener('touchend', _this.onMouseUp);
    };
    _this.removeEvents = function() {
      var _this$scrollbarRef$cu;
      window.removeEventListener('mousemove', _this.onMouseMove);
      window.removeEventListener('mouseup', _this.onMouseUp);
      (_this$scrollbarRef$cu = _this.scrollbarRef.current) === null || _this$scrollbarRef$cu === void 0
        ? void 0
        : _this$scrollbarRef$cu.removeEventListener('touchstart', _this.onScrollbarTouchStart);
      if (_this.thumbRef.current) {
        _this.thumbRef.current.removeEventListener('touchstart', _this.onMouseDown);
        _this.thumbRef.current.removeEventListener('touchmove', _this.onMouseMove);
        _this.thumbRef.current.removeEventListener('touchend', _this.onMouseUp);
      }
      raf.cancel(_this.moveRaf);
    };
    _this.onMouseDown = function(e) {
      var onStartMove = _this.props.onStartMove;
      _this.setState({
        dragging: true,
        pageY: getPageY(e),
        startTop: _this.getTop()
      });
      onStartMove();
      _this.patchEvents();
      e.stopPropagation();
      e.preventDefault();
    };
    _this.onMouseMove = function(e) {
      var _this$state = _this.state,
        dragging = _this$state.dragging,
        pageY = _this$state.pageY,
        startTop = _this$state.startTop;
      var onScroll = _this.props.onScroll;
      raf.cancel(_this.moveRaf);
      if (dragging) {
        var offsetY = getPageY(e) - pageY;
        var newTop = startTop + offsetY;
        var enableScrollRange = _this.getEnableScrollRange();
        var enableHeightRange = _this.getEnableHeightRange();
        var ptg = enableHeightRange ? newTop / enableHeightRange : 0;
        var newScrollTop = Math.ceil(ptg * enableScrollRange);
        _this.moveRaf = raf(function() {
          onScroll(newScrollTop);
        });
      }
    };
    _this.onMouseUp = function() {
      var onStopMove = _this.props.onStopMove;
      _this.setState({
        dragging: false
      });
      onStopMove();
      _this.removeEvents();
    };
    _this.getSpinHeight = function() {
      var _this$props = _this.props,
        height = _this$props.height,
        count = _this$props.count;
      var baseHeight = (height / count) * 10;
      baseHeight = Math.max(baseHeight, MIN_SIZE);
      baseHeight = Math.min(baseHeight, height / 2);
      return Math.floor(baseHeight);
    };
    _this.getEnableScrollRange = function() {
      var _this$props2 = _this.props,
        scrollHeight = _this$props2.scrollHeight,
        height = _this$props2.height;
      return scrollHeight - height || 0;
    };
    _this.getEnableHeightRange = function() {
      var height = _this.props.height;
      var spinHeight = _this.getSpinHeight();
      return height - spinHeight || 0;
    };
    _this.getTop = function() {
      var scrollTop = _this.props.scrollTop;
      var enableScrollRange = _this.getEnableScrollRange();
      var enableHeightRange = _this.getEnableHeightRange();
      if (scrollTop === 0 || enableScrollRange === 0) {
        return 0;
      }
      var ptg = scrollTop / enableScrollRange;
      return ptg * enableHeightRange;
    };
    _this.showScroll = function() {
      var _this$props3 = _this.props,
        height = _this$props3.height,
        scrollHeight = _this$props3.scrollHeight;
      return scrollHeight > height;
    };
    return _this;
  }
  _createClass(ScrollBar2, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.scrollbarRef.current.addEventListener('touchstart', this.onScrollbarTouchStart);
        this.thumbRef.current.addEventListener('touchstart', this.onMouseDown);
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (prevProps.scrollTop !== this.props.scrollTop) {
          this.delayHidden();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.removeEvents();
        clearTimeout(this.visibleTimeout);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this$state2 = this.state,
          dragging = _this$state2.dragging,
          visible = _this$state2.visible;
        var prefixCls = this.props.prefixCls;
        var spinHeight = this.getSpinHeight();
        var top = this.getTop();
        var canScroll = this.showScroll();
        var mergedVisible = canScroll && visible;
        return /* @__PURE__ */ React2.createElement(
          'div',
          {
            ref: this.scrollbarRef,
            className: classNames2(
              ''.concat(prefixCls, '-scrollbar'),
              _defineProperty2({}, ''.concat(prefixCls, '-scrollbar-show'), canScroll)
            ),
            style: {
              width: 8,
              top: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: mergedVisible ? null : 'none'
            },
            onMouseDown: this.onContainerMouseDown,
            onMouseMove: this.delayHidden
          },
          /* @__PURE__ */ React2.createElement('div', {
            ref: this.thumbRef,
            className: classNames2(
              ''.concat(prefixCls, '-scrollbar-thumb'),
              _defineProperty2({}, ''.concat(prefixCls, '-scrollbar-thumb-moving'), dragging)
            ),
            style: {
              width: '100%',
              height: spinHeight,
              top,
              left: 0,
              position: 'absolute',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 99,
              cursor: 'pointer',
              userSelect: 'none'
            },
            onMouseDown: this.onMouseDown
          })
        );
      }
    }
  ]);
  return ScrollBar2;
})(React2.Component);

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useChildren.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/Item.js
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function Item(_ref) {
  var children = _ref.children,
    setRef = _ref.setRef;
  var refFunc = React3.useCallback(function(node) {
    setRef(node);
  }, []);
  return /* @__PURE__ */ React3.cloneElement(children, {
    ref: refFunc
  });
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useChildren.js
function useChildren(list, startIndex, endIndex, setNodeRef, renderFunc, _ref) {
  var getKey = _ref.getKey;
  return list.slice(startIndex, endIndex + 1).map(function(item, index) {
    var eleIndex = startIndex + index;
    var node = renderFunc(item, eleIndex, {});
    var key = getKey(item);
    return /* @__PURE__ */ React4.createElement(
      Item,
      {
        key,
        setRef: function setRef(ele) {
          return setNodeRef(item, ele);
        }
      },
      node
    );
  });
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useHeights.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import findDOMNode from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/findDOMNode.development.js';
import raf2 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/utils/CacheMap.js
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
var CacheMap = /* @__PURE__ */ (function() {
  function CacheMap2() {
    _classCallCheck2(this, CacheMap2);
    this.maps = void 0;
    this.maps = /* @__PURE__ */ Object.create(null);
  }
  _createClass2(CacheMap2, [
    {
      key: 'set',
      value: function set(key, value) {
        this.maps[key] = value;
      }
    },
    {
      key: 'get',
      value: function get(key) {
        return this.maps[key];
      }
    }
  ]);
  return CacheMap2;
})();
var CacheMap_default = CacheMap;

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useHeights.js
function useHeights(getKey, onItemAdd, onItemRemove) {
  var _React$useState = React5.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    updatedMark = _React$useState2[0],
    setUpdatedMark = _React$useState2[1];
  var instanceRef = useRef(/* @__PURE__ */ new Map());
  var heightsRef = useRef(new CacheMap_default());
  var collectRafRef = useRef();
  function cancelRaf() {
    raf2.cancel(collectRafRef.current);
  }
  function collectHeight() {
    cancelRaf();
    collectRafRef.current = raf2(function() {
      instanceRef.current.forEach(function(element, key) {
        if (element && element.offsetParent) {
          var htmlElement = findDOMNode(element);
          var offsetHeight = htmlElement.offsetHeight;
          if (heightsRef.current.get(key) !== offsetHeight) {
            heightsRef.current.set(key, htmlElement.offsetHeight);
          }
        }
      });
      setUpdatedMark(function(c) {
        return c + 1;
      });
    });
  }
  function setInstanceRef(item, instance) {
    var key = getKey(item);
    var origin = instanceRef.current.get(key);
    if (instance) {
      instanceRef.current.set(key, instance);
      collectHeight();
    } else {
      instanceRef.current.delete(key);
    }
    if (!origin !== !instance) {
      if (instance) {
        onItemAdd === null || onItemAdd === void 0 ? void 0 : onItemAdd(item);
      } else {
        onItemRemove === null || onItemRemove === void 0 ? void 0 : onItemRemove(item);
      }
    }
  }
  useEffect(function() {
    return cancelRaf;
  }, []);
  return [setInstanceRef, collectHeight, heightsRef.current, updatedMark];
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useScrollTo.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf3 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
function useScrollTo(containerRef, data, heights, itemHeight, getKey, collectHeight, syncScrollTop, triggerFlash) {
  var scrollRef = React6.useRef();
  return function(arg) {
    if (arg === null || arg === void 0) {
      triggerFlash();
      return;
    }
    raf3.cancel(scrollRef.current);
    if (typeof arg === 'number') {
      syncScrollTop(arg);
    } else if (arg && _typeof(arg) === 'object') {
      var index;
      var align = arg.align;
      if ('index' in arg) {
        index = arg.index;
      } else {
        index = data.findIndex(function(item) {
          return getKey(item) === arg.key;
        });
      }
      var _arg$offset = arg.offset,
        offset = _arg$offset === void 0 ? 0 : _arg$offset;
      var syncScroll = function syncScroll2(times, targetAlign) {
        if (times < 0 || !containerRef.current) return;
        var height = containerRef.current.clientHeight;
        var needCollectHeight = false;
        var newTargetAlign = targetAlign;
        if (height) {
          var mergedAlign = targetAlign || align;
          var stackTop = 0;
          var itemTop = 0;
          var itemBottom = 0;
          var maxLen = Math.min(data.length, index);
          for (var i = 0; i <= maxLen; i += 1) {
            var key = getKey(data[i]);
            itemTop = stackTop;
            var cacheHeight = heights.get(key);
            itemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
            stackTop = itemBottom;
            if (i === index && cacheHeight === void 0) {
              needCollectHeight = true;
            }
          }
          var targetTop = null;
          switch (mergedAlign) {
            case 'top':
              targetTop = itemTop - offset;
              break;
            case 'bottom':
              targetTop = itemBottom - height + offset;
              break;
            default: {
              var scrollTop = containerRef.current.scrollTop;
              var scrollBottom = scrollTop + height;
              if (itemTop < scrollTop) {
                newTargetAlign = 'top';
              } else if (itemBottom > scrollBottom) {
                newTargetAlign = 'bottom';
              }
            }
          }
          if (targetTop !== null && targetTop !== containerRef.current.scrollTop) {
            syncScrollTop(targetTop);
          }
        }
        scrollRef.current = raf3(function() {
          if (needCollectHeight) {
            collectHeight();
          }
          syncScroll2(times - 1, newTargetAlign);
        });
      };
      syncScroll(3);
    }
  };
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useDiffItem.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/utils/algorithmUtil.js
function findListDiffIndex(originList, targetList, getKey) {
  var originLen = originList.length;
  var targetLen = targetList.length;
  var shortList;
  var longList;
  if (originLen === 0 && targetLen === 0) {
    return null;
  }
  if (originLen < targetLen) {
    shortList = originList;
    longList = targetList;
  } else {
    shortList = targetList;
    longList = originList;
  }
  var notExistKey = {
    __EMPTY_ITEM__: true
  };
  function getItemKey(item) {
    if (item !== void 0) {
      return getKey(item);
    }
    return notExistKey;
  }
  var diffIndex = null;
  var multiple = Math.abs(originLen - targetLen) !== 1;
  for (var i = 0; i < longList.length; i += 1) {
    var shortKey = getItemKey(shortList[i]);
    var longKey = getItemKey(longList[i]);
    if (shortKey !== longKey) {
      diffIndex = i;
      multiple = multiple || shortKey !== getItemKey(longList[i + 1]);
      break;
    }
  }
  return diffIndex === null
    ? null
    : {
        index: diffIndex,
        multiple
      };
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useDiffItem.js
function useDiffItem(data, getKey, onDiff) {
  var _React$useState = React7.useState(data),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    prevData = _React$useState2[0],
    setPrevData = _React$useState2[1];
  var _React$useState3 = React7.useState(null),
    _React$useState4 = _slicedToArray2(_React$useState3, 2),
    diffItem = _React$useState4[0],
    setDiffItem = _React$useState4[1];
  React7.useEffect(
    function() {
      var diff = findListDiffIndex(prevData || [], data || [], getKey);
      if ((diff === null || diff === void 0 ? void 0 : diff.index) !== void 0) {
        onDiff === null || onDiff === void 0 ? void 0 : onDiff(diff.index);
        setDiffItem(data[diff.index]);
      }
      setPrevData(data);
    },
    [data]
  );
  return [diffItem];
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
import { useRef as useRef4 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf4 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/utils/isFirefox.js
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
var isFF =
  (typeof navigator === 'undefined' ? 'undefined' : _typeof2(navigator)) === 'object' &&
  /Firefox/i.test(navigator.userAgent);
var isFirefox_default = isFF;

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useOriginScroll.js
import { useRef as useRef3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useOriginScroll_default = function(isScrollAtTop, isScrollAtBottom) {
  var lockRef = useRef3(false);
  var lockTimeoutRef = useRef3(null);
  function lockScroll() {
    clearTimeout(lockTimeoutRef.current);
    lockRef.current = true;
    lockTimeoutRef.current = setTimeout(function() {
      lockRef.current = false;
    }, 50);
  }
  var scrollPingRef = useRef3({
    top: isScrollAtTop,
    bottom: isScrollAtBottom
  });
  scrollPingRef.current.top = isScrollAtTop;
  scrollPingRef.current.bottom = isScrollAtBottom;
  return function(deltaY) {
    var smoothOffset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var originScroll = (deltaY < 0 && scrollPingRef.current.top) || (deltaY > 0 && scrollPingRef.current.bottom);
    if (smoothOffset && originScroll) {
      clearTimeout(lockTimeoutRef.current);
      lockRef.current = false;
    } else if (!originScroll || lockRef.current) {
      lockScroll();
    }
    return !lockRef.current && originScroll;
  };
};

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useFrameWheel.js
function useFrameWheel(inVirtual, isScrollAtTop, isScrollAtBottom, onWheelDelta) {
  var offsetRef = useRef4(0);
  var nextFrameRef = useRef4(null);
  var wheelValueRef = useRef4(null);
  var isMouseScrollRef = useRef4(false);
  var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom);
  function onWheel(event) {
    if (!inVirtual) return;
    raf4.cancel(nextFrameRef.current);
    var deltaY = event.deltaY;
    offsetRef.current += deltaY;
    wheelValueRef.current = deltaY;
    if (originScroll(deltaY)) return;
    if (!isFirefox_default) {
      event.preventDefault();
    }
    nextFrameRef.current = raf4(function() {
      var patchMultiple = isMouseScrollRef.current ? 10 : 1;
      onWheelDelta(offsetRef.current * patchMultiple);
      offsetRef.current = 0;
    });
  }
  function onFireFoxScroll(event) {
    if (!inVirtual) return;
    isMouseScrollRef.current = event.detail === wheelValueRef.current;
  }
  return [onWheel, onFireFoxScroll];
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/hooks/useMobileTouchMove.js
import { useRef as useRef5 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
var SMOOTH_PTG = 14 / 15;
function useMobileTouchMove(inVirtual, listRef, callback) {
  var touchedRef = useRef5(false);
  var touchYRef = useRef5(0);
  var elementRef = useRef5(null);
  var intervalRef = useRef5(null);
  var cleanUpEvents;
  var onTouchMove = function onTouchMove2(e) {
    if (touchedRef.current) {
      var currentY = Math.ceil(e.touches[0].pageY);
      var offsetY = touchYRef.current - currentY;
      touchYRef.current = currentY;
      if (callback(offsetY)) {
        e.preventDefault();
      }
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(function() {
        offsetY *= SMOOTH_PTG;
        if (!callback(offsetY, true) || Math.abs(offsetY) <= 0.1) {
          clearInterval(intervalRef.current);
        }
      }, 16);
    }
  };
  var onTouchEnd = function onTouchEnd2() {
    touchedRef.current = false;
    cleanUpEvents();
  };
  var onTouchStart = function onTouchStart2(e) {
    cleanUpEvents();
    if (e.touches.length === 1 && !touchedRef.current) {
      touchedRef.current = true;
      touchYRef.current = Math.ceil(e.touches[0].pageY);
      elementRef.current = e.target;
      elementRef.current.addEventListener('touchmove', onTouchMove);
      elementRef.current.addEventListener('touchend', onTouchEnd);
    }
  };
  cleanUpEvents = function cleanUpEvents2() {
    if (elementRef.current) {
      elementRef.current.removeEventListener('touchmove', onTouchMove);
      elementRef.current.removeEventListener('touchend', onTouchEnd);
    }
  };
  useLayoutEffect(
    function() {
      if (inVirtual) {
        listRef.current.addEventListener('touchstart', onTouchStart);
      }
      return function() {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0
          ? void 0
          : _listRef$current.removeEventListener('touchstart', onTouchStart);
        cleanUpEvents();
        clearInterval(intervalRef.current);
      };
    },
    [inVirtual]
  );
}

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/List.js
import useLayoutEffect2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
var _excluded = [
  'prefixCls',
  'className',
  'height',
  'itemHeight',
  'fullHeight',
  'style',
  'data',
  'children',
  'itemKey',
  'virtual',
  'component',
  'onScroll',
  'onVisibleChange'
];
var EMPTY_DATA = [];
var ScrollStyle = {
  overflowY: 'auto',
  overflowAnchor: 'none'
};
function RawList(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-virtual-list' : _props$prefixCls,
    className = props.className,
    height = props.height,
    itemHeight = props.itemHeight,
    _props$fullHeight = props.fullHeight,
    fullHeight = _props$fullHeight === void 0 ? true : _props$fullHeight,
    style = props.style,
    data = props.data,
    children = props.children,
    itemKey = props.itemKey,
    virtual = props.virtual,
    _props$component = props.component,
    Component2 = _props$component === void 0 ? 'div' : _props$component,
    onScroll = props.onScroll,
    onVisibleChange = props.onVisibleChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var useVirtual = !!(virtual !== false && height && itemHeight);
  var inVirtual = useVirtual && data && itemHeight * data.length > height;
  var _useState = useState3(0),
    _useState2 = _slicedToArray3(_useState, 2),
    scrollTop = _useState2[0],
    setScrollTop = _useState2[1];
  var _useState3 = useState3(false),
    _useState4 = _slicedToArray3(_useState3, 2),
    scrollMoving = _useState4[0],
    setScrollMoving = _useState4[1];
  var mergedClassName = classNames3(prefixCls, className);
  var mergedData = data || EMPTY_DATA;
  var componentRef = useRef6();
  var fillerInnerRef = useRef6();
  var scrollBarRef = useRef6();
  var getKey = React8.useCallback(
    function(item) {
      if (typeof itemKey === 'function') {
        return itemKey(item);
      }
      return item === null || item === void 0 ? void 0 : item[itemKey];
    },
    [itemKey]
  );
  var sharedConfig = {
    getKey
  };
  function syncScrollTop(newTop) {
    setScrollTop(function(origin) {
      var value;
      if (typeof newTop === 'function') {
        value = newTop(origin);
      } else {
        value = newTop;
      }
      var alignedTop = keepInRange(value);
      componentRef.current.scrollTop = alignedTop;
      return alignedTop;
    });
  }
  var rangeRef = useRef6({
    start: 0,
    end: mergedData.length
  });
  var diffItemRef = useRef6();
  var _useDiffItem = useDiffItem(mergedData, getKey),
    _useDiffItem2 = _slicedToArray3(_useDiffItem, 1),
    diffItem = _useDiffItem2[0];
  diffItemRef.current = diffItem;
  var _useHeights = useHeights(getKey, null, null),
    _useHeights2 = _slicedToArray3(_useHeights, 4),
    setInstanceRef = _useHeights2[0],
    collectHeight = _useHeights2[1],
    heights = _useHeights2[2],
    heightUpdatedMark = _useHeights2[3];
  var _React$useMemo = React8.useMemo(
      function() {
        if (!useVirtual) {
          return {
            scrollHeight: void 0,
            start: 0,
            end: mergedData.length - 1,
            offset: void 0
          };
        }
        if (!inVirtual) {
          var _fillerInnerRef$curre;
          return {
            scrollHeight:
              ((_fillerInnerRef$curre = fillerInnerRef.current) === null || _fillerInnerRef$curre === void 0
                ? void 0
                : _fillerInnerRef$curre.offsetHeight) || 0,
            start: 0,
            end: mergedData.length - 1,
            offset: void 0
          };
        }
        var itemTop = 0;
        var startIndex;
        var startOffset;
        var endIndex;
        var dataLen = mergedData.length;
        for (var i = 0; i < dataLen; i += 1) {
          var item = mergedData[i];
          var key = getKey(item);
          var cacheHeight = heights.get(key);
          var currentItemBottom = itemTop + (cacheHeight === void 0 ? itemHeight : cacheHeight);
          if (currentItemBottom >= scrollTop && startIndex === void 0) {
            startIndex = i;
            startOffset = itemTop;
          }
          if (currentItemBottom > scrollTop + height && endIndex === void 0) {
            endIndex = i;
          }
          itemTop = currentItemBottom;
        }
        if (startIndex === void 0) {
          startIndex = 0;
          startOffset = 0;
          endIndex = Math.ceil(height / itemHeight);
        }
        if (endIndex === void 0) {
          endIndex = mergedData.length - 1;
        }
        endIndex = Math.min(endIndex + 1, mergedData.length);
        return {
          scrollHeight: itemTop,
          start: startIndex,
          end: endIndex,
          offset: startOffset
        };
      },
      [inVirtual, useVirtual, scrollTop, mergedData, heightUpdatedMark, height]
    ),
    scrollHeight = _React$useMemo.scrollHeight,
    start = _React$useMemo.start,
    end = _React$useMemo.end,
    offset = _React$useMemo.offset;
  rangeRef.current.start = start;
  rangeRef.current.end = end;
  var maxScrollHeight = scrollHeight - height;
  var maxScrollHeightRef = useRef6(maxScrollHeight);
  maxScrollHeightRef.current = maxScrollHeight;
  function keepInRange(newScrollTop) {
    var newTop = newScrollTop;
    if (!Number.isNaN(maxScrollHeightRef.current)) {
      newTop = Math.min(newTop, maxScrollHeightRef.current);
    }
    newTop = Math.max(newTop, 0);
    return newTop;
  }
  var isScrollAtTop = scrollTop <= 0;
  var isScrollAtBottom = scrollTop >= maxScrollHeight;
  var originScroll = useOriginScroll_default(isScrollAtTop, isScrollAtBottom);
  function onScrollBar(newScrollTop) {
    var newTop = newScrollTop;
    syncScrollTop(newTop);
  }
  function onFallbackScroll(e) {
    var newScrollTop = e.currentTarget.scrollTop;
    if (newScrollTop !== scrollTop) {
      syncScrollTop(newScrollTop);
    }
    onScroll === null || onScroll === void 0 ? void 0 : onScroll(e);
  }
  var _useFrameWheel = useFrameWheel(useVirtual, isScrollAtTop, isScrollAtBottom, function(offsetY) {
      syncScrollTop(function(top) {
        var newTop = top + offsetY;
        return newTop;
      });
    }),
    _useFrameWheel2 = _slicedToArray3(_useFrameWheel, 2),
    onRawWheel = _useFrameWheel2[0],
    onFireFoxScroll = _useFrameWheel2[1];
  useMobileTouchMove(useVirtual, componentRef, function(deltaY, smoothOffset) {
    if (originScroll(deltaY, smoothOffset)) {
      return false;
    }
    onRawWheel({
      preventDefault: function preventDefault() {},
      deltaY
    });
    return true;
  });
  useLayoutEffect2(
    function() {
      function onMozMousePixelScroll(e) {
        if (useVirtual) {
          e.preventDefault();
        }
      }
      componentRef.current.addEventListener('wheel', onRawWheel);
      componentRef.current.addEventListener('DOMMouseScroll', onFireFoxScroll);
      componentRef.current.addEventListener('MozMousePixelScroll', onMozMousePixelScroll);
      return function() {
        if (componentRef.current) {
          componentRef.current.removeEventListener('wheel', onRawWheel);
          componentRef.current.removeEventListener('DOMMouseScroll', onFireFoxScroll);
          componentRef.current.removeEventListener('MozMousePixelScroll', onMozMousePixelScroll);
        }
      };
    },
    [useVirtual]
  );
  var scrollTo = useScrollTo(
    componentRef,
    mergedData,
    heights,
    itemHeight,
    getKey,
    collectHeight,
    syncScrollTop,
    function() {
      var _scrollBarRef$current;
      (_scrollBarRef$current = scrollBarRef.current) === null || _scrollBarRef$current === void 0
        ? void 0
        : _scrollBarRef$current.delayHidden();
    }
  );
  React8.useImperativeHandle(ref, function() {
    return {
      scrollTo
    };
  });
  useLayoutEffect2(
    function() {
      if (onVisibleChange) {
        var renderList = mergedData.slice(start, end + 1);
        onVisibleChange(renderList, mergedData);
      }
    },
    [start, end, mergedData]
  );
  var listChildren = useChildren(mergedData, start, end, setInstanceRef, children, sharedConfig);
  var componentStyle = null;
  if (height) {
    componentStyle = _objectSpread2(_defineProperty3({}, fullHeight ? 'height' : 'maxHeight', height), ScrollStyle);
    if (useVirtual) {
      componentStyle.overflowY = 'hidden';
      if (scrollMoving) {
        componentStyle.pointerEvents = 'none';
      }
    }
  }
  return /* @__PURE__ */ React8.createElement(
    'div',
    _extends(
      {
        style: _objectSpread2(
          _objectSpread2({}, style),
          {},
          {
            position: 'relative'
          }
        ),
        className: mergedClassName
      },
      restProps
    ),
    /* @__PURE__ */ React8.createElement(
      Component2,
      {
        className: ''.concat(prefixCls, '-holder'),
        style: componentStyle,
        ref: componentRef,
        onScroll: onFallbackScroll
      },
      /* @__PURE__ */ React8.createElement(
        Filler_default,
        {
          prefixCls,
          height: scrollHeight,
          offset,
          onInnerResize: collectHeight,
          ref: fillerInnerRef
        },
        listChildren
      )
    ),
    useVirtual &&
      /* @__PURE__ */ React8.createElement(ScrollBar, {
        ref: scrollBarRef,
        prefixCls,
        scrollTop,
        height,
        scrollHeight,
        count: mergedData.length,
        onScroll: onScrollBar,
        onStartMove: function onStartMove() {
          setScrollMoving(true);
        },
        onStopMove: function onStopMove() {
          setScrollMoving(false);
        }
      })
  );
}
var List = /* @__PURE__ */ React8.forwardRef(RawList);
List.displayName = 'List';
var List_default = List;

// esm-build-5b61a420d058717e1dafde4d8cf8e0c9e06b4382-3c5dd40e/node_modules/rc-virtual-list/es/index.js
var es_default = List_default;
export { es_default as default };
