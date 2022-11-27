/* esm.sh - esbuild bundle(rc-menu@9.7.2) es2022 development */
// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/Menu.js
import _extends6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React18 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import shallowEqual2 from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import useMergedState2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
import warning5 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import Overflow3 from '/cdn/v99/rc-overflow@1.2.8/es2022/rc-overflow.development.js';

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/MenuItem.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Overflow from '/cdn/v99/rc-overflow@1.2.8/es2022/rc-overflow.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import omit from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/context/MenuContext.js
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useMemo from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
var _excluded = ['children', 'locked'];
var MenuContext = /* @__PURE__ */ React.createContext(null);
function mergeProps(origin, target) {
  var clone = _objectSpread({}, origin);
  Object.keys(target).forEach(function(key) {
    var value = target[key];
    if (value !== void 0) {
      clone[key] = value;
    }
  });
  return clone;
}
function InheritableContextProvider(_ref) {
  var children = _ref.children,
    locked = _ref.locked,
    restProps = _objectWithoutProperties(_ref, _excluded);
  var context = React.useContext(MenuContext);
  var inheritableContext = useMemo(
    function() {
      return mergeProps(context, restProps);
    },
    [context, restProps],
    function(prev, next) {
      return !locked && (prev[0] !== next[0] || !shallowEqual(prev[1], next[1]));
    }
  );
  return /* @__PURE__ */ React.createElement(
    MenuContext.Provider,
    {
      value: inheritableContext
    },
    children
  );
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useActive.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useActive(eventKey, disabled, onMouseEnter, onMouseLeave) {
  var _React$useContext = React2.useContext(MenuContext),
    activeKey = _React$useContext.activeKey,
    onActive = _React$useContext.onActive,
    onInactive = _React$useContext.onInactive;
  var ret = {
    active: activeKey === eventKey
  };
  if (!disabled) {
    ret.onMouseEnter = function(domEvent) {
      onMouseEnter === null || onMouseEnter === void 0
        ? void 0
        : onMouseEnter({
            key: eventKey,
            domEvent
          });
      onActive(eventKey);
    };
    ret.onMouseLeave = function(domEvent) {
      onMouseLeave === null || onMouseLeave === void 0
        ? void 0
        : onMouseLeave({
            key: eventKey,
            domEvent
          });
      onInactive(eventKey);
    };
  }
  return ret;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/utils/warnUtil.js
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var _excluded2 = ['item'];
function warnItemProp(_ref) {
  var item = _ref.item,
    restInfo = _objectWithoutProperties2(_ref, _excluded2);
  Object.defineProperty(restInfo, 'item', {
    get: function get() {
      warning(
        false,
        '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.'
      );
      return item;
    }
  });
  return restInfo;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/Icon.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function Icon(_ref) {
  var icon = _ref.icon,
    props = _ref.props,
    children = _ref.children;
  var iconNode;
  if (typeof icon === 'function') {
    iconNode = /* @__PURE__ */ React3.createElement(icon, _objectSpread2({}, props));
  } else {
    iconNode = icon;
  }
  return iconNode || children || null;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useDirectionStyle.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useDirectionStyle(level) {
  var _React$useContext = React4.useContext(MenuContext),
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl,
    inlineIndent = _React$useContext.inlineIndent;
  if (mode !== 'inline') {
    return null;
  }
  var len = level;
  return rtl
    ? {
        paddingRight: len * inlineIndent
      }
    : {
        paddingLeft: len * inlineIndent
      };
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/context/PathContext.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var EmptyList = [];
var PathRegisterContext = /* @__PURE__ */ React5.createContext(null);
function useMeasure() {
  return React5.useContext(PathRegisterContext);
}
var PathTrackerContext = /* @__PURE__ */ React5.createContext(EmptyList);
function useFullPath(eventKey) {
  var parentKeyPath = React5.useContext(PathTrackerContext);
  return React5.useMemo(
    function() {
      return eventKey !== void 0 ? [].concat(_toConsumableArray(parentKeyPath), [eventKey]) : parentKeyPath;
    },
    [parentKeyPath, eventKey]
  );
}
var PathUserContext = /* @__PURE__ */ React5.createContext(null);

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/context/IdContext.js
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var IdContext = /* @__PURE__ */ React6.createContext(null);
function getMenuId(uuid, eventKey) {
  if (uuid === void 0) {
    return null;
  }
  return ''.concat(uuid, '-').concat(eventKey);
}
function useMenuId(eventKey) {
  var id = React6.useContext(IdContext);
  return getMenuId(id, eventKey);
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/context/PrivateContext.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var PrivateContext = /* @__PURE__ */ React7.createContext({});
var PrivateContext_default = PrivateContext;

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/MenuItem.js
var _excluded3 = ['title', 'attribute', 'elementRef'];
var _excluded22 = [
  'style',
  'className',
  'eventKey',
  'warnKey',
  'disabled',
  'itemIcon',
  'children',
  'role',
  'onMouseEnter',
  'onMouseLeave',
  'onClick',
  'onKeyDown',
  'onFocus'
];
var _excluded32 = ['active'];
var LegacyMenuItem = /* @__PURE__ */ (function(_React$Component) {
  _inherits(LegacyMenuItem2, _React$Component);
  var _super = _createSuper(LegacyMenuItem2);
  function LegacyMenuItem2() {
    _classCallCheck(this, LegacyMenuItem2);
    return _super.apply(this, arguments);
  }
  _createClass(LegacyMenuItem2, [
    {
      key: 'render',
      value: function render() {
        var _this$props = this.props,
          title = _this$props.title,
          attribute = _this$props.attribute,
          elementRef = _this$props.elementRef,
          restProps = _objectWithoutProperties3(_this$props, _excluded3);
        var passedProps = omit(restProps, ['eventKey']);
        warning2(!attribute, '`attribute` of Menu.Item is deprecated. Please pass attribute directly.');
        return /* @__PURE__ */ React8.createElement(
          Overflow.Item,
          _extends(
            {},
            attribute,
            {
              title: typeof title === 'string' ? title : void 0
            },
            passedProps,
            {
              ref: elementRef
            }
          )
        );
      }
    }
  ]);
  return LegacyMenuItem2;
})(React8.Component);
var InternalMenuItem = function InternalMenuItem2(props) {
  var _classNames;
  var style = props.style,
    className = props.className,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    itemIcon = props.itemIcon,
    children = props.children,
    role = props.role,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onClick = props.onClick,
    onKeyDown = props.onKeyDown,
    onFocus = props.onFocus,
    restProps = _objectWithoutProperties3(props, _excluded22);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = React8.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    onItemClick = _React$useContext.onItemClick,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    contextItemIcon = _React$useContext.itemIcon,
    selectedKeys = _React$useContext.selectedKeys,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = React8.useContext(PrivateContext_default),
    _internalRenderMenuItem = _React$useContext2._internalRenderMenuItem;
  var itemCls = ''.concat(prefixCls, '-item');
  var legacyMenuItemRef = React8.useRef();
  var elementRef = React8.useRef();
  var mergedDisabled = contextDisabled || disabled;
  var connectedKeys = useFullPath(eventKey);
  if (warnKey) {
    warning2(false, 'MenuItem should not leave undefined `key`.');
  }
  var getEventInfo = function getEventInfo2(e) {
    return {
      key: eventKey,
      keyPath: _toConsumableArray2(connectedKeys).reverse(),
      item: legacyMenuItemRef.current,
      domEvent: e
    };
  };
  var mergedItemIcon = itemIcon || contextItemIcon;
  var _useActive = useActive(eventKey, mergedDisabled, onMouseEnter, onMouseLeave),
    active = _useActive.active,
    activeProps = _objectWithoutProperties3(_useActive, _excluded32);
  var selected = selectedKeys.includes(eventKey);
  var directionStyle = useDirectionStyle(connectedKeys.length);
  var onInternalClick = function onInternalClick2(e) {
    if (mergedDisabled) {
      return;
    }
    var info = getEventInfo(e);
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  };
  var onInternalKeyDown = function onInternalKeyDown2(e) {
    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
    if (e.which === KeyCode.ENTER) {
      var info = getEventInfo(e);
      onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
      onItemClick(info);
    }
  };
  var onInternalFocus = function onInternalFocus2(e) {
    onActive(eventKey);
    onFocus === null || onFocus === void 0 ? void 0 : onFocus(e);
  };
  var optionRoleProps = {};
  if (props.role === 'option') {
    optionRoleProps['aria-selected'] = selected;
  }
  var renderNode = /* @__PURE__ */ React8.createElement(
    LegacyMenuItem,
    _extends(
      {
        ref: legacyMenuItemRef,
        elementRef,
        role: role === null ? 'none' : role || 'menuitem',
        tabIndex: disabled ? null : -1,
        'data-menu-id': overflowDisabled && domDataId ? null : domDataId
      },
      restProps,
      activeProps,
      optionRoleProps,
      {
        component: 'li',
        'aria-disabled': disabled,
        style: _objectSpread3(_objectSpread3({}, directionStyle), style),
        className: classNames(
          itemCls,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(itemCls, '-active'), active),
          _defineProperty(_classNames, ''.concat(itemCls, '-selected'), selected),
          _defineProperty(_classNames, ''.concat(itemCls, '-disabled'), mergedDisabled),
          _classNames),
          className
        ),
        onClick: onInternalClick,
        onKeyDown: onInternalKeyDown,
        onFocus: onInternalFocus
      }
    ),
    children,
    /* @__PURE__ */ React8.createElement(Icon, {
      props: _objectSpread3(
        _objectSpread3({}, props),
        {},
        {
          isSelected: selected
        }
      ),
      icon: mergedItemIcon
    })
  );
  if (_internalRenderMenuItem) {
    renderNode = _internalRenderMenuItem(renderNode, props, {
      selected
    });
  }
  return renderNode;
};
function MenuItem(props) {
  var eventKey = props.eventKey;
  var measure = useMeasure();
  var connectedKeyPath = useFullPath(eventKey);
  React8.useEffect(
    function() {
      if (measure) {
        measure.registerPath(eventKey, connectedKeyPath);
        return function() {
          measure.unregisterPath(eventKey, connectedKeyPath);
        };
      }
    },
    [connectedKeyPath]
  );
  if (measure) {
    return null;
  }
  return /* @__PURE__ */ React8.createElement(InternalMenuItem, props);
}
var MenuItem_default = MenuItem;

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/utils/nodeUtil.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import toArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
var _excluded4 = ['label', 'children', 'key', 'type'];
function parseChildren(children, keyPath) {
  return toArray(children).map(function(child, index) {
    if (/* @__PURE__ */ React9.isValidElement(child)) {
      var _eventKey, _child$props;
      var key = child.key;
      var eventKey =
        (_eventKey =
          (_child$props = child.props) === null || _child$props === void 0 ? void 0 : _child$props.eventKey) !== null &&
        _eventKey !== void 0
          ? _eventKey
          : key;
      var emptyKey = eventKey === null || eventKey === void 0;
      if (emptyKey) {
        eventKey = 'tmp_key-'.concat([].concat(_toConsumableArray3(keyPath), [index]).join('-'));
      }
      var cloneProps = {
        key: eventKey,
        eventKey
      };
      if (emptyKey) {
        cloneProps.warnKey = true;
      }
      return /* @__PURE__ */ React9.cloneElement(child, cloneProps);
    }
    return child;
  });
}
function convertItemsToNodes(list) {
  return (list || [])
    .map(function(opt, index) {
      if (opt && _typeof(opt) === 'object') {
        var _ref = opt,
          label = _ref.label,
          children = _ref.children,
          key = _ref.key,
          type = _ref.type,
          restProps = _objectWithoutProperties4(_ref, _excluded4);
        var mergedKey = key !== null && key !== void 0 ? key : 'tmp-'.concat(index);
        if (children || type === 'group') {
          if (type === 'group') {
            return /* @__PURE__ */ React9.createElement(
              MenuItemGroup,
              _extends2(
                {
                  key: mergedKey
                },
                restProps,
                {
                  title: label
                }
              ),
              convertItemsToNodes(children)
            );
          }
          return /* @__PURE__ */ React9.createElement(
            SubMenu,
            _extends2(
              {
                key: mergedKey
              },
              restProps,
              {
                title: label
              }
            ),
            convertItemsToNodes(children)
          );
        }
        if (type === 'divider') {
          return /* @__PURE__ */ React9.createElement(
            Divider,
            _extends2(
              {
                key: mergedKey
              },
              restProps
            )
          );
        }
        return /* @__PURE__ */ React9.createElement(
          MenuItem_default,
          _extends2(
            {
              key: mergedKey
            },
            restProps
          ),
          label
        );
      }
      return null;
    })
    .filter(function(opt) {
      return opt;
    });
}
function parseItems(children, items, keyPath) {
  var childNodes = children;
  if (items) {
    childNodes = convertItemsToNodes(items);
  }
  return parseChildren(childNodes, keyPath);
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useMemoCallback.js
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useMemoCallback(func) {
  var funRef = React10.useRef(func);
  funRef.current = func;
  var callback = React10.useCallback(function() {
    var _funRef$current;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return (_funRef$current = funRef.current) === null || _funRef$current === void 0
      ? void 0
      : _funRef$current.call.apply(_funRef$current, [funRef].concat(args));
  }, []);
  return func ? callback : void 0;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/index.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React14 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Overflow2 from '/cdn/v99/rc-overflow@1.2.8/es2022/rc-overflow.development.js';
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/SubMenuList.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var _excluded5 = ['className', 'children'];
var InternalSubMenuList = function InternalSubMenuList2(_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = _objectWithoutProperties5(_ref, _excluded5);
  var _React$useContext = React11.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    rtl = _React$useContext.rtl;
  return /* @__PURE__ */ React11.createElement(
    'ul',
    _extends3(
      {
        className: classNames2(
          prefixCls,
          rtl && ''.concat(prefixCls, '-rtl'),
          ''.concat(prefixCls, '-sub'),
          ''.concat(prefixCls, '-').concat(mode === 'inline' ? 'inline' : 'vertical'),
          className
        )
      },
      restProps,
      {
        'data-menu-list': true,
        ref
      }
    ),
    children
  );
};
var SubMenuList = /* @__PURE__ */ React11.forwardRef(InternalSubMenuList);
SubMenuList.displayName = 'SubMenuList';
var SubMenuList_default = SubMenuList;

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/PopupTrigger.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};
var placementsRtl = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -7]
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 7]
  },
  rightTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0]
  },
  leftTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0]
  }
};

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/utils/motionUtil.js
function getMotion(mode, motion, defaultMotions) {
  if (motion) {
    return motion;
  }
  if (defaultMotions) {
    return defaultMotions[mode] || defaultMotions.other;
  }
  return void 0;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/PopupTrigger.js
var popupPlacementMap = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop'
};
function PopupTrigger(_ref) {
  var prefixCls = _ref.prefixCls,
    visible = _ref.visible,
    children = _ref.children,
    popup = _ref.popup,
    popupClassName = _ref.popupClassName,
    popupOffset = _ref.popupOffset,
    disabled = _ref.disabled,
    mode = _ref.mode,
    onVisibleChange = _ref.onVisibleChange;
  var _React$useContext = React12.useContext(MenuContext),
    getPopupContainer = _React$useContext.getPopupContainer,
    rtl = _React$useContext.rtl,
    subMenuOpenDelay = _React$useContext.subMenuOpenDelay,
    subMenuCloseDelay = _React$useContext.subMenuCloseDelay,
    builtinPlacements = _React$useContext.builtinPlacements,
    triggerSubMenuAction = _React$useContext.triggerSubMenuAction,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    rootClassName = _React$useContext.rootClassName,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions;
  var _React$useState = React12.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerVisible = _React$useState2[0],
    setInnerVisible = _React$useState2[1];
  var placement = rtl
    ? _objectSpread4(_objectSpread4({}, placementsRtl), builtinPlacements)
    : _objectSpread4(_objectSpread4({}, placements), builtinPlacements);
  var popupPlacement = popupPlacementMap[mode];
  var targetMotion = getMotion(mode, motion, defaultMotions);
  var mergedMotion = _objectSpread4(
    _objectSpread4({}, targetMotion),
    {},
    {
      leavedClassName: ''.concat(prefixCls, '-hidden'),
      removeOnLeave: false,
      motionAppear: true
    }
  );
  var visibleRef = React12.useRef();
  React12.useEffect(
    function() {
      visibleRef.current = raf(function() {
        setInnerVisible(visible);
      });
      return function() {
        raf.cancel(visibleRef.current);
      };
    },
    [visible]
  );
  return /* @__PURE__ */ React12.createElement(
    Trigger,
    {
      prefixCls,
      popupClassName: classNames3(
        ''.concat(prefixCls, '-popup'),
        _defineProperty2({}, ''.concat(prefixCls, '-rtl'), rtl),
        popupClassName,
        rootClassName
      ),
      stretch: mode === 'horizontal' ? 'minWidth' : null,
      getPopupContainer,
      builtinPlacements: placement,
      popupPlacement,
      popupVisible: innerVisible,
      popup,
      popupAlign: popupOffset && {
        offset: popupOffset
      },
      action: disabled ? [] : [triggerSubMenuAction],
      mouseEnterDelay: subMenuOpenDelay,
      mouseLeaveDelay: subMenuCloseDelay,
      onPopupVisibleChange: onVisibleChange,
      forceRender: forceSubMenuRender,
      popupMotion: mergedMotion
    },
    children
  );
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/InlineSubMenuList.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React13 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
function InlineSubMenuList(_ref) {
  var id = _ref.id,
    open = _ref.open,
    keyPath = _ref.keyPath,
    children = _ref.children;
  var fixedMode = 'inline';
  var _React$useContext = React13.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    forceSubMenuRender = _React$useContext.forceSubMenuRender,
    motion = _React$useContext.motion,
    defaultMotions = _React$useContext.defaultMotions,
    mode = _React$useContext.mode;
  var sameModeRef = React13.useRef(false);
  sameModeRef.current = mode === fixedMode;
  var _React$useState = React13.useState(!sameModeRef.current),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    destroy = _React$useState2[0],
    setDestroy = _React$useState2[1];
  var mergedOpen = sameModeRef.current ? open : false;
  React13.useEffect(
    function() {
      if (sameModeRef.current) {
        setDestroy(false);
      }
    },
    [mode]
  );
  var mergedMotion = _objectSpread5({}, getMotion(fixedMode, motion, defaultMotions));
  if (keyPath.length > 1) {
    mergedMotion.motionAppear = false;
  }
  var originOnVisibleChanged = mergedMotion.onVisibleChanged;
  mergedMotion.onVisibleChanged = function(newVisible) {
    if (!sameModeRef.current && !newVisible) {
      setDestroy(true);
    }
    return originOnVisibleChanged === null || originOnVisibleChanged === void 0
      ? void 0
      : originOnVisibleChanged(newVisible);
  };
  if (destroy) {
    return null;
  }
  return /* @__PURE__ */ React13.createElement(
    InheritableContextProvider,
    {
      mode: fixedMode,
      locked: !sameModeRef.current
    },
    /* @__PURE__ */ React13.createElement(
      CSSMotion,
      _extends4(
        {
          visible: mergedOpen
        },
        mergedMotion,
        {
          forceRender: forceSubMenuRender,
          removeOnLeave: false,
          leavedClassName: ''.concat(prefixCls, '-hidden')
        }
      ),
      function(_ref2) {
        var motionClassName = _ref2.className,
          motionStyle = _ref2.style;
        return /* @__PURE__ */ React13.createElement(
          SubMenuList_default,
          {
            id,
            className: motionClassName,
            style: motionStyle
          },
          children
        );
      }
    )
  );
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/SubMenu/index.js
var _excluded6 = [
  'style',
  'className',
  'title',
  'eventKey',
  'warnKey',
  'disabled',
  'internalPopupClose',
  'children',
  'itemIcon',
  'expandIcon',
  'popupClassName',
  'popupOffset',
  'onClick',
  'onMouseEnter',
  'onMouseLeave',
  'onTitleClick',
  'onTitleMouseEnter',
  'onTitleMouseLeave'
];
var _excluded23 = ['active'];
var InternalSubMenu = function InternalSubMenu2(props) {
  var _classNames;
  var style = props.style,
    className = props.className,
    title = props.title,
    eventKey = props.eventKey,
    warnKey = props.warnKey,
    disabled = props.disabled,
    internalPopupClose = props.internalPopupClose,
    children = props.children,
    itemIcon = props.itemIcon,
    expandIcon = props.expandIcon,
    popupClassName = props.popupClassName,
    popupOffset = props.popupOffset,
    onClick = props.onClick,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onTitleClick = props.onTitleClick,
    onTitleMouseEnter = props.onTitleMouseEnter,
    onTitleMouseLeave = props.onTitleMouseLeave,
    restProps = _objectWithoutProperties6(props, _excluded6);
  var domDataId = useMenuId(eventKey);
  var _React$useContext = React14.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls,
    mode = _React$useContext.mode,
    openKeys = _React$useContext.openKeys,
    contextDisabled = _React$useContext.disabled,
    overflowDisabled = _React$useContext.overflowDisabled,
    activeKey = _React$useContext.activeKey,
    selectedKeys = _React$useContext.selectedKeys,
    contextItemIcon = _React$useContext.itemIcon,
    contextExpandIcon = _React$useContext.expandIcon,
    onItemClick = _React$useContext.onItemClick,
    onOpenChange = _React$useContext.onOpenChange,
    onActive = _React$useContext.onActive;
  var _React$useContext2 = React14.useContext(PrivateContext_default),
    _internalRenderSubMenuItem = _React$useContext2._internalRenderSubMenuItem;
  var _React$useContext3 = React14.useContext(PathUserContext),
    isSubPathKey = _React$useContext3.isSubPathKey;
  var connectedPath = useFullPath();
  var subMenuPrefixCls = ''.concat(prefixCls, '-submenu');
  var mergedDisabled = contextDisabled || disabled;
  var elementRef = React14.useRef();
  var popupRef = React14.useRef();
  if (warnKey) {
    warning3(false, 'SubMenu should not leave undefined `key`.');
  }
  var mergedItemIcon = itemIcon || contextItemIcon;
  var mergedExpandIcon = expandIcon || contextExpandIcon;
  var originOpen = openKeys.includes(eventKey);
  var open = !overflowDisabled && originOpen;
  var childrenSelected = isSubPathKey(selectedKeys, eventKey);
  var _useActive = useActive(eventKey, mergedDisabled, onTitleMouseEnter, onTitleMouseLeave),
    active = _useActive.active,
    activeProps = _objectWithoutProperties6(_useActive, _excluded23);
  var _React$useState = React14.useState(false),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    childrenActive = _React$useState2[0],
    setChildrenActive = _React$useState2[1];
  var triggerChildrenActive = function triggerChildrenActive2(newActive) {
    if (!mergedDisabled) {
      setChildrenActive(newActive);
    }
  };
  var onInternalMouseEnter = function onInternalMouseEnter2(domEvent) {
    triggerChildrenActive(true);
    onMouseEnter === null || onMouseEnter === void 0
      ? void 0
      : onMouseEnter({
          key: eventKey,
          domEvent
        });
  };
  var onInternalMouseLeave = function onInternalMouseLeave2(domEvent) {
    triggerChildrenActive(false);
    onMouseLeave === null || onMouseLeave === void 0
      ? void 0
      : onMouseLeave({
          key: eventKey,
          domEvent
        });
  };
  var mergedActive = React14.useMemo(
    function() {
      if (active) {
        return active;
      }
      if (mode !== 'inline') {
        return childrenActive || isSubPathKey([activeKey], eventKey);
      }
      return false;
    },
    [mode, active, activeKey, childrenActive, eventKey, isSubPathKey]
  );
  var directionStyle = useDirectionStyle(connectedPath.length);
  var onInternalTitleClick = function onInternalTitleClick2(e) {
    if (mergedDisabled) {
      return;
    }
    onTitleClick === null || onTitleClick === void 0
      ? void 0
      : onTitleClick({
          key: eventKey,
          domEvent: e
        });
    if (mode === 'inline') {
      onOpenChange(eventKey, !originOpen);
    }
  };
  var onMergedItemClick = useMemoCallback(function(info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    onItemClick(info);
  });
  var onPopupVisibleChange = function onPopupVisibleChange2(newVisible) {
    if (mode !== 'inline') {
      onOpenChange(eventKey, newVisible);
    }
  };
  var onInternalFocus = function onInternalFocus2() {
    onActive(eventKey);
  };
  var popupId = domDataId && ''.concat(domDataId, '-popup');
  var titleNode = /* @__PURE__ */ React14.createElement(
    'div',
    _extends5(
      {
        role: 'menuitem',
        style: directionStyle,
        className: ''.concat(subMenuPrefixCls, '-title'),
        tabIndex: mergedDisabled ? null : -1,
        ref: elementRef,
        title: typeof title === 'string' ? title : null,
        'data-menu-id': overflowDisabled && domDataId ? null : domDataId,
        'aria-expanded': open,
        'aria-haspopup': true,
        'aria-controls': popupId,
        'aria-disabled': mergedDisabled,
        onClick: onInternalTitleClick,
        onFocus: onInternalFocus
      },
      activeProps
    ),
    title,
    /* @__PURE__ */ React14.createElement(
      Icon,
      {
        icon: mode !== 'horizontal' ? mergedExpandIcon : null,
        props: _objectSpread6(
          _objectSpread6({}, props),
          {},
          {
            isOpen: open,
            isSubMenu: true
          }
        )
      },
      /* @__PURE__ */ React14.createElement('i', {
        className: ''.concat(subMenuPrefixCls, '-arrow')
      })
    )
  );
  var triggerModeRef = React14.useRef(mode);
  if (mode !== 'inline' && connectedPath.length > 1) {
    triggerModeRef.current = 'vertical';
  } else {
    triggerModeRef.current = mode;
  }
  if (!overflowDisabled) {
    var triggerMode = triggerModeRef.current;
    titleNode = /* @__PURE__ */ React14.createElement(
      PopupTrigger,
      {
        mode: triggerMode,
        prefixCls: subMenuPrefixCls,
        visible: !internalPopupClose && open && mode !== 'inline',
        popupClassName,
        popupOffset,
        popup: /* @__PURE__ */ React14.createElement(
          InheritableContextProvider,
          {
            mode: triggerMode === 'horizontal' ? 'vertical' : triggerMode
          },
          /* @__PURE__ */ React14.createElement(
            SubMenuList_default,
            {
              id: popupId,
              ref: popupRef
            },
            children
          )
        ),
        disabled: mergedDisabled,
        onVisibleChange: onPopupVisibleChange
      },
      titleNode
    );
  }
  var listNode = /* @__PURE__ */ React14.createElement(
    Overflow2.Item,
    _extends5(
      {
        role: 'none'
      },
      restProps,
      {
        component: 'li',
        style,
        className: classNames4(
          subMenuPrefixCls,
          ''.concat(subMenuPrefixCls, '-').concat(mode),
          className,
          ((_classNames = {}),
          _defineProperty3(_classNames, ''.concat(subMenuPrefixCls, '-open'), open),
          _defineProperty3(_classNames, ''.concat(subMenuPrefixCls, '-active'), mergedActive),
          _defineProperty3(_classNames, ''.concat(subMenuPrefixCls, '-selected'), childrenSelected),
          _defineProperty3(_classNames, ''.concat(subMenuPrefixCls, '-disabled'), mergedDisabled),
          _classNames)
        ),
        onMouseEnter: onInternalMouseEnter,
        onMouseLeave: onInternalMouseLeave
      }
    ),
    titleNode,
    !overflowDisabled &&
      /* @__PURE__ */ React14.createElement(
        InlineSubMenuList,
        {
          id: popupId,
          open,
          keyPath: connectedPath
        },
        children
      )
  );
  if (_internalRenderSubMenuItem) {
    listNode = _internalRenderSubMenuItem(listNode, props, {
      selected: childrenSelected,
      active: mergedActive,
      open,
      disabled: mergedDisabled
    });
  }
  return /* @__PURE__ */ React14.createElement(
    InheritableContextProvider,
    {
      onItemClick: onMergedItemClick,
      mode: mode === 'horizontal' ? 'vertical' : mode,
      itemIcon: mergedItemIcon,
      expandIcon: mergedExpandIcon
    },
    listNode
  );
};
function SubMenu(props) {
  var eventKey = props.eventKey,
    children = props.children;
  var connectedKeyPath = useFullPath(eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  React14.useEffect(
    function() {
      if (measure) {
        measure.registerPath(eventKey, connectedKeyPath);
        return function() {
          measure.unregisterPath(eventKey, connectedKeyPath);
        };
      }
    },
    [connectedKeyPath]
  );
  var renderNode;
  if (measure) {
    renderNode = childList;
  } else {
    renderNode = /* @__PURE__ */ React14.createElement(InternalSubMenu, props, childList);
  }
  return /* @__PURE__ */ React14.createElement(
    PathTrackerContext.Provider,
    {
      value: connectedKeyPath
    },
    renderNode
  );
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useAccessibility.js
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React15 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode2 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import raf2 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import { getFocusNodeList } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/focus.development.js';
var LEFT = KeyCode2.LEFT;
var RIGHT = KeyCode2.RIGHT;
var UP = KeyCode2.UP;
var DOWN = KeyCode2.DOWN;
var ENTER = KeyCode2.ENTER;
var ESC = KeyCode2.ESC;
var HOME = KeyCode2.HOME;
var END = KeyCode2.END;
var ArrowKeys = [UP, DOWN, LEFT, RIGHT];
function getOffset(mode, isRootLevel, isRtl, which) {
  var _inline, _horizontal, _vertical, _offsets;
  var prev = 'prev';
  var next = 'next';
  var children = 'children';
  var parent = 'parent';
  if (mode === 'inline' && which === ENTER) {
    return {
      inlineTrigger: true
    };
  }
  var inline = ((_inline = {}), _defineProperty4(_inline, UP, prev), _defineProperty4(_inline, DOWN, next), _inline);
  var horizontal =
    ((_horizontal = {}),
    _defineProperty4(_horizontal, LEFT, isRtl ? next : prev),
    _defineProperty4(_horizontal, RIGHT, isRtl ? prev : next),
    _defineProperty4(_horizontal, DOWN, children),
    _defineProperty4(_horizontal, ENTER, children),
    _horizontal);
  var vertical =
    ((_vertical = {}),
    _defineProperty4(_vertical, UP, prev),
    _defineProperty4(_vertical, DOWN, next),
    _defineProperty4(_vertical, ENTER, children),
    _defineProperty4(_vertical, ESC, parent),
    _defineProperty4(_vertical, LEFT, isRtl ? children : parent),
    _defineProperty4(_vertical, RIGHT, isRtl ? parent : children),
    _vertical);
  var offsets = {
    inline,
    horizontal,
    vertical,
    inlineSub: inline,
    horizontalSub: vertical,
    verticalSub: vertical
  };
  var type =
    (_offsets = offsets[''.concat(mode).concat(isRootLevel ? '' : 'Sub')]) === null || _offsets === void 0
      ? void 0
      : _offsets[which];
  switch (type) {
    case prev:
      return {
        offset: -1,
        sibling: true
      };
    case next:
      return {
        offset: 1,
        sibling: true
      };
    case parent:
      return {
        offset: -1,
        sibling: false
      };
    case children:
      return {
        offset: 1,
        sibling: false
      };
    default:
      return null;
  }
}
function findContainerUL(element) {
  var current = element;
  while (current) {
    if (current.getAttribute('data-menu-list')) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusElement(activeElement, elements) {
  var current = activeElement || document.activeElement;
  while (current) {
    if (elements.has(current)) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function getFocusableElements(container, elements) {
  var list = getFocusNodeList(container, true);
  return list.filter(function(ele) {
    return elements.has(ele);
  });
}
function getNextFocusElement(parentQueryContainer, elements, focusMenuElement) {
  var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!parentQueryContainer) {
    return null;
  }
  var sameLevelFocusableMenuElementList = getFocusableElements(parentQueryContainer, elements);
  var count = sameLevelFocusableMenuElementList.length;
  var focusIndex = sameLevelFocusableMenuElementList.findIndex(function(ele) {
    return focusMenuElement === ele;
  });
  if (offset < 0) {
    if (focusIndex === -1) {
      focusIndex = count - 1;
    } else {
      focusIndex -= 1;
    }
  } else if (offset > 0) {
    focusIndex += 1;
  }
  focusIndex = (focusIndex + count) % count;
  return sameLevelFocusableMenuElementList[focusIndex];
}
function useAccessibility(
  mode,
  activeKey,
  isRtl,
  id,
  containerRef,
  getKeys,
  getKeyPath,
  triggerActiveKey,
  triggerAccessibilityOpen,
  originOnKeyDown
) {
  var rafRef = React15.useRef();
  var activeRef = React15.useRef();
  activeRef.current = activeKey;
  var cleanRaf = function cleanRaf2() {
    raf2.cancel(rafRef.current);
  };
  React15.useEffect(function() {
    return function() {
      cleanRaf();
    };
  }, []);
  return function(e) {
    var which = e.which;
    if ([].concat(ArrowKeys, [ENTER, ESC, HOME, END]).includes(which)) {
      var elements;
      var key2element;
      var element2key;
      var refreshElements = function refreshElements2() {
        elements = /* @__PURE__ */ new Set();
        key2element = /* @__PURE__ */ new Map();
        element2key = /* @__PURE__ */ new Map();
        var keys = getKeys();
        keys.forEach(function(key) {
          var element = document.querySelector("[data-menu-id='".concat(getMenuId(id, key), "']"));
          if (element) {
            elements.add(element);
            element2key.set(element, key);
            key2element.set(key, element);
          }
        });
        return elements;
      };
      refreshElements();
      var activeElement = key2element.get(activeKey);
      var focusMenuElement = getFocusElement(activeElement, elements);
      var focusMenuKey = element2key.get(focusMenuElement);
      var offsetObj = getOffset(mode, getKeyPath(focusMenuKey, true).length === 1, isRtl, which);
      if (!offsetObj && which !== HOME && which !== END) {
        return;
      }
      if (ArrowKeys.includes(which) || [HOME, END].includes(which)) {
        e.preventDefault();
      }
      var tryFocus = function tryFocus2(menuElement) {
        if (menuElement) {
          var focusTargetElement = menuElement;
          var link = menuElement.querySelector('a');
          if (link !== null && link !== void 0 && link.getAttribute('href')) {
            focusTargetElement = link;
          }
          var targetKey = element2key.get(menuElement);
          triggerActiveKey(targetKey);
          cleanRaf();
          rafRef.current = raf2(function() {
            if (activeRef.current === targetKey) {
              focusTargetElement.focus();
            }
          });
        }
      };
      if ([HOME, END].includes(which) || offsetObj.sibling || !focusMenuElement) {
        var parentQueryContainer;
        if (!focusMenuElement || mode === 'inline') {
          parentQueryContainer = containerRef.current;
        } else {
          parentQueryContainer = findContainerUL(focusMenuElement);
        }
        var targetElement;
        var focusableElements = getFocusableElements(parentQueryContainer, elements);
        if (which === HOME) {
          targetElement = focusableElements[0];
        } else if (which === END) {
          targetElement = focusableElements[focusableElements.length - 1];
        } else {
          targetElement = getNextFocusElement(parentQueryContainer, elements, focusMenuElement, offsetObj.offset);
        }
        tryFocus(targetElement);
      } else if (offsetObj.inlineTrigger) {
        triggerAccessibilityOpen(focusMenuKey);
      } else if (offsetObj.offset > 0) {
        triggerAccessibilityOpen(focusMenuKey, true);
        cleanRaf();
        rafRef.current = raf2(function() {
          refreshElements();
          var controlId = focusMenuElement.getAttribute('aria-controls');
          var subQueryContainer = document.getElementById(controlId);
          var targetElement2 = getNextFocusElement(subQueryContainer, elements);
          tryFocus(targetElement2);
        }, 5);
      } else if (offsetObj.offset < 0) {
        var keyPath = getKeyPath(focusMenuKey, true);
        var parentKey = keyPath[keyPath.length - 2];
        var parentMenuElement = key2element.get(parentKey);
        triggerAccessibilityOpen(parentKey, false);
        tryFocus(parentMenuElement);
      }
    }
    originOnKeyDown === null || originOnKeyDown === void 0 ? void 0 : originOnKeyDown(e);
  };
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useUUID.js
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React16 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
var uniquePrefix = Math.random()
  .toFixed(5)
  .toString()
  .slice(2);
var internalId = 0;
function useUUID(id) {
  var _useMergedState = useMergedState(id, {
      value: id
    }),
    _useMergedState2 = _slicedToArray4(_useMergedState, 2),
    uuid = _useMergedState2[0],
    setUUID = _useMergedState2[1];
  React16.useEffect(function() {
    internalId += 1;
    var newId = false ? 'test' : ''.concat(uniquePrefix, '-').concat(internalId);
    setUUID('rc-menu-uuid-'.concat(newId));
  }, []);
  return uuid;
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useKeyRecords.js
import _toConsumableArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React17 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef7, useCallback as useCallback2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/utils/timeUtil.js
function nextSlice(callback) {
  Promise.resolve().then(callback);
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/hooks/useKeyRecords.js
var PATH_SPLIT = '__RC_UTIL_PATH_SPLIT__';
var getPathStr = function getPathStr2(keyPath) {
  return keyPath.join(PATH_SPLIT);
};
var getPathKeys = function getPathKeys2(keyPathStr) {
  return keyPathStr.split(PATH_SPLIT);
};
var OVERFLOW_KEY = 'rc-menu-more';
function useKeyRecords() {
  var _React$useState = React17.useState({}),
    _React$useState2 = _slicedToArray5(_React$useState, 2),
    internalForceUpdate = _React$useState2[1];
  var key2pathRef = useRef7(/* @__PURE__ */ new Map());
  var path2keyRef = useRef7(/* @__PURE__ */ new Map());
  var _React$useState3 = React17.useState([]),
    _React$useState4 = _slicedToArray5(_React$useState3, 2),
    overflowKeys = _React$useState4[0],
    setOverflowKeys = _React$useState4[1];
  var updateRef = useRef7(0);
  var destroyRef = useRef7(false);
  var forceUpdate = function forceUpdate2() {
    if (!destroyRef.current) {
      internalForceUpdate({});
    }
  };
  var registerPath = useCallback2(function(key, keyPath) {
    if (true) {
      warning4(
        !key2pathRef.current.has(key),
        "Duplicated key '".concat(key, "' used in Menu by path [").concat(keyPath.join(' > '), ']')
      );
    }
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.set(connectedPath, key);
    key2pathRef.current.set(key, connectedPath);
    updateRef.current += 1;
    var id = updateRef.current;
    nextSlice(function() {
      if (id === updateRef.current) {
        forceUpdate();
      }
    });
  }, []);
  var unregisterPath = useCallback2(function(key, keyPath) {
    var connectedPath = getPathStr(keyPath);
    path2keyRef.current.delete(connectedPath);
    key2pathRef.current.delete(key);
  }, []);
  var refreshOverflowKeys = useCallback2(function(keys) {
    setOverflowKeys(keys);
  }, []);
  var getKeyPath = useCallback2(
    function(eventKey, includeOverflow) {
      var fullPath = key2pathRef.current.get(eventKey) || '';
      var keys = getPathKeys(fullPath);
      if (includeOverflow && overflowKeys.includes(keys[0])) {
        keys.unshift(OVERFLOW_KEY);
      }
      return keys;
    },
    [overflowKeys]
  );
  var isSubPathKey = useCallback2(
    function(pathKeys, eventKey) {
      return pathKeys.some(function(pathKey) {
        var pathKeyList = getKeyPath(pathKey, true);
        return pathKeyList.includes(eventKey);
      });
    },
    [getKeyPath]
  );
  var getKeys = function getKeys2() {
    var keys = _toConsumableArray4(key2pathRef.current.keys());
    if (overflowKeys.length) {
      keys.push(OVERFLOW_KEY);
    }
    return keys;
  };
  var getSubPathKeys = useCallback2(function(key) {
    var connectedPath = ''.concat(key2pathRef.current.get(key)).concat(PATH_SPLIT);
    var pathKeys = /* @__PURE__ */ new Set();
    _toConsumableArray4(path2keyRef.current.keys()).forEach(function(pathKey) {
      if (pathKey.startsWith(connectedPath)) {
        pathKeys.add(path2keyRef.current.get(pathKey));
      }
    });
    return pathKeys;
  }, []);
  React17.useEffect(function() {
    return function() {
      destroyRef.current = true;
    };
  }, []);
  return {
    registerPath,
    unregisterPath,
    refreshOverflowKeys,
    isSubPathKey,
    getKeyPath,
    getKeys,
    getSubPathKeys
  };
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/Menu.js
import { useImperativeHandle } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var _excluded7 = [
  'prefixCls',
  'rootClassName',
  'style',
  'className',
  'tabIndex',
  'items',
  'children',
  'direction',
  'id',
  'mode',
  'inlineCollapsed',
  'disabled',
  'disabledOverflow',
  'subMenuOpenDelay',
  'subMenuCloseDelay',
  'forceSubMenuRender',
  'defaultOpenKeys',
  'openKeys',
  'activeKey',
  'defaultActiveFirst',
  'selectable',
  'multiple',
  'defaultSelectedKeys',
  'selectedKeys',
  'onSelect',
  'onDeselect',
  'inlineIndent',
  'motion',
  'defaultMotions',
  'triggerSubMenuAction',
  'builtinPlacements',
  'itemIcon',
  'expandIcon',
  'overflowedIndicator',
  'overflowedIndicatorPopupClassName',
  'getPopupContainer',
  'onClick',
  'onOpenChange',
  'onKeyDown',
  'openAnimation',
  'openTransitionName',
  '_internalRenderMenuItem',
  '_internalRenderSubMenuItem'
];
var EMPTY_LIST = [];
var Menu = /* @__PURE__ */ React18.forwardRef(function(props, ref) {
  var _childList$, _classNames;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-menu' : _ref$prefixCls,
    rootClassName = _ref.rootClassName,
    style = _ref.style,
    className = _ref.className,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
    items = _ref.items,
    children = _ref.children,
    direction = _ref.direction,
    id = _ref.id,
    _ref$mode = _ref.mode,
    mode = _ref$mode === void 0 ? 'vertical' : _ref$mode,
    inlineCollapsed = _ref.inlineCollapsed,
    disabled = _ref.disabled,
    disabledOverflow = _ref.disabledOverflow,
    _ref$subMenuOpenDelay = _ref.subMenuOpenDelay,
    subMenuOpenDelay = _ref$subMenuOpenDelay === void 0 ? 0.1 : _ref$subMenuOpenDelay,
    _ref$subMenuCloseDela = _ref.subMenuCloseDelay,
    subMenuCloseDelay = _ref$subMenuCloseDela === void 0 ? 0.1 : _ref$subMenuCloseDela,
    forceSubMenuRender = _ref.forceSubMenuRender,
    defaultOpenKeys = _ref.defaultOpenKeys,
    openKeys = _ref.openKeys,
    activeKey = _ref.activeKey,
    defaultActiveFirst = _ref.defaultActiveFirst,
    _ref$selectable = _ref.selectable,
    selectable = _ref$selectable === void 0 ? true : _ref$selectable,
    _ref$multiple = _ref.multiple,
    multiple = _ref$multiple === void 0 ? false : _ref$multiple,
    defaultSelectedKeys = _ref.defaultSelectedKeys,
    selectedKeys = _ref.selectedKeys,
    onSelect = _ref.onSelect,
    onDeselect = _ref.onDeselect,
    _ref$inlineIndent = _ref.inlineIndent,
    inlineIndent = _ref$inlineIndent === void 0 ? 24 : _ref$inlineIndent,
    motion = _ref.motion,
    defaultMotions = _ref.defaultMotions,
    _ref$triggerSubMenuAc = _ref.triggerSubMenuAction,
    triggerSubMenuAction = _ref$triggerSubMenuAc === void 0 ? 'hover' : _ref$triggerSubMenuAc,
    builtinPlacements = _ref.builtinPlacements,
    itemIcon = _ref.itemIcon,
    expandIcon = _ref.expandIcon,
    _ref$overflowedIndica = _ref.overflowedIndicator,
    overflowedIndicator = _ref$overflowedIndica === void 0 ? '...' : _ref$overflowedIndica,
    overflowedIndicatorPopupClassName = _ref.overflowedIndicatorPopupClassName,
    getPopupContainer = _ref.getPopupContainer,
    onClick = _ref.onClick,
    onOpenChange = _ref.onOpenChange,
    onKeyDown = _ref.onKeyDown,
    openAnimation = _ref.openAnimation,
    openTransitionName = _ref.openTransitionName,
    _internalRenderMenuItem = _ref._internalRenderMenuItem,
    _internalRenderSubMenuItem = _ref._internalRenderSubMenuItem,
    restProps = _objectWithoutProperties7(_ref, _excluded7);
  var childList = React18.useMemo(
    function() {
      return parseItems(children, items, EMPTY_LIST);
    },
    [children, items]
  );
  var _React$useState = React18.useState(false),
    _React$useState2 = _slicedToArray6(_React$useState, 2),
    mounted = _React$useState2[0],
    setMounted = _React$useState2[1];
  var containerRef = React18.useRef();
  var uuid = useUUID(id);
  var isRtl = direction === 'rtl';
  if (true) {
    warning5(
      !openAnimation && !openTransitionName,
      '`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.'
    );
  }
  var _React$useMemo = React18.useMemo(
      function() {
        if ((mode === 'inline' || mode === 'vertical') && inlineCollapsed) {
          return ['vertical', inlineCollapsed];
        }
        return [mode, false];
      },
      [mode, inlineCollapsed]
    ),
    _React$useMemo2 = _slicedToArray6(_React$useMemo, 2),
    mergedMode = _React$useMemo2[0],
    mergedInlineCollapsed = _React$useMemo2[1];
  var _React$useState3 = React18.useState(0),
    _React$useState4 = _slicedToArray6(_React$useState3, 2),
    lastVisibleIndex = _React$useState4[0],
    setLastVisibleIndex = _React$useState4[1];
  var allVisible = lastVisibleIndex >= childList.length - 1 || mergedMode !== 'horizontal' || disabledOverflow;
  var _useMergedState = useMergedState2(defaultOpenKeys, {
      value: openKeys,
      postState: function postState(keys) {
        return keys || EMPTY_LIST;
      }
    }),
    _useMergedState2 = _slicedToArray6(_useMergedState, 2),
    mergedOpenKeys = _useMergedState2[0],
    setMergedOpenKeys = _useMergedState2[1];
  var triggerOpenKeys = function triggerOpenKeys2(keys) {
    setMergedOpenKeys(keys);
    onOpenChange === null || onOpenChange === void 0 ? void 0 : onOpenChange(keys);
  };
  var _React$useState5 = React18.useState(mergedOpenKeys),
    _React$useState6 = _slicedToArray6(_React$useState5, 2),
    inlineCacheOpenKeys = _React$useState6[0],
    setInlineCacheOpenKeys = _React$useState6[1];
  var isInlineMode = mergedMode === 'inline';
  var mountRef = React18.useRef(false);
  React18.useEffect(
    function() {
      if (isInlineMode) {
        setInlineCacheOpenKeys(mergedOpenKeys);
      }
    },
    [mergedOpenKeys]
  );
  React18.useEffect(
    function() {
      if (!mountRef.current) {
        return;
      }
      if (isInlineMode) {
        setMergedOpenKeys(inlineCacheOpenKeys);
      } else {
        triggerOpenKeys(EMPTY_LIST);
      }
    },
    [isInlineMode]
  );
  React18.useEffect(function() {
    mountRef.current = true;
    return function() {
      mountRef.current = false;
    };
  }, []);
  var _useKeyRecords = useKeyRecords(),
    registerPath = _useKeyRecords.registerPath,
    unregisterPath = _useKeyRecords.unregisterPath,
    refreshOverflowKeys = _useKeyRecords.refreshOverflowKeys,
    isSubPathKey = _useKeyRecords.isSubPathKey,
    getKeyPath = _useKeyRecords.getKeyPath,
    getKeys = _useKeyRecords.getKeys,
    getSubPathKeys = _useKeyRecords.getSubPathKeys;
  var registerPathContext = React18.useMemo(
    function() {
      return {
        registerPath,
        unregisterPath
      };
    },
    [registerPath, unregisterPath]
  );
  var pathUserContext = React18.useMemo(
    function() {
      return {
        isSubPathKey
      };
    },
    [isSubPathKey]
  );
  React18.useEffect(
    function() {
      refreshOverflowKeys(
        allVisible
          ? EMPTY_LIST
          : childList.slice(lastVisibleIndex + 1).map(function(child) {
              return child.key;
            })
      );
    },
    [lastVisibleIndex, allVisible]
  );
  var _useMergedState3 = useMergedState2(
      activeKey ||
        (defaultActiveFirst &&
          ((_childList$ = childList[0]) === null || _childList$ === void 0 ? void 0 : _childList$.key)),
      {
        value: activeKey
      }
    ),
    _useMergedState4 = _slicedToArray6(_useMergedState3, 2),
    mergedActiveKey = _useMergedState4[0],
    setMergedActiveKey = _useMergedState4[1];
  var onActive = useMemoCallback(function(key) {
    setMergedActiveKey(key);
  });
  var onInactive = useMemoCallback(function() {
    setMergedActiveKey(void 0);
  });
  useImperativeHandle(ref, function() {
    return {
      list: containerRef.current,
      focus: function focus(options) {
        var _childList$find;
        var shouldFocusKey =
          mergedActiveKey !== null && mergedActiveKey !== void 0
            ? mergedActiveKey
            : (_childList$find = childList.find(function(node) {
                return !node.props.disabled;
              })) === null || _childList$find === void 0
            ? void 0
            : _childList$find.key;
        if (shouldFocusKey) {
          var _containerRef$current, _containerRef$current2, _containerRef$current3;
          (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0
            ? void 0
            : (_containerRef$current2 = _containerRef$current.querySelector(
                "li[data-menu-id='".concat(getMenuId(uuid, shouldFocusKey), "']")
              )) === null || _containerRef$current2 === void 0
            ? void 0
            : (_containerRef$current3 = _containerRef$current2.focus) === null || _containerRef$current3 === void 0
            ? void 0
            : _containerRef$current3.call(_containerRef$current2, options);
        }
      }
    };
  });
  var _useMergedState5 = useMergedState2(defaultSelectedKeys || [], {
      value: selectedKeys,
      postState: function postState(keys) {
        if (Array.isArray(keys)) {
          return keys;
        }
        if (keys === null || keys === void 0) {
          return EMPTY_LIST;
        }
        return [keys];
      }
    }),
    _useMergedState6 = _slicedToArray6(_useMergedState5, 2),
    mergedSelectKeys = _useMergedState6[0],
    setMergedSelectKeys = _useMergedState6[1];
  var triggerSelection = function triggerSelection2(info) {
    if (selectable) {
      var targetKey = info.key;
      var exist = mergedSelectKeys.includes(targetKey);
      var newSelectKeys;
      if (multiple) {
        if (exist) {
          newSelectKeys = mergedSelectKeys.filter(function(key) {
            return key !== targetKey;
          });
        } else {
          newSelectKeys = [].concat(_toConsumableArray5(mergedSelectKeys), [targetKey]);
        }
      } else {
        newSelectKeys = [targetKey];
      }
      setMergedSelectKeys(newSelectKeys);
      var selectInfo = _objectSpread7(
        _objectSpread7({}, info),
        {},
        {
          selectedKeys: newSelectKeys
        }
      );
      if (exist) {
        onDeselect === null || onDeselect === void 0 ? void 0 : onDeselect(selectInfo);
      } else {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(selectInfo);
      }
    }
    if (!multiple && mergedOpenKeys.length && mergedMode !== 'inline') {
      triggerOpenKeys(EMPTY_LIST);
    }
  };
  var onInternalClick = useMemoCallback(function(info) {
    onClick === null || onClick === void 0 ? void 0 : onClick(warnItemProp(info));
    triggerSelection(info);
  });
  var onInternalOpenChange = useMemoCallback(function(key, open) {
    var newOpenKeys = mergedOpenKeys.filter(function(k) {
      return k !== key;
    });
    if (open) {
      newOpenKeys.push(key);
    } else if (mergedMode !== 'inline') {
      var subPathKeys = getSubPathKeys(key);
      newOpenKeys = newOpenKeys.filter(function(k) {
        return !subPathKeys.has(k);
      });
    }
    if (!shallowEqual2(mergedOpenKeys, newOpenKeys)) {
      triggerOpenKeys(newOpenKeys);
    }
  });
  var getInternalPopupContainer = useMemoCallback(getPopupContainer);
  var triggerAccessibilityOpen = function triggerAccessibilityOpen2(key, open) {
    var nextOpen = open !== null && open !== void 0 ? open : !mergedOpenKeys.includes(key);
    onInternalOpenChange(key, nextOpen);
  };
  var onInternalKeyDown = useAccessibility(
    mergedMode,
    mergedActiveKey,
    isRtl,
    uuid,
    containerRef,
    getKeys,
    getKeyPath,
    setMergedActiveKey,
    triggerAccessibilityOpen,
    onKeyDown
  );
  React18.useEffect(function() {
    setMounted(true);
  }, []);
  var privateContext = React18.useMemo(
    function() {
      return {
        _internalRenderMenuItem,
        _internalRenderSubMenuItem
      };
    },
    [_internalRenderMenuItem, _internalRenderSubMenuItem]
  );
  var wrappedChildList =
    mergedMode !== 'horizontal' || disabledOverflow
      ? childList
      : childList.map(function(child, index) {
          return /* @__PURE__ */ React18.createElement(
            InheritableContextProvider,
            {
              key: child.key,
              overflowDisabled: index > lastVisibleIndex
            },
            child
          );
        });
  var container = /* @__PURE__ */ React18.createElement(
    Overflow3,
    _extends6(
      {
        id,
        ref: containerRef,
        prefixCls: ''.concat(prefixCls, '-overflow'),
        component: 'ul',
        itemComponent: MenuItem_default,
        className: classNames5(
          prefixCls,
          ''.concat(prefixCls, '-root'),
          ''.concat(prefixCls, '-').concat(mergedMode),
          className,
          ((_classNames = {}),
          _defineProperty5(_classNames, ''.concat(prefixCls, '-inline-collapsed'), mergedInlineCollapsed),
          _defineProperty5(_classNames, ''.concat(prefixCls, '-rtl'), isRtl),
          _classNames),
          rootClassName
        ),
        dir: direction,
        style,
        role: 'menu',
        tabIndex,
        data: wrappedChildList,
        renderRawItem: function renderRawItem(node) {
          return node;
        },
        renderRawRest: function renderRawRest(omitItems) {
          var len = omitItems.length;
          var originOmitItems = len ? childList.slice(-len) : null;
          return /* @__PURE__ */ React18.createElement(
            SubMenu,
            {
              eventKey: OVERFLOW_KEY,
              title: overflowedIndicator,
              disabled: allVisible,
              internalPopupClose: len === 0,
              popupClassName: overflowedIndicatorPopupClassName
            },
            originOmitItems
          );
        },
        maxCount: mergedMode !== 'horizontal' || disabledOverflow ? Overflow3.INVALIDATE : Overflow3.RESPONSIVE,
        ssr: 'full',
        'data-menu-list': true,
        onVisibleChange: function onVisibleChange(newLastIndex) {
          setLastVisibleIndex(newLastIndex);
        },
        onKeyDown: onInternalKeyDown
      },
      restProps
    )
  );
  return /* @__PURE__ */ React18.createElement(
    PrivateContext_default.Provider,
    {
      value: privateContext
    },
    /* @__PURE__ */ React18.createElement(
      IdContext.Provider,
      {
        value: uuid
      },
      /* @__PURE__ */ React18.createElement(
        InheritableContextProvider,
        {
          prefixCls,
          rootClassName,
          mode: mergedMode,
          openKeys: mergedOpenKeys,
          rtl: isRtl,
          disabled,
          motion: mounted ? motion : null,
          defaultMotions: mounted ? defaultMotions : null,
          activeKey: mergedActiveKey,
          onActive,
          onInactive,
          selectedKeys: mergedSelectKeys,
          inlineIndent,
          subMenuOpenDelay,
          subMenuCloseDelay,
          forceSubMenuRender,
          builtinPlacements,
          triggerSubMenuAction,
          getPopupContainer: getInternalPopupContainer,
          itemIcon,
          expandIcon,
          onItemClick: onInternalClick,
          onOpenChange: onInternalOpenChange
        },
        /* @__PURE__ */ React18.createElement(
          PathUserContext.Provider,
          {
            value: pathUserContext
          },
          container
        ),
        /* @__PURE__ */ React18.createElement(
          'div',
          {
            style: {
              display: 'none'
            },
            'aria-hidden': true
          },
          /* @__PURE__ */ React18.createElement(
            PathRegisterContext.Provider,
            {
              value: registerPathContext
            },
            childList
          )
        )
      )
    )
  );
});
var Menu_default = Menu;

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/MenuItemGroup.js
import _extends7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React19 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames6 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import omit2 from '/cdn/v99/rc-util@5.24.6/es2022/es/omit.development.js';
var _excluded8 = ['className', 'title', 'eventKey', 'children'];
var _excluded24 = ['children'];
var InternalMenuItemGroup = function InternalMenuItemGroup2(_ref) {
  var className = _ref.className,
    title = _ref.title,
    eventKey = _ref.eventKey,
    children = _ref.children,
    restProps = _objectWithoutProperties8(_ref, _excluded8);
  var _React$useContext = React19.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var groupPrefixCls = ''.concat(prefixCls, '-item-group');
  return /* @__PURE__ */ React19.createElement(
    'li',
    _extends7({}, restProps, {
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      className: classNames6(groupPrefixCls, className)
    }),
    /* @__PURE__ */ React19.createElement(
      'div',
      {
        className: ''.concat(groupPrefixCls, '-title'),
        title: typeof title === 'string' ? title : void 0
      },
      title
    ),
    /* @__PURE__ */ React19.createElement(
      'ul',
      {
        className: ''.concat(groupPrefixCls, '-list')
      },
      children
    )
  );
};
function MenuItemGroup(_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties8(_ref2, _excluded24);
  var connectedKeyPath = useFullPath(props.eventKey);
  var childList = parseChildren(children, connectedKeyPath);
  var measure = useMeasure();
  if (measure) {
    return childList;
  }
  return /* @__PURE__ */ React19.createElement(InternalMenuItemGroup, omit2(props, ['warnKey']), childList);
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/Divider.js
import * as React20 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames7 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Divider(_ref) {
  var className = _ref.className,
    style = _ref.style;
  var _React$useContext = React20.useContext(MenuContext),
    prefixCls = _React$useContext.prefixCls;
  var measure = useMeasure();
  if (measure) {
    return null;
  }
  return /* @__PURE__ */ React20.createElement('li', {
    className: classNames7(''.concat(prefixCls, '-item-divider'), className),
    style
  });
}

// esm-build-1c60f9f520d4e9c26e2de72e3023fa49b2a79499-d24e7407/node_modules/rc-menu/es/index.js
var ExportMenu = Menu_default;
ExportMenu.Item = MenuItem_default;
ExportMenu.SubMenu = SubMenu;
ExportMenu.ItemGroup = MenuItemGroup;
ExportMenu.Divider = Divider;
var es_default = ExportMenu;
export {
  Divider,
  MenuItem_default as Item,
  MenuItemGroup as ItemGroup,
  MenuItem_default as MenuItem,
  MenuItemGroup,
  SubMenu,
  es_default as default,
  useFullPath
};
