/* esm.sh - esbuild bundle(rc-checkbox@2.3.2) es2022 development */
// esm-build-ac71a6145643d70809391f27df62e981a0bdd62d-044c0747/node_modules/rc-checkbox/es/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React, { Component } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Checkbox = /* @__PURE__ */ (function(_Component) {
  _inherits(Checkbox2, _Component);
  var _super = _createSuper(Checkbox2);
  function Checkbox2(props) {
    var _this;
    _classCallCheck(this, Checkbox2);
    _this = _super.call(this, props);
    _this.handleChange = function(e) {
      var _this$props = _this.props,
        disabled = _this$props.disabled,
        onChange2 = _this$props.onChange;
      if (disabled) {
        return;
      }
      if (!('checked' in _this.props)) {
        _this.setState({
          checked: e.target.checked
        });
      }
      if (onChange2) {
        onChange2({
          target: _objectSpread(
            _objectSpread({}, _this.props),
            {},
            {
              checked: e.target.checked
            }
          ),
          stopPropagation: function stopPropagation() {
            e.stopPropagation();
          },
          preventDefault: function preventDefault() {
            e.preventDefault();
          },
          nativeEvent: e.nativeEvent
        });
      }
    };
    _this.saveInput = function(node) {
      _this.input = node;
    };
    var checked = 'checked' in props ? props.checked : props.defaultChecked;
    _this.state = {
      checked
    };
    return _this;
  }
  _createClass(
    Checkbox2,
    [
      {
        key: 'focus',
        value: function focus() {
          this.input.focus();
        }
      },
      {
        key: 'blur',
        value: function blur() {
          this.input.blur();
        }
      },
      {
        key: 'render',
        value: function render() {
          var _classNames;
          var _this$props2 = this.props,
            prefixCls = _this$props2.prefixCls,
            className = _this$props2.className,
            style = _this$props2.style,
            name = _this$props2.name,
            id = _this$props2.id,
            type = _this$props2.type,
            disabled = _this$props2.disabled,
            readOnly = _this$props2.readOnly,
            tabIndex = _this$props2.tabIndex,
            onClick = _this$props2.onClick,
            onFocus2 = _this$props2.onFocus,
            onBlur2 = _this$props2.onBlur,
            onKeyDown2 = _this$props2.onKeyDown,
            onKeyPress2 = _this$props2.onKeyPress,
            onKeyUp2 = _this$props2.onKeyUp,
            autoFocus = _this$props2.autoFocus,
            value = _this$props2.value,
            required = _this$props2.required,
            others = _objectWithoutProperties(_this$props2, [
              'prefixCls',
              'className',
              'style',
              'name',
              'id',
              'type',
              'disabled',
              'readOnly',
              'tabIndex',
              'onClick',
              'onFocus',
              'onBlur',
              'onKeyDown',
              'onKeyPress',
              'onKeyUp',
              'autoFocus',
              'value',
              'required'
            ]);
          var globalProps = Object.keys(others).reduce(function(prev, key) {
            if (key.substr(0, 5) === 'aria-' || key.substr(0, 5) === 'data-' || key === 'role') {
              prev[key] = others[key];
            }
            return prev;
          }, {});
          var checked = this.state.checked;
          var classString = classNames(
            prefixCls,
            className,
            ((_classNames = {}),
            _defineProperty(_classNames, ''.concat(prefixCls, '-checked'), checked),
            _defineProperty(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
            _classNames)
          );
          return /* @__PURE__ */ React.createElement(
            'span',
            {
              className: classString,
              style
            },
            /* @__PURE__ */ React.createElement(
              'input',
              _extends(
                {
                  name,
                  id,
                  type,
                  required,
                  readOnly,
                  disabled,
                  tabIndex,
                  className: ''.concat(prefixCls, '-input'),
                  checked: !!checked,
                  onClick,
                  onFocus: onFocus2,
                  onBlur: onBlur2,
                  onKeyUp: onKeyUp2,
                  onKeyDown: onKeyDown2,
                  onKeyPress: onKeyPress2,
                  onChange: this.handleChange,
                  autoFocus,
                  ref: this.saveInput,
                  value
                },
                globalProps
              )
            ),
            /* @__PURE__ */ React.createElement('span', {
              className: ''.concat(prefixCls, '-inner')
            })
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, state) {
          if ('checked' in props) {
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                checked: props.checked
              }
            );
          }
          return null;
        }
      }
    ]
  );
  return Checkbox2;
})(Component);
Checkbox.defaultProps = {
  prefixCls: 'rc-checkbox',
  className: '',
  style: {},
  type: 'checkbox',
  defaultChecked: false,
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {}
};
var es_default = Checkbox;
export { es_default as default };
