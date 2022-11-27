/* esm.sh - esbuild bundle(rc-input@0.1.4) es2022 development */
// esm-build-c48b0c0d9c5c3e8d2ceb0afc01b1ff7c29562c66-96f1a6c4/node_modules/rc-input/es/BaseInput.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import React, { cloneElement, useRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-c48b0c0d9c5c3e8d2ceb0afc01b1ff7c29562c66-96f1a6c4/node_modules/rc-input/es/utils/commonUtils.js
function hasAddon(props) {
  return !!(props.addonBefore || props.addonAfter);
}
function hasPrefixSuffix(props) {
  return !!(props.prefix || props.suffix || props.allowClear);
}
function resolveOnChange(target, e, onChange, targetValue) {
  if (!onChange) {
    return;
  }
  var event = e;
  if (e.type === 'click') {
    var currentTarget = target.cloneNode(true);
    event = Object.create(e, {
      target: {
        value: currentTarget
      },
      currentTarget: {
        value: currentTarget
      }
    });
    currentTarget.value = '';
    onChange(event);
    return;
  }
  if (targetValue !== void 0) {
    event = Object.create(e, {
      target: {
        value: target
      },
      currentTarget: {
        value: target
      }
    });
    target.value = targetValue;
    onChange(event);
    return;
  }
  onChange(event);
}
function triggerFocus(element, option) {
  if (!element) return;
  element.focus(option);
  var _ref = option || {},
    cursor = _ref.cursor;
  if (cursor) {
    var len = element.value.length;
    switch (cursor) {
      case 'start':
        element.setSelectionRange(0, 0);
        break;
      case 'end':
        element.setSelectionRange(len, len);
        break;
      default:
        element.setSelectionRange(0, len);
    }
  }
}
function fixControlledValue(value) {
  if (typeof value === 'undefined' || value === null) {
    return '';
  }
  return String(value);
}

