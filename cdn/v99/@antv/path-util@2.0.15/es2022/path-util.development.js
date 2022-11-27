/* esm.sh - esbuild bundle(@antv/path-util@2.0.15) es2022 development */
// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/parse-path.js
import { each, isArray, isString } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var regexTags = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/gi;
var regexDot = /[^\s\,]+/gi;
function parsePath(p) {
  var path = p || [];
  if (isArray(path)) {
    return path;
  }
  if (isString(path)) {
    path = path.match(regexTags);
    each(path, function(item, index) {
      item = item.match(regexDot);
      if (item[0].length > 1) {
        var tag = item[0].charAt(0);
        item.splice(1, 0, item[0].substr(1));
        item[0] = tag;
      }
      each(item, function(sub, i) {
        if (!isNaN(sub)) {
          item[i] = +sub;
        }
      });
      path[index] = item;
    });
    return path;
  }
}
var parse_path_default = parsePath;

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/catmull-rom-2-bezier.js
import { vec2 } from '/cdn/v99/@antv/matrix-util@3.0.4/es2022/matrix-util.development.js';
function smoothBezier(points, smooth, isLoop, constraint) {
  var cps = [];
  var hasConstraint = !!constraint;
  var prevPoint;
  var nextPoint;
  var min;
  var max;
  var nextCp0;
  var cp1;
  var cp0;
  if (hasConstraint) {
    (min = constraint[0]), (max = constraint[1]);
    for (var i = 0, l = points.length; i < l; i += 1) {
      var point = points[i];
      min = vec2.min([0, 0], min, point);
      max = vec2.max([0, 0], max, point);
    }
  }
  for (var i = 0, len = points.length; i < len; i += 1) {
    var point = points[i];
    if (i === 0 && !isLoop) {
      cp0 = point;
    } else if (i === len - 1 && !isLoop) {
      cp1 = point;
      cps.push(cp0);
      cps.push(cp1);
    } else {
      var prevIdx = [i ? i - 1 : len - 1, i - 1][isLoop ? 0 : 1];
      prevPoint = points[prevIdx];
      nextPoint = points[isLoop ? (i + 1) % len : i + 1];
      var v = [0, 0];
      v = vec2.sub(v, nextPoint, prevPoint);
      v = vec2.scale(v, v, smooth);
      var d0 = vec2.distance(point, prevPoint);
      var d1 = vec2.distance(point, nextPoint);
      var sum = d0 + d1;
      if (sum !== 0) {
        d0 /= sum;
        d1 /= sum;
      }
      var v1 = vec2.scale([0, 0], v, -d0);
      var v2 = vec2.scale([0, 0], v, d1);
      cp1 = vec2.add([0, 0], point, v1);
      nextCp0 = vec2.add([0, 0], point, v2);
      nextCp0 = vec2.min([0, 0], nextCp0, vec2.max([0, 0], nextPoint, point));
      nextCp0 = vec2.max([0, 0], nextCp0, vec2.min([0, 0], nextPoint, point));
      v1 = vec2.sub([0, 0], nextCp0, point);
      v1 = vec2.scale([0, 0], v1, -d0 / d1);
      cp1 = vec2.add([0, 0], point, v1);
      cp1 = vec2.min([0, 0], cp1, vec2.max([0, 0], prevPoint, point));
      cp1 = vec2.max([0, 0], cp1, vec2.min([0, 0], prevPoint, point));
      v2 = vec2.sub([0, 0], point, cp1);
      v2 = vec2.scale([0, 0], v2, d1 / d0);
      nextCp0 = vec2.add([0, 0], point, v2);
      if (hasConstraint) {
        cp1 = vec2.max([0, 0], cp1, min);
        cp1 = vec2.min([0, 0], cp1, max);
        nextCp0 = vec2.max([0, 0], nextCp0, min);
        nextCp0 = vec2.min([0, 0], nextCp0, max);
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
}
function catmullRom2Bezier(crp, z, constraint) {
  if (z === void 0) {
    z = false;
  }
  if (constraint === void 0) {
    constraint = [
      [0, 0],
      [1, 1]
    ];
  }
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
  for (var i = 0; i < len - 1; i += 1) {
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
var catmull_rom_2_bezier_default = catmullRom2Bezier;

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/fill-path.js
function decasteljau(points, t) {
  var left = [];
  var right = [];
  function recurse(points2, t2) {
    if (points2.length === 1) {
      left.push(points2[0]);
      right.push(points2[0]);
    } else {
      var middlePoints = [];
      for (var i = 0; i < points2.length - 1; i++) {
        if (i === 0) {
          left.push(points2[0]);
        }
        if (i === points2.length - 2) {
          right.push(points2[i + 1]);
        }
        middlePoints[i] = [
          (1 - t2) * points2[i][0] + t2 * points2[i + 1][0],
          (1 - t2) * points2[i][1] + t2 * points2[i + 1][1]
        ];
      }
      recurse(middlePoints, t2);
    }
  }
  if (points.length) {
    recurse(points, t);
  }
  return {
    left,
    right: right.reverse()
  };
}
function splitCurve(start, end, count) {
  var points = [[start[1], start[2]]];
  count = count || 2;
  var segments = [];
  if (end[0] === 'A') {
    points.push(end[6]);
    points.push(end[7]);
  } else if (end[0] === 'C') {
    points.push([end[1], end[2]]);
    points.push([end[3], end[4]]);
    points.push([end[5], end[6]]);
  } else if (end[0] === 'S' || end[0] === 'Q') {
    points.push([end[1], end[2]]);
    points.push([end[3], end[4]]);
  } else {
    points.push([end[1], end[2]]);
  }
  var leftSegments = points;
  var t = 1 / count;
  for (var i = 0; i < count - 1; i++) {
    var rt = t / (1 - t * i);
    var split = decasteljau(leftSegments, rt);
    segments.push(split.left);
    leftSegments = split.right;
  }
  segments.push(leftSegments);
  var result = segments.map(function(segment) {
    var cmd = [];
    if (segment.length === 4) {
      cmd.push('C');
      cmd = cmd.concat(segment[2]);
    }
    if (segment.length >= 3) {
      if (segment.length === 3) {
        cmd.push('Q');
      }
      cmd = cmd.concat(segment[1]);
    }
    if (segment.length === 2) {
      cmd.push('L');
    }
    cmd = cmd.concat(segment[segment.length - 1]);
    return cmd;
  });
  return result;
}
function splitSegment(start, end, count) {
  if (count === 1) {
    return [[].concat(start)];
  }
  var segments = [];
  if (end[0] === 'L' || end[0] === 'C' || end[0] === 'Q') {
    segments = segments.concat(splitCurve(start, end, count));
  } else {
    var temp = [].concat(start);
    if (temp[0] === 'M') {
      temp[0] = 'L';
    }
    for (var i = 0; i <= count - 1; i++) {
      segments.push(temp);
    }
  }
  return segments;
}
function fillPath(source, target) {
  if (source.length === 1) {
    return source;
  }
  var sourceLen = source.length - 1;
  var targetLen = target.length - 1;
  var ratio = sourceLen / targetLen;
  var segmentsToFill = [];
  if (source.length === 1 && source[0][0] === 'M') {
    for (var i = 0; i < targetLen - sourceLen; i++) {
      source.push(source[0]);
    }
    return source;
  }
  for (var i = 0; i < targetLen; i++) {
    var index = Math.floor(ratio * i);
    segmentsToFill[index] = (segmentsToFill[index] || 0) + 1;
  }
  var filled = segmentsToFill.reduce(function(filled2, count, i2) {
    if (i2 === sourceLen) {
      return filled2.concat(source[sourceLen]);
    }
    return filled2.concat(splitSegment(source[i2], source[i2 + 1], count));
  }, []);
  filled.unshift(source[0]);
  if (target[targetLen] === 'Z' || target[targetLen] === 'z') {
    filled.push('Z');
  }
  return filled;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/fill-path-by-diff.js
import { isEqual } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getMinDiff(del, add, modify) {
  var type = null;
  var min = modify;
  if (add < min) {
    min = add;
    type = 'add';
  }
  if (del < min) {
    min = del;
    type = 'del';
  }
  return {
    type,
    min
  };
}
var levenshteinDistance = function(source, target) {
  var sourceLen = source.length;
  var targetLen = target.length;
  var sourceSegment, targetSegment;
  var temp = 0;
  if (sourceLen === 0 || targetLen === 0) {
    return null;
  }
  var dist = [];
  for (var i = 0; i <= sourceLen; i++) {
    dist[i] = [];
    dist[i][0] = {
      min: i
    };
  }
  for (var j = 0; j <= targetLen; j++) {
    dist[0][j] = {
      min: j
    };
  }
  for (var i = 1; i <= sourceLen; i++) {
    sourceSegment = source[i - 1];
    for (var j = 1; j <= targetLen; j++) {
      targetSegment = target[j - 1];
      if (isEqual(sourceSegment, targetSegment)) {
        temp = 0;
      } else {
        temp = 1;
      }
      var del = dist[i - 1][j].min + 1;
      var add = dist[i][j - 1].min + 1;
      var modify = dist[i - 1][j - 1].min + temp;
      dist[i][j] = getMinDiff(del, add, modify);
    }
  }
  return dist;
};
function fillPathByDiff(source, target) {
  var diffMatrix = levenshteinDistance(source, target);
  var sourceLen = source.length;
  var targetLen = target.length;
  var changes = [];
  var index = 1;
  var minPos = 1;
  if (diffMatrix[sourceLen][targetLen] !== sourceLen) {
    for (var i = 1; i <= sourceLen; i++) {
      var min = diffMatrix[i][i].min;
      minPos = i;
      for (var j = index; j <= targetLen; j++) {
        if (diffMatrix[i][j].min < min) {
          min = diffMatrix[i][j].min;
          minPos = j;
        }
      }
      index = minPos;
      if (diffMatrix[i][index].type) {
        changes.push({
          index: i - 1,
          type: diffMatrix[i][index].type
        });
      }
    }
    for (var i = changes.length - 1; i >= 0; i--) {
      index = changes[i].index;
      if (changes[i].type === 'add') {
        source.splice(index, 0, [].concat(source[index]));
      } else {
        source.splice(index, 1);
      }
    }
  }
  sourceLen = source.length;
  if (sourceLen < targetLen) {
    for (var i = 0; i < targetLen - sourceLen; i++) {
      if (source[sourceLen - 1][0] === 'z' || source[sourceLen - 1][0] === 'Z') {
        source.splice(sourceLen - 2, 0, source[sourceLen - 2]);
      } else {
        source.push(source[sourceLen - 1]);
      }
    }
  }
  return source;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/format-path.js
function _getSegmentPoints(segment) {
  var points = [];
  switch (segment[0]) {
    case 'M':
      points.push([segment[1], segment[2]]);
      break;
    case 'L':
      points.push([segment[1], segment[2]]);
      break;
    case 'A':
      points.push([segment[6], segment[7]]);
      break;
    case 'Q':
      points.push([segment[3], segment[4]]);
      points.push([segment[1], segment[2]]);
      break;
    case 'T':
      points.push([segment[1], segment[2]]);
      break;
    case 'C':
      points.push([segment[5], segment[6]]);
      points.push([segment[1], segment[2]]);
      points.push([segment[3], segment[4]]);
      break;
    case 'S':
      points.push([segment[3], segment[4]]);
      points.push([segment[1], segment[2]]);
      break;
    case 'H':
      points.push([segment[1], segment[1]]);
      break;
    case 'V':
      points.push([segment[1], segment[1]]);
      break;
    default:
  }
  return points;
}
function _splitPoints(points, former, count) {
  var result = [].concat(points);
  var index;
  var t = 1 / (count + 1);
  var formerEnd = _getSegmentPoints(former)[0];
  for (var i = 1; i <= count; i++) {
    t *= i;
    index = Math.floor(points.length * t);
    if (index === 0) {
      result.unshift([formerEnd[0] * t + points[index][0] * (1 - t), formerEnd[1] * t + points[index][1] * (1 - t)]);
    } else {
      result.splice(index, 0, [
        formerEnd[0] * t + points[index][0] * (1 - t),
        formerEnd[1] * t + points[index][1] * (1 - t)
      ]);
    }
  }
  return result;
}
function formatPath(fromPath, toPath) {
  if (fromPath.length <= 1) {
    return fromPath;
  }
  var points;
  for (var i = 0; i < toPath.length; i++) {
    if (fromPath[i][0] !== toPath[i][0]) {
      points = _getSegmentPoints(fromPath[i]);
      switch (toPath[i][0]) {
        case 'M':
          fromPath[i] = ['M'].concat(points[0]);
          break;
        case 'L':
          fromPath[i] = ['L'].concat(points[0]);
          break;
        case 'A':
          fromPath[i] = [].concat(toPath[i]);
          fromPath[i][6] = points[0][0];
          fromPath[i][7] = points[0][1];
          break;
        case 'Q':
          if (points.length < 2) {
            if (i > 0) {
              points = _splitPoints(points, fromPath[i - 1], 1);
            } else {
              fromPath[i] = toPath[i];
              break;
            }
          }
          fromPath[i] = ['Q'].concat(
            points.reduce(function(arr, i2) {
              return arr.concat(i2);
            }, [])
          );
          break;
        case 'T':
          fromPath[i] = ['T'].concat(points[0]);
          break;
        case 'C':
          if (points.length < 3) {
            if (i > 0) {
              points = _splitPoints(points, fromPath[i - 1], 2);
            } else {
              fromPath[i] = toPath[i];
              break;
            }
          }
          fromPath[i] = ['C'].concat(
            points.reduce(function(arr, i2) {
              return arr.concat(i2);
            }, [])
          );
          break;
        case 'S':
          if (points.length < 2) {
            if (i > 0) {
              points = _splitPoints(points, fromPath[i - 1], 1);
            } else {
              fromPath[i] = toPath[i];
              break;
            }
          }
          fromPath[i] = ['S'].concat(
            points.reduce(function(arr, i2) {
              return arr.concat(i2);
            }, [])
          );
          break;
        default:
          fromPath[i] = toPath[i];
      }
    }
  }
  return fromPath;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/path-intersection.js
import { isArray as isArray3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/rect-path.js
function rectPath(x, y, w, h, r) {
  if (r) {
    return [
      ['M', +x + +r, y],
      ['l', w - r * 2, 0],
      ['a', r, r, 0, 0, 1, r, r],
      ['l', 0, h - r * 2],
      ['a', r, r, 0, 0, 1, -r, r],
      ['l', r * 2 - w, 0],
      ['a', r, r, 0, 0, 1, -r, -r],
      ['l', 0, r * 2 - h],
      ['a', r, r, 0, 0, 1, r, -r],
      ['z']
    ];
  }
  return [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/parse-path-string.js
import { isArray as isArray2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var SPACES =
  '	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029';
var PATH_COMMAND = new RegExp(
  '([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)',
  'ig'
);
var PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');
function parsePathString(pathString) {
  if (!pathString) {
    return null;
  }
  if (isArray2(pathString)) {
    return pathString;
  }
  var paramCounts = {
    a: 7,
    c: 6,
    o: 2,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    u: 3,
    z: 0
  };
  var data = [];
  String(pathString).replace(PATH_COMMAND, function(a, b, c) {
    var params = [];
    var name = b.toLowerCase();
    c.replace(PATH_VALUES, function(a2, b2) {
      b2 && params.push(+b2);
    });
    if (name === 'm' && params.length > 2) {
      data.push([b].concat(params.splice(0, 2)));
      name = 'l';
      b = b === 'm' ? 'l' : 'L';
    }
    if (name === 'o' && params.length === 1) {
      data.push([b, params[0]]);
    }
    if (name === 'r') {
      data.push([b].concat(params));
    } else {
      while (params.length >= paramCounts[name]) {
        data.push([b].concat(params.splice(0, paramCounts[name])));
        if (!paramCounts[name]) {
          break;
        }
      }
    }
    return '';
  });
  return data;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/path-2-absolute.js
var REGEX_MD = /[a-z]/;
function toSymmetry(p, c) {
  return [c[0] + (c[0] - p[0]), c[1] + (c[1] - p[1])];
}
function pathToAbsolute(pathString) {
  var pathArray = parsePathString(pathString);
  if (!pathArray || !pathArray.length) {
    return [['M', 0, 0]];
  }
  var needProcess = false;
  for (var i = 0; i < pathArray.length; i++) {
    var cmd = pathArray[i][0];
    if (REGEX_MD.test(cmd) || ['V', 'H', 'T', 'S'].indexOf(cmd) >= 0) {
      needProcess = true;
      break;
    }
  }
  if (!needProcess) {
    return pathArray;
  }
  var res = [];
  var x = 0;
  var y = 0;
  var mx = 0;
  var my = 0;
  var start = 0;
  var pa0;
  var dots;
  var first = pathArray[0];
  if (first[0] === 'M' || first[0] === 'm') {
    x = +first[1];
    y = +first[2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }
  for (var i = start, ii = pathArray.length; i < ii; i++) {
    var pa = pathArray[i];
    var preParams = res[i - 1];
    var r = [];
    var cmd = pa[0];
    var upCmd = cmd.toUpperCase();
    if (cmd !== upCmd) {
      r[0] = upCmd;
      switch (upCmd) {
        case 'A':
          r[1] = pa[1];
          r[2] = pa[2];
          r[3] = pa[3];
          r[4] = pa[4];
          r[5] = pa[5];
          r[6] = +pa[6] + x;
          r[7] = +pa[7] + y;
          break;
        case 'V':
          r[1] = +pa[1] + y;
          break;
        case 'H':
          r[1] = +pa[1] + x;
          break;
        case 'M':
          mx = +pa[1] + x;
          my = +pa[2] + y;
          r[1] = mx;
          r[2] = my;
          break;
        default:
          for (var j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + (j % 2 ? x : y);
          }
      }
    } else {
      r = pathArray[i];
    }
    switch (upCmd) {
      case 'Z':
        x = +mx;
        y = +my;
        break;
      case 'H':
        x = r[1];
        r = ['L', x, y];
        break;
      case 'V':
        y = r[1];
        r = ['L', x, y];
        break;
      case 'T':
        x = r[1];
        y = r[2];
        var symetricT = toSymmetry([preParams[1], preParams[2]], [preParams[3], preParams[4]]);
        r = ['Q', symetricT[0], symetricT[1], x, y];
        break;
      case 'S':
        x = r[r.length - 2];
        y = r[r.length - 1];
        var length_1 = preParams.length;
        var symetricS = toSymmetry(
          [preParams[length_1 - 4], preParams[length_1 - 3]],
          [preParams[length_1 - 2], preParams[length_1 - 1]]
        );
        r = ['C', symetricS[0], symetricS[1], r[1], r[2], x, y];
        break;
      case 'M':
        mx = r[r.length - 2];
        my = r[r.length - 1];
        break;
      default:
        x = r[r.length - 2];
        y = r[r.length - 1];
    }
    res.push(r);
  }
  return res;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/process/arc-2-cubic.js
var TAU = Math.PI * 2;
var mapToEllipse = function(_a, rx, ry, cosphi, sinphi, centerx, centery) {
  var x = _a.x,
    y = _a.y;
  x *= rx;
  y *= ry;
  var xp = cosphi * x - sinphi * y;
  var yp = sinphi * x + cosphi * y;
  return {
    x: xp + centerx,
    y: yp + centery
  };
};
var approxUnitArc = function(ang1, ang2) {
  var a =
    ang2 === 1.5707963267948966
      ? 0.551915024494
      : ang2 === -1.5707963267948966
      ? -0.551915024494
      : (4 / 3) * Math.tan(ang2 / 4);
  var x1 = Math.cos(ang1);
  var y1 = Math.sin(ang1);
  var x2 = Math.cos(ang1 + ang2);
  var y2 = Math.sin(ang1 + ang2);
  return [
    {
      x: x1 - y1 * a,
      y: y1 + x1 * a
    },
    {
      x: x2 + y2 * a,
      y: y2 - x2 * a
    },
    {
      x: x2,
      y: y2
    }
  ];
};
var vectorAngle = function(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;
  if (dot > 1) {
    dot = 1;
  }
  if (dot < -1) {
    dot = -1;
  }
  return sign * Math.acos(dot);
};
var getArcCenter = function(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp) {
  var rxsq = Math.pow(rx, 2);
  var rysq = Math.pow(ry, 2);
  var pxpsq = Math.pow(pxp, 2);
  var pypsq = Math.pow(pyp, 2);
  var radicant = rxsq * rysq - rxsq * pypsq - rysq * pxpsq;
  if (radicant < 0) {
    radicant = 0;
  }
  radicant /= rxsq * pypsq + rysq * pxpsq;
  radicant = Math.sqrt(radicant) * (largeArcFlag === sweepFlag ? -1 : 1);
  var centerxp = ((radicant * rx) / ry) * pyp;
  var centeryp = ((radicant * -ry) / rx) * pxp;
  var centerx = cosphi * centerxp - sinphi * centeryp + (px + cx) / 2;
  var centery = sinphi * centerxp + cosphi * centeryp + (py + cy) / 2;
  var vx1 = (pxp - centerxp) / rx;
  var vy1 = (pyp - centeryp) / ry;
  var vx2 = (-pxp - centerxp) / rx;
  var vy2 = (-pyp - centeryp) / ry;
  var ang1 = vectorAngle(1, 0, vx1, vy1);
  var ang2 = vectorAngle(vx1, vy1, vx2, vy2);
  if (sweepFlag === 0 && ang2 > 0) {
    ang2 -= TAU;
  }
  if (sweepFlag === 1 && ang2 < 0) {
    ang2 += TAU;
  }
  return [centerx, centery, ang1, ang2];
};
var arcToBezier = function(_a) {
  var px = _a.px,
    py = _a.py,
    cx = _a.cx,
    cy = _a.cy,
    rx = _a.rx,
    ry = _a.ry,
    _b = _a.xAxisRotation,
    xAxisRotation = _b === void 0 ? 0 : _b,
    _c = _a.largeArcFlag,
    largeArcFlag = _c === void 0 ? 0 : _c,
    _d = _a.sweepFlag,
    sweepFlag = _d === void 0 ? 0 : _d;
  var curves = [];
  if (rx === 0 || ry === 0) {
    return [
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x: cx,
        y: cy
      }
    ];
  }
  var sinphi = Math.sin((xAxisRotation * TAU) / 360);
  var cosphi = Math.cos((xAxisRotation * TAU) / 360);
  var pxp = (cosphi * (px - cx)) / 2 + (sinphi * (py - cy)) / 2;
  var pyp = (-sinphi * (px - cx)) / 2 + (cosphi * (py - cy)) / 2;
  if (pxp === 0 && pyp === 0) {
    return [
      {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        x: cx,
        y: cy
      }
    ];
  }
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = Math.pow(pxp, 2) / Math.pow(rx, 2) + Math.pow(pyp, 2) / Math.pow(ry, 2);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }
  var _e = getArcCenter(px, py, cx, cy, rx, ry, largeArcFlag, sweepFlag, sinphi, cosphi, pxp, pyp),
    centerx = _e[0],
    centery = _e[1],
    ang1 = _e[2],
    ang2 = _e[3];
  var ratio = Math.abs(ang2) / (TAU / 4);
  if (Math.abs(1 - ratio) < 1e-7) {
    ratio = 1;
  }
  var segments = Math.max(Math.ceil(ratio), 1);
  ang2 /= segments;
  for (var i = 0; i < segments; i++) {
    curves.push(approxUnitArc(ang1, ang2));
    ang1 += ang2;
  }
  return curves.map(function(curve) {
    var _a2 = mapToEllipse(curve[0], rx, ry, cosphi, sinphi, centerx, centery),
      x1 = _a2.x,
      y1 = _a2.y;
    var _b2 = mapToEllipse(curve[1], rx, ry, cosphi, sinphi, centerx, centery),
      x2 = _b2.x,
      y2 = _b2.y;
    var _c2 = mapToEllipse(curve[2], rx, ry, cosphi, sinphi, centerx, centery),
      x = _c2.x,
      y = _c2.y;
    return {
      x1,
      y1,
      x2,
      y2,
      x,
      y
    };
  });
};
function arcToCubic(x1, y1, rx, ry, angle, LAF, SF, x2, y2) {
  var curves = arcToBezier({
    px: x1,
    py: y1,
    cx: x2,
    cy: y2,
    rx,
    ry,
    xAxisRotation: angle,
    largeArcFlag: LAF,
    sweepFlag: SF
  });
  return curves.reduce(function(prev, cur) {
    var x12 = cur.x1,
      y12 = cur.y1,
      x22 = cur.x2,
      y22 = cur.y2,
      x = cur.x,
      y = cur.y;
    prev.push(x12, y12, x22, y22, x, y);
    return prev;
  }, []);
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/process/quad-2-cubic.js
function quadToCubic(x1, y1, qx, qy, x2, y2) {
  var r13 = 1 / 3;
  var r23 = 2 / 3;
  return [r13 * x1 + r23 * qx, r13 * y1 + r23 * qy, r13 * x2 + r23 * qx, r13 * y2 + r23 * qy, x2, y2];
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/process/line-2-cubic.js
function lineToCubic(x1, y1, x2, y2) {
  return [x1, y1, x2, y2, x2, y2];
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/process/segment-2-cubic.js
function segmentToCubic(segment, params) {
  if ('TQ'.indexOf(segment[0]) < 0) {
    params.qx = null;
    params.qy = null;
  }
  var _a = segment.slice(1),
    s1 = _a[0],
    s2 = _a[1];
  switch (segment[0]) {
    case 'M':
      params.x = s1;
      params.y = s2;
      return segment;
    case 'A':
      return ['C'].concat(arcToCubic.apply(0, [params.x1, params.y1].concat(segment.slice(1))));
    case 'Q':
      params.qx = s1;
      params.qy = s2;
      return ['C'].concat(quadToCubic.apply(0, [params.x1, params.y1].concat(segment.slice(1))));
    case 'L':
      return ['C'].concat(lineToCubic(params.x1, params.y1, segment[1], segment[2]));
    case 'H':
      return ['C'].concat(lineToCubic(params.x1, params.y1, segment[1], params.y1));
    case 'V':
      return ['C'].concat(lineToCubic(params.x1, params.y1, params.x1, segment[1]));
    case 'Z':
      return ['C'].concat(lineToCubic(params.x1, params.y1, params.x, params.y));
    default:
  }
  return segment;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/path-2-curve.js
function pathToCurve(path, needZCommandIndexes) {
  if (needZCommandIndexes === void 0) {
    needZCommandIndexes = false;
  }
  var pathArray = pathToAbsolute(path);
  var params = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0,
    x: 0,
    y: 0,
    qx: null,
    qy: null
  };
  var allPathCommands = [];
  var pathCommand = '';
  var ii = pathArray.length;
  var segment;
  var seglen;
  var zCommandIndexes = [];
  for (var i = 0; i < ii; i += 1) {
    if (pathArray[i]) pathCommand = pathArray[i][0];
    allPathCommands[i] = pathCommand;
    pathArray[i] = segmentToCubic(pathArray[i], params);
    fixArc(pathArray, allPathCommands, i);
    ii = pathArray.length;
    if (pathCommand === 'Z') {
      zCommandIndexes.push(i);
    }
    segment = pathArray[i];
    seglen = segment.length;
    params.x1 = +segment[seglen - 2];
    params.y1 = +segment[seglen - 1];
    params.x2 = +segment[seglen - 4] || params.x1;
    params.y2 = +segment[seglen - 3] || params.y1;
  }
  if (needZCommandIndexes) {
    return [pathArray, zCommandIndexes];
  } else {
    return pathArray;
  }
}
function fixArc(pathArray, allPathCommands, i) {
  if (pathArray[i].length > 7) {
    pathArray[i].shift();
    var pi = pathArray[i];
    var ni = i;
    while (pi.length) {
      allPathCommands[i] = 'A';
      pathArray.splice((ni += 1), 0, ['C'].concat(pi.splice(0, 6)));
    }
    pathArray.splice(i, 1);
  }
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/path-intersection.js
var base3 = function(t, p1, p2, p3, p4) {
  var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
  var t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
  return t * t2 - 3 * p1 + 3 * p2;
};
var bezlen = function(x1, y1, x2, y2, x3, y3, x4, y4, z) {
  if (z === null) {
    z = 1;
  }
  z = z > 1 ? 1 : z < 0 ? 0 : z;
  var z2 = z / 2;
  var n = 12;
  var Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816];
  var Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
  var sum = 0;
  for (var i = 0; i < n; i++) {
    var ct = z2 * Tvalues[i] + z2;
    var xbase = base3(ct, x1, x2, x3, x4);
    var ybase = base3(ct, y1, y2, y3, y4);
    var comb = xbase * xbase + ybase * ybase;
    sum += Cvalues[i] * Math.sqrt(comb);
  }
  return z2 * sum;
};
var curveDim = function(x0, y0, x1, y1, x2, y2, x3, y3) {
  var tvalues = [];
  var bounds = [[], []];
  var a;
  var b;
  var c;
  var t;
  for (var i = 0; i < 2; ++i) {
    if (i === 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) < 1e-12) {
        continue;
      }
      t = -c / b;
      if (t > 0 && t < 1) {
        tvalues.push(t);
      }
      continue;
    }
    var b2ac = b * b - 4 * c * a;
    var sqrtb2ac = Math.sqrt(b2ac);
    if (b2ac < 0) {
      continue;
    }
    var t1 = (-b + sqrtb2ac) / (2 * a);
    if (t1 > 0 && t1 < 1) {
      tvalues.push(t1);
    }
    var t2 = (-b - sqrtb2ac) / (2 * a);
    if (t2 > 0 && t2 < 1) {
      tvalues.push(t2);
    }
  }
  var j = tvalues.length;
  var jlen = j;
  var mt;
  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
    bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
  }
  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  bounds[0].length = bounds[1].length = jlen + 2;
  return {
    min: {
      x: Math.min.apply(0, bounds[0]),
      y: Math.min.apply(0, bounds[1])
    },
    max: {
      x: Math.max.apply(0, bounds[0]),
      y: Math.max.apply(0, bounds[1])
    }
  };
};
var intersect = function(x1, y1, x2, y2, x3, y3, x4, y4) {
  if (
    Math.max(x1, x2) < Math.min(x3, x4) ||
    Math.min(x1, x2) > Math.max(x3, x4) ||
    Math.max(y1, y2) < Math.min(y3, y4) ||
    Math.min(y1, y2) > Math.max(y3, y4)
  ) {
    return;
  }
  var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
  var ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
  var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
  if (!denominator) {
    return;
  }
  var px = nx / denominator;
  var py = ny / denominator;
  var px2 = +px.toFixed(2);
  var py2 = +py.toFixed(2);
  if (
    px2 < +Math.min(x1, x2).toFixed(2) ||
    px2 > +Math.max(x1, x2).toFixed(2) ||
    px2 < +Math.min(x3, x4).toFixed(2) ||
    px2 > +Math.max(x3, x4).toFixed(2) ||
    py2 < +Math.min(y1, y2).toFixed(2) ||
    py2 > +Math.max(y1, y2).toFixed(2) ||
    py2 < +Math.min(y3, y4).toFixed(2) ||
    py2 > +Math.max(y3, y4).toFixed(2)
  ) {
    return;
  }
  return {
    x: px,
    y: py
  };
};
var isPointInsideBBox = function(bbox, x, y) {
  return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
};
var box = function(x, y, width, height) {
  if (x === null) {
    x = y = width = height = 0;
  }
  if (y === null) {
    y = x.y;
    width = x.width;
    height = x.height;
    x = x.x;
  }
  return {
    x,
    y,
    width,
    w: width,
    height,
    h: height,
    x2: x + width,
    y2: y + height,
    cx: x + width / 2,
    cy: y + height / 2,
    r1: Math.min(width, height) / 2,
    r2: Math.max(width, height) / 2,
    r0: Math.sqrt(width * width + height * height) / 2,
    path: rectPath(x, y, width, height),
    vb: [x, y, width, height].join(' ')
  };
};
var isBBoxIntersect = function(bbox1, bbox2) {
  bbox1 = box(bbox1);
  bbox2 = box(bbox2);
  return (
    isPointInsideBBox(bbox2, bbox1.x, bbox1.y) ||
    isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) ||
    isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) ||
    isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) ||
    isPointInsideBBox(bbox1, bbox2.x, bbox2.y) ||
    isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) ||
    isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) ||
    isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) ||
    (((bbox1.x < bbox2.x2 && bbox1.x > bbox2.x) || (bbox2.x < bbox1.x2 && bbox2.x > bbox1.x)) &&
      ((bbox1.y < bbox2.y2 && bbox1.y > bbox2.y) || (bbox2.y < bbox1.y2 && bbox2.y > bbox1.y)))
  );
};
var bezierBBox = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
  if (!isArray3(p1x)) {
    p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
  }
  var bbox = curveDim.apply(null, p1x);
  return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
};
var findDotsAtSegment = function(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  var t1 = 1 - t;
  var t13 = Math.pow(t1, 3);
  var t12 = Math.pow(t1, 2);
  var t2 = t * t;
  var t3 = t2 * t;
  var x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x;
  var y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
  var mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x);
  var my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y);
  var nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x);
  var ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y);
  var ax = t1 * p1x + t * c1x;
  var ay = t1 * p1y + t * c1y;
  var cx = t1 * c2x + t * p2x;
  var cy = t1 * c2y + t * p2y;
  var alpha = 90 - (Math.atan2(mx - nx, my - ny) * 180) / Math.PI;
  return {
    x,
    y,
    m: {
      x: mx,
      y: my
    },
    n: {
      x: nx,
      y: ny
    },
    start: {
      x: ax,
      y: ay
    },
    end: {
      x: cx,
      y: cy
    },
    alpha
  };
};
var interHelper = function(bez1, bez2, justCount) {
  var bbox1 = bezierBBox(bez1);
  var bbox2 = bezierBBox(bez2);
  if (!isBBoxIntersect(bbox1, bbox2)) {
    return justCount ? 0 : [];
  }
  var l1 = bezlen.apply(0, bez1);
  var l2 = bezlen.apply(0, bez2);
  var n1 = ~~(l1 / 8);
  var n2 = ~~(l2 / 8);
  var dots1 = [];
  var dots2 = [];
  var xy = {};
  var res = justCount ? 0 : [];
  for (var i = 0; i < n1 + 1; i++) {
    var d = findDotsAtSegment.apply(0, bez1.concat(i / n1));
    dots1.push({
      x: d.x,
      y: d.y,
      t: i / n1
    });
  }
  for (var i = 0; i < n2 + 1; i++) {
    var d = findDotsAtSegment.apply(0, bez2.concat(i / n2));
    dots2.push({
      x: d.x,
      y: d.y,
      t: i / n2
    });
  }
  for (var i = 0; i < n1; i++) {
    for (var j = 0; j < n2; j++) {
      var di = dots1[i];
      var di1 = dots1[i + 1];
      var dj = dots2[j];
      var dj1 = dots2[j + 1];
      var ci = Math.abs(di1.x - di.x) < 1e-3 ? 'y' : 'x';
      var cj = Math.abs(dj1.x - dj.x) < 1e-3 ? 'y' : 'x';
      var is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
      if (is) {
        if (xy[is.x.toFixed(4)] === is.y.toFixed(4)) {
          continue;
        }
        xy[is.x.toFixed(4)] = is.y.toFixed(4);
        var t1 = di.t + Math.abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t);
        var t2 = dj.t + Math.abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
        if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
          if (justCount) {
            res++;
          } else {
            res.push({
              x: is.x,
              y: is.y,
              t1,
              t2
            });
          }
        }
      }
    }
  }
  return res;
};
var interPathHelper = function(path1, path2, justCount) {
  path1 = pathToCurve(path1);
  path2 = pathToCurve(path2);
  var x1;
  var y1;
  var x2;
  var y2;
  var x1m;
  var y1m;
  var x2m;
  var y2m;
  var bez1;
  var bez2;
  var res = justCount ? 0 : [];
  for (var i = 0, ii = path1.length; i < ii; i++) {
    var pi = path1[i];
    if (pi[0] === 'M') {
      x1 = x1m = pi[1];
      y1 = y1m = pi[2];
    } else {
      if (pi[0] === 'C') {
        bez1 = [x1, y1].concat(pi.slice(1));
        x1 = bez1[6];
        y1 = bez1[7];
      } else {
        bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
        x1 = x1m;
        y1 = y1m;
      }
      for (var j = 0, jj = path2.length; j < jj; j++) {
        var pj = path2[j];
        if (pj[0] === 'M') {
          x2 = x2m = pj[1];
          y2 = y2m = pj[2];
        } else {
          if (pj[0] === 'C') {
            bez2 = [x2, y2].concat(pj.slice(1));
            x2 = bez2[6];
            y2 = bez2[7];
          } else {
            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
            x2 = x2m;
            y2 = y2m;
          }
          var intr = interHelper(bez1, bez2, justCount);
          if (justCount) {
            res += intr;
          } else {
            for (var k = 0, kk = intr.length; k < kk; k++) {
              intr[k].segment1 = i;
              intr[k].segment2 = j;
              intr[k].bez1 = bez1;
              intr[k].bez2 = bez2;
            }
            res = res.concat(intr);
          }
        }
      }
    }
  }
  return res;
};
function pathIntersection(path1, path2) {
  return interPathHelper(path1, path2);
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/parse-path-array.js
var p2s = /,?([a-z]),?/gi;
function parsePathArray(path) {
  return path.join(',').replace(p2s, '$1');
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/get-arc-params.js
import { mod, toRadian } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function vMag(v) {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
}
function vRatio(u, v) {
  return vMag(u) * vMag(v) ? (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v)) : 1;
}
function vAngle(u, v) {
  return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
}
function isSamePoint(point1, point2) {
  return point1[0] === point2[0] && point1[1] === point2[1];
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

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/path-2-segments.js
function toSymmetry2(point, center) {
  return [center[0] + (center[0] - point[0]), center[1] + (center[1] - point[1])];
}
function getSegments(path) {
  path = parse_path_default(path);
  var segments = [];
  var currentPoint = null;
  var nextParams = null;
  var startMovePoint = null;
  var lastStartMovePointIndex = 0;
  var count = path.length;
  for (var i = 0; i < count; i++) {
    var params = path[i];
    nextParams = path[i + 1];
    var command = params[0];
    var segment = {
      command,
      prePoint: currentPoint,
      params,
      startTangent: null,
      endTangent: null
    };
    switch (command) {
      case 'M':
        startMovePoint = [params[1], params[2]];
        lastStartMovePointIndex = i;
        break;
      case 'A':
        var arcParams = getArcParams(currentPoint, params);
        segment['arcParams'] = arcParams;
        break;
      default:
        break;
    }
    if (command === 'Z') {
      currentPoint = startMovePoint;
      nextParams = path[lastStartMovePointIndex + 1];
    } else {
      var len = params.length;
      currentPoint = [params[len - 2], params[len - 1]];
    }
    if (nextParams && nextParams[0] === 'Z') {
      nextParams = path[lastStartMovePointIndex];
      if (segments[lastStartMovePointIndex]) {
        segments[lastStartMovePointIndex].prePoint = currentPoint;
      }
    }
    segment['currentPoint'] = currentPoint;
    if (
      segments[lastStartMovePointIndex] &&
      isSamePoint(currentPoint, segments[lastStartMovePointIndex].currentPoint)
    ) {
      segments[lastStartMovePointIndex].prePoint = segment.prePoint;
    }
    var nextPoint = nextParams ? [nextParams[nextParams.length - 2], nextParams[nextParams.length - 1]] : null;
    segment['nextPoint'] = nextPoint;
    var prePoint = segment.prePoint;
    if (['L', 'H', 'V'].includes(command)) {
      segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
      segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
    } else if (command === 'Q') {
      var cp = [params[1], params[2]];
      segment.startTangent = [prePoint[0] - cp[0], prePoint[1] - cp[1]];
      segment.endTangent = [currentPoint[0] - cp[0], currentPoint[1] - cp[1]];
    } else if (command === 'T') {
      var preSegment = segments[i - 1];
      var cp = toSymmetry2(preSegment.currentPoint, prePoint);
      if (preSegment.command === 'Q') {
        segment.command = 'Q';
        segment.startTangent = [prePoint[0] - cp[0], prePoint[1] - cp[1]];
        segment.endTangent = [currentPoint[0] - cp[0], currentPoint[1] - cp[1]];
      } else {
        segment.command = 'TL';
        segment.startTangent = [prePoint[0] - currentPoint[0], prePoint[1] - currentPoint[1]];
        segment.endTangent = [currentPoint[0] - prePoint[0], currentPoint[1] - prePoint[1]];
      }
    } else if (command === 'C') {
      var cp1 = [params[1], params[2]];
      var cp2 = [params[3], params[4]];
      segment.startTangent = [prePoint[0] - cp1[0], prePoint[1] - cp1[1]];
      segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
      if (segment.startTangent[0] === 0 && segment.startTangent[1] === 0) {
        segment.startTangent = [cp1[0] - cp2[0], cp1[1] - cp2[1]];
      }
      if (segment.endTangent[0] === 0 && segment.endTangent[1] === 0) {
        segment.endTangent = [cp2[0] - cp1[0], cp2[1] - cp1[1]];
      }
    } else if (command === 'S') {
      var preSegment = segments[i - 1];
      var cp1 = toSymmetry2(preSegment.currentPoint, prePoint);
      var cp2 = [params[1], params[2]];
      if (preSegment.command === 'C') {
        segment.command = 'C';
        segment.startTangent = [prePoint[0] - cp1[0], prePoint[1] - cp1[1]];
        segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
      } else {
        segment.command = 'SQ';
        segment.startTangent = [prePoint[0] - cp2[0], prePoint[1] - cp2[1]];
        segment.endTangent = [currentPoint[0] - cp2[0], currentPoint[1] - cp2[1]];
      }
    } else if (command === 'A') {
      var d = 1e-3;
      var _a = segment['arcParams'] || {},
        _b = _a.cx,
        cx = _b === void 0 ? 0 : _b,
        _c = _a.cy,
        cy = _c === void 0 ? 0 : _c,
        _d = _a.rx,
        rx = _d === void 0 ? 0 : _d,
        _e = _a.ry,
        ry = _e === void 0 ? 0 : _e,
        _f = _a.sweepFlag,
        sweepFlag = _f === void 0 ? 0 : _f,
        _g = _a.startAngle,
        startAngle = _g === void 0 ? 0 : _g,
        _h = _a.endAngle,
        endAngle = _h === void 0 ? 0 : _h;
      if (sweepFlag === 0) {
        d *= -1;
      }
      var dx1 = rx * Math.cos(startAngle - d) + cx;
      var dy1 = ry * Math.sin(startAngle - d) + cy;
      segment.startTangent = [dx1 - startMovePoint[0], dy1 - startMovePoint[1]];
      var dx2 = rx * Math.cos(startAngle + endAngle + d) + cx;
      var dy2 = ry * Math.sin(startAngle + endAngle - d) + cy;
      segment.endTangent = [prePoint[0] - dx2, prePoint[1] - dy2];
    }
    segments.push(segment);
  }
  return segments;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/get-line-intersect.js
var isBetween = function(value, min, max) {
  return value >= min && value <= max;
};
function getLineIntersect(p0, p1, p2, p3) {
  var tolerance2 = 1e-3;
  var E = {
    x: p2.x - p0.x,
    y: p2.y - p0.y
  };
  var D0 = {
    x: p1.x - p0.x,
    y: p1.y - p0.y
  };
  var D1 = {
    x: p3.x - p2.x,
    y: p3.y - p2.y
  };
  var kross = D0.x * D1.y - D0.y * D1.x;
  var sqrKross = kross * kross;
  var sqrLen0 = D0.x * D0.x + D0.y * D0.y;
  var sqrLen1 = D1.x * D1.x + D1.y * D1.y;
  var point = null;
  if (sqrKross > tolerance2 * sqrLen0 * sqrLen1) {
    var s = (E.x * D1.y - E.y * D1.x) / kross;
    var t = (E.x * D0.y - E.y * D0.x) / kross;
    if (isBetween(s, 0, 1) && isBetween(t, 0, 1)) {
      point = {
        x: p0.x + s * D0.x,
        y: p0.y + s * D0.y
      };
    }
  }
  return point;
}

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/point-in-polygon.js
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

// esm-build-8acf5bf2ba9f33873b634930a7b944a3238ca1db-c94309f6/node_modules/@antv/path-util/esm/is-polygons-intersect.js
import { each as each2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function parseToLines(points) {
  var lines = [];
  var count = points.length;
  for (var i = 0; i < count - 1; i++) {
    var point = points[i];
    var next = points[i + 1];
    lines.push({
      from: {
        x: point[0],
        y: point[1]
      },
      to: {
        x: next[0],
        y: next[1]
      }
    });
  }
  if (lines.length > 1) {
    var first = points[0];
    var last = points[count - 1];
    lines.push({
      from: {
        x: last[0],
        y: last[1]
      },
      to: {
        x: first[0],
        y: first[1]
      }
    });
  }
  return lines;
}
function lineIntersectPolygon(lines, line) {
  var isIntersect = false;
  each2(lines, function(l) {
    if (getLineIntersect(l.from, l.to, line.from, line.to)) {
      isIntersect = true;
      return false;
    }
  });
  return isIntersect;
}
function getBBox(points) {
  var xArr = points.map(function(p) {
    return p[0];
  });
  var yArr = points.map(function(p) {
    return p[1];
  });
  return {
    minX: Math.min.apply(null, xArr),
    maxX: Math.max.apply(null, xArr),
    minY: Math.min.apply(null, yArr),
    maxY: Math.max.apply(null, yArr)
  };
}
function intersectBBox(box1, box2) {
  return !(box2.minX > box1.maxX || box2.maxX < box1.minX || box2.minY > box1.maxY || box2.maxY < box1.minY);
}
function isPolygonsIntersect(points1, points2) {
  if (points1.length < 2 || points2.length < 2) {
    return false;
  }
  var bbox1 = getBBox(points1);
  var bbox2 = getBBox(points2);
  if (!intersectBBox(bbox1, bbox2)) {
    return false;
  }
  var isIn = false;
  each2(points2, function(point) {
    if (isInPolygon(points1, point[0], point[1])) {
      isIn = true;
      return false;
    }
  });
  if (isIn) {
    return true;
  }
  each2(points1, function(point) {
    if (isInPolygon(points2, point[0], point[1])) {
      isIn = true;
      return false;
    }
  });
  if (isIn) {
    return true;
  }
  var lines1 = parseToLines(points1);
  var lines2 = parseToLines(points2);
  var isIntersect = false;
  each2(lines2, function(line) {
    if (lineIntersectPolygon(lines1, line)) {
      isIntersect = true;
      return false;
    }
  });
  return isIntersect;
}
export {
  catmull_rom_2_bezier_default as catmullRom2Bezier,
  fillPath,
  fillPathByDiff,
  formatPath,
  getArcParams,
  getLineIntersect,
  isInPolygon as isPointInPolygon,
  isPolygonsIntersect,
  parse_path_default as parsePath,
  parsePathArray,
  parsePathString,
  pathToAbsolute as path2Absolute,
  pathToCurve as path2Curve,
  getSegments as path2Segments,
  pathIntersection,
  rectPath as reactPath
};
