/* esm.sh - esbuild bundle(rc-tooltip@5.2.2) es2022 development */
// esm-build-63949c1af15a6a80031e3e3e02ca781edd3a9b68-df0baaa1/node_modules/rc-tooltip/es/Tooltip.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef, useImperativeHandle, forwardRef } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';

// esm-build-63949c1af15a6a80031e3e3e02ca781edd3a9b68-df0baaa1/node_modules/rc-tooltip/es/placements.js
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset
  }
};

// esm-build-63949c1af15a6a80031e3e3e02ca781edd3a9b68-df0baaa1/node_modules/rc-tooltip/es/Popup.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function Popup(props) {
  var showArrow = props.showArrow,
    arrowContent = props.arrowContent,
    children = props.children,
    prefixCls = props.prefixCls,
    id = props.id,
    overlayInnerStyle = props.overlayInnerStyle,
    className = props.className,
    style = props.style;
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      className: classNames(''.concat(prefixCls, '-content'), className),
      style
    },
    showArrow !== false &&
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-arrow'),
          key: 'arrow'
        },
        arrowContent
      ),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-inner'),
        id,
        role: 'tooltip',
        style: overlayInnerStyle
      },
      typeof children === 'function' ? children() : children
    )
  );
}

// esm-build-63949c1af15a6a80031e3e3e02ca781edd3a9b68-df0baaa1/node_modules/rc-tooltip/es/Tooltip.js
var Tooltip = function Tooltip2(props, ref) {
  var overlayClassName = props.overlayClassName,
    _props$trigger = props.trigger,
    trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
    _props$mouseEnterDela = props.mouseEnterDelay,
    mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
    _props$mouseLeaveDela = props.mouseLeaveDelay,
    mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
    overlayStyle = props.overlayStyle,
    _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
    children = props.children,
    onVisibleChange = props.onVisibleChange,
    afterVisibleChange = props.afterVisibleChange,
    transitionName = props.transitionName,
    animation = props.animation,
    motion = props.motion,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'right' : _props$placement,
    _props$align = props.align,
    align = _props$align === void 0 ? {} : _props$align,
    _props$destroyTooltip = props.destroyTooltipOnHide,
    destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
    defaultVisible = props.defaultVisible,
    getTooltipContainer = props.getTooltipContainer,
    overlayInnerStyle = props.overlayInnerStyle,
    arrowContent = props.arrowContent,
    overlay = props.overlay,
    id = props.id,
    showArrow = props.showArrow,
    restProps = _objectWithoutProperties(props, [
      'overlayClassName',
      'trigger',
      'mouseEnterDelay',
      'mouseLeaveDelay',
      'overlayStyle',
      'prefixCls',
      'children',
      'onVisibleChange',
      'afterVisibleChange',
      'transitionName',
      'animation',
      'motion',
      'placement',
      'align',
      'destroyTooltipOnHide',
      'defaultVisible',
      'getTooltipContainer',
      'overlayInnerStyle',
      'arrowContent',
      'overlay',
      'id',
      'showArrow'
    ]);
  var domRef = useRef(null);
  useImperativeHandle(ref, function() {
    return domRef.current;
  });
  var extraProps = _objectSpread({}, restProps);
  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }
  var getPopupElement = function getPopupElement2() {
    return /* @__PURE__ */ React2.createElement(
      Popup,
      {
        showArrow,
        arrowContent,
        key: 'content',
        prefixCls,
        id,
        overlayInnerStyle
      },
      overlay
    );
  };
  var destroyTooltip = false;
  var autoDestroy = false;
  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && _typeof(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }
  return /* @__PURE__ */ React2.createElement(
    Trigger,
    _extends(
      {
        popupClassName: overlayClassName,
        prefixCls,
        popup: getPopupElement,
        action: trigger,
        builtinPlacements: placements,
        popupPlacement: placement,
        ref: domRef,
        popupAlign: align,
        getPopupContainer: getTooltipContainer,
        onPopupVisibleChange: onVisibleChange,
        afterPopupVisibleChange: afterVisibleChange,
        popupTransitionName: transitionName,
        popupAnimation: animation,
        popupMotion: motion,
        defaultPopupVisible: defaultVisible,
        destroyPopupOnHide: destroyTooltip,
        autoDestroy,
        mouseLeaveDelay,
        popupStyle: overlayStyle,
        mouseEnterDelay
      },
      extraProps
    ),
    children
  );
};
var Tooltip_default = /* @__PURE__ */ forwardRef(Tooltip);

// esm-build-63949c1af15a6a80031e3e3e02ca781edd3a9b68-df0baaa1/node_modules/rc-tooltip/es/index.js
var es_default = Tooltip_default;
export { Popup, es_default as default };
