/* esm.sh - esbuild bundle(rc-dialog@9.0.2) es2022 development */
// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/DialogWrap.js
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Portal from '/cdn/v99/@rc-component/portal@1.0.3/es2022/portal.development.js';

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/index.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef3, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import useId from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useId.development.js';
import contains from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/contains.development.js';
import pickAttrs from '/cdn/v99/rc-util@5.24.6/es2022/es/pickAttrs.development.js';

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Mask.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';
function Mask(props) {
  var prefixCls = props.prefixCls,
    style = props.style,
    visible = props.visible,
    maskProps = props.maskProps,
    motionName = props.motionName;
  return /* @__PURE__ */ React.createElement(
    CSSMotion,
    {
      key: 'mask',
      visible,
      motionName,
      leavedClassName: ''.concat(prefixCls, '-mask-hidden')
    },
    function(_ref, ref) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      return /* @__PURE__ */ React.createElement(
        'div',
        _extends(
          {
            ref,
            style: _objectSpread(_objectSpread({}, motionStyle), style),
            className: classNames(''.concat(prefixCls, '-mask'), motionClassName)
          },
          maskProps
        )
      );
    }
  );
}

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/util.js
function getMotionName(prefixCls, transitionName, animationName) {
  var motionName = transitionName;
  if (!motionName && animationName) {
    motionName = ''.concat(prefixCls, '-').concat(animationName);
  }
  return motionName;
}
function getScroll(w, top) {
  var ret = w['page'.concat(top ? 'Y' : 'X', 'Offset')];
  var method = 'scroll'.concat(top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}
function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, true);
  return pos;
}

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Content/index.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef as useRef2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import CSSMotion2 from '/cdn/v99/rc-motion@2.6.2/es2022/rc-motion.development.js';

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Content/Panel.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import React3, { useRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Content/MemoChildren.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var MemoChildren_default = /* @__PURE__ */ React2.memo(
  function(_ref) {
    var children = _ref.children;
    return children;
  },
  function(_, _ref2) {
    var shouldUpdate = _ref2.shouldUpdate;
    return !shouldUpdate;
  }
);

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Content/Panel.js
var sentinelStyle = {
  width: 0,
  height: 0,
  overflow: 'hidden',
  outline: 'none'
};
var Panel = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    className = props.className,
    style = props.style,
    title = props.title,
    ariaId = props.ariaId,
    footer = props.footer,
    closable = props.closable,
    closeIcon = props.closeIcon,
    onClose = props.onClose,
    children = props.children,
    bodyStyle = props.bodyStyle,
    bodyProps = props.bodyProps,
    modalRender = props.modalRender,
    onMouseDown = props.onMouseDown,
    onMouseUp = props.onMouseUp,
    holderRef = props.holderRef,
    visible = props.visible,
    forceRender = props.forceRender,
    width = props.width,
    height = props.height;
  var sentinelStartRef = useRef();
  var sentinelEndRef = useRef();
  React3.useImperativeHandle(ref, function() {
    return {
      focus: function focus() {
        var _sentinelStartRef$cur;
        (_sentinelStartRef$cur = sentinelStartRef.current) === null || _sentinelStartRef$cur === void 0
          ? void 0
          : _sentinelStartRef$cur.focus();
      },
      changeActive: function changeActive(next) {
        var _document = document,
          activeElement = _document.activeElement;
        if (next && activeElement === sentinelEndRef.current) {
          sentinelStartRef.current.focus();
        } else if (!next && activeElement === sentinelStartRef.current) {
          sentinelEndRef.current.focus();
        }
      }
    };
  });
  var contentStyle = {};
  if (width !== void 0) {
    contentStyle.width = width;
  }
  if (height !== void 0) {
    contentStyle.height = height;
  }
  var footerNode;
  if (footer) {
    footerNode = /* @__PURE__ */ React3.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-footer')
      },
      footer
    );
  }
  var headerNode;
  if (title) {
    headerNode = /* @__PURE__ */ React3.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-header')
      },
      /* @__PURE__ */ React3.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-title'),
          id: ariaId
        },
        title
      )
    );
  }
  var closer;
  if (closable) {
    closer = /* @__PURE__ */ React3.createElement(
      'button',
      {
        type: 'button',
        onClick: onClose,
        'aria-label': 'Close',
        className: ''.concat(prefixCls, '-close')
      },
      closeIcon ||
        /* @__PURE__ */ React3.createElement('span', {
          className: ''.concat(prefixCls, '-close-x')
        })
    );
  }
  var content = /* @__PURE__ */ React3.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-content')
    },
    closer,
    headerNode,
    /* @__PURE__ */ React3.createElement(
      'div',
      _extends2(
        {
          className: ''.concat(prefixCls, '-body'),
          style: bodyStyle
        },
        bodyProps
      ),
      children
    ),
    footerNode
  );
  return /* @__PURE__ */ React3.createElement(
    'div',
    {
      key: 'dialog-element',
      role: 'dialog',
      'aria-labelledby': title ? ariaId : null,
      'aria-modal': 'true',
      ref: holderRef,
      style: _objectSpread2(_objectSpread2({}, style), contentStyle),
      className: classNames2(prefixCls, className),
      onMouseDown,
      onMouseUp
    },
    /* @__PURE__ */ React3.createElement('div', {
      tabIndex: 0,
      ref: sentinelStartRef,
      style: sentinelStyle,
      'aria-hidden': 'true'
    }),
    /* @__PURE__ */ React3.createElement(
      MemoChildren_default,
      {
        shouldUpdate: visible || forceRender
      },
      modalRender ? modalRender(content) : content
    ),
    /* @__PURE__ */ React3.createElement('div', {
      tabIndex: 0,
      ref: sentinelEndRef,
      style: sentinelStyle,
      'aria-hidden': 'true'
    })
  );
});
if (true) {
  Panel.displayName = 'Panel';
}
var Panel_default = Panel;

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/Content/index.js
var Content = /* @__PURE__ */ React4.forwardRef(function(props, ref) {
  var prefixCls = props.prefixCls,
    title = props.title,
    style = props.style,
    className = props.className,
    visible = props.visible,
    forceRender = props.forceRender,
    destroyOnClose = props.destroyOnClose,
    motionName = props.motionName,
    ariaId = props.ariaId,
    onVisibleChanged = props.onVisibleChanged,
    mousePosition = props.mousePosition;
  var dialogRef = useRef2();
  var _React$useState = React4.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    transformOrigin = _React$useState2[0],
    setTransformOrigin = _React$useState2[1];
  var contentStyle = {};
  if (transformOrigin) {
    contentStyle.transformOrigin = transformOrigin;
  }
  function onPrepare() {
    var elementOffset = offset(dialogRef.current);
    setTransformOrigin(
      mousePosition
        ? ''.concat(mousePosition.x - elementOffset.left, 'px ').concat(mousePosition.y - elementOffset.top, 'px')
        : ''
    );
  }
  return /* @__PURE__ */ React4.createElement(
    CSSMotion2,
    {
      visible,
      onVisibleChanged,
      onAppearPrepare: onPrepare,
      onEnterPrepare: onPrepare,
      forceRender,
      motionName,
      removeOnLeave: destroyOnClose,
      ref: dialogRef
    },
    function(_ref, motionRef) {
      var motionClassName = _ref.className,
        motionStyle = _ref.style;
      return /* @__PURE__ */ React4.createElement(
        Panel_default,
        _extends3({}, props, {
          ref,
          title,
          ariaId,
          prefixCls,
          holderRef: motionRef,
          style: _objectSpread3(_objectSpread3(_objectSpread3({}, motionStyle), style), contentStyle),
          className: classNames3(className, motionClassName)
        })
      );
    }
  );
});
Content.displayName = 'Content';
var Content_default = Content;

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/Dialog/index.js
function Dialog(props) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-dialog' : _props$prefixCls,
    zIndex = props.zIndex,
    _props$visible = props.visible,
    visible = _props$visible === void 0 ? false : _props$visible,
    _props$keyboard = props.keyboard,
    keyboard = _props$keyboard === void 0 ? true : _props$keyboard,
    _props$focusTriggerAf = props.focusTriggerAfterClose,
    focusTriggerAfterClose = _props$focusTriggerAf === void 0 ? true : _props$focusTriggerAf,
    wrapStyle = props.wrapStyle,
    wrapClassName = props.wrapClassName,
    wrapProps = props.wrapProps,
    onClose = props.onClose,
    afterClose = props.afterClose,
    transitionName = props.transitionName,
    animation = props.animation,
    _props$closable = props.closable,
    closable = _props$closable === void 0 ? true : _props$closable,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    maskTransitionName = props.maskTransitionName,
    maskAnimation = props.maskAnimation,
    _props$maskClosable = props.maskClosable,
    maskClosable = _props$maskClosable === void 0 ? true : _props$maskClosable,
    maskStyle = props.maskStyle,
    maskProps = props.maskProps,
    rootClassName = props.rootClassName;
  var lastOutSideActiveElementRef = useRef3();
  var wrapperRef = useRef3();
  var contentRef = useRef3();
  var _React$useState = React5.useState(visible),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  var ariaId = useId();
  function saveLastOutSideActiveElementRef() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      lastOutSideActiveElementRef.current = document.activeElement;
    }
  }
  function focusDialogContent() {
    if (!contains(wrapperRef.current, document.activeElement)) {
      var _contentRef$current;
      (_contentRef$current = contentRef.current) === null || _contentRef$current === void 0
        ? void 0
        : _contentRef$current.focus();
    }
  }
  function onDialogVisibleChanged(newVisible) {
    if (newVisible) {
      focusDialogContent();
    } else {
      setAnimatedVisible(false);
      if (mask && lastOutSideActiveElementRef.current && focusTriggerAfterClose) {
        try {
          lastOutSideActiveElementRef.current.focus({
            preventScroll: true
          });
        } catch (e) {}
        lastOutSideActiveElementRef.current = null;
      }
      if (animatedVisible) {
        afterClose === null || afterClose === void 0 ? void 0 : afterClose();
      }
    }
  }
  function onInternalClose(e) {
    onClose === null || onClose === void 0 ? void 0 : onClose(e);
  }
  var contentClickRef = useRef3(false);
  var contentTimeoutRef = useRef3();
  var onContentMouseDown = function onContentMouseDown2() {
    clearTimeout(contentTimeoutRef.current);
    contentClickRef.current = true;
  };
  var onContentMouseUp = function onContentMouseUp2() {
    contentTimeoutRef.current = setTimeout(function() {
      contentClickRef.current = false;
    });
  };
  var onWrapperClick = null;
  if (maskClosable) {
    onWrapperClick = function onWrapperClick2(e) {
      if (contentClickRef.current) {
        contentClickRef.current = false;
      } else if (wrapperRef.current === e.target) {
        onInternalClose(e);
      }
    };
  }
  function onWrapperKeyDown(e) {
    if (keyboard && e.keyCode === KeyCode.ESC) {
      e.stopPropagation();
      onInternalClose(e);
      return;
    }
    if (visible) {
      if (e.keyCode === KeyCode.TAB) {
        contentRef.current.changeActive(!e.shiftKey);
      }
    }
  }
  useEffect(
    function() {
      if (visible) {
        setAnimatedVisible(true);
        saveLastOutSideActiveElementRef();
      }
    },
    [visible]
  );
  useEffect(function() {
    return function() {
      clearTimeout(contentTimeoutRef.current);
    };
  }, []);
  return /* @__PURE__ */ React5.createElement(
    'div',
    _extends4(
      {
        className: classNames4(''.concat(prefixCls, '-root'), rootClassName)
      },
      pickAttrs(props, {
        data: true
      })
    ),
    /* @__PURE__ */ React5.createElement(Mask, {
      prefixCls,
      visible: mask && visible,
      motionName: getMotionName(prefixCls, maskTransitionName, maskAnimation),
      style: _objectSpread4(
        {
          zIndex
        },
        maskStyle
      ),
      maskProps
    }),
    /* @__PURE__ */ React5.createElement(
      'div',
      _extends4(
        {
          tabIndex: -1,
          onKeyDown: onWrapperKeyDown,
          className: classNames4(''.concat(prefixCls, '-wrap'), wrapClassName),
          ref: wrapperRef,
          onClick: onWrapperClick,
          style: _objectSpread4(
            _objectSpread4(
              {
                zIndex
              },
              wrapStyle
            ),
            {},
            {
              display: !animatedVisible ? 'none' : null
            }
          )
        },
        wrapProps
      ),
      /* @__PURE__ */ React5.createElement(
        Content_default,
        _extends4({}, props, {
          onMouseDown: onContentMouseDown,
          onMouseUp: onContentMouseUp,
          ref: contentRef,
          closable,
          ariaId,
          prefixCls,
          visible: visible && animatedVisible,
          onClose: onInternalClose,
          onVisibleChanged: onDialogVisibleChanged,
          motionName: getMotionName(prefixCls, transitionName, animation)
        })
      )
    )
  );
}

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/DialogWrap.js
var DialogWrap = function DialogWrap2(props) {
  var visible = props.visible,
    getContainer = props.getContainer,
    forceRender = props.forceRender,
    _props$destroyOnClose = props.destroyOnClose,
    destroyOnClose = _props$destroyOnClose === void 0 ? false : _props$destroyOnClose,
    _afterClose = props.afterClose;
  var _React$useState = React6.useState(visible),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    animatedVisible = _React$useState2[0],
    setAnimatedVisible = _React$useState2[1];
  React6.useEffect(
    function() {
      if (visible) {
        setAnimatedVisible(true);
      }
    },
    [visible]
  );
  if (!forceRender && destroyOnClose && !animatedVisible) {
    return null;
  }
  return /* @__PURE__ */ React6.createElement(
    Portal,
    {
      open: visible || forceRender || animatedVisible,
      autoDestroy: false,
      getContainer,
      autoLock: visible || animatedVisible
    },
    /* @__PURE__ */ React6.createElement(
      Dialog,
      _extends5({}, props, {
        destroyOnClose,
        afterClose: function afterClose() {
          _afterClose === null || _afterClose === void 0 ? void 0 : _afterClose();
          setAnimatedVisible(false);
        }
      })
    )
  );
};
DialogWrap.displayName = 'Dialog';
var DialogWrap_default = DialogWrap;

// esm-build-738512919058edb1aad7ffb3bf1568a6ce3081dc-1af4739c/node_modules/rc-dialog/es/index.js
var es_default = DialogWrap_default;
export { Panel_default as Panel, es_default as default };
