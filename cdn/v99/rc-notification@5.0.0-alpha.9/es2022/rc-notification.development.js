/* esm.sh - esbuild bundle(rc-notification@5.0.0-alpha.9) es2022 development */
// esm-build-718ed707a057bb47a0ef79f1fac4f7441fd64862-8d0e2a58/node_modules/rc-notification/es/useNotification.js
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-718ed707a057bb47a0ef79f1fac4f7441fd64862-8d0e2a58/node_modules/rc-notification/es/Notifications.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { createPortal } from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
import { CSSMotionList } from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-718ed707a057bb47a0ef79f1fac4f7441fd64862-8d0e2a58/node_modules/rc-notification/es/Notice.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Notify = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    style = props.style,
    className = props.className,
    _props$duration = props.duration,
    duration = _props$duration === void 0 ? 4.5 : _props$duration,
    eventKey = props.eventKey,
    content = props.content,
    closable = props.closable,
    _props$closeIcon = props.closeIcon,
    closeIcon = _props$closeIcon === void 0 ? 'x' : _props$closeIcon,
    divProps = props.props,
    onClick = props.onClick,
    onNoticeClose = props.onNoticeClose;
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    hovering = _React$useState2[0],
    setHovering = _React$useState2[1];
  var onInternalClose = function onInternalClose2() {
    onNoticeClose(eventKey);
  };
  React.useEffect(
    function() {
      if (!hovering && duration > 0) {
        var timeout = setTimeout(function() {
          onInternalClose();
        }, duration * 1e3);
        return function() {
          clearTimeout(timeout);
        };
      }
    },
    [duration, hovering]
  );
  var noticePrefixCls = ''.concat(prefixCls, '-notice');
  return /* @__PURE__ */ React.createElement(
    'div',
    _extends({}, divProps, {
      ref,
      className: classNames(
        noticePrefixCls,
        className,
        _defineProperty({}, ''.concat(noticePrefixCls, '-closable'), closable)
      ),
      style,
      onMouseEnter: function onMouseEnter() {
        setHovering(true);
      },
      onMouseLeave: function onMouseLeave() {
        setHovering(false);
      },
      onClick
    }),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(noticePrefixCls, '-content')
      },
      content
    ),
    closable &&
      /* @__PURE__ */ React.createElement(
        'a',
        {
          tabIndex: 0,
          className: ''.concat(noticePrefixCls, '-close'),
          onClick: function onClick2(e) {
            e.preventDefault();
            e.stopPropagation();
            onInternalClose();
          }
        },
        closeIcon
      )
  );
});
var Notice_default = Notify;

// esm-build-718ed707a057bb47a0ef79f1fac4f7441fd64862-8d0e2a58/node_modules/rc-notification/es/Notifications.js
var Notifications = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-notification' : _props$prefixCls,
    container = props.container,
    motion = props.motion,
    maxCount = props.maxCount,
    className = props.className,
    style = props.style,
    onAllRemoved = props.onAllRemoved;
  var _React$useState = React2.useState([]),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    configList = _React$useState2[0],
    setConfigList = _React$useState2[1];
  var onNoticeClose = function onNoticeClose2(key) {
    var _config$onClose;
    var config = configList.find(function(item) {
      return item.key === key;
    });
    config === null || config === void 0
      ? void 0
      : (_config$onClose = config.onClose) === null || _config$onClose === void 0
      ? void 0
      : _config$onClose.call(config);
    setConfigList(function(list) {
      return list.filter(function(item) {
        return item.key !== key;
      });
    });
  };
  React2.useImperativeHandle(ref, function() {
    return {
      open: function open(config) {
        setConfigList(function(list) {
          var clone = _toConsumableArray(list);
          var index = clone.findIndex(function(item) {
            return item.key === config.key;
          });
          if (index >= 0) {
            clone[index] = config;
          } else {
            clone.push(config);
          }
          if (maxCount > 0 && clone.length > maxCount) {
            clone = clone.slice(-maxCount);
          }
          return clone;
        });
      },
      close: function close(key) {
        onNoticeClose(key);
      },
      destroy: function destroy() {
        setConfigList([]);
      }
    };
  });
  var _React$useState3 = React2.useState({}),
    _React$useState4 = _slicedToArray2(_React$useState3, 2),
    placements = _React$useState4[0],
    setPlacements = _React$useState4[1];
  React2.useEffect(
    function() {
      var nextPlacements = {};
      configList.forEach(function(config) {
        var _config$placement = config.placement,
          placement = _config$placement === void 0 ? 'topRight' : _config$placement;
        if (placement) {
          nextPlacements[placement] = nextPlacements[placement] || [];
          nextPlacements[placement].push(config);
        }
      });
      Object.keys(placements).forEach(function(placement) {
        nextPlacements[placement] = nextPlacements[placement] || [];
      });
      setPlacements(nextPlacements);
    },
    [configList]
  );
  var onAllNoticeRemoved = function onAllNoticeRemoved2(placement) {
    setPlacements(function(originPlacements) {
      var clone = _objectSpread({}, originPlacements);
      var list = clone[placement] || [];
      if (!list.length) {
        delete clone[placement];
      }
      return clone;
    });
  };
  var emptyRef = React2.useRef(false);
  React2.useEffect(
    function() {
      if (Object.keys(placements).length > 0) {
        emptyRef.current = true;
      } else if (emptyRef.current) {
        onAllRemoved === null || onAllRemoved === void 0 ? void 0 : onAllRemoved();
        emptyRef.current = false;
      }
    },
    [placements]
  );
  if (!container) {
    return null;
  }
  var placementList = Object.keys(placements);
  return /* @__PURE__ */ createPortal(
    /* @__PURE__ */ React2.createElement(
      React2.Fragment,
      null,
      placementList.map(function(placement) {
        var placementConfigList = placements[placement];
        var keys = placementConfigList.map(function(config) {
          return {
            config,
            key: config.key
          };
        });
        var placementMotion = typeof motion === 'function' ? motion(placement) : motion;
        return /* @__PURE__ */ React2.createElement(
          CSSMotionList,
          _extends2(
            {
              key: placement,
              className: classNames2(
                prefixCls,
                ''.concat(prefixCls, '-').concat(placement),
                className === null || className === void 0 ? void 0 : className(placement)
              ),
              style: style === null || style === void 0 ? void 0 : style(placement),
              keys,
              motionAppear: true
            },
            placementMotion,
            {
              onAllRemoved: function onAllRemoved2() {
                onAllNoticeRemoved(placement);
              }
            }
          ),
          function(_ref, nodeRef) {
            var config = _ref.config,
              motionClassName = _ref.className,
              motionStyle = _ref.style;
            var key = config.key;
            var configClassName = config.className,
              configStyle = config.style;
            return /* @__PURE__ */ React2.createElement(
              Notice_default,
              _extends2({}, config, {
                ref: nodeRef,
                prefixCls,
                className: classNames2(motionClassName, configClassName),
                style: _objectSpread(_objectSpread({}, motionStyle), configStyle),
                key,
                eventKey: key,
                onNoticeClose
              })
            );
          }
        );
      })
    ),
    container
  );
});
if (true) {
  Notifications.displayName = 'Notifications';
}
var Notifications_default = Notifications;

