/* esm.sh - esbuild bundle(rc-table@7.26.0/es/stickyScrollBar) es2022 development */
// esm-build-ac4516aab6d596110fb6f4117270e3e9b21d51f2-79bf2004/node_modules/rc-table/es/stickyScrollBar.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import addEventListener from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/addEventListener.development.js';
import getScrollBarSize from '/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { getOffset } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/css.development.js';
import TableContext from '/cdn/v99/rc-table@7.26.0/es2022/es/context/TableContext.development.js';
import { useLayoutState } from '/cdn/v99/rc-table@7.26.0/es2022/es/hooks/useFrame.development.js';
var StickyScrollBar = function StickyScrollBar2(_ref, ref) {
  var _scrollBodyRef$curren, _scrollBodyRef$curren2;
  var scrollBodyRef = _ref.scrollBodyRef,
    onScroll = _ref.onScroll,
    offsetScroll = _ref.offsetScroll,
    container = _ref.container;
  var _React$useContext = React.useContext(TableContext),
    prefixCls = _React$useContext.prefixCls;
  var bodyScrollWidth =
    ((_scrollBodyRef$curren = scrollBodyRef.current) === null || _scrollBodyRef$curren === void 0
      ? void 0
      : _scrollBodyRef$curren.scrollWidth) || 0;
  var bodyWidth =
    ((_scrollBodyRef$curren2 = scrollBodyRef.current) === null || _scrollBodyRef$curren2 === void 0
      ? void 0
      : _scrollBodyRef$curren2.clientWidth) || 0;
  var scrollBarWidth = bodyScrollWidth && bodyWidth * (bodyWidth / bodyScrollWidth);
  var scrollBarRef = React.useRef();
  var _useLayoutState = useLayoutState({
      scrollLeft: 0,
      isHiddenScrollBar: false
    }),
    _useLayoutState2 = _slicedToArray(_useLayoutState, 2),
    scrollState = _useLayoutState2[0],
    setScrollState = _useLayoutState2[1];
  var refState = React.useRef({
    delta: 0,
    x: 0
  });
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isActive = _React$useState2[0],
    setActive = _React$useState2[1];
  var onMouseUp = function onMouseUp2() {
    setActive(false);
  };
  var onMouseDown = function onMouseDown2(event) {
    event.persist();
    refState.current.delta = event.pageX - scrollState.scrollLeft;
    refState.current.x = 0;
    setActive(true);
    event.preventDefault();
  };
  var onMouseMove = function onMouseMove2(event) {
    var _window;
    var _ref2 = event || ((_window = window) === null || _window === void 0 ? void 0 : _window.event),
      buttons = _ref2.buttons;
    if (!isActive || buttons === 0) {
      if (isActive) {
        setActive(false);
      }
      return;
    }
    var left = refState.current.x + event.pageX - refState.current.x - refState.current.delta;
    if (left <= 0) {
      left = 0;
    }
    if (left + scrollBarWidth >= bodyWidth) {
      left = bodyWidth - scrollBarWidth;
    }
    onScroll({
      scrollLeft: (left / bodyWidth) * (bodyScrollWidth + 2)
    });
    refState.current.x = event.pageX;
  };
  var onContainerScroll = function onContainerScroll2() {
    if (!scrollBodyRef.current) {
      return;
    }
    var tableOffsetTop = getOffset(scrollBodyRef.current).top;
    var tableBottomOffset = tableOffsetTop + scrollBodyRef.current.offsetHeight;
    var currentClientOffset =
      container === window
        ? document.documentElement.scrollTop + window.innerHeight
        : getOffset(container).top + container.clientHeight;
    if (
      tableBottomOffset - getScrollBarSize() <= currentClientOffset ||
      tableOffsetTop >= currentClientOffset - offsetScroll
    ) {
      setScrollState(function(state) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            isHiddenScrollBar: true
          }
        );
      });
    } else {
      setScrollState(function(state) {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            isHiddenScrollBar: false
          }
        );
      });
    }
  };
  var setScrollLeft = function setScrollLeft2(left) {
    setScrollState(function(state) {
      return _objectSpread(
        _objectSpread({}, state),
        {},
        {
          scrollLeft: (left / bodyScrollWidth) * bodyWidth || 0
        }
      );
    });
  };
  React.useImperativeHandle(ref, function() {
    return {
      setScrollLeft
    };
  });
  React.useEffect(
    function() {
      var onMouseUpListener = addEventListener(document.body, 'mouseup', onMouseUp, false);
      var onMouseMoveListener = addEventListener(document.body, 'mousemove', onMouseMove, false);
      onContainerScroll();
      return function() {
        onMouseUpListener.remove();
        onMouseMoveListener.remove();
      };
    },
    [scrollBarWidth, isActive]
  );
  React.useEffect(
    function() {
      var onScrollListener = addEventListener(container, 'scroll', onContainerScroll, false);
      var onResizeListener = addEventListener(window, 'resize', onContainerScroll, false);
      return function() {
        onScrollListener.remove();
        onResizeListener.remove();
      };
    },
    [container]
  );
  React.useEffect(
    function() {
      if (!scrollState.isHiddenScrollBar) {
        setScrollState(function(state) {
          var bodyNode = scrollBodyRef.current;
          if (!bodyNode) {
            return state;
          }
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              scrollLeft: (bodyNode.scrollLeft / bodyNode.scrollWidth) * bodyNode.clientWidth
            }
          );
        });
      }
    },
    [scrollState.isHiddenScrollBar]
  );
  if (bodyScrollWidth <= bodyWidth || !scrollBarWidth || scrollState.isHiddenScrollBar) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      style: {
        height: getScrollBarSize(),
        width: bodyWidth,
        bottom: offsetScroll
      },
      className: ''.concat(prefixCls, '-sticky-scroll')
    },
    /* @__PURE__ */ React.createElement('div', {
      onMouseDown,
      ref: scrollBarRef,
      className: classNames(
        ''.concat(prefixCls, '-sticky-scroll-bar'),
        _defineProperty({}, ''.concat(prefixCls, '-sticky-scroll-bar-active'), isActive)
      ),
      style: {
        width: ''.concat(scrollBarWidth, 'px'),
        transform: 'translate3d('.concat(scrollState.scrollLeft, 'px, 0, 0)')
      }
    })
  );
};
var stickyScrollBar_default = /* @__PURE__ */ React.forwardRef(StickyScrollBar);
export { stickyScrollBar_default as default };
