/* esm.sh - esbuild bundle(@rc-component/portal@1.0.3) es2022 development */
// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/Portal.js
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { createPortal } from '/cdn/v99/react-dom@18.2.0/es2022/react-dom.development.js';
import canUseDom2 from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
import { supportRef, useComposeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/Context.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var OrderContext = /* @__PURE__ */ React.createContext(null);
var Context_default = OrderContext;

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/useDom.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var EMPTY_LIST = [];
function useDom(render, debug) {
  var _React$useState = React2.useState(function() {
      if (!canUseDom()) {
        return null;
      }
      var defaultEle = document.createElement('div');
      if (debug) {
        defaultEle.setAttribute('data-debug', debug);
      }
      return defaultEle;
    }),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    ele = _React$useState2[0];
  var queueCreate = React2.useContext(Context_default);
  var _React$useState3 = React2.useState(EMPTY_LIST),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    queue = _React$useState4[0],
    setQueue = _React$useState4[1];
  var mergedQueueCreate =
    queueCreate ||
    function(appendFn) {
      setQueue(function(origin) {
        var newQueue = [appendFn].concat(_toConsumableArray(origin));
        return newQueue;
      });
    };
  function append() {
    if (!ele.parentElement) {
      document.body.appendChild(ele);
    }
  }
  function cleanup() {
    var _ele$parentElement;
    (_ele$parentElement = ele.parentElement) === null || _ele$parentElement === void 0
      ? void 0
      : _ele$parentElement.removeChild(ele);
  }
  useLayoutEffect(
    function() {
      if (render) {
        if (queueCreate) {
          queueCreate(append);
        } else {
          append();
        }
      } else {
        cleanup();
      }
      return cleanup;
    },
    [render]
  );
  useLayoutEffect(
    function() {
      if (queue.length) {
        queue.forEach(function(appendFn) {
          return appendFn();
        });
        setQueue(EMPTY_LIST);
      }
    },
    [queue]
  );
  return [ele, mergedQueueCreate];
}

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/useScrollLocker.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { updateCSS, removeCSS } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/dynamicCSS.development.js';
import useLayoutEffect2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import getScrollBarSize from '/cdn/v99/rc-util@5.24.6/es2022/es/getScrollBarSize.development.js';

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/util.js
function isBodyOverflowing() {
  return (
    document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  );
}

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/useScrollLocker.js
var UNIQUE_ID = 'rc-util-locker-'.concat(Date.now());
var uuid = 0;
function useScrollLocker(lock) {
  var mergedLock = !!lock;
  var _React$useState = React3.useState(function() {
      uuid += 1;
      return ''.concat(UNIQUE_ID, '_').concat(uuid);
    }),
    _React$useState2 = _slicedToArray2(_React$useState, 1),
    id = _React$useState2[0];
  useLayoutEffect2(
    function() {
      if (mergedLock) {
        var scrollbarSize = getScrollBarSize();
        var isOverflow = isBodyOverflowing();
        updateCSS(
          '\nhtml body {\n  overflow-y: hidden;\n  '.concat(
            isOverflow ? 'width: calc(100% - '.concat(scrollbarSize, 'px);') : '',
            '\n}'
          ),
          id
        );
      } else {
        removeCSS(id);
      }
      return function() {
        removeCSS(id);
      };
    },
    [mergedLock, id]
  );
}

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/mock.js
var inline = false;
function inlineMock(nextInline) {
  if (typeof nextInline === 'boolean') {
    inline = nextInline;
  }
  return inline;
}

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/Portal.js
var getPortalContainer = function getPortalContainer2(getContainer) {
  if (getContainer === false) {
    return false;
  }
  if (!canUseDom2() || !getContainer) {
    return null;
  }
  if (typeof getContainer === 'string') {
    return document.querySelector(getContainer);
  }
  if (typeof getContainer === 'function') {
    return getContainer();
  }
  return getContainer;
};
var Portal = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  var open = props.open,
    autoLock = props.autoLock,
    getContainer = props.getContainer,
    debug = props.debug,
    _props$autoDestroy = props.autoDestroy,
    autoDestroy = _props$autoDestroy === void 0 ? true : _props$autoDestroy,
    children = props.children;
  var _React$useState = React4.useState(open),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    shouldRender = _React$useState2[0],
    setShouldRender = _React$useState2[1];
  var mergedRender = shouldRender || open;
  React4.useEffect(
    function() {
      if (autoDestroy || open) {
        setShouldRender(open);
      }
    },
    [open, autoDestroy]
  );
  var _React$useState3 = React4.useState(function() {
      return getPortalContainer(getContainer);
    }),
    _React$useState4 = _slicedToArray3(_React$useState3, 2),
    innerContainer = _React$useState4[0],
    setInnerContainer = _React$useState4[1];
  React4.useEffect(function() {
    var customizeContainer = getPortalContainer(getContainer);
    setInnerContainer(customizeContainer !== null && customizeContainer !== void 0 ? customizeContainer : null);
  });
  var _useDom = useDom(mergedRender && !innerContainer, debug),
    _useDom2 = _slicedToArray3(_useDom, 2),
    defaultContainer = _useDom2[0],
    queueCreate = _useDom2[1];
  var mergedContainer = innerContainer !== null && innerContainer !== void 0 ? innerContainer : defaultContainer;
  useScrollLocker(
    autoLock && open && canUseDom2() && (mergedContainer === defaultContainer || mergedContainer === document.body)
  );
  var childRef = null;
  if (children && supportRef(children) && ref) {
    var _ref = children;
    childRef = _ref.ref;
  }
  var mergedRef = useComposeRef(childRef, ref);
  if (!mergedRender || !canUseDom2() || innerContainer === void 0) {
    return null;
  }
  var renderInline = mergedContainer === false || inlineMock();
  var reffedChildren = children;
  if (ref) {
    reffedChildren = /* @__PURE__ */ React4.cloneElement(children, {
      ref: mergedRef
    });
  }
  return /* @__PURE__ */ React4.createElement(
    Context_default.Provider,
    {
      value: queueCreate
    },
    renderInline ? reffedChildren : /* @__PURE__ */ createPortal(reffedChildren, mergedContainer)
  );
});
if (true) {
  Portal.displayName = 'Portal';
}
var Portal_default = Portal;

// esm-build-f54e4f3781ab3f6b4cccce75cc7b48988451cd8e-cb903ff4/node_modules/@rc-component/portal/es/index.js
var es_default = Portal_default;
export { es_default as default, inlineMock };
