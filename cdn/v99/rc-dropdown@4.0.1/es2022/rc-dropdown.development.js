/* esm.sh - esbuild bundle(rc-dropdown@4.0.1) es2022 development */
// esm-build-95b6528551faac1d031eb3355d3068e5e965ef57-8ff5aeb3/node_modules/rc-dropdown/es/Dropdown.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-95b6528551faac1d031eb3355d3068e5e965ef57-8ff5aeb3/node_modules/rc-dropdown/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  topCenter: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottomCenter: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  }
};
var placements_default = placements;

// esm-build-95b6528551faac1d031eb3355d3068e5e965ef57-8ff5aeb3/node_modules/rc-dropdown/es/hooks/useAccessibility.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import { getFocusNodeList } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/focus.development.js';
var ESC = KeyCode.ESC;
var TAB = KeyCode.TAB;
function useAccessibility(_ref) {
  var visible = _ref.visible,
    setTriggerVisible = _ref.setTriggerVisible,
    triggerRef = _ref.triggerRef,
    onVisibleChange = _ref.onVisibleChange,
    autoFocus = _ref.autoFocus;
  var focusMenuRef = React.useRef(false);
  var handleCloseMenuAndReturnFocus = function handleCloseMenuAndReturnFocus2() {
    if (visible && triggerRef.current) {
      var _triggerRef$current, _triggerRef$current$t, _triggerRef$current$t2, _triggerRef$current$t3;
      (_triggerRef$current = triggerRef.current) === null || _triggerRef$current === void 0
        ? void 0
        : (_triggerRef$current$t = _triggerRef$current.triggerRef) === null || _triggerRef$current$t === void 0
        ? void 0
        : (_triggerRef$current$t2 = _triggerRef$current$t.current) === null || _triggerRef$current$t2 === void 0
        ? void 0
        : (_triggerRef$current$t3 = _triggerRef$current$t2.focus) === null || _triggerRef$current$t3 === void 0
        ? void 0
        : _triggerRef$current$t3.call(_triggerRef$current$t2);
      setTriggerVisible(false);
      if (typeof onVisibleChange === 'function') {
        onVisibleChange(false);
      }
    }
  };
  var focusMenu = function focusMenu2() {
    var _triggerRef$current2, _triggerRef$current2$, _triggerRef$current2$2, _triggerRef$current2$3;
    var elements = getFocusNodeList(
      (_triggerRef$current2 = triggerRef.current) === null || _triggerRef$current2 === void 0
        ? void 0
        : (_triggerRef$current2$ = _triggerRef$current2.popupRef) === null || _triggerRef$current2$ === void 0
        ? void 0
        : (_triggerRef$current2$2 = _triggerRef$current2$.current) === null || _triggerRef$current2$2 === void 0
        ? void 0
        : (_triggerRef$current2$3 = _triggerRef$current2$2.getElement) === null || _triggerRef$current2$3 === void 0
        ? void 0
        : _triggerRef$current2$3.call(_triggerRef$current2$2)
    );
    var firstElement = elements[0];
    if (firstElement === null || firstElement === void 0 ? void 0 : firstElement.focus) {
      firstElement.focus();
      focusMenuRef.current = true;
      return true;
    }
    return false;
  };
  var handleKeyDown = function handleKeyDown2(event) {
    switch (event.keyCode) {
      case ESC:
        handleCloseMenuAndReturnFocus();
        break;
      case TAB: {
        var focusResult = false;
        if (!focusMenuRef.current) {
          focusResult = focusMenu();
        }
        if (focusResult) {
          event.preventDefault();
        } else {
          handleCloseMenuAndReturnFocus();
        }
        break;
      }
    }
  };
  React.useEffect(
    function() {
      if (visible) {
        window.addEventListener('keydown', handleKeyDown);
        if (autoFocus) {
          raf(focusMenu, 3);
        }
        return function() {
          window.removeEventListener('keydown', handleKeyDown);
          focusMenuRef.current = false;
        };
      }
      return function() {
        focusMenuRef.current = false;
      };
    },
    [visible]
  );
}

