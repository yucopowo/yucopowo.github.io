/* esm.sh - esbuild bundle(rc-textarea@0.4.7) es2022 development */
// esm-build-7f8d3a603e97ea49136324c951d33e2456eeb872-d0ce82e9/node_modules/rc-textarea/es/index.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-7f8d3a603e97ea49136324c951d33e2456eeb872-d0ce82e9/node_modules/rc-textarea/es/ResizableTextArea.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-7f8d3a603e97ea49136324c951d33e2456eeb872-d0ce82e9/node_modules/rc-textarea/es/calculateNodeHeight.js
var HIDDEN_TEXTAREA_STYLE =
  '\n  min-height:0 !important;\n  max-height:none !important;\n  height:0 !important;\n  visibility:hidden !important;\n  overflow:hidden !important;\n  position:absolute !important;\n  z-index:-1000 !important;\n  top:0 !important;\n  right:0 !important;\n  pointer-events: none !important;\n';
var SIZING_STYLE = [
  'letter-spacing',
  'line-height',
  'padding-top',
  'padding-bottom',
  'font-family',
  'font-weight',
  'font-size',
  'font-variant',
  'text-rendering',
  'text-transform',
  'width',
  'text-indent',
  'padding-left',
  'padding-right',
  'border-width',
  'box-sizing',
  'word-break'
];
var computedStyleCache = {};
var hiddenTextarea;
function calculateNodeStyling(node) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var nodeRef = node.getAttribute('id') || node.getAttribute('data-reactid') || node.getAttribute('name');
  if (useCache && computedStyleCache[nodeRef]) {
    return computedStyleCache[nodeRef];
  }
  var style = window.getComputedStyle(node);
  var boxSizing =
    style.getPropertyValue('box-sizing') ||
    style.getPropertyValue('-moz-box-sizing') ||
    style.getPropertyValue('-webkit-box-sizing');
  var paddingSize =
    parseFloat(style.getPropertyValue('padding-bottom')) + parseFloat(style.getPropertyValue('padding-top'));
  var borderSize =
    parseFloat(style.getPropertyValue('border-bottom-width')) + parseFloat(style.getPropertyValue('border-top-width'));
  var sizingStyle = SIZING_STYLE.map(function(name) {
    return ''.concat(name, ':').concat(style.getPropertyValue(name));
  }).join(';');
  var nodeInfo = {
    sizingStyle,
    paddingSize,
    borderSize,
    boxSizing
  };
  if (useCache && nodeRef) {
    computedStyleCache[nodeRef] = nodeInfo;
  }
  return nodeInfo;
}
function calculateAutoSizeStyle(uiTextNode) {
  var useCache = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var minRows = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  var maxRows = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  if (!hiddenTextarea) {
    hiddenTextarea = document.createElement('textarea');
    hiddenTextarea.setAttribute('tab-index', '-1');
    hiddenTextarea.setAttribute('aria-hidden', 'true');
    document.body.appendChild(hiddenTextarea);
  }
  if (uiTextNode.getAttribute('wrap')) {
    hiddenTextarea.setAttribute('wrap', uiTextNode.getAttribute('wrap'));
  } else {
    hiddenTextarea.removeAttribute('wrap');
  }
  var _calculateNodeStyling = calculateNodeStyling(uiTextNode, useCache),
    paddingSize = _calculateNodeStyling.paddingSize,
    borderSize = _calculateNodeStyling.borderSize,
    boxSizing = _calculateNodeStyling.boxSizing,
    sizingStyle = _calculateNodeStyling.sizingStyle;
  hiddenTextarea.setAttribute('style', ''.concat(sizingStyle, ';').concat(HIDDEN_TEXTAREA_STYLE));
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || '';
  var minHeight = void 0;
  var maxHeight = void 0;
  var overflowY;
  var height = hiddenTextarea.scrollHeight;
  if (boxSizing === 'border-box') {
    height += borderSize;
  } else if (boxSizing === 'content-box') {
    height -= paddingSize;
  }
  if (minRows !== null || maxRows !== null) {
    hiddenTextarea.value = ' ';
    var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;
      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }
      height = Math.max(minHeight, height);
    }
    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;
      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }
      overflowY = height > maxHeight ? '' : 'hidden';
      height = Math.min(maxHeight, height);
    }
  }
  var style = {
    height,
    overflowY,
    resize: 'none'
  };
  if (minHeight) {
    style.minHeight = minHeight;
  }
  if (maxHeight) {
    style.maxHeight = maxHeight;
  }
  return style;
}

