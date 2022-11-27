/* esm.sh - esbuild bundle(rc-switch@4.0.0) es2022 development */
// esm-build-dbbab692350898cc04fb4168264c01ddf850d2d1-05e16156/node_modules/rc-switch/es/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/defineProperty.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
var _excluded = [
  'prefixCls',
  'className',
  'checked',
  'defaultChecked',
  'disabled',
  'loadingIcon',
  'checkedChildren',
  'unCheckedChildren',
  'onClick',
  'onChange',
  'onKeyDown'
];
var Switch = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
  var _classNames;
  var _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-switch' : _ref$prefixCls,
    className = _ref.className,
    checked = _ref.checked,
    defaultChecked = _ref.defaultChecked,
    disabled = _ref.disabled,
    loadingIcon = _ref.loadingIcon,
    checkedChildren = _ref.checkedChildren,
    unCheckedChildren = _ref.unCheckedChildren,
    onClick = _ref.onClick,
    onChange = _ref.onChange,
    onKeyDown = _ref.onKeyDown,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var _useMergedState = useMergedState(false, {
      value: checked,
      defaultValue: defaultChecked
    }),
    _useMergedState2 = _slicedToArray(_useMergedState, 2),
    innerChecked = _useMergedState2[0],
    setInnerChecked = _useMergedState2[1];
  function triggerChange(newChecked, event) {
    var mergedChecked = innerChecked;
    if (!disabled) {
      mergedChecked = newChecked;
      setInnerChecked(mergedChecked);
      onChange === null || onChange === void 0 ? void 0 : onChange(mergedChecked, event);
    }
    return mergedChecked;
  }
  function onInternalKeyDown(e) {
    if (e.which === KeyCode.LEFT) {
      triggerChange(false, e);
    } else if (e.which === KeyCode.RIGHT) {
      triggerChange(true, e);
    }
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
  }
  function onInternalClick(e) {
    var ret = triggerChange(!innerChecked, e);
    onClick === null || onClick === void 0 ? void 0 : onClick(ret, e);
  }
  var switchClassName = classNames(
    prefixCls,
    className,
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-checked'), innerChecked),
    _defineProperty(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
    _classNames)
  );
  return /* @__PURE__ */ React.createElement(
    'button',
    _extends({}, restProps, {
      type: 'button',
      role: 'switch',
      'aria-checked': innerChecked,
      disabled,
      className: switchClassName,
      ref,
      onKeyDown: onInternalKeyDown,
      onClick: onInternalClick
    }),
    loadingIcon,
    /* @__PURE__ */ React.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-inner')
      },
      /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-inner-checked')
        },
        checkedChildren
      ),
      /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-inner-unchecked')
        },
        unCheckedChildren
      )
    )
  );
});
Switch.displayName = 'Switch';
var es_default = Switch;
export { es_default as default };
