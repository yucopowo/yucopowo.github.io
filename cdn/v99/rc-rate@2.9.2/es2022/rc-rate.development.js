/* esm.sh - esbuild bundle(rc-rate@2.9.2) es2022 development */
// esm-build-2a005003f2297a561b677dcd98a3702993f99b8c-96a41de2/node_modules/rc-rate/es/Rate.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import findDOMNode from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/findDOMNode.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';

// esm-build-2a005003f2297a561b677dcd98a3702993f99b8c-96a41de2/node_modules/rc-rate/es/util.js
function getScroll(w) {
  var ret = w.pageXOffset;
  var method = 'scrollLeft';
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function getClientPosition(elem) {
  var x;
  var y;
  var doc = elem.ownerDocument;
  var body = doc.body;
  var docElem = doc && doc.documentElement;
  var box = elem.getBoundingClientRect();
  x = box.left;
  y = box.top;
  x -= docElem.clientLeft || body.clientLeft || 0;
  y -= docElem.clientTop || body.clientTop || 0;
  return {
    left: x,
    top: y
  };
}
function getOffsetLeft(el) {
  var pos = getClientPosition(el);
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  return pos.left;
}

// esm-build-2a005003f2297a561b677dcd98a3702993f99b8c-96a41de2/node_modules/rc-rate/es/Star.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var Star = /* @__PURE__ */ (function(_React$Component) {
  _inherits(Star2, _React$Component);
  var _super = _createSuper(Star2);
  function Star2() {
    var _this;
    _classCallCheck(this, Star2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.onHover = function(e) {
      var _this$props = _this.props,
        onHover = _this$props.onHover,
        index = _this$props.index;
      onHover(e, index);
    };
    _this.onClick = function(e) {
      var _this$props2 = _this.props,
        onClick = _this$props2.onClick,
        index = _this$props2.index;
      onClick(e, index);
    };
    _this.onKeyDown = function(e) {
      var _this$props3 = _this.props,
        onClick = _this$props3.onClick,
        index = _this$props3.index;
      if (e.keyCode === 13) {
        onClick(e, index);
      }
    };
    return _this;
  }
  _createClass(Star2, [
    {
      key: 'getClassName',
      value: function getClassName() {
        var _this$props4 = this.props,
          prefixCls = _this$props4.prefixCls,
          index = _this$props4.index,
          value = _this$props4.value,
          allowHalf = _this$props4.allowHalf,
          focused = _this$props4.focused;
        var starValue = index + 1;
        var className = prefixCls;
        if (value === 0 && index === 0 && focused) {
          className += ' '.concat(prefixCls, '-focused');
        } else if (allowHalf && value + 0.5 >= starValue && value < starValue) {
          className += ' '.concat(prefixCls, '-half ').concat(prefixCls, '-active');
          if (focused) {
            className += ' '.concat(prefixCls, '-focused');
          }
        } else {
          className += starValue <= value ? ' '.concat(prefixCls, '-full') : ' '.concat(prefixCls, '-zero');
          if (starValue === value && focused) {
            className += ' '.concat(prefixCls, '-focused');
          }
        }
        return className;
      }
    },
    {
      key: 'render',
      value: function render() {
        var onHover = this.onHover,
          onClick = this.onClick,
          onKeyDown = this.onKeyDown;
        var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          prefixCls = _this$props5.prefixCls,
          character = _this$props5.character,
          characterRender = _this$props5.characterRender,
          index = _this$props5.index,
          count = _this$props5.count,
          value = _this$props5.value;
        var characterNode = typeof character === 'function' ? character(this.props) : character;
        var start = /* @__PURE__ */ React.createElement(
          'li',
          {
            className: this.getClassName()
          },
          /* @__PURE__ */ React.createElement(
            'div',
            {
              onClick: disabled ? null : onClick,
              onKeyDown: disabled ? null : onKeyDown,
              onMouseMove: disabled ? null : onHover,
              role: 'radio',
              'aria-checked': value > index ? 'true' : 'false',
              'aria-posinset': index + 1,
              'aria-setsize': count,
              tabIndex: disabled ? -1 : 0
            },
            /* @__PURE__ */ React.createElement(
              'div',
              {
                className: ''.concat(prefixCls, '-first')
              },
              characterNode
            ),
            /* @__PURE__ */ React.createElement(
              'div',
              {
                className: ''.concat(prefixCls, '-second')
              },
              characterNode
            )
          )
        );
        if (characterRender) {
          start = characterRender(start, this.props);
        }
        return start;
      }
    }
  ]);
  return Star2;
})(React.Component);

