/* esm.sh - esbuild bundle(@rc-component/tour@1.0.1-2) es2022 development */
// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/Tour.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/objectSpread2.development.js';
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/defineProperty.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/typeof.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/objectWithoutProperties.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
import Portal2 from '/cdn/v99/@rc-component/portal@1.0.3/es2022/portal.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/hooks/useTarget.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/slicedToArray.development.js';
import { useState, useMemo } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useLayoutEffect from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/util.js
function isInViewPort(element) {
  var viewWidth = window.innerWidth || document.documentElement.clientWidth;
  var viewHeight = window.innerHeight || document.documentElement.clientHeight;
  var _element$getBoundingC = element.getBoundingClientRect(),
    top = _element$getBoundingC.top,
    right = _element$getBoundingC.right,
    bottom = _element$getBoundingC.bottom,
    left = _element$getBoundingC.left;
  return top >= 0 && left >= 0 && right <= viewWidth && bottom <= viewHeight;
}

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/hooks/useTarget.js
function useTarget(target, open, gap) {
  var _useState = useState(void 0),
    _useState2 = _slicedToArray(_useState, 2),
    targetElement = _useState2[0],
    setTargetElement = _useState2[1];
  useLayoutEffect(function() {
    var nextElement = typeof target === 'function' ? target() : target;
    setTargetElement(nextElement || null);
  });
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    posInfo = _useState4[0],
    setPosInfo = _useState4[1];
  useLayoutEffect(
    function() {
      if (targetElement) {
        if (!isInViewPort(targetElement)) {
          targetElement.scrollIntoView(true);
        }
        var _targetElement$getBou = targetElement.getBoundingClientRect(),
          left = _targetElement$getBou.left,
          top = _targetElement$getBou.top,
          width = _targetElement$getBou.width,
          height = _targetElement$getBou.height;
        var nextPosInfo = {
          left,
          top,
          width,
          height,
          radius: 0
        };
        setPosInfo(function(origin) {
          if (JSON.stringify(origin) !== JSON.stringify(nextPosInfo)) {
            return nextPosInfo;
          }
          return origin;
        });
      } else {
        setPosInfo(null);
      }
    },
    [targetElement, open]
  );
  var mergedPosInfo = useMemo(
    function() {
      if (!posInfo) {
        return posInfo;
      }
      var gapOffset = (gap === null || gap === void 0 ? void 0 : gap.offset) || 6;
      var gapRadius = (gap === null || gap === void 0 ? void 0 : gap.radius) || 2;
      return {
        left: posInfo.left - gapOffset,
        top: posInfo.top - gapOffset,
        width: posInfo.width + gapOffset * 2,
        height: posInfo.height + gapOffset * 2,
        radius: gapRadius
      };
    },
    [posInfo, gap]
  );
  return [mergedPosInfo, targetElement];
}

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/TourStep/index.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/TourStep/DefaultPanel.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/toConsumableArray.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function DefaultPanel(props) {
  var prefixCls = props.prefixCls,
    current = props.current,
    total = props.total,
    title = props.title,
    description = props.description,
    onClose = props.onClose,
    onPrev = props.onPrev,
    onNext = props.onNext,
    onFinish = props.onFinish;
  return /* @__PURE__ */ React.createElement(
    React.Fragment,
    null,
    /* @__PURE__ */ React.createElement(
      'button',
      {
        type: 'button',
        onClick: onClose,
        'aria-label': 'Close',
        className: ''.concat(prefixCls, '-close')
      },
      /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-close-x')
        },
        '\xD7'
      )
    ),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-header')
      },
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-title')
        },
        title
      )
    ),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-description')
      },
      description
    ),
    /* @__PURE__ */ React.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-footer')
      },
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-sliders')
        },
        total > 1
          ? _toConsumableArray(
              Array.from({
                length: total
              }).keys()
            ).map(function(item, index) {
              return /* @__PURE__ */ React.createElement('span', {
                key: item,
                className: index === current ? 'active' : ''
              });
            })
          : null
      ),
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-buttons')
        },
        current !== 0
          ? /* @__PURE__ */ React.createElement(
              'button',
              {
                className: ''.concat(prefixCls, '-prev-btn'),
                onClick: onPrev
              },
              'Prev'
            )
          : null,
        current === total - 1
          ? /* @__PURE__ */ React.createElement(
              'button',
              {
                className: ''.concat(prefixCls, '-finish-btn'),
                onClick: onFinish
              },
              'Finish'
            )
          : /* @__PURE__ */ React.createElement(
              'button',
              {
                className: ''.concat(prefixCls, '-next-btn'),
                onClick: onNext
              },
              'Next'
            )
      )
    )
  );
}

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/TourStep/index.js
var TourStep = function TourStep2(props) {
  var className = props.className,
    prefixCls = props.prefixCls,
    current = props.current,
    renderPanel = props.renderPanel;
  var mergedClassName = classNames(''.concat(prefixCls, '-inner'), className);
  return /* @__PURE__ */ React2.createElement(
    'div',
    {
      className: mergedClassName
    },
    typeof renderPanel === 'function'
      ? renderPanel(props, current)
      : /* @__PURE__ */ React2.createElement(DefaultPanel, props)
  );
};
var TourStep_default = TourStep;

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/Mask.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/typeof.development.js';
import React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Portal from '/cdn/v99/@rc-component/portal@1.0.3/es2022/portal.development.js';
import useId from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useId.development.js';
var COVER_PROPS = {
  fill: 'transparent',
  pointerEvents: 'auto'
};
var Mask = function Mask2(props) {
  var prefixCls = props.prefixCls,
    rootClassName = props.rootClassName,
    pos = props.pos,
    mask = props.mask,
    open = props.open,
    animated = props.animated;
  var id = useId();
  var maskId = ''.concat(prefixCls, '-mask-').concat(id);
  var mergedAnimated =
    _typeof(animated) === 'object'
      ? animated === null || animated === void 0
        ? void 0
        : animated.placeholder
      : animated;
  return /* @__PURE__ */ React3.createElement(
    Portal,
    {
      open,
      autoLock: true
    },
    /* @__PURE__ */ React3.createElement(
      'div',
      {
        className: classNames2(''.concat(prefixCls, '-mask'), rootClassName),
        style: {
          position: 'fixed',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 900,
          pointerEvents: 'none'
        }
      },
      mask
        ? /* @__PURE__ */ React3.createElement(
            'svg',
            {
              style: {
                width: '100%',
                height: '100%'
              }
            },
            /* @__PURE__ */ React3.createElement(
              'defs',
              null,
              /* @__PURE__ */ React3.createElement(
                'mask',
                {
                  id: maskId
                },
                /* @__PURE__ */ React3.createElement('rect', {
                  x: '0',
                  y: '0',
                  width: '100%',
                  height: '100%',
                  fill: 'white'
                }),
                pos &&
                  /* @__PURE__ */ React3.createElement('rect', {
                    x: pos.left,
                    y: pos.top,
                    rx: pos.radius,
                    width: pos.width,
                    height: pos.height,
                    fill: 'black',
                    className: mergedAnimated ? ''.concat(prefixCls, '-placeholder-animated') : ''
                  })
              )
            ),
            /* @__PURE__ */ React3.createElement('rect', {
              x: '0',
              y: '0',
              width: '100%',
              height: '100%',
              fill: 'rgba(0,0,0,0.5)',
              mask: 'url(#'.concat(maskId, ')')
            }),
            pos &&
              /* @__PURE__ */ React3.createElement(
                React3.Fragment,
                null,
                /* @__PURE__ */ React3.createElement(
                  'rect',
                  _extends({}, COVER_PROPS, {
                    x: '0',
                    y: '0',
                    width: '100%',
                    height: pos.top
                  })
                ),
                /* @__PURE__ */ React3.createElement(
                  'rect',
                  _extends({}, COVER_PROPS, {
                    x: '0',
                    y: '0',
                    width: pos.left,
                    height: '100%'
                  })
                ),
                /* @__PURE__ */ React3.createElement(
                  'rect',
                  _extends({}, COVER_PROPS, {
                    x: '0',
                    y: pos.top + pos.height,
                    width: '100%',
                    height: 'calc(100vh - '.concat(pos.top + pos.height, 'px)')
                  })
                ),
                /* @__PURE__ */ React3.createElement(
                  'rect',
                  _extends({}, COVER_PROPS, {
                    x: pos.left + pos.width,
                    y: '0',
                    width: 'calc(100vw - '.concat(pos.left + pos.width, 'px)'),
                    height: '100%'
                  })
                )
              )
          )
        : null
    )
  );
};
var Mask_default = Mask;

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/placements.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/objectSpread2.development.js';
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
function getCenterPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
    arrowWidth = _config$arrowWidth === void 0 ? 4 : _config$arrowWidth,
    _config$horizontalArr = config.horizontalArrowShift,
    horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
    _config$verticalArrow = config.verticalArrowShift,
    verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
    placement = config.placement;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tc', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function(key) {
    placementMap[key] = _objectSpread(
      _objectSpread({}, placementMap[key]),
      {},
      {
        targetOffset
      }
    );
  });
  return placementMap[placement];
}
var placements_default = placements;

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/Tour.js
import useLayoutEffect2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
var _excluded = [
  'prefixCls',
  'steps',
  'defaultCurrent',
  'current',
  'onChange',
  'onClose',
  'onFinish',
  'open',
  'mask',
  'arrow',
  'rootClassName',
  'placement',
  'renderPanel',
  'gap',
  'animated'
];
var CENTER_ALIGN = {
  points: ['cc', 'cc'],
  offset: [0, 0]
};
var CENTER_PLACEHOLDER = {
  left: '50%',
  top: '50%',
  width: 1,
  height: 1
};
var Tour = function Tour2(props) {
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-tour' : _props$prefixCls,
    _props$steps = props.steps,
    steps = _props$steps === void 0 ? [] : _props$steps,
    defaultCurrent = props.defaultCurrent,
    current = props.current,
    onChange = props.onChange,
    onClose = props.onClose,
    _onFinish = props.onFinish,
    open = props.open,
    _props$mask = props.mask,
    mask = _props$mask === void 0 ? true : _props$mask,
    _props$arrow = props.arrow,
    arrow = _props$arrow === void 0 ? true : _props$arrow,
    rootClassName = props.rootClassName,
    _props$placement = props.placement,
    placement = _props$placement === void 0 ? 'bottom' : _props$placement,
    renderPanel = props.renderPanel,
    gap = props.gap,
    animated = props.animated,
    restProps = _objectWithoutProperties(props, _excluded);
  var _useMergedState = useMergedState(0, {
      value: current,
      defaultValue: defaultCurrent
    }),
    _useMergedState2 = _slicedToArray2(_useMergedState, 2),
    mergedCurrent = _useMergedState2[0],
    setMergedCurrent = _useMergedState2[1];
  var _useMergedState3 = useMergedState(void 0, {
      value: open,
      postState: function postState(origin) {
        return mergedCurrent < 0 || mergedCurrent >= steps.length
          ? false
          : origin !== null && origin !== void 0
          ? origin
          : true;
      }
    }),
    _useMergedState4 = _slicedToArray2(_useMergedState3, 2),
    mergedOpen = _useMergedState4[0],
    setMergedOpen = _useMergedState4[1];
  var openRef = React4.useRef(mergedOpen);
  useLayoutEffect2(
    function() {
      if (mergedOpen && !openRef.current) {
        setMergedCurrent(0);
      }
      openRef.current = mergedOpen;
    },
    [mergedOpen]
  );
  var _ref = steps[mergedCurrent] || {},
    target = _ref.target,
    stepPlacement = _ref.placement,
    stepStyle = _ref.style,
    stepArrow = _ref.arrow,
    stepClassName = _ref.className,
    stepMask = _ref.mask;
  var mergedPlacement = stepPlacement !== null && stepPlacement !== void 0 ? stepPlacement : placement;
  var mergedMask = mergedOpen && (stepMask !== null && stepMask !== void 0 ? stepMask : mask);
  var _useTarget = useTarget(target, open, gap),
    _useTarget2 = _slicedToArray2(_useTarget, 2),
    posInfo = _useTarget2[0],
    targetElement = _useTarget2[1];
  var mergedArrow = targetElement ? (typeof stepArrow === 'undefined' ? arrow : stepArrow) : false;
  var arrowPointAtCenter = _typeof2(mergedArrow) === 'object' ? mergedArrow.pointAtCenter : false;
  var arrowClassName = classNames3(
    ''.concat(prefixCls, '-arrow'),
    _defineProperty({}, ''.concat(prefixCls, '-arrowPointAtCenter'), arrowPointAtCenter)
  );
  var onInternalChange = function onInternalChange2(nextCurrent) {
    setMergedCurrent(nextCurrent);
    onChange === null || onChange === void 0 ? void 0 : onChange(nextCurrent);
  };
  var popupAlign = targetElement
    ? arrowPointAtCenter
      ? getCenterPlacements({
          placement
        })
      : placements_default[mergedPlacement]
    : CENTER_ALIGN;
  if (targetElement === void 0) {
    return null;
  }
  var handleClose = function handleClose2() {
    setMergedOpen(false);
    onClose === null || onClose === void 0 ? void 0 : onClose(mergedCurrent);
  };
  var getPopupElement = function getPopupElement2() {
    return /* @__PURE__ */ React4.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-content')
      },
      mergedArrow &&
        /* @__PURE__ */ React4.createElement('div', {
          className: arrowClassName,
          key: 'arrow'
        }),
      /* @__PURE__ */ React4.createElement(
        TourStep_default,
        _extends2(
          {
            key: 'content',
            prefixCls,
            total: steps.length,
            renderPanel,
            onPrev: function onPrev() {
              onInternalChange(mergedCurrent - 1);
            },
            onNext: function onNext() {
              onInternalChange(mergedCurrent + 1);
            },
            onClose: handleClose,
            current: mergedCurrent,
            onFinish: function onFinish() {
              handleClose();
              _onFinish === null || _onFinish === void 0 ? void 0 : _onFinish();
            }
          },
          steps[mergedCurrent]
        )
      )
    );
  };
  return /* @__PURE__ */ React4.createElement(
    React4.Fragment,
    null,
    /* @__PURE__ */ React4.createElement(
      Trigger,
      _extends2({}, restProps, {
        popupAlign,
        popupStyle: stepStyle,
        popupPlacement: mergedPlacement,
        builtinPlacements: placements_default,
        popupVisible: mergedOpen,
        popupClassName: classNames3(rootClassName, stepClassName),
        prefixCls,
        popup: getPopupElement,
        forceRender: false,
        destroyPopupOnHide: true,
        zIndex: 1090
      }),
      /* @__PURE__ */ React4.createElement(
        Portal2,
        {
          open: mergedOpen,
          autoLock: true
        },
        /* @__PURE__ */ React4.createElement('div', {
          className: classNames3(rootClassName, ''.concat(prefixCls, '-target-placeholder')),
          style: _objectSpread2(
            _objectSpread2({}, posInfo || CENTER_PLACEHOLDER),
            {},
            {
              position: 'fixed',
              pointerEvents: 'none'
            }
          )
        })
      )
    ),
    /* @__PURE__ */ React4.createElement(Mask_default, {
      prefixCls,
      pos: posInfo,
      mask: mergedMask,
      open: mergedOpen,
      animated,
      rootClassName
    })
  );
};
var Tour_default = Tour;

// esm-build-ddfd7574ac1e5a4aabaed350445a737f3c4a8c8d-94268208/node_modules/@rc-component/tour/es/index.js
var es_default = Tour_default;
export { es_default as default };
