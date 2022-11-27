/* esm.sh - esbuild bundle(rc-trigger@5.3.4) es2022 development */
// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/index.js
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import ReactDOM from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
import raf2 from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import contains from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/contains.development.js';
import findDOMNode from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/findDOMNode.development.js';
import { composeRef, supportRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import addEventListener from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/addEventListener.development.js';
import Portal from '/cdn/v99/rc-util@5.24.6/es2022/es/Portal.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/utils/alignUtil.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
function isPointsEq(a1, a2, isAlignPoint) {
  if (isAlignPoint) {
    return a1[0] === a2[0];
  }
  return a1[0] === a2[0] && a1[1] === a2[1];
}
function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _objectSpread(_objectSpread({}, baseAlign), align);
}
function getAlignPopupClassName(builtinPlacements, prefixCls, align, isAlignPoint) {
  var points = align.points;
  var placements = Object.keys(builtinPlacements);
  for (var i = 0; i < placements.length; i += 1) {
    var placement = placements[i];
    if (isPointsEq(builtinPlacements[placement].points, points, isAlignPoint)) {
      return ''.concat(prefixCls, '-placement-').concat(placement);
    }
  }
  return '';
}

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/index.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useState as useState4, useEffect as useEffect3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import isMobile from '/cdn/v99/rc-util@5.24.6/es2022/es/isMobile.development.js';

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/Mask.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/utils/legacyUtil.js
function getMotion(_ref) {
  var prefixCls = _ref.prefixCls,
    motion = _ref.motion,
    animation = _ref.animation,
    transitionName = _ref.transitionName;
  if (motion) {
    return motion;
  }
  if (animation) {
    return {
      motionName: ''.concat(prefixCls, '-').concat(animation)
    };
  }
  if (transitionName) {
    return {
      motionName: transitionName
    };
  }
  return null;
}

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/Mask.js
function Mask(props) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    mask = props.mask,
    maskMotion = props.maskMotion,
    maskAnimation = props.maskAnimation,
    maskTransitionName = props.maskTransitionName;
  if (!mask) {
    return null;
  }
  var motion = {};
  if (maskMotion || maskTransitionName || maskAnimation) {
    motion = _objectSpread2(
      {
        motionAppear: true
      },
      getMotion({
        motion: maskMotion,
        prefixCls,
        transitionName: maskTransitionName,
        animation: maskAnimation
      })
    );
  }
  return /* @__PURE__ */ React.createElement(
    CSSMotion,
    _extends({}, motion, {
      visible,
      removeOnLeave: true
    }),
    function(_ref) {
      var className = _ref.className;
      return /* @__PURE__ */ React.createElement('div', {
        style: {
          zIndex
        },
        className: classNames(''.concat(prefixCls, '-mask'), className)
      });
    }
  );
}

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/PopupInner.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef2, useState as useState3 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Align from '/cdn/v99/rc-align@4.0.12/es2022/rc-align.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import CSSMotion2 from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/useVisibleStatus.js
import _regeneratorRuntime from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/regeneratorRuntime.development.js';
import _asyncToGenerator from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/asyncToGenerator.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import { useEffect, useRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import useState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useState.development.js';
var StatusQueue = ['measure', 'alignPre', 'align', null, 'motion'];
var useVisibleStatus_default = function(visible, doMeasure) {
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    status = _useState2[0],
    setInternalStatus = _useState2[1];
  var rafRef = useRef();
  function setStatus(nextStatus) {
    setInternalStatus(nextStatus, true);
  }
  function cancelRaf() {
    raf.cancel(rafRef.current);
  }
  function goNextStatus(callback) {
    cancelRaf();
    rafRef.current = raf(function() {
      setStatus(function(prev) {
        switch (status) {
          case 'align':
            return 'motion';
          case 'motion':
            return 'stable';
          default:
        }
        return prev;
      });
      callback === null || callback === void 0 ? void 0 : callback();
    });
  }
  useEffect(
    function() {
      setStatus('measure');
    },
    [visible]
  );
  useEffect(
    function() {
      switch (status) {
        case 'measure':
          doMeasure();
          break;
        default:
      }
      if (status) {
        rafRef.current = raf(
          /* @__PURE__ */ _asyncToGenerator(
            /* @__PURE__ */ _regeneratorRuntime().mark(function _callee() {
              var index, nextStatus;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      index = StatusQueue.indexOf(status);
                      nextStatus = StatusQueue[index + 1];
                      if (nextStatus && index !== -1) {
                        setStatus(nextStatus);
                      }
                    case 3:
                    case 'end':
                      return _context.stop();
                  }
                }
              }, _callee);
            })
          )
        );
      }
    },
    [status]
  );
  useEffect(function() {
    return function() {
      cancelRaf();
    };
  }, []);
  return [status, goNextStatus];
};

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/useStretchStyle.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useStretchStyle_default = function(stretch) {
  var _React$useState = React2.useState({
      width: 0,
      height: 0
    }),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    targetSize = _React$useState2[0],
    setTargetSize = _React$useState2[1];
  function measureStretch(element) {
    var tgtWidth = element.offsetWidth,
      tgtHeight = element.offsetHeight;
    var _element$getBoundingC = element.getBoundingClientRect(),
      width = _element$getBoundingC.width,
      height = _element$getBoundingC.height;
    if (Math.abs(tgtWidth - width) < 1 && Math.abs(tgtHeight - height) < 1) {
      tgtWidth = width;
      tgtHeight = height;
    }
    setTargetSize({
      width: tgtWidth,
      height: tgtHeight
    });
  }
  var style = React2.useMemo(
    function() {
      var sizeStyle = {};
      if (stretch) {
        var width = targetSize.width,
          height = targetSize.height;
        if (stretch.indexOf('height') !== -1 && height) {
          sizeStyle.height = height;
        } else if (stretch.indexOf('minHeight') !== -1 && height) {
          sizeStyle.minHeight = height;
        }
        if (stretch.indexOf('width') !== -1 && width) {
          sizeStyle.width = width;
        } else if (stretch.indexOf('minWidth') !== -1 && width) {
          sizeStyle.minWidth = width;
        }
      }
      return sizeStyle;
    },
    [stretch, targetSize]
  );
  return [style, measureStretch];
};

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/PopupInner.js
var PopupInner = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var visible = props.visible,
    prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    children = props.children,
    zIndex = props.zIndex,
    stretch = props.stretch,
    destroyPopupOnHide = props.destroyPopupOnHide,
    forceRender = props.forceRender,
    align = props.align,
    point = props.point,
    getRootDomNode = props.getRootDomNode,
    getClassNameFromAlign = props.getClassNameFromAlign,
    onAlign = props.onAlign,
    onMouseEnter = props.onMouseEnter,
    onMouseLeave = props.onMouseLeave,
    onMouseDown = props.onMouseDown,
    onTouchStart = props.onTouchStart,
    onClick = props.onClick;
  var alignRef = useRef2();
  var elementRef = useRef2();
  var _useState = useState3(),
    _useState2 = _slicedToArray3(_useState, 2),
    alignedClassName = _useState2[0],
    setAlignedClassName = _useState2[1];
  var _useStretchStyle = useStretchStyle_default(stretch),
    _useStretchStyle2 = _slicedToArray3(_useStretchStyle, 2),
    stretchStyle = _useStretchStyle2[0],
    measureStretchStyle = _useStretchStyle2[1];
  function doMeasure() {
    if (stretch) {
      measureStretchStyle(getRootDomNode());
    }
  }
  var _useVisibleStatus = useVisibleStatus_default(visible, doMeasure),
    _useVisibleStatus2 = _slicedToArray3(_useVisibleStatus, 2),
    status = _useVisibleStatus2[0],
    goNextStatus = _useVisibleStatus2[1];
  var _useState3 = useState3(0),
    _useState4 = _slicedToArray3(_useState3, 2),
    alignTimes = _useState4[0],
    setAlignTimes = _useState4[1];
  var prepareResolveRef = useRef2();
  useLayoutEffect(
    function() {
      if (status === 'alignPre') {
        setAlignTimes(0);
      }
    },
    [status]
  );
  function getAlignTarget() {
    if (point) {
      return point;
    }
    return getRootDomNode;
  }
  function forceAlign() {
    var _alignRef$current;
    (_alignRef$current = alignRef.current) === null || _alignRef$current === void 0
      ? void 0
      : _alignRef$current.forceAlign();
  }
  function onInternalAlign(popupDomNode, matchAlign) {
    var nextAlignedClassName = getClassNameFromAlign(matchAlign);
    if (alignedClassName !== nextAlignedClassName) {
      setAlignedClassName(nextAlignedClassName);
    }
    setAlignTimes(function(val) {
      return val + 1;
    });
    if (status === 'align') {
      onAlign === null || onAlign === void 0 ? void 0 : onAlign(popupDomNode, matchAlign);
    }
  }
  useLayoutEffect(
    function() {
      if (status === 'align') {
        if (alignTimes < 3) {
          forceAlign();
        } else {
          goNextStatus(function() {
            var _prepareResolveRef$cu;
            (_prepareResolveRef$cu = prepareResolveRef.current) === null || _prepareResolveRef$cu === void 0
              ? void 0
              : _prepareResolveRef$cu.call(prepareResolveRef);
          });
        }
      }
    },
    [alignTimes]
  );
  var motion = _objectSpread3({}, getMotion(props));
  ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function(eventName) {
    var originHandler = motion[eventName];
    motion[eventName] = function(element, event) {
      goNextStatus();
      return originHandler === null || originHandler === void 0 ? void 0 : originHandler(element, event);
    };
  });
  function onShowPrepare() {
    return new Promise(function(resolve) {
      prepareResolveRef.current = resolve;
    });
  }
  React3.useEffect(
    function() {
      if (!motion.motionName && status === 'motion') {
        goNextStatus();
      }
    },
    [motion.motionName, status]
  );
  React3.useImperativeHandle(ref, function() {
    return {
      forceAlign,
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread3(
    _objectSpread3({}, stretchStyle),
    {},
    {
      zIndex,
      opacity: status === 'motion' || status === 'stable' || !visible ? void 0 : 0,
      pointerEvents: !visible && status !== 'stable' ? 'none' : void 0
    },
    style
  );
  var alignDisabled = true;
  if (align !== null && align !== void 0 && align.points && (status === 'align' || status === 'stable')) {
    alignDisabled = false;
  }
  var childNode = children;
  if (React3.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ React3.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content')
      },
      children
    );
  }
  return /* @__PURE__ */ React3.createElement(
    CSSMotion2,
    _extends2(
      {
        visible,
        ref: elementRef,
        leavedClassName: ''.concat(prefixCls, '-hidden')
      },
      motion,
      {
        onAppearPrepare: onShowPrepare,
        onEnterPrepare: onShowPrepare,
        removeOnLeave: destroyPopupOnHide,
        forceRender
      }
    ),
    function(_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classNames2(prefixCls, className, alignedClassName, motionClassName);
      return /* @__PURE__ */ React3.createElement(
        Align,
        {
          target: getAlignTarget(),
          key: 'popup',
          ref: alignRef,
          monitorWindowResize: true,
          disabled: alignDisabled,
          align,
          onAlign: onInternalAlign
        },
        /* @__PURE__ */ React3.createElement(
          'div',
          {
            ref: motionRef,
            className: mergedClassName,
            onMouseEnter,
            onMouseLeave,
            onMouseDownCapture: onMouseDown,
            onTouchStartCapture: onTouchStart,
            onClick,
            style: _objectSpread3(_objectSpread3({}, motionStyle), mergedStyle)
          },
          childNode
        )
      );
    }
  );
});
PopupInner.displayName = 'PopupInner';
var PopupInner_default = PopupInner;

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/MobilePopupInner.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import CSSMotion3 from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var MobilePopupInner = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    visible = props.visible,
    zIndex = props.zIndex,
    children = props.children,
    _props$mobile = props.mobile;
  _props$mobile = _props$mobile === void 0 ? {} : _props$mobile;
  var popupClassName = _props$mobile.popupClassName,
    popupStyle = _props$mobile.popupStyle,
    _props$mobile$popupMo = _props$mobile.popupMotion,
    popupMotion = _props$mobile$popupMo === void 0 ? {} : _props$mobile$popupMo,
    popupRender = _props$mobile.popupRender,
    onClick = props.onClick;
  var elementRef = React4.useRef();
  React4.useImperativeHandle(ref, function() {
    return {
      forceAlign: function forceAlign() {},
      getElement: function getElement() {
        return elementRef.current;
      }
    };
  });
  var mergedStyle = _objectSpread4(
    {
      zIndex
    },
    popupStyle
  );
  var childNode = children;
  if (React4.Children.count(children) > 1) {
    childNode = /* @__PURE__ */ React4.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content')
      },
      children
    );
  }
  if (popupRender) {
    childNode = popupRender(childNode);
  }
  return /* @__PURE__ */ React4.createElement(
    CSSMotion3,
    _extends3(
      {
        visible,
        ref: elementRef,
        removeOnLeave: true
      },
      popupMotion
    ),
    function(_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      var mergedClassName = classNames3(prefixCls, popupClassName, motionClassName);
      return /* @__PURE__ */ React4.createElement(
        'div',
        {
          ref: motionRef,
          className: mergedClassName,
          onClick,
          style: _objectSpread4(_objectSpread4({}, motionStyle), mergedStyle)
        },
        childNode
      );
    }
  );
});
MobilePopupInner.displayName = 'MobilePopupInner';
var MobilePopupInner_default = MobilePopupInner;

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/Popup/index.js
var _excluded = ['visible', 'mobile'];
var Popup = /* @__PURE__ */ React5.forwardRef(function(_ref, ref) {
  var visible = _ref.visible,
    mobile = _ref.mobile,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useState = useState4(visible),
    _useState2 = _slicedToArray4(_useState, 2),
    innerVisible = _useState2[0],
    serInnerVisible = _useState2[1];
  var _useState3 = useState4(false),
    _useState4 = _slicedToArray4(_useState3, 2),
    inMobile = _useState4[0],
    setInMobile = _useState4[1];
  var cloneProps = _objectSpread5(
    _objectSpread5({}, props),
    {},
    {
      visible: innerVisible
    }
  );
  useEffect3(
    function() {
      serInnerVisible(visible);
      if (visible && mobile) {
        setInMobile(isMobile());
      }
    },
    [visible, mobile]
  );
  var popupNode = inMobile
    ? /* @__PURE__ */ React5.createElement(
        MobilePopupInner_default,
        _extends4({}, cloneProps, {
          mobile,
          ref
        })
      )
    : /* @__PURE__ */ React5.createElement(
        PopupInner_default,
        _extends4({}, cloneProps, {
          ref
        })
      );
  return /* @__PURE__ */ React5.createElement(
    'div',
    null,
    /* @__PURE__ */ React5.createElement(Mask, cloneProps),
    popupNode
  );
});
Popup.displayName = 'Popup';
var Popup_default = Popup;

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/context.js
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var TriggerContext = /* @__PURE__ */ React6.createContext(null);
var context_default = TriggerContext;