// esm-build-2a005003f2297a561b677dcd98a3702993f99b8c-96a41de2/node_modules/rc-rate/es/Rate.js
function noop() {}
var Rate = /* @__PURE__ */ (function(_React$Component) {
  _inherits2(Rate2, _React$Component);
  var _super = _createSuper2(Rate2);
  function Rate2(props) {
    var _this;
    _classCallCheck2(this, Rate2);
    _this = _super.call(this, props);
    _this.stars = void 0;
    _this.rate = void 0;
    _this.onHover = function(event, index) {
      var onHoverChange = _this.props.onHoverChange;
      var hoverValue = _this.getStarValue(index, event.pageX);
      var cleanedValue = _this.state.cleanedValue;
      if (hoverValue !== cleanedValue) {
        _this.setState({
          hoverValue,
          cleanedValue: null
        });
      }
      onHoverChange(hoverValue);
    };
    _this.onMouseLeave = function() {
      var onHoverChange = _this.props.onHoverChange;
      _this.setState({
        hoverValue: void 0,
        cleanedValue: null
      });
      onHoverChange(void 0);
    };
    _this.onClick = function(event, index) {
      var allowClear = _this.props.allowClear;
      var value = _this.state.value;
      var newValue = _this.getStarValue(index, event.pageX);
      var isReset = false;
      if (allowClear) {
        isReset = newValue === value;
      }
      _this.onMouseLeave();
      _this.changeValue(isReset ? 0 : newValue);
      _this.setState({
        cleanedValue: isReset ? newValue : null
      });
    };
    _this.onFocus = function() {
      var onFocus = _this.props.onFocus;
      _this.setState({
        focused: true
      });
      if (onFocus) {
        onFocus();
      }
    };
    _this.onBlur = function() {
      var onBlur = _this.props.onBlur;
      _this.setState({
        focused: false
      });
      if (onBlur) {
        onBlur();
      }
    };
    _this.onKeyDown = function(event) {
      var keyCode = event.keyCode;
      var _this$props = _this.props,
        count = _this$props.count,
        allowHalf = _this$props.allowHalf,
        onKeyDown = _this$props.onKeyDown,
        direction = _this$props.direction;
      var reverse = direction === 'rtl';
      var value = _this.state.value;
      if (keyCode === KeyCode.RIGHT && value < count && !reverse) {
        if (allowHalf) {
          value += 0.5;
        } else {
          value += 1;
        }
        _this.changeValue(value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && value > 0 && !reverse) {
        if (allowHalf) {
          value -= 0.5;
        } else {
          value -= 1;
        }
        _this.changeValue(value);
        event.preventDefault();
      } else if (keyCode === KeyCode.RIGHT && value > 0 && reverse) {
        if (allowHalf) {
          value -= 0.5;
        } else {
          value -= 1;
        }
        _this.changeValue(value);
        event.preventDefault();
      } else if (keyCode === KeyCode.LEFT && value < count && reverse) {
        if (allowHalf) {
          value += 0.5;
        } else {
          value += 1;
        }
        _this.changeValue(value);
        event.preventDefault();
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    };
    _this.saveRef = function(index) {
      return function(node) {
        _this.stars[index] = node;
      };
    };
    _this.saveRate = function(node) {
      _this.rate = node;
    };
    var _value = props.value;
    if (_value === void 0) {
      _value = props.defaultValue;
    }
    _this.stars = {};
    _this.state = {
      value: _value,
      focused: false,
      cleanedValue: null
    };
    return _this;
  }
  _createClass2(
    Rate2,
    [
      {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this$props2 = this.props,
            autoFocus = _this$props2.autoFocus,
            disabled = _this$props2.disabled;
          if (autoFocus && !disabled) {
            this.focus();
          }
        }
      },
      {
        key: 'getStarDOM',
        value: function getStarDOM(index) {
          return findDOMNode(this.stars[index]);
        }
      },
      {
        key: 'getStarValue',
        value: function getStarValue(index, x) {
          var _this$props3 = this.props,
            allowHalf = _this$props3.allowHalf,
            direction = _this$props3.direction;
          var reverse = direction === 'rtl';
          var value = index + 1;
          if (allowHalf) {
            var starEle = this.getStarDOM(index);
            var leftDis = getOffsetLeft(starEle);
            var width = starEle.clientWidth;
            if (reverse && x - leftDis > width / 2) {
              value -= 0.5;
            } else if (!reverse && x - leftDis < width / 2) {
              value -= 0.5;
            }
          }
          return value;
        }
      },
      {
        key: 'focus',
        value: function focus() {
          var disabled = this.props.disabled;
          if (!disabled) {
            this.rate.focus();
          }
        }
      },
      {
        key: 'blur',
        value: function blur() {
          var disabled = this.props.disabled;
          if (!disabled) {
            this.rate.blur();
          }
        }
      },
      {
        key: 'changeValue',
        value: function changeValue(value) {
          var onChange = this.props.onChange;
          if (!('value' in this.props)) {
            this.setState({
              value
            });
          }
          onChange(value);
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this$props4 = this.props,
            count = _this$props4.count,
            allowHalf = _this$props4.allowHalf,
            style = _this$props4.style,
            prefixCls = _this$props4.prefixCls,
            disabled = _this$props4.disabled,
            className = _this$props4.className,
            character = _this$props4.character,
            characterRender = _this$props4.characterRender,
            tabIndex = _this$props4.tabIndex,
            direction = _this$props4.direction;
          var _this$state = this.state,
            value = _this$state.value,
            hoverValue = _this$state.hoverValue,
            focused = _this$state.focused;
          var stars = [];
          var disabledClass = disabled ? ''.concat(prefixCls, '-disabled') : '';
          for (var index = 0; index < count; index += 1) {
            stars.push(
              /* @__PURE__ */ React2.createElement(Star, {
                ref: this.saveRef(index),
                index,
                count,
                disabled,
                prefixCls: ''.concat(prefixCls, '-star'),
                allowHalf,
                value: hoverValue === void 0 ? value : hoverValue,
                onClick: this.onClick,
                onHover: this.onHover,
                key: index,
                character,
                characterRender,
                focused
              })
            );
          }
          var rateClassName = classNames(
            prefixCls,
            disabledClass,
            className,
            _defineProperty({}, ''.concat(prefixCls, '-rtl'), direction === 'rtl')
          );
          return /* @__PURE__ */ React2.createElement(
            'ul',
            {
              className: rateClassName,
              style,
              onMouseLeave: disabled ? null : this.onMouseLeave,
              tabIndex: disabled ? -1 : tabIndex,
              onFocus: disabled ? null : this.onFocus,
              onBlur: disabled ? null : this.onBlur,
              onKeyDown: disabled ? null : this.onKeyDown,
              ref: this.saveRate,
              role: 'radiogroup'
            },
            stars
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps, state) {
          if ('value' in nextProps && nextProps.value !== void 0) {
            return _objectSpread(
              _objectSpread({}, state),
              {},
              {
                value: nextProps.value
              }
            );
          }
          return state;
        }
      }
    ]
  );
  return Rate2;
})(React2.Component);
Rate.defaultProps = {
  defaultValue: 0,
  count: 5,
  allowHalf: false,
  allowClear: true,
  style: {},
  prefixCls: 'rc-rate',
  onChange: noop,
  character: '\u2605',
  onHoverChange: noop,
  tabIndex: 0,
  direction: 'ltr'
};
var Rate_default = Rate;

// esm-build-2a005003f2297a561b677dcd98a3702993f99b8c-96a41de2/node_modules/rc-rate/es/index.js
var es_default = Rate_default;
export { es_default as default };
