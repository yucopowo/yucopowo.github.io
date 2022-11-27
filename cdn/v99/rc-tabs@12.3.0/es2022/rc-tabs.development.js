/* esm.sh - esbuild bundle(rc-tabs@12.3.0) es2022 development */
// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/Tabs.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useEffect as useEffect6, useState as useState6 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames6 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import isMobile from '/cdn/v99/rc-util@5.24.6/es2022/es/isMobile.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabPanelList/index.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabContext.js
import { createContext } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var TabContext_default = /* @__PURE__ */ createContext(null);

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabPanelList/TabPane.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var TabPane = /* @__PURE__ */ React.forwardRef(function(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    className = _ref.className,
    style = _ref.style,
    id = _ref.id,
    active = _ref.active,
    tabKey = _ref.tabKey,
    children = _ref.children;
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      id: id && ''.concat(id, '-panel-').concat(tabKey),
      role: 'tabpanel',
      tabIndex: active ? 0 : -1,
      'aria-labelledby': id && ''.concat(id, '-tab-').concat(tabKey),
      'aria-hidden': !active,
      style,
      className: classNames(prefixCls, active && ''.concat(prefixCls, '-active'), className),
      ref
    },
    children
  );
});
if (true) {
  TabPane.displayName = 'TabPane';
}
var TabPane_default = TabPane;

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabPanelList/index.js
var _excluded = ['key', 'forceRender', 'style', 'className'];
function TabPanelList(_ref) {
  var id = _ref.id,
    activeKey = _ref.activeKey,
    animated = _ref.animated,
    tabPosition = _ref.tabPosition,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane;
  var _React$useContext = React2.useContext(TabContext_default),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var tabPaneAnimated = animated.tabPane;
  var tabPanePrefixCls = ''.concat(prefixCls, '-tabpane');
  return /* @__PURE__ */ React2.createElement(
    'div',
    {
      className: classNames2(''.concat(prefixCls, '-content-holder'))
    },
    /* @__PURE__ */ React2.createElement(
      'div',
      {
        className: classNames2(
          ''.concat(prefixCls, '-content'),
          ''.concat(prefixCls, '-content-').concat(tabPosition),
          _defineProperty({}, ''.concat(prefixCls, '-content-animated'), tabPaneAnimated)
        )
      },
      tabs.map(function(_ref2) {
        var key = _ref2.key,
          forceRender = _ref2.forceRender,
          paneStyle = _ref2.style,
          paneClassName = _ref2.className,
          restTabProps = _objectWithoutProperties(_ref2, _excluded);
        var active = key === activeKey;
        return /* @__PURE__ */ React2.createElement(
          CSSMotion,
          _extends(
            {
              key,
              visible: active,
              forceRender,
              removeOnLeave: !!destroyInactiveTabPane,
              leavedClassName: ''.concat(tabPanePrefixCls, '-hidden')
            },
            animated.tabPaneMotion
          ),
          function(_ref3, ref) {
            var motionStyle = _ref3.style,
              motionClassName = _ref3.className;
            return /* @__PURE__ */ React2.createElement(
              TabPane_default,
              _extends({}, restTabProps, {
                prefixCls: tabPanePrefixCls,
                id,
                tabKey: key,
                animated: tabPaneAnimated,
                active,
                style: _objectSpread(_objectSpread({}, paneStyle), motionStyle),
                className: classNames2(paneClassName, motionClassName),
                ref
              })
            );
          }
        );
      })
    )
  );
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/Wrapper.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/index.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  useState as useState5,
  useRef as useRef5,
  useEffect as useEffect5
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import raf2 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import { useComposeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import ResizeObserver from '/cdn/v99/rc-resize-observer@1.2.0/es2022/rc-resize-observer.development.js';

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useRaf.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import { useRef, useState, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
function useRaf(callback) {
  var rafRef = useRef();
  var removedRef = useRef(false);
  function trigger() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!removedRef.current) {
      raf.cancel(rafRef.current);
      rafRef.current = raf(function() {
        callback.apply(void 0, args);
      });
    }
  }
  useEffect(function() {
    removedRef.current = false;
    return function() {
      removedRef.current = true;
      raf.cancel(rafRef.current);
    };
  }, []);
  return trigger;
}
function useRafState(defaultState) {
  var batchRef = useRef([]);
  var _useState = useState({}),
    _useState2 = _slicedToArray(_useState, 2),
    forceUpdate = _useState2[1];
  var state = useRef(typeof defaultState === 'function' ? defaultState() : defaultState);
  var flushUpdate = useRaf(function() {
    var current = state.current;
    batchRef.current.forEach(function(callback) {
      current = callback(current);
    });
    batchRef.current = [];
    state.current = current;
    forceUpdate({});
  });
  function updater(callback) {
    batchRef.current.push(callback);
    flushUpdate();
  }
  return [state.current, updater];
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/TabNode.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
function TabNode(_ref, ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    active = _ref.active,
    _ref$tab = _ref.tab,
    key = _ref$tab.key,
    label = _ref$tab.label,
    disabled = _ref$tab.disabled,
    closeIcon = _ref$tab.closeIcon,
    closable = _ref.closable,
    renderWrapper = _ref.renderWrapper,
    removeAriaLabel = _ref.removeAriaLabel,
    editable = _ref.editable,
    onClick = _ref.onClick,
    onRemove = _ref.onRemove,
    onFocus = _ref.onFocus,
    style = _ref.style;
  var tabPrefix = ''.concat(prefixCls, '-tab');
  React3.useEffect(function() {
    return onRemove;
  }, []);
  var removable = editable && closable !== false && !disabled;
  function onInternalClick(e) {
    if (disabled) {
      return;
    }
    onClick(e);
  }
  function onRemoveTab(event) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key,
      event
    });
  }
  var node = /* @__PURE__ */ React3.createElement(
    'div',
    {
      key,
      ref,
      className: classNames3(
        tabPrefix,
        ((_classNames = {}),
        _defineProperty2(_classNames, ''.concat(tabPrefix, '-with-remove'), removable),
        _defineProperty2(_classNames, ''.concat(tabPrefix, '-active'), active),
        _defineProperty2(_classNames, ''.concat(tabPrefix, '-disabled'), disabled),
        _classNames)
      ),
      style,
      onClick: onInternalClick
    },
    /* @__PURE__ */ React3.createElement(
      'div',
      {
        role: 'tab',
        'aria-selected': active,
        id: id && ''.concat(id, '-tab-').concat(key),
        className: ''.concat(tabPrefix, '-btn'),
        'aria-controls': id && ''.concat(id, '-panel-').concat(key),
        'aria-disabled': disabled,
        tabIndex: disabled ? null : 0,
        onClick: function onClick2(e) {
          e.stopPropagation();
          onInternalClick(e);
        },
        onKeyDown: function onKeyDown(e) {
          if ([KeyCode.SPACE, KeyCode.ENTER].includes(e.which)) {
            e.preventDefault();
            onInternalClick(e);
          }
        },
        onFocus
      },
      label
    ),
    removable &&
      /* @__PURE__ */ React3.createElement(
        'button',
        {
          type: 'button',
          'aria-label': removeAriaLabel || 'remove',
          tabIndex: 0,
          className: ''.concat(tabPrefix, '-remove'),
          onClick: function onClick2(e) {
            e.stopPropagation();
            onRemoveTab(e);
          }
        },
        closeIcon || editable.removeIcon || '\xD7'
      )
  );
  return renderWrapper ? renderWrapper(node) : node;
}
var TabNode_default = /* @__PURE__ */ React3.forwardRef(TabNode);

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useOffsets.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import { useMemo } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DEFAULT_SIZE = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
};
function useOffsets(tabs, tabSizes, holderScrollWidth) {
  return useMemo(
    function() {
      var _tabs$;
      var map = /* @__PURE__ */ new Map();
      var lastOffset =
        tabSizes.get((_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key) || DEFAULT_SIZE;
      var rightOffset = lastOffset.left + lastOffset.width;
      for (var i = 0; i < tabs.length; i += 1) {
        var key = tabs[i].key;
        var data = tabSizes.get(key);
        if (!data) {
          var _tabs;
          data = tabSizes.get((_tabs = tabs[i - 1]) === null || _tabs === void 0 ? void 0 : _tabs.key) || DEFAULT_SIZE;
        }
        var entity = map.get(key) || _objectSpread2({}, data);
        entity.right = rightOffset - entity.left - entity.width;
        map.set(key, entity);
      }
      return map;
    },
    [
      tabs
        .map(function(tab) {
          return tab.key;
        })
        .join('_'),
      tabSizes,
      holderScrollWidth
    ]
  );
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useVisibleRange.js
import { useMemo as useMemo2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DEFAULT_SIZE2 = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
  right: 0
};
function useVisibleRange(
  tabOffsets,
  visibleTabContentValue,
  transform,
  tabContentSizeValue,
  addNodeSizeValue,
  operationNodeSizeValue,
  _ref
) {
  var tabs = _ref.tabs,
    tabPosition = _ref.tabPosition,
    rtl = _ref.rtl;
  var charUnit;
  var position;
  var transformSize;
  if (['top', 'bottom'].includes(tabPosition)) {
    charUnit = 'width';
    position = rtl ? 'right' : 'left';
    transformSize = Math.abs(transform);
  } else {
    charUnit = 'height';
    position = 'top';
    transformSize = -transform;
  }
  return useMemo2(
    function() {
      if (!tabs.length) {
        return [0, 0];
      }
      var len = tabs.length;
      var endIndex = len;
      for (var i = 0; i < len; i += 1) {
        var offset = tabOffsets.get(tabs[i].key) || DEFAULT_SIZE2;
        if (offset[position] + offset[charUnit] > transformSize + visibleTabContentValue) {
          endIndex = i - 1;
          break;
        }
      }
      var startIndex = 0;
      for (var _i = len - 1; _i >= 0; _i -= 1) {
        var _offset = tabOffsets.get(tabs[_i].key) || DEFAULT_SIZE2;
        if (_offset[position] < transformSize) {
          startIndex = _i + 1;
          break;
        }
      }
      return [startIndex, endIndex];
    },
    [
      tabOffsets,
      visibleTabContentValue,
      tabContentSizeValue,
      addNodeSizeValue,
      operationNodeSizeValue,
      transformSize,
      tabPosition,
      tabs
        .map(function(tab) {
          return tab.key;
        })
        .join('_'),
      rtl
    ]
  );
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/OperationNode.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { useState as useState2, useEffect as useEffect3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode2 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import Menu, { MenuItem } from '/cdn/v99/rc-menu@9.7.2/es2022/rc-menu.development.js';
import Dropdown from '/cdn/v99/rc-dropdown@4.0.1/es2022/rc-dropdown.development.js';

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/AddButton.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function AddButton(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    editable = _ref.editable,
    locale = _ref.locale,
    style = _ref.style;
  if (!editable || editable.showAdd === false) {
    return null;
  }
  return /* @__PURE__ */ React4.createElement(
    'button',
    {
      ref,
      type: 'button',
      className: ''.concat(prefixCls, '-nav-add'),
      style,
      'aria-label': (locale === null || locale === void 0 ? void 0 : locale.addAriaLabel) || 'Add tab',
      onClick: function onClick(event) {
        editable.onEdit('add', {
          event
        });
      }
    },
    editable.addIcon || '+'
  );
}
var AddButton_default = /* @__PURE__ */ React4.forwardRef(AddButton);

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/OperationNode.js
function OperationNode(_ref, ref) {
  var prefixCls = _ref.prefixCls,
    id = _ref.id,
    tabs = _ref.tabs,
    locale = _ref.locale,
    mobile = _ref.mobile,
    _ref$moreIcon = _ref.moreIcon,
    moreIcon = _ref$moreIcon === void 0 ? 'More' : _ref$moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    style = _ref.style,
    className = _ref.className,
    editable = _ref.editable,
    tabBarGutter = _ref.tabBarGutter,
    rtl = _ref.rtl,
    removeAriaLabel = _ref.removeAriaLabel,
    onTabClick = _ref.onTabClick,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName;
  var _useState = useState2(false),
    _useState2 = _slicedToArray2(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var _useState3 = useState2(null),
    _useState4 = _slicedToArray2(_useState3, 2),
    selectedKey = _useState4[0],
    setSelectedKey = _useState4[1];
  var popupId = ''.concat(id, '-more-popup');
  var dropdownPrefix = ''.concat(prefixCls, '-dropdown');
  var selectedItemId = selectedKey !== null ? ''.concat(popupId, '-').concat(selectedKey) : null;
  var dropdownAriaLabel = locale === null || locale === void 0 ? void 0 : locale.dropdownAriaLabel;
  function onRemoveTab(event, key) {
    event.preventDefault();
    event.stopPropagation();
    editable.onEdit('remove', {
      key,
      event
    });
  }
  var menu = /* @__PURE__ */ React5.createElement(
    Menu,
    {
      onClick: function onClick(_ref2) {
        var key = _ref2.key,
          domEvent = _ref2.domEvent;
        onTabClick(key, domEvent);
        setOpen(false);
      },
      prefixCls: ''.concat(dropdownPrefix, '-menu'),
      id: popupId,
      tabIndex: -1,
      role: 'listbox',
      'aria-activedescendant': selectedItemId,
      selectedKeys: [selectedKey],
      'aria-label': dropdownAriaLabel !== void 0 ? dropdownAriaLabel : 'expanded dropdown'
    },
    tabs.map(function(tab) {
      var removable = editable && tab.closable !== false && !tab.disabled;
      return /* @__PURE__ */ React5.createElement(
        MenuItem,
        {
          key: tab.key,
          id: ''.concat(popupId, '-').concat(tab.key),
          role: 'option',
          'aria-controls': id && ''.concat(id, '-panel-').concat(tab.key),
          disabled: tab.disabled
        },
        /* @__PURE__ */ React5.createElement('span', null, tab.label),
        removable &&
          /* @__PURE__ */ React5.createElement(
            'button',
            {
              type: 'button',
              'aria-label': removeAriaLabel || 'remove',
              tabIndex: 0,
              className: ''.concat(dropdownPrefix, '-menu-item-remove'),
              onClick: function onClick(e) {
                e.stopPropagation();
                onRemoveTab(e, tab.key);
              }
            },
            tab.closeIcon || editable.removeIcon || '\xD7'
          )
      );
    })
  );
  function selectOffset(offset) {
    var enabledTabs = tabs.filter(function(tab2) {
      return !tab2.disabled;
    });
    var selectedIndex =
      enabledTabs.findIndex(function(tab2) {
        return tab2.key === selectedKey;
      }) || 0;
    var len = enabledTabs.length;
    for (var i = 0; i < len; i += 1) {
      selectedIndex = (selectedIndex + offset + len) % len;
      var tab = enabledTabs[selectedIndex];
      if (!tab.disabled) {
        setSelectedKey(tab.key);
        return;
      }
    }
  }
  function onKeyDown(e) {
    var which = e.which;
    if (!open) {
      if ([KeyCode2.DOWN, KeyCode2.SPACE, KeyCode2.ENTER].includes(which)) {
        setOpen(true);
        e.preventDefault();
      }
      return;
    }
    switch (which) {
      case KeyCode2.UP:
        selectOffset(-1);
        e.preventDefault();
        break;
      case KeyCode2.DOWN:
        selectOffset(1);
        e.preventDefault();
        break;
      case KeyCode2.ESC:
        setOpen(false);
        break;
      case KeyCode2.SPACE:
      case KeyCode2.ENTER:
        if (selectedKey !== null) onTabClick(selectedKey, e);
        break;
    }
  }
  useEffect3(
    function() {
      var ele = document.getElementById(selectedItemId);
      if (ele && ele.scrollIntoView) {
        ele.scrollIntoView(false);
      }
    },
    [selectedKey]
  );
  useEffect3(
    function() {
      if (!open) {
        setSelectedKey(null);
      }
    },
    [open]
  );
  var moreStyle = _defineProperty3({}, rtl ? 'marginRight' : 'marginLeft', tabBarGutter);
  if (!tabs.length) {
    moreStyle.visibility = 'hidden';
    moreStyle.order = 1;
  }
  var overlayClassName = classNames4(_defineProperty3({}, ''.concat(dropdownPrefix, '-rtl'), rtl));
  var moreNode = mobile
    ? null
    : /* @__PURE__ */ React5.createElement(
        Dropdown,
        {
          prefixCls: dropdownPrefix,
          overlay: menu,
          trigger: ['hover'],
          visible: tabs.length ? open : false,
          transitionName: moreTransitionName,
          onVisibleChange: setOpen,
          overlayClassName: classNames4(overlayClassName, popupClassName),
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          getPopupContainer
        },
        /* @__PURE__ */ React5.createElement(
          'button',
          {
            type: 'button',
            className: ''.concat(prefixCls, '-nav-more'),
            style: moreStyle,
            tabIndex: -1,
            'aria-hidden': 'true',
            'aria-haspopup': 'listbox',
            'aria-controls': popupId,
            id: ''.concat(id, '-more'),
            'aria-expanded': open,
            onKeyDown
          },
          moreIcon
        )
      );
  return /* @__PURE__ */ React5.createElement(
    'div',
    {
      className: classNames4(''.concat(prefixCls, '-nav-operations'), className),
      style,
      ref
    },
    moreNode,
    /* @__PURE__ */ React5.createElement(AddButton_default, {
      prefixCls,
      locale,
      editable
    })
  );
}
var OperationNode_default = /* @__PURE__ */ React5.memo(/* @__PURE__ */ React5.forwardRef(OperationNode), function(
  _,
  next
) {
  return next.tabMoving;
});

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useTouchMove.js
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useState as useState3, useRef as useRef2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var MIN_SWIPE_DISTANCE = 0.1;
var STOP_SWIPE_DISTANCE = 0.01;
var REFRESH_INTERVAL = 20;
var SPEED_OFF_MULTIPLE = Math.pow(0.995, REFRESH_INTERVAL);
function useTouchMove(ref, onOffset) {
  var _useState = useState3(),
    _useState2 = _slicedToArray3(_useState, 2),
    touchPosition = _useState2[0],
    setTouchPosition = _useState2[1];
  var _useState3 = useState3(0),
    _useState4 = _slicedToArray3(_useState3, 2),
    lastTimestamp = _useState4[0],
    setLastTimestamp = _useState4[1];
  var _useState5 = useState3(0),
    _useState6 = _slicedToArray3(_useState5, 2),
    lastTimeDiff = _useState6[0],
    setLastTimeDiff = _useState6[1];
  var _useState7 = useState3(),
    _useState8 = _slicedToArray3(_useState7, 2),
    lastOffset = _useState8[0],
    setLastOffset = _useState8[1];
  var motionRef = useRef2();
  function onTouchStart(e) {
    var _e$touches$ = e.touches[0],
      screenX = _e$touches$.screenX,
      screenY = _e$touches$.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    window.clearInterval(motionRef.current);
  }
  function onTouchMove(e) {
    if (!touchPosition) return;
    e.preventDefault();
    var _e$touches$2 = e.touches[0],
      screenX = _e$touches$2.screenX,
      screenY = _e$touches$2.screenY;
    setTouchPosition({
      x: screenX,
      y: screenY
    });
    var offsetX = screenX - touchPosition.x;
    var offsetY = screenY - touchPosition.y;
    onOffset(offsetX, offsetY);
    var now = Date.now();
    setLastTimestamp(now);
    setLastTimeDiff(now - lastTimestamp);
    setLastOffset({
      x: offsetX,
      y: offsetY
    });
  }
  function onTouchEnd() {
    if (!touchPosition) return;
    setTouchPosition(null);
    setLastOffset(null);
    if (lastOffset) {
      var distanceX = lastOffset.x / lastTimeDiff;
      var distanceY = lastOffset.y / lastTimeDiff;
      var absX = Math.abs(distanceX);
      var absY = Math.abs(distanceY);
      if (Math.max(absX, absY) < MIN_SWIPE_DISTANCE) return;
      var currentX = distanceX;
      var currentY = distanceY;
      motionRef.current = window.setInterval(function() {
        if (Math.abs(currentX) < STOP_SWIPE_DISTANCE && Math.abs(currentY) < STOP_SWIPE_DISTANCE) {
          window.clearInterval(motionRef.current);
          return;
        }
        currentX *= SPEED_OFF_MULTIPLE;
        currentY *= SPEED_OFF_MULTIPLE;
        onOffset(currentX * REFRESH_INTERVAL, currentY * REFRESH_INTERVAL);
      }, REFRESH_INTERVAL);
    }
  }
  var lastWheelDirectionRef = useRef2();
  function onWheel(e) {
    var deltaX = e.deltaX,
      deltaY = e.deltaY;
    var mixed = 0;
    var absX = Math.abs(deltaX);
    var absY = Math.abs(deltaY);
    if (absX === absY) {
      mixed = lastWheelDirectionRef.current === 'x' ? deltaX : deltaY;
    } else if (absX > absY) {
      mixed = deltaX;
      lastWheelDirectionRef.current = 'x';
    } else {
      mixed = deltaY;
      lastWheelDirectionRef.current = 'y';
    }
    if (onOffset(-mixed, -mixed)) {
      e.preventDefault();
    }
  }
  var touchEventsRef = useRef2(null);
  touchEventsRef.current = {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onWheel
  };
  React6.useEffect(function() {
    function onProxyTouchStart(e) {
      touchEventsRef.current.onTouchStart(e);
    }
    function onProxyTouchMove(e) {
      touchEventsRef.current.onTouchMove(e);
    }
    function onProxyTouchEnd(e) {
      touchEventsRef.current.onTouchEnd(e);
    }
    function onProxyWheel(e) {
      touchEventsRef.current.onWheel(e);
    }
    document.addEventListener('touchmove', onProxyTouchMove, {
      passive: false
    });
    document.addEventListener('touchend', onProxyTouchEnd, {
      passive: false
    });
    ref.current.addEventListener('touchstart', onProxyTouchStart, {
      passive: false
    });
    ref.current.addEventListener('wheel', onProxyWheel);
    return function() {
      document.removeEventListener('touchmove', onProxyTouchMove);
      document.removeEventListener('touchend', onProxyTouchEnd);
    };
  }, []);
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useRefs.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRefs() {
  var cacheRefs = useRef3(/* @__PURE__ */ new Map());
  function getRef(key) {
    if (!cacheRefs.current.has(key)) {
      cacheRefs.current.set(key, /* @__PURE__ */ React7.createRef());
    }
    return cacheRefs.current.get(key);
  }
  function removeRef(key) {
    cacheRefs.current.delete(key);
  }
  return [getRef, removeRef];
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useSyncState.js
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useSyncState(defaultState, onChange) {
  var stateRef = React8.useRef(defaultState);
  var _React$useState = React8.useState({}),
    _React$useState2 = _slicedToArray4(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  function setState(updater) {
    var newValue = typeof updater === 'function' ? updater(stateRef.current) : updater;
    if (newValue !== stateRef.current) {
      onChange(newValue, stateRef.current);
    }
    stateRef.current = newValue;
    forceUpdate({});
  }
  return [stateRef.current, setState];
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/util.js
function stringify(obj) {
  var tgt;
  if (obj instanceof Map) {
    tgt = {};
    obj.forEach(function(v, k) {
      tgt[k] = v;
    });
  } else {
    tgt = obj;
  }
  return JSON.stringify(tgt);
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/ExtraContent.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var ExtraContent = /* @__PURE__ */ React9.forwardRef(function(_ref, ref) {
  var position = _ref.position,
    prefixCls = _ref.prefixCls,
    extra = _ref.extra;
  if (!extra) return null;
  var content;
  var assertExtra = {};
  if (_typeof(extra) === 'object' && !(/* @__PURE__ */ React9.isValidElement(extra))) {
    assertExtra = extra;
  } else {
    assertExtra.right = extra;
  }
  if (position === 'right') {
    content = assertExtra.right;
  }
  if (position === 'left') {
    content = assertExtra.left;
  }
  return content
    ? /* @__PURE__ */ React9.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-extra-content'),
          ref
        },
        content
      )
    : null;
});
if (true) {
  ExtraContent.displayName = 'ExtraContent';
}
var ExtraContent_default = ExtraContent;

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/index.js
var getSize = function getSize2(refObj) {
  var _ref = refObj.current || {},
    _ref$offsetWidth = _ref.offsetWidth,
    offsetWidth = _ref$offsetWidth === void 0 ? 0 : _ref$offsetWidth,
    _ref$offsetHeight = _ref.offsetHeight,
    offsetHeight = _ref$offsetHeight === void 0 ? 0 : _ref$offsetHeight;
  return [offsetWidth, offsetHeight];
};
var getUnitValue = function getUnitValue2(size, tabPositionTopOrBottom) {
  return size[tabPositionTopOrBottom ? 0 : 1];
};
function TabNavList(props, ref) {
  var _classNames;
  var _React$useContext = React10.useContext(TabContext_default),
    prefixCls = _React$useContext.prefixCls,
    tabs = _React$useContext.tabs;
  var className = props.className,
    style = props.style,
    id = props.id,
    animated = props.animated,
    activeKey = props.activeKey,
    rtl = props.rtl,
    extra = props.extra,
    editable = props.editable,
    locale = props.locale,
    tabPosition = props.tabPosition,
    tabBarGutter = props.tabBarGutter,
    children = props.children,
    onTabClick = props.onTabClick,
    onTabScroll = props.onTabScroll;
  var containerRef = useRef5();
  var extraLeftRef = useRef5();
  var extraRightRef = useRef5();
  var tabsWrapperRef = useRef5();
  var tabListRef = useRef5();
  var operationsRef = useRef5();
  var innerAddButtonRef = useRef5();
  var _useRefs = useRefs(),
    _useRefs2 = _slicedToArray5(_useRefs, 2),
    getBtnRef = _useRefs2[0],
    removeBtnRef = _useRefs2[1];
  var tabPositionTopOrBottom = tabPosition === 'top' || tabPosition === 'bottom';
  var _useSyncState = useSyncState(0, function(next, prev) {
      if (tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'left' : 'right'
        });
      }
    }),
    _useSyncState2 = _slicedToArray5(_useSyncState, 2),
    transformLeft = _useSyncState2[0],
    setTransformLeft = _useSyncState2[1];
  var _useSyncState3 = useSyncState(0, function(next, prev) {
      if (!tabPositionTopOrBottom && onTabScroll) {
        onTabScroll({
          direction: next > prev ? 'top' : 'bottom'
        });
      }
    }),
    _useSyncState4 = _slicedToArray5(_useSyncState3, 2),
    transformTop = _useSyncState4[0],
    setTransformTop = _useSyncState4[1];
  var _useState = useState5([0, 0]),
    _useState2 = _slicedToArray5(_useState, 2),
    containerExcludeExtraSize = _useState2[0],
    setContainerExcludeExtraSize = _useState2[1];
  var _useState3 = useState5([0, 0]),
    _useState4 = _slicedToArray5(_useState3, 2),
    tabContentSize = _useState4[0],
    setTabContentSize = _useState4[1];
  var _useState5 = useState5([0, 0]),
    _useState6 = _slicedToArray5(_useState5, 2),
    addSize = _useState6[0],
    setAddSize = _useState6[1];
  var _useState7 = useState5([0, 0]),
    _useState8 = _slicedToArray5(_useState7, 2),
    operationSize = _useState8[0],
    setOperationSize = _useState8[1];
  var _useRafState = useRafState(/* @__PURE__ */ new Map()),
    _useRafState2 = _slicedToArray5(_useRafState, 2),
    tabSizes = _useRafState2[0],
    setTabSizes = _useRafState2[1];
  var tabOffsets = useOffsets(tabs, tabSizes, tabContentSize[0]);
  var containerExcludeExtraSizeValue = getUnitValue(containerExcludeExtraSize, tabPositionTopOrBottom);
  var tabContentSizeValue = getUnitValue(tabContentSize, tabPositionTopOrBottom);
  var addSizeValue = getUnitValue(addSize, tabPositionTopOrBottom);
  var operationSizeValue = getUnitValue(operationSize, tabPositionTopOrBottom);
  var needScroll = containerExcludeExtraSizeValue < tabContentSizeValue + addSizeValue;
  var visibleTabContentValue = needScroll
    ? containerExcludeExtraSizeValue - operationSizeValue
    : containerExcludeExtraSizeValue - addSizeValue;
  var operationsHiddenClassName = ''.concat(prefixCls, '-nav-operations-hidden');
  var transformMin = 0;
  var transformMax = 0;
  if (!tabPositionTopOrBottom) {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  } else if (rtl) {
    transformMin = 0;
    transformMax = Math.max(0, tabContentSizeValue - visibleTabContentValue);
  } else {
    transformMin = Math.min(0, visibleTabContentValue - tabContentSizeValue);
    transformMax = 0;
  }
  function alignInRange(value) {
    if (value < transformMin) {
      return transformMin;
    }
    if (value > transformMax) {
      return transformMax;
    }
    return value;
  }
  var touchMovingRef = useRef5();
  var _useState9 = useState5(),
    _useState10 = _slicedToArray5(_useState9, 2),
    lockAnimation = _useState10[0],
    setLockAnimation = _useState10[1];
  function doLockAnimation() {
    setLockAnimation(Date.now());
  }
  function clearTouchMoving() {
    window.clearTimeout(touchMovingRef.current);
  }
  useTouchMove(tabsWrapperRef, function(offsetX, offsetY) {
    function doMove(setState, offset) {
      setState(function(value) {
        var newValue = alignInRange(value + offset);
        return newValue;
      });
    }
    if (containerExcludeExtraSizeValue >= tabContentSizeValue) {
      return false;
    }
    if (tabPositionTopOrBottom) {
      doMove(setTransformLeft, offsetX);
    } else {
      doMove(setTransformTop, offsetY);
    }
    clearTouchMoving();
    doLockAnimation();
    return true;
  });
  useEffect5(
    function() {
      clearTouchMoving();
      if (lockAnimation) {
        touchMovingRef.current = window.setTimeout(function() {
          setLockAnimation(0);
        }, 100);
      }
      return clearTouchMoving;
    },
    [lockAnimation]
  );
  var _useVisibleRange = useVisibleRange(
      tabOffsets,
      visibleTabContentValue,
      tabPositionTopOrBottom ? transformLeft : transformTop,
      tabContentSizeValue,
      addSizeValue,
      operationSizeValue,
      _objectSpread3(
        _objectSpread3({}, props),
        {},
        {
          tabs
        }
      )
    ),
    _useVisibleRange2 = _slicedToArray5(_useVisibleRange, 2),
    visibleStart = _useVisibleRange2[0],
    visibleEnd = _useVisibleRange2[1];
  var scrollToTab = function scrollToTab2() {
    var key = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : activeKey;
    var tabOffset = tabOffsets.get(key) || {
      width: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0
    };
    if (tabPositionTopOrBottom) {
      var newTransform = transformLeft;
      if (rtl) {
        if (tabOffset.right < transformLeft) {
          newTransform = tabOffset.right;
        } else if (tabOffset.right + tabOffset.width > transformLeft + visibleTabContentValue) {
          newTransform = tabOffset.right + tabOffset.width - visibleTabContentValue;
        }
      } else if (tabOffset.left < -transformLeft) {
        newTransform = -tabOffset.left;
      } else if (tabOffset.left + tabOffset.width > -transformLeft + visibleTabContentValue) {
        newTransform = -(tabOffset.left + tabOffset.width - visibleTabContentValue);
      }
      setTransformTop(0);
      setTransformLeft(alignInRange(newTransform));
    } else {
      var _newTransform = transformTop;
      if (tabOffset.top < -transformTop) {
        _newTransform = -tabOffset.top;
      } else if (tabOffset.top + tabOffset.height > -transformTop + visibleTabContentValue) {
        _newTransform = -(tabOffset.top + tabOffset.height - visibleTabContentValue);
      }
      setTransformLeft(0);
      setTransformTop(alignInRange(_newTransform));
    }
  };
  var tabNodeStyle = {};
  if (tabPosition === 'top' || tabPosition === 'bottom') {
    tabNodeStyle[rtl ? 'marginRight' : 'marginLeft'] = tabBarGutter;
  } else {
    tabNodeStyle.marginTop = tabBarGutter;
  }
  var tabNodes = tabs.map(function(tab, i) {
    var key = tab.key;
    return /* @__PURE__ */ React10.createElement(TabNode_default, {
      id,
      prefixCls,
      key,
      tab,
      style: i === 0 ? void 0 : tabNodeStyle,
      closable: tab.closable,
      editable,
      active: key === activeKey,
      renderWrapper: children,
      removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
      ref: getBtnRef(key),
      onClick: function onClick(e) {
        onTabClick(key, e);
      },
      onRemove: function onRemove() {
        removeBtnRef(key);
      },
      onFocus: function onFocus() {
        scrollToTab(key);
        doLockAnimation();
        if (!tabsWrapperRef.current) {
          return;
        }
        if (!rtl) {
          tabsWrapperRef.current.scrollLeft = 0;
        }
        tabsWrapperRef.current.scrollTop = 0;
      }
    });
  });
  var onListHolderResize = useRaf(function() {
    var containerSize = getSize(containerRef);
    var extraLeftSize = getSize(extraLeftRef);
    var extraRightSize = getSize(extraRightRef);
    setContainerExcludeExtraSize([
      containerSize[0] - extraLeftSize[0] - extraRightSize[0],
      containerSize[1] - extraLeftSize[1] - extraRightSize[1]
    ]);
    var newAddSize = getSize(innerAddButtonRef);
    setAddSize(newAddSize);
    var newOperationSize = getSize(operationsRef);
    setOperationSize(newOperationSize);
    var tabContentFullSize = getSize(tabListRef);
    setTabContentSize([tabContentFullSize[0] - newAddSize[0], tabContentFullSize[1] - newAddSize[1]]);
    setTabSizes(function() {
      var newSizes = /* @__PURE__ */ new Map();
      tabs.forEach(function(_ref2) {
        var key = _ref2.key;
        var btnNode = getBtnRef(key).current;
        if (btnNode) {
          newSizes.set(key, {
            width: btnNode.offsetWidth,
            height: btnNode.offsetHeight,
            left: btnNode.offsetLeft,
            top: btnNode.offsetTop
          });
        }
      });
      return newSizes;
    });
  });
  var startHiddenTabs = tabs.slice(0, visibleStart);
  var endHiddenTabs = tabs.slice(visibleEnd + 1);
  var hiddenTabs = [].concat(_toConsumableArray(startHiddenTabs), _toConsumableArray(endHiddenTabs));
  var _useState11 = useState5(),
    _useState12 = _slicedToArray5(_useState11, 2),
    inkStyle = _useState12[0],
    setInkStyle = _useState12[1];
  var activeTabOffset = tabOffsets.get(activeKey);
  var inkBarRafRef = useRef5();
  function cleanInkBarRaf() {
    raf2.cancel(inkBarRafRef.current);
  }
  useEffect5(
    function() {
      var newInkStyle = {};
      if (activeTabOffset) {
        if (tabPositionTopOrBottom) {
          if (rtl) {
            newInkStyle.right = activeTabOffset.right;
          } else {
            newInkStyle.left = activeTabOffset.left;
          }
          newInkStyle.width = activeTabOffset.width;
        } else {
          newInkStyle.top = activeTabOffset.top;
          newInkStyle.height = activeTabOffset.height;
        }
      }
      cleanInkBarRaf();
      inkBarRafRef.current = raf2(function() {
        setInkStyle(newInkStyle);
      });
      return cleanInkBarRaf;
    },
    [activeTabOffset, tabPositionTopOrBottom, rtl]
  );
  useEffect5(
    function() {
      scrollToTab();
    },
    [activeKey, stringify(activeTabOffset), stringify(tabOffsets), tabPositionTopOrBottom]
  );
  useEffect5(
    function() {
      onListHolderResize();
    },
    [rtl]
  );
  var hasDropdown = !!hiddenTabs.length;
  var wrapPrefix = ''.concat(prefixCls, '-nav-wrap');
  var pingLeft;
  var pingRight;
  var pingTop;
  var pingBottom;
  if (tabPositionTopOrBottom) {
    if (rtl) {
      pingRight = transformLeft > 0;
      pingLeft = transformLeft + containerExcludeExtraSizeValue < tabContentSizeValue;
    } else {
      pingLeft = transformLeft < 0;
      pingRight = -transformLeft + containerExcludeExtraSizeValue < tabContentSizeValue;
    }
  } else {
    pingTop = transformTop < 0;
    pingBottom = -transformTop + containerExcludeExtraSizeValue < tabContentSizeValue;
  }
  return /* @__PURE__ */ React10.createElement(
    ResizeObserver,
    {
      onResize: onListHolderResize
    },
    /* @__PURE__ */ React10.createElement(
      'div',
      {
        ref: useComposeRef(ref, containerRef),
        role: 'tablist',
        className: classNames5(''.concat(prefixCls, '-nav'), className),
        style,
        onKeyDown: function onKeyDown() {
          doLockAnimation();
        }
      },
      /* @__PURE__ */ React10.createElement(ExtraContent_default, {
        ref: extraLeftRef,
        position: 'left',
        extra,
        prefixCls
      }),
      /* @__PURE__ */ React10.createElement(
        'div',
        {
          className: classNames5(
            wrapPrefix,
            ((_classNames = {}),
            _defineProperty4(_classNames, ''.concat(wrapPrefix, '-ping-left'), pingLeft),
            _defineProperty4(_classNames, ''.concat(wrapPrefix, '-ping-right'), pingRight),
            _defineProperty4(_classNames, ''.concat(wrapPrefix, '-ping-top'), pingTop),
            _defineProperty4(_classNames, ''.concat(wrapPrefix, '-ping-bottom'), pingBottom),
            _classNames)
          ),
          ref: tabsWrapperRef
        },
        /* @__PURE__ */ React10.createElement(
          ResizeObserver,
          {
            onResize: onListHolderResize
          },
          /* @__PURE__ */ React10.createElement(
            'div',
            {
              ref: tabListRef,
              className: ''.concat(prefixCls, '-nav-list'),
              style: {
                transform: 'translate('.concat(transformLeft, 'px, ').concat(transformTop, 'px)'),
                transition: lockAnimation ? 'none' : void 0
              }
            },
            tabNodes,
            /* @__PURE__ */ React10.createElement(AddButton_default, {
              ref: innerAddButtonRef,
              prefixCls,
              locale,
              editable,
              style: _objectSpread3(
                _objectSpread3({}, tabNodes.length === 0 ? void 0 : tabNodeStyle),
                {},
                {
                  visibility: hasDropdown ? 'hidden' : null
                }
              )
            }),
            /* @__PURE__ */ React10.createElement('div', {
              className: classNames5(
                ''.concat(prefixCls, '-ink-bar'),
                _defineProperty4({}, ''.concat(prefixCls, '-ink-bar-animated'), animated.inkBar)
              ),
              style: inkStyle
            })
          )
        )
      ),
      /* @__PURE__ */ React10.createElement(
        OperationNode_default,
        _extends2({}, props, {
          removeAriaLabel: locale === null || locale === void 0 ? void 0 : locale.removeAriaLabel,
          ref: operationsRef,
          prefixCls,
          tabs: hiddenTabs,
          className: !hasDropdown && operationsHiddenClassName,
          tabMoving: !!lockAnimation
        })
      ),
      /* @__PURE__ */ React10.createElement(ExtraContent_default, {
        ref: extraRightRef,
        position: 'right',
        extra,
        prefixCls
      })
    )
  );
}
var TabNavList_default = /* @__PURE__ */ React10.forwardRef(TabNavList);

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/TabNavList/Wrapper.js
import { useContext as useContext3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var _excluded2 = ['renderTabBar'];
var _excluded22 = ['label', 'key'];
function TabNavListWrapper(_ref) {
  var renderTabBar = _ref.renderTabBar,
    restProps = _objectWithoutProperties2(_ref, _excluded2);
  var _useContext = useContext3(TabContext_default),
    tabs = _useContext.tabs;
  if (renderTabBar) {
    var tabNavBarProps = _objectSpread4(
      _objectSpread4({}, restProps),
      {},
      {
        panes: tabs.map(function(_ref2) {
          var label = _ref2.label,
            key = _ref2.key,
            restTabProps = _objectWithoutProperties2(_ref2, _excluded22);
          return /* @__PURE__ */ React11.createElement(
            TabPane_default,
            _extends3(
              {
                tab: label,
                key,
                tabKey: key
              },
              restTabProps
            )
          );
        })
      }
    );
    return renderTabBar(tabNavBarProps, TabNavList_default);
  }
  return /* @__PURE__ */ React11.createElement(TabNavList_default, restProps);
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/hooks/useAnimateConfig.js
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function useAnimateConfig() {
  var animated =
    arguments.length > 0 && arguments[0] !== void 0
      ? arguments[0]
      : {
          inkBar: true,
          tabPane: false
        };
  var mergedAnimated;
  if (animated === false) {
    mergedAnimated = {
      inkBar: false,
      tabPane: false
    };
  } else if (animated === true) {
    mergedAnimated = {
      inkBar: true,
      tabPane: false
    };
  } else {
    mergedAnimated = _objectSpread5(
      {
        inkBar: true
      },
      _typeof2(animated) === 'object' ? animated : {}
    );
  }
  if (mergedAnimated.tabPaneMotion && mergedAnimated.tabPane === void 0) {
    mergedAnimated.tabPane = true;
  }
  if (!mergedAnimated.tabPaneMotion && mergedAnimated.tabPane) {
    if (true) {
      warning(false, '`animated.tabPane` is true but `animated.tabPaneMotion` is not provided. Motion will not work.');
    }
    mergedAnimated.tabPane = false;
  }
  return mergedAnimated;
}

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/Tabs.js
var _excluded3 = [
  'id',
  'prefixCls',
  'className',
  'items',
  'direction',
  'activeKey',
  'defaultActiveKey',
  'editable',
  'animated',
  'tabPosition',
  'tabBarGutter',
  'tabBarStyle',
  'tabBarExtraContent',
  'locale',
  'moreIcon',
  'moreTransitionName',
  'destroyInactiveTabPane',
  'renderTabBar',
  'onChange',
  'onTabClick',
  'onTabScroll',
  'getPopupContainer',
  'popupClassName'
];
var uuid = 0;
function Tabs(_ref, ref) {
  var _classNames;
  var id = _ref.id,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-tabs' : _ref$prefixCls,
    className = _ref.className,
    items = _ref.items,
    direction = _ref.direction,
    activeKey = _ref.activeKey,
    defaultActiveKey = _ref.defaultActiveKey,
    editable = _ref.editable,
    animated = _ref.animated,
    _ref$tabPosition = _ref.tabPosition,
    tabPosition = _ref$tabPosition === void 0 ? 'top' : _ref$tabPosition,
    tabBarGutter = _ref.tabBarGutter,
    tabBarStyle = _ref.tabBarStyle,
    tabBarExtraContent = _ref.tabBarExtraContent,
    locale = _ref.locale,
    moreIcon = _ref.moreIcon,
    moreTransitionName = _ref.moreTransitionName,
    destroyInactiveTabPane = _ref.destroyInactiveTabPane,
    renderTabBar = _ref.renderTabBar,
    onChange = _ref.onChange,
    onTabClick = _ref.onTabClick,
    onTabScroll = _ref.onTabScroll,
    getPopupContainer = _ref.getPopupContainer,
    popupClassName = _ref.popupClassName,
    restProps = _objectWithoutProperties3(_ref, _excluded3);
  var tabs = React12.useMemo(
    function() {
      return (items || []).filter(function(item) {
        return item && _typeof3(item) === 'object' && 'key' in item;
      });
    },
    [items]
  );
  var rtl = direction === 'rtl';
  var mergedAnimated = useAnimateConfig(animated);
  var _useState = useState6(false),
    _useState2 = _slicedToArray6(_useState, 2),
    mobile = _useState2[0],
    setMobile = _useState2[1];
  useEffect6(function() {
    setMobile(isMobile());
  }, []);
  var _useMergedState = useMergedState(
      function() {
        var _tabs$;
        return (_tabs$ = tabs[0]) === null || _tabs$ === void 0 ? void 0 : _tabs$.key;
      },
      {
        value: activeKey,
        defaultValue: defaultActiveKey
      }
    ),
    _useMergedState2 = _slicedToArray6(_useMergedState, 2),
    mergedActiveKey = _useMergedState2[0],
    setMergedActiveKey = _useMergedState2[1];
  var _useState3 = useState6(function() {
      return tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey;
      });
    }),
    _useState4 = _slicedToArray6(_useState3, 2),
    activeIndex = _useState4[0],
    setActiveIndex = _useState4[1];
  useEffect6(
    function() {
      var newActiveIndex = tabs.findIndex(function(tab) {
        return tab.key === mergedActiveKey;
      });
      if (newActiveIndex === -1) {
        var _tabs$newActiveIndex;
        newActiveIndex = Math.max(0, Math.min(activeIndex, tabs.length - 1));
        setMergedActiveKey(
          (_tabs$newActiveIndex = tabs[newActiveIndex]) === null || _tabs$newActiveIndex === void 0
            ? void 0
            : _tabs$newActiveIndex.key
        );
      }
      setActiveIndex(newActiveIndex);
    },
    [
      tabs
        .map(function(tab) {
          return tab.key;
        })
        .join('_'),
      mergedActiveKey,
      activeIndex
    ]
  );
  var _useMergedState3 = useMergedState(null, {
      value: id
    }),
    _useMergedState4 = _slicedToArray6(_useMergedState3, 2),
    mergedId = _useMergedState4[0],
    setMergedId = _useMergedState4[1];
  useEffect6(function() {
    if (!id) {
      setMergedId('rc-tabs-'.concat(false ? 'test' : uuid));
      uuid += 1;
    }
  }, []);
  function onInternalTabClick(key, e) {
    onTabClick === null || onTabClick === void 0 ? void 0 : onTabClick(key, e);
    var isActiveChanged = key !== mergedActiveKey;
    setMergedActiveKey(key);
    if (isActiveChanged) {
      onChange === null || onChange === void 0 ? void 0 : onChange(key);
    }
  }
  var sharedProps = {
    id: mergedId,
    activeKey: mergedActiveKey,
    animated: mergedAnimated,
    tabPosition,
    rtl,
    mobile
  };
  var tabNavBar;
  var tabNavBarProps = _objectSpread6(
    _objectSpread6({}, sharedProps),
    {},
    {
      editable,
      locale,
      moreIcon,
      moreTransitionName,
      tabBarGutter,
      onTabClick: onInternalTabClick,
      onTabScroll,
      extra: tabBarExtraContent,
      style: tabBarStyle,
      panes: null,
      getPopupContainer,
      popupClassName
    }
  );
  return /* @__PURE__ */ React12.createElement(
    TabContext_default.Provider,
    {
      value: {
        tabs,
        prefixCls
      }
    },
    /* @__PURE__ */ React12.createElement(
      'div',
      _extends4(
        {
          ref,
          id,
          className: classNames6(
            prefixCls,
            ''.concat(prefixCls, '-').concat(tabPosition),
            ((_classNames = {}),
            _defineProperty5(_classNames, ''.concat(prefixCls, '-mobile'), mobile),
            _defineProperty5(_classNames, ''.concat(prefixCls, '-editable'), editable),
            _defineProperty5(_classNames, ''.concat(prefixCls, '-rtl'), rtl),
            _classNames),
            className
          )
        },
        restProps
      ),
      tabNavBar,
      /* @__PURE__ */ React12.createElement(
        TabNavListWrapper,
        _extends4({}, tabNavBarProps, {
          renderTabBar
        })
      ),
      /* @__PURE__ */ React12.createElement(
        TabPanelList,
        _extends4(
          {
            destroyInactiveTabPane
          },
          sharedProps,
          {
            animated: mergedAnimated
          }
        )
      )
    )
  );
}
var ForwardTabs = /* @__PURE__ */ React12.forwardRef(Tabs);
if (true) {
  ForwardTabs.displayName = 'Tabs';
}
var Tabs_default = ForwardTabs;

// esm-build-bd951b99e1942c09a57cd19ffb6878b96509f606-5f75066c/node_modules/rc-tabs/es/index.js
var es_default = Tabs_default;
export { es_default as default };