// esm-build-c48b0c0d9c5c3e8d2ceb0afc01b1ff7c29562c66-96f1a6c4/node_modules/rc-input/es/BaseInput.js
var BaseInput = function BaseInput2(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    prefix = props.prefix,
    suffix = props.suffix,
    addonBefore = props.addonBefore,
    addonAfter = props.addonAfter,
    className = props.className,
    style = props.style,
    affixWrapperClassName = props.affixWrapperClassName,
    groupClassName = props.groupClassName,
    wrapperClassName = props.wrapperClassName,
    disabled = props.disabled,
    readOnly = props.readOnly,
    focused = props.focused,
    triggerFocus2 = props.triggerFocus,
    allowClear = props.allowClear,
    value = props.value,
    handleReset = props.handleReset,
    hidden = props.hidden;
  var containerRef = useRef(null);
  var onInputClick = function onInputClick2(e) {
    var _containerRef$current;
    if (
      (_containerRef$current = containerRef.current) !== null &&
      _containerRef$current !== void 0 &&
      _containerRef$current.contains(e.target)
    ) {
      triggerFocus2 === null || triggerFocus2 === void 0 ? void 0 : triggerFocus2();
    }
  };
  var getClearIcon = function getClearIcon2() {
    var _classNames;
    if (!allowClear) {
      return null;
    }
    var needClear = !disabled && !readOnly && value;
    var clearIconCls = ''.concat(prefixCls, '-clear-icon');
    var iconNode =
      _typeof(allowClear) === 'object' && allowClear !== null && allowClear !== void 0 && allowClear.clearIcon
        ? allowClear.clearIcon
        : '\u2716';
    return /* @__PURE__ */ React.createElement(
      'span',
      {
        onClick: handleReset,
        onMouseDown: function onMouseDown(e) {
          return e.preventDefault();
        },
        className: classNames(
          clearIconCls,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(clearIconCls, '-hidden'), !needClear),
          _defineProperty(_classNames, ''.concat(clearIconCls, '-has-suffix'), !!suffix),
          _classNames)
        ),
        role: 'button',
        tabIndex: -1
      },
      iconNode
    );
  };
  var element = /* @__PURE__ */ cloneElement(inputElement, {
    value,
    hidden
  });
  if (hasPrefixSuffix(props)) {
    var _classNames2;
    var affixWrapperPrefixCls = ''.concat(prefixCls, '-affix-wrapper');
    var affixWrapperCls = classNames(
      affixWrapperPrefixCls,
      ((_classNames2 = {}),
      _defineProperty(_classNames2, ''.concat(affixWrapperPrefixCls, '-disabled'), disabled),
      _defineProperty(_classNames2, ''.concat(affixWrapperPrefixCls, '-focused'), focused),
      _defineProperty(_classNames2, ''.concat(affixWrapperPrefixCls, '-readonly'), readOnly),
      _defineProperty(
        _classNames2,
        ''.concat(affixWrapperPrefixCls, '-input-with-clear-btn'),
        suffix && allowClear && value
      ),
      _classNames2),
      !hasAddon(props) && className,
      affixWrapperClassName
    );
    var suffixNode =
      (suffix || allowClear) &&
      /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-suffix')
        },
        getClearIcon(),
        suffix
      );
    element = /* @__PURE__ */ React.createElement(
      'span',
      {
        className: affixWrapperCls,
        style,
        hidden: !hasAddon(props) && hidden,
        onClick: onInputClick,
        ref: containerRef
      },
      prefix &&
        /* @__PURE__ */ React.createElement(
          'span',
          {
            className: ''.concat(prefixCls, '-prefix')
          },
          prefix
        ),
      /* @__PURE__ */ cloneElement(inputElement, {
        style: null,
        value,
        hidden: null
      }),
      suffixNode
    );
  }
  if (hasAddon(props)) {
    var wrapperCls = ''.concat(prefixCls, '-group');
    var addonCls = ''.concat(wrapperCls, '-addon');
    var mergedWrapperClassName = classNames(''.concat(prefixCls, '-wrapper'), wrapperCls, wrapperClassName);
    var mergedGroupClassName = classNames(''.concat(prefixCls, '-group-wrapper'), className, groupClassName);
    return /* @__PURE__ */ React.createElement(
      'span',
      {
        className: mergedGroupClassName,
        style,
        hidden
      },
      /* @__PURE__ */ React.createElement(
        'span',
        {
          className: mergedWrapperClassName
        },
        addonBefore &&
          /* @__PURE__ */ React.createElement(
            'span',
            {
              className: addonCls
            },
            addonBefore
          ),
        /* @__PURE__ */ cloneElement(element, {
          style: null,
          hidden: null
        }),
        addonAfter &&
          /* @__PURE__ */ React.createElement(
            'span',
            {
              className: addonCls
            },
            addonAfter
          )
      )
    );
  }
  return element;
};
var BaseInput_default = BaseInput;

