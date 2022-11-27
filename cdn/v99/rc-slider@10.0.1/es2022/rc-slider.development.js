/* esm.sh - esbuild bundle(rc-slider@10.0.1) es2022 development */
// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Slider.js
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Handles/index.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Handles/Handle.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/context.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var SliderContext = /* @__PURE__ */ React.createContext({
  min: 0,
  max: 0,
  direction: 'ltr',
  step: 1,
  includedStart: 0,
  includedEnd: 0,
  tabIndex: 0
});
var context_default = SliderContext;

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/util.js
function getOffset(value, min, max) {
  return (value - min) / (max - min);
}
function getDirectionStyle(direction, value, min, max) {
  var offset = getOffset(value, min, max);
  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = ''.concat(offset * 100, '%');
      positionStyle.transform = 'translateX(50%)';
      break;
    case 'btt':
      positionStyle.bottom = ''.concat(offset * 100, '%');
      positionStyle.transform = 'translateY(50%)';
      break;
    case 'ttb':
      positionStyle.top = ''.concat(offset * 100, '%');
      positionStyle.transform = 'translateY(-50%)';
      break;
    default:
      positionStyle.left = ''.concat(offset * 100, '%');
      positionStyle.transform = 'translateX(-50%)';
      break;
  }
  return positionStyle;
}
function getIndex(value, index) {
  return Array.isArray(value) ? value[index] : value;
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Handles/Handle.js
var _excluded = ['prefixCls', 'value', 'valueIndex', 'onStartMove', 'style', 'render', 'dragging', 'onOffsetChange'];
var Handle = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  var _classNames, _getIndex;
  var prefixCls = props.prefixCls,
    value = props.value,
    valueIndex = props.valueIndex,
    onStartMove = props.onStartMove,
    style = props.style,
    render = props.render,
    dragging = props.dragging,
    onOffsetChange = props.onOffsetChange,
    restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = React2.useContext(context_default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range,
    tabIndex = _React$useContext.tabIndex,
    ariaLabelForHandle = _React$useContext.ariaLabelForHandle,
    ariaLabelledByForHandle = _React$useContext.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = _React$useContext.ariaValueTextFormatterForHandle;
  var handlePrefixCls = ''.concat(prefixCls, '-handle');
  var onInternalStartMove = function onInternalStartMove2(e) {
    if (!disabled) {
      onStartMove(e, valueIndex);
    }
  };
  var onKeyDown = function onKeyDown2(e) {
    if (!disabled) {
      var offset = null;
      switch (e.which || e.keyCode) {
        case KeyCode.LEFT:
          offset = direction === 'ltr' || direction === 'btt' ? -1 : 1;
          break;
        case KeyCode.RIGHT:
          offset = direction === 'ltr' || direction === 'btt' ? 1 : -1;
          break;
        case KeyCode.UP:
          offset = direction !== 'ttb' ? 1 : -1;
          break;
        case KeyCode.DOWN:
          offset = direction !== 'ttb' ? -1 : 1;
          break;
        case KeyCode.HOME:
          offset = 'min';
          break;
        case KeyCode.END:
          offset = 'max';
          break;
        case KeyCode.PAGE_UP:
          offset = 2;
          break;
        case KeyCode.PAGE_DOWN:
          offset = -2;
          break;
      }
      if (offset !== null) {
        e.preventDefault();
        onOffsetChange(offset, valueIndex);
      }
    }
  };
  var positionStyle = getDirectionStyle(direction, value, min, max);
  var handleNode = /* @__PURE__ */ React2.createElement(
    'div',
    _extends(
      {
        ref,
        className: classNames(
          handlePrefixCls,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(handlePrefixCls, '-').concat(valueIndex + 1), range),
          _defineProperty(_classNames, ''.concat(handlePrefixCls, '-dragging'), dragging),
          _classNames)
        ),
        style: _objectSpread(_objectSpread({}, positionStyle), style),
        onMouseDown: onInternalStartMove,
        onTouchStart: onInternalStartMove,
        onKeyDown,
        tabIndex: disabled ? null : getIndex(tabIndex, valueIndex),
        role: 'slider',
        'aria-valuemin': min,
        'aria-valuemax': max,
        'aria-valuenow': value,
        'aria-disabled': disabled,
        'aria-label': getIndex(ariaLabelForHandle, valueIndex),
        'aria-labelledby': getIndex(ariaLabelledByForHandle, valueIndex),
        'aria-valuetext':
          (_getIndex = getIndex(ariaValueTextFormatterForHandle, valueIndex)) === null || _getIndex === void 0
            ? void 0
            : _getIndex(value)
      },
      restProps
    )
  );
  if (render) {
    handleNode = render(handleNode, {
      index: valueIndex,
      prefixCls,
      value,
      dragging
    });
  }
  return handleNode;
});
if (true) {
  Handle.displayName = 'Handle';
}
var Handle_default = Handle;

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Handles/index.js
var _excluded2 = ['prefixCls', 'style', 'onStartMove', 'onOffsetChange', 'values', 'handleRender', 'draggingIndex'];
var Handles = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    onStartMove = props.onStartMove,
    onOffsetChange = props.onOffsetChange,
    values = props.values,
    handleRender = props.handleRender,
    draggingIndex = props.draggingIndex,
    restProps = _objectWithoutProperties2(props, _excluded2);
  var handlesRef = React3.useRef({});
  React3.useImperativeHandle(ref, function() {
    return {
      focus: function focus(index) {
        var _handlesRef$current$i;
        (_handlesRef$current$i = handlesRef.current[index]) === null || _handlesRef$current$i === void 0
          ? void 0
          : _handlesRef$current$i.focus();
      }
    };
  });
  return /* @__PURE__ */ React3.createElement(
    React3.Fragment,
    null,
    values.map(function(value, index) {
      return /* @__PURE__ */ React3.createElement(
        Handle_default,
        _extends2(
          {
            ref: function ref2(node) {
              if (!node) {
                delete handlesRef.current[index];
              } else {
                handlesRef.current[index] = node;
              }
            },
            dragging: draggingIndex === index,
            prefixCls,
            style: getIndex(style, index),
            key: index,
            value,
            valueIndex: index,
            onStartMove,
            onOffsetChange,
            render: handleRender
          },
          restProps
        )
      );
    })
  );
});
if (true) {
  Handles.displayName = 'Handles';
}
var Handles_default = Handles;

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/hooks/useDrag.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getPosition(e) {
  var obj = 'touches' in e ? e.touches[0] : e;
  return {
    pageX: obj.pageX,
    pageY: obj.pageY
  };
}
function useDrag(containerRef, direction, rawValues, min, max, formatValue, triggerChange, finishChange, offsetValues) {
  var _React$useState = React4.useState(null),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    draggingValue = _React$useState2[0],
    setDraggingValue = _React$useState2[1];
  var _React$useState3 = React4.useState(-1),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    draggingIndex = _React$useState4[0],
    setDraggingIndex = _React$useState4[1];
  var _React$useState5 = React4.useState(rawValues),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    cacheValues = _React$useState6[0],
    setCacheValues = _React$useState6[1];
  var _React$useState7 = React4.useState(rawValues),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    originValues = _React$useState8[0],
    setOriginValues = _React$useState8[1];
  var mouseMoveEventRef = React4.useRef(null);
  var mouseUpEventRef = React4.useRef(null);
  React4.useEffect(
    function() {
      if (draggingIndex === -1) {
        setCacheValues(rawValues);
      }
    },
    [rawValues, draggingIndex]
  );
  React4.useEffect(function() {
    return function() {
      document.removeEventListener('mousemove', mouseMoveEventRef.current);
      document.removeEventListener('mouseup', mouseUpEventRef.current);
      document.removeEventListener('touchmove', mouseMoveEventRef.current);
      document.removeEventListener('touchend', mouseUpEventRef.current);
    };
  }, []);
  var flushValues = function flushValues2(nextValues, nextValue) {
    if (
      cacheValues.some(function(val, i) {
        return val !== nextValues[i];
      })
    ) {
      if (nextValue !== void 0) {
        setDraggingValue(nextValue);
      }
      setCacheValues(nextValues);
      triggerChange(nextValues);
    }
  };
  var updateCacheValue = function updateCacheValue2(valueIndex, offsetPercent) {
    if (valueIndex === -1) {
      var startValue = originValues[0];
      var endValue = originValues[originValues.length - 1];
      var maxStartOffset = min - startValue;
      var maxEndOffset = max - endValue;
      var offset = offsetPercent * (max - min);
      offset = Math.max(offset, maxStartOffset);
      offset = Math.min(offset, maxEndOffset);
      var formatStartValue = formatValue(startValue + offset);
      offset = formatStartValue - startValue;
      var cloneCacheValues = originValues.map(function(val) {
        return val + offset;
      });
      flushValues(cloneCacheValues);
    } else {
      var offsetDist = (max - min) * offsetPercent;
      var cloneValues = _toConsumableArray(cacheValues);
      cloneValues[valueIndex] = originValues[valueIndex];
      var next = offsetValues(cloneValues, offsetDist, valueIndex, 'dist');
      flushValues(next.values, next.value);
    }
  };
  var updateCacheValueRef = React4.useRef(updateCacheValue);
  updateCacheValueRef.current = updateCacheValue;
  var onStartMove = function onStartMove2(e, valueIndex) {
    e.stopPropagation();
    var originValue = rawValues[valueIndex];
    setDraggingIndex(valueIndex);
    setDraggingValue(originValue);
    setOriginValues(rawValues);
    var _getPosition = getPosition(e),
      startX = _getPosition.pageX,
      startY = _getPosition.pageY;
    var onMouseMove = function onMouseMove2(event) {
      event.preventDefault();
      var _getPosition2 = getPosition(event),
        moveX = _getPosition2.pageX,
        moveY = _getPosition2.pageY;
      var offsetX = moveX - startX;
      var offsetY = moveY - startY;
      var _containerRef$current = containerRef.current.getBoundingClientRect(),
        width = _containerRef$current.width,
        height = _containerRef$current.height;
      var offSetPercent;
      switch (direction) {
        case 'btt':
          offSetPercent = -offsetY / height;
          break;
        case 'ttb':
          offSetPercent = offsetY / height;
          break;
        case 'rtl':
          offSetPercent = -offsetX / width;
          break;
        default:
          offSetPercent = offsetX / width;
      }
      updateCacheValueRef.current(valueIndex, offSetPercent);
    };
    var onMouseUp = function onMouseUp2(event) {
      event.preventDefault();
      document.removeEventListener('mouseup', onMouseUp2);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('touchend', onMouseUp2);
      document.removeEventListener('touchmove', onMouseMove);
      mouseMoveEventRef.current = null;
      mouseUpEventRef.current = null;
      setDraggingIndex(-1);
      finishChange();
    };
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('touchend', onMouseUp);
    document.addEventListener('touchmove', onMouseMove);
    mouseMoveEventRef.current = onMouseMove;
    mouseUpEventRef.current = onMouseUp;
  };
  var returnValues = React4.useMemo(
    function() {
      var sourceValues = _toConsumableArray(rawValues).sort(function(a, b) {
        return a - b;
      });
      var targetValues = _toConsumableArray(cacheValues).sort(function(a, b) {
        return a - b;
      });
      return sourceValues.every(function(val, index) {
        return val === targetValues[index];
      })
        ? cacheValues
        : rawValues;
    },
    [rawValues, cacheValues]
  );
  return [draggingIndex, draggingValue, returnValues, onStartMove];
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Tracks/index.js
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Tracks/Track.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Track(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    start = props.start,
    end = props.end,
    index = props.index,
    onStartMove = props.onStartMove;
  var _React$useContext = React5.useContext(context_default),
    direction = _React$useContext.direction,
    min = _React$useContext.min,
    max = _React$useContext.max,
    disabled = _React$useContext.disabled,
    range = _React$useContext.range;
  var trackPrefixCls = ''.concat(prefixCls, '-track');
  var offsetStart = getOffset(start, min, max);
  var offsetEnd = getOffset(end, min, max);
  var onInternalStartMove = function onInternalStartMove2(e) {
    if (!disabled && onStartMove) {
      onStartMove(e, -1);
    }
  };
  var positionStyle = {};
  switch (direction) {
    case 'rtl':
      positionStyle.right = ''.concat(offsetStart * 100, '%');
      positionStyle.width = ''.concat(offsetEnd * 100 - offsetStart * 100, '%');
      break;
    case 'btt':
      positionStyle.bottom = ''.concat(offsetStart * 100, '%');
      positionStyle.height = ''.concat(offsetEnd * 100 - offsetStart * 100, '%');
      break;
    case 'ttb':
      positionStyle.top = ''.concat(offsetStart * 100, '%');
      positionStyle.height = ''.concat(offsetEnd * 100 - offsetStart * 100, '%');
      break;
    default:
      positionStyle.left = ''.concat(offsetStart * 100, '%');
      positionStyle.width = ''.concat(offsetEnd * 100 - offsetStart * 100, '%');
  }
  return /* @__PURE__ */ React5.createElement('div', {
    className: classNames2(trackPrefixCls, range && ''.concat(trackPrefixCls, '-').concat(index + 1)),
    style: _objectSpread2(_objectSpread2({}, positionStyle), style),
    onMouseDown: onInternalStartMove,
    onTouchStart: onInternalStartMove
  });
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Tracks/index.js
function Tracks(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    values = props.values,
    startPoint = props.startPoint,
    onStartMove = props.onStartMove;
  var _React$useContext = React6.useContext(context_default),
    included = _React$useContext.included,
    range = _React$useContext.range,
    min = _React$useContext.min;
  var trackList = React6.useMemo(
    function() {
      if (!range) {
        if (values.length === 0) {
          return [];
        }
        var startValue = startPoint !== null && startPoint !== void 0 ? startPoint : min;
        var endValue = values[0];
        return [
          {
            start: Math.min(startValue, endValue),
            end: Math.max(startValue, endValue)
          }
        ];
      }
      var list = [];
      for (var i = 0; i < values.length - 1; i += 1) {
        list.push({
          start: values[i],
          end: values[i + 1]
        });
      }
      return list;
    },
    [values, range, startPoint, min]
  );
  return included
    ? trackList.map(function(_ref, index) {
        var start = _ref.start,
          end = _ref.end;
        return /* @__PURE__ */ React6.createElement(Track, {
          index,
          prefixCls,
          style: getIndex(style, index),
          start,
          end,
          key: index,
          onStartMove
        });
      })
    : null;
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Marks/index.js
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Marks/Mark.js
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Mark(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    children = props.children,
    value = props.value,
    _onClick = props.onClick;
  var _React$useContext = React7.useContext(context_default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd,
    included = _React$useContext.included;
  var textCls = ''.concat(prefixCls, '-text');
  var positionStyle = getDirectionStyle(direction, value, min, max);
  return /* @__PURE__ */ React7.createElement(
    'span',
    {
      className: classNames3(
        textCls,
        _defineProperty2({}, ''.concat(textCls, '-active'), included && includedStart <= value && value <= includedEnd)
      ),
      style: _objectSpread3(_objectSpread3({}, positionStyle), style),
      onMouseDown: function onMouseDown(e) {
        e.stopPropagation();
      },
      onClick: function onClick() {
        _onClick(value);
      }
    },
    children
  );
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Marks/index.js
function Marks(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    onClick = props.onClick;
  var markPrefixCls = ''.concat(prefixCls, '-mark');
  if (!marks.length) {
    return null;
  }
  return /* @__PURE__ */ React8.createElement(
    'div',
    {
      className: markPrefixCls
    },
    marks.map(function(_ref) {
      var value = _ref.value,
        style = _ref.style,
        label = _ref.label;
      return /* @__PURE__ */ React8.createElement(
        Mark,
        {
          key: value,
          prefixCls: markPrefixCls,
          style,
          value,
          onClick
        },
        label
      );
    })
  );
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Steps/index.js
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Steps/Dot.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Dot(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React9.useContext(context_default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    direction = _React$useContext.direction,
    included = _React$useContext.included,
    includedStart = _React$useContext.includedStart,
    includedEnd = _React$useContext.includedEnd;
  var dotClassName = ''.concat(prefixCls, '-dot');
  var active = included && includedStart <= value && value <= includedEnd;
  var mergedStyle = _objectSpread4(
    _objectSpread4({}, getDirectionStyle(direction, value, min, max)),
    typeof style === 'function' ? style(value) : style
  );
  if (active) {
    mergedStyle = _objectSpread4(
      _objectSpread4({}, mergedStyle),
      typeof activeStyle === 'function' ? activeStyle(value) : activeStyle
    );
  }
  return /* @__PURE__ */ React9.createElement('span', {
    className: classNames4(dotClassName, _defineProperty3({}, ''.concat(dotClassName, '-active'), active)),
    style: mergedStyle
  });
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Steps/index.js
function Steps(props) {
  var prefixCls = props.prefixCls,
    marks = props.marks,
    dots = props.dots,
    style = props.style,
    activeStyle = props.activeStyle;
  var _React$useContext = React10.useContext(context_default),
    min = _React$useContext.min,
    max = _React$useContext.max,
    step = _React$useContext.step;
  var stepDots = React10.useMemo(
    function() {
      var dotSet = /* @__PURE__ */ new Set();
      marks.forEach(function(mark) {
        dotSet.add(mark.value);
      });
      if (dots && step !== null) {
        var current = min;
        while (current <= max) {
          dotSet.add(current);
          current += step;
        }
      }
      return Array.from(dotSet);
    },
    [min, max, step, dots, marks]
  );
  return /* @__PURE__ */ React10.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-step')
    },
    stepDots.map(function(dotValue) {
      return /* @__PURE__ */ React10.createElement(Dot, {
        prefixCls,
        key: dotValue,
        value: dotValue,
        style,
        activeStyle
      });
    })
  );
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/hooks/useOffset.js
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useOffset(min, max, step, markList, allowCross, pushable) {
  var formatRangeValue = React11.useCallback(
    function(val) {
      var formatNextValue = isFinite(val) ? val : min;
      formatNextValue = Math.min(max, val);
      formatNextValue = Math.max(min, formatNextValue);
      return formatNextValue;
    },
    [min, max]
  );
  var formatStepValue = React11.useCallback(
    function(val) {
      if (step !== null) {
        var stepValue = min + Math.round((formatRangeValue(val) - min) / step) * step;
        var getDecimal = function getDecimal2(num) {
          return (String(num).split('.')[1] || '').length;
        };
        var maxDecimal = Math.max(getDecimal(step), getDecimal(max), getDecimal(min));
        var fixedValue = Number(stepValue.toFixed(maxDecimal));
        return min <= fixedValue && fixedValue <= max ? fixedValue : null;
      }
      return null;
    },
    [step, min, max, formatRangeValue]
  );
  var formatValue = React11.useCallback(
    function(val) {
      var formatNextValue = formatRangeValue(val);
      var alignValues = markList.map(function(mark) {
        return mark.value;
      });
      if (step !== null) {
        alignValues.push(formatStepValue(val));
      }
      alignValues.push(min, max);
      var closeValue = alignValues[0];
      var closeDist = max - min;
      alignValues.forEach(function(alignValue) {
        var dist = Math.abs(formatNextValue - alignValue);
        if (dist <= closeDist) {
          closeValue = alignValue;
          closeDist = dist;
        }
      });
      return closeValue;
    },
    [min, max, markList, step, formatRangeValue, formatStepValue]
  );
  var offsetValue = function offsetValue2(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit';
    if (typeof offset === 'number') {
      var nextValue;
      var originValue = values[valueIndex];
      var targetDistValue = originValue + offset;
      var potentialValues = [];
      markList.forEach(function(mark) {
        potentialValues.push(mark.value);
      });
      potentialValues.push(min, max);
      potentialValues.push(formatStepValue(originValue));
      var sign = offset > 0 ? 1 : -1;
      if (mode === 'unit') {
        potentialValues.push(formatStepValue(originValue + sign * step));
      } else {
        potentialValues.push(formatStepValue(targetDistValue));
      }
      potentialValues = potentialValues
        .filter(function(val) {
          return val !== null;
        })
        .filter(function(val) {
          return offset < 0 ? val <= originValue : val >= originValue;
        });
      if (mode === 'unit') {
        potentialValues = potentialValues.filter(function(val) {
          return val !== originValue;
        });
      }
      var compareValue = mode === 'unit' ? originValue : targetDistValue;
      nextValue = potentialValues[0];
      var valueDist = Math.abs(nextValue - compareValue);
      potentialValues.forEach(function(potentialValue) {
        var dist = Math.abs(potentialValue - compareValue);
        if (dist < valueDist) {
          nextValue = potentialValue;
          valueDist = dist;
        }
      });
      if (nextValue === void 0) {
        return offset < 0 ? min : max;
      }
      if (mode === 'dist') {
        return nextValue;
      }
      if (Math.abs(offset) > 1) {
        var cloneValues = _toConsumableArray2(values);
        cloneValues[valueIndex] = nextValue;
        return offsetValue2(cloneValues, offset - sign, valueIndex, mode);
      }
      return nextValue;
    } else if (offset === 'min') {
      return min;
    } else if (offset === 'max') {
      return max;
    }
  };
  var offsetChangedValue = function offsetChangedValue2(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit';
    var originValue = values[valueIndex];
    var nextValue = offsetValue(values, offset, valueIndex, mode);
    return {
      value: nextValue,
      changed: nextValue !== originValue
    };
  };
  var needPush = function needPush2(dist) {
    return (pushable === null && dist === 0) || (typeof pushable === 'number' && dist < pushable);
  };
  var offsetValues = function offsetValues2(values, offset, valueIndex) {
    var mode = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 'unit';
    var nextValues = values.map(formatValue);
    var originValue = nextValues[valueIndex];
    var nextValue = offsetValue(nextValues, offset, valueIndex, mode);
    nextValues[valueIndex] = nextValue;
    if (allowCross === false) {
      var pushNum = pushable || 0;
      if (valueIndex > 0 && nextValues[valueIndex - 1] !== originValue) {
        nextValues[valueIndex] = Math.max(nextValues[valueIndex], nextValues[valueIndex - 1] + pushNum);
      }
      if (valueIndex < nextValues.length - 1 && nextValues[valueIndex + 1] !== originValue) {
        nextValues[valueIndex] = Math.min(nextValues[valueIndex], nextValues[valueIndex + 1] - pushNum);
      }
    } else if (typeof pushable === 'number' || pushable === null) {
      for (var i = valueIndex + 1; i < nextValues.length; i += 1) {
        var changed = true;
        while (needPush(nextValues[i] - nextValues[i - 1]) && changed) {
          var _offsetChangedValue = offsetChangedValue(nextValues, 1, i);
          nextValues[i] = _offsetChangedValue.value;
          changed = _offsetChangedValue.changed;
        }
      }
      for (var _i = valueIndex; _i > 0; _i -= 1) {
        var _changed = true;
        while (needPush(nextValues[_i] - nextValues[_i - 1]) && _changed) {
          var _offsetChangedValue2 = offsetChangedValue(nextValues, -1, _i - 1);
          nextValues[_i - 1] = _offsetChangedValue2.value;
          _changed = _offsetChangedValue2.changed;
        }
      }
      for (var _i2 = nextValues.length - 1; _i2 > 0; _i2 -= 1) {
        var _changed2 = true;
        while (needPush(nextValues[_i2] - nextValues[_i2 - 1]) && _changed2) {
          var _offsetChangedValue3 = offsetChangedValue(nextValues, -1, _i2 - 1);
          nextValues[_i2 - 1] = _offsetChangedValue3.value;
          _changed2 = _offsetChangedValue3.changed;
        }
      }
      for (var _i3 = 0; _i3 < nextValues.length - 1; _i3 += 1) {
        var _changed3 = true;
        while (needPush(nextValues[_i3 + 1] - nextValues[_i3]) && _changed3) {
          var _offsetChangedValue4 = offsetChangedValue(nextValues, 1, _i3 + 1);
          nextValues[_i3 + 1] = _offsetChangedValue4.value;
          _changed3 = _offsetChangedValue4.changed;
        }
      }
    }
    return {
      value: nextValues[valueIndex],
      values: nextValues
    };
  };
  return [formatValue, offsetValues];
}

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/Slider.js
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var Slider = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-slider' : _props$prefixCls,
    className = props.className,
    style = props.style,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    autoFocus = props.autoFocus,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    value = props.value,
    defaultValue = props.defaultValue,
    range = props.range,
    count = props.count,
    onChange = props.onChange,
    onBeforeChange = props.onBeforeChange,
    onAfterChange = props.onAfterChange,
    _props$allowCross = props.allowCross,
    allowCross = _props$allowCross === void 0 ? true : _props$allowCross,
    _props$pushable = props.pushable,
    pushable = _props$pushable === void 0 ? false : _props$pushable,
    draggableTrack = props.draggableTrack,
    reverse = props.reverse,
    vertical = props.vertical,
    _props$included = props.included,
    included = _props$included === void 0 ? true : _props$included,
    startPoint = props.startPoint,
    trackStyle = props.trackStyle,
    handleStyle = props.handleStyle,
    railStyle = props.railStyle,
    dotStyle = props.dotStyle,
    activeDotStyle = props.activeDotStyle,
    marks = props.marks,
    dots = props.dots,
    handleRender = props.handleRender,
    _props$tabIndex = props.tabIndex,
    tabIndex = _props$tabIndex === void 0 ? 0 : _props$tabIndex,
    ariaLabelForHandle = props.ariaLabelForHandle,
    ariaLabelledByForHandle = props.ariaLabelledByForHandle,
    ariaValueTextFormatterForHandle = props.ariaValueTextFormatterForHandle;
  var handlesRef = React12.useRef();
  var containerRef = React12.useRef();
  var direction = React12.useMemo(
    function() {
      if (vertical) {
        return reverse ? 'ttb' : 'btt';
      }
      return reverse ? 'rtl' : 'ltr';
    },
    [reverse, vertical]
  );
  var mergedMin = React12.useMemo(
    function() {
      return isFinite(min) ? min : 0;
    },
    [min]
  );
  var mergedMax = React12.useMemo(
    function() {
      return isFinite(max) ? max : 100;
    },
    [max]
  );
  var mergedStep = React12.useMemo(
    function() {
      return step !== null && step <= 0 ? 1 : step;
    },
    [step]
  );
  var mergedPush = React12.useMemo(
    function() {
      if (pushable === true) {
        return mergedStep;
      }
      return pushable >= 0 ? pushable : false;
    },
    [pushable, mergedStep]
  );
  var markList = React12.useMemo(
    function() {
      var keys = Object.keys(marks || {});
      return keys
        .map(function(key) {
          var mark = marks[key];
          var markObj = {
            value: Number(key)
          };
          if (
            mark &&
            _typeof(mark) === 'object' &&
            !(/* @__PURE__ */ React12.isValidElement(mark)) &&
            ('label' in mark || 'style' in mark)
          ) {
            markObj.style = mark.style;
            markObj.label = mark.label;
          } else {
            markObj.label = mark;
          }
          return markObj;
        })
        .filter(function(_ref) {
          var label = _ref.label;
          return label || typeof label === 'number';
        })
        .sort(function(a, b) {
          return a.value - b.value;
        });
    },
    [marks]
  );
  var _useOffset = useOffset(mergedMin, mergedMax, mergedStep, markList, allowCross, mergedPush),
    _useOffset2 = _slicedToArray2(_useOffset, 2),
    formatValue = _useOffset2[0],
    offsetValues = _useOffset2[1];
  var _useMergedState = useMergedState(defaultValue, {
      value
    }),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var rawValues = React12.useMemo(
    function() {
      var valueList =
        mergedValue === null || mergedValue === void 0 ? [] : Array.isArray(mergedValue) ? mergedValue : [mergedValue];
      var _valueList = _slicedToArray2(valueList, 1),
        _valueList$ = _valueList[0],
        val0 = _valueList$ === void 0 ? mergedMin : _valueList$;
      var returnValues = mergedValue === null ? [] : [val0];
      if (range) {
        returnValues = _toConsumableArray3(valueList);
        if (count || mergedValue === void 0) {
          var pointCount = count >= 0 ? count + 1 : 2;
          returnValues = returnValues.slice(0, pointCount);
          while (returnValues.length < pointCount) {
            var _returnValues;
            returnValues.push(
              (_returnValues = returnValues[returnValues.length - 1]) !== null && _returnValues !== void 0
                ? _returnValues
                : mergedMin
            );
          }
        }
        returnValues.sort(function(a, b) {
          return a - b;
        });
      }
      returnValues.forEach(function(val, index) {
        returnValues[index] = formatValue(val);
      });
      return returnValues;
    },
    [mergedValue, range, mergedMin, count, formatValue]
  );
  var rawValuesRef = React12.useRef(rawValues);
  rawValuesRef.current = rawValues;
  var getTriggerValue = function getTriggerValue2(triggerValues) {
    return range ? triggerValues : triggerValues[0];
  };
  var triggerChange = function triggerChange2(nextValues) {
    var cloneNextValues = _toConsumableArray3(nextValues).sort(function(a, b) {
      return a - b;
    });
    if (onChange && !shallowEqual(cloneNextValues, rawValuesRef.current)) {
      onChange(getTriggerValue(cloneNextValues));
    }
    setValue(cloneNextValues);
  };
  var changeToCloseValue = function changeToCloseValue2(newValue) {
    if (!disabled) {
      var valueIndex = 0;
      var valueDist = mergedMax - mergedMin;
      rawValues.forEach(function(val, index) {
        var dist = Math.abs(newValue - val);
        if (dist <= valueDist) {
          valueDist = dist;
          valueIndex = index;
        }
      });
      var cloneNextValues = _toConsumableArray3(rawValues);
      cloneNextValues[valueIndex] = newValue;
      if (range && !rawValues.length && count === void 0) {
        cloneNextValues.push(newValue);
      }
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(cloneNextValues));
      triggerChange(cloneNextValues);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(cloneNextValues));
    }
  };
  var onSliderMouseDown = function onSliderMouseDown2(e) {
    e.preventDefault();
    var _containerRef$current = containerRef.current.getBoundingClientRect(),
      width = _containerRef$current.width,
      height = _containerRef$current.height,
      left = _containerRef$current.left,
      top = _containerRef$current.top,
      bottom = _containerRef$current.bottom,
      right = _containerRef$current.right;
    var clientX = e.clientX,
      clientY = e.clientY;
    var percent;
    switch (direction) {
      case 'btt':
        percent = (bottom - clientY) / height;
        break;
      case 'ttb':
        percent = (clientY - top) / height;
        break;
      case 'rtl':
        percent = (right - clientX) / width;
        break;
      default:
        percent = (clientX - left) / width;
    }
    var nextValue = mergedMin + percent * (mergedMax - mergedMin);
    changeToCloseValue(formatValue(nextValue));
  };
  var _React$useState = React12.useState(null),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    keyboardValue = _React$useState2[0],
    setKeyboardValue = _React$useState2[1];
  var onHandleOffsetChange = function onHandleOffsetChange2(offset, valueIndex) {
    if (!disabled) {
      var next = offsetValues(rawValues, offset, valueIndex);
      onBeforeChange === null || onBeforeChange === void 0 ? void 0 : onBeforeChange(getTriggerValue(rawValues));
      triggerChange(next.values);
      onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(next.values));
      setKeyboardValue(next.value);
    }
  };
  React12.useEffect(
    function() {
      if (keyboardValue !== null) {
        var valueIndex = rawValues.indexOf(keyboardValue);
        if (valueIndex >= 0) {
          handlesRef.current.focus(valueIndex);
        }
      }
      setKeyboardValue(null);
    },
    [keyboardValue]
  );
  var mergedDraggableTrack = React12.useMemo(
    function() {
      if (draggableTrack && mergedStep === null) {
        if (true) {
          warning(false, '`draggableTrack` is not supported when `step` is `null`.');
        }
        return false;
      }
      return draggableTrack;
    },
    [draggableTrack, mergedStep]
  );
  var finishChange = function finishChange2() {
    onAfterChange === null || onAfterChange === void 0 ? void 0 : onAfterChange(getTriggerValue(rawValuesRef.current));
  };
  var _useDrag = useDrag(
      containerRef,
      direction,
      rawValues,
      mergedMin,
      mergedMax,
      formatValue,
      triggerChange,
      finishChange,
      offsetValues
    ),
    _useDrag2 = _slicedToArray2(_useDrag, 4),
    draggingIndex = _useDrag2[0],
    draggingValue = _useDrag2[1],
    cacheValues = _useDrag2[2],
    onStartDrag = _useDrag2[3];
  var onStartMove = function onStartMove2(e, valueIndex) {
    onStartDrag(e, valueIndex);
    onBeforeChange === null || onBeforeChange === void 0
      ? void 0
      : onBeforeChange(getTriggerValue(rawValuesRef.current));
  };
  var dragging = draggingIndex !== -1;
  React12.useEffect(
    function() {
      if (!dragging) {
        var valueIndex = rawValues.lastIndexOf(draggingValue);
        handlesRef.current.focus(valueIndex);
      }
    },
    [dragging]
  );
  var sortedCacheValues = React12.useMemo(
    function() {
      return _toConsumableArray3(cacheValues).sort(function(a, b) {
        return a - b;
      });
    },
    [cacheValues]
  );
  var _React$useMemo = React12.useMemo(
      function() {
        if (!range) {
          return [mergedMin, sortedCacheValues[0]];
        }
        return [sortedCacheValues[0], sortedCacheValues[sortedCacheValues.length - 1]];
      },
      [sortedCacheValues, range, mergedMin]
    ),
    _React$useMemo2 = _slicedToArray2(_React$useMemo, 2),
    includedStart = _React$useMemo2[0],
    includedEnd = _React$useMemo2[1];
  React12.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        handlesRef.current.focus(0);
      },
      blur: function blur() {
        var _document = document,
          activeElement = _document.activeElement;
        if (containerRef.current.contains(activeElement)) {
          activeElement === null || activeElement === void 0 ? void 0 : activeElement.blur();
        }
      }
    };
  });
  React12.useEffect(function() {
    if (autoFocus) {
      handlesRef.current.focus(0);
    }
  }, []);
  var context = React12.useMemo(
    function() {
      return {
        min: mergedMin,
        max: mergedMax,
        direction,
        disabled,
        step: mergedStep,
        included,
        includedStart,
        includedEnd,
        range,
        tabIndex,
        ariaLabelForHandle,
        ariaLabelledByForHandle,
        ariaValueTextFormatterForHandle
      };
    },
    [
      mergedMin,
      mergedMax,
      direction,
      disabled,
      mergedStep,
      included,
      includedStart,
      includedEnd,
      range,
      tabIndex,
      ariaLabelForHandle,
      ariaLabelledByForHandle,
      ariaValueTextFormatterForHandle
    ]
  );
  return /* @__PURE__ */ React12.createElement(
    context_default.Provider,
    {
      value: context
    },
    /* @__PURE__ */ React12.createElement(
      'div',
      {
        ref: containerRef,
        className: classNames5(
          prefixCls,
          className,
          ((_classNames = {}),
          _defineProperty4(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
          _defineProperty4(_classNames, ''.concat(prefixCls, '-vertical'), vertical),
          _defineProperty4(_classNames, ''.concat(prefixCls, '-horizontal'), !vertical),
          _defineProperty4(_classNames, ''.concat(prefixCls, '-with-marks'), markList.length),
          _classNames)
        ),
        style,
        onMouseDown: onSliderMouseDown
      },
      /* @__PURE__ */ React12.createElement('div', {
        className: ''.concat(prefixCls, '-rail'),
        style: railStyle
      }),
      /* @__PURE__ */ React12.createElement(Tracks, {
        prefixCls,
        style: trackStyle,
        values: sortedCacheValues,
        startPoint,
        onStartMove: mergedDraggableTrack ? onStartMove : null
      }),
      /* @__PURE__ */ React12.createElement(Steps, {
        prefixCls,
        marks: markList,
        dots,
        style: dotStyle,
        activeStyle: activeDotStyle
      }),
      /* @__PURE__ */ React12.createElement(Handles_default, {
        ref: handlesRef,
        prefixCls,
        style: handleStyle,
        values: cacheValues,
        draggingIndex,
        onStartMove,
        onOffsetChange: onHandleOffsetChange,
        onFocus,
        onBlur,
        handleRender
      }),
      /* @__PURE__ */ React12.createElement(Marks, {
        prefixCls,
        marks: markList,
        onClick: changeToCloseValue
      })
    )
  );
});
if (true) {
  Slider.displayName = 'Slider';
}
var Slider_default = Slider;

// esm-build-c5545f97e80a456142a0234b736871b2a8fd02ae-5f0ab7f0/node_modules/rc-slider/es/index.js
var es_default = Slider_default;
export { es_default as default };