// esm-build-f4789f12b1807ea77c3ede56a2f8aed9e5b5858e-79b6de65/node_modules/rc-trigger/es/index.js
function noop() {}
function returnEmptyString() {
  return '';
}
function returnDocument(element) {
  if (element) {
    return element.ownerDocument;
  }
  return window.document;
}
var ALL_HANDLERS = [
  'onClick',
  'onMouseDown',
  'onTouchStart',
  'onMouseEnter',
  'onMouseLeave',
  'onFocus',
  'onBlur',
  'onContextMenu'
];
function generateTrigger(PortalComponent) {
  var Trigger = /* @__PURE__ */ (function(_React$Component) {
    _inherits(Trigger2, _React$Component);
    var _super = _createSuper(Trigger2);
    function Trigger2(props) {
      var _this;
      _classCallCheck(this, Trigger2);
      _this = _super.call(this, props);
      _defineProperty(_assertThisInitialized(_this), 'popupRef', /* @__PURE__ */ React7.createRef());
      _defineProperty(_assertThisInitialized(_this), 'triggerRef', /* @__PURE__ */ React7.createRef());
      _defineProperty(_assertThisInitialized(_this), 'portalContainer', void 0);
      _defineProperty(_assertThisInitialized(_this), 'attachId', void 0);
      _defineProperty(_assertThisInitialized(_this), 'clickOutsideHandler', void 0);
      _defineProperty(_assertThisInitialized(_this), 'touchOutsideHandler', void 0);
      _defineProperty(_assertThisInitialized(_this), 'contextMenuOutsideHandler1', void 0);
      _defineProperty(_assertThisInitialized(_this), 'contextMenuOutsideHandler2', void 0);
      _defineProperty(_assertThisInitialized(_this), 'mouseDownTimeout', void 0);
      _defineProperty(_assertThisInitialized(_this), 'focusTime', void 0);
      _defineProperty(_assertThisInitialized(_this), 'preClickTime', void 0);
      _defineProperty(_assertThisInitialized(_this), 'preTouchTime', void 0);
      _defineProperty(_assertThisInitialized(_this), 'delayTimer', void 0);
      _defineProperty(_assertThisInitialized(_this), 'hasPopupMouseDown', void 0);
      _defineProperty(_assertThisInitialized(_this), 'onMouseEnter', function(e) {
        var mouseEnterDelay = _this.props.mouseEnterDelay;
        _this.fireEvents('onMouseEnter', e);
        _this.delaySetPopupVisible(true, mouseEnterDelay, mouseEnterDelay ? null : e);
      });
      _defineProperty(_assertThisInitialized(_this), 'onMouseMove', function(e) {
        _this.fireEvents('onMouseMove', e);
        _this.setPoint(e);
      });
      _defineProperty(_assertThisInitialized(_this), 'onMouseLeave', function(e) {
        _this.fireEvents('onMouseLeave', e);
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty(_assertThisInitialized(_this), 'onPopupMouseEnter', function() {
        _this.clearDelayTimer();
      });
      _defineProperty(_assertThisInitialized(_this), 'onPopupMouseLeave', function(e) {
        var _this$popupRef$curren;
        if (
          e.relatedTarget &&
          !e.relatedTarget.setTimeout &&
          contains(
            (_this$popupRef$curren = _this.popupRef.current) === null || _this$popupRef$curren === void 0
              ? void 0
              : _this$popupRef$curren.getElement(),
            e.relatedTarget
          )
        ) {
          return;
        }
        _this.delaySetPopupVisible(false, _this.props.mouseLeaveDelay);
      });
      _defineProperty(_assertThisInitialized(_this), 'onFocus', function(e) {
        _this.fireEvents('onFocus', e);
        _this.clearDelayTimer();
        if (_this.isFocusToShow()) {
          _this.focusTime = Date.now();
          _this.delaySetPopupVisible(true, _this.props.focusDelay);
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'onMouseDown', function(e) {
        _this.fireEvents('onMouseDown', e);
        _this.preClickTime = Date.now();
      });
      _defineProperty(_assertThisInitialized(_this), 'onTouchStart', function(e) {
        _this.fireEvents('onTouchStart', e);
        _this.preTouchTime = Date.now();
      });
      _defineProperty(_assertThisInitialized(_this), 'onBlur', function(e) {
        _this.fireEvents('onBlur', e);
        _this.clearDelayTimer();
        if (_this.isBlurToHide()) {
          _this.delaySetPopupVisible(false, _this.props.blurDelay);
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'onContextMenu', function(e) {
        e.preventDefault();
        _this.fireEvents('onContextMenu', e);
        _this.setPopupVisible(true, e);
      });
      _defineProperty(_assertThisInitialized(_this), 'onContextMenuClose', function() {
        if (_this.isContextMenuToShow()) {
          _this.close();
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'onClick', function(event) {
        _this.fireEvents('onClick', event);
        if (_this.focusTime) {
          var preTime;
          if (_this.preClickTime && _this.preTouchTime) {
            preTime = Math.min(_this.preClickTime, _this.preTouchTime);
          } else if (_this.preClickTime) {
            preTime = _this.preClickTime;
          } else if (_this.preTouchTime) {
            preTime = _this.preTouchTime;
          }
          if (Math.abs(preTime - _this.focusTime) < 20) {
            return;
          }
          _this.focusTime = 0;
        }
        _this.preClickTime = 0;
        _this.preTouchTime = 0;
        if (_this.isClickToShow() && (_this.isClickToHide() || _this.isBlurToHide()) && event && event.preventDefault) {
          event.preventDefault();
        }
        var nextVisible = !_this.state.popupVisible;
        if ((_this.isClickToHide() && !nextVisible) || (nextVisible && _this.isClickToShow())) {
          _this.setPopupVisible(!_this.state.popupVisible, event);
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'onPopupMouseDown', function() {
        _this.hasPopupMouseDown = true;
        clearTimeout(_this.mouseDownTimeout);
        _this.mouseDownTimeout = window.setTimeout(function() {
          _this.hasPopupMouseDown = false;
        }, 0);
        if (_this.context) {
          var _this$context;
          (_this$context = _this.context).onPopupMouseDown.apply(_this$context, arguments);
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'onDocumentClick', function(event) {
        if (_this.props.mask && !_this.props.maskClosable) {
          return;
        }
        var target = event.target;
        var root = _this.getRootDomNode();
        var popupNode = _this.getPopupDomNode();
        if (
          (!contains(root, target) || _this.isContextMenuOnly()) &&
          !contains(popupNode, target) &&
          !_this.hasPopupMouseDown
        ) {
          _this.close();
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'getRootDomNode', function() {
        var getTriggerDOMNode = _this.props.getTriggerDOMNode;
        if (getTriggerDOMNode) {
          return getTriggerDOMNode(_this.triggerRef.current);
        }
        try {
          var domNode = findDOMNode(_this.triggerRef.current);
          if (domNode) {
            return domNode;
          }
        } catch (err) {}
        return ReactDOM.findDOMNode(_assertThisInitialized(_this));
      });
      _defineProperty(_assertThisInitialized(_this), 'getPopupClassNameFromAlign', function(align) {
        var className = [];
        var _this$props = _this.props,
          popupPlacement = _this$props.popupPlacement,
          builtinPlacements = _this$props.builtinPlacements,
          prefixCls = _this$props.prefixCls,
          alignPoint = _this$props.alignPoint,
          getPopupClassNameFromAlign = _this$props.getPopupClassNameFromAlign;
        if (popupPlacement && builtinPlacements) {
          className.push(getAlignPopupClassName(builtinPlacements, prefixCls, align, alignPoint));
        }
        if (getPopupClassNameFromAlign) {
          className.push(getPopupClassNameFromAlign(align));
        }
        return className.join(' ');
      });
      _defineProperty(_assertThisInitialized(_this), 'getComponent', function() {
        var _this$props2 = _this.props,
          prefixCls = _this$props2.prefixCls,
          destroyPopupOnHide = _this$props2.destroyPopupOnHide,
          popupClassName = _this$props2.popupClassName,
          onPopupAlign = _this$props2.onPopupAlign,
          popupMotion = _this$props2.popupMotion,
          popupAnimation = _this$props2.popupAnimation,
          popupTransitionName = _this$props2.popupTransitionName,
          popupStyle = _this$props2.popupStyle,
          mask = _this$props2.mask,
          maskAnimation = _this$props2.maskAnimation,
          maskTransitionName = _this$props2.maskTransitionName,
          maskMotion = _this$props2.maskMotion,
          zIndex = _this$props2.zIndex,
          popup = _this$props2.popup,
          stretch = _this$props2.stretch,
          alignPoint = _this$props2.alignPoint,
          mobile = _this$props2.mobile,
          forceRender = _this$props2.forceRender,
          onPopupClick = _this$props2.onPopupClick;
        var _this$state = _this.state,
          popupVisible = _this$state.popupVisible,
          point = _this$state.point;
        var align = _this.getPopupAlign();
        var mouseProps = {};
        if (_this.isMouseEnterToShow()) {
          mouseProps.onMouseEnter = _this.onPopupMouseEnter;
        }
        if (_this.isMouseLeaveToHide()) {
          mouseProps.onMouseLeave = _this.onPopupMouseLeave;
        }
        mouseProps.onMouseDown = _this.onPopupMouseDown;
        mouseProps.onTouchStart = _this.onPopupMouseDown;
        return /* @__PURE__ */ React7.createElement(
          Popup_default,
          _extends5(
            {
              prefixCls,
              destroyPopupOnHide,
              visible: popupVisible,
              point: alignPoint && point,
              className: popupClassName,
              align,
              onAlign: onPopupAlign,
              animation: popupAnimation,
              getClassNameFromAlign: _this.getPopupClassNameFromAlign
            },
            mouseProps,
            {
              stretch,
              getRootDomNode: _this.getRootDomNode,
              style: popupStyle,
              mask,
              zIndex,
              transitionName: popupTransitionName,
              maskAnimation,
              maskTransitionName,
              maskMotion,
              ref: _this.popupRef,
              motion: popupMotion,
              mobile,
              forceRender,
              onClick: onPopupClick
            }
          ),
          typeof popup === 'function' ? popup() : popup
        );
      });
      _defineProperty(_assertThisInitialized(_this), 'attachParent', function(popupContainer) {
        raf2.cancel(_this.attachId);
        var _this$props3 = _this.props,
          getPopupContainer = _this$props3.getPopupContainer,
          getDocument = _this$props3.getDocument;
        var domNode = _this.getRootDomNode();
        var mountNode;
        if (!getPopupContainer) {
          mountNode = getDocument(_this.getRootDomNode()).body;
        } else if (domNode || getPopupContainer.length === 0) {
          mountNode = getPopupContainer(domNode);
        }
        if (mountNode) {
          mountNode.appendChild(popupContainer);
        } else {
          _this.attachId = raf2(function() {
            _this.attachParent(popupContainer);
          });
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'getContainer', function() {
        if (!_this.portalContainer) {
          var getDocument = _this.props.getDocument;
          var popupContainer = getDocument(_this.getRootDomNode()).createElement('div');
          popupContainer.style.position = 'absolute';
          popupContainer.style.top = '0';
          popupContainer.style.left = '0';
          popupContainer.style.width = '100%';
          _this.portalContainer = popupContainer;
        }
        _this.attachParent(_this.portalContainer);
        return _this.portalContainer;
      });
      _defineProperty(_assertThisInitialized(_this), 'setPoint', function(point) {
        var alignPoint = _this.props.alignPoint;
        if (!alignPoint || !point) return;
        _this.setState({
          point: {
            pageX: point.pageX,
            pageY: point.pageY
          }
        });
      });
      _defineProperty(_assertThisInitialized(_this), 'handlePortalUpdate', function() {
        if (_this.state.prevPopupVisible !== _this.state.popupVisible) {
          _this.props.afterPopupVisibleChange(_this.state.popupVisible);
        }
      });
      _defineProperty(_assertThisInitialized(_this), 'triggerContextValue', {
        onPopupMouseDown: _this.onPopupMouseDown
      });
      var _popupVisible;
      if ('popupVisible' in props) {
        _popupVisible = !!props.popupVisible;
      } else {
        _popupVisible = !!props.defaultPopupVisible;
      }
      _this.state = {
        prevPopupVisible: _popupVisible,
        popupVisible: _popupVisible
      };
      ALL_HANDLERS.forEach(function(h) {
        _this['fire'.concat(h)] = function(e) {
          _this.fireEvents(h, e);
        };
      });
      return _this;
    }
    _createClass(
      Trigger2,
      [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            this.componentDidUpdate();
          }
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate() {
            var props = this.props;
            var state = this.state;
            if (state.popupVisible) {
              var currentDocument;
              if (!this.clickOutsideHandler && (this.isClickToHide() || this.isContextMenuToShow())) {
                currentDocument = props.getDocument(this.getRootDomNode());
                this.clickOutsideHandler = addEventListener(currentDocument, 'mousedown', this.onDocumentClick);
              }
              if (!this.touchOutsideHandler) {
                currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                this.touchOutsideHandler = addEventListener(currentDocument, 'touchstart', this.onDocumentClick);
              }
              if (!this.contextMenuOutsideHandler1 && this.isContextMenuToShow()) {
                currentDocument = currentDocument || props.getDocument(this.getRootDomNode());
                this.contextMenuOutsideHandler1 = addEventListener(currentDocument, 'scroll', this.onContextMenuClose);
              }
              if (!this.contextMenuOutsideHandler2 && this.isContextMenuToShow()) {
                this.contextMenuOutsideHandler2 = addEventListener(window, 'blur', this.onContextMenuClose);
              }
              return;
            }
            this.clearOutsideHandler();
          }
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.clearDelayTimer();
            this.clearOutsideHandler();
            clearTimeout(this.mouseDownTimeout);
            raf2.cancel(this.attachId);
          }
        },
        {
          key: 'getPopupDomNode',
          value: function getPopupDomNode() {
            var _this$popupRef$curren2;
            return (
              ((_this$popupRef$curren2 = this.popupRef.current) === null || _this$popupRef$curren2 === void 0
                ? void 0
                : _this$popupRef$curren2.getElement()) || null
            );
          }
        },
        {
          key: 'getPopupAlign',
          value: function getPopupAlign() {
            var props = this.props;
            var popupPlacement = props.popupPlacement,
              popupAlign = props.popupAlign,
              builtinPlacements = props.builtinPlacements;
            if (popupPlacement && builtinPlacements) {
              return getAlignFromPlacement(builtinPlacements, popupPlacement, popupAlign);
            }
            return popupAlign;
          }
        },
        {
          key: 'setPopupVisible',
          value: function setPopupVisible(popupVisible, event) {
            var alignPoint = this.props.alignPoint;
            var prevPopupVisible = this.state.popupVisible;
            this.clearDelayTimer();
            if (prevPopupVisible !== popupVisible) {
              if (!('popupVisible' in this.props)) {
                this.setState({
                  popupVisible,
                  prevPopupVisible
                });
              }
              this.props.onPopupVisibleChange(popupVisible);
            }
            if (alignPoint && event && popupVisible) {
              this.setPoint(event);
            }
          }
        },
        {
          key: 'delaySetPopupVisible',
          value: function delaySetPopupVisible(visible, delayS, event) {
            var _this2 = this;
            var delay = delayS * 1e3;
            this.clearDelayTimer();
            if (delay) {
              var point = event
                ? {
                    pageX: event.pageX,
                    pageY: event.pageY
                  }
                : null;
              this.delayTimer = window.setTimeout(function() {
                _this2.setPopupVisible(visible, point);
                _this2.clearDelayTimer();
              }, delay);
            } else {
              this.setPopupVisible(visible, event);
            }
          }
        },
        {
          key: 'clearDelayTimer',
          value: function clearDelayTimer() {
            if (this.delayTimer) {
              clearTimeout(this.delayTimer);
              this.delayTimer = null;
            }
          }
        },
        {
          key: 'clearOutsideHandler',
          value: function clearOutsideHandler() {
            if (this.clickOutsideHandler) {
              this.clickOutsideHandler.remove();
              this.clickOutsideHandler = null;
            }
            if (this.contextMenuOutsideHandler1) {
              this.contextMenuOutsideHandler1.remove();
              this.contextMenuOutsideHandler1 = null;
            }
            if (this.contextMenuOutsideHandler2) {
              this.contextMenuOutsideHandler2.remove();
              this.contextMenuOutsideHandler2 = null;
            }
            if (this.touchOutsideHandler) {
              this.touchOutsideHandler.remove();
              this.touchOutsideHandler = null;
            }
          }
        },
        {
          key: 'createTwoChains',
          value: function createTwoChains(event) {
            var childPros = this.props.children.props;
            var props = this.props;
            if (childPros[event] && props[event]) {
              return this['fire'.concat(event)];
            }
            return childPros[event] || props[event];
          }
        },
        {
          key: 'isClickToShow',
          value: function isClickToShow() {
            var _this$props4 = this.props,
              action = _this$props4.action,
              showAction = _this$props4.showAction;
            return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
          }
        },
        {
          key: 'isContextMenuOnly',
          value: function isContextMenuOnly() {
            var action = this.props.action;
            return action === 'contextMenu' || (action.length === 1 && action[0] === 'contextMenu');
          }
        },
        {
          key: 'isContextMenuToShow',
          value: function isContextMenuToShow() {
            var _this$props5 = this.props,
              action = _this$props5.action,
              showAction = _this$props5.showAction;
            return action.indexOf('contextMenu') !== -1 || showAction.indexOf('contextMenu') !== -1;
          }
        },
        {
          key: 'isClickToHide',
          value: function isClickToHide() {
            var _this$props6 = this.props,
              action = _this$props6.action,
              hideAction = _this$props6.hideAction;
            return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
          }
        },
        {
          key: 'isMouseEnterToShow',
          value: function isMouseEnterToShow() {
            var _this$props7 = this.props,
              action = _this$props7.action,
              showAction = _this$props7.showAction;
            return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
          }
        },
        {
          key: 'isMouseLeaveToHide',
          value: function isMouseLeaveToHide() {
            var _this$props8 = this.props,
              action = _this$props8.action,
              hideAction = _this$props8.hideAction;
            return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
          }
        },
        {
          key: 'isFocusToShow',
          value: function isFocusToShow() {
            var _this$props9 = this.props,
              action = _this$props9.action,
              showAction = _this$props9.showAction;
            return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
          }
        },
        {
          key: 'isBlurToHide',
          value: function isBlurToHide() {
            var _this$props10 = this.props,
              action = _this$props10.action,
              hideAction = _this$props10.hideAction;
            return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
          }
        },
        {
          key: 'forcePopupAlign',
          value: function forcePopupAlign() {
            if (this.state.popupVisible) {
              var _this$popupRef$curren3;
              (_this$popupRef$curren3 = this.popupRef.current) === null || _this$popupRef$curren3 === void 0
                ? void 0
                : _this$popupRef$curren3.forceAlign();
            }
          }
        },
        {
          key: 'fireEvents',
          value: function fireEvents(type, e) {
            var childCallback = this.props.children.props[type];
            if (childCallback) {
              childCallback(e);
            }
            var callback = this.props[type];
            if (callback) {
              callback(e);
            }
          }
        },
        {
          key: 'close',
          value: function close() {
            this.setPopupVisible(false);
          }
        },
        {
          key: 'render',
          value: function render() {
            var popupVisible = this.state.popupVisible;
            var _this$props11 = this.props,
              children = _this$props11.children,
              forceRender = _this$props11.forceRender,
              alignPoint = _this$props11.alignPoint,
              className = _this$props11.className,
              autoDestroy = _this$props11.autoDestroy;
            var child = React7.Children.only(children);
            var newChildProps = {
              key: 'trigger'
            };
            if (this.isContextMenuToShow()) {
              newChildProps.onContextMenu = this.onContextMenu;
            } else {
              newChildProps.onContextMenu = this.createTwoChains('onContextMenu');
            }
            if (this.isClickToHide() || this.isClickToShow()) {
              newChildProps.onClick = this.onClick;
              newChildProps.onMouseDown = this.onMouseDown;
              newChildProps.onTouchStart = this.onTouchStart;
            } else {
              newChildProps.onClick = this.createTwoChains('onClick');
              newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
              newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
            }
            if (this.isMouseEnterToShow()) {
              newChildProps.onMouseEnter = this.onMouseEnter;
              if (alignPoint) {
                newChildProps.onMouseMove = this.onMouseMove;
              }
            } else {
              newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
            }
            if (this.isMouseLeaveToHide()) {
              newChildProps.onMouseLeave = this.onMouseLeave;
            } else {
              newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
            }
            if (this.isFocusToShow() || this.isBlurToHide()) {
              newChildProps.onFocus = this.onFocus;
              newChildProps.onBlur = this.onBlur;
            } else {
              newChildProps.onFocus = this.createTwoChains('onFocus');
              newChildProps.onBlur = this.createTwoChains('onBlur');
            }
            var childrenClassName = classNames4(child && child.props && child.props.className, className);
            if (childrenClassName) {
              newChildProps.className = childrenClassName;
            }
            var cloneProps = _objectSpread6({}, newChildProps);
            if (supportRef(child)) {
              cloneProps.ref = composeRef(this.triggerRef, child.ref);
            }
            var trigger = /* @__PURE__ */ React7.cloneElement(child, cloneProps);
            var portal;
            if (popupVisible || this.popupRef.current || forceRender) {
              portal = /* @__PURE__ */ React7.createElement(
                PortalComponent,
                {
                  key: 'portal',
                  getContainer: this.getContainer,
                  didUpdate: this.handlePortalUpdate
                },
                this.getComponent()
              );
            }
            if (!popupVisible && autoDestroy) {
              portal = null;
            }
            return /* @__PURE__ */ React7.createElement(
              context_default.Provider,
              {
                value: this.triggerContextValue
              },
              trigger,
              portal
            );
          }
        }
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(_ref, prevState) {
            var popupVisible = _ref.popupVisible;
            var newState = {};
            if (popupVisible !== void 0 && prevState.popupVisible !== popupVisible) {
              newState.popupVisible = popupVisible;
              newState.prevPopupVisible = prevState.popupVisible;
            }
            return newState;
          }
        }
      ]
    );
    return Trigger2;
  })(React7.Component);
  _defineProperty(Trigger, 'contextType', context_default);
  _defineProperty(Trigger, 'defaultProps', {
    prefixCls: 'rc-trigger-popup',
    getPopupClassNameFromAlign: returnEmptyString,
    getDocument: returnDocument,
    onPopupVisibleChange: noop,
    afterPopupVisibleChange: noop,
    onPopupAlign: noop,
    popupClassName: '',
    mouseEnterDelay: 0,
    mouseLeaveDelay: 0.1,
    focusDelay: 0,
    blurDelay: 0.15,
    popupStyle: {},
    destroyPopupOnHide: false,
    popupAlign: {},
    defaultPopupVisible: false,
    mask: false,
    maskClosable: true,
    action: [],
    showAction: [],
    hideAction: [],
    autoDestroy: false
  });
  return Trigger;
}
var es_default = generateTrigger(Portal);
export { es_default as default, generateTrigger };