// esm-build-7f8d3a603e97ea49136324c951d33e2456eeb872-d0ce82e9/node_modules/rc-textarea/es/ResizableTextArea.js
var _excluded = [
  'prefixCls',
  'onPressEnter',
  'defaultValue',
  'value',
  'autoSize',
  'onResize',
  'className',
  'style',
  'disabled',
  'onChange',
  'onInternalAutoSize'
];
var RESIZE_START = 0;
var RESIZE_MEASURING = 1;
var RESIZE_STABLE = 2;
var ResizableTextArea = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-textarea' : _props$prefixCls,
    onPressEnter = props.onPressEnter,
    defaultValue = props.defaultValue,
    value = props.value,
    autoSize = props.autoSize,
    onResize = props.onResize,
    className = props.className,
    style = props.style,
    disabled = props.disabled,
    onChange = props.onChange,
    onInternalAutoSize = props.onInternalAutoSize,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useMergedState = useMergedState(defaultValue, {
      value,
      postState: function postState(val) {
        return val !== null && val !== void 0 ? val : '';
      }
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  var onInternalChange = function onInternalChange2(event) {
    setMergedValue(event.target.value);
    onChange === null || onChange === void 0 ? void 0 : onChange(event);
  };
  var textareaRef = React.useRef();
  React.useImperativeHandle(ref, function() {
    return {
      textArea: textareaRef.current
    };
  });
  var _React$useMemo = React.useMemo(
      function() {
        if (autoSize && _typeof(autoSize) === 'object') {
          return [autoSize.minRows, autoSize.maxRows];
        }
        return [];
      },
      [autoSize]
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
    minRows = _React$useMemo2[0],
    maxRows = _React$useMemo2[1];
  var needAutoSize = !!autoSize;
  var fixFirefoxAutoScroll = function fixFirefoxAutoScroll2() {
    try {
      if (document.activeElement === textareaRef.current) {
        var _textareaRef$current = textareaRef.current,
          selectionStart = _textareaRef$current.selectionStart,
          selectionEnd = _textareaRef$current.selectionEnd,
          scrollTop = _textareaRef$current.scrollTop;
        textareaRef.current.setSelectionRange(selectionStart, selectionEnd);
        textareaRef.current.scrollTop = scrollTop;
      }
    } catch (e) {}
  };
  var _React$useState = React.useState(RESIZE_STABLE),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    resizeState = _React$useState2[0],
    setResizeState = _React$useState2[1];
  var _React$useState3 = React.useState(),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    autoSizeStyle = _React$useState4[0],
    setAutoSizeStyle = _React$useState4[1];
  var startResize = function startResize2() {
    setResizeState(RESIZE_START);
    if (false) {
      onInternalAutoSize === null || onInternalAutoSize === void 0 ? void 0 : onInternalAutoSize();
    }
  };
  useLayoutEffect(
    function() {
      if (needAutoSize) {
        startResize();
      }
    },
    [value, minRows, maxRows, needAutoSize]
  );
  useLayoutEffect(
    function() {
      if (resizeState === RESIZE_START) {
        setResizeState(RESIZE_MEASURING);
      } else if (resizeState === RESIZE_MEASURING) {
        var textareaStyles = calculateAutoSizeStyle(textareaRef.current, false, minRows, maxRows);
        setResizeState(RESIZE_STABLE);
        setAutoSizeStyle(textareaStyles);
      } else {
        fixFirefoxAutoScroll();
      }
    },
    [resizeState]
  );
  var resizeRafRef = React.useRef();
  var cleanRaf = function cleanRaf2() {
    raf.cancel(resizeRafRef.current);
  };
  var onInternalResize = function onInternalResize2(size) {
    if (resizeState === RESIZE_STABLE) {
      onResize === null || onResize === void 0 ? void 0 : onResize(size);
      if (autoSize) {
        cleanRaf();
        resizeRafRef.current = raf(function() {
          startResize();
        });
      }
    }
  };
  React.useEffect(function() {
    return cleanRaf;
  }, []);
  var mergedAutoSizeStyle = needAutoSize ? autoSizeStyle : null;
  var mergedStyle = _objectSpread(_objectSpread({}, style), mergedAutoSizeStyle);
  if (resizeState === RESIZE_START || resizeState === RESIZE_MEASURING) {
    mergedStyle.overflowY = 'hidden';
    mergedStyle.overflowX = 'hidden';
  }
  return /* @__PURE__ */ React.createElement(
    ResizeObserver,
    {
      onResize: onInternalResize,
      disabled: !(autoSize || onResize)
    },
    /* @__PURE__ */ React.createElement(
      'textarea',
      _extends({}, restProps, {
        ref: textareaRef,
        style: mergedStyle,
        className: classNames(prefixCls, className, _defineProperty({}, ''.concat(prefixCls, '-disabled'), disabled)),
        disabled,
        value: mergedValue,
        onChange: onInternalChange
      })
    )
  );
});
var ResizableTextArea_default = ResizableTextArea;

// esm-build-7f8d3a603e97ea49136324c951d33e2456eeb872-d0ce82e9/node_modules/rc-textarea/es/index.js
var TextArea = /* @__PURE__ */ (function(_React$Component) {
  _inherits(TextArea2, _React$Component);
  var _super = _createSuper(TextArea2);
  function TextArea2(props) {
    var _this;
    _classCallCheck(this, TextArea2);
    _this = _super.call(this, props);
    _this.resizableTextArea = void 0;
    _this.focus = function() {
      _this.resizableTextArea.textArea.focus();
    };
    _this.saveTextArea = function(resizableTextArea) {
      _this.resizableTextArea = resizableTextArea;
    };
    _this.handleChange = function(e) {
      var onChange = _this.props.onChange;
      _this.setValue(e.target.value);
      if (onChange) {
        onChange(e);
      }
    };
    _this.handleKeyDown = function(e) {
      var _this$props = _this.props,
        onPressEnter = _this$props.onPressEnter,
        onKeyDown = _this$props.onKeyDown;
      if (e.keyCode === 13 && onPressEnter) {
        onPressEnter(e);
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    };
    var value = typeof props.value === 'undefined' || props.value === null ? props.defaultValue : props.value;
    _this.state = {
      value
    };
    return _this;
  }
  _createClass(
    TextArea2,
    [
      {
        key: 'setValue',
        value: function setValue(value, callback) {
          if (!('value' in this.props)) {
            this.setState(
              {
                value
              },
              callback
            );
          }
        }
      },
      {
        key: 'blur',
        value: function blur() {
          this.resizableTextArea.textArea.blur();
        }
      },
      {
        key: 'render',
        value: function render() {
          return /* @__PURE__ */ React2.createElement(
            ResizableTextArea_default,
            _extends2({}, this.props, {
              value: this.state.value,
              onKeyDown: this.handleKeyDown,
              onChange: this.handleChange,
              ref: this.saveTextArea
            })
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
          if ('value' in nextProps) {
            return {
              value: nextProps.value
            };
          }
          return null;
        }
      }
    ]
  );
  return TextArea2;
})(React2.Component);
var es_default = TextArea;
export { ResizableTextArea_default as ResizableTextArea, es_default as default };
