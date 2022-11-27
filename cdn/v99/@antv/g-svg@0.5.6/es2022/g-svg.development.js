/* esm.sh - esbuild bundle(@antv/g-svg@0.5.6) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/index.js
var shape_exports = {};
__export(shape_exports, {
  Base: () => base_default,
  Circle: () => circle_default,
  Dom: () => dom_default,
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

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/base.js
import { __assign, __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractShape } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/util/dom.js
import { toArray } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/constant.js
var SHAPE_TO_TAGS = {
  rect: 'path',
  circle: 'circle',
  line: 'line',
  path: 'path',
  marker: 'path',
  text: 'text',
  polyline: 'polyline',
  polygon: 'polygon',
  image: 'image',
  ellipse: 'ellipse',
  dom: 'foreignObject'
};
var SVG_ATTR_MAP = {
  opacity: 'opacity',
  fillStyle: 'fill',
  fill: 'fill',
  fillOpacity: 'fill-opacity',
  strokeStyle: 'stroke',
  strokeOpacity: 'stroke-opacity',
  stroke: 'stroke',
  x: 'x',
  y: 'y',
  r: 'r',
  rx: 'rx',
  ry: 'ry',
  width: 'width',
  height: 'height',
  x1: 'x1',
  x2: 'x2',
  y1: 'y1',
  y2: 'y2',
  lineCap: 'stroke-linecap',
  lineJoin: 'stroke-linejoin',
  lineWidth: 'stroke-width',
  lineDash: 'stroke-dasharray',
  lineDashOffset: 'stroke-dashoffset',
  miterLimit: 'stroke-miterlimit',
  font: 'font',
  fontSize: 'font-size',
  fontStyle: 'font-style',
  fontVariant: 'font-variant',
  fontWeight: 'font-weight',
  fontFamily: 'font-family',
  startArrow: 'marker-start',
  endArrow: 'marker-end',
  path: 'd',
  class: 'class',
  id: 'id',
  style: 'style',
  preserveAspectRatio: 'preserveAspectRatio'
};

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/util/dom.js
function createSVGElement(type) {
  return document.createElementNS('http://www.w3.org/2000/svg', type);
}
function createDom(shape) {
  var type = SHAPE_TO_TAGS[shape.type];
  var parent = shape.getParent();
  if (!type) {
    throw new Error('the type ' + shape.type + ' is not supported by svg');
  }
  var element = createSVGElement(type);
  if (shape.get('id')) {
    element.id = shape.get('id');
  }
  shape.set('el', element);
  shape.set('attrs', {});
  if (parent) {
    var parentNode = parent.get('el');
    if (parentNode) {
      parentNode.appendChild(element);
    } else {
      parentNode = parent.createDom();
      parent.set('el', parentNode);
      parentNode.appendChild(element);
    }
  }
  return element;
}
function sortDom(element, sorter) {
  var el = element.get('el');
  var childList = toArray(el.children).sort(sorter);
  var fragment = document.createDocumentFragment();
  childList.forEach(function(child) {
    fragment.appendChild(child);
  });
  el.appendChild(fragment);
}
function moveTo(element, targetIndex) {
  var parentNode = element.parentNode;
  var siblings = Array.from(parentNode.childNodes).filter(function(node) {
    return node.nodeType === 1 && node.nodeName.toLowerCase() !== 'defs';
  });
  var target = siblings[targetIndex];
  var currentIndex = siblings.indexOf(element);
  if (target) {
    if (currentIndex > targetIndex) {
      parentNode.insertBefore(element, target);
    } else if (currentIndex < targetIndex) {
      var targetNext = siblings[targetIndex + 1];
      if (targetNext) {
        parentNode.insertBefore(element, targetNext);
      } else {
        parentNode.appendChild(element);
      }
    }
  } else {
    parentNode.appendChild(element);
  }
}

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/util/svg.js
function setShadow(model, context) {
  var el = model.cfg.el;
  var attrs = model.attr();
  var cfg = {
    dx: attrs.shadowOffsetX,
    dy: attrs.shadowOffsetY,
    blur: attrs.shadowBlur,
    color: attrs.shadowColor
  };
  if (!cfg.dx && !cfg.dy && !cfg.blur && !cfg.color) {
    el.removeAttribute('filter');
  } else {
    var id = context.find('filter', cfg);
    if (!id) {
      id = context.addShadow(cfg);
    }
    el.setAttribute('filter', 'url(#' + id + ')');
  }
}
function setTransform(model) {
  var matrix = model.attr().matrix;
  if (matrix) {
    var el = model.cfg.el;
    var transform = [];
    for (var i = 0; i < 9; i += 3) {
      transform.push(matrix[i] + ',' + matrix[i + 1]);
    }
    transform = transform.join(',');
    if (transform.indexOf('NaN') === -1) {
      el.setAttribute('transform', 'matrix(' + transform + ')');
    } else {
      console.warn('invalid matrix:', matrix);
    }
  }
}
function setClip(model, context) {
  var clip = model.getClip();
  var el = model.get('el');
  if (!clip) {
    el.removeAttribute('clip-path');
  } else if (clip && !el.hasAttribute('clip-path')) {
    createDom(clip);
    clip.createPath(context);
    var id = context.addClip(clip);
    el.setAttribute('clip-path', 'url(#' + id + ')');
  }
}

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/util/draw.js
function drawChildren(context, children) {
  children.forEach(function(child) {
    child.draw(context);
  });
}
function refreshElement(element, changeType) {
  var canvas = element.get('canvas');
  if (canvas && canvas.get('autoDraw')) {
    var context = canvas.get('context');
    var parent_1 = element.getParent();
    var parentChildren = parent_1 ? parent_1.getChildren() : [canvas];
    var el = element.get('el');
    if (changeType === 'remove') {
      var isClipShape = element.get('isClipShape');
      if (isClipShape) {
        var clipPathEl = el && el.parentNode;
        var defsEl = clipPathEl && clipPathEl.parentNode;
        if (clipPathEl && defsEl) {
          defsEl.removeChild(clipPathEl);
        }
      } else if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    } else if (changeType === 'show') {
      el.setAttribute('visibility', 'visible');
    } else if (changeType === 'hide') {
      el.setAttribute('visibility', 'hidden');
    } else if (changeType === 'zIndex') {
      moveTo(el, parentChildren.indexOf(element));
    } else if (changeType === 'sort') {
      var children_1 = element.get('children');
      if (children_1 && children_1.length) {
        sortDom(element, function(a, b) {
          return children_1.indexOf(a) - children_1.indexOf(b) ? 1 : 0;
        });
      }
    } else if (changeType === 'clear') {
      if (el) {
        el.innerHTML = '';
      }
    } else if (changeType === 'matrix') {
      setTransform(element);
    } else if (changeType === 'clip') {
      setClip(element, context);
    } else if (changeType === 'attr') {
    } else if (changeType === 'add') {
      element.draw(context);
    }
  }
}

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/group.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractGroup } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
import { each } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Group = (function(_super) {
  __extends(Group2, _super);
  function Group2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Group2.prototype.isEntityGroup = function() {
    return true;
  };
  Group2.prototype.createDom = function() {
    var element = createSVGElement('g');
    this.set('el', element);
    var parent = this.getParent();
    if (parent) {
      var parentNode = parent.get('el');
      if (parentNode) {
        parentNode.appendChild(element);
      } else {
        parentNode = parent.createDom();
        parent.set('el', parentNode);
        parentNode.appendChild(element);
      }
    }
    return element;
  };
  Group2.prototype.afterAttrsChange = function(targetAttrs) {
    _super.prototype.afterAttrsChange.call(this, targetAttrs);
    var canvas = this.get('canvas');
    if (canvas && canvas.get('autoDraw')) {
      var context = canvas.get('context');
      this.createPath(context, targetAttrs);
    }
  };
  Group2.prototype.onCanvasChange = function(changeType) {
    refreshElement(this, changeType);
  };
  Group2.prototype.getShapeBase = function() {
    return shape_exports;
  };
  Group2.prototype.getGroupBase = function() {
    return Group2;
  };
  Group2.prototype.draw = function(context) {
    var children = this.getChildren();
    var el = this.get('el');
    if (this.get('destroyed')) {
      if (el) {
        el.parentNode.removeChild(el);
      }
    } else {
      if (!el) {
        this.createDom();
      }
      setClip(this, context);
      this.createPath(context);
      if (children.length) {
        drawChildren(context, children);
      }
    }
  };
  Group2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each(targetAttrs || attrs, function(value, attr) {
      if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
    setTransform(this);
  };
  return Group2;
})(AbstractGroup);
var group_default = Group;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/base.js
import { getBBoxMethod } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
var ShapeBase = (function(_super) {
  __extends2(ShapeBase2, _super);
  function ShapeBase2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'svg';
    _this.canFill = false;
    _this.canStroke = false;
    return _this;
  }
  ShapeBase2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign(__assign({}, attrs), {
      lineWidth: 1,
      lineAppendWidth: 0,
      strokeOpacity: 1,
      fillOpacity: 1
    });
  };
  ShapeBase2.prototype.afterAttrsChange = function(targetAttrs) {
    _super.prototype.afterAttrsChange.call(this, targetAttrs);
    var canvas = this.get('canvas');
    if (canvas && canvas.get('autoDraw')) {
      var context = canvas.get('context');
      this.draw(context, targetAttrs);
    }
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
    var el = this.get('el');
    var bbox = null;
    if (el) {
      bbox = el.getBBox();
    } else {
      var bboxMethod = getBBoxMethod(this.get('type'));
      if (bboxMethod) {
        bbox = bboxMethod(this);
      }
    }
    if (bbox) {
      var x = bbox.x,
        y = bbox.y,
        width = bbox.width,
        height = bbox.height;
      var lineWidth = this.getHitLineWidth();
      var halfWidth = lineWidth / 2;
      var minX = x - halfWidth;
      var minY = y - halfWidth;
      var maxX = x + width + halfWidth;
      var maxY = y + height + halfWidth;
      return {
        x: minX,
        y: minY,
        minX,
        minY,
        maxX,
        maxY,
        width: width + lineWidth,
        height: height + lineWidth
      };
    }
    return {
      x: 0,
      y: 0,
      minX: 0,
      minY: 0,
      maxX: 0,
      maxY: 0,
      width: 0,
      height: 0
    };
  };
  ShapeBase2.prototype.isFill = function() {
    var _a = this.attr(),
      fill = _a.fill,
      fillStyle = _a.fillStyle;
    return (fill || fillStyle || this.isClipShape()) && this.canFill;
  };
  ShapeBase2.prototype.isStroke = function() {
    var _a = this.attr(),
      stroke = _a.stroke,
      strokeStyle = _a.strokeStyle;
    return (stroke || strokeStyle) && this.canStroke;
  };
  ShapeBase2.prototype.draw = function(context, targetAttrs) {
    var el = this.get('el');
    if (this.get('destroyed')) {
      if (el) {
        el.parentNode.removeChild(el);
      }
    } else {
      if (!el) {
        createDom(this);
      }
      setClip(this, context);
      this.createPath(context, targetAttrs);
      this.shadow(context, targetAttrs);
      this.strokeAndFill(context, targetAttrs);
      this.transform(targetAttrs);
    }
  };
  ShapeBase2.prototype.createPath = function(context, targetAttrs) {};
  ShapeBase2.prototype.strokeAndFill = function(context, targetAttrs) {
    var attrs = targetAttrs || this.attr();
    var fill = attrs.fill,
      fillStyle = attrs.fillStyle,
      stroke = attrs.stroke,
      strokeStyle = attrs.strokeStyle,
      fillOpacity = attrs.fillOpacity,
      strokeOpacity = attrs.strokeOpacity,
      lineWidth = attrs.lineWidth;
    var el = this.get('el');
    if (this.canFill) {
      if (!targetAttrs) {
        this._setColor(context, 'fill', fill || fillStyle);
      } else if ('fill' in attrs) {
        this._setColor(context, 'fill', fill);
      } else if ('fillStyle' in attrs) {
        this._setColor(context, 'fill', fillStyle);
      }
      if (fillOpacity) {
        el.setAttribute(SVG_ATTR_MAP['fillOpacity'], fillOpacity);
      }
    }
    if (this.canStroke && lineWidth > 0) {
      if (!targetAttrs) {
        this._setColor(context, 'stroke', stroke || strokeStyle);
      } else if ('stroke' in attrs) {
        this._setColor(context, 'stroke', stroke);
      } else if ('strokeStyle' in attrs) {
        this._setColor(context, 'stroke', strokeStyle);
      }
      if (strokeOpacity) {
        el.setAttribute(SVG_ATTR_MAP['strokeOpacity'], strokeOpacity);
      }
      if (lineWidth) {
        el.setAttribute(SVG_ATTR_MAP['lineWidth'], lineWidth);
      }
    }
  };
  ShapeBase2.prototype._setColor = function(context, attr, value) {
    var el = this.get('el');
    if (!value) {
      el.setAttribute(SVG_ATTR_MAP[attr], 'none');
      return;
    }
    value = value.trim();
    if (/^[r,R,L,l]{1}[\s]*\(/.test(value)) {
      var id = context.find('gradient', value);
      if (!id) {
        id = context.addGradient(value);
      }
      el.setAttribute(SVG_ATTR_MAP[attr], 'url(#' + id + ')');
    } else if (/^[p,P]{1}[\s]*\(/.test(value)) {
      var id = context.find('pattern', value);
      if (!id) {
        id = context.addPattern(value);
      }
      el.setAttribute(SVG_ATTR_MAP[attr], 'url(#' + id + ')');
    } else {
      el.setAttribute(SVG_ATTR_MAP[attr], value);
    }
  };
  ShapeBase2.prototype.shadow = function(context, targetAttrs) {
    var attrs = this.attr();
    var _a = targetAttrs || attrs,
      shadowOffsetX = _a.shadowOffsetX,
      shadowOffsetY = _a.shadowOffsetY,
      shadowBlur = _a.shadowBlur,
      shadowColor = _a.shadowColor;
    if (shadowOffsetX || shadowOffsetY || shadowBlur || shadowColor) {
      setShadow(this, context);
    }
  };
  ShapeBase2.prototype.transform = function(targetAttrs) {
    var attrs = this.attr();
    var matrix = (targetAttrs || attrs).matrix;
    if (matrix) {
      setTransform(this);
    }
  };
  ShapeBase2.prototype.isInShape = function(refX, refY) {
    return this.isPointInPath(refX, refY);
  };
  ShapeBase2.prototype.isPointInPath = function(refX, refY) {
    var el = this.get('el');
    var canvas = this.get('canvas');
    var bbox = canvas.get('el').getBoundingClientRect();
    var clientX = refX + bbox.left;
    var clientY = refY + bbox.top;
    var element = document.elementFromPoint(clientX, clientY);
    if (element && element.isEqualNode(el)) {
      return true;
    }
    return false;
  };
  ShapeBase2.prototype.getHitLineWidth = function() {
    var _a = this.attrs,
      lineWidth = _a.lineWidth,
      lineAppendWidth = _a.lineAppendWidth;
    if (this.isStroke()) {
      return lineWidth + lineAppendWidth;
    }
    return 0;
  };
  return ShapeBase2;
})(AbstractShape);
var base_default = ShapeBase;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/circle.js
import { __assign as __assign2, __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Circle = (function(_super) {
  __extends3(Circle2, _super);
  function Circle2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'circle';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Circle2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign2(__assign2({}, attrs), {
      x: 0,
      y: 0,
      r: 0
    });
  };
  Circle2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each2(targetAttrs || attrs, function(value, attr) {
      if (attr === 'x' || attr === 'y') {
        el.setAttribute('c' + attr, value);
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  return Circle2;
})(base_default);
var circle_default = Circle;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/dom.js
import { __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Dom = (function(_super) {
  __extends4(Dom2, _super);
  function Dom2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'dom';
    _this.canFill = false;
    _this.canStroke = false;
    return _this;
  }
  Dom2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each3(targetAttrs || attrs, function(value, attr) {
      if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
    if (typeof attrs['html'] === 'function') {
      var element = attrs['html'].call(this, attrs);
      if (element instanceof Element || element instanceof HTMLDocument) {
        var children = el.childNodes;
        for (var i = children.length - 1; i >= 0; i--) {
          el.removeChild(children[i]);
        }
        el.appendChild(element);
      } else {
        el.innerHTML = element;
      }
    } else {
      el.innerHTML = attrs['html'];
    }
  };
  return Dom2;
})(base_default);
var dom_default = Dom;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/ellipse.js
import { __assign as __assign3, __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Ellipse = (function(_super) {
  __extends5(Ellipse2, _super);
  function Ellipse2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'ellipse';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Ellipse2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign3(__assign3({}, attrs), {
      x: 0,
      y: 0,
      rx: 0,
      ry: 0
    });
  };
  Ellipse2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each4(targetAttrs || attrs, function(value, attr) {
      if (attr === 'x' || attr === 'y') {
        el.setAttribute('c' + attr, value);
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  return Ellipse2;
})(base_default);
var ellipse_default = Ellipse;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/image.js
import { __assign as __assign4, __extends as __extends6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each5, isString } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Image2 = (function(_super) {
  __extends6(Image3, _super);
  function Image3() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'image';
    _this.canFill = false;
    _this.canStroke = false;
    return _this;
  }
  Image3.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign4(__assign4({}, attrs), {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
  };
  Image3.prototype.createPath = function(context, targetAttrs) {
    var _this = this;
    var attrs = this.attr();
    var el = this.get('el');
    each5(targetAttrs || attrs, function(value, attr) {
      if (attr === 'img') {
        _this._setImage(attrs.img);
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  Image3.prototype.setAttr = function(name, value) {
    this.attrs[name] = value;
    if (name === 'img') {
      this._setImage(value);
    }
  };
  Image3.prototype._setImage = function(img) {
    var attrs = this.attr();
    var el = this.get('el');
    if (isString(img)) {
      el.setAttribute('href', img);
    } else if (img instanceof window.Image) {
      if (!attrs.width) {
        el.setAttribute('width', img.width);
        this.attr('width', img.width);
      }
      if (!attrs.height) {
        el.setAttribute('height', img.height);
        this.attr('height', img.height);
      }
      el.setAttribute('href', img.src);
    } else if (img instanceof HTMLElement && isString(img.nodeName) && img.nodeName.toUpperCase() === 'CANVAS') {
      el.setAttribute('href', img.toDataURL());
    } else if (img instanceof ImageData) {
      var canvas = document.createElement('canvas');
      canvas.setAttribute('width', '' + img.width);
      canvas.setAttribute('height', '' + img.height);
      canvas.getContext('2d').putImageData(img, 0, 0);
      if (!attrs.width) {
        el.setAttribute('width', '' + img.width);
        this.attr('width', img.width);
      }
      if (!attrs.height) {
        el.setAttribute('height', '' + img.height);
        this.attr('height', img.height);
      }
      el.setAttribute('href', canvas.toDataURL());
    }
  };
  return Image3;
})(base_default);
var image_default = Image2;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/line.js
import { __assign as __assign5, __extends as __extends7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Line as LineUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { each as each6, isObject } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Line = (function(_super) {
  __extends7(Line2, _super);
  function Line2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'line';
    _this.canFill = false;
    _this.canStroke = true;
    return _this;
  }
  Line2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign5(__assign5({}, attrs), {
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      startArrow: false,
      endArrow: false
    });
  };
  Line2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each6(targetAttrs || attrs, function(value, attr) {
      if (attr === 'startArrow' || attr === 'endArrow') {
        if (value) {
          var id = isObject(value)
            ? context.addArrow(attrs, SVG_ATTR_MAP[attr])
            : context.getDefaultArrow(attrs, SVG_ATTR_MAP[attr]);
          el.setAttribute(SVG_ATTR_MAP[attr], 'url(#' + id + ')');
        } else {
          el.removeAttribute(SVG_ATTR_MAP[attr]);
        }
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  Line2.prototype.getTotalLength = function() {
    var _a = this.attr(),
      x1 = _a.x1,
      y1 = _a.y1,
      x2 = _a.x2,
      y2 = _a.y2;
    return LineUtil.length(x1, y1, x2, y2);
  };
  Line2.prototype.getPoint = function(ratio) {
    var _a = this.attr(),
      x1 = _a.x1,
      y1 = _a.y1,
      x2 = _a.x2,
      y2 = _a.y2;
    return LineUtil.pointAt(x1, y1, x2, y2, ratio);
  };
  return Line2;
})(base_default);
var line_default = Line;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/marker/index.js
import { __extends as __extends8 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray, isFunction } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/marker/symbols.js
var Symbols = {
  circle: function(x, y, r) {
    return [
      ['M', x, y],
      ['m', -r, 0],
      ['a', r, r, 0, 1, 0, r * 2, 0],
      ['a', r, r, 0, 1, 0, -r * 2, 0]
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
    return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['z']];
  },
  triangleDown: function(x, y, r) {
    var diffY = r * Math.sin((1 / 3) * Math.PI);
    return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
  }
};
var symbols_default = {
  get: function(type) {
    return Symbols[type];
  },
  register: function(type, func) {
    Symbols[type] = func;
  },
  remove: function(type) {
    delete Symbols[type];
  },
  getAll: function() {
    return Symbols;
  }
};

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/marker/index.js
var Marker = (function(_super) {
  __extends8(Marker2, _super);
  function Marker2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'marker';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Marker2.prototype.createPath = function(context) {
    var el = this.get('el');
    el.setAttribute('d', this._assembleMarker());
  };
  Marker2.prototype._assembleMarker = function() {
    var d = this._getPath();
    if (isArray(d)) {
      return d
        .map(function(path) {
          return path.join(' ');
        })
        .join('');
    }
    return d;
  };
  Marker2.prototype._getPath = function() {
    var attrs = this.attr();
    var x = attrs.x,
      y = attrs.y;
    var r = attrs.r || attrs.radius;
    var symbol = attrs.symbol || 'circle';
    var method;
    if (isFunction(symbol)) {
      method = symbol;
    } else {
      method = symbols_default.get(symbol);
    }
    if (!method) {
      console.warn(method + ' symbol is not exist.');
      return null;
    }
    return method(x, y, r);
  };
  Marker2.symbolsFactory = symbols_default;
  return Marker2;
})(base_default);
var marker_default = Marker;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/path.js
import { __assign as __assign6, __extends as __extends9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each7,
  isArray as isArray2,
  isObject as isObject2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Path = (function(_super) {
  __extends9(Path2, _super);
  function Path2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'path';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Path2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign6(__assign6({}, attrs), {
      startArrow: false,
      endArrow: false
    });
  };
  Path2.prototype.createPath = function(context, targetAttrs) {
    var _this = this;
    var attrs = this.attr();
    var el = this.get('el');
    each7(targetAttrs || attrs, function(value, attr) {
      if (attr === 'path' && isArray2(value)) {
        el.setAttribute('d', _this._formatPath(value));
      } else if (attr === 'startArrow' || attr === 'endArrow') {
        if (value) {
          var id = isObject2(value)
            ? context.addArrow(attrs, SVG_ATTR_MAP[attr])
            : context.getDefaultArrow(attrs, SVG_ATTR_MAP[attr]);
          el.setAttribute(SVG_ATTR_MAP[attr], 'url(#' + id + ')');
        } else {
          el.removeAttribute(SVG_ATTR_MAP[attr]);
        }
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  Path2.prototype._formatPath = function(value) {
    var newValue = value
      .map(function(path) {
        return path.join(' ');
      })
      .join('');
    if (~newValue.indexOf('NaN')) {
      return '';
    }
    return newValue;
  };
  Path2.prototype.getTotalLength = function() {
    var el = this.get('el');
    return el ? el.getTotalLength() : null;
  };
  Path2.prototype.getPoint = function(ratio) {
    var el = this.get('el');
    var totalLength = this.getTotalLength();
    if (totalLength === 0) {
      return null;
    }
    var point = el ? el.getPointAtLength(ratio * totalLength) : null;
    return point
      ? {
          x: point.x,
          y: point.y
        }
      : null;
  };
  return Path2;
})(base_default);
var path_default = Path;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/polygon.js
import { __extends as __extends10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each8, isArray as isArray3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Polygon = (function(_super) {
  __extends10(Polygon2, _super);
  function Polygon2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'polygon';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Polygon2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each8(targetAttrs || attrs, function(value, attr) {
      if (attr === 'points' && isArray3(value) && value.length >= 2) {
        el.setAttribute(
          'points',
          value
            .map(function(point) {
              return point[0] + ',' + point[1];
            })
            .join(' ')
        );
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  return Polygon2;
})(base_default);
var polygon_default = Polygon;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/polyline.js
import { __assign as __assign7, __extends as __extends11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Polyline as PolylineUtil } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { Line as LineUtil2 } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { each as each9, isArray as isArray4, isNil } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Polyline = (function(_super) {
  __extends11(Polyline2, _super);
  function Polyline2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'polyline';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Polyline2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign7(__assign7({}, attrs), {
      startArrow: false,
      endArrow: false
    });
  };
  Polyline2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (['points'].indexOf(name) !== -1) {
      this._resetCache();
    }
  };
  Polyline2.prototype._resetCache = function() {
    this.set('totalLength', null);
    this.set('tCache', null);
  };
  Polyline2.prototype.createPath = function(context, targetAttrs) {
    var attrs = this.attr();
    var el = this.get('el');
    each9(targetAttrs || attrs, function(value, attr) {
      if (attr === 'points' && isArray4(value) && value.length >= 2) {
        el.setAttribute(
          'points',
          value
            .map(function(point) {
              return point[0] + ',' + point[1];
            })
            .join(' ')
        );
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  Polyline2.prototype.getTotalLength = function() {
    var points = this.attr().points;
    var totalLength = this.get('totalLength');
    if (!isNil(totalLength)) {
      return totalLength;
    }
    this.set('totalLength', PolylineUtil.length(points));
    return this.get('totalLength');
  };
  Polyline2.prototype.getPoint = function(ratio) {
    var points = this.attr().points;
    var tCache = this.get('tCache');
    if (!tCache) {
      this._setTcache();
      tCache = this.get('tCache');
    }
    var subt;
    var index;
    each9(tCache, function(v, i) {
      if (ratio >= v[0] && ratio <= v[1]) {
        subt = (ratio - v[0]) / (v[1] - v[0]);
        index = i;
      }
    });
    return LineUtil2.pointAt(points[index][0], points[index][1], points[index + 1][0], points[index + 1][1], subt);
  };
  Polyline2.prototype._setTcache = function() {
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
    each9(points, function(p, i) {
      if (points[i + 1]) {
        segmentT = [];
        segmentT[0] = tempLength / totalLength;
        segmentL = LineUtil2.length(p[0], p[1], points[i + 1][0], points[i + 1][1]);
        tempLength += segmentL;
        segmentT[1] = tempLength / totalLength;
        tCache.push(segmentT);
      }
    });
    this.set('tCache', tCache);
  };
  Polyline2.prototype.getStartTangent = function() {
    var points = this.attr().points;
    var result = [];
    result.push([points[1][0], points[1][1]]);
    result.push([points[0][0], points[0][1]]);
    return result;
  };
  Polyline2.prototype.getEndTangent = function() {
    var points = this.attr().points;
    var l = points.length - 1;
    var result = [];
    result.push([points[l - 1][0], points[l - 1][1]]);
    result.push([points[l][0], points[l][1]]);
    return result;
  };
  return Polyline2;
})(base_default);
var polyline_default = Polyline;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/rect.js
import { __assign as __assign8, __extends as __extends12 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each11, isArray as isArray6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/util/format.js
import {
  each as each10,
  isArray as isArray5,
  isString as isString2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function parseRadius(radius) {
  var r1 = 0;
  var r2 = 0;
  var r3 = 0;
  var r4 = 0;
  if (isArray5(radius)) {
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
  return {
    r1,
    r2,
    r3,
    r4
  };
}

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/rect.js
var Rect = (function(_super) {
  __extends12(Rect2, _super);
  function Rect2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'rect';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Rect2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign8(__assign8({}, attrs), {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      radius: 0
    });
  };
  Rect2.prototype.createPath = function(context, targetAttrs) {
    var _this = this;
    var attrs = this.attr();
    var el = this.get('el');
    var completed = false;
    var pathRelatedAttrs = ['x', 'y', 'width', 'height', 'radius'];
    each11(targetAttrs || attrs, function(value, attr) {
      if (pathRelatedAttrs.indexOf(attr) !== -1 && !completed) {
        el.setAttribute('d', _this._assembleRect(attrs));
        completed = true;
      } else if (pathRelatedAttrs.indexOf(attr) === -1 && SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
  };
  Rect2.prototype._assembleRect = function(attrs) {
    var x = attrs.x;
    var y = attrs.y;
    var w = attrs.width;
    var h = attrs.height;
    var radius = attrs.radius;
    if (!radius) {
      return 'M ' + x + ',' + y + ' l ' + w + ',0 l 0,' + h + ' l' + -w + ' 0 z';
    }
    var r = parseRadius(radius);
    if (isArray6(radius)) {
      if (radius.length === 1) {
        r.r1 = r.r2 = r.r3 = r.r4 = radius[0];
      } else if (radius.length === 2) {
        r.r1 = r.r3 = radius[0];
        r.r2 = r.r4 = radius[1];
      } else if (radius.length === 3) {
        r.r1 = radius[0];
        r.r2 = r.r4 = radius[1];
        r.r3 = radius[2];
      } else {
        r.r1 = radius[0];
        r.r2 = radius[1];
        r.r3 = radius[2];
        r.r4 = radius[3];
      }
    } else {
      r.r1 = r.r2 = r.r3 = r.r4 = radius;
    }
    var d = [
      ['M ' + (x + r.r1) + ',' + y],
      ['l ' + (w - r.r1 - r.r2) + ',0'],
      ['a ' + r.r2 + ',' + r.r2 + ',0,0,1,' + r.r2 + ',' + r.r2],
      ['l 0,' + (h - r.r2 - r.r3)],
      ['a ' + r.r3 + ',' + r.r3 + ',0,0,1,' + -r.r3 + ',' + r.r3],
      ['l ' + (r.r3 + r.r4 - w) + ',0'],
      ['a ' + r.r4 + ',' + r.r4 + ',0,0,1,' + -r.r4 + ',' + -r.r4],
      ['l 0,' + (r.r4 + r.r1 - h)],
      ['a ' + r.r1 + ',' + r.r1 + ',0,0,1,' + r.r1 + ',' + -r.r1],
      ['z']
    ];
    return d.join(' ');
  };
  return Rect2;
})(base_default);
var rect_default = Rect;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/shape/text.js
import { __assign as __assign9, __extends as __extends13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each12 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { detect } from '/cdn/v99/detect-browser@5.3.0/es2022/detect-browser.development.js';
var LETTER_SPACING = 0.3;
var BASELINE_MAP = {
  top: 'before-edge',
  middle: 'central',
  bottom: 'after-edge',
  alphabetic: 'baseline',
  hanging: 'hanging'
};
var BASELINE_MAP_FOR_FIREFOX = {
  top: 'text-before-edge',
  middle: 'central',
  bottom: 'text-after-edge',
  alphabetic: 'alphabetic',
  hanging: 'hanging'
};
var ANCHOR_MAP = {
  left: 'left',
  start: 'left',
  center: 'middle',
  right: 'end',
  end: 'end'
};
var Text = (function(_super) {
  __extends13(Text2, _super);
  function Text2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'text';
    _this.canFill = true;
    _this.canStroke = true;
    return _this;
  }
  Text2.prototype.getDefaultAttrs = function() {
    var attrs = _super.prototype.getDefaultAttrs.call(this);
    return __assign9(__assign9({}, attrs), {
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
  Text2.prototype.createPath = function(context, targetAttrs) {
    var _this = this;
    var attrs = this.attr();
    var el = this.get('el');
    this._setFont();
    each12(targetAttrs || attrs, function(value, attr) {
      if (attr === 'text') {
        _this._setText('' + value);
      } else if (attr === 'matrix' && value) {
        setTransform(_this);
      } else if (SVG_ATTR_MAP[attr]) {
        el.setAttribute(SVG_ATTR_MAP[attr], value);
      }
    });
    el.setAttribute('paint-order', 'stroke');
    el.setAttribute('style', 'stroke-linecap:butt; stroke-linejoin:miter;');
  };
  Text2.prototype._setFont = function() {
    var el = this.get('el');
    var _a = this.attr(),
      textBaseline = _a.textBaseline,
      textAlign = _a.textAlign;
    var browser = detect();
    if (browser && browser.name === 'firefox') {
      el.setAttribute('dominant-baseline', BASELINE_MAP_FOR_FIREFOX[textBaseline] || 'alphabetic');
    } else {
      el.setAttribute('alignment-baseline', BASELINE_MAP[textBaseline] || 'baseline');
    }
    el.setAttribute('text-anchor', ANCHOR_MAP[textAlign] || 'left');
  };
  Text2.prototype._setText = function(text) {
    var el = this.get('el');
    var _a = this.attr(),
      x = _a.x,
      _b = _a.textBaseline,
      baseline = _b === void 0 ? 'bottom' : _b;
    if (!text) {
      el.innerHTML = '';
    } else if (~text.indexOf('\n')) {
      var textArr = text.split('\n');
      var textLen_1 = textArr.length - 1;
      var arr_1 = '';
      each12(textArr, function(segment, i) {
        if (i === 0) {
          if (baseline === 'alphabetic') {
            arr_1 += '<tspan x="' + x + '" dy="' + -textLen_1 + 'em">' + segment + '</tspan>';
          } else if (baseline === 'top') {
            arr_1 += '<tspan x="' + x + '" dy="0.9em">' + segment + '</tspan>';
          } else if (baseline === 'middle') {
            arr_1 += '<tspan x="' + x + '" dy="' + -(textLen_1 - 1) / 2 + 'em">' + segment + '</tspan>';
          } else if (baseline === 'bottom') {
            arr_1 += '<tspan x="' + x + '" dy="-' + (textLen_1 + LETTER_SPACING) + 'em">' + segment + '</tspan>';
          } else if (baseline === 'hanging') {
            arr_1 += '<tspan x="' + x + '" dy="' + (-(textLen_1 - 1) - LETTER_SPACING) + 'em">' + segment + '</tspan>';
          }
        } else {
          arr_1 += '<tspan x="' + x + '" dy="1em">' + segment + '</tspan>';
        }
      });
      el.innerHTML = arr_1;
    } else {
      el.innerHTML = text;
    }
  };
  return Text2;
})(base_default);
var text_default = Text;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/index.js
export * from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/canvas.js
import { __assign as __assign10, __extends as __extends14 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { AbstractCanvas } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/index.js
import { uniqueId as uniqueId6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/gradient.js
import { each as each13, mod, toRadian, uniqueId } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^)]+\))/gi;
function addStop(steps) {
  var arr = steps.match(regexColorStop);
  if (!arr) {
    return '';
  }
  var stops = '';
  arr.sort(function(a, b) {
    a = a.split(':');
    b = b.split(':');
    return Number(a[0]) - Number(b[0]);
  });
  each13(arr, function(item) {
    item = item.split(':');
    stops += '<stop offset="' + item[0] + '" stop-color="' + item[1] + '"></stop>';
  });
  return stops;
}
function parseLineGradient(color, el) {
  var arr = regexLG.exec(color);
  var angle = mod(toRadian(parseFloat(arr[1])), Math.PI * 2);
  var steps = arr[2];
  var start;
  var end;
  if (angle >= 0 && angle < 0.5 * Math.PI) {
    start = {
      x: 0,
      y: 0
    };
    end = {
      x: 1,
      y: 1
    };
  } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
    start = {
      x: 1,
      y: 0
    };
    end = {
      x: 0,
      y: 1
    };
  } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
    start = {
      x: 1,
      y: 1
    };
    end = {
      x: 0,
      y: 0
    };
  } else {
    start = {
      x: 0,
      y: 1
    };
    end = {
      x: 1,
      y: 0
    };
  }
  var tanTheta = Math.tan(angle);
  var tanTheta2 = tanTheta * tanTheta;
  var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
  var y = (tanTheta * (end.x - start.x + tanTheta * (end.y - start.y))) / (tanTheta2 + 1) + start.y;
  el.setAttribute('x1', start.x);
  el.setAttribute('y1', start.y);
  el.setAttribute('x2', x);
  el.setAttribute('y2', y);
  el.innerHTML = addStop(steps);
}
function parseRadialGradient(color, self) {
  var arr = regexRG.exec(color);
  var cx = parseFloat(arr[1]);
  var cy = parseFloat(arr[2]);
  var r = parseFloat(arr[3]);
  var steps = arr[4];
  self.setAttribute('cx', cx);
  self.setAttribute('cy', cy);
  self.setAttribute('r', r);
  self.innerHTML = addStop(steps);
}
var Gradient = (function() {
  function Gradient2(cfg) {
    this.cfg = {};
    var el = null;
    var id = uniqueId('gradient_');
    if (cfg.toLowerCase()[0] === 'l') {
      el = createSVGElement('linearGradient');
      parseLineGradient(cfg, el);
    } else {
      el = createSVGElement('radialGradient');
      parseRadialGradient(cfg, el);
    }
    el.setAttribute('id', id);
    this.el = el;
    this.id = id;
    this.cfg = cfg;
    return this;
  }
  Gradient2.prototype.match = function(type, attr) {
    return this.cfg === attr;
  };
  return Gradient2;
})();
var gradient_default = Gradient;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/shadow.js
import { each as each14, uniqueId as uniqueId2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ATTR_MAP = {
  shadowColor: 'color',
  shadowOpacity: 'opacity',
  shadowBlur: 'blur',
  shadowOffsetX: 'dx',
  shadowOffsetY: 'dy'
};
var SHADOW_DIMENSION = {
  x: '-40%',
  y: '-40%',
  width: '200%',
  height: '200%'
};
var Shadow = (function() {
  function Shadow2(cfg) {
    this.type = 'filter';
    this.cfg = {};
    this.type = 'filter';
    var el = createSVGElement('filter');
    each14(SHADOW_DIMENSION, function(v, k) {
      el.setAttribute(k, v);
    });
    this.el = el;
    this.id = uniqueId2('filter_');
    this.el.id = this.id;
    this.cfg = cfg;
    this._parseShadow(cfg, el);
    return this;
  }
  Shadow2.prototype.match = function(type, cfg) {
    if (this.type !== type) {
      return false;
    }
    var flag = true;
    var config = this.cfg;
    each14(Object.keys(config), function(attr) {
      if (config[attr] !== cfg[attr]) {
        flag = false;
        return false;
      }
    });
    return flag;
  };
  Shadow2.prototype.update = function(name, value) {
    var config = this.cfg;
    config[ATTR_MAP[name]] = value;
    this._parseShadow(config, this.el);
    return this;
  };
  Shadow2.prototype._parseShadow = function(config, el) {
    var child =
      '<feDropShadow\n      dx="' +
      (config.dx || 0) +
      '"\n      dy="' +
      (config.dy || 0) +
      '"\n      stdDeviation="' +
      (config.blur ? config.blur / 10 : 0) +
      '"\n      flood-color="' +
      (config.color ? config.color : '#000') +
      '"\n      flood-opacity="' +
      (config.opacity ? config.opacity : 1) +
      '"\n      />';
    el.innerHTML = child;
  };
  return Shadow2;
})();
var shadow_default = Shadow;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/arrow.js
import { isArray as isArray7, uniqueId as uniqueId3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Arrow = (function() {
  function Arrow2(attrs, type) {
    this.cfg = {};
    var el = createSVGElement('marker');
    var id = uniqueId3('marker_');
    el.setAttribute('id', id);
    var shape = createSVGElement('path');
    shape.setAttribute('stroke', attrs.stroke || 'none');
    shape.setAttribute('fill', attrs.fill || 'none');
    el.appendChild(shape);
    el.setAttribute('overflow', 'visible');
    el.setAttribute('orient', 'auto-start-reverse');
    this.el = el;
    this.child = shape;
    this.id = id;
    var cfg = attrs[type === 'marker-start' ? 'startArrow' : 'endArrow'];
    this.stroke = attrs.stroke || '#000';
    if (cfg === true) {
      this._setDefaultPath(type, shape);
    } else {
      this.cfg = cfg;
      this._setMarker(attrs.lineWidth, shape);
    }
    return this;
  }
  Arrow2.prototype.match = function() {
    return false;
  };
  Arrow2.prototype._setDefaultPath = function(type, el) {
    var parent = this.el;
    el.setAttribute('d', 'M0,0 L' + 10 * Math.cos(Math.PI / 6) + ',5 L0,10');
    parent.setAttribute('refX', '' + 10 * Math.cos(Math.PI / 6));
    parent.setAttribute('refY', '' + 5);
  };
  Arrow2.prototype._setMarker = function(r, el) {
    var parent = this.el;
    var path = this.cfg.path;
    var d = this.cfg.d;
    if (isArray7(path)) {
      path = path
        .map(function(segment) {
          return segment.join(' ');
        })
        .join('');
    }
    el.setAttribute('d', path);
    parent.appendChild(el);
    if (d) {
      parent.setAttribute('refX', '' + d / r);
    }
  };
  Arrow2.prototype.update = function(fill) {
    var child = this.child;
    if (child.attr) {
      child.attr('fill', fill);
    } else {
      child.setAttribute('fill', fill);
    }
  };
  return Arrow2;
})();
var arrow_default = Arrow;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/clip.js
import { uniqueId as uniqueId4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Clip = (function() {
  function Clip2(cfg) {
    this.type = 'clip';
    this.cfg = {};
    var el = createSVGElement('clipPath');
    this.el = el;
    this.id = uniqueId4('clip_');
    el.id = this.id;
    var shapeEl = cfg.cfg.el;
    el.appendChild(shapeEl);
    this.cfg = cfg;
    return this;
  }
  Clip2.prototype.match = function() {
    return false;
  };
  Clip2.prototype.remove = function() {
    var el = this.el;
    el.parentNode.removeChild(el);
  };
  return Clip2;
})();
var clip_default = Clip;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/pattern.js
import { uniqueId as uniqueId5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
var Pattern = (function() {
  function Pattern2(cfg) {
    this.cfg = {};
    var el = createSVGElement('pattern');
    el.setAttribute('patternUnits', 'userSpaceOnUse');
    var child = createSVGElement('image');
    el.appendChild(child);
    var id = uniqueId5('pattern_');
    el.id = id;
    this.el = el;
    this.id = id;
    this.cfg = cfg;
    var arr = regexPR.exec(cfg);
    var source = arr[2];
    child.setAttribute('href', source);
    var img = new Image();
    if (!source.match(/^data:/i)) {
      img.crossOrigin = 'Anonymous';
    }
    img.src = source;
    function onload() {
      el.setAttribute('width', '' + img.width);
      el.setAttribute('height', '' + img.height);
    }
    if (img.complete) {
      onload();
    } else {
      img.onload = onload;
      img.src = img.src;
    }
    return this;
  }
  Pattern2.prototype.match = function(type, attr) {
    return this.cfg === attr;
  };
  return Pattern2;
})();
var pattern_default = Pattern;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/defs/index.js
var Defs = (function() {
  function Defs2(canvas) {
    var el = createSVGElement('defs');
    var id = uniqueId6('defs_');
    el.id = id;
    canvas.appendChild(el);
    this.children = [];
    this.defaultArrow = {};
    this.el = el;
    this.canvas = canvas;
  }
  Defs2.prototype.find = function(type, attr) {
    var children = this.children;
    var result = null;
    for (var i = 0; i < children.length; i++) {
      if (children[i].match(type, attr)) {
        result = children[i].id;
        break;
      }
    }
    return result;
  };
  Defs2.prototype.findById = function(id) {
    var children = this.children;
    var flag = null;
    for (var i = 0; i < children.length; i++) {
      if (children[i].id === id) {
        flag = children[i];
        break;
      }
    }
    return flag;
  };
  Defs2.prototype.add = function(item) {
    this.children.push(item);
    item.canvas = this.canvas;
    item.parent = this;
  };
  Defs2.prototype.getDefaultArrow = function(attrs, name) {
    var stroke = attrs.stroke || attrs.strokeStyle;
    if (this.defaultArrow[stroke]) {
      return this.defaultArrow[stroke].id;
    }
    var arrow = new arrow_default(attrs, name);
    this.defaultArrow[stroke] = arrow;
    this.el.appendChild(arrow.el);
    this.add(arrow);
    return arrow.id;
  };
  Defs2.prototype.addGradient = function(cfg) {
    var gradient = new gradient_default(cfg);
    this.el.appendChild(gradient.el);
    this.add(gradient);
    return gradient.id;
  };
  Defs2.prototype.addArrow = function(attrs, name) {
    var arrow = new arrow_default(attrs, name);
    this.el.appendChild(arrow.el);
    this.add(arrow);
    return arrow.id;
  };
  Defs2.prototype.addShadow = function(cfg) {
    var shadow = new shadow_default(cfg);
    this.el.appendChild(shadow.el);
    this.add(shadow);
    return shadow.id;
  };
  Defs2.prototype.addPattern = function(cfg) {
    var pattern = new pattern_default(cfg);
    this.el.appendChild(pattern.el);
    this.add(pattern);
    return pattern.id;
  };
  Defs2.prototype.addClip = function(cfg) {
    var clip = new clip_default(cfg);
    this.el.appendChild(clip.el);
    this.add(clip);
    return clip.id;
  };
  return Defs2;
})();
var defs_default = Defs;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/canvas.js
var Canvas = (function(_super) {
  __extends14(Canvas2, _super);
  function Canvas2(cfg) {
    return (
      _super.call(
        this,
        __assign10(__assign10({}, cfg), {
          autoDraw: true,
          renderer: 'svg'
        })
      ) || this
    );
  }
  Canvas2.prototype.getShapeBase = function() {
    return shape_exports;
  };
  Canvas2.prototype.getGroupBase = function() {
    return group_default;
  };
  Canvas2.prototype.getShape = function(x, y, ev) {
    var target = ev.target || ev.srcElement;
    if (!SHAPE_TO_TAGS[target.tagName]) {
      var parent_1 = target.parentNode;
      while (parent_1 && !SHAPE_TO_TAGS[parent_1.tagName]) {
        parent_1 = parent_1.parentNode;
      }
      target = parent_1;
    }
    return this.find(function(child) {
      return child.get('el') === target;
    });
  };
  Canvas2.prototype.createDom = function() {
    var element = createSVGElement('svg');
    var context = new defs_default(element);
    element.setAttribute('width', '' + this.get('width'));
    element.setAttribute('height', '' + this.get('height'));
    this.set('context', context);
    return element;
  };
  Canvas2.prototype.onCanvasChange = function(changeType) {
    var context = this.get('context');
    var el = this.get('el');
    if (changeType === 'sort') {
      var children_1 = this.get('children');
      if (children_1 && children_1.length) {
        sortDom(this, function(a, b) {
          return children_1.indexOf(a) - children_1.indexOf(b) ? 1 : 0;
        });
      }
    } else if (changeType === 'clear') {
      if (el) {
        el.innerHTML = '';
        var defsEl = context.el;
        defsEl.innerHTML = '';
        el.appendChild(defsEl);
      }
    } else if (changeType === 'matrix') {
      setTransform(this);
    } else if (changeType === 'clip') {
      setClip(this, context);
    } else if (changeType === 'changeSize') {
      el.setAttribute('width', '' + this.get('width'));
      el.setAttribute('height', '' + this.get('height'));
    }
  };
  Canvas2.prototype.draw = function() {
    var context = this.get('context');
    var children = this.getChildren();
    setClip(this, context);
    if (children.length) {
      drawChildren(context, children);
    }
  };
  return Canvas2;
})(AbstractCanvas);
var canvas_default = Canvas;

// esm-build-af0860f6e9cfbe82f01d45e4363de330dc63bd3e-2003ce56/node_modules/@antv/g-svg/esm/index.js
var version = '0.5.6';
export { canvas_default as Canvas, group_default as Group, shape_exports as Shape, version };
