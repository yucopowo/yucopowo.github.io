/* esm.sh - esbuild bundle(rc-collapse@3.4.2) es2022 development */
// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/Collapse.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import shallowEqual2 from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';

// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/Panel.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';

// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/PanelContent.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classnames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var PanelContent = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _classnames;
  var prefixCls = props.prefixCls,
    forceRender = props.forceRender,
    className = props.className,
    style = props.style,
    children = props.children,
    isActive = props.isActive,
    role = props.role;
  var _React$useState = React.useState(isActive || forceRender),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    rendered = _React$useState2[0],
    setRendered = _React$useState2[1];
  React.useEffect(
    function() {
      if (forceRender || isActive) {
        setRendered(true);
      }
    },
    [forceRender, isActive]
  );
  if (!rendered) {
    return null;
  }
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      ref,
      className: classnames(
        ''.concat(prefixCls, '-content'),
        ((_classnames = {}),
        _defineProperty(_classnames, ''.concat(prefixCls, '-content-active'), isActive),
        _defineProperty(_classnames, ''.concat(prefixCls, '-content-inactive'), !isActive),
        _classnames),
        className
      ),
      style,
      role
    },
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content-box')
      },
      children
    )
  );
});
PanelContent.displayName = 'PanelContent';
var PanelContent_default = PanelContent;

// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/Panel.js
var _excluded = [
  'className',
  'id',
  'style',
  'prefixCls',
  'headerClass',
  'children',
  'isActive',
  'destroyInactivePanel',
  'accordion',
  'forceRender',
  'openMotion',
  'extra',
  'collapsible'
];
var CollapsePanel = /* @__PURE__ */ (function(_React$Component) {
  _inherits(CollapsePanel2, _React$Component);
  var _super = _createSuper(CollapsePanel2);
  function CollapsePanel2() {
    var _this;
    _classCallCheck(this, CollapsePanel2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.onItemClick = function() {
      var _this$props = _this.props,
        onItemClick2 = _this$props.onItemClick,
        panelKey = _this$props.panelKey;
      if (typeof onItemClick2 === 'function') {
        onItemClick2(panelKey);
      }
    };
    _this.handleKeyPress = function(e) {
      if (e.key === 'Enter' || e.keyCode === 13 || e.which === 13) {
        _this.onItemClick();
      }
    };
    _this.renderIcon = function() {
      var _this$props2 = _this.props,
        showArrow = _this$props2.showArrow,
        expandIcon = _this$props2.expandIcon,
        prefixCls = _this$props2.prefixCls,
        collapsible = _this$props2.collapsible;
      if (!showArrow) {
        return null;
      }
      var iconNode =
        typeof expandIcon === 'function'
          ? expandIcon(_this.props)
          : /* @__PURE__ */ React2.createElement('i', {
              className: 'arrow'
            });
      return (
        iconNode &&
        /* @__PURE__ */ React2.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-expand-icon'),
            onClick: collapsible === 'header' || collapsible === 'icon' ? _this.onItemClick : null
          },
          iconNode
        )
      );
    };
    _this.renderTitle = function() {
      var _this$props3 = _this.props,
        header = _this$props3.header,
        prefixCls = _this$props3.prefixCls,
        collapsible = _this$props3.collapsible;
      return /* @__PURE__ */ React2.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-header-text'),
          onClick: collapsible === 'header' ? _this.onItemClick : null
        },
        header
      );
    };
    return _this;
  }
  _createClass(CollapsePanel2, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate(nextProps) {
        return !shallowEqual(this.props, nextProps);
      }
    },
    {
      key: 'render',
      value: function render() {
        var _classNames, _classNames2;
        var _this$props4 = this.props,
          className = _this$props4.className,
          id = _this$props4.id,
          style = _this$props4.style,
          prefixCls = _this$props4.prefixCls,
          headerClass = _this$props4.headerClass,
          children = _this$props4.children,
          isActive = _this$props4.isActive,
          destroyInactivePanel = _this$props4.destroyInactivePanel,
          accordion = _this$props4.accordion,
          forceRender = _this$props4.forceRender,
          openMotion = _this$props4.openMotion,
          extra = _this$props4.extra,
          collapsible = _this$props4.collapsible,
          rest = _objectWithoutProperties(_this$props4, _excluded);
        var disabled = collapsible === 'disabled';
        var collapsibleHeader = collapsible === 'header';
        var collapsibleIcon = collapsible === 'icon';
        var itemCls = classNames(
          ((_classNames = {}),
          _defineProperty2(_classNames, ''.concat(prefixCls, '-item'), true),
          _defineProperty2(_classNames, ''.concat(prefixCls, '-item-active'), isActive),
          _defineProperty2(_classNames, ''.concat(prefixCls, '-item-disabled'), disabled),
          _classNames),
          className
        );
        var headerCls = classNames(
          ''.concat(prefixCls, '-header'),
          ((_classNames2 = {}),
          _defineProperty2(_classNames2, headerClass, headerClass),
          _defineProperty2(_classNames2, ''.concat(prefixCls, '-header-collapsible-only'), collapsibleHeader),
          _defineProperty2(_classNames2, ''.concat(prefixCls, '-icon-collapsible-only'), collapsibleIcon),
          _classNames2)
        );
        var headerProps = {
          className: headerCls,
          'aria-expanded': isActive,
          'aria-disabled': disabled,
          onKeyPress: this.handleKeyPress
        };
        if (!collapsibleHeader && !collapsibleIcon) {
          headerProps.onClick = this.onItemClick;
          headerProps.role = accordion ? 'tab' : 'button';
          headerProps.tabIndex = disabled ? -1 : 0;
        }
        var ifExtraExist = extra !== null && extra !== void 0 && typeof extra !== 'boolean';
        delete rest.header;
        delete rest.panelKey;
        delete rest.onItemClick;
        delete rest.showArrow;
        delete rest.expandIcon;
        return /* @__PURE__ */ React2.createElement(
          'div',
          _extends({}, rest, {
            className: itemCls,
            style,
            id
          }),
          /* @__PURE__ */ React2.createElement(
            'div',
            headerProps,
            this.renderIcon(),
            this.renderTitle(),
            ifExtraExist &&
              /* @__PURE__ */ React2.createElement(
                'div',
                {
                  className: ''.concat(prefixCls, '-extra')
                },
                extra
              )
          ),
          /* @__PURE__ */ React2.createElement(
            CSSMotion,
            _extends(
              {
                visible: isActive,
                leavedClassName: ''.concat(prefixCls, '-content-hidden')
              },
              openMotion,
              {
                forceRender,
                removeOnLeave: destroyInactivePanel
              }
            ),
            function(_ref, ref) {
              var motionClassName = _ref.className,
                motionStyle = _ref.style;
              return /* @__PURE__ */ React2.createElement(
                PanelContent_default,
                {
                  ref,
                  prefixCls,
                  className: motionClassName,
                  style: motionStyle,
                  isActive,
                  forceRender,
                  role: accordion ? 'tabpanel' : null
                },
                children
              );
            }
          )
        );
      }
    }
  ]);
  return CollapsePanel2;
})(React2.Component);
CollapsePanel.defaultProps = {
  showArrow: true,
  isActive: false,
  onItemClick: function onItemClick() {},
  headerClass: '',
  forceRender: false
};
var Panel_default = CollapsePanel;

// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/Collapse.js
function getActiveKeysArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    var activeKeyType = _typeof(currentActiveKey);
    currentActiveKey = activeKeyType === 'number' || activeKeyType === 'string' ? [currentActiveKey] : [];
  }
  return currentActiveKey.map(function(key) {
    return String(key);
  });
}
var Collapse = /* @__PURE__ */ (function(_React$Component) {
  _inherits2(Collapse2, _React$Component);
  var _super = _createSuper2(Collapse2);
  function Collapse2(_props) {
    var _this;
    _classCallCheck2(this, Collapse2);
    _this = _super.call(this, _props);
    _this.onClickItem = function(key) {
      var activeKey = _this.state.activeKey;
      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = _toConsumableArray(activeKey);
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      _this.setActiveKey(activeKey);
    };
    _this.getNewChild = function(child, index) {
      if (!child) return null;
      var activeKey = _this.state.activeKey;
      var _this$props = _this.props,
        prefixCls = _this$props.prefixCls,
        openMotion = _this$props.openMotion,
        accordion = _this$props.accordion,
        rootDestroyInactivePanel = _this$props.destroyInactivePanel,
        expandIcon = _this$props.expandIcon,
        collapsible = _this$props.collapsible;
      var key = child.key || String(index);
      var _child$props = child.props,
        header = _child$props.header,
        headerClass = _child$props.headerClass,
        destroyInactivePanel = _child$props.destroyInactivePanel,
        childCollapsible = _child$props.collapsible;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }
      var mergeCollapsible = childCollapsible !== null && childCollapsible !== void 0 ? childCollapsible : collapsible;
      var props = {
        key,
        panelKey: key,
        header,
        headerClass,
        isActive,
        prefixCls,
        destroyInactivePanel:
          destroyInactivePanel !== null && destroyInactivePanel !== void 0
            ? destroyInactivePanel
            : rootDestroyInactivePanel,
        openMotion,
        accordion,
        children: child.props.children,
        onItemClick: mergeCollapsible === 'disabled' ? null : _this.onClickItem,
        expandIcon,
        collapsible: mergeCollapsible
      };
      if (typeof child.type === 'string') {
        return child;
      }
      Object.keys(props).forEach(function(propName) {
        if (typeof props[propName] === 'undefined') {
          delete props[propName];
        }
      });
      return /* @__PURE__ */ React3.cloneElement(child, props);
    };
    _this.getItems = function() {
      var children = _this.props.children;
      return toArray(children).map(_this.getNewChild);
    };
    _this.setActiveKey = function(activeKey) {
      if (!('activeKey' in _this.props)) {
        _this.setState({
          activeKey
        });
      }
      _this.props.onChange(_this.props.accordion ? activeKey[0] : activeKey);
    };
    var _activeKey = _props.activeKey,
      defaultActiveKey = _props.defaultActiveKey;
    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in _props) {
      currentActiveKey = _activeKey;
    }
    _this.state = {
      activeKey: getActiveKeysArray(currentActiveKey)
    };
    return _this;
  }
  _createClass2(
    Collapse2,
    [
      {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
          return !shallowEqual2(this.props, nextProps) || !shallowEqual2(this.state, nextState);
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
            accordion = _this$props2.accordion;
          var collapseClassName = classNames2(
            ((_classNames = {}),
            _defineProperty3(_classNames, prefixCls, true),
            _defineProperty3(_classNames, className, !!className),
            _classNames)
          );
          return /* @__PURE__ */ React3.createElement(
            'div',
            {
              className: collapseClassName,
              style,
              role: accordion ? 'tablist' : null
            },
            this.getItems()
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(nextProps) {
          var newState = {};
          if ('activeKey' in nextProps) {
            newState.activeKey = getActiveKeysArray(nextProps.activeKey);
          }
          return newState;
        }
      }
    ]
  );
  return Collapse2;
})(React3.Component);
Collapse.defaultProps = {
  prefixCls: 'rc-collapse',
  onChange: function onChange() {},
  accordion: false,
  destroyInactivePanel: false
};
Collapse.Panel = Panel_default;
var Collapse_default = Collapse;

// esm-build-5033d8fae9acabd71e7a508d04067791c920cba9-f4737fd5/node_modules/rc-collapse/es/index.js
var es_default = Collapse_default;
var Panel = Collapse_default.Panel;
export { Panel, es_default as default };
