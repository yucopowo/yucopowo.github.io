/* esm.sh - esbuild bundle(rc-image@5.12.1) es2022 development */
// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/Image.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useState as useState6 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import cn from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import { getOffset } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/css.development.js';
import useMergedState2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/Preview.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Portal from '/cdn/v99/@rc-component/portal@1.0.3/es2022/portal.development.js';
import Dialog from '/cdn/v99/rc-dialog@9.0.2/es2022/rc-dialog.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import classnames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import addEventListener from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/addEventListener.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import { warning } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/hooks/useFrameSetState.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
function useFrameSetState(initial) {
  var frame = React.useRef(null);
  var _React$useState = React.useState(initial),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    state = _React$useState2[0],
    setState = _React$useState2[1];
  var queue = React.useRef([]);
  var setFrameState = function setFrameState2(newState) {
    if (frame.current === null) {
      queue.current = [];
      frame.current = raf(function() {
        setState(function(preState) {
          var memoState = preState;
          queue.current.forEach(function(queueState) {
            memoState = _objectSpread(_objectSpread({}, memoState), queueState);
          });
          frame.current = null;
          return memoState;
        });
      });
    }
    queue.current.push(newState);
  };
  React.useEffect(function() {
    return function() {
      return frame.current && raf.cancel(frame.current);
    };
  }, []);
  return [state, setFrameState];
}

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/getFixScaleEleTransPosition.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import { getClientSize } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/css.development.js';
function fixPoint(key, start, width, clientWidth) {
  var startAddWidth = start + width;
  var offsetStart = (width - clientWidth) / 2;
  if (width > clientWidth) {
    if (start > 0) {
      return _defineProperty({}, key, offsetStart);
    }
    if (start < 0 && startAddWidth < clientWidth) {
      return _defineProperty({}, key, -offsetStart);
    }
  } else if (start < 0 || startAddWidth > clientWidth) {
    return _defineProperty({}, key, start < 0 ? offsetStart : -offsetStart);
  }
  return {};
}
function getFixScaleEleTransPosition(width, height, left, top) {
  var _getClientSize = getClientSize(),
    clientWidth = _getClientSize.width,
    clientHeight = _getClientSize.height;
  var fixPos = null;
  if (width <= clientWidth && height <= clientHeight) {
    fixPos = {
      x: 0,
      y: 0
    };
  } else if (width > clientWidth || height > clientHeight) {
    fixPos = _objectSpread2(
      _objectSpread2({}, fixPoint('x', left, width, clientWidth)),
      fixPoint('y', top, height, clientHeight)
    );
  }
  return fixPos;
}

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/PreviewGroup.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useState as useState2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';
var _excluded = ['visible', 'onVisibleChange', 'getContainer', 'current', 'countRender'];
var context = /* @__PURE__ */ React2.createContext({
  previewUrls: /* @__PURE__ */ new Map(),
  setPreviewUrls: function setPreviewUrls() {
    return null;
  },
  current: null,
  setCurrent: function setCurrent() {
    return null;
  },
  setShowPreview: function setShowPreview() {
    return null;
  },
  setMousePosition: function setMousePosition() {
    return null;
  },
  registerImage: function registerImage() {
    return function() {
      return null;
    };
  },
  rootClassName: ''
});
var Provider = context.Provider;
var Group = function Group2(_ref) {
  var _ref$previewPrefixCls = _ref.previewPrefixCls,
    previewPrefixCls = _ref$previewPrefixCls === void 0 ? 'rc-image-preview' : _ref$previewPrefixCls,
    children = _ref.children,
    _ref$icons = _ref.icons,
    icons = _ref$icons === void 0 ? {} : _ref$icons,
    preview = _ref.preview;
  var _ref2 = _typeof(preview) === 'object' ? preview : {},
    _ref2$visible = _ref2.visible,
    previewVisible = _ref2$visible === void 0 ? void 0 : _ref2$visible,
    _ref2$onVisibleChange = _ref2.onVisibleChange,
    onPreviewVisibleChange = _ref2$onVisibleChange === void 0 ? void 0 : _ref2$onVisibleChange,
    _ref2$getContainer = _ref2.getContainer,
    getContainer = _ref2$getContainer === void 0 ? void 0 : _ref2$getContainer,
    _ref2$current = _ref2.current,
    currentIndex = _ref2$current === void 0 ? 0 : _ref2$current,
    _ref2$countRender = _ref2.countRender,
    countRender = _ref2$countRender === void 0 ? void 0 : _ref2$countRender,
    dialogProps = _objectWithoutProperties(_ref2, _excluded);
  var _useState = useState2(/* @__PURE__ */ new Map()),
    _useState2 = _slicedToArray2(_useState, 2),
    previewUrls = _useState2[0],
    setPreviewUrls2 = _useState2[1];
  var _useState3 = useState2(),
    _useState4 = _slicedToArray2(_useState3, 2),
    current = _useState4[0],
    setCurrent2 = _useState4[1];
  var _useMergedState = useMergedState(!!previewVisible, {
      value: previewVisible,
      onChange: onPreviewVisibleChange
    }),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    isShowPreview = _useMergedState2[0],
    setShowPreview2 = _useMergedState2[1];
  var _useState5 = useState2(null),
    _useState6 = _slicedToArray2(_useState5, 2),
    mousePosition = _useState6[0],
    setMousePosition2 = _useState6[1];
  var isControlled = previewVisible !== void 0;
  var previewUrlsKeys = Array.from(previewUrls.keys());
  var currentControlledKey = previewUrlsKeys[currentIndex];
  var canPreviewUrls = new Map(
    Array.from(previewUrls)
      .filter(function(_ref3) {
        var _ref4 = _slicedToArray2(_ref3, 2),
          canPreview = _ref4[1].canPreview;
        return !!canPreview;
      })
      .map(function(_ref5) {
        var _ref6 = _slicedToArray2(_ref5, 2),
          id = _ref6[0],
          url = _ref6[1].url;
        return [id, url];
      })
  );
  var registerImage2 = function registerImage3(id, url) {
    var canPreview = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var unRegister = function unRegister2() {
      setPreviewUrls2(function(oldPreviewUrls) {
        var clonePreviewUrls = new Map(oldPreviewUrls);
        var deleteResult = clonePreviewUrls.delete(id);
        return deleteResult ? clonePreviewUrls : oldPreviewUrls;
      });
    };
    setPreviewUrls2(function(oldPreviewUrls) {
      return new Map(oldPreviewUrls).set(id, {
        url,
        canPreview
      });
    });
    return unRegister;
  };
  var onPreviewClose = function onPreviewClose2(e) {
    e.stopPropagation();
    setShowPreview2(false);
    setMousePosition2(null);
  };
  React2.useEffect(
    function() {
      setCurrent2(currentControlledKey);
    },
    [currentControlledKey]
  );
  React2.useEffect(
    function() {
      if (!isShowPreview && isControlled) {
        setCurrent2(currentControlledKey);
      }
    },
    [currentControlledKey, isControlled, isShowPreview]
  );
  return /* @__PURE__ */ React2.createElement(
    Provider,
    {
      value: {
        isPreviewGroup: true,
        previewUrls: canPreviewUrls,
        setPreviewUrls: setPreviewUrls2,
        current,
        setCurrent: setCurrent2,
        setShowPreview: setShowPreview2,
        setMousePosition: setMousePosition2,
        registerImage: registerImage2
      }
    },
    children,
    /* @__PURE__ */ React2.createElement(
      Preview_default,
      _extends(
        {
          'aria-hidden': !isShowPreview,
          visible: isShowPreview,
          prefixCls: previewPrefixCls,
          onClose: onPreviewClose,
          mousePosition,
          src: canPreviewUrls.get(current),
          icons,
          getContainer,
          countRender
        },
        dialogProps
      )
    )
  );
};
var PreviewGroup_default = Group;

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/Preview.js
var _excluded2 = [
  'prefixCls',
  'src',
  'alt',
  'onClose',
  'afterClose',
  'visible',
  'icons',
  'rootClassName',
  'getContainer',
  'countRender',
  'scaleStep',
  'transitionName',
  'maskTransitionName'
];
var useState4 = React3.useState;
var useEffect4 = React3.useEffect;
var useCallback2 = React3.useCallback;
var useRef3 = React3.useRef;
var useContext2 = React3.useContext;
var initialPosition = {
  x: 0,
  y: 0
};
var Preview = function Preview2(props) {
  var _countRender;
  var prefixCls = props.prefixCls,
    src = props.src,
    alt = props.alt,
    onClose = props.onClose,
    afterClose = props.afterClose,
    visible = props.visible,
    _props$icons = props.icons,
    icons = _props$icons === void 0 ? {} : _props$icons,
    rootClassName = props.rootClassName,
    getContainer = props.getContainer,
    countRender = props.countRender,
    _props$scaleStep = props.scaleStep,
    scaleStep = _props$scaleStep === void 0 ? 0.5 : _props$scaleStep,
    _props$transitionName = props.transitionName,
    transitionName = _props$transitionName === void 0 ? 'zoom' : _props$transitionName,
    _props$maskTransition = props.maskTransitionName,
    maskTransitionName = _props$maskTransition === void 0 ? 'fade' : _props$maskTransition,
    restProps = _objectWithoutProperties2(props, _excluded2);
  var rotateLeft = icons.rotateLeft,
    rotateRight = icons.rotateRight,
    zoomIn = icons.zoomIn,
    zoomOut = icons.zoomOut,
    close = icons.close,
    left = icons.left,
    right = icons.right;
  var _useState = useState4(1),
    _useState2 = _slicedToArray3(_useState, 2),
    scale = _useState2[0],
    setScale = _useState2[1];
  var _useState3 = useState4(0),
    _useState4 = _slicedToArray3(_useState3, 2),
    rotate = _useState4[0],
    setRotate = _useState4[1];
  var _useFrameSetState = useFrameSetState(initialPosition),
    _useFrameSetState2 = _slicedToArray3(_useFrameSetState, 2),
    position = _useFrameSetState2[0],
    setPosition = _useFrameSetState2[1];
  var imgRef = useRef3();
  var originPositionRef = useRef3({
    originX: 0,
    originY: 0,
    deltaX: 0,
    deltaY: 0
  });
  var _useState5 = useState4(false),
    _useState6 = _slicedToArray3(_useState5, 2),
    isMoving = _useState6[0],
    setMoving = _useState6[1];
  var _useContext = useContext2(context),
    previewUrls = _useContext.previewUrls,
    current = _useContext.current,
    isPreviewGroup = _useContext.isPreviewGroup,
    setCurrent2 = _useContext.setCurrent;
  var previewGroupCount = previewUrls.size;
  var previewUrlsKeys = Array.from(previewUrls.keys());
  var currentPreviewIndex = previewUrlsKeys.indexOf(current);
  var combinationSrc = isPreviewGroup ? previewUrls.get(current) : src;
  var showLeftOrRightSwitches = isPreviewGroup && previewGroupCount > 1;
  var showOperationsProgress = isPreviewGroup && previewGroupCount >= 1;
  var _useState7 = useState4({
      wheelDirection: 0
    }),
    _useState8 = _slicedToArray3(_useState7, 2),
    lastWheelZoomDirection = _useState8[0],
    setLastWheelZoomDirection = _useState8[1];
  var onAfterClose = function onAfterClose2() {
    setScale(1);
    setRotate(0);
    setPosition(initialPosition);
  };
  var onZoomIn = function onZoomIn2() {
    setScale(function(value) {
      return value + scaleStep;
    });
    setPosition(initialPosition);
  };
  var onZoomOut = function onZoomOut2() {
    if (scale > 1) {
      setScale(function(value) {
        return value - scaleStep;
      });
    }
    setPosition(initialPosition);
  };
  var onRotateRight = function onRotateRight2() {
    setRotate(function(value) {
      return value + 90;
    });
  };
  var onRotateLeft = function onRotateLeft2() {
    setRotate(function(value) {
      return value - 90;
    });
  };
  var onSwitchLeft = function onSwitchLeft2(event) {
    event.preventDefault();
    event.stopPropagation();
    if (currentPreviewIndex > 0) {
      setCurrent2(previewUrlsKeys[currentPreviewIndex - 1]);
    }
  };
  var onSwitchRight = function onSwitchRight2(event) {
    event.preventDefault();
    event.stopPropagation();
    if (currentPreviewIndex < previewGroupCount - 1) {
      setCurrent2(previewUrlsKeys[currentPreviewIndex + 1]);
    }
  };
  var wrapClassName = classnames(_defineProperty2({}, ''.concat(prefixCls, '-moving'), isMoving));
  var toolClassName = ''.concat(prefixCls, '-operations-operation');
  var iconClassName = ''.concat(prefixCls, '-operations-icon');
  var tools = [
    {
      icon: close,
      onClick: onClose,
      type: 'close'
    },
    {
      icon: zoomIn,
      onClick: onZoomIn,
      type: 'zoomIn'
    },
    {
      icon: zoomOut,
      onClick: onZoomOut,
      type: 'zoomOut',
      disabled: scale === 1
    },
    {
      icon: rotateRight,
      onClick: onRotateRight,
      type: 'rotateRight'
    },
    {
      icon: rotateLeft,
      onClick: onRotateLeft,
      type: 'rotateLeft'
    }
  ];
  var onMouseUp = function onMouseUp2() {
    if (visible && isMoving) {
      var width = imgRef.current.offsetWidth * scale;
      var height = imgRef.current.offsetHeight * scale;
      var _imgRef$current$getBo = imgRef.current.getBoundingClientRect(),
        _left = _imgRef$current$getBo.left,
        top = _imgRef$current$getBo.top;
      var isRotate = rotate % 180 !== 0;
      setMoving(false);
      var fixState = getFixScaleEleTransPosition(isRotate ? height : width, isRotate ? width : height, _left, top);
      if (fixState) {
        setPosition(_objectSpread3({}, fixState));
      }
    }
  };
  var onMouseDown = function onMouseDown2(event) {
    if (event.button !== 0) return;
    event.preventDefault();
    event.stopPropagation();
    originPositionRef.current.deltaX = event.pageX - position.x;
    originPositionRef.current.deltaY = event.pageY - position.y;
    originPositionRef.current.originX = position.x;
    originPositionRef.current.originY = position.y;
    setMoving(true);
  };
  var onMouseMove = function onMouseMove2(event) {
    if (visible && isMoving) {
      setPosition({
        x: event.pageX - originPositionRef.current.deltaX,
        y: event.pageY - originPositionRef.current.deltaY
      });
    }
  };
  var onWheelMove = function onWheelMove2(event) {
    if (!visible) return;
    event.preventDefault();
    var wheelDirection = event.deltaY;
    setLastWheelZoomDirection({
      wheelDirection
    });
  };
  var onKeyDown = useCallback2(
    function(event) {
      if (!visible || !showLeftOrRightSwitches) return;
      if (event.keyCode === KeyCode.LEFT) {
        if (currentPreviewIndex > 0) {
          setCurrent2(previewUrlsKeys[currentPreviewIndex - 1]);
        }
      } else if (event.keyCode === KeyCode.RIGHT) {
        if (currentPreviewIndex < previewGroupCount - 1) {
          setCurrent2(previewUrlsKeys[currentPreviewIndex + 1]);
        }
      }
    },
    [currentPreviewIndex, previewGroupCount, previewUrlsKeys, setCurrent2, showLeftOrRightSwitches, visible]
  );
  var onDoubleClick = function onDoubleClick2() {
    if (visible) {
      if (scale !== 1) {
        setScale(1);
      }
      if (position.x !== initialPosition.x || position.y !== initialPosition.y) {
        setPosition(initialPosition);
      }
    }
  };
  useEffect4(
    function() {
      var wheelDirection = lastWheelZoomDirection.wheelDirection;
      if (wheelDirection > 0) {
        onZoomOut();
      } else if (wheelDirection < 0) {
        onZoomIn();
      }
    },
    [lastWheelZoomDirection]
  );
  useEffect4(
    function() {
      var onTopMouseUpListener;
      var onTopMouseMoveListener;
      var onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
      var onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);
      var onScrollWheelListener = addEventListener(window, 'wheel', onWheelMove, {
        passive: false
      });
      var onKeyDownListener = addEventListener(window, 'keydown', onKeyDown, false);
      try {
        if (window.top !== window.self) {
          onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
          onTopMouseMoveListener = addEventListener(window.top, 'mousemove', onMouseMove, false);
        }
      } catch (error) {
        warning(false, '[rc-image] '.concat(error));
      }
      return function() {
        var _onTopMouseUpListener, _onTopMouseMoveListen;
        onMouseUpListener.remove();
        onMouseMoveListener.remove();
        onScrollWheelListener.remove();
        onKeyDownListener.remove();
        (_onTopMouseUpListener = onTopMouseUpListener) === null || _onTopMouseUpListener === void 0
          ? void 0
          : _onTopMouseUpListener.remove();
        (_onTopMouseMoveListen = onTopMouseMoveListener) === null || _onTopMouseMoveListen === void 0
          ? void 0
          : _onTopMouseMoveListen.remove();
      };
    },
    [visible, isMoving, onKeyDown]
  );
  var operations = /* @__PURE__ */ React3.createElement(
    React3.Fragment,
    null,
    showLeftOrRightSwitches &&
      /* @__PURE__ */ React3.createElement(
        'div',
        {
          className: classnames(
            ''.concat(prefixCls, '-switch-left'),
            _defineProperty2({}, ''.concat(prefixCls, '-switch-left-disabled'), currentPreviewIndex === 0)
          ),
          onClick: onSwitchLeft
        },
        left
      ),
    showLeftOrRightSwitches &&
      /* @__PURE__ */ React3.createElement(
        'div',
        {
          className: classnames(
            ''.concat(prefixCls, '-switch-right'),
            _defineProperty2(
              {},
              ''.concat(prefixCls, '-switch-right-disabled'),
              currentPreviewIndex === previewGroupCount - 1
            )
          ),
          onClick: onSwitchRight
        },
        right
      ),
    /* @__PURE__ */ React3.createElement(
      'ul',
      {
        className: ''.concat(prefixCls, '-operations')
      },
      showOperationsProgress &&
        /* @__PURE__ */ React3.createElement(
          'li',
          {
            className: ''.concat(prefixCls, '-operations-progress')
          },
          (_countRender =
            countRender === null || countRender === void 0
              ? void 0
              : countRender(currentPreviewIndex + 1, previewGroupCount)) !== null && _countRender !== void 0
            ? _countRender
            : ''.concat(currentPreviewIndex + 1, ' / ').concat(previewGroupCount)
        ),
      tools.map(function(_ref) {
        var _classnames4;
        var icon = _ref.icon,
          onClick = _ref.onClick,
          type = _ref.type,
          disabled = _ref.disabled;
        return /* @__PURE__ */ React3.createElement(
          'li',
          {
            className: classnames(
              toolClassName,
              ((_classnames4 = {}),
              _defineProperty2(_classnames4, ''.concat(prefixCls, '-operations-operation-').concat(type), true),
              _defineProperty2(_classnames4, ''.concat(prefixCls, '-operations-operation-disabled'), !!disabled),
              _classnames4)
            ),
            onClick,
            key: type
          },
          /* @__PURE__ */ React3.isValidElement(icon)
            ? /* @__PURE__ */ React3.cloneElement(icon, {
                className: iconClassName
              })
            : icon
        );
      })
    )
  );
  return /* @__PURE__ */ React3.createElement(
    React3.Fragment,
    null,
    /* @__PURE__ */ React3.createElement(
      Dialog,
      _extends2(
        {
          transitionName,
          maskTransitionName,
          closable: false,
          keyboard: true,
          prefixCls,
          onClose,
          afterClose: onAfterClose,
          visible,
          wrapClassName,
          rootClassName,
          getContainer
        },
        restProps
      ),
      /* @__PURE__ */ React3.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-img-wrapper'),
          style: {
            transform: 'translate3d('.concat(position.x, 'px, ').concat(position.y, 'px, 0)')
          }
        },
        /* @__PURE__ */ React3.createElement('img', {
          width: props.width,
          height: props.height,
          onMouseDown,
          onDoubleClick,
          ref: imgRef,
          className: ''.concat(prefixCls, '-img'),
          src: combinationSrc,
          alt,
          style: {
            transform: 'scale3d('
              .concat(scale, ', ')
              .concat(scale, ', 1) rotate(')
              .concat(rotate, 'deg)')
          }
        })
      )
    ),
    /* @__PURE__ */ React3.createElement(
      CSSMotion,
      {
        visible,
        motionName: maskTransitionName
      },
      function(_ref2) {
        var className = _ref2.className,
          style = _ref2.style;
        return /* @__PURE__ */ React3.createElement(
          Portal,
          {
            open: true,
            getContainer: getContainer !== null && getContainer !== void 0 ? getContainer : document.body
          },
          /* @__PURE__ */ React3.createElement(
            'div',
            {
              className: classnames(''.concat(prefixCls, '-operations-wrapper'), className, rootClassName),
              style
            },
            operations
          )
        );
      }
    )
  );
};
var Preview_default = Preview;

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/Image.js
var _excluded3 = [
  'src',
  'alt',
  'onPreviewClose',
  'prefixCls',
  'previewPrefixCls',
  'placeholder',
  'fallback',
  'width',
  'height',
  'style',
  'preview',
  'className',
  'onClick',
  'onError',
  'wrapperClassName',
  'wrapperStyle',
  'rootClassName',
  'crossOrigin',
  'decoding',
  'loading',
  'referrerPolicy',
  'sizes',
  'srcSet',
  'useMap',
  'draggable'
];
var _excluded22 = ['src', 'visible', 'onVisibleChange', 'getContainer', 'mask', 'maskClassName', 'icons', 'scaleStep'];
var uuid = 0;
var ImageInternal = function ImageInternal2(_ref) {
  var _imgCommonProps$style;
  var imgSrc = _ref.src,
    alt = _ref.alt,
    onInitialPreviewClose = _ref.onPreviewClose,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-image' : _ref$prefixCls,
    _ref$previewPrefixCls = _ref.previewPrefixCls,
    previewPrefixCls = _ref$previewPrefixCls === void 0 ? ''.concat(prefixCls, '-preview') : _ref$previewPrefixCls,
    placeholder = _ref.placeholder,
    fallback = _ref.fallback,
    width = _ref.width,
    height = _ref.height,
    style = _ref.style,
    _ref$preview = _ref.preview,
    preview = _ref$preview === void 0 ? true : _ref$preview,
    className = _ref.className,
    onClick = _ref.onClick,
    onImageError = _ref.onError,
    wrapperClassName = _ref.wrapperClassName,
    wrapperStyle = _ref.wrapperStyle,
    rootClassName = _ref.rootClassName,
    crossOrigin = _ref.crossOrigin,
    decoding = _ref.decoding,
    loading = _ref.loading,
    referrerPolicy = _ref.referrerPolicy,
    sizes = _ref.sizes,
    srcSet = _ref.srcSet,
    useMap = _ref.useMap,
    draggable = _ref.draggable,
    otherProps = _objectWithoutProperties3(_ref, _excluded3);
  var isCustomPlaceholder = placeholder && placeholder !== true;
  var _ref2 = _typeof2(preview) === 'object' ? preview : {},
    previewSrc = _ref2.src,
    _ref2$visible = _ref2.visible,
    previewVisible = _ref2$visible === void 0 ? void 0 : _ref2$visible,
    _ref2$onVisibleChange = _ref2.onVisibleChange,
    onPreviewVisibleChange = _ref2$onVisibleChange === void 0 ? onInitialPreviewClose : _ref2$onVisibleChange,
    _ref2$getContainer = _ref2.getContainer,
    getPreviewContainer = _ref2$getContainer === void 0 ? void 0 : _ref2$getContainer,
    previewMask = _ref2.mask,
    maskClassName = _ref2.maskClassName,
    icons = _ref2.icons,
    scaleStep = _ref2.scaleStep,
    dialogProps = _objectWithoutProperties3(_ref2, _excluded22);
  var src = previewSrc !== null && previewSrc !== void 0 ? previewSrc : imgSrc;
  var isControlled = previewVisible !== void 0;
  var _useMergedState = useMergedState2(!!previewVisible, {
      value: previewVisible,
      onChange: onPreviewVisibleChange
    }),
    _useMergedState2 = _slicedToArray4(_useMergedState, 2),
    isShowPreview = _useMergedState2[0],
    setShowPreview2 = _useMergedState2[1];
  var _useState = useState6(isCustomPlaceholder ? 'loading' : 'normal'),
    _useState2 = _slicedToArray4(_useState, 2),
    status = _useState2[0],
    setStatus = _useState2[1];
  var _useState3 = useState6(null),
    _useState4 = _slicedToArray4(_useState3, 2),
    mousePosition = _useState4[0],
    setMousePosition2 = _useState4[1];
  var isError = status === 'error';
  var _React$useContext = React4.useContext(context),
    isPreviewGroup = _React$useContext.isPreviewGroup,
    setCurrent2 = _React$useContext.setCurrent,
    setGroupShowPreview = _React$useContext.setShowPreview,
    setGroupMousePosition = _React$useContext.setMousePosition,
    registerImage2 = _React$useContext.registerImage;
  var _React$useState = React4.useState(function() {
      uuid += 1;
      return uuid;
    }),
    _React$useState2 = _slicedToArray4(_React$useState, 1),
    currentId = _React$useState2[0];
  var canPreview = !!preview;
  var isLoaded = React4.useRef(false);
  var onLoad = function onLoad2() {
    setStatus('normal');
  };
  var onError = function onError2(e) {
    if (onImageError) {
      onImageError(e);
    }
    setStatus('error');
  };
  var onPreview = function onPreview2(e) {
    if (!isControlled) {
      var _getOffset = getOffset(e.target),
        left = _getOffset.left,
        top = _getOffset.top;
      if (isPreviewGroup) {
        setCurrent2(currentId);
        setGroupMousePosition({
          x: left,
          y: top
        });
      } else {
        setMousePosition2({
          x: left,
          y: top
        });
      }
    }
    if (isPreviewGroup) {
      setGroupShowPreview(true);
    } else {
      setShowPreview2(true);
    }
    if (onClick) onClick(e);
  };
  var onPreviewClose = function onPreviewClose2(e) {
    e.stopPropagation();
    setShowPreview2(false);
    if (!isControlled) {
      setMousePosition2(null);
    }
  };
  var getImgRef = function getImgRef2(img) {
    isLoaded.current = false;
    if (status !== 'loading') return;
    if (img !== null && img !== void 0 && img.complete && (img.naturalWidth || img.naturalHeight)) {
      isLoaded.current = true;
      onLoad();
    }
  };
  React4.useEffect(function() {
    var unRegister = registerImage2(currentId, src);
    return unRegister;
  }, []);
  React4.useEffect(
    function() {
      registerImage2(currentId, src, canPreview);
    },
    [src, canPreview]
  );
  React4.useEffect(
    function() {
      if (isError) {
        setStatus('normal');
      }
      if (isCustomPlaceholder && !isLoaded.current) {
        setStatus('loading');
      }
    },
    [imgSrc]
  );
  var wrapperClass = cn(
    prefixCls,
    wrapperClassName,
    rootClassName,
    _defineProperty3({}, ''.concat(prefixCls, '-error'), isError)
  );
  var mergedSrc = isError && fallback ? fallback : src;
  var imgCommonProps = {
    crossOrigin,
    decoding,
    draggable,
    loading,
    referrerPolicy,
    sizes,
    srcSet,
    useMap,
    alt,
    className: cn(
      ''.concat(prefixCls, '-img'),
      _defineProperty3({}, ''.concat(prefixCls, '-img-placeholder'), placeholder === true),
      className
    ),
    style: _objectSpread4(
      {
        height
      },
      style
    )
  };
  return /* @__PURE__ */ React4.createElement(
    React4.Fragment,
    null,
    /* @__PURE__ */ React4.createElement(
      'div',
      _extends3({}, otherProps, {
        className: wrapperClass,
        onClick: canPreview ? onPreview : onClick,
        style: _objectSpread4(
          {
            width,
            height
          },
          wrapperStyle
        )
      }),
      /* @__PURE__ */ React4.createElement(
        'img',
        _extends3(
          {},
          imgCommonProps,
          {
            ref: getImgRef
          },
          isError && fallback
            ? {
                src: fallback
              }
            : {
                onLoad,
                onError,
                src: imgSrc
              },
          {
            width,
            height
          }
        )
      ),
      status === 'loading' &&
        /* @__PURE__ */ React4.createElement(
          'div',
          {
            'aria-hidden': 'true',
            className: ''.concat(prefixCls, '-placeholder')
          },
          placeholder
        ),
      previewMask &&
        canPreview &&
        /* @__PURE__ */ React4.createElement(
          'div',
          {
            className: cn(''.concat(prefixCls, '-mask'), maskClassName),
            style: {
              display:
                ((_imgCommonProps$style = imgCommonProps.style) === null || _imgCommonProps$style === void 0
                  ? void 0
                  : _imgCommonProps$style.display) === 'none'
                  ? 'none'
                  : void 0
            }
          },
          previewMask
        )
    ),
    !isPreviewGroup &&
      canPreview &&
      /* @__PURE__ */ React4.createElement(
        Preview_default,
        _extends3(
          {
            'aria-hidden': !isShowPreview,
            visible: isShowPreview,
            prefixCls: previewPrefixCls,
            onClose: onPreviewClose,
            mousePosition,
            src: mergedSrc,
            alt,
            getContainer: getPreviewContainer,
            icons,
            scaleStep,
            rootClassName
          },
          dialogProps
        )
      )
  );
};
ImageInternal.PreviewGroup = PreviewGroup_default;
ImageInternal.displayName = 'Image';
var Image_default = ImageInternal;

// esm-build-dd604a764fdfe6e44cbd492f84f69bcb6e73084e-b8e3ffd4/node_modules/rc-image/es/index.js
var es_default = Image_default;
export { es_default as default };