// esm-build-718ed707a057bb47a0ef79f1fac4f7441fd64862-8d0e2a58/node_modules/rc-notification/es/useNotification.js
var _excluded = ['getContainer', 'motion', 'prefixCls', 'maxCount', 'className', 'style', 'onAllRemoved'];
var defaultGetContainer = function defaultGetContainer2() {
  return document.body;
};
var uniqueKey = 0;
function mergeConfig() {
  var clone = {};
  for (var _len = arguments.length, objList = new Array(_len), _key = 0; _key < _len; _key++) {
    objList[_key] = arguments[_key];
  }
  objList.forEach(function(obj) {
    if (obj) {
      Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        if (val !== void 0) {
          clone[key] = val;
        }
      });
    }
  });
  return clone;
}
function useNotification() {
  var rootConfig = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  var _rootConfig$getContai = rootConfig.getContainer,
    getContainer = _rootConfig$getContai === void 0 ? defaultGetContainer : _rootConfig$getContai,
    motion = rootConfig.motion,
    prefixCls = rootConfig.prefixCls,
    maxCount = rootConfig.maxCount,
    className = rootConfig.className,
    style = rootConfig.style,
    onAllRemoved = rootConfig.onAllRemoved,
    shareConfig = _objectWithoutProperties(rootConfig, _excluded);
  var _React$useState = React3.useState(),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    container = _React$useState2[0],
    setContainer = _React$useState2[1];
  var notificationsRef = React3.useRef();
  var contextHolder = /* @__PURE__ */ React3.createElement(Notifications_default, {
    container,
    ref: notificationsRef,
    prefixCls,
    motion,
    maxCount,
    className,
    style,
    onAllRemoved
  });
  var _React$useState3 = React3.useState([]),
    _React$useState4 = _slicedToArray3(_React$useState3, 2),
    taskQueue = _React$useState4[0],
    setTaskQueue = _React$useState4[1];
  var api = React3.useMemo(function() {
    return {
      open: function open(config) {
        var mergedConfig = mergeConfig(shareConfig, config);
        if (mergedConfig.key === null || mergedConfig.key === void 0) {
          mergedConfig.key = 'rc-notification-'.concat(uniqueKey);
          uniqueKey += 1;
        }
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray2(queue), [
            {
              type: 'open',
              config: mergedConfig
            }
          ]);
        });
      },
      close: function close(key) {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray2(queue), [
            {
              type: 'close',
              key
            }
          ]);
        });
      },
      destroy: function destroy() {
        setTaskQueue(function(queue) {
          return [].concat(_toConsumableArray2(queue), [
            {
              type: 'destroy'
            }
          ]);
        });
      }
    };
  }, []);
  React3.useEffect(function() {
    setContainer(getContainer());
  });
  React3.useEffect(
    function() {
      if (notificationsRef.current && taskQueue.length) {
        taskQueue.forEach(function(task) {
          switch (task.type) {
            case 'open':
              notificationsRef.current.open(task.config);
              break;
            case 'close':
              notificationsRef.current.close(task.key);
              break;
            case 'destroy':
              notificationsRef.current.destroy();
              break;
          }
        });
        setTaskQueue([]);
      }
    },
    [taskQueue]
  );
  return [api, contextHolder];
}
export { Notice_default as Notice, useNotification };
