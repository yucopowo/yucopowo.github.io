/* esm.sh - esbuild bundle(@antv/g-math@0.1.7) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/util.js
var util_exports = {};
__export(util_exports, {
  distance: () => distance,
  getBBoxByArray: () => getBBoxByArray,
  getBBoxRange: () => getBBoxRange,
  isNumberEqual: () => isNumberEqual,
  piMod: () => piMod
});
function minNum(array) {
  return Math.min.apply(null, array);
}
function maxNum(array) {
  return Math.max.apply(null, array);
}
function distance(x1, y1, x2, y2) {
  var dx = x1 - x2;
  var dy = y1 - y2;
  return Math.sqrt(dx * dx + dy * dy);
}
function isNumberEqual(v1, v2) {
  return Math.abs(v1 - v2) < 1e-3;
}
function getBBoxByArray(xArr, yArr) {
  var minX = minNum(xArr);
  var minY = minNum(yArr);
  var maxX = maxNum(xArr);
  var maxY = maxNum(yArr);
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getBBoxRange(x1, y1, x2, y2) {
  return {
    minX: minNum([x1, x2]),
    maxX: maxNum([x1, x2]),
    minY: minNum([y1, y2]),
    maxY: maxNum([y1, y2])
  };
}
function piMod(angle) {
  return (angle + Math.PI * 2) % (Math.PI * 2);
}

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/line.js
import * as vec2 from '/cdn/v99/gl-matrix@3.4.3/es2022/vec2.development.js';
var line_default = {
  box: function(x1, y1, x2, y2) {
    return getBBoxByArray([x1, x2], [y1, y2]);
  },
  length: function(x1, y1, x2, y2) {
    return distance(x1, y1, x2, y2);
  },
  pointAt: function(x1, y1, x2, y2, t) {
    return {
      x: (1 - t) * x1 + t * x2,
      y: (1 - t) * y1 + t * y2
    };
  },
  pointDistance: function(x1, y1, x2, y2, x, y) {
    var cross = (x2 - x1) * (x - x1) + (y2 - y1) * (y - y1);
    if (cross < 0) {
      return distance(x1, y1, x, y);
    }
    var lengthSquare = (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1);
    if (cross > lengthSquare) {
      return distance(x2, y2, x, y);
    }
    return this.pointToLine(x1, y1, x2, y2, x, y);
  },
  pointToLine: function(x1, y1, x2, y2, x, y) {
    var d = [x2 - x1, y2 - y1];
    if (vec2.exactEquals(d, [0, 0])) {
      return Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
    }
    var u = [-d[1], d[0]];
    vec2.normalize(u, u);
    var a = [x - x1, y - y1];
    return Math.abs(vec2.dot(a, u));
  },
  tangentAngle: function(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/bezier.js
var EPSILON = 1e-4;
function nearestPoint(xArr, yArr, x, y, tCallback, length) {
  var t;
  var d = Infinity;
  var v0 = [x, y];
  var segNum = 20;
  if (length && length > 200) {
    segNum = length / 10;
  }
  var increaseRate = 1 / segNum;
  var interval = increaseRate / 10;
  for (var i = 0; i <= segNum; i++) {
    var _t = i * increaseRate;
    var v1 = [tCallback.apply(null, xArr.concat([_t])), tCallback.apply(null, yArr.concat([_t]))];
    var d1 = distance(v0[0], v0[1], v1[0], v1[1]);
    if (d1 < d) {
      t = _t;
      d = d1;
    }
  }
  if (t === 0) {
    return {
      x: xArr[0],
      y: yArr[0]
    };
  }
  if (t === 1) {
    var count = xArr.length;
    return {
      x: xArr[count - 1],
      y: yArr[count - 1]
    };
  }
  d = Infinity;
  for (var i = 0; i < 32; i++) {
    if (interval < EPSILON) {
      break;
    }
    var prev = t - interval;
    var next = t + interval;
    var v1 = [tCallback.apply(null, xArr.concat([prev])), tCallback.apply(null, yArr.concat([prev]))];
    var d1 = distance(v0[0], v0[1], v1[0], v1[1]);
    if (prev >= 0 && d1 < d) {
      t = prev;
      d = d1;
    } else {
      var v2 = [tCallback.apply(null, xArr.concat([next])), tCallback.apply(null, yArr.concat([next]))];
      var d2 = distance(v0[0], v0[1], v2[0], v2[1]);
      if (next <= 1 && d2 < d) {
        t = next;
        d = d2;
      } else {
        interval *= 0.5;
      }
    }
  }
  return {
    x: tCallback.apply(null, xArr.concat([t])),
    y: tCallback.apply(null, yArr.concat([t]))
  };
}
function snapLength(xArr, yArr) {
  var totalLength = 0;
  var count = xArr.length;
  for (var i = 0; i < count; i++) {
    var x = xArr[i];
    var y = yArr[i];
    var nextX = xArr[(i + 1) % count];
    var nextY = yArr[(i + 1) % count];
    totalLength += distance(x, y, nextX, nextY);
  }
  return totalLength / 2;
}

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/quadratic.js
function quadraticAt(p0, p1, p2, t) {
  var onet = 1 - t;
  return onet * onet * p0 + 2 * t * onet * p1 + t * t * p2;
}
function extrema(p0, p1, p2) {
  var a = p0 + p2 - 2 * p1;
  if (isNumberEqual(a, 0)) {
    return [0.5];
  }
  var rst = (p0 - p1) / a;
  if (rst <= 1 && rst >= 0) {
    return [rst];
  }
  return [];
}
function derivativeAt(p0, p1, p2, t) {
  return 2 * (1 - t) * (p1 - p0) + 2 * t * (p2 - p1);
}
function divideQuadratic(x1, y1, x2, y2, x3, y3, t) {
  var xt = quadraticAt(x1, x2, x3, t);
  var yt = quadraticAt(y1, y2, y3, t);
  var controlPoint1 = line_default.pointAt(x1, y1, x2, y2, t);
  var controlPoint2 = line_default.pointAt(x2, y2, x3, y3, t);
  return [
    [x1, y1, controlPoint1.x, controlPoint1.y, xt, yt],
    [xt, yt, controlPoint2.x, controlPoint2.y, x3, y3]
  ];
}
function quadraticLength(x1, y1, x2, y2, x3, y3, iterationCount) {
  if (iterationCount === 0) {
    return (distance(x1, y1, x2, y2) + distance(x2, y2, x3, y3) + distance(x1, y1, x3, y3)) / 2;
  }
  var quadratics = divideQuadratic(x1, y1, x2, y2, x3, y3, 0.5);
  var left = quadratics[0];
  var right = quadratics[1];
  left.push(iterationCount - 1);
  right.push(iterationCount - 1);
  return quadraticLength.apply(null, left) + quadraticLength.apply(null, right);
}
var quadratic_default = {
  box: function(x1, y1, x2, y2, x3, y3) {
    var xExtrema2 = extrema(x1, x2, x3)[0];
    var yExtrema2 = extrema(y1, y2, y3)[0];
    var xArr = [x1, x3];
    var yArr = [y1, y3];
    if (xExtrema2 !== void 0) {
      xArr.push(quadraticAt(x1, x2, x3, xExtrema2));
    }
    if (yExtrema2 !== void 0) {
      yArr.push(quadraticAt(y1, y2, y3, yExtrema2));
    }
    return getBBoxByArray(xArr, yArr);
  },
  length: function(x1, y1, x2, y2, x3, y3) {
    return quadraticLength(x1, y1, x2, y2, x3, y3, 3);
  },
  nearestPoint: function(x1, y1, x2, y2, x3, y3, x0, y0) {
    return nearestPoint([x1, x2, x3], [y1, y2, y3], x0, y0, quadraticAt);
  },
  pointDistance: function(x1, y1, x2, y2, x3, y3, x0, y0) {
    var point = this.nearestPoint(x1, y1, x2, y2, x3, y3, x0, y0);
    return distance(point.x, point.y, x0, y0);
  },
  interpolationAt: quadraticAt,
  pointAt: function(x1, y1, x2, y2, x3, y3, t) {
    return {
      x: quadraticAt(x1, x2, x3, t),
      y: quadraticAt(y1, y2, y3, t)
    };
  },
  divide: function(x1, y1, x2, y2, x3, y3, t) {
    return divideQuadratic(x1, y1, x2, y2, x3, y3, t);
  },
  tangentAngle: function(x1, y1, x2, y2, x3, y3, t) {
    var dx = derivativeAt(x1, x2, x3, t);
    var dy = derivativeAt(y1, y2, y3, t);
    var angle = Math.atan2(dy, dx);
    return piMod(angle);
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/cubic.js
function cubicAt(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return onet * onet * onet * p0 + 3 * p1 * t * onet * onet + 3 * p2 * t * t * onet + p3 * t * t * t;
}
function derivativeAt2(p0, p1, p2, p3, t) {
  var onet = 1 - t;
  return 3 * (onet * onet * (p1 - p0) + 2 * onet * t * (p2 - p1) + t * t * (p3 - p2));
}
function extrema2(p0, p1, p2, p3) {
  var a = -3 * p0 + 9 * p1 - 9 * p2 + 3 * p3;
  var b = 6 * p0 - 12 * p1 + 6 * p2;
  var c = 3 * p1 - 3 * p0;
  var extremas = [];
  var t1;
  var t2;
  var discSqrt;
  if (isNumberEqual(a, 0)) {
    if (!isNumberEqual(b, 0)) {
      t1 = -c / b;
      if (t1 >= 0 && t1 <= 1) {
        extremas.push(t1);
      }
    }
  } else {
    var disc = b * b - 4 * a * c;
    if (isNumberEqual(disc, 0)) {
      extremas.push(-b / (2 * a));
    } else if (disc > 0) {
      discSqrt = Math.sqrt(disc);
      t1 = (-b + discSqrt) / (2 * a);
      t2 = (-b - discSqrt) / (2 * a);
      if (t1 >= 0 && t1 <= 1) {
        extremas.push(t1);
      }
      if (t2 >= 0 && t2 <= 1) {
        extremas.push(t2);
      }
    }
  }
  return extremas;
}
function divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  var xt = cubicAt(x1, x2, x3, x4, t);
  var yt = cubicAt(y1, y2, y3, y4, t);
  var c1 = line_default.pointAt(x1, y1, x2, y2, t);
  var c2 = line_default.pointAt(x2, y2, x3, y3, t);
  var c3 = line_default.pointAt(x3, y3, x4, y4, t);
  var c12 = line_default.pointAt(c1.x, c1.y, c2.x, c2.y, t);
  var c23 = line_default.pointAt(c2.x, c2.y, c3.x, c3.y, t);
  return [
    [x1, y1, c1.x, c1.y, c12.x, c12.y, xt, yt],
    [xt, yt, c23.x, c23.y, c3.x, c3.y, x4, y4]
  ];
}
function cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, iterationCount) {
  if (iterationCount === 0) {
    return snapLength([x1, x2, x3, x4], [y1, y2, y3, y4]);
  }
  var cubics = divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, 0.5);
  var left = cubics[0];
  var right = cubics[1];
  left.push(iterationCount - 1);
  right.push(iterationCount - 1);
  return cubicLength.apply(null, left) + cubicLength.apply(null, right);
}
var cubic_default = {
  extrema: extrema2,
  box: function(x1, y1, x2, y2, x3, y3, x4, y4) {
    var xArr = [x1, x4];
    var yArr = [y1, y4];
    var xExtrema2 = extrema2(x1, x2, x3, x4);
    var yExtrema2 = extrema2(y1, y2, y3, y4);
    for (var i = 0; i < xExtrema2.length; i++) {
      xArr.push(cubicAt(x1, x2, x3, x4, xExtrema2[i]));
    }
    for (var i = 0; i < yExtrema2.length; i++) {
      yArr.push(cubicAt(y1, y2, y3, y4, yExtrema2[i]));
    }
    return getBBoxByArray(xArr, yArr);
  },
  length: function(x1, y1, x2, y2, x3, y3, x4, y4) {
    return cubicLength(x1, y1, x2, y2, x3, y3, x4, y4, 3);
  },
  nearestPoint: function(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
    return nearestPoint([x1, x2, x3, x4], [y1, y2, y3, y4], x0, y0, cubicAt, length);
  },
  pointDistance: function(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length) {
    var point = this.nearestPoint(x1, y1, x2, y2, x3, y3, x4, y4, x0, y0, length);
    return distance(point.x, point.y, x0, y0);
  },
  interpolationAt: cubicAt,
  pointAt: function(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    return {
      x: cubicAt(x1, x2, x3, x4, t),
      y: cubicAt(y1, y2, y3, y4, t)
    };
  },
  divide: function(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    return divideCubic(x1, y1, x2, y2, x3, y3, x4, y4, t);
  },
  tangentAngle: function(x1, y1, x2, y2, x3, y3, x4, y4, t) {
    var dx = derivativeAt2(x1, x2, x3, x4, t);
    var dy = derivativeAt2(y1, y2, y3, y4, t);
    return piMod(Math.atan2(dy, dx));
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/ellipse.js
function copysign(v1, v2) {
  var absv = Math.abs(v1);
  return v2 > 0 ? absv : absv * -1;
}
var ellipse_default = {
  box: function(x, y, rx, ry) {
    return {
      x: x - rx,
      y: y - ry,
      width: rx * 2,
      height: ry * 2
    };
  },
  length: function(x, y, rx, ry) {
    return Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
  },
  nearestPoint: function(x, y, rx, ry, x0, y0) {
    var a = rx;
    var b = ry;
    if (a === 0 || b === 0) {
      return {
        x,
        y
      };
    }
    var relativeX = x0 - x;
    var relativeY = y0 - y;
    var px = Math.abs(relativeX);
    var py = Math.abs(relativeY);
    var squareA = a * a;
    var squareB = b * b;
    var t = Math.PI / 4;
    var nearestX;
    var nearestY;
    for (var i = 0; i < 4; i++) {
      nearestX = a * Math.cos(t);
      nearestY = b * Math.sin(t);
      var ex = ((squareA - squareB) * Math.pow(Math.cos(t), 3)) / a;
      var ey = ((squareB - squareA) * Math.pow(Math.sin(t), 3)) / b;
      var rx1 = nearestX - ex;
      var ry1 = nearestY - ey;
      var qx = px - ex;
      var qy = py - ey;
      var r = Math.hypot(ry1, rx1);
      var q = Math.hypot(qy, qx);
      var delta_c = r * Math.asin((rx1 * qy - ry1 * qx) / (r * q));
      var delta_t = delta_c / Math.sqrt(squareA + squareB - nearestX * nearestX - nearestY * nearestY);
      t += delta_t;
      t = Math.min(Math.PI / 2, Math.max(0, t));
    }
    return {
      x: x + copysign(nearestX, relativeX),
      y: y + copysign(nearestY, relativeY)
    };
  },
  pointDistance: function(x, y, rx, ry, x0, y0) {
    var nearestPoint2 = this.nearestPoint(x, y, rx, ry, x0, y0);
    return distance(nearestPoint2.x, nearestPoint2.y, x0, y0);
  },
  pointAt: function(x, y, rx, ry, t) {
    var angle = 2 * Math.PI * t;
    return {
      x: x + rx * Math.cos(angle),
      y: y + ry * Math.sin(angle)
    };
  },
  tangentAngle: function(x, y, rx, ry, t) {
    var angle = 2 * Math.PI * t;
    var tangentAngle = Math.atan2(ry * Math.cos(angle), -rx * Math.sin(angle));
    return piMod(tangentAngle);
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/arc.js
function derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
  return -1 * rx * Math.cos(xRotation) * Math.sin(angle) - ry * Math.sin(xRotation) * Math.cos(angle);
}
function derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle) {
  return -1 * rx * Math.sin(xRotation) * Math.sin(angle) + ry * Math.cos(xRotation) * Math.cos(angle);
}
function xExtrema(rx, ry, xRotation) {
  return Math.atan((-ry / rx) * Math.tan(xRotation));
}
function yExtrema(rx, ry, xRotation) {
  return Math.atan(ry / (rx * Math.tan(xRotation)));
}
function xAt(cx, cy, rx, ry, xRotation, angle) {
  return rx * Math.cos(xRotation) * Math.cos(angle) - ry * Math.sin(xRotation) * Math.sin(angle) + cx;
}
function yAt(cx, cy, rx, ry, xRotation, angle) {
  return rx * Math.sin(xRotation) * Math.cos(angle) + ry * Math.cos(xRotation) * Math.sin(angle) + cy;
}
function getAngle(rx, ry, x0, y0) {
  var angle = Math.atan2(y0 * rx, x0 * ry);
  return (angle + Math.PI * 2) % (Math.PI * 2);
}
function getPoint(rx, ry, angle) {
  return {
    x: rx * Math.cos(angle),
    y: ry * Math.sin(angle)
  };
}
function rotate(x, y, angle) {
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  return [x * cos - y * sin, x * sin + y * cos];
}
var arc_default = {
  box: function(cx, cy, rx, ry, xRotation, startAngle, endAngle) {
    var xDim = xExtrema(rx, ry, xRotation);
    var minX = Infinity;
    var maxX = -Infinity;
    var xs = [startAngle, endAngle];
    for (var i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
      var xAngle = xDim + i;
      if (startAngle < endAngle) {
        if (startAngle < xAngle && xAngle < endAngle) {
          xs.push(xAngle);
        }
      } else {
        if (endAngle < xAngle && xAngle < startAngle) {
          xs.push(xAngle);
        }
      }
    }
    for (var i = 0; i < xs.length; i++) {
      var x = xAt(cx, cy, rx, ry, xRotation, xs[i]);
      if (x < minX) {
        minX = x;
      }
      if (x > maxX) {
        maxX = x;
      }
    }
    var yDim = yExtrema(rx, ry, xRotation);
    var minY = Infinity;
    var maxY = -Infinity;
    var ys = [startAngle, endAngle];
    for (var i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
      var yAngle = yDim + i;
      if (startAngle < endAngle) {
        if (startAngle < yAngle && yAngle < endAngle) {
          ys.push(yAngle);
        }
      } else {
        if (endAngle < yAngle && yAngle < startAngle) {
          ys.push(yAngle);
        }
      }
    }
    for (var i = 0; i < ys.length; i++) {
      var y = yAt(cx, cy, rx, ry, xRotation, ys[i]);
      if (y < minY) {
        minY = y;
      }
      if (y > maxY) {
        maxY = y;
      }
    }
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  },
  length: function(cx, cy, rx, ry, xRotation, startAngle, endAngle) {},
  nearestPoint: function(cx, cy, rx, ry, xRotation, startAngle, endAngle, x0, y0) {
    var relativeVector = rotate(x0 - cx, y0 - cy, -xRotation);
    var x1 = relativeVector[0],
      y1 = relativeVector[1];
    var relativePoint = ellipse_default.nearestPoint(0, 0, rx, ry, x1, y1);
    var angle = getAngle(rx, ry, relativePoint.x, relativePoint.y);
    if (angle < startAngle) {
      relativePoint = getPoint(rx, ry, startAngle);
    } else if (angle > endAngle) {
      relativePoint = getPoint(rx, ry, endAngle);
    }
    var vector = rotate(relativePoint.x, relativePoint.y, xRotation);
    return {
      x: vector[0] + cx,
      y: vector[1] + cy
    };
  },
  pointDistance: function(cx, cy, rx, ry, xRotation, startAngle, endAngle, x0, y0) {
    var nearestPoint2 = this.nearestPoint(cx, cy, rx, ry, x0, y0);
    return distance(nearestPoint2.x, nearestPoint2.y, x0, y0);
  },
  pointAt: function(cx, cy, rx, ry, xRotation, startAngle, endAngle, t) {
    var angle = (endAngle - startAngle) * t + startAngle;
    return {
      x: xAt(cx, cy, rx, ry, xRotation, angle),
      y: yAt(cx, cy, rx, ry, xRotation, angle)
    };
  },
  tangentAngle: function(cx, cy, rx, ry, xRotation, startAngle, endAngle, t) {
    var angle = (endAngle - startAngle) * t + startAngle;
    var dx = derivativeXAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
    var dy = derivativeYAt(cx, cy, rx, ry, xRotation, startAngle, endAngle, angle);
    return piMod(Math.atan2(dy, dx));
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/segments.js
function analyzePoints(points) {
  var totalLength = 0;
  var segments = [];
  for (var i = 0; i < points.length - 1; i++) {
    var from = points[i];
    var to = points[i + 1];
    var length_1 = distance(from[0], from[1], to[0], to[1]);
    var seg = {
      from,
      to,
      length: length_1
    };
    segments.push(seg);
    totalLength += length_1;
  }
  return {
    segments,
    totalLength
  };
}
function lengthOfSegment(points) {
  if (points.length < 2) {
    return 0;
  }
  var totalLength = 0;
  for (var i = 0; i < points.length - 1; i++) {
    var from = points[i];
    var to = points[i + 1];
    totalLength += distance(from[0], from[1], to[0], to[1]);
  }
  return totalLength;
}
function pointAtSegments(points, t) {
  if (t > 1 || t < 0 || points.length < 2) {
    return null;
  }
  var _a = analyzePoints(points),
    segments = _a.segments,
    totalLength = _a.totalLength;
  if (totalLength === 0) {
    return {
      x: points[0][0],
      y: points[0][1]
    };
  }
  var startRatio = 0;
  var point = null;
  for (var i = 0; i < segments.length; i++) {
    var seg = segments[i];
    var from = seg.from,
      to = seg.to;
    var currentRatio = seg.length / totalLength;
    if (t >= startRatio && t <= startRatio + currentRatio) {
      var localRatio = (t - startRatio) / currentRatio;
      point = line_default.pointAt(from[0], from[1], to[0], to[1], localRatio);
      break;
    }
    startRatio += currentRatio;
  }
  return point;
}
function angleAtSegments(points, t) {
  if (t > 1 || t < 0 || points.length < 2) {
    return 0;
  }
  var _a = analyzePoints(points),
    segments = _a.segments,
    totalLength = _a.totalLength;
  var startRatio = 0;
  var angle = 0;
  for (var i = 0; i < segments.length; i++) {
    var seg = segments[i];
    var from = seg.from,
      to = seg.to;
    var currentRatio = seg.length / totalLength;
    if (t >= startRatio && t <= startRatio + currentRatio) {
      angle = Math.atan2(to[1] - from[1], to[0] - from[0]);
      break;
    }
    startRatio += currentRatio;
  }
  return angle;
}
function distanceAtSegment(points, x, y) {
  var minDistance = Infinity;
  for (var i = 0; i < points.length - 1; i++) {
    var point = points[i];
    var nextPoint = points[i + 1];
    var distance_1 = line_default.pointDistance(point[0], point[1], nextPoint[0], nextPoint[1], x, y);
    if (distance_1 < minDistance) {
      minDistance = distance_1;
    }
  }
  return minDistance;
}

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/polyline.js
var polyline_default = {
  box: function(points) {
    var xArr = [];
    var yArr = [];
    for (var i = 0; i < points.length; i++) {
      var point = points[i];
      xArr.push(point[0]);
      yArr.push(point[1]);
    }
    return getBBoxByArray(xArr, yArr);
  },
  length: function(points) {
    return lengthOfSegment(points);
  },
  pointAt: function(points, t) {
    return pointAtSegments(points, t);
  },
  pointDistance: function(points, x, y) {
    return distanceAtSegment(points, x, y);
  },
  tangentAngle: function(points, t) {
    return angleAtSegments(points, t);
  }
};

// esm-build-9e70c41abd05c3fd2cc3405d9e11c36bf9e2a6d0-2304e85d/node_modules/@antv/g-math/esm/polygon.js
function getAllPoints(points) {
  var tmp = points.slice(0);
  if (points.length) {
    tmp.push(points[0]);
  }
  return tmp;
}
var polygon_default = {
  box: function(points) {
    return polyline_default.box(points);
  },
  length: function(points) {
    return lengthOfSegment(getAllPoints(points));
  },
  pointAt: function(points, t) {
    return pointAtSegments(getAllPoints(points), t);
  },
  pointDistance: function(points, x, y) {
    return distanceAtSegment(getAllPoints(points), x, y);
  },
  tangentAngle: function(points, t) {
    return angleAtSegments(getAllPoints(points), t);
  }
};
export {
  arc_default as Arc,
  cubic_default as Cubic,
  line_default as Line,
  polygon_default as Polygon,
  polyline_default as Polyline,
  quadratic_default as Quad,
  util_exports as Util
};
