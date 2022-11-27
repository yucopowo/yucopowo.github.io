/* esm.sh - esbuild bundle(@antv/g2@4.2.8) es2022 development */ // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/chart.js
import { __assign as __assign7, __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  debounce as debounce2,
  each as each12,
  isString as isString5
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/constant.js
var LAYER;
(function(LAYER2) {
  LAYER2['FORE'] = 'fore';
  LAYER2['MID'] = 'mid';
  LAYER2['BG'] = 'bg';
})(LAYER || (LAYER = {}));
var DIRECTION;
(function(DIRECTION2) {
  DIRECTION2['TOP'] = 'top';
  DIRECTION2['TOP_LEFT'] = 'top-left';
  DIRECTION2['TOP_RIGHT'] = 'top-right';
  DIRECTION2['RIGHT'] = 'right';
  DIRECTION2['RIGHT_TOP'] = 'right-top';
  DIRECTION2['RIGHT_BOTTOM'] = 'right-bottom';
  DIRECTION2['LEFT'] = 'left';
  DIRECTION2['LEFT_TOP'] = 'left-top';
  DIRECTION2['LEFT_BOTTOM'] = 'left-bottom';
  DIRECTION2['BOTTOM'] = 'bottom';
  DIRECTION2['BOTTOM_LEFT'] = 'bottom-left';
  DIRECTION2['BOTTOM_RIGHT'] = 'bottom-right';
  DIRECTION2['RADIUS'] = 'radius';
  DIRECTION2['CIRCLE'] = 'circle';
  DIRECTION2['NONE'] = 'none';
})(DIRECTION || (DIRECTION = {}));
var COMPONENT_TYPE;
(function(COMPONENT_TYPE2) {
  COMPONENT_TYPE2['AXIS'] = 'axis';
  COMPONENT_TYPE2['GRID'] = 'grid';
  COMPONENT_TYPE2['LEGEND'] = 'legend';
  COMPONENT_TYPE2['TOOLTIP'] = 'tooltip';
  COMPONENT_TYPE2['ANNOTATION'] = 'annotation';
  COMPONENT_TYPE2['SLIDER'] = 'slider';
  COMPONENT_TYPE2['SCROLLBAR'] = 'scrollbar';
  COMPONENT_TYPE2['OTHER'] = 'other';
})(COMPONENT_TYPE || (COMPONENT_TYPE = {}));
var GROUP_Z_INDEX = { FORE: 3, MID: 2, BG: 1 };
var VIEW_LIFE_CIRCLE;
(function(VIEW_LIFE_CIRCLE2) {
  VIEW_LIFE_CIRCLE2['BEFORE_RENDER'] = 'beforerender';
  VIEW_LIFE_CIRCLE2['AFTER_RENDER'] = 'afterrender';
  VIEW_LIFE_CIRCLE2['BEFORE_PAINT'] = 'beforepaint';
  VIEW_LIFE_CIRCLE2['AFTER_PAINT'] = 'afterpaint';
  VIEW_LIFE_CIRCLE2['BEFORE_CHANGE_DATA'] = 'beforechangedata';
  VIEW_LIFE_CIRCLE2['AFTER_CHANGE_DATA'] = 'afterchangedata';
  VIEW_LIFE_CIRCLE2['BEFORE_CLEAR'] = 'beforeclear';
  VIEW_LIFE_CIRCLE2['AFTER_CLEAR'] = 'afterclear';
  VIEW_LIFE_CIRCLE2['BEFORE_DESTROY'] = 'beforedestroy';
  VIEW_LIFE_CIRCLE2['BEFORE_CHANGE_SIZE'] = 'beforechangesize';
  VIEW_LIFE_CIRCLE2['AFTER_CHANGE_SIZE'] = 'afterchangesize';
})(VIEW_LIFE_CIRCLE || (VIEW_LIFE_CIRCLE = {}));
var GEOMETRY_LIFE_CIRCLE;
(function(GEOMETRY_LIFE_CIRCLE2) {
  GEOMETRY_LIFE_CIRCLE2['BEFORE_DRAW_ANIMATE'] = 'beforeanimate';
  GEOMETRY_LIFE_CIRCLE2['AFTER_DRAW_ANIMATE'] = 'afteranimate';
  GEOMETRY_LIFE_CIRCLE2['BEFORE_RENDER_LABEL'] = 'beforerenderlabel';
  GEOMETRY_LIFE_CIRCLE2['AFTER_RENDER_LABEL'] = 'afterrenderlabel';
})(GEOMETRY_LIFE_CIRCLE || (GEOMETRY_LIFE_CIRCLE = {}));
var PLOT_EVENTS;
(function(PLOT_EVENTS2) {
  PLOT_EVENTS2['MOUSE_ENTER'] = 'plot:mouseenter';
  PLOT_EVENTS2['MOUSE_DOWN'] = 'plot:mousedown';
  PLOT_EVENTS2['MOUSE_MOVE'] = 'plot:mousemove';
  PLOT_EVENTS2['MOUSE_UP'] = 'plot:mouseup';
  PLOT_EVENTS2['MOUSE_LEAVE'] = 'plot:mouseleave';
  PLOT_EVENTS2['TOUCH_START'] = 'plot:touchstart';
  PLOT_EVENTS2['TOUCH_MOVE'] = 'plot:touchmove';
  PLOT_EVENTS2['TOUCH_END'] = 'plot:touchend';
  PLOT_EVENTS2['TOUCH_CANCEL'] = 'plot:touchcancel';
  PLOT_EVENTS2['CLICK'] = 'plot:click';
  PLOT_EVENTS2['DBLCLICK'] = 'plot:dblclick';
  PLOT_EVENTS2['CONTEXTMENU'] = 'plot:contextmenu';
  PLOT_EVENTS2['LEAVE'] = 'plot:leave';
  PLOT_EVENTS2['ENTER'] = 'plot:enter';
})(PLOT_EVENTS || (PLOT_EVENTS = {}));
var ELEMENT_STATE;
(function(ELEMENT_STATE2) {
  ELEMENT_STATE2['ACTIVE'] = 'active';
  ELEMENT_STATE2['INACTIVE'] = 'inactive';
  ELEMENT_STATE2['SELECTED'] = 'selected';
  ELEMENT_STATE2['DEFAULT'] = 'default';
})(ELEMENT_STATE || (ELEMENT_STATE = {}));
var GROUP_ATTRS = ['color', 'shape', 'size'];
var FIELD_ORIGIN = '_origin';
var MIN_CHART_WIDTH = 1;
var MIN_CHART_HEIGHT = 1;
var COMPONENT_MAX_VIEW_PERCENTAGE = 0.25; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/engine/index.js
var ENGINES = {};
function getEngine(name) {
  var G = ENGINES[name];
  if (!G) {
    throw new Error("G engine '".concat(name, "' is not exist, please register it at first."));
  }
  return G;
}
function registerEngine(name, engine) {
  ENGINES[name] = engine;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/dom.js
import { createDom, modifyCSS } from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
function getElementSize(ele) {
  var style = getComputedStyle(ele);
  return {
    width:
      (ele.clientWidth || parseInt(style.width, 10)) -
      parseInt(style.paddingLeft, 10) -
      parseInt(style.paddingRight, 10),
    height:
      (ele.clientHeight || parseInt(style.height, 10)) -
      parseInt(style.paddingTop, 10) -
      parseInt(style.paddingBottom, 10)
  };
}
function isNumber(v) {
  return typeof v === 'number' && !isNaN(v);
}
function getChartSize(ele, autoFit, width, height) {
  var w = width;
  var h = height;
  if (autoFit) {
    var size6 = getElementSize(ele);
    w = size6.width ? size6.width : w;
    h = size6.height ? size6.height : h;
  }
  return {
    width: Math.max(isNumber(w) ? w : MIN_CHART_WIDTH, MIN_CHART_WIDTH),
    height: Math.max(isNumber(h) ? h : MIN_CHART_HEIGHT, MIN_CHART_HEIGHT)
  };
}
function removeDom(dom) {
  var parent = dom.parentNode;
  if (parent) {
    parent.removeChild(dom);
  }
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/view.js
import {
  __assign as __assign6,
  __extends as __extends4,
  __read as __read10,
  __rest as __rest2,
  __spreadArray as __spreadArray7
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  clone as clone2,
  deepMix as deepMix6,
  each as each11,
  filter as filter2,
  find as find2,
  flatten,
  get as get9,
  isBoolean as isBoolean2,
  isFunction as isFunction3,
  isNil as isNil5,
  isObject as isObject2,
  isString as isString4,
  isUndefined,
  mix as mix2,
  remove,
  set,
  size,
  uniqueId,
  isEqual,
  isPlainObject as isPlainObject2,
  reduce
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/base.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import EE from '/cdn/v99/@antv/event-emitter@0.1.3/es2022/event-emitter.development.js';
var Base = (function(_super) {
  __extends(Base2, _super);
  function Base2(cfg) {
    var _this = _super.call(this) || this;
    _this.destroyed = false;
    var _a = cfg.visible,
      visible = _a === void 0 ? true : _a;
    _this.visible = visible;
    return _this;
  }
  Base2.prototype.show = function() {
    var visible = this.visible;
    if (!visible) {
      this.changeVisible(true);
    }
  };
  Base2.prototype.hide = function() {
    var visible = this.visible;
    if (visible) {
      this.changeVisible(false);
    }
  };
  Base2.prototype.destroy = function() {
    this.off();
    this.destroyed = true;
  };
  Base2.prototype.changeVisible = function(visible) {
    if (this.visible === visible) {
      return;
    }
    this.visible = visible;
  };
  return Base2;
})(EE);
var base_default = Base; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/index.js
import { lowerCase } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/facet.js
import { __read as __read3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix2,
  each as each3,
  every,
  get as get3,
  isNil as isNil2,
  isNumber as isNumber4
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/axis.js
import { deepMix, get as get2, isBoolean } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/scale.js
import { __assign, __read as __read2, __spreadArray } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  firstValue,
  get,
  isEmpty as isEmpty2,
  isNil,
  isNumber as isNumber3,
  isString as isString2,
  valuesOfKey
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/dependents.js
import { Event, AbstractGroup, AbstractShape } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
import { registerAdjust, getAdjust, Adjust } from '/cdn/v99/@antv/adjust@0.2.5/es2022/adjust.development.js';
import { getAttribute, Attribute } from '/cdn/v99/@antv/attr@0.3.3/es2022/attr.development.js';
import { Color } from '/cdn/v99/@antv/attr@0.3.3/es2022/attr.development.js';
import { getCoordinate, registerCoordinate, Coordinate } from '/cdn/v99/@antv/coord@0.3.1/es2022/coord.development.js';
import { getScale, registerScale, Scale } from '/cdn/v99/@antv/scale@0.3.18/es2022/scale.development.js';
import {
  Annotation,
  Axis,
  Component,
  Crosshair,
  Grid,
  GroupComponent,
  HtmlComponent,
  Legend,
  Slider,
  Tooltip,
  Scrollbar
} from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js';
var LineAxis = Axis.Line;
var CircleAxis = Axis.Circle;
var LineGrid = Grid.Line;
var CircleGrid = Grid.Circle;
var CategoryLegend = Legend.Category;
var ContinuousLegend = Legend.Continuous;
var HtmlTooltip = Tooltip.Html; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/graphics.js
import {
  each,
  isEmpty,
  isNumber as isNumber2,
  isNumberEqual,
  max,
  min
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getPointsBox(points) {
  if (isEmpty(points)) {
    return null;
  }
  var minX = points[0].x;
  var maxX = points[0].x;
  var minY = points[0].y;
  var maxY = points[0].y;
  each(points, function(point) {
    minX = minX > point.x ? point.x : minX;
    maxX = maxX < point.x ? point.x : maxX;
    minY = minY > point.y ? point.y : minY;
    maxY = maxY < point.y ? point.y : maxY;
  });
  return { minX, maxX, minY, maxY, centerX: (minX + maxX) / 2, centerY: (minY + maxY) / 2 };
}
function uniqueValues(array) {
  return Array.from(new Set(array)).length === 1;
}
function mid(array) {
  return (min(array) + max(array)) / 2;
}
function polarToCartesian(centerX, centerY, radius, angleInRadian) {
  return { x: centerX + radius * Math.cos(angleInRadian), y: centerY + radius * Math.sin(angleInRadian) };
}
function getSectorPath(centerX, centerY, radius, startAngleInRadian, endAngleInRadian, innerRadius) {
  if (innerRadius === void 0) {
    innerRadius = 0;
  }
  var start = polarToCartesian(centerX, centerY, radius, startAngleInRadian);
  var end = polarToCartesian(centerX, centerY, radius, endAngleInRadian);
  var innerStart = polarToCartesian(centerX, centerY, innerRadius, startAngleInRadian);
  var innerEnd = polarToCartesian(centerX, centerY, innerRadius, endAngleInRadian);
  if (endAngleInRadian - startAngleInRadian === Math.PI * 2) {
    var middlePoint = polarToCartesian(centerX, centerY, radius, startAngleInRadian + Math.PI);
    var innerMiddlePoint = polarToCartesian(centerX, centerY, innerRadius, startAngleInRadian + Math.PI);
    var circlePathCommands = [
      ['M', start.x, start.y],
      ['A', radius, radius, 0, 1, 1, middlePoint.x, middlePoint.y],
      ['A', radius, radius, 0, 1, 1, end.x, end.y],
      ['M', innerStart.x, innerStart.y]
    ];
    if (innerRadius) {
      circlePathCommands.push(['A', innerRadius, innerRadius, 0, 1, 0, innerMiddlePoint.x, innerMiddlePoint.y]);
      circlePathCommands.push(['A', innerRadius, innerRadius, 0, 1, 0, innerEnd.x, innerEnd.y]);
    }
    circlePathCommands.push(['M', start.x, start.y]);
    circlePathCommands.push(['Z']);
    return circlePathCommands;
  }
  var arcSweep = endAngleInRadian - startAngleInRadian <= Math.PI ? 0 : 1;
  var sectorPathCommands = [
    ['M', start.x, start.y],
    ['A', radius, radius, 0, arcSweep, 1, end.x, end.y],
    ['L', innerEnd.x, innerEnd.y]
  ];
  if (innerRadius) {
    sectorPathCommands.push(['A', innerRadius, innerRadius, 0, arcSweep, 0, innerStart.x, innerStart.y]);
  }
  sectorPathCommands.push(['L', start.x, start.y]);
  sectorPathCommands.push(['Z']);
  return sectorPathCommands;
}
function getArcPath(centerX, centerY, radius, startAngleInRadian, endAngleInRadian) {
  var start = polarToCartesian(centerX, centerY, radius, startAngleInRadian);
  var end = polarToCartesian(centerX, centerY, radius, endAngleInRadian);
  if (isNumberEqual(endAngleInRadian - startAngleInRadian, Math.PI * 2)) {
    var middlePoint = polarToCartesian(centerX, centerY, radius, startAngleInRadian + Math.PI);
    return [
      ['M', start.x, start.y],
      ['A', radius, radius, 0, 1, 1, middlePoint.x, middlePoint.y],
      ['A', radius, radius, 0, 1, 1, start.x, start.y],
      ['A', radius, radius, 0, 1, 0, middlePoint.x, middlePoint.y],
      ['A', radius, radius, 0, 1, 0, start.x, start.y],
      ['Z']
    ];
  }
  var arcSweep = endAngleInRadian - startAngleInRadian <= Math.PI ? 0 : 1;
  return [
    ['M', start.x, start.y],
    ['A', radius, radius, 0, arcSweep, 1, end.x, end.y]
  ];
}
function getAngle(shapeModel, coordinate) {
  var points = shapeModel.points;
  var box = getPointsBox(points);
  var endAngle;
  var startAngle;
  var coordStartAngle = coordinate.startAngle,
    coordEndAngle = coordinate.endAngle;
  var diffAngle = coordEndAngle - coordStartAngle;
  if (coordinate.isTransposed) {
    endAngle = box.maxY * diffAngle;
    startAngle = box.minY * diffAngle;
  } else {
    endAngle = box.maxX * diffAngle;
    startAngle = box.minX * diffAngle;
  }
  endAngle += coordStartAngle;
  startAngle += coordStartAngle;
  return { startAngle, endAngle };
}
function getPolygonCentroid(xs, ys) {
  if (isNumber2(xs) && isNumber2(ys)) {
    return [xs, ys];
  }
  xs = xs;
  ys = ys;
  if (uniqueValues(xs) || uniqueValues(ys)) return [mid(xs), mid(ys)];
  var i = -1;
  var x = 0;
  var y = 0;
  var former;
  var current = xs.length - 1;
  var diff2;
  var k = 0;
  while (++i < xs.length) {
    former = current;
    current = i;
    k += diff2 = xs[former] * ys[current] - xs[current] * ys[former];
    x += (xs[former] + xs[current]) * diff2;
    y += (ys[former] + ys[current]) * diff2;
  }
  k *= 3;
  return [x / k, y / k];
}
function getReplaceAttrs(sourceShape, targetShape) {
  var originAttrs = sourceShape.attr();
  var newAttrs = targetShape.attr();
  each(originAttrs, function(v, k) {
    if (newAttrs[k] === void 0) {
      newAttrs[k] = void 0;
    }
  });
  return newAttrs;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/helper.js
import { __values } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray, isString } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isBetween(value, start, end) {
  var min2 = Math.min(start, end);
  var max3 = Math.max(start, end);
  return value >= min2 && value <= max3;
}
function padEnd(source, targetLength, padValue) {
  if (isString(source)) {
    return source.padEnd(targetLength, padValue);
  } else if (isArray(source)) {
    var sourceLength = source.length;
    if (sourceLength < targetLength) {
      var diff2 = targetLength - sourceLength;
      for (var i = 0; i < diff2; i++) {
        source.push(padValue);
      }
    }
  }
  return source;
}
function omit(obj, keys4) {
  if (typeof obj === 'object') {
    keys4.forEach(function(key) {
      delete obj[key];
    });
  }
  return obj;
}
function uniq(sourceArray, targetArray, map7) {
  var e_1, _a;
  if (targetArray === void 0) {
    targetArray = [];
  }
  if (map7 === void 0) {
    map7 = /* @__PURE__ */ new Map();
  }
  try {
    for (
      var sourceArray_1 = __values(sourceArray), sourceArray_1_1 = sourceArray_1.next();
      !sourceArray_1_1.done;
      sourceArray_1_1 = sourceArray_1.next()
    ) {
      var source = sourceArray_1_1.value;
      if (!map7.has(source)) {
        targetArray.push(source);
        map7.set(source, true);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (sourceArray_1_1 && !sourceArray_1_1.done && (_a = sourceArray_1.return)) _a.call(sourceArray_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return targetArray;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/bbox.js
import { __read } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var BBox = (function() {
  function BBox2(x, y, width, height) {
    if (x === void 0) {
      x = 0;
    }
    if (y === void 0) {
      y = 0;
    }
    if (width === void 0) {
      width = 0;
    }
    if (height === void 0) {
      height = 0;
    }
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
  }
  BBox2.fromRange = function(minX, minY, maxX, maxY) {
    return new BBox2(minX, minY, maxX - minX, maxY - minY);
  };
  BBox2.fromObject = function(bbox) {
    return new BBox2(bbox.minX, bbox.minY, bbox.width, bbox.height);
  };
  Object.defineProperty(BBox2.prototype, 'minX', {
    get: function() {
      return this.x;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'maxX', {
    get: function() {
      return this.x + this.width;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'minY', {
    get: function() {
      return this.y;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'maxY', {
    get: function() {
      return this.y + this.height;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'tl', {
    get: function() {
      return { x: this.x, y: this.y };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'tr', {
    get: function() {
      return { x: this.maxX, y: this.y };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'bl', {
    get: function() {
      return { x: this.x, y: this.maxY };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'br', {
    get: function() {
      return { x: this.maxX, y: this.maxY };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'top', {
    get: function() {
      return { x: this.x + this.width / 2, y: this.minY };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'right', {
    get: function() {
      return { x: this.maxX, y: this.y + this.height / 2 };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'bottom', {
    get: function() {
      return { x: this.x + this.width / 2, y: this.maxY };
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(BBox2.prototype, 'left', {
    get: function() {
      return { x: this.minX, y: this.y + this.height / 2 };
    },
    enumerable: false,
    configurable: true
  });
  BBox2.prototype.isEqual = function(bbox) {
    return this.x === bbox.x && this.y === bbox.y && this.width === bbox.width && this.height === bbox.height;
  };
  BBox2.prototype.contains = function(child) {
    return child.minX >= this.minX && child.maxX <= this.maxX && child.minY >= this.minY && child.maxY <= this.maxY;
  };
  BBox2.prototype.clone = function() {
    return new BBox2(this.x, this.y, this.width, this.height);
  };
  BBox2.prototype.add = function() {
    var subBBox = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      subBBox[_i] = arguments[_i];
    }
    var bbox = this.clone();
    each2(subBBox, function(b) {
      bbox.x = Math.min(b.x, bbox.x);
      bbox.y = Math.min(b.y, bbox.y);
      bbox.width = Math.max(b.maxX, bbox.maxX) - bbox.x;
      bbox.height = Math.max(b.maxY, bbox.maxY) - bbox.y;
    });
    return bbox;
  };
  BBox2.prototype.merge = function() {
    var subBBox = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      subBBox[_i] = arguments[_i];
    }
    var bbox = this.clone();
    each2(subBBox, function(b) {
      bbox.x = Math.max(b.x, bbox.x);
      bbox.y = Math.max(b.y, bbox.y);
      bbox.width = Math.min(b.maxX, bbox.maxX) - bbox.x;
      bbox.height = Math.min(b.maxY, bbox.maxY) - bbox.y;
    });
    return bbox;
  };
  BBox2.prototype.cut = function(subBBox, direction) {
    var width = subBBox.width;
    var height = subBBox.height;
    switch (direction) {
      case DIRECTION.TOP:
      case DIRECTION.TOP_LEFT:
      case DIRECTION.TOP_RIGHT:
        return BBox2.fromRange(this.minX, this.minY + height, this.maxX, this.maxY);
      case DIRECTION.RIGHT:
      case DIRECTION.RIGHT_TOP:
      case DIRECTION.RIGHT_BOTTOM:
        return BBox2.fromRange(this.minX, this.minY, this.maxX - width, this.maxY);
      case DIRECTION.BOTTOM:
      case DIRECTION.BOTTOM_LEFT:
      case DIRECTION.BOTTOM_RIGHT:
        return BBox2.fromRange(this.minX, this.minY, this.maxX, this.maxY - height);
      case DIRECTION.LEFT:
      case DIRECTION.LEFT_TOP:
      case DIRECTION.LEFT_BOTTOM:
        return BBox2.fromRange(this.minX + width, this.minY, this.maxX, this.maxY);
      default:
        return this;
    }
  };
  BBox2.prototype.shrink = function(gap) {
    var _a = __read(gap, 4),
      top = _a[0],
      right = _a[1],
      bottom = _a[2],
      left = _a[3];
    return new BBox2(this.x + left, this.y + top, this.width - left - right, this.height - top - bottom);
  };
  BBox2.prototype.expand = function(gap) {
    var _a = __read(gap, 4),
      top = _a[0],
      right = _a[1],
      bottom = _a[2],
      left = _a[3];
    return new BBox2(this.x - left, this.y - top, this.width + left + right, this.height + top + bottom);
  };
  BBox2.prototype.exceed = function(bbox) {
    return [
      Math.max(-this.minY + bbox.minY, 0),
      Math.max(this.maxX - bbox.maxX, 0),
      Math.max(this.maxY - bbox.maxY, 0),
      Math.max(-this.minX + bbox.minX, 0)
    ];
  };
  BBox2.prototype.collide = function(bbox) {
    return this.minX < bbox.maxX && this.maxX > bbox.minX && this.minY < bbox.maxY && this.maxY > bbox.minY;
  };
  BBox2.prototype.size = function() {
    return this.width * this.height;
  };
  BBox2.prototype.isPointIn = function(p) {
    return p.x >= this.minX && p.x <= this.maxX && p.y >= this.minY && p.y <= this.maxY;
  };
  return BBox2;
})();
function toPoints(bbox) {
  return [
    [bbox.minX, bbox.minY],
    [bbox.maxX, bbox.minY],
    [bbox.maxX, bbox.maxY],
    [bbox.minX, bbox.maxY]
  ];
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/coordinate.js
function getXDimensionLength(coordinate) {
  if (coordinate.isPolar && !coordinate.isTransposed) {
    return (coordinate.endAngle - coordinate.startAngle) * coordinate.getRadius();
  }
  var start = coordinate.convert({ x: 0, y: 0 });
  var end = coordinate.convert({ x: 1, y: 0 });
  return Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
}
function isFullCircle(coordinate) {
  if (coordinate.isPolar) {
    var startAngle = coordinate.startAngle,
      endAngle = coordinate.endAngle;
    return endAngle - startAngle === Math.PI * 2;
  }
  return false;
}
function getDistanceToCenter(coordinate, point) {
  var center = coordinate.getCenter();
  return Math.sqrt(Math.pow(point.x - center.x, 2) + Math.pow(point.y - center.y, 2));
}
function isPointInCoordinate(coordinate, point) {
  var result = false;
  if (coordinate) {
    if (coordinate.type === 'theta') {
      var start = coordinate.start,
        end = coordinate.end;
      result = isBetween(point.x, start.x, end.x) && isBetween(point.y, start.y, end.y);
    } else {
      var invertPoint = coordinate.invert(point);
      result = isBetween(invertPoint.x, 0, 1) && isBetween(invertPoint.y, 0, 1);
    }
  }
  return result;
}
function getAngleByPoint(coordinate, point) {
  var center = coordinate.getCenter();
  return Math.atan2(point.y - center.y, point.x - center.x);
}
function getCoordinateClipCfg(coordinate, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var start = coordinate.start,
    end = coordinate.end;
  var width = coordinate.getWidth();
  var height = coordinate.getHeight();
  if (coordinate.isPolar) {
    var startAngle_1 = coordinate.startAngle,
      endAngle_1 = coordinate.endAngle;
    var center_1 = coordinate.getCenter();
    var radius_1 = coordinate.getRadius();
    return {
      type: 'path',
      startState: { path: getSectorPath(center_1.x, center_1.y, radius_1 + margin, startAngle_1, startAngle_1) },
      endState: function(ratio) {
        var diff2 = (endAngle_1 - startAngle_1) * ratio + startAngle_1;
        var path = getSectorPath(center_1.x, center_1.y, radius_1 + margin, startAngle_1, diff2);
        return { path };
      },
      attrs: { path: getSectorPath(center_1.x, center_1.y, radius_1 + margin, startAngle_1, endAngle_1) }
    };
  }
  var endState;
  if (coordinate.isTransposed) {
    endState = { height: height + margin * 2 };
  } else {
    endState = { width: width + margin * 2 };
  }
  return {
    type: 'rect',
    startState: {
      x: start.x - margin,
      y: end.y - margin,
      width: coordinate.isTransposed ? width + margin * 2 : 0,
      height: coordinate.isTransposed ? 0 : height + margin * 2
    },
    endState,
    attrs: { x: start.x - margin, y: end.y - margin, width: width + margin * 2, height: height + margin * 2 }
  };
}
function getCoordinateBBox(coordinate, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var start = coordinate.start,
    end = coordinate.end;
  var width = coordinate.getWidth();
  var height = coordinate.getHeight();
  var minX = Math.min(start.x, end.x);
  var minY = Math.min(start.y, end.y);
  return BBox.fromRange(minX - margin, minY - margin, minX + width + margin, minY + height + margin);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/scale.js
var dateRegex = /^(?:(?!0000)[0-9]{4}([-/.]+)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-/.]+)0?2\2(?:29))(\s+([01]|([01][0-9]|2[0-3])):([0-9]|[0-5][0-9]):([0-9]|[0-5][0-9]))?$/;
function getDefaultType(value) {
  var type = 'linear';
  if (dateRegex.test(value)) {
    type = 'timeCat';
  } else if (isString2(value)) {
    type = 'cat';
  }
  return type;
}
function inferScaleType(scale, scaleDef, attrType, geometryType) {
  if (scaleDef === void 0) {
    scaleDef = {};
  }
  if (scaleDef.type) return scaleDef.type;
  if (scale.type !== 'identity' && GROUP_ATTRS.includes(attrType) && ['interval'].includes(geometryType)) {
    return 'cat';
  }
  return scale.isCategory ? 'cat' : scale.type;
}
function createScaleByField(field, data, scaleDef) {
  var validData = data || [];
  if (isNumber3(field) || (isNil(firstValue(validData, field)) && isEmpty2(scaleDef))) {
    var Identity = getScale('identity');
    return new Identity({ field: field.toString(), values: [field] });
  }
  var values3 = valuesOfKey(validData, field);
  var type = get(scaleDef, 'type', getDefaultType(values3[0]));
  var ScaleCtor = getScale(type);
  return new ScaleCtor(__assign({ field, values: values3 }, scaleDef));
}
function syncScale(scale, newScale) {
  if (scale.type !== 'identity' && newScale.type !== 'identity') {
    var obj = {};
    for (var k in newScale) {
      if (Object.prototype.hasOwnProperty.call(newScale, k)) {
        obj[k] = newScale[k];
      }
    }
    scale.change(obj);
  }
}
function getName(scale) {
  return scale.alias || scale.field;
}
function getDefaultCategoryScaleRange(scale, coordinate, theme) {
  var values3 = scale.values;
  var count = values3.length;
  var range;
  if (count === 1) {
    range = [0.5, 1];
  } else {
    var widthRatio = 1;
    var offset = 0;
    if (isFullCircle(coordinate)) {
      if (!coordinate.isTransposed) {
        range = [0, 1 - 1 / count];
      } else {
        widthRatio = get(theme, 'widthRatio.multiplePie', 1 / 1.3);
        offset = (1 / count) * widthRatio;
        range = [offset / 2, 1 - offset / 2];
      }
    } else {
      offset = 1 / count / 2;
      range = [offset, 1 - offset];
    }
  }
  return range;
}
function getMaxScale(scale) {
  var values3 = scale.values.filter(function(item) {
    return !isNil(item) && !isNaN(item);
  });
  return Math.max.apply(
    Math,
    __spreadArray(__spreadArray([], __read2(values3), false), [isNil(scale.max) ? -Infinity : scale.max], false)
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/axis.js
import { vec2 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
function getLineAxisRelativeRegion(direction) {
  var start;
  var end;
  switch (direction) {
    case DIRECTION.TOP:
      start = { x: 0, y: 1 };
      end = { x: 1, y: 1 };
      break;
    case DIRECTION.RIGHT:
      start = { x: 1, y: 0 };
      end = { x: 1, y: 1 };
      break;
    case DIRECTION.BOTTOM:
      start = { x: 0, y: 0 };
      end = { x: 1, y: 0 };
      break;
    case DIRECTION.LEFT:
      start = { x: 0, y: 0 };
      end = { x: 0, y: 1 };
      break;
    default:
      start = end = { x: 0, y: 0 };
  }
  return { start, end };
}
function getCircleAxisRelativeRegion(coordinate) {
  var start;
  var end;
  if (coordinate.isTransposed) {
    start = { x: 0, y: 0 };
    end = { x: 1, y: 0 };
  } else {
    start = { x: 0, y: 0 };
    end = { x: 0, y: 1 };
  }
  return { start, end };
}
function getAxisRegion(coordinate, direction) {
  var region = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
  if (coordinate.isRect) {
    region = getLineAxisRelativeRegion(direction);
  } else if (coordinate.isPolar) {
    region = getCircleAxisRelativeRegion(coordinate);
  }
  var start = region.start,
    end = region.end;
  return { start: coordinate.convert(start), end: coordinate.convert(end) };
}
function isVertical(region) {
  var start = region.start,
    end = region.end;
  return start.x === end.x;
}
function getAxisFactorByRegion(region, center) {
  var start = region.start,
    end = region.end;
  var isAxisVertical = isVertical(region);
  if (isAxisVertical) {
    if ((start.y - end.y) * (center.x - start.x) > 0) {
      return 1;
    } else {
      return -1;
    }
  } else {
    if ((end.x - start.x) * (start.y - center.y) > 0) {
      return -1;
    } else {
      return 1;
    }
  }
}
function getAxisThemeCfg(theme, direction) {
  var axisTheme = get2(theme, ['components', 'axis'], {});
  return deepMix({}, get2(axisTheme, ['common'], {}), deepMix({}, get2(axisTheme, [direction], {})));
}
function getAxisTitleOptions(theme, direction, axisOptions) {
  var axisTheme = get2(theme, ['components', 'axis'], {});
  return deepMix(
    {},
    get2(axisTheme, ['common', 'title'], {}),
    deepMix({}, get2(axisTheme, [direction, 'title'], {})),
    axisOptions
  );
}
function getCircleAxisCenterRadius(coordinate) {
  var x = coordinate.x,
    y = coordinate.y,
    center = coordinate.circleCenter;
  var isReflectY = y.start > y.end;
  var start = coordinate.isTransposed
    ? coordinate.convert({ x: isReflectY ? 0 : 1, y: 0 })
    : coordinate.convert({ x: 0, y: isReflectY ? 0 : 1 });
  var startVector = [start.x - center.x, start.y - center.y];
  var normalVector = [1, 0];
  var startAngle =
    start.y > center.y ? vec2.angle(startVector, normalVector) : vec2.angle(startVector, normalVector) * -1;
  var endAngle = startAngle + (x.end - x.start);
  var radius = Math.sqrt(Math.pow(start.x - center.x, 2) + Math.pow(start.y - center.y, 2));
  return { center, radius, startAngle, endAngle };
}
function getAxisOption(axes, field) {
  if (isBoolean(axes)) {
    return axes === false ? false : {};
  }
  return get2(axes, [field]);
}
function getAxisDirection(axisOption, def) {
  return get2(axisOption, 'position', def);
}
function getAxisTitleText(scale, axisOption) {
  return get2(axisOption, ['title', 'text'], getName(scale));
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/facet.js
var Facet = (function() {
  function Facet2(view, cfg) {
    this.destroyed = false;
    this.facets = [];
    this.view = view;
    this.cfg = deepMix2({}, this.getDefaultCfg(), cfg);
  }
  Facet2.prototype.init = function() {
    if (!this.container) {
      this.container = this.createContainer();
    }
    var data = this.view.getData();
    this.facets = this.generateFacets(data);
  };
  Facet2.prototype.render = function() {
    this.renderViews();
  };
  Facet2.prototype.update = function() {};
  Facet2.prototype.clear = function() {
    this.clearFacetViews();
  };
  Facet2.prototype.destroy = function() {
    this.clear();
    if (this.container) {
      this.container.remove(true);
      this.container = void 0;
    }
    this.destroyed = true;
    this.view = void 0;
    this.facets = [];
  };
  Facet2.prototype.facetToView = function(facet) {
    var region = facet.region,
      data = facet.data,
      _a = facet.padding,
      padding = _a === void 0 ? this.cfg.padding : _a;
    var view = this.view.createView({ region, padding });
    view.data(data || []);
    facet.view = view;
    this.beforeEachView(view, facet);
    var eachView = this.cfg.eachView;
    if (eachView) {
      eachView(view, facet);
    }
    this.afterEachView(view, facet);
    return view;
  };
  Facet2.prototype.createContainer = function() {
    var foregroundGroup = this.view.getLayer(LAYER.FORE);
    return foregroundGroup.addGroup();
  };
  Facet2.prototype.renderViews = function() {
    this.createFacetViews();
  };
  Facet2.prototype.createFacetViews = function() {
    var _this = this;
    return this.facets.map(function(facet) {
      return _this.facetToView(facet);
    });
  };
  Facet2.prototype.clearFacetViews = function() {
    var _this = this;
    each3(this.facets, function(facet) {
      if (facet.view) {
        _this.view.removeView(facet.view);
        facet.view = void 0;
      }
    });
  };
  Facet2.prototype.parseSpacing = function() {
    var _a = this.view.viewBBox,
      width = _a.width,
      height = _a.height;
    var spacing = this.cfg.spacing;
    return spacing.map(function(s, idx) {
      if (isNumber4(s)) return s / (idx === 0 ? width : height);
      else return parseFloat(s) / 100;
    });
  };
  Facet2.prototype.getFieldValues = function(data, field) {
    var rst = [];
    var cache2 = {};
    each3(data, function(d) {
      var value = d[field];
      if (!isNil2(value) && !cache2[value]) {
        rst.push(value);
        cache2[value] = true;
      }
    });
    return rst;
  };
  Facet2.prototype.getRegion = function(rows, cols, xIndex, yIndex) {
    var _a = __read3(this.parseSpacing(), 2),
      xSpacing = _a[0],
      ySpacing = _a[1];
    var xRatio = (1 + xSpacing) / (cols === 0 ? 1 : cols) - xSpacing;
    var yRatio = (1 + ySpacing) / (rows === 0 ? 1 : rows) - ySpacing;
    var start = { x: (xRatio + xSpacing) * xIndex, y: (yRatio + ySpacing) * yIndex };
    var end = { x: start.x + xRatio, y: start.y + yRatio };
    return { start, end };
  };
  Facet2.prototype.getDefaultCfg = function() {
    return { eachView: void 0, showTitle: true, spacing: [0, 0], padding: 10, fields: [] };
  };
  Facet2.prototype.getDefaultTitleCfg = function() {
    var fontFamily = this.view.getTheme().fontFamily;
    return { style: { fontSize: 14, fill: '#666', fontFamily } };
  };
  Facet2.prototype.processAxis = function(view, facet) {
    var options = view.getOptions();
    var coordinateOption = options.coordinate;
    var geometries = view.geometries;
    var coordinateType = get3(coordinateOption, 'type', 'rect');
    if (coordinateType === 'rect' && geometries.length) {
      if (isNil2(options.axes)) {
        options.axes = {};
      }
      var axes = options.axes;
      var _a = __read3(geometries[0].getXYFields(), 2),
        x = _a[0],
        y = _a[1];
      var xOption = getAxisOption(axes, x);
      var yOption = getAxisOption(axes, y);
      if (xOption !== false) {
        options.axes[x] = this.getXAxisOption(x, axes, xOption, facet);
      }
      if (yOption !== false) {
        options.axes[y] = this.getYAxisOption(y, axes, yOption, facet);
      }
    }
  };
  Facet2.prototype.getFacetDataFilter = function(conditions) {
    return function(datum) {
      return every(conditions, function(condition) {
        var field = condition.field,
          value = condition.value;
        if (!isNil2(value) && field) {
          return datum[field] === value;
        }
        return true;
      });
    };
  };
  return Facet2;
})(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/index.js
var Facets = {};
var getFacet = function(type) {
  return Facets[lowerCase(type)];
};
var registerFacet = function(type, ctor) {
  Facets[lowerCase(type)] = ctor;
}; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/index.js
import {
  clone,
  isPlainObject,
  lowerCase as lowerCase2,
  mix
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/grammar-interaction.js
import { __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each7,
  isArray as isArray3,
  isFunction,
  isString as isString3,
  debounce,
  throttle
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/callback.js
import { __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/base.js
import { assign } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Action = (function() {
  function Action2(context, cfg) {
    this.context = context;
    this.cfg = cfg;
    context.addAction(this);
  }
  Action2.prototype.applyCfg = function(cfg) {
    assign(this, cfg);
  };
  Action2.prototype.init = function() {
    this.applyCfg(this.cfg);
  };
  Action2.prototype.destroy = function() {
    this.context.removeAction(this);
    this.context = null;
  };
  return Action2;
})();
var base_default2 = Action; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/callback.js
var CallbackAction = (function(_super) {
  __extends2(CallbackAction2, _super);
  function CallbackAction2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CallbackAction2.prototype.execute = function() {
    if (this.callback) {
      this.callback(this.context);
    }
  };
  CallbackAction2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.callback = null;
  };
  return CallbackAction2;
})(base_default2);
var callback_default = CallbackAction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/register.js
import { get as get4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ActionCache = {};
function createAction(actionName, context) {
  var actionOption = ActionCache[actionName];
  var action = null;
  if (actionOption) {
    var ActionClass = actionOption.ActionClass,
      cfg = actionOption.cfg;
    action = new ActionClass(context, cfg);
    action.name = actionName;
    action.init();
  }
  return action;
}
function getActionClass(actionName) {
  var actionOption = ActionCache[actionName];
  return get4(actionOption, 'ActionClass');
}
function registerAction(actionName, ActionClass, cfg) {
  ActionCache[actionName] = { ActionClass, cfg };
}
function createCallbackAction(callback, context) {
  var action = new callback_default(context);
  action.callback = callback;
  action.name = 'callback';
  return action;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/context.js
import { each as each6, get as get5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/util.js
import { each as each5, isArray as isArray2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/util/path.js
import { __read as __read4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { vec2 as vec22 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { each as each4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function _points2path(points, isInCircle) {
  var path = [];
  if (points.length) {
    path.push(['M', points[0].x, points[0].y]);
    for (var i = 1, length_1 = points.length; i < length_1; i += 1) {
      var item = points[i];
      path.push(['L', item.x, item.y]);
    }
    if (isInCircle) {
      path.push(['Z']);
    }
  }
  return path;
}
function _convertArr(arr, coord) {
  var tmp = [arr[0]];
  for (var i = 1, len = arr.length; i < len; i = i + 2) {
    var point = coord.convert({ x: arr[i], y: arr[i + 1] });
    tmp.push(point.x, point.y);
  }
  return tmp;
}
function _convertArcPath(path, coord) {
  var isTransposed = coord.isTransposed;
  var r = path[1];
  var x = path[6];
  var y = path[7];
  var point = coord.convert({ x, y });
  var direction = isTransposed ? 0 : 1;
  return ['A', r, r, 0, 0, direction, point.x, point.y];
}
function _convertPolarPath(pre, cur, coord) {
  var isTransposed = coord.isTransposed,
    startAngle = coord.startAngle,
    endAngle = coord.endAngle;
  var prePoint = pre[0].toLowerCase() === 'a' ? { x: pre[6], y: pre[7] } : { x: pre[1], y: pre[2] };
  var curPoint = { x: cur[1], y: cur[2] };
  var rst = [];
  var xDim = isTransposed ? 'y' : 'x';
  var angleRange = Math.abs(curPoint[xDim] - prePoint[xDim]) * (endAngle - startAngle);
  var direction = curPoint[xDim] >= prePoint[xDim] ? 1 : 0;
  var flag = angleRange > Math.PI ? 1 : 0;
  var convertPoint = coord.convert(curPoint);
  var r = getDistanceToCenter(coord, convertPoint);
  if (r >= 0.5) {
    if (angleRange === Math.PI * 2) {
      var middlePoint = { x: (curPoint.x + prePoint.x) / 2, y: (curPoint.y + prePoint.y) / 2 };
      var middleConvertPoint = coord.convert(middlePoint);
      rst.push(['A', r, r, 0, flag, direction, middleConvertPoint.x, middleConvertPoint.y]);
      rst.push(['A', r, r, 0, flag, direction, convertPoint.x, convertPoint.y]);
    } else {
      rst.push(['A', r, r, 0, flag, direction, convertPoint.x, convertPoint.y]);
    }
  }
  return rst;
}
function _filterFullCirleLine(path) {
  each4(path, function(subPath, index) {
    var cur = subPath;
    if (cur[0].toLowerCase() === 'a') {
      var pre = path[index - 1];
      var next = path[index + 1];
      if (next && next[0].toLowerCase() === 'a') {
        if (pre && pre[0].toLowerCase() === 'l') {
          pre[0] = 'M';
        }
      } else if (pre && pre[0].toLowerCase() === 'a') {
        if (next && next[0].toLowerCase() === 'l') {
          next[0] = 'M';
        }
      }
    }
  });
}
var smoothBezier = function(points, smooth, isLoop, constraint) {
  var _a;
  var cps = [];
  var hasConstraint = !!constraint;
  var prevPoint;
  var nextPoint;
  var min2;
  var max3;
  var nextCp0;
  var cp1;
  var cp0;
  if (hasConstraint) {
    (_a = __read4(constraint, 2)), (min2 = _a[0]), (max3 = _a[1]);
    for (var i = 0, l = points.length; i < l; i++) {
      var point = points[i];
      min2 = vec22.min([0, 0], min2, point);
      max3 = vec22.max([0, 0], max3, point);
    }
  }
  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    if (i === 0 && !isLoop) {
      cp0 = point;
    } else if (i === len - 1 && !isLoop) {
      cp1 = point;
      cps.push(cp0);
      cps.push(cp1);
    } else {
      prevPoint = points[isLoop ? (i ? i - 1 : len - 1) : i - 1];
      nextPoint = points[isLoop ? (i + 1) % len : i + 1];
      var v = [0, 0];
      v = vec22.sub(v, nextPoint, prevPoint);
      v = vec22.scale(v, v, smooth);
      var d0 = vec22.distance(point, prevPoint);
      var d1 = vec22.distance(point, nextPoint);
      var sum = d0 + d1;
      if (sum !== 0) {
        d0 /= sum;
        d1 /= sum;
      }
      var v1 = vec22.scale([0, 0], v, -d0);
      var v2 = vec22.scale([0, 0], v, d1);
      cp1 = vec22.add([0, 0], point, v1);
      nextCp0 = vec22.add([0, 0], point, v2);
      nextCp0 = vec22.min([0, 0], nextCp0, vec22.max([0, 0], nextPoint, point));
      nextCp0 = vec22.max([0, 0], nextCp0, vec22.min([0, 0], nextPoint, point));
      v1 = vec22.sub([0, 0], nextCp0, point);
      v1 = vec22.scale([0, 0], v1, -d0 / d1);
      cp1 = vec22.add([0, 0], point, v1);
      cp1 = vec22.min([0, 0], cp1, vec22.max([0, 0], prevPoint, point));
      cp1 = vec22.max([0, 0], cp1, vec22.min([0, 0], prevPoint, point));
      v2 = vec22.sub([0, 0], point, cp1);
      v2 = vec22.scale([0, 0], v2, d1 / d0);
      nextCp0 = vec22.add([0, 0], point, v2);
      if (hasConstraint) {
        cp1 = vec22.max([0, 0], cp1, min2);
        cp1 = vec22.min([0, 0], cp1, max3);
        nextCp0 = vec22.max([0, 0], nextCp0, min2);
        nextCp0 = vec22.min([0, 0], nextCp0, max3);
      }
      cps.push(cp0);
      cps.push(cp1);
      cp0 = nextCp0;
    }
  }
  if (isLoop) {
    cps.push(cps.shift());
  }
  return cps;
};
function catmullRom2bezier(crp, z, constraint) {
  var isLoop = !!z;
  var pointList = [];
  for (var i = 0, l = crp.length; i < l; i += 2) {
    pointList.push([crp[i], crp[i + 1]]);
  }
  var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
  var len = pointList.length;
  var d1 = [];
  var cp1;
  var cp2;
  var p;
  for (var i = 0; i < len - 1; i++) {
    cp1 = controlPointList[i * 2];
    cp2 = controlPointList[i * 2 + 1];
    p = pointList[i + 1];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
  }
  if (isLoop) {
    cp1 = controlPointList[len];
    cp2 = controlPointList[len + 1];
    p = pointList[0];
    d1.push(['C', cp1[0], cp1[1], cp2[0], cp2[1], p[0], p[1]]);
  }
  return d1;
}
function getLinePath(points, isInCircle) {
  return _points2path(points, isInCircle);
}
function getSplinePath(points, isInCircle, constaint) {
  var data = [];
  var first = points[0];
  var prePoint = null;
  if (points.length <= 2) {
    return getLinePath(points, isInCircle);
  }
  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    if (!prePoint || !(prePoint.x === point.x && prePoint.y === point.y)) {
      data.push(point.x);
      data.push(point.y);
      prePoint = point;
    }
  }
  var constraint = constaint || [
    [0, 0],
    [1, 1]
  ];
  var splinePath = catmullRom2bezier(data, isInCircle, constraint);
  splinePath.unshift(['M', first.x, first.y]);
  return splinePath;
}
function convertNormalPath(coord, path) {
  var tmp = [];
  each4(path, function(subPath) {
    var action = subPath[0];
    switch (action.toLowerCase()) {
      case 'm':
      case 'l':
      case 'c':
        tmp.push(_convertArr(subPath, coord));
        break;
      case 'a':
        tmp.push(_convertArcPath(subPath, coord));
        break;
      case 'z':
      default:
        tmp.push(subPath);
        break;
    }
  });
  return tmp;
}
function convertPolarPath(coord, path) {
  var tmp = [];
  var pre;
  var cur;
  var transposed;
  var equals;
  each4(path, function(subPath, index) {
    var action = subPath[0];
    switch (action.toLowerCase()) {
      case 'm':
      case 'c':
      case 'q':
        tmp.push(_convertArr(subPath, coord));
        break;
      case 'l':
        pre = path[index - 1];
        cur = subPath;
        transposed = coord.isTransposed;
        equals = transposed ? pre[pre.length - 2] === cur[1] : pre[pre.length - 1] === cur[2];
        if (equals) {
          tmp = tmp.concat(_convertPolarPath(pre, cur, coord));
        } else {
          tmp.push(_convertArr(subPath, coord));
        }
        break;
      case 'a':
        tmp.push(_convertArcPath(subPath, coord));
        break;
      case 'z':
      default:
        tmp.push(subPath);
        break;
    }
  });
  _filterFullCirleLine(tmp);
  return tmp;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/util.js
import { isPolygonsIntersect } from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';
function getMaskBBox(context, tolerance) {
  var event = context.event;
  var maskShape = event.target;
  var maskBBox = maskShape.getCanvasBBox();
  if (!(maskBBox.width >= tolerance || maskBBox.height >= tolerance)) {
    return null;
  }
  return maskBBox;
}
function getMaskPath(context, tolerance) {
  var event = context.event;
  var maskShape = event.target;
  var maskBBox = maskShape.getCanvasBBox();
  if (!(maskBBox.width >= tolerance || maskBBox.height >= tolerance)) {
    return null;
  }
  return maskShape.attr('path');
}
function getCurrentElement(context) {
  var event = context.event;
  var element;
  var target = event.target;
  if (target) {
    element = target.get('element');
  }
  return element;
}
function getDelegationObject(context) {
  var event = context.event;
  var target = event.target;
  var delegateObject;
  if (target) {
    delegateObject = target.get('delegateObject');
  }
  return delegateObject;
}
function isElementChange(context) {
  var event = context.event.gEvent;
  if (event && event.fromShape && event.toShape && event.fromShape.get('element') === event.toShape.get('element')) {
    return false;
  }
  return true;
}
function isList(delegateObject) {
  return delegateObject && delegateObject.component && delegateObject.component.isList();
}
function isSlider(delegateObject) {
  return delegateObject && delegateObject.component && delegateObject.component.isSlider();
}
function isMask(context) {
  var event = context.event;
  var target = event.target;
  return target && target.get('name') === 'mask';
}
function getMaskedElements(context, tolerance) {
  var target = context.event.target;
  if (target.get('type') === 'path') {
    var maskPath = getMaskPath(context, tolerance);
    if (!maskPath) {
      return;
    }
    return getElementsByPath(context.view, maskPath);
  }
  var maskBBox = getMaskBBox(context, tolerance);
  if (!maskBBox) {
    return null;
  }
  return getIntersectElements(context.view, maskBBox);
}
function getSiblingMaskElements(context, sibling, tolerance) {
  var maskBBox = getMaskBBox(context, tolerance);
  if (!maskBBox) {
    return null;
  }
  var view = context.view;
  var start = getSiblingPoint(view, sibling, { x: maskBBox.x, y: maskBBox.y });
  var end = getSiblingPoint(view, sibling, { x: maskBBox.maxX, y: maskBBox.maxY });
  var box = { minX: start.x, minY: start.y, maxX: end.x, maxY: end.y };
  return getIntersectElements(sibling, box);
}
function getElements(view) {
  var geometries = view.geometries;
  var rst = [];
  each5(geometries, function(geom) {
    var elements = geom.elements;
    rst = rst.concat(elements);
  });
  if (view.views && view.views.length) {
    each5(view.views, function(subView) {
      rst = rst.concat(getElements(subView));
    });
  }
  return rst;
}
function getElementsByField(view, field, value) {
  var elements = getElements(view);
  return elements.filter(function(el) {
    return getElementValue(el, field) === value;
  });
}
function getElementsByState(view, stateName) {
  var geometries = view.geometries;
  var rst = [];
  each5(geometries, function(geom) {
    var elements = geom.getElementsBy(function(el) {
      return el.hasState(stateName);
    });
    rst = rst.concat(elements);
  });
  return rst;
}
function getElementValue(element, field) {
  var model = element.getModel();
  var record = model.data;
  var value;
  if (isArray2(record)) {
    value = record[0][field];
  } else {
    value = record[field];
  }
  return value;
}
function intersectRect(box1, box2) {
  return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
function getIntersectElements(view, box) {
  var elements = getElements(view);
  var rst = [];
  each5(elements, function(el) {
    var shape = el.shape;
    var shapeBBox = shape.getCanvasBBox();
    if (intersectRect(box, shapeBBox)) {
      rst.push(el);
    }
  });
  return rst;
}
function pathToPoints(path) {
  var points = [];
  each5(path, function(seg) {
    var command = seg[0];
    if (command !== 'A') {
      for (var i = 1; i < seg.length; i = i + 2) {
        points.push([seg[i], seg[i + 1]]);
      }
    } else {
      var length_1 = seg.length;
      points.push([seg[length_1 - 2], seg[length_1 - 1]]);
    }
  });
  return points;
}
function getElementsByPath(view, path) {
  var elements = getElements(view);
  var points = pathToPoints(path);
  var rst = elements.filter(function(el) {
    var shape = el.shape;
    var shapePoints;
    if (shape.get('type') === 'path') {
      shapePoints = pathToPoints(shape.attr('path'));
    } else {
      var shapeBBox = shape.getCanvasBBox();
      shapePoints = toPoints(shapeBBox);
    }
    return isPolygonsIntersect(points, shapePoints);
  });
  return rst;
}
function getComponents(view) {
  return view.getComponents().map(function(co) {
    return co.component;
  });
}
function distance(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
function getSpline(points, z) {
  if (points.length <= 2) {
    return getLinePath(points, false);
  }
  var first = points[0];
  var arr = [];
  each5(points, function(point) {
    arr.push(point.x);
    arr.push(point.y);
  });
  var path = catmullRom2bezier(arr, z, null);
  path.unshift(['M', first.x, first.y]);
  return path;
}
function isInBox(box, point) {
  return box.x <= point.x && box.maxX >= point.x && box.y <= point.y && box.maxY > point.y;
}
function getSilbings(view) {
  var parent = view.parent;
  var siblings = null;
  if (parent) {
    siblings = parent.views.filter(function(sub) {
      return sub !== view;
    });
  }
  return siblings;
}
function point2Normalize(view, point) {
  var coord = view.getCoordinate();
  return coord.invert(point);
}
function getSiblingPoint(view, sibling, point) {
  var normalPoint = point2Normalize(view, point);
  return sibling.getCoordinate().convert(normalPoint);
}
function isInRecords(records, record, xFiled, yField) {
  var isIn = false;
  each5(records, function(r) {
    if (r[xFiled] === record[xFiled] && r[yField] === record[yField]) {
      isIn = true;
      return false;
    }
  });
  return isIn;
}
function getScaleByField(view, field) {
  var scale = view.getScaleByField(field);
  if (!scale && view.views) {
    each5(view.views, function(subView) {
      scale = getScaleByField(subView, field);
      if (scale) {
        return false;
      }
    });
  }
  return scale;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/context.js
var Context = (function() {
  function Context2(view) {
    this.actions = [];
    this.event = null;
    this.cacheMap = {};
    this.view = view;
  }
  Context2.prototype.cache = function() {
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    if (params.length === 1) {
      return this.cacheMap[params[0]];
    } else if (params.length === 2) {
      this.cacheMap[params[0]] = params[1];
    }
  };
  Context2.prototype.getAction = function(name) {
    return this.actions.find(function(action) {
      return action.name === name;
    });
  };
  Context2.prototype.addAction = function(action) {
    this.actions.push(action);
  };
  Context2.prototype.removeAction = function(action) {
    var actions = this.actions;
    var index = this.actions.indexOf(action);
    if (index >= 0) {
      actions.splice(index, 1);
    }
  };
  Context2.prototype.getCurrentPoint = function() {
    var event = this.event;
    if (event) {
      if (event.target instanceof HTMLElement) {
        var canvas = this.view.getCanvas();
        var point = canvas.getPointByClient(event.clientX, event.clientY);
        return point;
      } else {
        return { x: event.x, y: event.y };
      }
    }
    return null;
  };
  Context2.prototype.getCurrentShape = function() {
    return get5(this.event, ['gEvent', 'shape']);
  };
  Context2.prototype.isInPlot = function() {
    var point = this.getCurrentPoint();
    if (point) {
      return this.view.isPointInPlot(point);
    }
    return false;
  };
  Context2.prototype.isInShape = function(name) {
    var shape = this.getCurrentShape();
    if (shape) {
      return shape.get('name') === name;
    }
    return false;
  };
  Context2.prototype.isInComponent = function(name) {
    var components = getComponents(this.view);
    var point = this.getCurrentPoint();
    if (point) {
      return !!components.find(function(component) {
        var bbox = component.getBBox();
        if (name) {
          return component.get('name') === name && isInBox(bbox, point);
        } else {
          return isInBox(bbox, point);
        }
      });
    }
    return false;
  };
  Context2.prototype.destroy = function() {
    each6(this.actions.slice(), function(action) {
      action.destroy();
    });
    this.view = null;
    this.event = null;
    this.actions = null;
    this.cacheMap = null;
  };
  return Context2;
})();
var context_default = Context; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/interaction.js
var Interaction = (function() {
  function Interaction2(view, cfg) {
    this.view = view;
    this.cfg = cfg;
  }
  Interaction2.prototype.init = function() {
    this.initEvents();
  };
  Interaction2.prototype.initEvents = function() {};
  Interaction2.prototype.clearEvents = function() {};
  Interaction2.prototype.destroy = function() {
    this.clearEvents();
  };
  return Interaction2;
})();
var interaction_default = Interaction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/grammar-interaction.js
function parseAction(actionStr, context, arg) {
  var arr = actionStr.split(':');
  var actionName = arr[0];
  var action = context.getAction(actionName) || createAction(actionName, context);
  if (!action) {
    throw new Error('There is no action named '.concat(actionName));
  }
  var methodName = arr[1];
  return { action, methodName, arg };
}
function executeAction(actionObject) {
  var action = actionObject.action,
    methodName = actionObject.methodName,
    arg = actionObject.arg;
  if (action[methodName]) {
    action[methodName](arg);
  } else {
    throw new Error('Action('.concat(action.name, ") doesn't have a method called ").concat(methodName));
  }
}
var STEP_NAMES = {
  START: 'start',
  SHOW_ENABLE: 'showEnable',
  END: 'end',
  ROLLBACK: 'rollback',
  PROCESSING: 'processing'
};
var GrammarInteraction = (function(_super) {
  __extends3(GrammarInteraction2, _super);
  function GrammarInteraction2(view, steps) {
    var _this = _super.call(this, view, steps) || this;
    _this.callbackCaches = {};
    _this.emitCaches = {};
    _this.steps = steps;
    return _this;
  }
  GrammarInteraction2.prototype.init = function() {
    this.initContext();
    _super.prototype.init.call(this);
  };
  GrammarInteraction2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.steps = null;
    if (this.context) {
      this.context.destroy();
      this.context = null;
    }
    this.callbackCaches = null;
    this.view = null;
  };
  GrammarInteraction2.prototype.initEvents = function() {
    var _this = this;
    each7(this.steps, function(stepArr, stepName) {
      each7(stepArr, function(step) {
        var callback = _this.getActionCallback(stepName, step);
        if (callback) {
          _this.bindEvent(step.trigger, callback);
        }
      });
    });
  };
  GrammarInteraction2.prototype.clearEvents = function() {
    var _this = this;
    each7(this.steps, function(stepArr, stepName) {
      each7(stepArr, function(step) {
        var callback = _this.getActionCallback(stepName, step);
        if (callback) {
          _this.offEvent(step.trigger, callback);
        }
      });
    });
  };
  GrammarInteraction2.prototype.initContext = function() {
    var view = this.view;
    var context = new context_default(view);
    this.context = context;
    var steps = this.steps;
    each7(steps, function(subSteps) {
      each7(subSteps, function(step) {
        if (isFunction(step.action)) {
          step.actionObject = { action: createCallbackAction(step.action, context), methodName: 'execute' };
        } else if (isString3(step.action)) {
          step.actionObject = parseAction(step.action, context, step.arg);
        } else if (isArray3(step.action)) {
          var actionArr = step.action;
          var argArr_1 = isArray3(step.arg) ? step.arg : [step.arg];
          step.actionObject = [];
          each7(actionArr, function(actionStr, idx) {
            step.actionObject.push(parseAction(actionStr, context, argArr_1[idx]));
          });
        }
      });
    });
  };
  GrammarInteraction2.prototype.isAllowStep = function(stepName) {
    var currentStepName = this.currentStepName;
    var steps = this.steps;
    if (currentStepName === stepName) {
      return true;
    }
    if (stepName === STEP_NAMES.SHOW_ENABLE) {
      return true;
    }
    if (stepName === STEP_NAMES.PROCESSING) {
      return currentStepName === STEP_NAMES.START;
    }
    if (stepName === STEP_NAMES.START) {
      return currentStepName !== STEP_NAMES.PROCESSING;
    }
    if (stepName === STEP_NAMES.END) {
      return currentStepName === STEP_NAMES.PROCESSING || currentStepName === STEP_NAMES.START;
    }
    if (stepName === STEP_NAMES.ROLLBACK) {
      if (steps[STEP_NAMES.END]) {
        return currentStepName === STEP_NAMES.END;
      } else if (currentStepName === STEP_NAMES.START) {
        return true;
      }
    }
    return false;
  };
  GrammarInteraction2.prototype.isAllowExecute = function(stepName, step) {
    if (this.isAllowStep(stepName)) {
      var key = this.getKey(stepName, step);
      if (step.once && this.emitCaches[key]) {
        return false;
      }
      if (step.isEnable) {
        return step.isEnable(this.context);
      }
      return true;
    }
    return false;
  };
  GrammarInteraction2.prototype.enterStep = function(stepName) {
    this.currentStepName = stepName;
    this.emitCaches = {};
  };
  GrammarInteraction2.prototype.afterExecute = function(stepName, step) {
    if (stepName !== STEP_NAMES.SHOW_ENABLE && this.currentStepName !== stepName) {
      this.enterStep(stepName);
    }
    var key = this.getKey(stepName, step);
    this.emitCaches[key] = true;
  };
  GrammarInteraction2.prototype.getKey = function(stepName, step) {
    return stepName + step.trigger + step.action;
  };
  GrammarInteraction2.prototype.getActionCallback = function(stepName, step) {
    var _this = this;
    var context = this.context;
    var callbackCaches = this.callbackCaches;
    var actionObject = step.actionObject;
    if (step.action && actionObject) {
      var key = this.getKey(stepName, step);
      if (!callbackCaches[key]) {
        var actionCallback = function(event) {
          context.event = event;
          if (_this.isAllowExecute(stepName, step)) {
            if (isArray3(actionObject)) {
              each7(actionObject, function(obj) {
                context.event = event;
                executeAction(obj);
              });
            } else {
              context.event = event;
              executeAction(actionObject);
            }
            _this.afterExecute(stepName, step);
            if (step.callback) {
              context.event = event;
              step.callback(context);
            }
          } else {
            context.event = null;
          }
        };
        if (step.debounce) {
          callbackCaches[key] = debounce(actionCallback, step.debounce.wait, step.debounce.immediate);
        } else if (step.throttle) {
          callbackCaches[key] = throttle(actionCallback, step.throttle.wait, {
            leading: step.throttle.leading,
            trailing: step.throttle.trailing
          });
        } else {
          callbackCaches[key] = actionCallback;
        }
      }
      return callbackCaches[key];
    }
    return null;
  };
  GrammarInteraction2.prototype.bindEvent = function(eventName, callback) {
    var nameArr = eventName.split(':');
    if (nameArr[0] === 'window') {
      window.addEventListener(nameArr[1], callback);
    } else if (nameArr[0] === 'document') {
      document.addEventListener(nameArr[1], callback);
    } else {
      this.view.on(eventName, callback);
    }
  };
  GrammarInteraction2.prototype.offEvent = function(eventName, callback) {
    var nameArr = eventName.split(':');
    if (nameArr[0] === 'window') {
      window.removeEventListener(nameArr[1], callback);
    } else if (nameArr[0] === 'document') {
      document.removeEventListener(nameArr[1], callback);
    } else {
      this.view.off(eventName, callback);
    }
  };
  return GrammarInteraction2;
})(interaction_default);
var grammar_interaction_default = GrammarInteraction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/index.js
var Interactions = {};
function getInteraction(name) {
  return Interactions[lowerCase2(name)];
}
function registerInteraction(name, interaction) {
  Interactions[lowerCase2(name)] = interaction;
}
function createInteraction(name, view, cfg) {
  var interaciton = getInteraction(name);
  if (!interaciton) {
    return null;
  }
  if (isPlainObject(interaciton)) {
    var steps = mix(clone(interaciton), cfg);
    return new grammar_interaction_default(view, steps);
  } else {
    var cls = interaciton;
    return new cls(view, cfg);
  }
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/index.js
import { get as get6, lowerCase as lowerCase3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/util/create-theme.js
import { __rest } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { deepMix as deepMix4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/util/create-by-style-sheet.js
import { __assign as __assign2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { TOOLTIP_CSS_CONST } from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js';
import { ext } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { deepMix as deepMix3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function createAxisStyles(styleSheet) {
  return {
    title: {
      autoRotate: true,
      position: 'center',
      spacing: styleSheet.axisTitleSpacing,
      style: {
        fill: styleSheet.axisTitleTextFillColor,
        fontSize: styleSheet.axisTitleTextFontSize,
        lineHeight: styleSheet.axisTitleTextLineHeight,
        textBaseline: 'middle',
        fontFamily: styleSheet.fontFamily
      },
      iconStyle: { fill: styleSheet.axisDescriptionIconFillColor }
    },
    label: {
      autoRotate: false,
      autoEllipsis: false,
      autoHide: { type: 'equidistance', cfg: { minGap: 6 } },
      offset: styleSheet.axisLabelOffset,
      style: {
        fill: styleSheet.axisLabelFillColor,
        fontSize: styleSheet.axisLabelFontSize,
        lineHeight: styleSheet.axisLabelLineHeight,
        fontFamily: styleSheet.fontFamily
      }
    },
    line: { style: { lineWidth: styleSheet.axisLineBorder, stroke: styleSheet.axisLineBorderColor } },
    grid: {
      line: {
        type: 'line',
        style: {
          stroke: styleSheet.axisGridBorderColor,
          lineWidth: styleSheet.axisGridBorder,
          lineDash: styleSheet.axisGridLineDash
        }
      },
      alignTick: true,
      animate: true
    },
    tickLine: {
      style: { lineWidth: styleSheet.axisTickLineBorder, stroke: styleSheet.axisTickLineBorderColor },
      alignTick: true,
      length: styleSheet.axisTickLineLength
    },
    subTickLine: null,
    animate: true
  };
}
function createLegendStyles(styleSheet) {
  return {
    title: null,
    marker: {
      symbol: 'circle',
      spacing: styleSheet.legendMarkerSpacing,
      style: { r: styleSheet.legendCircleMarkerSize, fill: styleSheet.legendMarkerColor }
    },
    itemName: {
      spacing: 5,
      style: {
        fill: styleSheet.legendItemNameFillColor,
        fontFamily: styleSheet.fontFamily,
        fontSize: styleSheet.legendItemNameFontSize,
        lineHeight: styleSheet.legendItemNameLineHeight,
        fontWeight: styleSheet.legendItemNameFontWeight,
        textAlign: 'start',
        textBaseline: 'middle'
      }
    },
    itemStates: {
      active: { nameStyle: { opacity: 0.8 } },
      unchecked: { nameStyle: { fill: '#D8D8D8' }, markerStyle: { fill: '#D8D8D8', stroke: '#D8D8D8' } },
      inactive: { nameStyle: { fill: '#D8D8D8' }, markerStyle: { opacity: 0.2 } }
    },
    flipPage: true,
    pageNavigator: {
      marker: {
        style: {
          size: styleSheet.legendPageNavigatorMarkerSize,
          inactiveFill: styleSheet.legendPageNavigatorMarkerInactiveFillColor,
          inactiveOpacity: styleSheet.legendPageNavigatorMarkerInactiveFillOpacity,
          fill: styleSheet.legendPageNavigatorMarkerFillColor,
          opacity: styleSheet.legendPageNavigatorMarkerFillOpacity
        }
      },
      text: {
        style: {
          fill: styleSheet.legendPageNavigatorTextFillColor,
          fontSize: styleSheet.legendPageNavigatorTextFontSize
        }
      }
    },
    animate: false,
    maxItemWidth: 200,
    itemSpacing: styleSheet.legendItemSpacing,
    itemMarginBottom: styleSheet.legendItemMarginBottom,
    padding: styleSheet.legendPadding
  };
}
function createThemeByStyleSheet(styleSheet) {
  var _a;
  var shapeStyles = {
    point: {
      default: {
        fill: styleSheet.pointFillColor,
        r: styleSheet.pointSize,
        stroke: styleSheet.pointBorderColor,
        lineWidth: styleSheet.pointBorder,
        fillOpacity: styleSheet.pointFillOpacity
      },
      active: { stroke: styleSheet.pointActiveBorderColor, lineWidth: styleSheet.pointActiveBorder },
      selected: { stroke: styleSheet.pointSelectedBorderColor, lineWidth: styleSheet.pointSelectedBorder },
      inactive: {
        fillOpacity: styleSheet.pointInactiveFillOpacity,
        strokeOpacity: styleSheet.pointInactiveBorderOpacity
      }
    },
    hollowPoint: {
      default: {
        fill: styleSheet.hollowPointFillColor,
        lineWidth: styleSheet.hollowPointBorder,
        stroke: styleSheet.hollowPointBorderColor,
        strokeOpacity: styleSheet.hollowPointBorderOpacity,
        r: styleSheet.hollowPointSize
      },
      active: {
        stroke: styleSheet.hollowPointActiveBorderColor,
        strokeOpacity: styleSheet.hollowPointActiveBorderOpacity
      },
      selected: {
        lineWidth: styleSheet.hollowPointSelectedBorder,
        stroke: styleSheet.hollowPointSelectedBorderColor,
        strokeOpacity: styleSheet.hollowPointSelectedBorderOpacity
      },
      inactive: { strokeOpacity: styleSheet.hollowPointInactiveBorderOpacity }
    },
    area: {
      default: { fill: styleSheet.areaFillColor, fillOpacity: styleSheet.areaFillOpacity, stroke: null },
      active: { fillOpacity: styleSheet.areaActiveFillOpacity },
      selected: { fillOpacity: styleSheet.areaSelectedFillOpacity },
      inactive: { fillOpacity: styleSheet.areaInactiveFillOpacity }
    },
    hollowArea: {
      default: {
        fill: null,
        stroke: styleSheet.hollowAreaBorderColor,
        lineWidth: styleSheet.hollowAreaBorder,
        strokeOpacity: styleSheet.hollowAreaBorderOpacity
      },
      active: { fill: null, lineWidth: styleSheet.hollowAreaActiveBorder },
      selected: { fill: null, lineWidth: styleSheet.hollowAreaSelectedBorder },
      inactive: { strokeOpacity: styleSheet.hollowAreaInactiveBorderOpacity }
    },
    interval: {
      default: { fill: styleSheet.intervalFillColor, fillOpacity: styleSheet.intervalFillOpacity },
      active: { stroke: styleSheet.intervalActiveBorderColor, lineWidth: styleSheet.intervalActiveBorder },
      selected: { stroke: styleSheet.intervalSelectedBorderColor, lineWidth: styleSheet.intervalSelectedBorder },
      inactive: {
        fillOpacity: styleSheet.intervalInactiveFillOpacity,
        strokeOpacity: styleSheet.intervalInactiveBorderOpacity
      }
    },
    hollowInterval: {
      default: {
        fill: styleSheet.hollowIntervalFillColor,
        stroke: styleSheet.hollowIntervalBorderColor,
        lineWidth: styleSheet.hollowIntervalBorder,
        strokeOpacity: styleSheet.hollowIntervalBorderOpacity
      },
      active: {
        stroke: styleSheet.hollowIntervalActiveBorderColor,
        lineWidth: styleSheet.hollowIntervalActiveBorder,
        strokeOpacity: styleSheet.hollowIntervalActiveBorderOpacity
      },
      selected: {
        stroke: styleSheet.hollowIntervalSelectedBorderColor,
        lineWidth: styleSheet.hollowIntervalSelectedBorder,
        strokeOpacity: styleSheet.hollowIntervalSelectedBorderOpacity
      },
      inactive: {
        stroke: styleSheet.hollowIntervalInactiveBorderColor,
        lineWidth: styleSheet.hollowIntervalInactiveBorder,
        strokeOpacity: styleSheet.hollowIntervalInactiveBorderOpacity
      }
    },
    line: {
      default: {
        stroke: styleSheet.lineBorderColor,
        lineWidth: styleSheet.lineBorder,
        strokeOpacity: styleSheet.lineBorderOpacity,
        fill: null,
        lineAppendWidth: 10,
        lineCap: 'round',
        lineJoin: 'round'
      },
      active: { lineWidth: styleSheet.lineActiveBorder },
      selected: { lineWidth: styleSheet.lineSelectedBorder },
      inactive: { strokeOpacity: styleSheet.lineInactiveBorderOpacity }
    }
  };
  var axisStyles = createAxisStyles(styleSheet);
  var legendStyles = createLegendStyles(styleSheet);
  return {
    background: styleSheet.backgroundColor,
    defaultColor: styleSheet.brandColor,
    subColor: styleSheet.subColor,
    semanticRed: styleSheet.paletteSemanticRed,
    semanticGreen: styleSheet.paletteSemanticGreen,
    padding: 'auto',
    fontFamily: styleSheet.fontFamily,
    columnWidthRatio: 1 / 2,
    maxColumnWidth: null,
    minColumnWidth: null,
    roseWidthRatio: 0.9999999,
    multiplePieWidthRatio: 1 / 1.3,
    colors10: styleSheet.paletteQualitative10,
    colors20: styleSheet.paletteQualitative20,
    sequenceColors: styleSheet.paletteSequence,
    shapes: {
      point: [
        'hollow-circle',
        'hollow-square',
        'hollow-bowtie',
        'hollow-diamond',
        'hollow-hexagon',
        'hollow-triangle',
        'hollow-triangle-down',
        'circle',
        'square',
        'bowtie',
        'diamond',
        'hexagon',
        'triangle',
        'triangle-down',
        'cross',
        'tick',
        'plus',
        'hyphen',
        'line'
      ],
      line: ['line', 'dash', 'dot', 'smooth'],
      area: ['area', 'smooth', 'line', 'smooth-line'],
      interval: ['rect', 'hollow-rect', 'line', 'tick']
    },
    sizes: [1, 10],
    geometries: {
      interval: {
        rect: {
          default: { style: shapeStyles.interval.default },
          active: { style: shapeStyles.interval.active },
          inactive: { style: shapeStyles.interval.inactive },
          selected: {
            style: function(element) {
              var coordinate = element.geometry.coordinate;
              if (coordinate.isPolar && coordinate.isTransposed) {
                var _a2 = getAngle(element.getModel(), coordinate),
                  startAngle = _a2.startAngle,
                  endAngle = _a2.endAngle;
                var middleAngle = (startAngle + endAngle) / 2;
                var r = 7.5;
                var x = r * Math.cos(middleAngle);
                var y = r * Math.sin(middleAngle);
                return { matrix: ext.transform(null, [['t', x, y]]) };
              }
              return shapeStyles.interval.selected;
            }
          }
        },
        'hollow-rect': {
          default: { style: shapeStyles.hollowInterval.default },
          active: { style: shapeStyles.hollowInterval.active },
          inactive: { style: shapeStyles.hollowInterval.inactive },
          selected: { style: shapeStyles.hollowInterval.selected }
        },
        line: {
          default: { style: shapeStyles.hollowInterval.default },
          active: { style: shapeStyles.hollowInterval.active },
          inactive: { style: shapeStyles.hollowInterval.inactive },
          selected: { style: shapeStyles.hollowInterval.selected }
        },
        tick: {
          default: { style: shapeStyles.hollowInterval.default },
          active: { style: shapeStyles.hollowInterval.active },
          inactive: { style: shapeStyles.hollowInterval.inactive },
          selected: { style: shapeStyles.hollowInterval.selected }
        },
        funnel: {
          default: { style: shapeStyles.interval.default },
          active: { style: shapeStyles.interval.active },
          inactive: { style: shapeStyles.interval.inactive },
          selected: { style: shapeStyles.interval.selected }
        },
        pyramid: {
          default: { style: shapeStyles.interval.default },
          active: { style: shapeStyles.interval.active },
          inactive: { style: shapeStyles.interval.inactive },
          selected: { style: shapeStyles.interval.selected }
        }
      },
      line: {
        line: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        dot: {
          default: { style: __assign2(__assign2({}, shapeStyles.line.default), { lineCap: null, lineDash: [1, 1] }) },
          active: { style: __assign2(__assign2({}, shapeStyles.line.active), { lineCap: null, lineDash: [1, 1] }) },
          inactive: { style: __assign2(__assign2({}, shapeStyles.line.inactive), { lineCap: null, lineDash: [1, 1] }) },
          selected: { style: __assign2(__assign2({}, shapeStyles.line.selected), { lineCap: null, lineDash: [1, 1] }) }
        },
        dash: {
          default: { style: __assign2(__assign2({}, shapeStyles.line.default), { lineCap: null, lineDash: [5.5, 1] }) },
          active: { style: __assign2(__assign2({}, shapeStyles.line.active), { lineCap: null, lineDash: [5.5, 1] }) },
          inactive: {
            style: __assign2(__assign2({}, shapeStyles.line.inactive), { lineCap: null, lineDash: [5.5, 1] })
          },
          selected: {
            style: __assign2(__assign2({}, shapeStyles.line.selected), { lineCap: null, lineDash: [5.5, 1] })
          }
        },
        smooth: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        hv: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        vh: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        hvh: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        vhv: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        }
      },
      polygon: {
        polygon: {
          default: { style: shapeStyles.interval.default },
          active: { style: shapeStyles.interval.active },
          inactive: { style: shapeStyles.interval.inactive },
          selected: { style: shapeStyles.interval.selected }
        }
      },
      point: {
        circle: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        square: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        bowtie: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        diamond: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        hexagon: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        triangle: {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        'triangle-down': {
          default: { style: shapeStyles.point.default },
          active: { style: shapeStyles.point.active },
          inactive: { style: shapeStyles.point.inactive },
          selected: { style: shapeStyles.point.selected }
        },
        'hollow-circle': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-square': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-bowtie': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-diamond': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-hexagon': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-triangle': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        'hollow-triangle-down': {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        cross: {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        tick: {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        plus: {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        hyphen: {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        },
        line: {
          default: { style: shapeStyles.hollowPoint.default },
          active: { style: shapeStyles.hollowPoint.active },
          inactive: { style: shapeStyles.hollowPoint.inactive },
          selected: { style: shapeStyles.hollowPoint.selected }
        }
      },
      area: {
        area: {
          default: { style: shapeStyles.area.default },
          active: { style: shapeStyles.area.active },
          inactive: { style: shapeStyles.area.inactive },
          selected: { style: shapeStyles.area.selected }
        },
        smooth: {
          default: { style: shapeStyles.area.default },
          active: { style: shapeStyles.area.active },
          inactive: { style: shapeStyles.area.inactive },
          selected: { style: shapeStyles.area.selected }
        },
        line: {
          default: { style: shapeStyles.hollowArea.default },
          active: { style: shapeStyles.hollowArea.active },
          inactive: { style: shapeStyles.hollowArea.inactive },
          selected: { style: shapeStyles.hollowArea.selected }
        },
        'smooth-line': {
          default: { style: shapeStyles.hollowArea.default },
          active: { style: shapeStyles.hollowArea.active },
          inactive: { style: shapeStyles.hollowArea.inactive },
          selected: { style: shapeStyles.hollowArea.selected }
        }
      },
      schema: {
        candle: {
          default: { style: shapeStyles.hollowInterval.default },
          active: { style: shapeStyles.hollowInterval.active },
          inactive: { style: shapeStyles.hollowInterval.inactive },
          selected: { style: shapeStyles.hollowInterval.selected }
        },
        box: {
          default: { style: shapeStyles.hollowInterval.default },
          active: { style: shapeStyles.hollowInterval.active },
          inactive: { style: shapeStyles.hollowInterval.inactive },
          selected: { style: shapeStyles.hollowInterval.selected }
        }
      },
      edge: {
        line: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        vhv: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        smooth: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        arc: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        }
      },
      violin: {
        violin: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        smooth: {
          default: { style: shapeStyles.line.default },
          active: { style: shapeStyles.line.active },
          inactive: { style: shapeStyles.line.inactive },
          selected: { style: shapeStyles.line.selected }
        },
        hollow: {
          default: { style: shapeStyles.hollowArea.default },
          active: { style: shapeStyles.hollowArea.active },
          inactive: { style: shapeStyles.hollowArea.inactive },
          selected: { style: shapeStyles.hollowArea.selected }
        },
        'hollow-smooth': {
          default: { style: shapeStyles.hollowArea.default },
          active: { style: shapeStyles.hollowArea.active },
          inactive: { style: shapeStyles.hollowArea.inactive },
          selected: { style: shapeStyles.hollowArea.selected }
        }
      }
    },
    components: {
      axis: {
        common: axisStyles,
        top: { position: 'top', grid: null, title: null, verticalLimitLength: 1 / 2 },
        bottom: { position: 'bottom', grid: null, title: null, verticalLimitLength: 1 / 2 },
        left: { position: 'left', title: null, line: null, tickLine: null, verticalLimitLength: 1 / 3 },
        right: { position: 'right', title: null, line: null, tickLine: null, verticalLimitLength: 1 / 3 },
        circle: { title: null, grid: deepMix3({}, axisStyles.grid, { line: { type: 'line' } }) },
        radius: { title: null, grid: deepMix3({}, axisStyles.grid, { line: { type: 'circle' } }) }
      },
      legend: {
        common: legendStyles,
        right: { layout: 'vertical', padding: styleSheet.legendVerticalPadding },
        left: { layout: 'vertical', padding: styleSheet.legendVerticalPadding },
        top: { layout: 'horizontal', padding: styleSheet.legendHorizontalPadding },
        bottom: { layout: 'horizontal', padding: styleSheet.legendHorizontalPadding },
        continuous: {
          title: null,
          background: null,
          track: {},
          rail: {
            type: 'color',
            size: styleSheet.sliderRailHeight,
            defaultLength: styleSheet.sliderRailWidth,
            style: {
              fill: styleSheet.sliderRailFillColor,
              stroke: styleSheet.sliderRailBorderColor,
              lineWidth: styleSheet.sliderRailBorder
            }
          },
          label: {
            align: 'rail',
            spacing: 4,
            formatter: null,
            style: {
              fill: styleSheet.sliderLabelTextFillColor,
              fontSize: styleSheet.sliderLabelTextFontSize,
              lineHeight: styleSheet.sliderLabelTextLineHeight,
              textBaseline: 'middle',
              fontFamily: styleSheet.fontFamily
            }
          },
          handler: {
            size: styleSheet.sliderHandlerWidth,
            style: { fill: styleSheet.sliderHandlerFillColor, stroke: styleSheet.sliderHandlerBorderColor }
          },
          slidable: true,
          padding: legendStyles.padding
        }
      },
      tooltip: {
        showContent: true,
        follow: true,
        showCrosshairs: false,
        showMarkers: true,
        shared: false,
        enterable: false,
        position: 'auto',
        marker: {
          symbol: 'circle',
          stroke: '#fff',
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.09)',
          lineWidth: 2,
          r: 4
        },
        crosshairs: {
          line: {
            style: { stroke: styleSheet.tooltipCrosshairsBorderColor, lineWidth: styleSheet.tooltipCrosshairsBorder }
          },
          text: null,
          textBackground: { padding: 2, style: { fill: 'rgba(0, 0, 0, 0.25)', lineWidth: 0, stroke: null } },
          follow: false
        },
        domStyles:
          ((_a = {}),
          (_a[''.concat(TOOLTIP_CSS_CONST.CONTAINER_CLASS)] = {
            position: 'absolute',
            visibility: 'hidden',
            zIndex: 8,
            transition: 'left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s',
            backgroundColor: styleSheet.tooltipContainerFillColor,
            opacity: styleSheet.tooltipContainerFillOpacity,
            boxShadow: styleSheet.tooltipContainerShadow,
            borderRadius: ''.concat(styleSheet.tooltipContainerBorderRadius, 'px'),
            color: styleSheet.tooltipTextFillColor,
            fontSize: ''.concat(styleSheet.tooltipTextFontSize, 'px'),
            fontFamily: styleSheet.fontFamily,
            lineHeight: ''.concat(styleSheet.tooltipTextLineHeight, 'px'),
            padding: '0 12px 0 12px'
          }),
          (_a[''.concat(TOOLTIP_CSS_CONST.TITLE_CLASS)] = { marginBottom: '12px', marginTop: '12px' }),
          (_a[''.concat(TOOLTIP_CSS_CONST.LIST_CLASS)] = { margin: 0, listStyleType: 'none', padding: 0 }),
          (_a[''.concat(TOOLTIP_CSS_CONST.LIST_ITEM_CLASS)] = {
            listStyleType: 'none',
            padding: 0,
            marginBottom: '12px',
            marginTop: '12px',
            marginLeft: 0,
            marginRight: 0
          }),
          (_a[''.concat(TOOLTIP_CSS_CONST.MARKER_CLASS)] = {
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '8px'
          }),
          (_a[''.concat(TOOLTIP_CSS_CONST.VALUE_CLASS)] = {
            display: 'inline-block',
            float: 'right',
            marginLeft: '30px'
          }),
          _a)
      },
      annotation: {
        arc: {
          style: { stroke: styleSheet.annotationArcBorderColor, lineWidth: styleSheet.annotationArcBorder },
          animate: true
        },
        line: {
          style: {
            stroke: styleSheet.annotationLineBorderColor,
            lineDash: styleSheet.annotationLineDash,
            lineWidth: styleSheet.annotationLineBorder
          },
          text: {
            position: 'start',
            autoRotate: true,
            style: {
              fill: styleSheet.annotationTextFillColor,
              stroke: styleSheet.annotationTextBorderColor,
              lineWidth: styleSheet.annotationTextBorder,
              fontSize: styleSheet.annotationTextFontSize,
              textAlign: 'start',
              fontFamily: styleSheet.fontFamily,
              textBaseline: 'bottom'
            }
          },
          animate: true
        },
        text: {
          style: {
            fill: styleSheet.annotationTextFillColor,
            stroke: styleSheet.annotationTextBorderColor,
            lineWidth: styleSheet.annotationTextBorder,
            fontSize: styleSheet.annotationTextFontSize,
            textBaseline: 'middle',
            textAlign: 'start',
            fontFamily: styleSheet.fontFamily
          },
          animate: true
        },
        region: {
          top: false,
          style: {
            lineWidth: styleSheet.annotationRegionBorder,
            stroke: styleSheet.annotationRegionBorderColor,
            fill: styleSheet.annotationRegionFillColor,
            fillOpacity: styleSheet.annotationRegionFillOpacity
          },
          animate: true
        },
        image: { top: false, animate: true },
        dataMarker: {
          top: true,
          point: { style: { r: 3, stroke: styleSheet.brandColor, lineWidth: 2 } },
          line: {
            style: { stroke: styleSheet.annotationLineBorderColor, lineWidth: styleSheet.annotationLineBorder },
            length: styleSheet.annotationDataMarkerLineLength
          },
          text: {
            style: {
              textAlign: 'start',
              fill: styleSheet.annotationTextFillColor,
              stroke: styleSheet.annotationTextBorderColor,
              lineWidth: styleSheet.annotationTextBorder,
              fontSize: styleSheet.annotationTextFontSize,
              fontFamily: styleSheet.fontFamily
            }
          },
          direction: 'upward',
          autoAdjust: true,
          animate: true
        },
        dataRegion: {
          style: {
            region: { fill: styleSheet.annotationRegionFillColor, fillOpacity: styleSheet.annotationRegionFillOpacity },
            text: {
              textAlign: 'center',
              textBaseline: 'bottom',
              fill: styleSheet.annotationTextFillColor,
              stroke: styleSheet.annotationTextBorderColor,
              lineWidth: styleSheet.annotationTextBorder,
              fontSize: styleSheet.annotationTextFontSize,
              fontFamily: styleSheet.fontFamily
            }
          },
          animate: true
        }
      },
      slider: {
        common: {
          padding: [8, 8, 8, 8],
          backgroundStyle: {
            fill: styleSheet.cSliderBackgroundFillColor,
            opacity: styleSheet.cSliderBackgroundFillOpacity
          },
          foregroundStyle: {
            fill: styleSheet.cSliderForegroundFillColor,
            opacity: styleSheet.cSliderForegroundFillOpacity
          },
          handlerStyle: {
            width: styleSheet.cSliderHandlerWidth,
            height: styleSheet.cSliderHandlerHeight,
            fill: styleSheet.cSliderHandlerFillColor,
            opacity: styleSheet.cSliderHandlerFillOpacity,
            stroke: styleSheet.cSliderHandlerBorderColor,
            lineWidth: styleSheet.cSliderHandlerBorder,
            radius: styleSheet.cSliderHandlerBorderRadius,
            highLightFill: styleSheet.cSliderHandlerHighlightFillColor
          },
          textStyle: {
            fill: styleSheet.cSliderTextFillColor,
            opacity: styleSheet.cSliderTextFillOpacity,
            fontSize: styleSheet.cSliderTextFontSize,
            lineHeight: styleSheet.cSliderTextLineHeight,
            fontWeight: styleSheet.cSliderTextFontWeight,
            stroke: styleSheet.cSliderTextBorderColor,
            lineWidth: styleSheet.cSliderTextBorder
          }
        }
      },
      scrollbar: {
        common: { padding: [8, 8, 8, 8] },
        default: {
          style: { trackColor: styleSheet.scrollbarTrackFillColor, thumbColor: styleSheet.scrollbarThumbFillColor }
        },
        hover: { style: { thumbColor: styleSheet.scrollbarThumbHighlightFillColor } }
      }
    },
    labels: {
      offset: 12,
      style: {
        fill: styleSheet.labelFillColor,
        fontSize: styleSheet.labelFontSize,
        fontFamily: styleSheet.fontFamily,
        stroke: styleSheet.labelBorderColor,
        lineWidth: styleSheet.labelBorder
      },
      fillColorDark: styleSheet.labelFillColorDark,
      fillColorLight: styleSheet.labelFillColorLight,
      autoRotate: true
    },
    innerLabels: {
      style: {
        fill: styleSheet.innerLabelFillColor,
        fontSize: styleSheet.innerLabelFontSize,
        fontFamily: styleSheet.fontFamily,
        stroke: styleSheet.innerLabelBorderColor,
        lineWidth: styleSheet.innerLabelBorder
      },
      autoRotate: true
    },
    overflowLabels: {
      style: {
        fill: styleSheet.overflowLabelFillColor,
        fontSize: styleSheet.overflowLabelFontSize,
        fontFamily: styleSheet.fontFamily,
        stroke: styleSheet.overflowLabelBorderColor,
        lineWidth: styleSheet.overflowLabelBorder
      }
    },
    pieLabels: {
      labelHeight: 14,
      offset: 10,
      labelLine: { style: { lineWidth: styleSheet.labelLineBorder } },
      autoRotate: true
    }
  };
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/style-sheet/light.js
import { __assign as __assign3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var BLACK_COLORS = {
  100: '#000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0'
};
var WHITE_COLORS = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F'
};
var QUALITATIVE_10 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#6F5EF9',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3'
];
var QUALITATIVE_20 = [
  '#5B8FF9',
  '#CDDDFD',
  '#5AD8A6',
  '#CDF3E4',
  '#5D7092',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#6F5EF9',
  '#D3CEFD',
  '#6DC8EC',
  '#D3EEF9',
  '#945FB9',
  '#DECFEA',
  '#FF9845',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED'
];
var SINGLE_SEQUENCE = [
  '#B8E1FF',
  '#9AC5FF',
  '#7DAAFF',
  '#5B8FF9',
  '#3D76DD',
  '#085EC0',
  '#0047A5',
  '#00318A',
  '#001D70'
];
var createLightStyleSheet = function(cfg) {
  if (cfg === void 0) {
    cfg = {};
  }
  var _a = cfg.paletteQualitative10,
    paletteQualitative10 = _a === void 0 ? QUALITATIVE_10 : _a,
    _b = cfg.paletteQualitative20,
    paletteQualitative20 = _b === void 0 ? QUALITATIVE_20 : _b;
  var _c = cfg.brandColor,
    brandColor = _c === void 0 ? paletteQualitative10[0] : _c;
  var token = {
    backgroundColor: 'transparent',
    brandColor,
    subColor: 'rgba(0,0,0,0.05)',
    paletteQualitative10,
    paletteQualitative20,
    paletteSemanticRed: '#F4664A',
    paletteSemanticGreen: '#30BF78',
    paletteSemanticYellow: '#FAAD14',
    paletteSequence: SINGLE_SEQUENCE,
    fontFamily:
      '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
    axisLineBorderColor: BLACK_COLORS[25],
    axisLineBorder: 1,
    axisLineDash: null,
    axisTitleTextFillColor: BLACK_COLORS[65],
    axisTitleTextFontSize: 12,
    axisTitleTextLineHeight: 12,
    axisTitleTextFontWeight: 'normal',
    axisTitleSpacing: 12,
    axisDescriptionIconFillColor: WHITE_COLORS[85],
    axisTickLineBorderColor: BLACK_COLORS[25],
    axisTickLineLength: 4,
    axisTickLineBorder: 1,
    axisSubTickLineBorderColor: BLACK_COLORS[15],
    axisSubTickLineLength: 2,
    axisSubTickLineBorder: 1,
    axisLabelFillColor: BLACK_COLORS[45],
    axisLabelFontSize: 12,
    axisLabelLineHeight: 12,
    axisLabelFontWeight: 'normal',
    axisLabelOffset: 8,
    axisGridBorderColor: BLACK_COLORS[15],
    axisGridBorder: 1,
    axisGridLineDash: null,
    legendTitleTextFillColor: BLACK_COLORS[45],
    legendTitleTextFontSize: 12,
    legendTitleTextLineHeight: 21,
    legendTitleTextFontWeight: 'normal',
    legendMarkerColor: brandColor,
    legendMarkerSpacing: 8,
    legendMarkerSize: 4,
    legendCircleMarkerSize: 4,
    legendSquareMarkerSize: 4,
    legendLineMarkerSize: 5,
    legendItemNameFillColor: BLACK_COLORS[65],
    legendItemNameFontSize: 12,
    legendItemNameLineHeight: 12,
    legendItemNameFontWeight: 'normal',
    legendItemSpacing: 24,
    legendItemMarginBottom: 12,
    legendPadding: [8, 8, 8, 8],
    legendHorizontalPadding: [8, 0, 8, 0],
    legendVerticalPadding: [0, 8, 0, 8],
    legendPageNavigatorMarkerSize: 12,
    legendPageNavigatorMarkerInactiveFillColor: BLACK_COLORS[100],
    legendPageNavigatorMarkerInactiveFillOpacity: 0.45,
    legendPageNavigatorMarkerFillColor: BLACK_COLORS[100],
    legendPageNavigatorMarkerFillOpacity: 1,
    legendPageNavigatorTextFillColor: BLACK_COLORS[45],
    legendPageNavigatorTextFontSize: 12,
    sliderRailFillColor: BLACK_COLORS[15],
    sliderRailBorder: 0,
    sliderRailBorderColor: null,
    sliderRailWidth: 100,
    sliderRailHeight: 12,
    sliderLabelTextFillColor: BLACK_COLORS[45],
    sliderLabelTextFontSize: 12,
    sliderLabelTextLineHeight: 12,
    sliderLabelTextFontWeight: 'normal',
    sliderHandlerFillColor: BLACK_COLORS[6],
    sliderHandlerWidth: 10,
    sliderHandlerHeight: 14,
    sliderHandlerBorder: 1,
    sliderHandlerBorderColor: BLACK_COLORS[25],
    annotationArcBorderColor: BLACK_COLORS[15],
    annotationArcBorder: 1,
    annotationLineBorderColor: BLACK_COLORS[25],
    annotationLineBorder: 1,
    annotationLineDash: null,
    annotationTextFillColor: BLACK_COLORS[65],
    annotationTextFontSize: 12,
    annotationTextLineHeight: 12,
    annotationTextFontWeight: 'normal',
    annotationTextBorderColor: null,
    annotationTextBorder: 0,
    annotationRegionFillColor: BLACK_COLORS[100],
    annotationRegionFillOpacity: 0.06,
    annotationRegionBorder: 0,
    annotationRegionBorderColor: null,
    annotationDataMarkerLineLength: 16,
    tooltipCrosshairsBorderColor: BLACK_COLORS[25],
    tooltipCrosshairsBorder: 1,
    tooltipCrosshairsLineDash: null,
    tooltipContainerFillColor: 'rgb(255, 255, 255)',
    tooltipContainerFillOpacity: 0.95,
    tooltipContainerShadow: '0px 0px 10px #aeaeae',
    tooltipContainerBorderRadius: 3,
    tooltipTextFillColor: BLACK_COLORS[65],
    tooltipTextFontSize: 12,
    tooltipTextLineHeight: 12,
    tooltipTextFontWeight: 'bold',
    labelFillColor: BLACK_COLORS[65],
    labelFillColorDark: '#2c3542',
    labelFillColorLight: '#ffffff',
    labelFontSize: 12,
    labelLineHeight: 12,
    labelFontWeight: 'normal',
    labelBorderColor: null,
    labelBorder: 0,
    innerLabelFillColor: WHITE_COLORS[100],
    innerLabelFontSize: 12,
    innerLabelLineHeight: 12,
    innerLabelFontWeight: 'normal',
    innerLabelBorderColor: null,
    innerLabelBorder: 0,
    overflowLabelFillColor: BLACK_COLORS[65],
    overflowLabelFontSize: 12,
    overflowLabelLineHeight: 12,
    overflowLabelFontWeight: 'normal',
    overflowLabelBorderColor: WHITE_COLORS[100],
    overflowLabelBorder: 1,
    labelLineBorder: 1,
    labelLineBorderColor: BLACK_COLORS[25],
    cSliderRailHieght: 16,
    cSliderBackgroundFillColor: '#416180',
    cSliderBackgroundFillOpacity: 0.05,
    cSliderForegroundFillColor: '#5B8FF9',
    cSliderForegroundFillOpacity: 0.15,
    cSliderHandlerHeight: 24,
    cSliderHandlerWidth: 10,
    cSliderHandlerFillColor: '#F7F7F7',
    cSliderHandlerFillOpacity: 1,
    cSliderHandlerHighlightFillColor: '#FFF',
    cSliderHandlerBorderColor: '#BFBFBF',
    cSliderHandlerBorder: 1,
    cSliderHandlerBorderRadius: 2,
    cSliderTextFillColor: '#000',
    cSliderTextFillOpacity: 0.45,
    cSliderTextFontSize: 12,
    cSliderTextLineHeight: 12,
    cSliderTextFontWeight: 'normal',
    cSliderTextBorderColor: null,
    cSliderTextBorder: 0,
    scrollbarTrackFillColor: 'rgba(0,0,0,0)',
    scrollbarThumbFillColor: 'rgba(0,0,0,0.15)',
    scrollbarThumbHighlightFillColor: 'rgba(0,0,0,0.2)',
    pointFillColor: brandColor,
    pointFillOpacity: 0.95,
    pointSize: 4,
    pointBorder: 1,
    pointBorderColor: WHITE_COLORS[100],
    pointBorderOpacity: 1,
    pointActiveBorderColor: BLACK_COLORS[100],
    pointSelectedBorder: 2,
    pointSelectedBorderColor: BLACK_COLORS[100],
    pointInactiveFillOpacity: 0.3,
    pointInactiveBorderOpacity: 0.3,
    hollowPointSize: 4,
    hollowPointBorder: 1,
    hollowPointBorderColor: brandColor,
    hollowPointBorderOpacity: 0.95,
    hollowPointFillColor: WHITE_COLORS[100],
    hollowPointActiveBorder: 1,
    hollowPointActiveBorderColor: BLACK_COLORS[100],
    hollowPointActiveBorderOpacity: 1,
    hollowPointSelectedBorder: 2,
    hollowPointSelectedBorderColor: BLACK_COLORS[100],
    hollowPointSelectedBorderOpacity: 1,
    hollowPointInactiveBorderOpacity: 0.3,
    lineBorder: 2,
    lineBorderColor: brandColor,
    lineBorderOpacity: 1,
    lineActiveBorder: 3,
    lineSelectedBorder: 3,
    lineInactiveBorderOpacity: 0.3,
    areaFillColor: brandColor,
    areaFillOpacity: 0.25,
    areaActiveFillColor: brandColor,
    areaActiveFillOpacity: 0.5,
    areaSelectedFillColor: brandColor,
    areaSelectedFillOpacity: 0.5,
    areaInactiveFillOpacity: 0.3,
    hollowAreaBorderColor: brandColor,
    hollowAreaBorder: 2,
    hollowAreaBorderOpacity: 1,
    hollowAreaActiveBorder: 3,
    hollowAreaActiveBorderColor: BLACK_COLORS[100],
    hollowAreaSelectedBorder: 3,
    hollowAreaSelectedBorderColor: BLACK_COLORS[100],
    hollowAreaInactiveBorderOpacity: 0.3,
    intervalFillColor: brandColor,
    intervalFillOpacity: 0.95,
    intervalActiveBorder: 1,
    intervalActiveBorderColor: BLACK_COLORS[100],
    intervalActiveBorderOpacity: 1,
    intervalSelectedBorder: 2,
    intervalSelectedBorderColor: BLACK_COLORS[100],
    intervalSelectedBorderOpacity: 1,
    intervalInactiveBorderOpacity: 0.3,
    intervalInactiveFillOpacity: 0.3,
    hollowIntervalBorder: 2,
    hollowIntervalBorderColor: brandColor,
    hollowIntervalBorderOpacity: 1,
    hollowIntervalFillColor: WHITE_COLORS[100],
    hollowIntervalActiveBorder: 2,
    hollowIntervalActiveBorderColor: BLACK_COLORS[100],
    hollowIntervalSelectedBorder: 3,
    hollowIntervalSelectedBorderColor: BLACK_COLORS[100],
    hollowIntervalSelectedBorderOpacity: 1,
    hollowIntervalInactiveBorderOpacity: 0.3
  };
  return __assign3(__assign3({}, token), cfg);
};
var antvLight = createLightStyleSheet(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/util/create-theme.js
function createTheme(themeCfg) {
  var _a = themeCfg.styleSheet,
    styleSheetCfg = _a === void 0 ? {} : _a,
    themeObject = __rest(themeCfg, ['styleSheet']);
  var styleSheet = createLightStyleSheet(styleSheetCfg);
  return deepMix4({}, createThemeByStyleSheet(styleSheet), themeObject);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/index.js
var defaultTheme = createTheme({});
var Themes = { default: defaultTheme };
function getTheme(theme) {
  return get6(Themes, lowerCase3(theme), Themes.default);
}
function registerTheme(theme, value) {
  Themes[lowerCase3(theme)] = createTheme(value);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/tooltip.js
import {
  __assign as __assign4,
  __read as __read5,
  __spreadArray as __spreadArray2,
  __values as __values2
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  contains,
  filter,
  find,
  isArray as isArray4,
  isEmpty as isEmpty3,
  isFunction as isFunction2,
  isNil as isNil3,
  isNumberEqual as isNumberEqual2,
  isObject,
  memoize,
  get as get7,
  values
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function snapEqual(v1, v2, scale) {
  var value1 = scale.translate(v1);
  var value2 = scale.translate(v2);
  return isNumberEqual2(value1, value2);
}
function getXValueByPoint(point, geometry) {
  var coordinate = geometry.coordinate;
  var xScale = geometry.getXScale();
  var range = xScale.range;
  var rangeMax = range[range.length - 1];
  var rangeMin = range[0];
  var invertPoint = coordinate.invert(point);
  var xValue = invertPoint.x;
  if (coordinate.isPolar && xValue > (1 + rangeMax) / 2) {
    xValue = rangeMin;
  }
  return xScale.translate(xScale.invert(xValue));
}
function filterYValue(data, point, geometry) {
  var coordinate = geometry.coordinate;
  var yScale = geometry.getYScale();
  var yField = yScale.field;
  var invertPoint = coordinate.invert(point);
  var yValue = yScale.invert(invertPoint.y);
  var result = find(data, function(obj) {
    var originData = obj[FIELD_ORIGIN];
    return originData[yField][0] <= yValue && originData[yField][1] >= yValue;
  });
  return result || data[data.length - 1];
}
var getXDistance = memoize(function(scale) {
  if (scale.isCategory) {
    return 1;
  }
  var scaleValues = scale.values;
  var length = scaleValues.length;
  var min2 = scale.translate(scaleValues[0]);
  var max3 = min2;
  for (var index = 0; index < length; index++) {
    var value = scaleValues[index];
    var numericValue = scale.translate(value);
    if (numericValue < min2) {
      min2 = numericValue;
    }
    if (numericValue > max3) {
      max3 = numericValue;
    }
  }
  return (max3 - min2) / (length - 1);
});
function getTooltipTitle(originData, geometry, title) {
  var positionAttr = geometry.getAttribute('position');
  var fields = positionAttr.getFields();
  var scales = geometry.scales;
  var titleField = isFunction2(title) || !title ? fields[0] : title;
  var titleScale = scales[titleField];
  var tooltipTitle = titleScale ? titleScale.getText(originData[titleField]) : originData[titleField] || titleField;
  return isFunction2(title) ? title(tooltipTitle, originData) : tooltipTitle;
}
function getAttributesForLegend(geometry) {
  var attributes = values(geometry.attributes);
  return filter(attributes, function(attribute) {
    return contains(GROUP_ATTRS, attribute.type);
  });
}
function getTooltipValueScale(geometry) {
  var e_1, _a;
  var attributes = getAttributesForLegend(geometry);
  var scale;
  try {
    for (
      var attributes_1 = __values2(attributes), attributes_1_1 = attributes_1.next();
      !attributes_1_1.done;
      attributes_1_1 = attributes_1.next()
    ) {
      var attribute = attributes_1_1.value;
      var tmpScale = attribute.getScale(attribute.type);
      if (tmpScale && tmpScale.isLinear) {
        var tmpScaleDef = get7(geometry.scaleDefs, tmpScale.field);
        var inferedScaleType = inferScaleType(tmpScale, tmpScaleDef, attribute.type, geometry.type);
        if (inferedScaleType !== 'cat') {
          scale = tmpScale;
          break;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (attributes_1_1 && !attributes_1_1.done && (_a = attributes_1.return)) _a.call(attributes_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  var xScale = geometry.getXScale();
  var yScale = geometry.getYScale();
  return scale || yScale || xScale;
}
function getTooltipValue(originData, valueScale) {
  var field = valueScale.field;
  var value = originData[field];
  if (isArray4(value)) {
    var texts = value.map(function(eachValue) {
      return valueScale.getText(eachValue);
    });
    return texts.join('-');
  }
  return valueScale.getText(value);
}
function getTooltipName(originData, geometry) {
  var nameScale;
  var groupScales = geometry.getGroupScales();
  if (groupScales.length) {
    nameScale = groupScales[0];
  }
  if (nameScale) {
    var field = nameScale.field;
    return nameScale.getText(originData[field]);
  }
  var valueScale = getTooltipValueScale(geometry);
  return getName(valueScale);
}
function findDataByPoint(point, data, geometry) {
  if (data.length === 0) {
    return null;
  }
  var geometryType = geometry.type;
  var xScale = geometry.getXScale();
  var yScale = geometry.getYScale();
  var xField = xScale.field;
  var yField = yScale.field;
  var rst = null;
  if (geometryType === 'heatmap' || geometryType === 'point') {
    var coordinate = geometry.coordinate;
    var invertPoint = coordinate.invert(point);
    var x = xScale.invert(invertPoint.x);
    var y = yScale.invert(invertPoint.y);
    var min2 = Infinity;
    for (var index = 0; index < data.length; index++) {
      var obj = data[index];
      var originData = obj[FIELD_ORIGIN];
      var range = Math.pow(originData[xField] - x, 2) + Math.pow(originData[yField] - y, 2);
      if (range < min2) {
        min2 = range;
        rst = obj;
      }
    }
    return rst;
  }
  var first = data[0];
  var last8 = data[data.length - 1];
  var xValue = getXValueByPoint(point, geometry);
  var firstXValue = first[FIELD_ORIGIN][xField];
  var firstYValue = first[FIELD_ORIGIN][yField];
  var lastXValue = last8[FIELD_ORIGIN][xField];
  var isYArray = yScale.isLinear && isArray4(firstYValue);
  if (isArray4(firstXValue)) {
    for (var index = 0; index < data.length; index++) {
      var record = data[index];
      var originData = record[FIELD_ORIGIN];
      if (xScale.translate(originData[xField][0]) <= xValue && xScale.translate(originData[xField][1]) >= xValue) {
        if (isYArray) {
          if (!isArray4(rst)) {
            rst = [];
          }
          rst.push(record);
        } else {
          rst = record;
          break;
        }
      }
    }
    if (isArray4(rst)) {
      rst = filterYValue(rst, point, geometry);
    }
  } else {
    var next = void 0;
    if (!xScale.isLinear && xScale.type !== 'timeCat') {
      for (var index = 0; index < data.length; index++) {
        var record = data[index];
        var originData = record[FIELD_ORIGIN];
        if (snapEqual(originData[xField], xValue, xScale)) {
          if (isYArray) {
            if (!isArray4(rst)) {
              rst = [];
            }
            rst.push(record);
          } else {
            rst = record;
            break;
          }
        } else if (xScale.translate(originData[xField]) <= xValue) {
          last8 = record;
          next = data[index + 1];
        }
      }
      if (isArray4(rst)) {
        rst = filterYValue(rst, point, geometry);
      }
    } else {
      if (
        (xValue > xScale.translate(lastXValue) || xValue < xScale.translate(firstXValue)) &&
        (xValue > xScale.max || xValue < xScale.min)
      ) {
        return null;
      }
      var firstIdx = 0;
      var lastIdx = data.length - 1;
      var middleIdx = void 0;
      while (firstIdx <= lastIdx) {
        middleIdx = Math.floor((firstIdx + lastIdx) / 2);
        var item = data[middleIdx][FIELD_ORIGIN][xField];
        if (snapEqual(item, xValue, xScale)) {
          return data[middleIdx];
        }
        if (xScale.translate(item) <= xScale.translate(xValue)) {
          firstIdx = middleIdx + 1;
          last8 = data[middleIdx];
          next = data[middleIdx + 1];
        } else {
          if (lastIdx === 0) {
            last8 = data[0];
          }
          lastIdx = middleIdx - 1;
        }
      }
    }
    if (last8 && next) {
      if (
        Math.abs(xScale.translate(last8[FIELD_ORIGIN][xField]) - xValue) >
        Math.abs(xScale.translate(next[FIELD_ORIGIN][xField]) - xValue)
      ) {
        last8 = next;
      }
    }
  }
  var distance2 = getXDistance(geometry.getXScale());
  if (!rst && Math.abs(xScale.translate(last8[FIELD_ORIGIN][xField]) - xValue) <= distance2 / 2) {
    rst = last8;
  }
  return rst;
}
function getTooltipItems(data, geometry, title, showNil) {
  var e_2, _a;
  if (title === void 0) {
    title = '';
  }
  if (showNil === void 0) {
    showNil = false;
  }
  var originData = data[FIELD_ORIGIN];
  var tooltipTitle = getTooltipTitle(originData, geometry, title);
  var tooltipOption = geometry.tooltipOption;
  var defaultColor = geometry.theme.defaultColor;
  var items = [];
  var name;
  var value;
  function addItem(itemName, itemValue) {
    if (showNil || (!isNil3(itemValue) && itemValue !== '')) {
      var item = {
        title: tooltipTitle,
        data: originData,
        mappingData: data,
        name: itemName,
        value: itemValue,
        color: data.color || defaultColor,
        marker: true
      };
      items.push(item);
    }
  }
  if (isObject(tooltipOption)) {
    var fields = tooltipOption.fields,
      callback = tooltipOption.callback;
    if (callback) {
      var callbackParams = fields.map(function(field2) {
        return data[FIELD_ORIGIN][field2];
      });
      var cfg = callback.apply(void 0, __spreadArray2([], __read5(callbackParams), false));
      var itemCfg = __assign4(
        {
          data: data[FIELD_ORIGIN],
          mappingData: data,
          title: tooltipTitle,
          color: data.color || defaultColor,
          marker: true
        },
        cfg
      );
      items.push(itemCfg);
    } else {
      var scales = geometry.scales;
      try {
        for (
          var fields_1 = __values2(fields), fields_1_1 = fields_1.next();
          !fields_1_1.done;
          fields_1_1 = fields_1.next()
        ) {
          var field = fields_1_1.value;
          if (!isNil3(originData[field])) {
            var scale = scales[field];
            name = getName(scale);
            value = scale.getText(originData[field]);
            addItem(name, value);
          }
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (fields_1_1 && !fields_1_1.done && (_a = fields_1.return)) _a.call(fields_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    }
  } else {
    var valueScale = getTooltipValueScale(geometry);
    value = getTooltipValue(originData, valueScale);
    name = getTooltipName(originData, geometry);
    addItem(name, value);
  }
  return items;
}
function getTooltipItemsByFindData(geometry, point, title, tooltipCfg) {
  var e_3, _a;
  var showNil = tooltipCfg.showNil;
  var result = [];
  var dataArray = geometry.dataArray;
  if (!isEmpty3(dataArray)) {
    geometry.sort(dataArray);
    try {
      for (
        var dataArray_1 = __values2(dataArray), dataArray_1_1 = dataArray_1.next();
        !dataArray_1_1.done;
        dataArray_1_1 = dataArray_1.next()
      ) {
        var data = dataArray_1_1.value;
        var record = findDataByPoint(point, data, geometry);
        if (record) {
          var elementId = geometry.getElementId(record);
          var element = geometry.elementsMap[elementId];
          if (geometry.type === 'heatmap' || element.visible) {
            var items = getTooltipItems(record, geometry, title, showNil);
            if (items.length) {
              result.push(items);
            }
          }
        }
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (dataArray_1_1 && !dataArray_1_1.done && (_a = dataArray_1.return)) _a.call(dataArray_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  }
  return result;
}
function getTooltipItemsByHitShape(geometry, point, title, tooltipCfg) {
  var showNil = tooltipCfg.showNil;
  var result = [];
  var container = geometry.container;
  var shape = container.getShape(point.x, point.y);
  if (shape && shape.get('visible') && shape.get('origin')) {
    var mappingData = shape.get('origin').mappingData;
    var items = getTooltipItems(mappingData, geometry, title, showNil);
    if (items.length) {
      result.push(items);
    }
  }
  return result;
}
function findItemsFromView(view, point, tooltipCfg) {
  var e_4, _a;
  var result = [];
  var geometries = view.geometries;
  var shared = tooltipCfg.shared,
    title = tooltipCfg.title,
    reversed = tooltipCfg.reversed;
  try {
    for (
      var geometries_1 = __values2(geometries), geometries_1_1 = geometries_1.next();
      !geometries_1_1.done;
      geometries_1_1 = geometries_1.next()
    ) {
      var geometry = geometries_1_1.value;
      if (geometry.visible && geometry.tooltipOption !== false) {
        var geometryType = geometry.type;
        var tooltipItems = void 0;
        if (['point', 'edge', 'polygon'].includes(geometryType)) {
          tooltipItems = getTooltipItemsByHitShape(geometry, point, title, tooltipCfg);
        } else if (['area', 'line', 'path', 'heatmap'].includes(geometryType)) {
          tooltipItems = getTooltipItemsByFindData(geometry, point, title, tooltipCfg);
        } else {
          if (shared !== false) {
            tooltipItems = getTooltipItemsByFindData(geometry, point, title, tooltipCfg);
          } else {
            tooltipItems = getTooltipItemsByHitShape(geometry, point, title, tooltipCfg);
          }
        }
        if (tooltipItems.length) {
          if (reversed) {
            tooltipItems.reverse();
          }
          result.push(tooltipItems);
        }
      }
    }
  } catch (e_4_1) {
    e_4 = { error: e_4_1 };
  } finally {
    try {
      if (geometries_1_1 && !geometries_1_1.done && (_a = geometries_1.return)) _a.call(geometries_1);
    } finally {
      if (e_4) throw e_4.error;
    }
  }
  return result;
}
function findItemsFromViewRecurisive(view, point, tooltipCfg) {
  var e_5, _a;
  var result = findItemsFromView(view, point, tooltipCfg);
  try {
    for (var _b = __values2(view.views), _c = _b.next(); !_c.done; _c = _b.next()) {
      var childView = _c.value;
      result = result.concat(findItemsFromView(childView, point, tooltipCfg));
    }
  } catch (e_5_1) {
    e_5 = { error: e_5_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return result;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/padding.js
import { __read as __read6, __spreadArray as __spreadArray3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray5, isNumber as isNumber5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isAutoPadding(padding) {
  return !isNumber5(padding) && !isArray5(padding);
}
function parsePadding(padding) {
  if (padding === void 0) {
    padding = 0;
  }
  var paddingArray = isArray5(padding) ? padding : [padding];
  switch (paddingArray.length) {
    case 0:
      paddingArray = [0, 0, 0, 0];
      break;
    case 1:
      paddingArray = new Array(4).fill(paddingArray[0]);
      break;
    case 2:
      paddingArray = __spreadArray3(__spreadArray3([], __read6(paddingArray), false), __read6(paddingArray), false);
      break;
    case 3:
      paddingArray = __spreadArray3(__spreadArray3([], __read6(paddingArray), false), [paddingArray[1]], false);
      break;
    default:
      paddingArray = paddingArray.slice(0, 4);
      break;
  }
  return paddingArray;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/index.js
var LOAD_COMPONENT_CONTROLLERS = {};
function registerComponentController(name, plugin) {
  LOAD_COMPONENT_CONTROLLERS[name] = plugin;
}
function getComponentControllerNames() {
  return Object.keys(LOAD_COMPONENT_CONTROLLERS);
}
function getComponentController(name) {
  return LOAD_COMPONENT_CONTROLLERS[name];
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/coordinate.js
import {
  __assign as __assign5,
  __read as __read7,
  __spreadArray as __spreadArray4
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each8, isNil as isNil4, some } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var CoordinateController = (function() {
  function CoordinateController2(option) {
    this.option = this.wrapperOption(option);
  }
  CoordinateController2.prototype.update = function(option) {
    this.option = this.wrapperOption(option);
    return this;
  };
  CoordinateController2.prototype.hasAction = function(actionName) {
    var actions = this.option.actions;
    return some(actions, function(action) {
      return action[0] === actionName;
    });
  };
  CoordinateController2.prototype.create = function(start, end) {
    var _a = this.option,
      type = _a.type,
      cfg = _a.cfg;
    var isTheta = type === 'theta';
    var props = __assign5({ start, end }, cfg);
    var C = getCoordinate(isTheta ? 'polar' : type);
    this.coordinate = new C(props);
    this.coordinate.type = type;
    if (isTheta) {
      if (!this.hasAction('transpose')) {
        this.transpose();
      }
    }
    this.execActions();
    return this.coordinate;
  };
  CoordinateController2.prototype.adjust = function(start, end) {
    this.coordinate.update({ start, end });
    this.coordinate.resetMatrix();
    this.execActions(['scale', 'rotate', 'translate']);
    return this.coordinate;
  };
  CoordinateController2.prototype.rotate = function(angle) {
    this.option.actions.push(['rotate', angle]);
    return this;
  };
  CoordinateController2.prototype.reflect = function(dim) {
    this.option.actions.push(['reflect', dim]);
    return this;
  };
  CoordinateController2.prototype.scale = function(sx, sy) {
    this.option.actions.push(['scale', sx, sy]);
    return this;
  };
  CoordinateController2.prototype.transpose = function() {
    this.option.actions.push(['transpose']);
    return this;
  };
  CoordinateController2.prototype.getOption = function() {
    return this.option;
  };
  CoordinateController2.prototype.getCoordinate = function() {
    return this.coordinate;
  };
  CoordinateController2.prototype.wrapperOption = function(option) {
    return __assign5({ type: 'rect', actions: [], cfg: {} }, option);
  };
  CoordinateController2.prototype.execActions = function(includeActions) {
    var _this = this;
    var actions = this.option.actions;
    each8(actions, function(action) {
      var _a;
      var _b = __read7(action),
        actionName = _b[0],
        args = _b.slice(1);
      var shouldExec = isNil4(includeActions) ? true : includeActions.includes(actionName);
      if (shouldExec) {
        (_a = _this.coordinate)[actionName].apply(_a, __spreadArray4([], __read7(args), false));
      }
    });
  };
  return CoordinateController2;
})();
var coordinate_default = CoordinateController; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/event.js
var Event2 = (function() {
  function Event3(view, gEvent, data) {
    this.view = view;
    this.gEvent = gEvent;
    this.data = data;
    this.type = gEvent.type;
  }
  Event3.fromData = function(view, type, data) {
    return new Event3(view, new Event(type, {}), data);
  };
  Object.defineProperty(Event3.prototype, 'target', {
    get: function() {
      return this.gEvent.target;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Event3.prototype, 'event', {
    get: function() {
      return this.gEvent.originalEvent;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Event3.prototype, 'x', {
    get: function() {
      return this.gEvent.x;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Event3.prototype, 'y', {
    get: function() {
      return this.gEvent.y;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Event3.prototype, 'clientX', {
    get: function() {
      return this.gEvent.clientX;
    },
    enumerable: false,
    configurable: true
  });
  Object.defineProperty(Event3.prototype, 'clientY', {
    get: function() {
      return this.gEvent.clientY;
    },
    enumerable: false,
    configurable: true
  });
  Event3.prototype.toString = function() {
    return '[Event (type='.concat(this.type, ')]');
  };
  Event3.prototype.clone = function() {
    return new Event3(this.view, this.gEvent, this.data);
  };
  return Event3;
})();
var event_default = Event2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/layout/index.js
function defaultLayout(view) {
  var axis = view.getController('axis');
  var legend = view.getController('legend');
  var annotation = view.getController('annotation');
  var slider = view.getController('slider');
  var scrollbar = view.getController('scrollbar');
  [axis, slider, scrollbar, legend, annotation].forEach(function(controller) {
    if (controller) {
      controller.layout();
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/util/scale-pool.js
import {
  deepMix as deepMix5,
  each as each9,
  get as get8,
  isNumber as isNumber6,
  last
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ScalePool = (function() {
  function ScalePool2() {
    this.scales = /* @__PURE__ */ new Map();
    this.syncScales = /* @__PURE__ */ new Map();
  }
  ScalePool2.prototype.createScale = function(field, data, scaleDef, key) {
    var finalScaleDef = scaleDef;
    var cacheScaleMeta = this.getScaleMeta(key);
    if (data.length === 0 && cacheScaleMeta) {
      var cacheScale = cacheScaleMeta.scale;
      var cacheScaleDef = { type: cacheScale.type };
      if (cacheScale.isCategory) {
        cacheScaleDef.values = cacheScale.values;
      }
      finalScaleDef = deepMix5(cacheScaleDef, cacheScaleMeta.scaleDef, scaleDef);
    }
    var scale = createScaleByField(field, data, finalScaleDef);
    this.cacheScale(scale, scaleDef, key);
    return scale;
  };
  ScalePool2.prototype.sync = function(coordinate, theme) {
    var _this = this;
    this.syncScales.forEach(function(scaleKeys, syncKey) {
      var min2 = Number.MAX_SAFE_INTEGER;
      var max3 = Number.MIN_SAFE_INTEGER;
      var values3 = [];
      each9(scaleKeys, function(key) {
        var scale = _this.getScale(key);
        max3 = isNumber6(scale.max) ? Math.max(max3, scale.max) : max3;
        min2 = isNumber6(scale.min) ? Math.min(min2, scale.min) : min2;
        each9(scale.values, function(v) {
          if (!values3.includes(v)) {
            values3.push(v);
          }
        });
      });
      each9(scaleKeys, function(key) {
        var scale = _this.getScale(key);
        if (scale.isContinuous) {
          scale.change({ min: min2, max: max3, values: values3 });
        } else if (scale.isCategory) {
          var range = scale.range;
          var cacheScaleMeta = _this.getScaleMeta(key);
          if (values3 && !get8(cacheScaleMeta, ['scaleDef', 'range'])) {
            range = getDefaultCategoryScaleRange(deepMix5({}, scale, { values: values3 }), coordinate, theme);
          }
          scale.change({ values: values3, range });
        }
      });
    });
  };
  ScalePool2.prototype.cacheScale = function(scale, scaleDef, key) {
    var sm = this.getScaleMeta(key);
    if (sm && sm.scale.type === scale.type) {
      syncScale(sm.scale, scale);
      sm.scaleDef = scaleDef;
    } else {
      sm = { key, scale, scaleDef };
      this.scales.set(key, sm);
    }
    var syncKey = this.getSyncKey(sm);
    sm.syncKey = syncKey;
    this.removeFromSyncScales(key);
    if (syncKey) {
      var scaleKeys = this.syncScales.get(syncKey);
      if (!scaleKeys) {
        scaleKeys = [];
        this.syncScales.set(syncKey, scaleKeys);
      }
      scaleKeys.push(key);
    }
  };
  ScalePool2.prototype.getScale = function(key) {
    var scaleMeta = this.getScaleMeta(key);
    if (!scaleMeta) {
      var field = last(key.split('-'));
      var scaleKeys = this.syncScales.get(field);
      if (scaleKeys && scaleKeys.length) {
        scaleMeta = this.getScaleMeta(scaleKeys[0]);
      }
    }
    return scaleMeta && scaleMeta.scale;
  };
  ScalePool2.prototype.deleteScale = function(key) {
    var scaleMeta = this.getScaleMeta(key);
    if (scaleMeta) {
      var syncKey = scaleMeta.syncKey;
      var scaleKeys = this.syncScales.get(syncKey);
      if (scaleKeys && scaleKeys.length) {
        var idx = scaleKeys.indexOf(key);
        if (idx !== -1) {
          scaleKeys.splice(idx, 1);
        }
      }
    }
    this.scales.delete(key);
  };
  ScalePool2.prototype.clear = function() {
    this.scales.clear();
    this.syncScales.clear();
  };
  ScalePool2.prototype.removeFromSyncScales = function(key) {
    var _this = this;
    this.syncScales.forEach(function(scaleKeys, syncKey) {
      var idx = scaleKeys.indexOf(key);
      if (idx !== -1) {
        scaleKeys.splice(idx, 1);
        if (scaleKeys.length === 0) {
          _this.syncScales.delete(syncKey);
        }
        return false;
      }
    });
  };
  ScalePool2.prototype.getSyncKey = function(sm) {
    var scale = sm.scale,
      scaleDef = sm.scaleDef;
    var field = scale.field;
    var sync = get8(scaleDef, ['sync']);
    return sync === true ? field : sync === false ? void 0 : sync;
  };
  ScalePool2.prototype.getScaleMeta = function(key) {
    return this.scales.get(key);
  };
  return ScalePool2;
})(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/layout/padding-cal.js
import { __read as __read8, __spreadArray as __spreadArray5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var PaddingCal = (function() {
  function PaddingCal2(top, right, bottom, left) {
    if (top === void 0) {
      top = 0;
    }
    if (right === void 0) {
      right = 0;
    }
    if (bottom === void 0) {
      bottom = 0;
    }
    if (left === void 0) {
      left = 0;
    }
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
  PaddingCal2.instance = function(top, right, bottom, left) {
    if (top === void 0) {
      top = 0;
    }
    if (right === void 0) {
      right = 0;
    }
    if (bottom === void 0) {
      bottom = 0;
    }
    if (left === void 0) {
      left = 0;
    }
    return new PaddingCal2(top, right, bottom, left);
  };
  PaddingCal2.prototype.max = function(padding) {
    var _a = __read8(padding, 4),
      top = _a[0],
      right = _a[1],
      bottom = _a[2],
      left = _a[3];
    this.top = Math.max(this.top, top);
    this.right = Math.max(this.right, right);
    this.bottom = Math.max(this.bottom, bottom);
    this.left = Math.max(this.left, left);
    return this;
  };
  PaddingCal2.prototype.shrink = function(padding) {
    var _a = __read8(padding, 4),
      top = _a[0],
      right = _a[1],
      bottom = _a[2],
      left = _a[3];
    this.top += top;
    this.right += right;
    this.bottom += bottom;
    this.left += left;
    return this;
  };
  PaddingCal2.prototype.inc = function(bbox, direction) {
    var width = bbox.width,
      height = bbox.height;
    switch (direction) {
      case DIRECTION.TOP:
      case DIRECTION.TOP_LEFT:
      case DIRECTION.TOP_RIGHT:
        this.top += height;
        break;
      case DIRECTION.RIGHT:
      case DIRECTION.RIGHT_TOP:
      case DIRECTION.RIGHT_BOTTOM:
        this.right += width;
        break;
      case DIRECTION.BOTTOM:
      case DIRECTION.BOTTOM_LEFT:
      case DIRECTION.BOTTOM_RIGHT:
        this.bottom += height;
        break;
      case DIRECTION.LEFT:
      case DIRECTION.LEFT_TOP:
      case DIRECTION.LEFT_BOTTOM:
        this.left += width;
        break;
      default:
        break;
    }
    return this;
  };
  PaddingCal2.prototype.getPadding = function() {
    return [this.top, this.right, this.bottom, this.left];
  };
  PaddingCal2.prototype.clone = function() {
    return new (PaddingCal2.bind.apply(PaddingCal2, __spreadArray5([void 0], __read8(this.getPadding()), false)))();
  };
  return PaddingCal2;
})(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/layout/auto.js
import { __read as __read9, __spreadArray as __spreadArray6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each10 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function calculatePadding(view) {
  var padding = view.padding;
  if (!isAutoPadding(padding)) {
    return new (PaddingCal.bind.apply(PaddingCal, __spreadArray6([void 0], __read9(parsePadding(padding)), false)))();
  }
  var viewBBox = view.viewBBox;
  var paddingCal = new PaddingCal();
  var axisComponents = [];
  var paddingComponents = [];
  var otherComponents = [];
  each10(view.getComponents(), function(co) {
    var type = co.type;
    if (type === COMPONENT_TYPE.AXIS) {
      axisComponents.push(co);
    } else if ([COMPONENT_TYPE.LEGEND, COMPONENT_TYPE.SLIDER, COMPONENT_TYPE.SCROLLBAR].includes(type)) {
      paddingComponents.push(co);
    } else if (type !== COMPONENT_TYPE.GRID && type !== COMPONENT_TYPE.TOOLTIP) {
      otherComponents.push(co);
    }
  });
  each10(axisComponents, function(co) {
    var component = co.component;
    var bboxObject = component.getLayoutBBox();
    var componentBBox = new BBox(bboxObject.x, bboxObject.y, bboxObject.width, bboxObject.height);
    var exceed = componentBBox.exceed(viewBBox);
    paddingCal.max(exceed);
  });
  each10(paddingComponents, function(co) {
    var component = co.component,
      direction = co.direction;
    var bboxObject = component.getLayoutBBox();
    var componentPadding = component.get('padding');
    var componentBBox = new BBox(bboxObject.x, bboxObject.y, bboxObject.width, bboxObject.height).expand(
      componentPadding
    );
    paddingCal.inc(componentBBox, direction);
  });
  each10(otherComponents, function(co) {
    var component = co.component,
      direction = co.direction;
    var bboxObject = component.getLayoutBBox();
    var componentBBox = new BBox(bboxObject.x, bboxObject.y, bboxObject.width, bboxObject.height);
    paddingCal.inc(componentBBox, direction);
  });
  return paddingCal;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/util/sync-view-padding.js
function defaultSyncViewPadding(chart, views, PC) {
  var syncPadding = PC.instance();
  views.forEach(function(v) {
    v.autoPadding = syncPadding.max(v.autoPadding.getPadding());
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/view.js
var View = (function(_super) {
  __extends4(View2, _super);
  function View2(props) {
    var _this = _super.call(this, { visible: props.visible }) || this;
    _this.views = [];
    _this.geometries = [];
    _this.controllers = [];
    _this.interactions = {};
    _this.limitInPlot = false;
    _this.options = { data: [], animate: true };
    _this.usedControllers = getComponentControllerNames();
    _this.scalePool = new ScalePool();
    _this.layoutFunc = defaultLayout;
    _this.isPreMouseInPlot = false;
    _this.isDataChanged = false;
    _this.isCoordinateChanged = false;
    _this.createdScaleKeys = /* @__PURE__ */ new Map();
    _this.onCanvasEvent = function(evt) {
      var name = evt.name;
      if (!name.includes(':')) {
        var e = _this.createViewEvent(evt);
        _this.doPlotEvent(e);
        _this.emit(name, e);
      }
    };
    _this.onDelegateEvents = function(evt) {
      var name = evt.name;
      if (!name.includes(':')) {
        return;
      }
      var e = _this.createViewEvent(evt);
      _this.emit(name, e);
    };
    var _a = props.id,
      id = _a === void 0 ? uniqueId('view') : _a,
      parent = props.parent,
      canvas = props.canvas,
      backgroundGroup = props.backgroundGroup,
      middleGroup = props.middleGroup,
      foregroundGroup = props.foregroundGroup,
      _b = props.region,
      region = _b === void 0 ? { start: { x: 0, y: 0 }, end: { x: 1, y: 1 } } : _b,
      padding = props.padding,
      appendPadding = props.appendPadding,
      theme = props.theme,
      options = props.options,
      limitInPlot2 = props.limitInPlot,
      syncViewPadding = props.syncViewPadding;
    _this.parent = parent;
    _this.canvas = canvas;
    _this.backgroundGroup = backgroundGroup;
    _this.middleGroup = middleGroup;
    _this.foregroundGroup = foregroundGroup;
    _this.region = region;
    _this.padding = padding;
    _this.appendPadding = appendPadding;
    _this.options = __assign6(__assign6({}, _this.options), options);
    _this.limitInPlot = limitInPlot2;
    _this.id = id;
    _this.syncViewPadding = syncViewPadding;
    _this.themeObject = isObject2(theme) ? deepMix6({}, getTheme('default'), createTheme(theme)) : getTheme(theme);
    _this.init();
    return _this;
  }
  View2.prototype.setLayout = function(layout2) {
    this.layoutFunc = layout2;
  };
  View2.prototype.init = function() {
    this.calculateViewBBox();
    this.initEvents();
    this.initComponentController();
    this.initOptions();
  };
  View2.prototype.render = function(isUpdate, payload) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    this.emit(VIEW_LIFE_CIRCLE.BEFORE_RENDER, event_default.fromData(this, VIEW_LIFE_CIRCLE.BEFORE_RENDER, payload));
    this.paint(isUpdate);
    this.emit(VIEW_LIFE_CIRCLE.AFTER_RENDER, event_default.fromData(this, VIEW_LIFE_CIRCLE.AFTER_RENDER, payload));
    if (this.visible === false) {
      this.changeVisible(false);
    }
  };
  View2.prototype.clear = function() {
    var _this = this;
    this.emit(VIEW_LIFE_CIRCLE.BEFORE_CLEAR);
    this.filteredData = [];
    this.coordinateInstance = void 0;
    this.isDataChanged = false;
    this.isCoordinateChanged = false;
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      geometries[i].clear();
      geometries[i].container.remove(true);
      geometries[i].labelsContainer.remove(true);
    }
    this.geometries = [];
    var controllers = this.controllers;
    for (var i = 0; i < controllers.length; i++) {
      if (controllers[i].name === 'annotation') {
        controllers[i].clear(true);
      } else {
        controllers[i].clear();
      }
    }
    this.createdScaleKeys.forEach(function(v, k) {
      _this.getRootView().scalePool.deleteScale(k);
    });
    this.createdScaleKeys.clear();
    var views = this.views;
    for (var i = 0; i < views.length; i++) {
      views[i].clear();
    }
    this.emit(VIEW_LIFE_CIRCLE.AFTER_CLEAR);
  };
  View2.prototype.destroy = function() {
    this.emit(VIEW_LIFE_CIRCLE.BEFORE_DESTROY);
    var interactions = this.interactions;
    each11(interactions, function(interaction) {
      if (interaction) {
        interaction.destroy();
      }
    });
    this.clear();
    var controllers = this.controllers;
    for (var i = 0, len = controllers.length; i < len; i++) {
      var controller = controllers[i];
      controller.destroy();
    }
    this.backgroundGroup.remove(true);
    this.middleGroup.remove(true);
    this.foregroundGroup.remove(true);
    _super.prototype.destroy.call(this);
  };
  View2.prototype.changeVisible = function(visible) {
    _super.prototype.changeVisible.call(this, visible);
    var geometries = this.geometries;
    for (var i = 0, len = geometries.length; i < len; i++) {
      var geometry = geometries[i];
      geometry.changeVisible(visible);
    }
    var controllers = this.controllers;
    for (var i = 0, len = controllers.length; i < len; i++) {
      var controller = controllers[i];
      controller.changeVisible(visible);
    }
    this.foregroundGroup.set('visible', visible);
    this.middleGroup.set('visible', visible);
    this.backgroundGroup.set('visible', visible);
    this.getCanvas().draw();
    return this;
  };
  View2.prototype.data = function(data) {
    set(this.options, 'data', data);
    this.isDataChanged = true;
    return this;
  };
  View2.prototype.source = function(data) {
    console.warn('This method will be removed at G2 V4.1. Please use chart.data() instead.');
    return this.data(data);
  };
  View2.prototype.filter = function(field, condition) {
    if (isFunction3(condition)) {
      set(this.options, ['filters', field], condition);
      return this;
    }
    if (!condition && get9(this.options, ['filters', field])) {
      delete this.options.filters[field];
    }
    return this;
  };
  View2.prototype.axis = function(field, axisOption) {
    if (isBoolean2(field)) {
      set(this.options, ['axes'], field);
    } else {
      set(this.options, ['axes', field], axisOption);
    }
    return this;
  };
  View2.prototype.legend = function(field, legendOption) {
    if (isBoolean2(field)) {
      set(this.options, ['legends'], field);
    } else if (isString4(field)) {
      set(this.options, ['legends', field], legendOption);
      if (
        isPlainObject2(legendOption) &&
        (legendOption === null || legendOption === void 0 ? void 0 : legendOption.selected)
      ) {
        set(this.options, ['filters', field], function(name) {
          var _a;
          return (_a = legendOption === null || legendOption === void 0 ? void 0 : legendOption.selected[name]) !==
            null && _a !== void 0
            ? _a
            : true;
        });
      }
    } else {
      set(this.options, ['legends'], field);
    }
    return this;
  };
  View2.prototype.scale = function(field, scaleOption) {
    var _this = this;
    if (isString4(field)) {
      set(this.options, ['scales', field], scaleOption);
    } else if (isObject2(field)) {
      each11(field, function(v, k) {
        set(_this.options, ['scales', k], v);
      });
    }
    return this;
  };
  View2.prototype.tooltip = function(cfg) {
    set(this.options, 'tooltip', cfg);
    return this;
  };
  View2.prototype.annotation = function() {
    return this.getController('annotation');
  };
  View2.prototype.guide = function() {
    console.warn('This method will be removed at G2 V4.1. Please use chart.annotation() instead.');
    return this.annotation();
  };
  View2.prototype.coordinate = function(type, coordinateCfg) {
    if (isString4(type)) {
      set(this.options, 'coordinate', { type, cfg: coordinateCfg });
    } else {
      set(this.options, 'coordinate', type);
    }
    this.coordinateController.update(this.options.coordinate);
    return this.coordinateController;
  };
  View2.prototype.coord = function(type, coordinateCfg) {
    console.warn('This method will be removed at G2 V4.1. Please use chart.coordinate() instead.');
    return this.coordinate(type, coordinateCfg);
  };
  View2.prototype.facet = function(type, cfg) {
    if (this.facetInstance) {
      this.facetInstance.destroy();
    }
    var Ctor = getFacet(type);
    if (!Ctor) {
      throw new Error("facet '".concat(type, "' is not exist!"));
    }
    this.facetInstance = new Ctor(this, __assign6(__assign6({}, cfg), { type }));
    return this;
  };
  View2.prototype.animate = function(status) {
    set(this.options, 'animate', status);
    return this;
  };
  View2.prototype.updateOptions = function(options) {
    this.clear();
    mix2(this.options, options);
    this.views.forEach(function(view) {
      return view.destroy();
    });
    this.views = [];
    this.initOptions();
    this.coordinateBBox = this.viewBBox;
    return this;
  };
  View2.prototype.option = function(name, opt) {
    if (View2.prototype[name]) {
      throw new Error(`Can't use built in variable name "`.concat(name, '", please change another one.'));
    }
    set(this.options, name, opt);
    return this;
  };
  View2.prototype.theme = function(theme) {
    this.themeObject = isObject2(theme) ? deepMix6({}, this.themeObject, createTheme(theme)) : getTheme(theme);
    return this;
  };
  View2.prototype.interaction = function(name, cfg) {
    var existInteraction = this.interactions[name];
    if (existInteraction) {
      existInteraction.destroy();
    }
    var interaction = createInteraction(name, this, cfg);
    if (interaction) {
      interaction.init();
      this.interactions[name] = interaction;
    }
    return this;
  };
  View2.prototype.removeInteraction = function(name) {
    var existInteraction = this.interactions[name];
    if (existInteraction) {
      existInteraction.destroy();
      this.interactions[name] = void 0;
    }
  };
  View2.prototype.changeData = function(data) {
    this.isDataChanged = true;
    this.emit(
      VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA,
      event_default.fromData(this, VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA, null)
    );
    this.data(data);
    this.paint(true);
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      view.changeData(data);
    }
    this.emit(
      VIEW_LIFE_CIRCLE.AFTER_CHANGE_DATA,
      event_default.fromData(this, VIEW_LIFE_CIRCLE.AFTER_CHANGE_DATA, null)
    );
  };
  View2.prototype.createView = function(cfg) {
    if (this.parent && this.parent.parent) {
      console.warn('The view nesting recursive feature will be removed at G2 V4.1. Please avoid to use it.');
    }
    var sharedOptions = {
      data: this.options.data,
      scales: clone2(this.options.scales),
      axes: clone2(this.options.axes),
      coordinate: clone2(this.coordinateController.getOption()),
      tooltip: clone2(this.options.tooltip),
      legends: clone2(this.options.legends),
      animate: this.options.animate,
      visible: this.visible
    };
    var v = new View2(
      __assign6(
        __assign6(
          {
            parent: this,
            canvas: this.canvas,
            backgroundGroup: this.backgroundGroup.addGroup({ zIndex: GROUP_Z_INDEX.BG }),
            middleGroup: this.middleGroup.addGroup({ zIndex: GROUP_Z_INDEX.MID }),
            foregroundGroup: this.foregroundGroup.addGroup({ zIndex: GROUP_Z_INDEX.FORE }),
            theme: this.themeObject,
            padding: this.padding
          },
          cfg
        ),
        { options: __assign6(__assign6({}, sharedOptions), get9(cfg, 'options', {})) }
      )
    );
    this.views.push(v);
    return v;
  };
  View2.prototype.view = function(cfg) {
    console.warn('This method will be removed at G2 V4.1. Please use chart.createView() instead.');
    return this.createView(cfg);
  };
  View2.prototype.removeView = function(view) {
    var removedView = remove(this.views, function(v) {
      return v === view;
    })[0];
    if (removedView) {
      removedView.destroy();
    }
    return removedView;
  };
  View2.prototype.getCoordinate = function() {
    return this.coordinateInstance;
  };
  View2.prototype.getTheme = function() {
    return this.themeObject;
  };
  View2.prototype.getXScale = function() {
    var g = this.geometries[0];
    return g ? g.getXScale() : null;
  };
  View2.prototype.getYScales = function() {
    var tmpMap = {};
    var yScales = [];
    this.geometries.forEach(function(g) {
      var yScale = g.getYScale();
      var field = yScale.field;
      if (!tmpMap[field]) {
        tmpMap[field] = true;
        yScales.push(yScale);
      }
    });
    return yScales;
  };
  View2.prototype.getScalesByDim = function(dimType) {
    var geometries = this.geometries;
    var scales = {};
    for (var i = 0, len = geometries.length; i < len; i++) {
      var geometry = geometries[i];
      var scale = dimType === 'x' ? geometry.getXScale() : geometry.getYScale();
      if (scale && !scales[scale.field]) {
        scales[scale.field] = scale;
      }
    }
    return scales;
  };
  View2.prototype.getScale = function(field, key) {
    var defaultKey = key ? key : this.getScaleKey(field);
    return this.getRootView().scalePool.getScale(defaultKey);
  };
  View2.prototype.getScaleByField = function(field, key) {
    return this.getScale(field, key);
  };
  View2.prototype.getOptions = function() {
    return this.options;
  };
  View2.prototype.getData = function() {
    return this.filteredData;
  };
  View2.prototype.getOriginalData = function() {
    return this.options.data;
  };
  View2.prototype.getPadding = function() {
    return this.autoPadding.getPadding();
  };
  View2.prototype.getGeometries = function() {
    return this.geometries;
  };
  View2.prototype.getElements = function() {
    return reduce(
      this.geometries,
      function(elements, geometry) {
        return elements.concat(geometry.getElements());
      },
      []
    );
  };
  View2.prototype.getElementsBy = function(condition) {
    return this.getElements().filter(function(el) {
      return condition(el);
    });
  };
  View2.prototype.getLayer = function(layer) {
    return layer === LAYER.BG
      ? this.backgroundGroup
      : layer === LAYER.MID
      ? this.middleGroup
      : layer === LAYER.FORE
      ? this.foregroundGroup
      : this.foregroundGroup;
  };
  View2.prototype.isPointInPlot = function(point) {
    return isPointInCoordinate(this.getCoordinate(), point);
  };
  View2.prototype.getLegendAttributes = function() {
    return flatten(
      this.geometries.map(function(g) {
        return g.getGroupAttributes();
      })
    );
  };
  View2.prototype.getGroupScales = function() {
    var scales = this.geometries.map(function(g) {
      return g.getGroupScales();
    });
    return uniq(flatten(scales));
  };
  View2.prototype.getCanvas = function() {
    return this.getRootView().canvas;
  };
  View2.prototype.getRootView = function() {
    var v = this;
    while (true) {
      if (v.parent) {
        v = v.parent;
        continue;
      }
      break;
    }
    return v;
  };
  View2.prototype.getXY = function(data) {
    var coordinate = this.getCoordinate();
    var xScales = this.getScalesByDim('x');
    var yScales = this.getScalesByDim('y');
    var x;
    var y;
    each11(data, function(value, key) {
      if (xScales[key]) {
        x = xScales[key].scale(value);
      }
      if (yScales[key]) {
        y = yScales[key].scale(value);
      }
    });
    if (!isNil5(x) && !isNil5(y)) {
      return coordinate.convert({ x, y });
    }
  };
  View2.prototype.getController = function(name) {
    return find2(this.controllers, function(c) {
      return c.name === name;
    });
  };
  View2.prototype.showTooltip = function(point) {
    var tooltip = this.getController('tooltip');
    if (tooltip) {
      tooltip.showTooltip(point);
    }
    return this;
  };
  View2.prototype.hideTooltip = function() {
    var tooltip = this.getController('tooltip');
    if (tooltip) {
      tooltip.hideTooltip();
    }
    return this;
  };
  View2.prototype.lockTooltip = function() {
    var tooltip = this.getController('tooltip');
    if (tooltip) {
      tooltip.lockTooltip();
    }
    return this;
  };
  View2.prototype.unlockTooltip = function() {
    var tooltip = this.getController('tooltip');
    if (tooltip) {
      tooltip.unlockTooltip();
    }
    return this;
  };
  View2.prototype.isTooltipLocked = function() {
    var tooltip = this.getController('tooltip');
    return tooltip && tooltip.isTooltipLocked();
  };
  View2.prototype.getTooltipItems = function(point) {
    var tooltip = this.getController('tooltip');
    return tooltip ? tooltip.getTooltipItems(point) : [];
  };
  View2.prototype.getSnapRecords = function(point) {
    var geometries = this.geometries;
    var rst = [];
    for (var i = 0, len = geometries.length; i < len; i++) {
      var geom = geometries[i];
      var dataArray = geom.dataArray;
      geom.sort(dataArray);
      var record = void 0;
      for (var j = 0, dataLen = dataArray.length; j < dataLen; j++) {
        var data = dataArray[j];
        record = findDataByPoint(point, data, geom);
        if (record) {
          rst.push(record);
        }
      }
    }
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      var snapRecords = view.getSnapRecords(point);
      rst = rst.concat(snapRecords);
    }
    return rst;
  };
  View2.prototype.getComponents = function() {
    var components = [];
    var controllers = this.controllers;
    for (var i = 0, len = controllers.length; i < len; i++) {
      var controller = controllers[i];
      components = components.concat(controller.getComponents());
    }
    return components;
  };
  View2.prototype.filterData = function(data) {
    var filters = this.options.filters;
    if (size(filters) === 0) {
      return data;
    }
    return filter2(data, function(datum, idx) {
      var fields = Object.keys(filters);
      return fields.every(function(field) {
        var condition = filters[field];
        return condition(datum[field], datum, idx);
      });
    });
  };
  View2.prototype.filterFieldData = function(field, data) {
    var filters = this.options.filters;
    var condition = get9(filters, field);
    if (isUndefined(condition)) {
      return data;
    }
    return data.filter(function(datum, idx) {
      return condition(datum[field], datum, idx);
    });
  };
  View2.prototype.adjustCoordinate = function() {
    var _a = this.getCoordinate(),
      curStart = _a.start,
      curEnd = _a.end;
    var start = this.coordinateBBox.bl;
    var end = this.coordinateBBox.tr;
    if (isEqual(curStart, start) && isEqual(curEnd, end)) {
      this.isCoordinateChanged = false;
      return;
    }
    this.isCoordinateChanged = true;
    this.coordinateInstance = this.coordinateController.adjust(start, end);
  };
  View2.prototype.paint = function(isUpdate) {
    this.renderDataRecursive(isUpdate);
    this.syncScale();
    this.emit(VIEW_LIFE_CIRCLE.BEFORE_PAINT);
    this.renderPaddingRecursive(isUpdate);
    this.renderLayoutRecursive(isUpdate);
    this.renderBackgroundStyleShape();
    this.renderPaintRecursive(isUpdate);
    this.emit(VIEW_LIFE_CIRCLE.AFTER_PAINT);
    this.isDataChanged = false;
  };
  View2.prototype.renderBackgroundStyleShape = function() {
    if (this.parent) {
      return;
    }
    var background = get9(this.themeObject, 'background');
    if (background) {
      if (!this.backgroundStyleRectShape) {
        this.backgroundStyleRectShape = this.backgroundGroup.addShape('rect', {
          attrs: {},
          zIndex: -1,
          capture: false
        });
        this.backgroundStyleRectShape.toBack();
      }
      var _a = this.viewBBox,
        x = _a.x,
        y = _a.y,
        width = _a.width,
        height = _a.height;
      this.backgroundStyleRectShape.attr({ fill: background, x, y, width, height });
    } else {
      if (this.backgroundStyleRectShape) {
        this.backgroundStyleRectShape.remove(true);
        this.backgroundStyleRectShape = void 0;
      }
    }
  };
  View2.prototype.renderPaddingRecursive = function(isUpdate) {
    this.calculateViewBBox();
    this.adjustCoordinate();
    this.initComponents(isUpdate);
    this.autoPadding = calculatePadding(this).shrink(parsePadding(this.appendPadding));
    this.coordinateBBox = this.viewBBox.shrink(this.autoPadding.getPadding());
    this.adjustCoordinate();
    var tooltipController = this.controllers.find(function(c) {
      return c.name === 'tooltip';
    });
    tooltipController.update();
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      view.renderPaddingRecursive(isUpdate);
    }
  };
  View2.prototype.renderLayoutRecursive = function(isUpdate) {
    var syncViewPaddingFn =
      this.syncViewPadding === true
        ? defaultSyncViewPadding
        : isFunction3(this.syncViewPadding)
        ? this.syncViewPadding
        : void 0;
    if (syncViewPaddingFn) {
      syncViewPaddingFn(this, this.views, PaddingCal);
      this.views.forEach(function(v) {
        v.coordinateBBox = v.viewBBox.shrink(v.autoPadding.getPadding());
        v.adjustCoordinate();
      });
    }
    this.doLayout();
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      view.renderLayoutRecursive(isUpdate);
    }
  };
  View2.prototype.renderPaintRecursive = function(isUpdate) {
    var middleGroup = this.middleGroup;
    if (this.limitInPlot) {
      var _a = getCoordinateClipCfg(this.coordinateInstance),
        type = _a.type,
        attrs = _a.attrs;
      middleGroup.setClip({ type, attrs });
    } else {
      middleGroup.setClip(void 0);
    }
    this.paintGeometries(isUpdate);
    this.renderComponents(isUpdate);
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      view.renderPaintRecursive(isUpdate);
    }
  };
  View2.prototype.createScale = function(field, data, scaleDef, key) {
    var currentScaleDef = get9(this.options.scales, [field]);
    var mergedScaleDef = __assign6(__assign6({}, currentScaleDef), scaleDef);
    if (this.parent) {
      return this.parent.createScale(field, data, mergedScaleDef, key);
    }
    return this.scalePool.createScale(field, data, mergedScaleDef, key);
  };
  View2.prototype.renderDataRecursive = function(isUpdate) {
    this.doFilterData();
    this.createCoordinate();
    this.initGeometries(isUpdate);
    this.renderFacet(isUpdate);
    var views = this.views;
    for (var i = 0, len = views.length; i < len; i++) {
      var view = views[i];
      view.renderDataRecursive(isUpdate);
    }
  };
  View2.prototype.calculateViewBBox = function() {
    var x;
    var y;
    var width;
    var height;
    if (this.parent) {
      var bbox = this.parent.coordinateBBox;
      x = bbox.x;
      y = bbox.y;
      width = bbox.width;
      height = bbox.height;
    } else {
      x = 0;
      y = 0;
      width = this.canvas.get('width');
      height = this.canvas.get('height');
    }
    var _a = this.region,
      start = _a.start,
      end = _a.end;
    var viewBBox = new BBox(
      x + width * start.x,
      y + height * start.y,
      width * (end.x - start.x),
      height * (end.y - start.y)
    );
    if (!this.viewBBox || !this.viewBBox.isEqual(viewBBox)) {
      this.viewBBox = new BBox(
        x + width * start.x,
        y + height * start.y,
        width * (end.x - start.x),
        height * (end.y - start.y)
      );
    }
    this.coordinateBBox = this.viewBBox;
  };
  View2.prototype.initEvents = function() {
    this.foregroundGroup.on('*', this.onDelegateEvents);
    this.middleGroup.on('*', this.onDelegateEvents);
    this.backgroundGroup.on('*', this.onDelegateEvents);
    this.canvas.on('*', this.onCanvasEvent);
  };
  View2.prototype.initComponentController = function() {
    var usedControllers = this.usedControllers;
    for (var i = 0, len = usedControllers.length; i < len; i++) {
      var controllerName = usedControllers[i];
      var Ctor = getComponentController(controllerName);
      if (Ctor) {
        this.controllers.push(new Ctor(this));
      }
    }
  };
  View2.prototype.createViewEvent = function(evt) {
    var shape = evt.shape,
      name = evt.name;
    var data = shape ? shape.get('origin') : null;
    var e = new event_default(this, evt, data);
    e.type = name;
    return e;
  };
  View2.prototype.doPlotEvent = function(e) {
    var type = e.type,
      x = e.x,
      y = e.y;
    var point = { x, y };
    var ALL_EVENTS = [
      'mousedown',
      'mouseup',
      'mousemove',
      'mouseleave',
      'mousewheel',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'click',
      'dblclick',
      'contextmenu'
    ];
    if (ALL_EVENTS.includes(type)) {
      var currentInPlot = this.isPointInPlot(point);
      var newEvent = e.clone();
      if (currentInPlot) {
        var TYPE = 'plot:'.concat(type);
        newEvent.type = TYPE;
        this.emit(TYPE, newEvent);
        if (type === 'mouseleave' || type === 'touchend') {
          this.isPreMouseInPlot = false;
        }
      }
      if (type === 'mousemove' || type === 'touchmove') {
        if (this.isPreMouseInPlot && !currentInPlot) {
          if (type === 'mousemove') {
            newEvent.type = PLOT_EVENTS.MOUSE_LEAVE;
            this.emit(PLOT_EVENTS.MOUSE_LEAVE, newEvent);
          }
          newEvent.type = PLOT_EVENTS.LEAVE;
          this.emit(PLOT_EVENTS.LEAVE, newEvent);
        } else if (!this.isPreMouseInPlot && currentInPlot) {
          if (type === 'mousemove') {
            newEvent.type = PLOT_EVENTS.MOUSE_ENTER;
            this.emit(PLOT_EVENTS.MOUSE_ENTER, newEvent);
          }
          newEvent.type = PLOT_EVENTS.ENTER;
          this.emit(PLOT_EVENTS.ENTER, newEvent);
        }
        this.isPreMouseInPlot = currentInPlot;
      } else if (type === 'mouseleave' || type === 'touchend') {
        if (this.isPreMouseInPlot) {
          if (type === 'mouseleave') {
            newEvent.type = PLOT_EVENTS.MOUSE_LEAVE;
            this.emit(PLOT_EVENTS.MOUSE_LEAVE, newEvent);
          }
          newEvent.type = PLOT_EVENTS.LEAVE;
          this.emit(PLOT_EVENTS.LEAVE, newEvent);
          this.isPreMouseInPlot = false;
        }
      }
    }
  };
  View2.prototype.doFilterData = function() {
    var data = this.options.data;
    this.filteredData = this.filterData(data);
  };
  View2.prototype.initGeometries = function(isUpdate) {
    this.createOrUpdateScales();
    var coordinate = this.getCoordinate();
    var scaleDefs = get9(this.options, 'scales', {});
    var geometries = this.geometries;
    for (var i = 0, len = geometries.length; i < len; i++) {
      var geometry = geometries[i];
      geometry.scales = this.getGeometryScales();
      var cfg = {
        coordinate,
        scaleDefs,
        data: this.filteredData,
        theme: this.themeObject,
        isDataChanged: this.isDataChanged,
        isCoordinateChanged: this.isCoordinateChanged
      };
      if (isUpdate) {
        geometry.update(cfg);
      } else {
        geometry.init(cfg);
      }
    }
    this.adjustScales();
  };
  View2.prototype.createOrUpdateScales = function() {
    var fields = this.getScaleFields();
    var groupedFields = this.getGroupedFields();
    var _a = this.getOptions(),
      data = _a.data,
      _b = _a.scales,
      scales = _b === void 0 ? {} : _b;
    var filteredData = this.filteredData;
    for (var i = 0, len = fields.length; i < len; i++) {
      var field = fields[i];
      var scaleDef = scales[field];
      var key = this.getScaleKey(field);
      this.createScale(field, groupedFields.includes(field) ? data : filteredData, scaleDef, key);
      this.createdScaleKeys.set(key, true);
    }
  };
  View2.prototype.syncScale = function() {
    this.getRootView().scalePool.sync(this.getCoordinate(), this.theme);
  };
  View2.prototype.getGeometryScales = function() {
    var fields = this.getScaleFields();
    var scales = {};
    for (var i = 0; i < fields.length; i++) {
      var field = fields[i];
      scales[field] = this.getScaleByField(field);
    }
    return scales;
  };
  View2.prototype.getScaleFields = function() {
    var fields = [];
    var tmpMap = /* @__PURE__ */ new Map();
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      var geometry = geometries[i];
      var geometryScales = geometry.getScaleFields();
      uniq(geometryScales, fields, tmpMap);
    }
    return fields;
  };
  View2.prototype.getGroupedFields = function() {
    var fields = [];
    var tmpMap = /* @__PURE__ */ new Map();
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      var geometry = geometries[i];
      var groupFields = geometry.getGroupFields();
      uniq(groupFields, fields, tmpMap);
    }
    return fields;
  };
  View2.prototype.adjustScales = function() {
    this.adjustCategoryScaleRange();
  };
  View2.prototype.adjustCategoryScaleRange = function() {
    var _this = this;
    var xyScales = __spreadArray7([this.getXScale()], __read10(this.getYScales()), false).filter(function(e) {
      return !!e;
    });
    var coordinate = this.getCoordinate();
    var scaleOptions = this.options.scales;
    each11(xyScales, function(scale) {
      var field = scale.field,
        values3 = scale.values,
        isCategory = scale.isCategory,
        isIdentity = scale.isIdentity;
      if (isCategory || isIdentity) {
        if (values3 && !get9(scaleOptions, [field, 'range'])) {
          scale.range = getDefaultCategoryScaleRange(scale, coordinate, _this.theme);
        }
      }
    });
  };
  View2.prototype.initComponents = function(isUpdate) {
    var controllers = this.controllers;
    for (var i = 0; i < controllers.length; i++) {
      var controller = controllers[i];
      if (isUpdate) {
        controller.update();
      } else {
        controller.clear();
        controller.render();
      }
    }
  };
  View2.prototype.doLayout = function() {
    this.layoutFunc(this);
  };
  View2.prototype.createCoordinate = function() {
    var start = this.coordinateBBox.bl;
    var end = this.coordinateBBox.tr;
    this.coordinateInstance = this.coordinateController.create(start, end);
  };
  View2.prototype.paintGeometries = function(isUpdate) {
    var doAnimation = this.options.animate;
    var coordinate = this.getCoordinate();
    var canvasRegion = {
      x: this.viewBBox.x,
      y: this.viewBBox.y,
      minX: this.viewBBox.minX,
      minY: this.viewBBox.minY,
      maxX: this.viewBBox.maxX,
      maxY: this.viewBBox.maxY,
      width: this.viewBBox.width,
      height: this.viewBBox.height
    };
    var geometries = this.geometries;
    for (var i = 0; i < geometries.length; i++) {
      var geometry = geometries[i];
      geometry.coordinate = coordinate;
      geometry.canvasRegion = canvasRegion;
      if (!doAnimation) {
        geometry.animate(false);
      }
      geometry.paint(isUpdate);
    }
  };
  View2.prototype.renderComponents = function(isUpdate) {
    var components = this.getComponents();
    for (var i = 0; i < components.length; i++) {
      var co = components[i];
      co.component.render();
    }
  };
  View2.prototype.renderFacet = function(isUpdate) {
    if (this.facetInstance) {
      if (isUpdate) {
        this.facetInstance.update();
      } else {
        this.facetInstance.clear();
        this.facetInstance.init();
        this.facetInstance.render();
      }
    }
  };
  View2.prototype.initOptions = function() {
    var _this = this;
    var _a = this.options,
      _b = _a.geometries,
      geometries = _b === void 0 ? [] : _b,
      _c = _a.interactions,
      interactions = _c === void 0 ? [] : _c,
      _d = _a.views,
      views = _d === void 0 ? [] : _d,
      _e = _a.annotations,
      annotations = _e === void 0 ? [] : _e,
      coordinate = _a.coordinate,
      events = _a.events,
      facets = _a.facets;
    if (this.coordinateController) {
      coordinate && this.coordinateController.update(coordinate);
    } else {
      this.coordinateController = new coordinate_default(coordinate);
    }
    for (var i = 0; i < geometries.length; i++) {
      var geometryOption = geometries[i];
      this.createGeometry(geometryOption);
    }
    for (var j = 0; j < interactions.length; j++) {
      var interactionOption = interactions[j];
      var type = interactionOption.type,
        cfg = interactionOption.cfg;
      this.interaction(type, cfg);
    }
    for (var k = 0; k < views.length; k++) {
      var viewOption = views[k];
      this.createView(viewOption);
    }
    var annotationComponent = this.getController('annotation');
    for (var l = 0; l < annotations.length; l++) {
      var annotationOption = annotations[l];
      annotationComponent.annotation(annotationOption);
    }
    if (events) {
      each11(events, function(eventCallback, eventName) {
        _this.on(eventName, eventCallback);
      });
    }
    if (facets) {
      each11(facets, function(facet) {
        var type2 = facet.type,
          rest = __rest2(facet, ['type']);
        _this.facet(type2, rest);
      });
    }
  };
  View2.prototype.createGeometry = function(geometryOption) {
    var type = geometryOption.type,
      _a = geometryOption.cfg,
      cfg = _a === void 0 ? {} : _a;
    if (this[type]) {
      var geometry_1 = this[type](cfg);
      each11(geometryOption, function(v, k) {
        if (isFunction3(geometry_1[k])) {
          geometry_1[k](v);
        }
      });
    }
  };
  View2.prototype.getScaleKey = function(field) {
    return ''.concat(this.id, '-').concat(field);
  };
  return View2;
})(base_default);
function registerGeometry(name, Ctor) {
  View.prototype[name.toLowerCase()] = function(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }
    var props = __assign6(
      { container: this.middleGroup.addGroup(), labelsContainer: this.foregroundGroup.addGroup() },
      cfg
    );
    var geometry = new Ctor(props);
    this.geometries.push(geometry);
    return geometry;
  };
}
var view_default = View; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/chart.js
var Chart = (function(_super) {
  __extends5(Chart2, _super);
  function Chart2(props) {
    var _this = this;
    var container = props.container,
      width = props.width,
      height = props.height,
      _a = props.autoFit,
      autoFit = _a === void 0 ? false : _a,
      padding = props.padding,
      appendPadding = props.appendPadding,
      _b = props.renderer,
      renderer = _b === void 0 ? 'canvas' : _b,
      pixelRatio = props.pixelRatio,
      _c = props.localRefresh,
      localRefresh = _c === void 0 ? true : _c,
      _d = props.visible,
      visible = _d === void 0 ? true : _d,
      _e = props.supportCSSTransform,
      supportCSSTransform = _e === void 0 ? false : _e,
      _f = props.defaultInteractions,
      defaultInteractions =
        _f === void 0
          ? ['tooltip', 'legend-filter', 'legend-active', 'continuous-filter', 'ellipsis-text', 'axis-description']
          : _f,
      options = props.options,
      limitInPlot2 = props.limitInPlot,
      theme = props.theme,
      syncViewPadding = props.syncViewPadding;
    var ele = isString5(container) ? document.getElementById(container) : container;
    var wrapperElement = createDom('<div style="position:relative;"></div>');
    ele.appendChild(wrapperElement);
    var size6 = getChartSize(ele, autoFit, width, height);
    var G = getEngine(renderer);
    var canvas = new G.Canvas(
      __assign7({ container: wrapperElement, pixelRatio, localRefresh, supportCSSTransform }, size6)
    );
    _this =
      _super.call(this, {
        parent: null,
        canvas,
        backgroundGroup: canvas.addGroup({ zIndex: GROUP_Z_INDEX.BG }),
        middleGroup: canvas.addGroup({ zIndex: GROUP_Z_INDEX.MID }),
        foregroundGroup: canvas.addGroup({ zIndex: GROUP_Z_INDEX.FORE }),
        padding,
        appendPadding,
        visible,
        options,
        limitInPlot: limitInPlot2,
        theme,
        syncViewPadding
      }) || this;
    _this.onResize = debounce2(function() {
      _this.forceFit();
    }, 300);
    _this.ele = ele;
    _this.canvas = canvas;
    _this.width = size6.width;
    _this.height = size6.height;
    _this.autoFit = autoFit;
    _this.localRefresh = localRefresh;
    _this.renderer = renderer;
    _this.wrapperElement = wrapperElement;
    _this.updateCanvasStyle();
    _this.bindAutoFit();
    _this.initDefaultInteractions(defaultInteractions);
    return _this;
  }
  Chart2.prototype.initDefaultInteractions = function(interactions) {
    var _this = this;
    each12(interactions, function(interaction) {
      _this.interaction(interaction);
    });
  };
  Chart2.prototype.aria = function(ariaOption) {
    var ATTR = 'aria-label';
    if (ariaOption === false) {
      this.ele.removeAttribute(ATTR);
    } else {
      this.ele.setAttribute(ATTR, ariaOption.label);
    }
  };
  Chart2.prototype.changeSize = function(width, height) {
    if (this.width === width && this.height === height) {
      return this;
    }
    this.emit(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_SIZE);
    this.width = width;
    this.height = height;
    this.canvas.changeSize(width, height);
    this.render(true);
    this.emit(VIEW_LIFE_CIRCLE.AFTER_CHANGE_SIZE);
    return this;
  };
  Chart2.prototype.clear = function() {
    _super.prototype.clear.call(this);
    this.aria(false);
  };
  Chart2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.unbindAutoFit();
    this.canvas.destroy();
    removeDom(this.wrapperElement);
    this.wrapperElement = null;
  };
  Chart2.prototype.changeVisible = function(visible) {
    _super.prototype.changeVisible.call(this, visible);
    this.wrapperElement.style.display = visible ? '' : 'none';
    return this;
  };
  Chart2.prototype.forceFit = function() {
    if (!this.destroyed) {
      var _a = getChartSize(this.ele, true, this.width, this.height),
        width = _a.width,
        height = _a.height;
      this.changeSize(width, height);
    }
  };
  Chart2.prototype.updateCanvasStyle = function() {
    modifyCSS(this.canvas.get('el'), { display: 'inline-block', verticalAlign: 'middle' });
  };
  Chart2.prototype.bindAutoFit = function() {
    if (this.autoFit) {
      window.addEventListener('resize', this.onResize);
    }
  };
  Chart2.prototype.unbindAutoFit = function() {
    if (this.autoFit) {
      window.removeEventListener('resize', this.onResize);
    }
  };
  return Chart2;
})(view_default);
var chart_default = Chart; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/base.js
import { each as each13 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Controller = (function() {
  function Controller2(view) {
    this.visible = true;
    this.components = [];
    this.view = view;
  }
  Controller2.prototype.clear = function(includeOption) {
    each13(this.components, function(co) {
      co.component.destroy();
    });
    this.components = [];
  };
  Controller2.prototype.destroy = function() {
    this.clear();
  };
  Controller2.prototype.getComponents = function() {
    return this.components;
  };
  Controller2.prototype.changeVisible = function(visible) {
    if (this.visible === visible) {
      return;
    }
    this.components.forEach(function(co) {
      if (visible) {
        co.component.show();
      } else {
        co.component.hide();
      }
    });
    this.visible = visible;
  };
  return Controller2;
})(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/tooltip.js
import {
  __assign as __assign8,
  __extends as __extends6,
  __values as __values3
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix7,
  find as find3,
  get as get10,
  isEqual as isEqual2,
  isFunction as isFunction4,
  mix as mix3,
  isString as isString6,
  isBoolean as isBoolean3,
  flatten as flatten2,
  isArray as isArray6
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function uniq2(items) {
  var uniqItems = [];
  var _loop_1 = function(index2) {
    var item = items[index2];
    var result = find3(uniqItems, function(subItem) {
      return (
        subItem.color === item.color &&
        subItem.name === item.name &&
        subItem.value === item.value &&
        subItem.title === item.title
      );
    });
    if (!result) {
      uniqItems.push(item);
    }
  };
  for (var index = 0; index < items.length; index++) {
    _loop_1(index);
  }
  return uniqItems;
}
var Tooltip2 = (function(_super) {
  __extends6(Tooltip3, _super);
  function Tooltip3() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.isLocked = false;
    return _this;
  }
  Object.defineProperty(Tooltip3.prototype, 'name', {
    get: function() {
      return 'tooltip';
    },
    enumerable: false,
    configurable: true
  });
  Tooltip3.prototype.init = function() {};
  Tooltip3.prototype.isVisible = function() {
    var option = this.view.getOptions().tooltip;
    return option !== false;
  };
  Tooltip3.prototype.render = function() {};
  Tooltip3.prototype.showTooltip = function(point) {
    this.point = point;
    if (!this.isVisible()) {
      return;
    }
    var view = this.view;
    var items = this.getTooltipItems(point);
    if (!items.length) {
      this.hideTooltip();
      return;
    }
    var title = this.getTitle(items);
    var dataPoint = { x: items[0].x, y: items[0].y };
    view.emit('tooltip:show', event_default.fromData(view, 'tooltip:show', __assign8({ items, title }, point)));
    var cfg = this.getTooltipCfg();
    var follow = cfg.follow,
      showMarkers = cfg.showMarkers,
      showCrosshairs = cfg.showCrosshairs,
      showContent = cfg.showContent,
      marker = cfg.marker;
    var lastItems = this.items;
    var lastTitle = this.title;
    if (!isEqual2(lastTitle, title) || !isEqual2(lastItems, items)) {
      view.emit('tooltip:change', event_default.fromData(view, 'tooltip:change', __assign8({ items, title }, point)));
      if (isFunction4(showContent) ? showContent(items) : showContent) {
        if (!this.tooltip) {
          this.renderTooltip();
        }
        this.tooltip.update(mix3({}, cfg, { items: this.getItemsAfterProcess(items), title }, follow ? point : {}));
        this.tooltip.show();
      }
      if (showMarkers) {
        this.renderTooltipMarkers(items, marker);
      }
    } else {
      if (this.tooltip && follow) {
        this.tooltip.update(point);
        this.tooltip.show();
      }
      if (this.tooltipMarkersGroup) {
        this.tooltipMarkersGroup.show();
      }
    }
    this.items = items;
    this.title = title;
    if (showCrosshairs) {
      var isCrosshairsFollowCursor = get10(cfg, ['crosshairs', 'follow'], false);
      this.renderCrosshairs(isCrosshairsFollowCursor ? point : dataPoint, cfg);
    }
  };
  Tooltip3.prototype.hideTooltip = function() {
    var follow = this.getTooltipCfg().follow;
    if (!follow) {
      this.point = null;
      return;
    }
    var tooltipMarkersGroup = this.tooltipMarkersGroup;
    if (tooltipMarkersGroup) {
      tooltipMarkersGroup.hide();
    }
    var xCrosshair = this.xCrosshair;
    var yCrosshair = this.yCrosshair;
    if (xCrosshair) {
      xCrosshair.hide();
    }
    if (yCrosshair) {
      yCrosshair.hide();
    }
    var tooltip = this.tooltip;
    if (tooltip) {
      tooltip.hide();
    }
    this.view.emit('tooltip:hide', event_default.fromData(this.view, 'tooltip:hide', {}));
    this.point = null;
  };
  Tooltip3.prototype.lockTooltip = function() {
    this.isLocked = true;
    if (this.tooltip) {
      this.tooltip.setCapture(true);
    }
  };
  Tooltip3.prototype.unlockTooltip = function() {
    this.isLocked = false;
    var cfg = this.getTooltipCfg();
    if (this.tooltip) {
      this.tooltip.setCapture(cfg.capture);
    }
  };
  Tooltip3.prototype.isTooltipLocked = function() {
    return this.isLocked;
  };
  Tooltip3.prototype.clear = function() {
    var _a = this,
      tooltip = _a.tooltip,
      xCrosshair = _a.xCrosshair,
      yCrosshair = _a.yCrosshair,
      tooltipMarkersGroup = _a.tooltipMarkersGroup;
    if (tooltip) {
      tooltip.hide();
      tooltip.clear();
    }
    if (xCrosshair) {
      xCrosshair.clear();
    }
    if (yCrosshair) {
      yCrosshair.clear();
    }
    if (tooltipMarkersGroup) {
      tooltipMarkersGroup.clear();
    }
    if (tooltip === null || tooltip === void 0 ? void 0 : tooltip.get('customContent')) {
      this.tooltip.destroy();
      this.tooltip = null;
    }
    this.title = null;
    this.items = null;
  };
  Tooltip3.prototype.destroy = function() {
    if (this.tooltip) {
      this.tooltip.destroy();
    }
    if (this.xCrosshair) {
      this.xCrosshair.destroy();
    }
    if (this.yCrosshair) {
      this.yCrosshair.destroy();
    }
    if (this.guideGroup) {
      this.guideGroup.remove(true);
    }
    this.reset();
  };
  Tooltip3.prototype.reset = function() {
    this.items = null;
    this.title = null;
    this.tooltipMarkersGroup = null;
    this.tooltipCrosshairsGroup = null;
    this.xCrosshair = null;
    this.yCrosshair = null;
    this.tooltip = null;
    this.guideGroup = null;
    this.isLocked = false;
    this.point = null;
  };
  Tooltip3.prototype.changeVisible = function(visible) {
    if (this.visible === visible) {
      return;
    }
    var _a = this,
      tooltip = _a.tooltip,
      tooltipMarkersGroup = _a.tooltipMarkersGroup,
      xCrosshair = _a.xCrosshair,
      yCrosshair = _a.yCrosshair;
    if (visible) {
      if (tooltip) {
        tooltip.show();
      }
      if (tooltipMarkersGroup) {
        tooltipMarkersGroup.show();
      }
      if (xCrosshair) {
        xCrosshair.show();
      }
      if (yCrosshair) {
        yCrosshair.show();
      }
    } else {
      if (tooltip) {
        tooltip.hide();
      }
      if (tooltipMarkersGroup) {
        tooltipMarkersGroup.hide();
      }
      if (xCrosshair) {
        xCrosshair.hide();
      }
      if (yCrosshair) {
        yCrosshair.hide();
      }
    }
    this.visible = visible;
  };
  Tooltip3.prototype.getTooltipItems = function(point) {
    var e_1, _a, e_2, _b, e_3, _c;
    var items = this.findItemsFromView(this.view, point);
    if (items.length) {
      items = flatten2(items);
      try {
        for (var items_1 = __values3(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
          var itemArr = items_1_1.value;
          try {
            for (
              var itemArr_1 = ((e_2 = void 0), __values3(itemArr)), itemArr_1_1 = itemArr_1.next();
              !itemArr_1_1.done;
              itemArr_1_1 = itemArr_1.next()
            ) {
              var item = itemArr_1_1.value;
              var _d = item.mappingData,
                x = _d.x,
                y = _d.y;
              item.x = isArray6(x) ? x[x.length - 1] : x;
              item.y = isArray6(y) ? y[y.length - 1] : y;
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (itemArr_1_1 && !itemArr_1_1.done && (_b = itemArr_1.return)) _b.call(itemArr_1);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      var shared = this.getTooltipCfg().shared;
      if (shared === false && items.length > 1) {
        var snapItem = items[0];
        var min2 = Math.abs(point.y - snapItem[0].y);
        try {
          for (
            var items_2 = __values3(items), items_2_1 = items_2.next();
            !items_2_1.done;
            items_2_1 = items_2.next()
          ) {
            var aItem = items_2_1.value;
            var yDistance = Math.abs(point.y - aItem[0].y);
            if (yDistance <= min2) {
              snapItem = aItem;
              min2 = yDistance;
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (items_2_1 && !items_2_1.done && (_c = items_2.return)) _c.call(items_2);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        items = [snapItem];
      }
      return uniq2(flatten2(items));
    }
    return [];
  };
  Tooltip3.prototype.layout = function() {};
  Tooltip3.prototype.update = function() {
    if (this.point) {
      this.showTooltip(this.point);
    }
    if (this.tooltip) {
      var canvas = this.view.getCanvas();
      this.tooltip.set('region', { start: { x: 0, y: 0 }, end: { x: canvas.get('width'), y: canvas.get('height') } });
    }
  };
  Tooltip3.prototype.isCursorEntered = function(point) {
    if (this.tooltip) {
      var el = this.tooltip.getContainer();
      var capture = this.tooltip.get('capture');
      if (el && capture) {
        var _a = el.getBoundingClientRect(),
          x = _a.x,
          y = _a.y,
          width = _a.width,
          height = _a.height;
        return new BBox(x, y, width, height).isPointIn(point);
      }
    }
    return false;
  };
  Tooltip3.prototype.getTooltipCfg = function() {
    var view = this.view;
    var option = view.getOptions().tooltip;
    var processOption = this.processCustomContent(option);
    var theme = view.getTheme();
    var defaultCfg = get10(theme, ['components', 'tooltip'], {});
    var enterable = get10(processOption, 'enterable', defaultCfg.enterable);
    return deepMix7({}, defaultCfg, processOption, { capture: enterable || this.isLocked ? true : false });
  };
  Tooltip3.prototype.processCustomContent = function(option) {
    if (isBoolean3(option) || !get10(option, 'customContent')) {
      return option;
    }
    var currentCustomContent = option.customContent;
    var customContent = function(title, items) {
      var content = currentCustomContent(title, items) || '';
      return isString6(content) ? '<div class="g2-tooltip">' + content + '</div>' : content;
    };
    return __assign8(__assign8({}, option), { customContent });
  };
  Tooltip3.prototype.getTitle = function(items) {
    var title = items[0].title || items[0].name;
    this.title = title;
    return title;
  };
  Tooltip3.prototype.renderTooltip = function() {
    var canvas = this.view.getCanvas();
    var region = { start: { x: 0, y: 0 }, end: { x: canvas.get('width'), y: canvas.get('height') } };
    var cfg = this.getTooltipCfg();
    var tooltip = new HtmlTooltip(
      __assign8(__assign8({ parent: canvas.get('el').parentNode, region }, cfg), { visible: false, crosshairs: null })
    );
    tooltip.init();
    this.tooltip = tooltip;
  };
  Tooltip3.prototype.renderTooltipMarkers = function(items, marker) {
    var e_4, _a;
    var tooltipMarkersGroup = this.getTooltipMarkersGroup();
    var rootView = this.view.getRootView();
    var limitInPlot2 = rootView.limitInPlot;
    try {
      for (var items_3 = __values3(items), items_3_1 = items_3.next(); !items_3_1.done; items_3_1 = items_3.next()) {
        var item = items_3_1.value;
        var x = item.x,
          y = item.y;
        if (
          limitInPlot2 ||
          (tooltipMarkersGroup === null || tooltipMarkersGroup === void 0 ? void 0 : tooltipMarkersGroup.getClip())
        ) {
          var _b = getCoordinateClipCfg(rootView.getCoordinate()),
            type = _b.type,
            attrs_1 = _b.attrs;
          tooltipMarkersGroup === null || tooltipMarkersGroup === void 0
            ? void 0
            : tooltipMarkersGroup.setClip({ type, attrs: attrs_1 });
        } else {
          tooltipMarkersGroup === null || tooltipMarkersGroup === void 0 ? void 0 : tooltipMarkersGroup.setClip(void 0);
        }
        var theme = this.view.getTheme();
        var markerDefaultCfg = get10(theme, ['components', 'tooltip', 'marker'], {});
        var attrs = __assign8(
          __assign8(
            { fill: item.color, symbol: 'circle', shadowColor: item.color },
            isFunction4(marker) ? __assign8(__assign8({}, markerDefaultCfg), marker(item)) : marker
          ),
          { x, y }
        );
        tooltipMarkersGroup.addShape('marker', { attrs });
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (items_3_1 && !items_3_1.done && (_a = items_3.return)) _a.call(items_3);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
  };
  Tooltip3.prototype.renderCrosshairs = function(point, cfg) {
    var crosshairsType = get10(cfg, ['crosshairs', 'type'], 'x');
    if (crosshairsType === 'x') {
      if (this.yCrosshair) {
        this.yCrosshair.hide();
      }
      this.renderXCrosshairs(point, cfg);
    } else if (crosshairsType === 'y') {
      if (this.xCrosshair) {
        this.xCrosshair.hide();
      }
      this.renderYCrosshairs(point, cfg);
    } else if (crosshairsType === 'xy') {
      this.renderXCrosshairs(point, cfg);
      this.renderYCrosshairs(point, cfg);
    }
  };
  Tooltip3.prototype.renderXCrosshairs = function(point, tooltipCfg) {
    var coordinate = this.getViewWithGeometry(this.view).getCoordinate();
    var start;
    var end;
    if (coordinate.isRect) {
      if (coordinate.isTransposed) {
        start = { x: coordinate.start.x, y: point.y };
        end = { x: coordinate.end.x, y: point.y };
      } else {
        start = { x: point.x, y: coordinate.end.y };
        end = { x: point.x, y: coordinate.start.y };
      }
    } else {
      var angle = getAngleByPoint(coordinate, point);
      var center = coordinate.getCenter();
      var radius = coordinate.getRadius();
      end = polarToCartesian(center.x, center.y, radius, angle);
      start = center;
    }
    var cfg = deepMix7(
      { start, end, container: this.getTooltipCrosshairsGroup() },
      get10(tooltipCfg, 'crosshairs', {}),
      this.getCrosshairsText('x', point, tooltipCfg)
    );
    delete cfg.type;
    var xCrosshair = this.xCrosshair;
    if (xCrosshair) {
      xCrosshair.update(cfg);
    } else {
      xCrosshair = new Crosshair.Line(cfg);
      xCrosshair.init();
    }
    xCrosshair.render();
    xCrosshair.show();
    this.xCrosshair = xCrosshair;
  };
  Tooltip3.prototype.renderYCrosshairs = function(point, tooltipCfg) {
    var coordinate = this.getViewWithGeometry(this.view).getCoordinate();
    var cfg;
    var type;
    if (coordinate.isRect) {
      var start = void 0;
      var end = void 0;
      if (coordinate.isTransposed) {
        start = { x: point.x, y: coordinate.end.y };
        end = { x: point.x, y: coordinate.start.y };
      } else {
        start = { x: coordinate.start.x, y: point.y };
        end = { x: coordinate.end.x, y: point.y };
      }
      cfg = { start, end };
      type = 'Line';
    } else {
      cfg = {
        center: coordinate.getCenter(),
        radius: getDistanceToCenter(coordinate, point),
        startAngle: coordinate.startAngle,
        endAngle: coordinate.endAngle
      };
      type = 'Circle';
    }
    cfg = deepMix7(
      { container: this.getTooltipCrosshairsGroup() },
      cfg,
      get10(tooltipCfg, 'crosshairs', {}),
      this.getCrosshairsText('y', point, tooltipCfg)
    );
    delete cfg.type;
    var yCrosshair = this.yCrosshair;
    if (yCrosshair) {
      if (
        (coordinate.isRect && yCrosshair.get('type') === 'circle') ||
        (!coordinate.isRect && yCrosshair.get('type') === 'line')
      ) {
        yCrosshair = new Crosshair[type](cfg);
        yCrosshair.init();
      } else {
        yCrosshair.update(cfg);
      }
    } else {
      yCrosshair = new Crosshair[type](cfg);
      yCrosshair.init();
    }
    yCrosshair.render();
    yCrosshair.show();
    this.yCrosshair = yCrosshair;
  };
  Tooltip3.prototype.getCrosshairsText = function(type, point, tooltipCfg) {
    var textCfg = get10(tooltipCfg, ['crosshairs', 'text']);
    var follow = get10(tooltipCfg, ['crosshairs', 'follow']);
    var items = this.items;
    if (textCfg) {
      var view = this.getViewWithGeometry(this.view);
      var firstItem = items[0];
      var xScale = view.getXScale();
      var yScale = view.getYScales()[0];
      var xValue = void 0;
      var yValue = void 0;
      if (follow) {
        var invertPoint = this.view.getCoordinate().invert(point);
        xValue = xScale.invert(invertPoint.x);
        yValue = yScale.invert(invertPoint.y);
      } else {
        xValue = firstItem.data[xScale.field];
        yValue = firstItem.data[yScale.field];
      }
      var content = type === 'x' ? xValue : yValue;
      if (isFunction4(textCfg)) {
        textCfg = textCfg(type, content, items, point);
      } else {
        textCfg.content = content;
      }
      return { text: textCfg };
    }
  };
  Tooltip3.prototype.getGuideGroup = function() {
    if (!this.guideGroup) {
      var foregroundGroup = this.view.foregroundGroup;
      this.guideGroup = foregroundGroup.addGroup({ name: 'tooltipGuide', capture: false });
    }
    return this.guideGroup;
  };
  Tooltip3.prototype.getTooltipMarkersGroup = function() {
    var tooltipMarkersGroup = this.tooltipMarkersGroup;
    if (tooltipMarkersGroup && !tooltipMarkersGroup.destroyed) {
      tooltipMarkersGroup.clear();
      tooltipMarkersGroup.show();
    } else {
      tooltipMarkersGroup = this.getGuideGroup().addGroup({ name: 'tooltipMarkersGroup' });
      tooltipMarkersGroup.toFront();
      this.tooltipMarkersGroup = tooltipMarkersGroup;
    }
    return tooltipMarkersGroup;
  };
  Tooltip3.prototype.getTooltipCrosshairsGroup = function() {
    var tooltipCrosshairsGroup = this.tooltipCrosshairsGroup;
    if (!tooltipCrosshairsGroup) {
      tooltipCrosshairsGroup = this.getGuideGroup().addGroup({ name: 'tooltipCrosshairsGroup', capture: false });
      tooltipCrosshairsGroup.toBack();
      this.tooltipCrosshairsGroup = tooltipCrosshairsGroup;
    }
    return tooltipCrosshairsGroup;
  };
  Tooltip3.prototype.findItemsFromView = function(view, point) {
    var e_5, _a;
    if (view.getOptions().tooltip === false) {
      return [];
    }
    var tooltipCfg = this.getTooltipCfg();
    var result = findItemsFromView(view, point, tooltipCfg);
    try {
      for (var _b = __values3(view.views), _c = _b.next(); !_c.done; _c = _b.next()) {
        var childView = _c.value;
        result = result.concat(this.findItemsFromView(childView, point));
      }
    } catch (e_5_1) {
      e_5 = { error: e_5_1 };
    } finally {
      try {
        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
      } finally {
        if (e_5) throw e_5.error;
      }
    }
    return result;
  };
  Tooltip3.prototype.getViewWithGeometry = function(view) {
    var _this = this;
    if (view.geometries.length) {
      return view;
    }
    return find3(view.views, function(childView) {
      return _this.getViewWithGeometry(childView);
    });
  };
  Tooltip3.prototype.getItemsAfterProcess = function(originalItems) {
    var customItems = this.getTooltipCfg().customItems;
    var fn = customItems
      ? customItems
      : function(v) {
          return v;
        };
    return fn(originalItems);
  };
  return Tooltip3;
})(Controller);
var tooltip_default = Tooltip2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/base.js
import {
  __assign as __assign12,
  __awaiter,
  __extends as __extends8,
  __generator,
  __read as __read11,
  __spreadArray as __spreadArray8,
  __values as __values5
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { getAdjust as getAdjustClass } from '/cdn/v99/@antv/adjust@0.2.5/es2022/adjust.development.js';
import { getAttribute as getAttributeClass } from '/cdn/v99/@antv/attr@0.3.3/es2022/attr.development.js';
import {
  clone as clone3,
  deepMix as deepMix11,
  each as each15,
  flatten as flatten3,
  get as get14,
  isArray as isArray9,
  isEmpty as isEmpty5,
  isEqual as isEqual5,
  isFunction as isFunction7,
  isNil as isNil6,
  isNumber as isNumber7,
  isObject as isObject3,
  isPlainObject as isPlainObject3,
  isString as isString8,
  set as set2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/index.js
import { __assign as __assign9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix8,
  get as get11,
  isFunction as isFunction5
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/index.js
var ANIMATIONS_MAP = {};
function getAnimation(type) {
  return ANIMATIONS_MAP[type.toLowerCase()];
}
function registerAnimation(type, animation) {
  ANIMATIONS_MAP[type.toLowerCase()] = animation;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/index.js
var DEFAULT_ANIMATE_CFG = {
  appear: { duration: 450, easing: 'easeQuadOut' },
  update: { duration: 400, easing: 'easeQuadInOut' },
  enter: { duration: 400, easing: 'easeQuadInOut' },
  leave: { duration: 350, easing: 'easeQuadIn' }
};
var GEOMETRY_ANIMATE_CFG = {
  interval: function(coordinate) {
    return {
      enter: { animation: coordinate.isRect ? (coordinate.isTransposed ? 'scale-in-x' : 'scale-in-y') : 'fade-in' },
      update: { animation: coordinate.isPolar && coordinate.isTransposed ? 'sector-path-update' : null },
      leave: { animation: 'fade-out' }
    };
  },
  line: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  path: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  point: { appear: { animation: 'zoom-in' }, enter: { animation: 'zoom-in' }, leave: { animation: 'zoom-out' } },
  area: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  polygon: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  schema: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  edge: { enter: { animation: 'fade-in' }, leave: { animation: 'fade-out' } },
  label: {
    appear: { animation: 'fade-in', delay: 450 },
    enter: { animation: 'fade-in' },
    update: { animation: 'position-update' },
    leave: { animation: 'fade-out' }
  }
};
var GEOMETRY_GROUP_APPEAR_ANIMATION = {
  line: function() {
    return { animation: 'wave-in' };
  },
  area: function() {
    return { animation: 'wave-in' };
  },
  path: function() {
    return { animation: 'fade-in' };
  },
  interval: function(coordinate) {
    var animation;
    if (coordinate.isRect) {
      animation = coordinate.isTransposed ? 'grow-in-x' : 'grow-in-y';
    } else {
      animation = 'grow-in-xy';
      if (coordinate.isPolar && coordinate.isTransposed) {
        animation = 'wave-in';
      }
    }
    return { animation };
  },
  schema: function(coordinate) {
    var animation;
    if (coordinate.isRect) {
      animation = coordinate.isTransposed ? 'grow-in-x' : 'grow-in-y';
    } else {
      animation = 'grow-in-xy';
    }
    return { animation };
  },
  polygon: function() {
    return { animation: 'fade-in', duration: 500 };
  },
  edge: function() {
    return { animation: 'fade-in' };
  }
};
function parseAnimateConfig(animateCfg, data) {
  return {
    delay: isFunction5(animateCfg.delay) ? animateCfg.delay(data) : animateCfg.delay,
    easing: isFunction5(animateCfg.easing) ? animateCfg.easing(data) : animateCfg.easing,
    duration: isFunction5(animateCfg.duration) ? animateCfg.duration(data) : animateCfg.duration,
    callback: animateCfg.callback,
    repeat: animateCfg.repeat
  };
}
function getDefaultAnimateCfg(elementName, coordinate, animateType) {
  var animateCfg = GEOMETRY_ANIMATE_CFG[elementName];
  if (animateCfg) {
    if (isFunction5(animateCfg)) {
      animateCfg = animateCfg(coordinate);
    }
    animateCfg = deepMix8({}, DEFAULT_ANIMATE_CFG, animateCfg);
    if (animateType) {
      return animateCfg[animateType];
    }
  }
  return animateCfg;
}
function doAnimate(shape, animateCfg, cfg) {
  var data = get11(shape.get('origin'), 'data', FIELD_ORIGIN);
  var animation = animateCfg.animation;
  var parsedAnimateCfg = parseAnimateConfig(animateCfg, data);
  if (animation) {
    var animateFunction = getAnimation(animation);
    if (animateFunction) {
      animateFunction(shape, parsedAnimateCfg, cfg);
    }
  } else {
    shape.animate(cfg.toAttrs, parsedAnimateCfg);
  }
}
function doGroupAppearAnimate(container, animateCfg, geometryType, coordinate, minYPoint) {
  if (GEOMETRY_GROUP_APPEAR_ANIMATION[geometryType]) {
    var defaultCfg = GEOMETRY_GROUP_APPEAR_ANIMATION[geometryType](coordinate);
    var animation = getAnimation(get11(defaultCfg, 'animation', ''));
    if (animation) {
      var cfg = __assign9(__assign9(__assign9({}, DEFAULT_ANIMATE_CFG.appear), defaultCfg), animateCfg);
      container.stopAnimate();
      animation(container, cfg, { coordinate, minYPoint, toAttrs: null });
    }
  }
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/element/index.js
import { __assign as __assign10, __extends as __extends7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix9,
  each as each14,
  get as get12,
  isArray as isArray7,
  isEmpty as isEmpty4,
  isEqual as isEqual3,
  isFunction as isFunction6,
  isString as isString7
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { propagationDelegate } from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/constant.js
var BACKGROUND_SHAPE = 'element-background'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/element/index.js
var Element = (function(_super) {
  __extends7(Element2, _super);
  function Element2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.labelShape = [];
    _this.states = [];
    var shapeFactory = cfg.shapeFactory,
      container = cfg.container,
      offscreenGroup = cfg.offscreenGroup,
      elementIndex = cfg.elementIndex,
      _a = cfg.visible,
      visible = _a === void 0 ? true : _a;
    _this.shapeFactory = shapeFactory;
    _this.container = container;
    _this.offscreenGroup = offscreenGroup;
    _this.visible = visible;
    _this.elementIndex = elementIndex;
    return _this;
  }
  Element2.prototype.draw = function(model, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    this.model = model;
    this.data = model.data;
    this.shapeType = this.getShapeType(model);
    this.drawShape(model, isUpdate);
    if (this.visible === false) {
      this.changeVisible(false);
    }
  };
  Element2.prototype.update = function(model) {
    var _a = this,
      shapeFactory = _a.shapeFactory,
      shape = _a.shape;
    if (!shape) {
      return;
    }
    this.model = model;
    this.data = model.data;
    this.shapeType = this.getShapeType(model);
    this.setShapeInfo(shape, model);
    var offscreenGroup = this.getOffscreenGroup();
    var newShape = shapeFactory.drawShape(this.shapeType, model, offscreenGroup);
    newShape.cfg.data = this.data;
    newShape.cfg.origin = model;
    newShape.cfg.element = this;
    this.syncShapeStyle(shape, newShape, this.getStates(), this.getAnimateCfg('update'));
  };
  Element2.prototype.destroy = function() {
    var _a = this,
      shapeFactory = _a.shapeFactory,
      shape = _a.shape;
    if (shape) {
      var animateCfg = this.getAnimateCfg('leave');
      if (animateCfg) {
        doAnimate(shape, animateCfg, { coordinate: shapeFactory.coordinate, toAttrs: __assign10({}, shape.attr()) });
      } else {
        shape.remove(true);
      }
    }
    this.states = [];
    this.shapeFactory = void 0;
    this.container = void 0;
    this.shape = void 0;
    this.animate = void 0;
    this.geometry = void 0;
    this.labelShape = [];
    this.model = void 0;
    this.data = void 0;
    this.offscreenGroup = void 0;
    this.statesStyle = void 0;
    _super.prototype.destroy.call(this);
  };
  Element2.prototype.changeVisible = function(visible) {
    _super.prototype.changeVisible.call(this, visible);
    if (visible) {
      if (this.shape) {
        this.shape.show();
      }
      if (this.labelShape) {
        this.labelShape.forEach(function(label) {
          label.show();
        });
      }
    } else {
      if (this.shape) {
        this.shape.hide();
      }
      if (this.labelShape) {
        this.labelShape.forEach(function(label) {
          label.hide();
        });
      }
    }
  };
  Element2.prototype.setState = function(stateName, stateStatus) {
    var _a = this,
      states = _a.states,
      shapeFactory = _a.shapeFactory,
      model = _a.model,
      shape = _a.shape,
      shapeType = _a.shapeType;
    var index = states.indexOf(stateName);
    if (stateStatus) {
      if (index > -1) {
        return;
      }
      states.push(stateName);
      if (stateName === 'active' || stateName === 'selected') {
        shape === null || shape === void 0 ? void 0 : shape.toFront();
      }
    } else {
      if (index === -1) {
        return;
      }
      states.splice(index, 1);
      if (stateName === 'active' || stateName === 'selected') {
        var _b = this.geometry,
          sortZIndex = _b.sortZIndex,
          zIndexReversed = _b.zIndexReversed;
        var idx = zIndexReversed ? this.geometry.elements.length - this.elementIndex : this.elementIndex;
        sortZIndex ? shape.setZIndex(idx) : shape.set('zIndex', idx);
      }
    }
    var offscreenShape = shapeFactory.drawShape(shapeType, model, this.getOffscreenGroup());
    if (states.length) {
      this.syncShapeStyle(shape, offscreenShape, states, null);
    } else {
      this.syncShapeStyle(shape, offscreenShape, ['reset'], null);
    }
    offscreenShape.remove(true);
    var eventObject = { state: stateName, stateStatus, element: this, target: this.container };
    this.container.emit('statechange', eventObject);
    propagationDelegate(this.shape, 'statechange', eventObject);
  };
  Element2.prototype.clearStates = function() {
    var _this = this;
    var states = this.states;
    each14(states, function(state) {
      _this.setState(state, false);
    });
    this.states = [];
  };
  Element2.prototype.hasState = function(stateName) {
    return this.states.includes(stateName);
  };
  Element2.prototype.getStates = function() {
    return this.states;
  };
  Element2.prototype.getData = function() {
    return this.data;
  };
  Element2.prototype.getModel = function() {
    return this.model;
  };
  Element2.prototype.getBBox = function() {
    var _a = this,
      shape = _a.shape,
      labelShape = _a.labelShape;
    var bbox = { x: 0, y: 0, minX: 0, minY: 0, maxX: 0, maxY: 0, width: 0, height: 0 };
    if (shape) {
      bbox = shape.getCanvasBBox();
    }
    if (labelShape) {
      labelShape.forEach(function(label) {
        var labelBBox = label.getCanvasBBox();
        bbox.x = Math.min(labelBBox.x, bbox.x);
        bbox.y = Math.min(labelBBox.y, bbox.y);
        bbox.minX = Math.min(labelBBox.minX, bbox.minX);
        bbox.minY = Math.min(labelBBox.minY, bbox.minY);
        bbox.maxX = Math.max(labelBBox.maxX, bbox.maxX);
        bbox.maxY = Math.max(labelBBox.maxY, bbox.maxY);
      });
    }
    bbox.width = bbox.maxX - bbox.minX;
    bbox.height = bbox.maxY - bbox.minY;
    return bbox;
  };
  Element2.prototype.getStatesStyle = function() {
    if (!this.statesStyle) {
      var _a = this,
        shapeType = _a.shapeType,
        geometry = _a.geometry,
        shapeFactory = _a.shapeFactory;
      var stateOption = geometry.stateOption;
      var defaultShapeType = shapeFactory.defaultShapeType;
      var stateTheme = shapeFactory.theme[shapeType] || shapeFactory.theme[defaultShapeType];
      this.statesStyle = deepMix9({}, stateTheme, stateOption);
    }
    return this.statesStyle;
  };
  Element2.prototype.getStateStyle = function(stateName, shapeKey) {
    var statesStyle = this.getStatesStyle();
    var stateCfg = get12(statesStyle, [stateName, 'style'], {});
    var shapeStyle = stateCfg[shapeKey] || stateCfg;
    if (isFunction6(shapeStyle)) {
      return shapeStyle(this);
    }
    return shapeStyle;
  };
  Element2.prototype.getAnimateCfg = function(animateType) {
    var _this = this;
    var animate = this.animate;
    if (animate) {
      var cfg_1 = animate[animateType];
      if (cfg_1) {
        return __assign10(__assign10({}, cfg_1), {
          callback: function() {
            var _a;
            isFunction6(cfg_1.callback) && cfg_1.callback();
            (_a = _this.geometry) === null || _a === void 0 ? void 0 : _a.emit(GEOMETRY_LIFE_CIRCLE.AFTER_DRAW_ANIMATE);
          }
        });
      }
      return cfg_1;
    }
    return null;
  };
  Element2.prototype.drawShape = function(model, isUpdate) {
    var _a;
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    var _b = this,
      shapeFactory = _b.shapeFactory,
      container = _b.container,
      shapeType = _b.shapeType;
    this.shape = shapeFactory.drawShape(shapeType, model, container);
    if (this.shape) {
      this.setShapeInfo(this.shape, model);
      var name_1 = this.shape.cfg.name;
      if (!name_1) {
        this.shape.cfg.name = ['element', this.shapeFactory.geometryType];
      } else if (isString7(name_1)) {
        this.shape.cfg.name = ['element', name_1];
      }
      var animateType = isUpdate ? 'enter' : 'appear';
      var animateCfg = this.getAnimateCfg(animateType);
      if (animateCfg) {
        (_a = this.geometry) === null || _a === void 0 ? void 0 : _a.emit(GEOMETRY_LIFE_CIRCLE.BEFORE_DRAW_ANIMATE);
        doAnimate(this.shape, animateCfg, {
          coordinate: shapeFactory.coordinate,
          toAttrs: __assign10({}, this.shape.attr())
        });
      }
    }
  };
  Element2.prototype.getOffscreenGroup = function() {
    if (!this.offscreenGroup) {
      var GroupCtor = this.container.getGroupBase();
      this.offscreenGroup = new GroupCtor({});
    }
    return this.offscreenGroup;
  };
  Element2.prototype.setShapeInfo = function(shape, data) {
    var _this = this;
    shape.cfg.origin = data;
    shape.cfg.element = this;
    if (shape.isGroup()) {
      var children = shape.get('children');
      children.forEach(function(child) {
        _this.setShapeInfo(child, data);
      });
    }
  };
  Element2.prototype.syncShapeStyle = function(sourceShape, targetShape, states, animateCfg, index) {
    var _this = this;
    var _a;
    if (states === void 0) {
      states = [];
    }
    if (index === void 0) {
      index = 0;
    }
    if (!sourceShape || !targetShape) {
      return;
    }
    var clip = sourceShape.get('clipShape');
    var newClip = targetShape.get('clipShape');
    this.syncShapeStyle(clip, newClip, states, animateCfg);
    if (sourceShape.isGroup()) {
      var children = sourceShape.get('children');
      var newChildren = targetShape.get('children');
      for (var i = 0; i < children.length; i++) {
        this.syncShapeStyle(children[i], newChildren[i], states, animateCfg, index + i);
      }
    } else {
      if (!isEmpty4(states) && !isEqual3(states, ['reset'])) {
        var name_2 = sourceShape.get('name');
        if (isArray7(name_2)) {
          name_2 = name_2[1];
        }
        each14(states, function(state) {
          if (targetShape.get('name') !== BACKGROUND_SHAPE) {
            var style = _this.getStateStyle(state, name_2 || index);
            targetShape.attr(style);
          }
        });
      }
      var newAttrs = getReplaceAttrs(sourceShape, targetShape);
      if (this.animate) {
        if (animateCfg) {
          (_a = this.geometry) === null || _a === void 0 ? void 0 : _a.emit(GEOMETRY_LIFE_CIRCLE.BEFORE_DRAW_ANIMATE);
          doAnimate(sourceShape, animateCfg, {
            coordinate: this.shapeFactory.coordinate,
            toAttrs: newAttrs,
            shapeModel: this.model
          });
        } else if (!isEmpty4(states)) {
          sourceShape.stopAnimate();
          sourceShape.animate(newAttrs, { duration: 300 });
        } else {
          sourceShape.attr(newAttrs);
        }
      } else {
        sourceShape.attr(newAttrs);
      }
    }
  };
  Element2.prototype.getShapeType = function(model) {
    var shape = get12(model, 'shape');
    return isArray7(shape) ? shape[0] : shape;
  };
  return Element2;
})(base_default);
var element_default = Element; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/index.js
var GEOMETRY_LABELS_MAP = {};
var GEOMETRY_LABELS_LAYOUT_MAP = {};
function getGeometryLabel(type) {
  return GEOMETRY_LABELS_MAP[type.toLowerCase()];
}
function registerGeometryLabel(type, ctor) {
  GEOMETRY_LABELS_MAP[type.toLowerCase()] = ctor;
}
function getGeometryLabelLayout(type) {
  return GEOMETRY_LABELS_LAYOUT_MAP[type.toLowerCase()];
}
function registerGeometryLabelLayout(type, layoutFn) {
  GEOMETRY_LABELS_LAYOUT_MAP[type.toLowerCase()] = layoutFn;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/base.js
import { __assign as __assign11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { parsePathString } from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';
import { deepMix as deepMix10, get as get13, upperFirst } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ShapeFactoryBase = {
  coordinate: null,
  defaultShapeType: null,
  theme: null,
  getShapePoints: function(shapeType, shapePoint) {
    var shape = this.getShape(shapeType);
    if (shape.getPoints) {
      return shape.getPoints(shapePoint);
    }
    return this.getDefaultPoints(shapePoint);
  },
  getShape: function(shapeType) {
    var shape = this[shapeType] || this[this.defaultShapeType];
    shape.coordinate = this.coordinate;
    return shape;
  },
  getDefaultPoints: function() {
    return [];
  },
  getDefaultStyle: function(geometryTheme) {
    return get13(geometryTheme, [this.defaultShapeType, 'default', 'style'], {});
  },
  getMarker: function(shapeType, markerCfg) {
    var shape = this.getShape(shapeType);
    if (!shape.getMarker) {
      var defaultShapeType = this.defaultShapeType;
      shape = this.getShape(defaultShapeType);
    }
    var theme = this.theme;
    var shapeStyle = get13(theme, [shapeType, 'default'], {});
    var markerStyle = shape.getMarker(markerCfg);
    return deepMix10({}, shapeStyle, markerStyle);
  },
  drawShape: function(shapeType, cfg, container) {
    var shape = this.getShape(shapeType);
    return shape.draw(cfg, container);
  }
};
var ShapeBase = {
  coordinate: null,
  parsePath: function(path) {
    var coordinate = this.coordinate;
    var parsedPath = parsePathString(path);
    if (coordinate.isPolar) {
      parsedPath = convertPolarPath(coordinate, parsedPath);
    } else {
      parsedPath = convertNormalPath(coordinate, parsedPath);
    }
    return parsedPath;
  },
  parsePoint: function(point) {
    var coordinate = this.coordinate;
    return coordinate.convert(point);
  },
  parsePoints: function(points) {
    var coordinate = this.coordinate;
    return points.map(function(point) {
      return coordinate.convert(point);
    });
  },
  draw: function(cfg, container) {}
};
var ShapeFactoryMap = {};
function registerShapeFactory(factoryName, cfg) {
  var className = upperFirst(factoryName);
  var geomObj = __assign11(__assign11(__assign11({}, ShapeFactoryBase), cfg), { geometryType: factoryName });
  ShapeFactoryMap[className] = geomObj;
  return geomObj;
}
function registerShape(factoryName, shapeType, cfg) {
  var className = upperFirst(factoryName);
  var factory = ShapeFactoryMap[className];
  var shapeObj = __assign11(__assign11({}, ShapeBase), cfg);
  factory[shapeType] = shapeObj;
  return shapeObj;
}
function getShapeFactory(factoryName) {
  var className = upperFirst(factoryName);
  return ShapeFactoryMap[className];
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/util/group-data.js
import { __values as __values4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { groupToMap } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function group(data, fields, appendConditions) {
  var e_1, _a;
  if (appendConditions === void 0) {
    appendConditions = {};
  }
  if (!fields) {
    return [data];
  }
  var groups = groupToMap(data, fields);
  var array = [];
  if (fields.length === 1 && appendConditions[fields[0]]) {
    var values3 = appendConditions[fields[0]];
    try {
      for (
        var values_1 = __values4(values3), values_1_1 = values_1.next();
        !values_1_1.done;
        values_1_1 = values_1.next()
      ) {
        var value = values_1_1.value;
        var arr = groups['_'.concat(value)];
        if (arr) {
          array.push(arr);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (values_1_1 && !values_1_1.done && (_a = values_1.return)) _a.call(values_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
  } else {
    for (var k in groups) {
      if (groups.hasOwnProperty(k)) {
        var eachGroup = groups[k];
        array.push(eachGroup);
      }
    }
  }
  return array;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/util/is-model-change.js
import { isEqual as isEqual4, some as some2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isModelChange(currentModel, preModel) {
  return some2(
    ['color', 'shape', 'size', 'x', 'y', 'isInCircle', 'data', 'style', 'defaultStyle', 'points', 'mappingData'],
    function(key) {
      return !isEqual4(currentModel[key], preModel[key]);
    }
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/util/parse-fields.js
import { isArray as isArray8 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function parseFields(field) {
  if (isArray8(field)) {
    return field;
  }
  return field.split('*');
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/util/diff.js
function diff(keyItem, keys4) {
  var added = [];
  var updated = [];
  var removed = [];
  var keyIncluded = /* @__PURE__ */ new Map();
  for (var i = 0; i < keys4.length; i++) {
    var key = keys4[i];
    if (keyItem[key]) updated.push(key);
    else added.push(key);
    keyIncluded.set(key, true);
  }
  Object.keys(keyItem).forEach(function(key2) {
    if (!keyIncluded.has(key2)) removed.push(key2);
  });
  return { added, updated, removed };
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/base.js
var Geometry = (function(_super) {
  __extends8(Geometry2, _super);
  function Geometry2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'base';
    _this.attributes = {};
    _this.elements = [];
    _this.elementsMap = {};
    _this.animateOption = true;
    _this.attributeOption = {};
    _this.lastElementsMap = {};
    _this.generatePoints = false;
    _this.beforeMappingData = null;
    _this.adjusts = {};
    _this.idFields = [];
    _this.hasSorted = false;
    _this.isCoordinateChanged = false;
    var container = cfg.container,
      labelsContainer = cfg.labelsContainer,
      coordinate = cfg.coordinate,
      data = cfg.data,
      _a = cfg.sortable,
      sortable = _a === void 0 ? false : _a,
      _b = cfg.visible,
      visible = _b === void 0 ? true : _b,
      theme = cfg.theme,
      _c = cfg.scales,
      scales = _c === void 0 ? {} : _c,
      _d = cfg.scaleDefs,
      scaleDefs = _d === void 0 ? {} : _d,
      intervalPadding = cfg.intervalPadding,
      dodgePadding = cfg.dodgePadding,
      maxColumnWidth = cfg.maxColumnWidth,
      minColumnWidth = cfg.minColumnWidth,
      columnWidthRatio = cfg.columnWidthRatio,
      roseWidthRatio = cfg.roseWidthRatio,
      multiplePieWidthRatio = cfg.multiplePieWidthRatio,
      zIndexReversed = cfg.zIndexReversed,
      sortZIndex = cfg.sortZIndex,
      useDeferredLabel = cfg.useDeferredLabel;
    _this.container = container;
    _this.labelsContainer = labelsContainer;
    _this.coordinate = coordinate;
    _this.data = data;
    _this.sortable = sortable;
    _this.visible = visible;
    _this.userTheme = theme;
    _this.scales = scales;
    _this.scaleDefs = scaleDefs;
    _this.intervalPadding = intervalPadding;
    _this.dodgePadding = dodgePadding;
    _this.maxColumnWidth = maxColumnWidth;
    _this.minColumnWidth = minColumnWidth;
    _this.columnWidthRatio = columnWidthRatio;
    _this.roseWidthRatio = roseWidthRatio;
    _this.multiplePieWidthRatio = multiplePieWidthRatio;
    _this.zIndexReversed = zIndexReversed;
    _this.sortZIndex = sortZIndex;
    _this.useDeferredLabel = useDeferredLabel
      ? typeof useDeferredLabel === 'number'
        ? useDeferredLabel
        : Infinity
      : null;
    return _this;
  }
  Geometry2.prototype.position = function(cfg) {
    var positionCfg = cfg;
    if (!isPlainObject3(cfg)) {
      positionCfg = { fields: parseFields(cfg) };
    }
    var fields = get14(positionCfg, 'fields');
    if (fields.length === 1) {
      fields.unshift('1');
      set2(positionCfg, 'fields', fields);
    }
    set2(this.attributeOption, 'position', positionCfg);
    return this;
  };
  Geometry2.prototype.color = function(field, cfg) {
    this.createAttrOption('color', field, cfg);
    return this;
  };
  Geometry2.prototype.shape = function(field, cfg) {
    this.createAttrOption('shape', field, cfg);
    return this;
  };
  Geometry2.prototype.size = function(field, cfg) {
    this.createAttrOption('size', field, cfg);
    return this;
  };
  Geometry2.prototype.adjust = function(adjustCfg) {
    var adjusts = adjustCfg;
    if (isString8(adjustCfg) || isPlainObject3(adjustCfg)) {
      adjusts = [adjustCfg];
    }
    each15(adjusts, function(adjust, index) {
      if (!isObject3(adjust)) {
        adjusts[index] = { type: adjust };
      }
    });
    this.adjustOption = adjusts;
    return this;
  };
  Geometry2.prototype.style = function(field, styleFunc) {
    if (isString8(field)) {
      var fields = parseFields(field);
      this.styleOption = { fields, callback: styleFunc };
    } else {
      var _a = field,
        fields = _a.fields,
        callback = _a.callback,
        cfg = _a.cfg;
      if (fields || callback || cfg) {
        this.styleOption = field;
      } else {
        this.styleOption = { cfg: field };
      }
    }
    return this;
  };
  Geometry2.prototype.tooltip = function(field, cfg) {
    if (isString8(field)) {
      var fields = parseFields(field);
      this.tooltipOption = { fields, callback: cfg };
    } else {
      this.tooltipOption = field;
    }
    return this;
  };
  Geometry2.prototype.animate = function(cfg) {
    this.animateOption = cfg;
    return this;
  };
  Geometry2.prototype.label = function(field, secondParam, thirdParam) {
    if (isString8(field)) {
      var labelOption = {};
      var fields = parseFields(field);
      labelOption.fields = fields;
      if (isFunction7(secondParam)) {
        labelOption.callback = secondParam;
      } else if (isPlainObject3(secondParam)) {
        labelOption.cfg = secondParam;
      }
      if (thirdParam) {
        labelOption.cfg = thirdParam;
      }
      this.labelOption = labelOption;
    } else {
      this.labelOption = field;
    }
    return this;
  };
  Geometry2.prototype.state = function(cfg) {
    this.stateOption = cfg;
    return this;
  };
  Geometry2.prototype.customInfo = function(cfg) {
    this.customOption = cfg;
    return this;
  };
  Geometry2.prototype.init = function(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }
    this.setCfg(cfg);
    this.initAttributes();
    this.processData(this.data);
    this.adjustScale();
  };
  Geometry2.prototype.update = function(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }
    var data = cfg.data,
      isDataChanged = cfg.isDataChanged,
      isCoordinateChanged = cfg.isCoordinateChanged;
    var _a = this,
      attributeOption = _a.attributeOption,
      lastAttributeOption = _a.lastAttributeOption;
    if (!isEqual5(attributeOption, lastAttributeOption)) {
      this.init(cfg);
    } else if (data && (isDataChanged || !isEqual5(data, this.data))) {
      this.setCfg(cfg);
      this.initAttributes();
      this.processData(data);
    } else {
      this.setCfg(cfg);
    }
    this.adjustScale();
    this.isCoordinateChanged = isCoordinateChanged;
  };
  Geometry2.prototype.paint = function(isUpdate) {
    var _this = this;
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    if (this.animateOption) {
      this.animateOption = deepMix11({}, getDefaultAnimateCfg(this.type, this.coordinate), this.animateOption);
    }
    this.defaultSize = void 0;
    this.elementsMap = {};
    this.elements = [];
    var offscreenGroup = this.getOffscreenGroup();
    offscreenGroup.clear();
    var beforeMappingData = this.beforeMappingData;
    var dataArray = this.beforeMapping(beforeMappingData);
    this.dataArray = new Array(dataArray.length);
    for (var i = 0; i < dataArray.length; i++) {
      var data = dataArray[i];
      this.dataArray[i] = this.mapping(data);
    }
    this.updateElements(this.dataArray, isUpdate);
    this.lastElementsMap = this.elementsMap;
    if (this.canDoGroupAnimation(isUpdate)) {
      var container = this.container;
      var type = this.type;
      var coordinate = this.coordinate;
      var animateCfg = get14(this.animateOption, 'appear');
      var yScale = this.getYScale();
      var yMinPoint = coordinate.convert({ x: 0, y: yScale.scale(this.getYMinValue()) });
      doGroupAppearAnimate(container, animateCfg, type, coordinate, yMinPoint);
    }
    if (this.labelOption) {
      var deferred = this.useDeferredLabel;
      var callback = function() {
        return _this.renderLabels(flatten3(_this.dataArray), isUpdate);
      }.bind(this);
      if (typeof deferred === 'number') {
        var timeout = typeof deferred === 'number' && deferred !== Infinity ? deferred : 0;
        if (!window.requestIdleCallback) {
          setTimeout(callback, timeout);
        } else {
          var options = timeout && timeout !== Infinity ? { timeout } : void 0;
          window.requestIdleCallback(callback, options);
        }
      } else {
        callback();
      }
    }
    this.lastAttributeOption = __assign12({}, this.attributeOption);
    if (this.visible === false) {
      this.changeVisible(false);
    }
  };
  Geometry2.prototype.clear = function() {
    var _a = this,
      container = _a.container,
      geometryLabel = _a.geometryLabel,
      offscreenGroup = _a.offscreenGroup;
    if (container) {
      container.clear();
    }
    if (geometryLabel) {
      geometryLabel.clear();
    }
    if (offscreenGroup) {
      offscreenGroup.clear();
    }
    this.scaleDefs = void 0;
    this.attributes = {};
    this.scales = {};
    this.elementsMap = {};
    this.lastElementsMap = {};
    this.elements = [];
    this.adjusts = {};
    this.dataArray = null;
    this.beforeMappingData = null;
    this.lastAttributeOption = void 0;
    this.defaultSize = void 0;
    this.idFields = [];
    this.groupScales = void 0;
    this.hasSorted = false;
    this.isCoordinateChanged = false;
  };
  Geometry2.prototype.destroy = function() {
    this.clear();
    var container = this.container;
    container.remove(true);
    if (this.offscreenGroup) {
      this.offscreenGroup.remove(true);
      this.offscreenGroup = null;
    }
    if (this.geometryLabel) {
      this.geometryLabel.destroy();
      this.geometryLabel = null;
    }
    this.theme = void 0;
    this.shapeFactory = void 0;
    _super.prototype.destroy.call(this);
  };
  Geometry2.prototype.getGroupScales = function() {
    return this.groupScales;
  };
  Geometry2.prototype.getAttribute = function(name) {
    return this.attributes[name];
  };
  Geometry2.prototype.getXScale = function() {
    return this.getAttribute('position').scales[0];
  };
  Geometry2.prototype.getYScale = function() {
    return this.getAttribute('position').scales[1];
  };
  Geometry2.prototype.getGroupAttributes = function() {
    var rst = [];
    each15(this.attributes, function(attr) {
      if (GROUP_ATTRS.includes(attr.type)) {
        rst.push(attr);
      }
    });
    return rst;
  };
  Geometry2.prototype.getDefaultValue = function(attrName) {
    var value;
    var attr = this.getAttribute(attrName);
    if (attr && isEmpty5(attr.scales)) {
      value = attr.values[0];
    }
    return value;
  };
  Geometry2.prototype.getAttributeValues = function(attr, obj) {
    var params = [];
    var scales = attr.scales;
    for (var index = 0, length_1 = scales.length; index < length_1; index++) {
      var scale = scales[index];
      var field = scale.field;
      if (scale.isIdentity) {
        params.push(scale.values);
      } else {
        params.push(obj[field]);
      }
    }
    return attr.mapping.apply(attr, __spreadArray8([], __read11(params), false));
  };
  Geometry2.prototype.getAdjust = function(adjustType) {
    return this.adjusts[adjustType];
  };
  Geometry2.prototype.getCoordinate = function() {
    return this.coordinate;
  };
  Geometry2.prototype.getData = function() {
    return this.data;
  };
  Geometry2.prototype.getShapeMarker = function(shapeName, cfg) {
    var shapeFactory = this.getShapeFactory();
    return shapeFactory.getMarker(shapeName, cfg);
  };
  Geometry2.prototype.getElementsBy = function(condition) {
    return this.elements.filter(function(element) {
      return condition(element);
    });
  };
  Geometry2.prototype.getElements = function() {
    return this.elements;
  };
  Geometry2.prototype.getElementId = function(data) {
    data = isArray9(data) ? data[0] : data;
    var originData = data[FIELD_ORIGIN];
    if (this.idFields.length) {
      var elementId = originData[this.idFields[0]];
      for (var index = 1; index < this.idFields.length; index++) {
        elementId += '-' + originData[this.idFields[index]];
      }
      return elementId;
    }
    var type = this.type;
    var xScale = this.getXScale();
    var yScale = this.getYScale();
    var xField = xScale.field || 'x';
    var yField = yScale.field || 'y';
    var yVal = originData[yField];
    var xVal;
    if (xScale.type === 'identity') {
      xVal = xScale.values[0];
    } else {
      xVal = originData[xField];
    }
    var id;
    if (type === 'interval' || type === 'schema') {
      id = ''.concat(xVal);
    } else if (type === 'line' || type === 'area' || type === 'path') {
      id = type;
    } else {
      id = ''.concat(xVal, '-').concat(yVal);
    }
    var groupScales = this.groupScales;
    for (var index = 0, length_2 = groupScales.length; index < length_2; index++) {
      var groupScale = groupScales[index];
      var field = groupScale.field;
      id = ''.concat(id, '-').concat(originData[field]);
    }
    var dodgeAdjust = this.getAdjust('dodge');
    if (dodgeAdjust) {
      var dodgeBy = dodgeAdjust.dodgeBy;
      if (dodgeBy) {
        id = ''.concat(id, '-').concat(originData[dodgeBy]);
      }
    }
    if (this.getAdjust('jitter')) {
      id = ''
        .concat(id, '-')
        .concat(data.x, '-')
        .concat(data.y);
    }
    return id;
  };
  Geometry2.prototype.getScaleFields = function() {
    var fields = [];
    var tmpMap = /* @__PURE__ */ new Map();
    var _a = this,
      attributeOption = _a.attributeOption,
      labelOption = _a.labelOption,
      tooltipOption = _a.tooltipOption;
    for (var attributeType in attributeOption) {
      if (attributeOption.hasOwnProperty(attributeType)) {
        var eachOpt = attributeOption[attributeType];
        if (eachOpt.fields) {
          uniq(eachOpt.fields, fields, tmpMap);
        } else if (eachOpt.values) {
          uniq(eachOpt.values, fields, tmpMap);
        }
      }
    }
    if (labelOption && labelOption.fields) {
      uniq(labelOption.fields, fields, tmpMap);
    }
    if (isObject3(tooltipOption) && tooltipOption.fields) {
      uniq(tooltipOption.fields, fields, tmpMap);
    }
    return fields;
  };
  Geometry2.prototype.changeVisible = function(visible) {
    _super.prototype.changeVisible.call(this, visible);
    var elements = this.elements;
    for (var index = 0, length_3 = elements.length; index < length_3; index++) {
      var element = elements[index];
      element.changeVisible(visible);
    }
    if (visible) {
      if (this.container) {
        this.container.show();
      }
      if (this.labelsContainer) {
        this.labelsContainer.show();
      }
    } else {
      if (this.container) {
        this.container.hide();
      }
      if (this.labelsContainer) {
        this.labelsContainer.hide();
      }
    }
  };
  Geometry2.prototype.getFields = function() {
    var uniqMap = /* @__PURE__ */ new Map();
    var fields = [];
    Object.values(this.attributeOption).forEach(function(cfg) {
      var fs = (cfg === null || cfg === void 0 ? void 0 : cfg.fields) || [];
      fs.forEach(function(f) {
        if (!uniqMap.has(f)) {
          fields.push(f);
        }
        uniqMap.set(f, true);
      });
    }, []);
    return fields;
  };
  Geometry2.prototype.getGroupFields = function() {
    var groupFields = [];
    var tmpMap = /* @__PURE__ */ new Map();
    for (var index = 0, length_4 = GROUP_ATTRS.length; index < length_4; index++) {
      var attributeName = GROUP_ATTRS[index];
      var cfg = this.attributeOption[attributeName];
      if (cfg && cfg.fields) {
        uniq(cfg.fields, groupFields, tmpMap);
      }
    }
    return groupFields;
  };
  Geometry2.prototype.getXYFields = function() {
    var _a = __read11(this.attributeOption.position.fields, 2),
      x = _a[0],
      y = _a[1];
    return [x, y];
  };
  Geometry2.prototype.getXField = function() {
    return get14(this.getXYFields(), [0]);
  };
  Geometry2.prototype.getYField = function() {
    return get14(this.getXYFields(), [1]);
  };
  Geometry2.prototype.getShapes = function() {
    return this.elements.map(function(element) {
      return element.shape;
    });
  };
  Geometry2.prototype.getOffscreenGroup = function() {
    if (!this.offscreenGroup) {
      var GroupCtor = this.container.getGroupBase();
      this.offscreenGroup = new GroupCtor({});
    }
    return this.offscreenGroup;
  };
  Geometry2.prototype.sort = function(mappingArray) {
    if (!this.hasSorted) {
      var xScale_1 = this.getXScale();
      var xField_1 = xScale_1.field;
      for (var index = 0; index < mappingArray.length; index++) {
        var itemArr = mappingArray[index];
        itemArr.sort(function(obj1, obj2) {
          return xScale_1.translate(obj1[FIELD_ORIGIN][xField_1]) - xScale_1.translate(obj2[FIELD_ORIGIN][xField_1]);
        });
      }
    }
    this.hasSorted = true;
  };
  Geometry2.prototype.adjustScale = function() {
    var yScale = this.getYScale();
    if (yScale && this.getAdjust('stack')) {
      this.updateStackRange(yScale, this.beforeMappingData);
    }
  };
  Geometry2.prototype.getShapeFactory = function() {
    var shapeType = this.shapeType;
    if (!getShapeFactory(shapeType)) {
      return;
    }
    if (!this.shapeFactory) {
      this.shapeFactory = clone3(getShapeFactory(shapeType));
    }
    this.shapeFactory.coordinate = this.coordinate;
    this.shapeFactory.theme = this.theme.geometries[shapeType] || {};
    return this.shapeFactory;
  };
  Geometry2.prototype.createShapePointsCfg = function(obj) {
    var xScale = this.getXScale();
    var yScale = this.getYScale();
    var x = this.normalizeValues(obj[xScale.field], xScale);
    var y;
    if (yScale) {
      y = this.normalizeValues(obj[yScale.field], yScale);
    } else {
      y = obj.y ? obj.y : 0.1;
    }
    return { x, y, y0: yScale ? yScale.scale(this.getYMinValue()) : void 0 };
  };
  Geometry2.prototype.createElement = function(mappingDatum, index, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    var container = this.container;
    var shapeCfg = this.getDrawCfg(mappingDatum);
    var shapeFactory = this.getShapeFactory();
    var element = new element_default({
      shapeFactory,
      container,
      offscreenGroup: this.getOffscreenGroup(),
      elementIndex: index
    });
    element.animate = this.animateOption;
    element.geometry = this;
    element.draw(shapeCfg, isUpdate);
    return element;
  };
  Geometry2.prototype.getDrawCfg = function(mappingDatum) {
    var originData = mappingDatum[FIELD_ORIGIN];
    var cfg = {
      mappingData: mappingDatum,
      data: originData,
      x: mappingDatum.x,
      y: mappingDatum.y,
      color: mappingDatum.color,
      size: mappingDatum.size,
      isInCircle: this.coordinate.isPolar,
      customInfo: this.customOption
    };
    var shapeName = mappingDatum.shape;
    if (!shapeName && this.getShapeFactory()) {
      shapeName = this.getShapeFactory().defaultShapeType;
    }
    cfg.shape = shapeName;
    var theme = this.theme.geometries[this.shapeType];
    cfg.defaultStyle = get14(theme, [shapeName, 'default'], {}).style;
    if (!cfg.defaultStyle && this.getShapeFactory()) {
      cfg.defaultStyle = this.getShapeFactory().getDefaultStyle(theme);
    }
    var styleOption = this.styleOption;
    if (styleOption) {
      cfg.style = this.getStyleCfg(styleOption, originData);
    }
    if (this.generatePoints) {
      cfg.points = mappingDatum.points;
      cfg.nextPoints = mappingDatum.nextPoints;
    }
    return cfg;
  };
  Geometry2.prototype.updateElements = function(mappingDataArray, isUpdate) {
    var e_1, _a, e_2, _b, e_3, _c;
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    var keyDatum = /* @__PURE__ */ new Map();
    var keys4 = [];
    var keyIndex = /* @__PURE__ */ new Map();
    var index = 0;
    for (var i = 0; i < mappingDataArray.length; i++) {
      var mappingData = mappingDataArray[i];
      for (var j = 0; j < mappingData.length; j++) {
        var mappingDatum = mappingData[j];
        var key = this.getElementId(mappingDatum);
        var finalKey = keyDatum.has(key)
          ? ''
              .concat(key, '-')
              .concat(i, '-')
              .concat(j)
          : key;
        keys4.push(finalKey);
        keyDatum.set(finalKey, mappingDatum);
        keyIndex.set(finalKey, index);
        index++;
      }
    }
    this.elements = new Array(index);
    var _d = diff(this.lastElementsMap, keys4),
      added = _d.added,
      updated = _d.updated,
      removed = _d.removed;
    try {
      for (var added_1 = __values5(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
        var key = added_1_1.value;
        var mappingDatum = keyDatum.get(key);
        var i = keyIndex.get(key);
        var element = this.createElement(mappingDatum, i, isUpdate);
        this.elements[i] = element;
        this.elementsMap[key] = element;
        if (element.shape) {
          element.shape.set('zIndex', this.zIndexReversed ? this.elements.length - i : i);
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (added_1_1 && !added_1_1.done && (_a = added_1.return)) _a.call(added_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    try {
      for (
        var updated_1 = __values5(updated), updated_1_1 = updated_1.next();
        !updated_1_1.done;
        updated_1_1 = updated_1.next()
      ) {
        var key = updated_1_1.value;
        var element = this.lastElementsMap[key];
        var mappingDatum = keyDatum.get(key);
        var currentShapeCfg = this.getDrawCfg(mappingDatum);
        var preShapeCfg = element.getModel();
        var i = keyIndex.get(key);
        if (this.isCoordinateChanged || isModelChange(currentShapeCfg, preShapeCfg)) {
          element.animate = this.animateOption;
          element.update(currentShapeCfg);
        }
        this.elements[i] = element;
        this.elementsMap[key] = element;
        if (element.shape) {
          element.shape.set('zIndex', this.zIndexReversed ? this.elements.length - i : i);
        }
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (updated_1_1 && !updated_1_1.done && (_b = updated_1.return)) _b.call(updated_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    if (this.container) {
      this.container.sort();
    }
    try {
      for (
        var removed_1 = __values5(removed), removed_1_1 = removed_1.next();
        !removed_1_1.done;
        removed_1_1 = removed_1.next()
      ) {
        var key = removed_1_1.value;
        var element = this.lastElementsMap[key];
        element.animate = this.animateOption;
        element.destroy();
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (removed_1_1 && !removed_1_1.done && (_c = removed_1.return)) _c.call(removed_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  Geometry2.prototype.getLabelType = function() {
    var _a = this,
      labelOption = _a.labelOption,
      coordinate = _a.coordinate,
      type = _a.type;
    var coordinateType = coordinate.type,
      isTransposed = coordinate.isTransposed;
    var labelType = get14(labelOption, ['cfg', 'type']);
    if (!labelType) {
      if (coordinateType === 'polar') {
        labelType = isTransposed ? 'pie' : 'polar';
      } else if (coordinateType === 'theta') {
        labelType = 'pie';
      } else if (type === 'interval' || type === 'polygon') {
        labelType = 'interval';
      } else {
        labelType = 'base';
      }
    }
    return labelType;
  };
  Geometry2.prototype.getYMinValue = function() {
    var yScale = this.getYScale();
    var min2 = yScale.min,
      max3 = yScale.max;
    var value;
    if (min2 >= 0) {
      value = min2;
    } else if (max3 <= 0) {
      value = max3;
    } else {
      value = 0;
    }
    return value;
  };
  Geometry2.prototype.createAttrOption = function(attrName, field, cfg) {
    if (isNil6(field) || isObject3(field)) {
      if (isObject3(field) && isEqual5(Object.keys(field), ['values'])) {
        set2(this.attributeOption, attrName, { fields: field.values });
      } else {
        set2(this.attributeOption, attrName, field);
      }
    } else {
      var attrCfg = {};
      if (isNumber7(field)) {
        attrCfg.values = [field];
      } else {
        attrCfg.fields = parseFields(field);
      }
      if (cfg) {
        if (isFunction7(cfg)) {
          attrCfg.callback = cfg;
        } else {
          attrCfg.values = cfg;
        }
      }
      set2(this.attributeOption, attrName, attrCfg);
    }
  };
  Geometry2.prototype.initAttributes = function() {
    var _this = this;
    var _a = this,
      attributes = _a.attributes,
      attributeOption = _a.attributeOption,
      theme = _a.theme,
      shapeType = _a.shapeType;
    this.groupScales = [];
    var tmpMap = {};
    var _loop_1 = function(attrType2) {
      if (attributeOption.hasOwnProperty(attrType2)) {
        var option = attributeOption[attrType2];
        if (!option) {
          return { value: void 0 };
        }
        var attrCfg = __assign12({}, option);
        var callback = attrCfg.callback,
          values3 = attrCfg.values,
          _b = attrCfg.fields,
          fields = _b === void 0 ? [] : _b;
        var scales = fields.map(function(field) {
          var scale = _this.scales[field];
          if (!tmpMap[field] && GROUP_ATTRS.includes(attrType2)) {
            var inferedScaleType = inferScaleType(scale, get14(_this.scaleDefs, field), attrType2, _this.type);
            if (inferedScaleType === 'cat') {
              _this.groupScales.push(scale);
              tmpMap[field] = true;
            }
          }
          return scale;
        });
        attrCfg.scales = scales;
        if (attrType2 !== 'position' && scales.length === 1 && scales[0].type === 'identity') {
          attrCfg.values = scales[0].values;
        } else if (!callback && !values3) {
          if (attrType2 === 'size') {
            attrCfg.values = theme.sizes;
          } else if (attrType2 === 'shape') {
            attrCfg.values = theme.shapes[shapeType] || [];
          } else if (attrType2 === 'color') {
            if (scales.length) {
              attrCfg.values = scales[0].values.length <= 10 ? theme.colors10 : theme.colors20;
            } else {
              attrCfg.values = theme.colors10;
            }
          }
        }
        var AttributeCtor = getAttributeClass(attrType2);
        attributes[attrType2] = new AttributeCtor(attrCfg);
      }
    };
    for (var attrType in attributeOption) {
      var state_1 = _loop_1(attrType);
      if (typeof state_1 === 'object') return state_1.value;
    }
  };
  Geometry2.prototype.processData = function(data) {
    var e_4, _a;
    this.hasSorted = false;
    var scales = this.getAttribute('position').scales;
    var categoryScales = scales.filter(function(scale2) {
      return scale2.isCategory;
    });
    var groupedArray = this.groupData(data);
    var beforeAdjust = [];
    for (var i = 0, len = groupedArray.length; i < len; i++) {
      var subData = groupedArray[i];
      var arr = [];
      for (var j = 0, subLen = subData.length; j < subLen; j++) {
        var originData = subData[j];
        var item = {};
        for (var k in originData) {
          item[k] = originData[k];
        }
        item[FIELD_ORIGIN] = originData;
        try {
          for (
            var categoryScales_1 = ((e_4 = void 0), __values5(categoryScales)),
              categoryScales_1_1 = categoryScales_1.next();
            !categoryScales_1_1.done;
            categoryScales_1_1 = categoryScales_1.next()
          ) {
            var scale = categoryScales_1_1.value;
            var field = scale.field;
            item[field] = scale.translate(item[field]);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (categoryScales_1_1 && !categoryScales_1_1.done && (_a = categoryScales_1.return))
              _a.call(categoryScales_1);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
        arr.push(item);
      }
      beforeAdjust.push(arr);
    }
    var dataArray = this.adjustData(beforeAdjust);
    this.beforeMappingData = dataArray;
    return dataArray;
  };
  Geometry2.prototype.adjustData = function(dataArray) {
    var adjustOption = this.adjustOption;
    var _a = this,
      intervalPadding = _a.intervalPadding,
      dodgePadding = _a.dodgePadding,
      theme = _a.theme;
    var maxColumnWidth = this.maxColumnWidth || theme.maxColumnWidth;
    var minColumnWidth = this.minColumnWidth || theme.minColumnWidth;
    var columnWidthRatio = this.columnWidthRatio || theme.columnWidthRatio;
    var result = dataArray;
    if (adjustOption) {
      var xScale_2 = this.getXScale();
      var yScale = this.getYScale();
      var xField = xScale_2.field;
      var yField = yScale ? yScale.field : null;
      var xDimensionLength = getXDimensionLength(this.coordinate);
      var groupNum = xScale_2.values.length;
      var sizeAttr = this.getAttribute('size');
      var defaultSize = void 0;
      if (sizeAttr) {
        defaultSize = sizeAttr.values[0];
      }
      for (var i = 0, len = adjustOption.length; i < len; i++) {
        var adjust = adjustOption[i];
        var adjustCfg = __assign12(
          {
            xField,
            yField,
            intervalPadding,
            dodgePadding,
            xDimensionLength,
            groupNum,
            defaultSize,
            maxColumnWidth,
            minColumnWidth,
            columnWidthRatio
          },
          adjust
        );
        var type = adjust.type;
        if (type === 'dodge') {
          var adjustNames = [];
          if (xScale_2.isCategory || xScale_2.type === 'identity') {
            adjustNames.push('x');
          } else if (!yScale) {
            adjustNames.push('y');
          } else {
            throw new Error('dodge is not support linear attribute, please use category attribute!');
          }
          adjustCfg.adjustNames = adjustNames;
          adjustCfg.dodgeRatio = columnWidthRatio;
        } else if (type === 'stack') {
          var coordinate = this.coordinate;
          if (!yScale) {
            adjustCfg.height = coordinate.getHeight();
            var size6 = this.getDefaultValue('size') || 3;
            adjustCfg.size = size6;
          }
          if (!coordinate.isTransposed && isNil6(adjustCfg.reverseOrder)) {
            adjustCfg.reverseOrder = true;
          }
        }
        var adjustCtor = getAdjustClass(type);
        adjustCfg.dimValuesMap = {};
        if (xScale_2 && xScale_2.values) {
          adjustCfg.dimValuesMap[xScale_2.field] = xScale_2.values.map(function(v) {
            return xScale_2.translate(v);
          });
        }
        var adjustInstance = new adjustCtor(adjustCfg);
        result = adjustInstance.process(result);
        this.adjusts[type] = adjustInstance;
      }
    }
    return result;
  };
  Geometry2.prototype.groupData = function(data) {
    var groupScales = this.getGroupScales();
    var scaleDefs = this.scaleDefs;
    var appendConditions = {};
    var groupFields = [];
    for (var index = 0; index < groupScales.length; index++) {
      var scale = groupScales[index];
      var field = scale.field;
      groupFields.push(field);
      if (get14(scaleDefs, [field, 'values'])) {
        appendConditions[field] = scaleDefs[field].values;
      }
    }
    return group(data, groupFields, appendConditions);
  };
  Geometry2.prototype.updateStackRange = function(scale, dataArray) {
    var mergeArray = flatten3(dataArray);
    var field = scale.field;
    var min2 = scale.min;
    var max3 = scale.max;
    for (var index = 0; index < mergeArray.length; index++) {
      var obj = mergeArray[index];
      var tmpMin = Math.min.apply(null, obj[field]);
      var tmpMax = Math.max.apply(null, obj[field]);
      if (tmpMin < min2) {
        min2 = tmpMin;
      }
      if (tmpMax > max3) {
        max3 = tmpMax;
      }
    }
    var scaleDefs = this.scaleDefs;
    var cfg = {};
    if (min2 < scale.min && !get14(scaleDefs, [field, 'min'])) {
      cfg.min = min2;
    }
    if (max3 > scale.max && !get14(scaleDefs, [field, 'max'])) {
      cfg.max = max3;
    }
    scale.change(cfg);
  };
  Geometry2.prototype.beforeMapping = function(beforeMappingData) {
    var source = beforeMappingData;
    if (this.sortable) {
      this.sort(source);
    }
    if (this.generatePoints) {
      for (var index = 0, length_5 = source.length; index < length_5; index++) {
        var currentData = source[index];
        this.generateShapePoints(currentData);
        var nextData = source[index + 1];
        if (nextData) {
          this.generateShapePoints(nextData);
          currentData[0].nextPoints = nextData[0].points;
        }
      }
    }
    return source;
  };
  Geometry2.prototype.generateShapePoints = function(data) {
    var shapeFactory = this.getShapeFactory();
    var shapeAttr = this.getAttribute('shape');
    for (var index = 0; index < data.length; index++) {
      var obj = data[index];
      var cfg = this.createShapePointsCfg(obj);
      var shape = shapeAttr ? this.getAttributeValues(shapeAttr, obj) : null;
      var points = shapeFactory.getShapePoints(shape, cfg);
      obj.points = points;
    }
  };
  Geometry2.prototype.normalizeValues = function(values3, scale) {
    var rst = [];
    if (isArray9(values3)) {
      for (var index = 0; index < values3.length; index++) {
        var value = values3[index];
        rst.push(scale.scale(value));
      }
    } else {
      rst = scale.scale(values3);
    }
    return rst;
  };
  Geometry2.prototype.mapping = function(data) {
    var attributes = this.attributes;
    var mappingData = [];
    for (var index = 0; index < data.length; index++) {
      var record = data[index];
      var newRecord = { _origin: record[FIELD_ORIGIN], points: record.points, nextPoints: record.nextPoints };
      for (var k in attributes) {
        if (attributes.hasOwnProperty(k)) {
          var attr = attributes[k];
          var names = attr.names;
          var values3 = this.getAttributeValues(attr, record);
          if (names.length > 1) {
            for (var j = 0; j < values3.length; j += 1) {
              var val = values3[j];
              var name_1 = names[j];
              newRecord[name_1] = isArray9(val) && val.length === 1 ? val[0] : val;
            }
          } else {
            newRecord[names[0]] = values3.length === 1 ? values3[0] : values3;
          }
        }
      }
      this.convertPoint(newRecord);
      mappingData.push(newRecord);
    }
    return mappingData;
  };
  Geometry2.prototype.convertPoint = function(mappingRecord) {
    var x = mappingRecord.x,
      y = mappingRecord.y;
    var rstX;
    var rstY;
    var obj;
    var coordinate = this.coordinate;
    if (isArray9(x) && isArray9(y)) {
      rstX = [];
      rstY = [];
      for (var i = 0, j = 0, xLen = x.length, yLen = y.length; i < xLen && j < yLen; i += 1, j += 1) {
        obj = coordinate.convert({ x: x[i], y: y[j] });
        rstX.push(obj.x);
        rstY.push(obj.y);
      }
    } else if (isArray9(y)) {
      rstY = [];
      for (var index = 0; index < y.length; index++) {
        var yVal = y[index];
        obj = coordinate.convert({ x, y: yVal });
        if (rstX && rstX !== obj.x) {
          if (!isArray9(rstX)) {
            rstX = [rstX];
          }
          rstX.push(obj.x);
        } else {
          rstX = obj.x;
        }
        rstY.push(obj.y);
      }
    } else if (isArray9(x)) {
      rstX = [];
      for (var index = 0; index < x.length; index++) {
        var xVal = x[index];
        obj = coordinate.convert({ x: xVal, y });
        if (rstY && rstY !== obj.y) {
          if (!isArray9(rstY)) {
            rstY = [rstY];
          }
          rstY.push(obj.y);
        } else {
          rstY = obj.y;
        }
        rstX.push(obj.x);
      }
    } else {
      var point = coordinate.convert({ x, y });
      rstX = point.x;
      rstY = point.y;
    }
    mappingRecord.x = rstX;
    mappingRecord.y = rstY;
  };
  Geometry2.prototype.getStyleCfg = function(styleOption, originData) {
    var _a = styleOption.fields,
      fields = _a === void 0 ? [] : _a,
      callback = styleOption.callback,
      cfg = styleOption.cfg;
    if (cfg) {
      return cfg;
    }
    var params = fields.map(function(field) {
      return originData[field];
    });
    return callback.apply(void 0, __spreadArray8([], __read11(params), false));
  };
  Geometry2.prototype.setCfg = function(cfg) {
    var _this = this;
    var coordinate = cfg.coordinate,
      data = cfg.data,
      theme = cfg.theme,
      scaleDefs = cfg.scaleDefs;
    if (coordinate) {
      this.coordinate = coordinate;
    }
    if (data) {
      this.data = data;
    }
    if (scaleDefs) {
      this.scaleDefs = scaleDefs;
      this.idFields = [];
      each15(scaleDefs, function(scaleDef, field) {
        if (scaleDef && scaleDef.key) {
          _this.idFields.push(field);
        }
      });
    }
    if (theme) {
      this.theme = this.userTheme ? deepMix11({}, theme, this.userTheme) : theme;
    }
  };
  Geometry2.prototype.renderLabels = function(mappingArray, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    return __awaiter(this, void 0, void 0, function() {
      var geometryLabel, labelType, GeometryLabelsCtor, labelsMap, elementLabels, _a, _b, _c, element, labels;
      var e_5, _d;
      var _this = this;
      return __generator(this, function(_e) {
        switch (_e.label) {
          case 0:
            geometryLabel = this.geometryLabel;
            this.emit(GEOMETRY_LIFE_CIRCLE.BEFORE_RENDER_LABEL);
            if (!geometryLabel) {
              labelType = this.getLabelType();
              GeometryLabelsCtor = getGeometryLabel(labelType);
              geometryLabel = new GeometryLabelsCtor(this);
              this.geometryLabel = geometryLabel;
            }
            return [4, geometryLabel.render(mappingArray, isUpdate)];
          case 1:
            _e.sent();
            labelsMap = geometryLabel.labelsRenderer.shapesMap;
            elementLabels = /* @__PURE__ */ new Map();
            each15(labelsMap, function(labelGroup, labelGroupId) {
              var labelChildren = labelGroup.getChildren() || [];
              for (var j = 0; j < labelChildren.length; j++) {
                var labelShape = labelChildren[j];
                var element2 = _this.elementsMap[labelShape.get('elementId') || labelGroupId.split(' ')[0]];
                if (element2) {
                  labelShape.cfg.name = ['element', 'label'];
                  labelShape.cfg.element = element2;
                  var labels2 = elementLabels.get(element2) || /* @__PURE__ */ new Set();
                  labels2.add(labelGroup);
                  elementLabels.set(element2, labels2);
                }
              }
            });
            try {
              for (_a = __values5(elementLabels.entries()), _b = _a.next(); !_b.done; _b = _a.next()) {
                (_c = __read11(_b.value, 2)), (element = _c[0]), (labels = _c[1]);
                element.labelShape = __spreadArray8([], __read11(labels), false);
              }
            } catch (e_5_1) {
              e_5 = { error: e_5_1 };
            } finally {
              try {
                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
              } finally {
                if (e_5) throw e_5.error;
              }
            }
            this.emit(GEOMETRY_LIFE_CIRCLE.AFTER_RENDER_LABEL);
            return [2];
        }
      });
    });
  };
  Geometry2.prototype.canDoGroupAnimation = function(isUpdate) {
    return (
      !isUpdate &&
      this.animateOption &&
      (get14(this.animateOption, 'appear') === void 0 ||
        (get14(this.animateOption, 'appear') && get14(this.animateOption, ['appear', 'animation']) === void 0))
    );
  };
  return Geometry2;
})(base_default);
var base_default3 = Geometry; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/base.js
import {
  __assign as __assign14,
  __awaiter as __awaiter3,
  __generator as __generator3,
  __read as __read12,
  __spreadArray as __spreadArray9
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix13,
  each as each18,
  get as get17,
  isArray as isArray11,
  isFunction as isFunction8,
  isNil as isNil8,
  isNumber as isNumber9,
  isUndefined as isUndefined2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/component/labels.js
import {
  __assign as __assign13,
  __awaiter as __awaiter2,
  __generator as __generator2,
  __rest as __rest3,
  __values as __values6
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix12,
  each as each17,
  get as get16,
  isArray as isArray10,
  isNull
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/util/index.js
import {
  isNil as isNil7,
  isNumber as isNumber8,
  some as some3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/transform.js
import { ext as ext2 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
var transform = ext2.transform;
function translate(element, x, y) {
  var matrix = transform(element.getMatrix(), [['t', x, y]]);
  element.setMatrix(matrix);
}
function getRotateMatrix(element, rotateRadian) {
  var _a = element.attr(),
    x = _a.x,
    y = _a.y;
  var matrix = transform(element.getMatrix(), [
    ['t', -x, -y],
    ['r', rotateRadian],
    ['t', x, y]
  ]);
  return matrix;
}
function rotate(element, rotateRadian) {
  var matrix = getRotateMatrix(element, rotateRadian);
  element.setMatrix(matrix);
}
function zoom(element, ratio) {
  var bbox = element.getBBox();
  var x = (bbox.minX + bbox.maxX) / 2;
  var y = (bbox.minY + bbox.maxY) / 2;
  element.applyToMatrix([x, y, 1]);
  var matrix = transform(element.getMatrix(), [
    ['t', -x, -y],
    ['s', ratio, ratio],
    ['t', x, y]
  ]);
  element.setMatrix(matrix);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/util/index.js
function findLabelTextShape(label) {
  return label.find(function(el) {
    return el.get('type') === 'text';
  });
}
function getLabelBackgroundInfo(labelGroup, labelItem, padding) {
  if (padding === void 0) {
    padding = [0, 0, 0, 0];
  }
  var content = labelGroup && labelGroup.getChildren()[0];
  if (content) {
    var labelShape = content.clone();
    if (labelItem === null || labelItem === void 0 ? void 0 : labelItem.rotate) {
      rotate(labelShape, -labelItem.rotate);
    }
    var _a = labelShape.getCanvasBBox(),
      x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height;
    labelShape.destroy();
    var boxPadding = padding;
    if (isNil7(boxPadding)) {
      boxPadding = [2, 2, 2, 2];
    } else if (isNumber8(boxPadding)) {
      boxPadding = new Array(4).fill(boxPadding);
    }
    return {
      x: x - boxPadding[3],
      y: y - boxPadding[0],
      width: width + boxPadding[1] + boxPadding[3],
      height: height + boxPadding[0] + boxPadding[2],
      rotation: (labelItem === null || labelItem === void 0 ? void 0 : labelItem.rotate) || 0
    };
  }
  return { x: 0, y: 0, width: 0, height: 0, rotation: 0 };
}
function getOverlapArea(a, b, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var xOverlap = Math.max(
    0,
    Math.min(a.x + a.width + margin, b.x + b.width + margin) - Math.max(a.x - margin, b.x - margin)
  );
  var yOverlap = Math.max(
    0,
    Math.min(a.y + a.height + margin, b.y + b.height + margin) - Math.max(a.y - margin, b.y - margin)
  );
  return xOverlap * yOverlap;
}
function checkShapeOverlap(cur, dones) {
  var box = cur.getBBox();
  return some3(dones, function(done) {
    var target = done.getBBox();
    return getOverlapArea(box, target, 2) > 0;
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/component/update-label.js
import { each as each16, get as get15 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function updateLabel(fromShape, toShape, cfg) {
  var data = cfg.data,
    origin = cfg.origin,
    animateCfg = cfg.animateCfg,
    coordinate = cfg.coordinate;
  var updateAnimateCfg = get15(animateCfg, 'update');
  fromShape.set('data', data);
  fromShape.set('origin', origin);
  fromShape.set('animateCfg', animateCfg);
  fromShape.set('coordinate', coordinate);
  fromShape.set('visible', toShape.get('visible'));
  (fromShape.getChildren() || []).forEach(function(fromChild, idx) {
    var toChild = toShape.getChildByIndex(idx);
    if (!toChild) {
      fromShape.removeChild(fromChild);
      fromChild.remove(true);
    } else {
      fromChild.set('data', data);
      fromChild.set('origin', origin);
      fromChild.set('animateCfg', animateCfg);
      fromChild.set('coordinate', coordinate);
      var newAttrs = getReplaceAttrs(fromChild, toChild);
      if (updateAnimateCfg) {
        doAnimate(fromChild, updateAnimateCfg, { toAttrs: newAttrs, coordinate });
      } else {
        fromChild.attr(newAttrs);
      }
      if (toChild.isGroup()) {
        updateLabel(fromChild, toChild, cfg);
      }
    }
  });
  each16(toShape.getChildren(), function(child, idx) {
    if (idx >= fromShape.getCount()) {
      if (!child.destroyed) {
        fromShape.add(child);
      }
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/component/labels.js
var Labels = (function() {
  function Labels2(cfg) {
    this.shapesMap = {};
    var layout2 = cfg.layout,
      container = cfg.container;
    this.layout = layout2;
    this.container = container;
  }
  Labels2.prototype.render = function(items, shapes, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    return __awaiter2(this, void 0, void 0, function() {
      var shapesMap, offscreenGroup, items_1, items_1_1, item, lastShapesMap;
      var e_1, _a;
      var _this = this;
      return __generator2(this, function(_b) {
        switch (_b.label) {
          case 0:
            shapesMap = {};
            offscreenGroup = this.createOffscreenGroup();
            if (!items.length) return [3, 2];
            try {
              for (
                items_1 = __values6(items), items_1_1 = items_1.next();
                !items_1_1.done;
                items_1_1 = items_1.next()
              ) {
                item = items_1_1.value;
                if (item) {
                  shapesMap[item.id] = this.renderLabel(item, offscreenGroup);
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            return [4, this.doLayout(items, shapes, shapesMap)];
          case 1:
            _b.sent();
            this.renderLabelLine(items, shapesMap);
            this.renderLabelBackground(items, shapesMap);
            this.adjustLabel(items, shapesMap);
            _b.label = 2;
          case 2:
            lastShapesMap = this.shapesMap;
            each17(shapesMap, function(shape, id) {
              if (shape.destroyed) {
                delete shapesMap[id];
              } else {
                if (lastShapesMap[id]) {
                  var data = shape.get('data');
                  var origin_1 = shape.get('origin');
                  var coordinate = shape.get('coordinate');
                  var currentAnimateCfg = shape.get('animateCfg');
                  var currentShape = lastShapesMap[id];
                  updateLabel(currentShape, shapesMap[id], {
                    data,
                    origin: origin_1,
                    animateCfg: currentAnimateCfg,
                    coordinate
                  });
                  shapesMap[id] = currentShape;
                } else {
                  if (_this.container.destroyed) return;
                  _this.container.add(shape);
                  var animateCfg = get16(shape.get('animateCfg'), isUpdate ? 'enter' : 'appear');
                  if (animateCfg) {
                    doAnimate(shape, animateCfg, {
                      toAttrs: __assign13({}, shape.attr()),
                      coordinate: shape.get('coordinate')
                    });
                  }
                }
                delete lastShapesMap[id];
              }
            });
            each17(lastShapesMap, function(deleteShape) {
              var animateCfg = get16(deleteShape.get('animateCfg'), 'leave');
              if (animateCfg) {
                doAnimate(deleteShape, animateCfg, { toAttrs: null, coordinate: deleteShape.get('coordinate') });
              } else {
                deleteShape.remove(true);
              }
            });
            this.shapesMap = shapesMap;
            offscreenGroup.destroy();
            return [2];
        }
      });
    });
  };
  Labels2.prototype.clear = function() {
    this.container.clear();
    this.shapesMap = {};
  };
  Labels2.prototype.destroy = function() {
    this.container.destroy();
    this.shapesMap = null;
  };
  Labels2.prototype.renderLabel = function(cfg, container) {
    var id = cfg.id,
      elementId = cfg.elementId,
      data = cfg.data,
      mappingData = cfg.mappingData,
      coordinate = cfg.coordinate,
      animate = cfg.animate,
      content = cfg.content,
      capture = cfg.capture;
    var shapeAppendCfg = {
      id,
      elementId,
      capture,
      data,
      origin: __assign13(__assign13({}, mappingData), { data: mappingData[FIELD_ORIGIN] }),
      coordinate
    };
    var labelGroup = container.addGroup(
      __assign13(
        {
          name: 'label',
          animateCfg:
            this.animate === false || animate === null || animate === false
              ? false
              : deepMix12({}, this.animate, animate)
        },
        shapeAppendCfg
      )
    );
    var labelShape;
    if ((content.isGroup && content.isGroup()) || (content.isShape && content.isShape())) {
      var _a = content.getCanvasBBox(),
        width = _a.width,
        height = _a.height;
      var textAlign = get16(cfg, 'textAlign', 'left');
      var x = cfg.x;
      var y = cfg.y - height / 2;
      if (textAlign === 'center') {
        x = x - width / 2;
      } else if (textAlign === 'right' || textAlign === 'end') {
        x = x - width;
      }
      translate(content, x, y);
      labelShape = content;
      labelGroup.add(content);
    } else {
      var fill = get16(cfg, ['style', 'fill']);
      labelShape = labelGroup.addShape(
        'text',
        __assign13(
          {
            attrs: __assign13(
              __assign13(
                {
                  x: cfg.x,
                  y: cfg.y,
                  textAlign: cfg.textAlign,
                  textBaseline: get16(cfg, 'textBaseline', 'middle'),
                  text: cfg.content
                },
                cfg.style
              ),
              { fill: isNull(fill) ? cfg.color : fill }
            )
          },
          shapeAppendCfg
        )
      );
    }
    if (cfg.rotate) {
      rotate(labelShape, cfg.rotate);
    }
    return labelGroup;
  };
  Labels2.prototype.doLayout = function(items, shapes, shapesMap) {
    return __awaiter2(this, void 0, void 0, function() {
      var layouts;
      var _this = this;
      return __generator2(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!this.layout) return [3, 2];
            layouts = isArray10(this.layout) ? this.layout : [this.layout];
            return [
              4,
              Promise.all(
                layouts.map(function(layout2) {
                  var layoutFn = getGeometryLabelLayout(get16(layout2, 'type', ''));
                  if (!layoutFn) return;
                  var labelShapes = [];
                  var geometryShapes = [];
                  each17(shapesMap, function(labelShape, id) {
                    labelShapes.push(labelShape);
                    geometryShapes.push(shapes[labelShape.get('elementId')]);
                  });
                  return layoutFn(items, labelShapes, geometryShapes, _this.region, layout2.cfg);
                })
              )
            ];
          case 1:
            _a.sent();
            _a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  };
  Labels2.prototype.renderLabelLine = function(labelItems, shapesMap) {
    each17(labelItems, function(labelItem) {
      var coordinate = get16(labelItem, 'coordinate');
      if (!labelItem || !coordinate) {
        return;
      }
      var center = coordinate.getCenter();
      var radius = coordinate.getRadius();
      if (!labelItem.labelLine) {
        return;
      }
      var labelLineCfg = get16(labelItem, 'labelLine', {});
      var id = labelItem.id;
      var path = labelLineCfg.path;
      if (!path) {
        var start = polarToCartesian(center.x, center.y, radius, labelItem.angle);
        path = [
          ['M', start.x, start.y],
          ['L', labelItem.x, labelItem.y]
        ];
      }
      var labelGroup = shapesMap[id];
      if (!labelGroup.destroyed) {
        labelGroup.addShape('path', {
          capture: false,
          attrs: __assign13(
            {
              path,
              stroke: labelItem.color ? labelItem.color : get16(labelItem, ['style', 'fill'], '#000'),
              fill: null
            },
            labelLineCfg.style
          ),
          id,
          origin: labelItem.mappingData,
          data: labelItem.data,
          coordinate: labelItem.coordinate
        });
      }
    });
  };
  Labels2.prototype.renderLabelBackground = function(labelItems, shapesMap) {
    each17(labelItems, function(labelItem) {
      var coordinate = get16(labelItem, 'coordinate');
      var background = get16(labelItem, 'background');
      if (!background || !coordinate) {
        return;
      }
      var id = labelItem.id;
      var labelGroup = shapesMap[id];
      if (!labelGroup.destroyed) {
        var labelContentShape = labelGroup.getChildren()[0];
        if (labelContentShape) {
          var _a = getLabelBackgroundInfo(labelGroup, labelItem, background.padding),
            rotation = _a.rotation,
            box = __rest3(_a, ['rotation']);
          var backgroundShape = labelGroup.addShape('rect', {
            attrs: __assign13(__assign13({}, box), background.style || {}),
            id,
            origin: labelItem.mappingData,
            data: labelItem.data,
            coordinate: labelItem.coordinate
          });
          backgroundShape.setZIndex(-1);
          if (rotation) {
            var matrix = labelContentShape.getMatrix();
            backgroundShape.setMatrix(matrix);
          }
        }
      }
    });
  };
  Labels2.prototype.createOffscreenGroup = function() {
    var container = this.container;
    var GroupClass = container.getGroupBase();
    var newGroup = new GroupClass({});
    return newGroup;
  };
  Labels2.prototype.adjustLabel = function(items, shapesMap) {
    each17(items, function(item) {
      if (item) {
        var id = item.id;
        var labelGroup = shapesMap[id];
        if (!labelGroup.destroyed) {
          var labelShapes = labelGroup.findAll(function(ele) {
            return ele.get('type') !== 'path';
          });
          each17(labelShapes, function(labelShape) {
            if (labelShape) {
              if (item.offsetX) {
                labelShape.attr('x', labelShape.attr('x') + item.offsetX);
              }
              if (item.offsetY) {
                labelShape.attr('y', labelShape.attr('y') + item.offsetY);
              }
            }
          });
        }
      }
    });
  };
  return Labels2;
})();
var labels_default = Labels; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/base.js
function avg(arr) {
  var sum = 0;
  each18(arr, function(value) {
    sum += value;
  });
  return sum / arr.length;
}
var GeometryLabel = (function() {
  function GeometryLabel2(geometry) {
    this.geometry = geometry;
  }
  GeometryLabel2.prototype.getLabelItems = function(mapppingArray) {
    var _this = this;
    var items = [];
    var labelCfgs = this.getLabelCfgs(mapppingArray);
    each18(mapppingArray, function(mappingData, index) {
      var labelCfg = labelCfgs[index];
      if (!labelCfg || isNil8(mappingData.x) || isNil8(mappingData.y)) {
        items.push(null);
        return;
      }
      var labelContent = !isArray11(labelCfg.content) ? [labelCfg.content] : labelCfg.content;
      labelCfg.content = labelContent;
      var total = labelContent.length;
      each18(labelContent, function(content, subIndex) {
        if (isNil8(content) || content === '') {
          items.push(null);
          return;
        }
        var item = __assign14(__assign14({}, labelCfg), _this.getLabelPoint(labelCfg, mappingData, subIndex));
        if (!item.textAlign) {
          item.textAlign = _this.getLabelAlign(item, subIndex, total);
        }
        if (item.offset <= 0) {
          item.labelLine = null;
        }
        items.push(item);
      });
    });
    return items;
  };
  GeometryLabel2.prototype.render = function(mappingArray, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    return __awaiter3(this, void 0, void 0, function() {
      var labelItems, labelsRenderer, shapes;
      return __generator3(this, function(_a) {
        switch (_a.label) {
          case 0:
            labelItems = this.getLabelItems(mappingArray);
            labelsRenderer = this.getLabelsRenderer();
            shapes = this.getGeometryShapes();
            return [4, labelsRenderer.render(labelItems, shapes, isUpdate)];
          case 1:
            _a.sent();
            return [2];
        }
      });
    });
  };
  GeometryLabel2.prototype.clear = function() {
    var labelsRenderer = this.labelsRenderer;
    if (labelsRenderer) {
      labelsRenderer.clear();
    }
  };
  GeometryLabel2.prototype.destroy = function() {
    var labelsRenderer = this.labelsRenderer;
    if (labelsRenderer) {
      labelsRenderer.destroy();
    }
    this.labelsRenderer = null;
  };
  GeometryLabel2.prototype.getCoordinate = function() {
    return this.geometry.coordinate;
  };
  GeometryLabel2.prototype.getDefaultLabelCfg = function(offset, position) {
    var geometry = this.geometry;
    var type = geometry.type,
      theme = geometry.theme;
    if (
      type === 'polygon' ||
      (type === 'interval' && position === 'middle') ||
      (offset < 0 && !['line', 'point', 'path'].includes(type))
    ) {
      return get17(theme, 'innerLabels', {});
    }
    return get17(theme, 'labels', {});
  };
  GeometryLabel2.prototype.getThemedLabelCfg = function(labelCfg) {
    var geometry = this.geometry;
    var defaultLabelCfg = this.getDefaultLabelCfg();
    var type = geometry.type,
      theme = geometry.theme;
    var themedLabelCfg;
    if (type === 'polygon' || (labelCfg.offset < 0 && !['line', 'point', 'path'].includes(type))) {
      themedLabelCfg = deepMix13({}, defaultLabelCfg, theme.innerLabels, labelCfg);
    } else {
      themedLabelCfg = deepMix13({}, defaultLabelCfg, theme.labels, labelCfg);
    }
    return themedLabelCfg;
  };
  GeometryLabel2.prototype.setLabelPosition = function(labelPointCfg, mappingData, index, position) {};
  GeometryLabel2.prototype.getLabelOffset = function(offset) {
    var coordinate = this.getCoordinate();
    var vector = this.getOffsetVector(offset);
    return coordinate.isTransposed ? vector[0] : vector[1];
  };
  GeometryLabel2.prototype.getLabelOffsetPoint = function(labelCfg, index, total) {
    var offset = labelCfg.offset;
    var coordinate = this.getCoordinate();
    var transposed = coordinate.isTransposed;
    var dim = transposed ? 'x' : 'y';
    var factor = transposed ? 1 : -1;
    var offsetPoint = { x: 0, y: 0 };
    if (index > 0 || total === 1) {
      offsetPoint[dim] = offset * factor;
    } else {
      offsetPoint[dim] = offset * factor * -1;
    }
    return offsetPoint;
  };
  GeometryLabel2.prototype.getLabelPoint = function(labelCfg, mappingData, index) {
    var coordinate = this.getCoordinate();
    var total = labelCfg.content.length;
    function getDimValue(value, idx, isAvg) {
      if (isAvg === void 0) {
        isAvg = false;
      }
      var v = value;
      if (isArray11(v)) {
        if (labelCfg.content.length === 1) {
          if (isAvg) {
            v = avg(v);
          } else {
            if (v.length <= 2) {
              v = v[value.length - 1];
            } else {
              v = avg(v);
            }
          }
        } else {
          v = v[idx];
        }
      }
      return v;
    }
    var label = { content: labelCfg.content[index], x: 0, y: 0, start: { x: 0, y: 0 }, color: '#fff' };
    var shape = isArray11(mappingData.shape) ? mappingData.shape[0] : mappingData.shape;
    var isFunnel = shape === 'funnel' || shape === 'pyramid';
    if (this.geometry.type === 'polygon') {
      var centroid = getPolygonCentroid(mappingData.x, mappingData.y);
      label.x = centroid[0];
      label.y = centroid[1];
    } else if (this.geometry.type === 'interval' && !isFunnel) {
      label.x = getDimValue(mappingData.x, index, true);
      label.y = getDimValue(mappingData.y, index);
    } else {
      label.x = getDimValue(mappingData.x, index);
      label.y = getDimValue(mappingData.y, index);
    }
    if (isFunnel) {
      var nextPoints = get17(mappingData, 'nextPoints');
      var points = get17(mappingData, 'points');
      if (nextPoints) {
        var point1 = coordinate.convert(points[1]);
        var point2 = coordinate.convert(nextPoints[1]);
        label.x = (point1.x + point2.x) / 2;
        label.y = (point1.y + point2.y) / 2;
      } else if (shape === 'pyramid') {
        var point1 = coordinate.convert(points[1]);
        var point2 = coordinate.convert(points[2]);
        label.x = (point1.x + point2.x) / 2;
        label.y = (point1.y + point2.y) / 2;
      }
    }
    if (labelCfg.position) {
      this.setLabelPosition(label, mappingData, index, labelCfg.position);
    }
    var offsetPoint = this.getLabelOffsetPoint(labelCfg, index, total);
    label.start = { x: label.x, y: label.y };
    label.x += offsetPoint.x;
    label.y += offsetPoint.y;
    label.color = mappingData.color;
    return label;
  };
  GeometryLabel2.prototype.getLabelAlign = function(item, index, total) {
    var align = 'center';
    var coordinate = this.getCoordinate();
    if (coordinate.isTransposed) {
      var offset = item.offset;
      if (offset < 0) {
        align = 'right';
      } else if (offset === 0) {
        align = 'center';
      } else {
        align = 'left';
      }
      if (total > 1 && index === 0) {
        if (align === 'right') {
          align = 'left';
        } else if (align === 'left') {
          align = 'right';
        }
      }
    }
    return align;
  };
  GeometryLabel2.prototype.getLabelId = function(mappingData) {
    var geometry = this.geometry;
    var type = geometry.type;
    var xScale = geometry.getXScale();
    var yScale = geometry.getYScale();
    var origin = mappingData[FIELD_ORIGIN];
    var labelId = geometry.getElementId(mappingData);
    if (type === 'line' || type === 'area') {
      labelId += ' '.concat(origin[xScale.field]);
    } else if (type === 'path') {
      labelId += ' '.concat(origin[xScale.field], '-').concat(origin[yScale.field]);
    }
    return labelId;
  };
  GeometryLabel2.prototype.getLabelsRenderer = function() {
    var _a = this.geometry,
      labelsContainer = _a.labelsContainer,
      labelOption = _a.labelOption,
      canvasRegion = _a.canvasRegion,
      animateOption = _a.animateOption;
    var coordinate = this.geometry.coordinate;
    var labelsRenderer = this.labelsRenderer;
    if (!labelsRenderer) {
      labelsRenderer = new labels_default({
        container: labelsContainer,
        layout: get17(labelOption, ['cfg', 'layout'], { type: this.defaultLayout })
      });
      this.labelsRenderer = labelsRenderer;
    }
    labelsRenderer.region = canvasRegion;
    labelsRenderer.animate = animateOption ? getDefaultAnimateCfg('label', coordinate) : false;
    return labelsRenderer;
  };
  GeometryLabel2.prototype.getLabelCfgs = function(mapppingArray) {
    var _this = this;
    var geometry = this.geometry;
    var labelOption = geometry.labelOption,
      scales = geometry.scales,
      coordinate = geometry.coordinate;
    var _a = labelOption,
      fields = _a.fields,
      callback = _a.callback,
      cfg = _a.cfg;
    var labelScales = fields.map(function(field) {
      return scales[field];
    });
    var labelCfgs = [];
    each18(mapppingArray, function(mappingData, index) {
      var origin = mappingData[FIELD_ORIGIN];
      var originText = _this.getLabelText(origin, labelScales);
      var callbackCfg;
      if (callback) {
        var originValues = fields.map(function(field) {
          return origin[field];
        });
        callbackCfg = callback.apply(void 0, __spreadArray9([], __read12(originValues), false));
        if (isNil8(callbackCfg)) {
          labelCfgs.push(null);
          return;
        }
      }
      var labelCfg = __assign14(
        __assign14(
          {
            id: _this.getLabelId(mappingData),
            elementId: _this.geometry.getElementId(mappingData),
            data: origin,
            mappingData,
            coordinate
          },
          cfg
        ),
        callbackCfg
      );
      if (isFunction8(labelCfg.position)) {
        labelCfg.position = labelCfg.position(origin, mappingData, index);
      }
      var offset = _this.getLabelOffset(labelCfg.offset || 0);
      var defaultLabelCfg = _this.getDefaultLabelCfg(offset, labelCfg.position);
      labelCfg = deepMix13({}, defaultLabelCfg, labelCfg);
      labelCfg.offset = _this.getLabelOffset(labelCfg.offset || 0);
      var content = labelCfg.content;
      if (isFunction8(content)) {
        labelCfg.content = content(origin, mappingData, index);
      } else if (isUndefined2(content)) {
        labelCfg.content = originText[0];
      }
      labelCfgs.push(labelCfg);
    });
    return labelCfgs;
  };
  GeometryLabel2.prototype.getLabelText = function(origin, scales) {
    var labelTexts = [];
    each18(scales, function(scale) {
      var value = origin[scale.field];
      if (isArray11(value)) {
        value = value.map(function(subVal) {
          return scale.getText(subVal);
        });
      } else {
        value = scale.getText(value);
      }
      if (isNil8(value) || value === '') {
        labelTexts.push(null);
      } else {
        labelTexts.push(value);
      }
    });
    return labelTexts;
  };
  GeometryLabel2.prototype.getOffsetVector = function(offset) {
    if (offset === void 0) {
      offset = 0;
    }
    var coordinate = this.getCoordinate();
    var actualOffset = 0;
    if (isNumber9(offset)) {
      actualOffset = offset;
    }
    return coordinate.isTransposed ? coordinate.applyMatrix(actualOffset, 0) : coordinate.applyMatrix(0, actualOffset);
  };
  GeometryLabel2.prototype.getGeometryShapes = function() {
    var geometry = this.geometry;
    var shapes = {};
    each18(geometry.elementsMap, function(element, id) {
      shapes[id] = element.shape;
    });
    each18(geometry.getOffscreenGroup().getChildren(), function(child) {
      var id = geometry.getElementId(child.get('origin').mappingData);
      shapes[id] = child;
    });
    return shapes;
  };
  return GeometryLabel2;
})();
var base_default4 = GeometryLabel; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/attr.js
import { __read as __read13, __spreadArray as __spreadArray10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function getMappingValue(attr, value, def) {
  if (!attr) {
    return def;
  }
  var r;
  if (attr.callback && attr.callback.length > 1) {
    var restArgs = Array(attr.callback.length - 1).fill('');
    r = attr.mapping.apply(attr, __spreadArray10([value], __read13(restArgs), false)).join('');
  } else {
    r = attr.mapping(value).join('');
  }
  return r || def;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/legend.js
import { __assign as __assign15 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix14,
  isString as isString9,
  each as each19,
  get as get18,
  isFunction as isFunction9
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/marker.js
var MarkerSymbols = {
  hexagon: function(x, y, r) {
    var diffX = (r / 2) * Math.sqrt(3);
    return [
      ['M', x, y - r],
      ['L', x + diffX, y - r / 2],
      ['L', x + diffX, y + r / 2],
      ['L', x, y + r],
      ['L', x - diffX, y + r / 2],
      ['L', x - diffX, y - r / 2],
      ['Z']
    ];
  },
  bowtie: function(x, y, r) {
    var diffY = r - 1.5;
    return [['M', x - r, y - diffY], ['L', x + r, y + diffY], ['L', x + r, y - diffY], ['L', x - r, y + diffY], ['Z']];
  },
  cross: function(x, y, r) {
    return [
      ['M', x - r, y - r],
      ['L', x + r, y + r],
      ['M', x + r, y - r],
      ['L', x - r, y + r]
    ];
  },
  tick: function(x, y, r) {
    return [
      ['M', x - r / 2, y - r],
      ['L', x + r / 2, y - r],
      ['M', x, y - r],
      ['L', x, y + r],
      ['M', x - r / 2, y + r],
      ['L', x + r / 2, y + r]
    ];
  },
  plus: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['L', x + r, y],
      ['M', x, y - r],
      ['L', x, y + r]
    ];
  },
  hyphen: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['L', x + r, y]
    ];
  },
  line: function(x, y, r) {
    return [
      ['M', x, y - r],
      ['L', x, y + r]
    ];
  }
}; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/legend.js
var STROKES_SYMBOLS = ['line', 'cross', 'tick', 'plus', 'hyphen'];
function handleUserMarkerStyle(markerStyle, style) {
  if (isFunction9(style)) {
    return style(markerStyle);
  }
  return deepMix14({}, markerStyle, style);
}
function adpatorMarkerStyle(marker, color) {
  var symbol = marker.symbol;
  if (isString9(symbol) && STROKES_SYMBOLS.indexOf(symbol) !== -1) {
    var markerStyle = get18(marker, 'style', {});
    var lineWidth = get18(markerStyle, 'lineWidth', 1);
    var stroke = markerStyle.stroke || markerStyle.fill || color;
    marker.style = deepMix14({}, marker.style, { lineWidth, stroke, fill: null });
  }
}
function setMarkerSymbol(marker) {
  var symbol = marker.symbol;
  if (isString9(symbol) && MarkerSymbols[symbol]) {
    marker.symbol = MarkerSymbols[symbol];
  }
}
function getLegendLayout(direction) {
  return direction.startsWith(DIRECTION.LEFT) || direction.startsWith(DIRECTION.RIGHT) ? 'vertical' : 'horizontal';
}
function getLegendItems(view, geometry, attr, themeMarker, userMarker) {
  var scale = attr.getScale(attr.type);
  if (scale.isCategory) {
    var field_1 = scale.field;
    var colorAttr_1 = geometry.getAttribute('color');
    var shapeAttr_1 = geometry.getAttribute('shape');
    var defaultColor_1 = view.getTheme().defaultColor;
    var isInPolar_1 = geometry.coordinate.isPolar;
    return scale.getTicks().map(function(tick, index) {
      var _a;
      var text = tick.text,
        scaleValue = tick.value;
      var name = text;
      var value = scale.invert(scaleValue);
      var unchecked = view.filterFieldData(field_1, [((_a = {}), (_a[field_1] = value), _a)]).length === 0;
      each19(view.views, function(subView) {
        var _a2;
        if (!subView.filterFieldData(field_1, [((_a2 = {}), (_a2[field_1] = value), _a2)]).length) {
          unchecked = true;
        }
      });
      var color = getMappingValue(colorAttr_1, value, defaultColor_1);
      var shape = getMappingValue(shapeAttr_1, value, 'point');
      var marker = geometry.getShapeMarker(shape, { color, isInPolar: isInPolar_1 });
      var markerCfg = userMarker;
      if (isFunction9(markerCfg)) {
        markerCfg = markerCfg(name, index, __assign15({ name, value }, deepMix14({}, themeMarker, marker)));
      }
      marker = deepMix14({}, themeMarker, marker, omit(__assign15({}, markerCfg), ['style']));
      adpatorMarkerStyle(marker, color);
      if (markerCfg && markerCfg.style) {
        marker.style = handleUserMarkerStyle(marker.style, markerCfg.style);
      }
      setMarkerSymbol(marker);
      return { id: value, name, value, marker, unchecked };
    });
  }
  return [];
}
function getCustomLegendItems(themeMarker, userMarker, customItems) {
  return customItems.map(function(item, index) {
    var markerCfg = userMarker;
    if (isFunction9(markerCfg)) {
      markerCfg = markerCfg(item.name, index, deepMix14({}, themeMarker, item));
    }
    var itemMarker = isFunction9(item.marker)
      ? item.marker(item.name, index, deepMix14({}, themeMarker, item))
      : item.marker;
    var marker = deepMix14({}, themeMarker, markerCfg, itemMarker);
    setMarkerSymbol(marker);
    item.marker = marker;
    return item;
  });
}
function getLegendThemeCfg(theme, direction) {
  var legendTheme = get18(theme, ['components', 'legend'], {});
  return deepMix14({}, get18(legendTheme, ['common'], {}), deepMix14({}, get18(legendTheme, [direction], {})));
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/util/get-path-points.js
import { isArray as isArray12 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isValueEmpty(value) {
  if (value) {
    return false;
  }
  return value === null || value === void 0 || isNaN(value);
}
function isYNil(point) {
  if (isArray12(point)) {
    return isValueEmpty(point[1].y);
  }
  var value = point.y;
  return isArray12(value) ? isValueEmpty(value[0]) : isValueEmpty(value);
}
function getPathPoints(points, connectNulls, showSinglePoint) {
  if (connectNulls === void 0) {
    connectNulls = false;
  }
  if (showSinglePoint === void 0) {
    showSinglePoint = true;
  }
  if (!points.length || (points.length === 1 && !showSinglePoint)) {
    return [];
  }
  if (connectNulls) {
    var filtered = [];
    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];
      if (!isYNil(point)) {
        filtered.push(point);
      }
    }
    return [filtered];
  }
  var result = [];
  var tmp = [];
  for (var i = 0, len = points.length; i < len; i++) {
    var point = points[i];
    if (isYNil(point)) {
      if (tmp.length) {
        if (!(tmp.length === 1 && !showSinglePoint)) {
          result.push(tmp);
        }
        tmp = [];
      }
    } else {
      tmp.push(point);
    }
  }
  if (tmp.length) {
    result.push(tmp);
  }
  return result;
}
function getViolinPath(points) {
  var path = [];
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    if (point) {
      var action = i === 0 ? 'M' : 'L';
      path.push([action, point.x, point.y]);
    }
  }
  var first = points[0];
  if (first) {
    path.push(['L', first.x, first.y]);
    path.push(['z']);
  }
  return path;
}
function getSmoothViolinPath(points) {
  var half = points.length / 2;
  var leftPoints = [];
  var rightPoints = [];
  for (var i = 0; i < points.length; i++) {
    if (i < half) {
      leftPoints.push(points[i]);
    } else {
      rightPoints.push(points[i]);
    }
  }
  var leftPath = getSplinePath(leftPoints, false);
  var rightPath = getSplinePath(rightPoints, false);
  if (rightPoints.length) {
    leftPath.push(['L', rightPoints[0].x, rightPoints[0].y]);
  }
  rightPath.shift();
  var path = leftPath.concat(rightPath);
  if (leftPoints.length) {
    path.push(['L', leftPoints[0].x, leftPoints[0].y]);
  }
  path.push(['z']);
  return path;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/line/index.js
import { each as each20, isArray as isArray14 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/util/get-style.js
import { __assign as __assign16 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix15,
  isNil as isNil9,
  get as get19
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getStyle(cfg, isStroke, isFill, sizeName) {
  if (sizeName === void 0) {
    sizeName = '';
  }
  var _a = cfg.style,
    style = _a === void 0 ? {} : _a,
    defaultStyle = cfg.defaultStyle,
    color = cfg.color,
    size6 = cfg.size;
  var attrs = __assign16(__assign16({}, defaultStyle), style);
  if (color) {
    if (isStroke) {
      if (!style.stroke) {
        attrs.stroke = color;
      }
    }
    if (isFill) {
      if (!style.fill) {
        attrs.fill = color;
      }
    }
  }
  if (sizeName && isNil9(style[sizeName]) && !isNil9(size6)) {
    attrs[sizeName] = size6;
  }
  return attrs;
}
function getBackgroundRectStyle(cfg) {
  return deepMix15({}, { fill: '#CCD6EC', fillOpacity: 0.3 }, get19(cfg, ['background', 'style']));
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/util/split-points.js
import { isArray as isArray13 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function splitPoints(obj) {
  var x = obj.x;
  var y = isArray13(obj.y) ? obj.y : [obj.y];
  return y.map(function(eachY, index) {
    return { x: isArray13(x) ? x[index] : x, y: eachY };
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/line/util.js
var LineSymbols = {
  line: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['L', x + r, y]
    ];
  },
  dot: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['L', x + r, y]
    ];
  },
  dash: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['L', x + r, y]
    ];
  },
  smooth: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['A', r / 2, r / 2, 0, 1, 1, x, y],
      ['A', r / 2, r / 2, 0, 1, 0, x + r, y]
    ];
  },
  hv: function(x, y, r) {
    return [
      ['M', x - r - 1, y - 2.5],
      ['L', x, y - 2.5],
      ['L', x, y + 2.5],
      ['L', x + r + 1, y + 2.5]
    ];
  },
  vh: function(x, y, r) {
    return [
      ['M', x - r - 1, y + 2.5],
      ['L', x, y + 2.5],
      ['L', x, y - 2.5],
      ['L', x + r + 1, y - 2.5]
    ];
  },
  hvh: function(x, y, r) {
    return [
      ['M', x - (r + 1), y + 2.5],
      ['L', x - r / 2, y + 2.5],
      ['L', x - r / 2, y - 2.5],
      ['L', x + r / 2, y - 2.5],
      ['L', x + r / 2, y + 2.5],
      ['L', x + r + 1, y + 2.5]
    ];
  },
  vhv: function(x, y) {
    return [
      ['M', x - 5, y + 2.5],
      ['L', x - 5, y],
      ['L', x, y],
      ['L', x, y - 3],
      ['L', x, y + 3],
      ['L', x + 6.5, y + 3]
    ];
  }
};
function getLineMarker(markerCfg, shapeType) {
  var color = markerCfg.color;
  return { symbol: LineSymbols[shapeType], style: { lineWidth: 2, r: 6, stroke: color } };
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/line/index.js
function getShapeAttrs(cfg, smooth, constraint) {
  var isStack = cfg.isStack,
    connectNulls = cfg.connectNulls,
    isInCircle = cfg.isInCircle,
    showSinglePoint = cfg.showSinglePoint;
  var shapeAttrs = getStyle(cfg, true, false, 'lineWidth');
  var points = getPathPoints(cfg.points, connectNulls, showSinglePoint);
  var path = [];
  for (var i = 0, len = points.length; i < len; i++) {
    var eachLinePoints = points[i];
    path = path.concat(getPath(eachLinePoints, isInCircle, isStack, smooth, constraint, shapeAttrs));
  }
  shapeAttrs.path = path;
  return shapeAttrs;
}
function getSinglePath(points, isInCircle, smooth, constraint, style) {
  if (points.length === 1) {
    return [
      ['M', points[0].x, points[0].y - style.lineWidth / 2],
      ['L', points[0].x, points[0].y],
      ['L', points[0].x, points[0].y + style.lineWidth / 2]
    ];
  }
  var path;
  if (!smooth) {
    path = getLinePath(points, false);
    if (isInCircle) {
      path.push(['Z']);
    }
  } else {
    if (isInCircle && points.length) {
      points.push({ x: points[0].x, y: points[0].y });
    }
    path = getSplinePath(points, false, constraint);
  }
  return path;
}
function getRangePath(points, isInCircle, isStack, smooth, constraint, style) {
  var topPoints = [];
  var bottomPoints = [];
  each20(points, function(point) {
    var result = splitPoints(point);
    topPoints.push(result[1]);
    bottomPoints.push(result[0]);
  });
  var topPath = getSinglePath(topPoints, isInCircle, smooth, constraint, style);
  var bottomPath = getSinglePath(bottomPoints, isInCircle, smooth, constraint, style);
  if (isStack) {
    return topPath;
  }
  return topPath.concat(bottomPath);
}
function getPath(points, isInCircle, isStack, smooth, constraint, style) {
  if (points.length) {
    var first = points[0];
    return isArray14(first.y)
      ? getRangePath(points, isInCircle, isStack, smooth, constraint, style)
      : getSinglePath(points, isInCircle, smooth, constraint, style);
  }
  return [];
}
var LineShapeFactory = registerShapeFactory('line', { defaultShapeType: 'line' });
each20(['line', 'dot', 'dash', 'smooth'], function(shapeType) {
  registerShape('line', shapeType, {
    draw: function(cfg, container) {
      var smooth = shapeType === 'smooth';
      var constraint;
      if (smooth) {
        var _a = this.coordinate,
          start = _a.start,
          end = _a.end;
        constraint = [
          [start.x, end.y],
          [end.x, start.y]
        ];
      }
      var attrs = getShapeAttrs(cfg, smooth, constraint);
      var shape = container.addShape({ type: 'path', attrs, name: 'line', capture: !smooth });
      return shape;
    },
    getMarker: function(markerCfg) {
      return getLineMarker(markerCfg, shapeType);
    }
  });
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/core.js
var VERSION = '4.2.8';
var Util = {
  getLegendItems,
  translate,
  rotate,
  zoom,
  transform,
  getAngle,
  getSectorPath,
  polarToCartesian,
  getDelegationObject,
  getTooltipItems,
  getMappingValue,
  getPath,
  getPathPoints
}; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/theme/style-sheet/dark.js
import { __assign as __assign17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var WHITE_COLORS2 = {
  100: '#000',
  95: '#0D0D0D',
  85: '#262626',
  65: '#595959',
  45: '#8C8C8C',
  25: '#BFBFBF',
  15: '#D9D9D9',
  6: '#F0F0F0'
};
var BLACK_COLORS2 = {
  100: '#FFFFFF',
  95: '#F2F2F2',
  85: '#D9D9D9',
  65: '#A6A6A6',
  45: '#737373',
  25: '#404040',
  15: '#262626',
  6: '#0F0F0F'
};
var QUALITATIVE_102 = [
  '#5B8FF9',
  '#5AD8A6',
  '#5D7092',
  '#F6BD16',
  '#E86452',
  '#6DC8EC',
  '#945FB9',
  '#FF9845',
  '#1E9493',
  '#FF99C3'
];
var QUALITATIVE_202 = [
  '#5B8FF9',
  '#CDDDFD',
  '#5AD8A6',
  '#CDF3E4',
  '#5D7092',
  '#CED4DE',
  '#F6BD16',
  '#FCEBB9',
  '#E86452',
  '#F8D0CB',
  '#6DC8EC',
  '#D3EEF9',
  '#945FB9',
  '#DECFEA',
  '#FF9845',
  '#FFE0C7',
  '#1E9493',
  '#BBDEDE',
  '#FF99C3',
  '#FFE0ED'
];
var SINGLE_SEQUENCE2 = [
  '#B8E1FF',
  '#9AC5FF',
  '#7DAAFF',
  '#5B8FF9',
  '#3D76DD',
  '#085EC0',
  '#0047A5',
  '#00318A',
  '#001D70'
];
var createDarkStyleSheet = function(cfg) {
  if (cfg === void 0) {
    cfg = {};
  }
  var _a = cfg.paletteQualitative10,
    paletteQualitative10 = _a === void 0 ? QUALITATIVE_102 : _a,
    _b = cfg.paletteQualitative20,
    paletteQualitative20 = _b === void 0 ? QUALITATIVE_202 : _b;
  var _c = cfg.brandColor,
    brandColor = _c === void 0 ? paletteQualitative10[0] : _c;
  var token = {
    backgroundColor: '#141414',
    brandColor,
    subColor: 'rgba(255,255,255,0.05)',
    paletteQualitative10,
    paletteQualitative20,
    paletteSemanticRed: '#F4664A',
    paletteSemanticGreen: '#30BF78',
    paletteSemanticYellow: '#FAAD14',
    paletteSequence: SINGLE_SEQUENCE2,
    fontFamily:
      '"Segoe UI", Roboto, "Helvetica Neue", Arial,\n    "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",\n    "Noto Color Emoji"',
    axisLineBorderColor: BLACK_COLORS2[25],
    axisLineBorder: 1,
    axisLineDash: null,
    axisTitleTextFillColor: BLACK_COLORS2[65],
    axisTitleTextFontSize: 12,
    axisTitleTextLineHeight: 12,
    axisTitleTextFontWeight: 'normal',
    axisTitleSpacing: 12,
    axisDescriptionIconFillColor: WHITE_COLORS2[85],
    axisTickLineBorderColor: BLACK_COLORS2[25],
    axisTickLineLength: 4,
    axisTickLineBorder: 1,
    axisSubTickLineBorderColor: BLACK_COLORS2[15],
    axisSubTickLineLength: 2,
    axisSubTickLineBorder: 1,
    axisLabelFillColor: BLACK_COLORS2[45],
    axisLabelFontSize: 12,
    axisLabelLineHeight: 12,
    axisLabelFontWeight: 'normal',
    axisLabelOffset: 8,
    axisGridBorderColor: BLACK_COLORS2[15],
    axisGridBorder: 1,
    axisGridLineDash: null,
    legendTitleTextFillColor: BLACK_COLORS2[45],
    legendTitleTextFontSize: 12,
    legendTitleTextLineHeight: 21,
    legendTitleTextFontWeight: 'normal',
    legendMarkerColor: QUALITATIVE_102[0],
    legendMarkerSpacing: 8,
    legendMarkerSize: 4,
    legendCircleMarkerSize: 4,
    legendSquareMarkerSize: 4,
    legendLineMarkerSize: 5,
    legendItemNameFillColor: BLACK_COLORS2[65],
    legendItemNameFontSize: 12,
    legendItemNameLineHeight: 12,
    legendItemNameFontWeight: 'normal',
    legendItemSpacing: 24,
    legendItemMarginBottom: 12,
    legendSpacing: 16,
    legendPadding: [8, 8, 8, 8],
    legendHorizontalPadding: [8, 0, 8, 0],
    legendVerticalPadding: [0, 8, 0, 8],
    legendPageNavigatorMarkerSize: 12,
    legendPageNavigatorMarkerInactiveFillColor: BLACK_COLORS2[45],
    legendPageNavigatorMarkerInactiveFillOpacity: 0.45,
    legendPageNavigatorMarkerFillColor: BLACK_COLORS2[45],
    legendPageNavigatorMarkerFillOpacity: 1,
    legendPageNavigatorTextFillColor: BLACK_COLORS2[65],
    legendPageNavigatorTextFontSize: 12,
    sliderRailFillColor: BLACK_COLORS2[15],
    sliderRailBorder: 0,
    sliderRailBorderColor: null,
    sliderRailWidth: 100,
    sliderRailHeight: 12,
    sliderLabelTextFillColor: BLACK_COLORS2[45],
    sliderLabelTextFontSize: 12,
    sliderLabelTextLineHeight: 12,
    sliderLabelTextFontWeight: 'normal',
    sliderHandlerFillColor: WHITE_COLORS2[6],
    sliderHandlerWidth: 10,
    sliderHandlerHeight: 14,
    sliderHandlerBorder: 1,
    sliderHandlerBorderColor: WHITE_COLORS2[25],
    annotationArcBorderColor: BLACK_COLORS2[15],
    annotationArcBorder: 1,
    annotationLineBorderColor: BLACK_COLORS2[25],
    annotationLineBorder: 1,
    annotationLineDash: null,
    annotationTextFillColor: BLACK_COLORS2[65],
    annotationTextFontSize: 12,
    annotationTextLineHeight: 12,
    annotationTextFontWeight: 'normal',
    annotationTextBorderColor: null,
    annotationTextBorder: 0,
    annotationRegionFillColor: BLACK_COLORS2[100],
    annotationRegionFillOpacity: 0.06,
    annotationRegionBorder: 0,
    annotationRegionBorderColor: null,
    annotationDataMarkerLineLength: 16,
    tooltipCrosshairsBorderColor: BLACK_COLORS2[25],
    tooltipCrosshairsBorder: 1,
    tooltipCrosshairsLineDash: null,
    tooltipContainerFillColor: '#1f1f1f',
    tooltipContainerFillOpacity: 0.95,
    tooltipContainerShadow: '0px 2px 4px rgba(0,0,0,.5)',
    tooltipContainerBorderRadius: 3,
    tooltipTextFillColor: BLACK_COLORS2[65],
    tooltipTextFontSize: 12,
    tooltipTextLineHeight: 12,
    tooltipTextFontWeight: 'bold',
    labelFillColor: BLACK_COLORS2[65],
    labelFillColorDark: '#2c3542',
    labelFillColorLight: '#ffffff',
    labelFontSize: 12,
    labelLineHeight: 12,
    labelFontWeight: 'normal',
    labelBorderColor: null,
    labelBorder: 0,
    innerLabelFillColor: WHITE_COLORS2[100],
    innerLabelFontSize: 12,
    innerLabelLineHeight: 12,
    innerLabelFontWeight: 'normal',
    innerLabelBorderColor: null,
    innerLabelBorder: 0,
    overflowLabelFillColor: BLACK_COLORS2[65],
    overflowLabelFillColorDark: '#2c3542',
    overflowLabelFillColorLight: '#ffffff',
    overflowLabelFontSize: 12,
    overflowLabelLineHeight: 12,
    overflowLabelFontWeight: 'normal',
    overflowLabelBorderColor: WHITE_COLORS2[100],
    overflowLabelBorder: 1,
    labelLineBorder: 1,
    labelLineBorderColor: BLACK_COLORS2[25],
    cSliderRailHieght: 16,
    cSliderBackgroundFillColor: '#416180',
    cSliderBackgroundFillOpacity: 0.05,
    cSliderForegroundFillColor: '#5B8FF9',
    cSliderForegroundFillOpacity: 0.15,
    cSliderHandlerHeight: 24,
    cSliderHandlerWidth: 10,
    cSliderHandlerFillColor: '#F7F7F7',
    cSliderHandlerFillOpacity: 1,
    cSliderHandlerHighlightFillColor: '#FFF',
    cSliderHandlerBorderColor: '#BFBFBF',
    cSliderHandlerBorder: 1,
    cSliderHandlerBorderRadius: 2,
    cSliderTextFillColor: '#fff',
    cSliderTextFillOpacity: 0.45,
    cSliderTextFontSize: 12,
    cSliderTextLineHeight: 12,
    cSliderTextFontWeight: 'normal',
    cSliderTextBorderColor: null,
    cSliderTextBorder: 0,
    scrollbarTrackFillColor: 'rgba(255,255,255,0.65)',
    scrollbarThumbFillColor: 'rgba(0,0,0,0.35)',
    scrollbarThumbHighlightFillColor: 'rgba(0,0,0,0.45)',
    pointFillColor: QUALITATIVE_102[0],
    pointFillOpacity: 0.95,
    pointSize: 4,
    pointBorder: 1,
    pointBorderColor: WHITE_COLORS2[100],
    pointBorderOpacity: 1,
    pointActiveBorderColor: BLACK_COLORS2[100],
    pointSelectedBorder: 2,
    pointSelectedBorderColor: BLACK_COLORS2[100],
    pointInactiveFillOpacity: 0.3,
    pointInactiveBorderOpacity: 0.3,
    hollowPointSize: 4,
    hollowPointBorder: 1,
    hollowPointBorderColor: QUALITATIVE_102[0],
    hollowPointBorderOpacity: 0.95,
    hollowPointFillColor: WHITE_COLORS2[100],
    hollowPointActiveBorder: 1,
    hollowPointActiveBorderColor: BLACK_COLORS2[100],
    hollowPointActiveBorderOpacity: 1,
    hollowPointSelectedBorder: 2,
    hollowPointSelectedBorderColor: BLACK_COLORS2[100],
    hollowPointSelectedBorderOpacity: 1,
    hollowPointInactiveBorderOpacity: 0.3,
    lineBorder: 2,
    lineBorderColor: QUALITATIVE_102[0],
    lineBorderOpacity: 1,
    lineActiveBorder: 3,
    lineSelectedBorder: 3,
    lineInactiveBorderOpacity: 0.3,
    areaFillColor: QUALITATIVE_102[0],
    areaFillOpacity: 0.25,
    areaActiveFillColor: QUALITATIVE_102[0],
    areaActiveFillOpacity: 0.5,
    areaSelectedFillColor: QUALITATIVE_102[0],
    areaSelectedFillOpacity: 0.5,
    areaInactiveFillOpacity: 0.3,
    hollowAreaBorderColor: QUALITATIVE_102[0],
    hollowAreaBorder: 2,
    hollowAreaBorderOpacity: 1,
    hollowAreaActiveBorder: 3,
    hollowAreaActiveBorderColor: BLACK_COLORS2[100],
    hollowAreaSelectedBorder: 3,
    hollowAreaSelectedBorderColor: BLACK_COLORS2[100],
    hollowAreaInactiveBorderOpacity: 0.3,
    intervalFillColor: QUALITATIVE_102[0],
    intervalFillOpacity: 0.95,
    intervalActiveBorder: 1,
    intervalActiveBorderColor: BLACK_COLORS2[100],
    intervalActiveBorderOpacity: 1,
    intervalSelectedBorder: 2,
    intervalSelectedBorderColor: BLACK_COLORS2[100],
    intervalSelectedBorderOpacity: 1,
    intervalInactiveBorderOpacity: 0.3,
    intervalInactiveFillOpacity: 0.3,
    hollowIntervalBorder: 2,
    hollowIntervalBorderColor: QUALITATIVE_102[0],
    hollowIntervalBorderOpacity: 1,
    hollowIntervalFillColor: WHITE_COLORS2[100],
    hollowIntervalActiveBorder: 2,
    hollowIntervalActiveBorderColor: BLACK_COLORS2[100],
    hollowIntervalSelectedBorder: 3,
    hollowIntervalSelectedBorderColor: BLACK_COLORS2[100],
    hollowIntervalSelectedBorderOpacity: 1,
    hollowIntervalInactiveBorderOpacity: 0.3
  };
  return __assign17(__assign17({}, token), cfg);
};
var antvDark = createDarkStyleSheet(); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/index.js
import * as CanvasEngine from '/cdn/v99/@antv/g-canvas@0.5.12/es2022/g-canvas.development.js';
import * as SVGEngine from '/cdn/v99/@antv/g-svg@0.5.6/es2022/g-svg.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/area.js
import { __extends as __extends10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/path.js
import { __extends as __extends9, __values as __values7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Path = (function(_super) {
  __extends9(Path2, _super);
  function Path2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'path';
    _this.shapeType = 'line';
    var _a = cfg.connectNulls,
      connectNulls = _a === void 0 ? false : _a,
      _b = cfg.showSinglePoint,
      showSinglePoint = _b === void 0 ? true : _b;
    _this.connectNulls = connectNulls;
    _this.showSinglePoint = showSinglePoint;
    return _this;
  }
  Path2.prototype.updateElements = function(mappingDataArray, isUpdate) {
    var e_1, _a, e_2, _b, e_3, _c;
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    var keyData = /* @__PURE__ */ new Map();
    var keyIndex = /* @__PURE__ */ new Map();
    var keys4 = [];
    var index = 0;
    for (var i = 0; i < mappingDataArray.length; i++) {
      var mappingData = mappingDataArray[i];
      var key = this.getElementId(mappingData);
      keys4.push(key);
      keyData.set(key, mappingData);
      keyIndex.set(key, index);
      index++;
    }
    this.elements = new Array(index);
    var _d = diff(this.lastElementsMap, keys4),
      added = _d.added,
      updated = _d.updated,
      removed = _d.removed;
    try {
      for (var added_1 = __values7(added), added_1_1 = added_1.next(); !added_1_1.done; added_1_1 = added_1.next()) {
        var key = added_1_1.value;
        var mappingData = keyData.get(key);
        var shapeFactory = this.getShapeFactory();
        var shapeCfg = this.getShapeInfo(mappingData);
        var i = keyIndex.get(key);
        var element = new element_default({
          shapeFactory,
          container: this.container,
          offscreenGroup: this.getOffscreenGroup(),
          elementIndex: i
        });
        element.geometry = this;
        element.animate = this.animateOption;
        element.draw(shapeCfg, isUpdate);
        this.elementsMap[key] = element;
        this.elements[i] = element;
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (added_1_1 && !added_1_1.done && (_a = added_1.return)) _a.call(added_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    try {
      for (
        var updated_1 = __values7(updated), updated_1_1 = updated_1.next();
        !updated_1_1.done;
        updated_1_1 = updated_1.next()
      ) {
        var key = updated_1_1.value;
        var mappingData = keyData.get(key);
        var element = this.lastElementsMap[key];
        var i = keyIndex.get(key);
        var shapeCfg = this.getShapeInfo(mappingData);
        var preShapeCfg = element.getModel();
        if (this.isCoordinateChanged || isModelChange(preShapeCfg, shapeCfg)) {
          element.animate = this.animateOption;
          element.update(shapeCfg);
        }
        this.elementsMap[key] = element;
        this.elements[i] = element;
      }
    } catch (e_2_1) {
      e_2 = { error: e_2_1 };
    } finally {
      try {
        if (updated_1_1 && !updated_1_1.done && (_b = updated_1.return)) _b.call(updated_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    try {
      for (
        var removed_1 = __values7(removed), removed_1_1 = removed_1.next();
        !removed_1_1.done;
        removed_1_1 = removed_1.next()
      ) {
        var key = removed_1_1.value;
        var element = this.lastElementsMap[key];
        element.animate = this.animateOption;
        element.destroy();
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (removed_1_1 && !removed_1_1.done && (_c = removed_1.return)) _c.call(removed_1);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  Path2.prototype.getPointsAndData = function(mappingData) {
    var points = [];
    var data = [];
    for (var i = 0, len = mappingData.length; i < len; i++) {
      var obj = mappingData[i];
      points.push({ x: obj.x, y: obj.y });
      data.push(obj[FIELD_ORIGIN]);
    }
    return { points, data };
  };
  Path2.prototype.getShapeInfo = function(mappingData) {
    var shapeCfg = this.getDrawCfg(mappingData[0]);
    var _a = this.getPointsAndData(mappingData),
      points = _a.points,
      data = _a.data;
    shapeCfg.mappingData = mappingData;
    shapeCfg.data = data;
    shapeCfg.isStack = !!this.getAdjust('stack');
    shapeCfg.points = points;
    shapeCfg.connectNulls = this.connectNulls;
    shapeCfg.showSinglePoint = this.showSinglePoint;
    return shapeCfg;
  };
  return Path2;
})(base_default3);
var path_default = Path; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/index.js
import { isArray as isArray15 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/util.js
import { each as each21 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getPath2(points, isInCircle, smooth, registeredShape, constraint) {
  var path = [];
  if (points.length) {
    var topLinePoints_1 = [];
    var bottomLinePoints_1 = [];
    for (var i = 0, len = points.length; i < len; i++) {
      var point = points[i];
      topLinePoints_1.push(point[1]);
      bottomLinePoints_1.push(point[0]);
    }
    bottomLinePoints_1 = bottomLinePoints_1.reverse();
    each21([topLinePoints_1, bottomLinePoints_1], function(pointsData, index) {
      var subPath = [];
      var parsedPoints = registeredShape.parsePoints(pointsData);
      var p1 = parsedPoints[0];
      if (topLinePoints_1.length === 1 && bottomLinePoints_1.length === 1) {
        subPath =
          index === 0
            ? [
                ['M', p1.x - 0.5, p1.y],
                ['L', p1.x + 0.5, p1.y]
              ]
            : [
                ['L', p1.x + 0.5, p1.y],
                ['L', p1.x - 0.5, p1.y]
              ];
      } else {
        if (isInCircle) {
          parsedPoints.push({ x: p1.x, y: p1.y });
        }
        if (smooth) {
          subPath = getSplinePath(parsedPoints, false, constraint);
        } else {
          subPath = getLinePath(parsedPoints, false);
        }
        if (index > 0) {
          subPath[0][0] = 'L';
        }
      }
      path = path.concat(subPath);
    });
    path.push(['Z']);
  }
  return path;
}
function getShapeAttrs2(cfg, isStroke, smooth, registeredShape, constraint) {
  var attrs = getStyle(cfg, isStroke, !isStroke, 'lineWidth');
  var connectNulls = cfg.connectNulls,
    isInCircle = cfg.isInCircle,
    points = cfg.points,
    showSinglePoint = cfg.showSinglePoint;
  var pathPoints = getPathPoints(points, connectNulls, showSinglePoint);
  var path = [];
  for (var i = 0, len = pathPoints.length; i < len; i++) {
    var eachPoints = pathPoints[i];
    path = path.concat(getPath2(eachPoints, isInCircle, smooth, registeredShape, constraint));
  }
  attrs.path = path;
  return attrs;
}
function getConstraint(coordinate) {
  var start = coordinate.start,
    end = coordinate.end;
  return [
    [start.x, end.y],
    [end.x, start.y]
  ];
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/index.js
var AreaShapeFactory = registerShapeFactory('area', {
  defaultShapeType: 'area',
  getDefaultPoints: function(pointInfo) {
    var x = pointInfo.x,
      y0 = pointInfo.y0;
    var y = isArray15(pointInfo.y) ? pointInfo.y : [y0, pointInfo.y];
    return y.map(function(yItem) {
      return { x, y: yItem };
    });
  }
});
registerShape('area', 'area', {
  draw: function(cfg, container) {
    var attrs = getShapeAttrs2(cfg, false, false, this);
    var shape = container.addShape({ type: 'path', attrs, name: 'area' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        if (r === void 0) {
          r = 5.5;
        }
        return [['M', x - r, y - 4], ['L', x + r, y - 4], ['L', x + r, y + 4], ['L', x - r, y + 4], ['Z']];
      },
      style: { r: 5, fill: color, fillOpacity: 1 }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/area.js
var Area = (function(_super) {
  __extends10(Area2, _super);
  function Area2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'area';
    _this.shapeType = 'area';
    _this.generatePoints = true;
    _this.startOnZero = true;
    var _a = cfg.startOnZero,
      startOnZero = _a === void 0 ? true : _a,
      _b = cfg.sortable,
      sortable = _b === void 0 ? false : _b,
      _c = cfg.showSinglePoint,
      showSinglePoint = _c === void 0 ? false : _c;
    _this.startOnZero = startOnZero;
    _this.sortable = sortable;
    _this.showSinglePoint = showSinglePoint;
    return _this;
  }
  Area2.prototype.getPointsAndData = function(mappingData) {
    var points = [];
    var data = [];
    for (var i = 0, len = mappingData.length; i < len; i++) {
      var obj = mappingData[i];
      points.push(obj.points);
      data.push(obj[FIELD_ORIGIN]);
    }
    return { points, data };
  };
  Area2.prototype.getYMinValue = function() {
    if (this.startOnZero) {
      return _super.prototype.getYMinValue.call(this);
    }
    var yScale = this.getYScale();
    return yScale.min;
  };
  return Area2;
})(path_default);
var area_default = Area; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/edge.js
import { __extends as __extends11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/index.js
import { __assign as __assign18 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var EdgeShapeFactory = registerShapeFactory('edge', {
  defaultShapeType: 'line',
  getDefaultPoints: function(pointInfo) {
    return splitPoints(pointInfo);
  }
});
registerShape('edge', 'line', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false, 'lineWidth');
    var path = getLinePath(this.parsePoints(cfg.points), this.coordinate.isPolar);
    return container.addShape('path', { attrs: __assign18(__assign18({}, style), { path }) });
  },
  getMarker: function(markerCfg) {
    return { symbol: 'circle', style: { r: 4.5, fill: markerCfg.color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/edge.js
var Edge = (function(_super) {
  __extends11(Edge2, _super);
  function Edge2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'edge';
    _this.shapeType = 'edge';
    _this.generatePoints = true;
    return _this;
  }
  return Edge2;
})(base_default3);
var edge_default = Edge; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/heatmap.js
import {
  __assign as __assign19,
  __extends as __extends12,
  __values as __values8
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import ColorUtil from '/cdn/v99/@antv/color-util@2.0.6/es2022/color-util.development.js';
import { get as get20, isNumber as isNumber10 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Heatmap = (function(_super) {
  __extends12(Heatmap2, _super);
  function Heatmap2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'heatmap';
    _this.paletteCache = {};
    return _this;
  }
  Heatmap2.prototype.updateElements = function(mappingDataArray, isUpdate) {
    if (isUpdate === void 0) {
      isUpdate = false;
    }
    for (var i = 0; i < mappingDataArray.length; i++) {
      var mappingData = mappingDataArray[i];
      var range = this.prepareRange(mappingData);
      var radius = this.prepareSize();
      var blur_1 = get20(this.styleOption, ['cfg', 'shadowBlur']);
      if (!isNumber10(blur_1)) {
        blur_1 = radius / 2;
      }
      this.prepareGreyScaleBlurredCircle(radius, blur_1);
      this.drawWithRange(mappingData, range, radius, blur_1);
    }
  };
  Heatmap2.prototype.color = function(field, cfg) {
    this.createAttrOption('color', field, typeof cfg !== 'function' ? cfg : '');
    return this;
  };
  Heatmap2.prototype.clear = function() {
    _super.prototype.clear.call(this);
    this.clearShadowCanvasCtx();
    this.paletteCache = {};
  };
  Heatmap2.prototype.prepareRange = function(data) {
    var colorAttr = this.getAttribute('color');
    var colorField = colorAttr.getFields()[0];
    var min2 = Infinity;
    var max3 = -Infinity;
    data.forEach(function(row) {
      var value = row[FIELD_ORIGIN][colorField];
      if (value > max3) {
        max3 = value;
      }
      if (value < min2) {
        min2 = value;
      }
    });
    if (min2 === max3) {
      min2 = max3 - 1;
    }
    return [min2, max3];
  };
  Heatmap2.prototype.prepareSize = function() {
    var radius = this.getDefaultValue('size');
    if (!isNumber10(radius)) {
      radius = this.getDefaultSize();
    }
    return radius;
  };
  Heatmap2.prototype.prepareGreyScaleBlurredCircle = function(radius, blur) {
    var grayScaleBlurredCanvas = this.getGrayScaleBlurredCanvas();
    var r2 = radius + blur;
    var ctx2 = grayScaleBlurredCanvas.getContext('2d');
    grayScaleBlurredCanvas.width = grayScaleBlurredCanvas.height = r2 * 2;
    ctx2.clearRect(0, 0, grayScaleBlurredCanvas.width, grayScaleBlurredCanvas.height);
    ctx2.shadowOffsetX = ctx2.shadowOffsetY = r2 * 2;
    ctx2.shadowBlur = blur;
    ctx2.shadowColor = 'black';
    ctx2.beginPath();
    ctx2.arc(-r2, -r2, radius, 0, Math.PI * 2, true);
    ctx2.closePath();
    ctx2.fill();
  };
  Heatmap2.prototype.drawWithRange = function(data, range, radius, blur) {
    var e_1, _a;
    var _b = this.coordinate,
      start = _b.start,
      end = _b.end;
    var width = this.coordinate.getWidth();
    var height = this.coordinate.getHeight();
    var colorAttr = this.getAttribute('color');
    var valueField = colorAttr.getFields()[0];
    this.clearShadowCanvasCtx();
    var ctx2 = this.getShadowCanvasCtx();
    if (range) {
      data = data.filter(function(row) {
        return row[FIELD_ORIGIN][valueField] <= range[1] && row[FIELD_ORIGIN][valueField] >= range[0];
      });
    }
    var scale = this.scales[valueField];
    try {
      for (var data_1 = __values8(data), data_1_1 = data_1.next(); !data_1_1.done; data_1_1 = data_1.next()) {
        var obj = data_1_1.value;
        var _c = this.getDrawCfg(obj),
          x = _c.x,
          y = _c.y;
        var alpha = scale.scale(obj[FIELD_ORIGIN][valueField]);
        this.drawGrayScaleBlurredCircle(x - start.x, y - end.y, radius + blur, alpha, ctx2);
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (data_1_1 && !data_1_1.done && (_a = data_1.return)) _a.call(data_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    var colored = ctx2.getImageData(0, 0, width, height);
    this.clearShadowCanvasCtx();
    this.colorize(colored);
    ctx2.putImageData(colored, 0, 0);
    var imageShape = this.getImageShape();
    imageShape.attr('x', start.x);
    imageShape.attr('y', end.y);
    imageShape.attr('width', width);
    imageShape.attr('height', height);
    imageShape.attr('img', ctx2.canvas);
    imageShape.set('origin', this.getShapeInfo(data));
  };
  Heatmap2.prototype.getDefaultSize = function() {
    var position = this.getAttribute('position');
    var coordinate = this.coordinate;
    return Math.min(
      coordinate.getWidth() / (position.scales[0].ticks.length * 4),
      coordinate.getHeight() / (position.scales[1].ticks.length * 4)
    );
  };
  Heatmap2.prototype.clearShadowCanvasCtx = function() {
    var ctx2 = this.getShadowCanvasCtx();
    ctx2.clearRect(0, 0, ctx2.canvas.width, ctx2.canvas.height);
  };
  Heatmap2.prototype.getShadowCanvasCtx = function() {
    var canvas = this.shadowCanvas;
    if (!canvas) {
      canvas = document.createElement('canvas');
      this.shadowCanvas = canvas;
    }
    canvas.width = this.coordinate.getWidth();
    canvas.height = this.coordinate.getHeight();
    return canvas.getContext('2d');
  };
  Heatmap2.prototype.getGrayScaleBlurredCanvas = function() {
    if (!this.grayScaleBlurredCanvas) {
      this.grayScaleBlurredCanvas = document.createElement('canvas');
    }
    return this.grayScaleBlurredCanvas;
  };
  Heatmap2.prototype.drawGrayScaleBlurredCircle = function(x, y, r, alpha, ctx2) {
    var grayScaleBlurredCanvas = this.getGrayScaleBlurredCanvas();
    ctx2.globalAlpha = alpha;
    ctx2.drawImage(grayScaleBlurredCanvas, x - r, y - r);
  };
  Heatmap2.prototype.colorize = function(img) {
    var colorAttr = this.getAttribute('color');
    var pixels = img.data;
    var paletteCache = this.paletteCache;
    for (var i = 3; i < pixels.length; i += 4) {
      var alpha = pixels[i];
      if (isNumber10(alpha)) {
        var palette = paletteCache[alpha] ? paletteCache[alpha] : ColorUtil.rgb2arr(colorAttr.gradient(alpha / 256));
        pixels[i - 3] = palette[0];
        pixels[i - 2] = palette[1];
        pixels[i - 1] = palette[2];
        pixels[i] = alpha;
      }
    }
  };
  Heatmap2.prototype.getImageShape = function() {
    var imageShape = this.imageShape;
    if (imageShape) {
      return imageShape;
    }
    var container = this.container;
    imageShape = container.addShape({ type: 'image', attrs: {} });
    this.imageShape = imageShape;
    return imageShape;
  };
  Heatmap2.prototype.getShapeInfo = function(mappingData) {
    var shapeCfg = this.getDrawCfg(mappingData[0]);
    var data = mappingData.map(function(obj) {
      return obj[FIELD_ORIGIN];
    });
    return __assign19(__assign19({}, shapeCfg), { mappingData, data });
  };
  return Heatmap2;
})(base_default3);
var heatmap_default = Heatmap; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/interval.js
import { __extends as __extends13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get as get22 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/index.js
import { __assign as __assign20 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/util.js
import { __read as __read14, __spreadArray as __spreadArray11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isArray as isArray16,
  isNil as isNil10,
  get as get21
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getRectPoints(pointInfo) {
  var _a, _b;
  var x = pointInfo.x,
    y = pointInfo.y,
    y0 = pointInfo.y0,
    size6 = pointInfo.size;
  var yMin;
  var yMax;
  if (isArray16(y)) {
    (_a = __read14(y, 2)), (yMin = _a[0]), (yMax = _a[1]);
  } else {
    yMin = y0;
    yMax = y;
  }
  var xMin;
  var xMax;
  if (isArray16(x)) {
    (_b = __read14(x, 2)), (xMin = _b[0]), (xMax = _b[1]);
  } else {
    xMin = x - size6 / 2;
    xMax = x + size6 / 2;
  }
  var points = [
    { x: xMin, y: yMin },
    { x: xMin, y: yMax }
  ];
  points.push({ x: xMax, y: yMax }, { x: xMax, y: yMin });
  return points;
}
function getRectPath(points, isClosed) {
  if (isClosed === void 0) {
    isClosed = true;
  }
  var path = [];
  var firstPoint = points[0];
  path.push(['M', firstPoint.x, firstPoint.y]);
  for (var i = 1, len = points.length; i < len; i++) {
    path.push(['L', points[i].x, points[i].y]);
  }
  if (isClosed) {
    path.push(['L', firstPoint.x, firstPoint.y]);
    path.push(['z']);
  }
  return path;
}
function parseRadius(radius, minLength) {
  var r1 = 0;
  var r2 = 0;
  var r3 = 0;
  var r4 = 0;
  if (isArray16(radius)) {
    if (radius.length === 1) {
      r1 = r2 = r3 = r4 = radius[0];
    } else if (radius.length === 2) {
      r1 = r3 = radius[0];
      r2 = r4 = radius[1];
    } else if (radius.length === 3) {
      r1 = radius[0];
      r2 = r4 = radius[1];
      r3 = radius[2];
    } else {
      r1 = radius[0];
      r2 = radius[1];
      r3 = radius[2];
      r4 = radius[3];
    }
  } else {
    r1 = r2 = r3 = r4 = radius;
  }
  if (r1 + r2 > minLength) {
    r1 = r1 ? minLength / (1 + r2 / r1) : 0;
    r2 = minLength - r1;
  }
  if (r3 + r4 > minLength) {
    r3 = r3 ? minLength / (1 + r4 / r3) : 0;
    r4 = minLength - r3;
  }
  return [r1 || 0, r2 || 0, r3 || 0, r4 || 0];
}
function getBackgroundRectPath(cfg, points, coordinate) {
  var path = [];
  if (coordinate.isRect) {
    var p0 = coordinate.isTransposed
      ? { x: coordinate.start.x, y: points[0].y }
      : { x: points[0].x, y: coordinate.start.y };
    var p1 = coordinate.isTransposed
      ? { x: coordinate.end.x, y: points[2].y }
      : { x: points[3].x, y: coordinate.end.y };
    var radius = get21(cfg, ['background', 'style', 'radius']);
    if (radius) {
      var width = coordinate.isTransposed ? Math.abs(points[0].y - points[2].y) : points[2].x - points[1].x;
      var height = coordinate.isTransposed ? coordinate.getWidth() : coordinate.getHeight();
      var _a = __read14(parseRadius(radius, Math.min(width, height)), 4),
        r1 = _a[0],
        r2 = _a[1],
        r3 = _a[2],
        r4 = _a[3];
      var isReflectYTransposed_1 = coordinate.isTransposed && coordinate.isReflect('y');
      var bump = isReflectYTransposed_1 ? 0 : 1;
      var opposite = function(r) {
        return isReflectYTransposed_1 ? -r : r;
      };
      path.push(['M', p0.x, p1.y + opposite(r1)]);
      r1 !== 0 && path.push(['A', r1, r1, 0, 0, bump, p0.x + r1, p1.y]);
      path.push(['L', p1.x - r2, p1.y]);
      r2 !== 0 && path.push(['A', r2, r2, 0, 0, bump, p1.x, p1.y + opposite(r2)]);
      path.push(['L', p1.x, p0.y - opposite(r3)]);
      r3 !== 0 && path.push(['A', r3, r3, 0, 0, bump, p1.x - r3, p0.y]);
      path.push(['L', p0.x + r4, p0.y]);
      r4 !== 0 && path.push(['A', r4, r4, 0, 0, bump, p0.x, p0.y - opposite(r4)]);
    } else {
      path.push(['M', p0.x, p0.y]);
      path.push(['L', p1.x, p0.y]);
      path.push(['L', p1.x, p1.y]);
      path.push(['L', p0.x, p1.y]);
      path.push(['L', p0.x, p0.y]);
    }
    path.push(['z']);
  }
  if (coordinate.isPolar) {
    var center = coordinate.getCenter();
    var _b = getAngle(cfg, coordinate),
      startAngle = _b.startAngle,
      endAngle = _b.endAngle;
    if (coordinate.type !== 'theta' && !coordinate.isTransposed) {
      path = getSectorPath(center.x, center.y, coordinate.getRadius(), startAngle, endAngle);
    } else {
      var pow = function(v) {
        return Math.pow(v, 2);
      };
      var r1 = Math.sqrt(pow(center.x - points[0].x) + pow(center.y - points[0].y));
      var r2 = Math.sqrt(pow(center.x - points[2].x) + pow(center.y - points[2].y));
      path = getSectorPath(center.x, center.y, r1, coordinate.startAngle, coordinate.endAngle, r2);
    }
  }
  return path;
}
function getIntervalRectPath(points, lineCap, coor) {
  var width = coor.getWidth();
  var height = coor.getHeight();
  var isRect = coor.type === 'rect';
  var path = [];
  var r = (points[2].x - points[1].x) / 2;
  var ry = coor.isTransposed ? (r * height) / width : (r * width) / height;
  if (lineCap === 'round') {
    if (isRect) {
      path.push(['M', points[0].x, points[0].y + ry]);
      path.push(['L', points[1].x, points[1].y - ry]);
      path.push(['A', r, r, 0, 0, 1, points[2].x, points[2].y - ry]);
      path.push(['L', points[3].x, points[3].y + ry]);
      path.push(['A', r, r, 0, 0, 1, points[0].x, points[0].y + ry]);
    } else {
      path.push(['M', points[0].x, points[0].y]);
      path.push(['L', points[1].x, points[1].y]);
      path.push(['A', r, r, 0, 0, 1, points[2].x, points[2].y]);
      path.push(['L', points[3].x, points[3].y]);
      path.push(['A', r, r, 0, 0, 1, points[0].x, points[0].y]);
    }
    path.push(['z']);
  } else {
    path = getRectPath(points);
  }
  return path;
}
function getFunnelPath(points, nextPoints, isPyramid) {
  var path = [];
  if (!isNil10(nextPoints)) {
    path.push(
      ['M', points[0].x, points[0].y],
      ['L', points[1].x, points[1].y],
      ['L', nextPoints[1].x, nextPoints[1].y],
      ['L', nextPoints[0].x, nextPoints[0].y],
      ['Z']
    );
  } else if (isPyramid) {
    path.push(
      ['M', points[0].x, points[0].y],
      ['L', points[1].x, points[1].y],
      ['L', (points[2].x + points[3].x) / 2, (points[2].y + points[3].y) / 2],
      ['Z']
    );
  } else {
    path.push(
      ['M', points[0].x, points[0].y],
      ['L', points[1].x, points[1].y],
      ['L', points[2].x, points[2].y],
      ['L', points[3].x, points[3].y],
      ['Z']
    );
  }
  return path;
}
function swap(p0, p1) {
  return [p1, p0];
}
function getRectWithCornerRadius(points, coordinate, radius) {
  var _a, _b, _c, _d, _e, _f, _g;
  var _h = __read14(__spreadArray11([], __read14(points), false), 4),
    p0 = _h[0],
    p1 = _h[1],
    p2 = _h[2],
    p3 = _h[3];
  var _j = __read14(typeof radius === 'number' ? Array(4).fill(radius) : radius, 4),
    r1 = _j[0],
    r2 = _j[1],
    r3 = _j[2],
    r4 = _j[3];
  if (coordinate.isTransposed) {
    (_a = __read14(swap(p1, p3), 2)), (p1 = _a[0]), (p3 = _a[1]);
  }
  if (coordinate.isReflect('y')) {
    (_b = __read14(swap(p0, p1), 2)), (p0 = _b[0]), (p1 = _b[1]);
    (_c = __read14(swap(p2, p3), 2)), (p2 = _c[0]), (p3 = _c[1]);
  }
  if (coordinate.isReflect('x')) {
    (_d = __read14(swap(p0, p3), 2)), (p0 = _d[0]), (p3 = _d[1]);
    (_e = __read14(swap(p1, p2), 2)), (p1 = _e[0]), (p2 = _e[1]);
  }
  var path = [];
  var abs = function(v) {
    return Math.abs(v);
  };
  (_f = __read14(
    parseRadius([r1, r2, r3, r4], Math.min(abs(p3.x - p0.x), abs(p1.y - p0.y))).map(function(d) {
      return abs(d);
    }),
    4
  )),
    (r1 = _f[0]),
    (r2 = _f[1]),
    (r3 = _f[2]),
    (r4 = _f[3]);
  if (coordinate.isTransposed) {
    (_g = __read14([r4, r1, r2, r3], 4)), (r1 = _g[0]), (r2 = _g[1]), (r3 = _g[2]), (r4 = _g[3]);
  }
  if (p0.y < p1.y) {
    path.push(['M', p3.x, p3.y + r3]);
    r3 !== 0 && path.push(['A', r3, r3, 0, 0, 0, p3.x - r3, p3.y]);
    path.push(['L', p0.x + r4, p0.y]);
    r4 !== 0 && path.push(['A', r4, r4, 0, 0, 0, p0.x, p0.y + r4]);
    path.push(['L', p1.x, p1.y - r1]);
    r1 !== 0 && path.push(['A', r1, r1, 0, 0, 0, p1.x + r1, p1.y]);
    path.push(['L', p2.x - r2, p2.y]);
    r2 !== 0 && path.push(['A', r2, r2, 0, 0, 0, p2.x, p2.y - r2]);
    path.push(['L', p3.x, p3.y + r3]);
    path.push(['z']);
  } else if (p3.x < p0.x) {
    path.push(['M', p2.x + r2, p2.y]);
    r2 !== 0 && path.push(['A', r2, r2, 0, 0, 0, p2.x, p2.y + r2]);
    path.push(['L', p3.x, p3.y - r3]);
    r3 !== 0 && path.push(['A', r3, r3, 0, 0, 0, p3.x + r3, p3.y]);
    path.push(['L', p0.x - r4, p0.y]);
    r4 !== 0 && path.push(['A', r4, r4, 0, 0, 0, p0.x, p0.y - r4]);
    path.push(['L', p1.x, p1.y + r1]);
    r1 !== 0 && path.push(['A', r1, r1, 0, 0, 0, p1.x - r1, p1.y]);
    path.push(['L', p2.x + r2, p2.y]);
    path.push(['z']);
  } else {
    path.push(['M', p1.x, p1.y + r1]);
    r1 !== 0 && path.push(['A', r1, r1, 0, 0, 1, p1.x + r1, p1.y]);
    path.push(['L', p2.x - r2, p2.y]);
    r2 !== 0 && path.push(['A', r2, r2, 0, 0, 1, p2.x, p2.y + r2]);
    path.push(['L', p3.x, p3.y - r3]);
    r3 !== 0 && path.push(['A', r3, r3, 0, 0, 1, p3.x - r3, p3.y]);
    path.push(['L', p0.x + r4, p0.y]);
    r4 !== 0 && path.push(['A', r4, r4, 0, 0, 1, p0.x, p0.y - r4]);
    path.push(['L', p1.x, p1.y + r1]);
    path.push(['z']);
  }
  return path;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/index.js
var IntervalShapeFactory = registerShapeFactory('interval', {
  defaultShapeType: 'rect',
  getDefaultPoints: function(pointInfo) {
    return getRectPoints(pointInfo);
  }
});
registerShape('interval', 'rect', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, false, true);
    var group2 = container;
    var backgroundCfg = cfg === null || cfg === void 0 ? void 0 : cfg.background;
    if (backgroundCfg) {
      group2 = container.addGroup({ name: 'interval-group' });
      var backgroundStyle = getBackgroundRectStyle(cfg);
      var backgroundPath = getBackgroundRectPath(cfg, this.parsePoints(cfg.points), this.coordinate);
      group2.addShape('path', {
        attrs: __assign20(__assign20({}, backgroundStyle), { path: backgroundPath }),
        zIndex: -1,
        name: BACKGROUND_SHAPE
      });
    }
    var path;
    if (style.radius && this.coordinate.isRect) {
      path = getRectWithCornerRadius(this.parsePoints(cfg.points), this.coordinate, style.radius);
    } else {
      path = this.parsePath(getIntervalRectPath(cfg.points, style.lineCap, this.coordinate));
    }
    var shape = group2.addShape('path', { attrs: __assign20(__assign20({}, style), { path }), name: 'interval' });
    return backgroundCfg ? group2 : shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color,
      isInPolar = markerCfg.isInPolar;
    if (isInPolar) {
      return { symbol: 'circle', style: { r: 4.5, fill: color } };
    }
    return { symbol: 'square', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/util/shape-size.js
import {
  flatten as flatten4,
  isString as isString10,
  valuesOfKey as valuesOfKey2,
  isNil as isNil11
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function findMinDistance(arr, scale) {
  var count = arr.length;
  var sourceArr = arr;
  if (isString10(sourceArr[0])) {
    sourceArr = arr.map(function(v) {
      return scale.translate(v);
    });
  }
  var distance2 = sourceArr[1] - sourceArr[0];
  for (var i = 2; i < count; i++) {
    var tmp = sourceArr[i] - sourceArr[i - 1];
    if (distance2 > tmp) {
      distance2 = tmp;
    }
  }
  return distance2;
}
function getDodgeCount(dataArray, dodgeBy) {
  if (dodgeBy) {
    var mergeData = flatten4(dataArray);
    var values3 = valuesOfKey2(mergeData, dodgeBy);
    return values3.length;
  }
  return dataArray.length;
}
function getDefaultSize(geometry) {
  var theme = geometry.theme;
  var coordinate = geometry.coordinate;
  var xScale = geometry.getXScale();
  var xValues = xScale.values;
  var dataArray = geometry.beforeMappingData;
  var count = xValues.length;
  var xDimensionLength = getXDimensionLength(geometry.coordinate);
  var intervalPadding = geometry.intervalPadding,
    dodgePadding = geometry.dodgePadding;
  var maxColumnWidth = geometry.maxColumnWidth || theme.maxColumnWidth;
  var minColumnWidth = geometry.minColumnWidth || theme.minColumnWidth;
  var columnWidthRatio = geometry.columnWidthRatio || theme.columnWidthRatio;
  var multiplePieWidthRatio = geometry.multiplePieWidthRatio || theme.multiplePieWidthRatio;
  var roseWidthRatio = geometry.roseWidthRatio || theme.roseWidthRatio;
  if (xScale.isLinear && xValues.length > 1) {
    xValues.sort();
    var interval = findMinDistance(xValues, xScale);
    count = (xScale.max - xScale.min) / interval;
    if (xValues.length > count) {
      count = xValues.length;
    }
  }
  var range = xScale.range;
  var normalizedSize = 1 / count;
  var wr = 1;
  if (coordinate.isPolar) {
    if (coordinate.isTransposed && count > 1) {
      wr = multiplePieWidthRatio;
    } else {
      wr = roseWidthRatio;
    }
  } else {
    if (xScale.isLinear) {
      normalizedSize *= range[1] - range[0];
    }
    wr = columnWidthRatio;
  }
  if (!isNil11(intervalPadding) && intervalPadding >= 0) {
    var normalizedIntervalPadding = intervalPadding / xDimensionLength;
    normalizedSize = (1 - (count - 1) * normalizedIntervalPadding) / count;
  } else {
    normalizedSize *= wr;
  }
  if (geometry.getAdjust('dodge')) {
    var dodgeAdjust = geometry.getAdjust('dodge');
    var dodgeBy = dodgeAdjust.dodgeBy;
    var dodgeCount = getDodgeCount(dataArray, dodgeBy);
    if (!isNil11(dodgePadding) && dodgePadding >= 0) {
      var normalizedDodgePadding = dodgePadding / xDimensionLength;
      normalizedSize = (normalizedSize - normalizedDodgePadding * (dodgeCount - 1)) / dodgeCount;
    } else if (!isNil11(intervalPadding) && intervalPadding >= 0) {
      normalizedSize *= wr;
      normalizedSize = normalizedSize / dodgeCount;
    } else {
      normalizedSize = normalizedSize / dodgeCount;
    }
    normalizedSize = normalizedSize >= 0 ? normalizedSize : 0;
  }
  if (!isNil11(maxColumnWidth) && maxColumnWidth >= 0) {
    var normalizedMaxColumnWidth = maxColumnWidth / xDimensionLength;
    if (normalizedSize > normalizedMaxColumnWidth) {
      normalizedSize = normalizedMaxColumnWidth;
    }
  }
  if (!isNil11(minColumnWidth) && minColumnWidth >= 0) {
    var normalizedMinColumnWidth = minColumnWidth / xDimensionLength;
    if (normalizedSize < normalizedMinColumnWidth) {
      normalizedSize = normalizedMinColumnWidth;
    }
  }
  return normalizedSize;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/interval.js
var Interval = (function(_super) {
  __extends13(Interval2, _super);
  function Interval2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'interval';
    _this.shapeType = 'interval';
    _this.generatePoints = true;
    var background = cfg.background;
    _this.background = background;
    return _this;
  }
  Interval2.prototype.createShapePointsCfg = function(obj) {
    var cfg = _super.prototype.createShapePointsCfg.call(this, obj);
    var size6;
    var sizeAttr = this.getAttribute('size');
    if (sizeAttr) {
      size6 = this.getAttributeValues(sizeAttr, obj)[0];
      var coordinate = this.coordinate;
      var coordinateWidth = getXDimensionLength(coordinate);
      size6 = size6 / coordinateWidth;
    } else {
      if (!this.defaultSize) {
        this.defaultSize = getDefaultSize(this);
      }
      size6 = this.defaultSize;
    }
    cfg.size = size6;
    return cfg;
  };
  Interval2.prototype.adjustScale = function() {
    _super.prototype.adjustScale.call(this);
    var yScale = this.getYScale();
    if (this.coordinate.type === 'theta') {
      yScale.change({ nice: false, min: 0, max: getMaxScale(yScale) });
    } else {
      var scaleDefs = this.scaleDefs;
      var field = yScale.field,
        min2 = yScale.min,
        max3 = yScale.max,
        type = yScale.type;
      if (type !== 'time') {
        if (min2 > 0 && !get22(scaleDefs, [field, 'min'])) {
          yScale.change({ min: 0 });
        }
        if (max3 <= 0 && !get22(scaleDefs, [field, 'max'])) {
          yScale.change({ max: 0 });
        }
      }
    }
  };
  Interval2.prototype.getDrawCfg = function(mappingData) {
    var shapeCfg = _super.prototype.getDrawCfg.call(this, mappingData);
    shapeCfg.background = this.background;
    return shapeCfg;
  };
  return Interval2;
})(base_default3);
var interval_default = Interval; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/line.js
import { __extends as __extends14 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Line = (function(_super) {
  __extends14(Line2, _super);
  function Line2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'line';
    var _a = cfg.sortable,
      sortable = _a === void 0 ? false : _a;
    _this.sortable = sortable;
    return _this;
  }
  return Line2;
})(path_default);
var line_default = Line; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/point.js
import { __assign as __assign22, __extends as __extends15 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/index.js
import { each as each22 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/util.js
import { __assign as __assign21, __values as __values9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var SHAPES = ['circle', 'square', 'bowtie', 'diamond', 'hexagon', 'triangle', 'triangle-down'];
var HOLLOW_SHAPES = ['cross', 'tick', 'plus', 'hyphen', 'line'];
function drawPoints(shape, cfg, container, shapeName, isStroke) {
  var e_1, _a;
  var style = getStyle(cfg, isStroke, !isStroke, 'r');
  var points = shape.parsePoints(cfg.points);
  var pointPosition = points[0];
  if (cfg.isStack) {
    pointPosition = points[1];
  } else if (points.length > 1) {
    var group2 = container.addGroup();
    try {
      for (
        var points_1 = __values9(points), points_1_1 = points_1.next();
        !points_1_1.done;
        points_1_1 = points_1.next()
      ) {
        var point = points_1_1.value;
        group2.addShape({
          type: 'marker',
          attrs: __assign21(__assign21(__assign21({}, style), { symbol: MarkerSymbols[shapeName] || shapeName }), point)
        });
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (points_1_1 && !points_1_1.done && (_a = points_1.return)) _a.call(points_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    return group2;
  }
  return container.addShape({
    type: 'marker',
    attrs: __assign21(
      __assign21(__assign21({}, style), { symbol: MarkerSymbols[shapeName] || shapeName }),
      pointPosition
    )
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/index.js
var PointShapeFactory = registerShapeFactory('point', {
  defaultShapeType: 'hollow-circle',
  getDefaultPoints: function(pointInfo) {
    return splitPoints(pointInfo);
  }
});
each22(SHAPES, function(shapeName) {
  registerShape('point', 'hollow-'.concat(shapeName), {
    draw: function(cfg, container) {
      return drawPoints(this, cfg, container, shapeName, true);
    },
    getMarker: function(markerCfg) {
      var color = markerCfg.color;
      return { symbol: MarkerSymbols[shapeName] || shapeName, style: { r: 4.5, stroke: color, fill: null } };
    }
  });
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/point.js
var Point = (function(_super) {
  __extends15(Point2, _super);
  function Point2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'point';
    _this.shapeType = 'point';
    _this.generatePoints = true;
    return _this;
  }
  Point2.prototype.getDrawCfg = function(mappingDatum) {
    var shapeCfg = _super.prototype.getDrawCfg.call(this, mappingDatum);
    return __assign22(__assign22({}, shapeCfg), { isStack: !!this.getAdjust('stack') });
  };
  return Point2;
})(base_default3);
var point_default = Point; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/polygon.js
import { __extends as __extends16 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray17 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/polygon/index.js
import { __assign as __assign23 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each23,
  isEmpty as isEmpty6,
  isEqual as isEqual6,
  last as last2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getPath3(points) {
  var flag = points[0];
  var i = 1;
  var path = [['M', flag.x, flag.y]];
  while (i < points.length) {
    var c = points[i];
    if (c.x !== points[i - 1].x || c.y !== points[i - 1].y) {
      path.push(['L', c.x, c.y]);
      if (c.x === flag.x && c.y === flag.y && i < points.length - 1) {
        flag = points[i + 1];
        path.push(['Z']);
        path.push(['M', flag.x, flag.y]);
        i++;
      }
    }
    i++;
  }
  if (!isEqual6(last2(path), flag)) {
    path.push(['L', flag.x, flag.y]);
  }
  path.push(['Z']);
  return path;
}
var PolygonShapeFactory = registerShapeFactory('polygon', {
  defaultShapeType: 'polygon',
  getDefaultPoints: function(pointInfo) {
    var points = [];
    each23(pointInfo.x, function(subX, index) {
      var subY = pointInfo.y[index];
      points.push({ x: subX, y: subY });
    });
    return points;
  }
});
registerShape('polygon', 'polygon', {
  draw: function(cfg, container) {
    if (!isEmpty6(cfg.points)) {
      var shapeAttrs = getStyle(cfg, true, true);
      var path = this.parsePath(getPath3(cfg.points));
      return container.addShape('path', { attrs: __assign23(__assign23({}, shapeAttrs), { path }), name: 'polygon' });
    }
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'square', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/polygon.js
var Polygon = (function(_super) {
  __extends16(Polygon2, _super);
  function Polygon2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'polygon';
    _this.shapeType = 'polygon';
    _this.generatePoints = true;
    return _this;
  }
  Polygon2.prototype.createShapePointsCfg = function(obj) {
    var cfg = _super.prototype.createShapePointsCfg.call(this, obj);
    var x = cfg.x;
    var y = cfg.y;
    var temp;
    if (!(isArray17(x) && isArray17(y))) {
      var xScale = this.getXScale();
      var yScale = this.getYScale();
      var xCount = xScale.values.length;
      var yCount = yScale.values.length;
      var xOffset = (0.5 * 1) / xCount;
      var yOffset = (0.5 * 1) / yCount;
      if (xScale.isCategory && yScale.isCategory) {
        x = [x - xOffset, x - xOffset, x + xOffset, x + xOffset];
        y = [y - yOffset, y + yOffset, y + yOffset, y - yOffset];
      } else if (isArray17(x)) {
        temp = x;
        x = [temp[0], temp[0], temp[1], temp[1]];
        y = [y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2];
      } else if (isArray17(y)) {
        temp = y;
        y = [temp[0], temp[1], temp[1], temp[0]];
        x = [x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2];
      }
      cfg.x = x;
      cfg.y = y;
    }
    return cfg;
  };
  return Polygon2;
})(base_default3);
var polygon_default = Polygon; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/schema.js
import { __extends as __extends17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/schema/index.js
var SchemaShapeFactory = registerShapeFactory('schema', { defaultShapeType: '' }); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/schema.js
var Schema = (function(_super) {
  __extends17(Schema2, _super);
  function Schema2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'schema';
    _this.shapeType = 'schema';
    _this.generatePoints = true;
    return _this;
  }
  Schema2.prototype.createShapePointsCfg = function(record) {
    var cfg = _super.prototype.createShapePointsCfg.call(this, record);
    var size6;
    var sizeAttr = this.getAttribute('size');
    if (sizeAttr) {
      size6 = this.getAttributeValues(sizeAttr, record)[0];
      var coordinate = this.coordinate;
      var coordinateWidth = getXDimensionLength(coordinate);
      size6 = size6 / coordinateWidth;
    } else {
      if (!this.defaultSize) {
        this.defaultSize = getDefaultSize(this);
      }
      size6 = this.defaultSize;
    }
    cfg.size = size6;
    return cfg;
  };
  return Schema2;
})(base_default3);
var schema_default = Schema; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/violin.js
import { __extends as __extends18 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get as get23 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/violin/index.js
import { __assign as __assign24 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each24,
  max as max2,
  map,
  isArray as isArray18
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function normalizeSize(arr) {
  if (!isArray18(arr)) {
    return [];
  }
  var maxValue = max2(arr);
  return map(arr, function(num) {
    return num / maxValue;
  });
}
var ViolinShapeFactory = registerShapeFactory('violin', {
  defaultShapeType: 'violin',
  getDefaultPoints: function(pointInfo) {
    var radius = pointInfo.size / 2;
    var points = [];
    var sizeArr = normalizeSize(pointInfo._size);
    each24(pointInfo.y, function(y, index) {
      var offset = sizeArr[index] * radius;
      var isMin = index === 0;
      var isMax = index === pointInfo.y.length - 1;
      points.push({ isMin, isMax, x: pointInfo.x - offset, y });
      points.unshift({ isMin, isMax, x: pointInfo.x + offset, y });
    });
    return points;
  }
});
registerShape('violin', 'violin', {
  draw: function(cfg, container) {
    var shapeAttrs = getStyle(cfg, true, true);
    var path = this.parsePath(getViolinPath(cfg.points));
    return container.addShape('path', { attrs: __assign24(__assign24({}, shapeAttrs), { path }), name: 'violin' });
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'circle', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/violin.js
var Violin = (function(_super) {
  __extends18(Violin2, _super);
  function Violin2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'violin';
    _this.shapeType = 'violin';
    _this.generatePoints = true;
    return _this;
  }
  Violin2.prototype.createShapePointsCfg = function(record) {
    var cfg = _super.prototype.createShapePointsCfg.call(this, record);
    var size6;
    var sizeAttr = this.getAttribute('size');
    if (sizeAttr) {
      size6 = this.getAttributeValues(sizeAttr, record)[0];
      var coordinate = this.coordinate;
      var coordinateWidth = getXDimensionLength(coordinate);
      size6 = size6 / coordinateWidth;
    } else {
      if (!this.defaultSize) {
        this.defaultSize = getDefaultSize(this);
      }
      size6 = this.defaultSize;
    }
    cfg.size = size6;
    cfg._size = get23(record[FIELD_ORIGIN], [this._sizeField]);
    return cfg;
  };
  Violin2.prototype.initAttributes = function() {
    var attributeOption = this.attributeOption;
    var sizeField = attributeOption.size ? attributeOption.size.fields[0] : this._sizeField ? this._sizeField : 'size';
    this._sizeField = sizeField;
    delete attributeOption.size;
    _super.prototype.initAttributes.call(this);
  };
  return Violin2;
})(base_default3);
var violin_default = Violin; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/line.js
registerShape('area', 'line', {
  draw: function(cfg, container) {
    var attrs = getShapeAttrs2(cfg, true, false, this);
    var shape = container.addShape({ type: 'path', attrs, name: 'area' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        if (r === void 0) {
          r = 5.5;
        }
        return [['M', x - r, y - 4], ['L', x + r, y - 4], ['L', x + r, y + 4], ['L', x - r, y + 4], ['Z']];
      },
      style: { r: 5, stroke: color, fill: null }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/smooth.js
registerShape('area', 'smooth', {
  draw: function(cfg, container) {
    var coordinate = this.coordinate;
    var attrs = getShapeAttrs2(cfg, false, true, this, getConstraint(coordinate));
    var shape = container.addShape({ type: 'path', attrs, name: 'area' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        if (r === void 0) {
          r = 5.5;
        }
        return [['M', x - r, y - 4], ['L', x + r, y - 4], ['L', x + r, y + 4], ['L', x - r, y + 4], ['Z']];
      },
      style: { r: 5, fill: color, fillOpacity: 1 }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/area/smooth-line.js
registerShape('area', 'smooth-line', {
  draw: function(cfg, container) {
    var coordinate = this.coordinate;
    var attrs = getShapeAttrs2(cfg, true, true, this, getConstraint(coordinate));
    var shape = container.addShape({ type: 'path', attrs, name: 'area' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        if (r === void 0) {
          r = 5.5;
        }
        return [['M', x - r, y - 4], ['L', x + r, y - 4], ['L', x + r, y + 4], ['L', x - r, y + 4], ['Z']];
      },
      style: { r: 5, stroke: color, fill: null }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/arc.js
import { __assign as __assign25 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/util.js
import { each as each25 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getCPath(from, to) {
  return ['C', (from.x * 1) / 2 + (to.x * 1) / 2, from.y, (from.x * 1) / 2 + (to.x * 1) / 2, to.y, to.x, to.y];
}
function getQPath(to, center) {
  var points = [];
  points.push({ x: center.x, y: center.y });
  points.push(to);
  var sub = ['Q'];
  each25(points, function(point) {
    sub.push(point.x, point.y);
  });
  return sub;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/arc.js
function getArcShapePath(from, to, center) {
  var sub = getQPath(to, center);
  var path = [['M', from.x, from.y]];
  path.push(sub);
  return path;
}
function getArcShapeWeightPath(points, center) {
  var arc1 = getQPath(points[1], center);
  var arc2 = getQPath(points[3], center);
  var path = [['M', points[0].x, points[0].y]];
  path.push(arc2);
  path.push(['L', points[3].x, points[3].y]);
  path.push(['L', points[2].x, points[2].y]);
  path.push(arc1);
  path.push(['L', points[1].x, points[1].y]);
  path.push(['L', points[0].x, points[0].y]);
  path.push(['Z']);
  return path;
}
registerShape('edge', 'arc', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false, 'lineWidth');
    var points = cfg.points;
    var type = points.length > 2 ? 'weight' : 'normal';
    var path;
    if (cfg.isInCircle) {
      var center = { x: 0, y: 1 };
      if (type === 'normal') {
        path = getArcShapePath(points[0], points[1], center);
      } else {
        style.fill = style.stroke;
        path = getArcShapeWeightPath(points, center);
      }
      path = this.parsePath(path);
      return container.addShape('path', { attrs: __assign25(__assign25({}, style), { path }) });
    } else {
      if (type === 'normal') {
        points = this.parsePoints(points);
        path = getArcPath(
          (points[1].x + points[0].x) / 2,
          points[0].y,
          Math.abs(points[1].x - points[0].x) / 2,
          Math.PI,
          Math.PI * 2
        );
        return container.addShape('path', { attrs: __assign25(__assign25({}, style), { path }) });
      } else {
        var c1 = getCPath(points[1], points[3]);
        var c2 = getCPath(points[2], points[0]);
        path = [
          ['M', points[0].x, points[0].y],
          ['L', points[1].x, points[1].y],
          c1,
          ['L', points[3].x, points[3].y],
          ['L', points[2].x, points[2].y],
          c2,
          ['Z']
        ];
        path = this.parsePath(path);
        style.fill = style.stroke;
        return container.addShape('path', { attrs: __assign25(__assign25({}, style), { path }) });
      }
    }
  },
  getMarker: function(markerCfg) {
    return { symbol: 'circle', style: { r: 4.5, fill: markerCfg.color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/smooth.js
import { __assign as __assign26 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function getSmoothPath(from, to) {
  var sub = getCPath(from, to);
  var path = [['M', from.x, from.y]];
  path.push(sub);
  return path;
}
registerShape('edge', 'smooth', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false, 'lineWidth');
    var points = cfg.points;
    var path = this.parsePath(getSmoothPath(points[0], points[1]));
    return container.addShape('path', { attrs: __assign26(__assign26({}, style), { path }) });
  },
  getMarker: function(markerCfg) {
    return { symbol: 'circle', style: { r: 4.5, fill: markerCfg.color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/edge/vhv.js
import { __assign as __assign27 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each26 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var CORNER_PERCENT = 1 / 3;
function getVHVPath(from, to) {
  var points = [];
  points.push({ x: from.x, y: from.y * (1 - CORNER_PERCENT) + to.y * CORNER_PERCENT });
  points.push({ x: to.x, y: from.y * (1 - CORNER_PERCENT) + to.y * CORNER_PERCENT });
  points.push(to);
  var path = [['M', from.x, from.y]];
  each26(points, function(point) {
    path.push(['L', point.x, point.y]);
  });
  return path;
}
registerShape('edge', 'vhv', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false, 'lineWidth');
    var points = cfg.points;
    var path = this.parsePath(getVHVPath(points[0], points[1]));
    return container.addShape('path', { attrs: __assign27(__assign27({}, style), { path }) });
  },
  getMarker: function(markerCfg) {
    return { symbol: 'circle', style: { r: 4.5, fill: markerCfg.color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/funnel.js
import { __assign as __assign28 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('interval', 'funnel', {
  getPoints: function(shapePoint) {
    shapePoint.size = shapePoint.size * 2;
    return getRectPoints(shapePoint);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, false, true);
    var path = this.parsePath(getFunnelPath(cfg.points, cfg.nextPoints, false));
    var shape = container.addShape('path', { attrs: __assign28(__assign28({}, style), { path }), name: 'interval' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'square', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/hollow-rect.js
import { __assign as __assign29 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('interval', 'hollow-rect', {
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false);
    var group2 = container;
    var backgroundCfg = cfg === null || cfg === void 0 ? void 0 : cfg.background;
    if (backgroundCfg) {
      group2 = container.addGroup();
      var backgroundStyle = getBackgroundRectStyle(cfg);
      var backgroundPath = getBackgroundRectPath(cfg, this.parsePoints(cfg.points), this.coordinate);
      group2.addShape('path', {
        attrs: __assign29(__assign29({}, backgroundStyle), { path: backgroundPath }),
        zIndex: -1,
        name: BACKGROUND_SHAPE
      });
    }
    var path = this.parsePath(getRectPath(cfg.points));
    var shape = group2.addShape('path', { attrs: __assign29(__assign29({}, style), { path }), name: 'interval' });
    return backgroundCfg ? group2 : shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color,
      isInPolar = markerCfg.isInPolar;
    if (isInPolar) {
      return { symbol: 'circle', style: { r: 4.5, stroke: color, fill: null } };
    }
    return { symbol: 'square', style: { r: 4, stroke: color, fill: null } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/line.js
import { __assign as __assign30 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray19 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getLinePoints(pointInfo) {
  var x = pointInfo.x,
    y = pointInfo.y,
    y0 = pointInfo.y0;
  if (isArray19(y)) {
    return y.map(function(yItem, idx) {
      return { x: isArray19(x) ? x[idx] : x, y: yItem };
    });
  }
  return [
    { x, y: y0 },
    { x, y }
  ];
}
registerShape('interval', 'line', {
  getPoints: function(shapePoint) {
    return getLinePoints(shapePoint);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false, 'lineWidth');
    var newStyle = omit(__assign30({}, style), ['fill']);
    var path = this.parsePath(getRectPath(cfg.points, false));
    var shape = container.addShape('path', { attrs: __assign30(__assign30({}, newStyle), { path }), name: 'interval' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        return [
          ['M', x, y - r],
          ['L', x, y + r]
        ];
      },
      style: { r: 5, stroke: color }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/pyramid.js
import { __assign as __assign31 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('interval', 'pyramid', {
  getPoints: function(shapePoint) {
    shapePoint.size = shapePoint.size * 2;
    return getRectPoints(shapePoint);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, false, true);
    var path = this.parsePath(getFunnelPath(cfg.points, cfg.nextPoints, true));
    var shape = container.addShape('path', { attrs: __assign31(__assign31({}, style), { path }), name: 'interval' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'square', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/interval/tick.js
import { __assign as __assign32, __read as __read15 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray20 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getTickPoints(pointInfo) {
  var _a;
  var x = pointInfo.x,
    y = pointInfo.y,
    y0 = pointInfo.y0,
    size6 = pointInfo.size;
  var yMin;
  var yMax;
  if (isArray20(y)) {
    (_a = __read15(y, 2)), (yMin = _a[0]), (yMax = _a[1]);
  } else {
    yMin = y0;
    yMax = y;
  }
  var xMax = x + size6 / 2;
  var xMin = x - size6 / 2;
  return [
    { x, y: yMin },
    { x, y: yMax },
    { x: xMin, y: yMin },
    { x: xMax, y: yMin },
    { x: xMin, y: yMax },
    { x: xMax, y: yMax }
  ];
}
function getTickPath(points) {
  return [
    ['M', points[0].x, points[0].y],
    ['L', points[1].x, points[1].y],
    ['M', points[2].x, points[2].y],
    ['L', points[3].x, points[3].y],
    ['M', points[4].x, points[4].y],
    ['L', points[5].x, points[5].y]
  ];
}
registerShape('interval', 'tick', {
  getPoints: function(shapePoint) {
    return getTickPoints(shapePoint);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false);
    var path = this.parsePath(getTickPath(cfg.points));
    var shape = container.addShape('path', { attrs: __assign32(__assign32({}, style), { path }), name: 'interval' });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        return [
          ['M', x - r / 2, y - r],
          ['L', x + r / 2, y - r],
          ['M', x, y - r],
          ['L', x, y + r],
          ['M', x - r / 2, y + r],
          ['L', x + r / 2, y + r]
        ];
      },
      style: { r: 5, stroke: color }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/line/step.js
import { __assign as __assign33 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each27 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var interpolateCallback = function(point, nextPoint, shapeType) {
  var x = point.x;
  var y = point.y;
  var nextX = nextPoint.x;
  var nextY = nextPoint.y;
  var result;
  switch (shapeType) {
    case 'hv':
      result = [{ x: nextX, y }];
      break;
    case 'vh':
      result = [{ x, y: nextY }];
      break;
    case 'hvh':
      var middleX = (nextX + x) / 2;
      result = [
        { x: middleX, y },
        { x: middleX, y: nextY }
      ];
      break;
    case 'vhv':
      var middleY = (y + nextY) / 2;
      result = [
        { x, y: middleY },
        { x: nextX, y: middleY }
      ];
      break;
    default:
      break;
  }
  return result;
};
function getInterpolatePoints(points, shapeType) {
  var result = [];
  each27(points, function(point, index) {
    var nextPoint = points[index + 1];
    result.push(point);
    if (nextPoint) {
      var interpolatePoint = interpolateCallback(point, nextPoint, shapeType);
      result = result.concat(interpolatePoint);
    }
  });
  return result;
}
function getInterpolatePath(points) {
  return points.map(function(point, index) {
    return index === 0 ? ['M', point.x, point.y] : ['L', point.x, point.y];
  });
}
function getInterpolateShapeAttrs(cfg, shapeType) {
  var points = getPathPoints(cfg.points, cfg.connectNulls, cfg.showSinglePoint);
  var path = [];
  each27(points, function(eachLinePoints) {
    var interpolatePoints = getInterpolatePoints(eachLinePoints, shapeType);
    path = path.concat(getInterpolatePath(interpolatePoints));
  });
  return __assign33(__assign33({}, getStyle(cfg, true, false, 'lineWidth')), { path });
}
each27(['hv', 'vh', 'hvh', 'vhv'], function(shapeType) {
  registerShape('line', shapeType, {
    draw: function(cfg, container) {
      var attrs = getInterpolateShapeAttrs(cfg, shapeType);
      var shape = container.addShape({ type: 'path', attrs, name: 'line' });
      return shape;
    },
    getMarker: function(markerCfg) {
      return getLineMarker(markerCfg, shapeType);
    }
  });
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/hollow.js
import { each as each28 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
each28(HOLLOW_SHAPES, function(shapeName) {
  registerShape('point', shapeName, {
    draw: function(cfg, container) {
      return drawPoints(this, cfg, container, shapeName, true);
    },
    getMarker: function(markerCfg) {
      var color = markerCfg.color;
      return { symbol: MarkerSymbols[shapeName], style: { r: 4.5, stroke: color, fill: null } };
    }
  });
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/image.js
import { __values as __values10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('point', 'image', {
  draw: function(cfg, container) {
    var e_1, _a;
    var size6 = getStyle(cfg, false, false, 'r').r;
    var points = this.parsePoints(cfg.points);
    var pointPosition = points[0];
    if (cfg.isStack) {
      pointPosition = points[1];
    } else if (points.length > 1) {
      var group2 = container.addGroup();
      try {
        for (
          var points_1 = __values10(points), points_1_1 = points_1.next();
          !points_1_1.done;
          points_1_1 = points_1.next()
        ) {
          var point = points_1_1.value;
          group2.addShape('image', {
            attrs: { x: point.x - size6 / 2, y: point.y - size6, width: size6, height: size6, img: cfg.shape[1] }
          });
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (points_1_1 && !points_1_1.done && (_a = points_1.return)) _a.call(points_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
      return group2;
    }
    return container.addShape('image', {
      attrs: {
        x: pointPosition.x - size6 / 2,
        y: pointPosition.y - size6,
        width: size6,
        height: size6,
        img: cfg.shape[1]
      }
    });
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'circle', style: { r: 4.5, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/point/solid.js
import { each as each29 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
each29(SHAPES, function(shapeName) {
  registerShape('point', shapeName, {
    draw: function(cfg, container) {
      return drawPoints(this, cfg, container, shapeName, false);
    },
    getMarker: function(markerCfg) {
      var color = markerCfg.color;
      return { symbol: MarkerSymbols[shapeName] || shapeName, style: { r: 4.5, fill: color } };
    }
  });
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/schema/box.js
import { __assign as __assign34 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray21, isNil as isNil12 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function parseValue(value) {
  var array = !isArray21(value) ? [value] : value;
  var min2 = array[0];
  var max3 = array[array.length - 1];
  var min1 = array.length > 1 ? array[1] : min2;
  var max1 = array.length > 3 ? array[3] : max3;
  var median = array.length > 2 ? array[2] : min1;
  return { min: min2, max: max3, min1, max1, median };
}
function getBoxPoints(x, y, size6) {
  var halfSize = size6 / 2;
  var pointsArray;
  if (isArray21(y)) {
    var _a = parseValue(y),
      min2 = _a.min,
      max3 = _a.max,
      median = _a.median,
      min1 = _a.min1,
      max1 = _a.max1;
    var minX = x - halfSize;
    var maxX = x + halfSize;
    pointsArray = [
      [minX, max3],
      [maxX, max3],
      [x, max3],
      [x, max1],
      [minX, min1],
      [minX, max1],
      [maxX, max1],
      [maxX, min1],
      [x, min1],
      [x, min2],
      [minX, min2],
      [maxX, min2],
      [minX, median],
      [maxX, median]
    ];
  } else {
    y = isNil12(y) ? 0.5 : y;
    var _b = parseValue(x),
      min2 = _b.min,
      max3 = _b.max,
      median = _b.median,
      min1 = _b.min1,
      max1 = _b.max1;
    var minY = y - halfSize;
    var maxY = y + halfSize;
    pointsArray = [
      [min2, minY],
      [min2, maxY],
      [min2, y],
      [min1, y],
      [min1, minY],
      [min1, maxY],
      [max1, maxY],
      [max1, minY],
      [max1, y],
      [max3, y],
      [max3, minY],
      [max3, maxY],
      [median, minY],
      [median, maxY]
    ];
  }
  return pointsArray.map(function(arr) {
    return { x: arr[0], y: arr[1] };
  });
}
function getBoxPath(points) {
  return [
    ['M', points[0].x, points[0].y],
    ['L', points[1].x, points[1].y],
    ['M', points[2].x, points[2].y],
    ['L', points[3].x, points[3].y],
    ['M', points[4].x, points[4].y],
    ['L', points[5].x, points[5].y],
    ['L', points[6].x, points[6].y],
    ['L', points[7].x, points[7].y],
    ['L', points[4].x, points[4].y],
    ['Z'],
    ['M', points[8].x, points[8].y],
    ['L', points[9].x, points[9].y],
    ['M', points[10].x, points[10].y],
    ['L', points[11].x, points[11].y],
    ['M', points[12].x, points[12].y],
    ['L', points[13].x, points[13].y]
  ];
}
registerShape('schema', 'box', {
  getPoints: function(shapePoint) {
    var x = shapePoint.x,
      y = shapePoint.y,
      size6 = shapePoint.size;
    return getBoxPoints(x, y, size6);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, false);
    var path = this.parsePath(getBoxPath(cfg.points));
    var shape = container.addShape('path', { attrs: __assign34(__assign34({}, style), { path, name: 'schema' }) });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        var yValues = [y - 6, y - 3, y, y + 3, y + 6];
        var points = getBoxPoints(x, yValues, r);
        return [
          ['M', points[0].x + 1, points[0].y],
          ['L', points[1].x - 1, points[1].y],
          ['M', points[2].x, points[2].y],
          ['L', points[3].x, points[3].y],
          ['M', points[4].x, points[4].y],
          ['L', points[5].x, points[5].y],
          ['L', points[6].x, points[6].y],
          ['L', points[7].x, points[7].y],
          ['L', points[4].x, points[4].y],
          ['Z'],
          ['M', points[8].x, points[8].y],
          ['L', points[9].x, points[9].y],
          ['M', points[10].x + 1, points[10].y],
          ['L', points[11].x - 1, points[11].y],
          ['M', points[12].x, points[12].y],
          ['L', points[13].x, points[13].y]
        ];
      },
      style: { r: 6, lineWidth: 1, stroke: color }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/schema/candle.js
import { __assign as __assign35 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray22 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getCandleYValues(value) {
  var array = !isArray22(value) ? [value] : value;
  var sorted = array.sort(function(a, b) {
    return b - a;
  });
  return padEnd(sorted, 4, sorted[sorted.length - 1]);
}
function getCandlePoints(x, y, size6) {
  var yValues = getCandleYValues(y);
  return [
    { x, y: yValues[0] },
    { x, y: yValues[1] },
    { x: x - size6 / 2, y: yValues[2] },
    { x: x - size6 / 2, y: yValues[1] },
    { x: x + size6 / 2, y: yValues[1] },
    { x: x + size6 / 2, y: yValues[2] },
    { x, y: yValues[2] },
    { x, y: yValues[3] }
  ];
}
function getCandlePath(points) {
  return [
    ['M', points[0].x, points[0].y],
    ['L', points[1].x, points[1].y],
    ['M', points[2].x, points[2].y],
    ['L', points[3].x, points[3].y],
    ['L', points[4].x, points[4].y],
    ['L', points[5].x, points[5].y],
    ['Z'],
    ['M', points[6].x, points[6].y],
    ['L', points[7].x, points[7].y]
  ];
}
registerShape('schema', 'candle', {
  getPoints: function(shapePoint) {
    var x = shapePoint.x,
      y = shapePoint.y,
      size6 = shapePoint.size;
    return getCandlePoints(x, y, size6);
  },
  draw: function(cfg, container) {
    var style = getStyle(cfg, true, true);
    var path = this.parsePath(getCandlePath(cfg.points));
    var shape = container.addShape('path', { attrs: __assign35(__assign35({}, style), { path, name: 'schema' }) });
    return shape;
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return {
      symbol: function(x, y, r) {
        var yValues = [y + 7.5, y + 3, y - 3, y - 7.5];
        var points = getCandlePoints(x, yValues, r);
        return [
          ['M', points[0].x, points[0].y],
          ['L', points[1].x, points[1].y],
          ['M', points[2].x, points[2].y],
          ['L', points[3].x, points[3].y],
          ['L', points[4].x, points[4].y],
          ['L', points[5].x, points[5].y],
          ['Z'],
          ['M', points[6].x, points[6].y],
          ['L', points[7].x, points[7].y]
        ];
      },
      style: { lineWidth: 1, stroke: color, fill: color, r: 6 }
    };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/polygon/square.js
import { __assign as __assign36 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isEmpty as isEmpty7, clamp } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getRectAttrs(points, size6) {
  var width = Math.abs(points[0].x - points[2].x);
  var height = Math.abs(points[0].y - points[2].y);
  var len = Math.min(width, height);
  if (size6) {
    len = clamp(size6, 0, Math.min(width, height));
  }
  len = len / 2;
  var centerX = (points[0].x + points[2].x) / 2;
  var centerY = (points[0].y + points[2].y) / 2;
  return { x: centerX - len, y: centerY - len, width: len * 2, height: len * 2 };
}
registerShape('polygon', 'square', {
  draw: function(cfg, container) {
    if (!isEmpty7(cfg.points)) {
      var shapeAttrs = getStyle(cfg, true, true);
      var points = this.parsePoints(cfg.points);
      return container.addShape('rect', {
        attrs: __assign36(__assign36({}, shapeAttrs), getRectAttrs(points, cfg.size)),
        name: 'polygon'
      });
    }
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'square', style: { r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/violin/smooth.js
import { __assign as __assign37 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('violin', 'smooth', {
  draw: function(cfg, container) {
    var attrs = getStyle(cfg, true, true);
    var path = this.parsePath(getSmoothViolinPath(cfg.points));
    return container.addShape('path', { attrs: __assign37(__assign37({}, attrs), { path }) });
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'circle', style: { stroke: null, r: 4, fill: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/shape/violin/hollow.js
import { __assign as __assign38 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
registerShape('violin', 'hollow', {
  draw: function(cfg, container) {
    var attrs = getStyle(cfg, true, false);
    var path = this.parsePath(getViolinPath(cfg.points));
    return container.addShape('path', { attrs: __assign38(__assign38({}, attrs), { path }) });
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'circle', style: { r: 4, fill: null, stroke: color } };
  }
});
registerShape('violin', 'hollow-smooth', {
  draw: function(cfg, container) {
    var attrs = getStyle(cfg, true, false);
    var path = this.parsePath(getSmoothViolinPath(cfg.points));
    return container.addShape('path', { attrs: __assign38(__assign38({}, attrs), { path }) });
  },
  getMarker: function(markerCfg) {
    var color = markerCfg.color;
    return { symbol: 'circle', style: { r: 4, fill: null, stroke: color } };
  }
}); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/interval.js
import { __assign as __assign39, __extends as __extends19 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  get as get24,
  deepMix as deepMix16,
  isArray as isArray23
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var IntervalLabel = (function(_super) {
  __extends19(IntervalLabel2, _super);
  function IntervalLabel2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  IntervalLabel2.prototype.getLabelValueDir = function(mappingData) {
    var dim = 'y';
    var points = mappingData.points;
    return points[0][dim] <= points[2][dim] ? 1 : -1;
  };
  IntervalLabel2.prototype.getLabelOffsetPoint = function(labelCfg, index, total, position) {
    var _a;
    var point = _super.prototype.getLabelOffsetPoint.call(this, labelCfg, index, total);
    var coordinate = this.getCoordinate();
    var transposed = coordinate.isTransposed;
    var dim = transposed ? 'x' : 'y';
    var dir = this.getLabelValueDir(labelCfg.mappingData);
    point = __assign39(__assign39({}, point), ((_a = {}), (_a[dim] = point[dim] * dir), _a));
    if (coordinate.isReflect('x')) {
      point = __assign39(__assign39({}, point), { x: point.x * -1 });
    }
    if (coordinate.isReflect('y')) {
      point = __assign39(__assign39({}, point), { y: point.y * -1 });
    }
    return point;
  };
  IntervalLabel2.prototype.getThemedLabelCfg = function(labelCfg) {
    var geometry = this.geometry;
    var defaultLabelCfg = this.getDefaultLabelCfg();
    var theme = geometry.theme;
    return deepMix16({}, defaultLabelCfg, theme.labels, labelCfg.position === 'middle' ? { offset: 0 } : {}, labelCfg);
  };
  IntervalLabel2.prototype.setLabelPosition = function(labelPointCfg, mappingData, index, position) {
    var coordinate = this.getCoordinate();
    var transposed = coordinate.isTransposed;
    var shapePoints = mappingData.points;
    var point0 = coordinate.convert(shapePoints[0]);
    var point2 = coordinate.convert(shapePoints[2]);
    var dir = this.getLabelValueDir(mappingData);
    var top;
    var right;
    var bottom;
    var left;
    var shape = isArray23(mappingData.shape) ? mappingData.shape[0] : mappingData.shape;
    if (shape === 'funnel' || shape === 'pyramid') {
      var nextPoints = get24(mappingData, 'nextPoints');
      var points = get24(mappingData, 'points');
      if (nextPoints) {
        var p0 = coordinate.convert(points[0]);
        var p1 = coordinate.convert(points[1]);
        var nextP0 = coordinate.convert(nextPoints[0]);
        var nextP1 = coordinate.convert(nextPoints[1]);
        if (transposed) {
          top = Math.min(nextP0.y, p0.y);
          bottom = Math.max(nextP0.y, p0.y);
          right = (p1.x + nextP1.x) / 2;
          left = (p0.x + nextP0.x) / 2;
        } else {
          top = Math.min((p1.y + nextP1.y) / 2, (p0.y + nextP0.y) / 2);
          bottom = Math.max((p1.y + nextP1.y) / 2, (p0.y + nextP0.y) / 2);
          right = nextP1.x;
          left = p0.x;
        }
      } else {
        top = Math.min(point2.y, point0.y);
        bottom = Math.max(point2.y, point0.y);
        right = point2.x;
        left = point0.x;
      }
    } else {
      top = Math.min(point2.y, point0.y);
      bottom = Math.max(point2.y, point0.y);
      right = point2.x;
      left = point0.x;
    }
    switch (position) {
      case 'right':
        labelPointCfg.x = right;
        labelPointCfg.y = (top + bottom) / 2;
        labelPointCfg.textAlign = get24(labelPointCfg, 'textAlign', dir > 0 ? 'left' : 'right');
        break;
      case 'left':
        labelPointCfg.x = left;
        labelPointCfg.y = (top + bottom) / 2;
        labelPointCfg.textAlign = get24(labelPointCfg, 'textAlign', dir > 0 ? 'left' : 'right');
        break;
      case 'bottom':
        if (transposed) {
          labelPointCfg.x = (right + left) / 2;
        }
        labelPointCfg.y = bottom;
        labelPointCfg.textAlign = get24(labelPointCfg, 'textAlign', 'center');
        labelPointCfg.textBaseline = get24(labelPointCfg, 'textBaseline', dir > 0 ? 'bottom' : 'top');
        break;
      case 'middle':
        if (transposed) {
          labelPointCfg.x = (right + left) / 2;
        }
        labelPointCfg.y = (top + bottom) / 2;
        labelPointCfg.textAlign = get24(labelPointCfg, 'textAlign', 'center');
        labelPointCfg.textBaseline = get24(labelPointCfg, 'textBaseline', 'middle');
        break;
      case 'top':
        if (transposed) {
          labelPointCfg.x = (right + left) / 2;
        }
        labelPointCfg.y = top;
        labelPointCfg.textAlign = get24(labelPointCfg, 'textAlign', 'center');
        labelPointCfg.textBaseline = get24(labelPointCfg, 'textBaseline', dir > 0 ? 'bottom' : 'top');
        break;
      default:
        break;
    }
  };
  return IntervalLabel2;
})(base_default4);
var interval_default2 = IntervalLabel; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/pie.js
import { __assign as __assign41, __extends as __extends21 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix17,
  get as get26,
  isArray as isArray25
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/polar.js
import { __assign as __assign40, __extends as __extends20 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each30,
  get as get25,
  isArray as isArray24,
  map as map2,
  isNumber as isNumber11,
  isString as isString11
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var HALF_PI = Math.PI / 2;
var PolarLabel = (function(_super) {
  __extends20(PolarLabel2, _super);
  function PolarLabel2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  PolarLabel2.prototype.getLabelOffset = function(offset) {
    var coordinate = this.getCoordinate();
    var actualOffset = 0;
    if (isNumber11(offset)) {
      actualOffset = offset;
    } else if (isString11(offset) && offset.indexOf('%') !== -1) {
      var r = coordinate.getRadius();
      if (coordinate.innerRadius > 0) {
        r = r * (1 - coordinate.innerRadius);
      }
      actualOffset = parseFloat(offset) * 0.01 * r;
    }
    return actualOffset;
  };
  PolarLabel2.prototype.getLabelItems = function(mapppingArray) {
    var items = _super.prototype.getLabelItems.call(this, mapppingArray);
    var yScale = this.geometry.getYScale();
    return map2(items, function(item) {
      if (item && yScale) {
        var percent = yScale.scale(get25(item.data, yScale.field));
        return __assign40(__assign40({}, item), { percent });
      }
      return item;
    });
  };
  PolarLabel2.prototype.getLabelAlign = function(point) {
    var coordinate = this.getCoordinate();
    var align;
    if (point.labelEmit) {
      align = point.angle <= Math.PI / 2 && point.angle >= -Math.PI / 2 ? 'left' : 'right';
    } else if (!coordinate.isTransposed) {
      align = 'center';
    } else {
      var center = coordinate.getCenter();
      var offset = point.offset;
      if (Math.abs(point.x - center.x) < 1) {
        align = 'center';
      } else if (point.angle > Math.PI || point.angle <= 0) {
        align = offset > 0 ? 'left' : 'right';
      } else {
        align = offset > 0 ? 'right' : 'left';
      }
    }
    return align;
  };
  PolarLabel2.prototype.getLabelPoint = function(labelCfg, mappingData, index) {
    var factor = 1;
    var arcPoint;
    var content = labelCfg.content[index];
    if (this.isToMiddle(mappingData)) {
      arcPoint = this.getMiddlePoint(mappingData.points);
    } else {
      if (labelCfg.content.length === 1 && index === 0) {
        index = 1;
      } else if (index === 0) {
        factor = -1;
      }
      arcPoint = this.getArcPoint(mappingData, index);
    }
    var offset = labelCfg.offset * factor;
    var middleAngle = this.getPointAngle(arcPoint);
    var isLabelEmit = labelCfg.labelEmit;
    var labelPositionCfg = this.getCirclePoint(middleAngle, offset, arcPoint, isLabelEmit);
    if (labelPositionCfg.r === 0) {
      labelPositionCfg.content = '';
    } else {
      labelPositionCfg.content = content;
      labelPositionCfg.angle = middleAngle;
      labelPositionCfg.color = mappingData.color;
    }
    labelPositionCfg.rotate = labelCfg.autoRotate
      ? this.getLabelRotate(middleAngle, offset, isLabelEmit)
      : labelCfg.rotate;
    labelPositionCfg.start = { x: arcPoint.x, y: arcPoint.y };
    return labelPositionCfg;
  };
  PolarLabel2.prototype.getArcPoint = function(mappingData, index) {
    if (index === void 0) {
      index = 0;
    }
    if (!isArray24(mappingData.x) && !isArray24(mappingData.y)) {
      return { x: mappingData.x, y: mappingData.y };
    }
    return {
      x: isArray24(mappingData.x) ? mappingData.x[index] : mappingData.x,
      y: isArray24(mappingData.y) ? mappingData.y[index] : mappingData.y
    };
  };
  PolarLabel2.prototype.getPointAngle = function(point) {
    return getAngleByPoint(this.getCoordinate(), point);
  };
  PolarLabel2.prototype.getCirclePoint = function(angle, offset, point, isLabelEmit) {
    var coordinate = this.getCoordinate();
    var center = coordinate.getCenter();
    var r = getDistanceToCenter(coordinate, point);
    if (r === 0) {
      return __assign40(__assign40({}, center), { r });
    }
    var labelAngle = angle;
    if (coordinate.isTransposed && r > offset && !isLabelEmit) {
      var appendAngle = Math.asin(offset / (2 * r));
      labelAngle = angle + appendAngle * 2;
    } else {
      r = r + offset;
    }
    return { x: center.x + r * Math.cos(labelAngle), y: center.y + r * Math.sin(labelAngle), r };
  };
  PolarLabel2.prototype.getLabelRotate = function(angle, offset, isLabelEmit) {
    var rotate2 = angle + HALF_PI;
    if (isLabelEmit) {
      rotate2 -= HALF_PI;
    }
    if (rotate2) {
      if (rotate2 > HALF_PI) {
        rotate2 = rotate2 - Math.PI;
      } else if (rotate2 < -HALF_PI) {
        rotate2 = rotate2 + Math.PI;
      }
    }
    return rotate2;
  };
  PolarLabel2.prototype.getMiddlePoint = function(points) {
    var coordinate = this.getCoordinate();
    var count = points.length;
    var middlePoint = { x: 0, y: 0 };
    each30(points, function(point) {
      middlePoint.x += point.x;
      middlePoint.y += point.y;
    });
    middlePoint.x /= count;
    middlePoint.y /= count;
    middlePoint = coordinate.convert(middlePoint);
    return middlePoint;
  };
  PolarLabel2.prototype.isToMiddle = function(mappingData) {
    return mappingData.x.length > 2;
  };
  return PolarLabel2;
})(base_default4);
var polar_default = PolarLabel; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/pie.js
var PieLabel = (function(_super) {
  __extends21(PieLabel2, _super);
  function PieLabel2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.defaultLayout = 'distribute';
    return _this;
  }
  PieLabel2.prototype.getDefaultLabelCfg = function(offset, position) {
    var cfg = _super.prototype.getDefaultLabelCfg.call(this, offset, position);
    return deepMix17({}, cfg, get26(this.geometry.theme, 'pieLabels', {}));
  };
  PieLabel2.prototype.getLabelOffset = function(offset) {
    return _super.prototype.getLabelOffset.call(this, offset) || 0;
  };
  PieLabel2.prototype.getLabelRotate = function(angle, offset, isLabelLimit) {
    var rotate2;
    if (offset < 0) {
      rotate2 = angle;
      if (rotate2 > Math.PI / 2) {
        rotate2 = rotate2 - Math.PI;
      }
      if (rotate2 < -Math.PI / 2) {
        rotate2 = rotate2 + Math.PI;
      }
    }
    return rotate2;
  };
  PieLabel2.prototype.getLabelAlign = function(point) {
    var coordinate = this.getCoordinate();
    var center = coordinate.getCenter();
    var align;
    if (point.angle <= Math.PI / 2 && point.x >= center.x) {
      align = 'left';
    } else {
      align = 'right';
    }
    if (point.offset <= 0) {
      if (align === 'right') {
        align = 'left';
      } else {
        align = 'right';
      }
    }
    return align;
  };
  PieLabel2.prototype.getArcPoint = function(point) {
    return point;
  };
  PieLabel2.prototype.getPointAngle = function(point) {
    var coordinate = this.getCoordinate();
    var startPoint = { x: isArray25(point.x) ? point.x[0] : point.x, y: point.y[0] };
    var endPoint = { x: isArray25(point.x) ? point.x[1] : point.x, y: point.y[1] };
    var angle;
    var startAngle = getAngleByPoint(coordinate, startPoint);
    if (point.points && point.points[0].y === point.points[1].y) {
      angle = startAngle;
    } else {
      var endAngle = getAngleByPoint(coordinate, endPoint);
      if (startAngle >= endAngle) {
        endAngle = endAngle + Math.PI * 2;
      }
      angle = startAngle + (endAngle - startAngle) / 2;
    }
    return angle;
  };
  PieLabel2.prototype.getCirclePoint = function(angle, offset) {
    var coordinate = this.getCoordinate();
    var center = coordinate.getCenter();
    var r = coordinate.getRadius() + offset;
    return __assign41(__assign41({}, polarToCartesian(center.x, center.y, r, angle)), { angle, r });
  };
  return PieLabel2;
})(polar_default);
var pie_default = PieLabel; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/pie/distribute.js
import { __values as __values11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isObject as isObject4,
  each as each31,
  find as find4,
  get as get27
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var MARGIN = 4;
function antiCollision(labelShapes, labels, lineHeight, plotRange, center, isRight) {
  var e_1, _a;
  var overlapping = true;
  var start = plotRange.start;
  var end = plotRange.end;
  var startY = Math.min(start.y, end.y);
  var totalHeight = Math.abs(start.y - end.y);
  var i;
  var maxY = 0;
  var minY = Number.MIN_VALUE;
  var boxes = labels.map(function(label) {
    if (label.y > maxY) {
      maxY = label.y;
    }
    if (label.y < minY) {
      minY = label.y;
    }
    return { size: lineHeight, targets: [label.y - startY] };
  });
  minY -= startY;
  if (maxY - startY > totalHeight) {
    totalHeight = maxY - startY;
  }
  while (overlapping) {
    boxes.forEach(function(box2) {
      var target = (Math.min.apply(minY, box2.targets) + Math.max.apply(minY, box2.targets)) / 2;
      box2.pos = Math.min(Math.max(minY, target - box2.size / 2), totalHeight - box2.size);
    });
    overlapping = false;
    i = boxes.length;
    while (i--) {
      if (i > 0) {
        var previousBox = boxes[i - 1];
        var box = boxes[i];
        if (previousBox.pos + previousBox.size > box.pos) {
          previousBox.size += box.size;
          previousBox.targets = previousBox.targets.concat(box.targets);
          if (previousBox.pos + previousBox.size > totalHeight) {
            previousBox.pos = totalHeight - previousBox.size;
          }
          boxes.splice(i, 1);
          overlapping = true;
        }
      }
    }
  }
  i = 0;
  boxes.forEach(function(b) {
    var posInCompositeBox = startY + lineHeight / 2;
    b.targets.forEach(function() {
      labels[i].y = b.pos + posInCompositeBox;
      posInCompositeBox += lineHeight;
      i++;
    });
  });
  var labelsMap = {};
  try {
    for (
      var labelShapes_1 = __values11(labelShapes), labelShapes_1_1 = labelShapes_1.next();
      !labelShapes_1_1.done;
      labelShapes_1_1 = labelShapes_1.next()
    ) {
      var labelShape = labelShapes_1_1.value;
      labelsMap[labelShape.get('id')] = labelShape;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (labelShapes_1_1 && !labelShapes_1_1.done && (_a = labelShapes_1.return)) _a.call(labelShapes_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  labels.forEach(function(label) {
    var rPow2 = label.r * label.r;
    var dyPow2 = Math.pow(Math.abs(label.y - center.y), 2);
    if (rPow2 < dyPow2) {
      label.x = center.x;
    } else {
      var dx = Math.sqrt(rPow2 - dyPow2);
      if (!isRight) {
        label.x = center.x - dx;
      } else {
        label.x = center.x + dx;
      }
    }
    var labelShape2 = labelsMap[label.id];
    labelShape2.attr('x', label.x);
    labelShape2.attr('y', label.y);
    var textShape = find4(labelShape2.getChildren(), function(ele) {
      return ele.get('type') === 'text';
    });
    if (textShape) {
      textShape.attr('y', label.y);
      textShape.attr('x', label.x);
    }
  });
}
function distribute(items, labels, shapes, region) {
  if (!items.length || !labels.length) {
    return;
  }
  var offset = items[0] ? items[0].offset : 0;
  var coordinate = labels[0].get('coordinate');
  var radius = coordinate.getRadius();
  var center = coordinate.getCenter();
  if (offset > 0) {
    var lineHeight_1 = 14;
    var totalR = radius + offset;
    var totalHeight_1 = totalR * 2 + lineHeight_1 * 2;
    var plotRange_1 = { start: coordinate.start, end: coordinate.end };
    var halves_1 = [[], []];
    items.forEach(function(labelItem) {
      if (!labelItem) {
        return;
      }
      if (labelItem.textAlign === 'right') {
        halves_1[0].push(labelItem);
      } else {
        halves_1[1].push(labelItem);
      }
    });
    halves_1.forEach(function(half, index) {
      var maxLabelsCountForOneSide = totalHeight_1 / lineHeight_1;
      if (half.length > maxLabelsCountForOneSide) {
        half.sort(function(a, b) {
          return b['..percent'] - a['..percent'];
        });
        half.splice(maxLabelsCountForOneSide, half.length - maxLabelsCountForOneSide);
      }
      half.sort(function(a, b) {
        return a.y - b.y;
      });
      antiCollision(labels, half, lineHeight_1, plotRange_1, center, index);
    });
  }
  each31(items, function(item) {
    if (item && item.labelLine) {
      var distance2 = item.offset;
      var angle = item.angle;
      var startPoint = polarToCartesian(center.x, center.y, radius, angle);
      var innerPoint = polarToCartesian(center.x, center.y, radius + distance2 / 2, angle);
      var itemX = item.x + get27(item, 'offsetX', 0);
      var itemY = item.y + get27(item, 'offsetY', 0);
      var endPoint = { x: itemX - Math.cos(angle) * MARGIN, y: itemY - Math.sin(angle) * MARGIN };
      if (!isObject4(item.labelLine)) {
        item.labelLine = {};
      }
      item.labelLine.path = [
        'M '.concat(startPoint.x),
        ''.concat(startPoint.y, ' Q').concat(innerPoint.x),
        ''.concat(innerPoint.y, ' ').concat(endPoint.x),
        endPoint.y
      ].join(',');
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/pie/outer.js
import { __values as __values12 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isObject as isObject5,
  each as each32,
  get as get28,
  groupBy,
  isNil as isNil13,
  filter as filter3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/pie/util.js
function antiCollision2(items, labelHeight, plotRange) {
  var labels = items.filter(function(item) {
    return !item.invisible;
  });
  labels.sort(function(a, b) {
    return a.y - b.y;
  });
  var overlapping = true;
  var startY = plotRange.minY;
  var endY = plotRange.maxY;
  var totalHeight = Math.abs(startY - endY);
  var i;
  var maxY = 0;
  var minY = Number.MIN_VALUE;
  var boxes = labels.map(function(label) {
    if (label.y > maxY) {
      maxY = label.y;
    }
    if (label.y < minY) {
      minY = label.y;
    }
    return { content: label.content, size: labelHeight, targets: [label.y - startY], pos: null };
  });
  minY -= startY;
  if (maxY - startY > totalHeight) {
    totalHeight = maxY - startY;
  }
  while (overlapping) {
    boxes.forEach(function(box2) {
      var target = (Math.min.apply(minY, box2.targets) + Math.max.apply(minY, box2.targets)) / 2;
      box2.pos = Math.min(Math.max(minY, target - box2.size / 2), totalHeight - box2.size);
      box2.pos = Math.max(0, box2.pos);
    });
    overlapping = false;
    i = boxes.length;
    while (i--) {
      if (i > 0) {
        var previousBox = boxes[i - 1];
        var box = boxes[i];
        if (previousBox.pos + previousBox.size > box.pos) {
          previousBox.size += box.size;
          previousBox.targets = previousBox.targets.concat(box.targets);
          if (previousBox.pos + previousBox.size > totalHeight) {
            previousBox.pos = totalHeight - previousBox.size;
          }
          boxes.splice(i, 1);
          overlapping = true;
        }
      }
    }
  }
  i = 0;
  boxes.forEach(function(b) {
    var posInCompositeBox = startY + labelHeight / 2;
    b.targets.forEach(function() {
      labels[i].y = b.pos + posInCompositeBox;
      posInCompositeBox += labelHeight;
      i++;
    });
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/pie/outer.js
var MARGIN2 = 4;
function drawLabelline(item, coordinate) {
  var center = coordinate.getCenter();
  var radius = coordinate.getRadius();
  if (item && item.labelLine) {
    var angle = item.angle,
      labelOffset = item.offset;
    var startPoint = polarToCartesian(center.x, center.y, radius, angle);
    var itemX = item.x + get28(item, 'offsetX', 0) * (Math.cos(angle) > 0 ? 1 : -1);
    var itemY = item.y + get28(item, 'offsetY', 0) * (Math.sin(angle) > 0 ? 1 : -1);
    var endPoint = { x: itemX - Math.cos(angle) * MARGIN2, y: itemY - Math.sin(angle) * MARGIN2 };
    var smoothConnector = item.labelLine.smooth;
    var path = [];
    var dx = endPoint.x - center.x;
    var dy = endPoint.y - center.y;
    var endAngle = Math.atan(dy / dx);
    if (dx < 0) {
      endAngle += Math.PI;
    }
    if (smoothConnector === false) {
      if (!isObject5(item.labelLine)) {
        item.labelLine = {};
      }
      var sweepFlag = 0;
      if ((angle < 0 && angle > -Math.PI / 2) || angle > Math.PI * 1.5) {
        if (endPoint.y > startPoint.y) {
          sweepFlag = 1;
        }
      }
      if (angle >= 0 && angle < Math.PI / 2) {
        if (endPoint.y > startPoint.y) {
          sweepFlag = 1;
        }
      }
      if (angle >= Math.PI / 2 && angle < Math.PI) {
        if (startPoint.y > endPoint.y) {
          sweepFlag = 1;
        }
      }
      if (angle < -Math.PI / 2 || (angle >= Math.PI && angle < Math.PI * 1.5)) {
        if (startPoint.y > endPoint.y) {
          sweepFlag = 1;
        }
      }
      var distance2 = labelOffset / 2 > 4 ? 4 : Math.max(labelOffset / 2 - 1, 0);
      var breakPoint = polarToCartesian(center.x, center.y, radius + distance2, angle);
      var breakPoint3 = polarToCartesian(center.x, center.y, radius + labelOffset / 2, endAngle);
      var largeArcFlag = 0;
      path.push('M '.concat(startPoint.x, ' ').concat(startPoint.y));
      path.push('L '.concat(breakPoint.x, ' ').concat(breakPoint.y));
      path.push(
        'A '
          .concat(center.x, ' ')
          .concat(center.y, ' 0 ')
          .concat(largeArcFlag, ' ')
          .concat(sweepFlag, ' ')
          .concat(breakPoint3.x, ' ')
          .concat(breakPoint3.y)
      );
      path.push('L '.concat(endPoint.x, ' ').concat(endPoint.y));
    } else {
      var breakPoint = polarToCartesian(
        center.x,
        center.y,
        radius + (labelOffset / 2 > 4 ? 4 : Math.max(labelOffset / 2 - 1, 0)),
        angle
      );
      var xSign = startPoint.x < center.x ? 1 : -1;
      path.push('M '.concat(endPoint.x, ' ').concat(endPoint.y));
      var slope1 = (startPoint.y - center.y) / (startPoint.x - center.x);
      var slope2 = (endPoint.y - center.y) / (endPoint.x - center.x);
      if (Math.abs(slope1 - slope2) > Math.pow(Math.E, -16)) {
        path.push.apply(path, [
          'C',
          endPoint.x + xSign * 4,
          endPoint.y,
          2 * breakPoint.x - startPoint.x,
          2 * breakPoint.y - startPoint.y,
          startPoint.x,
          startPoint.y
        ]);
      }
      path.push('L '.concat(startPoint.x, ' ').concat(startPoint.y));
    }
    item.labelLine.path = path.join(' ');
  }
}
function pieOuterLabelLayout(originalItems, labels, shapes, region) {
  var e_1, _a;
  var items = filter3(originalItems, function(item) {
    return !isNil13(item);
  });
  var coordinate = labels[0] && labels[0].get('coordinate');
  if (!coordinate) {
    return;
  }
  var center = coordinate.getCenter();
  var radius = coordinate.getRadius();
  var labelsMap = {};
  try {
    for (
      var labels_1 = __values12(labels), labels_1_1 = labels_1.next();
      !labels_1_1.done;
      labels_1_1 = labels_1.next()
    ) {
      var labelShape = labels_1_1.value;
      labelsMap[labelShape.get('id')] = labelShape;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (labels_1_1 && !labels_1_1.done && (_a = labels_1.return)) _a.call(labels_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  var labelHeight = get28(items[0], 'labelHeight', 14);
  var labelOffset = get28(items[0], 'offset', 0);
  if (labelOffset <= 0) {
    return;
  }
  var LEFT_HALF_KEY = 'left';
  var RIGHT_HALF_KEY = 'right';
  var separateLabels = groupBy(items, function(item) {
    return item.x < center.x ? LEFT_HALF_KEY : RIGHT_HALF_KEY;
  });
  var start = coordinate.start,
    end = coordinate.end;
  var totalHeight = Math.min((radius + labelOffset + labelHeight) * 2, coordinate.getHeight());
  var totalR = totalHeight / 2;
  var labelsContainerRange = { minX: start.x, maxX: end.x, minY: center.y - totalR, maxY: center.y + totalR };
  each32(separateLabels, function(half, key) {
    var maxLabelsCountForOneSide = Math.floor(totalHeight / labelHeight);
    if (half.length > maxLabelsCountForOneSide) {
      half.sort(function(a, b) {
        return b.percent - a.percent;
      });
      each32(half, function(labelItem, idx) {
        if (idx + 1 > maxLabelsCountForOneSide) {
          labelsMap[labelItem.id].set('visible', false);
          labelItem.invisible = true;
        }
      });
    }
    antiCollision2(half, labelHeight, labelsContainerRange);
  });
  each32(separateLabels, function(half, key) {
    each32(half, function(item) {
      var isRight = key === RIGHT_HALF_KEY;
      var labelShape2 = labelsMap[item.id];
      var content = labelShape2.getChildByIndex(0);
      if (content) {
        var r = radius + labelOffset;
        var dy = item.y - center.y;
        var rPow2 = Math.pow(r, 2);
        var dyPow2 = Math.pow(dy, 2);
        var dxPow2 = rPow2 - dyPow2 > 0 ? rPow2 - dyPow2 : 0;
        var dx = Math.sqrt(dxPow2);
        var dx_offset = Math.abs(Math.cos(item.angle) * r);
        if (!isRight) {
          item.x = center.x - Math.max(dx, dx_offset);
        } else {
          item.x = center.x + Math.max(dx, dx_offset);
        }
      }
      if (content) {
        content.attr('y', item.y);
        content.attr('x', item.x);
      }
      drawLabelline(item, coordinate);
    });
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/pie/spider.js
import { __values as __values13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each33,
  get as get29,
  isNil as isNil14,
  deepMix as deepMix18,
  groupBy as groupBy2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var INFLECTION_OFFSET = 4;
var LABEL_OFFSET_X = 4;
var LABEL_TEXT_LINE_OFFSET = 4;
function drawLabelline2(item, coordinate, inRight) {
  var center = coordinate.getCenter();
  var radius = coordinate.getRadius();
  var startPoint = { x: item.x - (inRight ? LABEL_TEXT_LINE_OFFSET : -LABEL_TEXT_LINE_OFFSET), y: item.y };
  var inflectionPoint = polarToCartesian(center.x, center.y, radius + INFLECTION_OFFSET, item.angle);
  var p1 = { x: startPoint.x, y: startPoint.y };
  var p2 = { x: inflectionPoint.x, y: inflectionPoint.y };
  var endPoint = polarToCartesian(center.x, center.y, radius, item.angle);
  var path = '';
  if (startPoint.y !== inflectionPoint.y) {
    var offset = inRight ? 4 : -4;
    p1.y = startPoint.y;
    if (item.angle < 0 && item.angle >= -Math.PI / 2) {
      p1.x = Math.max(inflectionPoint.x, startPoint.x - offset);
      if (startPoint.y < inflectionPoint.y) {
        p2.y = p1.y;
      } else {
        p2.y = inflectionPoint.y;
        p2.x = Math.max(p2.x, p1.x - offset);
      }
    }
    if (item.angle > 0 && item.angle < Math.PI / 2) {
      p1.x = Math.max(inflectionPoint.x, startPoint.x - offset);
      if (startPoint.y > inflectionPoint.y) {
        p2.y = p1.y;
      } else {
        p2.y = inflectionPoint.y;
        p2.x = Math.max(p2.x, p1.x - offset);
      }
    }
    if (item.angle > Math.PI / 2) {
      p1.x = Math.min(inflectionPoint.x, startPoint.x - offset);
      if (startPoint.y > inflectionPoint.y) {
        p2.y = p1.y;
      } else {
        p2.y = inflectionPoint.y;
        p2.x = Math.min(p2.x, p1.x - offset);
      }
    }
    if (item.angle < -Math.PI / 2) {
      p1.x = Math.min(inflectionPoint.x, startPoint.x - offset);
      if (startPoint.y < inflectionPoint.y) {
        p2.y = p1.y;
      } else {
        p2.y = inflectionPoint.y;
        p2.x = Math.min(p2.x, p1.x - offset);
      }
    }
  }
  path = [
    'M '.concat(startPoint.x, ',').concat(startPoint.y),
    'L '.concat(p1.x, ',').concat(p1.y),
    'L '.concat(p2.x, ',').concat(p2.y),
    'L '.concat(inflectionPoint.x, ',').concat(inflectionPoint.y),
    'L '.concat(endPoint.x, ',').concat(endPoint.y)
  ].join(' ');
  item.labelLine = deepMix18({}, item.labelLine, { path });
}
function pieSpiderLabelLayout(items, labels, shapes, region) {
  var e_1, _a;
  var coordinate = labels[0] && labels[0].get('coordinate');
  if (!coordinate) {
    return;
  }
  var center = coordinate.getCenter();
  var radius = coordinate.getRadius();
  var labelsMap = {};
  try {
    for (
      var labels_1 = __values13(labels), labels_1_1 = labels_1.next();
      !labels_1_1.done;
      labels_1_1 = labels_1.next()
    ) {
      var labelShape = labels_1_1.value;
      labelsMap[labelShape.get('id')] = labelShape;
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (labels_1_1 && !labels_1_1.done && (_a = labels_1.return)) _a.call(labels_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  var labelHeight = get29(items[0], 'labelHeight', 14);
  var labelOffset = Math.max(get29(items[0], 'offset', 0), INFLECTION_OFFSET);
  each33(items, function(item) {
    if (!item) return;
    var label = get29(labelsMap, [item.id]);
    if (!label) return;
    var inRight = item.x > center.x || (item.x === center.x && item.y > center.y);
    var offsetX = !isNil14(item.offsetX) ? item.offsetX : LABEL_OFFSET_X;
    var inflectionPoint = polarToCartesian(center.x, center.y, radius + INFLECTION_OFFSET, item.angle);
    var totalOffset = labelOffset + offsetX;
    item.x = center.x + (inRight ? 1 : -1) * (radius + totalOffset);
    item.y = inflectionPoint.y;
  });
  var start = coordinate.start,
    end = coordinate.end;
  var LEFT_HALF_KEY = 'left';
  var RIGHT_HALF_KEY = 'right';
  var separateLabels = groupBy2(items, function(item) {
    return item.x < center.x ? LEFT_HALF_KEY : RIGHT_HALF_KEY;
  });
  var totalHeight = (radius + labelOffset) * 2 + labelHeight;
  each33(separateLabels, function(half) {
    var halfHeight = half.length * labelHeight;
    if (halfHeight > totalHeight) {
      totalHeight = Math.min(halfHeight, Math.abs(start.y - end.y));
    }
  });
  var labelsContainerRange = {
    minX: start.x,
    maxX: end.x,
    minY: center.y - totalHeight / 2,
    maxY: center.y + totalHeight / 2
  };
  each33(separateLabels, function(half, key) {
    var maxLabelsCountForOneSide = totalHeight / labelHeight;
    if (half.length > maxLabelsCountForOneSide) {
      half.sort(function(a, b) {
        return b.percent - a.percent;
      });
      each33(half, function(labelItem, idx) {
        if (idx > maxLabelsCountForOneSide) {
          labelsMap[labelItem.id].set('visible', false);
          labelItem.invisible = true;
        }
      });
    }
    antiCollision2(half, labelHeight, labelsContainerRange);
  });
  var startY = labelsContainerRange.minY;
  var endY = labelsContainerRange.maxY;
  each33(separateLabels, function(half, key) {
    var inRight = key === RIGHT_HALF_KEY;
    each33(half, function(item) {
      var label = get29(labelsMap, item && [item.id]);
      if (!label) {
        return;
      }
      if (item.y < startY || item.y > endY) {
        label.set('visible', false);
        return;
      }
      var labelContent = label.getChildByIndex(0);
      var box = labelContent.getCanvasBBox();
      var originalPos = { x: inRight ? box.x : box.maxX, y: box.y + box.height / 2 };
      translate(labelContent, item.x - originalPos.x, item.y - originalPos.y);
      if (item.labelLine) {
        drawLabelline2(item, coordinate, inRight);
      }
    });
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/limit-in-canvas.js
import { each as each34 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function limitInCanvas(items, labels, shapes, region) {
  each34(labels, function(label) {
    var regionMinX = region.minX,
      regionMinY = region.minY,
      regionMaxX = region.maxX,
      regionMaxY = region.maxY;
    var _a = label.getCanvasBBox(),
      minX = _a.minX,
      minY = _a.minY,
      maxX = _a.maxX,
      maxY = _a.maxY,
      x = _a.x,
      y = _a.y,
      width = _a.width,
      height = _a.height;
    var finalX = x;
    var finalY = y;
    if (minX < regionMinX || maxX < regionMinX) {
      finalX = regionMinX;
    }
    if (minY < regionMinY || maxY < regionMinY) {
      finalY = regionMinY;
    }
    if (minX > regionMaxX) {
      finalX = regionMaxX - width;
    } else if (maxX > regionMaxX) {
      finalX = finalX - (maxX - regionMaxX);
    }
    if (minY > regionMaxY) {
      finalY = regionMaxY - height;
    } else if (maxY > regionMaxY) {
      finalY = finalY - (maxY - regionMaxY);
    }
    if (finalX !== x || finalY !== y) {
      translate(label, finalX - x, finalY - y);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/limit-in-shape.js
import { each as each35 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function limitInShape(items, labels, shapes, region) {
  each35(labels, function(label, index) {
    var labelBBox = label.getCanvasBBox();
    var shapeBBox = shapes[index].getBBox();
    if (
      labelBBox.minX < shapeBBox.minX ||
      labelBBox.minY < shapeBBox.minY ||
      labelBBox.maxX > shapeBBox.maxX ||
      labelBBox.maxY > shapeBBox.maxY
    ) {
      label.remove(true);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/overlap.js
import { each as each36 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var MAX_TIMES = 100;
var Greedy = (function() {
  function Greedy2(cfg) {
    if (cfg === void 0) {
      cfg = {};
    }
    this.bitmap = {};
    var _a = cfg.xGap,
      xGap = _a === void 0 ? 1 : _a,
      _b = cfg.yGap,
      yGap = _b === void 0 ? 8 : _b;
    this.xGap = xGap;
    this.yGap = yGap;
  }
  Greedy2.prototype.hasGap = function(bbox) {
    var hasGap = true;
    var bitmap = this.bitmap;
    var minX = Math.round(bbox.minX);
    var maxX = Math.round(bbox.maxX);
    var minY = Math.round(bbox.minY);
    var maxY = Math.round(bbox.maxY);
    for (var i = minX; i <= maxX; i += 1) {
      if (!bitmap[i]) {
        bitmap[i] = {};
        continue;
      }
      if (i === minX || i === maxX) {
        for (var j = minY; j <= maxY; j++) {
          if (bitmap[i][j]) {
            hasGap = false;
            break;
          }
        }
      } else {
        if (bitmap[i][minY] || bitmap[i][maxY]) {
          hasGap = false;
          break;
        }
      }
    }
    return hasGap;
  };
  Greedy2.prototype.fillGap = function(bbox) {
    var bitmap = this.bitmap;
    var minX = Math.round(bbox.minX);
    var maxX = Math.round(bbox.maxX);
    var minY = Math.round(bbox.minY);
    var maxY = Math.round(bbox.maxY);
    for (var i = minX; i <= maxX; i += 1) {
      if (!bitmap[i]) {
        bitmap[i] = {};
      }
    }
    for (var i = minX; i <= maxX; i += this.xGap) {
      for (var j = minY; j <= maxY; j += this.yGap) {
        bitmap[i][j] = true;
      }
      bitmap[i][maxY] = true;
    }
    if (this.yGap !== 1) {
      for (var i = minY; i <= maxY; i += 1) {
        bitmap[minX][i] = true;
        bitmap[maxX][i] = true;
      }
    }
    if (this.xGap !== 1) {
      for (var i = minX; i <= maxX; i += 1) {
        bitmap[i][minY] = true;
        bitmap[i][maxY] = true;
      }
    }
  };
  Greedy2.prototype.destroy = function() {
    this.bitmap = {};
  };
  return Greedy2;
})();
function spiralFill(label, greedy, maxTimes) {
  if (maxTimes === void 0) {
    maxTimes = MAX_TIMES;
  }
  var dt = -1;
  var _a = label.attr(),
    x = _a.x,
    y = _a.y;
  var bbox = label.getCanvasBBox();
  var maxDelta = Math.sqrt(bbox.width * bbox.width + bbox.height * bbox.height);
  var dxdy;
  var t = -dt;
  var dx = 0;
  var dy = 0;
  var f = function(param) {
    var nt = param * 0.1;
    return [nt * Math.cos(nt), nt * Math.sin(nt)];
  };
  if (greedy.hasGap(bbox)) {
    greedy.fillGap(bbox);
    return true;
  }
  var canFill = false;
  var times = 0;
  var accessedCache = {};
  while (Math.min(Math.abs(dx), Math.abs(dy)) < maxDelta && times < maxTimes) {
    dxdy = f((t += dt));
    dx = ~~dxdy[0];
    dy = ~~dxdy[1];
    if ((!dx && !dy) || accessedCache[''.concat(dx, '-').concat(dy)]) {
      continue;
    }
    label.attr({ x: x + dx, y: y + dy });
    if (dx + dy < 0) {
      label.attr('textAlign', 'right');
    }
    times++;
    if (greedy.hasGap(label.getCanvasBBox())) {
      greedy.fillGap(label.getCanvasBBox());
      canFill = true;
      accessedCache[''.concat(dx, '-').concat(dy)] = true;
      break;
    }
  }
  return canFill;
}
function adjustLabelPosition(label, x, y, index) {
  var _a = label.getCanvasBBox(),
    width = _a.width,
    height = _a.height;
  var attrs = { x, y, textAlign: 'center' };
  switch (index) {
    case 0:
      attrs.y -= height + 1;
      attrs.x += 1;
      attrs.textAlign = 'left';
      break;
    case 1:
      attrs.y -= height + 1;
      attrs.x -= 1;
      attrs.textAlign = 'right';
      break;
    case 2:
      attrs.y += height + 1;
      attrs.x -= 1;
      attrs.textAlign = 'right';
      break;
    case 3:
      attrs.y += height + 1;
      attrs.x += 1;
      attrs.textAlign = 'left';
      break;
    case 5:
      attrs.y -= height * 2 + 2;
      break;
    case 6:
      attrs.y += height * 2 + 2;
      break;
    case 7:
      attrs.x += width + 1;
      attrs.textAlign = 'left';
      break;
    case 8:
      attrs.x -= width + 1;
      attrs.textAlign = 'right';
      break;
    default:
      break;
  }
  label.attr(attrs);
  return label.getCanvasBBox();
}
function fixedOverlap(items, labels, shapes, region) {
  var greedy = new Greedy();
  each36(labels, function(label) {
    var labelShape = label.find(function(shape) {
      return shape.get('type') === 'text';
    });
    if (!spiralFill(labelShape, greedy)) {
      label.remove(true);
    }
  });
  greedy.destroy();
}
function overlap(items, labels, shapes, region) {
  var greedy = new Greedy();
  each36(labels, function(label) {
    var labelShape = label.find(function(shape) {
      return shape.get('type') === 'text';
    });
    var _a = labelShape.attr(),
      x = _a.x,
      y = _a.y;
    var canFill = false;
    for (var i = 0; i <= 8; i++) {
      var bbox = adjustLabelPosition(labelShape, x, y, i);
      if (greedy.hasGap(bbox)) {
        greedy.fillGap(bbox);
        canFill = true;
        break;
      }
    }
    if (!canFill) {
      label.remove(true);
    }
  });
  greedy.destroy();
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/hide-overlap.js
import {
  __assign as __assign42,
  __awaiter as __awaiter4,
  __generator as __generator4
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get as get30, each as each37 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/collision-detect.js
import { __read as __read16, __spreadArray as __spreadArray12 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function dot(a, b) {
  return (a[0] || 0) * (b[0] || 0) + (a[1] || 0) * (b[1] || 0) + (a[2] || 0) * (b[2] || 0);
}
function getAxes(points) {
  if (points.length > 4) {
    return [];
  }
  var vector = function(start, end) {
    return [end.x - start.x, end.y - start.y];
  };
  var AB = vector(points[0], points[1]);
  var BC = vector(points[1], points[2]);
  return [AB, BC];
}
function rotateAtPoint(point, deg, origin) {
  if (deg === void 0) {
    deg = 0;
  }
  if (origin === void 0) {
    origin = { x: 0, y: 0 };
  }
  var x = point.x,
    y = point.y;
  return {
    x: (x - origin.x) * Math.cos(-deg) + (y - origin.y) * Math.sin(-deg) + origin.x,
    y: (origin.x - x) * Math.sin(-deg) + (y - origin.y) * Math.cos(-deg) + origin.y
  };
}
function getRectPoints2(box) {
  var points = [
    { x: box.x, y: box.y },
    { x: box.x + box.width, y: box.y },
    { x: box.x + box.width, y: box.y + box.height },
    { x: box.x, y: box.y + box.height }
  ];
  var rotation = box.rotation;
  if (rotation) {
    return [
      rotateAtPoint(points[0], rotation, points[0]),
      rotateAtPoint(points[1], rotation, points[0]),
      rotateAtPoint(points[2], rotation, points[0]),
      rotateAtPoint(points[3], rotation, points[0])
    ];
  }
  return points;
}
function getProjection(points, axis) {
  if (points.length > 4) {
    return { min: 0, max: 0 };
  }
  var scalars = [];
  points.forEach(function(point) {
    scalars.push(dot([point.x, point.y], axis));
  });
  return {
    min: Math.min.apply(Math, __spreadArray12([], __read16(scalars), false)),
    max: Math.max.apply(Math, __spreadArray12([], __read16(scalars), false))
  };
}
function isProjectionOverlap(projection1, projection2) {
  return projection1.max > projection2.min && projection1.min < projection2.max;
}
function isValidNumber(d) {
  return typeof d === 'number' && !Number.isNaN(d) && d !== Infinity && d !== -Infinity;
}
function isValidBox(box) {
  return ['x', 'y', 'width', 'height'].every(function(attr) {
    return isValidNumber(box[attr]);
  });
}
function isIntersectRect(box1, box2, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  return !(
    box2.x > box1.x + box1.width + margin ||
    box2.x + box2.width < box1.x - margin ||
    box2.y > box1.y + box1.height + margin ||
    box2.y + box2.height < box1.y - margin
  );
}
function intersect(box1, box2, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  if (!isValidBox(box1) || !isValidBox(box2)) return false;
  if (!box1.rotation && !box2.rotation) {
    return isIntersectRect(box1, box2, margin);
  }
  var rect1Points = getRectPoints2(box1);
  var rect2Points = getRectPoints2(box2);
  var axes = getAxes(rect1Points).concat(getAxes(rect2Points));
  for (var i = 0; i < axes.length; i++) {
    var axis = axes[i];
    var projection1 = getProjection(rect1Points, axis);
    var projection2 = getProjection(rect2Points, axis);
    if (!isProjectionOverlap(projection1, projection2)) {
      return false;
    }
  }
  return true;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/util/createWorker.js
import { isFunction as isFunction10 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var MyWorker = (function() {
  function MyWorker2(url) {
    var _this = this;
    this.queue = [];
    this.worker = new Worker(url);
    this.worker.onmessage = function(e) {
      var _a;
      (_a = _this.queue.shift()) === null || _a === void 0 ? void 0 : _a.resolve(e);
    };
    this.worker.onmessageerror = function(e) {
      var _a;
      console.warn('[AntV G2] Web worker is not available');
      (_a = _this.queue.shift()) === null || _a === void 0 ? void 0 : _a.reject(e);
    };
  }
  MyWorker2.prototype.post = function(params, onError) {
    var _this = this;
    return new Promise(function(resolve, reject) {
      _this.queue.push({ resolve, reject });
      try {
        _this.worker.postMessage(params);
      } catch (e) {
        console.warn('[AntV G2] Web worker is not available');
        isFunction10(onError) && onError();
      }
    });
  };
  MyWorker2.prototype.destroy = function() {
    this.worker.terminate();
  };
  return MyWorker2;
})();
function createWorker(f) {
  if (typeof window === 'undefined') return;
  var blob;
  try {
    blob = new Blob([f.toString()], { type: 'application/javascript' });
  } catch (e) {
    blob = new window.BlobBuilder();
    blob.append(f.toString());
    blob = blob.getBlob();
  }
  return new MyWorker(URL.createObjectURL(blob));
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/worker/hide-overlap.js
var onmessage = function(e) {
  function generateUtils() {
    function dot2(a, b) {
      return (a[0] || 0) * (b[0] || 0) + (a[1] || 0) * (b[1] || 0) + (a[2] || 0) * (b[2] || 0);
    }
    function getAxes2(points) {
      if (points.length > 4) {
        return [];
      }
      var vector = function(start, end) {
        return [end.x - start.x, end.y - start.y];
      };
      var AB = vector(points[0], points[1]);
      var BC = vector(points[1], points[2]);
      return [AB, BC];
    }
    function rotateAtPoint2(point, deg, origin) {
      if (deg === void 0) {
        deg = 0;
      }
      if (origin === void 0) {
        origin = { x: 0, y: 0 };
      }
      var x = point.x,
        y = point.y;
      return {
        x: (x - origin.x) * Math.cos(-deg) + (y - origin.y) * Math.sin(-deg) + origin.x,
        y: (origin.x - x) * Math.sin(-deg) + (y - origin.y) * Math.cos(-deg) + origin.y
      };
    }
    function getRectPoints3(box) {
      var points = [
        { x: box.x, y: box.y },
        { x: box.x + box.width, y: box.y },
        { x: box.x + box.width, y: box.y + box.height },
        { x: box.x, y: box.y + box.height }
      ];
      var rotation = box.rotation;
      if (rotation) {
        return [
          rotateAtPoint2(points[0], rotation, points[0]),
          rotateAtPoint2(points[1], rotation, points[0]),
          rotateAtPoint2(points[2], rotation, points[0]),
          rotateAtPoint2(points[3], rotation, points[0])
        ];
      }
      return points;
    }
    function getProjection2(points, axis) {
      if (points.length > 4) {
        return { min: 0, max: 0 };
      }
      var scalars = [];
      points.forEach(function(point) {
        scalars.push(dot2([point.x, point.y], axis));
      });
      return { min: Math.min.apply(null, scalars), max: Math.max.apply(null, scalars) };
    }
    function isProjectionOverlap2(projection1, projection2) {
      return projection1.max > projection2.min && projection1.min < projection2.max;
    }
    function isValidNumber2(d) {
      return typeof d === 'number' && !Number.isNaN(d) && d !== Infinity && d !== -Infinity;
    }
    function isValidBox2(box) {
      return ['x', 'y', 'width', 'height'].every(function(attr) {
        return isValidNumber2(box[attr]);
      });
    }
    function isIntersectRect2(box1, box2, margin) {
      if (margin === void 0) {
        margin = 0;
      }
      return !(
        box2.x > box1.x + box1.width + margin ||
        box2.x + box2.width < box1.x - margin ||
        box2.y > box1.y + box1.height + margin ||
        box2.y + box2.height < box1.y - margin
      );
    }
    function intersect3(box1, box2, margin) {
      if (margin === void 0) {
        margin = 0;
      }
      if (!isValidBox2(box1) || !isValidBox2(box2)) return false;
      if (!box1.rotation && !box2.rotation) {
        return isIntersectRect2(box1, box2, margin);
      }
      var rect1Points = getRectPoints3(box1);
      var rect2Points = getRectPoints3(box2);
      var axes = getAxes2(rect1Points).concat(getAxes2(rect2Points));
      for (var i = 0; i < axes.length; i++) {
        var axis = axes[i];
        var projection1 = getProjection2(rect1Points, axis);
        var projection2 = getProjection2(rect2Points, axis);
        if (!isProjectionOverlap2(projection1, projection2)) return false;
      }
      return true;
    }
    return { intersect: intersect3 };
  }
  var intersect2 = generateUtils().intersect;
  function hideOverlap2(items2) {
    var boxes = items2.slice();
    for (var i = 0; i < boxes.length; i++) {
      var box1 = boxes[i];
      if (box1.visible) {
        for (var j = i + 1; j < boxes.length; j++) {
          var box2 = boxes[j];
          if (box1 !== box2 && box2.visible) {
            if (intersect2(box1, box2)) {
              box2.visible = false;
            }
          }
        }
      }
    }
    return boxes;
  }
  var methods = { 'hide-overlap': hideOverlap2 };
  try {
    var eventData = JSON.parse(e.data);
    if (!eventData || !eventData.type || !methods[eventData.type]) return;
    var type = eventData.type,
      items = eventData.items;
    var result = methods[type](items);
    self.postMessage(result);
  } catch (e2) {
    throw e2;
  }
};
var code = '\n   self.onmessage = '.concat(onmessage.toString(), '\n'); // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/hide-overlap.js
var layout = function(items) {
  var boxes = items.slice();
  for (var i = 0; i < boxes.length; i++) {
    var box1 = boxes[i];
    if (box1.visible) {
      for (var j = i + 1; j < boxes.length; j++) {
        var box2 = boxes[j];
        if (box1 !== box2 && box2.visible) {
          if (intersect(box1, box2)) {
            box2.visible = false;
          }
        }
      }
    }
  }
  return boxes;
};
var cache = /* @__PURE__ */ new Map();
var worker = createWorker(code);
function hideOverlap(labelItems, labels, shapes, region) {
  return __awaiter4(this, void 0, void 0, function() {
    var boxes, memoKey, cb, params, res, e_1;
    return __generator4(this, function(_a) {
      switch (_a.label) {
        case 0:
          boxes = labels.map(function(d, idx) {
            return __assign42(
              __assign42({}, getLabelBackgroundInfo(d, labelItems[idx], get30(labelItems[idx], 'background.padding'))),
              { visible: true }
            );
          });
          memoKey = JSON.stringify(boxes);
          cb = function(items) {
            cache.set(memoKey, items);
            each37(items, function(_a2, idx) {
              var visible = _a2.visible;
              var labelShape = labels[idx];
              if (visible) {
                labelShape === null || labelShape === void 0 ? void 0 : labelShape.show();
              } else {
                labelShape === null || labelShape === void 0 ? void 0 : labelShape.hide();
              }
            });
            return items;
          };
          if (!cache.get(memoKey)) return [3, 1];
          cb(cache.get(memoKey));
          return [3, 7];
        case 1:
          if (!worker) return [3, 6];
          _a.label = 2;
        case 2:
          _a.trys.push([2, 4, , 5]);
          params = JSON.stringify({ type: 'hide-overlap', items: boxes });
          return [
            4,
            worker.post(params, function() {
              return cb(layout(boxes));
            })
          ];
        case 3:
          res = _a.sent();
          cb(Array.isArray(res.data) ? res.data : []);
          return [3, 5];
        case 4:
          e_1 = _a.sent();
          console.error(e_1);
          cb(layout(boxes));
          return [3, 5];
        case 5:
          return [3, 7];
        case 6:
          cb(layout(boxes));
          _a.label = 7;
        case 7:
          return [2];
      }
    });
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/color.js
import { __read as __read17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import colorUtil from '/cdn/v99/@antv/color-util@2.0.6/es2022/color-util.development.js';
var preset = { '#5B8FF9': true };
var isContrastColorWhite = function(color) {
  var rgb = colorUtil.toRGB(color).toUpperCase();
  if (preset[rgb]) {
    return preset[rgb];
  }
  var _a = __read17(colorUtil.rgb2arr(rgb), 3),
    r = _a[0],
    g = _a[1],
    b = _a[2];
  var isDark = (r * 299 + g * 587 + b * 114) / 1e3 < 128;
  return isDark;
}; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/adjust-color.js
function adjustColor(items, labels, shapes) {
  if (shapes.length === 0) {
    return;
  }
  var element = shapes[0].get('element');
  var theme = element.geometry.theme;
  var _a = theme.labels || {},
    fillColorLight = _a.fillColorLight,
    fillColorDark = _a.fillColorDark;
  shapes.forEach(function(shape, index) {
    var label = labels[index];
    var textShape = label.find(function(el) {
      return el.get('type') === 'text';
    });
    var shapeBBox = BBox.fromObject(shape.getBBox());
    var textBBox = BBox.fromObject(textShape.getCanvasBBox());
    var overflow = !shapeBBox.contains(textBBox);
    var bgColor = shape.attr('fill');
    var fillWhite = isContrastColorWhite(bgColor);
    if (!overflow) {
      if (fillWhite) {
        if (fillColorLight) {
          textShape.attr('fill', fillColorLight);
        }
      } else {
        if (fillColorDark) {
          textShape.attr('fill', fillColorDark);
        }
      }
    } else {
      textShape.attr(theme.overflowLabels.style);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/interval/adjust-position.js
function shouldInShapeSingle(geometry, label, shape) {
  var coordinate = geometry.coordinate;
  var textShape = findLabelTextShape(label);
  var textBBox = BBox.fromObject(textShape.getCanvasBBox());
  var shapeBBox = BBox.fromObject(shape.getBBox());
  return coordinate.isTransposed ? shapeBBox.height >= textBBox.height : shapeBBox.width >= textBBox.width;
}
function shouldInShape(geometry, labels, shapes) {
  var isStack = !!geometry.getAdjust('stack');
  return (
    isStack ||
    labels.every(function(label, index) {
      var shape = shapes[index];
      return shouldInShapeSingle(geometry, label, shape);
    })
  );
}
function moveInShape(geometry, label, shape) {
  var coordinate = geometry.coordinate;
  var shapeBBox = BBox.fromObject(shape.getBBox());
  var textShape = findLabelTextShape(label);
  if (coordinate.isTransposed) {
    textShape.attr({ x: shapeBBox.minX + shapeBBox.width / 2, textAlign: 'center' });
  } else {
    textShape.attr({ y: shapeBBox.minY + shapeBBox.height / 2, textBaseline: 'middle' });
  }
}
function intervalAdjustPosition(items, labels, shapes) {
  var _a;
  if (shapes.length === 0) {
    return;
  }
  var element = (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a.get('element');
  var geometry = element === null || element === void 0 ? void 0 : element.geometry;
  if (!geometry || geometry.type !== 'interval') {
    return;
  }
  var inShape = shouldInShape(geometry, labels, shapes);
  if (inShape) {
    shapes.forEach(function(shape, index) {
      var label = labels[index];
      moveInShape(geometry, label, shape);
    });
  }
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/interval/hide-overlap.js
import { __read as __read18, __spreadArray as __spreadArray13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each38,
  groupBy as groupBy3,
  uniq as uniq3,
  map as map3,
  size as size2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function filterLabel(labels) {
  var MAX_CNT = 500;
  var filteredLabels = [];
  var pages = Math.max(Math.floor(labels.length / MAX_CNT), 1);
  each38(labels, function(label, idx) {
    if (idx % pages === 0) {
      filteredLabels.push(label);
    } else {
      label.set('visible', false);
    }
  });
  return filteredLabels;
}
function intervalHideOverlap(items, labels, shapes) {
  var _a;
  if (shapes.length === 0) {
    return;
  }
  var element = (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a.get('element');
  var geometry = element === null || element === void 0 ? void 0 : element.geometry;
  if (!geometry || geometry.type !== 'interval') {
    return;
  }
  var filteredLabels = filterLabel(labels);
  var _b = __read18(geometry.getXYFields(), 1),
    xField = _b[0];
  var dones = [];
  var todo = [];
  var groupedLabels = groupBy3(filteredLabels, function(label) {
    return label.get('data')[xField];
  });
  var xValues = uniq3(
    map3(filteredLabels, function(label) {
      return label.get('data')[xField];
    })
  );
  var xValue;
  filteredLabels.forEach(function(label) {
    label.set('visible', true);
  });
  var addCurrentGroup = function(curItems) {
    if (curItems) {
      if (curItems.length) {
        todo.push(curItems.pop());
      }
      todo.push.apply(todo, __spreadArray13([], __read18(curItems), false));
    }
  };
  if (size2(xValues) > 0) {
    xValue = xValues.shift();
    addCurrentGroup(groupedLabels[xValue]);
  }
  if (size2(xValues) > 0) {
    xValue = xValues.pop();
    addCurrentGroup(groupedLabels[xValue]);
  }
  each38(xValues.reverse(), function(val) {
    addCurrentGroup(groupedLabels[val]);
  });
  while (todo.length > 0) {
    var cur = todo.shift();
    if (cur.get('visible')) {
      if (checkShapeOverlap(cur, dones)) {
        cur.set('visible', false);
      } else {
        dones.push(cur);
      }
    }
  }
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/point/adjust-position.js
import { __read as __read19, __spreadArray as __spreadArray14 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { groupBy as groupBy4, keys, map as map4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function sortLabels(geometry, labels) {
  var yField = geometry.getXYFields()[1];
  var result = [];
  var sortedLabels = labels.sort(function(left, right) {
    return left.get('data')[yField] - left.get('data')[yField];
  });
  if (sortedLabels.length > 0) {
    result.push(sortedLabels.shift());
  }
  if (sortedLabels.length > 0) {
    result.push(sortedLabels.pop());
  }
  result.push.apply(result, __spreadArray14([], __read19(sortedLabels), false));
  return result;
}
function hasSome(dones, current, compare) {
  return dones.some(function(done) {
    return compare(done, current);
  });
}
function getOverlapArea2(a, b, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var xOverlap = Math.max(
    0,
    Math.min(a.x + a.width + margin, b.x + b.width + margin) - Math.max(a.x - margin, b.x - margin)
  );
  var yOverlap = Math.max(
    0,
    Math.min(a.y + a.height + margin, b.y + b.height + margin) - Math.max(a.y - margin, b.y - margin)
  );
  return xOverlap * yOverlap;
}
function checkShapeOverlap2(dones, current) {
  return hasSome(dones, current, function(left, right) {
    var leftText = findLabelTextShape(left);
    var rightText = findLabelTextShape(right);
    return getOverlapArea2(leftText.getCanvasBBox(), rightText.getCanvasBBox(), 2) > 0;
  });
}
function pointAdjustPosition(items, labels, shapes, region, cfg) {
  var _a, _b;
  if (shapes.length === 0) {
    return;
  }
  var element = (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a.get('element');
  var geometry = element === null || element === void 0 ? void 0 : element.geometry;
  if (!geometry || geometry.type !== 'point') {
    return;
  }
  var _c = __read19(geometry.getXYFields(), 2),
    xField = _c[0],
    yField = _c[1];
  var groupedLabels = groupBy4(labels, function(label) {
    return label.get('data')[xField];
  });
  var dones = [];
  var offset = (cfg && cfg.offset) || ((_b = items[0]) === null || _b === void 0 ? void 0 : _b.offset) || 12;
  map4(keys(groupedLabels).reverse(), function(xValue) {
    var sortedCollections = sortLabels(geometry, groupedLabels[xValue]);
    while (sortedCollections.length) {
      var current = sortedCollections.shift();
      var textShape = findLabelTextShape(current);
      if (
        hasSome(dones, current, function(left, right) {
          return (
            left.get('data')[xField] === right.get('data')[xField] &&
            left.get('data')[yField] === right.get('data')[yField]
          );
        })
      ) {
        textShape.set('visible', false);
        continue;
      }
      var upFail = checkShapeOverlap2(dones, current);
      var downFail = false;
      if (upFail) {
        textShape.attr('y', textShape.attr('y') + 2 * offset);
        downFail = checkShapeOverlap2(dones, current);
      }
      if (downFail) {
        textShape.set('visible', false);
        continue;
      }
      dones.push(current);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/path/adjust-position.js
import { __read as __read20, __spreadArray as __spreadArray15 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { groupBy as groupBy5, keys as keys2, map as map5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function sortLabels2(geometry, labels) {
  var yField = geometry.getXYFields()[1];
  var result = [];
  var sortedLabels = labels.sort(function(left, right) {
    return left.get('data')[yField] - left.get('data')[yField];
  });
  if (sortedLabels.length > 0) {
    result.push(sortedLabels.shift());
  }
  if (sortedLabels.length > 0) {
    result.push(sortedLabels.pop());
  }
  result.push.apply(result, __spreadArray15([], __read20(sortedLabels), false));
  return result;
}
function hasSome2(dones, current, compare) {
  return dones.some(function(done) {
    return compare(done, current);
  });
}
function getOverlapArea3(a, b, margin) {
  if (margin === void 0) {
    margin = 0;
  }
  var xOverlap = Math.max(
    0,
    Math.min(a.x + a.width + margin, b.x + b.width + margin) - Math.max(a.x - margin, b.x - margin)
  );
  var yOverlap = Math.max(
    0,
    Math.min(a.y + a.height + margin, b.y + b.height + margin) - Math.max(a.y - margin, b.y - margin)
  );
  return xOverlap * yOverlap;
}
function checkShapeOverlap3(dones, current) {
  return hasSome2(dones, current, function(left, right) {
    var leftText = findLabelTextShape(left);
    var rightText = findLabelTextShape(right);
    return getOverlapArea3(leftText.getCanvasBBox(), rightText.getCanvasBBox(), 2) > 0;
  });
}
function pathAdjustPosition(items, labels, shapes, region, cfg) {
  var _a, _b;
  if (shapes.length === 0) {
    return;
  }
  var element = (_a = shapes[0]) === null || _a === void 0 ? void 0 : _a.get('element');
  var geometry = element === null || element === void 0 ? void 0 : element.geometry;
  if (!geometry || ['path', 'line', 'area'].indexOf(geometry.type) < 0) {
    return;
  }
  var _c = __read20(geometry.getXYFields(), 2),
    xField = _c[0],
    yField = _c[1];
  var groupedLabels = groupBy5(labels, function(label) {
    return label.get('data')[xField];
  });
  var dones = [];
  var offset = (cfg && cfg.offset) || ((_b = items[0]) === null || _b === void 0 ? void 0 : _b.offset) || 12;
  map5(keys2(groupedLabels).reverse(), function(xValue) {
    var sortedCollections = sortLabels2(geometry, groupedLabels[xValue]);
    while (sortedCollections.length) {
      var current = sortedCollections.shift();
      var textShape = findLabelTextShape(current);
      if (
        hasSome2(dones, current, function(left, right) {
          return (
            left.get('data')[xField] === right.get('data')[xField] &&
            left.get('data')[yField] === right.get('data')[yField]
          );
        })
      ) {
        textShape.set('visible', false);
        continue;
      }
      var upFail = checkShapeOverlap3(dones, current);
      var downFail = false;
      if (upFail) {
        textShape.attr('y', textShape.attr('y') + 2 * offset);
        downFail = checkShapeOverlap3(dones, current);
      }
      if (downFail) {
        textShape.set('visible', false);
        continue;
      }
      dones.push(current);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/limit-in-plot.js
import { each as each39, pick } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/text.js
import { __read as __read21, __spreadArray as __spreadArray16 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isString as isString12,
  memoize as memoize2,
  values as values2,
  toString
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/context.js
var ctx;
function getCanvasContext() {
  if (!ctx) {
    ctx = document.createElement('canvas').getContext('2d');
  }
  return ctx;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/text.js
var measureTextWidth = memoize2(
  function(text, font) {
    if (font === void 0) {
      font = {};
    }
    var fontSize = font.fontSize,
      fontFamily = font.fontFamily,
      fontWeight = font.fontWeight,
      fontStyle = font.fontStyle,
      fontVariant = font.fontVariant;
    var ctx2 = getCanvasContext();
    ctx2.font = [fontStyle, fontVariant, fontWeight, ''.concat(fontSize, 'px'), fontFamily].join(' ');
    return ctx2.measureText(isString12(text) ? text : '').width;
  },
  function(text, font) {
    if (font === void 0) {
      font = {};
    }
    return __spreadArray16([text], __read21(values2(font)), false).join('');
  }
);
var getEllipsisText = function(text, maxWidth, font) {
  var STEP = 16;
  var DOT_WIDTH = measureTextWidth('...', font);
  var leftText;
  if (!isString12(text)) {
    leftText = toString(text);
  } else {
    leftText = text;
  }
  var leftWidth = maxWidth;
  var r = [];
  var currentText;
  var currentWidth;
  if (measureTextWidth(text, font) <= maxWidth) {
    return text;
  }
  while (true) {
    currentText = leftText.substr(0, STEP);
    currentWidth = measureTextWidth(currentText, font);
    if (currentWidth + DOT_WIDTH > leftWidth) {
      if (currentWidth > leftWidth) {
        break;
      }
    }
    r.push(currentText);
    leftWidth -= currentWidth;
    leftText = leftText.substr(STEP);
    if (!leftText) {
      return r.join('');
    }
  }
  while (true) {
    currentText = leftText.substr(0, 1);
    currentWidth = measureTextWidth(currentText, font);
    if (currentWidth + DOT_WIDTH > leftWidth) {
      break;
    }
    r.push(currentText);
    leftWidth -= currentWidth;
    leftText = leftText.substr(1);
    if (!leftText) {
      return r.join('');
    }
  }
  return ''.concat(r.join(''), '...');
}; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/geometry/label/layout/limit-in-plot.js
function limitInPlot(items, labels, shapes, region, cfg) {
  if (labels.length <= 0) {
    return;
  }
  var direction = (cfg === null || cfg === void 0 ? void 0 : cfg.direction) || ['top', 'right', 'bottom', 'left'];
  var action = (cfg === null || cfg === void 0 ? void 0 : cfg.action) || 'translate';
  var margin = (cfg === null || cfg === void 0 ? void 0 : cfg.margin) || 0;
  var coordinate = labels[0].get('coordinate');
  if (!coordinate) {
    return;
  }
  var _a = getCoordinateBBox(coordinate, margin),
    regionMinX = _a.minX,
    regionMinY = _a.minY,
    regionMaxX = _a.maxX,
    regionMaxY = _a.maxY;
  each39(labels, function(label) {
    var _a2 = label.getCanvasBBox(),
      minX = _a2.minX,
      minY = _a2.minY,
      maxX = _a2.maxX,
      maxY = _a2.maxY,
      x = _a2.x,
      y = _a2.y,
      width = _a2.width,
      height = _a2.height;
    var finalX = x;
    var finalY = y;
    if (direction.indexOf('left') >= 0 && (minX < regionMinX || maxX < regionMinX)) {
      finalX = regionMinX;
    }
    if (direction.indexOf('top') >= 0 && (minY < regionMinY || maxY < regionMinY)) {
      finalY = regionMinY;
    }
    if (direction.indexOf('right') >= 0) {
      if (minX > regionMaxX) {
        finalX = regionMaxX - width;
      } else if (maxX > regionMaxX) {
        finalX = finalX - (maxX - regionMaxX);
      }
    }
    if (direction.indexOf('bottom') >= 0) {
      if (minY > regionMaxY) {
        finalY = regionMaxY - height;
      } else if (maxY > regionMaxY) {
        finalY = finalY - (maxY - regionMaxY);
      }
    }
    if (finalX !== x || finalY !== y) {
      var translateX_1 = finalX - x;
      if (action === 'translate') {
        translate(label, translateX_1, finalY - y);
      } else if (action === 'ellipsis') {
        var textShapes = label.findAll(function(shape) {
          return shape.get('type') === 'text';
        });
        textShapes.forEach(function(textShape) {
          var style = pick(textShape.attr(), ['fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'fontVariant']);
          var textBox = textShape.getCanvasBBox();
          var text = getEllipsisText(textShape.attr('text'), textBox.width - Math.abs(translateX_1), style);
          textShape.attr('text', text);
        });
      } else {
        label.hide();
      }
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/fade.js
import { isNil as isNil15 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function fadeIn(shape, animateCfg, cfg) {
  var endState = {
    fillOpacity: isNil15(shape.attr('fillOpacity')) ? 1 : shape.attr('fillOpacity'),
    strokeOpacity: isNil15(shape.attr('strokeOpacity')) ? 1 : shape.attr('strokeOpacity'),
    opacity: isNil15(shape.attr('opacity')) ? 1 : shape.attr('opacity')
  };
  shape.attr({ fillOpacity: 0, strokeOpacity: 0, opacity: 0 });
  shape.animate(endState, animateCfg);
}
function fadeOut(shape, animateCfg, cfg) {
  var endState = { fillOpacity: 0, strokeOpacity: 0, opacity: 0 };
  var easing = animateCfg.easing,
    duration = animateCfg.duration,
    delay = animateCfg.delay;
  shape.animate(
    endState,
    duration,
    easing,
    function() {
      shape.remove(true);
    },
    delay
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/util.js
import { __read as __read22 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext3 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
function transformShape(shape, vector, direct) {
  var scaledMatrix;
  var _a = __read22(vector, 2),
    x = _a[0],
    y = _a[1];
  shape.applyToMatrix([x, y, 1]);
  if (direct === 'x') {
    shape.setMatrix(
      ext3.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 0.01, 1],
        ['t', x, y]
      ])
    );
    scaledMatrix = ext3.transform(shape.getMatrix(), [
      ['t', -x, -y],
      ['s', 100, 1],
      ['t', x, y]
    ]);
  } else if (direct === 'y') {
    shape.setMatrix(
      ext3.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 1, 0.01],
        ['t', x, y]
      ])
    );
    scaledMatrix = ext3.transform(shape.getMatrix(), [
      ['t', -x, -y],
      ['s', 1, 100],
      ['t', x, y]
    ]);
  } else if (direct === 'xy') {
    shape.setMatrix(
      ext3.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 0.01, 0.01],
        ['t', x, y]
      ])
    );
    scaledMatrix = ext3.transform(shape.getMatrix(), [
      ['t', -x, -y],
      ['s', 100, 100],
      ['t', x, y]
    ]);
  }
  return scaledMatrix;
}
function doScaleAnimate(element, animateCfg, coordinate, yMinPoint, type) {
  var start = coordinate.start,
    end = coordinate.end;
  var width = coordinate.getWidth();
  var height = coordinate.getHeight();
  var x;
  var y;
  if (type === 'y') {
    x = start.x + width / 2;
    y = yMinPoint.y < start.y ? yMinPoint.y : start.y;
  } else if (type === 'x') {
    x = yMinPoint.x > start.x ? yMinPoint.x : start.x;
    y = start.y + height / 2;
  } else if (type === 'xy') {
    if (coordinate.isPolar) {
      x = coordinate.getCenter().x;
      y = coordinate.getCenter().y;
    } else {
      x = (start.x + end.x) / 2;
      y = (start.y + end.y) / 2;
    }
  }
  var endMatrix = transformShape(element, [x, y], type);
  element.animate({ matrix: endMatrix }, animateCfg);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/grow-in.js
function growInX(element, animateCfg, cfg) {
  var coordinate = cfg.coordinate,
    minYPoint = cfg.minYPoint;
  doScaleAnimate(element, animateCfg, coordinate, minYPoint, 'x');
}
function growInY(element, animateCfg, cfg) {
  var coordinate = cfg.coordinate,
    minYPoint = cfg.minYPoint;
  doScaleAnimate(element, animateCfg, coordinate, minYPoint, 'y');
}
function growInXY(element, animateCfg, cfg) {
  var coordinate = cfg.coordinate,
    minYPoint = cfg.minYPoint;
  doScaleAnimate(element, animateCfg, coordinate, minYPoint, 'xy');
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/path-in.js
function pathIn(element, animateCfg, cfg) {
  var length = element.getTotalLength();
  element.attr('lineDash', [length]);
  element.animate(function(ratio) {
    return { lineDashOffset: (1 - ratio) * length };
  }, animateCfg);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/position-update.js
function positionUpdate(shape, animateCfg, cfg) {
  var toAttrs = cfg.toAttrs;
  var x = toAttrs.x;
  var y = toAttrs.y;
  delete toAttrs.x;
  delete toAttrs.y;
  shape.attr(toAttrs);
  shape.animate({ x, y }, animateCfg);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/scale-in.js
import { ext as ext4 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
function scaleInX(shape, animateCfg, cfg) {
  var box = shape.getBBox();
  var mappingData = shape.get('origin').mappingData;
  var points = mappingData.points;
  var x = points[0].y - points[1].y > 0 ? box.maxX : box.minX;
  var y = (box.minY + box.maxY) / 2;
  shape.applyToMatrix([x, y, 1]);
  var matrix = ext4.transform(shape.getMatrix(), [
    ['t', -x, -y],
    ['s', 0.01, 1],
    ['t', x, y]
  ]);
  shape.setMatrix(matrix);
  shape.animate(
    {
      matrix: ext4.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 100, 1],
        ['t', x, y]
      ])
    },
    animateCfg
  );
}
function scaleInY(shape, animateCfg, cfg) {
  var box = shape.getBBox();
  var mappingData = shape.get('origin').mappingData;
  var x = (box.minX + box.maxX) / 2;
  var points = mappingData.points;
  var y = points[0].y - points[1].y <= 0 ? box.maxY : box.minY;
  shape.applyToMatrix([x, y, 1]);
  var matrix = ext4.transform(shape.getMatrix(), [
    ['t', -x, -y],
    ['s', 1, 0.01],
    ['t', x, y]
  ]);
  shape.setMatrix(matrix);
  shape.animate(
    {
      matrix: ext4.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 1, 100],
        ['t', x, y]
      ])
    },
    animateCfg
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/sector-path-update.js
import { __assign as __assign43, __read as __read23 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { getArcParams } from '/cdn/v99/@antv/g-canvas@0.5.12/es2022/g-canvas.development.js';
import {
  isNumberEqual as isNumberEqual3,
  isEqual as isEqual7
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getAngle2(startPoint, arcPath) {
  var _a;
  var _b = getArcParams(startPoint, arcPath),
    startAngle = _b.startAngle,
    endAngle = _b.endAngle;
  if (!isNumberEqual3(startAngle, -Math.PI * 0.5) && startAngle < -Math.PI * 0.5) {
    startAngle += Math.PI * 2;
  }
  if (!isNumberEqual3(endAngle, -Math.PI * 0.5) && endAngle < -Math.PI * 0.5) {
    endAngle += Math.PI * 2;
  }
  if (arcPath[5] === 0) {
    (_a = __read23([endAngle, startAngle], 2)), (startAngle = _a[0]), (endAngle = _a[1]);
  }
  if (isNumberEqual3(startAngle, Math.PI * 1.5)) {
    startAngle = Math.PI * -0.5;
  }
  if (isNumberEqual3(endAngle, Math.PI * -0.5) && !isNumberEqual3(startAngle, endAngle)) {
    endAngle = Math.PI * 1.5;
  }
  return { startAngle, endAngle };
}
function getArcStartPoint(path) {
  var startPoint;
  if (path[0] === 'M' || path[0] === 'L') {
    startPoint = [path[1], path[2]];
  } else if (path[0] === 'a' || path[0] === 'A' || path[0] === 'C') {
    startPoint = [path[path.length - 2], path[path.length - 1]];
  }
  return startPoint;
}
function getArcInfo(path) {
  var _a;
  var startAngle;
  var endAngle;
  var arcPaths = path.filter(function(command) {
    return command[0] === 'A' || command[0] === 'a';
  });
  if (arcPaths.length === 0) {
    return { startAngle: 0, endAngle: 0, radius: 0, innerRadius: 0 };
  }
  var firstArcPathCommand = arcPaths[0];
  var lastArcPathCommand = arcPaths.length > 1 ? arcPaths[1] : arcPaths[0];
  var firstIndex = path.indexOf(firstArcPathCommand);
  var lastIndex = path.indexOf(lastArcPathCommand);
  var firstStartPoint = getArcStartPoint(path[firstIndex - 1]);
  var lastStartPoint = getArcStartPoint(path[lastIndex - 1]);
  var _b = getAngle2(firstStartPoint, firstArcPathCommand),
    firstStartAngle = _b.startAngle,
    firstEndAngle = _b.endAngle;
  var _c = getAngle2(lastStartPoint, lastArcPathCommand),
    lastStartAngle = _c.startAngle,
    lastEndAngle = _c.endAngle;
  if (isNumberEqual3(firstStartAngle, lastStartAngle) && isNumberEqual3(firstEndAngle, lastEndAngle)) {
    startAngle = firstStartAngle;
    endAngle = firstEndAngle;
  } else {
    startAngle = Math.min(firstStartAngle, lastStartAngle);
    endAngle = Math.max(firstEndAngle, lastEndAngle);
  }
  var radius = firstArcPathCommand[1];
  var innerRadius = arcPaths[arcPaths.length - 1][1];
  if (radius < innerRadius) {
    (_a = __read23([innerRadius, radius], 2)), (radius = _a[0]), (innerRadius = _a[1]);
  } else if (radius === innerRadius) {
    innerRadius = 0;
  }
  return { startAngle, endAngle, radius, innerRadius };
}
function sectorPathUpdate(shape, animateCfg, cfg) {
  var toAttrs = cfg.toAttrs,
    coordinate = cfg.coordinate;
  var path = toAttrs.path || [];
  var pathCommands = path.map(function(command) {
    return command[0];
  });
  if (path.length < 1) return;
  var _a = getArcInfo(path),
    curStartAngle = _a.startAngle,
    curEndAngle = _a.endAngle,
    radius = _a.radius,
    innerRadius = _a.innerRadius;
  var _b = getArcInfo(shape.attr('path')),
    preStartAngle = _b.startAngle,
    preEndAngle = _b.endAngle;
  var center = coordinate.getCenter();
  var diffStartAngle = curStartAngle - preStartAngle;
  var diffEndAngle = curEndAngle - preEndAngle;
  if (diffStartAngle === 0 && diffEndAngle === 0) {
    shape.attr('path', path);
    return;
  }
  shape.animate(
    function(ratio) {
      var onFrameStartAngle = preStartAngle + ratio * diffStartAngle;
      var onFrameEndAngle = preEndAngle + ratio * diffEndAngle;
      return __assign43(__assign43({}, toAttrs), {
        path: isEqual7(pathCommands, ['M', 'A', 'A', 'Z'])
          ? getArcPath(center.x, center.y, radius, onFrameStartAngle, onFrameEndAngle)
          : getSectorPath(center.x, center.y, radius, onFrameStartAngle, onFrameEndAngle, innerRadius)
      });
    },
    __assign43(__assign43({}, animateCfg), {
      callback: function() {
        shape.attr('path', path);
      }
    })
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/wave-in.js
import { __assign as __assign44 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function waveIn(element, animateCfg, cfg) {
  var _a = getCoordinateClipCfg(cfg.coordinate, 20),
    type = _a.type,
    startState = _a.startState,
    endState = _a.endState;
  var clipShape = element.setClip({ type, attrs: startState });
  if (cfg.toAttrs) {
    element.attr(cfg.toAttrs);
  }
  clipShape.animate(
    endState,
    __assign44(__assign44({}, animateCfg), {
      callback: function() {
        if (element && !element.get('destroyed')) {
          element.set('clipShape', null);
        }
        clipShape.remove(true);
      }
    })
  );
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/animate/animation/zoom.js
import { __assign as __assign45 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext5 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { each as each40 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function doShapeZoom(shape, animateCfg, type) {
  if (shape.isGroup()) {
    each40(shape.getChildren(), function(child) {
      doShapeZoom(child, animateCfg, type);
    });
  } else {
    var bbox = shape.getBBox();
    var x = (bbox.minX + bbox.maxX) / 2;
    var y = (bbox.minY + bbox.maxY) / 2;
    shape.applyToMatrix([x, y, 1]);
    if (type === 'zoomIn') {
      var matrix = ext5.transform(shape.getMatrix(), [
        ['t', -x, -y],
        ['s', 0.01, 0.01],
        ['t', x, y]
      ]);
      shape.setMatrix(matrix);
      shape.animate(
        {
          matrix: ext5.transform(shape.getMatrix(), [
            ['t', -x, -y],
            ['s', 100, 100],
            ['t', x, y]
          ])
        },
        animateCfg
      );
    } else {
      shape.animate(
        {
          matrix: ext5.transform(shape.getMatrix(), [
            ['t', -x, -y],
            ['s', 0.01, 0.01],
            ['t', x, y]
          ])
        },
        __assign45(__assign45({}, animateCfg), {
          callback: function() {
            shape.remove(true);
          }
        })
      );
    }
  }
}
function zoomIn(shape, animateCfg, cfg) {
  doShapeZoom(shape, animateCfg, 'zoomIn');
}
function zoomOut(shape, animateCfg, cfg) {
  doShapeZoom(shape, animateCfg, 'zoomOut');
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/circle.js
import { __extends as __extends22, __read as __read24 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix19,
  each as each41,
  filter as filter4,
  get as get31
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/facet.js
function getFactTitleConfig(direction) {
  if ([DIRECTION.TOP, DIRECTION.BOTTOM].includes(direction)) {
    return {
      offsetX: 0,
      offsetY: direction === DIRECTION.TOP ? -8 : 8,
      style: { textAlign: 'center', textBaseline: direction === DIRECTION.TOP ? 'bottom' : 'top' }
    };
  }
  if ([DIRECTION.LEFT, DIRECTION.RIGHT].includes(direction)) {
    return {
      offsetX: direction === DIRECTION.LEFT ? -8 : 8,
      offsetY: 0,
      style: { textAlign: direction === DIRECTION.LEFT ? 'right' : 'left', textBaseline: 'middle', rotate: Math.PI / 2 }
    };
  }
  return {};
}
function getAnglePoint(center, r, angle) {
  return { x: center.x + r * Math.cos(angle), y: center.y + r * Math.sin(angle) };
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/circle.js
var Circle = (function(_super) {
  __extends22(Circle2, _super);
  function Circle2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Circle2.prototype.getDefaultCfg = function() {
    return deepMix19({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'circle',
      showTitle: true,
      title: _super.prototype.getDefaultTitleCfg.call(this)
    });
  };
  Circle2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  Circle2.prototype.getRegion = function(count, index) {
    var r = 1 / 2;
    var center = { x: 0.5, y: 0.5 };
    var avgAngle = (Math.PI * 2) / count;
    var angle = (-1 * Math.PI) / 2 + avgAngle * index;
    var facetR = r / (1 + 1 / Math.sin(avgAngle / 2));
    var middle = getAnglePoint(center, r - facetR, angle);
    var startAngle = (Math.PI * 5) / 4;
    var endAngle = (Math.PI * 1) / 4;
    return { start: getAnglePoint(middle, facetR, startAngle), end: getAnglePoint(middle, facetR, endAngle) };
  };
  Circle2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  Circle2.prototype.beforeEachView = function(view, facet) {};
  Circle2.prototype.generateFacets = function(data) {
    var _this = this;
    var _a = this.cfg,
      fields = _a.fields,
      type = _a.type;
    var _b = __read24(fields, 1),
      field = _b[0];
    if (!field) {
      throw new Error('No `fields` specified!');
    }
    var values3 = this.getFieldValues(data, field);
    var count = values3.length;
    var rst = [];
    values3.forEach(function(value, index) {
      var conditions = [{ field, value, values: values3 }];
      var facetData = filter4(data, _this.getFacetDataFilter(conditions));
      var facet = {
        type,
        data: facetData,
        region: _this.getRegion(count, index),
        columnValue: value,
        columnField: field,
        columnIndex: index,
        columnValuesLength: count,
        rowValue: null,
        rowField: null,
        rowIndex: 0,
        rowValuesLength: 1
      };
      rst.push(facet);
    });
    return rst;
  };
  Circle2.prototype.getXAxisOption = function(x, axes, option, facet) {
    return option;
  };
  Circle2.prototype.getYAxisOption = function(y, axes, option, facet) {
    return option;
  };
  Circle2.prototype.renderTitle = function() {
    var _this = this;
    each41(this.facets, function(facet) {
      var columnValue = facet.columnValue,
        view = facet.view;
      var formatter = get31(_this.cfg.title, 'formatter');
      var config = deepMix19(
        { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
        getFactTitleConfig(DIRECTION.TOP),
        _this.cfg.title
      );
      view.annotation().text(config);
    });
  };
  return Circle2;
})(Facet);
var circle_default = Circle; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/list.js
import {
  __assign as __assign46,
  __extends as __extends23,
  __read as __read25
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix20,
  each as each42,
  filter as filter5,
  get as get32
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var List = (function(_super) {
  __extends23(List2, _super);
  function List2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  List2.prototype.getDefaultCfg = function() {
    return deepMix20({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'list',
      cols: null,
      showTitle: true,
      title: _super.prototype.getDefaultTitleCfg.call(this)
    });
  };
  List2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  List2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  List2.prototype.beforeEachView = function(view, facet) {};
  List2.prototype.generateFacets = function(data) {
    var _this = this;
    var fields = this.cfg.fields;
    var cols = this.cfg.cols;
    var _a = __read25(fields, 1),
      columnField = _a[0];
    if (!columnField) {
      throw new Error('No `fields` specified!');
    }
    var colValues = this.getFieldValues(data, columnField);
    var count = colValues.length;
    cols = cols || count;
    var rows = this.getPageCount(count, cols);
    var rst = [];
    colValues.forEach(function(val, index) {
      var _a2 = _this.getRowCol(index, cols),
        row = _a2.row,
        col = _a2.col;
      var conditions = [{ field: columnField, value: val, values: colValues }];
      var facetData = filter5(data, _this.getFacetDataFilter(conditions));
      var facet = {
        type: _this.cfg.type,
        data: facetData,
        region: _this.getRegion(rows, cols, col, row),
        columnValue: val,
        rowValue: val,
        columnField,
        rowField: null,
        columnIndex: col,
        rowIndex: row,
        columnValuesLength: cols,
        rowValuesLength: rows,
        total: count
      };
      rst.push(facet);
    });
    return rst;
  };
  List2.prototype.getXAxisOption = function(x, axes, option, facet) {
    if (
      facet.rowIndex !== facet.rowValuesLength - 1 &&
      facet.columnValuesLength * facet.rowIndex + facet.columnIndex + 1 + facet.columnValuesLength <= facet.total
    ) {
      return __assign46(__assign46({}, option), { label: null, title: null });
    }
    return option;
  };
  List2.prototype.getYAxisOption = function(y, axes, option, facet) {
    if (facet.columnIndex !== 0) {
      return __assign46(__assign46({}, option), { title: null, label: null });
    }
    return option;
  };
  List2.prototype.renderTitle = function() {
    var _this = this;
    each42(this.facets, function(facet) {
      var columnValue = facet.columnValue,
        view = facet.view;
      var formatter = get32(_this.cfg.title, 'formatter');
      var config = deepMix20(
        { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
        getFactTitleConfig(DIRECTION.TOP),
        _this.cfg.title
      );
      view.annotation().text(config);
    });
  };
  List2.prototype.getPageCount = function(total, pageSize) {
    return Math.floor((total + pageSize - 1) / pageSize);
  };
  List2.prototype.getRowCol = function(index, pageSize) {
    var row = Math.floor(index / pageSize);
    var col = index % pageSize;
    return { row, col };
  };
  return List2;
})(Facet);
var list_default = List; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/matrix.js
import { __assign as __assign47, __extends as __extends24 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix21,
  each as each43,
  get as get33
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Matrix = (function(_super) {
  __extends24(Matrix2, _super);
  function Matrix2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Matrix2.prototype.getDefaultCfg = function() {
    return deepMix21({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'matrix',
      showTitle: false,
      columnTitle: __assign47({}, _super.prototype.getDefaultTitleCfg.call(this)),
      rowTitle: __assign47({}, _super.prototype.getDefaultTitleCfg.call(this))
    });
  };
  Matrix2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  Matrix2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  Matrix2.prototype.beforeEachView = function(view, facet) {};
  Matrix2.prototype.generateFacets = function(data) {
    var _a = this.cfg,
      fields = _a.fields,
      type = _a.type;
    var rowValuesLength = fields.length;
    var columnValuesLength = rowValuesLength;
    var rst = [];
    for (var i = 0; i < columnValuesLength; i++) {
      var columnField = fields[i];
      for (var j = 0; j < rowValuesLength; j++) {
        var rowField = fields[j];
        var facet = {
          type,
          data,
          region: this.getRegion(rowValuesLength, columnValuesLength, i, j),
          columnValue: columnField,
          rowValue: rowField,
          columnField,
          rowField,
          columnIndex: i,
          rowIndex: j,
          columnValuesLength,
          rowValuesLength
        };
        rst.push(facet);
      }
    }
    return rst;
  };
  Matrix2.prototype.getXAxisOption = function(x, axes, option, facet) {
    if (facet.rowIndex !== facet.rowValuesLength - 1) {
      return __assign47(__assign47({}, option), { label: null, title: null });
    }
    return option;
  };
  Matrix2.prototype.getYAxisOption = function(y, axes, option, facet) {
    if (facet.columnIndex !== 0) {
      return __assign47(__assign47({}, option), { title: null, label: null });
    }
    return option;
  };
  Matrix2.prototype.renderTitle = function() {
    var _this = this;
    each43(this.facets, function(facet, facetIndex) {
      var columnIndex = facet.columnIndex,
        rowIndex = facet.rowIndex,
        columnValuesLength = facet.columnValuesLength,
        rowValuesLength = facet.rowValuesLength,
        columnValue = facet.columnValue,
        rowValue = facet.rowValue,
        view = facet.view;
      if (rowIndex === 0) {
        var formatter = get33(_this.cfg.columnTitle, 'formatter');
        var config = deepMix21(
          { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
          getFactTitleConfig(DIRECTION.TOP),
          _this.cfg.columnTitle
        );
        view.annotation().text(config);
      }
      if (columnIndex === columnValuesLength - 1) {
        var formatter = get33(_this.cfg.rowTitle, 'formatter');
        var config = deepMix21(
          { position: ['100%', '50%'], content: formatter ? formatter(rowValue) : rowValue },
          getFactTitleConfig(DIRECTION.RIGHT),
          _this.cfg.rowTitle
        );
        view.annotation().text(config);
      }
    });
  };
  return Matrix2;
})(Facet);
var matrix_default = Matrix; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/mirror.js
import {
  __assign as __assign48,
  __extends as __extends25,
  __read as __read26
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix22,
  each as each44,
  filter as filter6,
  get as get34
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Mirror = (function(_super) {
  __extends25(Mirror2, _super);
  function Mirror2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Mirror2.prototype.getDefaultCfg = function() {
    return deepMix22({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'mirror',
      showTitle: true,
      title: _super.prototype.getDefaultTitleCfg.call(this),
      transpose: false
    });
  };
  Mirror2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  Mirror2.prototype.beforeEachView = function(view, facet) {
    if (this.cfg.transpose) {
      if (facet.columnIndex % 2 === 0) {
        view
          .coordinate()
          .transpose()
          .reflect('x');
      } else {
        view.coordinate().transpose();
      }
    } else {
      if (facet.rowIndex % 2 !== 0) {
        view.coordinate().reflect('y');
      }
    }
  };
  Mirror2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  Mirror2.prototype.generateFacets = function(data) {
    var _this = this;
    var _a = __read26(this.cfg.fields, 1),
      f = _a[0];
    var rst = [];
    var columnValuesLength = 1;
    var rowValuesLength = 1;
    var columnValues = [''];
    var rowValues = [''];
    var columnField;
    var rowField;
    if (this.cfg.transpose) {
      columnField = f;
      columnValues = this.getFieldValues(data, columnField).slice(0, 2);
      columnValuesLength = columnValues.length;
    } else {
      rowField = f;
      rowValues = this.getFieldValues(data, rowField).slice(0, 2);
      rowValuesLength = rowValues.length;
    }
    columnValues.forEach(function(xVal, xIndex) {
      rowValues.forEach(function(yVal, yIndex) {
        var conditions = [
          { field: columnField, value: xVal, values: columnValues },
          { field: rowField, value: yVal, values: rowValues }
        ];
        var facetData = filter6(data, _this.getFacetDataFilter(conditions));
        var facet = {
          type: _this.cfg.type,
          data: facetData,
          region: _this.getRegion(rowValuesLength, columnValuesLength, xIndex, yIndex),
          columnValue: xVal,
          rowValue: yVal,
          columnField,
          rowField,
          columnIndex: xIndex,
          rowIndex: yIndex,
          columnValuesLength,
          rowValuesLength
        };
        rst.push(facet);
      });
    });
    return rst;
  };
  Mirror2.prototype.getXAxisOption = function(x, axes, option, facet) {
    if (facet.columnIndex === 1 || facet.rowIndex === 1) {
      return __assign48(__assign48({}, option), { label: null, title: null });
    }
    return option;
  };
  Mirror2.prototype.getYAxisOption = function(y, axes, option, facet) {
    return option;
  };
  Mirror2.prototype.renderTitle = function() {
    var _this = this;
    each44(this.facets, function(facet, facetIndex) {
      var columnValue = facet.columnValue,
        rowValue = facet.rowValue,
        view = facet.view;
      var formatter = get34(_this.cfg.title, 'formatter');
      if (_this.cfg.transpose) {
        var config = deepMix22(
          { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
          getFactTitleConfig(DIRECTION.TOP),
          _this.cfg.title
        );
        view.annotation().text(config);
      } else {
        var config = deepMix22(
          { position: ['100%', '50%'], content: formatter ? formatter(rowValue) : rowValue },
          getFactTitleConfig(DIRECTION.RIGHT),
          _this.cfg.title
        );
        view.annotation().text(config);
      }
    });
  };
  return Mirror2;
})(Facet);
var mirror_default = Mirror; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/rect.js
import {
  __assign as __assign49,
  __extends as __extends26,
  __read as __read27
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix23,
  each as each45,
  filter as filter7,
  get as get35
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Rect = (function(_super) {
  __extends26(Rect2, _super);
  function Rect2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Rect2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  Rect2.prototype.beforeEachView = function(view, facet) {};
  Rect2.prototype.getDefaultCfg = function() {
    return deepMix23({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'rect',
      columnTitle: __assign49({}, _super.prototype.getDefaultTitleCfg.call(this)),
      rowTitle: __assign49({}, _super.prototype.getDefaultTitleCfg.call(this))
    });
  };
  Rect2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  Rect2.prototype.generateFacets = function(data) {
    var _this = this;
    var _a = __read27(this.cfg.fields, 2),
      columnField = _a[0],
      rowField = _a[1];
    var rst = [];
    var columnValuesLength = 1;
    var rowValuesLength = 1;
    var columnValues = [''];
    var rowValues = [''];
    if (columnField) {
      columnValues = this.getFieldValues(data, columnField);
      columnValuesLength = columnValues.length;
    }
    if (rowField) {
      rowValues = this.getFieldValues(data, rowField);
      rowValuesLength = rowValues.length;
    }
    columnValues.forEach(function(xVal, xIndex) {
      rowValues.forEach(function(yVal, yIndex) {
        var conditions = [
          { field: columnField, value: xVal, values: columnValues },
          { field: rowField, value: yVal, values: rowValues }
        ];
        var facetData = filter7(data, _this.getFacetDataFilter(conditions));
        var facet = {
          type: _this.cfg.type,
          data: facetData,
          region: _this.getRegion(rowValuesLength, columnValuesLength, xIndex, yIndex),
          columnValue: xVal,
          rowValue: yVal,
          columnField,
          rowField,
          columnIndex: xIndex,
          rowIndex: yIndex,
          columnValuesLength,
          rowValuesLength
        };
        rst.push(facet);
      });
    });
    return rst;
  };
  Rect2.prototype.renderTitle = function() {
    var _this = this;
    each45(this.facets, function(facet, facetIndex) {
      var columnIndex = facet.columnIndex,
        rowIndex = facet.rowIndex,
        columnValuesLength = facet.columnValuesLength,
        columnValue = facet.columnValue,
        rowValue = facet.rowValue,
        view = facet.view;
      if (rowIndex === 0) {
        var formatter = get35(_this.cfg.columnTitle, 'formatter');
        var config = deepMix23(
          { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
          getFactTitleConfig(DIRECTION.TOP),
          _this.cfg.columnTitle
        );
        view.annotation().text(config);
      }
      if (columnIndex === columnValuesLength - 1) {
        var formatter = get35(_this.cfg.rowTitle, 'formatter');
        var config = deepMix23(
          { position: ['100%', '50%'], content: formatter ? formatter(rowValue) : rowValue },
          getFactTitleConfig(DIRECTION.RIGHT),
          _this.cfg.rowTitle
        );
        view.annotation().text(config);
      }
    });
  };
  Rect2.prototype.getXAxisOption = function(x, axes, option, facet) {
    if (facet.rowIndex !== facet.rowValuesLength - 1) {
      return __assign49(__assign49({}, option), { title: null, label: null });
    } else if (facet.columnIndex !== Math.floor((facet.columnValuesLength - 1) / 2)) {
      return __assign49(__assign49({}, option), { title: null });
    }
    return option;
  };
  Rect2.prototype.getYAxisOption = function(y, axes, option, facet) {
    if (facet.columnIndex !== 0) {
      return __assign49(__assign49({}, option), { title: null, label: null });
    } else if (facet.rowIndex !== Math.floor((facet.rowValuesLength - 1) / 2)) {
      return __assign49(__assign49({}, option), { title: null });
    }
    return option;
  };
  return Rect2;
})(Facet);
var rect_default = Rect; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/facet/tree.js
import {
  __assign as __assign50,
  __extends as __extends27,
  __values as __values14
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  assign as assign2,
  deepMix as deepMix24,
  each as each46,
  get as get36
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Tree = (function(_super) {
  __extends27(Tree2, _super);
  function Tree2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.afterChartRender = function() {
      if (_this.facets && _this.cfg.line) {
        _this.container.clear();
        _this.drawLines(_this.facets);
      }
    };
    return _this;
  }
  Tree2.prototype.afterEachView = function(view, facet) {
    this.processAxis(view, facet);
  };
  Tree2.prototype.beforeEachView = function(view, facet) {};
  Tree2.prototype.init = function() {
    _super.prototype.init.call(this);
    this.view.on(VIEW_LIFE_CIRCLE.AFTER_RENDER, this.afterChartRender);
  };
  Tree2.prototype.getDefaultCfg = function() {
    return deepMix24({}, _super.prototype.getDefaultCfg.call(this), {
      type: 'tree',
      line: { style: { lineWidth: 1, stroke: '#ddd' }, smooth: false },
      showTitle: true,
      title: _super.prototype.getDefaultTitleCfg.call(this)
    });
  };
  Tree2.prototype.generateFacets = function(data) {
    var fields = this.cfg.fields;
    if (!fields.length) {
      throw new Error('Please specify for the fields for rootFacet!');
    }
    var rst = [];
    var rootFacet = {
      type: this.cfg.type,
      data,
      region: null,
      rowValuesLength: this.getRows(),
      columnValuesLength: 1,
      rowIndex: 0,
      columnIndex: 0,
      rowField: '',
      columnField: '',
      rowValue: '',
      columnValue: ''
    };
    rst.push(rootFacet);
    rootFacet.children = this.getChildFacets(data, 1, rst);
    this.setRegion(rst);
    return rst;
  };
  Tree2.prototype.setRegion = function(facets) {
    var _this = this;
    this.forceColIndex(facets);
    facets.forEach(function(facet) {
      facet.region = _this.getRegion(
        facet.rowValuesLength,
        facet.columnValuesLength,
        facet.columnIndex,
        facet.rowIndex
      );
    });
  };
  Tree2.prototype.getRegion = function(rows, cols, xIndex, yIndex) {
    var xWidth = 1 / cols;
    var yWidth = 1 / rows;
    var start = { x: xWidth * xIndex, y: yWidth * yIndex };
    var end = { x: start.x + xWidth, y: start.y + (yWidth * 2) / 3 };
    return { start, end };
  };
  Tree2.prototype.forceColIndex = function(facets) {
    var e_1, _a;
    var _this = this;
    var leafs = [];
    var index = 0;
    facets.forEach(function(facet2) {
      if (_this.isLeaf(facet2)) {
        leafs.push(facet2);
        facet2.columnIndex = index;
        index++;
      }
    });
    leafs.forEach(function(facet2) {
      facet2.columnValuesLength = leafs.length;
    });
    var maxLevel = this.cfg.fields.length;
    for (var i = maxLevel - 1; i >= 0; i--) {
      var levelFacets = this.getFacetsByLevel(facets, i);
      try {
        for (
          var levelFacets_1 = ((e_1 = void 0), __values14(levelFacets)), levelFacets_1_1 = levelFacets_1.next();
          !levelFacets_1_1.done;
          levelFacets_1_1 = levelFacets_1.next()
        ) {
          var facet = levelFacets_1_1.value;
          if (!this.isLeaf(facet)) {
            facet.originColIndex = facet.columnIndex;
            facet.columnIndex = this.getRegionIndex(facet.children);
            facet.columnValuesLength = leafs.length;
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (levelFacets_1_1 && !levelFacets_1_1.done && (_a = levelFacets_1.return)) _a.call(levelFacets_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
  };
  Tree2.prototype.getFacetsByLevel = function(facets, level) {
    var rst = [];
    facets.forEach(function(facet) {
      if (facet.rowIndex === level) {
        rst.push(facet);
      }
    });
    return rst;
  };
  Tree2.prototype.getRegionIndex = function(children) {
    var first = children[0];
    var last8 = children[children.length - 1];
    return (last8.columnIndex - first.columnIndex) / 2 + first.columnIndex;
  };
  Tree2.prototype.isLeaf = function(facet) {
    return !facet.children || !facet.children.length;
  };
  Tree2.prototype.getRows = function() {
    return this.cfg.fields.length + 1;
  };
  Tree2.prototype.getChildFacets = function(data, level, arr) {
    var _this = this;
    var fields = this.cfg.fields;
    var length = fields.length;
    if (length < level) {
      return;
    }
    var rst = [];
    var field = fields[level - 1];
    var values3 = this.getFieldValues(data, field);
    values3.forEach(function(value, index) {
      var conditions = [{ field, value, values: values3 }];
      var subData = data.filter(_this.getFacetDataFilter(conditions));
      if (subData.length) {
        var facet = {
          type: _this.cfg.type,
          data: subData,
          region: null,
          columnValue: value,
          rowValue: '',
          columnField: field,
          rowField: '',
          columnIndex: index,
          rowValuesLength: _this.getRows(),
          columnValuesLength: 1,
          rowIndex: level,
          children: _this.getChildFacets(subData, level + 1, arr)
        };
        rst.push(facet);
        arr.push(facet);
      }
    });
    return rst;
  };
  Tree2.prototype.render = function() {
    _super.prototype.render.call(this);
    if (this.cfg.showTitle) {
      this.renderTitle();
    }
  };
  Tree2.prototype.renderTitle = function() {
    var _this = this;
    each46(this.facets, function(facet) {
      var columnValue = facet.columnValue,
        view = facet.view;
      var formatter = get36(_this.cfg.title, 'formatter');
      var config = deepMix24(
        { position: ['50%', '0%'], content: formatter ? formatter(columnValue) : columnValue },
        getFactTitleConfig(DIRECTION.TOP),
        _this.cfg.title
      );
      view.annotation().text(config);
    });
  };
  Tree2.prototype.drawLines = function(facets) {
    var _this = this;
    facets.forEach(function(facet) {
      if (!_this.isLeaf(facet)) {
        var children = facet.children;
        _this.addFacetLines(facet, children);
      }
    });
  };
  Tree2.prototype.addFacetLines = function(facet, children) {
    var _this = this;
    var view = facet.view;
    var region = view.coordinateBBox;
    var start = { x: region.x + region.width / 2, y: region.y + region.height };
    children.forEach(function(subFacet) {
      var subRegion = subFacet.view.coordinateBBox;
      var end = { x: subRegion.bl.x + (subRegion.tr.x - subRegion.bl.x) / 2, y: subRegion.tr.y };
      var middle1 = { x: start.x, y: start.y + (end.y - start.y) / 2 };
      var middle2 = { x: end.x, y: middle1.y };
      _this.drawLine([start, middle1, middle2, end]);
    });
  };
  Tree2.prototype.getPath = function(points) {
    var path = [];
    var smooth = this.cfg.line.smooth;
    if (smooth) {
      path.push(['M', points[0].x, points[0].y]);
      path.push(['C', points[1].x, points[1].y, points[2].x, points[2].y, points[3].x, points[3].y]);
    } else {
      points.forEach(function(point, index) {
        if (index === 0) {
          path.push(['M', point.x, point.y]);
        } else {
          path.push(['L', point.x, point.y]);
        }
      });
    }
    return path;
  };
  Tree2.prototype.drawLine = function(points) {
    var path = this.getPath(points);
    var line = this.cfg.line.style;
    this.container.addShape('path', { attrs: assign2({ path }, line) });
  };
  Tree2.prototype.getXAxisOption = function(x, axes, option, facet) {
    if (facet.rowIndex !== facet.rowValuesLength - 1) {
      return __assign50(__assign50({}, option), { title: null, label: null });
    }
    return option;
  };
  Tree2.prototype.getYAxisOption = function(y, axes, option, facet) {
    if (facet.originColIndex !== 0 && facet.columnIndex !== 0) {
      return __assign50(__assign50({}, option), { title: null, label: null });
    }
    return option;
  };
  return Tree2;
})(Facet);
var tree_default = Tree; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/annotation.js
import {
  __assign as __assign51,
  __extends as __extends28,
  __read as __read29,
  __rest as __rest4,
  __values as __values15
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  contains as contains2,
  deepMix as deepMix25,
  each as each47,
  get as get37,
  isArray as isArray26,
  isFunction as isFunction11,
  isNil as isNil16,
  isString as isString13,
  keys as keys3,
  upperFirst as upperFirst2,
  find as find5,
  includes
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/stat.js
import { __read as __read28, __spreadArray as __spreadArray17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { reduce as reduce2, isNumber as isNumber12 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getMedian(array) {
  var arr = __spreadArray17([], __read28(array), false);
  arr.sort(function(a, b) {
    return a - b;
  });
  var len = arr.length;
  if (len === 0) {
    return 0;
  }
  if (len % 2 === 1) {
    return arr[(len - 1) / 2];
  }
  return (arr[len / 2] + arr[len / 2 - 1]) / 2;
}
function getMean(array) {
  var sum = reduce2(
    array,
    function(r, num) {
      return (r += isNaN(num) || !isNumber12(num) ? 0 : num);
    },
    0
  );
  return array.length === 0 ? 0 : sum / array.length;
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/annotation.js
function getNormalizedValue(val, scale) {
  if (!scale) {
    return null;
  }
  var scaled;
  switch (val) {
    case 'start':
      return 0;
    case 'center':
      return 0.5;
    case 'end':
      return 1;
    case 'median': {
      scaled = scale.isCategory
        ? getMedian(
            scale.values.map(function(_, idx) {
              return idx;
            })
          )
        : getMedian(scale.values);
      break;
    }
    case 'mean': {
      scaled = scale.isCategory ? (scale.values.length - 1) / 2 : getMean(scale.values);
      break;
    }
    case 'min':
      scaled = scale.isCategory ? 0 : scale[val];
      break;
    case 'max':
      scaled = scale.isCategory ? scale.values.length - 1 : scale[val];
      break;
    default:
      scaled = val;
      break;
  }
  return scale.scale(scaled);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/annotation.js
var ANNOTATIONS_AFTER_RENDER = ['regionFilter', 'shape'];
var Annotation2 = (function(_super) {
  __extends28(Annotation3, _super);
  function Annotation3(view) {
    var _this = _super.call(this, view) || this;
    _this.cache = /* @__PURE__ */ new Map();
    _this.foregroundContainer = _this.view.getLayer(LAYER.FORE).addGroup();
    _this.backgroundContainer = _this.view.getLayer(LAYER.BG).addGroup();
    _this.option = [];
    return _this;
  }
  Object.defineProperty(Annotation3.prototype, 'name', {
    get: function() {
      return 'annotation';
    },
    enumerable: false,
    configurable: true
  });
  Annotation3.prototype.init = function() {};
  Annotation3.prototype.layout = function() {
    this.update();
  };
  Annotation3.prototype.render = function() {};
  Annotation3.prototype.update = function() {
    var _this = this;
    this.onAfterRender(function() {
      var updated = /* @__PURE__ */ new Map();
      each47(_this.option, function(option) {
        if (includes(ANNOTATIONS_AFTER_RENDER, option.type)) {
          var co = _this.updateOrCreate(option);
          if (co) {
            updated.set(_this.getCacheKey(option), co);
          }
        }
      });
      _this.cache = _this.syncCache(updated);
    });
    var updateCache = /* @__PURE__ */ new Map();
    each47(this.option, function(option) {
      if (!includes(ANNOTATIONS_AFTER_RENDER, option.type)) {
        var co = _this.updateOrCreate(option);
        if (co) {
          updateCache.set(_this.getCacheKey(option), co);
        }
      }
    });
    this.cache = this.syncCache(updateCache);
  };
  Annotation3.prototype.clear = function(includeOption) {
    if (includeOption === void 0) {
      includeOption = false;
    }
    _super.prototype.clear.call(this);
    this.clearComponents();
    this.foregroundContainer.clear();
    this.backgroundContainer.clear();
    if (includeOption) {
      this.option = [];
    }
  };
  Annotation3.prototype.destroy = function() {
    this.clear(true);
    this.foregroundContainer.remove(true);
    this.backgroundContainer.remove(true);
  };
  Annotation3.prototype.getComponents = function() {
    var co = [];
    this.cache.forEach(function(value) {
      co.push(value);
    });
    return co;
  };
  Annotation3.prototype.clearComponents = function() {
    this.getComponents().forEach(function(co) {
      co.component.destroy();
    });
    this.cache.clear();
  };
  Annotation3.prototype.onAfterRender = function(doWhat) {
    var done = false;
    if (this.view.getOptions().animate) {
      this.view.geometries.forEach(function(g) {
        if (g.animateOption) {
          g.once(GEOMETRY_LIFE_CIRCLE.AFTER_DRAW_ANIMATE, function() {
            doWhat();
          });
          done = true;
        }
      });
    }
    if (!done) {
      this.view.getRootView().once(VIEW_LIFE_CIRCLE.AFTER_RENDER, function() {
        doWhat();
      });
    }
  };
  Annotation3.prototype.createAnnotation = function(option) {
    var type = option.type;
    var Ctor = Annotation[upperFirst2(type)];
    if (Ctor) {
      var theme = this.getAnnotationTheme(type);
      var cfg = this.getAnnotationCfg(type, option, theme);
      if (!cfg) {
        return null;
      }
      var annotation = new Ctor(cfg);
      return {
        component: annotation,
        layer: this.isTop(cfg) ? LAYER.FORE : LAYER.BG,
        direction: DIRECTION.NONE,
        type: COMPONENT_TYPE.ANNOTATION,
        extra: option
      };
    }
  };
  Annotation3.prototype.annotation = function(option) {
    this.option.push(option);
  };
  Annotation3.prototype.arc = function(option) {
    this.annotation(__assign51({ type: 'arc' }, option));
    return this;
  };
  Annotation3.prototype.image = function(option) {
    this.annotation(__assign51({ type: 'image' }, option));
    return this;
  };
  Annotation3.prototype.line = function(option) {
    this.annotation(__assign51({ type: 'line' }, option));
    return this;
  };
  Annotation3.prototype.region = function(option) {
    this.annotation(__assign51({ type: 'region' }, option));
    return this;
  };
  Annotation3.prototype.text = function(option) {
    this.annotation(__assign51({ type: 'text' }, option));
    return this;
  };
  Annotation3.prototype.dataMarker = function(option) {
    this.annotation(__assign51({ type: 'dataMarker' }, option));
    return this;
  };
  Annotation3.prototype.dataRegion = function(option) {
    this.annotation(__assign51({ type: 'dataRegion' }, option));
  };
  Annotation3.prototype.regionFilter = function(option) {
    this.annotation(__assign51({ type: 'regionFilter' }, option));
  };
  Annotation3.prototype.shape = function(option) {
    this.annotation(__assign51({ type: 'shape' }, option));
  };
  Annotation3.prototype.html = function(option) {
    this.annotation(__assign51({ type: 'html' }, option));
  };
  Annotation3.prototype.parsePosition = function(p) {
    var e_1, _a;
    var xScale = this.view.getXScale();
    var yScales = this.view.getScalesByDim('y');
    var position = isFunction11(p) ? p.call(null, xScale, yScales) : p;
    var x = 0;
    var y = 0;
    if (isArray26(position)) {
      var _b = __read29(position, 2),
        xPos = _b[0],
        yPos = _b[1];
      if (isString13(xPos) && xPos.indexOf('%') !== -1 && !isNaN(xPos.slice(0, -1))) {
        return this.parsePercentPosition(position);
      }
      x = getNormalizedValue(xPos, xScale);
      y = getNormalizedValue(yPos, Object.values(yScales)[0]);
    } else if (!isNil16(position)) {
      try {
        for (var _c = __values15(keys3(position)), _d = _c.next(); !_d.done; _d = _c.next()) {
          var key = _d.value;
          var value = position[key];
          if (key === xScale.field) {
            x = getNormalizedValue(value, xScale);
          }
          if (yScales[key]) {
            y = getNormalizedValue(value, yScales[key]);
          }
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    }
    if (isNaN(x) || isNaN(y)) {
      return null;
    }
    return this.view.getCoordinate().convert({ x, y });
  };
  Annotation3.prototype.getRegionPoints = function(start, end) {
    var _this = this;
    var xScale = this.view.getXScale();
    var yScales = this.view.getScalesByDim('y');
    var yScale = Object.values(yScales)[0];
    var xField = xScale.field;
    var viewData = this.view.getData();
    var startXValue = isArray26(start) ? start[0] : start[xField];
    var endXValue = isArray26(end) ? end[0] : end[xField];
    var arr = [];
    var startIndex;
    each47(viewData, function(item, idx) {
      if (item[xField] === startXValue) {
        startIndex = idx;
      }
      if (idx >= startIndex) {
        var point = _this.parsePosition([item[xField], item[yScale.field]]);
        if (point) {
          arr.push(point);
        }
      }
      if (item[xField] === endXValue) {
        return false;
      }
    });
    return arr;
  };
  Annotation3.prototype.parsePercentPosition = function(position) {
    var xPercent = parseFloat(position[0]) / 100;
    var yPercent = parseFloat(position[1]) / 100;
    var coordinate = this.view.getCoordinate();
    var start = coordinate.start,
      end = coordinate.end;
    var topLeft = { x: Math.min(start.x, end.x), y: Math.min(start.y, end.y) };
    var x = coordinate.getWidth() * xPercent + topLeft.x;
    var y = coordinate.getHeight() * yPercent + topLeft.y;
    return { x, y };
  };
  Annotation3.prototype.getCoordinateBBox = function() {
    var coordinate = this.view.getCoordinate();
    var start = coordinate.start,
      end = coordinate.end;
    var width = coordinate.getWidth();
    var height = coordinate.getHeight();
    var topLeft = { x: Math.min(start.x, end.x), y: Math.min(start.y, end.y) };
    return {
      x: topLeft.x,
      y: topLeft.y,
      minX: topLeft.x,
      minY: topLeft.y,
      maxX: topLeft.x + width,
      maxY: topLeft.y + height,
      width,
      height
    };
  };
  Annotation3.prototype.getAnnotationCfg = function(type, option, theme) {
    var _this = this;
    var coordinate = this.view.getCoordinate();
    var canvas = this.view.getCanvas();
    var o = {};
    if (isNil16(option)) {
      return null;
    }
    var start = option.start,
      end = option.end,
      position = option.position;
    var sp = this.parsePosition(start);
    var ep = this.parsePosition(end);
    var textPoint = this.parsePosition(position);
    if (['arc', 'image', 'line', 'region', 'regionFilter'].includes(type) && (!sp || !ep)) {
      return null;
    } else if (['text', 'dataMarker', 'html'].includes(type) && !textPoint) {
      return null;
    }
    if (type === 'arc') {
      var _a = option,
        start_1 = _a.start,
        end_1 = _a.end,
        rest = __rest4(_a, ['start', 'end']);
      var startAngle = getAngleByPoint(coordinate, sp);
      var endAngle = getAngleByPoint(coordinate, ep);
      if (startAngle > endAngle) {
        endAngle = Math.PI * 2 + endAngle;
      }
      o = __assign51(__assign51({}, rest), {
        center: coordinate.getCenter(),
        radius: getDistanceToCenter(coordinate, sp),
        startAngle,
        endAngle
      });
    } else if (type === 'image') {
      var _b = option,
        start_2 = _b.start,
        end_2 = _b.end,
        rest = __rest4(_b, ['start', 'end']);
      o = __assign51(__assign51({}, rest), { start: sp, end: ep, src: option.src });
    } else if (type === 'line') {
      var _c = option,
        start_3 = _c.start,
        end_3 = _c.end,
        rest = __rest4(_c, ['start', 'end']);
      o = __assign51(__assign51({}, rest), { start: sp, end: ep, text: get37(option, 'text', null) });
    } else if (type === 'region') {
      var _d = option,
        start_4 = _d.start,
        end_4 = _d.end,
        rest = __rest4(_d, ['start', 'end']);
      o = __assign51(__assign51({}, rest), { start: sp, end: ep });
    } else if (type === 'text') {
      var filteredData = this.view.getData();
      var _e = option,
        position_1 = _e.position,
        content = _e.content,
        rest = __rest4(_e, ['position', 'content']);
      var textContent = content;
      if (isFunction11(content)) {
        textContent = content(filteredData);
      }
      o = __assign51(__assign51(__assign51({}, textPoint), rest), { content: textContent });
    } else if (type === 'dataMarker') {
      var _f = option,
        position_2 = _f.position,
        point = _f.point,
        line = _f.line,
        text = _f.text,
        autoAdjust = _f.autoAdjust,
        direction = _f.direction,
        rest = __rest4(_f, ['position', 'point', 'line', 'text', 'autoAdjust', 'direction']);
      o = __assign51(__assign51(__assign51({}, rest), textPoint), {
        coordinateBBox: this.getCoordinateBBox(),
        point,
        line,
        text,
        autoAdjust,
        direction
      });
    } else if (type === 'dataRegion') {
      var _g = option,
        start_5 = _g.start,
        end_5 = _g.end,
        region = _g.region,
        text = _g.text,
        lineLength = _g.lineLength,
        rest = __rest4(_g, ['start', 'end', 'region', 'text', 'lineLength']);
      o = __assign51(__assign51({}, rest), { points: this.getRegionPoints(start_5, end_5), region, text, lineLength });
    } else if (type === 'regionFilter') {
      var _h = option,
        start_6 = _h.start,
        end_6 = _h.end,
        apply_1 = _h.apply,
        color = _h.color,
        rest = __rest4(_h, ['start', 'end', 'apply', 'color']);
      var geometries = this.view.geometries;
      var shapes_1 = [];
      var addShapes_1 = function(item) {
        if (!item) {
          return;
        }
        if (item.isGroup()) {
          item.getChildren().forEach(function(child) {
            return addShapes_1(child);
          });
        } else {
          shapes_1.push(item);
        }
      };
      each47(geometries, function(geom) {
        if (apply_1) {
          if (contains2(apply_1, geom.type)) {
            each47(geom.elements, function(elem) {
              addShapes_1(elem.shape);
            });
          }
        } else {
          each47(geom.elements, function(elem) {
            addShapes_1(elem.shape);
          });
        }
      });
      o = __assign51(__assign51({}, rest), { color, shapes: shapes_1, start: sp, end: ep });
    } else if (type === 'shape') {
      var _j = option,
        render_1 = _j.render,
        restOptions = __rest4(_j, ['render']);
      var wrappedRender = function(container) {
        if (isFunction11(option.render)) {
          return render_1(container, _this.view, { parsePosition: _this.parsePosition.bind(_this) });
        }
      };
      o = __assign51(__assign51({}, restOptions), { render: wrappedRender });
    } else if (type === 'html') {
      var _k = option,
        html_1 = _k.html,
        position_3 = _k.position,
        restOptions = __rest4(_k, ['html', 'position']);
      var wrappedHtml = function(container) {
        if (isFunction11(html_1)) {
          return html_1(container, _this.view);
        }
        return html_1;
      };
      o = __assign51(__assign51(__assign51({}, restOptions), textPoint), {
        parent: canvas.get('el').parentNode,
        html: wrappedHtml
      });
    }
    var cfg = deepMix25(
      {},
      theme,
      __assign51(__assign51({}, o), {
        top: option.top,
        style: option.style,
        offsetX: option.offsetX,
        offsetY: option.offsetY
      })
    );
    if (type !== 'html') {
      cfg.container = this.getComponentContainer(cfg);
    }
    cfg.animate = this.view.getOptions().animate && cfg.animate && get37(option, 'animate', cfg.animate);
    cfg.animateOption = deepMix25({}, DEFAULT_ANIMATE_CFG, cfg.animateOption, option.animateOption);
    return cfg;
  };
  Annotation3.prototype.isTop = function(option) {
    return get37(option, 'top', true);
  };
  Annotation3.prototype.getComponentContainer = function(option) {
    return this.isTop(option) ? this.foregroundContainer : this.backgroundContainer;
  };
  Annotation3.prototype.getAnnotationTheme = function(type) {
    return get37(this.view.getTheme(), ['components', 'annotation', type], {});
  };
  Annotation3.prototype.updateOrCreate = function(option) {
    var co = this.cache.get(this.getCacheKey(option));
    if (co) {
      var type = option.type;
      var theme = this.getAnnotationTheme(type);
      var cfg = this.getAnnotationCfg(type, option, theme);
      if (cfg) {
        omit(cfg, ['container']);
      }
      co.component.update(__assign51(__assign51({}, cfg || {}), { visible: !!cfg }));
      if (includes(ANNOTATIONS_AFTER_RENDER, option.type)) {
        co.component.render();
      }
    } else {
      co = this.createAnnotation(option);
      if (co) {
        co.component.init();
        if (includes(ANNOTATIONS_AFTER_RENDER, option.type)) {
          co.component.render();
        }
      }
    }
    return co;
  };
  Annotation3.prototype.syncCache = function(updated) {
    var _this = this;
    var newCache = new Map(this.cache);
    updated.forEach(function(co, key) {
      newCache.set(key, co);
    });
    newCache.forEach(function(co, key) {
      if (
        !find5(_this.option, function(option) {
          return key === _this.getCacheKey(option);
        })
      ) {
        co.component.destroy();
        newCache.delete(key);
      }
    });
    return newCache;
  };
  Annotation3.prototype.getCacheKey = function(option) {
    return option;
  };
  return Annotation3;
})(Controller);
var annotation_default = Annotation2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/axis.js
import { __assign as __assign52, __extends as __extends29 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix27,
  each as each48,
  get as get39,
  isUndefined as isUndefined3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/grid.js
import { deepMix as deepMix26, get as get38, map as map6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getGridThemeCfg(theme, direction) {
  var axisTheme = deepMix26(
    {},
    get38(theme, ['components', 'axis', 'common']),
    get38(theme, ['components', 'axis', direction])
  );
  return get38(axisTheme, ['grid'], {});
}
function getLineGridItems(coordinate, scale, dim, alignTick) {
  var items = [];
  var ticks = scale.getTicks();
  if (coordinate.isPolar) {
    ticks.push({ value: 1, text: '', tickValue: '' });
  }
  ticks.reduce(function(preTick, currentTick, currentIndex) {
    var currentValue = currentTick.value;
    if (alignTick) {
      items.push({
        points: [
          coordinate.convert(dim === 'y' ? { x: 0, y: currentValue } : { x: currentValue, y: 0 }),
          coordinate.convert(dim === 'y' ? { x: 1, y: currentValue } : { x: currentValue, y: 1 })
        ]
      });
    } else {
      if (currentIndex) {
        var preValue = preTick.value;
        var middleValue = (preValue + currentValue) / 2;
        items.push({
          points: [
            coordinate.convert(dim === 'y' ? { x: 0, y: middleValue } : { x: middleValue, y: 0 }),
            coordinate.convert(dim === 'y' ? { x: 1, y: middleValue } : { x: middleValue, y: 1 })
          ]
        });
      }
    }
    return currentTick;
  }, ticks[0]);
  return items;
}
function getCircleGridItems(coordinate, xScale, yScale, alignTick, dim) {
  var count = xScale.values.length;
  var items = [];
  var ticks = yScale.getTicks();
  ticks.reduce(function(preTick, currentTick) {
    var preValue = preTick ? preTick.value : currentTick.value;
    var currentValue = currentTick.value;
    var middleValue = (preValue + currentValue) / 2;
    if (dim === 'x') {
      items.push({
        points: [
          coordinate.convert({ x: alignTick ? currentValue : middleValue, y: 0 }),
          coordinate.convert({ x: alignTick ? currentValue : middleValue, y: 1 })
        ]
      });
    } else {
      items.push({
        points: map6(Array(count + 1), function(__, idx) {
          return coordinate.convert({ x: idx / count, y: alignTick ? currentValue : middleValue });
        })
      });
    }
    return currentTick;
  }, ticks[0]);
  return items;
}
function showGrid(axisTheme, axisOption) {
  var userGrid = get38(axisOption, 'grid');
  if (userGrid === null) {
    return false;
  }
  var themeGrid = get38(axisTheme, 'grid');
  return !(userGrid === void 0 && themeGrid === null);
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/axis.js
var OMIT_CFG = ['container'];
var AXIS_DEFAULT_ANIMATE_CFG = __assign52(__assign52({}, DEFAULT_ANIMATE_CFG), { appear: null });
var Axis2 = (function(_super) {
  __extends29(Axis3, _super);
  function Axis3(view) {
    var _this = _super.call(this, view) || this;
    _this.cache = /* @__PURE__ */ new Map();
    _this.gridContainer = _this.view.getLayer(LAYER.BG).addGroup();
    _this.gridForeContainer = _this.view.getLayer(LAYER.FORE).addGroup();
    _this.axisContainer = _this.view.getLayer(LAYER.BG).addGroup();
    _this.axisForeContainer = _this.view.getLayer(LAYER.FORE).addGroup();
    return _this;
  }
  Object.defineProperty(Axis3.prototype, 'name', {
    get: function() {
      return 'axis';
    },
    enumerable: false,
    configurable: true
  });
  Axis3.prototype.init = function() {};
  Axis3.prototype.render = function() {
    this.update();
  };
  Axis3.prototype.layout = function() {
    var _this = this;
    var coordinate = this.view.getCoordinate();
    each48(this.getComponents(), function(co) {
      var component = co.component,
        direction = co.direction,
        type = co.type,
        extra = co.extra;
      var dim = extra.dim,
        scale = extra.scale,
        alignTick = extra.alignTick;
      var updated;
      if (type === COMPONENT_TYPE.AXIS) {
        if (coordinate.isPolar) {
          if (dim === 'x') {
            updated = coordinate.isTransposed
              ? getAxisRegion(coordinate, direction)
              : getCircleAxisCenterRadius(coordinate);
          } else if (dim === 'y') {
            updated = coordinate.isTransposed
              ? getCircleAxisCenterRadius(coordinate)
              : getAxisRegion(coordinate, direction);
          }
        } else {
          updated = getAxisRegion(coordinate, direction);
        }
      } else if (type === COMPONENT_TYPE.GRID) {
        if (coordinate.isPolar) {
          var items = void 0;
          if (coordinate.isTransposed) {
            items =
              dim === 'x'
                ? getCircleGridItems(coordinate, _this.view.getYScales()[0], scale, alignTick, dim)
                : getLineGridItems(coordinate, scale, dim, alignTick);
          } else {
            items =
              dim === 'x'
                ? getLineGridItems(coordinate, scale, dim, alignTick)
                : getCircleGridItems(coordinate, _this.view.getXScale(), scale, alignTick, dim);
          }
          updated = { items, center: _this.view.getCoordinate().getCenter() };
        } else {
          updated = { items: getLineGridItems(coordinate, scale, dim, alignTick) };
        }
      }
      component.update(updated);
    });
  };
  Axis3.prototype.update = function() {
    this.option = this.view.getOptions().axes;
    var updatedCache = /* @__PURE__ */ new Map();
    this.updateXAxes(updatedCache);
    this.updateYAxes(updatedCache);
    var newCache = /* @__PURE__ */ new Map();
    this.cache.forEach(function(co, key) {
      if (updatedCache.has(key)) {
        newCache.set(key, co);
      } else {
        co.component.destroy();
      }
    });
    this.cache = newCache;
  };
  Axis3.prototype.clear = function() {
    _super.prototype.clear.call(this);
    this.cache.clear();
    this.gridContainer.clear();
    this.gridForeContainer.clear();
    this.axisContainer.clear();
    this.axisForeContainer.clear();
  };
  Axis3.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.gridContainer.remove(true);
    this.gridForeContainer.remove(true);
    this.axisContainer.remove(true);
    this.axisForeContainer.remove(true);
  };
  Axis3.prototype.getComponents = function() {
    var co = [];
    this.cache.forEach(function(value) {
      co.push(value);
    });
    return co;
  };
  Axis3.prototype.updateXAxes = function(updatedCache) {
    var scale = this.view.getXScale();
    if (!scale || scale.isIdentity) {
      return;
    }
    var xAxisOption = getAxisOption(this.option, scale.field);
    if (xAxisOption === false) {
      return;
    }
    var direction = getAxisDirection(xAxisOption, DIRECTION.BOTTOM);
    var layer = LAYER.BG;
    var dim = 'x';
    var coordinate = this.view.getCoordinate();
    var axisId = this.getId('axis', scale.field);
    var gridId = this.getId('grid', scale.field);
    if (coordinate.isRect) {
      var axis = this.cache.get(axisId);
      if (axis) {
        var cfg = this.getLineAxisCfg(scale, xAxisOption, direction);
        omit(cfg, OMIT_CFG);
        axis.component.update(cfg);
        updatedCache.set(axisId, axis);
      } else {
        axis = this.createLineAxis(scale, xAxisOption, layer, direction, dim);
        this.cache.set(axisId, axis);
        updatedCache.set(axisId, axis);
      }
      var grid = this.cache.get(gridId);
      if (grid) {
        var cfg = this.getLineGridCfg(scale, xAxisOption, direction, dim);
        omit(cfg, OMIT_CFG);
        grid.component.update(cfg);
        updatedCache.set(gridId, grid);
      } else {
        grid = this.createLineGrid(scale, xAxisOption, layer, direction, dim);
        if (grid) {
          this.cache.set(gridId, grid);
          updatedCache.set(gridId, grid);
        }
      }
    } else if (coordinate.isPolar) {
      var axis = this.cache.get(axisId);
      if (axis) {
        var cfg = coordinate.isTransposed
          ? this.getLineAxisCfg(scale, xAxisOption, DIRECTION.RADIUS)
          : this.getCircleAxisCfg(scale, xAxisOption, direction);
        omit(cfg, OMIT_CFG);
        axis.component.update(cfg);
        updatedCache.set(axisId, axis);
      } else {
        if (coordinate.isTransposed) {
          if (isUndefined3(xAxisOption)) {
            return;
          } else {
            axis = this.createLineAxis(scale, xAxisOption, layer, DIRECTION.RADIUS, dim);
          }
        } else {
          axis = this.createCircleAxis(scale, xAxisOption, layer, direction, dim);
        }
        this.cache.set(axisId, axis);
        updatedCache.set(axisId, axis);
      }
      var grid = this.cache.get(gridId);
      if (grid) {
        var cfg = coordinate.isTransposed
          ? this.getCircleGridCfg(scale, xAxisOption, DIRECTION.RADIUS, dim)
          : this.getLineGridCfg(scale, xAxisOption, DIRECTION.CIRCLE, dim);
        omit(cfg, OMIT_CFG);
        grid.component.update(cfg);
        updatedCache.set(gridId, grid);
      } else {
        if (coordinate.isTransposed) {
          if (isUndefined3(xAxisOption)) {
            return;
          } else {
            grid = this.createCircleGrid(scale, xAxisOption, layer, DIRECTION.RADIUS, dim);
          }
        } else {
          grid = this.createLineGrid(scale, xAxisOption, layer, DIRECTION.CIRCLE, dim);
        }
        if (grid) {
          this.cache.set(gridId, grid);
          updatedCache.set(gridId, grid);
        }
      }
    } else {
    }
  };
  Axis3.prototype.updateYAxes = function(updatedCache) {
    var _this = this;
    var yScales = this.view.getYScales();
    each48(yScales, function(scale, idx) {
      if (!scale || scale.isIdentity) {
        return;
      }
      var field = scale.field;
      var yAxisOption = getAxisOption(_this.option, field);
      if (yAxisOption !== false) {
        var layer = LAYER.BG;
        var dim = 'y';
        var axisId = _this.getId('axis', field);
        var gridId = _this.getId('grid', field);
        var coordinate = _this.view.getCoordinate();
        if (coordinate.isRect) {
          var direction = getAxisDirection(yAxisOption, idx === 0 ? DIRECTION.LEFT : DIRECTION.RIGHT);
          var axis = _this.cache.get(axisId);
          if (axis) {
            var cfg = _this.getLineAxisCfg(scale, yAxisOption, direction);
            omit(cfg, OMIT_CFG);
            axis.component.update(cfg);
            updatedCache.set(axisId, axis);
          } else {
            axis = _this.createLineAxis(scale, yAxisOption, layer, direction, dim);
            _this.cache.set(axisId, axis);
            updatedCache.set(axisId, axis);
          }
          var grid = _this.cache.get(gridId);
          if (grid) {
            var cfg = _this.getLineGridCfg(scale, yAxisOption, direction, dim);
            omit(cfg, OMIT_CFG);
            grid.component.update(cfg);
            updatedCache.set(gridId, grid);
          } else {
            grid = _this.createLineGrid(scale, yAxisOption, layer, direction, dim);
            if (grid) {
              _this.cache.set(gridId, grid);
              updatedCache.set(gridId, grid);
            }
          }
        } else if (coordinate.isPolar) {
          var axis = _this.cache.get(axisId);
          if (axis) {
            var cfg = coordinate.isTransposed
              ? _this.getCircleAxisCfg(scale, yAxisOption, DIRECTION.CIRCLE)
              : _this.getLineAxisCfg(scale, yAxisOption, DIRECTION.RADIUS);
            omit(cfg, OMIT_CFG);
            axis.component.update(cfg);
            updatedCache.set(axisId, axis);
          } else {
            if (coordinate.isTransposed) {
              if (isUndefined3(yAxisOption)) {
                return;
              } else {
                axis = _this.createCircleAxis(scale, yAxisOption, layer, DIRECTION.CIRCLE, dim);
              }
            } else {
              axis = _this.createLineAxis(scale, yAxisOption, layer, DIRECTION.RADIUS, dim);
            }
            _this.cache.set(axisId, axis);
            updatedCache.set(axisId, axis);
          }
          var grid = _this.cache.get(gridId);
          if (grid) {
            var cfg = coordinate.isTransposed
              ? _this.getLineGridCfg(scale, yAxisOption, DIRECTION.CIRCLE, dim)
              : _this.getCircleGridCfg(scale, yAxisOption, DIRECTION.RADIUS, dim);
            omit(cfg, OMIT_CFG);
            grid.component.update(cfg);
            updatedCache.set(gridId, grid);
          } else {
            if (coordinate.isTransposed) {
              if (isUndefined3(yAxisOption)) {
                return;
              } else {
                grid = _this.createLineGrid(scale, yAxisOption, layer, DIRECTION.CIRCLE, dim);
              }
            } else {
              grid = _this.createCircleGrid(scale, yAxisOption, layer, DIRECTION.RADIUS, dim);
            }
            if (grid) {
              _this.cache.set(gridId, grid);
              updatedCache.set(gridId, grid);
            }
          }
        } else {
        }
      }
    });
  };
  Axis3.prototype.createLineAxis = function(scale, option, layer, direction, dim) {
    var axis = {
      component: new LineAxis(this.getLineAxisCfg(scale, option, direction)),
      layer,
      direction: direction === DIRECTION.RADIUS ? DIRECTION.NONE : direction,
      type: COMPONENT_TYPE.AXIS,
      extra: { dim, scale }
    };
    axis.component.set('field', scale.field);
    axis.component.init();
    return axis;
  };
  Axis3.prototype.createLineGrid = function(scale, option, layer, direction, dim) {
    var cfg = this.getLineGridCfg(scale, option, direction, dim);
    if (cfg) {
      var grid = {
        component: new LineGrid(cfg),
        layer,
        direction: DIRECTION.NONE,
        type: COMPONENT_TYPE.GRID,
        extra: { dim, scale, alignTick: get39(cfg, 'alignTick', true) }
      };
      grid.component.init();
      return grid;
    }
  };
  Axis3.prototype.createCircleAxis = function(scale, option, layer, direction, dim) {
    var axis = {
      component: new CircleAxis(this.getCircleAxisCfg(scale, option, direction)),
      layer,
      direction,
      type: COMPONENT_TYPE.AXIS,
      extra: { dim, scale }
    };
    axis.component.set('field', scale.field);
    axis.component.init();
    return axis;
  };
  Axis3.prototype.createCircleGrid = function(scale, option, layer, direction, dim) {
    var cfg = this.getCircleGridCfg(scale, option, direction, dim);
    if (cfg) {
      var grid = {
        component: new CircleGrid(cfg),
        layer,
        direction: DIRECTION.NONE,
        type: COMPONENT_TYPE.GRID,
        extra: { dim, scale, alignTick: get39(cfg, 'alignTick', true) }
      };
      grid.component.init();
      return grid;
    }
  };
  Axis3.prototype.getLineAxisCfg = function(scale, axisOption, direction) {
    var container = get39(axisOption, ['top']) ? this.axisForeContainer : this.axisContainer;
    var coordinate = this.view.getCoordinate();
    var region = getAxisRegion(coordinate, direction);
    var titleText = getAxisTitleText(scale, axisOption);
    var axisThemeCfg = getAxisThemeCfg(this.view.getTheme(), direction);
    var optionWithTitle = get39(axisOption, ['title'])
      ? deepMix27(
          { title: { style: { text: titleText } } },
          { title: getAxisTitleOptions(this.view.getTheme(), direction, axisOption.title) },
          axisOption
        )
      : axisOption;
    var cfg = deepMix27(
      __assign52(__assign52({ container }, region), {
        ticks: scale.getTicks().map(function(tick) {
          return { id: ''.concat(tick.tickValue), name: tick.text, value: tick.value };
        }),
        verticalFactor: coordinate.isPolar
          ? getAxisFactorByRegion(region, coordinate.getCenter()) * -1
          : getAxisFactorByRegion(region, coordinate.getCenter()),
        theme: axisThemeCfg
      }),
      axisThemeCfg,
      optionWithTitle
    );
    var _a = this.getAnimateCfg(cfg),
      animate = _a.animate,
      animateOption = _a.animateOption;
    cfg.animateOption = animateOption;
    cfg.animate = animate;
    var isAxisVertical = isVertical(region);
    var verticalLimitLength = get39(cfg, 'verticalLimitLength', isAxisVertical ? 1 / 3 : 1 / 2);
    if (verticalLimitLength <= 1) {
      var canvasWidth = this.view.getCanvas().get('width');
      var canvasHeight = this.view.getCanvas().get('height');
      cfg.verticalLimitLength = verticalLimitLength * (isAxisVertical ? canvasWidth : canvasHeight);
    }
    return cfg;
  };
  Axis3.prototype.getLineGridCfg = function(scale, axisOption, direction, dim) {
    if (!showGrid(getAxisThemeCfg(this.view.getTheme(), direction), axisOption)) {
      return void 0;
    }
    var gridThemeCfg = getGridThemeCfg(this.view.getTheme(), direction);
    var gridCfg = deepMix27(
      { container: get39(axisOption, ['top']) ? this.gridForeContainer : this.gridContainer },
      gridThemeCfg,
      get39(axisOption, 'grid'),
      this.getAnimateCfg(axisOption)
    );
    gridCfg.items = getLineGridItems(this.view.getCoordinate(), scale, dim, get39(gridCfg, 'alignTick', true));
    return gridCfg;
  };
  Axis3.prototype.getCircleAxisCfg = function(scale, axisOption, direction) {
    var container = get39(axisOption, ['top']) ? this.axisForeContainer : this.axisContainer;
    var coordinate = this.view.getCoordinate();
    var ticks = scale.getTicks().map(function(tick) {
      return { id: ''.concat(tick.tickValue), name: tick.text, value: tick.value };
    });
    if (!scale.isCategory && Math.abs(coordinate.endAngle - coordinate.startAngle) === Math.PI * 2) {
      ticks.pop();
    }
    var titleText = getAxisTitleText(scale, axisOption);
    var axisThemeCfg = getAxisThemeCfg(this.view.getTheme(), DIRECTION.CIRCLE);
    var optionWithTitle = get39(axisOption, ['title'])
      ? deepMix27(
          { title: { style: { text: titleText } } },
          { title: getAxisTitleOptions(this.view.getTheme(), direction, axisOption.title) },
          axisOption
        )
      : axisOption;
    var cfg = deepMix27(
      __assign52(__assign52({ container }, getCircleAxisCenterRadius(this.view.getCoordinate())), {
        ticks,
        verticalFactor: 1,
        theme: axisThemeCfg
      }),
      axisThemeCfg,
      optionWithTitle
    );
    var _a = this.getAnimateCfg(cfg),
      animate = _a.animate,
      animateOption = _a.animateOption;
    cfg.animate = animate;
    cfg.animateOption = animateOption;
    return cfg;
  };
  Axis3.prototype.getCircleGridCfg = function(scale, axisOption, direction, dim) {
    if (!showGrid(getAxisThemeCfg(this.view.getTheme(), direction), axisOption)) {
      return void 0;
    }
    var gridThemeCfg = getGridThemeCfg(this.view.getTheme(), DIRECTION.RADIUS);
    var gridCfg = deepMix27(
      {
        container: get39(axisOption, ['top']) ? this.gridForeContainer : this.gridContainer,
        center: this.view.getCoordinate().getCenter()
      },
      gridThemeCfg,
      get39(axisOption, 'grid'),
      this.getAnimateCfg(axisOption)
    );
    var alignTick = get39(gridCfg, 'alignTick', true);
    var verticalScale = dim === 'x' ? this.view.getYScales()[0] : this.view.getXScale();
    gridCfg.items = getCircleGridItems(this.view.getCoordinate(), verticalScale, scale, alignTick, dim);
    return gridCfg;
  };
  Axis3.prototype.getId = function(name, key) {
    var coordinate = this.view.getCoordinate();
    return ''
      .concat(name, '-')
      .concat(key, '-')
      .concat(coordinate.type);
  };
  Axis3.prototype.getAnimateCfg = function(cfg) {
    return {
      animate: this.view.getOptions().animate && get39(cfg, 'animate'),
      animateOption:
        cfg && cfg.animateOption ? deepMix27({}, AXIS_DEFAULT_ANIMATE_CFG, cfg.animateOption) : AXIS_DEFAULT_ANIMATE_CFG
    };
  };
  return Axis3;
})(Controller);
var axis_default = Axis2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/legend.js
import { __extends as __extends30, __read as __read30 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix28,
  each as each49,
  find as find6,
  get as get40,
  head,
  isBoolean as isBoolean4,
  last as last3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/util/direction.js
function directionToPosition(parentBBox, bbox, direction) {
  if (direction === DIRECTION.TOP) {
    return [parentBBox.minX + parentBBox.width / 2 - bbox.width / 2, parentBBox.minY];
  }
  if (direction === DIRECTION.BOTTOM) {
    return [parentBBox.minX + parentBBox.width / 2 - bbox.width / 2, parentBBox.maxY - bbox.height];
  }
  if (direction === DIRECTION.LEFT) {
    return [parentBBox.minX, parentBBox.minY + parentBBox.height / 2 - bbox.height / 2];
  }
  if (direction === DIRECTION.RIGHT) {
    return [parentBBox.maxX - bbox.width, parentBBox.minY + parentBBox.height / 2 - bbox.height / 2];
  }
  if (direction === DIRECTION.TOP_LEFT || direction === DIRECTION.LEFT_TOP) {
    return [parentBBox.tl.x, parentBBox.tl.y];
  }
  if (direction === DIRECTION.TOP_RIGHT || direction === DIRECTION.RIGHT_TOP) {
    return [parentBBox.tr.x - bbox.width, parentBBox.tr.y];
  }
  if (direction === DIRECTION.BOTTOM_LEFT || direction === DIRECTION.LEFT_BOTTOM) {
    return [parentBBox.bl.x, parentBBox.bl.y - bbox.height];
  }
  if (direction === DIRECTION.BOTTOM_RIGHT || direction === DIRECTION.RIGHT_BOTTOM) {
    return [parentBBox.br.x - bbox.width, parentBBox.br.y - bbox.height];
  }
  return [0, 0];
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/legend.js
function getLegendOption(legends, field) {
  if (isBoolean4(legends)) {
    return legends === false ? false : {};
  }
  return get40(legends, [field], legends);
}
function getDirection(legendOption) {
  return get40(legendOption, 'position', DIRECTION.BOTTOM);
}
var Legend2 = (function(_super) {
  __extends30(Legend3, _super);
  function Legend3(view) {
    var _this = _super.call(this, view) || this;
    _this.container = _this.view.getLayer(LAYER.FORE).addGroup();
    return _this;
  }
  Object.defineProperty(Legend3.prototype, 'name', {
    get: function() {
      return 'legend';
    },
    enumerable: false,
    configurable: true
  });
  Legend3.prototype.init = function() {};
  Legend3.prototype.render = function() {
    this.update();
  };
  Legend3.prototype.layout = function() {
    var _this = this;
    this.layoutBBox = this.view.viewBBox;
    each49(this.components, function(co) {
      var component = co.component,
        direction = co.direction;
      var layout2 = getLegendLayout(direction);
      var maxWidthRatio = component.get('maxWidthRatio');
      var maxHeightRatio = component.get('maxHeightRatio');
      var maxSize = _this.getCategoryLegendSizeCfg(layout2, maxWidthRatio, maxHeightRatio);
      var maxWidth = component.get('maxWidth');
      var maxHeight = component.get('maxHeight');
      component.update({
        maxWidth: Math.min(maxSize.maxWidth, maxWidth || 0),
        maxHeight: Math.min(maxSize.maxHeight, maxHeight || 0)
      });
      var padding = component.get('padding');
      var bboxObject = component.getLayoutBBox();
      var bbox = new BBox(bboxObject.x, bboxObject.y, bboxObject.width, bboxObject.height).expand(padding);
      var _a = __read30(directionToPosition(_this.view.viewBBox, bbox, direction), 2),
        x1 = _a[0],
        y1 = _a[1];
      var _b = __read30(directionToPosition(_this.layoutBBox, bbox, direction), 2),
        x2 = _b[0],
        y2 = _b[1];
      var x = 0;
      var y = 0;
      if (direction.startsWith('top') || direction.startsWith('bottom')) {
        x = x1;
        y = y2;
      } else {
        x = x2;
        y = y1;
      }
      component.setLocation({ x: x + padding[3], y: y + padding[0] });
      _this.layoutBBox = _this.layoutBBox.cut(bbox, direction);
    });
  };
  Legend3.prototype.update = function() {
    var _this = this;
    this.option = this.view.getOptions().legends;
    var updated = {};
    var eachLegend = function(geometry, attr, scale) {
      var id2 = _this.getId(scale.field);
      var existCo2 = _this.getComponentById(id2);
      if (existCo2) {
        var cfg = void 0;
        var legendOption = getLegendOption(_this.option, scale.field);
        if (legendOption !== false) {
          if (get40(legendOption, 'custom')) {
            cfg = _this.getCategoryCfg(geometry, attr, scale, legendOption, true);
          } else {
            if (scale.isLinear) {
              cfg = _this.getContinuousCfg(geometry, attr, scale, legendOption);
            } else if (scale.isCategory) {
              cfg = _this.getCategoryCfg(geometry, attr, scale, legendOption);
            }
          }
        }
        if (cfg) {
          omit(cfg, ['container']);
          existCo2.direction = getDirection(legendOption);
          existCo2.component.update(cfg);
          updated[id2] = true;
        }
      } else {
        var legend = _this.createFieldLegend(geometry, attr, scale);
        if (legend) {
          legend.component.init();
          _this.components.push(legend);
          updated[id2] = true;
        }
      }
    };
    if (get40(this.option, 'custom')) {
      var id = 'global-custom';
      var existCo = this.getComponentById(id);
      if (existCo) {
        var customCfg = this.getCategoryCfg(void 0, void 0, void 0, this.option, true);
        omit(customCfg, ['container']);
        existCo.component.update(customCfg);
        updated[id] = true;
      } else {
        var component = this.createCustomLegend(void 0, void 0, void 0, this.option);
        if (component) {
          component.init();
          var layer = LAYER.FORE;
          var direction = getDirection(this.option);
          this.components.push({ id, component, layer, direction, type: COMPONENT_TYPE.LEGEND, extra: void 0 });
          updated[id] = true;
        }
      }
    } else {
      this.loopLegends(eachLegend);
    }
    var components = [];
    each49(this.getComponents(), function(co) {
      if (updated[co.id]) {
        components.push(co);
      } else {
        co.component.destroy();
      }
    });
    this.components = components;
  };
  Legend3.prototype.clear = function() {
    _super.prototype.clear.call(this);
    this.container.clear();
  };
  Legend3.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.container.remove(true);
  };
  Legend3.prototype.getGeometries = function(view) {
    var _this = this;
    var geometries = view.geometries;
    each49(view.views, function(v) {
      geometries = geometries.concat(_this.getGeometries(v));
    });
    return geometries;
  };
  Legend3.prototype.loopLegends = function(doEach) {
    var isRootView = this.view.getRootView() === this.view;
    if (!isRootView) {
      return;
    }
    var geometries = this.getGeometries(this.view);
    var looped = {};
    each49(geometries, function(geometry) {
      var attributes = geometry.getGroupAttributes();
      each49(attributes, function(attr) {
        var scale = attr.getScale(attr.type);
        if (!scale || scale.type === 'identity' || looped[scale.field]) {
          return;
        }
        doEach(geometry, attr, scale);
        looped[scale.field] = true;
      });
    });
  };
  Legend3.prototype.createFieldLegend = function(geometry, attr, scale) {
    var component;
    var legendOption = getLegendOption(this.option, scale.field);
    var layer = LAYER.FORE;
    var direction = getDirection(legendOption);
    if (legendOption !== false) {
      if (get40(legendOption, 'custom')) {
        component = this.createCustomLegend(geometry, attr, scale, legendOption);
      } else {
        if (scale.isLinear) {
          component = this.createContinuousLegend(geometry, attr, scale, legendOption);
        } else if (scale.isCategory) {
          component = this.createCategoryLegend(geometry, attr, scale, legendOption);
        }
      }
    }
    if (component) {
      component.set('field', scale.field);
      return {
        id: this.getId(scale.field),
        component,
        layer,
        direction,
        type: COMPONENT_TYPE.LEGEND,
        extra: { scale }
      };
    }
  };
  Legend3.prototype.createCustomLegend = function(geometry, attr, scale, legendOption) {
    var cfg = this.getCategoryCfg(geometry, attr, scale, legendOption, true);
    return new CategoryLegend(cfg);
  };
  Legend3.prototype.createContinuousLegend = function(geometry, attr, scale, legendOption) {
    var cfg = this.getContinuousCfg(geometry, attr, scale, omit(legendOption, ['value']));
    return new ContinuousLegend(cfg);
  };
  Legend3.prototype.createCategoryLegend = function(geometry, attr, scale, legendOption) {
    var cfg = this.getCategoryCfg(geometry, attr, scale, legendOption);
    return new CategoryLegend(cfg);
  };
  Legend3.prototype.getContinuousCfg = function(geometry, attr, scale, legendOption) {
    var ticks = scale.getTicks();
    var containMin = find6(ticks, function(tick) {
      return tick.value === 0;
    });
    var containMax = find6(ticks, function(tick) {
      return tick.value === 1;
    });
    var items = ticks.map(function(tick) {
      var value = tick.value,
        tickValue = tick.tickValue;
      var attrValue = attr.mapping(scale.invert(value)).join('');
      return { value: tickValue, attrValue, color: attrValue, scaleValue: value };
    });
    if (!containMin) {
      items.push({
        value: scale.min,
        attrValue: attr.mapping(scale.invert(0)).join(''),
        color: attr.mapping(scale.invert(0)).join(''),
        scaleValue: 0
      });
    }
    if (!containMax) {
      items.push({
        value: scale.max,
        attrValue: attr.mapping(scale.invert(1)).join(''),
        color: attr.mapping(scale.invert(1)).join(''),
        scaleValue: 1
      });
    }
    items.sort(function(a, b) {
      return a.value - b.value;
    });
    var attrLegendCfg = {
      min: head(items).value,
      max: last3(items).value,
      colors: [],
      rail: { type: attr.type },
      track: {}
    };
    if (attr.type === 'size') {
      attrLegendCfg.track = { style: { fill: attr.type === 'size' ? this.view.getTheme().defaultColor : void 0 } };
    }
    if (attr.type === 'color') {
      attrLegendCfg.colors = items.map(function(item) {
        return item.attrValue;
      });
    }
    var container = this.container;
    var direction = getDirection(legendOption);
    var layout2 = getLegendLayout(direction);
    var title = get40(legendOption, 'title');
    if (title) {
      title = deepMix28({ text: getName(scale) }, title);
    }
    attrLegendCfg.container = container;
    attrLegendCfg.layout = layout2;
    attrLegendCfg.title = title;
    attrLegendCfg.animateOption = DEFAULT_ANIMATE_CFG;
    return this.mergeLegendCfg(attrLegendCfg, legendOption, 'continuous');
  };
  Legend3.prototype.getCategoryCfg = function(geometry, attr, scale, legendOption, custom) {
    var container = this.container;
    var direction = get40(legendOption, 'position', DIRECTION.BOTTOM);
    var legendTheme = getLegendThemeCfg(this.view.getTheme(), direction);
    var themeMarker = get40(legendTheme, ['marker']);
    var userMarker = get40(legendOption, 'marker');
    var layout2 = getLegendLayout(direction);
    var themePageNavigator = get40(legendTheme, ['pageNavigator']);
    var userPageNavigator = get40(legendOption, 'pageNavigator');
    var items = custom
      ? getCustomLegendItems(themeMarker, userMarker, legendOption.items)
      : getLegendItems(this.view, geometry, attr, themeMarker, userMarker);
    var title = get40(legendOption, 'title');
    if (title) {
      title = deepMix28({ text: scale ? getName(scale) : '' }, title);
    }
    var maxWidthRatio = get40(legendOption, 'maxWidthRatio');
    var maxHeightRatio = get40(legendOption, 'maxHeightRatio');
    var baseCfg = this.getCategoryLegendSizeCfg(layout2, maxWidthRatio, maxHeightRatio);
    baseCfg.container = container;
    baseCfg.layout = layout2;
    baseCfg.items = items;
    baseCfg.title = title;
    baseCfg.animateOption = DEFAULT_ANIMATE_CFG;
    baseCfg.pageNavigator = deepMix28({}, themePageNavigator, userPageNavigator);
    var categoryCfg = this.mergeLegendCfg(baseCfg, legendOption, direction);
    if (categoryCfg.reversed) {
      categoryCfg.items.reverse();
    }
    var maxItemWidth = get40(categoryCfg, 'maxItemWidth');
    if (maxItemWidth && maxItemWidth <= 1) {
      categoryCfg.maxItemWidth = this.view.viewBBox.width * maxItemWidth;
    }
    return categoryCfg;
  };
  Legend3.prototype.mergeLegendCfg = function(baseCfg, legendOption, direction) {
    var position = direction.split('-')[0];
    var themeObject = getLegendThemeCfg(this.view.getTheme(), position);
    return deepMix28({}, themeObject, baseCfg, legendOption);
  };
  Legend3.prototype.getId = function(key) {
    return ''.concat(this.name, '-').concat(key);
  };
  Legend3.prototype.getComponentById = function(id) {
    return find6(this.components, function(co) {
      return co.id === id;
    });
  };
  Legend3.prototype.getCategoryLegendSizeCfg = function(layout2, maxWidthRatio, maxHeightRatio) {
    if (maxWidthRatio === void 0) {
      maxWidthRatio = COMPONENT_MAX_VIEW_PERCENTAGE;
    }
    if (maxHeightRatio === void 0) {
      maxHeightRatio = COMPONENT_MAX_VIEW_PERCENTAGE;
    }
    var _a = this.view.viewBBox,
      vw = _a.width,
      vh = _a.height;
    return layout2 === 'vertical'
      ? { maxWidth: vw * maxWidthRatio, maxHeight: vh }
      : { maxWidth: vw, maxHeight: vh * maxHeightRatio };
  };
  return Legend3;
})(Controller);
var legend_default = Legend2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/slider.js
import {
  __assign as __assign53,
  __extends as __extends31,
  __read as __read31
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix29,
  get as get41,
  isObject as isObject6,
  size as size3,
  clamp as clamp2,
  isNil as isNil17,
  noop,
  throttle as throttle2,
  isEmpty as isEmpty8,
  valuesOfKey as valuesOfKey3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Slider2 = (function(_super) {
  __extends31(Slider3, _super);
  function Slider3(view) {
    var _this = _super.call(this, view) || this;
    _this.onChangeFn = noop;
    _this.resetMeasure = function() {
      _this.clear();
    };
    _this.onValueChange = function(v) {
      var _a = __read31(v, 2),
        min2 = _a[0],
        max3 = _a[1];
      _this.start = min2;
      _this.end = max3;
      _this.changeViewData(min2, max3);
    };
    _this.container = _this.view.getLayer(LAYER.FORE).addGroup();
    _this.onChangeFn = throttle2(_this.onValueChange, 20, { leading: true });
    _this.width = 0;
    _this.view.on(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA, _this.resetMeasure);
    _this.view.on(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_SIZE, _this.resetMeasure);
    return _this;
  }
  Object.defineProperty(Slider3.prototype, 'name', {
    get: function() {
      return 'slider';
    },
    enumerable: false,
    configurable: true
  });
  Slider3.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.view.off(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA, this.resetMeasure);
    this.view.off(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_SIZE, this.resetMeasure);
  };
  Slider3.prototype.init = function() {};
  Slider3.prototype.render = function() {
    this.option = this.view.getOptions().slider;
    var _a = this.getSliderCfg(),
      start = _a.start,
      end = _a.end;
    if (isNil17(this.start)) {
      this.start = start;
      this.end = end;
    }
    var viewData = this.view.getOptions().data;
    if (this.option && !isEmpty8(viewData)) {
      if (this.slider) {
        this.slider = this.updateSlider();
      } else {
        this.slider = this.createSlider();
        this.slider.component.on('sliderchange', this.onChangeFn);
      }
    } else {
      if (this.slider) {
        this.slider.component.destroy();
        this.slider = void 0;
      } else {
      }
    }
  };
  Slider3.prototype.layout = function() {
    var _this = this;
    if (this.option && !this.width) {
      this.measureSlider();
      setTimeout(function() {
        if (!_this.view.destroyed) {
          _this.changeViewData(_this.start, _this.end);
        }
      }, 0);
    }
    if (this.slider) {
      var width = this.view.coordinateBBox.width;
      var padding = this.slider.component.get('padding');
      var _a = __read31(padding, 4),
        paddingTop = _a[0],
        paddingRight = _a[1],
        paddingBottom = _a[2],
        paddingLeft = _a[3];
      var bboxObject = this.slider.component.getLayoutBBox();
      var bbox = new BBox(bboxObject.x, bboxObject.y, Math.min(bboxObject.width, width), bboxObject.height).expand(
        padding
      );
      var _b = this.getMinMaxText(this.start, this.end),
        minText = _b.minText,
        maxText = _b.maxText;
      var _c = __read31(directionToPosition(this.view.viewBBox, bbox, DIRECTION.BOTTOM), 2),
        x1 = _c[0],
        y1 = _c[1];
      var _d = __read31(directionToPosition(this.view.coordinateBBox, bbox, DIRECTION.BOTTOM), 2),
        x2 = _d[0],
        y2 = _d[1];
      this.slider.component.update(
        __assign53(__assign53({}, this.getSliderCfg()), {
          x: x2 + paddingLeft,
          y: y1 + paddingTop,
          width: this.width,
          start: this.start,
          end: this.end,
          minText,
          maxText
        })
      );
      this.view.viewBBox = this.view.viewBBox.cut(bbox, DIRECTION.BOTTOM);
    }
  };
  Slider3.prototype.update = function() {
    this.render();
  };
  Slider3.prototype.createSlider = function() {
    var cfg = this.getSliderCfg();
    var component = new Slider(__assign53({ container: this.container }, cfg));
    component.init();
    return { component, layer: LAYER.FORE, direction: DIRECTION.BOTTOM, type: COMPONENT_TYPE.SLIDER };
  };
  Slider3.prototype.updateSlider = function() {
    var cfg = this.getSliderCfg();
    if (this.width) {
      var _a = this.getMinMaxText(this.start, this.end),
        minText = _a.minText,
        maxText = _a.maxText;
      cfg = __assign53(__assign53({}, cfg), { width: this.width, start: this.start, end: this.end, minText, maxText });
    }
    this.slider.component.update(cfg);
    return this.slider;
  };
  Slider3.prototype.measureSlider = function() {
    var width = this.getSliderCfg().width;
    this.width = width;
  };
  Slider3.prototype.getSliderCfg = function() {
    var cfg = {
      height: 16,
      start: 0,
      end: 1,
      minText: '',
      maxText: '',
      x: 0,
      y: 0,
      width: this.view.coordinateBBox.width
    };
    if (isObject6(this.option)) {
      var trendCfg = __assign53({ data: this.getData() }, get41(this.option, 'trendCfg', {}));
      cfg = deepMix29({}, cfg, this.getThemeOptions(), this.option);
      cfg = __assign53(__assign53({}, cfg), { trendCfg });
    }
    cfg.start = clamp2(Math.min(isNil17(cfg.start) ? 0 : cfg.start, isNil17(cfg.end) ? 1 : cfg.end), 0, 1);
    cfg.end = clamp2(Math.max(isNil17(cfg.start) ? 0 : cfg.start, isNil17(cfg.end) ? 1 : cfg.end), 0, 1);
    return cfg;
  };
  Slider3.prototype.getData = function() {
    var data = this.view.getOptions().data;
    var _a = __read31(this.view.getYScales(), 1),
      yScale = _a[0];
    var groupScales = this.view.getGroupScales();
    if (groupScales.length) {
      var _b = groupScales[0],
        field_1 = _b.field,
        ticks_1 = _b.ticks;
      return data.reduce(function(pre, cur) {
        if (cur[field_1] === ticks_1[0]) {
          pre.push(cur[yScale.field]);
        }
        return pre;
      }, []);
    }
    return data.map(function(datum) {
      return datum[yScale.field] || 0;
    });
  };
  Slider3.prototype.getThemeOptions = function() {
    var theme = this.view.getTheme();
    return get41(theme, ['components', 'slider', 'common'], {});
  };
  Slider3.prototype.getMinMaxText = function(min2, max3) {
    var data = this.view.getOptions().data;
    var xScale = this.view.getXScale();
    var isHorizontal = true;
    var values3 = valuesOfKey3(data, xScale.field);
    if (xScale.isLinear) {
      values3 = values3.sort();
    }
    var xValues = isHorizontal ? values3 : values3.reverse();
    var dataSize = size3(data);
    if (!xScale || !dataSize) {
      return {};
    }
    var xTickCount = size3(xValues);
    var minIndex = Math.round(min2 * (xTickCount - 1));
    var maxIndex = Math.round(max3 * (xTickCount - 1));
    var minText = get41(xValues, [minIndex]);
    var maxText = get41(xValues, [maxIndex]);
    var formatter = this.getSliderCfg().formatter;
    if (formatter) {
      minText = formatter(minText, data[minIndex], minIndex);
      maxText = formatter(maxText, data[maxIndex], maxIndex);
    }
    return { minText, maxText };
  };
  Slider3.prototype.changeViewData = function(min2, max3) {
    var data = this.view.getOptions().data;
    var xScale = this.view.getXScale();
    var dataSize = size3(data);
    if (!xScale || !dataSize) {
      return;
    }
    var isHorizontal = true;
    var values3 = valuesOfKey3(data, xScale.field);
    var xScaleValues = this.view.getXScale().isLinear
      ? values3.sort(function(a, b) {
          return Number(a) - Number(b);
        })
      : values3;
    var xValues = isHorizontal ? xScaleValues : xScaleValues.reverse();
    var xTickCount = size3(xValues);
    var minIndex = Math.round(min2 * (xTickCount - 1));
    var maxIndex = Math.round(max3 * (xTickCount - 1));
    this.view.filter(xScale.field, function(value, datum) {
      var idx = xValues.indexOf(value);
      return idx > -1 ? isBetween(idx, minIndex, maxIndex) : true;
    });
    this.view.render(true);
  };
  Slider3.prototype.getComponents = function() {
    return this.slider ? [this.slider] : [];
  };
  Slider3.prototype.clear = function() {
    if (this.slider) {
      this.slider.component.destroy();
      this.slider = void 0;
    }
    this.width = 0;
    this.start = void 0;
    this.end = void 0;
  };
  return Slider3;
})(Controller);
var slider_default = Slider2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/chart/controller/scrollbar.js
import {
  __assign as __assign54,
  __extends as __extends32,
  __read as __read32,
  __rest as __rest5,
  __spreadArray as __spreadArray18
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isObject as isObject7,
  clamp as clamp3,
  size as size4,
  throttle as throttle3,
  noop as noop2,
  get as get42,
  valuesOfKey as valuesOfKey4,
  deepMix as deepMix30
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DEFAULT_PADDING = 0;
var DEFAULT_SIZE = 8;
var DEFAULT_CATEGORY_SIZE = 32;
var MIN_THUMB_LENGTH = 20;
var Scrollbar2 = (function(_super) {
  __extends32(Scrollbar3, _super);
  function Scrollbar3(view) {
    var _this = _super.call(this, view) || this;
    _this.onChangeFn = noop2;
    _this.resetMeasure = function() {
      _this.clear();
    };
    _this.onValueChange = function(_a) {
      var ratio = _a.ratio;
      var animate = _this.getValidScrollbarCfg().animate;
      _this.ratio = clamp3(ratio, 0, 1);
      var originalAnimate = _this.view.getOptions().animate;
      if (!animate) {
        _this.view.animate(false);
      }
      _this.changeViewData(_this.getScrollRange(), true);
      _this.view.animate(originalAnimate);
    };
    _this.container = _this.view.getLayer(LAYER.FORE).addGroup();
    _this.onChangeFn = throttle3(_this.onValueChange, 20, { leading: true });
    _this.trackLen = 0;
    _this.thumbLen = 0;
    _this.ratio = 0;
    _this.view.on(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA, _this.resetMeasure);
    _this.view.on(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_SIZE, _this.resetMeasure);
    return _this;
  }
  Object.defineProperty(Scrollbar3.prototype, 'name', {
    get: function() {
      return 'scrollbar';
    },
    enumerable: false,
    configurable: true
  });
  Scrollbar3.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.view.off(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_DATA, this.resetMeasure);
    this.view.off(VIEW_LIFE_CIRCLE.BEFORE_CHANGE_SIZE, this.resetMeasure);
  };
  Scrollbar3.prototype.init = function() {};
  Scrollbar3.prototype.render = function() {
    this.option = this.view.getOptions().scrollbar;
    if (this.option) {
      if (this.scrollbar) {
        this.scrollbar = this.updateScrollbar();
      } else {
        this.scrollbar = this.createScrollbar();
        this.scrollbar.component.on('scrollchange', this.onChangeFn);
      }
    } else {
      if (this.scrollbar) {
        this.scrollbar.component.destroy();
        this.scrollbar = void 0;
      }
    }
  };
  Scrollbar3.prototype.layout = function() {
    var _this = this;
    if (this.option && !this.trackLen) {
      this.measureScrollbar();
      setTimeout(function() {
        if (!_this.view.destroyed) {
          _this.changeViewData(_this.getScrollRange(), true);
        }
      });
    }
    if (this.scrollbar) {
      var width = this.view.coordinateBBox.width;
      var padding = this.scrollbar.component.get('padding');
      var bboxObject = this.scrollbar.component.getLayoutBBox();
      var bbox = new BBox(bboxObject.x, bboxObject.y, Math.min(bboxObject.width, width), bboxObject.height).expand(
        padding
      );
      var cfg = this.getScrollbarComponentCfg();
      var x = void 0;
      var y = void 0;
      if (cfg.isHorizontal) {
        var _a = __read32(directionToPosition(this.view.viewBBox, bbox, DIRECTION.BOTTOM), 2),
          x1 = _a[0],
          y1 = _a[1];
        var _b = __read32(directionToPosition(this.view.coordinateBBox, bbox, DIRECTION.BOTTOM), 2),
          x2 = _b[0],
          y2 = _b[1];
        x = x2;
        y = y1;
      } else {
        var _c = __read32(directionToPosition(this.view.viewBBox, bbox, DIRECTION.RIGHT), 2),
          x1 = _c[0],
          y1 = _c[1];
        var _d = __read32(directionToPosition(this.view.viewBBox, bbox, DIRECTION.RIGHT), 2),
          x2 = _d[0],
          y2 = _d[1];
        x = x2;
        y = y1;
      }
      x += padding[3];
      y += padding[0];
      if (this.trackLen) {
        this.scrollbar.component.update(
          __assign54(__assign54({}, cfg), {
            x,
            y,
            trackLen: this.trackLen,
            thumbLen: this.thumbLen,
            thumbOffset: (this.trackLen - this.thumbLen) * this.ratio
          })
        );
      } else {
        this.scrollbar.component.update(__assign54(__assign54({}, cfg), { x, y }));
      }
      this.view.viewBBox = this.view.viewBBox.cut(bbox, cfg.isHorizontal ? DIRECTION.BOTTOM : DIRECTION.RIGHT);
    }
  };
  Scrollbar3.prototype.update = function() {
    this.render();
  };
  Scrollbar3.prototype.getComponents = function() {
    return this.scrollbar ? [this.scrollbar] : [];
  };
  Scrollbar3.prototype.clear = function() {
    if (this.scrollbar) {
      this.scrollbar.component.destroy();
      this.scrollbar = void 0;
    }
    this.trackLen = 0;
    this.thumbLen = 0;
    this.ratio = 0;
    this.cnt = 0;
    this.step = 0;
    this.data = void 0;
    this.xScaleCfg = void 0;
    this.yScalesCfg = [];
  };
  Scrollbar3.prototype.setValue = function(ratio) {
    this.onValueChange({ ratio });
  };
  Scrollbar3.prototype.getValue = function() {
    return this.ratio;
  };
  Scrollbar3.prototype.getThemeOptions = function() {
    var theme = this.view.getTheme();
    return get42(theme, ['components', 'scrollbar', 'common'], {});
  };
  Scrollbar3.prototype.getScrollbarTheme = function(style) {
    var theme = get42(this.view.getTheme(), ['components', 'scrollbar']);
    var _a = style || {},
      thumbHighlightColor = _a.thumbHighlightColor,
      restStyles = __rest5(_a, ['thumbHighlightColor']);
    return {
      default: deepMix30({}, get42(theme, ['default', 'style'], {}), restStyles),
      hover: deepMix30({}, get42(theme, ['hover', 'style'], {}), { thumbColor: thumbHighlightColor })
    };
  };
  Scrollbar3.prototype.measureScrollbar = function() {
    var xScale = this.view.getXScale();
    var yScales = this.view.getYScales().slice();
    this.data = this.getScrollbarData();
    this.step = this.getStep();
    this.cnt = this.getCnt();
    var _a = this.getScrollbarComponentCfg(),
      trackLen = _a.trackLen,
      thumbLen = _a.thumbLen;
    this.trackLen = trackLen;
    this.thumbLen = thumbLen;
    this.xScaleCfg = { field: xScale.field, values: xScale.values || [] };
    this.yScalesCfg = yScales;
  };
  Scrollbar3.prototype.getScrollRange = function() {
    var startIdx = Math.floor((this.cnt - this.step) * clamp3(this.ratio, 0, 1));
    var endIdx = Math.min(startIdx + this.step - 1, this.cnt - 1);
    return [startIdx, endIdx];
  };
  Scrollbar3.prototype.changeViewData = function(_a, render) {
    var _this = this;
    var _b = __read32(_a, 2),
      startIdx = _b[0],
      endIdx = _b[1];
    var type = this.getValidScrollbarCfg().type;
    var isHorizontal = type !== 'vertical';
    var values3 = valuesOfKey4(this.data, this.xScaleCfg.field);
    var xScaleValues = this.view.getXScale().isLinear
      ? values3.sort(function(a, b) {
          return Number(a) - Number(b);
        })
      : values3;
    var xValues = isHorizontal ? xScaleValues : xScaleValues.reverse();
    this.yScalesCfg.forEach(function(cfg) {
      _this.view.scale(cfg.field, {
        formatter: cfg.formatter,
        type: cfg.type,
        min: cfg.min,
        max: cfg.max,
        tickMethod: cfg.tickMethod
      });
    });
    this.view.filter(this.xScaleCfg.field, function(val) {
      var idx = xValues.indexOf(val);
      return idx > -1 ? isBetween(idx, startIdx, endIdx) : true;
    });
    this.view.render(true);
  };
  Scrollbar3.prototype.createScrollbar = function() {
    var type = this.getValidScrollbarCfg().type;
    var isHorizontal = type !== 'vertical';
    var component = new Scrollbar(
      __assign54(__assign54({ container: this.container }, this.getScrollbarComponentCfg()), { x: 0, y: 0 })
    );
    component.init();
    return {
      component,
      layer: LAYER.FORE,
      direction: isHorizontal ? DIRECTION.BOTTOM : DIRECTION.RIGHT,
      type: COMPONENT_TYPE.SCROLLBAR
    };
  };
  Scrollbar3.prototype.updateScrollbar = function() {
    var config = this.getScrollbarComponentCfg();
    var realConfig = this.trackLen
      ? __assign54(__assign54({}, config), {
          trackLen: this.trackLen,
          thumbLen: this.thumbLen,
          thumbOffset: (this.trackLen - this.thumbLen) * this.ratio
        })
      : __assign54({}, config);
    this.scrollbar.component.update(realConfig);
    return this.scrollbar;
  };
  Scrollbar3.prototype.getStep = function() {
    if (this.step) {
      return this.step;
    }
    var coordinateBBox = this.view.coordinateBBox;
    var _a = this.getValidScrollbarCfg(),
      type = _a.type,
      categorySize = _a.categorySize;
    var isHorizontal = type !== 'vertical';
    return Math.floor((isHorizontal ? coordinateBBox.width : coordinateBBox.height) / categorySize);
  };
  Scrollbar3.prototype.getCnt = function() {
    if (this.cnt) {
      return this.cnt;
    }
    var xScale = this.view.getXScale();
    var data = this.getScrollbarData();
    var values3 = valuesOfKey4(data, xScale.field);
    return size4(values3);
  };
  Scrollbar3.prototype.getScrollbarComponentCfg = function() {
    var _a = this.view,
      coordinateBBox = _a.coordinateBBox,
      viewBBox = _a.viewBBox;
    var _b = this.getValidScrollbarCfg(),
      type = _b.type,
      padding = _b.padding,
      width = _b.width,
      height = _b.height,
      style = _b.style;
    var isHorizontal = type !== 'vertical';
    var _c = __read32(padding, 4),
      paddingTop = _c[0],
      paddingRight = _c[1],
      paddingBottom = _c[2],
      paddingLeft = _c[3];
    var position = isHorizontal
      ? { x: coordinateBBox.minX + paddingLeft, y: viewBBox.maxY - height - paddingBottom }
      : { x: viewBBox.maxX - width - paddingRight, y: coordinateBBox.minY + paddingTop };
    var step = this.getStep();
    var cnt = this.getCnt();
    var trackLen = isHorizontal
      ? coordinateBBox.width - paddingLeft - paddingRight
      : coordinateBBox.height - paddingTop - paddingBottom;
    var thumbLen = Math.max(trackLen * clamp3(step / cnt, 0, 1), MIN_THUMB_LENGTH);
    return __assign54(__assign54({}, this.getThemeOptions()), {
      x: position.x,
      y: position.y,
      size: isHorizontal ? height : width,
      isHorizontal,
      trackLen,
      thumbLen,
      thumbOffset: 0,
      theme: this.getScrollbarTheme(style)
    });
  };
  Scrollbar3.prototype.getValidScrollbarCfg = function() {
    var cfg = {
      type: 'horizontal',
      categorySize: DEFAULT_CATEGORY_SIZE,
      width: DEFAULT_SIZE,
      height: DEFAULT_SIZE,
      padding: [0, 0, 0, 0],
      animate: true,
      style: {}
    };
    if (isObject7(this.option)) {
      cfg = __assign54(__assign54({}, cfg), this.option);
    }
    if (!isObject7(this.option) || !this.option.padding) {
      cfg.padding =
        cfg.type === 'horizontal' ? [DEFAULT_PADDING, 0, DEFAULT_PADDING, 0] : [0, DEFAULT_PADDING, 0, DEFAULT_PADDING];
    }
    return cfg;
  };
  Scrollbar3.prototype.getScrollbarData = function() {
    var coordinate = this.view.getCoordinate();
    var cfg = this.getValidScrollbarCfg();
    var data = this.view.getOptions().data || [];
    if (coordinate.isReflect('y') && cfg.type === 'vertical') {
      data = __spreadArray18([], __read32(data), false).reverse();
    }
    return data;
  };
  return Scrollbar3;
})(Controller);
var scrollbar_default = Scrollbar2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/active-region.js
import {
  __assign as __assign55,
  __extends as __extends33,
  __values as __values16
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each50,
  head as head2,
  isEqual as isEqual8,
  last as last4,
  get as get43,
  flatten as flatten5,
  isArray as isArray27,
  uniq as uniq4,
  isNil as isNil18
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DEFAULT_REGION_PATH_STYLE = { fill: '#CCD6EC', opacity: 0.3 };
function getItemsOfView(view, point, tooltipCfg) {
  var e_1, _a, e_2, _b, e_3, _c;
  var items = findItemsFromViewRecurisive(view, point, tooltipCfg);
  if (items.length) {
    items = flatten5(items);
    try {
      for (var items_1 = __values16(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
        var itemArr = items_1_1.value;
        try {
          for (
            var itemArr_1 = ((e_2 = void 0), __values16(itemArr)), itemArr_1_1 = itemArr_1.next();
            !itemArr_1_1.done;
            itemArr_1_1 = itemArr_1.next()
          ) {
            var item = itemArr_1_1.value;
            var _d = item.mappingData,
              x = _d.x,
              y = _d.y;
            item.x = isArray27(x) ? x[x.length - 1] : x;
            item.y = isArray27(y) ? y[y.length - 1] : y;
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (itemArr_1_1 && !itemArr_1_1.done && (_b = itemArr_1.return)) _b.call(itemArr_1);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    var shared = tooltipCfg.shared;
    if (shared === false && items.length > 1) {
      var snapItem = items[0];
      var min2 = Math.abs(point.y - snapItem[0].y);
      try {
        for (var items_2 = __values16(items), items_2_1 = items_2.next(); !items_2_1.done; items_2_1 = items_2.next()) {
          var aItem = items_2_1.value;
          var yDistance = Math.abs(point.y - aItem[0].y);
          if (yDistance <= min2) {
            snapItem = aItem;
            min2 = yDistance;
          }
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (items_2_1 && !items_2_1.done && (_c = items_2.return)) _c.call(items_2);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      items = [snapItem];
    }
    return uniq4(flatten5(items));
  }
  return [];
}
var ActiveRegion = (function(_super) {
  __extends33(ActiveRegion2, _super);
  function ActiveRegion2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ActiveRegion2.prototype.show = function(args) {
    var view = this.context.view;
    var ev = this.context.event;
    var tooltipCfg = view.getController('tooltip').getTooltipCfg();
    var tooltipItems = getItemsOfView(view, { x: ev.x, y: ev.y }, tooltipCfg);
    if (isEqual8(tooltipItems, this.items)) {
      return;
    }
    this.items = tooltipItems;
    if (tooltipItems.length) {
      var xField_1 = view.getXScale().field;
      var xValue_1 = tooltipItems[0].data[xField_1];
      var elements_1 = [];
      var geometries = view.geometries;
      each50(geometries, function(geometry) {
        if (geometry.type === 'interval' || geometry.type === 'schema') {
          var result = geometry.getElementsBy(function(ele) {
            var eleData = ele.getData();
            return eleData[xField_1] === xValue_1;
          });
          elements_1 = elements_1.concat(result);
        }
      });
      if (elements_1.length) {
        var coordinate_1 = view.getCoordinate();
        var firstBBox_1 = elements_1[0].shape.getCanvasBBox();
        var lastBBox_1 = elements_1[0].shape.getCanvasBBox();
        var groupBBox_1 = firstBBox_1;
        each50(elements_1, function(ele) {
          var bbox = ele.shape.getCanvasBBox();
          if (coordinate_1.isTransposed) {
            if (bbox.minY < firstBBox_1.minY) {
              firstBBox_1 = bbox;
            }
            if (bbox.maxY > lastBBox_1.maxY) {
              lastBBox_1 = bbox;
            }
          } else {
            if (bbox.minX < firstBBox_1.minX) {
              firstBBox_1 = bbox;
            }
            if (bbox.maxX > lastBBox_1.maxX) {
              lastBBox_1 = bbox;
            }
          }
          groupBBox_1.x = Math.min(bbox.minX, groupBBox_1.minX);
          groupBBox_1.y = Math.min(bbox.minY, groupBBox_1.minY);
          groupBBox_1.width = Math.max(bbox.maxX, groupBBox_1.maxX) - groupBBox_1.x;
          groupBBox_1.height = Math.max(bbox.maxY, groupBBox_1.maxY) - groupBBox_1.y;
        });
        var backgroundGroup = view.backgroundGroup,
          coordinateBBox = view.coordinateBBox;
        var path = void 0;
        if (coordinate_1.isRect) {
          var xScale = view.getXScale();
          var _a = args || {},
            appendRatio = _a.appendRatio,
            appendWidth = _a.appendWidth;
          if (isNil18(appendWidth)) {
            appendRatio = isNil18(appendRatio) ? (xScale.isLinear ? 0 : 0.25) : appendRatio;
            appendWidth = coordinate_1.isTransposed ? appendRatio * lastBBox_1.height : appendRatio * firstBBox_1.width;
          }
          var minX = void 0;
          var minY = void 0;
          var width = void 0;
          var height = void 0;
          if (coordinate_1.isTransposed) {
            minX = coordinateBBox.minX;
            minY = Math.min(lastBBox_1.minY, firstBBox_1.minY) - appendWidth;
            width = coordinateBBox.width;
            height = groupBBox_1.height + appendWidth * 2;
          } else {
            minX = Math.min(firstBBox_1.minX, lastBBox_1.minX) - appendWidth;
            minY = coordinateBBox.minY;
            width = groupBBox_1.width + appendWidth * 2;
            height = coordinateBBox.height;
          }
          path = [
            ['M', minX, minY],
            ['L', minX + width, minY],
            ['L', minX + width, minY + height],
            ['L', minX, minY + height],
            ['Z']
          ];
        } else {
          var firstElement = head2(elements_1);
          var lastElement = last4(elements_1);
          var startAngle = getAngle(firstElement.getModel(), coordinate_1).startAngle;
          var endAngle = getAngle(lastElement.getModel(), coordinate_1).endAngle;
          var center = coordinate_1.getCenter();
          var radius = coordinate_1.getRadius();
          var innterRadius = coordinate_1.innerRadius * radius;
          path = getSectorPath(center.x, center.y, radius, startAngle, endAngle, innterRadius);
        }
        if (this.regionPath) {
          this.regionPath.attr('path', path);
          this.regionPath.show();
        } else {
          var style = get43(args, 'style', DEFAULT_REGION_PATH_STYLE);
          this.regionPath = backgroundGroup.addShape({
            type: 'path',
            name: 'active-region',
            capture: false,
            attrs: __assign55(__assign55({}, style), { path })
          });
        }
      }
    }
  };
  ActiveRegion2.prototype.hide = function() {
    if (this.regionPath) {
      this.regionPath.hide();
    }
    this.items = null;
  };
  ActiveRegion2.prototype.destroy = function() {
    this.hide();
    if (this.regionPath) {
      this.regionPath.remove(true);
    }
    _super.prototype.destroy.call(this);
  };
  return ActiveRegion2;
})(base_default2);
var active_region_default = ActiveRegion; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/tooltip/sibling.js
import { __extends as __extends35 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each51 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/tooltip/geometry.js
import { __extends as __extends34 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isEqual as isEqual9, get as get44 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var TooltipAction = (function(_super) {
  __extends34(TooltipAction2, _super);
  function TooltipAction2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.timeStamp = 0;
    return _this;
  }
  TooltipAction2.prototype.show = function() {
    var context = this.context;
    var ev = context.event;
    var view = context.view;
    var isTooltipLocked = view.isTooltipLocked();
    if (isTooltipLocked) {
      return;
    }
    var lastTimeStamp = this.timeStamp;
    var timeStamp = +new Date();
    var showDelay = get44(context.view.getOptions(), 'tooltip.showDelay', 16);
    if (timeStamp - lastTimeStamp > showDelay) {
      var preLoc = this.location;
      var curLoc = { x: ev.x, y: ev.y };
      if (!preLoc || !isEqual9(preLoc, curLoc)) {
        this.showTooltip(view, curLoc);
      }
      this.timeStamp = timeStamp;
      this.location = curLoc;
    }
  };
  TooltipAction2.prototype.hide = function() {
    var view = this.context.view;
    var tooltip = view.getController('tooltip');
    var _a = this.context.event,
      clientX = _a.clientX,
      clientY = _a.clientY;
    if (tooltip.isCursorEntered({ x: clientX, y: clientY })) {
      return;
    }
    if (view.isTooltipLocked()) {
      return;
    }
    this.hideTooltip(view);
    this.location = null;
  };
  TooltipAction2.prototype.showTooltip = function(view, point) {
    view.showTooltip(point);
  };
  TooltipAction2.prototype.hideTooltip = function(view) {
    view.hideTooltip();
  };
  return TooltipAction2;
})(base_default2);
var geometry_default = TooltipAction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/tooltip/sibling.js
var SiblingTooltip = (function(_super) {
  __extends35(SiblingTooltip2, _super);
  function SiblingTooltip2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SiblingTooltip2.prototype.showTooltip = function(view, point) {
    var siblings = getSilbings(view);
    each51(siblings, function(sibling) {
      var siblingPoint = getSiblingPoint(view, sibling, point);
      sibling.showTooltip(siblingPoint);
    });
  };
  SiblingTooltip2.prototype.hideTooltip = function(view) {
    var siblings = getSilbings(view);
    each51(siblings, function(sibling) {
      sibling.hideTooltip();
    });
  };
  return SiblingTooltip2;
})(geometry_default);
var sibling_default = SiblingTooltip; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/tooltip/ellipsis-text.js
import { __assign as __assign56, __extends as __extends36 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  isEqual as isEqual10,
  get as get45,
  deepMix as deepMix31
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { TOOLTIP_CSS_CONST as TOOLTIP_CSS_CONST2 } from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js';
var EllipsisText = (function(_super) {
  __extends36(EllipsisText2, _super);
  function EllipsisText2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.timeStamp = 0;
    return _this;
  }
  EllipsisText2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.tooltip && this.tooltip.destroy();
  };
  EllipsisText2.prototype.show = function() {
    var context = this.context;
    var ev = context.event;
    var lastTimeStamp = this.timeStamp;
    var timeStamp = +new Date();
    if (timeStamp - lastTimeStamp > 16) {
      var preLoc = this.location;
      var curLoc = { x: ev.x, y: ev.y };
      if (!preLoc || !isEqual10(preLoc, curLoc)) {
        this.showTooltip(curLoc);
      }
      this.timeStamp = timeStamp;
      this.location = curLoc;
    }
  };
  EllipsisText2.prototype.hide = function() {
    this.hideTooltip();
    this.location = null;
  };
  EllipsisText2.prototype.showTooltip = function(curLoc) {
    var context = this.context;
    var ev = context.event;
    var target = ev.target;
    if (target && target.get('tip')) {
      if (!this.tooltip) {
        this.renderTooltip();
      }
      var tipContent = target.get('tip');
      this.tooltip.update(__assign56({ title: tipContent }, curLoc));
      this.tooltip.show();
    }
  };
  EllipsisText2.prototype.hideTooltip = function() {
    this.tooltip && this.tooltip.hide();
  };
  EllipsisText2.prototype.renderTooltip = function() {
    var _a;
    var view = this.context.view;
    var canvas = view.canvas;
    var region = { start: { x: 0, y: 0 }, end: { x: canvas.get('width'), y: canvas.get('height') } };
    var theme = view.getTheme();
    var tooltipStyles = get45(theme, ['components', 'tooltip', 'domStyles'], {});
    var tooltip = new HtmlTooltip({
      parent: canvas.get('el').parentNode,
      region,
      visible: false,
      crosshairs: null,
      domStyles: __assign56(
        {},
        deepMix31(
          {},
          tooltipStyles,
          ((_a = {}),
          (_a[TOOLTIP_CSS_CONST2.CONTAINER_CLASS] = { 'max-width': '50%' }),
          (_a[TOOLTIP_CSS_CONST2.TITLE_CLASS] = { 'word-break': 'break-all' }),
          _a)
        )
      )
    });
    tooltip.init();
    tooltip.setCapture(false);
    this.tooltip = tooltip;
  };
  return EllipsisText2;
})(base_default2);
var ellipsis_text_default = EllipsisText; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/active.js
import { __extends as __extends39 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/state.js
import { __extends as __extends38 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each53, isNil as isNil19, get as get46 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/state-base.js
import { __extends as __extends37 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each52 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var StateBase = (function(_super) {
  __extends37(StateBase2, _super);
  function StateBase2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = '';
    return _this;
  }
  StateBase2.prototype.hasState = function(element) {
    return element.hasState(this.stateName);
  };
  StateBase2.prototype.setElementState = function(element, enable) {
    element.setState(this.stateName, enable);
  };
  StateBase2.prototype.setState = function() {
    this.setStateEnable(true);
  };
  StateBase2.prototype.clear = function() {
    var view = this.context.view;
    this.clearViewState(view);
  };
  StateBase2.prototype.clearViewState = function(view) {
    var _this = this;
    var elements = getElementsByState(view, this.stateName);
    each52(elements, function(el) {
      _this.setElementState(el, false);
    });
  };
  return StateBase2;
})(base_default2);
var state_base_default = StateBase; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/state.js
function getItem(shape) {
  return get46(shape.get('delegateObject'), 'item');
}
var ElementState = (function(_super) {
  __extends38(ElementState2, _super);
  function ElementState2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.ignoreListItemStates = ['unchecked'];
    return _this;
  }
  ElementState2.prototype.isItemIgnore = function(item, list) {
    var states = this.ignoreListItemStates;
    var filtered = states.filter(function(state) {
      return list.hasState(item, state);
    });
    return !!filtered.length;
  };
  ElementState2.prototype.setStateByComponent = function(component, item, enable) {
    var view = this.context.view;
    var field = component.get('field');
    var elements = getElements(view);
    this.setElementsStateByItem(elements, field, item, enable);
  };
  ElementState2.prototype.setStateByElement = function(element, enable) {
    this.setElementState(element, enable);
  };
  ElementState2.prototype.isMathItem = function(element, field, item) {
    var view = this.context.view;
    var scale = getScaleByField(view, field);
    var value = getElementValue(element, field);
    return !isNil19(value) && item.name === scale.getText(value);
  };
  ElementState2.prototype.setElementsStateByItem = function(elements, field, item, enable) {
    var _this = this;
    each53(elements, function(el) {
      if (_this.isMathItem(el, field, item)) {
        el.setState(_this.stateName, enable);
      }
    });
  };
  ElementState2.prototype.setStateEnable = function(enable) {
    var element = getCurrentElement(this.context);
    if (element) {
      if (isElementChange(this.context)) {
        this.setStateByElement(element, enable);
      }
    } else {
      var delegateObject = getDelegationObject(this.context);
      if (isList(delegateObject)) {
        var item = delegateObject.item,
          component = delegateObject.component;
        if (item && component && !this.isItemIgnore(item, component)) {
          var event_1 = this.context.event.gEvent;
          if (
            event_1 &&
            event_1.fromShape &&
            event_1.toShape &&
            getItem(event_1.fromShape) === getItem(event_1.toShape)
          ) {
            return;
          }
          this.setStateByComponent(component, item, enable);
        }
      }
    }
  };
  ElementState2.prototype.toggle = function() {
    var element = getCurrentElement(this.context);
    if (element) {
      var hasState = element.hasState(this.stateName);
      this.setElementState(element, !hasState);
    }
  };
  ElementState2.prototype.reset = function() {
    this.setStateEnable(false);
  };
  return ElementState2;
})(state_base_default);
var state_default = ElementState; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/active.js
var ElementActive = (function(_super) {
  __extends39(ElementActive2, _super);
  function ElementActive2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ElementActive2.prototype.active = function() {
    this.setState();
  };
  return ElementActive2;
})(state_default);
var active_default = ElementActive; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/link-by-color.js
import { __assign as __assign57, __extends as __extends40 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  deepMix as deepMix32,
  each as each54,
  isFunction as isFunction12
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var LinkByColor = (function(_super) {
  __extends40(LinkByColor2, _super);
  function LinkByColor2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.cache = {};
    return _this;
  }
  LinkByColor2.prototype.getColorScale = function(view, element) {
    var colorAttr = element.geometry.getAttribute('color');
    if (!colorAttr) {
      return null;
    }
    var scale = view.getScaleByField(colorAttr.getFields()[0]);
    return scale;
  };
  LinkByColor2.prototype.getLinkPath = function(element, nextElement) {
    var view = this.context.view;
    var isTransposed = view.getCoordinate().isTransposed;
    var bbox = element.shape.getCanvasBBox();
    var nextBBox = nextElement.shape.getCanvasBBox();
    var path = isTransposed
      ? [
          ['M', bbox.minX, bbox.minY],
          ['L', nextBBox.minX, nextBBox.maxY],
          ['L', nextBBox.maxX, nextBBox.maxY],
          ['L', bbox.maxX, bbox.minY],
          ['Z']
        ]
      : [
          ['M', bbox.maxX, bbox.minY],
          ['L', nextBBox.minX, nextBBox.minY],
          ['L', nextBBox.minX, nextBBox.maxY],
          ['L', bbox.maxX, bbox.maxY],
          ['Z']
        ];
    return path;
  };
  LinkByColor2.prototype.addLinkShape = function(group2, element, nextElement, activeStyle) {
    var style = { opacity: 0.4, fill: element.shape.attr('fill') };
    group2.addShape({
      type: 'path',
      attrs: __assign57(
        __assign57({}, deepMix32({}, style, isFunction12(activeStyle) ? activeStyle(style, element) : activeStyle)),
        { path: this.getLinkPath(element, nextElement) }
      )
    });
  };
  LinkByColor2.prototype.linkByElement = function(element, activeStyle) {
    var _this = this;
    var view = this.context.view;
    var scale = this.getColorScale(view, element);
    if (!scale) {
      return;
    }
    var value = getElementValue(element, scale.field);
    if (!this.cache[value]) {
      var elements_1 = getElementsByField(view, scale.field, value);
      var linkGroup = this.linkGroup;
      var group_1 = linkGroup.addGroup();
      this.cache[value] = group_1;
      var count_1 = elements_1.length;
      each54(elements_1, function(el, index) {
        if (index < count_1 - 1) {
          var nextEl = elements_1[index + 1];
          _this.addLinkShape(group_1, el, nextEl, activeStyle);
        }
      });
    }
  };
  LinkByColor2.prototype.removeLink = function(element) {
    var scale = this.getColorScale(this.context.view, element);
    if (!scale) {
      return;
    }
    var value = getElementValue(element, scale.field);
    if (this.cache[value]) {
      this.cache[value].remove();
      this.cache[value] = null;
    }
  };
  LinkByColor2.prototype.link = function(args) {
    var context = this.context;
    if (!this.linkGroup) {
      this.linkGroup = context.view.foregroundGroup.addGroup({ id: 'link-by-color-group', capture: false });
    }
    var element = getCurrentElement(context);
    if (element) {
      this.linkByElement(element, args === null || args === void 0 ? void 0 : args.style);
    }
  };
  LinkByColor2.prototype.unlink = function() {
    var element = getCurrentElement(this.context);
    if (element) {
      this.removeLink(element);
    }
  };
  LinkByColor2.prototype.clear = function() {
    if (this.linkGroup) {
      this.linkGroup.clear();
    }
    this.cache = {};
  };
  LinkByColor2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    if (this.linkGroup) {
      this.linkGroup.remove();
    }
  };
  return LinkByColor2;
})(base_default2);
var link_by_color_default = LinkByColor; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/range-active.js
import { __extends as __extends42 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/range-state.js
import { __extends as __extends41 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each55 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ElementRangeState = (function(_super) {
  __extends41(ElementRangeState2, _super);
  function ElementRangeState2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.startPoint = null;
    _this.endPoint = null;
    _this.isStarted = false;
    _this.effectSiblings = false;
    _this.effectByRecord = false;
    return _this;
  }
  ElementRangeState2.prototype.getCurrentPoint = function() {
    var event = this.context.event;
    return { x: event.x, y: event.y };
  };
  ElementRangeState2.prototype.start = function() {
    this.clear();
    this.startPoint = this.getCurrentPoint();
    this.isStarted = true;
  };
  ElementRangeState2.prototype.getIntersectElements = function() {
    var elements = null;
    if (isMask(this.context)) {
      elements = getMaskedElements(this.context, 10);
    } else {
      var startPoint = this.startPoint;
      var endPoint = this.isStarted ? this.getCurrentPoint() : this.endPoint;
      if (!startPoint || !endPoint) {
        return;
      }
      var box = {
        minX: Math.min(startPoint.x, endPoint.x),
        minY: Math.min(startPoint.y, endPoint.y),
        maxX: Math.max(startPoint.x, endPoint.x),
        maxY: Math.max(startPoint.y, endPoint.y)
      };
      var view = this.context.view;
      elements = getIntersectElements(view, box);
    }
    return elements;
  };
  ElementRangeState2.prototype.setStateEnable = function(enable) {
    if (this.effectSiblings && !this.effectByRecord) {
      this.setSiblingsState(enable);
    } else {
      var allElements = getElements(this.context.view);
      var elements = this.getIntersectElements();
      if (elements && elements.length) {
        if (this.effectByRecord) {
          this.setSiblingsStateByRecord(elements, enable);
        } else {
          this.setElementsState(elements, enable, allElements);
        }
      } else {
        this.clear();
      }
    }
  };
  ElementRangeState2.prototype.setSiblingsStateByRecord = function(elements, enable) {
    var _this = this;
    var view = this.context.view;
    var siblings = getSilbings(view);
    var records = elements.map(function(el) {
      return el.getModel().data;
    });
    var xFiled = view.getXScale().field;
    var yField = view.getYScales()[0].field;
    each55(siblings, function(sibling) {
      var allElements = getElements(sibling);
      var effectElements = allElements.filter(function(el) {
        var record = el.getModel().data;
        return isInRecords(records, record, xFiled, yField);
      });
      _this.setElementsState(effectElements, enable, allElements);
    });
  };
  ElementRangeState2.prototype.setSiblingsState = function(enable) {
    var _this = this;
    var view = this.context.view;
    var siblings = getSilbings(view);
    if (isMask(this.context)) {
      each55(siblings, function(sibling) {
        var allElements = getElements(sibling);
        var effectElements = getSiblingMaskElements(_this.context, sibling, 10);
        if (effectElements && effectElements.length) {
          _this.setElementsState(effectElements, enable, allElements);
        } else {
          _this.clearViewState(sibling);
        }
      });
    }
  };
  ElementRangeState2.prototype.setElementsState = function(elements, enable, allElements) {
    var _this = this;
    each55(allElements, function(el) {
      if (!elements.includes(el)) {
        _this.setElementState(el, false);
      } else {
        _this.setElementState(el, enable);
      }
    });
  };
  ElementRangeState2.prototype.end = function() {
    this.isStarted = false;
    this.endPoint = this.getCurrentPoint();
  };
  ElementRangeState2.prototype.clear = function() {
    var _this = this;
    var view = this.context.view;
    if (this.effectSiblings) {
      var siblings = getSilbings(view);
      each55(siblings, function(sibling) {
        _this.clearViewState(sibling);
      });
    } else {
      this.clearViewState(view);
    }
  };
  return ElementRangeState2;
})(state_base_default);
var range_state_default = ElementRangeState; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/range-active.js
var ElementRangeActive = (function(_super) {
  __extends42(ElementRangeActive2, _super);
  function ElementRangeActive2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ElementRangeActive2.prototype.active = function() {
    this.setState();
  };
  return ElementRangeActive2;
})(range_state_default);
var range_active_default = ElementRangeActive; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/single-active.js
import { __extends as __extends44 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/single-state.js
import { __extends as __extends43 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ElementSingleState = (function(_super) {
  __extends43(ElementSingleState2, _super);
  function ElementSingleState2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ElementSingleState2.prototype.setStateEnable = function(enable) {
    var element = getCurrentElement(this.context);
    if (element) {
      if (!isElementChange(this.context)) {
        return;
      }
      if (enable) {
        this.clear();
        this.setElementState(element, true);
      } else if (this.hasState(element)) {
        this.setElementState(element, false);
      }
    }
  };
  ElementSingleState2.prototype.toggle = function() {
    var element = getCurrentElement(this.context);
    if (element) {
      var hasState = this.hasState(element);
      if (!hasState) {
        this.clear();
      }
      this.setElementState(element, !hasState);
    }
  };
  ElementSingleState2.prototype.reset = function() {
    this.setStateEnable(false);
  };
  return ElementSingleState2;
})(state_base_default);
var single_state_default = ElementSingleState; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/single-active.js
var ElementSingleActive = (function(_super) {
  __extends44(ElementSingleActive2, _super);
  function ElementSingleActive2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ElementSingleActive2.prototype.active = function() {
    this.setState();
  };
  return ElementSingleActive2;
})(single_state_default);
var single_active_default = ElementSingleActive; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/highlight.js
import { __extends as __extends45 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each57 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/highlight-util.js
import { each as each56 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var STATUS_UNACTIVE = 'inactive';
var STATUS_ACTIVE = 'active';
function clearHighlight(view) {
  var elements = getElements(view);
  each56(elements, function(el) {
    if (el.hasState(STATUS_ACTIVE)) {
      el.setState(STATUS_ACTIVE, false);
    }
    if (el.hasState(STATUS_UNACTIVE)) {
      el.setState(STATUS_UNACTIVE, false);
    }
  });
}
function setHighlightBy(elements, callback, enable) {
  each56(elements, function(el) {
    if (callback(el)) {
      if (el.hasState(STATUS_UNACTIVE)) {
        el.setState(STATUS_UNACTIVE, false);
      }
      el.setState(STATUS_ACTIVE, enable);
    } else {
      if (el.hasState(STATUS_ACTIVE)) {
        el.setState(STATUS_ACTIVE, false);
      }
      el.setState(STATUS_UNACTIVE, enable);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/highlight.js
var STATUS_UNACTIVE2 = ELEMENT_STATE.INACTIVE;
var STATUS_ACTIVE2 = ELEMENT_STATE.ACTIVE;
var ElementHighlight = (function(_super) {
  __extends45(ElementHighlight2, _super);
  function ElementHighlight2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = STATUS_ACTIVE2;
    return _this;
  }
  ElementHighlight2.prototype.setElementsStateByItem = function(elements, field, item, enable) {
    var _this = this;
    var callback = function(el) {
      return _this.isMathItem(el, field, item);
    };
    this.setHighlightBy(elements, callback, enable);
  };
  ElementHighlight2.prototype.setElementHighlight = function(el, callback) {
    if (callback(el)) {
      if (el.hasState(STATUS_UNACTIVE2)) {
        el.setState(STATUS_UNACTIVE2, false);
      }
      el.setState(STATUS_ACTIVE2, true);
    } else if (!el.hasState(STATUS_ACTIVE2)) {
      el.setState(STATUS_UNACTIVE2, true);
    }
  };
  ElementHighlight2.prototype.setHighlightBy = function(elements, callback, enable) {
    var _this = this;
    if (enable) {
      each57(elements, function(el) {
        _this.setElementHighlight(el, callback);
      });
    } else {
      var activeElements = getElementsByState(this.context.view, STATUS_ACTIVE2);
      var allCancel_1 = true;
      each57(activeElements, function(el) {
        if (!callback(el)) {
          allCancel_1 = false;
          return false;
        }
      });
      if (allCancel_1) {
        this.clear();
      } else {
        each57(elements, function(el) {
          if (callback(el)) {
            if (el.hasState(STATUS_ACTIVE2)) {
              el.setState(STATUS_ACTIVE2, false);
            }
            el.setState(STATUS_UNACTIVE2, true);
          }
        });
      }
    }
  };
  ElementHighlight2.prototype.setElementState = function(element, enable) {
    var view = this.context.view;
    var elements = getElements(view);
    this.setHighlightBy(
      elements,
      function(el) {
        return element === el;
      },
      enable
    );
  };
  ElementHighlight2.prototype.highlight = function() {
    this.setState();
  };
  ElementHighlight2.prototype.clear = function() {
    var view = this.context.view;
    clearHighlight(view);
  };
  return ElementHighlight2;
})(state_default);
var highlight_default = ElementHighlight; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/highlight-by-color.js
import { __extends as __extends46 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var HighlightColor = (function(_super) {
  __extends46(HighlightColor2, _super);
  function HighlightColor2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HighlightColor2.prototype.setStateByElement = function(element, enable) {
    var view = this.context.view;
    var colorAttr = element.geometry.getAttribute('color');
    if (!colorAttr) {
      return;
    }
    var scale = view.getScaleByField(colorAttr.getFields()[0]);
    var value = getElementValue(element, scale.field);
    var elements = getElements(view);
    var highlightElements = elements.filter(function(el) {
      return getElementValue(el, scale.field) === value;
    });
    this.setHighlightBy(
      elements,
      function(el) {
        return highlightElements.includes(el);
      },
      enable
    );
  };
  return HighlightColor2;
})(highlight_default);
var highlight_by_color_default = HighlightColor; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/highlight-by-x.js
import { __extends as __extends47 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var HighlightX = (function(_super) {
  __extends47(HighlightX2, _super);
  function HighlightX2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HighlightX2.prototype.setElementHighlight = function(el, callback) {
    if (callback(el)) {
      if (el.hasState(STATUS_UNACTIVE2)) {
        el.setState(STATUS_UNACTIVE2, false);
      }
      el.setState(STATUS_ACTIVE2, true);
    } else {
      el.setState(STATUS_UNACTIVE2, true);
      if (el.hasState(STATUS_ACTIVE2)) {
        el.setState(STATUS_ACTIVE2, false);
      }
    }
  };
  HighlightX2.prototype.setStateByElement = function(element, enable) {
    var view = this.context.view;
    var scale = view.getXScale();
    var value = getElementValue(element, scale.field);
    var elements = getElements(view);
    var highlightElements = elements.filter(function(el) {
      return getElementValue(el, scale.field) === value;
    });
    this.setHighlightBy(
      elements,
      function(el) {
        return highlightElements.includes(el);
      },
      enable
    );
  };
  HighlightX2.prototype.toggle = function() {
    var element = getCurrentElement(this.context);
    if (element) {
      var hasState = element.hasState(this.stateName);
      this.setStateByElement(element, !hasState);
    }
  };
  return HighlightX2;
})(highlight_default);
var highlight_by_x_default = HighlightX; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/range-highlight.js
import { __extends as __extends48 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var EVENTS;
(function(EVENTS3) {
  EVENTS3['BEFORE_HIGHLIGHT'] = 'element-range-highlight:beforehighlight';
  EVENTS3['AFTER_HIGHLIGHT'] = 'element-range-highlight:afterhighlight';
  EVENTS3['BEFORE_CLEAR'] = 'element-range-highlight:beforeclear';
  EVENTS3['AFTER_CLEAR'] = 'element-range-highlight:afterclear';
})(EVENTS || (EVENTS = {}));
var ElementRangeHighlight = (function(_super) {
  __extends48(ElementRangeHighlight2, _super);
  function ElementRangeHighlight2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ElementRangeHighlight2.prototype.clearViewState = function(view) {
    clearHighlight(view);
  };
  ElementRangeHighlight2.prototype.highlight = function() {
    var _a = this.context,
      view = _a.view,
      event = _a.event;
    var elements = this.getIntersectElements();
    var payload = { view, event, highlightElements: elements };
    view.emit(EVENTS.BEFORE_HIGHLIGHT, event_default.fromData(view, EVENTS.BEFORE_HIGHLIGHT, payload));
    this.setState();
    view.emit(EVENTS.AFTER_HIGHLIGHT, event_default.fromData(view, EVENTS.AFTER_HIGHLIGHT, payload));
  };
  ElementRangeHighlight2.prototype.clear = function() {
    var view = this.context.view;
    view.emit(EVENTS.BEFORE_CLEAR, event_default.fromData(view, EVENTS.BEFORE_CLEAR, {}));
    _super.prototype.clear.call(this);
    view.emit(EVENTS.AFTER_CLEAR, event_default.fromData(view, EVENTS.AFTER_CLEAR, {}));
  };
  ElementRangeHighlight2.prototype.setElementsState = function(elements, enable, allElements) {
    setHighlightBy(
      allElements,
      function(el) {
        return elements.indexOf(el) >= 0;
      },
      enable
    );
  };
  return ElementRangeHighlight2;
})(range_state_default);
var range_highlight_default = ElementRangeHighlight; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/single-highlight.js
import { __extends as __extends49 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ElementSingleHighlight = (function(_super) {
  __extends49(ElementSingleHighlight2, _super);
  function ElementSingleHighlight2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ElementSingleHighlight2.prototype.highlight = function() {
    this.setState();
  };
  ElementSingleHighlight2.prototype.setElementState = function(element, enable) {
    var view = this.context.view;
    var elements = getElements(view);
    setHighlightBy(
      elements,
      function(el) {
        return element === el;
      },
      enable
    );
  };
  ElementSingleHighlight2.prototype.clear = function() {
    var view = this.context.view;
    clearHighlight(view);
  };
  return ElementSingleHighlight2;
})(single_state_default);
var single_highlight_default = ElementSingleHighlight; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/range-selected.js
import { __extends as __extends50 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ElementRangeSelected = (function(_super) {
  __extends50(ElementRangeSelected2, _super);
  function ElementRangeSelected2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'selected';
    return _this;
  }
  ElementRangeSelected2.prototype.selected = function() {
    this.setState();
  };
  return ElementRangeSelected2;
})(range_state_default);
var range_selected_default = ElementRangeSelected; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/selected.js
import { __extends as __extends51 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ElementMultipleSelected = (function(_super) {
  __extends51(ElementMultipleSelected2, _super);
  function ElementMultipleSelected2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'selected';
    return _this;
  }
  ElementMultipleSelected2.prototype.selected = function() {
    this.setState();
  };
  return ElementMultipleSelected2;
})(state_default);
var selected_default = ElementMultipleSelected; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/single-selected.js
import { __extends as __extends52 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ElementSingleSelected = (function(_super) {
  __extends52(ElementSingleSelected2, _super);
  function ElementSingleSelected2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'selected';
    return _this;
  }
  ElementSingleSelected2.prototype.selected = function() {
    this.setState();
  };
  return ElementSingleSelected2;
})(single_state_default);
var single_selected_default = ElementSingleSelected; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-active.js
import { __extends as __extends54 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-state.js
import { __extends as __extends53 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each58 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ListState = (function(_super) {
  __extends53(ListState2, _super);
  function ListState2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = '';
    _this.ignoreItemStates = [];
    return _this;
  }
  ListState2.prototype.getTriggerListInfo = function() {
    var delegateObject = getDelegationObject(this.context);
    var info = null;
    if (isList(delegateObject)) {
      info = { item: delegateObject.item, list: delegateObject.component };
    }
    return info;
  };
  ListState2.prototype.getAllowComponents = function() {
    var _this = this;
    var view = this.context.view;
    var components = getComponents(view);
    var rst = [];
    each58(components, function(component) {
      if (component.isList() && _this.allowSetStateByElement(component)) {
        rst.push(component);
      }
    });
    return rst;
  };
  ListState2.prototype.hasState = function(list, item) {
    return list.hasState(item, this.stateName);
  };
  ListState2.prototype.clearAllComponentsState = function() {
    var _this = this;
    var components = this.getAllowComponents();
    each58(components, function(component) {
      component.clearItemsState(_this.stateName);
    });
  };
  ListState2.prototype.allowSetStateByElement = function(component) {
    var field = component.get('field');
    if (!field) {
      return false;
    }
    if (this.cfg && this.cfg.componentNames) {
      var name_1 = component.get('name');
      if (this.cfg.componentNames.indexOf(name_1) === -1) {
        return false;
      }
    }
    var view = this.context.view;
    var scale = getScaleByField(view, field);
    return scale && scale.isCategory;
  };
  ListState2.prototype.allowSetStateByItem = function(item, list) {
    var ignoreStates = this.ignoreItemStates;
    if (ignoreStates.length) {
      var filterStates = ignoreStates.filter(function(state) {
        return list.hasState(item, state);
      });
      return filterStates.length === 0;
    }
    return true;
  };
  ListState2.prototype.setStateByElement = function(component, element, enable) {
    var field = component.get('field');
    var view = this.context.view;
    var scale = getScaleByField(view, field);
    var value = getElementValue(element, field);
    var text = scale.getText(value);
    this.setItemsState(component, text, enable);
  };
  ListState2.prototype.setStateEnable = function(enable) {
    var _this = this;
    var element = getCurrentElement(this.context);
    if (element) {
      var components = this.getAllowComponents();
      each58(components, function(component2) {
        _this.setStateByElement(component2, element, enable);
      });
    } else {
      var delegateObject = getDelegationObject(this.context);
      if (isList(delegateObject)) {
        var item = delegateObject.item,
          component = delegateObject.component;
        if (this.allowSetStateByElement(component) && this.allowSetStateByItem(item, component)) {
          this.setItemState(component, item, enable);
        }
      }
    }
  };
  ListState2.prototype.setItemsState = function(list, name, enable) {
    var _this = this;
    var items = list.getItems();
    each58(items, function(item) {
      if (item.name === name) {
        _this.setItemState(list, item, enable);
      }
    });
  };
  ListState2.prototype.setItemState = function(list, item, enable) {
    list.setItemState(item, this.stateName, enable);
  };
  ListState2.prototype.setState = function() {
    this.setStateEnable(true);
  };
  ListState2.prototype.reset = function() {
    this.setStateEnable(false);
  };
  ListState2.prototype.toggle = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo && triggerInfo.item) {
      var list = triggerInfo.list,
        item = triggerInfo.item;
      var enable = this.hasState(list, item);
      this.setItemState(list, item, !enable);
    }
  };
  ListState2.prototype.clear = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo) {
      triggerInfo.list.clearItemsState(this.stateName);
    } else {
      this.clearAllComponentsState();
    }
  };
  return ListState2;
})(base_default2);
var list_state_default = ListState; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-active.js
var ListActive = (function(_super) {
  __extends54(ListActive2, _super);
  function ListActive2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'active';
    return _this;
  }
  ListActive2.prototype.active = function() {
    this.setState();
  };
  return ListActive2;
})(list_state_default);
var list_active_default = ListActive; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-highlight.js
import { __extends as __extends55 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each60 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-highlight-util.js
import { each as each59 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var STATUS_UNACTIVE3 = 'inactive';
var STATUS_ACTIVE3 = 'active';
function clearList(list) {
  var items = list.getItems();
  each59(items, function(item) {
    if (list.hasState(item, STATUS_ACTIVE3)) {
      list.setItemState(item, STATUS_ACTIVE3, false);
    }
    if (list.hasState(item, STATUS_UNACTIVE3)) {
      list.setItemState(item, STATUS_UNACTIVE3, false);
    }
  });
} // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-highlight.js
var STATUS_UNACTIVE4 = 'inactive';
var STATUS_ACTIVE4 = 'active';
var ListHighlight = (function(_super) {
  __extends55(ListHighlight2, _super);
  function ListHighlight2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = STATUS_ACTIVE4;
    _this.ignoreItemStates = ['unchecked'];
    return _this;
  }
  ListHighlight2.prototype.setItemsState = function(list, name, enable) {
    this.setHighlightBy(
      list,
      function(item) {
        return item.name === name;
      },
      enable
    );
  };
  ListHighlight2.prototype.setItemState = function(list, item, enable) {
    var items = list.getItems();
    this.setHighlightBy(
      list,
      function(el) {
        return el === item;
      },
      enable
    );
  };
  ListHighlight2.prototype.setHighlightBy = function(list, callback, enable) {
    var items = list.getItems();
    if (enable) {
      each60(items, function(item) {
        if (callback(item)) {
          if (list.hasState(item, STATUS_UNACTIVE4)) {
            list.setItemState(item, STATUS_UNACTIVE4, false);
          }
          list.setItemState(item, STATUS_ACTIVE4, true);
        } else if (!list.hasState(item, STATUS_ACTIVE4)) {
          list.setItemState(item, STATUS_UNACTIVE4, true);
        }
      });
    } else {
      var activeItems = list.getItemsByState(STATUS_ACTIVE4);
      var allCancel_1 = true;
      each60(activeItems, function(item) {
        if (!callback(item)) {
          allCancel_1 = false;
          return false;
        }
      });
      if (allCancel_1) {
        this.clear();
      } else {
        each60(items, function(item) {
          if (callback(item)) {
            if (list.hasState(item, STATUS_ACTIVE4)) {
              list.setItemState(item, STATUS_ACTIVE4, false);
            }
            list.setItemState(item, STATUS_UNACTIVE4, true);
          }
        });
      }
    }
  };
  ListHighlight2.prototype.highlight = function() {
    this.setState();
  };
  ListHighlight2.prototype.clear = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo) {
      clearList(triggerInfo.list);
    } else {
      var components = this.getAllowComponents();
      each60(components, function(component) {
        component.clearItemsState(STATUS_ACTIVE4);
        component.clearItemsState(STATUS_UNACTIVE4);
      });
    }
  };
  return ListHighlight2;
})(list_state_default);
var list_highlight_default = ListHighlight; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-selected.js
import { __extends as __extends56 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ListSelected = (function(_super) {
  __extends56(ListSelected2, _super);
  function ListSelected2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'selected';
    return _this;
  }
  ListSelected2.prototype.selected = function() {
    this.setState();
  };
  return ListSelected2;
})(list_state_default);
var list_selected_default = ListSelected; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-unchecked.js
import { __extends as __extends57 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ListUnchecked = (function(_super) {
  __extends57(ListUnchecked2, _super);
  function ListUnchecked2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = 'unchecked';
    return _this;
  }
  ListUnchecked2.prototype.unchecked = function() {
    this.setState();
  };
  return ListUnchecked2;
})(list_state_default);
var list_unchecked_default = ListUnchecked; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-checked.js
import { __extends as __extends58 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each61, some as some4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var STATUS_UNCHECKED = 'unchecked';
var STATUS_CHECKED = 'checked';
var ListChecked = (function(_super) {
  __extends58(ListChecked2, _super);
  function ListChecked2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.stateName = STATUS_CHECKED;
    return _this;
  }
  ListChecked2.prototype.setItemState = function(list, item, enable) {
    this.setCheckedBy(
      list,
      function(el) {
        return el === item;
      },
      enable
    );
  };
  ListChecked2.prototype.setCheckedBy = function(list, callback, enable) {
    var items = list.getItems();
    if (enable) {
      each61(items, function(item) {
        if (callback(item)) {
          if (list.hasState(item, STATUS_UNCHECKED)) {
            list.setItemState(item, STATUS_UNCHECKED, false);
          }
          list.setItemState(item, STATUS_CHECKED, true);
        } else if (!list.hasState(item, STATUS_CHECKED)) {
          list.setItemState(item, STATUS_UNCHECKED, true);
        }
      });
    }
  };
  ListChecked2.prototype.toggle = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo && triggerInfo.item) {
      var list_1 = triggerInfo.list,
        item = triggerInfo.item;
      var allChecked = !some4(list_1.getItems(), function(t) {
        return list_1.hasState(t, STATUS_UNCHECKED);
      });
      if (allChecked || list_1.hasState(item, STATUS_UNCHECKED)) {
        this.setItemState(list_1, item, true);
      } else {
        this.reset();
      }
    }
  };
  ListChecked2.prototype.checked = function() {
    this.setState();
  };
  ListChecked2.prototype.reset = function() {
    var components = this.getAllowComponents();
    each61(components, function(component) {
      component.clearItemsState(STATUS_CHECKED);
      component.clearItemsState(STATUS_UNCHECKED);
    });
  };
  return ListChecked2;
})(list_state_default);
var list_checked_default = ListChecked; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-focus.js
import { __extends as __extends59, __values as __values17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var STATUS_UNCHECKED2 = 'unchecked';
var ListFocus = (function(_super) {
  __extends59(ListFocus2, _super);
  function ListFocus2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ListFocus2.prototype.toggle = function() {
    var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo === null || triggerInfo === void 0 ? void 0 : triggerInfo.item) {
      var list_1 = triggerInfo.list,
        clickedItem = triggerInfo.item;
      var items = list_1.getItems();
      var checkedItems = items.filter(function(t) {
        return !list_1.hasState(t, STATUS_UNCHECKED2);
      });
      var uncheckedItems = items.filter(function(t) {
        return list_1.hasState(t, STATUS_UNCHECKED2);
      });
      var checkedItem = checkedItems[0];
      if (items.length === checkedItems.length) {
        try {
          for (
            var items_1 = __values17(items), items_1_1 = items_1.next();
            !items_1_1.done;
            items_1_1 = items_1.next()
          ) {
            var item = items_1_1.value;
            list_1.setItemState(item, STATUS_UNCHECKED2, item.id !== clickedItem.id);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (items_1_1 && !items_1_1.done && (_a = items_1.return)) _a.call(items_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      } else if (items.length - uncheckedItems.length === 1) {
        if (checkedItem.id === clickedItem.id) {
          try {
            for (
              var items_2 = __values17(items), items_2_1 = items_2.next();
              !items_2_1.done;
              items_2_1 = items_2.next()
            ) {
              var item = items_2_1.value;
              list_1.setItemState(item, STATUS_UNCHECKED2, false);
            }
          } catch (e_2_1) {
            e_2 = { error: e_2_1 };
          } finally {
            try {
              if (items_2_1 && !items_2_1.done && (_b = items_2.return)) _b.call(items_2);
            } finally {
              if (e_2) throw e_2.error;
            }
          }
        } else {
          try {
            for (
              var items_3 = __values17(items), items_3_1 = items_3.next();
              !items_3_1.done;
              items_3_1 = items_3.next()
            ) {
              var item = items_3_1.value;
              list_1.setItemState(item, STATUS_UNCHECKED2, item.id !== clickedItem.id);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (items_3_1 && !items_3_1.done && (_c = items_3.return)) _c.call(items_3);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      } else {
        try {
          for (
            var items_4 = __values17(items), items_4_1 = items_4.next();
            !items_4_1.done;
            items_4_1 = items_4.next()
          ) {
            var item = items_4_1.value;
            list_1.setItemState(item, STATUS_UNCHECKED2, item.id !== clickedItem.id);
          }
        } catch (e_4_1) {
          e_4 = { error: e_4_1 };
        } finally {
          try {
            if (items_4_1 && !items_4_1.done && (_d = items_4.return)) _d.call(items_4);
          } finally {
            if (e_4) throw e_4.error;
          }
        }
      }
    }
  };
  return ListFocus2;
})(list_state_default);
var list_focus_default = ListFocus; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/list-radio.js
import { __assign as __assign58, __extends as __extends60 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isEqual as isEqual11 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { TOOLTIP_CSS_CONST as TOOLTIP_CSS_CONST3 } from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js';
var STATUS_SHOW = 'showRadio';
var TIP_ID = 'legend-radio-tip';
var ListRadio = (function(_super) {
  __extends60(ListRadio2, _super);
  function ListRadio2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.timeStamp = 0;
    return _this;
  }
  ListRadio2.prototype.show = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo === null || triggerInfo === void 0 ? void 0 : triggerInfo.item) {
      var list = triggerInfo.list,
        item = triggerInfo.item;
      list.setItemState(item, STATUS_SHOW, true);
    }
  };
  ListRadio2.prototype.hide = function() {
    var triggerInfo = this.getTriggerListInfo();
    if (triggerInfo === null || triggerInfo === void 0 ? void 0 : triggerInfo.item) {
      var list = triggerInfo.list,
        item = triggerInfo.item;
      list.setItemState(item, STATUS_SHOW, false);
    }
  };
  ListRadio2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.tooltip && this.tooltip.destroy();
  };
  ListRadio2.prototype.showTip = function() {
    var context = this.context;
    var ev = context.event;
    var lastTimeStamp = this.timeStamp;
    var timeStamp = +new Date();
    var target = this.context.event.target;
    if (timeStamp - lastTimeStamp > 16 && target.get('name') === 'legend-item-radio') {
      var preLoc = this.location;
      var curLoc = { x: ev.x, y: ev.y };
      this.timeStamp = timeStamp;
      this.location = curLoc;
      if (!preLoc || !isEqual11(preLoc, curLoc)) {
        this.showTooltip(curLoc);
      }
    }
  };
  ListRadio2.prototype.hideTip = function() {
    this.hideTooltip();
    this.location = null;
  };
  ListRadio2.prototype.showTooltip = function(curLoc) {
    var context = this.context;
    var ev = context.event;
    var target = ev.target;
    if (target && target.get('tip')) {
      if (!this.tooltip) {
        this.renderTooltip();
      }
      var _a = context.view
          .getCanvas()
          .get('el')
          .getBoundingClientRect(),
        offsetX = _a.x,
        offsetY = _a.y;
      this.tooltip.update(
        __assign58(__assign58({ title: target.get('tip') }, curLoc), { x: curLoc.x + offsetX, y: curLoc.y + offsetY })
      );
      this.tooltip.show();
    }
  };
  ListRadio2.prototype.hideTooltip = function() {
    this.tooltip && this.tooltip.hide();
  };
  ListRadio2.prototype.renderTooltip = function() {
    var _a;
    var tooltipStyles =
      ((_a = {}),
      (_a[TOOLTIP_CSS_CONST3.CONTAINER_CLASS] = {
        padding: '6px 8px',
        transform: 'translate(-50%, -80%)',
        background: 'rgba(0,0,0,0.75)',
        color: '#fff',
        'border-radius': '2px',
        'z-index': 100
      }),
      (_a[TOOLTIP_CSS_CONST3.TITLE_CLASS] = {
        'font-size': '12px',
        'line-height': '14px',
        'margin-bottom': 0,
        'word-break': 'break-all'
      }),
      _a);
    if (document.getElementById(TIP_ID)) {
      document.body.removeChild(document.getElementById(TIP_ID));
    }
    var tooltip = new HtmlTooltip({
      parent: document.body,
      region: null,
      visible: false,
      crosshairs: null,
      domStyles: tooltipStyles,
      containerId: TIP_ID
    });
    tooltip.init();
    tooltip.setCapture(false);
    this.tooltip = tooltip;
  };
  return ListRadio2;
})(list_state_default);
var list_radio_default = ListRadio; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/circle.js
import { __extends as __extends62 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { last as last5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/base.js
import { __assign as __assign59, __extends as __extends61 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { deepMix as deepMix33, each as each62 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var MaskBase = (function(_super) {
  __extends61(MaskBase2, _super);
  function MaskBase2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.maskShape = null;
    _this.points = [];
    _this.starting = false;
    _this.moving = false;
    _this.preMovePoint = null;
    _this.shapeType = 'path';
    return _this;
  }
  MaskBase2.prototype.getCurrentPoint = function() {
    var event = this.context.event;
    return { x: event.x, y: event.y };
  };
  MaskBase2.prototype.emitEvent = function(type) {
    var eventName = 'mask:'.concat(type);
    var view = this.context.view;
    var event = this.context.event;
    view.emit(eventName, {
      target: this.maskShape,
      shape: this.maskShape,
      points: this.points,
      x: event.x,
      y: event.y
    });
  };
  MaskBase2.prototype.createMask = function() {
    var view = this.context.view;
    var maskAttrs = this.getMaskAttrs();
    var maskShape = view.foregroundGroup.addShape({
      type: this.shapeType,
      name: 'mask',
      draggable: true,
      attrs: __assign59({ fill: '#C5D4EB', opacity: 0.3 }, maskAttrs)
    });
    return maskShape;
  };
  MaskBase2.prototype.getMaskPath = function() {
    return [];
  };
  MaskBase2.prototype.show = function() {
    if (this.maskShape) {
      this.maskShape.show();
      this.emitEvent('show');
    }
  };
  MaskBase2.prototype.start = function(arg) {
    this.starting = true;
    this.moving = false;
    this.points = [this.getCurrentPoint()];
    if (!this.maskShape) {
      this.maskShape = this.createMask();
      this.maskShape.set('capture', false);
    }
    this.updateMask(arg === null || arg === void 0 ? void 0 : arg.maskStyle);
    this.emitEvent('start');
  };
  MaskBase2.prototype.moveStart = function() {
    this.moving = true;
    this.preMovePoint = this.getCurrentPoint();
  };
  MaskBase2.prototype.move = function() {
    if (!this.moving || !this.maskShape) {
      return;
    }
    var currentPoint = this.getCurrentPoint();
    var preMovePoint = this.preMovePoint;
    var dx = currentPoint.x - preMovePoint.x;
    var dy = currentPoint.y - preMovePoint.y;
    var points = this.points;
    each62(points, function(point) {
      point.x += dx;
      point.y += dy;
    });
    this.updateMask();
    this.emitEvent('change');
    this.preMovePoint = currentPoint;
  };
  MaskBase2.prototype.updateMask = function(maskStyle) {
    var attrs = deepMix33({}, this.getMaskAttrs(), maskStyle);
    this.maskShape.attr(attrs);
  };
  MaskBase2.prototype.moveEnd = function() {
    this.moving = false;
    this.preMovePoint = null;
  };
  MaskBase2.prototype.end = function() {
    this.starting = false;
    this.emitEvent('end');
    if (this.maskShape) {
      this.maskShape.set('capture', true);
    }
  };
  MaskBase2.prototype.hide = function() {
    if (this.maskShape) {
      this.maskShape.hide();
      this.emitEvent('hide');
    }
  };
  MaskBase2.prototype.resize = function() {
    if (this.starting && this.maskShape) {
      this.points.push(this.getCurrentPoint());
      this.updateMask();
      this.emitEvent('change');
    }
  };
  MaskBase2.prototype.destroy = function() {
    this.points = [];
    if (this.maskShape) {
      this.maskShape.remove();
    }
    this.maskShape = null;
    this.preMovePoint = null;
    _super.prototype.destroy.call(this);
  };
  return MaskBase2;
})(base_default2);
var base_default5 = MaskBase; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/circle.js
var CircleMask = (function(_super) {
  __extends62(CircleMask2, _super);
  function CircleMask2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.shapeType = 'circle';
    return _this;
  }
  CircleMask2.prototype.getMaskAttrs = function() {
    var points = this.points;
    var currentPoint = last5(this.points);
    var r = 0;
    var x = 0;
    var y = 0;
    if (points.length) {
      var first = points[0];
      r = distance(first, currentPoint) / 2;
      x = (currentPoint.x + first.x) / 2;
      y = (currentPoint.y + first.y) / 2;
    }
    return { x, y, r };
  };
  return CircleMask2;
})(base_default5);
var circle_default2 = CircleMask; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/dim-rect.js
import { __extends as __extends64 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { clamp as clamp4, head as head4, last as last7 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/rect.js
import { __extends as __extends63 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { head as head3, last as last6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var RectMask = (function(_super) {
  __extends63(RectMask2, _super);
  function RectMask2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.shapeType = 'rect';
    return _this;
  }
  RectMask2.prototype.getRegion = function() {
    var points = this.points;
    return { start: head3(points), end: last6(points) };
  };
  RectMask2.prototype.getMaskAttrs = function() {
    var _a = this.getRegion(),
      start = _a.start,
      end = _a.end;
    var x = Math.min(start.x, end.x);
    var y = Math.min(start.y, end.y);
    var width = Math.abs(end.x - start.x);
    var height = Math.abs(end.y - start.y);
    return { x, y, width, height };
  };
  return RectMask2;
})(base_default5);
var rect_default2 = RectMask; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/dim-rect.js
function clampPoint(point) {
  point.x = clamp4(point.x, 0, 1);
  point.y = clamp4(point.y, 0, 1);
}
var DimRect = (function(_super) {
  __extends64(DimRect2, _super);
  function DimRect2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.dim = 'x';
    _this.inPlot = true;
    return _this;
  }
  DimRect2.prototype.getRegion = function() {
    var start = null;
    var end = null;
    var points = this.points;
    var dim = this.dim;
    var coord = this.context.view.getCoordinate();
    var normalStart = coord.invert(head4(points));
    var normalEnd = coord.invert(last7(points));
    if (this.inPlot) {
      clampPoint(normalStart);
      clampPoint(normalEnd);
    }
    if (dim === 'x') {
      start = coord.convert({ x: normalStart.x, y: 0 });
      end = coord.convert({ x: normalEnd.x, y: 1 });
    } else {
      start = coord.convert({ x: 0, y: normalStart.y });
      end = coord.convert({ x: 1, y: normalEnd.y });
    }
    return { start, end };
  };
  return DimRect2;
})(rect_default2);
var dim_rect_default = DimRect; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/path.js
import { __extends as __extends65 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each63 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var PathMask = (function(_super) {
  __extends65(PathMask2, _super);
  function PathMask2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  PathMask2.prototype.getMaskPath = function() {
    var points = this.points;
    var path = [];
    if (points.length) {
      each63(points, function(point, index) {
        if (index === 0) {
          path.push(['M', point.x, point.y]);
        } else {
          path.push(['L', point.x, point.y]);
        }
      });
      path.push(['L', points[0].x, points[0].y]);
    }
    return path;
  };
  PathMask2.prototype.getMaskAttrs = function() {
    return { path: this.getMaskPath() };
  };
  PathMask2.prototype.addPoint = function() {
    this.resize();
  };
  return PathMask2;
})(base_default5);
var path_default2 = PathMask; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/mask/smooth-path.js
import { __extends as __extends66 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var SmoothPathMask = (function(_super) {
  __extends66(SmoothPathMask2, _super);
  function SmoothPathMask2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SmoothPathMask2.prototype.getMaskPath = function() {
    var points = this.points;
    return getSpline(points, true);
  };
  return SmoothPathMask2;
})(path_default2);
var smooth_path_default = SmoothPathMask; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/cursor.js
import { __extends as __extends67 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var CursorAction = (function(_super) {
  __extends67(CursorAction2, _super);
  function CursorAction2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CursorAction2.prototype.setCursor = function(cursor) {
    var view = this.context.view;
    view.getCanvas().setCursor(cursor);
  };
  CursorAction2.prototype.default = function() {
    this.setCursor('default');
  };
  CursorAction2.prototype.pointer = function() {
    this.setCursor('pointer');
  };
  CursorAction2.prototype.move = function() {
    this.setCursor('move');
  };
  CursorAction2.prototype.crosshair = function() {
    this.setCursor('crosshair');
  };
  CursorAction2.prototype.wait = function() {
    this.setCursor('wait');
  };
  CursorAction2.prototype.help = function() {
    this.setCursor('help');
  };
  CursorAction2.prototype.text = function() {
    this.setCursor('text');
  };
  CursorAction2.prototype.eResize = function() {
    this.setCursor('e-resize');
  };
  CursorAction2.prototype.wResize = function() {
    this.setCursor('w-resize');
  };
  CursorAction2.prototype.nResize = function() {
    this.setCursor('n-resize');
  };
  CursorAction2.prototype.sResize = function() {
    this.setCursor('s-resize');
  };
  CursorAction2.prototype.neResize = function() {
    this.setCursor('ne-resize');
  };
  CursorAction2.prototype.nwResize = function() {
    this.setCursor('nw-resize');
  };
  CursorAction2.prototype.seResize = function() {
    this.setCursor('se-resize');
  };
  CursorAction2.prototype.swResize = function() {
    this.setCursor('sw-resize');
  };
  CursorAction2.prototype.nsResize = function() {
    this.setCursor('ns-resize');
  };
  CursorAction2.prototype.ewResize = function() {
    this.setCursor('ew-resize');
  };
  CursorAction2.prototype.zoomIn = function() {
    this.setCursor('zoom-in');
  };
  CursorAction2.prototype.zoomOut = function() {
    this.setCursor('zoom-out');
  };
  return CursorAction2;
})(base_default2);
var cursor_default = CursorAction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/data/filter.js
import { __extends as __extends68, __read as __read33 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each64 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DataFilter = (function(_super) {
  __extends68(DataFilter2, _super);
  function DataFilter2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DataFilter2.prototype.filterView = function(view, field, filter8) {
    var _this = this;
    if (view.getScaleByField(field)) {
      view.filter(field, filter8);
    }
    if (view.views && view.views.length) {
      each64(view.views, function(subView) {
        _this.filterView(subView, field, filter8);
      });
    }
  };
  DataFilter2.prototype.filter = function() {
    var delegateObject = getDelegationObject(this.context);
    if (delegateObject) {
      var view = this.context.view;
      var component = delegateObject.component;
      var field = component.get('field');
      if (isList(delegateObject)) {
        if (field) {
          var unCheckedItems = component.getItemsByState('unchecked');
          var scale_1 = getScaleByField(view, field);
          var names_1 = unCheckedItems.map(function(item) {
            return item.name;
          });
          if (names_1.length) {
            this.filterView(view, field, function(value) {
              var text = scale_1.getText(value);
              return !names_1.includes(text);
            });
          } else {
            this.filterView(view, field, null);
          }
          view.render(true);
        }
      } else if (isSlider(delegateObject)) {
        var range = component.getValue();
        var _a = __read33(range, 2),
          min_1 = _a[0],
          max_1 = _a[1];
        this.filterView(view, field, function(value) {
          return value >= min_1 && value <= max_1;
        });
        view.render(true);
      }
    }
  };
  return DataFilter2;
})(base_default2);
var filter_default = DataFilter; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/data/range-filter.js
import { __extends as __extends69, __read as __read34 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function getFilter(scale, dim, point1, point2) {
  var min2 = Math.min(point1[dim], point2[dim]);
  var max3 = Math.max(point1[dim], point2[dim]);
  var _a = __read34(scale.range, 2),
    rangeMin = _a[0],
    rangeMax = _a[1];
  if (min2 < rangeMin) {
    min2 = rangeMin;
  }
  if (max3 > rangeMax) {
    max3 = rangeMax;
  }
  if (min2 === rangeMax && max3 === rangeMax) {
    return null;
  }
  var minValue = scale.invert(min2);
  var maxValue = scale.invert(max3);
  if (scale.isCategory) {
    var minIndex = scale.values.indexOf(minValue);
    var maxIndex = scale.values.indexOf(maxValue);
    var arr_1 = scale.values.slice(minIndex, maxIndex + 1);
    return function(value) {
      return arr_1.includes(value);
    };
  } else {
    return function(value) {
      return value >= minValue && value <= maxValue;
    };
  }
}
var EVENTS2;
(function(EVENTS3) {
  EVENTS3['FILTER'] = 'brush-filter-processing';
  EVENTS3['RESET'] = 'brush-filter-reset';
  EVENTS3['BEFORE_FILTER'] = 'brush-filter:beforefilter';
  EVENTS3['AFTER_FILTER'] = 'brush-filter:afterfilter';
  EVENTS3['BEFORE_RESET'] = 'brush-filter:beforereset';
  EVENTS3['AFTER_RESET'] = 'brush-filter:afterreset';
})(EVENTS2 || (EVENTS2 = {}));
var RangeFilter = (function(_super) {
  __extends69(RangeFilter2, _super);
  function RangeFilter2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.dims = ['x', 'y'];
    _this.startPoint = null;
    _this.isStarted = false;
    return _this;
  }
  RangeFilter2.prototype.hasDim = function(dim) {
    return this.dims.includes(dim);
  };
  RangeFilter2.prototype.start = function() {
    var context = this.context;
    this.isStarted = true;
    this.startPoint = context.getCurrentPoint();
  };
  RangeFilter2.prototype.filter = function() {
    var startPoint;
    var currentPoint;
    if (isMask(this.context)) {
      var maskShape = this.context.event.target;
      var bbox = maskShape.getCanvasBBox();
      startPoint = { x: bbox.x, y: bbox.y };
      currentPoint = { x: bbox.maxX, y: bbox.maxY };
    } else {
      if (!this.isStarted) {
        return;
      }
      startPoint = this.startPoint;
      currentPoint = this.context.getCurrentPoint();
    }
    if (Math.abs(startPoint.x - currentPoint.x) < 5 || Math.abs(startPoint.x - currentPoint.y) < 5) {
      return;
    }
    var _a = this.context,
      view = _a.view,
      event = _a.event;
    var payload = { view, event, dims: this.dims };
    view.emit(EVENTS2.BEFORE_FILTER, event_default.fromData(view, EVENTS2.BEFORE_FILTER, payload));
    var coord = view.getCoordinate();
    var normalCurrent = coord.invert(currentPoint);
    var normalStart = coord.invert(startPoint);
    if (this.hasDim('x')) {
      var xScale = view.getXScale();
      var filter8 = getFilter(xScale, 'x', normalCurrent, normalStart);
      this.filterView(view, xScale.field, filter8);
    }
    if (this.hasDim('y')) {
      var yScale = view.getYScales()[0];
      var filter8 = getFilter(yScale, 'y', normalCurrent, normalStart);
      this.filterView(view, yScale.field, filter8);
    }
    this.reRender(view, { source: EVENTS2.FILTER });
    view.emit(EVENTS2.AFTER_FILTER, event_default.fromData(view, EVENTS2.AFTER_FILTER, payload));
  };
  RangeFilter2.prototype.end = function() {
    this.isStarted = false;
  };
  RangeFilter2.prototype.reset = function() {
    var view = this.context.view;
    view.emit(EVENTS2.BEFORE_RESET, event_default.fromData(view, EVENTS2.BEFORE_RESET, {}));
    this.isStarted = false;
    if (this.hasDim('x')) {
      var xScale = view.getXScale();
      this.filterView(view, xScale.field, null);
    }
    if (this.hasDim('y')) {
      var yScale = view.getYScales()[0];
      this.filterView(view, yScale.field, null);
    }
    this.reRender(view, { source: EVENTS2.RESET });
    view.emit(EVENTS2.AFTER_RESET, event_default.fromData(view, EVENTS2.AFTER_RESET, {}));
  };
  RangeFilter2.prototype.filterView = function(view, field, filter8) {
    view.filter(field, filter8);
  };
  RangeFilter2.prototype.reRender = function(view, payload) {
    view.render(true, payload);
  };
  return RangeFilter2;
})(base_default2);
var range_filter_default = RangeFilter; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/data/sibling-filter.js
import { __extends as __extends70 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each65 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var SiblingFilter = (function(_super) {
  __extends70(SiblingFilter3, _super);
  function SiblingFilter3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  SiblingFilter3.prototype.filterView = function(view, field, filter8) {
    var siblings = getSilbings(view);
    each65(siblings, function(sibling) {
      sibling.filter(field, filter8);
    });
  };
  SiblingFilter3.prototype.reRender = function(view) {
    var siblings = getSilbings(view);
    each65(siblings, function(sibling) {
      sibling.render(true);
    });
  };
  return SiblingFilter3;
})(range_filter_default);
var sibling_filter_default = SiblingFilter; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/filter.js
import { __extends as __extends71, __read as __read35 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each66 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ElementFilter = (function(_super) {
  __extends71(ElementFilter2, _super);
  function ElementFilter2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ElementFilter2.prototype.filter = function() {
    var delegateObject = getDelegationObject(this.context);
    var view = this.context.view;
    var elements = getElements(view);
    if (isMask(this.context)) {
      var maskElements_1 = getMaskedElements(this.context, 10);
      if (maskElements_1) {
        each66(elements, function(el) {
          if (maskElements_1.includes(el)) {
            el.show();
          } else {
            el.hide();
          }
        });
      }
    } else if (delegateObject) {
      var component = delegateObject.component;
      var field_1 = component.get('field');
      if (isList(delegateObject)) {
        if (field_1) {
          var unCheckedItems = component.getItemsByState('unchecked');
          var scale_1 = getScaleByField(view, field_1);
          var names_1 = unCheckedItems.map(function(item) {
            return item.name;
          });
          each66(elements, function(el) {
            var value = getElementValue(el, field_1);
            var text = scale_1.getText(value);
            if (names_1.indexOf(text) >= 0) {
              el.hide();
            } else {
              el.show();
            }
          });
        }
      } else if (isSlider(delegateObject)) {
        var range = component.getValue();
        var _a = __read35(range, 2),
          min_1 = _a[0],
          max_1 = _a[1];
        each66(elements, function(el) {
          var value = getElementValue(el, field_1);
          if (value >= min_1 && value <= max_1) {
            el.show();
          } else {
            el.hide();
          }
        });
      }
    }
  };
  ElementFilter2.prototype.clear = function() {
    var elements = getElements(this.context.view);
    each66(elements, function(el) {
      el.show();
    });
  };
  ElementFilter2.prototype.reset = function() {
    this.clear();
  };
  return ElementFilter2;
})(base_default2);
var filter_default2 = ElementFilter; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/element/sibling-filter.js
import { __extends as __extends72 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each67 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var SiblingFilter2 = (function(_super) {
  __extends72(SiblingFilter3, _super);
  function SiblingFilter3() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.byRecord = false;
    return _this;
  }
  SiblingFilter3.prototype.filter = function() {
    if (isMask(this.context)) {
      if (this.byRecord) {
        this.filterByRecord();
      } else {
        this.filterByBBox();
      }
    }
  };
  SiblingFilter3.prototype.filterByRecord = function() {
    var view = this.context.view;
    var maskElements = getMaskedElements(this.context, 10);
    if (!maskElements) {
      return;
    }
    var xFiled = view.getXScale().field;
    var yField = view.getYScales()[0].field;
    var records = maskElements.map(function(el) {
      return el.getModel().data;
    });
    var siblings = getSilbings(view);
    each67(siblings, function(sibling) {
      var elements = getElements(sibling);
      each67(elements, function(el) {
        var record = el.getModel().data;
        if (isInRecords(records, record, xFiled, yField)) {
          el.show();
        } else {
          el.hide();
        }
      });
    });
  };
  SiblingFilter3.prototype.filterByBBox = function() {
    var _this = this;
    var view = this.context.view;
    var siblings = getSilbings(view);
    each67(siblings, function(sibling) {
      var maskElements = getSiblingMaskElements(_this.context, sibling, 10);
      var elements = getElements(sibling);
      if (maskElements) {
        each67(elements, function(el) {
          if (maskElements.includes(el)) {
            el.show();
          } else {
            el.hide();
          }
        });
      }
    });
  };
  SiblingFilter3.prototype.reset = function() {
    var siblings = getSilbings(this.context.view);
    each67(siblings, function(sibling) {
      var elements = getElements(sibling);
      each67(elements, function(el) {
        el.show();
      });
    });
  };
  return SiblingFilter3;
})(base_default2);
var sibling_filter_default2 = SiblingFilter2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/button.js
import { __assign as __assign60, __extends as __extends73 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext6 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { deepMix as deepMix34 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var PADDING_RIGHT = 10;
var PADDING_TOP = 5;
var ButtonAction = (function(_super) {
  __extends73(ButtonAction2, _super);
  function ButtonAction2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.buttonGroup = null;
    _this.buttonCfg = {
      name: 'button',
      text: 'button',
      textStyle: { x: 0, y: 0, fontSize: 12, fill: '#333333', cursor: 'pointer' },
      padding: [8, 10],
      style: { fill: '#f7f7f7', stroke: '#cccccc', cursor: 'pointer' },
      activeStyle: { fill: '#e6e6e6' }
    };
    return _this;
  }
  ButtonAction2.prototype.getButtonCfg = function() {
    return deepMix34(this.buttonCfg, this.cfg);
  };
  ButtonAction2.prototype.drawButton = function() {
    var config = this.getButtonCfg();
    var group2 = this.context.view.foregroundGroup.addGroup({ name: config.name });
    var textShape = group2.addShape({
      type: 'text',
      name: 'button-text',
      attrs: __assign60({ text: config.text }, config.textStyle)
    });
    var textBBox = textShape.getBBox();
    var padding = parsePadding(config.padding);
    var buttonShape = group2.addShape({
      type: 'rect',
      name: 'button-rect',
      attrs: __assign60(
        {
          x: textBBox.x - padding[3],
          y: textBBox.y - padding[0],
          width: textBBox.width + padding[1] + padding[3],
          height: textBBox.height + padding[0] + padding[2]
        },
        config.style
      )
    });
    buttonShape.toBack();
    group2.on('mouseenter', function() {
      buttonShape.attr(config.activeStyle);
    });
    group2.on('mouseleave', function() {
      buttonShape.attr(config.style);
    });
    this.buttonGroup = group2;
  };
  ButtonAction2.prototype.resetPosition = function() {
    var view = this.context.view;
    var coord = view.getCoordinate();
    var point = coord.convert({ x: 1, y: 1 });
    var buttonGroup = this.buttonGroup;
    var bbox = buttonGroup.getBBox();
    var matrix = ext6.transform(null, [
      ['t', point.x - bbox.width - PADDING_RIGHT, point.y + bbox.height + PADDING_TOP]
    ]);
    buttonGroup.setMatrix(matrix);
  };
  ButtonAction2.prototype.show = function() {
    if (!this.buttonGroup) {
      this.drawButton();
    }
    this.resetPosition();
    this.buttonGroup.show();
  };
  ButtonAction2.prototype.hide = function() {
    if (this.buttonGroup) {
      this.buttonGroup.hide();
    }
  };
  ButtonAction2.prototype.destroy = function() {
    var buttonGroup = this.buttonGroup;
    if (buttonGroup) {
      buttonGroup.remove();
    }
    _super.prototype.destroy.call(this);
  };
  return ButtonAction2;
})(base_default2);
var button_default = ButtonAction; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/drag.js
import { __extends as __extends74 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var DISTANCE = 4;
var Drag = (function(_super) {
  __extends74(Drag2, _super);
  function Drag2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.starting = false;
    _this.dragStart = false;
    return _this;
  }
  Drag2.prototype.start = function() {
    this.starting = true;
    this.startPoint = this.context.getCurrentPoint();
  };
  Drag2.prototype.drag = function() {
    if (!this.startPoint) {
      return;
    }
    var current = this.context.getCurrentPoint();
    var view = this.context.view;
    var event = this.context.event;
    if (!this.dragStart) {
      if (distance(current, this.startPoint) > DISTANCE) {
        view.emit('dragstart', { target: event.target, x: event.x, y: event.y });
        this.dragStart = true;
      }
    } else {
      view.emit('drag', { target: event.target, x: event.x, y: event.y });
    }
  };
  Drag2.prototype.end = function() {
    if (this.dragStart) {
      var view = this.context.view;
      var event_1 = this.context.event;
      view.emit('dragend', { target: event_1.target, x: event_1.x, y: event_1.y });
    }
    this.starting = false;
    this.dragStart = false;
  };
  return Drag2;
})(base_default2);
var drag_default = Drag; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/move.js
import { __extends as __extends75 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext7 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
var MIN_DISTANCE = 5;
var Move = (function(_super) {
  __extends75(Move2, _super);
  function Move2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.starting = false;
    _this.isMoving = false;
    _this.startPoint = null;
    _this.startMatrix = null;
    return _this;
  }
  Move2.prototype.start = function() {
    this.starting = true;
    this.startPoint = this.context.getCurrentPoint();
    this.startMatrix = this.context.view.middleGroup.getMatrix();
  };
  Move2.prototype.move = function() {
    if (!this.starting) {
      return;
    }
    var startPoint = this.startPoint;
    var currentPoint = this.context.getCurrentPoint();
    var d = distance(startPoint, currentPoint);
    if (d > MIN_DISTANCE && !this.isMoving) {
      this.isMoving = true;
    }
    if (this.isMoving) {
      var view = this.context.view;
      var matrix = ext7.transform(this.startMatrix, [
        ['t', currentPoint.x - startPoint.x, currentPoint.y - startPoint.y]
      ]);
      view.backgroundGroup.setMatrix(matrix);
      view.foregroundGroup.setMatrix(matrix);
      view.middleGroup.setMatrix(matrix);
    }
  };
  Move2.prototype.end = function() {
    if (this.isMoving) {
      this.isMoving = false;
    }
    this.startMatrix = null;
    this.starting = false;
    this.startPoint = null;
  };
  Move2.prototype.reset = function() {
    this.starting = false;
    this.startPoint = null;
    this.isMoving = false;
    var view = this.context.view;
    view.backgroundGroup.resetMatrix();
    view.foregroundGroup.resetMatrix();
    view.middleGroup.resetMatrix();
    this.isMoving = false;
  };
  return Move2;
})(base_default2);
var move_default = Move; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/scale-translate.js
import { __extends as __extends77 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each68 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js'; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/scale-transform.js
import { __extends as __extends76 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var DIM_X = 'x';
var DIM_Y = 'y';
var ScaleTranslate = (function(_super) {
  __extends76(ScaleTranslate4, _super);
  function ScaleTranslate4() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.dims = [DIM_X, DIM_Y];
    _this.cfgFields = ['dims'];
    _this.cacheScaleDefs = {};
    return _this;
  }
  ScaleTranslate4.prototype.hasDim = function(dim) {
    return this.dims.includes(dim);
  };
  ScaleTranslate4.prototype.getScale = function(dim) {
    var view = this.context.view;
    if (dim === 'x') {
      return view.getXScale();
    } else {
      return view.getYScales()[0];
    }
  };
  ScaleTranslate4.prototype.resetDim = function(dim) {
    var view = this.context.view;
    if (this.hasDim(dim) && this.cacheScaleDefs[dim]) {
      var scale = this.getScale(dim);
      view.scale(scale.field, this.cacheScaleDefs[dim]);
      this.cacheScaleDefs[dim] = null;
    }
  };
  ScaleTranslate4.prototype.reset = function() {
    this.resetDim(DIM_X);
    this.resetDim(DIM_Y);
    var view = this.context.view;
    view.render(true);
  };
  return ScaleTranslate4;
})(base_default2);
var scale_transform_default = ScaleTranslate; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/scale-translate.js
var ScaleTranslate2 = (function(_super) {
  __extends77(ScaleTranslate4, _super);
  function ScaleTranslate4() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.startPoint = null;
    _this.starting = false;
    _this.startCache = {};
    return _this;
  }
  ScaleTranslate4.prototype.start = function() {
    var _this = this;
    this.startPoint = this.context.getCurrentPoint();
    this.starting = true;
    var dims = this.dims;
    each68(dims, function(dim) {
      var scale = _this.getScale(dim);
      var min2 = scale.min,
        max3 = scale.max,
        values3 = scale.values;
      _this.startCache[dim] = { min: min2, max: max3, values: values3 };
    });
  };
  ScaleTranslate4.prototype.end = function() {
    this.startPoint = null;
    this.starting = false;
    this.startCache = {};
  };
  ScaleTranslate4.prototype.translate = function() {
    var _this = this;
    if (!this.starting) {
      return;
    }
    var startPoint = this.startPoint;
    var coord = this.context.view.getCoordinate();
    var currentPoint = this.context.getCurrentPoint();
    var normalStart = coord.invert(startPoint);
    var noramlCurrent = coord.invert(currentPoint);
    var dx = noramlCurrent.x - normalStart.x;
    var dy = noramlCurrent.y - normalStart.y;
    var view = this.context.view;
    var dims = this.dims;
    each68(dims, function(dim) {
      _this.translateDim(dim, { x: dx * -1, y: dy * -1 });
    });
    view.render(true);
  };
  ScaleTranslate4.prototype.translateDim = function(dim, normalPoint) {
    if (this.hasDim(dim)) {
      var scale = this.getScale(dim);
      if (scale.isLinear) {
        this.translateLinear(dim, scale, normalPoint);
      }
    }
  };
  ScaleTranslate4.prototype.translateLinear = function(dim, scale, normalPoint) {
    var view = this.context.view;
    var _a = this.startCache[dim],
      min2 = _a.min,
      max3 = _a.max;
    var range = max3 - min2;
    var d = normalPoint[dim] * range;
    if (!this.cacheScaleDefs[dim]) {
      this.cacheScaleDefs[dim] = { nice: scale.nice, min: min2, max: max3 };
    }
    view.scale(scale.field, { nice: false, min: min2 + d, max: max3 + d });
  };
  ScaleTranslate4.prototype.reset = function() {
    _super.prototype.reset.call(this);
    this.startPoint = null;
    this.starting = false;
  };
  return ScaleTranslate4;
})(scale_transform_default);
var scale_translate_default = ScaleTranslate2; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/scale-zoom.js
import { __extends as __extends78 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each69 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ScaleTranslate3 = (function(_super) {
  __extends78(ScaleTranslate4, _super);
  function ScaleTranslate4() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.zoomRatio = 0.05;
    return _this;
  }
  ScaleTranslate4.prototype.zoomIn = function() {
    this.zoom(this.zoomRatio);
  };
  ScaleTranslate4.prototype.zoom = function(scale) {
    var _this = this;
    var dims = this.dims;
    each69(dims, function(dim) {
      _this.zoomDim(dim, scale);
    });
    this.context.view.render(true);
  };
  ScaleTranslate4.prototype.zoomOut = function() {
    this.zoom(-1 * this.zoomRatio);
  };
  ScaleTranslate4.prototype.zoomDim = function(dim, dRatio) {
    if (this.hasDim(dim)) {
      var scale = this.getScale(dim);
      if (scale.isLinear) {
        this.zoomLinear(dim, scale, dRatio);
      }
    }
  };
  ScaleTranslate4.prototype.zoomLinear = function(dim, scale, dRatio) {
    var view = this.context.view;
    if (!this.cacheScaleDefs[dim]) {
      this.cacheScaleDefs[dim] = { nice: scale.nice, min: scale.min, max: scale.max };
    }
    var scaleDef = this.cacheScaleDefs[dim];
    var range = scaleDef.max - scaleDef.min;
    var min2 = scale.min,
      max3 = scale.max;
    var d = dRatio * range;
    var toMin = min2 - d;
    var toMax = max3 + d;
    var curRange = toMax - toMin;
    var scaled = curRange / range;
    if (toMax > toMin && scaled < 100 && scaled > 0.01) {
      view.scale(scale.field, { nice: false, min: min2 - d, max: max3 + d });
    }
  };
  return ScaleTranslate4;
})(scale_transform_default);
var scale_zoom_default = ScaleTranslate3; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/view/mousewheel-scroll.js
import { __extends as __extends79 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  clamp as clamp5,
  size as size5,
  valuesOfKey as valuesOfKey5
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function isWheelDown(event) {
  var wheelEvent = event.gEvent.originalEvent;
  return wheelEvent.deltaY > 0;
}
var DEFAULT_WHEELDELTA = 1;
var MousewheelScroll = (function(_super) {
  __extends79(MousewheelScroll2, _super);
  function MousewheelScroll2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  MousewheelScroll2.prototype.scroll = function(arg) {
    var _a = this.context,
      view = _a.view,
      event = _a.event;
    if (!view.getOptions().scrollbar) {
      return;
    }
    var wheelDelta = (arg === null || arg === void 0 ? void 0 : arg.wheelDelta) || DEFAULT_WHEELDELTA;
    var scrollbarController = view.getController('scrollbar');
    var xScale = view.getXScale();
    var data = view.getOptions().data;
    var dataSize = size5(valuesOfKey5(data, xScale.field));
    var step = size5(xScale.values);
    var currentRatio = scrollbarController.getValue();
    var currentStart = Math.floor((dataSize - step) * currentRatio);
    var nextStart = currentStart + (isWheelDown(event) ? wheelDelta : -wheelDelta);
    var correction = wheelDelta / (dataSize - step) / 1e4;
    var nextRatio = clamp5(nextStart / (dataSize - step) + correction, 0, 1);
    scrollbarController.setValue(nextRatio);
  };
  return MousewheelScroll2;
})(base_default2);
var mousewheel_scroll_default = MousewheelScroll; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/interaction/action/component/axis/axis-description.js
import { __assign as __assign61, __extends as __extends80 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { TOOLTIP_CSS_CONST as TOOLTIP_CSS_CONST4 } from '/cdn/v99/@antv/component@0.8.28/es2022/component.development.js';
import { deepMix as deepMix35 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var AXIS_DESCRIPTION_TOOLTIP = 'aixs-description-tooltip';
var AxisDescription = (function(_super) {
  __extends80(AxisDescription2, _super);
  function AxisDescription2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AxisDescription2.prototype.show = function() {
    var context = this.context;
    var axis = getDelegationObject(context).axis;
    var _a = axis.cfg.title,
      description = _a.description,
      text = _a.text,
      descriptionTooltipStyle = _a.descriptionTooltipStyle;
    var _b = context.event,
      x = _b.x,
      y = _b.y;
    if (!this.tooltip) {
      this.renderTooltip();
    }
    this.tooltip.update({
      title: text || '',
      customContent: function() {
        return '\n          <div class="'
          .concat(TOOLTIP_CSS_CONST4.CONTAINER_CLASS, '" style={')
          .concat(descriptionTooltipStyle, '}>\n            <div class="')
          .concat(TOOLTIP_CSS_CONST4.TITLE_CLASS, '">\n              \u5B57\u6BB5\u8BF4\u660E\uFF1A')
          .concat(description, '\n            </div>\n          </div>\n        ');
      },
      x,
      y
    });
    this.tooltip.show();
  };
  AxisDescription2.prototype.destroy = function() {
    _super.prototype.destroy.call(this);
    this.tooltip && this.tooltip.destroy();
  };
  AxisDescription2.prototype.hide = function() {
    this.tooltip && this.tooltip.hide();
  };
  AxisDescription2.prototype.renderTooltip = function() {
    var _a;
    var view = this.context.view;
    var canvas = view.canvas;
    var region = { start: { x: 0, y: 0 }, end: { x: canvas.get('width'), y: canvas.get('height') } };
    var tooltip = new HtmlTooltip({
      parent: canvas.get('el').parentNode,
      region,
      visible: false,
      containerId: AXIS_DESCRIPTION_TOOLTIP,
      domStyles: __assign61(
        {},
        deepMix35(
          {},
          ((_a = {}),
          (_a[TOOLTIP_CSS_CONST4.CONTAINER_CLASS] = {
            'max-width': '50%',
            padding: '10px',
            'line-height': '15px',
            'font-size': '12px',
            color: 'rgba(0, 0, 0, .65)'
          }),
          (_a[TOOLTIP_CSS_CONST4.TITLE_CLASS] = { 'word-break': 'break-all', 'margin-bottom': '3px' }),
          _a)
        )
      )
    });
    tooltip.init();
    tooltip.setCapture(false);
    this.tooltip = tooltip;
  };
  return AxisDescription2;
})(base_default2);
var axis_description_default = AxisDescription; // esm-build-7d6c49f3da154b3eeacb72139909799fb84e4680-6f631153/node_modules/@antv/g2/esm/index.js
registerTheme('dark', createThemeByStyleSheet(antvDark));
registerEngine('canvas', CanvasEngine);
registerEngine('svg', SVGEngine);
registerGeometry('Polygon', polygon_default);
registerGeometry('Interval', interval_default);
registerGeometry('Schema', schema_default);
registerGeometry('Path', path_default);
registerGeometry('Point', point_default);
registerGeometry('Line', line_default);
registerGeometry('Area', area_default);
registerGeometry('Edge', edge_default);
registerGeometry('Heatmap', heatmap_default);
registerGeometry('Violin', violin_default);
registerGeometryLabel('base', base_default4);
registerGeometryLabel('interval', interval_default2);
registerGeometryLabel('pie', pie_default);
registerGeometryLabel('polar', polar_default);
registerGeometryLabelLayout('overlap', overlap);
registerGeometryLabelLayout('distribute', distribute);
registerGeometryLabelLayout('fixed-overlap', fixedOverlap);
registerGeometryLabelLayout('hide-overlap', hideOverlap);
registerGeometryLabelLayout('limit-in-shape', limitInShape);
registerGeometryLabelLayout('limit-in-canvas', limitInCanvas);
registerGeometryLabelLayout('limit-in-plot', limitInPlot);
registerGeometryLabelLayout('pie-outer', pieOuterLabelLayout);
registerGeometryLabelLayout('adjust-color', adjustColor);
registerGeometryLabelLayout('interval-adjust-position', intervalAdjustPosition);
registerGeometryLabelLayout('interval-hide-overlap', intervalHideOverlap);
registerGeometryLabelLayout('point-adjust-position', pointAdjustPosition);
registerGeometryLabelLayout('pie-spider', pieSpiderLabelLayout);
registerGeometryLabelLayout('path-adjust-position', pathAdjustPosition);
registerAnimation('fade-in', fadeIn);
registerAnimation('fade-out', fadeOut);
registerAnimation('grow-in-x', growInX);
registerAnimation('grow-in-xy', growInXY);
registerAnimation('grow-in-y', growInY);
registerAnimation('scale-in-x', scaleInX);
registerAnimation('scale-in-y', scaleInY);
registerAnimation('wave-in', waveIn);
registerAnimation('zoom-in', zoomIn);
registerAnimation('zoom-out', zoomOut);
registerAnimation('position-update', positionUpdate);
registerAnimation('sector-path-update', sectorPathUpdate);
registerAnimation('path-in', pathIn);
registerFacet('rect', rect_default);
registerFacet('mirror', mirror_default);
registerFacet('list', list_default);
registerFacet('matrix', matrix_default);
registerFacet('circle', circle_default);
registerFacet('tree', tree_default);
registerComponentController('axis', axis_default);
registerComponentController('legend', legend_default);
registerComponentController('tooltip', tooltip_default);
registerComponentController('annotation', annotation_default);
registerComponentController('slider', slider_default);
registerComponentController('scrollbar', scrollbar_default);
registerAction('tooltip', geometry_default);
registerAction('sibling-tooltip', sibling_default);
registerAction('ellipsis-text', ellipsis_text_default);
registerAction('element-active', active_default);
registerAction('element-single-active', single_active_default);
registerAction('element-range-active', range_active_default);
registerAction('element-highlight', highlight_default);
registerAction('element-highlight-by-x', highlight_by_x_default);
registerAction('element-highlight-by-color', highlight_by_color_default);
registerAction('element-single-highlight', single_highlight_default);
registerAction('element-range-highlight', range_highlight_default);
registerAction('element-sibling-highlight', range_highlight_default, { effectSiblings: true, effectByRecord: true });
registerAction('element-selected', selected_default);
registerAction('element-single-selected', single_selected_default);
registerAction('element-range-selected', range_selected_default);
registerAction('element-link-by-color', link_by_color_default);
registerAction('active-region', active_region_default);
registerAction('list-active', list_active_default);
registerAction('list-selected', list_selected_default);
registerAction('list-highlight', list_highlight_default);
registerAction('list-unchecked', list_unchecked_default);
registerAction('list-checked', list_checked_default);
registerAction('list-focus', list_focus_default);
registerAction('list-radio', list_radio_default);
registerAction('legend-item-highlight', list_highlight_default, { componentNames: ['legend'] });
registerAction('axis-label-highlight', list_highlight_default, { componentNames: ['axis'] });
registerAction('axis-description', axis_description_default);
registerAction('rect-mask', rect_default2);
registerAction('x-rect-mask', dim_rect_default, { dim: 'x' });
registerAction('y-rect-mask', dim_rect_default, { dim: 'y' });
registerAction('circle-mask', circle_default2);
registerAction('path-mask', path_default2);
registerAction('smooth-path-mask', smooth_path_default);
registerAction('cursor', cursor_default);
registerAction('data-filter', filter_default);
registerAction('brush', range_filter_default);
registerAction('brush-x', range_filter_default, { dims: ['x'] });
registerAction('brush-y', range_filter_default, { dims: ['y'] });
registerAction('sibling-filter', sibling_filter_default);
registerAction('sibling-x-filter', sibling_filter_default);
registerAction('sibling-y-filter', sibling_filter_default);
registerAction('element-filter', filter_default2);
registerAction('element-sibling-filter', sibling_filter_default2);
registerAction('element-sibling-filter-record', sibling_filter_default2, { byRecord: true });
registerAction('view-drag', drag_default);
registerAction('view-move', move_default);
registerAction('scale-translate', scale_translate_default);
registerAction('scale-zoom', scale_zoom_default);
registerAction('reset-button', button_default, { name: 'reset-button', text: 'reset' });
registerAction('mousewheel-scroll', mousewheel_scroll_default);
function isPointInView(context) {
  return context.isInPlot();
}
registerInteraction('tooltip', {
  start: [
    { trigger: 'plot:mousemove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } },
    { trigger: 'plot:touchmove', action: 'tooltip:show', throttle: { wait: 50, leading: true, trailing: false } }
  ],
  end: [
    { trigger: 'plot:mouseleave', action: 'tooltip:hide' },
    { trigger: 'plot:leave', action: 'tooltip:hide' },
    { trigger: 'plot:touchend', action: 'tooltip:hide' }
  ]
});
registerInteraction('ellipsis-text', {
  start: [
    {
      trigger: 'legend-item-name:mousemove',
      action: 'ellipsis-text:show',
      throttle: { wait: 50, leading: true, trailing: false }
    },
    {
      trigger: 'legend-item-name:touchstart',
      action: 'ellipsis-text:show',
      throttle: { wait: 50, leading: true, trailing: false }
    },
    {
      trigger: 'axis-label:mousemove',
      action: 'ellipsis-text:show',
      throttle: { wait: 50, leading: true, trailing: false }
    },
    {
      trigger: 'axis-label:touchstart',
      action: 'ellipsis-text:show',
      throttle: { wait: 50, leading: true, trailing: false }
    }
  ],
  end: [
    { trigger: 'legend-item-name:mouseleave', action: 'ellipsis-text:hide' },
    { trigger: 'legend-item-name:touchend', action: 'ellipsis-text:hide' },
    { trigger: 'axis-label:mouseleave', action: 'ellipsis-text:hide' },
    { trigger: 'axis-label:mouseout', action: 'ellipsis-text:hide' },
    { trigger: 'axis-label:touchend', action: 'ellipsis-text:hide' }
  ]
});
registerInteraction('element-active', {
  start: [{ trigger: 'element:mouseenter', action: 'element-active:active' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-active:reset' }]
});
registerInteraction('element-selected', { start: [{ trigger: 'element:click', action: 'element-selected:toggle' }] });
registerInteraction('element-highlight', {
  start: [{ trigger: 'element:mouseenter', action: 'element-highlight:highlight' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-highlight:reset' }]
});
registerInteraction('element-highlight-by-x', {
  start: [{ trigger: 'element:mouseenter', action: 'element-highlight-by-x:highlight' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-highlight-by-x:reset' }]
});
registerInteraction('element-highlight-by-color', {
  start: [{ trigger: 'element:mouseenter', action: 'element-highlight-by-color:highlight' }],
  end: [{ trigger: 'element:mouseleave', action: 'element-highlight-by-color:reset' }]
});
registerInteraction('legend-active', {
  start: [{ trigger: 'legend-item:mouseenter', action: ['list-active:active', 'element-active:active'] }],
  end: [{ trigger: 'legend-item:mouseleave', action: ['list-active:reset', 'element-active:reset'] }]
});
registerInteraction('legend-highlight', {
  start: [
    { trigger: 'legend-item:mouseenter', action: ['legend-item-highlight:highlight', 'element-highlight:highlight'] }
  ],
  end: [{ trigger: 'legend-item:mouseleave', action: ['legend-item-highlight:reset', 'element-highlight:reset'] }]
});
registerInteraction('axis-label-highlight', {
  start: [
    { trigger: 'axis-label:mouseenter', action: ['axis-label-highlight:highlight', 'element-highlight:highlight'] }
  ],
  end: [{ trigger: 'axis-label:mouseleave', action: ['axis-label-highlight:reset', 'element-highlight:reset'] }]
});
registerInteraction('element-list-highlight', {
  start: [{ trigger: 'element:mouseenter', action: ['list-highlight:highlight', 'element-highlight:highlight'] }],
  end: [{ trigger: 'element:mouseleave', action: ['list-highlight:reset', 'element-highlight:reset'] }]
});
registerInteraction('element-range-highlight', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'mask:mouseenter', action: 'cursor:move' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' },
    { trigger: 'mask:mouseleave', action: 'cursor:crosshair' }
  ],
  start: [
    {
      trigger: 'plot:mousedown',
      isEnable: function(context) {
        return !context.isInShape('mask');
      },
      action: ['rect-mask:start', 'rect-mask:show']
    },
    { trigger: 'mask:dragstart', action: ['rect-mask:moveStart'] }
  ],
  processing: [
    { trigger: 'plot:mousemove', action: ['rect-mask:resize'] },
    { trigger: 'mask:drag', action: ['rect-mask:move'] },
    { trigger: 'mask:change', action: ['element-range-highlight:highlight'] }
  ],
  end: [
    { trigger: 'plot:mouseup', action: ['rect-mask:end'] },
    { trigger: 'mask:dragend', action: ['rect-mask:moveEnd'] },
    {
      trigger: 'document:mouseup',
      isEnable: function(context) {
        return !context.isInPlot();
      },
      action: ['element-range-highlight:clear', 'rect-mask:end', 'rect-mask:hide']
    }
  ],
  rollback: [{ trigger: 'dblclick', action: ['element-range-highlight:clear', 'rect-mask:hide'] }]
});
registerInteraction('brush', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' }
  ],
  start: [
    { trigger: 'mousedown', isEnable: isPointInView, action: ['brush:start', 'rect-mask:start', 'rect-mask:show'] }
  ],
  processing: [{ trigger: 'mousemove', isEnable: isPointInView, action: ['rect-mask:resize'] }],
  end: [
    {
      trigger: 'mouseup',
      isEnable: isPointInView,
      action: ['brush:filter', 'brush:end', 'rect-mask:end', 'rect-mask:hide', 'reset-button:show']
    }
  ],
  rollback: [{ trigger: 'reset-button:click', action: ['brush:reset', 'reset-button:hide', 'cursor:crosshair'] }]
});
registerInteraction('brush-visible', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' }
  ],
  start: [{ trigger: 'plot:mousedown', action: ['rect-mask:start', 'rect-mask:show'] }],
  processing: [
    { trigger: 'plot:mousemove', action: ['rect-mask:resize'] },
    { trigger: 'mask:change', action: ['element-range-highlight:highlight'] }
  ],
  end: [
    {
      trigger: 'plot:mouseup',
      action: ['rect-mask:end', 'rect-mask:hide', 'element-filter:filter', 'element-range-highlight:clear']
    }
  ],
  rollback: [{ trigger: 'dblclick', action: ['element-filter:clear'] }]
});
registerInteraction('brush-x', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' }
  ],
  start: [
    {
      trigger: 'mousedown',
      isEnable: isPointInView,
      action: ['brush-x:start', 'x-rect-mask:start', 'x-rect-mask:show']
    }
  ],
  processing: [{ trigger: 'mousemove', isEnable: isPointInView, action: ['x-rect-mask:resize'] }],
  end: [
    {
      trigger: 'mouseup',
      isEnable: isPointInView,
      action: ['brush-x:filter', 'brush-x:end', 'x-rect-mask:end', 'x-rect-mask:hide']
    }
  ],
  rollback: [{ trigger: 'dblclick', action: ['brush-x:reset'] }]
});
registerInteraction('element-path-highlight', {
  showEnable: [
    { trigger: 'plot:mouseenter', action: 'cursor:crosshair' },
    { trigger: 'plot:mouseleave', action: 'cursor:default' }
  ],
  start: [
    { trigger: 'mousedown', isEnable: isPointInView, action: 'path-mask:start' },
    { trigger: 'mousedown', isEnable: isPointInView, action: 'path-mask:show' }
  ],
  processing: [{ trigger: 'mousemove', action: 'path-mask:addPoint' }],
  end: [{ trigger: 'mouseup', action: 'path-mask:end' }],
  rollback: [{ trigger: 'dblclick', action: 'path-mask:hide' }]
});
registerInteraction('element-single-selected', {
  start: [{ trigger: 'element:click', action: 'element-single-selected:toggle' }]
});
registerInteraction('legend-filter', {
  showEnable: [
    { trigger: 'legend-item:mouseenter', action: ['cursor:pointer', 'list-radio:show'] },
    { trigger: 'legend-item:mouseleave', action: ['cursor:default', 'list-radio:hide'] }
  ],
  start: [
    {
      trigger: 'legend-item:click',
      isEnable: function(context) {
        return !context.isInShape('legend-item-radio');
      },
      action: [
        'legend-item-highlight:reset',
        'element-highlight:reset',
        'list-unchecked:toggle',
        'data-filter:filter',
        'list-radio:show'
      ]
    },
    { trigger: 'legend-item-radio:mouseenter', action: ['list-radio:showTip'] },
    { trigger: 'legend-item-radio:mouseleave', action: ['list-radio:hideTip'] },
    { trigger: 'legend-item-radio:click', action: ['list-focus:toggle', 'data-filter:filter', 'list-radio:show'] }
  ]
});
registerInteraction('continuous-filter', { start: [{ trigger: 'legend:valuechanged', action: 'data-filter:filter' }] });
registerInteraction('continuous-visible-filter', {
  start: [{ trigger: 'legend:valuechanged', action: 'element-filter:filter' }]
});
registerInteraction('legend-visible-filter', {
  showEnable: [
    { trigger: 'legend-item:mouseenter', action: 'cursor:pointer' },
    { trigger: 'legend-item:mouseleave', action: 'cursor:default' }
  ],
  start: [
    {
      trigger: 'legend-item:click',
      action: [
        'legend-item-highlight:reset',
        'element-highlight:reset',
        'list-unchecked:toggle',
        'element-filter:filter'
      ]
    }
  ]
});
registerInteraction('active-region', {
  start: [{ trigger: 'plot:mousemove', action: 'active-region:show' }],
  end: [{ trigger: 'plot:mouseleave', action: 'active-region:hide' }]
});
registerInteraction('axis-description', {
  start: [{ trigger: 'axis-description:mousemove', action: 'axis-description:show' }],
  end: [{ trigger: 'axis-description:mouseleave', action: 'axis-description:hide' }]
});
function isWheelDown2(event) {
  event.gEvent.preventDefault();
  return event.gEvent.originalEvent.deltaY > 0;
}
registerInteraction('view-zoom', {
  start: [
    {
      trigger: 'plot:mousewheel',
      isEnable: function(context) {
        return isWheelDown2(context.event);
      },
      action: 'scale-zoom:zoomOut',
      throttle: { wait: 100, leading: true, trailing: false }
    },
    {
      trigger: 'plot:mousewheel',
      isEnable: function(context) {
        return !isWheelDown2(context.event);
      },
      action: 'scale-zoom:zoomIn',
      throttle: { wait: 100, leading: true, trailing: false }
    }
  ]
});
registerInteraction('sibling-tooltip', {
  start: [{ trigger: 'plot:mousemove', action: 'sibling-tooltip:show' }],
  end: [{ trigger: 'plot:mouseleave', action: 'sibling-tooltip:hide' }]
});
registerInteraction('plot-mousewheel-scroll', {
  start: [{ trigger: 'plot:mousewheel', action: 'mousewheel-scroll:scroll' }]
});
export {
  base_default2 as Action,
  EVENTS2 as BRUSH_FILTER_EVENTS,
  chart_default as Chart,
  Controller as ComponentController,
  Coordinate,
  DIRECTION,
  EVENTS as ELEMENT_RANGE_HIGHLIGHT_EVENTS,
  element_default as Element,
  event_default as Event,
  Facet,
  base_default3 as Geometry,
  base_default4 as GeometryLabel,
  interaction_default as Interaction,
  base_default2 as InteractionAction,
  LAYER,
  Scale,
  tooltip_default as TooltipController,
  Util,
  VERSION,
  VIEW_LIFE_CIRCLE,
  view_default as View,
  getActionClass,
  getAnimation,
  getEngine,
  getFacet,
  getGeometryLabel,
  getGeometryLabelLayout,
  getInteraction,
  getShapeFactory,
  getTheme,
  registerAction,
  registerAnimation,
  registerComponentController,
  registerEngine,
  registerFacet,
  registerGeometry,
  registerGeometryLabel,
  registerGeometryLabelLayout,
  registerInteraction,
  registerShape,
  registerShapeFactory,
  registerTheme
};
