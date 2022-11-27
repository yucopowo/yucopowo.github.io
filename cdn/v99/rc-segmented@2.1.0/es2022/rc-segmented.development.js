/* esm.sh - esbuild bundle(rc-segmented@2.1.0) es2022 development */
// esm-build-e9cdd76a343b69492e0dca1df5388725c9372f95-306fe49c/node_modules/rc-segmented/es/index.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import { composeRef as composeRef2 } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';

// esm-build-e9cdd76a343b69492e0dca1df5388725c9372f95-306fe49c/node_modules/rc-segmented/es/MotionThumb.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import { composeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
var calcThumbStyle = function calcThumbStyle2(targetElement) {
  return targetElement
    ? {
        left: targetElement.offsetLeft,
        width: targetElement.clientWidth
      }
    : null;
};
var toPX = function toPX2(value) {
  return value !== void 0 ? ''.concat(value, 'px') : void 0;
};
function MotionThumb(props) {
  var prefixCls = props.prefixCls,
    containerRef = props.containerRef,
    value = props.value,
    getValueIndex = props.getValueIndex,
    motionName = props.motionName,
    onMotionStart = props.onMotionStart,
    onMotionEnd = props.onMotionEnd;
  var thumbRef = React.useRef(null);
  var _React$useState = React.useState(value),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    prevValue = _React$useState2[0],
    setPrevValue = _React$useState2[1];
  var findValueElement = function findValueElement2(val) {
    var _containerRef$current;
    var index = getValueIndex(val);
    var ele =
      (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
        ? void 0
        : _containerRef$current.querySelectorAll('.'.concat(prefixCls, '-item'))[index];
    return ele;
  };
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    prevStyle = _React$useState4[0],
    setPrevStyle = _React$useState4[1];
  var _React$useState5 = React.useState(null),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    nextStyle = _React$useState6[0],
    setNextStyle = _React$useState6[1];
  useLayoutEffect(
    function() {
      if (prevValue !== value) {
        var prev = findValueElement(prevValue);
        var next = findValueElement(value);
        var calcPrevStyle = calcThumbStyle(prev);
        var calcNextStyle = calcThumbStyle(next);
        setPrevValue(value);
        setPrevStyle(calcPrevStyle);
        setNextStyle(calcNextStyle);
        if (prev && next) {
          onMotionStart();
        } else {
          onMotionEnd();
        }
      }
    },
    [value]
  );
  var onAppearStart = function onAppearStart2() {
    return {
      transform: 'translateX(var(--thumb-start-left))',
      width: 'var(--thumb-start-width)'
    };
  };
  var onAppearActive = function onAppearActive2() {
    return {
      transform: 'translateX(var(--thumb-active-left))',
      width: 'var(--thumb-active-width)'
    };
  };
  var onAppearEnd = function onAppearEnd2() {
    setPrevStyle(null);
    setNextStyle(null);
    onMotionEnd();
  };
  if (!prevStyle || !nextStyle) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    CSSMotion,
    {
      visible: true,
      motionName,
      motionAppear: true,
      onAppearStart,
      onAppearActive,
      onAppearEnd
    },
    function(_ref, ref) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedStyle = _objectSpread(
        _objectSpread({}, motionStyle),
        {},
        {
          '--thumb-start-left': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.left),
          '--thumb-start-width': toPX(prevStyle === null || prevStyle === void 0 ? void 0 : prevStyle.width),
          '--thumb-active-left': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.left),
          '--thumb-active-width': toPX(nextStyle === null || nextStyle === void 0 ? void 0 : nextStyle.width)
        }
      );
      var motionProps = {
        ref: composeRef(thumbRef, ref),
        style: mergedStyle,
        className: classNames(''.concat(prefixCls, '-thumb'), motionClassName)
      };
      if (false) {
        motionProps['data-test-style'] = JSON.stringify(mergedStyle);
      }
      return /* @__PURE__ */ React.createElement('div', _objectSpread({}, motionProps));
    }
  );
}

