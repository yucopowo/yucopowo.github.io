/* esm.sh - esbuild bundle(rc-select@14.1.14) es2022 development */
// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Select.js
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _toConsumableArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _defineProperty6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _typeof4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import useMergedState2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import * as React22 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/BaseSelect.js
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useLayoutEffect3 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import isMobile from '/cdn/v99/rc-util@5.24.6/es2022/es/isMobile.development.js';
import KeyCode3 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import { useComposeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useBaseProps.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var BaseSelectContext = /* @__PURE__ */ React.createContext(null);
function useBaseProps() {
  return React.useContext(BaseSelectContext);
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useDelayReset.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useDelayReset() {
  var timeout = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10;
  var _React$useState = React2.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    bool = _React$useState2[0],
    setBool = _React$useState2[1];
  var delayRef = React2.useRef(null);
  var cancelLatest = function cancelLatest2() {
    window.clearTimeout(delayRef.current);
  };
  React2.useEffect(function() {
    return cancelLatest;
  }, []);
  var delaySetBool = function delaySetBool2(value, callback) {
    cancelLatest();
    delayRef.current = window.setTimeout(function() {
      setBool(value);
      if (callback) {
        callback();
      }
    }, timeout);
  };
  return [bool, delaySetBool, cancelLatest];
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useLock.js
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useLock() {
  var duration = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250;
  var lockRef = React3.useRef(null);
  var timeoutRef = React3.useRef(null);
  React3.useEffect(function() {
    return function() {
      window.clearTimeout(timeoutRef.current);
    };
  }, []);
  function doLock(locked) {
    if (locked || lockRef.current === null) {
      lockRef.current = locked;
    }
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(function() {
      lockRef.current = null;
    }, duration);
  }
  return [
    function() {
      return lockRef.current;
    },
    doLock
  ];
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useSelectTriggerControl.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useSelectTriggerControl(elements, open, triggerOpen, customizedTrigger) {
  var propsRef = React4.useRef(null);
  propsRef.current = {
    open,
    triggerOpen,
    customizedTrigger
  };
  React4.useEffect(function() {
    function onGlobalMouseDown(event) {
      var _propsRef$current;
      if (
        (_propsRef$current = propsRef.current) !== null &&
        _propsRef$current !== void 0 &&
        _propsRef$current.customizedTrigger
      ) {
        return;
      }
      var target = event.target;
      if (target.shadowRoot && event.composed) {
        target = event.composedPath()[0] || target;
      }
      if (
        propsRef.current.open &&
        elements()
          .filter(function(element) {
            return element;
          })
          .every(function(element) {
            return !element.contains(target) && element !== target;
          })
      ) {
        propsRef.current.triggerOpen(false);
      }
    }
    window.addEventListener('mousedown', onGlobalMouseDown);
    return function() {
      return window.removeEventListener('mousedown', onGlobalMouseDown);
    };
  }, []);
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef5 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode2 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/MultipleSelector.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useState as useState2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import Overflow from '/cdn/v99/rc-overflow@1.2.8/es2022/rc-overflow.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/TransBtn.js
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var TransBtn = function TransBtn2(_ref) {
  var className = _ref.className,
    customizeIcon = _ref.customizeIcon,
    customizeIconProps = _ref.customizeIconProps,
    _onMouseDown = _ref.onMouseDown,
    onClick = _ref.onClick,
    children = _ref.children;
  var icon;
  if (typeof customizeIcon === 'function') {
    icon = customizeIcon(customizeIconProps);
  } else {
    icon = customizeIcon;
  }
  return /* @__PURE__ */ React5.createElement(
    'span',
    {
      className,
      onMouseDown: function onMouseDown(event) {
        event.preventDefault();
        if (_onMouseDown) {
          _onMouseDown(event);
        }
      },
      style: {
        userSelect: 'none',
        WebkitUserSelect: 'none'
      },
      unselectable: 'on',
      onClick,
      'aria-hidden': true
    },
    icon !== void 0
      ? icon
      : /* @__PURE__ */ React5.createElement(
          'span',
          {
            className: classNames(
              className.split(/\s+/).map(function(cls) {
                return ''.concat(cls, '-icon');
              })
            )
          },
          children
        )
  );
};
var TransBtn_default = TransBtn;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/Input.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { composeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import { warning } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var Input = function Input2(_ref, ref) {
  var _inputNode2, _inputNode2$props;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    inputElement = _ref.inputElement,
    disabled = _ref.disabled,
    tabIndex = _ref.tabIndex,
    autoFocus = _ref.autoFocus,
    autoComplete = _ref.autoComplete,
    editable = _ref.editable,
    activeDescendantId = _ref.activeDescendantId,
    value = _ref.value,
    maxLength = _ref.maxLength,
    _onKeyDown = _ref.onKeyDown,
    _onMouseDown = _ref.onMouseDown,
    _onChange = _ref.onChange,
    onPaste = _ref.onPaste,
    _onCompositionStart = _ref.onCompositionStart,
    _onCompositionEnd = _ref.onCompositionEnd,
    open = _ref.open,
    attrs = _ref.attrs;
  var inputNode = inputElement || /* @__PURE__ */ React6.createElement('input', null);
  var _inputNode = inputNode,
    originRef = _inputNode.ref,
    originProps = _inputNode.props;
  var onOriginKeyDown = originProps.onKeyDown,
    onOriginChange = originProps.onChange,
    onOriginMouseDown = originProps.onMouseDown,
    onOriginCompositionStart = originProps.onCompositionStart,
    onOriginCompositionEnd = originProps.onCompositionEnd,
    style = originProps.style;
  warning(
    !('maxLength' in inputNode.props),
    "Passing 'maxLength' to input element directly may not work because input in BaseSelect is controlled."
  );
  inputNode = /* @__PURE__ */ React6.cloneElement(
    inputNode,
    _objectSpread(
      _objectSpread(
        _objectSpread(
          {
            type: 'search'
          },
          originProps
        ),
        {},
        {
          id,
          ref: composeRef(ref, originRef),
          disabled,
          tabIndex,
          autoComplete: autoComplete || 'off',
          autoFocus,
          className: classNames2(
            ''.concat(prefixCls, '-selection-search-input'),
            (_inputNode2 = inputNode) === null || _inputNode2 === void 0
              ? void 0
              : (_inputNode2$props = _inputNode2.props) === null || _inputNode2$props === void 0
              ? void 0
              : _inputNode2$props.className
          ),
          role: 'combobox',
          'aria-expanded': open,
          'aria-haspopup': 'listbox',
          'aria-owns': ''.concat(id, '_list'),
          'aria-autocomplete': 'list',
          'aria-controls': ''.concat(id, '_list'),
          'aria-activedescendant': activeDescendantId
        },
        attrs
      ),
      {},
      {
        value: editable ? value : '',
        maxLength,
        readOnly: !editable,
        unselectable: !editable ? 'on' : null,
        style: _objectSpread(
          _objectSpread({}, style),
          {},
          {
            opacity: editable ? null : 0
          }
        ),
        onKeyDown: function onKeyDown(event) {
          _onKeyDown(event);
          if (onOriginKeyDown) {
            onOriginKeyDown(event);
          }
        },
        onMouseDown: function onMouseDown(event) {
          _onMouseDown(event);
          if (onOriginMouseDown) {
            onOriginMouseDown(event);
          }
        },
        onChange: function onChange(event) {
          _onChange(event);
          if (onOriginChange) {
            onOriginChange(event);
          }
        },
        onCompositionStart: function onCompositionStart(event) {
          _onCompositionStart(event);
          if (onOriginCompositionStart) {
            onOriginCompositionStart(event);
          }
        },
        onCompositionEnd: function onCompositionEnd(event) {
          _onCompositionEnd(event);
          if (onOriginCompositionEnd) {
            onOriginCompositionEnd(event);
          }
        },
        onPaste
      }
    )
  );
  return inputNode;
};
var RefInput = /* @__PURE__ */ React6.forwardRef(Input);
RefInput.displayName = 'Input';
var Input_default = RefInput;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useLayoutEffect.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/commonUtil.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  }
  return value !== void 0 ? [value] : [];
}
var isClient = typeof window !== 'undefined' && window.document && window.document.documentElement;
var isBrowserClient = isClient;
function hasValue(value) {
  return value !== void 0 && value !== null;
}
function isTitleType(title) {
  return ['string', 'number'].includes(_typeof(title));
}
function getTitle(item) {
  var title = void 0;
  if (item) {
    if (isTitleType(item.title)) {
      title = item.title.toString();
    } else if (isTitleType(item.label)) {
      title = item.label.toString();
    }
  }
  return title;
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useLayoutEffect.js
function useLayoutEffect2(effect, deps) {
  if (isBrowserClient) {
    React7.useLayoutEffect(effect, deps);
  } else {
    React7.useEffect(effect, deps);
  }
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/MultipleSelector.js
function itemKey(value) {
  var _value$key;
  return (_value$key = value.key) !== null && _value$key !== void 0 ? _value$key : value.value;
}
var onPreventMouseDown = function onPreventMouseDown2(event) {
  event.preventDefault();
  event.stopPropagation();
};
var SelectSelector = function SelectSelector2(props) {
  var id = props.id,
    prefixCls = props.prefixCls,
    values = props.values,
    open = props.open,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    inputRef = props.inputRef,
    placeholder = props.placeholder,
    disabled = props.disabled,
    mode = props.mode,
    showSearch = props.showSearch,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    tabIndex = props.tabIndex,
    removeIcon = props.removeIcon,
    maxTagCount = props.maxTagCount,
    maxTagTextLength = props.maxTagTextLength,
    _props$maxTagPlacehol = props.maxTagPlaceholder,
    maxTagPlaceholder =
      _props$maxTagPlacehol === void 0
        ? function(omittedValues) {
            return '+ '.concat(omittedValues.length, ' ...');
          }
        : _props$maxTagPlacehol,
    tagRender = props.tagRender,
    onToggleOpen = props.onToggleOpen,
    onRemove = props.onRemove,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var measureRef = React8.useRef(null);
  var _useState = useState2(0),
    _useState2 = _slicedToArray2(_useState, 2),
    inputWidth = _useState2[0],
    setInputWidth = _useState2[1];
  var _useState3 = useState2(false),
    _useState4 = _slicedToArray2(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var selectionPrefixCls = ''.concat(prefixCls, '-selection');
  var inputValue =
    open || (mode === 'multiple' && autoClearSearchValue === false) || mode === 'tags' ? searchValue : '';
  var inputEditable =
    mode === 'tags' || (mode === 'multiple' && autoClearSearchValue === false) || (showSearch && (open || focused));
  useLayoutEffect2(
    function() {
      setInputWidth(measureRef.current.scrollWidth);
    },
    [inputValue]
  );
  function defaultRenderSelector(item, content, itemDisabled, closable, onClose) {
    return /* @__PURE__ */ React8.createElement(
      'span',
      {
        className: classNames3(
          ''.concat(selectionPrefixCls, '-item'),
          _defineProperty({}, ''.concat(selectionPrefixCls, '-item-disabled'), itemDisabled)
        ),
        title: getTitle(item)
      },
      /* @__PURE__ */ React8.createElement(
        'span',
        {
          className: ''.concat(selectionPrefixCls, '-item-content')
        },
        content
      ),
      closable &&
        /* @__PURE__ */ React8.createElement(
          TransBtn_default,
          {
            className: ''.concat(selectionPrefixCls, '-item-remove'),
            onMouseDown: onPreventMouseDown,
            onClick: onClose,
            customizeIcon: removeIcon
          },
          '\xD7'
        )
    );
  }
  function customizeRenderSelector(value, content, itemDisabled, closable, onClose) {
    var onMouseDown = function onMouseDown2(e) {
      onPreventMouseDown(e);
      onToggleOpen(!open);
    };
    return /* @__PURE__ */ React8.createElement(
      'span',
      {
        onMouseDown
      },
      tagRender({
        label: content,
        value,
        disabled: itemDisabled,
        closable,
        onClose
      })
    );
  }
  function renderItem(valueItem) {
    var itemDisabled = valueItem.disabled,
      label = valueItem.label,
      value = valueItem.value;
    var closable = !disabled && !itemDisabled;
    var displayLabel = label;
    if (typeof maxTagTextLength === 'number') {
      if (typeof label === 'string' || typeof label === 'number') {
        var strLabel = String(displayLabel);
        if (strLabel.length > maxTagTextLength) {
          displayLabel = ''.concat(strLabel.slice(0, maxTagTextLength), '...');
        }
      }
    }
    var onClose = function onClose2(event) {
      if (event) event.stopPropagation();
      onRemove(valueItem);
    };
    return typeof tagRender === 'function'
      ? customizeRenderSelector(value, displayLabel, itemDisabled, closable, onClose)
      : defaultRenderSelector(valueItem, displayLabel, itemDisabled, closable, onClose);
  }
  function renderRest(omittedValues) {
    var content = typeof maxTagPlaceholder === 'function' ? maxTagPlaceholder(omittedValues) : maxTagPlaceholder;
    return defaultRenderSelector(
      {
        title: content
      },
      content,
      false
    );
  }
  var inputNode = /* @__PURE__ */ React8.createElement(
    'div',
    {
      className: ''.concat(selectionPrefixCls, '-search'),
      style: {
        width: inputWidth
      },
      onFocus: function onFocus() {
        setFocused(true);
      },
      onBlur: function onBlur() {
        setFocused(false);
      }
    },
    /* @__PURE__ */ React8.createElement(Input_default, {
      ref: inputRef,
      open,
      prefixCls,
      id,
      inputElement: null,
      disabled,
      autoFocus,
      autoComplete,
      editable: inputEditable,
      activeDescendantId,
      value: inputValue,
      onKeyDown: onInputKeyDown,
      onMouseDown: onInputMouseDown,
      onChange: onInputChange,
      onPaste: onInputPaste,
      onCompositionStart: onInputCompositionStart,
      onCompositionEnd: onInputCompositionEnd,
      tabIndex,
      attrs: pickAttrs(props, true)
    }),
    /* @__PURE__ */ React8.createElement(
      'span',
      {
        ref: measureRef,
        className: ''.concat(selectionPrefixCls, '-search-mirror'),
        'aria-hidden': true
      },
      inputValue,
      '\xA0'
    )
  );
  var selectionNode = /* @__PURE__ */ React8.createElement(Overflow, {
    prefixCls: ''.concat(selectionPrefixCls, '-overflow'),
    data: values,
    renderItem,
    renderRest,
    suffix: inputNode,
    itemKey,
    maxCount: maxTagCount
  });
  return /* @__PURE__ */ React8.createElement(
    React8.Fragment,
    null,
    selectionNode,
    !values.length &&
      !inputValue &&
      /* @__PURE__ */ React8.createElement(
        'span',
        {
          className: ''.concat(selectionPrefixCls, '-placeholder')
        },
        placeholder
      )
  );
};
var MultipleSelector_default = SelectSelector;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/SingleSelector.js
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import pickAttrs2 from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
var SingleSelector = function SingleSelector2(props) {
  var inputElement = props.inputElement,
    prefixCls = props.prefixCls,
    id = props.id,
    inputRef = props.inputRef,
    disabled = props.disabled,
    autoFocus = props.autoFocus,
    autoComplete = props.autoComplete,
    activeDescendantId = props.activeDescendantId,
    mode = props.mode,
    open = props.open,
    values = props.values,
    placeholder = props.placeholder,
    tabIndex = props.tabIndex,
    showSearch = props.showSearch,
    searchValue = props.searchValue,
    activeValue = props.activeValue,
    maxLength = props.maxLength,
    onInputKeyDown = props.onInputKeyDown,
    onInputMouseDown = props.onInputMouseDown,
    onInputChange = props.onInputChange,
    onInputPaste = props.onInputPaste,
    onInputCompositionStart = props.onInputCompositionStart,
    onInputCompositionEnd = props.onInputCompositionEnd;
  var _React$useState = React9.useState(false),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    inputChanged = _React$useState2[0],
    setInputChanged = _React$useState2[1];
  var combobox = mode === 'combobox';
  var inputEditable = combobox || showSearch;
  var item = values[0];
  var inputValue = searchValue || '';
  if (combobox && activeValue && !inputChanged) {
    inputValue = activeValue;
  }
  React9.useEffect(
    function() {
      if (combobox) {
        setInputChanged(false);
      }
    },
    [combobox, activeValue]
  );
  var hasTextInput = mode !== 'combobox' && !open && !showSearch ? false : !!inputValue;
  var title = getTitle(item);
  var renderPlaceholder = function renderPlaceholder2() {
    if (item) {
      return null;
    }
    var hiddenStyle = hasTextInput
      ? {
          visibility: 'hidden'
        }
      : void 0;
    return /* @__PURE__ */ React9.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-selection-placeholder'),
        style: hiddenStyle
      },
      placeholder
    );
  };
  return /* @__PURE__ */ React9.createElement(
    React9.Fragment,
    null,
    /* @__PURE__ */ React9.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-selection-search')
      },
      /* @__PURE__ */ React9.createElement(Input_default, {
        ref: inputRef,
        prefixCls,
        id,
        open,
        inputElement,
        disabled,
        autoFocus,
        autoComplete,
        editable: inputEditable,
        activeDescendantId,
        value: inputValue,
        onKeyDown: onInputKeyDown,
        onMouseDown: onInputMouseDown,
        onChange: function onChange(e) {
          setInputChanged(true);
          onInputChange(e);
        },
        onPaste: onInputPaste,
        onCompositionStart: onInputCompositionStart,
        onCompositionEnd: onInputCompositionEnd,
        tabIndex,
        attrs: pickAttrs2(props, true),
        maxLength: combobox ? maxLength : void 0
      })
    ),
    !combobox &&
      item &&
      !hasTextInput &&
      /* @__PURE__ */ React9.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-selection-item'),
          title
        },
        item.label
      ),
    renderPlaceholder()
  );
};
var SingleSelector_default = SingleSelector;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/keyUtil.js
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
function isValidateOpenKey(currentKeyCode) {
  return ![
    KeyCode.ESC,
    KeyCode.SHIFT,
    KeyCode.BACKSPACE,
    KeyCode.TAB,
    KeyCode.WIN_KEY,
    KeyCode.ALT,
    KeyCode.META,
    KeyCode.WIN_KEY_RIGHT,
    KeyCode.CTRL,
    KeyCode.SEMICOLON,
    KeyCode.EQUALS,
    KeyCode.CAPS_LOCK,
    KeyCode.CONTEXT_MENU,
    KeyCode.F1,
    KeyCode.F2,
    KeyCode.F3,
    KeyCode.F4,
    KeyCode.F5,
    KeyCode.F6,
    KeyCode.F7,
    KeyCode.F8,
    KeyCode.F9,
    KeyCode.F10,
    KeyCode.F11,
    KeyCode.F12
  ].includes(currentKeyCode);
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Selector/index.js
var Selector = function Selector2(props, ref) {
  var inputRef = useRef5(null);
  var compositionStatusRef = useRef5(false);
  var prefixCls = props.prefixCls,
    open = props.open,
    mode = props.mode,
    showSearch = props.showSearch,
    tokenWithEnter = props.tokenWithEnter,
    onSearch = props.onSearch,
    onSearchSubmit = props.onSearchSubmit,
    onToggleOpen = props.onToggleOpen,
    onInputKeyDown = props.onInputKeyDown,
    domRef = props.domRef;
  React10.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        inputRef.current.focus();
      },
      blur: function blur() {
        inputRef.current.blur();
      }
    };
  });
  var _useLock = useLock(0),
    _useLock2 = _slicedToArray4(_useLock, 2),
    getInputMouseDown = _useLock2[0],
    setInputMouseDown = _useLock2[1];
  var onInternalInputKeyDown = function onInternalInputKeyDown2(event) {
    var which = event.which;
    if (which === KeyCode2.UP || which === KeyCode2.DOWN) {
      event.preventDefault();
    }
    if (onInputKeyDown) {
      onInputKeyDown(event);
    }
    if (which === KeyCode2.ENTER && mode === 'tags' && !compositionStatusRef.current && !open) {
      onSearchSubmit === null || onSearchSubmit === void 0 ? void 0 : onSearchSubmit(event.target.value);
    }
    if (isValidateOpenKey(which)) {
      onToggleOpen(true);
    }
  };
  var onInternalInputMouseDown = function onInternalInputMouseDown2() {
    setInputMouseDown(true);
  };
  var pastedTextRef = useRef5(null);
  var triggerOnSearch = function triggerOnSearch2(value) {
    if (onSearch(value, true, compositionStatusRef.current) !== false) {
      onToggleOpen(true);
    }
  };
  var onInputCompositionStart = function onInputCompositionStart2() {
    compositionStatusRef.current = true;
  };
  var onInputCompositionEnd = function onInputCompositionEnd2(e) {
    compositionStatusRef.current = false;
    if (mode !== 'combobox') {
      triggerOnSearch(e.target.value);
    }
  };
  var onInputChange = function onInputChange2(event) {
    var value = event.target.value;
    if (tokenWithEnter && pastedTextRef.current && /[\r\n]/.test(pastedTextRef.current)) {
      var replacedText = pastedTextRef.current
        .replace(/[\r\n]+$/, '')
        .replace(/\r\n/g, ' ')
        .replace(/[\r\n]/g, ' ');
      value = value.replace(replacedText, pastedTextRef.current);
    }
    pastedTextRef.current = null;
    triggerOnSearch(value);
  };
  var onInputPaste = function onInputPaste2(e) {
    var clipboardData = e.clipboardData;
    var value = clipboardData.getData('text');
    pastedTextRef.current = value;
  };
  var onClick = function onClick2(_ref) {
    var target = _ref.target;
    if (target !== inputRef.current) {
      var isIE = document.body.style.msTouchAction !== void 0;
      if (isIE) {
        setTimeout(function() {
          inputRef.current.focus();
        });
      } else {
        inputRef.current.focus();
      }
    }
  };
  var onMouseDown = function onMouseDown2(event) {
    var inputMouseDown = getInputMouseDown();
    if (event.target !== inputRef.current && !inputMouseDown && mode !== 'combobox') {
      event.preventDefault();
    }
    if ((mode !== 'combobox' && (!showSearch || !inputMouseDown)) || !open) {
      if (open) {
        onSearch('', true, false);
      }
      onToggleOpen();
    }
  };
  var sharedProps = {
    inputRef,
    onInputKeyDown: onInternalInputKeyDown,
    onInputMouseDown: onInternalInputMouseDown,
    onInputChange,
    onInputPaste,
    onInputCompositionStart,
    onInputCompositionEnd
  };
  var selectNode =
    mode === 'multiple' || mode === 'tags'
      ? /* @__PURE__ */ React10.createElement(MultipleSelector_default, _extends({}, props, sharedProps))
      : /* @__PURE__ */ React10.createElement(SingleSelector_default, _extends({}, props, sharedProps));
  return /* @__PURE__ */ React10.createElement(
    'div',
    {
      ref: domRef,
      className: ''.concat(prefixCls, '-selector'),
      onClick,
      onMouseDown
    },
    selectNode
  );
};
var ForwardSelector = /* @__PURE__ */ React10.forwardRef(Selector);
ForwardSelector.displayName = 'Selector';
var Selector_default = ForwardSelector;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/SelectTrigger.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var _excluded = [
  'prefixCls',
  'disabled',
  'visible',
  'children',
  'popupElement',
  'containerWidth',
  'animation',
  'transitionName',
  'dropdownStyle',
  'dropdownClassName',
  'direction',
  'placement',
  'dropdownMatchSelectWidth',
  'dropdownRender',
  'dropdownAlign',
  'getPopupContainer',
  'empty',
  'getTriggerDOMNode',
  'onPopupVisibleChange',
  'onPopupMouseEnter'
];
var getBuiltInPlacements = function getBuiltInPlacements2(dropdownMatchSelectWidth) {
  var adjustX = dropdownMatchSelectWidth === true ? 0 : 1;
  return {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: {
        adjustX,
        adjustY: 1
      }
    }
  };
};
var SelectTrigger = function SelectTrigger2(props, ref) {
  var prefixCls = props.prefixCls,
    disabled = props.disabled,
    visible = props.visible,
    children = props.children,
    popupElement = props.popupElement,
    containerWidth = props.containerWidth,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'ltr' : _props$direction,
    placement = props.placement,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    getPopupContainer = props.getPopupContainer,
    empty = props.empty,
    getTriggerDOMNode = props.getTriggerDOMNode,
    onPopupVisibleChange = props.onPopupVisibleChange,
    onPopupMouseEnter = props.onPopupMouseEnter,
    restProps = _objectWithoutProperties(props, _excluded);
  var dropdownPrefixCls = ''.concat(prefixCls, '-dropdown');
  var popupNode = popupElement;
  if (dropdownRender) {
    popupNode = dropdownRender(popupElement);
  }
  var builtInPlacements = React11.useMemo(
    function() {
      return getBuiltInPlacements(dropdownMatchSelectWidth);
    },
    [dropdownMatchSelectWidth]
  );
  var mergedTransitionName = animation ? ''.concat(dropdownPrefixCls, '-').concat(animation) : transitionName;
  var popupRef = React11.useRef(null);
  React11.useImperativeHandle(ref, function() {
    return {
      getPopupElement: function getPopupElement() {
        return popupRef.current;
      }
    };
  });
  var popupStyle = _objectSpread2(
    {
      minWidth: containerWidth
    },
    dropdownStyle
  );
  if (typeof dropdownMatchSelectWidth === 'number') {
    popupStyle.width = dropdownMatchSelectWidth;
  } else if (dropdownMatchSelectWidth) {
    popupStyle.width = containerWidth;
  }
  return /* @__PURE__ */ React11.createElement(
    Trigger,
    _extends2({}, restProps, {
      showAction: onPopupVisibleChange ? ['click'] : [],
      hideAction: onPopupVisibleChange ? ['click'] : [],
      popupPlacement: placement || (direction === 'rtl' ? 'bottomRight' : 'bottomLeft'),
      builtinPlacements: builtInPlacements,
      prefixCls: dropdownPrefixCls,
      popupTransitionName: mergedTransitionName,
      popup: /* @__PURE__ */ React11.createElement(
        'div',
        {
          ref: popupRef,
          onMouseEnter: onPopupMouseEnter
        },
        popupNode
      ),
      popupAlign: dropdownAlign,
      popupVisible: visible,
      getPopupContainer,
      popupClassName: classNames4(
        dropdownClassName,
        _defineProperty2({}, ''.concat(dropdownPrefixCls, '-empty'), empty)
      ),
      popupStyle,
      getTriggerDOMNode,
      onPopupVisibleChange
    }),
    children
  );
};
var RefSelectTrigger = /* @__PURE__ */ React11.forwardRef(SelectTrigger);
RefSelectTrigger.displayName = 'SelectTrigger';
var SelectTrigger_default = RefSelectTrigger;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/valueUtil.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _toArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toArray.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function getKey(data, index) {
  var key = data.key;
  var value;
  if ('value' in data) {
    value = data.value;
  }
  if (key !== null && key !== void 0) {
    return key;
  }
  if (value !== void 0) {
    return value;
  }
  return 'rc-index-key-'.concat(index);
}
function fillFieldNames(fieldNames, childrenAsData) {
  var _ref = fieldNames || {},
    label = _ref.label,
    value = _ref.value,
    options = _ref.options;
  return {
    label: label || (childrenAsData ? 'children' : 'label'),
    value: value || 'value',
    options: options || 'options'
  };
}
function flattenOptions(options) {
  var _ref2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    fieldNames = _ref2.fieldNames,
    childrenAsData = _ref2.childrenAsData;
  var flattenList = [];
  var _fillFieldNames = fillFieldNames(fieldNames, false),
    fieldLabel = _fillFieldNames.label,
    fieldValue = _fillFieldNames.value,
    fieldOptions = _fillFieldNames.options;
  function dig(list, isGroupOption) {
    list.forEach(function(data) {
      var label = data[fieldLabel];
      if (isGroupOption || !(fieldOptions in data)) {
        var value = data[fieldValue];
        flattenList.push({
          key: getKey(data, flattenList.length),
          groupOption: isGroupOption,
          data,
          label,
          value
        });
      } else {
        var grpLabel = label;
        if (grpLabel === void 0 && childrenAsData) {
          grpLabel = data.label;
        }
        flattenList.push({
          key: getKey(data, flattenList.length),
          group: true,
          data,
          label: grpLabel
        });
        dig(data[fieldOptions], true);
      }
    });
  }
  dig(options, false);
  return flattenList;
}
function injectPropsWithOption(option) {
  var newOption = _objectSpread3({}, option);
  if (!('props' in newOption)) {
    Object.defineProperty(newOption, 'props', {
      get: function get() {
        warning2(
          false,
          'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.'
        );
        return newOption;
      }
    });
  }
  return newOption;
}
function getSeparatedContent(text, tokens) {
  if (!tokens || !tokens.length) {
    return null;
  }
  var match = false;
  function separate(str, _ref3) {
    var _ref4 = _toArray(_ref3),
      token = _ref4[0],
      restTokens = _ref4.slice(1);
    if (!token) {
      return [str];
    }
    var list2 = str.split(token);
    match = match || list2.length > 1;
    return list2
      .reduce(function(prevList, unitStr) {
        return [].concat(_toConsumableArray(prevList), _toConsumableArray(separate(unitStr, restTokens)));
      }, [])
      .filter(function(unit) {
        return unit;
      });
  }
  var list = separate(text, tokens);
  return match ? list : null;
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/BaseSelect.js
var _excluded2 = [
  'id',
  'prefixCls',
  'className',
  'showSearch',
  'tagRender',
  'direction',
  'omitDomProps',
  'displayValues',
  'onDisplayValuesChange',
  'emptyOptions',
  'notFoundContent',
  'onClear',
  'mode',
  'disabled',
  'loading',
  'getInputElement',
  'getRawInputElement',
  'open',
  'defaultOpen',
  'onDropdownVisibleChange',
  'activeValue',
  'onActiveValueChange',
  'activeDescendantId',
  'searchValue',
  'autoClearSearchValue',
  'onSearch',
  'onSearchSplit',
  'tokenSeparators',
  'allowClear',
  'showArrow',
  'inputIcon',
  'clearIcon',
  'OptionList',
  'animation',
  'transitionName',
  'dropdownStyle',
  'dropdownClassName',
  'dropdownMatchSelectWidth',
  'dropdownRender',
  'dropdownAlign',
  'placement',
  'getPopupContainer',
  'showAction',
  'onFocus',
  'onBlur',
  'onKeyUp',
  'onKeyDown',
  'onMouseDown'
];
var DEFAULT_OMIT_PROPS = [
  'value',
  'onChange',
  'removeIcon',
  'placeholder',
  'autoFocus',
  'maxTagCount',
  'maxTagTextLength',
  'maxTagPlaceholder',
  'choiceTransitionName',
  'onInputKeyDown',
  'onPopupScroll',
  'tabIndex'
];
function isMultiple(mode) {
  return mode === 'tags' || mode === 'multiple';
}
var BaseSelect = /* @__PURE__ */ React12.forwardRef(function(props, ref) {
  var _customizeRawInputEle, _classNames2;
  var id = props.id,
    prefixCls = props.prefixCls,
    className = props.className,
    showSearch = props.showSearch,
    tagRender = props.tagRender,
    direction = props.direction,
    omitDomProps = props.omitDomProps,
    displayValues = props.displayValues,
    onDisplayValuesChange = props.onDisplayValuesChange,
    emptyOptions = props.emptyOptions,
    _props$notFoundConten = props.notFoundContent,
    notFoundContent = _props$notFoundConten === void 0 ? 'Not Found' : _props$notFoundConten,
    onClear = props.onClear,
    mode = props.mode,
    disabled = props.disabled,
    loading = props.loading,
    getInputElement = props.getInputElement,
    getRawInputElement = props.getRawInputElement,
    open = props.open,
    defaultOpen = props.defaultOpen,
    onDropdownVisibleChange = props.onDropdownVisibleChange,
    activeValue = props.activeValue,
    onActiveValueChange = props.onActiveValueChange,
    activeDescendantId = props.activeDescendantId,
    searchValue = props.searchValue,
    autoClearSearchValue = props.autoClearSearchValue,
    onSearch = props.onSearch,
    onSearchSplit = props.onSearchSplit,
    tokenSeparators = props.tokenSeparators,
    allowClear = props.allowClear,
    showArrow = props.showArrow,
    inputIcon = props.inputIcon,
    clearIcon = props.clearIcon,
    OptionList3 = props.OptionList,
    animation = props.animation,
    transitionName = props.transitionName,
    dropdownStyle = props.dropdownStyle,
    dropdownClassName = props.dropdownClassName,
    dropdownMatchSelectWidth = props.dropdownMatchSelectWidth,
    dropdownRender = props.dropdownRender,
    dropdownAlign = props.dropdownAlign,
    placement = props.placement,
    getPopupContainer = props.getPopupContainer,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? [] : _props$showAction,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    onKeyUp = props.onKeyUp,
    onKeyDown = props.onKeyDown,
    onMouseDown = props.onMouseDown,
    restProps = _objectWithoutProperties2(props, _excluded2);
  var multiple = isMultiple(mode);
  var mergedShowSearch = (showSearch !== void 0 ? showSearch : multiple) || mode === 'combobox';
  var domProps = _objectSpread4({}, restProps);
  DEFAULT_OMIT_PROPS.forEach(function(propName) {
    delete domProps[propName];
  });
  omitDomProps === null || omitDomProps === void 0
    ? void 0
    : omitDomProps.forEach(function(propName) {
        delete domProps[propName];
      });
  var _React$useState = React12.useState(false),
    _React$useState2 = _slicedToArray5(_React$useState, 2),
    mobile = _React$useState2[0],
    setMobile = _React$useState2[1];
  React12.useEffect(function() {
    setMobile(isMobile());
  }, []);
  var containerRef = React12.useRef(null);
  var selectorDomRef = React12.useRef(null);
  var triggerRef = React12.useRef(null);
  var selectorRef = React12.useRef(null);
  var listRef = React12.useRef(null);
  var _useDelayReset = useDelayReset(),
    _useDelayReset2 = _slicedToArray5(_useDelayReset, 3),
    mockFocused = _useDelayReset2[0],
    setMockFocused = _useDelayReset2[1],
    cancelSetMockFocused = _useDelayReset2[2];
  React12.useImperativeHandle(ref, function() {
    var _selectorRef$current, _selectorRef$current2;
    return {
      focus:
        (_selectorRef$current = selectorRef.current) === null || _selectorRef$current === void 0
          ? void 0
          : _selectorRef$current.focus,
      blur:
        (_selectorRef$current2 = selectorRef.current) === null || _selectorRef$current2 === void 0
          ? void 0
          : _selectorRef$current2.blur,
      scrollTo: function scrollTo(arg) {
        var _listRef$current;
        return (_listRef$current = listRef.current) === null || _listRef$current === void 0
          ? void 0
          : _listRef$current.scrollTo(arg);
      }
    };
  });
  var mergedSearchValue = React12.useMemo(
    function() {
      var _displayValues$;
      if (mode !== 'combobox') {
        return searchValue;
      }
      var val =
        (_displayValues$ = displayValues[0]) === null || _displayValues$ === void 0 ? void 0 : _displayValues$.value;
      return typeof val === 'string' || typeof val === 'number' ? String(val) : '';
    },
    [searchValue, mode, displayValues]
  );
  var customizeInputElement =
    (mode === 'combobox' && typeof getInputElement === 'function' && getInputElement()) || null;
  var customizeRawInputElement = typeof getRawInputElement === 'function' && getRawInputElement();
  var customizeRawInputRef = useComposeRef(
    selectorDomRef,
    customizeRawInputElement === null || customizeRawInputElement === void 0
      ? void 0
      : (_customizeRawInputEle = customizeRawInputElement.props) === null || _customizeRawInputEle === void 0
      ? void 0
      : _customizeRawInputEle.ref
  );
  var _useMergedState = useMergedState(void 0, {
      defaultValue: defaultOpen,
      value: open
    }),
    _useMergedState2 = _slicedToArray5(_useMergedState, 2),
    innerOpen = _useMergedState2[0],
    setInnerOpen = _useMergedState2[1];
  var mergedOpen = innerOpen;
  var emptyListContent = !notFoundContent && emptyOptions;
  if (disabled || (emptyListContent && mergedOpen && mode === 'combobox')) {
    mergedOpen = false;
  }
  var triggerOpen = emptyListContent ? false : mergedOpen;
  var onToggleOpen = React12.useCallback(
    function(newOpen) {
      var nextOpen = newOpen !== void 0 ? newOpen : !mergedOpen;
      if (!disabled) {
        setInnerOpen(nextOpen);
        if (mergedOpen !== nextOpen) {
          onDropdownVisibleChange === null || onDropdownVisibleChange === void 0
            ? void 0
            : onDropdownVisibleChange(nextOpen);
        }
      }
    },
    [disabled, mergedOpen, setInnerOpen, onDropdownVisibleChange]
  );
  var tokenWithEnter = React12.useMemo(
    function() {
      return (tokenSeparators || []).some(function(tokenSeparator) {
        return ['\n', '\r\n'].includes(tokenSeparator);
      });
    },
    [tokenSeparators]
  );
  var onInternalSearch = function onInternalSearch2(searchText, fromTyping, isCompositing) {
    var ret = true;
    var newSearchText = searchText;
    onActiveValueChange === null || onActiveValueChange === void 0 ? void 0 : onActiveValueChange(null);
    var patchLabels = isCompositing ? null : getSeparatedContent(searchText, tokenSeparators);
    if (mode !== 'combobox' && patchLabels) {
      newSearchText = '';
      onSearchSplit === null || onSearchSplit === void 0 ? void 0 : onSearchSplit(patchLabels);
      onToggleOpen(false);
      ret = false;
    }
    if (onSearch && mergedSearchValue !== newSearchText) {
      onSearch(newSearchText, {
        source: fromTyping ? 'typing' : 'effect'
      });
    }
    return ret;
  };
  var onInternalSearchSubmit = function onInternalSearchSubmit2(searchText) {
    if (!searchText || !searchText.trim()) {
      return;
    }
    onSearch(searchText, {
      source: 'submit'
    });
  };
  React12.useEffect(
    function() {
      if (!mergedOpen && !multiple && mode !== 'combobox') {
        onInternalSearch('', false, false);
      }
    },
    [mergedOpen]
  );
  React12.useEffect(
    function() {
      if (innerOpen && disabled) {
        setInnerOpen(false);
      }
      if (disabled) {
        setMockFocused(false);
      }
    },
    [disabled]
  );
  var _useLock = useLock(),
    _useLock2 = _slicedToArray5(_useLock, 2),
    getClearLock = _useLock2[0],
    setClearLock = _useLock2[1];
  var onInternalKeyDown = function onInternalKeyDown2(event) {
    var clearLock = getClearLock();
    var which = event.which;
    if (which === KeyCode3.ENTER) {
      if (mode !== 'combobox') {
        event.preventDefault();
      }
      if (!mergedOpen) {
        onToggleOpen(true);
      }
    }
    setClearLock(!!mergedSearchValue);
    if (which === KeyCode3.BACKSPACE && !clearLock && multiple && !mergedSearchValue && displayValues.length) {
      var cloneDisplayValues = _toConsumableArray2(displayValues);
      var removedDisplayValue = null;
      for (var i = cloneDisplayValues.length - 1; i >= 0; i -= 1) {
        var current = cloneDisplayValues[i];
        if (!current.disabled) {
          cloneDisplayValues.splice(i, 1);
          removedDisplayValue = current;
          break;
        }
      }
      if (removedDisplayValue) {
        onDisplayValuesChange(cloneDisplayValues, {
          type: 'remove',
          values: [removedDisplayValue]
        });
      }
    }
    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      rest[_key - 1] = arguments[_key];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current2;
      (_listRef$current2 = listRef.current).onKeyDown.apply(_listRef$current2, [event].concat(rest));
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown.apply(void 0, [event].concat(rest));
  };
  var onInternalKeyUp = function onInternalKeyUp2(event) {
    for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      rest[_key2 - 1] = arguments[_key2];
    }
    if (mergedOpen && listRef.current) {
      var _listRef$current3;
      (_listRef$current3 = listRef.current).onKeyUp.apply(_listRef$current3, [event].concat(rest));
    }
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp.apply(void 0, [event].concat(rest));
  };
  var onSelectorRemove = function onSelectorRemove2(val) {
    var newValues = displayValues.filter(function(i) {
      return i !== val;
    });
    onDisplayValuesChange(newValues, {
      type: 'remove',
      values: [val]
    });
  };
  var focusRef = React12.useRef(false);
  var onContainerFocus = function onContainerFocus2() {
    setMockFocused(true);
    if (!disabled) {
      if (onFocus && !focusRef.current) {
        onFocus.apply(void 0, arguments);
      }
      if (showAction.includes('focus')) {
        onToggleOpen(true);
      }
    }
    focusRef.current = true;
  };
  var onContainerBlur = function onContainerBlur2() {
    setMockFocused(false, function() {
      focusRef.current = false;
      onToggleOpen(false);
    });
    if (disabled) {
      return;
    }
    if (mergedSearchValue) {
      if (mode === 'tags') {
        onSearch(mergedSearchValue, {
          source: 'submit'
        });
      } else if (mode === 'multiple') {
        onSearch('', {
          source: 'blur'
        });
      }
    }
    if (onBlur) {
      onBlur.apply(void 0, arguments);
    }
  };
  var activeTimeoutIds = [];
  React12.useEffect(function() {
    return function() {
      activeTimeoutIds.forEach(function(timeoutId) {
        return clearTimeout(timeoutId);
      });
      activeTimeoutIds.splice(0, activeTimeoutIds.length);
    };
  }, []);
  var onInternalMouseDown = function onInternalMouseDown2(event) {
    var _triggerRef$current;
    var target = event.target;
    var popupElement =
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0
        ? void 0
        : _triggerRef$current.getPopupElement();
    if (popupElement && popupElement.contains(target)) {
      var timeoutId = setTimeout(function() {
        var index = activeTimeoutIds.indexOf(timeoutId);
        if (index !== -1) {
          activeTimeoutIds.splice(index, 1);
        }
        cancelSetMockFocused();
        if (!mobile && !popupElement.contains(document.activeElement)) {
          var _selectorRef$current3;
          (_selectorRef$current3 = selectorRef.current) === null || _selectorRef$current3 === void 0
            ? void 0
            : _selectorRef$current3.focus();
        }
      });
      activeTimeoutIds.push(timeoutId);
    }
    for (
      var _len3 = arguments.length, restArgs = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1;
      _key3 < _len3;
      _key3++
    ) {
      restArgs[_key3 - 1] = arguments[_key3];
    }
    onMouseDown === null || onMouseDown === void 0 ? void 0 : onMouseDown.apply(void 0, [event].concat(restArgs));
  };
  var _React$useState3 = React12.useState(null),
    _React$useState4 = _slicedToArray5(_React$useState3, 2),
    containerWidth = _React$useState4[0],
    setContainerWidth = _React$useState4[1];
  var _React$useState5 = React12.useState({}),
    _React$useState6 = _slicedToArray5(_React$useState5, 2),
    forceUpdate = _React$useState6[1];
  function onPopupMouseEnter() {
    forceUpdate({});
  }
  useLayoutEffect3(
    function() {
      if (triggerOpen) {
        var _containerRef$current;
        var newWidth = Math.ceil(
          (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
            ? void 0
            : _containerRef$current.offsetWidth
        );
        if (containerWidth !== newWidth && !Number.isNaN(newWidth)) {
          setContainerWidth(newWidth);
        }
      }
    },
    [triggerOpen]
  );
  var onTriggerVisibleChange;
  if (customizeRawInputElement) {
    onTriggerVisibleChange = function onTriggerVisibleChange2(newOpen) {
      onToggleOpen(newOpen);
    };
  }
  useSelectTriggerControl(
    function() {
      var _triggerRef$current2;
      return [
        containerRef.current,
        (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0
          ? void 0
          : _triggerRef$current2.getPopupElement()
      ];
    },
    triggerOpen,
    onToggleOpen,
    !!customizeRawInputElement
  );
  var baseSelectContext = React12.useMemo(
    function() {
      return _objectSpread4(
        _objectSpread4({}, props),
        {},
        {
          notFoundContent,
          open: mergedOpen,
          triggerOpen,
          id,
          showSearch: mergedShowSearch,
          multiple,
          toggleOpen: onToggleOpen
        }
      );
    },
    [props, notFoundContent, triggerOpen, mergedOpen, id, mergedShowSearch, multiple, onToggleOpen]
  );
  var mergedShowArrow = showArrow !== void 0 ? showArrow : loading || (!multiple && mode !== 'combobox');
  var arrowNode;
  if (mergedShowArrow) {
    arrowNode = /* @__PURE__ */ React12.createElement(TransBtn_default, {
      className: classNames5(
        ''.concat(prefixCls, '-arrow'),
        _defineProperty3({}, ''.concat(prefixCls, '-arrow-loading'), loading)
      ),
      customizeIcon: inputIcon,
      customizeIconProps: {
        loading,
        searchValue: mergedSearchValue,
        open: mergedOpen,
        focused: mockFocused,
        showSearch: mergedShowSearch
      }
    });
  }
  var clearNode;
  var onClearMouseDown = function onClearMouseDown2() {
    onClear === null || onClear === void 0 ? void 0 : onClear();
    onDisplayValuesChange([], {
      type: 'clear',
      values: displayValues
    });
    onInternalSearch('', false, false);
  };
  if (
    !disabled &&
    allowClear &&
    (displayValues.length || mergedSearchValue) &&
    !(mode === 'combobox' && mergedSearchValue === '')
  ) {
    clearNode = /* @__PURE__ */ React12.createElement(
      TransBtn_default,
      {
        className: ''.concat(prefixCls, '-clear'),
        onMouseDown: onClearMouseDown,
        customizeIcon: clearIcon
      },
      '\xD7'
    );
  }
  var optionList = /* @__PURE__ */ React12.createElement(OptionList3, {
    ref: listRef
  });
  var mergedClassName = classNames5(
    prefixCls,
    className,
    ((_classNames2 = {}),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-focused'), mockFocused),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-multiple'), multiple),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-single'), !multiple),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-allow-clear'), allowClear),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-show-arrow'), mergedShowArrow),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-disabled'), disabled),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-loading'), loading),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-open'), mergedOpen),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-customize-input'), customizeInputElement),
    _defineProperty3(_classNames2, ''.concat(prefixCls, '-show-search'), mergedShowSearch),
    _classNames2)
  );
  var selectorNode = /* @__PURE__ */ React12.createElement(
    SelectTrigger_default,
    {
      ref: triggerRef,
      disabled,
      prefixCls,
      visible: triggerOpen,
      popupElement: optionList,
      containerWidth,
      animation,
      transitionName,
      dropdownStyle,
      dropdownClassName,
      direction,
      dropdownMatchSelectWidth,
      dropdownRender,
      dropdownAlign,
      placement,
      getPopupContainer,
      empty: emptyOptions,
      getTriggerDOMNode: function getTriggerDOMNode() {
        return selectorDomRef.current;
      },
      onPopupVisibleChange: onTriggerVisibleChange,
      onPopupMouseEnter
    },
    customizeRawInputElement
      ? /* @__PURE__ */ React12.cloneElement(customizeRawInputElement, {
          ref: customizeRawInputRef
        })
      : /* @__PURE__ */ React12.createElement(
          Selector_default,
          _extends3({}, props, {
            domRef: selectorDomRef,
            prefixCls,
            inputElement: customizeInputElement,
            ref: selectorRef,
            id,
            showSearch: mergedShowSearch,
            autoClearSearchValue,
            mode,
            activeDescendantId,
            tagRender,
            values: displayValues,
            open: mergedOpen,
            onToggleOpen,
            activeValue,
            searchValue: mergedSearchValue,
            onSearch: onInternalSearch,
            onSearchSubmit: onInternalSearchSubmit,
            onRemove: onSelectorRemove,
            tokenWithEnter
          })
        )
  );
  var renderNode;
  if (customizeRawInputElement) {
    renderNode = selectorNode;
  } else {
    renderNode = /* @__PURE__ */ React12.createElement(
      'div',
      _extends3(
        {
          className: mergedClassName
        },
        domProps,
        {
          ref: containerRef,
          onMouseDown: onInternalMouseDown,
          onKeyDown: onInternalKeyDown,
          onKeyUp: onInternalKeyUp,
          onFocus: onContainerFocus,
          onBlur: onContainerBlur
        }
      ),
      mockFocused &&
        !mergedOpen &&
        /* @__PURE__ */ React12.createElement(
          'span',
          {
            style: {
              width: 0,
              height: 0,
              position: 'absolute',
              overflow: 'hidden',
              opacity: 0
            },
            'aria-live': 'polite'
          },
          ''.concat(
            displayValues
              .map(function(_ref) {
                var label = _ref.label,
                  value = _ref.value;
                return ['number', 'string'].includes(_typeof2(label)) ? label : value;
              })
              .join(', ')
          )
        ),
      selectorNode,
      arrowNode,
      clearNode
    );
  }
  return /* @__PURE__ */ React12.createElement(
    BaseSelectContext.Provider,
    {
      value: baseSelectContext
    },
    renderNode
  );
});
if (true) {
  BaseSelect.displayName = 'BaseSelect';
}
var BaseSelect_default = BaseSelect;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useCache.js
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React13 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useCache_default = function(labeledValues, valueOptions) {
  var cacheRef = React13.useRef({
    values: /* @__PURE__ */ new Map(),
    options: /* @__PURE__ */ new Map()
  });
  var filledLabeledValues = React13.useMemo(
    function() {
      var _cacheRef$current = cacheRef.current,
        prevValueCache = _cacheRef$current.values,
        prevOptionCache = _cacheRef$current.options;
      var patchedValues = labeledValues.map(function(item) {
        if (item.label === void 0) {
          var _prevValueCache$get;
          return _objectSpread5(
            _objectSpread5({}, item),
            {},
            {
              label:
                (_prevValueCache$get = prevValueCache.get(item.value)) === null || _prevValueCache$get === void 0
                  ? void 0
                  : _prevValueCache$get.label
            }
          );
        }
        return item;
      });
      var valueCache = /* @__PURE__ */ new Map();
      var optionCache = /* @__PURE__ */ new Map();
      patchedValues.forEach(function(item) {
        valueCache.set(item.value, item);
        optionCache.set(item.value, valueOptions.get(item.value) || prevOptionCache.get(item.value));
      });
      cacheRef.current.values = valueCache;
      cacheRef.current.options = optionCache;
      return patchedValues;
    },
    [labeledValues, valueOptions]
  );
  var getOption = React13.useCallback(
    function(val) {
      return valueOptions.get(val) || cacheRef.current.options.get(val);
    },
    [valueOptions]
  );
  return [filledLabeledValues, getOption];
};

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useFilterOptions.js
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React14 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function includes(test, search) {
  return toArray(test)
    .join('')
    .toUpperCase()
    .includes(search);
}
var useFilterOptions_default = function(options, fieldNames, searchValue, filterOption, optionFilterProp) {
  return React14.useMemo(
    function() {
      if (!searchValue || filterOption === false) {
        return options;
      }
      var fieldOptions = fieldNames.options,
        fieldLabel = fieldNames.label,
        fieldValue = fieldNames.value;
      var filteredOptions = [];
      var customizeFilter = typeof filterOption === 'function';
      var upperSearch = searchValue.toUpperCase();
      var filterFunc = customizeFilter
        ? filterOption
        : function(_, option) {
            if (optionFilterProp) {
              return includes(option[optionFilterProp], upperSearch);
            }
            if (option[fieldOptions]) {
              return includes(option[fieldLabel !== 'children' ? fieldLabel : 'label'], upperSearch);
            }
            return includes(option[fieldValue], upperSearch);
          };
      var wrapOption = customizeFilter
        ? function(opt) {
            return injectPropsWithOption(opt);
          }
        : function(opt) {
            return opt;
          };
      options.forEach(function(item) {
        if (item[fieldOptions]) {
          var matchGroup = filterFunc(searchValue, wrapOption(item));
          if (matchGroup) {
            filteredOptions.push(item);
          } else {
            var subOptions = item[fieldOptions].filter(function(subItem) {
              return filterFunc(searchValue, wrapOption(subItem));
            });
            if (subOptions.length) {
              filteredOptions.push(
                _objectSpread6(_objectSpread6({}, item), {}, _defineProperty4({}, fieldOptions, subOptions))
              );
            }
          }
          return;
        }
        if (filterFunc(searchValue, wrapOption(item))) {
          filteredOptions.push(item);
        }
      });
      return filteredOptions;
    },
    [options, filterOption, optionFilterProp, searchValue, fieldNames]
  );
};

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useId.js
import _slicedToArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React15 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var uuid = 0;
var isBrowserClient2 = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient2) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
function useId(id) {
  var _React$useState = React15.useState(),
    _React$useState2 = _slicedToArray6(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React15.useEffect(function() {
    setInnerId('rc_select_'.concat(getUUID()));
  }, []);
  return id || innerId;
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useOptions.js
import * as React17 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/legacyUtil.js
import _objectSpread7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React16 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import toArray2 from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
var _excluded3 = ['children', 'value'];
var _excluded22 = ['children'];
function convertNodeToOption(node) {
  var _ref = node,
    key = _ref.key,
    _ref$props = _ref.props,
    children = _ref$props.children,
    value = _ref$props.value,
    restProps = _objectWithoutProperties3(_ref$props, _excluded3);
  return _objectSpread7(
    {
      key,
      value: value !== void 0 ? value : key,
      children
    },
    restProps
  );
}
function convertChildrenToData(nodes) {
  var optionOnly = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  return toArray2(nodes)
    .map(function(node, index) {
      if (!(/* @__PURE__ */ React16.isValidElement(node)) || !node.type) {
        return null;
      }
      var _ref2 = node,
        isSelectOptGroup = _ref2.type.isSelectOptGroup,
        key = _ref2.key,
        _ref2$props = _ref2.props,
        children = _ref2$props.children,
        restProps = _objectWithoutProperties3(_ref2$props, _excluded22);
      if (optionOnly || !isSelectOptGroup) {
        return convertNodeToOption(node);
      }
      return _objectSpread7(
        _objectSpread7(
          {
            key: '__RC_SELECT_GRP__'.concat(key === null ? index : key, '__'),
            label: key
          },
          restProps
        ),
        {},
        {
          options: convertChildrenToData(children)
        }
      );
    })
    .filter(function(data) {
      return data;
    });
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useOptions.js
function useOptions(options, children, fieldNames, optionFilterProp, optionLabelProp) {
  return React17.useMemo(
    function() {
      var mergedOptions = options;
      var childrenAsData = !options;
      if (childrenAsData) {
        mergedOptions = convertChildrenToData(children);
      }
      var valueOptions = /* @__PURE__ */ new Map();
      var labelOptions = /* @__PURE__ */ new Map();
      var setLabelOptions = function setLabelOptions2(labelOptionsMap, option, key) {
        if (key && typeof key === 'string') {
          labelOptionsMap.set(option[key], option);
        }
      };
      function dig(optionList) {
        var isChildren = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        for (var i = 0; i < optionList.length; i += 1) {
          var option = optionList[i];
          if (!option[fieldNames.options] || isChildren) {
            valueOptions.set(option[fieldNames.value], option);
            setLabelOptions(labelOptions, option, fieldNames.label);
            setLabelOptions(labelOptions, option, optionFilterProp);
            setLabelOptions(labelOptions, option, optionLabelProp);
          } else {
            dig(option[fieldNames.options], true);
          }
        }
      }
      dig(mergedOptions);
      return {
        options: mergedOptions,
        valueOptions,
        labelOptions
      };
    },
    [options, children, fieldNames, optionFilterProp, optionLabelProp]
  );
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/hooks/useRefFunc.js
import * as React18 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRefFunc(callback) {
  var funcRef = React18.useRef();
  funcRef.current = callback;
  var cacheFn = React18.useCallback(function() {
    return funcRef.current.apply(funcRef, arguments);
  }, []);
  return cacheFn;
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/OptGroup.js
var OptGroup = function OptGroup2() {
  return null;
};
OptGroup.isSelectOptGroup = true;
var OptGroup_default = OptGroup;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Option.js
var Option = function Option2() {
  return null;
};
Option.isSelectOption = true;
var Option_default = Option;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/OptionList.js
import _defineProperty5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React20 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useEffect as useEffect8 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode4 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';
import pickAttrs3 from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';
import useMemo6 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';
import classNames6 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import List from '/cdn/v99/rc-virtual-list@3.4.11/es2022/rc-virtual-list.development.js';

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/platformUtil.js
function isPlatformMac() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion);
}

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/SelectContext.js
import * as React19 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var SelectContext = /* @__PURE__ */ React19.createContext(null);
var SelectContext_default = SelectContext;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/OptionList.js
var _excluded4 = ['disabled', 'title', 'children', 'style', 'className'];
function isTitleType2(content) {
  return typeof content === 'string' || typeof content === 'number';
}
var OptionList = function OptionList2(_, ref) {
  var _useBaseProps = useBaseProps(),
    prefixCls = _useBaseProps.prefixCls,
    id = _useBaseProps.id,
    open = _useBaseProps.open,
    multiple = _useBaseProps.multiple,
    mode = _useBaseProps.mode,
    searchValue = _useBaseProps.searchValue,
    toggleOpen = _useBaseProps.toggleOpen,
    notFoundContent = _useBaseProps.notFoundContent,
    onPopupScroll = _useBaseProps.onPopupScroll;
  var _React$useContext = React20.useContext(SelectContext_default),
    flattenOptions2 = _React$useContext.flattenOptions,
    onActiveValue = _React$useContext.onActiveValue,
    defaultActiveFirstOption = _React$useContext.defaultActiveFirstOption,
    onSelect = _React$useContext.onSelect,
    menuItemSelectedIcon = _React$useContext.menuItemSelectedIcon,
    rawValues = _React$useContext.rawValues,
    fieldNames = _React$useContext.fieldNames,
    virtual = _React$useContext.virtual,
    listHeight = _React$useContext.listHeight,
    listItemHeight = _React$useContext.listItemHeight;
  var itemPrefixCls = ''.concat(prefixCls, '-item');
  var memoFlattenOptions = useMemo6(
    function() {
      return flattenOptions2;
    },
    [open, flattenOptions2],
    function(prev, next) {
      return next[0] && prev[1] !== next[1];
    }
  );
  var listRef = React20.useRef(null);
  var onListMouseDown = function onListMouseDown2(event) {
    event.preventDefault();
  };
  var scrollIntoView = function scrollIntoView2(args) {
    if (listRef.current) {
      listRef.current.scrollTo(
        typeof args === 'number'
          ? {
              index: args
            }
          : args
      );
    }
  };
  var getEnabledActiveIndex = function getEnabledActiveIndex2(index) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var len = memoFlattenOptions.length;
    for (var i = 0; i < len; i += 1) {
      var current = (index + i * offset + len) % len;
      var _memoFlattenOptions$c = memoFlattenOptions[current],
        group = _memoFlattenOptions$c.group,
        data = _memoFlattenOptions$c.data;
      if (!group && !data.disabled) {
        return current;
      }
    }
    return -1;
  };
  var _React$useState = React20.useState(function() {
      return getEnabledActiveIndex(0);
    }),
    _React$useState2 = _slicedToArray7(_React$useState, 2),
    activeIndex = _React$useState2[0],
    setActiveIndex = _React$useState2[1];
  var setActive = function setActive2(index) {
    var fromKeyboard = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    setActiveIndex(index);
    var info = {
      source: fromKeyboard ? 'keyboard' : 'mouse'
    };
    var flattenItem = memoFlattenOptions[index];
    if (!flattenItem) {
      onActiveValue(null, -1, info);
      return;
    }
    onActiveValue(flattenItem.value, index, info);
  };
  useEffect8(
    function() {
      setActive(defaultActiveFirstOption !== false ? getEnabledActiveIndex(0) : -1);
    },
    [memoFlattenOptions.length, searchValue]
  );
  var isSelected = React20.useCallback(
    function(value) {
      return rawValues.has(value) && mode !== 'combobox';
    },
    [mode, _toConsumableArray3(rawValues).toString(), rawValues.size]
  );
  useEffect8(
    function() {
      var timeoutId = setTimeout(function() {
        if (!multiple && open && rawValues.size === 1) {
          var value = Array.from(rawValues)[0];
          var index = memoFlattenOptions.findIndex(function(_ref) {
            var data = _ref.data;
            return data.value === value;
          });
          if (index !== -1) {
            setActive(index);
            scrollIntoView(index);
          }
        }
      });
      if (open) {
        var _listRef$current;
        (_listRef$current = listRef.current) === null || _listRef$current === void 0
          ? void 0
          : _listRef$current.scrollTo(void 0);
      }
      return function() {
        return clearTimeout(timeoutId);
      };
    },
    [open, searchValue]
  );
  var onSelectValue = function onSelectValue2(value) {
    if (value !== void 0) {
      onSelect(value, {
        selected: !rawValues.has(value)
      });
    }
    if (!multiple) {
      toggleOpen(false);
    }
  };
  React20.useImperativeHandle(ref, function() {
    return {
      onKeyDown: function onKeyDown(event) {
        var which = event.which,
          ctrlKey = event.ctrlKey;
        switch (which) {
          case KeyCode4.N:
          case KeyCode4.P:
          case KeyCode4.UP:
          case KeyCode4.DOWN: {
            var offset = 0;
            if (which === KeyCode4.UP) {
              offset = -1;
            } else if (which === KeyCode4.DOWN) {
              offset = 1;
            } else if (isPlatformMac() && ctrlKey) {
              if (which === KeyCode4.N) {
                offset = 1;
              } else if (which === KeyCode4.P) {
                offset = -1;
              }
            }
            if (offset !== 0) {
              var nextActiveIndex = getEnabledActiveIndex(activeIndex + offset, offset);
              scrollIntoView(nextActiveIndex);
              setActive(nextActiveIndex, true);
            }
            break;
          }
          case KeyCode4.ENTER: {
            var item = memoFlattenOptions[activeIndex];
            if (item && !item.data.disabled) {
              onSelectValue(item.value);
            } else {
              onSelectValue(void 0);
            }
            if (open) {
              event.preventDefault();
            }
            break;
          }
          case KeyCode4.ESC: {
            toggleOpen(false);
            if (open) {
              event.stopPropagation();
            }
          }
        }
      },
      onKeyUp: function onKeyUp() {},
      scrollTo: function scrollTo(index) {
        scrollIntoView(index);
      }
    };
  });
  if (memoFlattenOptions.length === 0) {
    return /* @__PURE__ */ React20.createElement(
      'div',
      {
        role: 'listbox',
        id: ''.concat(id, '_list'),
        className: ''.concat(itemPrefixCls, '-empty'),
        onMouseDown: onListMouseDown
      },
      notFoundContent
    );
  }
  var omitFieldNameList = Object.keys(fieldNames).map(function(key) {
    return fieldNames[key];
  });
  var getLabel = function getLabel2(item) {
    return item.label;
  };
  var renderItem = function renderItem2(index) {
    var item = memoFlattenOptions[index];
    if (!item) return null;
    var itemData = item.data || {};
    var value = itemData.value;
    var group = item.group;
    var attrs = pickAttrs3(itemData, true);
    var mergedLabel = getLabel(item);
    return item
      ? /* @__PURE__ */ React20.createElement(
          'div',
          _extends4(
            {
              'aria-label': typeof mergedLabel === 'string' && !group ? mergedLabel : null
            },
            attrs,
            {
              key: index,
              role: group ? 'presentation' : 'option',
              id: ''.concat(id, '_list_').concat(index),
              'aria-selected': isSelected(value)
            }
          ),
          value
        )
      : null;
  };
  return /* @__PURE__ */ React20.createElement(
    React20.Fragment,
    null,
    /* @__PURE__ */ React20.createElement(
      'div',
      {
        role: 'listbox',
        id: ''.concat(id, '_list'),
        style: {
          height: 0,
          width: 0,
          overflow: 'hidden'
        }
      },
      renderItem(activeIndex - 1),
      renderItem(activeIndex),
      renderItem(activeIndex + 1)
    ),
    /* @__PURE__ */ React20.createElement(
      List,
      {
        itemKey: 'key',
        ref: listRef,
        data: memoFlattenOptions,
        height: listHeight,
        itemHeight: listItemHeight,
        fullHeight: false,
        onMouseDown: onListMouseDown,
        onScroll: onPopupScroll,
        virtual
      },
      function(item, itemIndex) {
        var _classNames;
        var group = item.group,
          groupOption = item.groupOption,
          data = item.data,
          label = item.label,
          value = item.value;
        var key = data.key;
        if (group) {
          var _data$title;
          var groupTitle =
            (_data$title = data.title) !== null && _data$title !== void 0
              ? _data$title
              : isTitleType2(label)
              ? label.toString()
              : void 0;
          return /* @__PURE__ */ React20.createElement(
            'div',
            {
              className: classNames6(itemPrefixCls, ''.concat(itemPrefixCls, '-group')),
              title: groupTitle
            },
            label !== void 0 ? label : key
          );
        }
        var disabled = data.disabled,
          title = data.title,
          children = data.children,
          style = data.style,
          className = data.className,
          otherProps = _objectWithoutProperties4(data, _excluded4);
        var passedProps = omit(otherProps, omitFieldNameList);
        var selected = isSelected(value);
        var optionPrefixCls = ''.concat(itemPrefixCls, '-option');
        var optionClassName = classNames6(
          itemPrefixCls,
          optionPrefixCls,
          className,
          ((_classNames = {}),
          _defineProperty5(_classNames, ''.concat(optionPrefixCls, '-grouped'), groupOption),
          _defineProperty5(_classNames, ''.concat(optionPrefixCls, '-active'), activeIndex === itemIndex && !disabled),
          _defineProperty5(_classNames, ''.concat(optionPrefixCls, '-disabled'), disabled),
          _defineProperty5(_classNames, ''.concat(optionPrefixCls, '-selected'), selected),
          _classNames)
        );
        var mergedLabel = getLabel(item);
        var iconVisible = !menuItemSelectedIcon || typeof menuItemSelectedIcon === 'function' || selected;
        var content = typeof mergedLabel === 'number' ? mergedLabel : mergedLabel || value;
        var optionTitle = isTitleType2(content) ? content.toString() : void 0;
        if (title !== void 0) {
          optionTitle = title;
        }
        return /* @__PURE__ */ React20.createElement(
          'div',
          _extends4({}, pickAttrs3(passedProps), {
            'aria-selected': selected,
            className: optionClassName,
            title: optionTitle,
            onMouseMove: function onMouseMove() {
              if (activeIndex === itemIndex || disabled) {
                return;
              }
              setActive(itemIndex);
            },
            onClick: function onClick() {
              if (!disabled) {
                onSelectValue(value);
              }
            },
            style
          }),
          /* @__PURE__ */ React20.createElement(
            'div',
            {
              className: ''.concat(optionPrefixCls, '-content')
            },
            content
          ),
          /* @__PURE__ */ React20.isValidElement(menuItemSelectedIcon) || selected,
          iconVisible &&
            /* @__PURE__ */ React20.createElement(
              TransBtn_default,
              {
                className: ''.concat(itemPrefixCls, '-option-state'),
                customizeIcon: menuItemSelectedIcon,
                customizeIconProps: {
                  isSelected: selected
                }
              },
              selected ? '\u2713' : null
            )
        );
      }
    )
  );
};
var RefOptionList = /* @__PURE__ */ React20.forwardRef(OptionList);
RefOptionList.displayName = 'OptionList';
var OptionList_default = RefOptionList;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/utils/warningPropsUtil.js
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import toNodeArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import warning3, { noteOnce } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import * as React21 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function warningProps(props) {
  var mode = props.mode,
    options = props.options,
    children = props.children,
    backfill = props.backfill,
    allowClear = props.allowClear,
    placeholder = props.placeholder,
    getInputElement = props.getInputElement,
    showSearch = props.showSearch,
    onSearch = props.onSearch,
    defaultOpen = props.defaultOpen,
    autoFocus = props.autoFocus,
    labelInValue = props.labelInValue,
    value = props.value,
    inputValue = props.inputValue,
    optionLabelProp = props.optionLabelProp;
  var multiple = isMultiple(mode);
  var mergedShowSearch = showSearch !== void 0 ? showSearch : multiple || mode === 'combobox';
  var mergedOptions = options || convertChildrenToData(children);
  warning3(
    mode !== 'tags' ||
      mergedOptions.every(function(opt) {
        return !opt.disabled;
      }),
    'Please avoid setting option to disabled in tags mode since user can always type text as tag.'
  );
  if (mode === 'tags' || mode === 'combobox') {
    var hasNumberValue = mergedOptions.some(function(item) {
      if (item.options) {
        return item.options.some(function(opt) {
          return typeof ('value' in opt ? opt.value : opt.key) === 'number';
        });
      }
      return typeof ('value' in item ? item.value : item.key) === 'number';
    });
    warning3(!hasNumberValue, '`value` of Option should not use number type when `mode` is `tags` or `combobox`.');
  }
  warning3(
    mode !== 'combobox' || !optionLabelProp,
    '`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly.'
  );
  warning3(mode === 'combobox' || !backfill, '`backfill` only works with `combobox` mode.');
  warning3(mode === 'combobox' || !getInputElement, '`getInputElement` only work with `combobox` mode.');
  noteOnce(
    mode !== 'combobox' || !getInputElement || !allowClear || !placeholder,
    'Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`.'
  );
  if (onSearch && !mergedShowSearch && mode !== 'combobox' && mode !== 'tags') {
    warning3(false, '`onSearch` should work with `showSearch` instead of use alone.');
  }
  noteOnce(
    !defaultOpen || autoFocus,
    '`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed.'
  );
  if (value !== void 0 && value !== null) {
    var values = toArray(value);
    warning3(
      !labelInValue ||
        values.every(function(val) {
          return _typeof3(val) === 'object' && ('key' in val || 'value' in val);
        }),
      '`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`'
    );
    warning3(!multiple || Array.isArray(value), '`value` should be array when `mode` is `multiple` or `tags`');
  }
  if (children) {
    var invalidateChildType = null;
    toNodeArray(children).some(function(node) {
      if (!(/* @__PURE__ */ React21.isValidElement(node)) || !node.type) {
        return false;
      }
      var _ref = node,
        type = _ref.type;
      if (type.isSelectOption) {
        return false;
      }
      if (type.isSelectOptGroup) {
        var allChildrenValid = toNodeArray(node.props.children).every(function(subNode) {
          if (!(/* @__PURE__ */ React21.isValidElement(subNode)) || !node.type || subNode.type.isSelectOption) {
            return true;
          }
          invalidateChildType = subNode.type;
          return false;
        });
        if (allChildrenValid) {
          return false;
        }
        return true;
      }
      invalidateChildType = type;
      return true;
    });
    if (invalidateChildType) {
      warning3(
        false,
        '`children` should be `Select.Option` or `Select.OptGroup` instead of `'.concat(
          invalidateChildType.displayName || invalidateChildType.name || invalidateChildType,
          '`.'
        )
      );
    }
    warning3(inputValue === void 0, '`inputValue` is deprecated, please use `searchValue` instead.');
  }
}
function warningNullOptions(options, fieldNames) {
  if (options) {
    var recursiveOptions = function recursiveOptions2(optionsList) {
      var inGroup = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      for (var i = 0; i < optionsList.length; i++) {
        var option = optionsList[i];
        if (option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.value] === null) {
          warning3(false, '`value` in Select options should not be `null`.');
          return true;
        }
        if (
          !inGroup &&
          Array.isArray(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options]) &&
          recursiveOptions2(option[fieldNames === null || fieldNames === void 0 ? void 0 : fieldNames.options], true)
        ) {
          break;
        }
      }
    };
    recursiveOptions(options);
  }
}
var warningPropsUtil_default = warningProps;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/Select.js
var _excluded5 = [
  'id',
  'mode',
  'prefixCls',
  'backfill',
  'fieldNames',
  'inputValue',
  'searchValue',
  'onSearch',
  'autoClearSearchValue',
  'onSelect',
  'onDeselect',
  'dropdownMatchSelectWidth',
  'filterOption',
  'filterSort',
  'optionFilterProp',
  'optionLabelProp',
  'options',
  'children',
  'defaultActiveFirstOption',
  'menuItemSelectedIcon',
  'virtual',
  'listHeight',
  'listItemHeight',
  'value',
  'defaultValue',
  'labelInValue',
  'onChange'
];
var OMIT_DOM_PROPS = ['inputValue'];
function isRawValue(value) {
  return !value || _typeof4(value) !== 'object';
}
var Select = /* @__PURE__ */ React22.forwardRef(function(props, ref) {
  var id = props.id,
    mode = props.mode,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-select' : _props$prefixCls,
    backfill = props.backfill,
    fieldNames = props.fieldNames,
    inputValue = props.inputValue,
    searchValue = props.searchValue,
    onSearch = props.onSearch,
    _props$autoClearSearc = props.autoClearSearchValue,
    autoClearSearchValue = _props$autoClearSearc === void 0 ? true : _props$autoClearSearc,
    onSelect = props.onSelect,
    onDeselect = props.onDeselect,
    _props$dropdownMatchS = props.dropdownMatchSelectWidth,
    dropdownMatchSelectWidth = _props$dropdownMatchS === void 0 ? true : _props$dropdownMatchS,
    filterOption = props.filterOption,
    filterSort = props.filterSort,
    optionFilterProp = props.optionFilterProp,
    optionLabelProp = props.optionLabelProp,
    options = props.options,
    children = props.children,
    defaultActiveFirstOption = props.defaultActiveFirstOption,
    menuItemSelectedIcon = props.menuItemSelectedIcon,
    virtual = props.virtual,
    _props$listHeight = props.listHeight,
    listHeight = _props$listHeight === void 0 ? 200 : _props$listHeight,
    _props$listItemHeight = props.listItemHeight,
    listItemHeight = _props$listItemHeight === void 0 ? 20 : _props$listItemHeight,
    value = props.value,
    defaultValue = props.defaultValue,
    labelInValue = props.labelInValue,
    onChange = props.onChange,
    restProps = _objectWithoutProperties5(props, _excluded5);
  var mergedId = useId(id);
  var multiple = isMultiple(mode);
  var childrenAsData = !!(!options && children);
  var mergedFilterOption = React22.useMemo(
    function() {
      if (filterOption === void 0 && mode === 'combobox') {
        return false;
      }
      return filterOption;
    },
    [filterOption, mode]
  );
  var mergedFieldNames = React22.useMemo(
    function() {
      return fillFieldNames(fieldNames, childrenAsData);
    },
    [JSON.stringify(fieldNames), childrenAsData]
  );
  var _useMergedState = useMergedState2('', {
      value: searchValue !== void 0 ? searchValue : inputValue,
      postState: function postState(search) {
        return search || '';
      }
    }),
    _useMergedState2 = _slicedToArray8(_useMergedState, 2),
    mergedSearchValue = _useMergedState2[0],
    setSearchValue = _useMergedState2[1];
  var parsedOptions = useOptions(options, children, mergedFieldNames, optionFilterProp, optionLabelProp);
  var valueOptions = parsedOptions.valueOptions,
    labelOptions = parsedOptions.labelOptions,
    mergedOptions = parsedOptions.options;
  var convert2LabelValues = React22.useCallback(
    function(draftValues) {
      var valueList = toArray(draftValues);
      return valueList.map(function(val) {
        var rawValue;
        var rawLabel;
        var rawKey;
        var rawDisabled;
        var rawTitle;
        if (isRawValue(val)) {
          rawValue = val;
        } else {
          var _val$value;
          rawKey = val.key;
          rawLabel = val.label;
          rawValue = (_val$value = val.value) !== null && _val$value !== void 0 ? _val$value : rawKey;
        }
        var option = valueOptions.get(rawValue);
        if (option) {
          var _option$key;
          if (rawLabel === void 0)
            rawLabel =
              option === null || option === void 0 ? void 0 : option[optionLabelProp || mergedFieldNames.label];
          if (rawKey === void 0)
            rawKey =
              (_option$key = option === null || option === void 0 ? void 0 : option.key) !== null &&
              _option$key !== void 0
                ? _option$key
                : rawValue;
          rawDisabled = option === null || option === void 0 ? void 0 : option.disabled;
          rawTitle = option === null || option === void 0 ? void 0 : option.title;
          if (!optionLabelProp) {
            var optionLabel = option === null || option === void 0 ? void 0 : option[mergedFieldNames.label];
            if (optionLabel !== void 0 && optionLabel !== rawLabel) {
              warning4(false, '`label` of `value` is not same as `label` in Select options.');
            }
          }
        }
        return {
          label: rawLabel,
          value: rawValue,
          key: rawKey,
          disabled: rawDisabled,
          title: rawTitle
        };
      });
    },
    [mergedFieldNames, optionLabelProp, valueOptions]
  );
  var _useMergedState3 = useMergedState2(defaultValue, {
      value
    }),
    _useMergedState4 = _slicedToArray8(_useMergedState3, 2),
    internalValue = _useMergedState4[0],
    setInternalValue = _useMergedState4[1];
  var rawLabeledValues = React22.useMemo(
    function() {
      var _values$;
      var values = convert2LabelValues(internalValue);
      if (mode === 'combobox' && !((_values$ = values[0]) !== null && _values$ !== void 0 && _values$.value)) {
        return [];
      }
      return values;
    },
    [internalValue, convert2LabelValues, mode]
  );
  var _useCache = useCache_default(rawLabeledValues, valueOptions),
    _useCache2 = _slicedToArray8(_useCache, 2),
    mergedValues = _useCache2[0],
    getMixedOption = _useCache2[1];
  var displayValues = React22.useMemo(
    function() {
      if (!mode && mergedValues.length === 1) {
        var firstValue = mergedValues[0];
        if (firstValue.value === null && (firstValue.label === null || firstValue.label === void 0)) {
          return [];
        }
      }
      return mergedValues.map(function(item) {
        var _item$label;
        return _objectSpread8(
          _objectSpread8({}, item),
          {},
          {
            label: (_item$label = item.label) !== null && _item$label !== void 0 ? _item$label : item.value
          }
        );
      });
    },
    [mode, mergedValues]
  );
  var rawValues = React22.useMemo(
    function() {
      return new Set(
        mergedValues.map(function(val) {
          return val.value;
        })
      );
    },
    [mergedValues]
  );
  React22.useEffect(
    function() {
      if (mode === 'combobox') {
        var _mergedValues$;
        var strValue =
          (_mergedValues$ = mergedValues[0]) === null || _mergedValues$ === void 0 ? void 0 : _mergedValues$.value;
        setSearchValue(hasValue(strValue) ? String(strValue) : '');
      }
    },
    [mergedValues]
  );
  var createTagOption = useRefFunc(function(val, label) {
    var _ref;
    var mergedLabel = label !== null && label !== void 0 ? label : val;
    return (
      (_ref = {}),
      _defineProperty6(_ref, mergedFieldNames.value, val),
      _defineProperty6(_ref, mergedFieldNames.label, mergedLabel),
      _ref
    );
  });
  var filledTagOptions = React22.useMemo(
    function() {
      if (mode !== 'tags') {
        return mergedOptions;
      }
      var cloneOptions = _toConsumableArray4(mergedOptions);
      var existOptions = function existOptions2(val) {
        return valueOptions.has(val);
      };
      _toConsumableArray4(mergedValues)
        .sort(function(a, b) {
          return a.value < b.value ? -1 : 1;
        })
        .forEach(function(item) {
          var val = item.value;
          if (!existOptions(val)) {
            cloneOptions.push(createTagOption(val, item.label));
          }
        });
      return cloneOptions;
    },
    [createTagOption, mergedOptions, valueOptions, mergedValues, mode]
  );
  var filteredOptions = useFilterOptions_default(
    filledTagOptions,
    mergedFieldNames,
    mergedSearchValue,
    mergedFilterOption,
    optionFilterProp
  );
  var filledSearchOptions = React22.useMemo(
    function() {
      if (
        mode !== 'tags' ||
        !mergedSearchValue ||
        filteredOptions.some(function(item) {
          return item[optionFilterProp || 'value'] === mergedSearchValue;
        })
      ) {
        return filteredOptions;
      }
      return [createTagOption(mergedSearchValue)].concat(_toConsumableArray4(filteredOptions));
    },
    [createTagOption, optionFilterProp, mode, filteredOptions, mergedSearchValue]
  );
  var orderedFilteredOptions = React22.useMemo(
    function() {
      if (!filterSort) {
        return filledSearchOptions;
      }
      return _toConsumableArray4(filledSearchOptions).sort(function(a, b) {
        return filterSort(a, b);
      });
    },
    [filledSearchOptions, filterSort]
  );
  var displayOptions = React22.useMemo(
    function() {
      return flattenOptions(orderedFilteredOptions, {
        fieldNames: mergedFieldNames,
        childrenAsData
      });
    },
    [orderedFilteredOptions, mergedFieldNames, childrenAsData]
  );
  var triggerChange = function triggerChange2(values) {
    var labeledValues = convert2LabelValues(values);
    setInternalValue(labeledValues);
    if (
      onChange &&
      (labeledValues.length !== mergedValues.length ||
        labeledValues.some(function(newVal, index) {
          var _mergedValues$index;
          return (
            ((_mergedValues$index = mergedValues[index]) === null || _mergedValues$index === void 0
              ? void 0
              : _mergedValues$index.value) !== (newVal === null || newVal === void 0 ? void 0 : newVal.value)
          );
        }))
    ) {
      var returnValues = labelInValue
        ? labeledValues
        : labeledValues.map(function(v) {
            return v.value;
          });
      var returnOptions = labeledValues.map(function(v) {
        return injectPropsWithOption(getMixedOption(v.value));
      });
      onChange(multiple ? returnValues : returnValues[0], multiple ? returnOptions : returnOptions[0]);
    }
  };
  var _React$useState = React22.useState(null),
    _React$useState2 = _slicedToArray8(_React$useState, 2),
    activeValue = _React$useState2[0],
    setActiveValue = _React$useState2[1];
  var _React$useState3 = React22.useState(0),
    _React$useState4 = _slicedToArray8(_React$useState3, 2),
    accessibilityIndex = _React$useState4[0],
    setAccessibilityIndex = _React$useState4[1];
  var mergedDefaultActiveFirstOption =
    defaultActiveFirstOption !== void 0 ? defaultActiveFirstOption : mode !== 'combobox';
  var onActiveValue = React22.useCallback(
    function(active, index) {
      var _ref2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
        _ref2$source = _ref2.source,
        source = _ref2$source === void 0 ? 'keyboard' : _ref2$source;
      setAccessibilityIndex(index);
      if (backfill && mode === 'combobox' && active !== null && source === 'keyboard') {
        setActiveValue(String(active));
      }
    },
    [backfill, mode]
  );
  var triggerSelect = function triggerSelect2(val, selected, type) {
    var getSelectEnt = function getSelectEnt2() {
      var _option$key2;
      var option = getMixedOption(val);
      return [
        labelInValue
          ? {
              label: option === null || option === void 0 ? void 0 : option[mergedFieldNames.label],
              value: val,
              key:
                (_option$key2 = option === null || option === void 0 ? void 0 : option.key) !== null &&
                _option$key2 !== void 0
                  ? _option$key2
                  : val
            }
          : val,
        injectPropsWithOption(option)
      ];
    };
    if (selected && onSelect) {
      var _getSelectEnt = getSelectEnt(),
        _getSelectEnt2 = _slicedToArray8(_getSelectEnt, 2),
        wrappedValue = _getSelectEnt2[0],
        _option = _getSelectEnt2[1];
      onSelect(wrappedValue, _option);
    } else if (!selected && onDeselect && type !== 'clear') {
      var _getSelectEnt3 = getSelectEnt(),
        _getSelectEnt4 = _slicedToArray8(_getSelectEnt3, 2),
        _wrappedValue = _getSelectEnt4[0],
        _option2 = _getSelectEnt4[1];
      onDeselect(_wrappedValue, _option2);
    }
  };
  var onInternalSelect = useRefFunc(function(val, info) {
    var cloneValues;
    var mergedSelect = multiple ? info.selected : true;
    if (mergedSelect) {
      cloneValues = multiple ? [].concat(_toConsumableArray4(mergedValues), [val]) : [val];
    } else {
      cloneValues = mergedValues.filter(function(v) {
        return v.value !== val;
      });
    }
    triggerChange(cloneValues);
    triggerSelect(val, mergedSelect);
    if (mode === 'combobox') {
      setActiveValue('');
    } else if (!isMultiple || autoClearSearchValue) {
      setSearchValue('');
      setActiveValue('');
    }
  });
  var onDisplayValuesChange = function onDisplayValuesChange2(nextValues, info) {
    triggerChange(nextValues);
    var type = info.type,
      values = info.values;
    if (type === 'remove' || type === 'clear') {
      values.forEach(function(item) {
        triggerSelect(item.value, false, type);
      });
    }
  };
  var onInternalSearch = function onInternalSearch2(searchText, info) {
    setSearchValue(searchText);
    setActiveValue(null);
    if (info.source === 'submit') {
      var formatted = (searchText || '').trim();
      if (formatted) {
        var newRawValues = Array.from(new Set([].concat(_toConsumableArray4(rawValues), [formatted])));
        triggerChange(newRawValues);
        triggerSelect(formatted, true);
        setSearchValue('');
      }
      return;
    }
    if (info.source !== 'blur') {
      if (mode === 'combobox') {
        triggerChange(searchText);
      }
      onSearch === null || onSearch === void 0 ? void 0 : onSearch(searchText);
    }
  };
  var onInternalSearchSplit = function onInternalSearchSplit2(words) {
    var patchValues = words;
    if (mode !== 'tags') {
      patchValues = words
        .map(function(word) {
          var opt = labelOptions.get(word);
          return opt === null || opt === void 0 ? void 0 : opt.value;
        })
        .filter(function(val) {
          return val !== void 0;
        });
    }
    var newRawValues = Array.from(new Set([].concat(_toConsumableArray4(rawValues), _toConsumableArray4(patchValues))));
    triggerChange(newRawValues);
    newRawValues.forEach(function(newRawValue) {
      triggerSelect(newRawValue, true);
    });
  };
  var selectContext = React22.useMemo(
    function() {
      var realVirtual = virtual !== false && dropdownMatchSelectWidth !== false;
      return _objectSpread8(
        _objectSpread8({}, parsedOptions),
        {},
        {
          flattenOptions: displayOptions,
          onActiveValue,
          defaultActiveFirstOption: mergedDefaultActiveFirstOption,
          onSelect: onInternalSelect,
          menuItemSelectedIcon,
          rawValues,
          fieldNames: mergedFieldNames,
          virtual: realVirtual,
          listHeight,
          listItemHeight,
          childrenAsData
        }
      );
    },
    [
      parsedOptions,
      displayOptions,
      onActiveValue,
      mergedDefaultActiveFirstOption,
      onInternalSelect,
      menuItemSelectedIcon,
      rawValues,
      mergedFieldNames,
      virtual,
      dropdownMatchSelectWidth,
      listHeight,
      listItemHeight,
      childrenAsData
    ]
  );
  if (true) {
    warningPropsUtil_default(props);
    warningNullOptions(mergedOptions, mergedFieldNames);
  }
  return /* @__PURE__ */ React22.createElement(
    SelectContext_default.Provider,
    {
      value: selectContext
    },
    /* @__PURE__ */ React22.createElement(
      BaseSelect_default,
      _extends5({}, restProps, {
        id: mergedId,
        prefixCls,
        ref,
        omitDomProps: OMIT_DOM_PROPS,
        mode,
        displayValues,
        onDisplayValuesChange,
        searchValue: mergedSearchValue,
        onSearch: onInternalSearch,
        autoClearSearchValue,
        onSearchSplit: onInternalSearchSplit,
        dropdownMatchSelectWidth,
        OptionList: OptionList_default,
        emptyOptions: !displayOptions.length,
        activeValue,
        activeDescendantId: ''.concat(mergedId, '_list_').concat(accessibilityIndex)
      })
    )
  );
});
if (true) {
  Select.displayName = 'Select';
}
var TypedSelect = Select;
TypedSelect.Option = Option_default;
TypedSelect.OptGroup = OptGroup_default;
var Select_default = TypedSelect;

// esm-build-f253f9681af1941f6631de3cb51c88650ecbee90-18c15e8e/node_modules/rc-select/es/index.js
var es_default = Select_default;
export {
  BaseSelect_default as BaseSelect,
  OptGroup_default as OptGroup,
  Option_default as Option,
  es_default as default,
  useBaseProps
};