// esm-build-95b6528551faac1d031eb3355d3068e5e965ef57-8ff5aeb3/node_modules/rc-dropdown/es/Dropdown.js
var _excluded = [
  'arrow',
  'prefixCls',
  'transitionName',
  'animation',
  'align',
  'placement',
  'placements',
  'getPopupContainer',
  'showAction',
  'hideAction',
  'overlayClassName',
  'overlayStyle',
  'visible',
  'trigger',
  'autoFocus'
];
function Dropdown(props, ref) {
  var _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? false : _props$arrow,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dropdown' : _props$prefixCls,
    transitionName = props.transitionName,
    animation = props.animation,
    align = props.align,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottomLeft' : _props$placement,
    _props$placements = props.placements,
    placements2 = _props$placements === void 0 ? placements_default : _props$placements,
    getPopupContainer = props.getPopupContainer,
    showAction = props.showAction,
    hideAction = props.hideAction,
    overlayClassName = props.overlayClassName,
    overlayStyle = props.overlayStyle,
    visible = props.visible,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    autoFocus = props.autoFocus,
    otherProps = _objectWithoutProperties(props, _excluded);
  var _React$useState = React2.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    triggerVisible = _React$useState2[0],
    setTriggerVisible = _React$useState2[1];
  var mergedVisible = 'visible' in props ? visible : triggerVisible;
  var triggerRef = React2.useRef(null);
  React2.useImperativeHandle(ref, function() {
    return triggerRef.current;
  });
  useAccessibility({
    visible: mergedVisible,
    setTriggerVisible,
    triggerRef,
    onVisibleChange: props.onVisibleChange,
    autoFocus
  });
  var getOverlayElement = function getOverlayElement2() {
    var overlay = props.overlay;
    var overlayElement;
    if (typeof overlay === 'function') {
      overlayElement = overlay();
    } else {
      overlayElement = overlay;
    }
    return overlayElement;
  };
  var onClick = function onClick2(e) {
    var onOverlayClick = props.onOverlayClick;
    setTriggerVisible(false);
    if (onOverlayClick) {
      onOverlayClick(e);
    }
  };
  var onVisibleChange = function onVisibleChange2(newVisible) {
    var onVisibleChangeProp = props.onVisibleChange;
    setTriggerVisible(newVisible);
    if (typeof onVisibleChangeProp === 'function') {
      onVisibleChangeProp(newVisible);
    }
  };
  var getMenuElement = function getMenuElement2() {
    var overlayElement = getOverlayElement();
    return /* @__PURE__ */ React2.createElement(
      React2.Fragment,
      null,
      arrow &&
        /* @__PURE__ */ React2.createElement('div', {
          className: ''.concat(prefixCls, '-arrow')
        }),
      overlayElement
    );
  };
  var getMenuElementOrLambda = function getMenuElementOrLambda2() {
    var overlay = props.overlay;
    if (typeof overlay === 'function') {
      return getMenuElement;
    }
    return getMenuElement();
  };
  var getMinOverlayWidthMatchTrigger = function getMinOverlayWidthMatchTrigger2() {
    var minOverlayWidthMatchTrigger = props.minOverlayWidthMatchTrigger,
      alignPoint = props.alignPoint;
    if ('minOverlayWidthMatchTrigger' in props) {
      return minOverlayWidthMatchTrigger;
    }
    return !alignPoint;
  };
  var getOpenClassName = function getOpenClassName2() {
    var openClassName = props.openClassName;
    if (openClassName !== void 0) {
      return openClassName;
    }
    return ''.concat(prefixCls, '-open');
  };
  var renderChildren = function renderChildren2() {
    var children = props.children;
    var childrenProps = children.props ? children.props : {};
    var childClassName = classNames(childrenProps.className, getOpenClassName());
    return mergedVisible && children
      ? /* @__PURE__ */ React2.cloneElement(children, {
          className: childClassName
        })
      : children;
  };
  var triggerHideAction = hideAction;
  if (!triggerHideAction && trigger.indexOf('contextMenu') !== -1) {
    triggerHideAction = ['click'];
  }
  return /* @__PURE__ */ React2.createElement(
    Trigger,
    _objectSpread(
      _objectSpread(
        {
          builtinPlacements: placements2
        },
        otherProps
      ),
      {},
      {
        prefixCls,
        ref: triggerRef,
        popupClassName: classNames(overlayClassName, _defineProperty({}, ''.concat(prefixCls, '-show-arrow'), arrow)),
        popupStyle: overlayStyle,
        action: trigger,
        showAction,
        hideAction: triggerHideAction || [],
        popupPlacement: placement,
        popupAlign: align,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupVisible: mergedVisible,
        stretch: getMinOverlayWidthMatchTrigger() ? 'minWidth' : '',
        popup: getMenuElementOrLambda(),
        onPopupVisibleChange: onVisibleChange,
        onPopupClick: onClick,
        getPopupContainer
      }
    ),
    renderChildren()
  );
}
var Dropdown_default = /* @__PURE__ */ React2.forwardRef(Dropdown);

// esm-build-95b6528551faac1d031eb3355d3068e5e965ef57-8ff5aeb3/node_modules/rc-dropdown/es/index.js
var es_default = Dropdown_default;
export { es_default as default };
