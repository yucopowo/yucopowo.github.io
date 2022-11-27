/* esm.sh - esbuild bundle(rc-drawer@6.0.1) es2022 development */
// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/Drawer.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Portal from '/cdn/v99/@rc-component/portal@1.0.3/es2022/portal.development.js';

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/DrawerPopup.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/DrawerPanel.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var DrawerPanel = function DrawerPanel2(props) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    children = props.children,
    containerRef = props.containerRef;
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: classNames(''.concat(prefixCls, '-content'), className),
        style: _objectSpread({}, style),
        'aria-modal': 'true',
        role: 'dialog',
        ref: containerRef
      },
      children
    )
  );
};
if (true) {
  DrawerPanel.displayName = 'DrawerPanel';
}
var DrawerPanel_default = DrawerPanel;

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/context.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DrawerContext = /* @__PURE__ */ React2.createContext(null);
var context_default = DrawerContext;

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/DrawerPopup.js
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/util.js
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function parseWidthHeight(value) {
  if (typeof value === 'string' && String(Number(value)) === value) {
    warning(false, 'Invalid value type of `width` or `height` which should be number type instead.');
    return Number(value);
  }
  return value;
}
function warnCheck(props) {
  warning(!('wrapperClassName' in props), "'wrapperClassName' is removed. Please use 'rootClassName' instead.");
}

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/DrawerPopup.js
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none',
  position: 'absolute'
};
function DrawerPopup(props) {
  var _ref, _pushConfig$distance, _pushConfig, _classNames;
  var prefixCls = props.prefixCls,
    open = props.open,
    placement = props.placement,
    inline = props.inline,
    push = props.push,
    forceRender = props.forceRender,
    autoFocus = props.autoFocus,
    keyboard = props.keyboard,
    rootClassName = props.rootClassName,
    rootStyle = props.rootStyle,
    zIndex = props.zIndex,
    className = props.className,
    style = props.style,
    motion = props.motion,
    width = props.width,
    height = props.height,
    children = props.children,
    contentWrapperStyle = props.contentWrapperStyle,
    mask = props.mask,
    maskClosable = props.maskClosable,
    maskMotion = props.maskMotion,
    maskClassName = props.maskClassName,
    maskStyle = props.maskStyle,
    afterOpenChange = props.afterOpenChange,
    onClose = props.onClose;
  var panelRef = React3.useRef();
  var sentinelStartRef = React3.useRef();
  var sentinelEndRef = React3.useRef();
  var onPanelKeyDown = function onPanelKeyDown2(event) {
    var keyCode = event.keyCode,
      shiftKey = event.shiftKey;
    switch (keyCode) {
      case KeyCode.TAB: {
        if (keyCode === KeyCode.TAB) {
          if (!shiftKey && document.activeElement === sentinelEndRef.current) {
            var _sentinelStartRef$cur;
            (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0
              ? void 0
              : _sentinelStartRef$cur.focus({
                  preventScroll: true
                });
          } else if (shiftKey && document.activeElement === sentinelStartRef.current) {
            var _sentinelEndRef$curre;
            (_sentinelEndRef$curre = sentinelEndRef.current) === null || _sentinelEndRef$curre === void 0
              ? void 0
              : _sentinelEndRef$curre.focus({
                  preventScroll: true
                });
          }
        }
        break;
      }
      case KeyCode.ESC: {
        if (onClose && keyboard) {
          onClose(event);
        }
        break;
      }
    }
  };
  React3.useEffect(
    function() {
      if (open && autoFocus) {
        var _panelRef$current;
        (_panelRef$current = panelRef.current) === null || _panelRef$current === void 0
          ? void 0
          : _panelRef$current.focus({
              preventScroll: true
            });
      }
    },
    [open, autoFocus]
  );
  var _React$useState = React3.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    pushed = _React$useState2[0],
    setPushed = _React$useState2[1];
  var parentContext = React3.useContext(context_default);
  var pushConfig;
  if (push === false) {
    pushConfig = {
      distance: 0
    };
  } else if (push === true) {
    pushConfig = {};
  } else {
    pushConfig = push || {};
  }
  var pushDistance =
    (_ref =
      (_pushConfig$distance =
        (_pushConfig = pushConfig) === null || _pushConfig === void 0 ? void 0 : _pushConfig.distance) !== null &&
      _pushConfig$distance !== void 0
        ? _pushConfig$distance
        : parentContext === null || parentContext === void 0
        ? void 0
        : parentContext.pushDistance) !== null && _ref !== void 0
      ? _ref
      : 180;
  var mergedContext = React3.useMemo(
    function() {
      return {
        pushDistance,
        push: function push2() {
          setPushed(true);
        },
        pull: function pull() {
          setPushed(false);
        }
      };
    },
    [pushDistance]
  );
  React3.useEffect(
    function() {
      if (open) {
        var _parentContext$push;
        parentContext === null || parentContext === void 0
          ? void 0
          : (_parentContext$push = parentContext.push) === null || _parentContext$push === void 0
          ? void 0
          : _parentContext$push.call(parentContext);
      } else {
        var _parentContext$pull;
        parentContext === null || parentContext === void 0
          ? void 0
          : (_parentContext$pull = parentContext.pull) === null || _parentContext$pull === void 0
          ? void 0
          : _parentContext$pull.call(parentContext);
      }
    },
    [open]
  );
  React3.useEffect(function() {
    return function() {
      var _parentContext$pull2;
      parentContext === null || parentContext === void 0
        ? void 0
        : (_parentContext$pull2 = parentContext.pull) === null || _parentContext$pull2 === void 0
        ? void 0
        : _parentContext$pull2.call(parentContext);
    };
  }, []);
  var maskNode =
    mask &&
    /* @__PURE__ */ React3.createElement(
      CSSMotion,
      _extends(
        {
          key: 'mask'
        },
        maskMotion,
        {
          visible: open
        }
      ),
      function(_ref2, maskRef) {
        var motionMaskClassName = _ref2.className,
          motionMaskStyle = _ref2.style;
        return /* @__PURE__ */ React3.createElement('div', {
          className: classNames2(''.concat(prefixCls, '-mask'), motionMaskClassName, maskClassName),
          style: _objectSpread2(_objectSpread2({}, motionMaskStyle), maskStyle),
          onClick: maskClosable ? onClose : void 0,
          ref: maskRef
        });
      }
    );
  var motionProps = typeof motion === 'function' ? motion(placement) : motion;
  var wrapperStyle = {};
  if (pushed && pushDistance) {
    switch (placement) {
      case 'top':
        wrapperStyle.transform = 'translateY('.concat(pushDistance, 'px)');
        break;
      case 'bottom':
        wrapperStyle.transform = 'translateY('.concat(-pushDistance, 'px)');
        break;
      case 'left':
        wrapperStyle.transform = 'translateX('.concat(pushDistance, 'px)');
        break;
      default:
        wrapperStyle.transform = 'translateX('.concat(-pushDistance, 'px)');
        break;
    }
  }
  if (placement === 'left' || placement === 'right') {
    wrapperStyle.width = parseWidthHeight(width);
  } else {
    wrapperStyle.height = parseWidthHeight(height);
  }
  var panelNode = /* @__PURE__ */ React3.createElement(
    CSSMotion,
    _extends(
      {
        key: 'panel'
      },
      motionProps,
      {
        visible: open,
        forceRender,
        onVisibleChanged: function onVisibleChanged(nextVisible) {
          afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(nextVisible);
        },
        removeOnLeave: false,
        leavedClassName: ''.concat(prefixCls, '-content-wrapper-hidden')
      }
    ),
    function(_ref3, motionRef) {
      var motionClassName = _ref3.className,
        motionStyle = _ref3.style;
      return /* @__PURE__ */ React3.createElement(
        'div',
        {
          className: classNames2(''.concat(prefixCls, '-content-wrapper'), motionClassName),
          style: _objectSpread2(_objectSpread2(_objectSpread2({}, wrapperStyle), motionStyle), contentWrapperStyle)
        },
        /* @__PURE__ */ React3.createElement(
          DrawerPanel_default,
          {
            containerRef: motionRef,
            prefixCls,
            className,
            style
          },
          children
        )
      );
    }
  );
  var containerStyle = _objectSpread2({}, rootStyle);
  if (zIndex) {
    containerStyle.zIndex = zIndex;
  }
  return /* @__PURE__ */ React3.createElement(
    context_default.Provider,
    {
      value: mergedContext
    },
    /* @__PURE__ */ React3.createElement(
      'div',
      {
        className: classNames2(
          prefixCls,
          ''.concat(prefixCls, '-').concat(placement),
          rootClassName,
          ((_classNames = {}),
          _defineProperty(_classNames, ''.concat(prefixCls, '-open'), open),
          _defineProperty(_classNames, ''.concat(prefixCls, '-inline'), inline),
          _classNames)
        ),
        style: containerStyle,
        tabIndex: -1,
        ref: panelRef,
        onKeyDown: onPanelKeyDown
      },
      maskNode,
      /* @__PURE__ */ React3.createElement('div', {
        tabIndex: 0,
        ref: sentinelStartRef,
        style: sentinelStyle,
        'aria-hidden': 'true',
        'data-sentinel': 'start'
      }),
      panelNode,
      /* @__PURE__ */ React3.createElement('div', {
        tabIndex: 0,
        ref: sentinelEndRef,
        style: sentinelStyle,
        'aria-hidden': 'true',
        'data-sentinel': 'end'
      })
    )
  );
}

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/Drawer.js
var Drawer = function Drawer2(props) {
  var open = props.open,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    prefixCls = props.prefixCls,
    afterOpenChange = props.afterOpenChange,
    destroyOnClose = props.destroyOnClose,
    mask = props.mask;
  var _React$useState = React4.useState(false),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  if (true) {
    warnCheck(props);
  }
  var internalAfterOpenChange = function internalAfterOpenChange2(nextVisible) {
    setAnimatedVisible(nextVisible);
    afterOpenChange === null || afterOpenChange === void 0 ? void 0 : afterOpenChange(nextVisible);
  };
  if (!forceRender && !animatedVisible && !open && destroyOnClose) {
    return null;
  }
  var sharedDrawerProps = _objectSpread3(
    _objectSpread3({}, props),
    {},
    {
      prefixCls,
      afterOpenChange: internalAfterOpenChange
    }
  );
  return /* @__PURE__ */ React4.createElement(
    Portal,
    {
      open: open || forceRender || animatedVisible,
      autoDestroy: false,
      getContainer,
      autoLock: mask && (open || animatedVisible)
    },
    /* @__PURE__ */ React4.createElement(
      DrawerPopup,
      _extends2({}, sharedDrawerProps, {
        inline: getContainer === false
      })
    )
  );
};
Drawer.defaultProps = {
  open: false,
  prefixCls: 'rc-drawer',
  placement: 'right',
  autoFocus: true,
  keyboard: true,
  width: 378,
  mask: true,
  maskClosable: true
};
if (true) {
  Drawer.displayName = 'Drawer';
}
var Drawer_default = Drawer;

// esm-build-91a20dcc013beb168b07637380dc87e1bc161f88-4880ce1e/node_modules/rc-drawer/es/index.js
var es_default = Drawer_default;
export { es_default as default };