// esm-build-e9cdd76a343b69492e0dca1df5388725c9372f95-306fe49c/node_modules/rc-segmented/es/index.js
var _excluded = [
  'prefixCls',
  'direction',
  'options',
  'disabled',
  'defaultValue',
  'value',
  'onChange',
  'className',
  'motionName'
];
function getValidTitle(option) {
  if (typeof option.title !== 'undefined') {
    return option.title;
  }
  if (_typeof(option.label) !== 'object') {
    var _option$label;
    return (_option$label = option.label) === null || _option$label === void 0 ? void 0 : _option$label.toString();
  }
}
function normalizeOptions(options) {
  return options.map(function(option) {
    if (_typeof(option) === 'object' && option !== null) {
      var validTitle = getValidTitle(option);
      return _objectSpread2(
        _objectSpread2({}, option),
        {},
        {
          title: validTitle
        }
      );
    }
    return {
      label: option === null || option === void 0 ? void 0 : option.toString(),
      title: option === null || option === void 0 ? void 0 : option.toString(),
      value: option
    };
  });
}
var InternalSegmentedOption = function InternalSegmentedOption2(_ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    disabled = _ref.disabled,
    checked = _ref.checked,
    label = _ref.label,
    title = _ref.title,
    value = _ref.value,
    onChange = _ref.onChange;
  var handleChange = function handleChange2(event) {
    if (disabled) {
      return;
    }
    onChange(event, value);
  };
  return /* @__PURE__ */ React2.createElement(
    'label',
    {
      className: classNames2(className, _defineProperty({}, ''.concat(prefixCls, '-item-disabled'), disabled))
    },
    /* @__PURE__ */ React2.createElement('input', {
      className: ''.concat(prefixCls, '-item-input'),
      type: 'radio',
      disabled,
      checked,
      onChange: handleChange
    }),
    /* @__PURE__ */ React2.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-item-label'),
        title
      },
      label
    )
  );
};
var Segmented = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  var _segmentedOptions$, _classNames2;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-segmented' : _props$prefixCls,
    direction = props.direction,
    options = props.options,
    disabled = props.disabled,
    defaultValue = props.defaultValue,
    value = props.value,
    onChange = props.onChange,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$motionName = props.motionName,
    motionName = _props$motionName === void 0 ? 'thumb-motion' : _props$motionName,
    restProps = _objectWithoutProperties(props, _excluded);
  var containerRef = React2.useRef(null);
  var mergedRef = React2.useMemo(
    function() {
      return composeRef2(containerRef, ref);
    },
    [containerRef, ref]
  );
  var segmentedOptions = React2.useMemo(
    function() {
      return normalizeOptions(options);
    },
    [options]
  );
  var _useMergedState = useMergedState(
      (_segmentedOptions$ = segmentedOptions[0]) === null || _segmentedOptions$ === void 0
        ? void 0
        : _segmentedOptions$.value,
      {
        value,
        defaultValue
      }
    ),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    rawValue = _useMergedState2[0],
    setRawValue = _useMergedState2[1];
  var _React$useState = React2.useState(false),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    thumbShow = _React$useState2[0],
    setThumbShow = _React$useState2[1];
  var handleChange = function handleChange2(event, val) {
    if (disabled) {
      return;
    }
    setRawValue(val);
    onChange === null || onChange === void 0 ? void 0 : onChange(val);
  };
  var divProps = omit(restProps, ['children']);
  return /* @__PURE__ */ React2.createElement(
    'div',
    _objectSpread2(
      _objectSpread2({}, divProps),
      {},
      {
        className: classNames2(
          prefixCls,
          ((_classNames2 = {}),
          _defineProperty(_classNames2, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
          _defineProperty(_classNames2, ''.concat(prefixCls, '-disabled'), disabled),
          _classNames2),
          className
        ),
        ref: mergedRef
      }
    ),
    /* @__PURE__ */ React2.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-group')
      },
      /* @__PURE__ */ React2.createElement(MotionThumb, {
        prefixCls,
        value: rawValue,
        containerRef,
        motionName: ''.concat(prefixCls, '-').concat(motionName),
        getValueIndex: function getValueIndex(val) {
          return segmentedOptions.findIndex(function(n) {
            return n.value === val;
          });
        },
        onMotionStart: function onMotionStart() {
          setThumbShow(true);
        },
        onMotionEnd: function onMotionEnd() {
          setThumbShow(false);
        }
      }),
      segmentedOptions.map(function(segmentedOption) {
        return /* @__PURE__ */ React2.createElement(
          InternalSegmentedOption,
          _objectSpread2(
            _objectSpread2(
              {
                key: segmentedOption.value,
                prefixCls,
                className: classNames2(
                  segmentedOption.className,
                  ''.concat(prefixCls, '-item'),
                  _defineProperty(
                    {},
                    ''.concat(prefixCls, '-item-selected'),
                    segmentedOption.value === rawValue && !thumbShow
                  )
                ),
                checked: segmentedOption.value === rawValue,
                onChange: handleChange
              },
              segmentedOption
            ),
            {},
            {
              disabled: !!disabled || !!segmentedOption.disabled
            }
          )
        );
      })
    )
  );
});
Segmented.displayName = 'Segmented';
Segmented.defaultProps = {
  options: []
};
var es_default = Segmented;
export { es_default as default };
