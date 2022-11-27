/* esm.sh - esbuild bundle(@antv/g-canvas@0.5.12) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/index.js
var shape_exports = {};
__export(shape_exports, {
  Base: () => base_default,
  Circle: () => circle_default,
  Ellipse: () => ellipse_default,
  Image: () => image_default,
  Line: () => line_default,
  Marker: () => marker_default,
  Path: () => path_default,
  Polygon: () => polygon_default,
  Polyline: () => polyline_default,
  Rect: () => rect_default,
  Text: () => text_default
});

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/base.js
import { __assign as __assign2, __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractShape } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/util.js
import {
  isNil,
  isString,
  isFunction,
  isArray,
  each,
  toRadian,
  mod,
  isNumberEqual,
  requestAnimationFrame,
  clearAnimationFrame
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getPixelRatio() {
  return window ? window.devicePixelRatio : 1;
}
function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}
function inBox(minX, minY, width, height, x, y) {
  return x >= minX && x <= minX + width && y >= minY && y <= minY + height;
}
function intersectRect(box1, box2) {
  return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
function mergeRegion(region1, region2) {
  if (!region1 || !region2) {
    return region1 || region2;
  }
  return {
    minX: Math.min(region1.minX, region2.minX),
    minY: Math.min(region1.minY, region2.minY),
    maxX: Math.max(region1.maxX, region2.maxX),
    maxY: Math.max(region1.maxY, region2.maxY)
  };
}
function isSamePoint(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/draw.js
import { each as each2, isArray as isArray2, max, min } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/parse.js
var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
function addStop(steps, gradient) {
  var arr = steps.match(regexColorStop);
  each(arr, function(item) {
    var itemArr = item.split(':');
    gradient.addColorStop(itemArr[0], itemArr[1]);
  });
}
function parseLineGradient(context, element, gradientStr) {
  var arr = regexLG.exec(gradientStr);
  var angle = (parseFloat(arr[1]) % 360) * (Math.PI / 180);
  var steps = arr[2];
  var box = element.getBBox();
  var start;
  var end;
  if (angle >= 0 && angle < (1 / 2) * Math.PI) {
    start = {
      x: box.minX,
      y: box.minY
    };
    end = {
      x: box.maxX,
      y: box.maxY
    };
  } else if ((1 / 2) * Math.PI <= angle && angle < Math.PI) {
    start = {
      x: box.maxX,
      y: box.minY
    };
    end = {
      x: box.minX,
      y: box.maxY
    };
  } else if (Math.PI <= angle && angle < (3 / 2) * Math.PI) {
    start = {
      x: box.maxX,
      y: box.maxY
    };
    end = {
      x: box.minX,
      y: box.minY
    };
  } else {
    start = {
      x: box.minX,
      y: box.maxY
    };
    end = {
      x: box.maxX,
      y: box.minY
    };
  }
  var tanTheta = Math.tan(angle);
  var tanTheta2 = tanTheta * tanTheta;
  var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
  var y = (tanTheta * (end.x - start.x + tanTheta * (end.y - start.y))) / (tanTheta2 + 1) + start.y;
  var gradient = context.createLinearGradient(start.x, start.y, x, y);
  addStop(steps, gradient);
  return gradient;
}
function parseRadialGradient(context, element, gradientStr) {
  var arr = regexRG.exec(gradientStr);
  var fx = parseFloat(arr[1]);
  var fy = parseFloat(arr[2]);
  var fr = parseFloat(arr[3]);
  var steps = arr[4];
  if (fr === 0) {
    var colors = steps.match(regexColorStop);
    return colors[colors.length - 1].split(':')[1];
  }
  var box = element.getBBox();
  var width = box.maxX - box.minX;
  var height = box.maxY - box.minY;
  var r = Math.sqrt(width * width + height * height) / 2;
  var gradient = context.createRadialGradient(
    box.minX + width * fx,
    box.minY + height * fy,
    0,
    box.minX + width / 2,
    box.minY + height / 2,
    fr * r
  );
  addStop(steps, gradient);
  return gradient;
}
function parsePattern(context, element, patternStr) {
  if (element.get('patternSource') && element.get('patternSource') === patternStr) {
    return element.get('pattern');
  }
  var pattern;
  var img;
  var arr = regexPR.exec(patternStr);
  var repeat = arr[1];
  var source = arr[2];
  function onload() {
    pattern = context.createPattern(img, repeat);
    element.set('pattern', pattern);
    element.set('patternSource', patternStr);
  }
  switch (repeat) {
    case 'a':
      repeat = 'repeat';
      break;
    case 'x':
      repeat = 'repeat-x';
      break;
    case 'y':
      repeat = 'repeat-y';
      break;
    case 'n':
      repeat = 'no-repeat';
      break;
    default:
      repeat = 'no-repeat';
  }
  img = new Image();
  if (!source.match(/^data:/i)) {
    img.crossOrigin = 'Anonymous';
  }
  img.src = source;
  if (img.complete) {
    onload();
  } else {
    img.onload = onload;
    img.src = img.src;
  }
  return pattern;
}
function parseStyle(context, element, color) {
  var bbox = element.getBBox();
  if (isNaN(bbox.x) || isNaN(bbox.y) || isNaN(bbox.width) || isNaN(bbox.height)) {
    return color;
  }
  if (isString(color)) {
    if (color[1] === '(' || color[2] === '(') {
      if (color[0] === 'l') {
        return parseLineGradient(context, element, color);
      }
      if (color[0] === 'r') {
        return parseRadialGradient(context, element, color);
      }
      if (color[0] === 'p') {
        return parsePattern(context, element, color);
      }
    }
    return color;
  }
  if (color instanceof CanvasPattern) {
    return color;
  }
}
function parseRadius(radius) {
  var r1 = 0;
  var r2 = 0;
  var r3 = 0;
  var r4 = 0;
  if (isArray(radius)) {
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
  return [r1, r2, r3, r4];
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/arc-params.js
function vMag(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
function vRatio(u, v) {
  return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}
function vAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
function getArcParams(startPoint, params) {
  var rx = params[1];
  var ry = params[2];
  var xRotation = mod(toRadian(params[3]), Math.PI * 2);
  var arcFlag = params[4];
  var sweepFlag = params[5];
  var x1 = startPoint[0];
  var y1 = startPoint[1];
  var x2 = params[6];
  var y2 = params[7];
  var xp = (Math.cos(xRotation) * (x1 - x2)) / 2 + (Math.sin(xRotation) * (y1 - y2)) / 2;
  var yp = (-1 * Math.sin(xRotation) * (x1 - x2)) / 2 + (Math.cos(xRotation) * (y1 - y2)) / 2;
  var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
  var f = diff ? Math.sqrt((rx * rx * (ry * ry) - diff) / diff) : 1;
  if (arcFlag === sweepFlag) {
    f *= -1;
  }
  if (isNaN(f)) {
    f = 0;
  }
  var cxp = ry ? (f * rx * yp) / ry : 0;
  var cyp = rx ? (f * -ry * xp) / rx : 0;
  var cx = (x1 + x2) / 2 + Math.cos(xRotation) * cxp - Math.sin(xRotation) * cyp;
  var cy = (y1 + y2) / 2 + Math.sin(xRotation) * cxp + Math.cos(xRotation) * cyp;
  var u = [(xp - cxp) / rx, (yp - cyp) / ry];
  var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
  var theta = vAngle([1, 0], u);
  var dTheta = vAngle(u, v);
  if (vRatio(u, v) <= -1) {
    dTheta = Math.PI;
  }
  if (vRatio(u, v) >= 1) {
    dTheta = 0;
  }
  if (sweepFlag === 0 && dTheta > 0) {
    dTheta = dTheta - 2 * Math.PI;
  }
  if (sweepFlag === 1 && dTheta < 0) {
    dTheta = dTheta + 2 * Math.PI;
  }
  return {
    cx,
    cy,
    rx: isSamePoint(startPoint, [x2, y2]) ? 0 : rx,
    ry: isSamePoint(startPoint, [x2, y2]) ? 0 : ry,
    startAngle: theta,
    endAngle: theta + dTheta,
    xRotation,
    arcFlag,
    sweepFlag
  };
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/arrow.js
import { __assign, __rest } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var sin = Math.sin;
var cos = Math.cos;
var atan2 = Math.atan2;
var PI = Math.PI;
function _addDefaultArrow(shape, attrs, x1, y1, x2, y2, isStart) {
  var stroke = attrs.stroke,
    lineWidth = attrs.lineWidth;
  var x = x1 - x2;
  var y = y1 - y2;
  var rad = atan2(y, x);
  var arrowShape = new path_default({
    type: 'path',
    canvas: shape.get('canvas'),
    isArrowShape: true,
    attrs: {
      path: 'M' + 10 * cos(PI / 6) + ',' + 10 * sin(PI / 6) + ' L0,0 L' + 10 * cos(PI / 6) + ',-' + 10 * sin(PI / 6),
      stroke,
      lineWidth
    }
  });
  arrowShape.translate(x2, y2);
  arrowShape.rotateAtPoint(x2, y2, rad);
  shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
function _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, isStart) {
  var startArrow = attrs.startArrow,
    endArrow = attrs.endArrow,
    stroke = attrs.stroke,
    lineWidth = attrs.lineWidth;
  var arrowAttrs = isStart ? startArrow : endArrow;
  var d = arrowAttrs.d,
    arrowFill = arrowAttrs.fill,
    arrowStroke = arrowAttrs.stroke,
    arrowLineWidth = arrowAttrs.lineWidth,
    restAttrs = __rest(arrowAttrs, ['d', 'fill', 'stroke', 'lineWidth']);
  var x = x1 - x2;
  var y = y1 - y2;
  var rad = atan2(y, x);
  if (d) {
    x2 = x2 - cos(rad) * d;
    y2 = y2 - sin(rad) * d;
  }
  var arrowShape = new path_default({
    type: 'path',
    canvas: shape.get('canvas'),
    isArrowShape: true,
    attrs: __assign(__assign({}, restAttrs), {
      stroke: arrowStroke || stroke,
      lineWidth: arrowLineWidth || lineWidth,
      fill: arrowFill
    })
  });
  arrowShape.translate(x2, y2);
  arrowShape.rotateAtPoint(x2, y2, rad);
  shape.set(isStart ? 'startArrowShape' : 'endArrowShape', arrowShape);
}
function getShortenOffset(x1, y1, x2, y2, d) {
  var rad = atan2(y2 - y1, x2 - x1);
  return {
    dx: cos(rad) * d,
    dy: sin(rad) * d
  };
}
function addStartArrow(shape, attrs, x1, y1, x2, y2) {
  if (typeof attrs.startArrow === 'object') {
    _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, true);
  } else if (attrs.startArrow) {
    _addDefaultArrow(shape, attrs, x1, y1, x2, y2, true);
  } else {
    shape.set('startArrowShape', null);
  }
}
function addEndArrow(shape, attrs, x1, y1, x2, y2) {
  if (typeof attrs.endArrow === 'object') {
    _addCustomizedArrow(shape, attrs, x1, y1, x2, y2, false);
  } else if (attrs.endArrow) {
    _addDefaultArrow(shape, attrs, x1, y1, x2, y2, false);
  } else {
    shape.set('startArrowShape', null);
  }
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/draw.js
var SHAPE_ATTRS_MAP = {
  fill: 'fillStyle',
  stroke: 'strokeStyle',
  opacity: 'globalAlpha'
};
function applyAttrsToContext(context, element) {
  var attrs = element.attr();
  for (var k in attrs) {
    var v = attrs[k];
    var name_1 = SHAPE_ATTRS_MAP[k] ? SHAPE_ATTRS_MAP[k] : k;
    if (name_1 === 'matrix' && v) {
      context.transform(v[0], v[1], v[3], v[4], v[6], v[7]);
    } else if (name_1 === 'lineDash' && context.setLineDash) {
      isArray2(v) && context.setLineDash(v);
    } else {
      if (name_1 === 'strokeStyle' || name_1 === 'fillStyle') {
        v = parseStyle(context, element, v);
      } else if (name_1 === 'globalAlpha') {
        v = v * context.globalAlpha;
      }
      context[name_1] = v;
    }
  }
}
function drawChildren(context, children, region) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.cfg.visible) {
      child.draw(context, region);
    } else {
      child.skipDraw();
    }
  }
}
function checkRefresh(canvas, children, region) {
  var refreshElements = canvas.get('refreshElements');
  each2(refreshElements, function(el) {
    if (el !== canvas) {
      var parent_1 = el.cfg.parent;
      while (parent_1 && parent_1 !== canvas && !parent_1.cfg.refresh) {
        parent_1.cfg.refresh = true;
        parent_1 = parent_1.cfg.parent;
      }
    }
  });
  if (refreshElements[0] === canvas) {
    setChildrenRefresh(children, region);
  } else {
    checkChildrenRefresh(children, region);
  }
}
function checkChildrenRefresh(children, region) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    if (child.cfg.visible) {
      if (child.cfg.hasChanged) {
        child.cfg.refresh = true;
        if (child.isGroup()) {
          setChildrenRefresh(child.cfg.children, region);
        }
      } else if (child.cfg.refresh) {
        if (child.isGroup()) {
          checkChildrenRefresh(child.cfg.children, region);
        }
      } else {
        var refresh = checkElementRefresh(child, region);
        child.cfg.refresh = refresh;
        if (refresh && child.isGroup()) {
          checkChildrenRefresh(child.cfg.children, region);
        }
      }
    }
  }
}
function clearChanged(elements) {
  for (var i = 0; i < elements.length; i++) {
    var el = elements[i];
    el.cfg.hasChanged = false;
    if (el.isGroup() && !el.destroyed) {
      clearChanged(el.cfg.children);
    }
  }
}
function setChildrenRefresh(children, region) {
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    child.cfg.refresh = true;
    if (child.isGroup()) {
      setChildrenRefresh(child.get('children'), region);
    }
  }
}
function checkElementRefresh(shape, region) {
  var bbox = shape.cfg.cacheCanvasBBox;
  var isAllow = shape.cfg.isInView && bbox && intersectRect(bbox, region);
  return isAllow;
}
function drawPath(shape, context, attrs, arcParamsCache) {
  var path = attrs.path,
    startArrow = attrs.startArrow,
    endArrow = attrs.endArrow;
  if (!path) {
    return;
  }
  var currentPoint = [0, 0];
  var startMovePoint = [0, 0];
  var distance2 = {
    dx: 0,
    dy: 0
  };
  context.beginPath();
  for (var i = 0; i < path.length; i++) {
    var params = path[i];
    var command = params[0];
    if (i === 0 && startArrow && startArrow.d) {
      var tangent = shape.getStartTangent();
      distance2 = getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], startArrow.d);
    } else if (i === path.length - 2 && path[i + 1][0] === 'Z' && endArrow && endArrow.d) {
      var lastPath = path[i + 1];
      if (lastPath[0] === 'Z') {
        var tangent = shape.getEndTangent();
        distance2 = getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
      }
    } else if (i === path.length - 1 && endArrow && endArrow.d) {
      if (path[0] !== 'Z') {
        var tangent = shape.getEndTangent();
        distance2 = getShortenOffset(tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1], endArrow.d);
      }
    }
    var dx = distance2.dx,
      dy = distance2.dy;
    switch (command) {
      case 'M':
        context.moveTo(params[1] - dx, params[2] - dy);
        startMovePoint = [params[1], params[2]];
        break;
      case 'L':
        context.lineTo(params[1] - dx, params[2] - dy);
        break;
      case 'Q':
        context.quadraticCurveTo(params[1], params[2], params[3] - dx, params[4] - dy);
        break;
      case 'C':
        context.bezierCurveTo(params[1], params[2], params[3], params[4], params[5] - dx, params[6] - dy);
        break;
      case 'A': {
        var arcParams = void 0;
        if (arcParamsCache) {
          arcParams = arcParamsCache[i];
          if (!arcParams) {
            arcParams = getArcParams(currentPoint, params);
            arcParamsCache[i] = arcParams;
          }
        } else {
          arcParams = getArcParams(currentPoint, params);
        }
        var cx = arcParams.cx,
          cy = arcParams.cy,
          rx = arcParams.rx,
          ry = arcParams.ry,
          startAngle = arcParams.startAngle,
          endAngle = arcParams.endAngle,
          xRotation = arcParams.xRotation,
          sweepFlag = arcParams.sweepFlag;
        if (context.ellipse) {
          context.ellipse(cx, cy, rx, ry, xRotation, startAngle, endAngle, 1 - sweepFlag);
        } else {
          var r = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;
          context.translate(cx, cy);
          context.rotate(xRotation);
          context.scale(scaleX, scaleY);
          context.arc(0, 0, r, startAngle, endAngle, 1 - sweepFlag);
          context.scale(1 / scaleX, 1 / scaleY);
          context.rotate(-xRotation);
          context.translate(-cx, -cy);
        }
        break;
      }
      case 'Z':
        context.closePath();
        break;
      default:
        break;
    }
    if (command === 'Z') {
      currentPoint = startMovePoint;
    } else {
      var len = params.length;
      currentPoint = [params[len - 2], params[len - 1]];
    }
  }
}
function refreshElement(element, changeType) {
  var canvas = element.get('canvas');
  if (canvas) {
    if (changeType === 'remove') {
      element._cacheCanvasBBox = element.get('cacheCanvasBBox');
    }
    if (!element.get('hasChanged')) {
      element.set('hasChanged', true);
      if (!(element.cfg.parent && element.cfg.parent.get('hasChanged'))) {
        canvas.refreshElement(element, changeType, canvas);
        if (canvas.get('autoDraw')) {
          canvas.draw();
        }
      }
    }
  }
}
function getRefreshRegion(element) {
  var region;
  if (!element.destroyed) {
    var cacheBox = element.get('cacheCanvasBBox');
    var validCache = cacheBox && !!(cacheBox.width && cacheBox.height);
    var bbox = element.getCanvasBBox();
    var validBBox = bbox && !!(bbox.width && bbox.height);
    if (validCache && validBBox) {
      region = mergeRegion(cacheBox, bbox);
    } else if (validCache) {
      region = cacheBox;
    } else if (validBBox) {
      region = bbox;
    }
  } else {
    region = element['_cacheCanvasBBox'];
  }
  return region;
}
function getMergedRegion(elements) {
  if (!elements.length) {
    return null;
  }
  var minXArr = [];
  var minYArr = [];
  var maxXArr = [];
  var maxYArr = [];
  each2(elements, function(el) {
    var region = getRefreshRegion(el);
    if (region) {
      minXArr.push(region.minX);
      minYArr.push(region.minY);
      maxXArr.push(region.maxX);
      maxYArr.push(region.maxY);
    }
  });
  return {
    minX: min(minXArr),
    minY: min(minYArr),
    maxX: max(maxXArr),
    maxY: max(maxYArr)
  };
}
function mergeView(region, viewRegion) {
  if (!region || !viewRegion) {
    return null;
  }
  if (!intersectRect(region, viewRegion)) {
    return null;
  }
  return {
    minX: Math.max(region.minX, viewRegion.minX),
    minY: Math.max(region.minY, viewRegion.minY),
    maxX: Math.min(region.maxX, viewRegion.maxX),
    maxY: Math.min(region.maxY, viewRegion.maxY)
  };
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/base.js
import { getBBoxMethod } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/group.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractGroup } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
import { each as each3, max as max2, min as min2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Group = (function(_super) {
  __extends(Group2, _super);
  function Group2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Group2.prototype.onCanvasChange = function(changeType) {
    refreshElement(this, changeType);
  };
  Group2.prototype.getShapeBase = function() {
    return shape_exports;
  };
  Group2.prototype.getGroupBase = function() {
    return Group2;
  };
  Group2.prototype._applyClip = function(context, clip) {
    if (clip) {
      context.save();
      applyAttrsToContext(context, clip);
      clip.createPath(context);
      context.restore();
      context.clip();
      clip._afterDraw();
    }
  };
  Group2.prototype.cacheCanvasBBox = function() {
    var children = this.cfg.children;
    var xArr = [];
    var yArr = [];
    each3(children, function(child) {
      var bbox2 = child.cfg.cacheCanvasBBox;
      if (bbox2 && child.cfg.isInView) {
        xArr.push(bbox2.minX, bbox2.maxX);
        yArr.push(bbox2.minY, bbox2.maxY);
      }
    });
    var bbox = null;
    if (xArr.length) {
      var minX = min2(xArr);
      var maxX = max2(xArr);
      var minY = min2(yArr);
      var maxY = max2(yArr);
      bbox = {
        minX,
        minY,
        x: minX,
        y: minY,
        maxX,
        maxY,
        width: maxX - minX,
        height: maxY - minY
      };
      var canvas = this.cfg.canvas;
      if (canvas) {
        var viewRange = canvas.getViewRange();
        this.set('isInView', intersectRect(bbox, viewRange));
      }
    } else {
      this.set('isInView', false);
    }
    this.set('cacheCanvasBBox', bbox);
  };
  Group2.prototype.draw = function(context, region) {
    var children = this.cfg.children;
    var allowDraw = region ? this.cfg.refresh : true;
    if (children.length && allowDraw) {
      context.save();
      applyAttrsToContext(context, this);
      this._applyClip(context, this.getClip());
      drawChildren(context, children, region);
      context.restore();
      this.cacheCanvasBBox();
    }
    this.cfg.refresh = null;
    this.set('hasChanged', false);
  };
  Group2.prototype.skipDraw = function() {
    this.set('cacheCanvasBBox', null);
    this.set('hasChanged', false);
  };
  return Group2;
})(AbstractGroup);
var group_default = Group;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/base.js
var ShapeBase = (function(_super) {
  __extends2(ShapeBase2, _super);
  function ShapeBase2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ShapeBase2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign2(__assign2({}, attrs), {
      lineWidth: 1,
      lineAppendWidth: 0,
      strokeOpacity: 1,
      fillOpacity: 1
    });
  };
  ShapeBase2.prototype.getShapeBase = function() {
    return shape_exports;
  };
  ShapeBase2.prototype.getGroupBase = function() {
    return group_default;
  };
  ShapeBase2.prototype.onCanvasChange = function(changeType) {
    refreshElement(this, changeType);
  };
  ShapeBase2.prototype.calculateBBox = function() {
    var type = this.get('type');
    var lineWidth = this.getHitLineWidth();
    var bboxMethod = getBBoxMethod(type);
    var box = bboxMethod(this);
    var halfLineWidth = lineWidth / 2;
    var minX = box.x - halfLineWidth;
    var minY = box.y - halfLineWidth;
    var maxX = box.x + box.width + halfLineWidth;
    var maxY = box.y + box.height + halfLineWidth;
    return {
      x: minX,
      minX,
      y: minY,
      minY,
      width: box.width + lineWidth,
      height: box.height + lineWidth,
      maxX,
      maxY
    };
  };
  ShapeBase2.prototype.isFill = function() {
    return !!this.attrs['fill'] || this.isClipShape();
  };
  ShapeBase2.prototype.isStroke = function() {
    return !!this.attrs['stroke'];
  };
  ShapeBase2.prototype._applyClip = function(context, clip) {
    if (clip) {
      context.save();
      applyAttrsToContext(context, clip);
      clip.createPath(context);
      context.restore();
      context.clip();
      clip._afterDraw();
    }
  };
  ShapeBase2.prototype.draw = function(context, region) {
    var clip = this.cfg.clipShape;
    if (region) {
      if (this.cfg.refresh === false) {
        this.set('hasChanged', false);
        return;
      }
      var bbox = this.getCanvasBBox();
      if (!intersectRect(region, bbox)) {
        this.set('hasChanged', false);
        if (this.cfg.isInView) {
          this._afterDraw();
        }
        return;
      }
    }
    context.save();
    applyAttrsToContext(context, this);
    this._applyClip(context, clip);
    this.drawPath(context);
    context.restore();
    this._afterDraw();
  };
  ShapeBase2.prototype.getCanvasViewBox = function() {
    var canvas = this.cfg.canvas;
    if (canvas) {
      return canvas.getViewRange();
    }
    return null;
  };
  ShapeBase2.prototype.cacheCanvasBBox = function() {
    var canvasBBox = this.getCanvasViewBox();
    if (canvasBBox) {
      var bbox = this.getCanvasBBox();
      var isInView = intersectRect(bbox, canvasBBox);
      this.set('isInView', isInView);
      if (isInView) {
        this.set('cacheCanvasBBox', bbox);
      } else {
        this.set('cacheCanvasBBox', null);
      }
    }
  };
  ShapeBase2.prototype._afterDraw = function() {
    this.cacheCanvasBBox();
    this.set('hasChanged', false);
    this.set('refresh', null);
  };
  ShapeBase2.prototype.skipDraw = function() {
    this.set('cacheCanvasBBox', null);
    this.set('isInView', null);
    this.set('hasChanged', false);
  };
  ShapeBase2.prototype.drawPath = function(context) {
    this.createPath(context);
    this.strokeAndFill(context);
    this.afterDrawPath(context);
  };
  ShapeBase2.prototype.fill = function(context) {
    context.fill();
  };
  ShapeBase2.prototype.stroke = function(context) {
    context.stroke();
  };
  ShapeBase2.prototype.strokeAndFill = function(context) {
    var _a = this.attrs,
      lineWidth = _a.lineWidth,
      opacity = _a.opacity,
      strokeOpacity = _a.strokeOpacity,
      fillOpacity = _a.fillOpacity;
    if (this.isFill()) {
      if (!isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        this.fill(context);
        context.globalAlpha = opacity;
      } else {
        this.fill(context);
      }
    }
    if (this.isStroke()) {
      if (lineWidth > 0) {
        if (!isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = strokeOpacity;
        }
        this.stroke(context);
      }
    }
    this.afterDrawPath(context);
  };
  ShapeBase2.prototype.createPath = function(context) {};
  ShapeBase2.prototype.afterDrawPath = function(context) {};
  ShapeBase2.prototype.isInShape = function(refX, refY) {
    var isStroke = this.isStroke();
    var isFill = this.isFill();
    var lineWidth = this.getHitLineWidth();
    return this.isInStrokeOrPath(refX, refY, isStroke, isFill, lineWidth);
  };
  ShapeBase2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    return false;
  };
  ShapeBase2.prototype.getHitLineWidth = function() {
    if (!this.isStroke()) {
      return 0;
    }
    var attrs = this.attrs;
    return attrs['lineWidth'] + attrs['lineAppendWidth'];
  };
  return ShapeBase2;
})(AbstractShape);
var base_default = ShapeBase;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/circle.js
import { __assign as __assign3, __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Circle = (function(_super) {
  __extends3(Circle2, _super);
  function Circle2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Circle2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign3(__assign3({}, attrs), {
      x: 0,
      y: 0,
      r: 0
    });
  };
  Circle2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    var attrs = this.attr();
    var cx = attrs.x;
    var cy = attrs.y;
    var r = attrs.r;
    var halfLineWidth = lineWidth / 2;
    var absDistance = distance(cx, cy, x, y);
    if (isFill && isStroke) {
      return absDistance <= r + halfLineWidth;
    }
    if (isFill) {
      return absDistance <= r;
    }
    if (isStroke) {
      return absDistance >= r - halfLineWidth && absDistance <= r + halfLineWidth;
    }
    return false;
  };
  Circle2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var cx = attrs.x;
    var cy = attrs.y;
    var r = attrs.r;
    context.beginPath();
    context.arc(cx, cy, r, 0, Math.PI * 2, false);
    context.closePath();
  };
  return Circle2;
})(base_default);
var circle_default = Circle;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/ellipse.js
import { __assign as __assign4, __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function ellipseDistance(squareX, squareY, rx, ry) {
  return squareX / (rx * rx) + squareY / (ry * ry);
}
var Ellipse = (function(_super) {
  __extends4(Ellipse2, _super);
  function Ellipse2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Ellipse2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign4(__assign4({}, attrs), {
      x: 0,
      y: 0,
      rx: 0,
      ry: 0
    });
  };
  Ellipse2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    var attrs = this.attr();
    var halfLineWith = lineWidth / 2;
    var cx = attrs.x;
    var cy = attrs.y;
    var rx = attrs.rx,
      ry = attrs.ry;
    var squareX = (x - cx) * (x - cx);
    var squareY = (y - cy) * (y - cy);
    if (isFill && isStroke) {
      return ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1;
    }
    if (isFill) {
      return ellipseDistance(squareX, squareY, rx, ry) <= 1;
    }
    if (isStroke) {
      return (
        ellipseDistance(squareX, squareY, rx - halfLineWith, ry - halfLineWith) >= 1 &&
        ellipseDistance(squareX, squareY, rx + halfLineWith, ry + halfLineWith) <= 1
      );
    }
    return false;
  };
  Ellipse2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var cx = attrs.x;
    var cy = attrs.y;
    var rx = attrs.rx;
    var ry = attrs.ry;
    context.beginPath();
    if (context.ellipse) {
      context.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2, false);
    } else {
      var r = rx > ry ? rx : ry;
      var scaleX = rx > ry ? 1 : rx / ry;
      var scaleY = rx > ry ? ry / rx : 1;
      context.save();
      context.translate(cx, cy);
      context.scale(scaleX, scaleY);
      context.arc(0, 0, r, 0, Math.PI * 2);
      context.restore();
      context.closePath();
    }
  };
  return Ellipse2;
})(base_default);
var ellipse_default = Ellipse;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/image.js
import { __assign as __assign5, __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function isCanvas(dom) {
  return dom instanceof HTMLElement && isString(dom.nodeName) && dom.nodeName.toUpperCase() === 'CANVAS';
}
var ImageShape = (function(_super) {
  __extends5(ImageShape2, _super);
  function ImageShape2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ImageShape2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign5(__assign5({}, attrs), {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
  };
  ImageShape2.prototype.initAttrs = function(attrs) {
    this._setImage(attrs.img);
  };
  ImageShape2.prototype.isStroke = function() {
    return false;
  };
  ImageShape2.prototype.isOnlyHitBox = function() {
    return true;
  };
  ImageShape2.prototype._afterLoading = function() {
    if (this.get('toDraw') === true) {
      var canvas = this.get('canvas');
      if (canvas) {
        canvas.draw();
      } else {
        this.createPath(this.get('context'));
      }
    }
  };
  ImageShape2.prototype._setImage = function(img) {
    var _this = this;
    var attrs = this.attrs;
    if (isString(img)) {
      var image_1 = new Image();
      image_1.onload = function() {
        if (_this.destroyed) {
          return false;
        }
        _this.attr('img', image_1);
        _this.set('loading', false);
        _this._afterLoading();
        var callback = _this.get('callback');
        if (callback) {
          callback.call(_this);
        }
      };
      image_1.crossOrigin = 'Anonymous';
      image_1.src = img;
      this.set('loading', true);
    } else if (img instanceof Image) {
      if (!attrs.width) {
        attrs.width = img.width;
      }
      if (!attrs.height) {
        attrs.height = img.height;
      }
    } else if (isCanvas(img)) {
      if (!attrs.width) {
        attrs.width = Number(img.getAttribute('width'));
      }
      if (!attrs.height) {
        attrs.height, Number(img.getAttribute('height'));
      }
    }
  };
  ImageShape2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (name === 'img') {
      this._setImage(value);
    }
  };
  ImageShape2.prototype.createPath = function(context) {
    if (this.get('loading')) {
      this.set('toDraw', true);
      this.set('context', context);
      return;
    }
    var attrs = this.attr();
    var x = attrs.x,
      y = attrs.y,
      width = attrs.width,
      height = attrs.height,
      sx = attrs.sx,
      sy = attrs.sy,
      swidth = attrs.swidth,
      sheight = attrs.sheight;
    var img = attrs.img;
    if (img instanceof Image || isCanvas(img)) {
      if (!isNil(sx) && !isNil(sy) && !isNil(swidth) && !isNil(sheight)) {
        context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
      } else {
        context.drawImage(img, x, y, width, height);
      }
    }
  };
  return ImageShape2;
})(base_default);
var image_default = ImageShape;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/line.js
import { __assign as __assign6, __extends as __extends6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Line as LineUtil2 } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-stroke/line.js
import { Line as LineUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
function inLine(x1, y1, x2, y2, lineWidth, x, y) {
  var minX = Math.min(x1, x2);
  var maxX = Math.max(x1, x2);
  var minY = Math.min(y1, y2);
  var maxY = Math.max(y1, y2);
  var halfWidth = lineWidth / 2;
  if (!(x >= minX - halfWidth && x <= maxX + halfWidth && y >= minY - halfWidth && y <= maxY + halfWidth)) {
    return false;
  }
  return LineUtil.pointToLine(x1, y1, x2, y2, x, y) <= lineWidth / 2;
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/line.js
var Line = (function(_super) {
  __extends6(Line2, _super);
  function Line2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Line2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign6(__assign6({}, attrs), {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      startArrow: false,
      endArrow: false
    });
  };
  Line2.prototype.initAttrs = function(attrs) {
    this.setArrow();
  };
  Line2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    this.setArrow();
  };
  Line2.prototype.setArrow = function() {
    var attrs = this.attr();
    var x1 = attrs.x1,
      y1 = attrs.y1,
      x2 = attrs.x2,
      y2 = attrs.y2,
      startArrow = attrs.startArrow,
      endArrow = attrs.endArrow;
    if (startArrow) {
      addStartArrow(this, attrs, x2, y2, x1, y1);
    }
    if (endArrow) {
      addEndArrow(this, attrs, x1, y1, x2, y2);
    }
  };
  Line2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    if (!isStroke || !lineWidth) {
      return false;
    }
    var _a = this.attr(),
      x1 = _a.x1,
      y1 = _a.y1,
      x2 = _a.x2,
      y2 = _a.y2;
    return inLine(x1, y1, x2, y2, lineWidth, x, y);
  };
  Line2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var x1 = attrs.x1,
      y1 = attrs.y1,
      x2 = attrs.x2,
      y2 = attrs.y2,
      startArrow = attrs.startArrow,
      endArrow = attrs.endArrow;
    var startArrowDistance = {
      dx: 0,
      dy: 0
    };
    var endArrowDistance = {
      dx: 0,
      dy: 0
    };
    if (startArrow && startArrow.d) {
      startArrowDistance = getShortenOffset(x1, y1, x2, y2, attrs.startArrow.d);
    }
    if (endArrow && endArrow.d) {
      endArrowDistance = getShortenOffset(x1, y1, x2, y2, attrs.endArrow.d);
    }
    context.beginPath();
    context.moveTo(x1 + startArrowDistance.dx, y1 + startArrowDistance.dy);
    context.lineTo(x2 - endArrowDistance.dx, y2 - endArrowDistance.dy);
  };
  Line2.prototype.afterDrawPath = function(context) {
    var startArrowShape = this.get('startArrowShape');
    var endArrowShape = this.get('endArrowShape');
    if (startArrowShape) {
      startArrowShape.draw(context);
    }
    if (endArrowShape) {
      endArrowShape.draw(context);
    }
  };
  Line2.prototype.getTotalLength = function() {
    var _a = this.attr(),
      x1 = _a.x1,
      y1 = _a.y1,
      x2 = _a.x2,
      y2 = _a.y2;
    return LineUtil2.length(x1, y1, x2, y2);
  };
  Line2.prototype.getPoint = function(ratio) {
    var _a = this.attr(),
      x1 = _a.x1,
      y1 = _a.y1,
      x2 = _a.x2,
      y2 = _a.y2;
    return LineUtil2.pointAt(x1, y1, x2, y2, ratio);
  };
  return Line2;
})(base_default);
var line_default = Line;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/marker.js
import { __extends as __extends7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isNil as isNil2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { path2Absolute } from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';
var Symbols = {
  circle: function(x, y, r) {
    return [
      ['M', x - r, y],
      ['A', r, r, 0, 1, 0, x + r, y],
      ['A', r, r, 0, 1, 0, x - r, y]
    ];
  },
  square: function(x, y, r) {
    return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
  },
  diamond: function(x, y, r) {
    return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
  },
  triangle: function(x, y, r) {
    var diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['Z']];
  },
  'triangle-down': function(x, y, r) {
    var diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
  }
};
var Marker = (function(_super) {
  __extends7(Marker2, _super);
  function Marker2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Marker2.prototype.initAttrs = function(attrs) {
    this._resetParamsCache();
  };
  Marker2.prototype._resetParamsCache = function() {
    this.set('paramsCache', {});
  };
  Marker2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (['symbol', 'x', 'y', 'r', 'radius'].indexOf(name) !== -1) {
      this._resetParamsCache();
    }
  };
  Marker2.prototype.isOnlyHitBox = function() {
    return true;
  };
  Marker2.prototype._getR = function(attrs) {
    return isNil2(attrs.r) ? attrs.radius : attrs.r;
  };
  Marker2.prototype._getPath = function() {
    var attrs = this.attr();
    var x = attrs.x,
      y = attrs.y;
    var symbol = attrs.symbol || 'circle';
    var r = this._getR(attrs);
    var method;
    var path;
    if (isFunction(symbol)) {
      method = symbol;
      path = method(x, y, r);
      path = path2Absolute(path);
    } else {
      method = Marker2.Symbols[symbol];
      if (!method) {
        console.warn(symbol + ' marker is not supported.');
        return null;
      }
      path = method(x, y, r);
    }
    return path;
  };
  Marker2.prototype.createPath = function(context) {
    var path = this._getPath();
    var paramsCache = this.get('paramsCache');
    drawPath(
      this,
      context,
      {
        path
      },
      paramsCache
    );
  };
  Marker2.Symbols = Symbols;
  return Marker2;
})(base_default);
var marker_default = Marker;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/path.js
import { __assign as __assign8, __extends as __extends8 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Cubic as CubicUtil2 } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { each as each4, isNil as isNil3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import {
  path2Absolute as path2Absolute2,
  path2Segments
} from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-path/point-in-path.js
import { getOffScreenContext } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
function isPointInPath(shape, x, y) {
  var ctx = getOffScreenContext();
  shape.createPath(ctx);
  return ctx.isPointInPath(x, y);
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-path/polygon.js
var tolerance = 1e-6;
function dcmp(x) {
  if (Math.abs(x) < tolerance) {
    return 0;
  }
  return x < 0 ? -1 : 1;
}
function onSegment(p1, p2, q) {
  if (
    (q[0] - p1[0]) * (p2[1] - p1[1]) === (p2[0] - p1[0]) * (q[1] - p1[1]) &&
    Math.min(p1[0], p2[0]) <= q[0] &&
    q[0] <= Math.max(p1[0], p2[0]) &&
    Math.min(p1[1], p2[1]) <= q[1] &&
    q[1] <= Math.max(p1[1], p2[1])
  ) {
    return true;
  }
  return false;
}
function isInPolygon(points, x, y) {
  var isHit = false;
  var n = points.length;
  if (n <= 2) {
    return false;
  }
  for (var i = 0; i < n; i++) {
    var p1 = points[i];
    var p2 = points[(i + 1) % n];
    if (onSegment(p1, p2, [x, y])) {
      return true;
    }
    if (
      dcmp(p1[1] - y) > 0 !== dcmp(p2[1] - y) > 0 &&
      dcmp(x - ((y - p1[1]) * (p1[0] - p2[0])) / (p1[1] - p2[1]) - p1[0]) < 0
    ) {
      isHit = !isHit;
    }
  }
  return isHit;
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/path.js
import { __assign as __assign7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { PathUtil } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
import { Quad as QuadUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { Cubic as CubicUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { ext } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import * as vec3 from '/cdn/v99/gl-matrix@3.4.3/es2022/vec3.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-stroke/arc.js
function arc(cx, cy, r, startAngle, endAngle, lineWidth, x, y) {
  var angle = (Math.atan2(y - cy, x - cx) + Math.PI * 2) % (Math.PI * 2);
  if (angle < startAngle || angle > endAngle) {
    return false;
  }
  var point = {
    x: cx + r * Math.cos(angle),
    y: cy + r * Math.sin(angle)
  };
  return distance(point.x, point.y, x, y) <= lineWidth / 2;
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/path.js
var transform = ext.transform;
function hasArc(path) {
  var hasArc2 = false;
  var count = path.length;
  for (var i = 0; i < count; i++) {
    var params = path[i];
    var cmd = params[0];
    if (cmd === 'C' || cmd === 'A' || cmd === 'Q') {
      hasArc2 = true;
      break;
    }
  }
  return hasArc2;
}
function isPointInStroke(segments, lineWidth, x, y, length) {
  var isHit = false;
  var halfWidth = lineWidth / 2;
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var currentPoint = segment.currentPoint,
      params = segment.params,
      prePoint = segment.prePoint,
      box = segment.box;
    if (box && !inBox(box.x - halfWidth, box.y - halfWidth, box.width + lineWidth, box.height + lineWidth, x, y)) {
      continue;
    }
    switch (segment.command) {
      case 'L':
      case 'Z':
        isHit = inLine(prePoint[0], prePoint[1], currentPoint[0], currentPoint[1], lineWidth, x, y);
        break;
      case 'Q':
        var qDistance = QuadUtil.pointDistance(
          prePoint[0],
          prePoint[1],
          params[1],
          params[2],
          params[3],
          params[4],
          x,
          y
        );
        isHit = qDistance <= lineWidth / 2;
        break;
      case 'C':
        var cDistance = CubicUtil.pointDistance(
          prePoint[0],
          prePoint[1],
          params[1],
          params[2],
          params[3],
          params[4],
          params[5],
          params[6],
          x,
          y,
          length
        );
        isHit = cDistance <= lineWidth / 2;
        break;
      case 'A':
        var arcParams = segment.arcParams;
        var cx = arcParams.cx,
          cy = arcParams.cy,
          rx = arcParams.rx,
          ry = arcParams.ry,
          startAngle = arcParams.startAngle,
          endAngle = arcParams.endAngle,
          xRotation = arcParams.xRotation;
        var p = [x, y, 1];
        var r = rx > ry ? rx : ry;
        var scaleX = rx > ry ? 1 : rx / ry;
        var scaleY = rx > ry ? ry / rx : 1;
        var m = transform(null, [
          ['t', -cx, -cy],
          ['r', -xRotation],
          ['s', 1 / scaleX, 1 / scaleY]
        ]);
        vec3.transformMat3(p, p, m);
        isHit = arc(0, 0, r, startAngle, endAngle, lineWidth, p[0], p[1]);
        break;
      default:
        break;
    }
    if (isHit) {
      break;
    }
  }
  return isHit;
}
function extractPolygons(path) {
  var count = path.length;
  var polygons = [];
  var polylines = [];
  var points = [];
  for (var i = 0; i < count; i++) {
    var params = path[i];
    var cmd = params[0];
    if (cmd === 'M') {
      if (points.length) {
        polylines.push(points);
        points = [];
      }
      points.push([params[1], params[2]]);
    } else if (cmd === 'Z') {
      if (points.length) {
        polygons.push(points);
        points = [];
      }
    } else {
      points.push([params[1], params[2]]);
    }
  }
  if (points.length > 0) {
    polylines.push(points);
  }
  return {
    polygons,
    polylines
  };
}
var path_default2 = __assign7(
  {
    hasArc,
    extractPolygons,
    isPointInStroke
  },
  PathUtil
);

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/path.js
function isInPolygons(polygons, x, y) {
  var isHit = false;
  for (var i = 0; i < polygons.length; i++) {
    var points = polygons[i];
    isHit = isInPolygon(points, x, y);
    if (isHit) {
      break;
    }
  }
  return isHit;
}
var Path = (function(_super) {
  __extends8(Path2, _super);
  function Path2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Path2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign8(__assign8({}, attrs), {
      startArrow: false,
      endArrow: false
    });
  };
  Path2.prototype.initAttrs = function(attrs) {
    this._setPathArr(attrs.path);
    this.setArrow();
  };
  Path2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (name === 'path') {
      this._setPathArr(value);
    }
    this.setArrow();
  };
  Path2.prototype._setPathArr = function(path) {
    this.attrs.path = path2Absolute2(path);
    var hasArc2 = path_default2.hasArc(path);
    this.set('hasArc', hasArc2);
    this.set('paramsCache', {});
    this.set('segments', null);
    this.set('curve', null);
    this.set('tCache', null);
    this.set('totalLength', null);
  };
  Path2.prototype.getSegments = function() {
    var segments = this.get('segements');
    if (!segments) {
      segments = path2Segments(this.attr('path'));
      this.set('segments', segments);
    }
    return segments;
  };
  Path2.prototype.setArrow = function() {
    var attrs = this.attr();
    var startArrow = attrs.startArrow,
      endArrow = attrs.endArrow;
    if (startArrow) {
      var tangent = this.getStartTangent();
      addStartArrow(this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
    }
    if (endArrow) {
      var tangent = this.getEndTangent();
      addEndArrow(this, attrs, tangent[0][0], tangent[0][1], tangent[1][0], tangent[1][1]);
    }
  };
  Path2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    var segments = this.getSegments();
    var hasArc2 = this.get('hasArc');
    var isHit = false;
    if (isStroke) {
      var length_1 = this.getTotalLength();
      isHit = path_default2.isPointInStroke(segments, lineWidth, x, y, length_1);
    }
    if (!isHit && isFill) {
      if (hasArc2) {
        isHit = isPointInPath(this, x, y);
      } else {
        var path = this.attr('path');
        var extractResutl = path_default2.extractPolygons(path);
        isHit = isInPolygons(extractResutl.polygons, x, y) || isInPolygons(extractResutl.polylines, x, y);
      }
    }
    return isHit;
  };
  Path2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var paramsCache = this.get('paramsCache');
    drawPath(this, context, attrs, paramsCache);
  };
  Path2.prototype.afterDrawPath = function(context) {
    var startArrowShape = this.get('startArrowShape');
    var endArrowShape = this.get('endArrowShape');
    if (startArrowShape) {
      startArrowShape.draw(context);
    }
    if (endArrowShape) {
      endArrowShape.draw(context);
    }
  };
  Path2.prototype.getTotalLength = function() {
    var totalLength = this.get('totalLength');
    if (!isNil3(totalLength)) {
      return totalLength;
    }
    this._calculateCurve();
    this._setTcache();
    return this.get('totalLength');
  };
  Path2.prototype.getPoint = function(ratio) {
    var tCache = this.get('tCache');
    if (!tCache) {
      this._calculateCurve();
      this._setTcache();
      tCache = this.get('tCache');
    }
    var subt;
    var index;
    var curve = this.get('curve');
    if (!tCache || tCache.length === 0) {
      if (curve) {
        return {
          x: curve[0][1],
          y: curve[0][2]
        };
      }
      return null;
    }
    each4(tCache, function(v, i) {
      if (ratio >= v[0] && ratio <= v[1]) {
        subt = (ratio - v[0]) / (v[1] - v[0]);
        index = i;
      }
    });
    var seg = curve[index];
    if (isNil3(seg) || isNil3(index)) {
      return null;
    }
    var l = seg.length;
    var nextSeg = curve[index + 1];
    return CubicUtil2.pointAt(
      seg[l - 2],
      seg[l - 1],
      nextSeg[1],
      nextSeg[2],
      nextSeg[3],
      nextSeg[4],
      nextSeg[5],
      nextSeg[6],
      subt
    );
  };
  Path2.prototype._calculateCurve = function() {
    var path = this.attr().path;
    this.set('curve', path_default2.pathToCurve(path));
  };
  Path2.prototype._setTcache = function() {
    var totalLength = 0;
    var tempLength = 0;
    var tCache = [];
    var segmentT;
    var segmentL;
    var segmentN;
    var l;
    var curve = this.get('curve');
    if (!curve) {
      return;
    }
    each4(curve, function(segment, i) {
      segmentN = curve[i + 1];
      l = segment.length;
      if (segmentN) {
        totalLength +=
          CubicUtil2.length(
            segment[l - 2],
            segment[l - 1],
            segmentN[1],
            segmentN[2],
            segmentN[3],
            segmentN[4],
            segmentN[5],
            segmentN[6]
          ) || 0;
      }
    });
    this.set('totalLength', totalLength);
    if (totalLength === 0) {
      this.set('tCache', []);
      return;
    }
    each4(curve, function(segment, i) {
      segmentN = curve[i + 1];
      l = segment.length;
      if (segmentN) {
        segmentT = [];
        segmentT[0] = tempLength / totalLength;
        segmentL = CubicUtil2.length(
          segment[l - 2],
          segment[l - 1],
          segmentN[1],
          segmentN[2],
          segmentN[3],
          segmentN[4],
          segmentN[5],
          segmentN[6]
        );
        tempLength += segmentL || 0;
        segmentT[1] = tempLength / totalLength;
        tCache.push(segmentT);
      }
    });
    this.set('tCache', tCache);
  };
  Path2.prototype.getStartTangent = function() {
    var segments = this.getSegments();
    var result;
    if (segments.length > 1) {
      var startPoint = segments[0].currentPoint;
      var endPoint = segments[1].currentPoint;
      var tangent = segments[1].startTangent;
      result = [];
      if (tangent) {
        result.push([startPoint[0] - tangent[0], startPoint[1] - tangent[1]]);
        result.push([startPoint[0], startPoint[1]]);
      } else {
        result.push([endPoint[0], endPoint[1]]);
        result.push([startPoint[0], startPoint[1]]);
      }
    }
    return result;
  };
  Path2.prototype.getEndTangent = function() {
    var segments = this.getSegments();
    var length = segments.length;
    var result;
    if (length > 1) {
      var startPoint = segments[length - 2].currentPoint;
      var endPoint = segments[length - 1].currentPoint;
      var tangent = segments[length - 1].endTangent;
      result = [];
      if (tangent) {
        result.push([endPoint[0] - tangent[0], endPoint[1] - tangent[1]]);
        result.push([endPoint[0], endPoint[1]]);
      } else {
        result.push([startPoint[0], startPoint[1]]);
        result.push([endPoint[0], endPoint[1]]);
      }
    }
    return result;
  };
  return Path2;
})(base_default);
var path_default = Path;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/polygon.js
import { __extends as __extends9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-stroke/polyline.js
function inPolyline(points, lineWidth, x, y, isClose) {
  var count = points.length;
  if (count < 2) {
    return false;
  }
  for (var i = 0; i < count - 1; i++) {
    var x1 = points[i][0];
    var y1 = points[i][1];
    var x2 = points[i + 1][0];
    var y2 = points[i + 1][1];
    if (inLine(x1, y1, x2, y2, lineWidth, x, y)) {
      return true;
    }
  }
  if (isClose) {
    var first = points[0];
    var last = points[count - 1];
    if (inLine(first[0], first[1], last[0], last[1], lineWidth, x, y)) {
      return true;
    }
  }
  return false;
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/polygon.js
var Polygon = (function(_super) {
  __extends9(Polygon2, _super);
  function Polygon2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Polygon2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    var points = this.attr().points;
    var isHit = false;
    if (isStroke) {
      isHit = inPolyline(points, lineWidth, x, y, true);
    }
    if (!isHit && isFill) {
      isHit = isInPolygon(points, x, y);
    }
    return isHit;
  };
  Polygon2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var points = attrs.points;
    if (points.length < 2) {
      return;
    }
    context.beginPath();
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      if (i === 0) {
        context.moveTo(point[0], point[1]);
      } else {
        context.lineTo(point[0], point[1]);
      }
    }
    context.closePath();
  };
  return Polygon2;
})(base_default);
var polygon_default = Polygon;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/polyline.js
import { __assign as __assign9, __extends as __extends10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Line as LineUtil3 } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { Polyline as PolylineUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { each as each5, isNil as isNil4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var PolyLine = (function(_super) {
  __extends10(PolyLine2, _super);
  function PolyLine2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  PolyLine2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign9(__assign9({}, attrs), {
      startArrow: false,
      endArrow: false
    });
  };
  PolyLine2.prototype.initAttrs = function(attrs) {
    this.setArrow();
  };
  PolyLine2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    this.setArrow();
    if (['points'].indexOf(name) !== -1) {
      this._resetCache();
    }
  };
  PolyLine2.prototype._resetCache = function() {
    this.set('totalLength', null);
    this.set('tCache', null);
  };
  PolyLine2.prototype.setArrow = function() {
    var attrs = this.attr();
    var _a = this.attrs,
      points = _a.points,
      startArrow = _a.startArrow,
      endArrow = _a.endArrow;
    var length = points.length;
    var x1 = points[0][0];
    var y1 = points[0][1];
    var x2 = points[length - 1][0];
    var y2 = points[length - 1][1];
    if (startArrow) {
      addStartArrow(this, attrs, points[1][0], points[1][1], x1, y1);
    }
    if (endArrow) {
      addEndArrow(this, attrs, points[length - 2][0], points[length - 2][1], x2, y2);
    }
  };
  PolyLine2.prototype.isFill = function() {
    return false;
  };
  PolyLine2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    if (!isStroke || !lineWidth) {
      return false;
    }
    var points = this.attr().points;
    return inPolyline(points, lineWidth, x, y, false);
  };
  PolyLine2.prototype.isStroke = function() {
    return true;
  };
  PolyLine2.prototype.createPath = function(context) {
    var _a = this.attr(),
      points = _a.points,
      startArrow = _a.startArrow,
      endArrow = _a.endArrow;
    var length = points.length;
    if (points.length < 2) {
      return;
    }
    var x1 = points[0][0];
    var y1 = points[0][1];
    var x2 = points[length - 1][0];
    var y2 = points[length - 1][1];
    if (startArrow && startArrow.d) {
      var distance2 = getShortenOffset(x1, y1, points[1][0], points[1][1], startArrow.d);
      x1 += distance2.dx;
      y1 += distance2.dy;
    }
    if (endArrow && endArrow.d) {
      var distance2 = getShortenOffset(points[length - 2][0], points[length - 2][1], x2, y2, endArrow.d);
      x2 -= distance2.dx;
      y2 -= distance2.dy;
    }
    context.beginPath();
    context.moveTo(x1, y1);
    for (var i = 0; i < length - 1; i++) {
      var point = points[i];
      context.lineTo(point[0], point[1]);
    }
    context.lineTo(x2, y2);
  };
  PolyLine2.prototype.afterDrawPath = function(context) {
    var startArrowShape = this.get('startArrowShape');
    var endArrowShape = this.get('endArrowShape');
    if (startArrowShape) {
      startArrowShape.draw(context);
    }
    if (endArrowShape) {
      endArrowShape.draw(context);
    }
  };
  PolyLine2.prototype.getTotalLength = function() {
    var points = this.attr().points;
    var totalLength = this.get('totalLength');
    if (!isNil4(totalLength)) {
      return totalLength;
    }
    this.set('totalLength', PolylineUtil.length(points));
    return this.get('totalLength');
  };
  PolyLine2.prototype.getPoint = function(ratio) {
    var points = this.attr().points;
    var tCache = this.get('tCache');
    if (!tCache) {
      this._setTcache();
      tCache = this.get('tCache');
    }
    var subt;
    var index;
    each5(tCache, function(v, i) {
      if (ratio >= v[0] && ratio <= v[1]) {
        subt = (ratio - v[0]) / (v[1] - v[0]);
        index = i;
      }
    });
    return LineUtil3.pointAt(points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], subt);
  };
  PolyLine2.prototype._setTcache = function() {
    var points = this.attr().points;
    if (!points || points.length === 0) {
      return;
    }
    var totalLength = this.getTotalLength();
    if (totalLength <= 0) {
      return;
    }
    var tempLength = 0;
    var tCache = [];
    var segmentT;
    var segmentL;
    each5(points, function(p, i) {
      if (points[i + 1]) {
        segmentT = [];
        segmentT[0] = tempLength / totalLength;
        segmentL = LineUtil3.length(p[0], p[1], points[i + 1][0], points[i + 1][1]);
        tempLength += segmentL;
        segmentT[1] = tempLength / totalLength;
        tCache.push(segmentT);
      }
    });
    this.set('tCache', tCache);
  };
  PolyLine2.prototype.getStartTangent = function() {
    var points = this.attr().points;
    var result = [];
    result.push([points[1][0], points[1][1]]);
    result.push([points[0][0], points[0][1]]);
    return result;
  };
  PolyLine2.prototype.getEndTangent = function() {
    var points = this.attr().points;
    var l = points.length - 1;
    var result = [];
    result.push([points[l - 1][0], points[l - 1][1]]);
    result.push([points[l][0], points[l][1]]);
    return result;
  };
  return PolyLine2;
})(base_default);
var polyline_default = PolyLine;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/rect.js
import { __assign as __assign10, __extends as __extends11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-stroke/rect.js
function inRect(minX, minY, width, height, lineWidth, x, y) {
  var halfWidth = lineWidth / 2;
  return (
    inBox(minX - halfWidth, minY - halfWidth, width, lineWidth, x, y) ||
    inBox(minX + width - halfWidth, minY - halfWidth, lineWidth, height, x, y) ||
    inBox(minX + halfWidth, minY + height - halfWidth, width, lineWidth, x, y) ||
    inBox(minX - halfWidth, minY + halfWidth, lineWidth, height, x, y)
  );
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/in-stroke/rect-radius.js
function rectWithRadius(minX, minY, width, height, radius, lineWidth, x, y) {
  var halfWidth = lineWidth / 2;
  return (
    inLine(minX + radius, minY, minX + width - radius, minY, lineWidth, x, y) ||
    inLine(minX + width, minY + radius, minX + width, minY + height - radius, lineWidth, x, y) ||
    inLine(minX + width - radius, minY + height, minX + radius, minY + height, lineWidth, x, y) ||
    inLine(minX, minY + height - radius, minX, minY + radius, lineWidth, x, y) ||
    arc(minX + width - radius, minY + radius, radius, 1.5 * Math.PI, 2 * Math.PI, lineWidth, x, y) ||
    arc(minX + width - radius, minY + height - radius, radius, 0, 0.5 * Math.PI, lineWidth, x, y) ||
    arc(minX + radius, minY + height - radius, radius, 0.5 * Math.PI, Math.PI, lineWidth, x, y) ||
    arc(minX + radius, minY + radius, radius, Math.PI, 1.5 * Math.PI, lineWidth, x, y)
  );
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/rect.js
var Rect = (function(_super) {
  __extends11(Rect2, _super);
  function Rect2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Rect2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign10(__assign10({}, attrs), {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0
    });
  };
  Rect2.prototype.isInStrokeOrPath = function(x, y, isStroke, isFill, lineWidth) {
    var attrs = this.attr();
    var minX = attrs.x;
    var minY = attrs.y;
    var width = attrs.width;
    var height = attrs.height;
    var radius = attrs.radius;
    if (!radius) {
      var halfWidth = lineWidth / 2;
      if (isFill && isStroke) {
        return inBox(minX - halfWidth, minY - halfWidth, width + halfWidth, height + halfWidth, x, y);
      }
      if (isFill) {
        return inBox(minX, minY, width, height, x, y);
      }
      if (isStroke) {
        return inRect(minX, minY, width, height, lineWidth, x, y);
      }
    } else {
      var isHit = false;
      if (isStroke) {
        isHit = rectWithRadius(minX, minY, width, height, radius, lineWidth, x, y);
      }
      if (!isHit && isFill) {
        isHit = isPointInPath(this, x, y);
      }
      return isHit;
    }
  };
  Rect2.prototype.createPath = function(context) {
    var attrs = this.attr();
    var x = attrs.x;
    var y = attrs.y;
    var width = attrs.width;
    var height = attrs.height;
    var radius = attrs.radius;
    context.beginPath();
    if (radius === 0) {
      context.rect(x, y, width, height);
    } else {
      var _a = parseRadius(radius),
        r1 = _a[0],
        r2 = _a[1],
        r3 = _a[2],
        r4 = _a[3];
      context.moveTo(x + r1, y);
      context.lineTo(x + width - r2, y);
      r2 !== 0 && context.arc(x + width - r2, y + r2, r2, -Math.PI / 2, 0);
      context.lineTo(x + width, y + height - r3);
      r3 !== 0 && context.arc(x + width - r3, y + height - r3, r3, 0, Math.PI / 2);
      context.lineTo(x + r4, y + height);
      r4 !== 0 && context.arc(x + r4, y + height - r4, r4, Math.PI / 2, Math.PI);
      context.lineTo(x, y + r1);
      r1 !== 0 && context.arc(x + r1, y + r1, r1, Math.PI, Math.PI * 1.5);
      context.closePath();
    }
  };
  return Rect2;
})(base_default);
var rect_default = Rect;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/shape/text.js
import { __assign as __assign11, __extends as __extends12 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { getTextHeight, assembleFont } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
var Text = (function(_super) {
  __extends12(Text2, _super);
  function Text2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Text2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign11(__assign11({}, attrs), {
      x: 0,
      y: 0,
      text: null,
      fontSize: 12,
      fontFamily: 'sans-serif',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontVariant: 'normal',
      textAlign: 'start',
      textBaseline: 'bottom'
    });
  };
  Text2.prototype.isOnlyHitBox = function() {
    return true;
  };
  Text2.prototype.initAttrs = function(attrs) {
    this._assembleFont();
    if (attrs.text) {
      this._setText(attrs.text);
    }
  };
  Text2.prototype._assembleFont = function() {
    var attrs = this.attrs;
    attrs.font = assembleFont(attrs);
  };
  Text2.prototype._setText = function(text) {
    var textArr = null;
    if (isString(text) && text.indexOf('\n') !== -1) {
      textArr = text.split('\n');
    }
    this.set('textArr', textArr);
  };
  Text2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (name.startsWith('font')) {
      this._assembleFont();
    }
    if (name === 'text') {
      this._setText(value);
    }
  };
  Text2.prototype._getSpaceingY = function() {
    var attrs = this.attrs;
    var lineHeight = attrs.lineHeight;
    var fontSize = attrs.fontSize * 1;
    return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
  };
  Text2.prototype._drawTextArr = function(context, textArr, isFill) {
    var attrs = this.attrs;
    var textBaseline = attrs.textBaseline;
    var x = attrs.x;
    var y = attrs.y;
    var fontSize = attrs.fontSize * 1;
    var spaceingY = this._getSpaceingY();
    var height = getTextHeight(attrs.text, attrs.fontSize, attrs.lineHeight);
    var subY;
    each(textArr, function(subText, index) {
      subY = y + index * (spaceingY + fontSize) - height + fontSize;
      if (textBaseline === 'middle') subY += height - fontSize - (height - fontSize) / 2;
      if (textBaseline === 'top') subY += height - fontSize;
      if (!isNil(subText)) {
        if (isFill) {
          context.fillText(subText, x, subY);
        } else {
          context.strokeText(subText, x, subY);
        }
      }
    });
  };
  Text2.prototype._drawText = function(context, isFill) {
    var attrs = this.attr();
    var x = attrs.x;
    var y = attrs.y;
    var textArr = this.get('textArr');
    if (textArr) {
      this._drawTextArr(context, textArr, isFill);
    } else {
      var text = attrs.text;
      if (!isNil(text)) {
        if (isFill) {
          context.fillText(text, x, y);
        } else {
          context.strokeText(text, x, y);
        }
      }
    }
  };
  Text2.prototype.strokeAndFill = function(context) {
    var _a = this.attrs,
      lineWidth = _a.lineWidth,
      opacity = _a.opacity,
      strokeOpacity = _a.strokeOpacity,
      fillOpacity = _a.fillOpacity;
    if (this.isStroke()) {
      if (lineWidth > 0) {
        if (!isNil(strokeOpacity) && strokeOpacity !== 1) {
          context.globalAlpha = opacity;
        }
        this.stroke(context);
      }
    }
    if (this.isFill()) {
      if (!isNil(fillOpacity) && fillOpacity !== 1) {
        context.globalAlpha = fillOpacity;
        this.fill(context);
        context.globalAlpha = opacity;
      } else {
        this.fill(context);
      }
    }
    this.afterDrawPath(context);
  };
  Text2.prototype.fill = function(context) {
    this._drawText(context, true);
  };
  Text2.prototype.stroke = function(context) {
    this._drawText(context, false);
  };
  return Text2;
})(base_default);
var text_default = Text;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/index.js
export * from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/canvas.js
import { __extends as __extends13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractCanvas } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/util/hit.js
import { isAllowCapture, multiplyVec2, invert } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
function invertFromMatrix(v, matrix) {
  if (matrix) {
    var invertMatrix = invert(matrix);
    return multiplyVec2(invertMatrix, v);
  }
  return v;
}
function getRefXY(element, x, y) {
  var totalMatrix = element.getTotalMatrix();
  if (totalMatrix) {
    var _a = invertFromMatrix([x, y, 1], totalMatrix),
      refX = _a[0],
      refY = _a[1];
    return [refX, refY];
  }
  return [x, y];
}
function preTest(element, x, y) {
  if (element.isCanvas && element.isCanvas()) {
    return true;
  }
  if (!isAllowCapture(element) || element.cfg.isInView === false) {
    return false;
  }
  if (element.cfg.clipShape) {
    var _a = getRefXY(element, x, y),
      refX = _a[0],
      refY = _a[1];
    if (element.isClipped(refX, refY)) {
      return false;
    }
  }
  var bbox = element.cfg.cacheCanvasBBox || element.getCanvasBBox();
  if (!(x >= bbox.minX && x <= bbox.maxX && y >= bbox.minY && y <= bbox.maxY)) {
    return false;
  }
  return true;
}
function getShape(container, x, y) {
  if (!preTest(container, x, y)) {
    return null;
  }
  var shape = null;
  var children = container.getChildren();
  var count = children.length;
  for (var i = count - 1; i >= 0; i--) {
    var child = children[i];
    if (child.isGroup()) {
      shape = getShape(child, x, y);
    } else if (preTest(child, x, y)) {
      var curShape = child;
      var _a = getRefXY(child, x, y),
        refX = _a[0],
        refY = _a[1];
      if (curShape.isInShape(refX, refY)) {
        shape = child;
      }
    }
    if (shape) {
      break;
    }
  }
  return shape;
}

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/canvas.js
var Canvas = (function(_super) {
  __extends13(Canvas2, _super);
  function Canvas2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Canvas2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    cfg['renderer'] = 'canvas';
    cfg['autoDraw'] = true;
    cfg['localRefresh'] = true;
    cfg['refreshElements'] = [];
    cfg['clipView'] = true;
    cfg['quickHit'] = false;
    return cfg;
  };
  Canvas2.prototype.onCanvasChange = function(changeType) {
    if (changeType === 'attr' || changeType === 'sort' || changeType === 'changeSize') {
      this.set('refreshElements', [this]);
      this.draw();
    }
  };
  Canvas2.prototype.getShapeBase = function() {
    return shape_exports;
  };
  Canvas2.prototype.getGroupBase = function() {
    return group_default;
  };
  Canvas2.prototype.getPixelRatio = function() {
    var pixelRatio = this.get('pixelRatio') || getPixelRatio();
    return pixelRatio >= 1 ? Math.ceil(pixelRatio) : 1;
  };
  Canvas2.prototype.getViewRange = function() {
    return {
      minX: 0,
      minY: 0,
      maxX: this.cfg.width,
      maxY: this.cfg.height
    };
  };
  Canvas2.prototype.createDom = function() {
    var element = document.createElement('canvas');
    var context = element.getContext('2d');
    this.set('context', context);
    return element;
  };
  Canvas2.prototype.setDOMSize = function(width, height) {
    _super.prototype.setDOMSize.call(this, width, height);
    var context = this.get('context');
    var el = this.get('el');
    var pixelRatio = this.getPixelRatio();
    el.width = pixelRatio * width;
    el.height = pixelRatio * height;
    if (pixelRatio > 1) {
      context.scale(pixelRatio, pixelRatio);
    }
  };
  Canvas2.prototype.clear = function() {
    _super.prototype.clear.call(this);
    this._clearFrame();
    var context = this.get('context');
    var element = this.get('el');
    context.clearRect(0, 0, element.width, element.height);
  };
  Canvas2.prototype.getShape = function(x, y) {
    var shape;
    if (this.get('quickHit')) {
      shape = getShape(this, x, y);
    } else {
      shape = _super.prototype.getShape.call(this, x, y, null);
    }
    return shape;
  };
  Canvas2.prototype._getRefreshRegion = function() {
    var elements = this.get('refreshElements');
    var viewRegion = this.getViewRange();
    var region;
    if (elements.length && elements[0] === this) {
      region = viewRegion;
    } else {
      region = getMergedRegion(elements);
      if (region) {
        region.minX = Math.floor(region.minX);
        region.minY = Math.floor(region.minY);
        region.maxX = Math.ceil(region.maxX);
        region.maxY = Math.ceil(region.maxY);
        region.maxY += 1;
        var clipView = this.get('clipView');
        if (clipView) {
          region = mergeView(region, viewRegion);
        }
      }
    }
    return region;
  };
  Canvas2.prototype.refreshElement = function(element) {
    var refreshElements = this.get('refreshElements');
    refreshElements.push(element);
  };
  Canvas2.prototype._clearFrame = function() {
    var drawFrame = this.get('drawFrame');
    if (drawFrame) {
      clearAnimationFrame(drawFrame);
      this.set('drawFrame', null);
      this.set('refreshElements', []);
    }
  };
  Canvas2.prototype.draw = function() {
    var drawFrame = this.get('drawFrame');
    if (this.get('autoDraw') && drawFrame) {
      return;
    }
    this._startDraw();
  };
  Canvas2.prototype._drawAll = function() {
    var context = this.get('context');
    var element = this.get('el');
    var children = this.getChildren();
    context.clearRect(0, 0, element.width, element.height);
    applyAttrsToContext(context, this);
    drawChildren(context, children);
    this.set('refreshElements', []);
  };
  Canvas2.prototype._drawRegion = function() {
    var context = this.get('context');
    var refreshElements = this.get('refreshElements');
    var children = this.getChildren();
    var region = this._getRefreshRegion();
    if (region) {
      context.clearRect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
      context.save();
      context.beginPath();
      context.rect(region.minX, region.minY, region.maxX - region.minX, region.maxY - region.minY);
      context.clip();
      applyAttrsToContext(context, this);
      checkRefresh(this, children, region);
      drawChildren(context, children, region);
      context.restore();
    } else if (refreshElements.length) {
      clearChanged(refreshElements);
    }
    each(refreshElements, function(element) {
      if (element.get('hasChanged')) {
        element.set('hasChanged', false);
      }
    });
    this.set('refreshElements', []);
  };
  Canvas2.prototype._startDraw = function() {
    var _this = this;
    var drawFrame = this.get('drawFrame');
    if (!drawFrame) {
      drawFrame = requestAnimationFrame(function() {
        if (_this.get('localRefresh')) {
          _this._drawRegion();
        } else {
          _this._drawAll();
        }
        _this.set('drawFrame', null);
      });
      this.set('drawFrame', drawFrame);
    }
  };
  Canvas2.prototype.skipDraw = function() {};
  Canvas2.prototype.removeDom = function() {
    var el = this.get('el');
    el.width = 0;
    el.height = 0;
    el.parentNode.removeChild(el);
  };
  return Canvas2;
})(AbstractCanvas);
var canvas_default = Canvas;

// esm-build-c8db193a181590a5e37995185543b12fbe0dd267-084c2b0d/node_modules/@antv/g-canvas/esm/index.js
var version = '0.5.12';
export { canvas_default as Canvas, group_default as Group, shape_exports as Shape, getArcParams, version };
