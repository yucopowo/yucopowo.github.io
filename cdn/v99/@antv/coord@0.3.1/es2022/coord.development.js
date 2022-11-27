/* esm.sh - esbuild bundle(@antv/coord@0.3.1) es2022 development */
// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/coord/base.js
import { __spreadArray } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext, mat3, vec3 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { assign } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Coordinate = (function() {
  function Coordinate2(cfg) {
    this.type = 'coordinate';
    this.isRect = false;
    this.isHelix = false;
    this.isPolar = false;
    this.isReflectX = false;
    this.isReflectY = false;
    var start = cfg.start,
      end = cfg.end,
      _a = cfg.matrix,
      matrix = _a === void 0 ? [1, 0, 0, 0, 1, 0, 0, 0, 1] : _a,
      _b = cfg.isTransposed,
      isTransposed = _b === void 0 ? false : _b;
    this.start = start;
    this.end = end;
    this.matrix = matrix;
    this.originalMatrix = __spreadArray([], matrix);
    this.isTransposed = isTransposed;
  }
  Coordinate2.prototype.initial = function() {
    this.center = {
      x: (this.start.x + this.end.x) / 2,
      y: (this.start.y + this.end.y) / 2
    };
    this.width = Math.abs(this.end.x - this.start.x);
    this.height = Math.abs(this.end.y - this.start.y);
  };
  Coordinate2.prototype.update = function(cfg) {
    assign(this, cfg);
    this.initial();
  };
  Coordinate2.prototype.convertDim = function(percent, dim) {
    var _a;
    var _b = this[dim],
      start = _b.start,
      end = _b.end;
    if (this.isReflect(dim)) {
      (_a = [end, start]), (start = _a[0]), (end = _a[1]);
    }
    return start + percent * (end - start);
  };
  Coordinate2.prototype.invertDim = function(value, dim) {
    var _a;
    var _b = this[dim],
      start = _b.start,
      end = _b.end;
    if (this.isReflect(dim)) {
      (_a = [end, start]), (start = _a[0]), (end = _a[1]);
    }
    return (value - start) / (end - start);
  };
  Coordinate2.prototype.applyMatrix = function(x, y, tag) {
    if (tag === void 0) {
      tag = 0;
    }
    var matrix = this.matrix;
    var vector = [x, y, tag];
    vec3.transformMat3(vector, vector, matrix);
    return vector;
  };
  Coordinate2.prototype.invertMatrix = function(x, y, tag) {
    if (tag === void 0) {
      tag = 0;
    }
    var matrix = this.matrix;
    var inverted = mat3.invert([0, 0, 0, 0, 0, 0, 0, 0, 0], matrix);
    var vector = [x, y, tag];
    if (inverted) {
      vec3.transformMat3(vector, vector, inverted);
    }
    return vector;
  };
  Coordinate2.prototype.convert = function(point) {
    var _a = this.convertPoint(point),
      x = _a.x,
      y = _a.y;
    var vector = this.applyMatrix(x, y, 1);
    return {
      x: vector[0],
      y: vector[1]
    };
  };
  Coordinate2.prototype.invert = function(point) {
    var vector = this.invertMatrix(point.x, point.y, 1);
    return this.invertPoint({
      x: vector[0],
      y: vector[1]
    });
  };
  Coordinate2.prototype.rotate = function(radian) {
    var matrix = this.matrix;
    var center = this.center;
    ext.leftTranslate(matrix, matrix, [-center.x, -center.y]);
    ext.leftRotate(matrix, matrix, radian);
    ext.leftTranslate(matrix, matrix, [center.x, center.y]);
    return this;
  };
  Coordinate2.prototype.reflect = function(dim) {
    if (dim === 'x') {
      this.isReflectX = !this.isReflectX;
    } else {
      this.isReflectY = !this.isReflectY;
    }
    return this;
  };
  Coordinate2.prototype.scale = function(s1, s2) {
    var matrix = this.matrix;
    var center = this.center;
    ext.leftTranslate(matrix, matrix, [-center.x, -center.y]);
    ext.leftScale(matrix, matrix, [s1, s2]);
    ext.leftTranslate(matrix, matrix, [center.x, center.y]);
    return this;
  };
  Coordinate2.prototype.translate = function(x, y) {
    var matrix = this.matrix;
    ext.leftTranslate(matrix, matrix, [x, y]);
    return this;
  };
  Coordinate2.prototype.transpose = function() {
    this.isTransposed = !this.isTransposed;
    return this;
  };
  Coordinate2.prototype.getCenter = function() {
    return this.center;
  };
  Coordinate2.prototype.getWidth = function() {
    return this.width;
  };
  Coordinate2.prototype.getHeight = function() {
    return this.height;
  };
  Coordinate2.prototype.getRadius = function() {
    return this.radius;
  };
  Coordinate2.prototype.isReflect = function(dim) {
    return dim === 'x' ? this.isReflectX : this.isReflectY;
  };
  Coordinate2.prototype.resetMatrix = function(matrix) {
    this.matrix = matrix ? matrix : __spreadArray([], this.originalMatrix);
  };
  return Coordinate2;
})();
var base_default = Coordinate;

// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/coord/cartesian.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Cartesian = (function(_super) {
  __extends(Cartesian2, _super);
  function Cartesian2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.isRect = true;
    _this.type = 'cartesian';
    _this.initial();
    return _this;
  }
  Cartesian2.prototype.initial = function() {
    _super.prototype.initial.call(this);
    var start = this.start;
    var end = this.end;
    this.x = {
      start: start.x,
      end: end.x
    };
    this.y = {
      start: start.y,
      end: end.y
    };
  };
  Cartesian2.prototype.convertPoint = function(point) {
    var _a;
    var x = point.x,
      y = point.y;
    if (this.isTransposed) {
      (_a = [y, x]), (x = _a[0]), (y = _a[1]);
    }
    return {
      x: this.convertDim(x, 'x'),
      y: this.convertDim(y, 'y')
    };
  };
  Cartesian2.prototype.invertPoint = function(point) {
    var _a;
    var x = this.invertDim(point.x, 'x');
    var y = this.invertDim(point.y, 'y');
    if (this.isTransposed) {
      (_a = [y, x]), (x = _a[0]), (y = _a[1]);
    }
    return {
      x,
      y
    };
  };
  return Cartesian2;
})(base_default);
var cartesian_default = Cartesian;

// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/coord/helix.js
import { __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { ext as ext2, vec2 } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { isNumberEqual } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Helix = (function(_super) {
  __extends2(Helix2, _super);
  function Helix2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.isHelix = true;
    _this.type = 'helix';
    var _a = cfg.startAngle,
      startAngle = _a === void 0 ? 1.25 * Math.PI : _a,
      _b = cfg.endAngle,
      endAngle = _b === void 0 ? 7.25 * Math.PI : _b,
      _c = cfg.innerRadius,
      innerRadius = _c === void 0 ? 0 : _c,
      radius = cfg.radius;
    _this.startAngle = startAngle;
    _this.endAngle = endAngle;
    _this.innerRadius = innerRadius;
    _this.radius = radius;
    _this.initial();
    return _this;
  }
  Helix2.prototype.initial = function() {
    _super.prototype.initial.call(this);
    var index = (this.endAngle - this.startAngle) / (2 * Math.PI) + 1;
    var maxRadius = Math.min(this.width, this.height) / 2;
    if (this.radius && this.radius >= 0 && this.radius <= 1) {
      maxRadius = maxRadius * this.radius;
    }
    this.d = Math.floor((maxRadius * (1 - this.innerRadius)) / index);
    this.a = this.d / (Math.PI * 2);
    this.x = {
      start: this.startAngle,
      end: this.endAngle
    };
    this.y = {
      start: this.innerRadius * maxRadius,
      end: this.innerRadius * maxRadius + this.d * 0.99
    };
  };
  Helix2.prototype.convertPoint = function(point) {
    var _a;
    var x = point.x,
      y = point.y;
    if (this.isTransposed) {
      (_a = [y, x]), (x = _a[0]), (y = _a[1]);
    }
    var thi = this.convertDim(x, 'x');
    var r = this.a * thi;
    var newY = this.convertDim(y, 'y');
    return {
      x: this.center.x + Math.cos(thi) * (r + newY),
      y: this.center.y + Math.sin(thi) * (r + newY)
    };
  };
  Helix2.prototype.invertPoint = function(point) {
    var _a;
    var d = this.d + this.y.start;
    var v = vec2.subtract([0, 0], [point.x, point.y], [this.center.x, this.center.y]);
    var thi = ext2.angleTo(v, [1, 0], true);
    var rMin = thi * this.a;
    if (vec2.length(v) < rMin) {
      rMin = vec2.length(v);
    }
    var index = Math.floor((vec2.length(v) - rMin) / d);
    thi = 2 * index * Math.PI + thi;
    var r = this.a * thi;
    var newY = vec2.length(v) - r;
    newY = isNumberEqual(newY, 0) ? 0 : newY;
    var x = this.invertDim(thi, 'x');
    var y = this.invertDim(newY, 'y');
    x = isNumberEqual(x, 0) ? 0 : x;
    y = isNumberEqual(y, 0) ? 0 : y;
    if (this.isTransposed) {
      (_a = [y, x]), (x = _a[0]), (y = _a[1]);
    }
    return {
      x,
      y
    };
  };
  return Helix2;
})(base_default);
var helix_default = Helix;

// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/coord/polar.js
import { __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  ext as ext3,
  vec2 as vec22,
  vec3 as vec32
} from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';
import { isNumberEqual as isNumberEqual2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Polar = (function(_super) {
  __extends3(Polar2, _super);
  function Polar2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.isPolar = true;
    _this.type = 'polar';
    var _a = cfg.startAngle,
      startAngle = _a === void 0 ? -Math.PI / 2 : _a,
      _b = cfg.endAngle,
      endAngle = _b === void 0 ? (Math.PI * 3) / 2 : _b,
      _c = cfg.innerRadius,
      innerRadius = _c === void 0 ? 0 : _c,
      radius = cfg.radius;
    _this.startAngle = startAngle;
    _this.endAngle = endAngle;
    _this.innerRadius = innerRadius;
    _this.radius = radius;
    _this.initial();
    return _this;
  }
  Polar2.prototype.initial = function() {
    _super.prototype.initial.call(this);
    while (this.endAngle < this.startAngle) {
      this.endAngle += Math.PI * 2;
    }
    var oneBox = this.getOneBox();
    var oneWidth = oneBox.maxX - oneBox.minX;
    var oneHeight = oneBox.maxY - oneBox.minY;
    var left = Math.abs(oneBox.minX) / oneWidth;
    var top = Math.abs(oneBox.minY) / oneHeight;
    var maxRadius;
    if (this.height / oneHeight > this.width / oneWidth) {
      maxRadius = this.width / oneWidth;
      this.circleCenter = {
        x: this.center.x - (0.5 - left) * this.width,
        y: this.center.y - (0.5 - top) * maxRadius * oneHeight
      };
    } else {
      maxRadius = this.height / oneHeight;
      this.circleCenter = {
        x: this.center.x - (0.5 - left) * maxRadius * oneWidth,
        y: this.center.y - (0.5 - top) * this.height
      };
    }
    this.polarRadius = this.radius;
    if (!this.radius) {
      this.polarRadius = maxRadius;
    } else if (this.radius > 0 && this.radius <= 1) {
      this.polarRadius = maxRadius * this.radius;
    } else if (this.radius <= 0 || this.radius > maxRadius) {
      this.polarRadius = maxRadius;
    }
    this.x = {
      start: this.startAngle,
      end: this.endAngle
    };
    this.y = {
      start: this.innerRadius * this.polarRadius,
      end: this.polarRadius
    };
  };
  Polar2.prototype.getRadius = function() {
    return this.polarRadius;
  };
  Polar2.prototype.convertPoint = function(point) {
    var _a;
    var center = this.getCenter();
    var x = point.x,
      y = point.y;
    if (this.isTransposed) {
      (_a = [y, x]), (x = _a[0]), (y = _a[1]);
    }
    x = this.convertDim(x, 'x');
    y = this.convertDim(y, 'y');
    return {
      x: center.x + Math.cos(x) * y,
      y: center.y + Math.sin(x) * y
    };
  };
  Polar2.prototype.invertPoint = function(point) {
    var _a;
    var center = this.getCenter();
    var vPoint = [point.x - center.x, point.y - center.y];
    var _b = this,
      startAngle = _b.startAngle,
      endAngle = _b.endAngle;
    if (this.isReflect('x')) {
      (_a = [endAngle, startAngle]), (startAngle = _a[0]), (endAngle = _a[1]);
    }
    var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    ext3.leftRotate(m, m, startAngle);
    var vStart3 = [1, 0, 0];
    vec32.transformMat3(vStart3, vStart3, m);
    var vStart2 = [vStart3[0], vStart3[1]];
    var angle = ext3.angleTo(vStart2, vPoint, endAngle < startAngle);
    if (isNumberEqual2(angle, Math.PI * 2)) {
      angle = 0;
    }
    var radius = vec22.length(vPoint);
    var xPercent = angle / (endAngle - startAngle);
    xPercent = endAngle - startAngle > 0 ? xPercent : -xPercent;
    var yPercent = this.invertDim(radius, 'y');
    var rst = {
      x: 0,
      y: 0
    };
    rst.x = this.isTransposed ? yPercent : xPercent;
    rst.y = this.isTransposed ? xPercent : yPercent;
    return rst;
  };
  Polar2.prototype.getCenter = function() {
    return this.circleCenter;
  };
  Polar2.prototype.getOneBox = function() {
    var startAngle = this.startAngle;
    var endAngle = this.endAngle;
    if (Math.abs(endAngle - startAngle) >= Math.PI * 2) {
      return {
        minX: -1,
        maxX: 1,
        minY: -1,
        maxY: 1
      };
    }
    var xs = [0, Math.cos(startAngle), Math.cos(endAngle)];
    var ys = [0, Math.sin(startAngle), Math.sin(endAngle)];
    for (var i = Math.min(startAngle, endAngle); i < Math.max(startAngle, endAngle); i += Math.PI / 18) {
      xs.push(Math.cos(i));
      ys.push(Math.sin(i));
    }
    return {
      minX: Math.min.apply(Math, xs),
      maxX: Math.max.apply(Math, xs),
      minY: Math.min.apply(Math, ys),
      maxY: Math.max.apply(Math, ys)
    };
  };
  return Polar2;
})(base_default);
var polar_default = Polar;

// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/factory.js
var COORDINATE_MAP = {};
var getCoordinate = function(type) {
  return COORDINATE_MAP[type.toLowerCase()];
};
var registerCoordinate = function(type, ctor) {
  COORDINATE_MAP[type.toLowerCase()] = ctor;
};

// esm-build-76322ad438e08fe2b8783261914a249eac010210-c78d62d5/node_modules/@antv/coord/esm/index.js
registerCoordinate('rect', cartesian_default);
registerCoordinate('cartesian', cartesian_default);
registerCoordinate('polar', polar_default);
registerCoordinate('helix', helix_default);
export { base_default as Coordinate, getCoordinate, registerCoordinate };