// esm-build-c48b0c0d9c5c3e8d2ceb0afc01b1ff7c29562c66-96f1a6c4/node_modules/rc-input/es/Input.js
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import React2, {
  useRef as useRef2,
  useState,
  forwardRef,
  useImperativeHandle,
  useEffect
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
var _excluded = [
  'autoComplete',
  'onChange',
  'onFocus',
  'onBlur',
  'onPressEnter',
  'onKeyDown',
  'prefixCls',
  'disabled',
  'htmlSize',
  'className',
  'maxLength',
  'suffix',
  'showCount',
  'type',
  'inputClassName'
];
var Input = /* @__PURE__ */ forwardRef(function(props, ref) {
  var autoComplete = props.autoComplete,
    onChange = props.onChange,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onPressEnter = props.onPressEnter,
    onKeyDown = props.onKeyDown,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input' : _props$prefixCls,
    disabled = props.disabled,
    htmlSize = props.htmlSize,
    className = props.className,
    maxLength = props.maxLength,
    suffix = props.suffix,
    showCount = props.showCount,
    _props$type = props.type,
    type = _props$type === void 0 ? 'text' : _props$type,
    inputClassName = props.inputClassName,
    rest = _objectWithoutProperties(props, _excluded);
  var _useMergedState = useMergedState(props.defaultValue, {
      value: props.value
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    value = _useMergedState2[0],
    setValue = _useMergedState2[1];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    focused = _useState2[0],
    setFocused = _useState2[1];
  var inputRef = useRef2(null);
  var focus = function focus2(option) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option);
    }
  };
  useImperativeHandle(ref, function() {
    return {
      focus,
      blur: function blur() {
        var _inputRef$current;
        (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0
          ? void 0
          : _inputRef$current.blur();
      },
      setSelectionRange: function setSelectionRange(start, end, direction) {
        var _inputRef$current2;
        (_inputRef$current2 = inputRef.current) === null || _inputRef$current2 === void 0
          ? void 0
          : _inputRef$current2.setSelectionRange(start, end, direction);
      },
      select: function select() {
        var _inputRef$current3;
        (_inputRef$current3 = inputRef.current) === null || _inputRef$current3 === void 0
          ? void 0
          : _inputRef$current3.select();
      },
      input: inputRef.current
    };
  });
  useEffect(
    function() {
      setFocused(function(prev) {
        return prev && disabled ? false : prev;
      });
    },
    [disabled]
  );
  var handleChange = function handleChange2(e) {
    if (props.value === void 0) {
      setValue(e.target.value);
    }
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  var handleKeyDown = function handleKeyDown2(e) {
    if (onPressEnter && e.key === 'Enter') {
      onPressEnter(e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  };
  var handleFocus = function handleFocus2(e) {
    setFocused(true);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var handleBlur = function handleBlur2(e) {
    setFocused(false);
    onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
  };
  var handleReset = function handleReset2(e) {
    setValue('');
    focus();
    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange);
    }
  };
  var getInputElement = function getInputElement2() {
    var otherProps = omit(props, [
      'prefixCls',
      'onPressEnter',
      'addonBefore',
      'addonAfter',
      'prefix',
      'suffix',
      'allowClear',
      'defaultValue',
      'showCount',
      'affixWrapperClassName',
      'groupClassName',
      'inputClassName',
      'wrapperClassName',
      'htmlSize'
    ]);
    return /* @__PURE__ */ React2.createElement(
      'input',
      _extends(
        {
          autoComplete
        },
        otherProps,
        {
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onKeyDown: handleKeyDown,
          className: classNames2(
            prefixCls,
            _defineProperty2({}, ''.concat(prefixCls, '-disabled'), disabled),
            inputClassName,
            !hasAddon(props) && !hasPrefixSuffix(props) && className
          ),
          ref: inputRef,
          size: htmlSize,
          type
        }
      )
    );
  };
  var getSuffix = function getSuffix2() {
    var hasMaxLength = Number(maxLength) > 0;
    if (suffix || showCount) {
      var val = fixControlledValue(value);
      var valueLength = _toConsumableArray(val).length;
      var dataCount =
        _typeof2(showCount) === 'object'
          ? showCount.formatter({
              value: val,
              count: valueLength,
              maxLength
            })
          : ''.concat(valueLength).concat(hasMaxLength ? ' / '.concat(maxLength) : '');
      return /* @__PURE__ */ React2.createElement(
        React2.Fragment,
        null,
        !!showCount &&
          /* @__PURE__ */ React2.createElement(
            'span',
            {
              className: classNames2(
                ''.concat(prefixCls, '-show-count-suffix'),
                _defineProperty2({}, ''.concat(prefixCls, '-show-count-has-suffix'), !!suffix)
              )
            },
            dataCount
          ),
        suffix
      );
    }
    return null;
  };
  return /* @__PURE__ */ React2.createElement(
    BaseInput_default,
    _extends({}, rest, {
      prefixCls,
      className,
      inputElement: getInputElement(),
      handleReset,
      value: fixControlledValue(value),
      focused,
      triggerFocus: focus,
      suffix: getSuffix(),
      disabled
    })
  );
});
var Input_default = Input;

// esm-build-c48b0c0d9c5c3e8d2ceb0afc01b1ff7c29562c66-96f1a6c4/node_modules/rc-input/es/index.js
var es_default = Input_default;
export { BaseInput_default as BaseInput, es_default as default };
