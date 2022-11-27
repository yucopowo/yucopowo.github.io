/* esm.sh - esbuild bundle(rc-motion@2.6.2) es2022 development */
// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/CSSMotion.js
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef6 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import findDOMNode from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/findDOMNode.development.js';
import { fillRef, supportRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/util/motion.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import canUseDOM from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
function makePrefixMap(styleProp, eventName) {
  var prefixes = {};
  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
  prefixes['Webkit'.concat(styleProp)] = 'webkit'.concat(eventName);
  prefixes['Moz'.concat(styleProp)] = 'moz'.concat(eventName);
  prefixes['ms'.concat(styleProp)] = 'MS'.concat(eventName);
  prefixes['O'.concat(styleProp)] = 'o'.concat(eventName.toLowerCase());
  return prefixes;
}
function getVendorPrefixes(domSupport, win) {
  var prefixes = {
    animationend: makePrefixMap('Animation', 'AnimationEnd'),
    transitionend: makePrefixMap('Transition', 'TransitionEnd')
  };
  if (domSupport) {
    if (!('AnimationEvent' in win)) {
      delete prefixes.animationend.animation;
    }
    if (!('TransitionEvent' in win)) {
      delete prefixes.transitionend.transition;
    }
  }
  return prefixes;
}
var vendorPrefixes = getVendorPrefixes(canUseDOM(), typeof window !== 'undefined' ? window : {});
var style = {};
if (canUseDOM()) {
  _document$createEleme = document.createElement('div');
  style = _document$createEleme.style;
}
var _document$createEleme;
var prefixedEventNames = {};
function getVendorPrefixedEventName(eventName) {
  if (prefixedEventNames[eventName]) {
    return prefixedEventNames[eventName];
  }
  var prefixMap = vendorPrefixes[eventName];
  if (prefixMap) {
    var stylePropList = Object.keys(prefixMap);
    var len = stylePropList.length;
    for (var i = 0; i < len; i += 1) {
      var styleProp = stylePropList[i];
      if (Object.prototype.hasOwnProperty.call(prefixMap, styleProp) && styleProp in style) {
        prefixedEventNames[eventName] = prefixMap[styleProp];
        return prefixedEventNames[eventName];
      }
    }
  }
  return '';
}
var internalAnimationEndName = getVendorPrefixedEventName('animationend');
var internalTransitionEndName = getVendorPrefixedEventName('transitionend');
var supportTransition = !!(internalAnimationEndName && internalTransitionEndName);
var animationEndName = internalAnimationEndName || 'animationend';
var transitionEndName = internalTransitionEndName || 'transitionend';
function getTransitionName(transitionName, transitionType) {
  if (!transitionName) return null;
  if (_typeof(transitionName) === 'object') {
    var type = transitionType.replace(/-\w/g, function(match) {
      return match[1].toUpperCase();
    });
    return transitionName[type];
  }
  return ''.concat(transitionName, '-').concat(transitionType);
}

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/interface.js
var STATUS_NONE = 'none';
var STATUS_APPEAR = 'appear';
var STATUS_ENTER = 'enter';
var STATUS_LEAVE = 'leave';
var STEP_NONE = 'none';
var STEP_PREPARE = 'prepare';
var STEP_START = 'start';
var STEP_ACTIVE = 'active';
var STEP_ACTIVATED = 'end';

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useStatus.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef4, useEffect as useEffect5 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useState2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useState.development.js';

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useStepQueue.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useState.development.js';

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useNextFrame.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
var useNextFrame_default = function() {
  var nextFrameRef = React.useRef(null);
  function cancelNextFrame() {
    raf.cancel(nextFrameRef.current);
  }
  function nextFrame(callback) {
    var delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    cancelNextFrame();
    var nextFrameId = raf(function() {
      if (delay <= 1) {
        callback({
          isCanceled: function isCanceled() {
            return nextFrameId !== nextFrameRef.current;
          }
        });
      } else {
        nextFrame(callback, delay - 1);
      }
    });
    nextFrameRef.current = nextFrameId;
  }
  React.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [nextFrame, cancelNextFrame];
};

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useIsomorphicLayoutEffect.js
import { useEffect as useEffect2, useLayoutEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var useIsomorphicLayoutEffect = canUseDom() ? useLayoutEffect : useEffect2;
var useIsomorphicLayoutEffect_default = useIsomorphicLayoutEffect;

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useStepQueue.js
var STEP_QUEUE = [STEP_PREPARE, STEP_START, STEP_ACTIVE, STEP_ACTIVATED];
var SkipStep = false;
var DoStep = true;
function isActive(step) {
  return step === STEP_ACTIVE || step === STEP_ACTIVATED;
}
var useStepQueue_default = function(status, callback) {
  var _useState = useState(STEP_NONE),
    _useState2 = _slicedToArray(_useState, 2),
    step = _useState2[0],
    setStep = _useState2[1];
  var _useNextFrame = useNextFrame_default(),
    _useNextFrame2 = _slicedToArray(_useNextFrame, 2),
    nextFrame = _useNextFrame2[0],
    cancelNextFrame = _useNextFrame2[1];
  function startQueue() {
    setStep(STEP_PREPARE, true);
  }
  useIsomorphicLayoutEffect_default(
    function() {
      if (step !== STEP_NONE && step !== STEP_ACTIVATED) {
        var index = STEP_QUEUE.indexOf(step);
        var nextStep = STEP_QUEUE[index + 1];
        var result = callback(step);
        if (result === SkipStep) {
          setStep(nextStep, true);
        } else {
          nextFrame(function(info) {
            function doNext() {
              if (info.isCanceled()) return;
              setStep(nextStep, true);
            }
            if (result === true) {
              doNext();
            } else {
              Promise.resolve(result).then(doNext);
            }
          });
        }
      }
    },
    [status, step]
  );
  React2.useEffect(function() {
    return function() {
      cancelNextFrame();
    };
  }, []);
  return [startQueue, step];
};

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useDomMotionEvents.js
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var useDomMotionEvents_default = function(callback) {
  var cacheElementRef = useRef2();
  var callbackRef = useRef2(callback);
  callbackRef.current = callback;
  var onInternalMotionEnd = React3.useCallback(function(event) {
    callbackRef.current(event);
  }, []);
  function removeMotionEvents(element) {
    if (element) {
      element.removeEventListener(transitionEndName, onInternalMotionEnd);
      element.removeEventListener(animationEndName, onInternalMotionEnd);
    }
  }
  function patchMotionEvents(element) {
    if (cacheElementRef.current && cacheElementRef.current !== element) {
      removeMotionEvents(cacheElementRef.current);
    }
    if (element && element !== cacheElementRef.current) {
      element.addEventListener(transitionEndName, onInternalMotionEnd);
      element.addEventListener(animationEndName, onInternalMotionEnd);
      cacheElementRef.current = element;
    }
  }
  React3.useEffect(function() {
    return function() {
      removeMotionEvents(cacheElementRef.current);
    };
  }, []);
  return [patchMotionEvents, removeMotionEvents];
};

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/hooks/useStatus.js
function useStatus(supportMotion, visible, getElement, _ref) {
  var _ref$motionEnter = _ref.motionEnter,
    motionEnter = _ref$motionEnter === void 0 ? true : _ref$motionEnter,
    _ref$motionAppear = _ref.motionAppear,
    motionAppear = _ref$motionAppear === void 0 ? true : _ref$motionAppear,
    _ref$motionLeave = _ref.motionLeave,
    motionLeave = _ref$motionLeave === void 0 ? true : _ref$motionLeave,
    motionDeadline = _ref.motionDeadline,
    motionLeaveImmediately = _ref.motionLeaveImmediately,
    onAppearPrepare = _ref.onAppearPrepare,
    onEnterPrepare = _ref.onEnterPrepare,
    onLeavePrepare = _ref.onLeavePrepare,
    onAppearStart = _ref.onAppearStart,
    onEnterStart = _ref.onEnterStart,
    onLeaveStart = _ref.onLeaveStart,
    onAppearActive = _ref.onAppearActive,
    onEnterActive = _ref.onEnterActive,
    onLeaveActive = _ref.onLeaveActive,
    onAppearEnd = _ref.onAppearEnd,
    onEnterEnd = _ref.onEnterEnd,
    onLeaveEnd = _ref.onLeaveEnd,
    onVisibleChanged = _ref.onVisibleChanged;
  var _useState = useState2(),
    _useState2 = _slicedToArray2(_useState, 2),
    asyncVisible = _useState2[0],
    setAsyncVisible = _useState2[1];
  var _useState3 = useState2(STATUS_NONE),
    _useState4 = _slicedToArray2(_useState3, 2),
    status = _useState4[0],
    setStatus = _useState4[1];
  var _useState5 = useState2(null),
    _useState6 = _slicedToArray2(_useState5, 2),
    style2 = _useState6[0],
    setStyle = _useState6[1];
  var mountedRef = useRef4(false);
  var deadlineRef = useRef4(null);
  function getDomElement() {
    return getElement();
  }
  var activeRef = useRef4(false);
  function onInternalMotionEnd(event) {
    var element = getDomElement();
    if (event && !event.deadline && event.target !== element) {
      return;
    }
    var currentActive = activeRef.current;
    var canEnd;
    if (status === STATUS_APPEAR && currentActive) {
      canEnd = onAppearEnd === null || onAppearEnd === void 0 ? void 0 : onAppearEnd(element, event);
    } else if (status === STATUS_ENTER && currentActive) {
      canEnd = onEnterEnd === null || onEnterEnd === void 0 ? void 0 : onEnterEnd(element, event);
    } else if (status === STATUS_LEAVE && currentActive) {
      canEnd = onLeaveEnd === null || onLeaveEnd === void 0 ? void 0 : onLeaveEnd(element, event);
    }
    if (status !== STATUS_NONE && currentActive && canEnd !== false) {
      setStatus(STATUS_NONE, true);
      setStyle(null, true);
    }
  }
  var _useDomMotionEvents = useDomMotionEvents_default(onInternalMotionEnd),
    _useDomMotionEvents2 = _slicedToArray2(_useDomMotionEvents, 1),
    patchMotionEvents = _useDomMotionEvents2[0];
  var eventHandlers = React4.useMemo(
    function() {
      var _ref2, _ref3, _ref4;
      switch (status) {
        case STATUS_APPEAR:
          return (
            (_ref2 = {}),
            _defineProperty(_ref2, STEP_PREPARE, onAppearPrepare),
            _defineProperty(_ref2, STEP_START, onAppearStart),
            _defineProperty(_ref2, STEP_ACTIVE, onAppearActive),
            _ref2
          );
        case STATUS_ENTER:
          return (
            (_ref3 = {}),
            _defineProperty(_ref3, STEP_PREPARE, onEnterPrepare),
            _defineProperty(_ref3, STEP_START, onEnterStart),
            _defineProperty(_ref3, STEP_ACTIVE, onEnterActive),
            _ref3
          );
        case STATUS_LEAVE:
          return (
            (_ref4 = {}),
            _defineProperty(_ref4, STEP_PREPARE, onLeavePrepare),
            _defineProperty(_ref4, STEP_START, onLeaveStart),
            _defineProperty(_ref4, STEP_ACTIVE, onLeaveActive),
            _ref4
          );
        default:
          return {};
      }
    },
    [status]
  );
  var _useStepQueue = useStepQueue_default(status, function(newStep) {
      if (newStep === STEP_PREPARE) {
        var onPrepare = eventHandlers[STEP_PREPARE];
        if (!onPrepare) {
          return SkipStep;
        }
        return onPrepare(getDomElement());
      }
      if (step in eventHandlers) {
        var _eventHandlers$step;
        setStyle(
          ((_eventHandlers$step = eventHandlers[step]) === null || _eventHandlers$step === void 0
            ? void 0
            : _eventHandlers$step.call(eventHandlers, getDomElement(), null)) || null
        );
      }
      if (step === STEP_ACTIVE) {
        patchMotionEvents(getDomElement());
        if (motionDeadline > 0) {
          clearTimeout(deadlineRef.current);
          deadlineRef.current = setTimeout(function() {
            onInternalMotionEnd({
              deadline: true
            });
          }, motionDeadline);
        }
      }
      return DoStep;
    }),
    _useStepQueue2 = _slicedToArray2(_useStepQueue, 2),
    startStep = _useStepQueue2[0],
    step = _useStepQueue2[1];
  var active = isActive(step);
  activeRef.current = active;
  useIsomorphicLayoutEffect_default(
    function() {
      setAsyncVisible(visible);
      var isMounted = mountedRef.current;
      mountedRef.current = true;
      if (!supportMotion) {
        return;
      }
      var nextStatus;
      if (!isMounted && visible && motionAppear) {
        nextStatus = STATUS_APPEAR;
      }
      if (isMounted && visible && motionEnter) {
        nextStatus = STATUS_ENTER;
      }
      if ((isMounted && !visible && motionLeave) || (!isMounted && motionLeaveImmediately && !visible && motionLeave)) {
        nextStatus = STATUS_LEAVE;
      }
      if (nextStatus) {
        setStatus(nextStatus);
        startStep();
      }
    },
    [visible]
  );
  useEffect5(
    function() {
      if (
        (status === STATUS_APPEAR && !motionAppear) ||
        (status === STATUS_ENTER && !motionEnter) ||
        (status === STATUS_LEAVE && !motionLeave)
      ) {
        setStatus(STATUS_NONE);
      }
    },
    [motionAppear, motionEnter, motionLeave]
  );
  useEffect5(function() {
    return function() {
      mountedRef.current = false;
      clearTimeout(deadlineRef.current);
    };
  }, []);
  var firstMountChangeRef = React4.useRef(false);
  useEffect5(
    function() {
      if (asyncVisible) {
        firstMountChangeRef.current = true;
      }
      if (asyncVisible !== void 0 && status === STATUS_NONE) {
        if (firstMountChangeRef.current || asyncVisible) {
          onVisibleChanged === null || onVisibleChanged === void 0 ? void 0 : onVisibleChanged(asyncVisible);
        }
        firstMountChangeRef.current = true;
      }
    },
    [asyncVisible, status]
  );
  var mergedStyle = style2;
  if (eventHandlers[STEP_PREPARE] && step === STEP_START) {
    mergedStyle = _objectSpread(
      {
        transition: 'none'
      },
      mergedStyle
    );
  }
  return [status, step, mergedStyle, asyncVisible !== null && asyncVisible !== void 0 ? asyncVisible : visible];
}

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/DomWrapper.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var DomWrapper = /* @__PURE__ */ (function(_React$Component) {
  _inherits(DomWrapper2, _React$Component);
  var _super = _createSuper(DomWrapper2);
  function DomWrapper2() {
    _classCallCheck(this, DomWrapper2);
    return _super.apply(this, arguments);
  }
  _createClass(DomWrapper2, [
    {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }
  ]);
  return DomWrapper2;
})(React5.Component);
var DomWrapper_default = DomWrapper;

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/CSSMotion.js
function genCSSMotion(config) {
  var transitionSupport = config;
  if (_typeof2(config) === 'object') {
    transitionSupport = config.transitionSupport;
  }
  function isSupportTransition(props) {
    return !!(props.motionName && transitionSupport);
  }
  var CSSMotion = /* @__PURE__ */ React6.forwardRef(function(props, ref) {
    var _props$visible = props.visible,
      visible = _props$visible === void 0 ? true : _props$visible,
      _props$removeOnLeave = props.removeOnLeave,
      removeOnLeave = _props$removeOnLeave === void 0 ? true : _props$removeOnLeave,
      forceRender = props.forceRender,
      children = props.children,
      motionName = props.motionName,
      leavedClassName = props.leavedClassName,
      eventProps = props.eventProps;
    var supportMotion = isSupportTransition(props);
    var nodeRef = useRef6();
    var wrapperNodeRef = useRef6();
    function getDomElement() {
      try {
        return nodeRef.current instanceof HTMLElement ? nodeRef.current : findDOMNode(wrapperNodeRef.current);
      } catch (e) {
        return null;
      }
    }
    var _useStatus = useStatus(supportMotion, visible, getDomElement, props),
      _useStatus2 = _slicedToArray3(_useStatus, 4),
      status = _useStatus2[0],
      statusStep = _useStatus2[1],
      statusStyle = _useStatus2[2],
      mergedVisible = _useStatus2[3];
    var renderedRef = React6.useRef(mergedVisible);
    if (mergedVisible) {
      renderedRef.current = true;
    }
    var setNodeRef = React6.useCallback(
      function(node) {
        nodeRef.current = node;
        fillRef(ref, node);
      },
      [ref]
    );
    var motionChildren;
    var mergedProps = _objectSpread2(
      _objectSpread2({}, eventProps),
      {},
      {
        visible
      }
    );
    if (!children) {
      motionChildren = null;
    } else if (status === STATUS_NONE || !isSupportTransition(props)) {
      if (mergedVisible) {
        motionChildren = children(_objectSpread2({}, mergedProps), setNodeRef);
      } else if (!removeOnLeave && renderedRef.current) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              className: leavedClassName
            }
          ),
          setNodeRef
        );
      } else if (forceRender) {
        motionChildren = children(
          _objectSpread2(
            _objectSpread2({}, mergedProps),
            {},
            {
              style: {
                display: 'none'
              }
            }
          ),
          setNodeRef
        );
      } else {
        motionChildren = null;
      }
    } else {
      var _classNames;
      var statusSuffix;
      if (statusStep === STEP_PREPARE) {
        statusSuffix = 'prepare';
      } else if (isActive(statusStep)) {
        statusSuffix = 'active';
      } else if (statusStep === STEP_START) {
        statusSuffix = 'start';
      }
      motionChildren = children(
        _objectSpread2(
          _objectSpread2({}, mergedProps),
          {},
          {
            className: classNames(
              getTransitionName(motionName, status),
              ((_classNames = {}),
              _defineProperty2(
                _classNames,
                getTransitionName(motionName, ''.concat(status, '-').concat(statusSuffix)),
                statusSuffix
              ),
              _defineProperty2(_classNames, motionName, typeof motionName === 'string'),
              _classNames)
            ),
            style: statusStyle
          }
        ),
        setNodeRef
      );
    }
    if (/* @__PURE__ */ React6.isValidElement(motionChildren) && supportRef(motionChildren)) {
      var _motionChildren = motionChildren,
        originNodeRef = _motionChildren.ref;
      if (!originNodeRef) {
        motionChildren = /* @__PURE__ */ React6.cloneElement(motionChildren, {
          ref: setNodeRef
        });
      }
    }
    return /* @__PURE__ */ React6.createElement(
      DomWrapper_default,
      {
        ref: wrapperNodeRef
      },
      motionChildren
    );
  });
  CSSMotion.displayName = 'CSSMotion';
  return CSSMotion;
}
var CSSMotion_default = genCSSMotion(supportTransition);

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/CSSMotionList.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/util/diff.js
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
var STATUS_ADD = 'add';
var STATUS_KEEP = 'keep';
var STATUS_REMOVE = 'remove';
var STATUS_REMOVED = 'removed';
function wrapKeyToObject(key) {
  var keyObj;
  if (key && _typeof3(key) === 'object' && 'key' in key) {
    keyObj = key;
  } else {
    keyObj = {
      key
    };
  }
  return _objectSpread3(
    _objectSpread3({}, keyObj),
    {},
    {
      key: String(keyObj.key)
    }
  );
}
function parseKeys() {
  var keys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return keys.map(wrapKeyToObject);
}
function diffKeys() {
  var prevKeys = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  var currentKeys = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var list = [];
  var currentIndex = 0;
  var currentLen = currentKeys.length;
  var prevKeyObjects = parseKeys(prevKeys);
  var currentKeyObjects = parseKeys(currentKeys);
  prevKeyObjects.forEach(function(keyObj) {
    var hit = false;
    for (var i = currentIndex; i < currentLen; i += 1) {
      var currentKeyObj = currentKeyObjects[i];
      if (currentKeyObj.key === keyObj.key) {
        if (currentIndex < i) {
          list = list.concat(
            currentKeyObjects.slice(currentIndex, i).map(function(obj) {
              return _objectSpread3(
                _objectSpread3({}, obj),
                {},
                {
                  status: STATUS_ADD
                }
              );
            })
          );
          currentIndex = i;
        }
        list.push(
          _objectSpread3(
            _objectSpread3({}, currentKeyObj),
            {},
            {
              status: STATUS_KEEP
            }
          )
        );
        currentIndex += 1;
        hit = true;
        break;
      }
    }
    if (!hit) {
      list.push(
        _objectSpread3(
          _objectSpread3({}, keyObj),
          {},
          {
            status: STATUS_REMOVE
          }
        )
      );
    }
  });
  if (currentIndex < currentLen) {
    list = list.concat(
      currentKeyObjects.slice(currentIndex).map(function(obj) {
        return _objectSpread3(
          _objectSpread3({}, obj),
          {},
          {
            status: STATUS_ADD
          }
        );
      })
    );
  }
  var keys = {};
  list.forEach(function(_ref) {
    var key = _ref.key;
    keys[key] = (keys[key] || 0) + 1;
  });
  var duplicatedKeys = Object.keys(keys).filter(function(key) {
    return keys[key] > 1;
  });
  duplicatedKeys.forEach(function(matchKey) {
    list = list.filter(function(_ref2) {
      var key = _ref2.key,
        status = _ref2.status;
      return key !== matchKey || status !== STATUS_REMOVE;
    });
    list.forEach(function(node) {
      if (node.key === matchKey) {
        node.status = STATUS_KEEP;
      }
    });
  });
  return list;
}

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/CSSMotionList.js
var _excluded = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'];
var _excluded2 = ['status'];
var MOTION_PROP_NAMES = [
  'eventProps',
  'visible',
  'children',
  'motionName',
  'motionAppear',
  'motionEnter',
  'motionLeave',
  'motionLeaveImmediately',
  'motionDeadline',
  'removeOnLeave',
  'leavedClassName',
  'onAppearStart',
  'onAppearActive',
  'onAppearEnd',
  'onEnterStart',
  'onEnterActive',
  'onEnterEnd',
  'onLeaveStart',
  'onLeaveActive',
  'onLeaveEnd'
];
function genCSSMotionList(transitionSupport) {
  var CSSMotion = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : CSSMotion_default;
  var CSSMotionList = /* @__PURE__ */ (function(_React$Component) {
    _inherits2(CSSMotionList2, _React$Component);
    var _super = _createSuper2(CSSMotionList2);
    function CSSMotionList2() {
      var _this;
      _classCallCheck2(this, CSSMotionList2);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _this.state = {
        keyEntities: []
      };
      _this.removeKey = function(removeKey) {
        var keyEntities = _this.state.keyEntities;
        var nextKeyEntities = keyEntities.map(function(entity) {
          if (entity.key !== removeKey) return entity;
          return _objectSpread4(
            _objectSpread4({}, entity),
            {},
            {
              status: STATUS_REMOVED
            }
          );
        });
        _this.setState({
          keyEntities: nextKeyEntities
        });
        return nextKeyEntities.filter(function(_ref) {
          var status = _ref.status;
          return status !== STATUS_REMOVED;
        }).length;
      };
      return _this;
    }
    _createClass2(
      CSSMotionList2,
      [
        {
          key: 'render',
          value: function render() {
            var _this2 = this;
            var keyEntities = this.state.keyEntities;
            var _this$props = this.props,
              component = _this$props.component,
              children = _this$props.children,
              _onVisibleChanged = _this$props.onVisibleChanged,
              onAllRemoved = _this$props.onAllRemoved,
              restProps = _objectWithoutProperties(_this$props, _excluded);
            var Component3 = component || React7.Fragment;
            var motionProps = {};
            MOTION_PROP_NAMES.forEach(function(prop) {
              motionProps[prop] = restProps[prop];
              delete restProps[prop];
            });
            delete restProps.keys;
            return /* @__PURE__ */ React7.createElement(
              Component3,
              restProps,
              keyEntities.map(function(_ref2) {
                var status = _ref2.status,
                  eventProps = _objectWithoutProperties(_ref2, _excluded2);
                var visible = status === STATUS_ADD || status === STATUS_KEEP;
                return /* @__PURE__ */ React7.createElement(
                  CSSMotion,
                  _extends({}, motionProps, {
                    key: eventProps.key,
                    visible,
                    eventProps,
                    onVisibleChanged: function onVisibleChanged(changedVisible) {
                      _onVisibleChanged === null || _onVisibleChanged === void 0
                        ? void 0
                        : _onVisibleChanged(changedVisible, {
                            key: eventProps.key
                          });
                      if (!changedVisible) {
                        var restKeysCount = _this2.removeKey(eventProps.key);
                        if (restKeysCount === 0 && onAllRemoved) {
                          onAllRemoved();
                        }
                      }
                    }
                  }),
                  children
                );
              })
            );
          }
        }
      ],
      [
        {
          key: 'getDerivedStateFromProps',
          value: function getDerivedStateFromProps(_ref3, _ref4) {
            var keys = _ref3.keys;
            var keyEntities = _ref4.keyEntities;
            var parsedKeyObjects = parseKeys(keys);
            var mixedKeyEntities = diffKeys(keyEntities, parsedKeyObjects);
            return {
              keyEntities: mixedKeyEntities.filter(function(entity) {
                var prevEntity = keyEntities.find(function(_ref5) {
                  var key = _ref5.key;
                  return entity.key === key;
                });
                if (prevEntity && prevEntity.status === STATUS_REMOVED && entity.status === STATUS_REMOVE) {
                  return false;
                }
                return true;
              })
            };
          }
        }
      ]
    );
    return CSSMotionList2;
  })(React7.Component);
  CSSMotionList.defaultProps = {
    component: 'div'
  };
  return CSSMotionList;
}
var CSSMotionList_default = genCSSMotionList(supportTransition);

// esm-build-8a9722a20d53d08b89ab99f9aaf9f7165b171d16-a84bb81e/node_modules/rc-motion/es/index.js
var es_default = CSSMotion_default;
export { CSSMotionList_default as CSSMotionList, es_default as default };
