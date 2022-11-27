/* esm.sh - esbuild bundle(rc-mentions@1.11.0) es2022 development */
// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/Mentions.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import React4, {
  useState as useState2,
  useRef,
  useEffect as useEffect2
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import TextArea from '/cdn/v99/rc-textarea@0.4.7/es2022/rc-textarea.development.js';

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/KeywordTrigger.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/DropdownMenu.js
import Menu, { MenuItem } from '/cdn/v99/rc-menu@9.7.2/es2022/rc-menu.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/MentionsContext.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var MentionsContext = /* @__PURE__ */ React.createContext(null);
var MentionsContext_default = MentionsContext;

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/DropdownMenu.js
function DropdownMenu(props) {
  var _React$useContext = React2.useContext(MentionsContext_default),
    notFoundContent = _React$useContext.notFoundContent,
    activeIndex = _React$useContext.activeIndex,
    setActiveIndex = _React$useContext.setActiveIndex,
    selectOption = _React$useContext.selectOption,
    onFocus = _React$useContext.onFocus,
    onBlur = _React$useContext.onBlur;
  var prefixCls = props.prefixCls,
    options = props.options;
  var activeOption = options[activeIndex] || {};
  return /* @__PURE__ */ React2.createElement(
    Menu,
    {
      prefixCls: ''.concat(prefixCls, '-menu'),
      activeKey: activeOption.key,
      onSelect: function onSelect(_ref) {
        var key = _ref.key;
        var option = options.find(function(_ref2) {
          var optionKey = _ref2.key;
          return optionKey === key;
        });
        selectOption(option);
      },
      onFocus,
      onBlur
    },
    options.map(function(option, index) {
      var key = option.key,
        disabled = option.disabled,
        children = option.children,
        className = option.className,
        style = option.style;
      return /* @__PURE__ */ React2.createElement(
        MenuItem,
        {
          key,
          disabled,
          className,
          style,
          onMouseEnter: function onMouseEnter() {
            setActiveIndex(index);
          }
        },
        children
      );
    }),
    !options.length &&
      /* @__PURE__ */ React2.createElement(
        MenuItem,
        {
          disabled: true
        },
        notFoundContent
      )
  );
}
var DropdownMenu_default = DropdownMenu;

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/KeywordTrigger.js
var BUILT_IN_PLACEMENTS = {
  bottomRight: {
    points: ['tl', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomLeft: {
    points: ['tr', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topRight: {
    points: ['bl', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['br', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  }
};
var KeywordTrigger = /* @__PURE__ */ (function(_React$Component) {
  _inherits(KeywordTrigger2, _React$Component);
  var _super = _createSuper(KeywordTrigger2);
  function KeywordTrigger2() {
    var _this;
    _classCallCheck(this, KeywordTrigger2);
    _this = _super.apply(this, arguments);
    _this.getDropdownPrefix = function() {
      return ''.concat(_this.props.prefixCls, '-dropdown');
    };
    _this.getDropdownElement = function() {
      var options = _this.props.options;
      return /* @__PURE__ */ React3.createElement(DropdownMenu_default, {
        prefixCls: _this.getDropdownPrefix(),
        options
      });
    };
    _this.getDropDownPlacement = function() {
      var _this$props = _this.props,
        placement = _this$props.placement,
        direction = _this$props.direction;
      var popupPlacement = 'topRight';
      if (direction === 'rtl') {
        popupPlacement = placement === 'top' ? 'topLeft' : 'bottomLeft';
      } else {
        popupPlacement = placement === 'top' ? 'topRight' : 'bottomRight';
      }
      return popupPlacement;
    };
    return _this;
  }
  _createClass(KeywordTrigger2, [
    {
      key: 'render',
      value: function render() {
        var _this$props2 = this.props,
          children = _this$props2.children,
          visible = _this$props2.visible,
          transitionName = _this$props2.transitionName,
          getPopupContainer = _this$props2.getPopupContainer;
        var popupElement = this.getDropdownElement();
        return /* @__PURE__ */ React3.createElement(
          Trigger,
          {
            prefixCls: this.getDropdownPrefix(),
            popupVisible: visible,
            popup: popupElement,
            popupPlacement: this.getDropDownPlacement(),
            popupTransitionName: transitionName,
            builtinPlacements: BUILT_IN_PLACEMENTS,
            getPopupContainer,
            popupClassName: this.props.dropdownClassName
          },
          children
        );
      }
    }
  ]);
  return KeywordTrigger2;
})(React3.Component);
var KeywordTrigger_default = KeywordTrigger;

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/Option.js
var Option = function Option2() {
  return null;
};
var Option_default = Option;

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/util.js
function getBeforeSelectionText(input) {
  var selectionStart = input.selectionStart;
  return input.value.slice(0, selectionStart);
}
function getLastMeasureIndex(text, prefix) {
  return prefix.reduce(
    function(lastMatch, prefixStr) {
      var lastIndex = text.lastIndexOf(prefixStr);
      if (lastIndex > lastMatch.location) {
        return {
          location: lastIndex,
          prefix: prefixStr
        };
      }
      return lastMatch;
    },
    {
      location: -1,
      prefix: ''
    }
  );
}
function lower(char) {
  return (char || '').toLowerCase();
}
function reduceText(text, targetText, split) {
  var firstChar = text[0];
  if (!firstChar || firstChar === split) {
    return text;
  }
  var restText = text;
  var targetTextLen = targetText.length;
  for (var i = 0; i < targetTextLen; i += 1) {
    if (lower(restText[i]) !== lower(targetText[i])) {
      restText = restText.slice(i);
      break;
    } else if (i === targetTextLen - 1) {
      restText = restText.slice(targetTextLen);
    }
  }
  return restText;
}
function replaceWithMeasure(text, measureConfig) {
  var measureLocation = measureConfig.measureLocation,
    prefix = measureConfig.prefix,
    targetText = measureConfig.targetText,
    selectionStart = measureConfig.selectionStart,
    split = measureConfig.split;
  var beforeMeasureText = text.slice(0, measureLocation);
  if (beforeMeasureText[beforeMeasureText.length - split.length] === split) {
    beforeMeasureText = beforeMeasureText.slice(0, beforeMeasureText.length - split.length);
  }
  if (beforeMeasureText) {
    beforeMeasureText = ''.concat(beforeMeasureText).concat(split);
  }
  var restText = reduceText(
    text.slice(selectionStart),
    targetText.slice(selectionStart - measureLocation - prefix.length),
    split
  );
  if (restText.slice(0, split.length) === split) {
    restText = restText.slice(split.length);
  }
  var connectedStartText = ''
    .concat(beforeMeasureText)
    .concat(prefix)
    .concat(targetText)
    .concat(split);
  return {
    text: ''.concat(connectedStartText).concat(restText),
    selectionLocation: connectedStartText.length
  };
}
function setInputSelection(input, location) {
  input.setSelectionRange(location, location);
  input.blur();
  input.focus();
}
function validateSearch(text, props) {
  var split = props.split;
  return !split || text.indexOf(split) === -1;
}
function filterOption(input, _ref) {
  var _ref$value = _ref.value,
    value = _ref$value === void 0 ? '' : _ref$value;
  var lowerCase = input.toLowerCase();
  return value.toLowerCase().indexOf(lowerCase) !== -1;
}

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/hooks/useEffectState.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import { useState, useCallback, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useEffectState() {
  var _useState = useState({
      id: 0,
      callback: null
    }),
    _useState2 = _slicedToArray(_useState, 2),
    effectId = _useState2[0],
    setEffectId = _useState2[1];
  var update = useCallback(function(callback) {
    setEffectId(function(_ref) {
      var id = _ref.id;
      return {
        id: id + 1,
        callback
      };
    });
  }, []);
  useEffect(
    function() {
      var _effectId$callback;
      (_effectId$callback = effectId.callback) === null || _effectId$callback === void 0
        ? void 0
        : _effectId$callback.call(effectId);
    },
    [effectId]
  );
  return update;
}

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/Mentions.js
var Mentions = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    prefix = props.prefix,
    split = props.split,
    notFoundContent = props.notFoundContent,
    value = props.value,
    defaultValue = props.defaultValue,
    children = props.children,
    open = props.open,
    validateSearch2 = props.validateSearch,
    filterOption2 = props.filterOption,
    onChange = props.onChange,
    onKeyDown = props.onKeyDown,
    onKeyUp = props.onKeyUp,
    onPressEnter = props.onPressEnter,
    onSearch = props.onSearch,
    onSelect = props.onSelect,
    onFocus = props.onFocus,
    onBlur = props.onBlur,
    transitionName = props.transitionName,
    placement = props.placement,
    direction = props.direction,
    getPopupContainer = props.getPopupContainer,
    dropdownClassName = props.dropdownClassName,
    restProps = _objectWithoutProperties(props, [
      'prefixCls',
      'className',
      'style',
      'prefix',
      'split',
      'notFoundContent',
      'value',
      'defaultValue',
      'children',
      'open',
      'validateSearch',
      'filterOption',
      'onChange',
      'onKeyDown',
      'onKeyUp',
      'onPressEnter',
      'onSearch',
      'onSelect',
      'onFocus',
      'onBlur',
      'transitionName',
      'placement',
      'direction',
      'getPopupContainer',
      'dropdownClassName'
    ]);
  var mergedPrefix = Array.isArray(prefix) ? prefix : [prefix];
  var mergedProps = _objectSpread(
    _objectSpread({}, props),
    {},
    {
      prefix: mergedPrefix
    }
  );
  var textareaRef = useRef(null);
  var measureRef = useRef(null);
  var getTextArea = function getTextArea2() {
    var _textareaRef$current, _textareaRef$current$;
    return (_textareaRef$current = textareaRef.current) === null || _textareaRef$current === void 0
      ? void 0
      : (_textareaRef$current$ = _textareaRef$current.resizableTextArea) === null || _textareaRef$current$ === void 0
      ? void 0
      : _textareaRef$current$.textArea;
  };
  React4.useImperativeHandle(ref, function() {
    var _textareaRef$current4, _textareaRef$current5;
    return {
      focus: function focus() {
        var _textareaRef$current2;
        return (_textareaRef$current2 = textareaRef.current) === null || _textareaRef$current2 === void 0
          ? void 0
          : _textareaRef$current2.focus();
      },
      blur: function blur() {
        var _textareaRef$current3;
        return (_textareaRef$current3 = textareaRef.current) === null || _textareaRef$current3 === void 0
          ? void 0
          : _textareaRef$current3.blur();
      },
      textarea:
        (_textareaRef$current4 = textareaRef.current) === null || _textareaRef$current4 === void 0
          ? void 0
          : (_textareaRef$current5 = _textareaRef$current4.resizableTextArea) === null ||
            _textareaRef$current5 === void 0
          ? void 0
          : _textareaRef$current5.textArea
    };
  });
  var _useState = useState2(false),
    _useState2 = _slicedToArray2(_useState, 2),
    measuring = _useState2[0],
    setMeasuring = _useState2[1];
  var _useState3 = useState2(''),
    _useState4 = _slicedToArray2(_useState3, 2),
    measureText = _useState4[0],
    setMeasureText = _useState4[1];
  var _useState5 = useState2(''),
    _useState6 = _slicedToArray2(_useState5, 2),
    measurePrefix = _useState6[0],
    setMeasurePrefix = _useState6[1];
  var _useState7 = useState2(0),
    _useState8 = _slicedToArray2(_useState7, 2),
    measureLocation = _useState8[0],
    setMeasureLocation = _useState8[1];
  var _useState9 = useState2(0),
    _useState10 = _slicedToArray2(_useState9, 2),
    activeIndex = _useState10[0],
    setActiveIndex = _useState10[1];
  var _useState11 = useState2(false),
    _useState12 = _slicedToArray2(_useState11, 2),
    isFocus = _useState12[0],
    setIsFocus = _useState12[1];
  var _useMergedState = useMergedState('', {
      defaultValue,
      value
    }),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setMergedValue = _useMergedState2[1];
  useEffect2(
    function() {
      if (measuring && measureRef.current) {
        measureRef.current.scrollTop = getTextArea().scrollTop;
      }
    },
    [measuring]
  );
  var _React$useMemo = React4.useMemo(
      function() {
        if (open) {
          if (true) {
            warning(false, '`open` of Mentions is only used for debug usage. Do not use in you production.');
          }
          for (var i = 0; i < mergedPrefix.length; i += 1) {
            var curPrefix = mergedPrefix[i];
            var index = mergedValue.lastIndexOf(curPrefix);
            if (index >= 0) {
              return [true, '', curPrefix, index];
            }
          }
        }
        return [measuring, measureText, measurePrefix, measureLocation];
      },
      [open, measuring, mergedPrefix, mergedValue, measureText, measurePrefix, measureLocation]
    ),
    _React$useMemo2 = _slicedToArray2(_React$useMemo, 4),
    mergedMeasuring = _React$useMemo2[0],
    mergedMeasureText = _React$useMemo2[1],
    mergedMeasurePrefix = _React$useMemo2[2],
    mergedMeasureLocation = _React$useMemo2[3];
  var getOptions = React4.useCallback(
    function(targetMeasureText) {
      var list = toArray(children)
        .map(function(_ref) {
          var optionProps = _ref.props,
            key = _ref.key;
          return _objectSpread(
            _objectSpread({}, optionProps),
            {},
            {
              key: key || optionProps.value
            }
          );
        })
        .filter(function(option) {
          if (filterOption2 === false) {
            return true;
          }
          return filterOption2(targetMeasureText, option);
        });
      return list;
    },
    [children, filterOption2]
  );
  var options = React4.useMemo(
    function() {
      return getOptions(mergedMeasureText);
    },
    [getOptions, mergedMeasureText]
  );
  var onSelectionEffect = useEffectState();
  var startMeasure = function startMeasure2(nextMeasureText, nextMeasurePrefix, nextMeasureLocation) {
    setMeasuring(true);
    setMeasureText(nextMeasureText);
    setMeasurePrefix(nextMeasurePrefix);
    setMeasureLocation(nextMeasureLocation);
    setActiveIndex(0);
  };
  var stopMeasure = function stopMeasure2(callback) {
    setMeasuring(false);
    setMeasureLocation(0);
    setMeasureText('');
    onSelectionEffect(callback);
  };
  var triggerChange = function triggerChange2(nextValue) {
    setMergedValue(nextValue);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
  };
  var onInternalChange = function onInternalChange2(_ref2) {
    var nextValue = _ref2.target.value;
    triggerChange(nextValue);
  };
  var selectOption = function selectOption2(option) {
    var _getTextArea;
    var _option$value = option.value,
      mentionValue = _option$value === void 0 ? '' : _option$value;
    var _replaceWithMeasure = replaceWithMeasure(mergedValue, {
        measureLocation: mergedMeasureLocation,
        targetText: mentionValue,
        prefix: mergedMeasurePrefix,
        selectionStart:
          (_getTextArea = getTextArea()) === null || _getTextArea === void 0 ? void 0 : _getTextArea.selectionStart,
        split
      }),
      text = _replaceWithMeasure.text,
      selectionLocation = _replaceWithMeasure.selectionLocation;
    triggerChange(text);
    stopMeasure(function() {
      setInputSelection(getTextArea(), selectionLocation);
    });
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(option, mergedMeasurePrefix);
  };
  var onInternalKeyDown = function onInternalKeyDown2(event) {
    var which = event.which;
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(event);
    if (!mergedMeasuring) {
      return;
    }
    if (which === KeyCode.UP || which === KeyCode.DOWN) {
      var optionLen = options.length;
      var offset = which === KeyCode.UP ? -1 : 1;
      var newActiveIndex = (activeIndex + offset + optionLen) % optionLen;
      setActiveIndex(newActiveIndex);
      event.preventDefault();
    } else if (which === KeyCode.ESC) {
      stopMeasure();
    } else if (which === KeyCode.ENTER) {
      event.preventDefault();
      if (!options.length) {
        stopMeasure();
        return;
      }
      var option = options[activeIndex];
      selectOption(option);
    }
  };
  var onInternalKeyUp = function onInternalKeyUp2(event) {
    var key = event.key,
      which = event.which;
    var target = event.target;
    var selectionStartText = getBeforeSelectionText(target);
    var _getLastMeasureIndex = getLastMeasureIndex(selectionStartText, mergedPrefix),
      measureIndex = _getLastMeasureIndex.location,
      nextMeasurePrefix = _getLastMeasureIndex.prefix;
    onKeyUp === null || onKeyUp === void 0 ? void 0 : onKeyUp(event);
    if ([KeyCode.ESC, KeyCode.UP, KeyCode.DOWN, KeyCode.ENTER].indexOf(which) !== -1) {
      return;
    }
    if (measureIndex !== -1) {
      var nextMeasureText = selectionStartText.slice(measureIndex + nextMeasurePrefix.length);
      var validateMeasure = validateSearch2(nextMeasureText, mergedProps);
      var matchOption = !!getOptions(nextMeasureText).length;
      if (validateMeasure) {
        if (
          key === nextMeasurePrefix ||
          key === 'Shift' ||
          mergedMeasuring ||
          (nextMeasureText !== mergedMeasureText && matchOption)
        ) {
          startMeasure(nextMeasureText, nextMeasurePrefix, measureIndex);
        }
      } else if (mergedMeasuring) {
        stopMeasure();
      }
      if (onSearch && validateMeasure) {
        onSearch(nextMeasureText, nextMeasurePrefix);
      }
    } else if (mergedMeasuring) {
      stopMeasure();
    }
  };
  var onInternalPressEnter = function onInternalPressEnter2(event) {
    if (!mergedMeasuring && onPressEnter) {
      onPressEnter(event);
    }
  };
  var focusRef = useRef();
  var onInternalFocus = function onInternalFocus2(event) {
    window.clearTimeout(focusRef.current);
    if (!isFocus && event && onFocus) {
      onFocus(event);
    }
    setIsFocus(true);
  };
  var onInternalBlur = function onInternalBlur2(event) {
    focusRef.current = window.setTimeout(function() {
      setIsFocus(false);
      stopMeasure();
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
    }, 0);
  };
  var onDropdownFocus = function onDropdownFocus2() {
    onInternalFocus();
  };
  var onDropdownBlur = function onDropdownBlur2() {
    onInternalBlur();
  };
  return /* @__PURE__ */ React4.createElement(
    'div',
    {
      className: classNames(prefixCls, className),
      style
    },
    /* @__PURE__ */ React4.createElement(
      TextArea,
      _extends(
        {
          ref: textareaRef,
          value: mergedValue
        },
        restProps,
        {
          onChange: onInternalChange,
          onKeyDown: onInternalKeyDown,
          onKeyUp: onInternalKeyUp,
          onPressEnter: onInternalPressEnter,
          onFocus: onInternalFocus,
          onBlur: onInternalBlur
        }
      )
    ),
    mergedMeasuring &&
      /* @__PURE__ */ React4.createElement(
        'div',
        {
          ref: measureRef,
          className: ''.concat(prefixCls, '-measure')
        },
        mergedValue.slice(0, mergedMeasureLocation),
        /* @__PURE__ */ React4.createElement(
          MentionsContext_default.Provider,
          {
            value: {
              notFoundContent,
              activeIndex,
              setActiveIndex,
              selectOption,
              onFocus: onDropdownFocus,
              onBlur: onDropdownBlur
            }
          },
          /* @__PURE__ */ React4.createElement(
            KeywordTrigger_default,
            {
              prefixCls,
              transitionName,
              placement,
              direction,
              options,
              visible: true,
              getPopupContainer,
              dropdownClassName
            },
            /* @__PURE__ */ React4.createElement('span', null, mergedMeasurePrefix)
          )
        ),
        mergedValue.slice(mergedMeasureLocation + mergedMeasurePrefix.length)
      )
  );
});
Mentions.defaultProps = {
  prefixCls: 'rc-mentions',
  prefix: '@',
  split: ' ',
  validateSearch,
  filterOption,
  notFoundContent: 'Not Found',
  rows: 1
};
Mentions.Option = Option_default;
var Mentions_default = Mentions;

// esm-build-73582e097bbab4836ca45fe076e30fc9931c247f-47528ec8/node_modules/rc-mentions/es/index.js
var es_default = Mentions_default;
export { es_default as default };
