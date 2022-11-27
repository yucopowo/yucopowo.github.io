/* esm.sh - esbuild bundle(rc-progress@3.4.1) es2022 development */
// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/Line.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/common.js
import { useRef, useEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var defaultProps = {
  className: '',
  percent: 0,
  prefixCls: 'rc-progress',
  strokeColor: '#2db7f5',
  strokeLinecap: 'round',
  strokeWidth: 1,
  style: {},
  trailColor: '#D9D9D9',
  trailWidth: 1,
  gapPosition: 'bottom'
};
var useTransitionDuration = function useTransitionDuration2() {
  var pathsRef = useRef([]);
  var prevTimeStamp = useRef(null);
  useEffect(function() {
    var now = Date.now();
    var updated = false;
    pathsRef.current.forEach(function(path) {
      if (!path) {
        return;
      }
      updated = true;
      var pathStyle = path.style;
      pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';
      if (prevTimeStamp.current && now - prevTimeStamp.current < 100) {
        pathStyle.transitionDuration = '0s, 0s';
      }
    });
    if (updated) {
      prevTimeStamp.current = Date.now();
    }
  });
  return pathsRef.current;
};

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/Line.js
var _excluded = [
  'className',
  'percent',
  'prefixCls',
  'strokeColor',
  'strokeLinecap',
  'strokeWidth',
  'style',
  'trailColor',
  'trailWidth',
  'transition'
];
var Line = function Line2(_ref) {
  var className = _ref.className,
    percent = _ref.percent,
    prefixCls = _ref.prefixCls,
    strokeColor = _ref.strokeColor,
    strokeLinecap = _ref.strokeLinecap,
    strokeWidth = _ref.strokeWidth,
    style = _ref.style,
    trailColor = _ref.trailColor,
    trailWidth = _ref.trailWidth,
    transition = _ref.transition,
    restProps = _objectWithoutProperties(_ref, _excluded);
  delete restProps.gapPosition;
  var percentList = Array.isArray(percent) ? percent : [percent];
  var strokeColorList = Array.isArray(strokeColor) ? strokeColor : [strokeColor];
  var paths = useTransitionDuration();
  var center = strokeWidth / 2;
  var right = 100 - strokeWidth / 2;
  var pathString = 'M '
    .concat(strokeLinecap === 'round' ? center : 0, ',')
    .concat(center, '\n         L ')
    .concat(strokeLinecap === 'round' ? right : 100, ',')
    .concat(center);
  var viewBoxString = '0 0 100 '.concat(strokeWidth);
  var stackPtg = 0;
  return /* @__PURE__ */ React.createElement(
    'svg',
    _extends(
      {
        className: classNames(''.concat(prefixCls, '-line'), className),
        viewBox: viewBoxString,
        preserveAspectRatio: 'none',
        style
      },
      restProps
    ),
    /* @__PURE__ */ React.createElement('path', {
      className: ''.concat(prefixCls, '-line-trail'),
      d: pathString,
      strokeLinecap,
      stroke: trailColor,
      strokeWidth: trailWidth || strokeWidth,
      fillOpacity: '0'
    }),
    percentList.map(function(ptg, index) {
      var dashPercent = 1;
      switch (strokeLinecap) {
        case 'round':
          dashPercent = 1 - strokeWidth / 100;
          break;
        case 'square':
          dashPercent = 1 - strokeWidth / 2 / 100;
          break;
        default:
          dashPercent = 1;
          break;
      }
      var pathStyle = {
        strokeDasharray: ''.concat(ptg * dashPercent, 'px, 100px'),
        strokeDashoffset: '-'.concat(stackPtg, 'px'),
        transition: transition || 'stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear'
      };
      var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
      stackPtg += ptg;
      return /* @__PURE__ */ React.createElement('path', {
        key: index,
        className: ''.concat(prefixCls, '-line-path'),
        d: pathString,
        strokeLinecap,
        stroke: color,
        strokeWidth,
        fillOpacity: '0',
        ref: function ref(elem) {
          paths[index] = elem;
        },
        style: pathStyle
      });
    })
  );
};
Line.defaultProps = defaultProps;
Line.displayName = 'Line';
var Line_default = Line;

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/Circle.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/hooks/useId.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
var uuid = 0;
var isBrowserClient = canUseDom();
function getUUID() {
  var retId;
  if (isBrowserClient) {
    retId = uuid;
    uuid += 1;
  } else {
    retId = 'TEST_OR_SSR';
  }
  return retId;
}
var useId_default = function(id) {
  var _React$useState = React2.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    innerId = _React$useState2[0],
    setInnerId = _React$useState2[1];
  React2.useEffect(function() {
    setInnerId('rc_progress_'.concat(getUUID()));
  }, []);
  return id || innerId;
};

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/Circle.js
var _excluded2 = [
  'id',
  'prefixCls',
  'steps',
  'strokeWidth',
  'trailWidth',
  'gapDegree',
  'gapPosition',
  'trailColor',
  'strokeLinecap',
  'style',
  'className',
  'strokeColor',
  'percent'
];
function stripPercentToNumber(percent) {
  return +percent.replace('%', '');
}
function toArray(value) {
  var mergedValue = value !== null && value !== void 0 ? value : [];
  return Array.isArray(mergedValue) ? mergedValue : [mergedValue];
}
var VIEW_BOX_SIZE = 100;
var getCircleStyle = function getCircleStyle2(
  perimeter,
  perimeterWithoutGap,
  offset,
  percent,
  rotateDeg,
  gapDegree,
  gapPosition,
  strokeColor,
  strokeLinecap,
  strokeWidth
) {
  var stepSpace = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : 0;
  var offsetDeg = (offset / 100) * 360 * ((360 - gapDegree) / 360);
  var positionDeg =
    gapDegree === 0
      ? 0
      : {
          bottom: 0,
          top: 180,
          left: 90,
          right: -90
        }[gapPosition];
  var strokeDashoffset = ((100 - percent) / 100) * perimeterWithoutGap;
  if (strokeLinecap === 'round' && percent !== 100) {
    strokeDashoffset += strokeWidth / 2;
    if (strokeDashoffset >= perimeterWithoutGap) {
      strokeDashoffset = perimeterWithoutGap - 0.01;
    }
  }
  return {
    stroke: typeof strokeColor === 'string' ? strokeColor : void 0,
    strokeDasharray: ''.concat(perimeterWithoutGap, 'px ').concat(perimeter),
    strokeDashoffset: strokeDashoffset + stepSpace,
    transform: 'rotate('.concat(rotateDeg + offsetDeg + positionDeg, 'deg)'),
    transformOrigin: '0 0',
    transition:
      'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s',
    fillOpacity: 0
  };
};
var Circle = function Circle2(_ref) {
  var id = _ref.id,
    prefixCls = _ref.prefixCls,
    steps = _ref.steps,
    strokeWidth = _ref.strokeWidth,
    trailWidth = _ref.trailWidth,
    _ref$gapDegree = _ref.gapDegree,
    gapDegree = _ref$gapDegree === void 0 ? 0 : _ref$gapDegree,
    gapPosition = _ref.gapPosition,
    trailColor = _ref.trailColor,
    strokeLinecap = _ref.strokeLinecap,
    style = _ref.style,
    className = _ref.className,
    strokeColor = _ref.strokeColor,
    percent = _ref.percent,
    restProps = _objectWithoutProperties2(_ref, _excluded2);
  var mergedId = useId_default(id);
  var gradientId = ''.concat(mergedId, '-gradient');
  var radius = VIEW_BOX_SIZE / 2 - strokeWidth / 2;
  var perimeter = Math.PI * 2 * radius;
  var rotateDeg = gapDegree > 0 ? 90 + gapDegree / 2 : -90;
  var perimeterWithoutGap = perimeter * ((360 - gapDegree) / 360);
  var _ref2 =
      _typeof(steps) === 'object'
        ? steps
        : {
            count: steps,
            space: 2
          },
    stepCount = _ref2.count,
    stepSpace = _ref2.space;
  var circleStyle = getCircleStyle(
    perimeter,
    perimeterWithoutGap,
    0,
    100,
    rotateDeg,
    gapDegree,
    gapPosition,
    trailColor,
    strokeLinecap,
    strokeWidth
  );
  var percentList = toArray(percent);
  var strokeColorList = toArray(strokeColor);
  var gradient = strokeColorList.find(function(color) {
    return color && _typeof(color) === 'object';
  });
  var paths = useTransitionDuration();
  var getStokeList = function getStokeList2() {
    var stackPtg = 0;
    return percentList
      .map(function(ptg, index) {
        var color = strokeColorList[index] || strokeColorList[strokeColorList.length - 1];
        var stroke = color && _typeof(color) === 'object' ? 'url(#'.concat(gradientId, ')') : void 0;
        var circleStyleForStack = getCircleStyle(
          perimeter,
          perimeterWithoutGap,
          stackPtg,
          ptg,
          rotateDeg,
          gapDegree,
          gapPosition,
          color,
          strokeLinecap,
          strokeWidth
        );
        stackPtg += ptg;
        return /* @__PURE__ */ React3.createElement('circle', {
          key: index,
          className: ''.concat(prefixCls, '-circle-path'),
          r: radius,
          cx: 0,
          cy: 0,
          stroke,
          strokeLinecap,
          strokeWidth,
          opacity: ptg === 0 ? 0 : 1,
          style: circleStyleForStack,
          ref: function ref(elem) {
            paths[index] = elem;
          }
        });
      })
      .reverse();
  };
  var getStepStokeList = function getStepStokeList2() {
    var current = Math.round(stepCount * (percentList[0] / 100));
    var stepPtg = 100 / stepCount;
    var stackPtg = 0;
    return new Array(stepCount).fill(null).map(function(_, index) {
      var color = index <= current - 1 ? strokeColorList[0] : trailColor;
      var stroke = color && _typeof(color) === 'object' ? 'url(#'.concat(gradientId, ')') : void 0;
      var circleStyleForStack = getCircleStyle(
        perimeter,
        perimeterWithoutGap,
        stackPtg,
        stepPtg,
        rotateDeg,
        gapDegree,
        gapPosition,
        color,
        'butt',
        strokeWidth,
        stepSpace
      );
      stackPtg +=
        ((perimeterWithoutGap - circleStyleForStack.strokeDashoffset + stepSpace) * 100) / perimeterWithoutGap;
      return /* @__PURE__ */ React3.createElement('circle', {
        key: index,
        className: ''.concat(prefixCls, '-circle-path'),
        r: radius,
        cx: 0,
        cy: 0,
        stroke,
        strokeWidth,
        opacity: 1,
        style: circleStyleForStack,
        ref: function ref(elem) {
          paths[index] = elem;
        }
      });
    });
  };
  return /* @__PURE__ */ React3.createElement(
    'svg',
    _extends2(
      {
        className: classNames2(''.concat(prefixCls, '-circle'), className),
        viewBox: ''
          .concat(-VIEW_BOX_SIZE / 2, ' ')
          .concat(-VIEW_BOX_SIZE / 2, ' ')
          .concat(VIEW_BOX_SIZE, ' ')
          .concat(VIEW_BOX_SIZE),
        style,
        id,
        role: 'presentation'
      },
      restProps
    ),
    gradient &&
      /* @__PURE__ */ React3.createElement(
        'defs',
        null,
        /* @__PURE__ */ React3.createElement(
          'linearGradient',
          {
            id: gradientId,
            x1: '100%',
            y1: '0%',
            x2: '0%',
            y2: '0%'
          },
          Object.keys(gradient)
            .sort(function(a, b) {
              return stripPercentToNumber(a) - stripPercentToNumber(b);
            })
            .map(function(key, index) {
              return /* @__PURE__ */ React3.createElement('stop', {
                key: index,
                offset: key,
                stopColor: gradient[key]
              });
            })
        )
      ),
    !stepCount &&
      /* @__PURE__ */ React3.createElement('circle', {
        className: ''.concat(prefixCls, '-circle-trail'),
        r: radius,
        cx: 0,
        cy: 0,
        stroke: trailColor,
        strokeLinecap,
        strokeWidth: trailWidth || strokeWidth,
        style: circleStyle
      }),
    stepCount ? getStepStokeList() : getStokeList()
  );
};
Circle.defaultProps = defaultProps;
Circle.displayName = 'Circle';
var Circle_default = Circle;

// esm-build-637c8c78fcde8c3f2b60f989666b4542cb432048-4f86fe85/node_modules/rc-progress/es/index.js
var es_default = {
  Line: Line_default,
  Circle: Circle_default
};
export { Circle_default as Circle, Line_default as Line, es_default as default };
