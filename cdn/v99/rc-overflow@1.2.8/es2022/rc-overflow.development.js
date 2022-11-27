/* esm.sh - esbuild bundle(rc-overflow@1.2.8) es2022 development */
// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/Overflow.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  useState as useState2,
  useMemo as useMemo2,
  useCallback
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import ResizeObserver2 from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';

// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/Item.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
var _excluded = [
  'prefixCls',
  'invalidate',
  'item',
  'renderItem',
  'responsive',
  'responsiveDisabled',
  'registerSize',
  'itemKey',
  'className',
  'style',
  'children',
  'display',
  'order',
  'component'
];
var UNDEFINED = void 0;
function InternalItem(props, ref) {
  var prefixCls = props.prefixCls,
    invalidate = props.invalidate,
    item = props.item,
    renderItem = props.renderItem,
    responsive = props.responsive,
    responsiveDisabled = props.responsiveDisabled,
    registerSize = props.registerSize,
    itemKey = props.itemKey,
    className = props.className,
    style = props.style,
    children = props.children,
    display = props.display,
    order = props.order,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    restProps = _objectWithoutProperties(props, _excluded);
  var mergedHidden = responsive && !display;
  function internalRegisterSize(width) {
    registerSize(itemKey, width);
  }
  React.useEffect(function() {
    return function() {
      internalRegisterSize(null);
    };
  }, []);
  var childNode = renderItem && item !== UNDEFINED ? renderItem(item) : children;
  var overflowStyle;
  if (!invalidate) {
    overflowStyle = {
      opacity: mergedHidden ? 0 : 1,
      height: mergedHidden ? 0 : UNDEFINED,
      overflowY: mergedHidden ? 'hidden' : UNDEFINED,
      order: responsive ? order : UNDEFINED,
      pointerEvents: mergedHidden ? 'none' : UNDEFINED,
      position: mergedHidden ? 'absolute' : UNDEFINED
    };
  }
  var overflowProps = {};
  if (mergedHidden) {
    overflowProps['aria-hidden'] = true;
  }
  var itemNode = /* @__PURE__ */ React.createElement(
    Component,
    _extends(
      {
        className: classNames(!invalidate && prefixCls, className),
        style: _objectSpread(_objectSpread({}, overflowStyle), style)
      },
      overflowProps,
      restProps,
      {
        ref
      }
    ),
    childNode
  );
  if (responsive) {
    itemNode = /* @__PURE__ */ React.createElement(
      ResizeObserver,
      {
        onResize: function onResize(_ref) {
          var offsetWidth = _ref.offsetWidth;
          internalRegisterSize(offsetWidth);
        },
        disabled: responsiveDisabled
      },
      itemNode
    );
  }
  return itemNode;
}
var Item = /* @__PURE__ */ React.forwardRef(InternalItem);
Item.displayName = 'Item';
var Item_default = Item;

// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/hooks/useBatchFrameState.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import { useRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import useState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useState.development.js';
function useBatchFrameState() {
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  var statesRef = useRef([]);
  var walkingIndex = 0;
  var beforeFrameId = 0;
  function createState(defaultValue) {
    var myIndex = walkingIndex;
    walkingIndex += 1;
    if (statesRef.current.length < myIndex + 1) {
      statesRef.current[myIndex] = defaultValue;
    }
    var value = statesRef.current[myIndex];
    function setValue(val) {
      statesRef.current[myIndex] = typeof val === 'function' ? val(statesRef.current[myIndex]) : val;
      raf.cancel(beforeFrameId);
      beforeFrameId = raf(function() {
        forceUpdate({}, true);
      });
    }
    return [value, setValue];
  }
  return createState;
}

// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/RawItem.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var _excluded2 = ['component'];
var _excluded22 = ['className'];
var _excluded3 = ['className'];
var InternalRawItem = function InternalRawItem2(props, ref) {
  var context = React2.useContext(OverflowContext);
  if (!context) {
    var _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _restProps = _objectWithoutProperties2(props, _excluded2);
    return /* @__PURE__ */ React2.createElement(
      Component,
      _extends2({}, _restProps, {
        ref
      })
    );
  }
  var contextClassName = context.className,
    restContext = _objectWithoutProperties2(context, _excluded22);
  var className = props.className,
    restProps = _objectWithoutProperties2(props, _excluded3);
  return /* @__PURE__ */ React2.createElement(
    OverflowContext.Provider,
    {
      value: null
    },
    /* @__PURE__ */ React2.createElement(
      Item_default,
      _extends2(
        {
          ref,
          className: classNames2(contextClassName, className)
        },
        restContext,
        restProps
      )
    )
  );
};
var RawItem = /* @__PURE__ */ React2.forwardRef(InternalRawItem);
RawItem.displayName = 'RawItem';
var RawItem_default = RawItem;

// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/Overflow.js
var _excluded4 = [
  'prefixCls',
  'data',
  'renderItem',
  'renderRawItem',
  'itemKey',
  'itemWidth',
  'ssr',
  'style',
  'className',
  'maxCount',
  'renderRest',
  'renderRawRest',
  'suffix',
  'component',
  'itemComponent',
  'onVisibleChange'
];
var OverflowContext = /* @__PURE__ */ React3.createContext(null);
var RESPONSIVE = 'responsive';
var INVALIDATE = 'invalidate';
function defaultRenderRest(omittedItems) {
  return '+ '.concat(omittedItems.length, ' ...');
}
function Overflow(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-overflow' : _props$prefixCls,
    _props$data = props.data,
    data = _props$data === void 0 ? [] : _props$data,
    renderItem = props.renderItem,
    renderRawItem = props.renderRawItem,
    itemKey = props.itemKey,
    _props$itemWidth = props.itemWidth,
    itemWidth = _props$itemWidth === void 0 ? 10 : _props$itemWidth,
    ssr = props.ssr,
    style = props.style,
    className = props.className,
    maxCount = props.maxCount,
    renderRest = props.renderRest,
    renderRawRest = props.renderRawRest,
    suffix = props.suffix,
    _props$component = props.component,
    Component = _props$component === void 0 ? 'div' : _props$component,
    itemComponent = props.itemComponent,
    onVisibleChange = props.onVisibleChange,
    restProps = _objectWithoutProperties3(props, _excluded4);
  var createUseState = useBatchFrameState();
  var fullySSR = ssr === 'full';
  var _createUseState = createUseState(null),
    _createUseState2 = _slicedToArray2(_createUseState, 2),
    containerWidth = _createUseState2[0],
    setContainerWidth = _createUseState2[1];
  var mergedContainerWidth = containerWidth || 0;
  var _createUseState3 = createUseState(/* @__PURE__ */ new Map()),
    _createUseState4 = _slicedToArray2(_createUseState3, 2),
    itemWidths = _createUseState4[0],
    setItemWidths = _createUseState4[1];
  var _createUseState5 = createUseState(0),
    _createUseState6 = _slicedToArray2(_createUseState5, 2),
    prevRestWidth = _createUseState6[0],
    setPrevRestWidth = _createUseState6[1];
  var _createUseState7 = createUseState(0),
    _createUseState8 = _slicedToArray2(_createUseState7, 2),
    restWidth = _createUseState8[0],
    setRestWidth = _createUseState8[1];
  var _createUseState9 = createUseState(0),
    _createUseState10 = _slicedToArray2(_createUseState9, 2),
    suffixWidth = _createUseState10[0],
    setSuffixWidth = _createUseState10[1];
  var _useState = useState2(null),
    _useState2 = _slicedToArray2(_useState, 2),
    suffixFixedStart = _useState2[0],
    setSuffixFixedStart = _useState2[1];
  var _useState3 = useState2(null),
    _useState4 = _slicedToArray2(_useState3, 2),
    displayCount = _useState4[0],
    setDisplayCount = _useState4[1];
  var mergedDisplayCount = React3.useMemo(
    function() {
      if (displayCount === null && fullySSR) {
        return Number.MAX_SAFE_INTEGER;
      }
      return displayCount || 0;
    },
    [displayCount, containerWidth]
  );
  var _useState5 = useState2(false),
    _useState6 = _slicedToArray2(_useState5, 2),
    restReady = _useState6[0],
    setRestReady = _useState6[1];
  var itemPrefixCls = ''.concat(prefixCls, '-item');
  var mergedRestWidth = Math.max(prevRestWidth, restWidth);
  var isResponsive = maxCount === RESPONSIVE;
  var shouldResponsive = data.length && isResponsive;
  var invalidate = maxCount === INVALIDATE;
  var showRest = shouldResponsive || (typeof maxCount === 'number' && data.length > maxCount);
  var mergedData = useMemo2(
    function() {
      var items = data;
      if (shouldResponsive) {
        if (containerWidth === null && fullySSR) {
          items = data;
        } else {
          items = data.slice(0, Math.min(data.length, mergedContainerWidth / itemWidth));
        }
      } else if (typeof maxCount === 'number') {
        items = data.slice(0, maxCount);
      }
      return items;
    },
    [data, itemWidth, containerWidth, maxCount, shouldResponsive]
  );
  var omittedItems = useMemo2(
    function() {
      if (shouldResponsive) {
        return data.slice(mergedDisplayCount + 1);
      }
      return data.slice(mergedData.length);
    },
    [data, mergedData, shouldResponsive, mergedDisplayCount]
  );
  var getKey = useCallback(
    function(item, index) {
      var _ref;
      if (typeof itemKey === 'function') {
        return itemKey(item);
      }
      return (_ref = itemKey && (item === null || item === void 0 ? void 0 : item[itemKey])) !== null && _ref !== void 0
        ? _ref
        : index;
    },
    [itemKey]
  );
  var mergedRenderItem = useCallback(
    renderItem ||
      function(item) {
        return item;
      },
    [renderItem]
  );
  function updateDisplayCount(count, suffixFixedStartVal, notReady) {
    if (displayCount === count && (suffixFixedStartVal === void 0 || suffixFixedStartVal === suffixFixedStart)) {
      return;
    }
    setDisplayCount(count);
    if (!notReady) {
      setRestReady(count < data.length - 1);
      onVisibleChange === null || onVisibleChange === void 0 ? void 0 : onVisibleChange(count);
    }
    if (suffixFixedStartVal !== void 0) {
      setSuffixFixedStart(suffixFixedStartVal);
    }
  }
  function onOverflowResize(_, element) {
    setContainerWidth(element.clientWidth);
  }
  function registerSize(key, width) {
    setItemWidths(function(origin) {
      var clone = new Map(origin);
      if (width === null) {
        clone.delete(key);
      } else {
        clone.set(key, width);
      }
      return clone;
    });
  }
  function registerOverflowSize(_, width) {
    setRestWidth(width);
    setPrevRestWidth(restWidth);
  }
  function registerSuffixSize(_, width) {
    setSuffixWidth(width);
  }
  function getItemWidth(index) {
    return itemWidths.get(getKey(mergedData[index], index));
  }
  useLayoutEffect(
    function() {
      if (mergedContainerWidth && mergedRestWidth && mergedData) {
        var totalWidth = suffixWidth;
        var len = mergedData.length;
        var lastIndex = len - 1;
        if (!len) {
          updateDisplayCount(0, null);
          return;
        }
        for (var i = 0; i < len; i += 1) {
          var currentItemWidth = getItemWidth(i);
          if (fullySSR) {
            currentItemWidth = currentItemWidth || 0;
          }
          if (currentItemWidth === void 0) {
            updateDisplayCount(i - 1, void 0, true);
            break;
          }
          totalWidth += currentItemWidth;
          if (
            (lastIndex === 0 && totalWidth <= mergedContainerWidth) ||
            (i === lastIndex - 1 && totalWidth + getItemWidth(lastIndex) <= mergedContainerWidth)
          ) {
            updateDisplayCount(lastIndex, null);
            break;
          } else if (totalWidth + mergedRestWidth > mergedContainerWidth) {
            updateDisplayCount(i - 1, totalWidth - currentItemWidth - suffixWidth + restWidth);
            break;
          }
        }
        if (suffix && getItemWidth(0) + suffixWidth > mergedContainerWidth) {
          setSuffixFixedStart(null);
        }
      }
    },
    [mergedContainerWidth, itemWidths, restWidth, suffixWidth, getKey, mergedData]
  );
  var displayRest = restReady && !!omittedItems.length;
  var suffixStyle = {};
  if (suffixFixedStart !== null && shouldResponsive) {
    suffixStyle = {
      position: 'absolute',
      left: suffixFixedStart,
      top: 0
    };
  }
  var itemSharedProps = {
    prefixCls: itemPrefixCls,
    responsive: shouldResponsive,
    component: itemComponent,
    invalidate
  };
  var internalRenderItemNode = renderRawItem
    ? function(item, index) {
        var key = getKey(item, index);
        return /* @__PURE__ */ React3.createElement(
          OverflowContext.Provider,
          {
            key,
            value: _objectSpread2(
              _objectSpread2({}, itemSharedProps),
              {},
              {
                order: index,
                item,
                itemKey: key,
                registerSize,
                display: index <= mergedDisplayCount
              }
            )
          },
          renderRawItem(item, index)
        );
      }
    : function(item, index) {
        var key = getKey(item, index);
        return /* @__PURE__ */ React3.createElement(
          Item_default,
          _extends3({}, itemSharedProps, {
            order: index,
            key,
            item,
            renderItem: mergedRenderItem,
            itemKey: key,
            registerSize,
            display: index <= mergedDisplayCount
          })
        );
      };
  var restNode;
  var restContextProps = {
    order: displayRest ? mergedDisplayCount : Number.MAX_SAFE_INTEGER,
    className: ''.concat(itemPrefixCls, '-rest'),
    registerSize: registerOverflowSize,
    display: displayRest
  };
  if (!renderRawRest) {
    var mergedRenderRest = renderRest || defaultRenderRest;
    restNode = /* @__PURE__ */ React3.createElement(
      Item_default,
      _extends3({}, itemSharedProps, restContextProps),
      typeof mergedRenderRest === 'function' ? mergedRenderRest(omittedItems) : mergedRenderRest
    );
  } else if (renderRawRest) {
    restNode = /* @__PURE__ */ React3.createElement(
      OverflowContext.Provider,
      {
        value: _objectSpread2(_objectSpread2({}, itemSharedProps), restContextProps)
      },
      renderRawRest(omittedItems)
    );
  }
  var overflowNode = /* @__PURE__ */ React3.createElement(
    Component,
    _extends3(
      {
        className: classNames3(!invalidate && prefixCls, className),
        style,
        ref
      },
      restProps
    ),
    mergedData.map(internalRenderItemNode),
    showRest ? restNode : null,
    suffix &&
      /* @__PURE__ */ React3.createElement(
        Item_default,
        _extends3({}, itemSharedProps, {
          responsive: isResponsive,
          responsiveDisabled: !shouldResponsive,
          order: mergedDisplayCount,
          className: ''.concat(itemPrefixCls, '-suffix'),
          registerSize: registerSuffixSize,
          display: true,
          style: suffixStyle
        }),
        suffix
      )
  );
  if (isResponsive) {
    overflowNode = /* @__PURE__ */ React3.createElement(
      ResizeObserver2,
      {
        onResize: onOverflowResize,
        disabled: !shouldResponsive
      },
      overflowNode
    );
  }
  return overflowNode;
}
var ForwardOverflow = /* @__PURE__ */ React3.forwardRef(Overflow);
ForwardOverflow.displayName = 'Overflow';
ForwardOverflow.Item = RawItem_default;
ForwardOverflow.RESPONSIVE = RESPONSIVE;
ForwardOverflow.INVALIDATE = INVALIDATE;
var Overflow_default = ForwardOverflow;

// esm-build-58f975d126f5d3b9dd89e55034ebe384e7caf716-32e64623/node_modules/rc-overflow/es/index.js
var es_default = Overflow_default;
export { es_default as default };
