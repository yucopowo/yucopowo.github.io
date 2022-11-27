/* esm.sh - esbuild bundle(@antv/component@0.8.28) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/index.js
var annotation_exports = {};
__export(annotation_exports, {
  Arc: () => arc_default,
  DataMarker: () => data_marker_default,
  DataRegion: () => data_region_default,
  Html: () => html_default,
  Image: () => image_default,
  Line: () => line_default,
  Region: () => region_default,
  RegionFilter: () => region_filter_default,
  Shape: () => shape_default,
  Text: () => text_default
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/line.js
import { __assign as __assign4, __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isNumber as isNumber2, isString } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/abstract/group-component.js
import {
  __assign as __assign2,
  __extends as __extends2,
  __rest
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  difference,
  each as each3,
  isNil as isNil2,
  keys,
  mix,
  pick
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/event.js
import { Event as GraphEvent } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
function propagationDelegate(group, eventName, eventObject) {
  var event = new GraphEvent(eventName, eventObject);
  event.target = group;
  event.propagationPath.push(group);
  group.emitDelegation(eventName, event);
  var parent = group.getParent();
  while (parent) {
    parent.emitDelegation(eventName, event);
    event.propagationPath.push(parent);
    parent = parent.getParent();
  }
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/matrix.js
import { ext, vec2, vec3 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
var identityMatrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function getMatrixByAngle(point, angle, matrix) {
  if (matrix === void 0) {
    matrix = identityMatrix;
  }
  if (!angle) {
    return null;
  }
  var m = ext.transform(matrix, [
    ['t', -point.x, -point.y],
    ['r', angle],
    ['t', point.x, point.y]
  ]);
  return m;
}
function getMatrixByTranslate(point, currentMatrix) {
  if (!point.x && !point.y) {
    return null;
  }
  return ext.transform(currentMatrix || identityMatrix, [['t', point.x, point.y]]);
}
function getAngleByMatrix(matrix) {
  var xVector = [1, 0, 0];
  var out = [0, 0, 0];
  vec3.transformMat3(out, xVector, matrix);
  return Math.atan2(out[1], out[0]);
}
function multiplyVec2(matrix, v) {
  var out = [0, 0];
  vec2.transformMat3(out, v, matrix);
  return out;
}
function applyMatrix2BBox(matrix, bbox) {
  var topLeft = multiplyVec2(matrix, [bbox.minX, bbox.minY]);
  var topRight = multiplyVec2(matrix, [bbox.maxX, bbox.minY]);
  var bottomLeft = multiplyVec2(matrix, [bbox.minX, bbox.maxY]);
  var bottomRight = multiplyVec2(matrix, [bbox.maxX, bbox.maxY]);
  var minX = Math.min(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
  var maxX = Math.max(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
  var minY = Math.min(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
  var maxY = Math.max(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
  return {
    x: minX,
    y: minY,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function applyRotate(shape, rotate, x, y) {
  if (rotate) {
    var matrix = getMatrixByAngle(
      {
        x,
        y
      },
      rotate,
      shape.getMatrix()
    );
    shape.setMatrix(matrix);
  }
}
function applyTranslate(shape, x, y) {
  var translateMatrix = getMatrixByTranslate({
    x,
    y
  });
  shape.attr('matrix', translateMatrix);
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/util.js
import { each, isArray, isNil, isNumber } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function formatPadding(padding) {
  var top = 0;
  var left = 0;
  var right = 0;
  var bottom = 0;
  if (isNumber(padding)) {
    top = left = right = bottom = padding;
  } else if (isArray(padding)) {
    top = padding[0];
    right = !isNil(padding[1]) ? padding[1] : padding[0];
    bottom = !isNil(padding[2]) ? padding[2] : padding[0];
    left = !isNil(padding[3]) ? padding[3] : right;
  }
  return [top, right, bottom, left];
}
function clearDom(container) {
  var children = container.childNodes;
  var length = children.length;
  for (var i = length - 1; i >= 0; i--) {
    container.removeChild(children[i]);
  }
}
function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp('(\\s|^)' + cName + '(\\s|$)'));
}
function regionToBBox(region) {
  var start = region.start,
    end = region.end;
  var minX = Math.min(start.x, end.x);
  var minY = Math.min(start.y, end.y);
  var maxX = Math.max(start.x, end.x);
  var maxY = Math.max(start.y, end.y);
  return {
    x: minX,
    y: minY,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function pointsToBBox(points) {
  var xs = points.map(function(point) {
    return point.x;
  });
  var ys = points.map(function(point) {
    return point.y;
  });
  var minX = Math.min.apply(Math, xs);
  var minY = Math.min.apply(Math, ys);
  var maxX = Math.max.apply(Math, xs);
  var maxY = Math.max.apply(Math, ys);
  return {
    x: minX,
    y: minY,
    minX,
    minY,
    maxX,
    maxY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function createBBox(x, y, width, height) {
  var maxX = x + width;
  var maxY = y + height;
  return {
    x,
    y,
    width,
    height,
    minX: x,
    minY: y,
    maxX: isNaN(maxX) ? 0 : maxX,
    maxY: isNaN(maxY) ? 0 : maxY
  };
}
function getValueByPercent(min, max, percent) {
  return (1 - percent) * min + max * percent;
}
function getCirclePoint(center, radius, angle) {
  return {
    x: center.x + Math.cos(angle) * radius,
    y: center.y + Math.sin(angle) * radius
  };
}
function distance(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}
var near = function(x, y, e) {
  if (e === void 0) {
    e = Math.pow(Number.EPSILON, 0.5);
  }
  return [x, y].includes(Infinity) ? Math.abs(x) === Math.abs(y) : Math.abs(x - y) < e;
};
function intersectBBox(box1, box2) {
  var minX = Math.max(box1.minX, box2.minX);
  var minY = Math.max(box1.minY, box2.minY);
  var maxX = Math.min(box1.maxX, box2.maxX);
  var maxY = Math.min(box1.maxY, box2.maxY);
  return createBBox(minX, minY, maxX - minX, maxY - minY);
}
function getBBoxWithClip(element) {
  var clipShape = element.getClip();
  var clipBBox = clipShape && clipShape.getBBox();
  var bbox;
  if (!element.isGroup()) {
    bbox = element.getBBox();
  } else {
    var minX_1 = Infinity;
    var maxX_1 = -Infinity;
    var minY_1 = Infinity;
    var maxY_1 = -Infinity;
    var children = element.getChildren();
    if (children.length > 0) {
      each(children, function(child) {
        if (child.get('visible')) {
          if (child.isGroup() && child.get('children').length === 0) {
            return true;
          }
          var box = getBBoxWithClip(child);
          var leftTop = child.applyToMatrix([box.minX, box.minY, 1]);
          var leftBottom = child.applyToMatrix([box.minX, box.maxY, 1]);
          var rightTop = child.applyToMatrix([box.maxX, box.minY, 1]);
          var rightBottom = child.applyToMatrix([box.maxX, box.maxY, 1]);
          var boxMinX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
          var boxMaxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
          var boxMinY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);
          var boxMaxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);
          if (boxMinX < minX_1) {
            minX_1 = boxMinX;
          }
          if (boxMaxX > maxX_1) {
            maxX_1 = boxMaxX;
          }
          if (boxMinY < minY_1) {
            minY_1 = boxMinY;
          }
          if (boxMaxY > maxY_1) {
            maxY_1 = boxMaxY;
          }
        }
      });
    } else {
      minX_1 = 0;
      maxX_1 = 0;
      minY_1 = 0;
      maxY_1 = 0;
    }
    bbox = createBBox(minX_1, minY_1, maxX_1 - minX_1, maxY_1 - minY_1);
  }
  if (clipBBox) {
    return intersectBBox(bbox, clipBBox);
  } else {
    return bbox;
  }
}
function updateClip(element, newElement) {
  if (!element.getClip() && !newElement.getClip()) {
    return;
  }
  var newClipShape = newElement.getClip();
  if (!newClipShape) {
    element.setClip(null);
    return;
  }
  var clipCfg = {
    type: newClipShape.get('type'),
    attrs: newClipShape.attr()
  };
  element.setClip(clipCfg);
}
function toPx(number) {
  return number + 'px';
}
function getTextPoint(start, end, position, offset) {
  var lineLength = distance(start, end);
  var offsetPercent = offset / lineLength;
  var percent = 0;
  if (position === 'start') {
    percent = 0 - offsetPercent;
  } else if (position === 'end') {
    percent = 1 + offsetPercent;
  }
  return {
    x: getValueByPercent(start.x, end.x, percent),
    y: getValueByPercent(start.y, end.y, percent)
  };
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/abstract/component.js
import { __assign, __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { Base } from '/cdn/v99/@antv/g-base@0.5.11/es2022/g-base.development.js';
import { deepMix, each as each2, hasKey, isObject } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var LOCATION_FIELD_MAP = {
  none: [],
  point: ['x', 'y'],
  region: ['start', 'end'],
  points: ['points'],
  circle: ['center', 'radius', 'startAngle', 'endAngle']
};
var Component = (function(_super) {
  __extends(Component2, _super);
  function Component2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.initCfg();
    return _this;
  }
  Component2.prototype.getDefaultCfg = function() {
    return {
      id: '',
      name: '',
      type: '',
      locationType: 'none',
      offsetX: 0,
      offsetY: 0,
      animate: false,
      capture: true,
      updateAutoRender: false,
      animateOption: {
        appear: null,
        update: {
          duration: 400,
          easing: 'easeQuadInOut'
        },
        enter: {
          duration: 400,
          easing: 'easeQuadInOut'
        },
        leave: {
          duration: 350,
          easing: 'easeQuadIn'
        }
      },
      events: null,
      defaultCfg: {},
      visible: true
    };
  };
  Component2.prototype.clear = function() {};
  Component2.prototype.update = function(cfg) {
    var _this = this;
    var defaultCfg = this.get('defaultCfg') || {};
    each2(cfg, function(value, name) {
      var originCfg = _this.get(name);
      var newCfg = value;
      if (originCfg !== value) {
        if (isObject(value) && defaultCfg[name]) {
          newCfg = deepMix({}, defaultCfg[name], value);
        }
        _this.set(name, newCfg);
      }
    });
    this.updateInner(cfg);
    this.afterUpdate(cfg);
  };
  Component2.prototype.updateInner = function(cfg) {};
  Component2.prototype.afterUpdate = function(cfg) {
    if (hasKey(cfg, 'visible')) {
      if (cfg.visible) {
        this.show();
      } else {
        this.hide();
      }
    }
    if (hasKey(cfg, 'capture')) {
      this.setCapture(cfg.capture);
    }
  };
  Component2.prototype.getLayoutBBox = function() {
    return this.getBBox();
  };
  Component2.prototype.getLocationType = function() {
    return this.get('locationType');
  };
  Component2.prototype.getOffset = function() {
    return {
      offsetX: this.get('offsetX'),
      offsetY: this.get('offsetY')
    };
  };
  Component2.prototype.setOffset = function(offsetX, offsetY) {
    this.update({
      offsetX,
      offsetY
    });
  };
  Component2.prototype.setLocation = function(cfg) {
    var location = __assign({}, cfg);
    this.update(location);
  };
  Component2.prototype.getLocation = function() {
    var _this = this;
    var location = {};
    var locationType = this.get('locationType');
    var fields = LOCATION_FIELD_MAP[locationType];
    each2(fields, function(field) {
      location[field] = _this.get(field);
    });
    return location;
  };
  Component2.prototype.isList = function() {
    return false;
  };
  Component2.prototype.isSlider = function() {
    return false;
  };
  Component2.prototype.init = function() {};
  Component2.prototype.initCfg = function() {
    var _this = this;
    var defaultCfg = this.get('defaultCfg');
    each2(defaultCfg, function(value, name) {
      var cfg = _this.get(name);
      if (isObject(cfg)) {
        var newCfg = deepMix({}, value, cfg);
        _this.set(name, newCfg);
      }
    });
  };
  return Component2;
})(Base);
var component_default = Component;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/abstract/group-component.js
var STATUS_UPDATE = 'update_status';
var COPY_PROPERTIES = ['visible', 'tip', 'delegateObject'];
var COPY_PROPERTIES_EXCLUDES = ['container', 'group', 'shapesMap', 'isRegister', 'isUpdating', 'destroyed'];
var GroupComponent = (function(_super) {
  __extends2(GroupComponent2, _super);
  function GroupComponent2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  GroupComponent2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign2(__assign2({}, cfg), {
      container: null,
      shapesMap: {},
      group: null,
      capture: true,
      isRegister: false,
      isUpdating: false,
      isInit: true
    });
  };
  GroupComponent2.prototype.remove = function() {
    this.clear();
    var group = this.get('group');
    group.remove();
  };
  GroupComponent2.prototype.clear = function() {
    var group = this.get('group');
    group.clear();
    this.set('shapesMap', {});
    this.clearOffScreenCache();
    this.set('isInit', true);
  };
  GroupComponent2.prototype.getChildComponentById = function(id) {
    var group = this.getElementById(id);
    var inst = group && group.get('component');
    return inst;
  };
  GroupComponent2.prototype.getElementById = function(id) {
    return this.get('shapesMap')[id];
  };
  GroupComponent2.prototype.getElementByLocalId = function(localId) {
    var id = this.getElementId(localId);
    return this.getElementById(id);
  };
  GroupComponent2.prototype.getElementsByName = function(name) {
    var rst = [];
    each3(this.get('shapesMap'), function(elem) {
      if (elem.get('name') === name) {
        rst.push(elem);
      }
    });
    return rst;
  };
  GroupComponent2.prototype.getContainer = function() {
    return this.get('container');
  };
  GroupComponent2.prototype.updateInner = function(cfg) {
    this.offScreenRender();
    if (this.get('updateAutoRender')) {
      this.render();
    }
  };
  GroupComponent2.prototype.render = function() {
    var offScreenGroup = this.get('offScreenGroup');
    if (!offScreenGroup) {
      offScreenGroup = this.offScreenRender();
    }
    var group = this.get('group');
    this.updateElements(offScreenGroup, group);
    this.deleteElements();
    this.applyOffset();
    if (!this.get('eventInitted')) {
      this.initEvent();
      this.set('eventInitted', true);
    }
    this.set('isInit', false);
  };
  GroupComponent2.prototype.show = function() {
    var group = this.get('group');
    group.show();
    this.set('visible', true);
  };
  GroupComponent2.prototype.hide = function() {
    var group = this.get('group');
    group.hide();
    this.set('visible', false);
  };
  GroupComponent2.prototype.setCapture = function(capture) {
    var group = this.get('group');
    group.set('capture', capture);
    this.set('capture', capture);
  };
  GroupComponent2.prototype.destroy = function() {
    this.removeEvent();
    this.remove();
    _super.prototype.destroy.call(this);
  };
  GroupComponent2.prototype.getBBox = function() {
    return this.get('group').getCanvasBBox();
  };
  GroupComponent2.prototype.getLayoutBBox = function() {
    var group = this.get('group');
    var bbox = this.getInnerLayoutBBox();
    var matrix = group.getTotalMatrix();
    if (matrix) {
      bbox = applyMatrix2BBox(matrix, bbox);
    }
    return bbox;
  };
  GroupComponent2.prototype.on = function(evt, callback, once) {
    var group = this.get('group');
    group.on(evt, callback, once);
    return this;
  };
  GroupComponent2.prototype.off = function(evt, callback) {
    var group = this.get('group');
    group && group.off(evt, callback);
    return this;
  };
  GroupComponent2.prototype.emit = function(eventName, eventObject) {
    var group = this.get('group');
    group.emit(eventName, eventObject);
  };
  GroupComponent2.prototype.init = function() {
    _super.prototype.init.call(this);
    if (!this.get('group')) {
      this.initGroup();
    }
    this.offScreenRender();
  };
  GroupComponent2.prototype.getInnerLayoutBBox = function() {
    return this.get('offScreenBBox') || this.get('group').getBBox();
  };
  GroupComponent2.prototype.delegateEmit = function(eventName, eventObject) {
    var group = this.get('group');
    eventObject.target = group;
    group.emit(eventName, eventObject);
    propagationDelegate(group, eventName, eventObject);
  };
  GroupComponent2.prototype.createOffScreenGroup = function() {
    var group = this.get('group');
    var GroupClass = group.getGroupBase();
    var newGroup = new GroupClass({
      delegateObject: this.getDelegateObject()
    });
    return newGroup;
  };
  GroupComponent2.prototype.applyOffset = function() {
    var offsetX = this.get('offsetX');
    var offsetY = this.get('offsetY');
    this.moveElementTo(this.get('group'), {
      x: offsetX,
      y: offsetY
    });
  };
  GroupComponent2.prototype.initGroup = function() {
    var container = this.get('container');
    this.set(
      'group',
      container.addGroup({
        id: this.get('id'),
        name: this.get('name'),
        capture: this.get('capture'),
        visible: this.get('visible'),
        isComponent: true,
        component: this,
        delegateObject: this.getDelegateObject()
      })
    );
  };
  GroupComponent2.prototype.offScreenRender = function() {
    this.clearOffScreenCache();
    var offScreenGroup = this.createOffScreenGroup();
    this.renderInner(offScreenGroup);
    this.set('offScreenGroup', offScreenGroup);
    this.set('offScreenBBox', getBBoxWithClip(offScreenGroup));
    return offScreenGroup;
  };
  GroupComponent2.prototype.addGroup = function(parent, cfg) {
    this.appendDelegateObject(parent, cfg);
    var group = parent.addGroup(cfg);
    if (this.get('isRegister')) {
      this.registerElement(group);
    }
    return group;
  };
  GroupComponent2.prototype.addShape = function(parent, cfg) {
    this.appendDelegateObject(parent, cfg);
    var shape = parent.addShape(cfg);
    if (this.get('isRegister')) {
      this.registerElement(shape);
    }
    return shape;
  };
  GroupComponent2.prototype.addComponent = function(parent, cfg) {
    var id = cfg.id,
      Ctor = cfg.component,
      restCfg = __rest(cfg, ['id', 'component']);
    var inst = new Ctor(
      __assign2(__assign2({}, restCfg), {
        id,
        container: parent,
        updateAutoRender: this.get('updateAutoRender')
      })
    );
    inst.init();
    inst.render();
    if (this.get('isRegister')) {
      this.registerElement(inst.get('group'));
    }
    return inst;
  };
  GroupComponent2.prototype.initEvent = function() {};
  GroupComponent2.prototype.removeEvent = function() {
    var group = this.get('group');
    group.off();
  };
  GroupComponent2.prototype.getElementId = function(localId) {
    var id = this.get('id');
    var name = this.get('name');
    return id + '-' + name + '-' + localId;
  };
  GroupComponent2.prototype.registerElement = function(element) {
    var id = element.get('id');
    this.get('shapesMap')[id] = element;
  };
  GroupComponent2.prototype.unregisterElement = function(element) {
    var id = element.get('id');
    delete this.get('shapesMap')[id];
  };
  GroupComponent2.prototype.moveElementTo = function(element, point) {
    var matrix = getMatrixByTranslate(point);
    element.attr('matrix', matrix);
  };
  GroupComponent2.prototype.addAnimation = function(elmentName, newElement, animateCfg) {
    var originOpacity = newElement.attr('opacity');
    if (isNil2(originOpacity)) {
      originOpacity = 1;
    }
    newElement.attr('opacity', 0);
    newElement.animate(
      {
        opacity: originOpacity
      },
      animateCfg
    );
  };
  GroupComponent2.prototype.removeAnimation = function(elementName, originElement, animateCfg) {
    originElement.animate(
      {
        opacity: 0
      },
      animateCfg
    );
  };
  GroupComponent2.prototype.updateAnimation = function(elementName, originElement, newAttrs, animateCfg) {
    originElement.animate(newAttrs, animateCfg);
  };
  GroupComponent2.prototype.updateElements = function(newGroup, originGroup) {
    var _this = this;
    var animate = this.get('animate');
    var animateOption = this.get('animateOption');
    var children = newGroup.getChildren().slice(0);
    var preElement;
    each3(children, function(element) {
      var elementId = element.get('id');
      var originElement = _this.getElementById(elementId);
      var elementName = element.get('name');
      if (originElement) {
        if (element.get('isComponent')) {
          var childComponent = element.get('component');
          var origChildComponent = originElement.get('component');
          var newCfg = pick(childComponent.cfg, difference(keys(childComponent.cfg), COPY_PROPERTIES_EXCLUDES));
          origChildComponent.update(newCfg);
          originElement.set(STATUS_UPDATE, 'update');
        } else {
          var replaceAttrs = _this.getReplaceAttrs(originElement, element);
          if (animate && animateOption.update) {
            _this.updateAnimation(elementName, originElement, replaceAttrs, animateOption.update);
          } else {
            originElement.attr(replaceAttrs);
          }
          if (element.isGroup()) {
            _this.updateElements(element, originElement);
          }
          each3(COPY_PROPERTIES, function(name) {
            originElement.set(name, element.get(name));
          });
          updateClip(originElement, element);
          preElement = originElement;
          originElement.set(STATUS_UPDATE, 'update');
        }
      } else {
        originGroup.add(element);
        var siblings = originGroup.getChildren();
        siblings.splice(siblings.length - 1, 1);
        if (preElement) {
          var index = siblings.indexOf(preElement);
          siblings.splice(index + 1, 0, element);
        } else {
          siblings.unshift(element);
        }
        _this.registerElement(element);
        element.set(STATUS_UPDATE, 'add');
        if (element.get('isComponent')) {
          var childComponent = element.get('component');
          childComponent.set('container', originGroup);
        } else if (element.isGroup()) {
          _this.registerNewGroup(element);
        }
        preElement = element;
        if (animate) {
          var animateCfg = _this.get('isInit') ? animateOption.appear : animateOption.enter;
          if (animateCfg) {
            _this.addAnimation(elementName, element, animateCfg);
          }
        }
      }
    });
  };
  GroupComponent2.prototype.clearUpdateStatus = function(group) {
    var children = group.getChildren();
    each3(children, function(el) {
      el.set(STATUS_UPDATE, null);
    });
  };
  GroupComponent2.prototype.clearOffScreenCache = function() {
    var offScreenGroup = this.get('offScreenGroup');
    if (offScreenGroup) {
      offScreenGroup.destroy();
    }
    this.set('offScreenGroup', null);
    this.set('offScreenBBox', null);
  };
  GroupComponent2.prototype.getDelegateObject = function() {
    var _a3;
    var name = this.get('name');
    var delegateObject = ((_a3 = {}), (_a3[name] = this), (_a3.component = this), _a3);
    return delegateObject;
  };
  GroupComponent2.prototype.appendDelegateObject = function(parent, cfg) {
    var parentObject = parent.get('delegateObject');
    if (!cfg.delegateObject) {
      cfg.delegateObject = {};
    }
    mix(cfg.delegateObject, parentObject);
  };
  GroupComponent2.prototype.getReplaceAttrs = function(originElement, newElement) {
    var originAttrs = originElement.attr();
    var newAttrs = newElement.attr();
    each3(originAttrs, function(v, k) {
      if (newAttrs[k] === void 0) {
        newAttrs[k] = void 0;
      }
    });
    return newAttrs;
  };
  GroupComponent2.prototype.registerNewGroup = function(group) {
    var _this = this;
    var children = group.getChildren();
    each3(children, function(element) {
      _this.registerElement(element);
      element.set(STATUS_UPDATE, 'add');
      if (element.isGroup()) {
        _this.registerNewGroup(element);
      }
    });
  };
  GroupComponent2.prototype.deleteElements = function() {
    var _this = this;
    var shapesMap = this.get('shapesMap');
    var deleteArray = [];
    each3(shapesMap, function(element, id) {
      if (!element.get(STATUS_UPDATE) || element.destroyed) {
        deleteArray.push([id, element]);
      } else {
        element.set(STATUS_UPDATE, null);
      }
    });
    var animate = this.get('animate');
    var animateOption = this.get('animateOption');
    each3(deleteArray, function(item) {
      var id = item[0],
        element = item[1];
      if (!element.destroyed) {
        var elementName = element.get('name');
        if (animate && animateOption.leave) {
          var callbackAnimCfg = mix(
            {
              callback: function() {
                _this.removeElement(element);
              }
            },
            animateOption.leave
          );
          _this.removeAnimation(elementName, element, callbackAnimCfg);
        } else {
          _this.removeElement(element);
        }
      }
      delete shapesMap[id];
    });
  };
  GroupComponent2.prototype.removeElement = function(element) {
    if (element.get('isGroup')) {
      var component = element.get('component');
      if (component) {
        component.destroy();
      }
    }
    element.remove();
  };
  return GroupComponent2;
})(component_default);
var group_component_default = GroupComponent;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/graphic.js
import { __assign as __assign3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/label.js
import {
  each as each4,
  isNil as isNil3,
  getEllipsisText,
  pick as pick2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/text.js
var ELLIPSIS_CODE = '\u2026';
function strLen(str) {
  var len = 0;
  for (var i = 0; i < str.length; i++) {
    len += charAtLength(str, i);
  }
  return len;
}
function charAtLength(str, i) {
  if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
    return 1;
  } else {
    return 2;
  }
}
function ellipsisString(str, reseveLength, position) {
  if (position === void 0) {
    position = 'tail';
  }
  var count = str.length;
  var rst = '';
  if (position === 'tail') {
    for (var i = 0, index = 0; i < reseveLength; ) {
      var charLength = charAtLength(str, index);
      if (i + charLength <= reseveLength) {
        rst += str[index];
        i += charAtLength(str, index);
        index++;
      } else {
        break;
      }
    }
    rst += ELLIPSIS_CODE;
  } else if (position === 'head') {
    for (var i = 0, index = count - 1; i < reseveLength; ) {
      var charLength = charAtLength(str, index);
      if (i + charLength <= reseveLength) {
        rst += str[index];
        i += charAtLength(str, index);
        index--;
      } else {
        break;
      }
    }
    rst = ELLIPSIS_CODE + rst;
  } else {
    var startStr = '';
    var endStr = '';
    for (var i = 0, startIndex = 0, endIndex = count - 1; i < reseveLength; ) {
      var startCodeLen = charAtLength(str, startIndex);
      var hasAdd = false;
      if (startCodeLen + i <= reseveLength) {
        startStr += str[startIndex];
        startIndex++;
        i += startCodeLen;
        hasAdd = true;
      }
      var endCodeLen = charAtLength(str, endIndex);
      if (endCodeLen + i <= reseveLength) {
        endStr = str[endIndex] + endStr;
        i += endCodeLen;
        endIndex--;
        hasAdd = true;
      }
      if (!hasAdd) {
        break;
      }
    }
    rst = startStr + ELLIPSIS_CODE + endStr;
  }
  return rst;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/label.js
var ELLIPSIS_CODE2 = '\u2026';
var ELLIPSIS_CODE_LENGTH = 2;
var OPTIMIZE_THRESHOLD = 400;
function getMaxLabelWidthOptimized(labels) {
  var texts = labels.map(function(label) {
    var text = label.attr('text');
    return isNil3(text) ? '' : '' + text;
  });
  var maxLen = 0;
  var maxIdx = 0;
  for (var i = 0; i < texts.length; i += 1) {
    var len = 0;
    for (var j = 0; j <= texts[i].length; j += 1) {
      var code = texts[i].charCodeAt(j);
      if (code >= 19968 && code <= 40869) {
        len += 2;
      } else {
        len += 1;
      }
    }
    if (len > maxLen) {
      maxLen = len;
      maxIdx = i;
    }
  }
  return labels[maxIdx].getBBox().width;
}
function getMaxLabelWidth(labels) {
  if (labels.length > OPTIMIZE_THRESHOLD) {
    return getMaxLabelWidthOptimized(labels);
  }
  var max = 0;
  each4(labels, function(label) {
    var bbox = label.getBBox();
    var width = bbox.width;
    if (max < width) {
      max = width;
    }
  });
  return max;
}
function getLabelLength(isVertical, label) {
  var bbox = label.getCanvasBBox();
  return isVertical ? bbox.width : bbox.height;
}
function ellipsisLabel(isVertical, label, limitLength, position) {
  var _a3;
  if (position === void 0) {
    position = 'tail';
  }
  var text = (_a3 = label.attr('text')) !== null && _a3 !== void 0 ? _a3 : '';
  if (position === 'tail') {
    var font = pick2(label.attr(), ['fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'fontVariant']);
    var ellipsisText = getEllipsisText(text, limitLength, font, '\u2026');
    if (text !== ellipsisText) {
      label.attr('text', ellipsisText);
      label.set('tip', text);
      return true;
    }
    label.set('tip', null);
    return false;
  }
  var labelLength = getLabelLength(isVertical, label);
  var codeLength = strLen(text);
  var ellipsisFlag = false;
  if (limitLength < labelLength) {
    var reserveLength = Math.floor((limitLength / labelLength) * codeLength) - ELLIPSIS_CODE_LENGTH;
    var newText = void 0;
    if (reserveLength >= 0) {
      newText = ellipsisString(text, reserveLength, position);
    } else {
      newText = ELLIPSIS_CODE2;
    }
    if (newText) {
      label.attr('text', newText);
      ellipsisFlag = true;
    }
  }
  if (ellipsisFlag) {
    label.set('tip', text);
  } else {
    label.set('tip', null);
  }
  return ellipsisFlag;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/graphic.js
function renderTag(container, tagCfg) {
  var x = tagCfg.x,
    y = tagCfg.y,
    content = tagCfg.content,
    style = tagCfg.style,
    id = tagCfg.id,
    name = tagCfg.name,
    rotate = tagCfg.rotate,
    maxLength = tagCfg.maxLength,
    autoEllipsis = tagCfg.autoEllipsis,
    isVertical = tagCfg.isVertical,
    ellipsisPosition = tagCfg.ellipsisPosition,
    background = tagCfg.background;
  var tagGroup = container.addGroup({
    id: id + '-group',
    name: name + '-group',
    attrs: {
      x,
      y
    }
  });
  var text = tagGroup.addShape({
    type: 'text',
    id,
    name,
    attrs: __assign3(
      {
        x: 0,
        y: 0,
        text: content
      },
      style
    )
  });
  var padding = formatPadding(get(background, 'padding', 0));
  if (maxLength && autoEllipsis) {
    var maxTextLength = maxLength - (padding[1] + padding[3]);
    ellipsisLabel(!isVertical, text, maxTextLength, ellipsisPosition);
  }
  if (background) {
    var backgroundStyle = get(background, 'style', {});
    var _a3 = text.getCanvasBBox(),
      minX = _a3.minX,
      minY = _a3.minY,
      width = _a3.width,
      height = _a3.height;
    var tagBg = tagGroup.addShape('rect', {
      id: id + '-bg',
      name: id + '-bg',
      attrs: __assign3(
        {
          x: minX - padding[3],
          y: minY - padding[0],
          width: width + padding[1] + padding[3],
          height: height + padding[0] + padding[2]
        },
        backgroundStyle
      )
    });
    tagBg.toBack();
  }
  applyTranslate(tagGroup, x, y);
  applyRotate(tagGroup, rotate, x, y);
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/theme.js
var theme_default = {
  fontFamily:
    '\n  BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue",\n  Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",\n  SimSun, "sans-serif"',
  textColor: '#2C3542',
  activeTextColor: '#333333',
  uncheckedColor: '#D8D8D8',
  lineColor: '#416180',
  regionColor: '#CCD7EB',
  verticalAxisRotate: -Math.PI / 4,
  horizontalAxisRotate: Math.PI / 4,
  descriptionIconStroke: '#fff',
  descriptionIconFill: 'rgba(58, 73, 101, .25)'
};

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/line.js
var LineAnnotation = (function(_super) {
  __extends3(LineAnnotation2, _super);
  function LineAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LineAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign4(__assign4({}, cfg), {
      name: 'annotation',
      type: 'line',
      locationType: 'region',
      start: null,
      end: null,
      style: {},
      text: null,
      defaultCfg: {
        style: {
          fill: theme_default.textColor,
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'bottom',
          fontFamily: theme_default.fontFamily
        },
        text: {
          position: 'center',
          autoRotate: true,
          content: null,
          offsetX: 0,
          offsetY: 0,
          style: {
            stroke: theme_default.lineColor,
            lineWidth: 1
          }
        }
      }
    });
  };
  LineAnnotation2.prototype.renderInner = function(group) {
    this.renderLine(group);
    if (this.get('text')) {
      this.renderLabel(group);
    }
  };
  LineAnnotation2.prototype.renderLine = function(group) {
    var start = this.get('start');
    var end = this.get('end');
    var style = this.get('style');
    this.addShape(group, {
      type: 'line',
      id: this.getElementId('line'),
      name: 'annotation-line',
      attrs: __assign4(
        {
          x1: start.x,
          y1: start.y,
          x2: end.x,
          y2: end.y
        },
        style
      )
    });
  };
  LineAnnotation2.prototype.getLabelPoint = function(start, end, position) {
    var percent;
    if (position === 'start') {
      percent = 0;
    } else if (position === 'center') {
      percent = 0.5;
    } else if (isString(position) && position.indexOf('%') !== -1) {
      percent = parseInt(position, 10) / 100;
    } else if (isNumber2(position)) {
      percent = position;
    } else {
      percent = 1;
    }
    if (percent > 1 || percent < 0) {
      percent = 1;
    }
    return {
      x: getValueByPercent(start.x, end.x, percent),
      y: getValueByPercent(start.y, end.y, percent)
    };
  };
  LineAnnotation2.prototype.renderLabel = function(group) {
    var text = this.get('text');
    var start = this.get('start');
    var end = this.get('end');
    var position = text.position,
      content = text.content,
      style = text.style,
      offsetX = text.offsetX,
      offsetY = text.offsetY,
      autoRotate = text.autoRotate,
      maxLength = text.maxLength,
      autoEllipsis = text.autoEllipsis,
      ellipsisPosition = text.ellipsisPosition,
      background = text.background,
      _a3 = text.isVertical,
      isVertical = _a3 === void 0 ? false : _a3;
    var point = this.getLabelPoint(start, end, position);
    var x = point.x + offsetX;
    var y = point.y + offsetY;
    var cfg = {
      id: this.getElementId('line-text'),
      name: 'annotation-line-text',
      x,
      y,
      content,
      style,
      maxLength,
      autoEllipsis,
      ellipsisPosition,
      background,
      isVertical
    };
    if (autoRotate) {
      var vector = [end.x - start.x, end.y - start.y];
      cfg.rotate = Math.atan2(vector[1], vector[0]);
    }
    renderTag(group, cfg);
  };
  return LineAnnotation2;
})(group_component_default);
var line_default = LineAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/text.js
import { __assign as __assign5, __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var TextAnnotation = (function(_super) {
  __extends4(TextAnnotation2, _super);
  function TextAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  TextAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign5(__assign5({}, cfg), {
      name: 'annotation',
      type: 'text',
      locationType: 'point',
      x: 0,
      y: 0,
      content: '',
      rotate: null,
      style: {},
      background: null,
      maxLength: null,
      autoEllipsis: true,
      isVertical: false,
      ellipsisPosition: 'tail',
      defaultCfg: {
        style: {
          fill: theme_default.textColor,
          fontSize: 12,
          textAlign: 'center',
          textBaseline: 'middle',
          fontFamily: theme_default.fontFamily
        }
      }
    });
  };
  TextAnnotation2.prototype.setLocation = function(location) {
    this.set('x', location.x);
    this.set('y', location.y);
    this.resetLocation();
  };
  TextAnnotation2.prototype.renderInner = function(group) {
    var _a3 = this.getLocation(),
      x = _a3.x,
      y = _a3.y;
    var content = this.get('content');
    var style = this.get('style');
    var id = this.getElementId('text');
    var name = this.get('name') + '-text';
    var maxLength = this.get('maxLength');
    var autoEllipsis = this.get('autoEllipsis');
    var isVertical = this.get('isVertical');
    var ellipsisPosition = this.get('ellipsisPosition');
    var background = this.get('background');
    var rotate = this.get('rotate');
    var cfg = {
      id,
      name,
      x,
      y,
      content,
      style,
      maxLength,
      autoEllipsis,
      isVertical,
      ellipsisPosition,
      background,
      rotate
    };
    renderTag(group, cfg);
  };
  TextAnnotation2.prototype.resetLocation = function() {
    var textGroup = this.getElementByLocalId('text-group');
    if (textGroup) {
      var _a3 = this.getLocation(),
        x = _a3.x,
        y = _a3.y;
      var rotate = this.get('rotate');
      applyTranslate(textGroup, x, y);
      applyRotate(textGroup, rotate, x, y);
    }
  };
  return TextAnnotation2;
})(group_component_default);
var text_default = TextAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/arc.js
import { __assign as __assign6, __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ArcAnnotation = (function(_super) {
  __extends5(ArcAnnotation2, _super);
  function ArcAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ArcAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign6(__assign6({}, cfg), {
      name: 'annotation',
      type: 'arc',
      locationType: 'circle',
      center: null,
      radius: 100,
      startAngle: -Math.PI / 2,
      endAngle: (Math.PI * 3) / 2,
      style: {
        stroke: '#999',
        lineWidth: 1
      }
    });
  };
  ArcAnnotation2.prototype.renderInner = function(group) {
    this.renderArc(group);
  };
  ArcAnnotation2.prototype.getArcPath = function() {
    var _a3 = this.getLocation(),
      center = _a3.center,
      radius = _a3.radius,
      startAngle = _a3.startAngle,
      endAngle = _a3.endAngle;
    var startPoint = getCirclePoint(center, radius, startAngle);
    var endPoint = getCirclePoint(center, radius, endAngle);
    var largeFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    var path = [['M', startPoint.x, startPoint.y]];
    if (endAngle - startAngle === Math.PI * 2) {
      var middlePoint = getCirclePoint(center, radius, startAngle + Math.PI);
      path.push(['A', radius, radius, 0, largeFlag, 1, middlePoint.x, middlePoint.y]);
      path.push(['A', radius, radius, 0, largeFlag, 1, endPoint.x, endPoint.y]);
    } else {
      path.push(['A', radius, radius, 0, largeFlag, 1, endPoint.x, endPoint.y]);
    }
    return path;
  };
  ArcAnnotation2.prototype.renderArc = function(group) {
    var path = this.getArcPath();
    var style = this.get('style');
    this.addShape(group, {
      type: 'path',
      id: this.getElementId('arc'),
      name: 'annotation-arc',
      attrs: __assign6(
        {
          path
        },
        style
      )
    });
  };
  return ArcAnnotation2;
})(group_component_default);
var arc_default = ArcAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/region.js
import { __assign as __assign7, __extends as __extends6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var RegionAnnotation = (function(_super) {
  __extends6(RegionAnnotation2, _super);
  function RegionAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  RegionAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign7(__assign7({}, cfg), {
      name: 'annotation',
      type: 'region',
      locationType: 'region',
      start: null,
      end: null,
      style: {},
      defaultCfg: {
        style: {
          lineWidth: 0,
          fill: theme_default.regionColor,
          opacity: 0.4
        }
      }
    });
  };
  RegionAnnotation2.prototype.renderInner = function(group) {
    this.renderRegion(group);
  };
  RegionAnnotation2.prototype.renderRegion = function(group) {
    var start = this.get('start');
    var end = this.get('end');
    var style = this.get('style');
    var bbox = regionToBBox({
      start,
      end
    });
    this.addShape(group, {
      type: 'rect',
      id: this.getElementId('region'),
      name: 'annotation-region',
      attrs: __assign7(
        {
          x: bbox.x,
          y: bbox.y,
          width: bbox.width,
          height: bbox.height
        },
        style
      )
    });
  };
  return RegionAnnotation2;
})(group_component_default);
var region_default = RegionAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/image.js
import { __assign as __assign8, __extends as __extends7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var ImageAnnotation = (function(_super) {
  __extends7(ImageAnnotation2, _super);
  function ImageAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ImageAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign8(__assign8({}, cfg), {
      name: 'annotation',
      type: 'image',
      locationType: 'region',
      start: null,
      end: null,
      src: null,
      style: {}
    });
  };
  ImageAnnotation2.prototype.renderInner = function(group) {
    this.renderImage(group);
  };
  ImageAnnotation2.prototype.getImageAttrs = function() {
    var start = this.get('start');
    var end = this.get('end');
    var style = this.get('style');
    var bbox = regionToBBox({
      start,
      end
    });
    var src = this.get('src');
    return __assign8(
      {
        x: bbox.x,
        y: bbox.y,
        img: src,
        width: bbox.width,
        height: bbox.height
      },
      style
    );
  };
  ImageAnnotation2.prototype.renderImage = function(group) {
    this.addShape(group, {
      type: 'image',
      id: this.getElementId('image'),
      name: 'annotation-image',
      attrs: this.getImageAttrs()
    });
  };
  return ImageAnnotation2;
})(group_component_default);
var image_default = ImageAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/data-marker.js
import {
  __assign as __assign9,
  __extends as __extends8,
  __rest as __rest2
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get as get2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DataMarkerAnnotation = (function(_super) {
  __extends8(DataMarkerAnnotation2, _super);
  function DataMarkerAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DataMarkerAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign9(__assign9({}, cfg), {
      name: 'annotation',
      type: 'dataMarker',
      locationType: 'point',
      x: 0,
      y: 0,
      point: {},
      line: {},
      text: {},
      direction: 'upward',
      autoAdjust: true,
      coordinateBBox: null,
      defaultCfg: {
        point: {
          display: true,
          style: {
            r: 3,
            fill: '#FFFFFF',
            stroke: '#1890FF',
            lineWidth: 2
          }
        },
        line: {
          display: true,
          length: 20,
          style: {
            stroke: theme_default.lineColor,
            lineWidth: 1
          }
        },
        text: {
          content: '',
          display: true,
          style: {
            fill: theme_default.textColor,
            opacity: 0.65,
            fontSize: 12,
            textAlign: 'start',
            fontFamily: theme_default.fontFamily
          }
        }
      }
    });
  };
  DataMarkerAnnotation2.prototype.renderInner = function(group) {
    if (get2(this.get('line'), 'display')) {
      this.renderLine(group);
    }
    if (get2(this.get('text'), 'display')) {
      this.renderText(group);
    }
    if (get2(this.get('point'), 'display')) {
      this.renderPoint(group);
    }
    if (this.get('autoAdjust')) {
      this.autoAdjust(group);
    }
  };
  DataMarkerAnnotation2.prototype.applyOffset = function() {
    this.moveElementTo(this.get('group'), {
      x: this.get('x') + this.get('offsetX'),
      y: this.get('y') + this.get('offsetY')
    });
  };
  DataMarkerAnnotation2.prototype.renderPoint = function(group) {
    var point = this.getShapeAttrs().point;
    this.addShape(group, {
      type: 'circle',
      id: this.getElementId('point'),
      name: 'annotation-point',
      attrs: point
    });
  };
  DataMarkerAnnotation2.prototype.renderLine = function(group) {
    var line = this.getShapeAttrs().line;
    this.addShape(group, {
      type: 'path',
      id: this.getElementId('line'),
      name: 'annotation-line',
      attrs: line
    });
  };
  DataMarkerAnnotation2.prototype.renderText = function(group) {
    var textAttrs = this.getShapeAttrs().text;
    var x = textAttrs.x,
      y = textAttrs.y,
      text = textAttrs.text,
      style = __rest2(textAttrs, ['x', 'y', 'text']);
    var _a3 = this.get('text'),
      background = _a3.background,
      maxLength = _a3.maxLength,
      autoEllipsis = _a3.autoEllipsis,
      isVertival = _a3.isVertival,
      ellipsisPosition = _a3.ellipsisPosition;
    var tagCfg = {
      x,
      y,
      id: this.getElementId('text'),
      name: 'annotation-text',
      content: text,
      style,
      background,
      maxLength,
      autoEllipsis,
      isVertival,
      ellipsisPosition
    };
    renderTag(group, tagCfg);
  };
  DataMarkerAnnotation2.prototype.autoAdjust = function(group) {
    var direction = this.get('direction');
    var x = this.get('x');
    var y = this.get('y');
    var lineLength = get2(this.get('line'), 'length', 0);
    var coordinateBBox = this.get('coordinateBBox');
    var _a3 = group.getBBox(),
      minX = _a3.minX,
      maxX = _a3.maxX,
      minY = _a3.minY,
      maxY = _a3.maxY;
    var textGroup = group.findById(this.getElementId('text-group'));
    var textShape = group.findById(this.getElementId('text'));
    var lineShape = group.findById(this.getElementId('line'));
    if (!coordinateBBox) {
      return;
    }
    if (textGroup) {
      if (x + minX <= coordinateBBox.minX) {
        var overflow = coordinateBBox.minX - (x + minX);
        applyTranslate(textGroup, textGroup.attr('x') + overflow, textGroup.attr('y'));
      }
      if (x + maxX >= coordinateBBox.maxX) {
        var overflow = x + maxX - coordinateBBox.maxX;
        applyTranslate(textGroup, textGroup.attr('x') - overflow, textGroup.attr('y'));
      }
    }
    if (
      (direction === 'upward' && y + minY <= coordinateBBox.minY) ||
      (direction !== 'upward' && y + maxY >= coordinateBBox.maxY)
    ) {
      var textBaseline = void 0;
      var factor = void 0;
      if (direction === 'upward' && y + minY <= coordinateBBox.minY) {
        textBaseline = 'top';
        factor = 1;
      } else {
        textBaseline = 'bottom';
        factor = -1;
      }
      textShape.attr('textBaseline', textBaseline);
      if (lineShape) {
        lineShape.attr('path', [
          ['M', 0, 0],
          ['L', 0, lineLength * factor]
        ]);
      }
      applyTranslate(textGroup, textGroup.attr('x'), (lineLength + 2) * factor);
    }
  };
  DataMarkerAnnotation2.prototype.getShapeAttrs = function() {
    var lineDisplay = get2(this.get('line'), 'display');
    var pointStyle = get2(this.get('point'), 'style', {});
    var lineStyle = get2(this.get('line'), 'style', {});
    var textStyle2 = get2(this.get('text'), 'style', {});
    var direction = this.get('direction');
    var lineLength = lineDisplay ? get2(this.get('line'), 'length', 0) : 0;
    var factor = direction === 'upward' ? -1 : 1;
    return {
      point: __assign9(
        {
          x: 0,
          y: 0
        },
        pointStyle
      ),
      line: __assign9(
        {
          path: [
            ['M', 0, 0],
            ['L', 0, lineLength * factor]
          ]
        },
        lineStyle
      ),
      text: __assign9(
        {
          x: 0,
          y: (lineLength + 2) * factor,
          text: get2(this.get('text'), 'content', ''),
          textBaseline: direction === 'upward' ? 'bottom' : 'top'
        },
        textStyle2
      )
    };
  };
  return DataMarkerAnnotation2;
})(group_component_default);
var data_marker_default = DataMarkerAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/data-region.js
import { __assign as __assign10, __extends as __extends9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { get as get3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DataRegionAnnotation = (function(_super) {
  __extends9(DataRegionAnnotation2, _super);
  function DataRegionAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  DataRegionAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign10(__assign10({}, cfg), {
      name: 'annotation',
      type: 'dataRegion',
      locationType: 'points',
      points: [],
      lineLength: 0,
      region: {},
      text: {},
      defaultCfg: {
        region: {
          style: {
            lineWidth: 0,
            fill: theme_default.regionColor,
            opacity: 0.4
          }
        },
        text: {
          content: '',
          style: {
            textAlign: 'center',
            textBaseline: 'bottom',
            fontSize: 12,
            fill: theme_default.textColor,
            fontFamily: theme_default.fontFamily
          }
        }
      }
    });
  };
  DataRegionAnnotation2.prototype.renderInner = function(group) {
    var regionStyle = get3(this.get('region'), 'style', {});
    var textStyle2 = get3(this.get('text'), 'style', {});
    var lineLength = this.get('lineLength') || 0;
    var points = this.get('points');
    if (!points.length) {
      return;
    }
    var bbox = pointsToBBox(points);
    var path = [];
    path.push(['M', points[0].x, bbox.minY - lineLength]);
    points.forEach(function(point) {
      path.push(['L', point.x, point.y]);
    });
    path.push(['L', points[points.length - 1].x, points[points.length - 1].y - lineLength]);
    this.addShape(group, {
      type: 'path',
      id: this.getElementId('region'),
      name: 'annotation-region',
      attrs: __assign10(
        {
          path
        },
        regionStyle
      )
    });
    var textCfg = __assign10(
      {
        id: this.getElementId('text'),
        name: 'annotation-text',
        x: (bbox.minX + bbox.maxX) / 2,
        y: bbox.minY - lineLength
      },
      this.get('text')
    );
    renderTag(group, textCfg);
  };
  return DataRegionAnnotation2;
})(group_component_default);
var data_region_default = DataRegionAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/region-filter.js
import { __assign as __assign11, __extends as __extends10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { clone, each as each5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var RegionFilterAnnotation = (function(_super) {
  __extends10(RegionFilterAnnotation2, _super);
  function RegionFilterAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  RegionFilterAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign11(__assign11({}, cfg), {
      name: 'annotation',
      type: 'regionFilter',
      locationType: 'region',
      start: null,
      end: null,
      color: null,
      shape: []
    });
  };
  RegionFilterAnnotation2.prototype.renderInner = function(group) {
    var _this = this;
    var start = this.get('start');
    var end = this.get('end');
    var layer = this.addGroup(group, {
      id: this.getElementId('region-filter'),
      capture: false
    });
    each5(this.get('shapes'), function(shape, shapeIdx) {
      var type = shape.get('type');
      var attrs = clone(shape.attr());
      _this.adjustShapeAttrs(attrs);
      _this.addShape(layer, {
        id: _this.getElementId('shape-' + type + '-' + shapeIdx),
        capture: false,
        type,
        attrs
      });
    });
    var clipBBox = regionToBBox({
      start,
      end
    });
    layer.setClip({
      type: 'rect',
      attrs: {
        x: clipBBox.minX,
        y: clipBBox.minY,
        width: clipBBox.width,
        height: clipBBox.height
      }
    });
  };
  RegionFilterAnnotation2.prototype.adjustShapeAttrs = function(attr) {
    var color = this.get('color');
    if (attr.fill) {
      attr.fill = attr.fillStyle = color;
    }
    attr.stroke = attr.strokeStyle = color;
  };
  return RegionFilterAnnotation2;
})(group_component_default);
var region_filter_default = RegionFilterAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/shape.js
import { __assign as __assign12, __extends as __extends11 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isFunction, noop } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var ShapeAnnotation = (function(_super) {
  __extends11(ShapeAnnotation2, _super);
  function ShapeAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ShapeAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign12(__assign12({}, cfg), {
      name: 'annotation',
      type: 'shape',
      draw: noop
    });
  };
  ShapeAnnotation2.prototype.renderInner = function(group) {
    var render = this.get('render');
    if (isFunction(render)) {
      render(group);
    }
  };
  return ShapeAnnotation2;
})(group_component_default);
var shape_default = ShapeAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/html.js
import { __assign as __assign14, __extends as __extends13 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  createDom as createDom2,
  getOuterHeight,
  getOuterWidth,
  modifyCSS as modifyCSS2
} from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
import {
  isElement,
  isFunction as isFunction2,
  isNumber as isNumber3,
  isString as isString3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/abstract/html-component.js
import { __assign as __assign13, __extends as __extends12 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { createDom, modifyCSS } from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
import {
  isNil as isNil4,
  isString as isString2,
  deepMix as deepMix2,
  each as each6,
  hasKey as hasKey2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var HtmlComponent = (function(_super) {
  __extends12(HtmlComponent2, _super);
  function HtmlComponent2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HtmlComponent2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign13(__assign13({}, cfg), {
      container: null,
      containerTpl: '<div></div>',
      updateAutoRender: true,
      containerClassName: '',
      parent: null
    });
  };
  HtmlComponent2.prototype.getContainer = function() {
    return this.get('container');
  };
  HtmlComponent2.prototype.show = function() {
    var container = this.get('container');
    container.style.display = '';
    this.set('visible', true);
  };
  HtmlComponent2.prototype.hide = function() {
    var container = this.get('container');
    container.style.display = 'none';
    this.set('visible', false);
  };
  HtmlComponent2.prototype.setCapture = function(capture) {
    var container = this.getContainer();
    var value = capture ? 'auto' : 'none';
    container.style.pointerEvents = value;
    this.set('capture', capture);
  };
  HtmlComponent2.prototype.getBBox = function() {
    var container = this.getContainer();
    var x = parseFloat(container.style.left) || 0;
    var y = parseFloat(container.style.top) || 0;
    return createBBox(x, y, container.clientWidth, container.clientHeight);
  };
  HtmlComponent2.prototype.clear = function() {
    var container = this.get('container');
    clearDom(container);
  };
  HtmlComponent2.prototype.destroy = function() {
    this.removeEvent();
    this.removeDom();
    _super.prototype.destroy.call(this);
  };
  HtmlComponent2.prototype.init = function() {
    _super.prototype.init.call(this);
    this.initContainer();
    this.initDom();
    this.resetStyles();
    this.applyStyles();
    this.initEvent();
    this.initCapture();
    this.initVisible();
  };
  HtmlComponent2.prototype.initCapture = function() {
    this.setCapture(this.get('capture'));
  };
  HtmlComponent2.prototype.initVisible = function() {
    if (!this.get('visible')) {
      this.hide();
    } else {
      this.show();
    }
  };
  HtmlComponent2.prototype.initDom = function() {};
  HtmlComponent2.prototype.initContainer = function() {
    var container = this.get('container');
    if (isNil4(container)) {
      container = this.createDom();
      var parent_1 = this.get('parent');
      if (isString2(parent_1)) {
        parent_1 = document.getElementById(parent_1);
        this.set('parent', parent_1);
      }
      parent_1.appendChild(container);
      if (this.get('containerId')) {
        container.setAttribute('id', this.get('containerId'));
      }
      this.set('container', container);
    } else if (isString2(container)) {
      container = document.getElementById(container);
      this.set('container', container);
    }
    if (!this.get('parent')) {
      this.set('parent', container.parentNode);
    }
  };
  HtmlComponent2.prototype.resetStyles = function() {
    var style = this.get('domStyles');
    var defaultStyles = this.get('defaultStyles');
    if (!style) {
      style = defaultStyles;
    } else {
      style = deepMix2({}, defaultStyles, style);
    }
    this.set('domStyles', style);
  };
  HtmlComponent2.prototype.applyStyles = function() {
    var domStyles = this.get('domStyles');
    if (!domStyles) {
      return;
    }
    var container = this.getContainer();
    this.applyChildrenStyles(container, domStyles);
    var containerClassName = this.get('containerClassName');
    if (containerClassName && hasClass(container, containerClassName)) {
      var containerCss = domStyles[containerClassName];
      modifyCSS(container, containerCss);
    }
  };
  HtmlComponent2.prototype.applyChildrenStyles = function(element, styles) {
    each6(styles, function(style, name) {
      var elements = element.getElementsByClassName(name);
      each6(elements, function(el) {
        modifyCSS(el, style);
      });
    });
  };
  HtmlComponent2.prototype.applyStyle = function(cssName, dom) {
    var domStyles = this.get('domStyles');
    modifyCSS(dom, domStyles[cssName]);
  };
  HtmlComponent2.prototype.createDom = function() {
    var containerTpl = this.get('containerTpl');
    return createDom(containerTpl);
  };
  HtmlComponent2.prototype.initEvent = function() {};
  HtmlComponent2.prototype.removeDom = function() {
    var container = this.get('container');
    container && container.parentNode && container.parentNode.removeChild(container);
  };
  HtmlComponent2.prototype.removeEvent = function() {};
  HtmlComponent2.prototype.updateInner = function(cfg) {
    if (hasKey2(cfg, 'domStyles')) {
      this.resetStyles();
      this.applyStyles();
    }
    this.resetPosition();
  };
  HtmlComponent2.prototype.resetPosition = function() {};
  return HtmlComponent2;
})(component_default);
var html_component_default = HtmlComponent;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/annotation/html.js
var HtmlAnnotation = (function(_super) {
  __extends13(HtmlAnnotation2, _super);
  function HtmlAnnotation2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HtmlAnnotation2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign14(__assign14({}, cfg), {
      name: 'annotation',
      type: 'html',
      locationType: 'point',
      x: 0,
      y: 0,
      containerTpl: '<div class="g2-html-annotation" style="position:absolute"></div>',
      alignX: 'left',
      alignY: 'top',
      html: '',
      zIndex: 7
    });
  };
  HtmlAnnotation2.prototype.render = function() {
    var container = this.getContainer();
    var html = this.get('html');
    clearDom(container);
    var rst = isFunction2(html) ? html(container) : html;
    if (isElement(rst)) {
      container.appendChild(rst);
    } else if (isString3(rst) || isNumber3(rst)) {
      var dom = createDom2('' + rst);
      if (dom) {
        container.appendChild(dom);
      }
    }
    this.resetPosition();
  };
  HtmlAnnotation2.prototype.resetPosition = function() {
    var container = this.getContainer();
    var _a3 = this.getLocation(),
      x = _a3.x,
      y = _a3.y;
    var alignX = this.get('alignX');
    var alignY = this.get('alignY');
    var offsetX = this.get('offsetX');
    var offsetY = this.get('offsetY');
    var domWidth = getOuterWidth(container);
    var domHeight = getOuterHeight(container);
    var position = {
      x,
      y
    };
    if (alignX === 'middle') {
      position.x -= Math.round(domWidth / 2);
    } else if (alignX === 'right') {
      position.x -= Math.round(domWidth);
    }
    if (alignY === 'middle') {
      position.y -= Math.round(domHeight / 2);
    } else if (alignY === 'bottom') {
      position.y -= Math.round(domHeight);
    }
    if (offsetX) {
      position.x += offsetX;
    }
    if (offsetY) {
      position.y += offsetY;
    }
    modifyCSS2(container, {
      position: 'absolute',
      left: position.x + 'px',
      top: position.y + 'px',
      zIndex: this.get('zIndex')
    });
  };
  return HtmlAnnotation2;
})(html_component_default);
var html_default = HtmlAnnotation;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/index.js
var axis_exports = {};
__export(axis_exports, {
  Base: () => base_default,
  Circle: () => circle_default,
  Line: () => line_default2
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/line.js
import { __assign as __assign16, __extends as __extends15 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { vec2 as vec22 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import {
  each as each11,
  isFunction as isFunction4,
  isNil as isNil6,
  isNumberEqual as isNumberEqual2,
  isObject as isObject2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/base.js
import { __assign as __assign15, __extends as __extends14 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext2 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import {
  each as each8,
  filter,
  get as get4,
  isFunction as isFunction3,
  isNil as isNil5,
  isNumberEqual,
  mix as mix3,
  size
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/state.js
import { each as each7, mix as mix2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getStatesStyle(item, elementName, stateStyles) {
  var styleName = elementName + 'Style';
  var styles = null;
  each7(stateStyles, function(v, state) {
    if (item[state] && v[styleName]) {
      if (!styles) {
        styles = {};
      }
      mix2(styles, v[styleName]);
    }
  });
  return styles;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/base.js
var AxisBase = (function(_super) {
  __extends14(AxisBase2, _super);
  function AxisBase2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AxisBase2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign15(__assign15({}, cfg), {
      name: 'axis',
      ticks: [],
      line: {},
      tickLine: {},
      subTickLine: null,
      title: null,
      label: {},
      verticalFactor: 1,
      verticalLimitLength: null,
      overlapOrder: ['autoRotate', 'autoEllipsis', 'autoHide'],
      tickStates: {},
      optimize: {},
      defaultCfg: {
        line: {
          style: {
            lineWidth: 1,
            stroke: theme_default.lineColor
          }
        },
        tickLine: {
          style: {
            lineWidth: 1,
            stroke: theme_default.lineColor
          },
          alignTick: true,
          length: 5,
          displayWithLabel: true
        },
        subTickLine: {
          style: {
            lineWidth: 1,
            stroke: theme_default.lineColor
          },
          count: 4,
          length: 2
        },
        label: {
          autoRotate: true,
          autoHide: false,
          autoEllipsis: false,
          style: {
            fontSize: 12,
            fill: theme_default.textColor,
            fontFamily: theme_default.fontFamily,
            fontWeight: 'normal'
          },
          offset: 10,
          offsetX: 0,
          offsetY: 0
        },
        title: {
          autoRotate: true,
          spacing: 5,
          position: 'center',
          style: {
            fontSize: 12,
            fill: theme_default.textColor,
            textBaseline: 'middle',
            fontFamily: theme_default.fontFamily,
            textAlign: 'center'
          },
          iconStyle: {
            fill: theme_default.descriptionIconFill,
            stroke: theme_default.descriptionIconStroke
          },
          description: ''
        },
        tickStates: {
          active: {
            labelStyle: {
              fontWeight: 500
            },
            tickLineStyle: {
              lineWidth: 2
            }
          },
          inactive: {
            labelStyle: {
              fill: theme_default.uncheckedColor
            }
          }
        },
        optimize: {
          enable: true,
          threshold: 400
        }
      },
      theme: {}
    });
  };
  AxisBase2.prototype.renderInner = function(group) {
    if (this.get('line')) {
      this.drawLine(group);
    }
    this.drawTicks(group);
    if (this.get('title')) {
      this.drawTitle(group);
    }
  };
  AxisBase2.prototype.isList = function() {
    return true;
  };
  AxisBase2.prototype.getItems = function() {
    return this.get('ticks');
  };
  AxisBase2.prototype.setItems = function(items) {
    this.update({
      ticks: items
    });
  };
  AxisBase2.prototype.updateItem = function(item, cfg) {
    mix3(item, cfg);
    this.clear();
    this.render();
  };
  AxisBase2.prototype.clearItems = function() {
    var itemGroup = this.getElementByLocalId('label-group');
    itemGroup && itemGroup.clear();
  };
  AxisBase2.prototype.setItemState = function(item, state, value) {
    item[state] = value;
    this.updateTickStates(item);
  };
  AxisBase2.prototype.hasState = function(item, state) {
    return !!item[state];
  };
  AxisBase2.prototype.getItemStates = function(item) {
    var tickStates = this.get('tickStates');
    var rst = [];
    each8(tickStates, function(v, k) {
      if (item[k]) {
        rst.push(k);
      }
    });
    return rst;
  };
  AxisBase2.prototype.clearItemsState = function(state) {
    var _this = this;
    var items = this.getItemsByState(state);
    each8(items, function(item) {
      _this.setItemState(item, state, false);
    });
  };
  AxisBase2.prototype.getItemsByState = function(state) {
    var _this = this;
    var items = this.getItems();
    return filter(items, function(item) {
      return _this.hasState(item, state);
    });
  };
  AxisBase2.prototype.getSidePoint = function(point, offset) {
    var self = this;
    var vector = self.getSideVector(offset, point);
    return {
      x: point.x + vector[0],
      y: point.y + vector[1]
    };
  };
  AxisBase2.prototype.getTextAnchor = function(vector) {
    var align;
    if (isNumberEqual(vector[0], 0)) {
      align = 'center';
    } else if (vector[0] > 0) {
      align = 'start';
    } else if (vector[0] < 0) {
      align = 'end';
    }
    return align;
  };
  AxisBase2.prototype.getTextBaseline = function(vector) {
    var base;
    if (isNumberEqual(vector[1], 0)) {
      base = 'middle';
    } else if (vector[1] > 0) {
      base = 'top';
    } else if (vector[1] < 0) {
      base = 'bottom';
    }
    return base;
  };
  AxisBase2.prototype.processOverlap = function(labelGroup) {};
  AxisBase2.prototype.drawLine = function(group) {
    var path = this.getLinePath();
    var line = this.get('line');
    this.addShape(group, {
      type: 'path',
      id: this.getElementId('line'),
      name: 'axis-line',
      attrs: mix3(
        {
          path
        },
        line.style
      )
    });
  };
  AxisBase2.prototype.getTickLineItems = function(ticks) {
    var _this = this;
    var tickLineItems = [];
    var tickLine = this.get('tickLine');
    var alignTick = tickLine.alignTick;
    var tickLineLength = tickLine.length;
    var tickSegment = 1;
    var tickCount = ticks.length;
    if (tickCount >= 2) {
      tickSegment = ticks[1].value - ticks[0].value;
    }
    each8(ticks, function(tick) {
      var point = tick.point;
      if (!alignTick) {
        point = _this.getTickPoint(tick.value - tickSegment / 2);
      }
      var endPoint = _this.getSidePoint(point, tickLineLength);
      tickLineItems.push({
        startPoint: point,
        tickValue: tick.value,
        endPoint,
        tickId: tick.id,
        id: 'tickline-' + tick.id
      });
    });
    return tickLineItems;
  };
  AxisBase2.prototype.getSubTickLineItems = function(tickLineItems) {
    var subTickLineItems = [];
    var subTickLine = this.get('subTickLine');
    var subCount = subTickLine.count;
    var tickLineCount = tickLineItems.length;
    if (tickLineCount >= 2) {
      for (var i = 0; i < tickLineCount - 1; i++) {
        var pre = tickLineItems[i];
        var next = tickLineItems[i + 1];
        for (var j = 0; j < subCount; j++) {
          var percent = (j + 1) / (subCount + 1);
          var tickValue = (1 - percent) * pre.tickValue + percent * next.tickValue;
          var point = this.getTickPoint(tickValue);
          var endPoint = this.getSidePoint(point, subTickLine.length);
          subTickLineItems.push({
            startPoint: point,
            endPoint,
            tickValue,
            id: 'sub-' + pre.id + '-' + j
          });
        }
      }
    }
    return subTickLineItems;
  };
  AxisBase2.prototype.getTickLineAttrs = function(tickItem, type, index, tickItems) {
    var style = this.get(type).style;
    var item = {
      points: [tickItem.startPoint, tickItem.endPoint]
    };
    var defaultTickLineStyle = get4(this.get('theme'), ['tickLine', 'style'], {});
    style = isFunction3(style) ? mix3({}, defaultTickLineStyle, style(item, index, tickItems)) : style;
    var startPoint = tickItem.startPoint,
      endPoint = tickItem.endPoint;
    return __assign15(
      {
        x1: startPoint.x,
        y1: startPoint.y,
        x2: endPoint.x,
        y2: endPoint.y
      },
      style
    );
  };
  AxisBase2.prototype.drawTick = function(tickItem, tickLineGroup, type, index, tickItems) {
    this.addShape(tickLineGroup, {
      type: 'line',
      id: this.getElementId(tickItem.id),
      name: 'axis-' + type,
      attrs: this.getTickLineAttrs(tickItem, type, index, tickItems)
    });
  };
  AxisBase2.prototype.drawTickLines = function(group) {
    var _this = this;
    var ticks = this.get('ticks');
    var subTickLine = this.get('subTickLine');
    var tickLineItems = this.getTickLineItems(ticks);
    var tickLineGroup = this.addGroup(group, {
      name: 'axis-tickline-group',
      id: this.getElementId('tickline-group')
    });
    var tickCfg = this.get('tickLine');
    each8(tickLineItems, function(item, index) {
      if (tickCfg.displayWithLabel) {
        var labelId = _this.getElementId('label-' + item.tickId);
        if (group.findById(labelId)) {
          _this.drawTick(item, tickLineGroup, 'tickLine', index, tickLineItems);
        }
      } else {
        _this.drawTick(item, tickLineGroup, 'tickLine', index, tickLineItems);
      }
    });
    if (subTickLine) {
      var subTickLineItems_1 = this.getSubTickLineItems(tickLineItems);
      each8(subTickLineItems_1, function(item, index) {
        _this.drawTick(item, tickLineGroup, 'subTickLine', index, subTickLineItems_1);
      });
    }
  };
  AxisBase2.prototype.processTicks = function() {
    var _this = this;
    var ticks = this.get('ticks');
    each8(ticks, function(tick) {
      tick.point = _this.getTickPoint(tick.value);
      if (isNil5(tick.id)) {
        tick.id = tick.name;
      }
    });
  };
  AxisBase2.prototype.drawTicks = function(group) {
    var _this = this;
    this.optimizeTicks();
    this.processTicks();
    if (this.get('label')) {
      this.drawLabels(group);
    }
    if (this.get('tickLine')) {
      this.drawTickLines(group);
    }
    var ticks = this.get('ticks');
    each8(ticks, function(tick) {
      _this.applyTickStates(tick, group);
    });
  };
  AxisBase2.prototype.optimizeTicks = function() {
    var optimize = this.get('optimize');
    var ticks = this.get('ticks');
    if (optimize && optimize.enable && optimize.threshold > 0) {
      var len = size(ticks);
      if (len > optimize.threshold) {
        var page_1 = Math.ceil(len / optimize.threshold);
        var optimizedTicks = ticks.filter(function(tick, idx) {
          return idx % page_1 === 0;
        });
        this.set('ticks', optimizedTicks);
        this.set('originalTicks', ticks);
      }
    }
  };
  AxisBase2.prototype.getLabelAttrs = function(tick, index, ticks) {
    var labelCfg = this.get('label');
    var offset = labelCfg.offset,
      offsetX = labelCfg.offsetX,
      offsetY = labelCfg.offsetY,
      rotate = labelCfg.rotate,
      formatter = labelCfg.formatter;
    var point = this.getSidePoint(tick.point, offset);
    var vector = this.getSideVector(offset, point);
    var text = formatter ? formatter(tick.name, tick, index) : tick.name;
    var style = labelCfg.style;
    style = isFunction3(style) ? get4(this.get('theme'), ['label', 'style'], {}) : style;
    var attrs = mix3(
      {
        x: point.x + offsetX,
        y: point.y + offsetY,
        text,
        textAlign: this.getTextAnchor(vector),
        textBaseline: this.getTextBaseline(vector)
      },
      style
    );
    if (rotate) {
      attrs.matrix = getMatrixByAngle(point, rotate);
    }
    return attrs;
  };
  AxisBase2.prototype.drawLabels = function(group) {
    var _this = this;
    var ticks = this.get('ticks');
    var labelGroup = this.addGroup(group, {
      name: 'axis-label-group',
      id: this.getElementId('label-group')
    });
    each8(ticks, function(tick, index) {
      _this.addShape(labelGroup, {
        type: 'text',
        name: 'axis-label',
        id: _this.getElementId('label-' + tick.id),
        attrs: _this.getLabelAttrs(tick, index, ticks),
        delegateObject: {
          tick,
          item: tick,
          index
        }
      });
    });
    this.processOverlap(labelGroup);
    var labels = labelGroup.getChildren();
    var defaultLabelStyle = get4(this.get('theme'), ['label', 'style'], {});
    var _a3 = this.get('label'),
      style = _a3.style,
      formatter = _a3.formatter;
    if (isFunction3(style)) {
      var afterProcessTicks_1 = labels.map(function(label) {
        return get4(label.get('delegateObject'), 'tick');
      });
      each8(labels, function(label, index) {
        var tick = label.get('delegateObject').tick;
        var text = formatter ? formatter(tick.name, tick, index) : tick.name;
        var newStyle = mix3({}, defaultLabelStyle, style(text, index, afterProcessTicks_1));
        label.attr(newStyle);
      });
    }
  };
  AxisBase2.prototype.getTitleAttrs = function() {
    var titleCfg = this.get('title');
    var style = titleCfg.style,
      position = titleCfg.position,
      offset = titleCfg.offset,
      _a3 = titleCfg.spacing,
      spacing = _a3 === void 0 ? 0 : _a3,
      autoRotate = titleCfg.autoRotate;
    var titleHeight = style.fontSize;
    var percent = 0.5;
    if (position === 'start') {
      percent = 0;
    } else if (position === 'end') {
      percent = 1;
    }
    var point = this.getTickPoint(percent);
    var titlePoint = this.getSidePoint(point, offset || spacing + titleHeight / 2);
    var attrs = mix3(
      {
        x: titlePoint.x,
        y: titlePoint.y,
        text: titleCfg.text
      },
      style
    );
    var rotate = titleCfg.rotate;
    var angle = rotate;
    if (isNil5(rotate) && autoRotate) {
      var vector = this.getAxisVector(point);
      var v1 = [1, 0];
      angle = ext2.angleTo(vector, v1, true);
    }
    if (angle) {
      var matrix = getMatrixByAngle(titlePoint, angle);
      attrs.matrix = matrix;
    }
    return attrs;
  };
  AxisBase2.prototype.drawTitle = function(group) {
    var _a3;
    var titleAttrs = this.getTitleAttrs();
    var titleShape = this.addShape(group, {
      type: 'text',
      id: this.getElementId('title'),
      name: 'axis-title',
      attrs: titleAttrs
    });
    if ((_a3 = this.get('title')) === null || _a3 === void 0 ? void 0 : _a3.description) {
      this.drawDescriptionIcon(group, titleShape, titleAttrs.matrix);
    }
  };
  AxisBase2.prototype.drawDescriptionIcon = function(group, titleShape, matrix) {
    var descriptionShape = this.addGroup(group, {
      name: 'axis-description',
      id: this.getElementById('description')
    });
    var _a3 = titleShape.getBBox(),
      maxX = _a3.maxX,
      maxY = _a3.maxY,
      height = _a3.height;
    var iconStyle = this.get('title').iconStyle;
    var spacing = 4;
    var r = height / 2;
    var lineWidth = r / 6;
    var startX = maxX + spacing;
    var startY = maxY - height / 2;
    var _b = [startX + r, startY - r],
      x0 = _b[0],
      y0 = _b[1];
    var _c = [x0 + r, y0 + r],
      x1 = _c[0],
      y1 = _c[1];
    var _d = [x0, y1 + r],
      x2 = _d[0],
      y2 = _d[1];
    var _e = [startX, y0 + r],
      x3 = _e[0],
      y3 = _e[1];
    var _f = [startX + r, startY - height / 4],
      x4 = _f[0],
      y4 = _f[1];
    var _g = [x4, y4 + lineWidth],
      x5 = _g[0],
      y5 = _g[1];
    var _h = [x5, y5 + lineWidth],
      x6 = _h[0],
      y6 = _h[1];
    var _j = [x6, y6 + (r * 3) / 4],
      x7 = _j[0],
      y7 = _j[1];
    this.addShape(descriptionShape, {
      type: 'path',
      id: this.getElementId('title-description-icon'),
      name: 'axis-title-description-icon',
      attrs: __assign15(
        {
          path: [
            ['M', x0, y0],
            ['A', r, r, 0, 0, 1, x1, y1],
            ['A', r, r, 0, 0, 1, x2, y2],
            ['A', r, r, 0, 0, 1, x3, y3],
            ['A', r, r, 0, 0, 1, x0, y0],
            ['M', x4, y4],
            ['L', x5, y5],
            ['M', x6, y6],
            ['L', x7, y7]
          ],
          lineWidth,
          matrix
        },
        iconStyle
      )
    });
    this.addShape(descriptionShape, {
      type: 'rect',
      id: this.getElementId('title-description-rect'),
      name: 'axis-title-description-rect',
      attrs: {
        x: startX,
        y: startY - height / 2,
        width: height,
        height,
        stroke: '#000',
        fill: '#000',
        opacity: 0,
        matrix,
        cursor: 'pointer'
      }
    });
  };
  AxisBase2.prototype.applyTickStates = function(tick, group) {
    var states = this.getItemStates(tick);
    if (states.length) {
      var tickStates = this.get('tickStates');
      var labelId = this.getElementId('label-' + tick.id);
      var labelShape = group.findById(labelId);
      if (labelShape) {
        var labelStateStyle = getStatesStyle(tick, 'label', tickStates);
        labelStateStyle && labelShape.attr(labelStateStyle);
      }
      var tickLineId = this.getElementId('tickline-' + tick.id);
      var tickLineShape = group.findById(tickLineId);
      if (tickLineShape) {
        var tickLineStateStyle = getStatesStyle(tick, 'tickLine', tickStates);
        tickLineStateStyle && tickLineShape.attr(tickLineStateStyle);
      }
    }
  };
  AxisBase2.prototype.updateTickStates = function(tick) {
    var states = this.getItemStates(tick);
    var tickStates = this.get('tickStates');
    var labelCfg = this.get('label');
    var labelShape = this.getElementByLocalId('label-' + tick.id);
    var tickLineCfg = this.get('tickLine');
    var tickLineShape = this.getElementByLocalId('tickline-' + tick.id);
    if (states.length) {
      if (labelShape) {
        var labelStateStyle = getStatesStyle(tick, 'label', tickStates);
        labelStateStyle && labelShape.attr(labelStateStyle);
      }
      if (tickLineShape) {
        var tickLineStateStyle = getStatesStyle(tick, 'tickLine', tickStates);
        tickLineStateStyle && tickLineShape.attr(tickLineStateStyle);
      }
    } else {
      if (labelShape) {
        labelShape.attr(labelCfg.style);
      }
      if (tickLineShape) {
        tickLineShape.attr(tickLineCfg.style);
      }
    }
  };
  return AxisBase2;
})(group_component_default);
var base_default = AxisBase;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/overlap/index.js
var overlap_exports = {};
__export(overlap_exports, {
  autoEllipsis: () => auto_ellipsis_exports,
  autoHide: () => auto_hide_exports,
  autoRotate: () => auto_rotate_exports
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/overlap/auto-ellipsis.js
var auto_ellipsis_exports = {};
__export(auto_ellipsis_exports, {
  ellipsisHead: () => ellipsisHead,
  ellipsisMiddle: () => ellipsisMiddle,
  ellipsisTail: () => ellipsisTail,
  getDefault: () => getDefault
});
import { each as each9 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function ellipseLabels(isVertical, labelGroup, limitLength, position) {
  var children = labelGroup.getChildren();
  var ellipsisFlag = false;
  each9(children, function(label) {
    var rst = ellipsisLabel(isVertical, label, limitLength, position);
    ellipsisFlag = ellipsisFlag || rst;
  });
  return ellipsisFlag;
}
function getDefault() {
  return ellipsisTail;
}
function ellipsisHead(isVertical, labelGroup, limitLength) {
  return ellipseLabels(isVertical, labelGroup, limitLength, 'head');
}
function ellipsisTail(isVertical, labelGroup, limitLength) {
  return ellipseLabels(isVertical, labelGroup, limitLength, 'tail');
}
function ellipsisMiddle(isVertical, labelGroup, limitLength) {
  return ellipseLabels(isVertical, labelGroup, limitLength, 'middle');
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/overlap/auto-hide.js
var auto_hide_exports = {};
__export(auto_hide_exports, {
  equidistance: () => equidistance,
  equidistanceWithReverseBoth: () => equidistanceWithReverseBoth,
  getDefault: () => getDefault2,
  reserveBoth: () => reserveBoth,
  reserveFirst: () => reserveFirst,
  reserveLast: () => reserveLast
});
function isRotate(label) {
  var matrix = label.attr('matrix');
  return matrix && matrix[0] !== 1;
}
function getRotateAngle(label) {
  var angle = isRotate(label) ? getAngleByMatrix(label.attr('matrix')) : 0;
  return angle % 360;
}
function isOverlap(isVertical, first, second, minGap) {
  var overlap = false;
  var angle = getRotateAngle(first);
  var distance3 = isVertical
    ? Math.abs(second.attr('y') - first.attr('y'))
    : Math.abs(second.attr('x') - first.attr('x'));
  var prevBBox = (isVertical
  ? second.attr('y') > first.attr('y')
  : second.attr('x') > first.attr('x'))
    ? first.getBBox()
    : second.getBBox();
  if (isVertical) {
    var ratio = Math.abs(Math.cos(angle));
    if (near(ratio, 0, Math.PI / 180)) {
      overlap = prevBBox.width + minGap > distance3;
    } else {
      overlap = prevBBox.height / ratio + minGap > distance3;
    }
  } else {
    var ratio = Math.abs(Math.sin(angle));
    if (near(ratio, 0, Math.PI / 180)) {
      overlap = prevBBox.width + minGap > distance3;
    } else {
      overlap = prevBBox.height / ratio + minGap > distance3;
    }
  }
  return overlap;
}
function reserveOne(isVertical, labelsGroup, reversed, autoHideCfg) {
  var minGap = (autoHideCfg === null || autoHideCfg === void 0 ? void 0 : autoHideCfg.minGap) || 0;
  var labels = labelsGroup
    .getChildren()
    .slice()
    .filter(function(item) {
      return item.get('visible');
    });
  if (!labels.length) {
    return false;
  }
  var hasHide = false;
  if (reversed) {
    labels.reverse();
  }
  var count = labels.length;
  var first = labels[0];
  var prev = first;
  for (var i = 1; i < count; i++) {
    var label = labels[i];
    var curBBox = label.getBBox();
    var isHide = isOverlap(isVertical, prev, label, minGap);
    if (isHide) {
      label.hide();
      hasHide = true;
    } else {
      prev = label;
    }
  }
  return hasHide;
}
function parityHide(isVertical, labelsGroup, autoHideCfg) {
  var minGap = (autoHideCfg === null || autoHideCfg === void 0 ? void 0 : autoHideCfg.minGap) || 0;
  var labels = labelsGroup.getChildren().slice();
  if (labels.length < 2) {
    return false;
  }
  var hasHide = false;
  var first = labels[0];
  var firstBBox = first.getBBox();
  var second = labels[1];
  var count = labels.length;
  var angle = getRotateAngle(first);
  var distance3 = isVertical
    ? Math.abs(second.attr('y') - first.attr('y'))
    : Math.abs(second.attr('x') - first.attr('x'));
  var interval = 0;
  if (isVertical) {
    var ratio = Math.abs(Math.cos(angle));
    if (near(ratio, 0, Math.PI / 180)) {
      var maxWidth = getMaxLabelWidth(labels);
      interval = (maxWidth + minGap) / distance3;
    } else {
      interval = (firstBBox.height / ratio + minGap) / distance3;
    }
  } else {
    var ratio = Math.abs(Math.sin(angle));
    if (near(ratio, 0, Math.PI / 180)) {
      var maxWidth = getMaxLabelWidth(labels);
      interval = (maxWidth + minGap) / distance3;
    } else {
      interval = (firstBBox.height / ratio + minGap) / distance3;
    }
  }
  if (interval > 1) {
    interval = Math.ceil(interval);
    for (var i = 0; i < count; i++) {
      if (i % interval !== 0) {
        labels[i].hide();
        hasHide = true;
      }
    }
  }
  return hasHide;
}
function getDefault2() {
  return equidistance;
}
function reserveFirst(isVertical, labelsGroup, limitLength, autoHideCfg) {
  return reserveOne(isVertical, labelsGroup, false, autoHideCfg);
}
function reserveLast(isVertical, labelsGroup, limitLength, autoHideCfg) {
  return reserveOne(isVertical, labelsGroup, true, autoHideCfg);
}
function reserveBoth(isVertical, labelsGroup, limitLength, autoHideCfg) {
  var minGap = (autoHideCfg === null || autoHideCfg === void 0 ? void 0 : autoHideCfg.minGap) || 0;
  var labels = labelsGroup.getChildren().slice();
  if (labels.length <= 2) {
    return false;
  }
  var hasHide = false;
  var count = labels.length;
  var first = labels[0];
  var last = labels[count - 1];
  var preLabel = first;
  for (var i = 1; i < count - 1; i++) {
    var label = labels[i];
    var curBBox = label.getBBox();
    var isHide = isOverlap(isVertical, preLabel, label, minGap);
    if (isHide) {
      label.hide();
      hasHide = true;
    } else {
      preLabel = label;
    }
  }
  var overlap = isOverlap(isVertical, preLabel, last, minGap);
  if (overlap) {
    preLabel.hide();
    hasHide = true;
  }
  return hasHide;
}
function equidistance(isVertical, labelsGroup, limitLength, autoHideCfg) {
  var hasHide = parityHide(isVertical, labelsGroup, autoHideCfg);
  if (reserveOne(isVertical, labelsGroup, false)) {
    hasHide = true;
  }
  return hasHide;
}
function equidistanceWithReverseBoth(isVertical, labelsGroup, limitLength, autoHideCfg) {
  var labels = labelsGroup.getChildren().slice();
  var hasHide = parityHide(isVertical, labelsGroup, autoHideCfg);
  if (labels.length > 2) {
    var first = labels[0];
    var last = labels[labels.length - 1];
    if (!first.get('visible')) {
      first.show();
      if (reserveOne(isVertical, labelsGroup, false, autoHideCfg)) {
        hasHide = true;
      }
    }
    if (!last.get('visible')) {
      last.show();
      if (reserveOne(isVertical, labelsGroup, true, autoHideCfg)) {
        hasHide = true;
      }
    }
  }
  return hasHide;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/overlap/auto-rotate.js
var auto_rotate_exports = {};
__export(auto_rotate_exports, {
  fixedAngle: () => fixedAngle,
  getDefault: () => getDefault3,
  unfixedAngle: () => unfixedAngle
});
import { each as each10, isNumber as isNumber4 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function setLabelsAngle(labels, angle) {
  each10(labels, function(label) {
    var x = label.attr('x');
    var y = label.attr('y');
    var matrix = getMatrixByAngle(
      {
        x,
        y
      },
      angle
    );
    label.attr('matrix', matrix);
  });
}
function labelRotate(isVertical, labelsGroup, limitLength, getAngle) {
  var labels = labelsGroup.getChildren();
  if (!labels.length) {
    return false;
  }
  if (!isVertical && labels.length < 2) {
    return false;
  }
  var maxWidth = getMaxLabelWidth(labels);
  var isOverlap2 = false;
  if (isVertical) {
    isOverlap2 = !!limitLength && maxWidth > limitLength;
  } else {
    var tickWidth = Math.abs(labels[1].attr('x') - labels[0].attr('x'));
    isOverlap2 = maxWidth > tickWidth;
  }
  if (isOverlap2) {
    var angle = getAngle(limitLength, maxWidth);
    setLabelsAngle(labels, angle);
  }
  return isOverlap2;
}
function getDefault3() {
  return fixedAngle;
}
function fixedAngle(isVertical, labelsGroup, limitLength, customRotate) {
  return labelRotate(isVertical, labelsGroup, limitLength, function() {
    if (isNumber4(customRotate)) {
      return customRotate;
    }
    return isVertical ? theme_default.verticalAxisRotate : theme_default.horizontalAxisRotate;
  });
}
function unfixedAngle(isVertical, labelsGroup, limitLength) {
  return labelRotate(isVertical, labelsGroup, limitLength, function(length, maxWidth) {
    if (!length) {
      return isVertical ? theme_default.verticalAxisRotate : theme_default.horizontalAxisRotate;
    }
    if (isVertical) {
      return -Math.acos(length / maxWidth);
    } else {
      var angle = 0;
      if (length > maxWidth) {
        angle = Math.PI / 4;
      } else {
        angle = Math.asin(length / maxWidth);
        if (angle > Math.PI / 4) {
          angle = Math.PI / 4;
        }
      }
      return angle;
    }
  });
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/line.js
var Line = (function(_super) {
  __extends15(Line3, _super);
  function Line3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Line3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign16(__assign16({}, cfg), {
      type: 'line',
      locationType: 'region',
      start: null,
      end: null
    });
  };
  Line3.prototype.getLinePath = function() {
    var start = this.get('start');
    var end = this.get('end');
    var path = [];
    path.push(['M', start.x, start.y]);
    path.push(['L', end.x, end.y]);
    return path;
  };
  Line3.prototype.getInnerLayoutBBox = function() {
    var start = this.get('start');
    var end = this.get('end');
    var bbox = _super.prototype.getInnerLayoutBBox.call(this);
    var minX = Math.min(start.x, end.x, bbox.x);
    var minY = Math.min(start.y, end.y, bbox.y);
    var maxX = Math.max(start.x, end.x, bbox.maxX);
    var maxY = Math.max(start.y, end.y, bbox.maxY);
    return {
      x: minX,
      y: minY,
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  };
  Line3.prototype.isVertical = function() {
    var start = this.get('start');
    var end = this.get('end');
    return isNumberEqual2(start.x, end.x);
  };
  Line3.prototype.isHorizontal = function() {
    var start = this.get('start');
    var end = this.get('end');
    return isNumberEqual2(start.y, end.y);
  };
  Line3.prototype.getTickPoint = function(tickValue) {
    var self = this;
    var start = self.get('start');
    var end = self.get('end');
    var regionX = end.x - start.x;
    var regionY = end.y - start.y;
    return {
      x: start.x + regionX * tickValue,
      y: start.y + regionY * tickValue
    };
  };
  Line3.prototype.getSideVector = function(offset) {
    var axisVector = this.getAxisVector();
    var normal = vec22.normalize([0, 0], axisVector);
    var factor = this.get('verticalFactor');
    var verticalVector = [normal[1], normal[0] * -1];
    return vec22.scale([0, 0], verticalVector, offset * factor);
  };
  Line3.prototype.getAxisVector = function() {
    var start = this.get('start');
    var end = this.get('end');
    return [end.x - start.x, end.y - start.y];
  };
  Line3.prototype.processOverlap = function(labelGroup) {
    var _this = this;
    var isVertical = this.isVertical();
    var isHorizontal = this.isHorizontal();
    if (!isVertical && !isHorizontal) {
      return;
    }
    var labelCfg = this.get('label');
    var titleCfg = this.get('title');
    var verticalLimitLength = this.get('verticalLimitLength');
    var labelOffset = labelCfg.offset;
    var limitLength = verticalLimitLength;
    var titleHeight = 0;
    var titleSpacing = 0;
    if (titleCfg) {
      titleHeight = titleCfg.style.fontSize;
      titleSpacing = titleCfg.spacing;
    }
    if (limitLength) {
      limitLength = limitLength - labelOffset - titleSpacing - titleHeight;
    }
    var overlapOrder = this.get('overlapOrder');
    each11(overlapOrder, function(name) {
      if (labelCfg[name] && _this.canProcessOverlap(name)) {
        _this.autoProcessOverlap(name, labelCfg[name], labelGroup, limitLength);
      }
    });
    if (titleCfg) {
      if (isNil6(titleCfg.offset)) {
        var bbox = labelGroup.getCanvasBBox();
        var length_1 = isVertical ? bbox.width : bbox.height;
        titleCfg.offset = labelOffset + length_1 + titleSpacing + titleHeight / 2;
      }
    }
  };
  Line3.prototype.canProcessOverlap = function(name) {
    var labelCfg = this.get('label');
    if (name === 'autoRotate') {
      return isNil6(labelCfg.rotate);
    }
    return true;
  };
  Line3.prototype.autoProcessOverlap = function(name, value, labelGroup, limitLength) {
    var _this = this;
    var isVertical = this.isVertical();
    var hasAdjusted = false;
    var util = overlap_exports[name];
    if (value === true) {
      var labelCfg = this.get('label');
      hasAdjusted = util.getDefault()(isVertical, labelGroup, limitLength);
    } else if (isFunction4(value)) {
      hasAdjusted = value(isVertical, labelGroup, limitLength);
    } else if (isObject2(value)) {
      var overlapCfg = value;
      if (util[overlapCfg.type]) {
        hasAdjusted = util[overlapCfg.type](isVertical, labelGroup, limitLength, overlapCfg.cfg);
      }
    } else if (util[value]) {
      hasAdjusted = util[value](isVertical, labelGroup, limitLength);
    }
    if (name === 'autoRotate') {
      if (hasAdjusted) {
        var labels = labelGroup.getChildren();
        var verticalFactor_1 = this.get('verticalFactor');
        each11(labels, function(label) {
          var textAlign = label.attr('textAlign');
          if (textAlign === 'center') {
            var newAlign = verticalFactor_1 > 0 ? 'end' : 'start';
            label.attr('textAlign', newAlign);
          }
        });
      }
    } else if (name === 'autoHide') {
      var children = labelGroup.getChildren().slice(0);
      each11(children, function(label) {
        if (!label.get('visible')) {
          if (_this.get('isRegister')) {
            _this.unregisterElement(label);
          }
          label.remove();
        }
      });
    }
  };
  return Line3;
})(base_default);
var line_default2 = Line;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/axis/circle.js
import { __assign as __assign17, __extends as __extends16 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each12,
  isNil as isNil7,
  isFunction as isFunction5,
  isObject as isObject3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { vec2 as vec23 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
var Circle = (function(_super) {
  __extends16(Circle3, _super);
  function Circle3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Circle3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign17(__assign17({}, cfg), {
      type: 'circle',
      locationType: 'circle',
      center: null,
      radius: null,
      startAngle: -Math.PI / 2,
      endAngle: (Math.PI * 3) / 2
    });
  };
  Circle3.prototype.getLinePath = function() {
    var center = this.get('center');
    var x = center.x;
    var y = center.y;
    var rx = this.get('radius');
    var ry = rx;
    var startAngle = this.get('startAngle');
    var endAngle = this.get('endAngle');
    var path = [];
    if (Math.abs(endAngle - startAngle) === Math.PI * 2) {
      path = [['M', x, y - ry], ['A', rx, ry, 0, 1, 1, x, y + ry], ['A', rx, ry, 0, 1, 1, x, y - ry], ['Z']];
    } else {
      var startPoint = this.getCirclePoint(startAngle);
      var endPoint = this.getCirclePoint(endAngle);
      var large = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
      var sweep = startAngle > endAngle ? 0 : 1;
      path = [
        ['M', x, y],
        ['L', startPoint.x, startPoint.y],
        ['A', rx, ry, 0, large, sweep, endPoint.x, endPoint.y],
        ['L', x, y]
      ];
    }
    return path;
  };
  Circle3.prototype.getTickPoint = function(tickValue) {
    var startAngle = this.get('startAngle');
    var endAngle = this.get('endAngle');
    var angle = startAngle + (endAngle - startAngle) * tickValue;
    return this.getCirclePoint(angle);
  };
  Circle3.prototype.getSideVector = function(offset, point) {
    var center = this.get('center');
    var vector = [point.x - center.x, point.y - center.y];
    var factor = this.get('verticalFactor');
    var vecLen = vec23.length(vector);
    vec23.scale(vector, vector, (factor * offset) / vecLen);
    return vector;
  };
  Circle3.prototype.getAxisVector = function(point) {
    var center = this.get('center');
    var vector = [point.x - center.x, point.y - center.y];
    return [vector[1], -1 * vector[0]];
  };
  Circle3.prototype.getCirclePoint = function(angle, radius) {
    var center = this.get('center');
    radius = radius || this.get('radius');
    return {
      x: center.x + Math.cos(angle) * radius,
      y: center.y + Math.sin(angle) * radius
    };
  };
  Circle3.prototype.canProcessOverlap = function(name) {
    var labelCfg = this.get('label');
    if (name === 'autoRotate') {
      return isNil7(labelCfg.rotate);
    }
    return true;
  };
  Circle3.prototype.processOverlap = function(labelGroup) {
    var _this = this;
    var labelCfg = this.get('label');
    var titleCfg = this.get('title');
    var verticalLimitLength = this.get('verticalLimitLength');
    var labelOffset = labelCfg.offset;
    var limitLength = verticalLimitLength;
    var titleHeight = 0;
    var titleSpacing = 0;
    if (titleCfg) {
      titleHeight = titleCfg.style.fontSize;
      titleSpacing = titleCfg.spacing;
    }
    if (limitLength) {
      limitLength = limitLength - labelOffset - titleSpacing - titleHeight;
    }
    var overlapOrder = this.get('overlapOrder');
    each12(overlapOrder, function(name) {
      if (labelCfg[name] && _this.canProcessOverlap(name)) {
        _this.autoProcessOverlap(name, labelCfg[name], labelGroup, limitLength);
      }
    });
    if (titleCfg) {
      if (isNil7(titleCfg.offset)) {
        var length_1 = labelGroup.getCanvasBBox().height;
        titleCfg.offset = labelOffset + length_1 + titleSpacing + titleHeight / 2;
      }
    }
  };
  Circle3.prototype.autoProcessOverlap = function(name, value, labelGroup, limitLength) {
    var _this = this;
    var hasAdjusted = false;
    var util = overlap_exports[name];
    if (limitLength > 0) {
      if (value === true) {
        hasAdjusted = util.getDefault()(false, labelGroup, limitLength);
      } else if (isFunction5(value)) {
        hasAdjusted = value(false, labelGroup, limitLength);
      } else if (isObject3(value)) {
        var overlapCfg = value;
        if (util[overlapCfg.type]) {
          hasAdjusted = util[overlapCfg.type](false, labelGroup, limitLength, overlapCfg.cfg);
        }
      } else if (util[value]) {
        hasAdjusted = util[value](false, labelGroup, limitLength);
      }
    }
    if (name === 'autoRotate') {
      if (hasAdjusted) {
        var labels = labelGroup.getChildren();
        var verticalFactor_1 = this.get('verticalFactor');
        each12(labels, function(label) {
          var textAlign = label.attr('textAlign');
          if (textAlign === 'center') {
            var newAlign = verticalFactor_1 > 0 ? 'end' : 'start';
            label.attr('textAlign', newAlign);
          }
        });
      }
    } else if (name === 'autoHide') {
      var children = labelGroup.getChildren().slice(0);
      each12(children, function(label) {
        if (!label.get('visible')) {
          if (_this.get('isRegister')) {
            _this.unregisterElement(label);
          }
          label.remove();
        }
      });
    }
  };
  return Circle3;
})(base_default);
var circle_default = Circle;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/index.js
var crosshair_exports = {};
__export(crosshair_exports, {
  Base: () => base_default2,
  Circle: () => circle_default2,
  Html: () => html_default2,
  Line: () => line_default3
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/line.js
import { __assign as __assign19, __extends as __extends18 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/base.js
import { __assign as __assign18, __extends as __extends17 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isNil as isNil8 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var CrosshairBase = (function(_super) {
  __extends17(CrosshairBase2, _super);
  function CrosshairBase2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  CrosshairBase2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign18(__assign18({}, cfg), {
      name: 'crosshair',
      type: 'base',
      line: {},
      text: null,
      textBackground: {},
      capture: false,
      defaultCfg: {
        line: {
          style: {
            lineWidth: 1,
            stroke: theme_default.lineColor
          }
        },
        text: {
          position: 'start',
          offset: 10,
          autoRotate: false,
          content: null,
          style: {
            fill: theme_default.textColor,
            textAlign: 'center',
            textBaseline: 'middle',
            fontFamily: theme_default.fontFamily
          }
        },
        textBackground: {
          padding: 5,
          style: {
            stroke: theme_default.lineColor
          }
        }
      }
    });
  };
  CrosshairBase2.prototype.renderInner = function(group) {
    if (this.get('line')) {
      this.renderLine(group);
    }
    if (this.get('text')) {
      this.renderText(group);
      this.renderBackground(group);
    }
  };
  CrosshairBase2.prototype.renderText = function(group) {
    var text = this.get('text');
    var style = text.style,
      autoRotate = text.autoRotate,
      content = text.content;
    if (!isNil8(content)) {
      var textPoint = this.getTextPoint();
      var matrix = null;
      if (autoRotate) {
        var angle = this.getRotateAngle();
        matrix = getMatrixByAngle(textPoint, angle);
      }
      this.addShape(group, {
        type: 'text',
        name: 'crosshair-text',
        id: this.getElementId('text'),
        attrs: __assign18(
          __assign18(__assign18({}, textPoint), {
            text: content,
            matrix
          }),
          style
        )
      });
    }
  };
  CrosshairBase2.prototype.renderLine = function(group) {
    var path = this.getLinePath();
    var line = this.get('line');
    var style = line.style;
    this.addShape(group, {
      type: 'path',
      name: 'crosshair-line',
      id: this.getElementId('line'),
      attrs: __assign18(
        {
          path
        },
        style
      )
    });
  };
  CrosshairBase2.prototype.renderBackground = function(group) {
    var textId = this.getElementId('text');
    var textShape = group.findById(textId);
    var textBackground = this.get('textBackground');
    if (textBackground && textShape) {
      var textBBox = textShape.getBBox();
      var padding = formatPadding(textBackground.padding);
      var style = textBackground.style;
      var backgroundShape = this.addShape(group, {
        type: 'rect',
        name: 'crosshair-text-background',
        id: this.getElementId('text-background'),
        attrs: __assign18(
          {
            x: textBBox.x - padding[3],
            y: textBBox.y - padding[0],
            width: textBBox.width + padding[1] + padding[3],
            height: textBBox.height + padding[0] + padding[2],
            matrix: textShape.attr('matrix')
          },
          style
        )
      });
      backgroundShape.toBack();
    }
  };
  return CrosshairBase2;
})(group_component_default);
var base_default2 = CrosshairBase;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/line.js
var LineCrosshair = (function(_super) {
  __extends18(LineCrosshair3, _super);
  function LineCrosshair3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LineCrosshair3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign19(__assign19({}, cfg), {
      type: 'line',
      locationType: 'region',
      start: null,
      end: null
    });
  };
  LineCrosshair3.prototype.getRotateAngle = function() {
    var _a3 = this.getLocation(),
      start = _a3.start,
      end = _a3.end;
    var position = this.get('text').position;
    var angle = Math.atan2(end.y - start.y, end.x - start.x);
    var tangentAngle = position === 'start' ? angle - Math.PI / 2 : angle + Math.PI / 2;
    return tangentAngle;
  };
  LineCrosshair3.prototype.getTextPoint = function() {
    var _a3 = this.getLocation(),
      start = _a3.start,
      end = _a3.end;
    var _b = this.get('text'),
      position = _b.position,
      offset = _b.offset;
    return getTextPoint(start, end, position, offset);
  };
  LineCrosshair3.prototype.getLinePath = function() {
    var _a3 = this.getLocation(),
      start = _a3.start,
      end = _a3.end;
    return [
      ['M', start.x, start.y],
      ['L', end.x, end.y]
    ];
  };
  return LineCrosshair3;
})(base_default2);
var line_default3 = LineCrosshair;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/circle.js
import { __assign as __assign20, __extends as __extends19 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var LineCrosshair2 = (function(_super) {
  __extends19(LineCrosshair3, _super);
  function LineCrosshair3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LineCrosshair3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign20(__assign20({}, cfg), {
      type: 'circle',
      locationType: 'circle',
      center: null,
      radius: 100,
      startAngle: -Math.PI / 2,
      endAngle: (Math.PI * 3) / 2
    });
  };
  LineCrosshair3.prototype.getRotateAngle = function() {
    var _a3 = this.getLocation(),
      startAngle = _a3.startAngle,
      endAngle = _a3.endAngle;
    var position = this.get('text').position;
    var tangentAngle = position === 'start' ? startAngle + Math.PI / 2 : endAngle - Math.PI / 2;
    return tangentAngle;
  };
  LineCrosshair3.prototype.getTextPoint = function() {
    var text = this.get('text');
    var position = text.position,
      offset = text.offset;
    var _a3 = this.getLocation(),
      center = _a3.center,
      radius = _a3.radius,
      startAngle = _a3.startAngle,
      endAngle = _a3.endAngle;
    var angle = position === 'start' ? startAngle : endAngle;
    var tangentAngle = this.getRotateAngle() - Math.PI;
    var point = getCirclePoint(center, radius, angle);
    var offsetX = Math.cos(tangentAngle) * offset;
    var offsetY = Math.sin(tangentAngle) * offset;
    return {
      x: point.x + offsetX,
      y: point.y + offsetY
    };
  };
  LineCrosshair3.prototype.getLinePath = function() {
    var _a3 = this.getLocation(),
      center = _a3.center,
      radius = _a3.radius,
      startAngle = _a3.startAngle,
      endAngle = _a3.endAngle;
    var path = null;
    if (endAngle - startAngle === Math.PI * 2) {
      var x = center.x,
        y = center.y;
      path = [
        ['M', x, y - radius],
        ['A', radius, radius, 0, 1, 1, x, y + radius],
        ['A', radius, radius, 0, 1, 1, x, y - radius],
        ['Z']
      ];
    } else {
      var startPoint = getCirclePoint(center, radius, startAngle);
      var endPoint = getCirclePoint(center, radius, endAngle);
      var large = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
      var sweep = startAngle > endAngle ? 0 : 1;
      path = [
        ['M', startPoint.x, startPoint.y],
        ['A', radius, radius, 0, large, sweep, endPoint.x, endPoint.y]
      ];
    }
    return path;
  };
  return LineCrosshair3;
})(base_default2);
var circle_default2 = LineCrosshair2;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/html.js
import { __assign as __assign21, __extends as __extends20 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  createDom as createDom3,
  modifyCSS as modifyCSS3
} from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
import { substitute, hasKey as hasKey3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/css-const.js
var CONTAINER_CLASS = 'g2-crosshair';
var CROSSHAIR_LINE = CONTAINER_CLASS + '-line';
var CROSSHAIR_TEXT = CONTAINER_CLASS + '-text';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/html-theme.js
var _a;
var html_theme_default =
  ((_a = {}),
  (_a['' + CONTAINER_CLASS] = {
    position: 'relative'
  }),
  (_a['' + CROSSHAIR_LINE] = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }),
  (_a['' + CROSSHAIR_TEXT] = {
    position: 'absolute',
    color: theme_default.textColor,
    fontFamily: theme_default.fontFamily
  }),
  _a);

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/crosshair/html.js
var HtmlCrosshair = (function(_super) {
  __extends20(HtmlCrosshair2, _super);
  function HtmlCrosshair2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  HtmlCrosshair2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign21(__assign21({}, cfg), {
      name: 'crosshair',
      type: 'html',
      locationType: 'region',
      start: {
        x: 0,
        y: 0
      },
      end: {
        x: 0,
        y: 0
      },
      capture: false,
      text: null,
      containerTpl: '<div class="' + CONTAINER_CLASS + '"></div>',
      crosshairTpl: '<div class="' + CROSSHAIR_LINE + '"></div>',
      textTpl: '<span class="' + CROSSHAIR_TEXT + '">{content}</span>',
      domStyles: null,
      containerClassName: CONTAINER_CLASS,
      defaultStyles: html_theme_default,
      defaultCfg: {
        text: {
          position: 'start',
          content: null,
          align: 'center',
          offset: 10
        }
      }
    });
  };
  HtmlCrosshair2.prototype.render = function() {
    this.resetText();
    this.resetPosition();
  };
  HtmlCrosshair2.prototype.initCrossHair = function() {
    var container = this.getContainer();
    var crosshairTpl = this.get('crosshairTpl');
    var crosshairEl = createDom3(crosshairTpl);
    container.appendChild(crosshairEl);
    this.applyStyle(CROSSHAIR_LINE, crosshairEl);
    this.set('crosshairEl', crosshairEl);
  };
  HtmlCrosshair2.prototype.getTextPoint = function() {
    var _a3 = this.getLocation(),
      start = _a3.start,
      end = _a3.end;
    var _b = this.get('text'),
      position = _b.position,
      offset = _b.offset;
    return getTextPoint(start, end, position, offset);
  };
  HtmlCrosshair2.prototype.resetText = function() {
    var text = this.get('text');
    var textEl = this.get('textEl');
    if (text) {
      var content = text.content;
      if (!textEl) {
        var container = this.getContainer();
        var textTpl = substitute(this.get('textTpl'), text);
        textEl = createDom3(textTpl);
        container.appendChild(textEl);
        this.applyStyle(CROSSHAIR_TEXT, textEl);
        this.set('textEl', textEl);
      }
      textEl.innerHTML = content;
    } else if (textEl) {
      textEl.remove();
    }
  };
  HtmlCrosshair2.prototype.isVertical = function(start, end) {
    return start.x === end.x;
  };
  HtmlCrosshair2.prototype.resetPosition = function() {
    var crosshairEl = this.get('crosshairEl');
    if (!crosshairEl) {
      this.initCrossHair();
      crosshairEl = this.get('crosshairEl');
    }
    var start = this.get('start');
    var end = this.get('end');
    var minX = Math.min(start.x, end.x);
    var minY = Math.min(start.y, end.y);
    if (this.isVertical(start, end)) {
      modifyCSS3(crosshairEl, {
        width: '1px',
        height: toPx(Math.abs(end.y - start.y))
      });
    } else {
      modifyCSS3(crosshairEl, {
        height: '1px',
        width: toPx(Math.abs(end.x - start.x))
      });
    }
    modifyCSS3(crosshairEl, {
      top: toPx(minY),
      left: toPx(minX)
    });
    this.alignText();
  };
  HtmlCrosshair2.prototype.alignText = function() {
    var textEl = this.get('textEl');
    if (textEl) {
      var align = this.get('text').align;
      var clientWidth = textEl.clientWidth;
      var point = this.getTextPoint();
      switch (align) {
        case 'center':
          point.x = point.x - clientWidth / 2;
          break;
        case 'right':
          point.x = point.x - clientWidth;
        case 'left':
          break;
      }
      modifyCSS3(textEl, {
        top: toPx(point.y),
        left: toPx(point.x)
      });
    }
  };
  HtmlCrosshair2.prototype.updateInner = function(cfg) {
    if (hasKey3(cfg, 'text')) {
      this.resetText();
    }
    _super.prototype.updateInner.call(this, cfg);
  };
  return HtmlCrosshair2;
})(html_component_default);
var html_default2 = HtmlCrosshair;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/grid/index.js
var grid_exports = {};
__export(grid_exports, {
  Base: () => base_default3,
  Circle: () => circle_default3,
  Line: () => line_default4
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/grid/base.js
import { __assign as __assign22, __extends as __extends21 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each13,
  isString as isString4,
  mix as mix4,
  isFunction as isFunction6
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var GridBase = (function(_super) {
  __extends21(GridBase2, _super);
  function GridBase2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  GridBase2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign22(__assign22({}, cfg), {
      name: 'grid',
      line: {},
      alternateColor: null,
      capture: false,
      items: [],
      closed: false,
      defaultCfg: {
        line: {
          type: 'line',
          style: {
            lineWidth: 1,
            stroke: theme_default.lineColor
          }
        }
      }
    });
  };
  GridBase2.prototype.getLineType = function() {
    var line = this.get('line') || this.get('defaultCfg').line;
    return line.type;
  };
  GridBase2.prototype.renderInner = function(group) {
    this.drawGrid(group);
  };
  GridBase2.prototype.getAlternatePath = function(prePoints, points) {
    var regionPath = this.getGridPath(prePoints);
    var reversePoints = points.slice(0).reverse();
    var nextPath = this.getGridPath(reversePoints, true);
    var closed = this.get('closed');
    if (closed) {
      regionPath = regionPath.concat(nextPath);
    } else {
      nextPath[0][0] = 'L';
      regionPath = regionPath.concat(nextPath);
      regionPath.push(['Z']);
    }
    return regionPath;
  };
  GridBase2.prototype.getPathStyle = function() {
    return this.get('line').style;
  };
  GridBase2.prototype.drawGrid = function(group) {
    var _this = this;
    var line = this.get('line');
    var items = this.get('items');
    var alternateColor = this.get('alternateColor');
    var preItem = null;
    each13(items, function(item, index) {
      var id = item.id || index;
      if (line) {
        var style = _this.getPathStyle();
        style = isFunction6(style) ? style(item, index, items) : style;
        var lineId = _this.getElementId('line-' + id);
        var gridPath = _this.getGridPath(item.points);
        _this.addShape(group, {
          type: 'path',
          name: 'grid-line',
          id: lineId,
          attrs: mix4(
            {
              path: gridPath
            },
            style
          )
        });
      }
      if (alternateColor && index > 0) {
        var regionId = _this.getElementId('region-' + id);
        var isEven = index % 2 === 0;
        if (isString4(alternateColor)) {
          if (isEven) {
            _this.drawAlternateRegion(regionId, group, preItem.points, item.points, alternateColor);
          }
        } else {
          var color = isEven ? alternateColor[1] : alternateColor[0];
          _this.drawAlternateRegion(regionId, group, preItem.points, item.points, color);
        }
      }
      preItem = item;
    });
  };
  GridBase2.prototype.drawAlternateRegion = function(id, group, prePoints, points, color) {
    var regionPath = this.getAlternatePath(prePoints, points);
    this.addShape(group, {
      type: 'path',
      id,
      name: 'grid-region',
      attrs: {
        path: regionPath,
        fill: color
      }
    });
  };
  return GridBase2;
})(group_component_default);
var base_default3 = GridBase;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/grid/circle.js
import { __assign as __assign23, __extends as __extends22 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each14 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function distance2(x1, y1, x2, y2) {
  var dx = x2 - x1;
  var dy = y2 - y1;
  return Math.sqrt(dx * dx + dy * dy);
}
var Circle2 = (function(_super) {
  __extends22(Circle3, _super);
  function Circle3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Circle3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign23(__assign23({}, cfg), {
      type: 'circle',
      center: null,
      closed: true
    });
  };
  Circle3.prototype.getGridPath = function(points, reversed) {
    var lineType = this.getLineType();
    var closed = this.get('closed');
    var path = [];
    if (points.length) {
      if (lineType === 'circle') {
        var center = this.get('center');
        var firstPoint = points[0];
        var radius_1 = distance2(center.x, center.y, firstPoint.x, firstPoint.y);
        var sweepFlag_1 = reversed ? 0 : 1;
        if (closed) {
          path.push(['M', center.x, center.y - radius_1]);
          path.push(['A', radius_1, radius_1, 0, 0, sweepFlag_1, center.x, center.y + radius_1]);
          path.push(['A', radius_1, radius_1, 0, 0, sweepFlag_1, center.x, center.y - radius_1]);
          path.push(['Z']);
        } else {
          each14(points, function(point, index) {
            if (index === 0) {
              path.push(['M', point.x, point.y]);
            } else {
              path.push(['A', radius_1, radius_1, 0, 0, sweepFlag_1, point.x, point.y]);
            }
          });
        }
      } else {
        each14(points, function(point, index) {
          if (index === 0) {
            path.push(['M', point.x, point.y]);
          } else {
            path.push(['L', point.x, point.y]);
          }
        });
        if (closed) {
          path.push(['Z']);
        }
      }
    }
    return path;
  };
  return Circle3;
})(base_default3);
var circle_default3 = Circle2;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/grid/line.js
import { __assign as __assign24, __extends as __extends23 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each15 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Line2 = (function(_super) {
  __extends23(Line3, _super);
  function Line3() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Line3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign24(__assign24({}, cfg), {
      type: 'line'
    });
  };
  Line3.prototype.getGridPath = function(points) {
    var path = [];
    each15(points, function(point, index) {
      if (index === 0) {
        path.push(['M', point.x, point.y]);
      } else {
        path.push(['L', point.x, point.y]);
      }
    });
    return path;
  };
  return Line3;
})(base_default3);
var line_default4 = Line2;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/legend/index.js
var legend_exports = {};
__export(legend_exports, {
  Base: () => base_default4,
  Category: () => category_default,
  Continuous: () => continuous_default
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/legend/category.js
import {
  __assign as __assign26,
  __extends as __extends25,
  __rest as __rest3
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  clamp,
  deepMix as deepMix3,
  each as each16,
  filter as filter2,
  get as get5,
  mix as mix5,
  isNumber as isNumber5,
  isFunction as isFunction7
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/legend/base.js
import { __assign as __assign25, __extends as __extends24 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var LegendBase = (function(_super) {
  __extends24(LegendBase2, _super);
  function LegendBase2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LegendBase2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign25(__assign25({}, cfg), {
      name: 'legend',
      layout: 'horizontal',
      locationType: 'point',
      x: 0,
      y: 0,
      offsetX: 0,
      offsetY: 0,
      title: null,
      background: null
    });
  };
  LegendBase2.prototype.getLayoutBBox = function() {
    var bbox = _super.prototype.getLayoutBBox.call(this);
    var maxWidth = this.get('maxWidth');
    var maxHeight = this.get('maxHeight');
    var width = bbox.width,
      height = bbox.height;
    if (maxWidth) {
      width = Math.min(width, maxWidth);
    }
    if (maxHeight) {
      height = Math.min(height, maxHeight);
    }
    return createBBox(bbox.minX, bbox.minY, width, height);
  };
  LegendBase2.prototype.setLocation = function(cfg) {
    this.set('x', cfg.x);
    this.set('y', cfg.y);
    this.resetLocation();
  };
  LegendBase2.prototype.resetLocation = function() {
    var x = this.get('x');
    var y = this.get('y');
    var offsetX = this.get('offsetX');
    var offsetY = this.get('offsetY');
    this.moveElementTo(this.get('group'), {
      x: x + offsetX,
      y: y + offsetY
    });
  };
  LegendBase2.prototype.applyOffset = function() {
    this.resetLocation();
  };
  LegendBase2.prototype.getDrawPoint = function() {
    return this.get('currentPoint');
  };
  LegendBase2.prototype.setDrawPoint = function(point) {
    return this.set('currentPoint', point);
  };
  LegendBase2.prototype.renderInner = function(group) {
    this.resetDraw();
    if (this.get('title')) {
      this.drawTitle(group);
    }
    this.drawLegendContent(group);
    if (this.get('background')) {
      this.drawBackground(group);
    }
  };
  LegendBase2.prototype.drawBackground = function(group) {
    var background = this.get('background');
    var bbox = group.getBBox();
    var padding = formatPadding(background.padding);
    var attrs = __assign25(
      {
        x: 0,
        y: 0,
        width: bbox.width + padding[1] + padding[3],
        height: bbox.height + padding[0] + padding[2]
      },
      background.style
    );
    var backgroundShape = this.addShape(group, {
      type: 'rect',
      id: this.getElementId('background'),
      name: 'legend-background',
      attrs
    });
    backgroundShape.toBack();
  };
  LegendBase2.prototype.drawTitle = function(group) {
    var currentPoint = this.get('currentPoint');
    var titleCfg = this.get('title');
    var spacing = titleCfg.spacing,
      style = titleCfg.style,
      text = titleCfg.text;
    var shape = this.addShape(group, {
      type: 'text',
      id: this.getElementId('title'),
      name: 'legend-title',
      attrs: __assign25(
        {
          text,
          x: currentPoint.x,
          y: currentPoint.y
        },
        style
      )
    });
    var bbox = shape.getBBox();
    this.set('currentPoint', {
      x: currentPoint.x,
      y: bbox.maxY + spacing
    });
  };
  LegendBase2.prototype.resetDraw = function() {
    var background = this.get('background');
    var currentPoint = {
      x: 0,
      y: 0
    };
    if (background) {
      var padding = formatPadding(background.padding);
      currentPoint.x = padding[3];
      currentPoint.y = padding[0];
    }
    this.set('currentPoint', currentPoint);
  };
  return LegendBase2;
})(group_component_default);
var base_default4 = LegendBase;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/legend/category.js
var DEFAULT_PAGE_NAVIGATOR = {
  marker: {
    style: {
      inactiveFill: '#000',
      inactiveOpacity: 0.45,
      fill: '#000',
      opacity: 1,
      size: 12
    }
  },
  text: {
    style: {
      fill: '#ccc',
      fontSize: 12
    }
  }
};
var textStyle = {
  fill: theme_default.textColor,
  fontSize: 12,
  textAlign: 'start',
  textBaseline: 'middle',
  fontFamily: theme_default.fontFamily,
  fontWeight: 'normal',
  lineHeight: 12
};
var RIGHT_ARROW_NAME = 'navigation-arrow-right';
var LEFT_ARROW_NAME = 'navigation-arrow-left';
var ROTATE_MAP = {
  right: (90 * Math.PI) / 180,
  left: ((360 - 90) * Math.PI) / 180,
  up: 0,
  down: (180 * Math.PI) / 180
};
var Category = (function(_super) {
  __extends25(Category3, _super);
  function Category3() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.currentPageIndex = 1;
    _this.totalPagesCnt = 1;
    _this.pageWidth = 0;
    _this.pageHeight = 0;
    _this.startX = 0;
    _this.startY = 0;
    _this.onNavigationBack = function() {
      var itemGroup = _this.getElementByLocalId('item-group');
      if (_this.currentPageIndex > 1) {
        _this.currentPageIndex -= 1;
        _this.updateNavigation();
        var matrix = _this.getCurrentNavigationMatrix();
        if (_this.get('animate')) {
          itemGroup.animate(
            {
              matrix
            },
            100
          );
        } else {
          itemGroup.attr({
            matrix
          });
        }
      }
    };
    _this.onNavigationAfter = function() {
      var itemGroup = _this.getElementByLocalId('item-group');
      if (_this.currentPageIndex < _this.totalPagesCnt) {
        _this.currentPageIndex += 1;
        _this.updateNavigation();
        var matrix = _this.getCurrentNavigationMatrix();
        if (_this.get('animate')) {
          itemGroup.animate(
            {
              matrix
            },
            100
          );
        } else {
          itemGroup.attr({
            matrix
          });
        }
      }
    };
    return _this;
  }
  Category3.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign26(__assign26({}, cfg), {
      name: 'legend',
      type: 'category',
      itemSpacing: 24,
      itemMarginBottom: 8,
      maxItemWidth: null,
      itemWidth: null,
      itemHeight: null,
      itemName: {},
      itemValue: null,
      maxWidth: null,
      maxHeight: null,
      marker: {},
      radio: null,
      items: [],
      itemStates: {},
      itemBackground: {},
      pageNavigator: {},
      defaultCfg: {
        title: {
          spacing: 5,
          style: {
            fill: theme_default.textColor,
            fontSize: 12,
            textAlign: 'start',
            textBaseline: 'top'
          }
        },
        background: {
          padding: 5,
          style: {
            stroke: theme_default.lineColor
          }
        },
        itemBackground: {
          style: {
            opacity: 0,
            fill: '#fff'
          }
        },
        pageNavigator: DEFAULT_PAGE_NAVIGATOR,
        itemName: {
          spacing: 16,
          style: textStyle
        },
        marker: {
          spacing: 8,
          style: {
            r: 6,
            symbol: 'circle'
          }
        },
        itemValue: {
          alignRight: false,
          formatter: null,
          style: textStyle,
          spacing: 6
        },
        itemStates: {
          active: {
            nameStyle: {
              opacity: 0.8
            }
          },
          unchecked: {
            nameStyle: {
              fill: theme_default.uncheckedColor
            },
            markerStyle: {
              fill: theme_default.uncheckedColor,
              stroke: theme_default.uncheckedColor
            }
          },
          inactive: {
            nameStyle: {
              fill: theme_default.uncheckedColor
            },
            markerStyle: {
              opacity: 0.2
            }
          }
        }
      }
    });
  };
  Category3.prototype.isList = function() {
    return true;
  };
  Category3.prototype.getItems = function() {
    return this.get('items');
  };
  Category3.prototype.setItems = function(items) {
    this.update({
      items
    });
  };
  Category3.prototype.updateItem = function(item, cfg) {
    mix5(item, cfg);
    this.clear();
    this.render();
  };
  Category3.prototype.clearItems = function() {
    var itemGroup = this.getElementByLocalId('item-group');
    itemGroup && itemGroup.clear();
  };
  Category3.prototype.setItemState = function(item, state, value) {
    item[state] = value;
    var itemElement = this.getElementByLocalId('item-' + item.id);
    if (itemElement) {
      var items = this.getItems();
      var index = items.indexOf(item);
      var offsetGroup = this.createOffScreenGroup();
      var newElement = this.drawItem(item, index, this.getItemHeight(), offsetGroup);
      this.updateElements(newElement, itemElement);
      this.clearUpdateStatus(itemElement);
    }
  };
  Category3.prototype.hasState = function(item, state) {
    return !!item[state];
  };
  Category3.prototype.getItemStates = function(item) {
    var itemStates = this.get('itemStates');
    var rst = [];
    each16(itemStates, function(v, k) {
      if (item[k]) {
        rst.push(k);
      }
    });
    return rst;
  };
  Category3.prototype.clearItemsState = function(state) {
    var _this = this;
    var items = this.getItemsByState(state);
    each16(items, function(item) {
      _this.setItemState(item, state, false);
    });
  };
  Category3.prototype.getItemsByState = function(state) {
    var _this = this;
    var items = this.getItems();
    return filter2(items, function(item) {
      return _this.hasState(item, state);
    });
  };
  Category3.prototype.drawLegendContent = function(group) {
    this.processItems();
    this.drawItems(group);
  };
  Category3.prototype.processItems = function() {
    var items = this.get('items');
    each16(items, function(item) {
      if (!item.id) {
        item.id = item.name;
      }
    });
  };
  Category3.prototype.drawItems = function(group) {
    var _this = this;
    var itemContainerGroup = this.addGroup(group, {
      id: this.getElementId('item-container-group'),
      name: 'legend-item-container-group'
    });
    var itemGroup = this.addGroup(itemContainerGroup, {
      id: this.getElementId('item-group'),
      name: 'legend-item-group'
    });
    var itemHeight = this.getItemHeight();
    var itemWidth = this.get('itemWidth');
    var itemSpacing = this.get('itemSpacing');
    var itemMarginBottom = this.get('itemMarginBottom');
    var currentPoint = this.get('currentPoint');
    var startX = currentPoint.x;
    var startY = currentPoint.y;
    var layout = this.get('layout');
    var items = this.get('items');
    var wrapped = false;
    var pageWidth = 0;
    var maxWidth = this.get('maxWidth');
    var maxHeight = this.get('maxHeight');
    each16(items, function(item, index) {
      var subGroup = _this.drawItem(item, index, itemHeight, itemGroup);
      var bbox = subGroup.getBBox();
      var width = itemWidth || bbox.width;
      if (width > pageWidth) {
        pageWidth = width;
      }
      if (layout === 'horizontal') {
        if (maxWidth && maxWidth < currentPoint.x + width - startX) {
          wrapped = true;
          currentPoint.x = startX;
          currentPoint.y += itemHeight + itemMarginBottom;
        }
        _this.moveElementTo(subGroup, currentPoint);
        currentPoint.x += width + itemSpacing;
      } else {
        if (maxHeight && maxHeight < currentPoint.y + itemHeight + itemMarginBottom - startY) {
          wrapped = true;
          currentPoint.x += pageWidth + itemSpacing;
          currentPoint.y = startY;
          pageWidth = 0;
        }
        _this.moveElementTo(subGroup, currentPoint);
        currentPoint.y += itemHeight + itemMarginBottom;
      }
    });
    if (wrapped && this.get('flipPage')) {
      this.pageHeight = 0;
      this.pageWidth = 0;
      this.totalPagesCnt = 1;
      this.startX = startX;
      this.startY = startY;
      this.adjustNavigation(group, itemGroup);
    }
  };
  Category3.prototype.getItemHeight = function() {
    var itemHeight = this.get('itemHeight');
    if (!itemHeight) {
      var style_1 = (this.get('itemName') || {}).style;
      if (isFunction7(style_1)) {
        var items_1 = this.getItems();
        items_1.forEach(function(item, index) {
          var fontSize = __assign26(__assign26({}, textStyle), style_1(item, index, items_1)).fontSize;
          if (itemHeight < fontSize) {
            itemHeight = fontSize;
          }
        });
      } else if (style_1) {
        itemHeight = style_1.fontSize;
      }
    }
    return itemHeight;
  };
  Category3.prototype.drawMarker = function(container, markerCfg, item, itemHeight) {
    var markerAttrs = __assign26(
      __assign26(
        __assign26(
          {
            x: 0,
            y: itemHeight / 2
          },
          markerCfg.style
        ),
        {
          symbol: get5(item.marker, 'symbol', 'circle')
        }
      ),
      get5(item.marker, 'style', {})
    );
    var shape = this.addShape(container, {
      type: 'marker',
      id: this.getElementId('item-' + item.id + '-marker'),
      name: 'legend-item-marker',
      attrs: markerAttrs
    });
    var bbox = shape.getBBox();
    shape.attr('x', bbox.width / 2);
    var _a3 = shape.attr(),
      stroke = _a3.stroke,
      fill = _a3.fill;
    if (stroke) {
      shape.set('isStroke', true);
    }
    if (fill) {
      shape.set('isFill', true);
    }
    return shape;
  };
  Category3.prototype.drawItemText = function(container, textName, cfg, item, itemHeight, xPosition, index) {
    var formatter = cfg.formatter;
    var style = cfg.style;
    var attrs = __assign26(
      __assign26(
        {
          x: xPosition,
          y: itemHeight / 2,
          text: formatter ? formatter(item[textName], item, index) : item[textName]
        },
        textStyle
      ),
      isFunction7(style) ? style(item, index, this.getItems()) : style
    );
    return this.addShape(container, {
      type: 'text',
      id: this.getElementId('item-' + item.id + '-' + textName),
      name: 'legend-item-' + textName,
      attrs
    });
  };
  Category3.prototype.drawRadio = function(container, radioCfg, item, itemHeight, x) {
    var _a3, _b;
    var style = radioCfg.style || {};
    var r = (_a3 = style.r) !== null && _a3 !== void 0 ? _a3 : itemHeight / 2;
    var lineWidth = (r * 3.6) / 8;
    var _c = [x + r, itemHeight / 2 - r],
      x0 = _c[0],
      y0 = _c[1];
    var _d = [x0 + r, y0 + r],
      x1 = _d[0],
      y1 = _d[1];
    var _e = [x0, y1 + r],
      x2 = _e[0],
      y2 = _e[1];
    var _f = [x, y0 + r],
      x3 = _f[0],
      y3 = _f[1];
    var showRadio = item.showRadio;
    var attrs = __assign26(
      __assign26(
        {
          path: [
            ['M', x0, y0],
            ['A', r, r, 0, 0, 1, x1, y1],
            ['L', x1 - lineWidth, y1],
            ['L', x1, y1],
            ['A', r, r, 0, 0, 1, x2, y2],
            ['L', x2, y2 - lineWidth],
            ['L', x2, y2],
            ['A', r, r, 0, 0, 1, x3, y3],
            ['L', x3 + lineWidth, y3],
            ['L', x3, y3],
            ['A', r, r, 0, 0, 1, x0, y0],
            ['L', x0, y0 + lineWidth]
          ],
          stroke: '#000000',
          fill: '#ffffff'
        },
        style
      ),
      {
        opacity: showRadio
          ? (_b = style === null || style === void 0 ? void 0 : style.opacity) !== null && _b !== void 0
            ? _b
            : 0.45
          : 0
      }
    );
    var radioShape = this.addShape(container, {
      type: 'path',
      id: this.getElementId('item-' + item.id + '-radio'),
      name: 'legend-item-radio',
      attrs
    });
    radioShape.set('tip', radioCfg.tip);
    return radioShape;
  };
  Category3.prototype.drawItem = function(item, index, itemHeight, itemGroup) {
    var groupId = 'item-' + item.id;
    var subContainer = this.addGroup(itemGroup, {
      name: 'legend-item-container',
      id: this.getElementId('item-container-' + groupId),
      delegateObject: {
        item,
        index
      }
    });
    var subGroup = this.addGroup(subContainer, {
      name: 'legend-item',
      id: this.getElementId(groupId),
      delegateObject: {
        item,
        index
      }
    });
    var marker = this.get('marker');
    var itemName = this.get('itemName');
    var itemValue = this.get('itemValue');
    var itemBackground = this.get('itemBackground');
    var radio = this.get('radio');
    var itemWidth = this.getLimitItemWidth();
    var curX = 0;
    if (marker) {
      var markerShape = this.drawMarker(subGroup, marker, item, itemHeight);
      var spacing = marker.spacing;
      var itemMarkerSpacing = get5(item, ['marker', 'spacing']);
      if (isNumber5(itemMarkerSpacing)) {
        spacing = itemMarkerSpacing;
      }
      curX = markerShape.getBBox().maxX + spacing;
    }
    if (itemName) {
      var nameShape = this.drawItemText(subGroup, 'name', itemName, item, itemHeight, curX, index);
      if (itemWidth) {
        ellipsisLabel(true, nameShape, clamp(itemWidth - curX, 0, itemWidth));
      }
      curX = nameShape.getBBox().maxX + itemName.spacing;
    }
    if (itemValue) {
      var valueShape = this.drawItemText(subGroup, 'value', itemValue, item, itemHeight, curX, index);
      if (itemWidth) {
        if (itemValue.alignRight) {
          valueShape.attr({
            textAlign: 'right',
            x: itemWidth
          });
          ellipsisLabel(true, valueShape, clamp(itemWidth - curX, 0, itemWidth), 'head');
        } else {
          ellipsisLabel(true, valueShape, clamp(itemWidth - curX, 0, itemWidth));
        }
      }
      curX = valueShape.getBBox().maxX + itemValue.spacing;
    }
    if (radio) {
      this.drawRadio(subGroup, radio, item, itemHeight, curX);
    }
    if (itemBackground) {
      var bbox = subGroup.getBBox();
      var backShape = this.addShape(subGroup, {
        type: 'rect',
        name: 'legend-item-background',
        id: this.getElementId(groupId + '-background'),
        attrs: __assign26(
          {
            x: 0,
            y: 0,
            width: bbox.width,
            height: itemHeight
          },
          itemBackground.style
        )
      });
      backShape.toBack();
    }
    this.applyItemStates(item, subGroup);
    return subGroup;
  };
  Category3.prototype.adjustNavigation = function(container, itemGroup) {
    var _this = this;
    var startX = this.startX;
    var startY = this.startY;
    var layout = this.get('layout');
    var subGroups = itemGroup.findAll(function(item) {
      return item.get('name') === 'legend-item';
    });
    var maxWidth = this.get('maxWidth');
    var maxHeight = this.get('maxHeight');
    var itemWidth = this.get('itemWidth');
    var itemSpacing = this.get('itemSpacing');
    var itemHeight = this.getItemHeight();
    var pageNavigator = deepMix3({}, DEFAULT_PAGE_NAVIGATOR, this.get('pageNavigator'));
    var navigation = this.drawNavigation(container, layout, '00/00', pageNavigator);
    var navigationBBox = navigation.getBBox();
    var currentPoint = {
      x: startX,
      y: startY
    };
    var pages = 1;
    var widthLimit = 0;
    var pageWidth = 0;
    var maxItemWidth = 0;
    var itemMarginBottom = this.get('itemMarginBottom');
    if (layout === 'horizontal') {
      var maxRow = this.get('maxRow') || 1;
      var maxRowHeight_1 = itemHeight + (maxRow === 1 ? 0 : itemMarginBottom);
      this.pageHeight = maxRowHeight_1 * maxRow;
      each16(subGroups, function(item) {
        var bbox = item.getBBox();
        var width = itemWidth || bbox.width;
        if (
          (widthLimit && widthLimit < currentPoint.x + width + itemSpacing) ||
          maxWidth < currentPoint.x + width + itemSpacing + navigationBBox.width
        ) {
          if (pages === 1) {
            widthLimit = currentPoint.x + itemSpacing;
            _this.pageWidth = widthLimit;
            _this.moveElementTo(navigation, {
              x: maxWidth - itemSpacing - navigationBBox.width - navigationBBox.minX,
              y: currentPoint.y + itemHeight / 2 - navigationBBox.height / 2 - navigationBBox.minY
            });
          }
          pages += 1;
          currentPoint.x = startX;
          currentPoint.y += maxRowHeight_1;
        }
        _this.moveElementTo(item, currentPoint);
        item.getParent().setClip({
          type: 'rect',
          attrs: {
            x: currentPoint.x,
            y: currentPoint.y,
            width: width + itemSpacing,
            height: itemHeight
          }
        });
        currentPoint.x += width + itemSpacing;
      });
    } else {
      each16(subGroups, function(item) {
        var bbox = item.getBBox();
        if (bbox.width > pageWidth) {
          pageWidth = bbox.width;
        }
      });
      maxItemWidth = pageWidth;
      pageWidth += itemSpacing;
      if (maxWidth) {
        pageWidth = Math.min(maxWidth, pageWidth);
        maxItemWidth = Math.min(maxWidth, maxItemWidth);
      }
      this.pageWidth = pageWidth;
      this.pageHeight = maxHeight - Math.max(navigationBBox.height, itemHeight + itemMarginBottom);
      var cntPerPage_1 = Math.floor(this.pageHeight / (itemHeight + itemMarginBottom));
      each16(subGroups, function(item, index) {
        if (index !== 0 && index % cntPerPage_1 === 0) {
          pages += 1;
          currentPoint.x += pageWidth;
          currentPoint.y = startY;
        }
        _this.moveElementTo(item, currentPoint);
        item.getParent().setClip({
          type: 'rect',
          attrs: {
            x: currentPoint.x,
            y: currentPoint.y,
            width: pageWidth,
            height: itemHeight
          }
        });
        currentPoint.y += itemHeight + itemMarginBottom;
      });
      this.totalPagesCnt = pages;
      this.moveElementTo(navigation, {
        x: startX + maxItemWidth / 2 - navigationBBox.width / 2 - navigationBBox.minX,
        y: maxHeight - navigationBBox.height - navigationBBox.minY
      });
    }
    if (this.pageHeight && this.pageWidth) {
      itemGroup.getParent().setClip({
        type: 'rect',
        attrs: {
          x: this.startX,
          y: this.startY,
          width: this.pageWidth,
          height: this.pageHeight
        }
      });
    }
    if (layout === 'horizontal' && this.get('maxRow')) {
      this.totalPagesCnt = Math.ceil(pages / this.get('maxRow'));
    } else {
      this.totalPagesCnt = pages;
    }
    if (this.currentPageIndex > this.totalPagesCnt) {
      this.currentPageIndex = 1;
    }
    this.updateNavigation(navigation);
    itemGroup.attr('matrix', this.getCurrentNavigationMatrix());
  };
  Category3.prototype.drawNavigation = function(group, layout, text, styleCfg) {
    var currentPoint = {
      x: 0,
      y: 0
    };
    var subGroup = this.addGroup(group, {
      id: this.getElementId('navigation-group'),
      name: 'legend-navigation'
    });
    var _a3 = get5(styleCfg.marker, 'style', {}),
      _b = _a3.size,
      size3 = _b === void 0 ? 12 : _b,
      arrowStyle = __rest3(_a3, ['size']);
    var leftArrow = this.drawArrow(
      subGroup,
      currentPoint,
      LEFT_ARROW_NAME,
      layout === 'horizontal' ? 'up' : 'left',
      size3,
      arrowStyle
    );
    leftArrow.on('click', this.onNavigationBack);
    var leftArrowBBox = leftArrow.getBBox();
    currentPoint.x += leftArrowBBox.width + 2;
    var textShape = this.addShape(subGroup, {
      type: 'text',
      id: this.getElementId('navigation-text'),
      name: 'navigation-text',
      attrs: __assign26(
        {
          x: currentPoint.x,
          y: currentPoint.y + size3 / 2,
          text,
          textBaseline: 'middle'
        },
        get5(styleCfg.text, 'style')
      )
    });
    var textBBox = textShape.getBBox();
    currentPoint.x += textBBox.width + 2;
    var rightArrow = this.drawArrow(
      subGroup,
      currentPoint,
      RIGHT_ARROW_NAME,
      layout === 'horizontal' ? 'down' : 'right',
      size3,
      arrowStyle
    );
    rightArrow.on('click', this.onNavigationAfter);
    return subGroup;
  };
  Category3.prototype.updateNavigation = function(navigation) {
    var pageNavigator = deepMix3({}, DEFAULT_PAGE_NAVIGATOR, this.get('pageNavigator'));
    var _a3 = pageNavigator.marker.style,
      fill = _a3.fill,
      opacity = _a3.opacity,
      inactiveFill = _a3.inactiveFill,
      inactiveOpacity = _a3.inactiveOpacity;
    var text = this.currentPageIndex + '/' + this.totalPagesCnt;
    var textShape = navigation ? navigation.getChildren()[1] : this.getElementByLocalId('navigation-text');
    var leftArrow = navigation
      ? navigation.findById(this.getElementId(LEFT_ARROW_NAME))
      : this.getElementByLocalId(LEFT_ARROW_NAME);
    var rightArrow = navigation
      ? navigation.findById(this.getElementId(RIGHT_ARROW_NAME))
      : this.getElementByLocalId(RIGHT_ARROW_NAME);
    textShape.attr('text', text);
    leftArrow.attr('opacity', this.currentPageIndex === 1 ? inactiveOpacity : opacity);
    leftArrow.attr('fill', this.currentPageIndex === 1 ? inactiveFill : fill);
    leftArrow.attr('cursor', this.currentPageIndex === 1 ? 'not-allowed' : 'pointer');
    rightArrow.attr('opacity', this.currentPageIndex === this.totalPagesCnt ? inactiveOpacity : opacity);
    rightArrow.attr('fill', this.currentPageIndex === this.totalPagesCnt ? inactiveFill : fill);
    rightArrow.attr('cursor', this.currentPageIndex === this.totalPagesCnt ? 'not-allowed' : 'pointer');
    var cursorX = leftArrow.getBBox().maxX + 2;
    textShape.attr('x', cursorX);
    cursorX += textShape.getBBox().width + 2;
    this.updateArrowPath(rightArrow, {
      x: cursorX,
      y: 0
    });
  };
  Category3.prototype.drawArrow = function(group, currentPoint, name, direction, size3, style) {
    var x = currentPoint.x,
      y = currentPoint.y;
    var shape = this.addShape(group, {
      type: 'path',
      id: this.getElementId(name),
      name,
      attrs: __assign26(
        {
          size: size3,
          direction,
          path: [['M', x + size3 / 2, y], ['L', x, y + size3], ['L', x + size3, y + size3], ['Z']],
          cursor: 'pointer'
        },
        style
      )
    });
    shape.attr(
      'matrix',
      getMatrixByAngle(
        {
          x: x + size3 / 2,
          y: y + size3 / 2
        },
        ROTATE_MAP[direction]
      )
    );
    return shape;
  };
  Category3.prototype.updateArrowPath = function(arrow, point) {
    var x = point.x,
      y = point.y;
    var _a3 = arrow.attr(),
      size3 = _a3.size,
      direction = _a3.direction;
    var matrix = getMatrixByAngle(
      {
        x: x + size3 / 2,
        y: y + size3 / 2
      },
      ROTATE_MAP[direction]
    );
    arrow.attr('path', [['M', x + size3 / 2, y], ['L', x, y + size3], ['L', x + size3, y + size3], ['Z']]);
    arrow.attr('matrix', matrix);
  };
  Category3.prototype.getCurrentNavigationMatrix = function() {
    var _a3 = this,
      currentPageIndex = _a3.currentPageIndex,
      pageWidth = _a3.pageWidth,
      pageHeight = _a3.pageHeight;
    var layout = this.get('layout');
    var translate =
      layout === 'horizontal'
        ? {
            x: 0,
            y: pageHeight * (1 - currentPageIndex)
          }
        : {
            x: pageWidth * (1 - currentPageIndex),
            y: 0
          };
    return getMatrixByTranslate(translate);
  };
  Category3.prototype.applyItemStates = function(item, subGroup) {
    var states = this.getItemStates(item);
    var hasStates = states.length > 0;
    if (hasStates) {
      var children = subGroup.getChildren();
      var itemStates_1 = this.get('itemStates');
      each16(children, function(element) {
        var name = element.get('name');
        var elName = name.split('-')[2];
        var statesStyle = getStatesStyle(item, elName, itemStates_1);
        if (statesStyle) {
          element.attr(statesStyle);
          if (elName === 'marker' && !(element.get('isStroke') && element.get('isFill'))) {
            if (element.get('isStroke')) {
              element.attr('fill', null);
            }
            if (element.get('isFill')) {
              element.attr('stroke', null);
            }
          }
        }
      });
    }
  };
  Category3.prototype.getLimitItemWidth = function() {
    var itemWidth = this.get('itemWidth');
    var maxItemWidth = this.get('maxItemWidth');
    if (maxItemWidth) {
      if (itemWidth) {
        maxItemWidth = itemWidth <= maxItemWidth ? itemWidth : maxItemWidth;
      }
    } else if (itemWidth) {
      maxItemWidth = itemWidth;
    }
    return maxItemWidth;
  };
  return Category3;
})(base_default4);
var category_default = Category;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/legend/continuous.js
import {
  __assign as __assign27,
  __extends as __extends26,
  __spreadArrays
} from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  clone as clone2,
  isFunction as isFunction8,
  mix as mix6,
  upperFirst
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var HANDLER_HEIGHT_RATIO = 1.4;
var HANDLER_TRIANGLE_RATIO = 0.4;
var ContinueLegend = (function(_super) {
  __extends26(ContinueLegend2, _super);
  function ContinueLegend2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  ContinueLegend2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign27(__assign27({}, cfg), {
      type: 'continue',
      min: 0,
      max: 100,
      value: null,
      colors: [],
      track: {},
      rail: {},
      label: {},
      handler: {},
      slidable: true,
      tip: null,
      step: null,
      maxWidth: null,
      maxHeight: null,
      defaultCfg: {
        label: {
          align: 'rail',
          spacing: 5,
          formatter: null,
          style: {
            fontSize: 12,
            fill: theme_default.textColor,
            textBaseline: 'middle',
            fontFamily: theme_default.fontFamily
          }
        },
        handler: {
          size: 10,
          style: {
            fill: '#fff',
            stroke: '#333'
          }
        },
        track: {},
        rail: {
          type: 'color',
          size: 20,
          defaultLength: 100,
          style: {
            fill: '#DCDEE2'
          }
        },
        title: {
          spacing: 5,
          style: {
            fill: theme_default.textColor,
            fontSize: 12,
            textAlign: 'start',
            textBaseline: 'top'
          }
        }
      }
    });
  };
  ContinueLegend2.prototype.isSlider = function() {
    return true;
  };
  ContinueLegend2.prototype.getValue = function() {
    return this.getCurrentValue();
  };
  ContinueLegend2.prototype.getRange = function() {
    return {
      min: this.get('min'),
      max: this.get('max')
    };
  };
  ContinueLegend2.prototype.setRange = function(min, max) {
    this.update({
      min,
      max
    });
  };
  ContinueLegend2.prototype.setValue = function(value) {
    var originValue = this.getValue();
    this.set('value', value);
    var group = this.get('group');
    this.resetTrackClip();
    if (this.get('slidable')) {
      this.resetHandlers(group);
    }
    this.delegateEmit('valuechanged', {
      originValue,
      value
    });
  };
  ContinueLegend2.prototype.initEvent = function() {
    var group = this.get('group');
    this.bindSliderEvent(group);
    this.bindRailEvent(group);
    this.bindTrackEvent(group);
  };
  ContinueLegend2.prototype.drawLegendContent = function(group) {
    this.drawRail(group);
    this.drawLabels(group);
    this.fixedElements(group);
    this.resetTrack(group);
    this.resetTrackClip(group);
    if (this.get('slidable')) {
      this.resetHandlers(group);
    }
  };
  ContinueLegend2.prototype.bindSliderEvent = function(group) {
    this.bindHandlersEvent(group);
  };
  ContinueLegend2.prototype.bindHandlersEvent = function(group) {
    var _this = this;
    group.on('legend-handler-min:drag', function(ev) {
      var minValue = _this.getValueByCanvasPoint(ev.x, ev.y);
      var currentValue = _this.getCurrentValue();
      var maxValue = currentValue[1];
      if (maxValue < minValue) {
        maxValue = minValue;
      }
      _this.setValue([minValue, maxValue]);
    });
    group.on('legend-handler-max:drag', function(ev) {
      var maxValue = _this.getValueByCanvasPoint(ev.x, ev.y);
      var currentValue = _this.getCurrentValue();
      var minValue = currentValue[0];
      if (minValue > maxValue) {
        minValue = maxValue;
      }
      _this.setValue([minValue, maxValue]);
    });
  };
  ContinueLegend2.prototype.bindRailEvent = function(group) {};
  ContinueLegend2.prototype.bindTrackEvent = function(group) {
    var _this = this;
    var prePoint = null;
    group.on('legend-track:dragstart', function(ev) {
      prePoint = {
        x: ev.x,
        y: ev.y
      };
    });
    group.on('legend-track:drag', function(ev) {
      if (!prePoint) {
        return;
      }
      var preValue = _this.getValueByCanvasPoint(prePoint.x, prePoint.y);
      var curValue = _this.getValueByCanvasPoint(ev.x, ev.y);
      var currentValue = _this.getCurrentValue();
      var curDiff = currentValue[1] - currentValue[0];
      var range = _this.getRange();
      var dValue = curValue - preValue;
      if (dValue < 0) {
        if (currentValue[0] + dValue > range.min) {
          _this.setValue([currentValue[0] + dValue, currentValue[1] + dValue]);
        } else {
          _this.setValue([range.min, range.min + curDiff]);
        }
      } else if (dValue > 0) {
        if (dValue > 0 && currentValue[1] + dValue < range.max) {
          _this.setValue([currentValue[0] + dValue, currentValue[1] + dValue]);
        } else {
          _this.setValue([range.max - curDiff, range.max]);
        }
      }
      prePoint = {
        x: ev.x,
        y: ev.y
      };
    });
    group.on('legend-track:dragend', function(ev) {
      prePoint = null;
    });
  };
  ContinueLegend2.prototype.drawLabels = function(group) {
    this.drawLabel('min', group);
    this.drawLabel('max', group);
  };
  ContinueLegend2.prototype.drawLabel = function(name, group) {
    var labelCfg = this.get('label');
    var style = labelCfg.style;
    var labelAlign = labelCfg.align;
    var labelFormatter = labelCfg.formatter;
    var value = this.get(name);
    var alignAttrs = this.getLabelAlignAttrs(name, labelAlign);
    var localId = 'label-' + name;
    this.addShape(group, {
      type: 'text',
      id: this.getElementId(localId),
      name: 'legend-label-' + name,
      attrs: __assign27(
        __assign27(
          {
            x: 0,
            y: 0,
            text: isFunction8(labelFormatter) ? labelFormatter(value) : value
          },
          style
        ),
        alignAttrs
      )
    });
  };
  ContinueLegend2.prototype.getLabelAlignAttrs = function(name, align) {
    var isVertical = this.isVertical();
    var textAlign = 'center';
    var textBaseline = 'middle';
    if (isVertical) {
      textAlign = 'start';
      if (align !== 'rail') {
        if (name === 'min') {
          textBaseline = 'top';
        } else {
          textBaseline = 'bottom';
        }
      } else {
        textBaseline = 'top';
      }
    } else {
      if (align !== 'rail') {
        textBaseline = 'top';
        if (name === 'min') {
          textAlign = 'start';
        } else {
          textAlign = 'end';
        }
      } else {
        textAlign = 'start';
        textBaseline = 'middle';
      }
    }
    return {
      textAlign,
      textBaseline
    };
  };
  ContinueLegend2.prototype.getRailPath = function(x, y, w, h) {
    var railCfg = this.get('rail');
    var size3 = railCfg.size,
      defaultLength = railCfg.defaultLength,
      type = railCfg.type;
    var isVertical = this.isVertical();
    var length = defaultLength;
    var width = w;
    var height = h;
    if (!width) {
      width = isVertical ? size3 : length;
    }
    if (!height) {
      height = isVertical ? length : size3;
    }
    var path = [];
    if (type === 'color') {
      path.push(['M', x, y]);
      path.push(['L', x + width, y]);
      path.push(['L', x + width, y + height]);
      path.push(['L', x, y + height]);
      path.push(['Z']);
    } else {
      path.push(['M', x + width, y]);
      path.push(['L', x + width, y + height]);
      path.push(['L', x, y + height]);
      path.push(['Z']);
    }
    return path;
  };
  ContinueLegend2.prototype.drawRail = function(group) {
    var railCfg = this.get('rail');
    var style = railCfg.style;
    this.addShape(group, {
      type: 'path',
      id: this.getElementId('rail'),
      name: 'legend-rail',
      attrs: __assign27(
        {
          path: this.getRailPath(0, 0)
        },
        style
      )
    });
  };
  ContinueLegend2.prototype.getTrackColor = function(colors) {
    var count = colors.length;
    if (!count) {
      return null;
    }
    if (count === 1) {
      return colors[0];
    }
    var color;
    if (this.isVertical()) {
      color = 'l(90)';
    } else {
      color = 'l(0)';
    }
    for (var i = 0; i < count; i++) {
      var percent = i / (count - 1);
      color += ' ' + percent + ':' + colors[i];
    }
    return color;
  };
  ContinueLegend2.prototype.getTrackPath = function(group) {
    var railShape = this.getRailShape(group);
    var path = railShape.attr('path');
    return clone2(path);
  };
  ContinueLegend2.prototype.getClipTrackAttrs = function(group) {
    var value = this.getCurrentValue();
    var min = value[0],
      max = value[1];
    var railBBox = this.getRailBBox(group);
    var startPoint = this.getPointByValue(min, group);
    var endPoint = this.getPointByValue(max, group);
    var isVertical = this.isVertical();
    var x;
    var y;
    var width;
    var height;
    if (isVertical) {
      x = railBBox.minX;
      y = startPoint.y;
      width = railBBox.width;
      height = endPoint.y - startPoint.y;
    } else {
      x = startPoint.x;
      y = railBBox.minY;
      width = endPoint.x - startPoint.x;
      height = railBBox.height;
    }
    return {
      x,
      y,
      width,
      height
    };
  };
  ContinueLegend2.prototype.getTrackAttrs = function(group) {
    var trackCfg = this.get('track');
    var colors = this.get('colors');
    var path = this.getTrackPath(group);
    return mix6(
      {
        path,
        fill: this.getTrackColor(colors)
      },
      trackCfg.style
    );
  };
  ContinueLegend2.prototype.resetTrackClip = function(group) {
    var container = group || this.get('group');
    var trackId = this.getElementId('track');
    var trackShape = container.findById(trackId);
    var clipShape = trackShape.getClip();
    var attrs = this.getClipTrackAttrs(group);
    if (!clipShape) {
      trackShape.setClip({
        type: 'rect',
        attrs
      });
    } else {
      clipShape.attr(attrs);
    }
  };
  ContinueLegend2.prototype.resetTrack = function(group) {
    var trackId = this.getElementId('track');
    var trackShape = group.findById(trackId);
    var trackAttrs = this.getTrackAttrs(group);
    if (trackShape) {
      trackShape.attr(trackAttrs);
    } else {
      this.addShape(group, {
        type: 'path',
        id: trackId,
        draggable: this.get('slidable'),
        name: 'legend-track',
        attrs: trackAttrs
      });
    }
  };
  ContinueLegend2.prototype.getPointByValue = function(value, group) {
    var _a3 = this.getRange(),
      min = _a3.min,
      max = _a3.max;
    var percent = (value - min) / (max - min);
    var bbox = this.getRailBBox(group);
    var isVertcal = this.isVertical();
    var point = {
      x: 0,
      y: 0
    };
    if (isVertcal) {
      point.x = bbox.minX + bbox.width / 2;
      point.y = getValueByPercent(bbox.minY, bbox.maxY, percent);
    } else {
      point.x = getValueByPercent(bbox.minX, bbox.maxX, percent);
      point.y = bbox.minY + bbox.height / 2;
    }
    return point;
  };
  ContinueLegend2.prototype.getRailShape = function(group) {
    var container = group || this.get('group');
    return container.findById(this.getElementId('rail'));
  };
  ContinueLegend2.prototype.getRailBBox = function(group) {
    var railShape = this.getRailShape(group);
    var bbox = railShape.getBBox();
    return bbox;
  };
  ContinueLegend2.prototype.getRailCanvasBBox = function() {
    var container = this.get('group');
    var railShape = container.findById(this.getElementId('rail'));
    var bbox = railShape.getCanvasBBox();
    return bbox;
  };
  ContinueLegend2.prototype.isVertical = function() {
    return this.get('layout') === 'vertical';
  };
  ContinueLegend2.prototype.getValueByCanvasPoint = function(x, y) {
    var _a3 = this.getRange(),
      min = _a3.min,
      max = _a3.max;
    var bbox = this.getRailCanvasBBox();
    var isVertcal = this.isVertical();
    var step = this.get('step');
    var percent;
    if (isVertcal) {
      percent = (y - bbox.minY) / bbox.height;
    } else {
      percent = (x - bbox.minX) / bbox.width;
    }
    var value = getValueByPercent(min, max, percent);
    if (step) {
      var count = Math.round((value - min) / step);
      value = min + count * step;
    }
    if (value > max) {
      value = max;
    }
    if (value < min) {
      value = min;
    }
    return value;
  };
  ContinueLegend2.prototype.getCurrentValue = function() {
    var value = this.get('value');
    if (!value) {
      var values = this.get('values');
      if (!values) {
        return [this.get('min'), this.get('max')];
      }
      return [
        Math.max(Math.min.apply(Math, __spreadArrays(values, [this.get('max')])), this.get('min')),
        Math.min(Math.max.apply(Math, __spreadArrays(values, [this.get('min')])), this.get('max'))
      ];
    }
    return value;
  };
  ContinueLegend2.prototype.resetHandlers = function(group) {
    var currentValue = this.getCurrentValue();
    var min = currentValue[0],
      max = currentValue[1];
    this.resetHandler(group, 'min', min);
    this.resetHandler(group, 'max', max);
  };
  ContinueLegend2.prototype.getHandlerPath = function(handlerCfg, point) {
    var isVertical = this.isVertical();
    var path = [];
    var width = handlerCfg.size;
    var x = point.x,
      y = point.y;
    var height = width * HANDLER_HEIGHT_RATIO;
    var halfWidth = width / 2;
    var oneSixthWidth = width / 6;
    if (isVertical) {
      var triangleX = x + height * HANDLER_TRIANGLE_RATIO;
      path.push(['M', x, y]);
      path.push(['L', triangleX, y + halfWidth]);
      path.push(['L', x + height, y + halfWidth]);
      path.push(['L', x + height, y - halfWidth]);
      path.push(['L', triangleX, y - halfWidth]);
      path.push(['Z']);
      path.push(['M', triangleX, y + oneSixthWidth]);
      path.push(['L', x + height - 2, y + oneSixthWidth]);
      path.push(['M', triangleX, y - oneSixthWidth]);
      path.push(['L', x + height - 2, y - oneSixthWidth]);
    } else {
      var triangleY = y + height * HANDLER_TRIANGLE_RATIO;
      path.push(['M', x, y]);
      path.push(['L', x - halfWidth, triangleY]);
      path.push(['L', x - halfWidth, y + height]);
      path.push(['L', x + halfWidth, y + height]);
      path.push(['L', x + halfWidth, triangleY]);
      path.push(['Z']);
      path.push(['M', x - oneSixthWidth, triangleY]);
      path.push(['L', x - oneSixthWidth, y + height - 2]);
      path.push(['M', x + oneSixthWidth, triangleY]);
      path.push(['L', x + oneSixthWidth, y + height - 2]);
    }
    return path;
  };
  ContinueLegend2.prototype.resetHandler = function(group, name, value) {
    var point = this.getPointByValue(value, group);
    var handlerCfg = this.get('handler');
    var path = this.getHandlerPath(handlerCfg, point);
    var id = this.getElementId('handler-' + name);
    var handlerShape = group.findById(id);
    var isVertical = this.isVertical();
    if (handlerShape) {
      handlerShape.attr('path', path);
    } else {
      this.addShape(group, {
        type: 'path',
        name: 'legend-handler-' + name,
        draggable: true,
        id,
        attrs: __assign27(
          __assign27(
            {
              path
            },
            handlerCfg.style
          ),
          {
            cursor: isVertical ? 'ns-resize' : 'ew-resize'
          }
        )
      });
    }
  };
  ContinueLegend2.prototype.fixedElements = function(group) {
    var railShape = group.findById(this.getElementId('rail'));
    var minLabel = group.findById(this.getElementId('label-min'));
    var maxLabel = group.findById(this.getElementId('label-max'));
    var startPoint = this.getDrawPoint();
    if (this.isVertical()) {
      this.fixedVertail(minLabel, maxLabel, railShape, startPoint);
    } else {
      this.fixedHorizontal(minLabel, maxLabel, railShape, startPoint);
    }
  };
  ContinueLegend2.prototype.fitRailLength = function(minLabelBBox, maxLabelBBox, railBBox, railShape) {
    var isVertical = this.isVertical();
    var lengthField = isVertical ? 'height' : 'width';
    var labelCfg = this.get('label');
    var labelAlign = labelCfg.align;
    var spacing = labelCfg.spacing;
    var maxLength = this.get('max' + upperFirst(lengthField));
    if (maxLength) {
      var elementsLength =
        labelAlign === 'rail'
          ? railBBox[lengthField] + minLabelBBox[lengthField] + maxLabelBBox[lengthField] + spacing * 2
          : railBBox[lengthField];
      var diff = elementsLength - maxLength;
      if (diff > 0) {
        this.changeRailLength(railShape, lengthField, railBBox[lengthField] - diff);
      }
    }
  };
  ContinueLegend2.prototype.changeRailLength = function(railShape, lengthField, length) {
    var bbox = railShape.getBBox();
    var path;
    if (lengthField === 'height') {
      path = this.getRailPath(bbox.x, bbox.y, bbox.width, length);
    } else {
      path = this.getRailPath(bbox.x, bbox.y, length, bbox.height);
    }
    railShape.attr('path', path);
  };
  ContinueLegend2.prototype.changeRailPosition = function(railShape, x, y) {
    var bbox = railShape.getBBox();
    var path = this.getRailPath(x, y, bbox.width, bbox.height);
    railShape.attr('path', path);
  };
  ContinueLegend2.prototype.fixedHorizontal = function(minLabel, maxLabel, railShape, startPoint) {
    var labelCfg = this.get('label');
    var labelAlign = labelCfg.align;
    var spacing = labelCfg.spacing;
    var railBBox = railShape.getBBox();
    var minLabelBBox = minLabel.getBBox();
    var maxLabelBBox = maxLabel.getBBox();
    var railHeight = railBBox.height;
    this.fitRailLength(minLabelBBox, maxLabelBBox, railBBox, railShape);
    railBBox = railShape.getBBox();
    if (labelAlign === 'rail') {
      minLabel.attr({
        x: startPoint.x,
        y: startPoint.y + railHeight / 2
      });
      this.changeRailPosition(railShape, startPoint.x + minLabelBBox.width + spacing, startPoint.y);
      maxLabel.attr({
        x: startPoint.x + minLabelBBox.width + railBBox.width + spacing * 2,
        y: startPoint.y + railHeight / 2
      });
    } else if (labelAlign === 'top') {
      minLabel.attr({
        x: startPoint.x,
        y: startPoint.y
      });
      maxLabel.attr({
        x: startPoint.x + railBBox.width,
        y: startPoint.y
      });
      this.changeRailPosition(railShape, startPoint.x, startPoint.y + minLabelBBox.height + spacing);
    } else {
      this.changeRailPosition(railShape, startPoint.x, startPoint.y);
      minLabel.attr({
        x: startPoint.x,
        y: startPoint.y + railBBox.height + spacing
      });
      maxLabel.attr({
        x: startPoint.x + railBBox.width,
        y: startPoint.y + railBBox.height + spacing
      });
    }
  };
  ContinueLegend2.prototype.fixedVertail = function(minLabel, maxLabel, railShape, startPoint) {
    var labelCfg = this.get('label');
    var labelAlign = labelCfg.align;
    var spacing = labelCfg.spacing;
    var railBBox = railShape.getBBox();
    var minLabelBBox = minLabel.getBBox();
    var maxLabelBBox = maxLabel.getBBox();
    this.fitRailLength(minLabelBBox, maxLabelBBox, railBBox, railShape);
    railBBox = railShape.getBBox();
    if (labelAlign === 'rail') {
      minLabel.attr({
        x: startPoint.x,
        y: startPoint.y
      });
      this.changeRailPosition(railShape, startPoint.x, startPoint.y + minLabelBBox.height + spacing);
      maxLabel.attr({
        x: startPoint.x,
        y: startPoint.y + minLabelBBox.height + railBBox.height + spacing * 2
      });
    } else if (labelAlign === 'right') {
      minLabel.attr({
        x: startPoint.x + railBBox.width + spacing,
        y: startPoint.y
      });
      this.changeRailPosition(railShape, startPoint.x, startPoint.y);
      maxLabel.attr({
        x: startPoint.x + railBBox.width + spacing,
        y: startPoint.y + railBBox.height
      });
    } else {
      var maxLabelWidth = Math.max(minLabelBBox.width, maxLabelBBox.width);
      minLabel.attr({
        x: startPoint.x,
        y: startPoint.y
      });
      this.changeRailPosition(railShape, startPoint.x + maxLabelWidth + spacing, startPoint.y);
      maxLabel.attr({
        x: startPoint.x,
        y: startPoint.y + railBBox.height
      });
    }
  };
  return ContinueLegend2;
})(base_default4);
var continuous_default = ContinueLegend;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/tooltip/index.js
var tooltip_exports = {};
__export(tooltip_exports, {
  Html: () => html_default3
});

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/tooltip/html.js
import { __assign as __assign28, __extends as __extends27 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import colorUtil from '/cdn/v99/@antv/color-util@2.0.6/es2022/color-util.development.js';
import {
  createDom as createDom4,
  modifyCSS as modifyCSS4
} from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
import {
  each as each17,
  hasKey as hasKey4,
  isElement as isElement2,
  substitute as substitute2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/tooltip/css-const.js
var css_const_exports2 = {};
__export(css_const_exports2, {
  CONTAINER_CLASS: () => CONTAINER_CLASS2,
  CROSSHAIR_X: () => CROSSHAIR_X,
  CROSSHAIR_Y: () => CROSSHAIR_Y,
  LIST_CLASS: () => LIST_CLASS,
  LIST_ITEM_CLASS: () => LIST_ITEM_CLASS,
  MARKER_CLASS: () => MARKER_CLASS,
  NAME_CLASS: () => NAME_CLASS,
  TITLE_CLASS: () => TITLE_CLASS,
  VALUE_CLASS: () => VALUE_CLASS
});
var CONTAINER_CLASS2 = 'g2-tooltip';
var TITLE_CLASS = 'g2-tooltip-title';
var LIST_CLASS = 'g2-tooltip-list';
var LIST_ITEM_CLASS = 'g2-tooltip-list-item';
var MARKER_CLASS = 'g2-tooltip-marker';
var VALUE_CLASS = 'g2-tooltip-value';
var NAME_CLASS = 'g2-tooltip-name';
var CROSSHAIR_X = 'g2-tooltip-crosshair-x';
var CROSSHAIR_Y = 'g2-tooltip-crosshair-y';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/tooltip/html-theme.js
var _a2;
var html_theme_default2 =
  ((_a2 = {}),
  (_a2['' + CONTAINER_CLASS2] = {
    position: 'absolute',
    visibility: 'visible',
    zIndex: 8,
    transition:
      'visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1), left 0.4s cubic-bezier(0.23, 1, 0.32, 1), top 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0px 0px 10px #aeaeae',
    borderRadius: '3px',
    color: 'rgb(87, 87, 87)',
    fontSize: '12px',
    fontFamily: theme_default.fontFamily,
    lineHeight: '20px',
    padding: '10px 10px 6px 10px'
  }),
  (_a2['' + TITLE_CLASS] = {
    marginBottom: '4px'
  }),
  (_a2['' + LIST_CLASS] = {
    margin: '0px',
    listStyleType: 'none',
    padding: '0px'
  }),
  (_a2['' + LIST_ITEM_CLASS] = {
    listStyleType: 'none',
    marginBottom: '4px'
  }),
  (_a2['' + MARKER_CLASS] = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    display: 'inline-block',
    marginRight: '8px'
  }),
  (_a2['' + VALUE_CLASS] = {
    display: 'inline-block',
    float: 'right',
    marginLeft: '30px'
  }),
  (_a2['' + CROSSHAIR_X] = {
    position: 'absolute',
    width: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }),
  (_a2['' + CROSSHAIR_Y] = {
    position: 'absolute',
    height: '1px',
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  }),
  _a2);

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/util/align.js
function getOutSides(x, y, width, height, limitBox) {
  var hits = {
    left: x < limitBox.x,
    right: x + width > limitBox.x + limitBox.width,
    top: y < limitBox.y,
    bottom: y + height > limitBox.y + limitBox.height
  };
  return hits;
}
function getPointByPosition(x, y, offset, width, height, position) {
  var px = x;
  var py = y;
  switch (position) {
    case 'left':
      px = x - width - offset;
      py = y - height / 2;
      break;
    case 'right':
      px = x + offset;
      py = y - height / 2;
      break;
    case 'top':
      px = x - width / 2;
      py = y - height - offset;
      break;
    case 'bottom':
      px = x - width / 2;
      py = y + offset;
      break;
    default:
      px = x + offset;
      py = y - height - offset;
      break;
  }
  return {
    x: px,
    y: py
  };
}
function getAlignPoint(x, y, offset, width, height, position, limitBox) {
  var point = getPointByPosition(x, y, offset, width, height, position);
  if (limitBox) {
    var outSides = getOutSides(point.x, point.y, width, height, limitBox);
    if (position === 'auto') {
      if (outSides.right) {
        point.x = Math.max(0, x - width - offset);
      }
      if (outSides.top) {
        point.y = Math.max(0, y - height - offset);
      }
    } else if (position === 'top' || position === 'bottom') {
      if (outSides.left) {
        point.x = limitBox.x;
      }
      if (outSides.right) {
        point.x = limitBox.x + limitBox.width - width;
      }
      if (position === 'top' && outSides.top) {
        point.y = y + offset;
      }
      if (position === 'bottom' && outSides.bottom) {
        point.y = y - height - offset;
      }
    } else {
      if (outSides.top) {
        point.y = limitBox.y;
      }
      if (outSides.bottom) {
        point.y = limitBox.y + limitBox.height - height;
      }
      if (position === 'left' && outSides.left) {
        point.x = x + offset;
      }
      if (position === 'right' && outSides.right) {
        point.x = x - width - offset;
      }
    }
  }
  return point;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/tooltip/html.js
function hasOneKey(obj, keys2) {
  var result = false;
  each17(keys2, function(key) {
    if (hasKey4(obj, key)) {
      result = true;
      return false;
    }
  });
  return result;
}
var Tooltip = (function(_super) {
  __extends27(Tooltip2, _super);
  function Tooltip2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Tooltip2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign28(__assign28({}, cfg), {
      name: 'tooltip',
      type: 'html',
      x: 0,
      y: 0,
      items: [],
      customContent: null,
      containerTpl:
        '<div class="' +
        CONTAINER_CLASS2 +
        '"><div class="' +
        TITLE_CLASS +
        '"></div><ul class="' +
        LIST_CLASS +
        '"></ul></div>',
      itemTpl:
        '<li class="' +
        LIST_ITEM_CLASS +
        '" data-index={index}>\n          <span class="' +
        MARKER_CLASS +
        '" style="background:{color}"></span>\n          <span class="' +
        NAME_CLASS +
        '">{name}</span>:\n          <span class="' +
        VALUE_CLASS +
        '">{value}</span>\n        </li>',
      xCrosshairTpl: '<div class="' + CROSSHAIR_X + '"></div>',
      yCrosshairTpl: '<div class="' + CROSSHAIR_Y + '"></div>',
      title: null,
      showTitle: true,
      region: null,
      crosshairsRegion: null,
      containerClassName: CONTAINER_CLASS2,
      crosshairs: null,
      offset: 10,
      position: 'right',
      domStyles: null,
      defaultStyles: html_theme_default2
    });
  };
  Tooltip2.prototype.render = function() {
    if (this.get('customContent')) {
      this.renderCustomContent();
    } else {
      this.resetTitle();
      this.renderItems();
    }
    this.resetPosition();
  };
  Tooltip2.prototype.clear = function() {
    this.clearCrosshairs();
    this.setTitle('');
    this.clearItemDoms();
  };
  Tooltip2.prototype.show = function() {
    var container = this.getContainer();
    if (!container || this.destroyed) {
      return;
    }
    this.set('visible', true);
    modifyCSS4(container, {
      visibility: 'visible'
    });
    this.setCrossHairsVisible(true);
  };
  Tooltip2.prototype.hide = function() {
    var container = this.getContainer();
    if (!container || this.destroyed) {
      return;
    }
    this.set('visible', false);
    modifyCSS4(container, {
      visibility: 'hidden'
    });
    this.setCrossHairsVisible(false);
  };
  Tooltip2.prototype.getLocation = function() {
    return {
      x: this.get('x'),
      y: this.get('y')
    };
  };
  Tooltip2.prototype.setLocation = function(point) {
    this.set('x', point.x);
    this.set('y', point.y);
    this.resetPosition();
  };
  Tooltip2.prototype.setCrossHairsVisible = function(visible) {
    var display = visible ? '' : 'none';
    var xCrosshairDom = this.get('xCrosshairDom');
    var yCrosshairDom = this.get('yCrosshairDom');
    xCrosshairDom &&
      modifyCSS4(xCrosshairDom, {
        display
      });
    yCrosshairDom &&
      modifyCSS4(yCrosshairDom, {
        display
      });
  };
  Tooltip2.prototype.initContainer = function() {
    _super.prototype.initContainer.call(this);
    if (this.get('customContent')) {
      if (this.get('container')) {
        this.get('container').remove();
      }
      var container = this.getHtmlContentNode();
      this.get('parent').appendChild(container);
      this.set('container', container);
      this.resetStyles();
      this.applyStyles();
    }
  };
  Tooltip2.prototype.updateInner = function(cfg) {
    if (this.get('customContent')) {
      this.renderCustomContent();
    } else {
      if (hasOneKey(cfg, ['title', 'showTitle'])) {
        this.resetTitle();
      }
      if (hasKey4(cfg, 'items')) {
        this.renderItems();
      }
    }
    _super.prototype.updateInner.call(this, cfg);
  };
  Tooltip2.prototype.initDom = function() {
    this.cacheDoms();
  };
  Tooltip2.prototype.removeDom = function() {
    _super.prototype.removeDom.call(this);
    this.clearCrosshairs();
  };
  Tooltip2.prototype.resetPosition = function() {
    var x = this.get('x');
    var y = this.get('y');
    var offset = this.get('offset');
    var _a3 = this.getOffset(),
      offsetX = _a3.offsetX,
      offsetY = _a3.offsetY;
    var position = this.get('position');
    var region = this.get('region');
    var container = this.getContainer();
    var bbox = this.getBBox();
    var width = bbox.width,
      height = bbox.height;
    var limitBox;
    if (region) {
      limitBox = regionToBBox(region);
    }
    var point = getAlignPoint(x, y, offset, width, height, position, limitBox);
    modifyCSS4(container, {
      left: toPx(point.x + offsetX),
      top: toPx(point.y + offsetY)
    });
    this.resetCrosshairs();
  };
  Tooltip2.prototype.renderCustomContent = function() {
    var node = this.getHtmlContentNode();
    var parent = this.get('parent');
    var curContainer = this.get('container');
    if (curContainer && curContainer.parentNode === parent) {
      parent.replaceChild(node, curContainer);
    } else {
      parent.appendChild(node);
    }
    this.set('container', node);
    this.resetStyles();
    this.applyStyles();
  };
  Tooltip2.prototype.getHtmlContentNode = function() {
    var node;
    var customContent = this.get('customContent');
    if (customContent) {
      var elem = customContent(this.get('title'), this.get('items'));
      if (isElement2(elem)) {
        node = elem;
      } else {
        node = createDom4(elem);
      }
    }
    return node;
  };
  Tooltip2.prototype.cacheDoms = function() {
    var container = this.getContainer();
    var titleDom = container.getElementsByClassName(TITLE_CLASS)[0];
    var listDom = container.getElementsByClassName(LIST_CLASS)[0];
    this.set('titleDom', titleDom);
    this.set('listDom', listDom);
  };
  Tooltip2.prototype.resetTitle = function() {
    var title = this.get('title');
    var showTitle = this.get('showTitle');
    if (showTitle && title) {
      this.setTitle(title);
    } else {
      this.setTitle('');
    }
  };
  Tooltip2.prototype.setTitle = function(text) {
    var titleDom = this.get('titleDom');
    if (titleDom) {
      titleDom.innerText = text;
    }
  };
  Tooltip2.prototype.resetCrosshairs = function() {
    var crosshairsRegion = this.get('crosshairsRegion');
    var crosshairs = this.get('crosshairs');
    if (!crosshairsRegion || !crosshairs) {
      this.clearCrosshairs();
    } else {
      var crosshairBox = regionToBBox(crosshairsRegion);
      var xCrosshairDom = this.get('xCrosshairDom');
      var yCrosshairDom = this.get('yCrosshairDom');
      if (crosshairs === 'x') {
        this.resetCrosshair('x', crosshairBox);
        if (yCrosshairDom) {
          yCrosshairDom.remove();
          this.set('yCrosshairDom', null);
        }
      } else if (crosshairs === 'y') {
        this.resetCrosshair('y', crosshairBox);
        if (xCrosshairDom) {
          xCrosshairDom.remove();
          this.set('xCrosshairDom', null);
        }
      } else {
        this.resetCrosshair('x', crosshairBox);
        this.resetCrosshair('y', crosshairBox);
      }
      this.setCrossHairsVisible(this.get('visible'));
    }
  };
  Tooltip2.prototype.resetCrosshair = function(name, bbox) {
    var croshairDom = this.checkCrosshair(name);
    var value = this.get(name);
    if (name === 'x') {
      modifyCSS4(croshairDom, {
        left: toPx(value),
        top: toPx(bbox.y),
        height: toPx(bbox.height)
      });
    } else {
      modifyCSS4(croshairDom, {
        top: toPx(value),
        left: toPx(bbox.x),
        width: toPx(bbox.width)
      });
    }
  };
  Tooltip2.prototype.checkCrosshair = function(name) {
    var domName = name + 'CrosshairDom';
    var tplName = name + 'CrosshairTpl';
    var constName = 'CROSSHAIR_' + name.toUpperCase();
    var styleName = css_const_exports2[constName];
    var croshairDom = this.get(domName);
    var parent = this.get('parent');
    if (!croshairDom) {
      croshairDom = createDom4(this.get(tplName));
      this.applyStyle(styleName, croshairDom);
      parent.appendChild(croshairDom);
      this.set(domName, croshairDom);
    }
    return croshairDom;
  };
  Tooltip2.prototype.renderItems = function() {
    this.clearItemDoms();
    var items = this.get('items');
    var itemTpl = this.get('itemTpl');
    var listDom = this.get('listDom');
    if (listDom) {
      each17(items, function(item) {
        var color = colorUtil.toCSSGradient(item.color);
        var substituteObj = __assign28(__assign28({}, item), {
          color
        });
        var domStr = substitute2(itemTpl, substituteObj);
        var itemDom = createDom4(domStr);
        listDom.appendChild(itemDom);
      });
      this.applyChildrenStyles(listDom, this.get('domStyles'));
    }
  };
  Tooltip2.prototype.clearItemDoms = function() {
    if (this.get('listDom')) {
      clearDom(this.get('listDom'));
    }
  };
  Tooltip2.prototype.clearCrosshairs = function() {
    var xCrosshairDom = this.get('xCrosshairDom');
    var yCrosshairDom = this.get('yCrosshairDom');
    xCrosshairDom && xCrosshairDom.remove();
    yCrosshairDom && yCrosshairDom.remove();
    this.set('xCrosshairDom', null);
    this.set('yCrosshairDom', null);
  };
  return Tooltip2;
})(html_component_default);
var html_default3 = Tooltip;

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/slider/slider.js
import { __assign as __assign31, __extends as __extends30 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  clamp as clamp2,
  deepMix as deepMix4,
  each as each19,
  get as get6,
  isArray as isArray2,
  isNil as isNil9,
  size as size2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/trend/trend.js
import { __assign as __assign29, __extends as __extends28 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/trend/constant.js
var BACKGROUND_STYLE = {
  opacity: 0
};
var LINE_STYLE = {
  stroke: '#C5C5C5',
  strokeOpacity: 0.85
};
var AREA_STYLE = {
  fill: '#CACED4',
  opacity: 0.85
};

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/trend/path.js
import { __spreadArrays as __spreadArrays2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { catmullRom2Bezier } from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';
import { Category as Category2, Linear } from '/cdn/v99/@antv/scale@0.3.18/es2022/scale.development.js';
import { each as each18, head, isEqual, map } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function pointsToPath(points) {
  return map(points, function(p, idx) {
    var command = idx === 0 ? 'M' : 'L';
    var x = p[0],
      y = p[1];
    return [command, x, y];
  });
}
function getLinePath(points) {
  return pointsToPath(points);
}
function getSmoothLinePath(points) {
  if (points.length <= 2) {
    return getLinePath(points);
  }
  var data = [];
  each18(points, function(p) {
    if (!isEqual(p, data.slice(data.length - 2))) {
      data.push(p[0], p[1]);
    }
  });
  var path = catmullRom2Bezier(data, false);
  var _a3 = head(points),
    x = _a3[0],
    y = _a3[1];
  path.unshift(['M', x, y]);
  return path;
}
function dataToPath(data, width, height, smooth) {
  if (smooth === void 0) {
    smooth = true;
  }
  var y = new Linear({
    values: data
  });
  var x = new Category2({
    values: map(data, function(v, idx) {
      return idx;
    })
  });
  var points = map(data, function(v, idx) {
    return [x.scale(idx) * width, height - y.scale(v) * height];
  });
  return smooth ? getSmoothLinePath(points) : getLinePath(points);
}
function getAreaLineY(data, height) {
  var y = new Linear({
    values: data
  });
  var lineY = y.max < 0 ? y.max : Math.max(0, y.min);
  return height - y.scale(lineY) * height;
}
function linePathToAreaPath(path, width, height, data) {
  var areaPath = __spreadArrays2(path);
  var lineYPx = getAreaLineY(data, height);
  areaPath.push(['L', width, lineYPx]);
  areaPath.push(['L', 0, lineYPx]);
  areaPath.push(['Z']);
  return areaPath;
}

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/trend/trend.js
var Trend = (function(_super) {
  __extends28(Trend2, _super);
  function Trend2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Trend2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign29(__assign29({}, cfg), {
      name: 'trend',
      x: 0,
      y: 0,
      width: 200,
      height: 16,
      smooth: true,
      isArea: false,
      data: [],
      backgroundStyle: BACKGROUND_STYLE,
      lineStyle: LINE_STYLE,
      areaStyle: AREA_STYLE
    });
  };
  Trend2.prototype.renderInner = function(group) {
    var _a3 = this.cfg,
      width = _a3.width,
      height = _a3.height,
      data = _a3.data,
      smooth = _a3.smooth,
      isArea = _a3.isArea,
      backgroundStyle = _a3.backgroundStyle,
      lineStyle = _a3.lineStyle,
      areaStyle = _a3.areaStyle;
    this.addShape(group, {
      id: this.getElementId('background'),
      type: 'rect',
      attrs: __assign29(
        {
          x: 0,
          y: 0,
          width,
          height
        },
        backgroundStyle
      )
    });
    var path = dataToPath(data, width, height, smooth);
    this.addShape(group, {
      id: this.getElementId('line'),
      type: 'path',
      attrs: __assign29(
        {
          path
        },
        lineStyle
      )
    });
    if (isArea) {
      var areaPath = linePathToAreaPath(path, width, height, data);
      this.addShape(group, {
        id: this.getElementId('area'),
        type: 'path',
        attrs: __assign29(
          {
            path: areaPath
          },
          areaStyle
        )
      });
    }
  };
  Trend2.prototype.applyOffset = function() {
    var _a3 = this.cfg,
      x = _a3.x,
      y = _a3.y;
    this.moveElementTo(this.get('group'), {
      x,
      y
    });
  };
  return Trend2;
})(group_component_default);

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/slider/handler.js
import { __assign as __assign30, __extends as __extends29 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var DEFAULT_HANDLER_STYLE = {
  fill: '#F7F7F7',
  stroke: '#BFBFBF',
  radius: 2,
  opacity: 1,
  cursor: 'ew-resize',
  highLightFill: '#FFF'
};
var Handler = (function(_super) {
  __extends29(Handler2, _super);
  function Handler2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Handler2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign30(__assign30({}, cfg), {
      name: 'handler',
      x: 0,
      y: 0,
      width: 10,
      height: 24,
      style: DEFAULT_HANDLER_STYLE
    });
  };
  Handler2.prototype.renderInner = function(group) {
    var _a3 = this.cfg,
      width = _a3.width,
      height = _a3.height,
      style = _a3.style;
    var fill = style.fill,
      stroke = style.stroke,
      radius = style.radius,
      opacity = style.opacity,
      cursor = style.cursor;
    this.addShape(group, {
      type: 'rect',
      id: this.getElementId('background'),
      attrs: {
        x: 0,
        y: 0,
        width,
        height,
        fill,
        stroke,
        radius,
        opacity,
        cursor
      }
    });
    var x1 = (1 / 3) * width;
    var x2 = (2 / 3) * width;
    var y1 = (1 / 4) * height;
    var y2 = (3 / 4) * height;
    this.addShape(group, {
      id: this.getElementId('line-left'),
      type: 'line',
      attrs: {
        x1,
        y1,
        x2: x1,
        y2,
        stroke,
        cursor
      }
    });
    this.addShape(group, {
      id: this.getElementId('line-right'),
      type: 'line',
      attrs: {
        x1: x2,
        y1,
        x2,
        y2,
        stroke,
        cursor
      }
    });
  };
  Handler2.prototype.applyOffset = function() {
    this.moveElementTo(this.get('group'), {
      x: this.get('x'),
      y: this.get('y')
    });
  };
  Handler2.prototype.initEvent = function() {
    this.bindEvents();
  };
  Handler2.prototype.bindEvents = function() {
    var _this = this;
    this.get('group').on('mouseenter', function() {
      var highLightFill = _this.get('style').highLightFill;
      _this.getElementByLocalId('background').attr('fill', highLightFill);
      _this.draw();
    });
    this.get('group').on('mouseleave', function() {
      var fill = _this.get('style').fill;
      _this.getElementByLocalId('background').attr('fill', fill);
      _this.draw();
    });
  };
  Handler2.prototype.draw = function() {
    var canvas = this.get('container').get('canvas');
    if (canvas) {
      canvas.draw();
    }
  };
  return Handler2;
})(group_component_default);

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/slider/constant.js
var BACKGROUND_STYLE2 = {
  fill: '#416180',
  opacity: 0.05
};
var FOREGROUND_STYLE = {
  fill: '#5B8FF9',
  opacity: 0.15,
  cursor: 'move'
};
var DEFAULT_HANDLER_WIDTH = 10;
var HANDLER_STYLE = {
  width: DEFAULT_HANDLER_WIDTH,
  height: 24
};
var TEXT_STYLE = {
  textBaseline: 'middle',
  fill: '#000',
  opacity: 0.45
};
var SLIDER_CHANGE = 'sliderchange';

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/slider/slider.js
var Slider = (function(_super) {
  __extends30(Slider2, _super);
  function Slider2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.onMouseDown = function(target) {
      return function(e) {
        _this.currentTarget = target;
        var event = e.originalEvent;
        event.stopPropagation();
        event.preventDefault();
        _this.prevX = get6(event, 'touches.0.pageX', event.pageX);
        _this.prevY = get6(event, 'touches.0.pageY', event.pageY);
        var containerDOM = _this.getContainerDOM();
        containerDOM.addEventListener('mousemove', _this.onMouseMove);
        containerDOM.addEventListener('mouseup', _this.onMouseUp);
        containerDOM.addEventListener('mouseleave', _this.onMouseUp);
        containerDOM.addEventListener('touchmove', _this.onMouseMove);
        containerDOM.addEventListener('touchend', _this.onMouseUp);
        containerDOM.addEventListener('touchcancel', _this.onMouseUp);
      };
    };
    _this.onMouseMove = function(event) {
      var width = _this.cfg.width;
      var originValue = [_this.get('start'), _this.get('end')];
      event.stopPropagation();
      event.preventDefault();
      var x = get6(event, 'touches.0.pageX', event.pageX);
      var y = get6(event, 'touches.0.pageY', event.pageY);
      var offsetX = x - _this.prevX;
      var offsetXRange = _this.adjustOffsetRange(offsetX / width);
      _this.updateStartEnd(offsetXRange);
      _this.updateUI(
        _this.getElementByLocalId('foreground'),
        _this.getElementByLocalId('minText'),
        _this.getElementByLocalId('maxText')
      );
      _this.prevX = x;
      _this.prevY = y;
      _this.draw();
      _this.emit(SLIDER_CHANGE, [_this.get('start'), _this.get('end')].sort());
      _this.delegateEmit('valuechanged', {
        originValue,
        value: [_this.get('start'), _this.get('end')]
      });
    };
    _this.onMouseUp = function() {
      if (_this.currentTarget) {
        _this.currentTarget = void 0;
      }
      var containerDOM = _this.getContainerDOM();
      if (containerDOM) {
        containerDOM.removeEventListener('mousemove', _this.onMouseMove);
        containerDOM.removeEventListener('mouseup', _this.onMouseUp);
        containerDOM.removeEventListener('mouseleave', _this.onMouseUp);
        containerDOM.removeEventListener('touchmove', _this.onMouseMove);
        containerDOM.removeEventListener('touchend', _this.onMouseUp);
        containerDOM.removeEventListener('touchcancel', _this.onMouseUp);
      }
    };
    return _this;
  }
  Slider2.prototype.setRange = function(min, max) {
    this.set('minLimit', min);
    this.set('maxLimit', max);
    var oldStart = this.get('start');
    var oldEnd = this.get('end');
    var newStart = clamp2(oldStart, min, max);
    var newEnd = clamp2(oldEnd, min, max);
    if (!this.get('isInit') && (oldStart !== newStart || oldEnd !== newEnd)) {
      this.setValue([newStart, newEnd]);
    }
  };
  Slider2.prototype.getRange = function() {
    return {
      min: this.get('minLimit') || 0,
      max: this.get('maxLimit') || 1
    };
  };
  Slider2.prototype.setValue = function(value) {
    var range = this.getRange();
    if (isArray2(value) && value.length === 2) {
      var originValue = [this.get('start'), this.get('end')];
      this.update({
        start: clamp2(value[0], range.min, range.max),
        end: clamp2(value[1], range.min, range.max)
      });
      if (!this.get('updateAutoRender')) {
        this.render();
      }
      this.delegateEmit('valuechanged', {
        originValue,
        value
      });
    }
  };
  Slider2.prototype.getValue = function() {
    return [this.get('start'), this.get('end')];
  };
  Slider2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign31(__assign31({}, cfg), {
      name: 'slider',
      x: 0,
      y: 0,
      width: 100,
      height: 16,
      backgroundStyle: {},
      foregroundStyle: {},
      handlerStyle: {},
      textStyle: {},
      defaultCfg: {
        backgroundStyle: BACKGROUND_STYLE2,
        foregroundStyle: FOREGROUND_STYLE,
        handlerStyle: HANDLER_STYLE,
        textStyle: TEXT_STYLE
      }
    });
  };
  Slider2.prototype.update = function(cfg) {
    var start = cfg.start,
      end = cfg.end;
    var validCfg = __assign31({}, cfg);
    if (!isNil9(start)) {
      validCfg.start = clamp2(start, 0, 1);
    }
    if (!isNil9(end)) {
      validCfg.end = clamp2(end, 0, 1);
    }
    _super.prototype.update.call(this, validCfg);
    this.minHandler = this.getChildComponentById(this.getElementId('minHandler'));
    this.maxHandler = this.getChildComponentById(this.getElementId('maxHandler'));
    this.trend = this.getChildComponentById(this.getElementId('trend'));
  };
  Slider2.prototype.init = function() {
    this.set('start', clamp2(this.get('start'), 0, 1));
    this.set('end', clamp2(this.get('end'), 0, 1));
    _super.prototype.init.call(this);
  };
  Slider2.prototype.render = function() {
    _super.prototype.render.call(this);
    this.updateUI(
      this.getElementByLocalId('foreground'),
      this.getElementByLocalId('minText'),
      this.getElementByLocalId('maxText')
    );
  };
  Slider2.prototype.renderInner = function(group) {
    var _a3 = this.cfg,
      start = _a3.start,
      end = _a3.end,
      width = _a3.width,
      height = _a3.height,
      _b = _a3.trendCfg,
      trendCfg = _b === void 0 ? {} : _b,
      minText = _a3.minText,
      maxText = _a3.maxText,
      _c = _a3.backgroundStyle,
      backgroundStyle = _c === void 0 ? {} : _c,
      _d = _a3.foregroundStyle,
      foregroundStyle = _d === void 0 ? {} : _d,
      _e = _a3.textStyle,
      textStyle2 = _e === void 0 ? {} : _e;
    var handlerStyle = deepMix4({}, DEFAULT_HANDLER_STYLE, this.cfg.handlerStyle);
    var min = start * width;
    var max = end * width;
    if (size2(get6(trendCfg, 'data'))) {
      this.trend = this.addComponent(
        group,
        __assign31(
          {
            component: Trend,
            id: this.getElementId('trend'),
            x: 0,
            y: 0,
            width,
            height
          },
          trendCfg
        )
      );
    }
    this.addShape(group, {
      id: this.getElementId('background'),
      type: 'rect',
      attrs: __assign31(
        {
          x: 0,
          y: 0,
          width,
          height
        },
        backgroundStyle
      )
    });
    var minTextShape = this.addShape(group, {
      id: this.getElementId('minText'),
      type: 'text',
      attrs: __assign31(
        {
          y: height / 2,
          textAlign: 'right',
          text: minText,
          silent: false
        },
        textStyle2
      )
    });
    var maxTextShape = this.addShape(group, {
      id: this.getElementId('maxText'),
      type: 'text',
      attrs: __assign31(
        {
          y: height / 2,
          textAlign: 'left',
          text: maxText,
          silent: false
        },
        textStyle2
      )
    });
    var foregroundShape = this.addShape(group, {
      id: this.getElementId('foreground'),
      name: 'foreground',
      type: 'rect',
      attrs: __assign31(
        {
          y: 0,
          height
        },
        foregroundStyle
      )
    });
    var handlerWidth = get6(handlerStyle, 'width', DEFAULT_HANDLER_WIDTH);
    var handlerHeight = get6(handlerStyle, 'height', 24);
    this.minHandler = this.addComponent(group, {
      component: Handler,
      id: this.getElementId('minHandler'),
      name: 'handler-min',
      x: 0,
      y: (height - handlerHeight) / 2,
      width: handlerWidth,
      height: handlerHeight,
      cursor: 'ew-resize',
      style: handlerStyle
    });
    this.maxHandler = this.addComponent(group, {
      component: Handler,
      id: this.getElementId('maxHandler'),
      name: 'handler-max',
      x: 0,
      y: (height - handlerHeight) / 2,
      width: handlerWidth,
      height: handlerHeight,
      cursor: 'ew-resize',
      style: handlerStyle
    });
  };
  Slider2.prototype.applyOffset = function() {
    this.moveElementTo(this.get('group'), {
      x: this.get('x'),
      y: this.get('y')
    });
  };
  Slider2.prototype.initEvent = function() {
    this.bindEvents();
  };
  Slider2.prototype.updateUI = function(foregroundShape, minTextShape, maxTextShape) {
    var _a3 = this.cfg,
      start = _a3.start,
      end = _a3.end,
      width = _a3.width,
      minText = _a3.minText,
      maxText = _a3.maxText,
      handlerStyle = _a3.handlerStyle,
      height = _a3.height;
    var min = start * width;
    var max = end * width;
    if (this.trend) {
      this.trend.update({
        width,
        height
      });
      if (!this.get('updateAutoRender')) {
        this.trend.render();
      }
    }
    foregroundShape.attr('x', min);
    foregroundShape.attr('width', max - min);
    var handlerWidth = get6(handlerStyle, 'width', DEFAULT_HANDLER_WIDTH);
    minTextShape.attr('text', minText);
    maxTextShape.attr('text', maxText);
    var _b = this._dodgeText([min, max], minTextShape, maxTextShape),
      minAttrs = _b[0],
      maxAttrs = _b[1];
    if (this.minHandler) {
      this.minHandler.update({
        x: min - handlerWidth / 2
      });
      if (!this.get('updateAutoRender')) {
        this.minHandler.render();
      }
    }
    each19(minAttrs, function(v, k) {
      return minTextShape.attr(k, v);
    });
    if (this.maxHandler) {
      this.maxHandler.update({
        x: max - handlerWidth / 2
      });
      if (!this.get('updateAutoRender')) {
        this.maxHandler.render();
      }
    }
    each19(maxAttrs, function(v, k) {
      return maxTextShape.attr(k, v);
    });
  };
  Slider2.prototype.bindEvents = function() {
    var group = this.get('group');
    group.on('handler-min:mousedown', this.onMouseDown('minHandler'));
    group.on('handler-min:touchstart', this.onMouseDown('minHandler'));
    group.on('handler-max:mousedown', this.onMouseDown('maxHandler'));
    group.on('handler-max:touchstart', this.onMouseDown('maxHandler'));
    var foreground = group.findById(this.getElementId('foreground'));
    foreground.on('mousedown', this.onMouseDown('foreground'));
    foreground.on('touchstart', this.onMouseDown('foreground'));
  };
  Slider2.prototype.adjustOffsetRange = function(offsetRange) {
    var _a3 = this.cfg,
      start = _a3.start,
      end = _a3.end;
    switch (this.currentTarget) {
      case 'minHandler': {
        var min = 0 - start;
        var max = 1 - start;
        return Math.min(max, Math.max(min, offsetRange));
      }
      case 'maxHandler': {
        var min = 0 - end;
        var max = 1 - end;
        return Math.min(max, Math.max(min, offsetRange));
      }
      case 'foreground': {
        var min = 0 - start;
        var max = 1 - end;
        return Math.min(max, Math.max(min, offsetRange));
      }
    }
  };
  Slider2.prototype.updateStartEnd = function(offsetRange) {
    var _a3 = this.cfg,
      start = _a3.start,
      end = _a3.end;
    switch (this.currentTarget) {
      case 'minHandler':
        start += offsetRange;
        break;
      case 'maxHandler':
        end += offsetRange;
        break;
      case 'foreground':
        start += offsetRange;
        end += offsetRange;
        break;
    }
    this.set('start', start);
    this.set('end', end);
  };
  Slider2.prototype._dodgeText = function(range, minTextShape, maxTextShape) {
    var _a3, _b;
    var _c = this.cfg,
      handlerStyle = _c.handlerStyle,
      width = _c.width;
    var PADDING = 2;
    var handlerWidth = get6(handlerStyle, 'width', DEFAULT_HANDLER_WIDTH);
    var min = range[0],
      max = range[1];
    var sorted = false;
    if (min > max) {
      (_a3 = [max, min]), (min = _a3[0]), (max = _a3[1]);
      (_b = [maxTextShape, minTextShape]), (minTextShape = _b[0]), (maxTextShape = _b[1]);
      sorted = true;
    }
    var minBBox = minTextShape.getBBox();
    var maxBBox = maxTextShape.getBBox();
    var minAttrs =
      minBBox.width > min - PADDING
        ? {
            x: min + handlerWidth / 2 + PADDING,
            textAlign: 'left'
          }
        : {
            x: min - handlerWidth / 2 - PADDING,
            textAlign: 'right'
          };
    var maxAttrs =
      maxBBox.width > width - max - PADDING
        ? {
            x: max - handlerWidth / 2 - PADDING,
            textAlign: 'right'
          }
        : {
            x: max + handlerWidth / 2 + PADDING,
            textAlign: 'left'
          };
    return !sorted ? [minAttrs, maxAttrs] : [maxAttrs, minAttrs];
  };
  Slider2.prototype.draw = function() {
    var container = this.get('container');
    var canvas = container && container.get('canvas');
    if (canvas) {
      canvas.draw();
    }
  };
  Slider2.prototype.getContainerDOM = function() {
    var container = this.get('container');
    var canvas = container && container.get('canvas');
    return canvas && canvas.get('container');
  };
  return Slider2;
})(group_component_default);

// esm-build-99b0d9ccc76ff19cdeecf3da66e316b9ca36f7eb-bc0f20c9/node_modules/@antv/component/esm/scrollbar/scrollbar.js
import { __assign as __assign32, __extends as __extends31 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { addEventListener } from '/cdn/v99/@antv/dom-util@2.0.4/es2022/dom-util.development.js';
import {
  clamp as clamp3,
  deepMix as deepMix5,
  get as get7,
  noop as noop2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var DEFAULT_STYLE = {
  trackColor: 'rgba(0,0,0,0)',
  thumbColor: 'rgba(0,0,0,0.15)',
  size: 8,
  lineCap: 'round'
};
var DEFAULT_THEME = {
  default: DEFAULT_STYLE,
  hover: {
    thumbColor: 'rgba(0,0,0,0.2)'
  }
};
var Scrollbar = (function(_super) {
  __extends31(Scrollbar2, _super);
  function Scrollbar2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.clearEvents = noop2;
    _this.onStartEvent = function(isMobile) {
      return function(e) {
        _this.isMobile = isMobile;
        e.originalEvent.preventDefault();
        var clientX = isMobile ? get7(e.originalEvent, 'touches.0.clientX') : e.clientX;
        var clientY = isMobile ? get7(e.originalEvent, 'touches.0.clientY') : e.clientY;
        _this.startPos = _this.cfg.isHorizontal ? clientX : clientY;
        _this.bindLaterEvent();
      };
    };
    _this.bindLaterEvent = function() {
      var containerDOM = _this.getContainerDOM();
      var events = [];
      if (_this.isMobile) {
        events = [
          addEventListener(containerDOM, 'touchmove', _this.onMouseMove),
          addEventListener(containerDOM, 'touchend', _this.onMouseUp),
          addEventListener(containerDOM, 'touchcancel', _this.onMouseUp)
        ];
      } else {
        events = [
          addEventListener(containerDOM, 'mousemove', _this.onMouseMove),
          addEventListener(containerDOM, 'mouseup', _this.onMouseUp),
          addEventListener(containerDOM, 'mouseleave', _this.onMouseUp)
        ];
      }
      _this.clearEvents = function() {
        events.forEach(function(e) {
          e.remove();
        });
      };
    };
    _this.onMouseMove = function(e) {
      var _a3 = _this.cfg,
        isHorizontal = _a3.isHorizontal,
        thumbOffset = _a3.thumbOffset;
      e.preventDefault();
      var clientX = _this.isMobile ? get7(e, 'touches.0.clientX') : e.clientX;
      var clientY = _this.isMobile ? get7(e, 'touches.0.clientY') : e.clientY;
      var endPos = isHorizontal ? clientX : clientY;
      var diff = endPos - _this.startPos;
      _this.startPos = endPos;
      _this.updateThumbOffset(thumbOffset + diff);
    };
    _this.onMouseUp = function(e) {
      e.preventDefault();
      _this.clearEvents();
    };
    _this.onTrackClick = function(e) {
      var _a3 = _this.cfg,
        isHorizontal = _a3.isHorizontal,
        x = _a3.x,
        y = _a3.y,
        thumbLen = _a3.thumbLen;
      var containerDOM = _this.getContainerDOM();
      var rect = containerDOM.getBoundingClientRect();
      var clientX = e.clientX,
        clientY = e.clientY;
      var offset = isHorizontal ? clientX - rect.left - x - thumbLen / 2 : clientY - rect.top - y - thumbLen / 2;
      var newOffset = _this.validateRange(offset);
      _this.updateThumbOffset(newOffset);
    };
    _this.onThumbMouseOver = function() {
      var thumbColor = _this.cfg.theme.hover.thumbColor;
      _this.getElementByLocalId('thumb').attr('stroke', thumbColor);
      _this.draw();
    };
    _this.onThumbMouseOut = function() {
      var thumbColor = _this.cfg.theme.default.thumbColor;
      _this.getElementByLocalId('thumb').attr('stroke', thumbColor);
      _this.draw();
    };
    return _this;
  }
  Scrollbar2.prototype.setRange = function(min, max) {
    this.set('minLimit', min);
    this.set('maxLimit', max);
    var curValue = this.getValue();
    var newValue = clamp3(curValue, min, max);
    if (curValue !== newValue && !this.get('isInit')) {
      this.setValue(newValue);
    }
  };
  Scrollbar2.prototype.getRange = function() {
    var min = this.get('minLimit') || 0;
    var max = this.get('maxLimit') || 1;
    return {
      min,
      max
    };
  };
  Scrollbar2.prototype.setValue = function(value) {
    var range = this.getRange();
    var originalValue = this.getValue();
    this.update({
      thumbOffset: (this.get('trackLen') - this.get('thumbLen')) * clamp3(value, range.min, range.max)
    });
    this.delegateEmit('valuechange', {
      originalValue,
      value: this.getValue()
    });
  };
  Scrollbar2.prototype.getValue = function() {
    return clamp3(this.get('thumbOffset') / (this.get('trackLen') - this.get('thumbLen')), 0, 1);
  };
  Scrollbar2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    return __assign32(__assign32({}, cfg), {
      name: 'scrollbar',
      isHorizontal: true,
      minThumbLen: 20,
      thumbOffset: 0,
      theme: DEFAULT_THEME
    });
  };
  Scrollbar2.prototype.renderInner = function(group) {
    this.renderTrackShape(group);
    this.renderThumbShape(group);
  };
  Scrollbar2.prototype.applyOffset = function() {
    this.moveElementTo(this.get('group'), {
      x: this.get('x'),
      y: this.get('y')
    });
  };
  Scrollbar2.prototype.initEvent = function() {
    this.bindEvents();
  };
  Scrollbar2.prototype.renderTrackShape = function(group) {
    var _a3 = this.cfg,
      trackLen = _a3.trackLen,
      _b = _a3.theme,
      theme =
        _b === void 0
          ? {
              default: {}
            }
          : _b;
    var _c = deepMix5({}, DEFAULT_THEME, theme).default,
      lineCap = _c.lineCap,
      trackColor = _c.trackColor,
      themeSize = _c.size;
    var size3 = get7(this.cfg, 'size', themeSize);
    var attrs = this.get('isHorizontal')
      ? {
          x1: 0 + size3 / 2,
          y1: size3 / 2,
          x2: trackLen - size3 / 2,
          y2: size3 / 2,
          lineWidth: size3,
          stroke: trackColor,
          lineCap
        }
      : {
          x1: size3 / 2,
          y1: 0 + size3 / 2,
          x2: size3 / 2,
          y2: trackLen - size3 / 2,
          lineWidth: size3,
          stroke: trackColor,
          lineCap
        };
    return this.addShape(group, {
      id: this.getElementId('track'),
      name: 'track',
      type: 'line',
      attrs
    });
  };
  Scrollbar2.prototype.renderThumbShape = function(group) {
    var _a3 = this.cfg,
      thumbOffset = _a3.thumbOffset,
      thumbLen = _a3.thumbLen,
      theme = _a3.theme;
    var _b = deepMix5({}, DEFAULT_THEME, theme).default,
      themeSize = _b.size,
      lineCap = _b.lineCap,
      thumbColor = _b.thumbColor;
    var size3 = get7(this.cfg, 'size', themeSize);
    var attrs = this.get('isHorizontal')
      ? {
          x1: thumbOffset + size3 / 2,
          y1: size3 / 2,
          x2: thumbOffset + thumbLen - size3 / 2,
          y2: size3 / 2,
          lineWidth: size3,
          stroke: thumbColor,
          lineCap,
          cursor: 'default'
        }
      : {
          x1: size3 / 2,
          y1: thumbOffset + size3 / 2,
          x2: size3 / 2,
          y2: thumbOffset + thumbLen - size3 / 2,
          lineWidth: size3,
          stroke: thumbColor,
          lineCap,
          cursor: 'default'
        };
    return this.addShape(group, {
      id: this.getElementId('thumb'),
      name: 'thumb',
      type: 'line',
      attrs
    });
  };
  Scrollbar2.prototype.bindEvents = function() {
    var group = this.get('group');
    group.on('mousedown', this.onStartEvent(false));
    group.on('mouseup', this.onMouseUp);
    group.on('touchstart', this.onStartEvent(true));
    group.on('touchend', this.onMouseUp);
    var trackShape = group.findById(this.getElementId('track'));
    trackShape.on('click', this.onTrackClick);
    var thumbShape = group.findById(this.getElementId('thumb'));
    thumbShape.on('mouseover', this.onThumbMouseOver);
    thumbShape.on('mouseout', this.onThumbMouseOut);
  };
  Scrollbar2.prototype.getContainerDOM = function() {
    var container = this.get('container');
    var canvas = container && container.get('canvas');
    return canvas && canvas.get('container');
  };
  Scrollbar2.prototype.validateRange = function(offset) {
    var _a3 = this.cfg,
      thumbLen = _a3.thumbLen,
      trackLen = _a3.trackLen;
    var newOffset = offset;
    if (offset + thumbLen > trackLen) {
      newOffset = trackLen - thumbLen;
    } else if (offset + thumbLen < thumbLen) {
      newOffset = 0;
    }
    return newOffset;
  };
  Scrollbar2.prototype.draw = function() {
    var container = this.get('container');
    var canvas = container && container.get('canvas');
    if (canvas) {
      canvas.draw();
    }
  };
  Scrollbar2.prototype.updateThumbOffset = function(offset) {
    var _a3 = this.cfg,
      thumbOffset = _a3.thumbOffset,
      isHorizontal = _a3.isHorizontal,
      thumbLen = _a3.thumbLen,
      size3 = _a3.size;
    var newOffset = this.validateRange(offset);
    if (newOffset === thumbOffset) {
      return;
    }
    var thumbShape = this.getElementByLocalId('thumb');
    if (isHorizontal) {
      thumbShape.attr({
        x1: newOffset + size3 / 2,
        x2: newOffset + thumbLen - size3 / 2
      });
    } else {
      thumbShape.attr({
        y1: newOffset + size3 / 2,
        y2: newOffset + thumbLen - size3 / 2
      });
    }
    this.emitOffsetChange(newOffset);
  };
  Scrollbar2.prototype.emitOffsetChange = function(offset) {
    var _a3 = this.cfg,
      originalValue = _a3.thumbOffset,
      trackLen = _a3.trackLen,
      thumbLen = _a3.thumbLen;
    this.cfg.thumbOffset = offset;
    this.emit('scrollchange', {
      thumbOffset: offset,
      ratio: clamp3(offset / (trackLen - thumbLen), 0, 1)
    });
    this.delegateEmit('valuechange', {
      originalValue,
      value: offset
    });
  };
  return Scrollbar2;
})(group_component_default);
export {
  annotation_exports as Annotation,
  axis_exports as Axis,
  component_default as Component,
  crosshair_exports as Crosshair,
  grid_exports as Grid,
  group_component_default as GroupComponent,
  html_component_default as HtmlComponent,
  legend_exports as Legend,
  Scrollbar,
  Slider,
  css_const_exports2 as TOOLTIP_CSS_CONST,
  tooltip_exports as Tooltip,
  propagationDelegate
};
