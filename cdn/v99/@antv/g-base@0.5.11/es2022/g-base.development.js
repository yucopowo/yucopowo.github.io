/* esm.sh - esbuild bundle(@antv/g-base@0.5.11) es2022 development */
var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
};

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/path.js
var path_exports = {};
__export(path_exports, {
  catmullRomToBezier: () => catmullRomToBezier,
  fillPath: () => fillPath,
  fillPathByDiff: () => fillPathByDiff,
  formatPath: () => formatPath,
  intersection: () => intersection,
  parsePathArray: () => parsePathArray,
  parsePathString: () => parsePathString,
  pathToAbsolute: () => pathToAbsolute,
  pathToCurve: () => pathToCurve,
  rectPath: () => rectPath
});
import { each, isArray } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var SPACES =
  '	\n\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029';
var PATH_COMMAND = new RegExp(
  '([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)',
  'ig'
);
var PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');
var parsePathString = function(pathString) {
  if (!pathString) {
    return null;
  }
  if (isArray(pathString)) {
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
    return pathString;
  });
  return data;
};
var catmullRomToBezier = function(crp, z) {
  var d = [];
  for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
    var p = [
      {
        x: +crp[i - 2],
        y: +crp[i - 1]
      },
      {
        x: +crp[i],
        y: +crp[i + 1]
      },
      {
        x: +crp[i + 2],
        y: +crp[i + 3]
      },
      {
        x: +crp[i + 4],
        y: +crp[i + 5]
      }
    ];
    if (z) {
      if (!i) {
        p[0] = {
          x: +crp[iLen - 2],
          y: +crp[iLen - 1]
        };
      } else if (iLen - 4 === i) {
        p[3] = {
          x: +crp[0],
          y: +crp[1]
        };
      } else if (iLen - 2 === i) {
        p[2] = {
          x: +crp[0],
          y: +crp[1]
        };
        p[3] = {
          x: +crp[2],
          y: +crp[3]
        };
      }
    } else {
      if (iLen - 4 === i) {
        p[3] = p[2];
      } else if (!i) {
        p[0] = {
          x: +crp[i],
          y: +crp[i + 1]
        };
      }
    }
    d.push([
      'C',
      (-p[0].x + 6 * p[1].x + p[2].x) / 6,
      (-p[0].y + 6 * p[1].y + p[2].y) / 6,
      (p[1].x + 6 * p[2].x - p[3].x) / 6,
      (p[1].y + 6 * p[2].y - p[3].y) / 6,
      p[2].x,
      p[2].y
    ]);
  }
  return d;
};
var ellipsePath = function(x, y, rx, ry, a) {
  var res = [];
  if (a === null && ry === null) {
    ry = rx;
  }
  x = +x;
  y = +y;
  rx = +rx;
  ry = +ry;
  if (a !== null) {
    var rad = Math.PI / 180;
    var x1 = x + rx * Math.cos(-ry * rad);
    var x2 = x + rx * Math.cos(-a * rad);
    var y1 = y + rx * Math.sin(-ry * rad);
    var y2 = y + rx * Math.sin(-a * rad);
    res = [
      ['M', x1, y1],
      ['A', rx, rx, 0, +(a - ry > 180), 0, x2, y2]
    ];
  } else {
    res = [['M', x, y], ['m', 0, -ry], ['a', rx, ry, 0, 1, 1, 0, 2 * ry], ['a', rx, ry, 0, 1, 1, 0, -2 * ry], ['z']];
  }
  return res;
};
var pathToAbsolute = function(pathArray) {
  pathArray = parsePathString(pathArray);
  if (!pathArray || !pathArray.length) {
    return [['M', 0, 0]];
  }
  var res = [];
  var x = 0;
  var y = 0;
  var mx = 0;
  var my = 0;
  var start = 0;
  var pa0;
  var dots;
  if (pathArray[0][0] === 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }
  var crz =
    pathArray.length === 3 &&
    pathArray[0][0] === 'M' &&
    pathArray[1][0].toUpperCase() === 'R' &&
    pathArray[2][0].toUpperCase() === 'Z';
  for (var r = void 0, pa = void 0, i = start, ii = pathArray.length; i < ii; i++) {
    res.push((r = []));
    pa = pathArray[i];
    pa0 = pa[0];
    if (pa0 !== pa0.toUpperCase()) {
      r[0] = pa0.toUpperCase();
      switch (r[0]) {
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
        case 'R':
          dots = [x, y].concat(pa.slice(1));
          for (var j = 2, jj = dots.length; j < jj; j++) {
            dots[j] = +dots[j] + x;
            dots[++j] = +dots[j] + y;
          }
          res.pop();
          res = res.concat(catmullRomToBezier(dots, crz));
          break;
        case 'O':
          res.pop();
          dots = ellipsePath(x, y, pa[1], pa[2]);
          dots.push(dots[0]);
          res = res.concat(dots);
          break;
        case 'U':
          res.pop();
          res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
          r = ['U'].concat(res[res.length - 1].slice(-2));
          break;
        case 'M':
          mx = +pa[1] + x;
          my = +pa[2] + y;
          break;
        default:
          for (var j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + (j % 2 ? x : y);
          }
      }
    } else if (pa0 === 'R') {
      dots = [x, y].concat(pa.slice(1));
      res.pop();
      res = res.concat(catmullRomToBezier(dots, crz));
      r = ['R'].concat(pa.slice(-2));
    } else if (pa0 === 'O') {
      res.pop();
      dots = ellipsePath(x, y, pa[1], pa[2]);
      dots.push(dots[0]);
      res = res.concat(dots);
    } else if (pa0 === 'U') {
      res.pop();
      res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
      r = ['U'].concat(res[res.length - 1].slice(-2));
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k];
      }
    }
    pa0 = pa0.toUpperCase();
    if (pa0 !== 'O') {
      switch (r[0]) {
        case 'Z':
          x = +mx;
          y = +my;
          break;
        case 'H':
          x = r[1];
          break;
        case 'V':
          y = r[1];
          break;
        case 'M':
          mx = r[r.length - 2];
          my = r[r.length - 1];
          break;
        default:
          x = r[r.length - 2];
          y = r[r.length - 1];
      }
    }
  }
  return res;
};
var l2c = function(x1, y1, x2, y2) {
  return [x1, y1, x2, y2, x2, y2];
};
var q2c = function(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3;
  var _23 = 2 / 3;
  return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
};
var a2c = function(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
  if (rx === ry) {
    rx += 1;
  }
  var _120 = (Math.PI * 120) / 180;
  var rad = (Math.PI / 180) * (+angle || 0);
  var res = [];
  var xy;
  var f1;
  var f2;
  var cx;
  var cy;
  var rotate = function(x3, y3, rad2) {
    var X = x3 * Math.cos(rad2) - y3 * Math.sin(rad2);
    var Y = x3 * Math.sin(rad2) + y3 * Math.cos(rad2);
    return {
      x: X,
      y: Y
    };
  };
  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;
    if (x1 === x2 && y1 === y2) {
      x2 += 1;
      y2 += 1;
    }
    var x = (x1 - x2) / 2;
    var y = (y1 - y2) / 2;
    var h = (x * x) / (rx * rx) + (y * y) / (ry * ry);
    if (h > 1) {
      h = Math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }
    var rx2 = rx * rx;
    var ry2 = ry * ry;
    var k =
      (large_arc_flag === sweep_flag ? -1 : 1) *
      Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
    cx = (k * rx * y) / ry + (x1 + x2) / 2;
    cy = (k * -ry * x) / rx + (y1 + y2) / 2;
    f1 = Math.asin(((y1 - cy) / ry).toFixed(9));
    f2 = Math.asin(((y2 - cy) / ry).toFixed(9));
    f1 = x1 < cx ? Math.PI - f1 : f1;
    f2 = x2 < cx ? Math.PI - f2 : f2;
    f1 < 0 && (f1 = Math.PI * 2 + f1);
    f2 < 0 && (f2 = Math.PI * 2 + f2);
    if (sweep_flag && f1 > f2) {
      f1 = f1 - Math.PI * 2;
    }
    if (!sweep_flag && f2 > f1) {
      f2 = f2 - Math.PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }
  var df = f2 - f1;
  if (Math.abs(df) > _120) {
    var f2old = f2;
    var x2old = x2;
    var y2old = y2;
    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * Math.cos(f2);
    y2 = cy + ry * Math.sin(f2);
    res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }
  df = f2 - f1;
  var c1 = Math.cos(f1);
  var s1 = Math.sin(f1);
  var c2 = Math.cos(f2);
  var s2 = Math.sin(f2);
  var t = Math.tan(df / 4);
  var hx = (4 / 3) * rx * t;
  var hy = (4 / 3) * ry * t;
  var m1 = [x1, y1];
  var m2 = [x1 + hx * s1, y1 - hy * c1];
  var m3 = [x2 + hx * s2, y2 - hy * c2];
  var m4 = [x2, y2];
  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];
  if (recursive) {
    return [m2, m3, m4].concat(res);
  }
  res = [m2, m3, m4]
    .concat(res)
    .join()
    .split(',');
  var newres = [];
  for (var i = 0, ii = res.length; i < ii; i++) {
    newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
  }
  return newres;
};
var pathToCurve = function(path, path2) {
  var p = pathToAbsolute(path);
  var p2 = path2 && pathToAbsolute(path2);
  var attrs = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  };
  var attrs2 = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  };
  var pcoms1 = [];
  var pcoms2 = [];
  var pfirst = '';
  var pcom = '';
  var ii;
  var processPath = function(path3, d, pcom2) {
    var nx;
    var ny;
    if (!path3) {
      return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
    }
    !(
      path3[0] in
      {
        T: 1,
        Q: 1
      }
    ) && (d.qx = d.qy = null);
    switch (path3[0]) {
      case 'M':
        d.X = path3[1];
        d.Y = path3[2];
        break;
      case 'A':
        path3 = ['C'].concat(a2c.apply(0, [d.x, d.y].concat(path3.slice(1))));
        break;
      case 'S':
        if (pcom2 === 'C' || pcom2 === 'S') {
          nx = d.x * 2 - d.bx;
          ny = d.y * 2 - d.by;
        } else {
          nx = d.x;
          ny = d.y;
        }
        path3 = ['C', nx, ny].concat(path3.slice(1));
        break;
      case 'T':
        if (pcom2 === 'Q' || pcom2 === 'T') {
          d.qx = d.x * 2 - d.qx;
          d.qy = d.y * 2 - d.qy;
        } else {
          d.qx = d.x;
          d.qy = d.y;
        }
        path3 = ['C'].concat(q2c(d.x, d.y, d.qx, d.qy, path3[1], path3[2]));
        break;
      case 'Q':
        d.qx = path3[1];
        d.qy = path3[2];
        path3 = ['C'].concat(q2c(d.x, d.y, path3[1], path3[2], path3[3], path3[4]));
        break;
      case 'L':
        path3 = ['C'].concat(l2c(d.x, d.y, path3[1], path3[2]));
        break;
      case 'H':
        path3 = ['C'].concat(l2c(d.x, d.y, path3[1], d.y));
        break;
      case 'V':
        path3 = ['C'].concat(l2c(d.x, d.y, d.x, path3[1]));
        break;
      case 'Z':
        path3 = ['C'].concat(l2c(d.x, d.y, d.X, d.Y));
        break;
      default:
        break;
    }
    return path3;
  };
  var fixArc = function(pp, i2) {
    if (pp[i2].length > 7) {
      pp[i2].shift();
      var pi = pp[i2];
      while (pi.length) {
        pcoms1[i2] = 'A';
        p2 && (pcoms2[i2] = 'A');
        pp.splice(i2++, 0, ['C'].concat(pi.splice(0, 6)));
      }
      pp.splice(i2, 1);
      ii = Math.max(p.length, (p2 && p2.length) || 0);
    }
  };
  var fixM = function(path1, path22, a1, a2, i2) {
    if (path1 && path22 && path1[i2][0] === 'M' && path22[i2][0] !== 'M') {
      path22.splice(i2, 0, ['M', a2.x, a2.y]);
      a1.bx = 0;
      a1.by = 0;
      a1.x = path1[i2][1];
      a1.y = path1[i2][2];
      ii = Math.max(p.length, (p2 && p2.length) || 0);
    }
  };
  ii = Math.max(p.length, (p2 && p2.length) || 0);
  for (var i = 0; i < ii; i++) {
    p[i] && (pfirst = p[i][0]);
    if (pfirst !== 'C') {
      pcoms1[i] = pfirst;
      i && (pcom = pcoms1[i - 1]);
    }
    p[i] = processPath(p[i], attrs, pcom);
    if (pcoms1[i] !== 'A' && pfirst === 'C') pcoms1[i] = 'C';
    fixArc(p, i);
    if (p2) {
      p2[i] && (pfirst = p2[i][0]);
      if (pfirst !== 'C') {
        pcoms2[i] = pfirst;
        i && (pcom = pcoms2[i - 1]);
      }
      p2[i] = processPath(p2[i], attrs2, pcom);
      if (pcoms2[i] !== 'A' && pfirst === 'C') {
        pcoms2[i] = 'C';
      }
      fixArc(p2, i);
    }
    fixM(p, p2, attrs, attrs2, i);
    fixM(p2, p, attrs2, attrs, i);
    var seg = p[i];
    var seg2 = p2 && p2[i];
    var seglen = seg.length;
    var seg2len = p2 && seg2.length;
    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
    attrs2.bx = p2 && (parseFloat(seg2[seg2len - 4]) || attrs2.x);
    attrs2.by = p2 && (parseFloat(seg2[seg2len - 3]) || attrs2.y);
    attrs2.x = p2 && seg2[seg2len - 2];
    attrs2.y = p2 && seg2[seg2len - 1];
  }
  return p2 ? [p, p2] : p;
};
var p2s = /,?([a-z]),?/gi;
var parsePathArray = function(path) {
  return path.join(',').replace(p2s, '$1');
};
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
var rectPath = function(x, y, w, h, r) {
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
  var res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
  res.parsePathArray = parsePathArray;
  return res;
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
  if (!isArray(p1x)) {
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
            res += 1;
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
var intersection = function(path1, path2) {
  return interPathHelper(path1, path2);
};
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
var splitSegment = function(start, end, count) {
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
};
var fillPath = function(source, target) {
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
};
var isEqual = function(obj1, obj2) {
  if (obj1.length !== obj2.length) {
    return false;
  }
  var result = true;
  each(obj1, function(item, i) {
    if (item !== obj2[i]) {
      result = false;
      return false;
    }
  });
  return result;
};
function getMinDiff(del, add, modify) {
  var type = null;
  var min3 = modify;
  if (add < min3) {
    min3 = add;
    type = 'add';
  }
  if (del < min3) {
    min3 = del;
    type = 'del';
  }
  return {
    type,
    min: min3
  };
}
var levenshteinDistance = function(source, target) {
  var sourceLen = source.length;
  var targetLen = target.length;
  var sourceSegment;
  var targetSegment;
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
var fillPathByDiff = function(source, target) {
  var diffMatrix = levenshteinDistance(source, target);
  var sourceLen = source.length;
  var targetLen = target.length;
  var changes = [];
  var index = 1;
  var minPos = 1;
  if (diffMatrix[sourceLen][targetLen].min !== sourceLen) {
    for (var i = 1; i <= sourceLen; i++) {
      var min3 = diffMatrix[i][i].min;
      minPos = i;
      for (var j = index; j <= targetLen; j++) {
        if (diffMatrix[i][j].min < min3) {
          min3 = diffMatrix[i][j].min;
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
  var diff = targetLen - sourceLen;
  if (sourceLen < targetLen) {
    for (var i = 0; i < diff; i++) {
      if (source[sourceLen - 1][0] === 'z' || source[sourceLen - 1][0] === 'Z') {
        source.splice(sourceLen - 2, 0, source[sourceLen - 2]);
      } else {
        source.push(source[sourceLen - 1]);
      }
      sourceLen += 1;
    }
  }
  return source;
};
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
var formatPath = function(fromPath, toPath) {
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
};

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/event/graph-event.js
var GraphEvent = (function() {
  function GraphEvent2(type, event) {
    this.bubbles = true;
    this.target = null;
    this.currentTarget = null;
    this.delegateTarget = null;
    this.delegateObject = null;
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.shape = null;
    this.fromShape = null;
    this.toShape = null;
    this.propagationPath = [];
    this.type = type;
    this.name = type;
    this.originalEvent = event;
    this.timeStamp = event.timeStamp;
  }
  GraphEvent2.prototype.preventDefault = function() {
    this.defaultPrevented = true;
    if (this.originalEvent.preventDefault) {
      this.originalEvent.preventDefault();
    }
  };
  GraphEvent2.prototype.stopPropagation = function() {
    this.propagationStopped = true;
  };
  GraphEvent2.prototype.toString = function() {
    var type = this.type;
    return '[Event (type=' + type + ')]';
  };
  GraphEvent2.prototype.save = function() {};
  GraphEvent2.prototype.restore = function() {};
  return GraphEvent2;
})();
var graph_event_default = GraphEvent;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/base.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import EE from '/cdn/v99/@antv/event-emitter@0.1.3/es2022/event-emitter.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/util.js
import {
  isNil,
  isFunction,
  isString,
  isObject,
  isArray as isArray2,
  mix,
  each as each2,
  upperFirst
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function removeFromArray(arr, obj) {
  var index = arr.indexOf(obj);
  if (index !== -1) {
    arr.splice(index, 1);
  }
}
var isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';
function isParent(container, shape) {
  if (container.isCanvas()) {
    return true;
  }
  var parent = shape.getParent();
  var isParent2 = false;
  while (parent) {
    if (parent === container) {
      isParent2 = true;
      break;
    }
    parent = parent.getParent();
  }
  return isParent2;
}
function isAllowCapture(element) {
  return element.cfg.visible && element.cfg.capture;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/base.js
var Base = (function(_super) {
  __extends(Base2, _super);
  function Base2(cfg) {
    var _this = _super.call(this) || this;
    _this.destroyed = false;
    var defaultCfg = _this.getDefaultCfg();
    _this.cfg = mix(defaultCfg, cfg);
    return _this;
  }
  Base2.prototype.getDefaultCfg = function() {
    return {};
  };
  Base2.prototype.get = function(name) {
    return this.cfg[name];
  };
  Base2.prototype.set = function(name, value) {
    this.cfg[name] = value;
  };
  Base2.prototype.destroy = function() {
    this.cfg = {
      destroyed: true
    };
    this.off();
    this.destroyed = true;
  };
  return Base2;
})(EE);
var base_default = Base;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/canvas.js
import { __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { detect } from '/cdn/v99/detect-browser@5.3.0/es2022/detect-browser.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/container.js
import { __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { max, min } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/element.js
import { __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each3,
  isEqual as isEqual2,
  isFunction as isFunction2,
  isNumber,
  isObject as isObject2,
  isArray as isArray3,
  noop,
  mix as mix2,
  upperFirst as upperFirst2,
  uniqueId
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import { ext } from '/cdn/v99/@antv/matrix-util@3.1.0-beta.3/es2022/matrix-util.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/matrix.js
function multiplyMatrix(a, b) {
  var out = [];
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a10 = a[3];
  var a11 = a[4];
  var a12 = a[5];
  var a20 = a[6];
  var a21 = a[7];
  var a22 = a[8];
  var b00 = b[0];
  var b01 = b[1];
  var b02 = b[2];
  var b10 = b[3];
  var b11 = b[4];
  var b12 = b[5];
  var b20 = b[6];
  var b21 = b[7];
  var b22 = b[8];
  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;
  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;
  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}
function multiplyVec2(m, v) {
  var out = [];
  var x = v[0];
  var y = v[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
}
function invert(a) {
  var out = [];
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a10 = a[3];
  var a11 = a[4];
  var a12 = a[5];
  var a20 = a[6];
  var a21 = a[7];
  var a22 = a[8];
  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;
  var det = a00 * b01 + a01 * b11 + a02 * b21;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/element.js
var transform = ext.transform;
var MATRIX = 'matrix';
var CLONE_CFGS = ['zIndex', 'capture', 'visible', 'type'];
var RESERVED_PORPS = ['repeat'];
var DELEGATION_SPLIT = ':';
var WILDCARD = '*';
function _cloneArrayAttr(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    if (isArray3(arr[i])) {
      result.push([].concat(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}
function getFormatFromAttrs(toAttrs, shape) {
  var fromAttrs = {};
  var attrs = shape.attrs;
  for (var k in toAttrs) {
    fromAttrs[k] = attrs[k];
  }
  return fromAttrs;
}
function getFormatToAttrs(props, shape) {
  var toAttrs = {};
  var attrs = shape.attr();
  each3(props, function(v, k) {
    if (RESERVED_PORPS.indexOf(k) === -1 && !isEqual2(attrs[k], v)) {
      toAttrs[k] = v;
    }
  });
  return toAttrs;
}
function checkExistedAttrs(animations, animation) {
  if (animation.onFrame) {
    return animations;
  }
  var startTime = animation.startTime,
    delay = animation.delay,
    duration = animation.duration;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  each3(animations, function(item) {
    if (startTime + delay < item.startTime + item.delay + item.duration && duration > item.delay) {
      each3(animation.toAttrs, function(v, k) {
        if (hasOwnProperty.call(item.toAttrs, k)) {
          delete item.toAttrs[k];
          delete item.fromAttrs[k];
        }
      });
    }
  });
  return animations;
}
var Element = (function(_super) {
  __extends2(Element2, _super);
  function Element2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.attrs = {};
    var attrs = _this.getDefaultAttrs();
    mix2(attrs, cfg.attrs);
    _this.attrs = attrs;
    _this.initAttrs(attrs);
    _this.initAnimate();
    return _this;
  }
  Element2.prototype.getDefaultCfg = function() {
    return {
      visible: true,
      capture: true,
      zIndex: 0
    };
  };
  Element2.prototype.getDefaultAttrs = function() {
    return {
      matrix: this.getDefaultMatrix(),
      opacity: 1
    };
  };
  Element2.prototype.onCanvasChange = function(changeType) {};
  Element2.prototype.initAttrs = function(attrs) {};
  Element2.prototype.initAnimate = function() {
    this.set('animable', true);
    this.set('animating', false);
  };
  Element2.prototype.isGroup = function() {
    return false;
  };
  Element2.prototype.getParent = function() {
    return this.get('parent');
  };
  Element2.prototype.getCanvas = function() {
    return this.get('canvas');
  };
  Element2.prototype.attr = function() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var name = args[0],
      value = args[1];
    if (!name) return this.attrs;
    if (isObject2(name)) {
      for (var k in name) {
        this.setAttr(k, name[k]);
      }
      this.afterAttrsChange(name);
      return this;
    }
    if (args.length === 2) {
      this.setAttr(name, value);
      this.afterAttrsChange(((_a = {}), (_a[name] = value), _a));
      return this;
    }
    return this.attrs[name];
  };
  Element2.prototype.isClipped = function(refX, refY) {
    var clip = this.getClip();
    return clip && !clip.isHit(refX, refY);
  };
  Element2.prototype.setAttr = function(name, value) {
    var originValue = this.attrs[name];
    if (originValue !== value) {
      this.attrs[name] = value;
      this.onAttrChange(name, value, originValue);
    }
  };
  Element2.prototype.onAttrChange = function(name, value, originValue) {
    if (name === 'matrix') {
      this.set('totalMatrix', null);
    }
  };
  Element2.prototype.afterAttrsChange = function(targetAttrs) {
    if (this.cfg.isClipShape) {
      var applyTo = this.cfg.applyTo;
      if (applyTo) {
        applyTo.onCanvasChange('clip');
      }
    } else {
      this.onCanvasChange('attr');
    }
  };
  Element2.prototype.show = function() {
    this.set('visible', true);
    this.onCanvasChange('show');
    return this;
  };
  Element2.prototype.hide = function() {
    this.set('visible', false);
    this.onCanvasChange('hide');
    return this;
  };
  Element2.prototype.setZIndex = function(zIndex) {
    this.set('zIndex', zIndex);
    var parent = this.getParent();
    if (parent) {
      parent.sort();
    }
    return this;
  };
  Element2.prototype.toFront = function() {
    var parent = this.getParent();
    if (!parent) {
      return;
    }
    var children = parent.getChildren();
    var el = this.get('el');
    var index = children.indexOf(this);
    children.splice(index, 1);
    children.push(this);
    this.onCanvasChange('zIndex');
  };
  Element2.prototype.toBack = function() {
    var parent = this.getParent();
    if (!parent) {
      return;
    }
    var children = parent.getChildren();
    var el = this.get('el');
    var index = children.indexOf(this);
    children.splice(index, 1);
    children.unshift(this);
    this.onCanvasChange('zIndex');
  };
  Element2.prototype.remove = function(destroy) {
    if (destroy === void 0) {
      destroy = true;
    }
    var parent = this.getParent();
    if (parent) {
      removeFromArray(parent.getChildren(), this);
      if (!parent.get('clearing')) {
        this.onCanvasChange('remove');
      }
    } else {
      this.onCanvasChange('remove');
    }
    if (destroy) {
      this.destroy();
    }
  };
  Element2.prototype.resetMatrix = function() {
    this.attr(MATRIX, this.getDefaultMatrix());
    this.onCanvasChange('matrix');
  };
  Element2.prototype.getMatrix = function() {
    return this.attr(MATRIX);
  };
  Element2.prototype.setMatrix = function(m) {
    this.attr(MATRIX, m);
    this.onCanvasChange('matrix');
  };
  Element2.prototype.getTotalMatrix = function() {
    var totalMatrix = this.cfg.totalMatrix;
    if (!totalMatrix) {
      var currentMatrix = this.attr('matrix');
      var parentMatrix = this.cfg.parentMatrix;
      if (parentMatrix && currentMatrix) {
        totalMatrix = multiplyMatrix(parentMatrix, currentMatrix);
      } else {
        totalMatrix = currentMatrix || parentMatrix;
      }
      this.set('totalMatrix', totalMatrix);
    }
    return totalMatrix;
  };
  Element2.prototype.applyMatrix = function(matrix) {
    var currentMatrix = this.attr('matrix');
    var totalMatrix = null;
    if (matrix && currentMatrix) {
      totalMatrix = multiplyMatrix(matrix, currentMatrix);
    } else {
      totalMatrix = currentMatrix || matrix;
    }
    this.set('totalMatrix', totalMatrix);
    this.set('parentMatrix', matrix);
  };
  Element2.prototype.getDefaultMatrix = function() {
    return null;
  };
  Element2.prototype.applyToMatrix = function(v) {
    var matrix = this.attr('matrix');
    if (matrix) {
      return multiplyVec2(matrix, v);
    }
    return v;
  };
  Element2.prototype.invertFromMatrix = function(v) {
    var matrix = this.attr('matrix');
    if (matrix) {
      var invertMatrix = invert(matrix);
      if (invertMatrix) {
        return multiplyVec2(invertMatrix, v);
      }
    }
    return v;
  };
  Element2.prototype.setClip = function(clipCfg) {
    var canvas = this.getCanvas();
    var clipShape = null;
    if (clipCfg) {
      var ShapeBase = this.getShapeBase();
      var shapeType = upperFirst2(clipCfg.type);
      var Cons = ShapeBase[shapeType];
      if (Cons) {
        clipShape = new Cons({
          type: clipCfg.type,
          isClipShape: true,
          applyTo: this,
          attrs: clipCfg.attrs,
          canvas
        });
      }
    }
    this.set('clipShape', clipShape);
    this.onCanvasChange('clip');
    return clipShape;
  };
  Element2.prototype.getClip = function() {
    var clipShape = this.cfg.clipShape;
    if (!clipShape) {
      return null;
    }
    return clipShape;
  };
  Element2.prototype.clone = function() {
    var _this = this;
    var originAttrs = this.attrs;
    var attrs = {};
    each3(originAttrs, function(i, k) {
      if (isArray3(originAttrs[k])) {
        attrs[k] = _cloneArrayAttr(originAttrs[k]);
      } else {
        attrs[k] = originAttrs[k];
      }
    });
    var cons = this.constructor;
    var clone = new cons({
      attrs
    });
    each3(CLONE_CFGS, function(cfgName) {
      clone.set(cfgName, _this.get(cfgName));
    });
    return clone;
  };
  Element2.prototype.destroy = function() {
    var destroyed = this.destroyed;
    if (destroyed) {
      return;
    }
    this.attrs = {};
    _super.prototype.destroy.call(this);
  };
  Element2.prototype.isAnimatePaused = function() {
    return this.get('_pause').isPaused;
  };
  Element2.prototype.animate = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (!this.get('timeline') && !this.get('canvas')) {
      return;
    }
    this.set('animating', true);
    var timeline = this.get('timeline');
    if (!timeline) {
      timeline = this.get('canvas').get('timeline');
      this.set('timeline', timeline);
    }
    var animations = this.get('animations') || [];
    if (!timeline.timer) {
      timeline.initTimer();
    }
    var toAttrs = args[0],
      duration = args[1],
      _a = args[2],
      easing = _a === void 0 ? 'easeLinear' : _a,
      _b = args[3],
      callback = _b === void 0 ? noop : _b,
      _c = args[4],
      delay = _c === void 0 ? 0 : _c;
    var onFrame;
    var repeat;
    var pauseCallback;
    var resumeCallback;
    var animateCfg;
    if (isFunction2(toAttrs)) {
      onFrame = toAttrs;
      toAttrs = {};
    } else if (isObject2(toAttrs) && toAttrs.onFrame) {
      onFrame = toAttrs.onFrame;
      repeat = toAttrs.repeat;
    }
    if (isObject2(duration)) {
      animateCfg = duration;
      duration = animateCfg.duration;
      easing = animateCfg.easing || 'easeLinear';
      delay = animateCfg.delay || 0;
      repeat = animateCfg.repeat || repeat || false;
      callback = animateCfg.callback || noop;
      pauseCallback = animateCfg.pauseCallback || noop;
      resumeCallback = animateCfg.resumeCallback || noop;
    } else {
      if (isNumber(callback)) {
        delay = callback;
        callback = null;
      }
      if (isFunction2(easing)) {
        callback = easing;
        easing = 'easeLinear';
      } else {
        easing = easing || 'easeLinear';
      }
    }
    var formatToAttrs = getFormatToAttrs(toAttrs, this);
    var animation = {
      fromAttrs: getFormatFromAttrs(formatToAttrs, this),
      toAttrs: formatToAttrs,
      duration,
      easing,
      repeat,
      callback,
      pauseCallback,
      resumeCallback,
      delay,
      startTime: timeline.getTime(),
      id: uniqueId(),
      onFrame,
      pathFormatted: false
    };
    if (animations.length > 0) {
      animations = checkExistedAttrs(animations, animation);
    } else {
      timeline.addAnimator(this);
    }
    animations.push(animation);
    this.set('animations', animations);
    this.set('_pause', {
      isPaused: false
    });
  };
  Element2.prototype.stopAnimate = function(toEnd) {
    var _this = this;
    if (toEnd === void 0) {
      toEnd = true;
    }
    var animations = this.get('animations');
    each3(animations, function(animation) {
      if (toEnd) {
        if (animation.onFrame) {
          _this.attr(animation.onFrame(1));
        } else {
          _this.attr(animation.toAttrs);
        }
      }
      if (animation.callback) {
        animation.callback();
      }
    });
    this.set('animating', false);
    this.set('animations', []);
  };
  Element2.prototype.pauseAnimate = function() {
    var timeline = this.get('timeline');
    var animations = this.get('animations');
    var pauseTime = timeline.getTime();
    each3(animations, function(animation) {
      animation._paused = true;
      animation._pauseTime = pauseTime;
      if (animation.pauseCallback) {
        animation.pauseCallback();
      }
    });
    this.set('_pause', {
      isPaused: true,
      pauseTime
    });
    return this;
  };
  Element2.prototype.resumeAnimate = function() {
    var timeline = this.get('timeline');
    var current = timeline.getTime();
    var animations = this.get('animations');
    var pauseTime = this.get('_pause').pauseTime;
    each3(animations, function(animation) {
      animation.startTime = animation.startTime + (current - pauseTime);
      animation._paused = false;
      animation._pauseTime = null;
      if (animation.resumeCallback) {
        animation.resumeCallback();
      }
    });
    this.set('_pause', {
      isPaused: false
    });
    this.set('animations', animations);
    return this;
  };
  Element2.prototype.emitDelegation = function(type, eventObj) {
    var _this = this;
    var paths = eventObj.propagationPath;
    var events = this.getEvents();
    var relativeShape;
    if (type === 'mouseenter') {
      relativeShape = eventObj.fromShape;
    } else if (type === 'mouseleave') {
      relativeShape = eventObj.toShape;
    }
    var _loop_1 = function(i2) {
      var element = paths[i2];
      var name_1 = element.get('name');
      if (name_1) {
        if (
          (element.isGroup() || (element.isCanvas && element.isCanvas())) &&
          relativeShape &&
          isParent(element, relativeShape)
        ) {
          return 'break';
        }
        if (isArray3(name_1)) {
          each3(name_1, function(subName) {
            _this.emitDelegateEvent(element, subName, eventObj);
          });
        } else {
          this_1.emitDelegateEvent(element, name_1, eventObj);
        }
      }
    };
    var this_1 = this;
    for (var i = 0; i < paths.length; i++) {
      var state_1 = _loop_1(i);
      if (state_1 === 'break') break;
    }
  };
  Element2.prototype.emitDelegateEvent = function(element, name, eventObj) {
    var events = this.getEvents();
    var eventName = name + DELEGATION_SPLIT + eventObj.type;
    if (events[eventName] || events[WILDCARD]) {
      eventObj.name = eventName;
      eventObj.currentTarget = element;
      eventObj.delegateTarget = this;
      eventObj.delegateObject = element.get('delegateObject');
      this.emit(eventName, eventObj);
    }
  };
  Element2.prototype.translate = function(translateX, translateY) {
    if (translateX === void 0) {
      translateX = 0;
    }
    if (translateY === void 0) {
      translateY = 0;
    }
    var matrix = this.getMatrix();
    var newMatrix = transform(matrix, [['t', translateX, translateY]]);
    this.setMatrix(newMatrix);
    return this;
  };
  Element2.prototype.move = function(targetX, targetY) {
    var x = this.attr('x') || 0;
    var y = this.attr('y') || 0;
    this.translate(targetX - x, targetY - y);
    return this;
  };
  Element2.prototype.moveTo = function(targetX, targetY) {
    return this.move(targetX, targetY);
  };
  Element2.prototype.scale = function(ratioX, ratioY) {
    var matrix = this.getMatrix();
    var newMatrix = transform(matrix, [['s', ratioX, ratioY || ratioX]]);
    this.setMatrix(newMatrix);
    return this;
  };
  Element2.prototype.rotate = function(radian) {
    var matrix = this.getMatrix();
    var newMatrix = transform(matrix, [['r', radian]]);
    this.setMatrix(newMatrix);
    return this;
  };
  Element2.prototype.rotateAtStart = function(rotate) {
    var _a = this.attr(),
      x = _a.x,
      y = _a.y;
    var matrix = this.getMatrix();
    var newMatrix = transform(matrix, [
      ['t', -x, -y],
      ['r', rotate],
      ['t', x, y]
    ]);
    this.setMatrix(newMatrix);
    return this;
  };
  Element2.prototype.rotateAtPoint = function(x, y, rotate) {
    var matrix = this.getMatrix();
    var newMatrix = transform(matrix, [
      ['t', -x, -y],
      ['r', rotate],
      ['t', x, y]
    ]);
    this.setMatrix(newMatrix);
    return this;
  };
  return Element2;
})(base_default);
var element_default = Element;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/container.js
var SHAPE_MAP = {};
var INDEX = '_INDEX';
function setCanvas(element, canvas) {
  element.set('canvas', canvas);
  if (element.isGroup()) {
    var children = element.get('children');
    if (children.length) {
      children.forEach(function(child) {
        setCanvas(child, canvas);
      });
    }
  }
}
function setTimeline(element, timeline) {
  element.set('timeline', timeline);
  if (element.isGroup()) {
    var children = element.get('children');
    if (children.length) {
      children.forEach(function(child) {
        setTimeline(child, timeline);
      });
    }
  }
}
function removeChild(container, element, destroy) {
  if (destroy === void 0) {
    destroy = true;
  }
  if (destroy) {
    element.destroy();
  } else {
    element.set('parent', null);
    element.set('canvas', null);
  }
  removeFromArray(container.getChildren(), element);
}
function getComparer(compare) {
  return function(left, right) {
    var result = compare(left, right);
    return result === 0 ? left[INDEX] - right[INDEX] : result;
  };
}
var Container = (function(_super) {
  __extends3(Container2, _super);
  function Container2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Container2.prototype.isCanvas = function() {
    return false;
  };
  Container2.prototype.getBBox = function() {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var xArr = [];
    var yArr = [];
    var children = this.getChildren().filter(function(child) {
      return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
    });
    if (children.length > 0) {
      each2(children, function(child) {
        var box3 = child.getBBox();
        xArr.push(box3.minX, box3.maxX);
        yArr.push(box3.minY, box3.maxY);
      });
      minX = min(xArr);
      maxX = max(xArr);
      minY = min(yArr);
      maxY = max(yArr);
    } else {
      minX = 0;
      maxX = 0;
      minY = 0;
      maxY = 0;
    }
    var box2 = {
      x: minX,
      y: minY,
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
    return box2;
  };
  Container2.prototype.getCanvasBBox = function() {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    var xArr = [];
    var yArr = [];
    var children = this.getChildren().filter(function(child) {
      return child.get('visible') && (!child.isGroup() || (child.isGroup() && child.getChildren().length > 0));
    });
    if (children.length > 0) {
      each2(children, function(child) {
        var box3 = child.getCanvasBBox();
        xArr.push(box3.minX, box3.maxX);
        yArr.push(box3.minY, box3.maxY);
      });
      minX = min(xArr);
      maxX = max(xArr);
      minY = min(yArr);
      maxY = max(yArr);
    } else {
      minX = 0;
      maxX = 0;
      minY = 0;
      maxY = 0;
    }
    var box2 = {
      x: minX,
      y: minY,
      minX,
      minY,
      maxX,
      maxY,
      width: maxX - minX,
      height: maxY - minY
    };
    return box2;
  };
  Container2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    cfg['children'] = [];
    return cfg;
  };
  Container2.prototype.onAttrChange = function(name, value, originValue) {
    _super.prototype.onAttrChange.call(this, name, value, originValue);
    if (name === 'matrix') {
      var totalMatrix = this.getTotalMatrix();
      this._applyChildrenMarix(totalMatrix);
    }
  };
  Container2.prototype.applyMatrix = function(matrix) {
    var preTotalMatrix = this.getTotalMatrix();
    _super.prototype.applyMatrix.call(this, matrix);
    var totalMatrix = this.getTotalMatrix();
    if (totalMatrix === preTotalMatrix) {
      return;
    }
    this._applyChildrenMarix(totalMatrix);
  };
  Container2.prototype._applyChildrenMarix = function(totalMatrix) {
    var children = this.getChildren();
    each2(children, function(child) {
      child.applyMatrix(totalMatrix);
    });
  };
  Container2.prototype.addShape = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var type = args[0];
    var cfg = args[1];
    if (isObject(type)) {
      cfg = type;
    } else {
      cfg['type'] = type;
    }
    var shapeType = SHAPE_MAP[cfg.type];
    if (!shapeType) {
      shapeType = upperFirst(cfg.type);
      SHAPE_MAP[cfg.type] = shapeType;
    }
    var ShapeBase = this.getShapeBase();
    var shape = new ShapeBase[shapeType](cfg);
    this.add(shape);
    return shape;
  };
  Container2.prototype.addGroup = function() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var groupClass = args[0],
      cfg = args[1];
    var group;
    if (isFunction(groupClass)) {
      if (cfg) {
        group = new groupClass(cfg);
      } else {
        group = new groupClass({
          parent: this
        });
      }
    } else {
      var tmpCfg = groupClass || {};
      var TmpGroupClass = this.getGroupBase();
      group = new TmpGroupClass(tmpCfg);
    }
    this.add(group);
    return group;
  };
  Container2.prototype.getCanvas = function() {
    var canvas;
    if (this.isCanvas()) {
      canvas = this;
    } else {
      canvas = this.get('canvas');
    }
    return canvas;
  };
  Container2.prototype.getShape = function(x, y, ev) {
    if (!isAllowCapture(this)) {
      return null;
    }
    var children = this.getChildren();
    var shape;
    if (!this.isCanvas()) {
      var v = [x, y, 1];
      v = this.invertFromMatrix(v);
      if (!this.isClipped(v[0], v[1])) {
        shape = this._findShape(children, v[0], v[1], ev);
      }
    } else {
      shape = this._findShape(children, x, y, ev);
    }
    return shape;
  };
  Container2.prototype._findShape = function(children, x, y, ev) {
    var shape = null;
    for (var i = children.length - 1; i >= 0; i--) {
      var child = children[i];
      if (isAllowCapture(child)) {
        if (child.isGroup()) {
          shape = child.getShape(x, y, ev);
        } else if (child.isHit(x, y)) {
          shape = child;
        }
      }
      if (shape) {
        break;
      }
    }
    return shape;
  };
  Container2.prototype.add = function(element) {
    var canvas = this.getCanvas();
    var children = this.getChildren();
    var timeline = this.get('timeline');
    var preParent = element.getParent();
    if (preParent) {
      removeChild(preParent, element, false);
    }
    element.set('parent', this);
    if (canvas) {
      setCanvas(element, canvas);
    }
    if (timeline) {
      setTimeline(element, timeline);
    }
    children.push(element);
    element.onCanvasChange('add');
    this._applyElementMatrix(element);
  };
  Container2.prototype._applyElementMatrix = function(element) {
    var totalMatrix = this.getTotalMatrix();
    if (totalMatrix) {
      element.applyMatrix(totalMatrix);
    }
  };
  Container2.prototype.getChildren = function() {
    return this.get('children');
  };
  Container2.prototype.sort = function() {
    var children = this.getChildren();
    each2(children, function(child, index) {
      child[INDEX] = index;
      return child;
    });
    children.sort(
      getComparer(function(obj1, obj2) {
        return obj1.get('zIndex') - obj2.get('zIndex');
      })
    );
    this.onCanvasChange('sort');
  };
  Container2.prototype.clear = function() {
    this.set('clearing', true);
    if (this.destroyed) {
      return;
    }
    var children = this.getChildren();
    for (var i = children.length - 1; i >= 0; i--) {
      children[i].destroy();
    }
    this.set('children', []);
    this.onCanvasChange('clear');
    this.set('clearing', false);
  };
  Container2.prototype.destroy = function() {
    if (this.get('destroyed')) {
      return;
    }
    this.clear();
    _super.prototype.destroy.call(this);
  };
  Container2.prototype.getFirst = function() {
    return this.getChildByIndex(0);
  };
  Container2.prototype.getLast = function() {
    var children = this.getChildren();
    return this.getChildByIndex(children.length - 1);
  };
  Container2.prototype.getChildByIndex = function(index) {
    var children = this.getChildren();
    return children[index];
  };
  Container2.prototype.getCount = function() {
    var children = this.getChildren();
    return children.length;
  };
  Container2.prototype.contain = function(element) {
    var children = this.getChildren();
    return children.indexOf(element) > -1;
  };
  Container2.prototype.removeChild = function(element, destroy) {
    if (destroy === void 0) {
      destroy = true;
    }
    if (this.contain(element)) {
      element.remove(destroy);
    }
  };
  Container2.prototype.findAll = function(fn) {
    var rst = [];
    var children = this.getChildren();
    each2(children, function(element) {
      if (fn(element)) {
        rst.push(element);
      }
      if (element.isGroup()) {
        rst = rst.concat(element.findAll(fn));
      }
    });
    return rst;
  };
  Container2.prototype.find = function(fn) {
    var rst = null;
    var children = this.getChildren();
    each2(children, function(element) {
      if (fn(element)) {
        rst = element;
      } else if (element.isGroup()) {
        rst = element.find(fn);
      }
      if (rst) {
        return false;
      }
    });
    return rst;
  };
  Container2.prototype.findById = function(id) {
    return this.find(function(element) {
      return element.get('id') === id;
    });
  };
  Container2.prototype.findByClassName = function(className) {
    return this.find(function(element) {
      return element.get('className') === className;
    });
  };
  Container2.prototype.findAllByName = function(name) {
    return this.findAll(function(element) {
      return element.get('name') === name;
    });
  };
  return Container2;
})(element_default);
var container_default = Container;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/animate/timeline.js
import {
  isEqual as isEqual3,
  isNumber as isNumber2,
  isFunction as isFunction3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import * as d3Timer from '/cdn/v99/d3-timer@1.0.10/es2022/d3-timer.development.js';
import { interpolate, interpolateArray } from '/cdn/v99/d3-interpolate@1.4.0/es2022/d3-interpolate.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/animate/register.js
import * as d3Ease from '/cdn/v99/d3-ease@1.0.7/es2022/d3-ease.development.js';
var EASING_MAP = {};
function getEasing(type) {
  return EASING_MAP[type.toLowerCase()] || d3Ease[type];
}
function registerEasing(type, easeFn) {
  EASING_MAP[type.toLowerCase()] = easeFn;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/color.js
var isColorProp = function(prop) {
  return ['fill', 'stroke', 'fillStyle', 'strokeStyle'].includes(prop);
};
var isGradientColor = function(val) {
  return /^[r,R,L,l]{1}[\s]*\(/.test(val);
};

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/animate/timeline.js
var IDENTITY_MATRIX = [1, 0, 0, 0, 1, 0, 0, 0, 1];
function _update(shape, animation, ratio) {
  var cProps = {};
  var fromAttrs = animation.fromAttrs,
    toAttrs = animation.toAttrs;
  if (shape.destroyed) {
    return;
  }
  var interf;
  for (var k in toAttrs) {
    if (!isEqual3(fromAttrs[k], toAttrs[k])) {
      if (k === 'path') {
        var toPath = toAttrs[k];
        var fromPath = fromAttrs[k];
        if (toPath.length > fromPath.length) {
          toPath = parsePathString(toAttrs[k]);
          fromPath = parsePathString(fromAttrs[k]);
          fromPath = fillPathByDiff(fromPath, toPath);
          fromPath = formatPath(fromPath, toPath);
          animation.fromAttrs.path = fromPath;
          animation.toAttrs.path = toPath;
        } else if (!animation.pathFormatted) {
          toPath = parsePathString(toAttrs[k]);
          fromPath = parsePathString(fromAttrs[k]);
          fromPath = formatPath(fromPath, toPath);
          animation.fromAttrs.path = fromPath;
          animation.toAttrs.path = toPath;
          animation.pathFormatted = true;
        }
        cProps[k] = [];
        for (var i = 0; i < toPath.length; i++) {
          var toPathPoint = toPath[i];
          var fromPathPoint = fromPath[i];
          var cPathPoint = [];
          for (var j = 0; j < toPathPoint.length; j++) {
            if (isNumber2(toPathPoint[j]) && fromPathPoint && isNumber2(fromPathPoint[j])) {
              interf = interpolate(fromPathPoint[j], toPathPoint[j]);
              cPathPoint.push(interf(ratio));
            } else {
              cPathPoint.push(toPathPoint[j]);
            }
          }
          cProps[k].push(cPathPoint);
        }
      } else if (k === 'matrix') {
        var matrixFn = interpolateArray(fromAttrs[k] || IDENTITY_MATRIX, toAttrs[k] || IDENTITY_MATRIX);
        var currentMatrix = matrixFn(ratio);
        cProps[k] = currentMatrix;
      } else if (isColorProp(k) && isGradientColor(toAttrs[k])) {
        cProps[k] = toAttrs[k];
      } else if (!isFunction3(toAttrs[k])) {
        interf = interpolate(fromAttrs[k], toAttrs[k]);
        cProps[k] = interf(ratio);
      }
    }
  }
  shape.attr(cProps);
}
function update(shape, animation, elapsed) {
  var startTime = animation.startTime,
    delay = animation.delay;
  if (elapsed < startTime + delay || animation._paused) {
    return false;
  }
  var ratio;
  var duration = animation.duration;
  var easing = animation.easing;
  var easeFn = getEasing(easing);
  elapsed = elapsed - startTime - animation.delay;
  if (animation.repeat) {
    ratio = (elapsed % duration) / duration;
    ratio = easeFn(ratio);
  } else {
    ratio = elapsed / duration;
    if (ratio < 1) {
      ratio = easeFn(ratio);
    } else {
      if (animation.onFrame) {
        shape.attr(animation.onFrame(1));
      } else {
        shape.attr(animation.toAttrs);
      }
      return true;
    }
  }
  if (animation.onFrame) {
    var attrs = animation.onFrame(ratio);
    shape.attr(attrs);
  } else {
    _update(shape, animation, ratio);
  }
  return false;
}
var Timeline = (function() {
  function Timeline2(canvas) {
    this.animators = [];
    this.current = 0;
    this.timer = null;
    this.canvas = canvas;
  }
  Timeline2.prototype.initTimer = function() {
    var _this = this;
    var isFinished = false;
    var shape;
    var animations;
    var animation;
    this.timer = d3Timer.timer(function(elapsed) {
      _this.current = elapsed;
      if (_this.animators.length > 0) {
        for (var i = _this.animators.length - 1; i >= 0; i--) {
          shape = _this.animators[i];
          if (shape.destroyed) {
            _this.removeAnimator(i);
            continue;
          }
          if (!shape.isAnimatePaused()) {
            animations = shape.get('animations');
            for (var j = animations.length - 1; j >= 0; j--) {
              animation = animations[j];
              isFinished = update(shape, animation, elapsed);
              if (isFinished) {
                animations.splice(j, 1);
                isFinished = false;
                if (animation.callback) {
                  animation.callback();
                }
              }
            }
          }
          if (animations.length === 0) {
            _this.removeAnimator(i);
          }
        }
        var autoDraw = _this.canvas.get('autoDraw');
        if (!autoDraw) {
          _this.canvas.draw();
        }
      }
    });
  };
  Timeline2.prototype.addAnimator = function(shape) {
    this.animators.push(shape);
  };
  Timeline2.prototype.removeAnimator = function(index) {
    this.animators.splice(index, 1);
  };
  Timeline2.prototype.isAnimating = function() {
    return !!this.animators.length;
  };
  Timeline2.prototype.stop = function() {
    if (this.timer) {
      this.timer.stop();
    }
  };
  Timeline2.prototype.stopAllAnimations = function(toEnd) {
    if (toEnd === void 0) {
      toEnd = true;
    }
    this.animators.forEach(function(animator) {
      animator.stopAnimate(toEnd);
    });
    this.animators = [];
    this.canvas.draw();
  };
  Timeline2.prototype.getTime = function() {
    return this.current;
  };
  return Timeline2;
})();
var timeline_default = Timeline;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/event/event-contoller.js
var CLICK_OFFSET = 40;
var LEFT_BTN_CODE = 0;
var EVENTS = [
  'mousedown',
  'mouseup',
  'dblclick',
  'mouseout',
  'mouseover',
  'mousemove',
  'mouseleave',
  'mouseenter',
  'touchstart',
  'touchmove',
  'touchend',
  'dragenter',
  'dragover',
  'dragleave',
  'drop',
  'contextmenu',
  'mousewheel'
];
function emitTargetEvent(target, type, eventObj) {
  eventObj.name = type;
  eventObj.target = target;
  eventObj.currentTarget = target;
  eventObj.delegateTarget = target;
  target.emit(type, eventObj);
}
function bubbleEvent(container, type, eventObj) {
  if (eventObj.bubbles) {
    var relativeShape = void 0;
    var isOverEvent = false;
    if (type === 'mouseenter') {
      relativeShape = eventObj.fromShape;
      isOverEvent = true;
    } else if (type === 'mouseleave') {
      isOverEvent = true;
      relativeShape = eventObj.toShape;
    }
    if (container.isCanvas() && isOverEvent) {
      return;
    }
    if (relativeShape && isParent(container, relativeShape)) {
      eventObj.bubbles = false;
      return;
    }
    eventObj.name = type;
    eventObj.currentTarget = container;
    eventObj.delegateTarget = container;
    container.emit(type, eventObj);
  }
}
var EventController = (function() {
  function EventController2(cfg) {
    var _this = this;
    this.draggingShape = null;
    this.dragging = false;
    this.currentShape = null;
    this.mousedownShape = null;
    this.mousedownPoint = null;
    this._eventCallback = function(ev) {
      var type = ev.type;
      _this._triggerEvent(type, ev);
    };
    this._onDocumentMove = function(ev) {
      var canvas = _this.canvas;
      var el = canvas.get('el');
      if (el !== ev.target) {
        if (_this.dragging || _this.currentShape) {
          var pointInfo = _this._getPointInfo(ev);
          if (_this.dragging) {
            _this._emitEvent('drag', ev, pointInfo, _this.draggingShape);
          }
        }
      }
    };
    this._onDocumentMouseUp = function(ev) {
      var canvas = _this.canvas;
      var el = canvas.get('el');
      if (el !== ev.target) {
        if (_this.dragging) {
          var pointInfo = _this._getPointInfo(ev);
          if (_this.draggingShape) {
            _this._emitEvent('drop', ev, pointInfo, null);
          }
          _this._emitEvent('dragend', ev, pointInfo, _this.draggingShape);
          _this._afterDrag(_this.draggingShape, pointInfo, ev);
        }
      }
    };
    this.canvas = cfg.canvas;
  }
  EventController2.prototype.init = function() {
    this._bindEvents();
  };
  EventController2.prototype._bindEvents = function() {
    var _this = this;
    var el = this.canvas.get('el');
    each2(EVENTS, function(eventName) {
      el.addEventListener(eventName, _this._eventCallback);
    });
    if (document) {
      document.addEventListener('mousemove', this._onDocumentMove);
      document.addEventListener('mouseup', this._onDocumentMouseUp);
    }
  };
  EventController2.prototype._clearEvents = function() {
    var _this = this;
    var el = this.canvas.get('el');
    each2(EVENTS, function(eventName) {
      el.removeEventListener(eventName, _this._eventCallback);
    });
    if (document) {
      document.removeEventListener('mousemove', this._onDocumentMove);
      document.removeEventListener('mouseup', this._onDocumentMouseUp);
    }
  };
  EventController2.prototype._getEventObj = function(type, event, point, target, fromShape, toShape) {
    var eventObj = new graph_event_default(type, event);
    eventObj.fromShape = fromShape;
    eventObj.toShape = toShape;
    eventObj.x = point.x;
    eventObj.y = point.y;
    eventObj.clientX = point.clientX;
    eventObj.clientY = point.clientY;
    eventObj.propagationPath.push(target);
    return eventObj;
  };
  EventController2.prototype._getShape = function(point, ev) {
    return this.canvas.getShape(point.x, point.y, ev);
  };
  EventController2.prototype._getPointInfo = function(ev) {
    var canvas = this.canvas;
    var clientPoint = canvas.getClientByEvent(ev);
    var point = canvas.getPointByEvent(ev);
    return {
      x: point.x,
      y: point.y,
      clientX: clientPoint.x,
      clientY: clientPoint.y
    };
  };
  EventController2.prototype._triggerEvent = function(type, ev) {
    var pointInfo = this._getPointInfo(ev);
    var shape = this._getShape(pointInfo, ev);
    var method = this['_on' + type];
    var leaveCanvas = false;
    if (method) {
      method.call(this, pointInfo, shape, ev);
    } else {
      var preShape = this.currentShape;
      if (type === 'mouseenter' || type === 'dragenter' || type === 'mouseover') {
        this._emitEvent(type, ev, pointInfo, null, null, shape);
        if (shape) {
          this._emitEvent(type, ev, pointInfo, shape, null, shape);
        }
        if (type === 'mouseenter' && this.draggingShape) {
          this._emitEvent('dragenter', ev, pointInfo, null);
        }
      } else if (type === 'mouseleave' || type === 'dragleave' || type === 'mouseout') {
        leaveCanvas = true;
        if (preShape) {
          this._emitEvent(type, ev, pointInfo, preShape, preShape, null);
        }
        this._emitEvent(type, ev, pointInfo, null, preShape, null);
        if (type === 'mouseleave' && this.draggingShape) {
          this._emitEvent('dragleave', ev, pointInfo, null);
        }
      } else {
        this._emitEvent(type, ev, pointInfo, shape, null, null);
      }
    }
    if (!leaveCanvas) {
      this.currentShape = shape;
    }
    if (shape && !shape.get('destroyed')) {
      var canvas = this.canvas;
      var el = canvas.get('el');
      el.style.cursor = shape.attr('cursor') || canvas.get('cursor');
    }
  };
  EventController2.prototype._onmousedown = function(pointInfo, shape, event) {
    if (event.button === LEFT_BTN_CODE) {
      this.mousedownShape = shape;
      this.mousedownPoint = pointInfo;
      this.mousedownTimeStamp = event.timeStamp;
    }
    this._emitEvent('mousedown', event, pointInfo, shape, null, null);
  };
  EventController2.prototype._emitMouseoverEvents = function(event, pointInfo, fromShape, toShape) {
    var el = this.canvas.get('el');
    if (fromShape !== toShape) {
      if (fromShape) {
        this._emitEvent('mouseout', event, pointInfo, fromShape, fromShape, toShape);
        this._emitEvent('mouseleave', event, pointInfo, fromShape, fromShape, toShape);
        if (!toShape || toShape.get('destroyed')) {
          el.style.cursor = this.canvas.get('cursor');
        }
      }
      if (toShape) {
        this._emitEvent('mouseover', event, pointInfo, toShape, fromShape, toShape);
        this._emitEvent('mouseenter', event, pointInfo, toShape, fromShape, toShape);
      }
    }
  };
  EventController2.prototype._emitDragoverEvents = function(event, pointInfo, fromShape, toShape, isCanvasEmit) {
    if (toShape) {
      if (toShape !== fromShape) {
        if (fromShape) {
          this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
        }
        this._emitEvent('dragenter', event, pointInfo, toShape, fromShape, toShape);
      }
      if (!isCanvasEmit) {
        this._emitEvent('dragover', event, pointInfo, toShape);
      }
    } else if (fromShape) {
      this._emitEvent('dragleave', event, pointInfo, fromShape, fromShape, toShape);
    }
    if (isCanvasEmit) {
      this._emitEvent('dragover', event, pointInfo, toShape);
    }
  };
  EventController2.prototype._afterDrag = function(draggingShape, pointInfo, event) {
    if (draggingShape) {
      draggingShape.set('capture', true);
      this.draggingShape = null;
    }
    this.dragging = false;
    var shape = this._getShape(pointInfo, event);
    if (shape !== draggingShape) {
      this._emitMouseoverEvents(event, pointInfo, draggingShape, shape);
    }
    this.currentShape = shape;
  };
  EventController2.prototype._onmouseup = function(pointInfo, shape, event) {
    if (event.button === LEFT_BTN_CODE) {
      var draggingShape = this.draggingShape;
      if (this.dragging) {
        if (draggingShape) {
          this._emitEvent('drop', event, pointInfo, shape);
        }
        this._emitEvent('dragend', event, pointInfo, draggingShape);
        this._afterDrag(draggingShape, pointInfo, event);
      } else {
        this._emitEvent('mouseup', event, pointInfo, shape);
        if (shape === this.mousedownShape) {
          this._emitEvent('click', event, pointInfo, shape);
        }
        this.mousedownShape = null;
        this.mousedownPoint = null;
      }
    }
  };
  EventController2.prototype._ondragover = function(pointInfo, shape, event) {
    event.preventDefault();
    var preShape = this.currentShape;
    this._emitDragoverEvents(event, pointInfo, preShape, shape, true);
  };
  EventController2.prototype._onmousemove = function(pointInfo, shape, event) {
    var canvas = this.canvas;
    var preShape = this.currentShape;
    var draggingShape = this.draggingShape;
    if (this.dragging) {
      if (draggingShape) {
        this._emitDragoverEvents(event, pointInfo, preShape, shape, false);
      }
      this._emitEvent('drag', event, pointInfo, draggingShape);
    } else {
      var mousedownPoint = this.mousedownPoint;
      if (mousedownPoint) {
        var mousedownShape = this.mousedownShape;
        var now = event.timeStamp;
        var timeWindow = now - this.mousedownTimeStamp;
        var dx = mousedownPoint.clientX - pointInfo.clientX;
        var dy = mousedownPoint.clientY - pointInfo.clientY;
        var dist = dx * dx + dy * dy;
        if (timeWindow > 120 || dist > CLICK_OFFSET) {
          if (mousedownShape && mousedownShape.get('draggable')) {
            draggingShape = this.mousedownShape;
            draggingShape.set('capture', false);
            this.draggingShape = draggingShape;
            this.dragging = true;
            this._emitEvent('dragstart', event, pointInfo, draggingShape);
            this.mousedownShape = null;
            this.mousedownPoint = null;
          } else if (!mousedownShape && canvas.get('draggable')) {
            this.dragging = true;
            this._emitEvent('dragstart', event, pointInfo, null);
            this.mousedownShape = null;
            this.mousedownPoint = null;
          } else {
            this._emitMouseoverEvents(event, pointInfo, preShape, shape);
            this._emitEvent('mousemove', event, pointInfo, shape);
          }
        } else {
          this._emitMouseoverEvents(event, pointInfo, preShape, shape);
          this._emitEvent('mousemove', event, pointInfo, shape);
        }
      } else {
        this._emitMouseoverEvents(event, pointInfo, preShape, shape);
        this._emitEvent('mousemove', event, pointInfo, shape);
      }
    }
  };
  EventController2.prototype._emitEvent = function(type, event, pointInfo, shape, fromShape, toShape) {
    var eventObj = this._getEventObj(type, event, pointInfo, shape, fromShape, toShape);
    if (shape) {
      eventObj.shape = shape;
      emitTargetEvent(shape, type, eventObj);
      var parent_1 = shape.getParent();
      while (parent_1) {
        parent_1.emitDelegation(type, eventObj);
        if (!eventObj.propagationStopped) {
          bubbleEvent(parent_1, type, eventObj);
        }
        eventObj.propagationPath.push(parent_1);
        parent_1 = parent_1.getParent();
      }
    } else {
      var canvas = this.canvas;
      emitTargetEvent(canvas, type, eventObj);
    }
  };
  EventController2.prototype.destroy = function() {
    this._clearEvents();
    this.canvas = null;
    this.currentShape = null;
    this.draggingShape = null;
    this.mousedownPoint = null;
    this.mousedownShape = null;
    this.mousedownTimeStamp = null;
  };
  return EventController2;
})();
var event_contoller_default = EventController;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/canvas.js
var PX_SUFFIX = 'px';
var browser = detect();
var isFirefox = browser && browser.name === 'firefox';
var Canvas = (function(_super) {
  __extends4(Canvas2, _super);
  function Canvas2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.initContainer();
    _this.initDom();
    _this.initEvents();
    _this.initTimeline();
    return _this;
  }
  Canvas2.prototype.getDefaultCfg = function() {
    var cfg = _super.prototype.getDefaultCfg.call(this);
    cfg['cursor'] = 'default';
    cfg['supportCSSTransform'] = false;
    return cfg;
  };
  Canvas2.prototype.initContainer = function() {
    var container = this.get('container');
    if (isString(container)) {
      container = document.getElementById(container);
      this.set('container', container);
    }
  };
  Canvas2.prototype.initDom = function() {
    var el = this.createDom();
    this.set('el', el);
    var container = this.get('container');
    container.appendChild(el);
    this.setDOMSize(this.get('width'), this.get('height'));
  };
  Canvas2.prototype.initEvents = function() {
    var eventController = new event_contoller_default({
      canvas: this
    });
    eventController.init();
    this.set('eventController', eventController);
  };
  Canvas2.prototype.initTimeline = function() {
    var timeline = new timeline_default(this);
    this.set('timeline', timeline);
  };
  Canvas2.prototype.setDOMSize = function(width, height) {
    var el = this.get('el');
    if (isBrowser) {
      el.style.width = width + PX_SUFFIX;
      el.style.height = height + PX_SUFFIX;
    }
  };
  Canvas2.prototype.changeSize = function(width, height) {
    this.setDOMSize(width, height);
    this.set('width', width);
    this.set('height', height);
    this.onCanvasChange('changeSize');
  };
  Canvas2.prototype.getRenderer = function() {
    return this.get('renderer');
  };
  Canvas2.prototype.getCursor = function() {
    return this.get('cursor');
  };
  Canvas2.prototype.setCursor = function(cursor) {
    this.set('cursor', cursor);
    var el = this.get('el');
    if (isBrowser && el) {
      el.style.cursor = cursor;
    }
  };
  Canvas2.prototype.getPointByEvent = function(ev) {
    var supportCSSTransform = this.get('supportCSSTransform');
    if (supportCSSTransform) {
      if (isFirefox && !isNil(ev.layerX) && ev.layerX !== ev.offsetX) {
        return {
          x: ev.layerX,
          y: ev.layerY
        };
      }
      if (!isNil(ev.offsetX)) {
        return {
          x: ev.offsetX,
          y: ev.offsetY
        };
      }
    }
    var _a = this.getClientByEvent(ev),
      clientX = _a.x,
      clientY = _a.y;
    return this.getPointByClient(clientX, clientY);
  };
  Canvas2.prototype.getClientByEvent = function(ev) {
    var clientInfo = ev;
    if (ev.touches) {
      if (ev.type === 'touchend') {
        clientInfo = ev.changedTouches[0];
      } else {
        clientInfo = ev.touches[0];
      }
    }
    return {
      x: clientInfo.clientX,
      y: clientInfo.clientY
    };
  };
  Canvas2.prototype.getPointByClient = function(clientX, clientY) {
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    return {
      x: clientX - bbox.left,
      y: clientY - bbox.top
    };
  };
  Canvas2.prototype.getClientByPoint = function(x, y) {
    var el = this.get('el');
    var bbox = el.getBoundingClientRect();
    return {
      x: x + bbox.left,
      y: y + bbox.top
    };
  };
  Canvas2.prototype.draw = function() {};
  Canvas2.prototype.removeDom = function() {
    var el = this.get('el');
    el.parentNode.removeChild(el);
  };
  Canvas2.prototype.clearEvents = function() {
    var eventController = this.get('eventController');
    eventController.destroy();
  };
  Canvas2.prototype.isCanvas = function() {
    return true;
  };
  Canvas2.prototype.getParent = function() {
    return null;
  };
  Canvas2.prototype.destroy = function() {
    var timeline = this.get('timeline');
    if (this.get('destroyed')) {
      return;
    }
    this.clear();
    if (timeline) {
      timeline.stop();
    }
    this.clearEvents();
    this.removeDom();
    _super.prototype.destroy.call(this);
  };
  return Canvas2;
})(container_default);
var canvas_default = Canvas;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/group.js
import { __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var AbstractGroup = (function(_super) {
  __extends5(AbstractGroup2, _super);
  function AbstractGroup2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  AbstractGroup2.prototype.isGroup = function() {
    return true;
  };
  AbstractGroup2.prototype.isEntityGroup = function() {
    return false;
  };
  AbstractGroup2.prototype.clone = function() {
    var clone = _super.prototype.clone.call(this);
    var children = this.getChildren();
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      clone.add(child.clone());
    }
    return clone;
  };
  return AbstractGroup2;
})(container_default);
var group_default = AbstractGroup;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/abstract/shape.js
import { __extends as __extends6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var AbstractShape = (function(_super) {
  __extends6(AbstractShape2, _super);
  function AbstractShape2(cfg) {
    return _super.call(this, cfg) || this;
  }
  AbstractShape2.prototype._isInBBox = function(refX, refY) {
    var bbox = this.getBBox();
    return bbox.minX <= refX && bbox.maxX >= refX && bbox.minY <= refY && bbox.maxY >= refY;
  };
  AbstractShape2.prototype.afterAttrsChange = function(targetAttrs) {
    _super.prototype.afterAttrsChange.call(this, targetAttrs);
    this.clearCacheBBox();
  };
  AbstractShape2.prototype.getBBox = function() {
    var bbox = this.cfg.bbox;
    if (!bbox) {
      bbox = this.calculateBBox();
      this.set('bbox', bbox);
    }
    return bbox;
  };
  AbstractShape2.prototype.getCanvasBBox = function() {
    var canvasBBox = this.cfg.canvasBBox;
    if (!canvasBBox) {
      canvasBBox = this.calculateCanvasBBox();
      this.set('canvasBBox', canvasBBox);
    }
    return canvasBBox;
  };
  AbstractShape2.prototype.applyMatrix = function(matrix) {
    _super.prototype.applyMatrix.call(this, matrix);
    this.set('canvasBBox', null);
  };
  AbstractShape2.prototype.calculateCanvasBBox = function() {
    var bbox = this.getBBox();
    var totalMatrix = this.getTotalMatrix();
    var minX = bbox.minX,
      minY = bbox.minY,
      maxX = bbox.maxX,
      maxY = bbox.maxY;
    if (totalMatrix) {
      var topLeft = multiplyVec2(totalMatrix, [bbox.minX, bbox.minY]);
      var topRight = multiplyVec2(totalMatrix, [bbox.maxX, bbox.minY]);
      var bottomLeft = multiplyVec2(totalMatrix, [bbox.minX, bbox.maxY]);
      var bottomRight = multiplyVec2(totalMatrix, [bbox.maxX, bbox.maxY]);
      minX = Math.min(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
      maxX = Math.max(topLeft[0], topRight[0], bottomLeft[0], bottomRight[0]);
      minY = Math.min(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
      maxY = Math.max(topLeft[1], topRight[1], bottomLeft[1], bottomRight[1]);
    }
    var attrs = this.attrs;
    if (attrs.shadowColor) {
      var _a = attrs.shadowBlur,
        shadowBlur = _a === void 0 ? 0 : _a,
        _b = attrs.shadowOffsetX,
        shadowOffsetX = _b === void 0 ? 0 : _b,
        _c = attrs.shadowOffsetY,
        shadowOffsetY = _c === void 0 ? 0 : _c;
      var shadowLeft = minX - shadowBlur + shadowOffsetX;
      var shadowRight = maxX + shadowBlur + shadowOffsetX;
      var shadowTop = minY - shadowBlur + shadowOffsetY;
      var shadowBottom = maxY + shadowBlur + shadowOffsetY;
      minX = Math.min(minX, shadowLeft);
      maxX = Math.max(maxX, shadowRight);
      minY = Math.min(minY, shadowTop);
      maxY = Math.max(maxY, shadowBottom);
    }
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
  AbstractShape2.prototype.clearCacheBBox = function() {
    this.set('bbox', null);
    this.set('canvasBBox', null);
  };
  AbstractShape2.prototype.isClipShape = function() {
    return this.get('isClipShape');
  };
  AbstractShape2.prototype.isInShape = function(refX, refY) {
    return false;
  };
  AbstractShape2.prototype.isOnlyHitBox = function() {
    return false;
  };
  AbstractShape2.prototype.isHit = function(x, y) {
    var startArrowShape = this.get('startArrowShape');
    var endArrowShape = this.get('endArrowShape');
    var vec = [x, y, 1];
    vec = this.invertFromMatrix(vec);
    var refX = vec[0],
      refY = vec[1];
    var inBBox = this._isInBBox(refX, refY);
    if (this.isOnlyHitBox()) {
      return inBBox;
    }
    if (inBBox && !this.isClipped(refX, refY)) {
      if (this.isInShape(refX, refY)) {
        return true;
      }
      if (startArrowShape && startArrowShape.isHit(refX, refY)) {
        return true;
      }
      if (endArrowShape && endArrowShape.isHit(refX, refY)) {
        return true;
      }
    }
    return false;
  };
  return AbstractShape2;
})(element_default);
var shape_default = AbstractShape;

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/register.js
var cache = /* @__PURE__ */ new Map();
function register(type, method) {
  cache.set(type, method);
}
function getMethod(type) {
  return cache.get(type);
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/rect.js
function rect_default(shape) {
  var attrs = shape.attr();
  var x = attrs.x,
    y = attrs.y,
    width = attrs.width,
    height = attrs.height;
  return {
    x,
    y,
    width,
    height
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/circle.js
function circle_default(shape) {
  var _a = shape.attr(),
    x = _a.x,
    y = _a.y,
    r = _a.r;
  return {
    x: x - r,
    y: y - r,
    width: r * 2,
    height: r * 2
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/polyline.js
import { Util } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/util.js
function mergeBBox(bbox1, bbox2) {
  if (!bbox1 || !bbox2) {
    return bbox1 || bbox2;
  }
  return {
    minX: Math.min(bbox1.minX, bbox2.minX),
    minY: Math.min(bbox1.minY, bbox2.minY),
    maxX: Math.max(bbox1.maxX, bbox2.maxX),
    maxY: Math.max(bbox1.maxY, bbox2.maxY)
  };
}
function mergeArrowBBox(shape, bbox) {
  var startArrowShape = shape.get('startArrowShape');
  var endArrowShape = shape.get('endArrowShape');
  var startArrowBBox = null;
  var endArrowBBox = null;
  if (startArrowShape) {
    startArrowBBox = startArrowShape.getCanvasBBox();
    bbox = mergeBBox(bbox, startArrowBBox);
  }
  if (endArrowShape) {
    endArrowBBox = endArrowShape.getCanvasBBox();
    bbox = mergeBBox(bbox, endArrowBBox);
  }
  return bbox;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/polyline.js
function polyline_default(shape) {
  var attrs = shape.attr();
  var points = attrs.points;
  var xArr = [];
  var yArr = [];
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    xArr.push(point[0]);
    yArr.push(point[1]);
  }
  var _a = Util.getBBoxByArray(xArr, yArr),
    x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  var bbox = {
    minX: x,
    minY: y,
    maxX: x + width,
    maxY: y + height
  };
  bbox = mergeArrowBBox(shape, bbox);
  return {
    x: bbox.minX,
    y: bbox.minY,
    width: bbox.maxX - bbox.minX,
    height: bbox.maxY - bbox.minY
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/polygon.js
import { Util as Util2 } from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
function polygon_default(shape) {
  var attrs = shape.attr();
  var points = attrs.points;
  var xArr = [];
  var yArr = [];
  for (var i = 0; i < points.length; i++) {
    var point = points[i];
    xArr.push(point[0]);
    yArr.push(point[1]);
  }
  return Util2.getBBoxByArray(xArr, yArr);
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/offscreen.js
var offScreenCtx = null;
function getOffScreenContext() {
  if (!offScreenCtx) {
    var canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    offScreenCtx = canvas.getContext('2d');
  }
  return offScreenCtx;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/util/text.js
function getTextHeight(text, fontSize, lineHeight) {
  var lineCount = 1;
  if (isString(text)) {
    lineCount = text.split('\n').length;
  }
  if (lineCount > 1) {
    var spaceingY = getLineSpaceing(fontSize, lineHeight);
    return fontSize * lineCount + spaceingY * (lineCount - 1);
  }
  return fontSize;
}
function getLineSpaceing(fontSize, lineHeight) {
  return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
}
function getTextWidth(text, font) {
  var context = getOffScreenContext();
  var width = 0;
  if (isNil(text) || text === '') {
    return width;
  }
  context.save();
  context.font = font;
  if (isString(text) && text.includes('\n')) {
    var textArr = text.split('\n');
    each2(textArr, function(subText) {
      var measureWidth = context.measureText(subText).width;
      if (width < measureWidth) {
        width = measureWidth;
      }
    });
  } else {
    width = context.measureText(text).width;
  }
  context.restore();
  return width;
}
function assembleFont(attrs) {
  var fontSize = attrs.fontSize,
    fontFamily = attrs.fontFamily,
    fontWeight = attrs.fontWeight,
    fontStyle = attrs.fontStyle,
    fontVariant = attrs.fontVariant;
  return [fontStyle, fontVariant, fontWeight, fontSize + 'px', fontFamily].join(' ').trim();
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/text.js
function text_default(shape) {
  var attrs = shape.attr();
  var x = attrs.x,
    y = attrs.y,
    text = attrs.text,
    fontSize = attrs.fontSize,
    lineHeight = attrs.lineHeight;
  var font = attrs.font;
  if (!font) {
    font = assembleFont(attrs);
  }
  var width = getTextWidth(text, font);
  var bbox;
  if (!width) {
    bbox = {
      x,
      y,
      width: 0,
      height: 0
    };
  } else {
    var textAlign = attrs.textAlign,
      textBaseline = attrs.textBaseline;
    var height = getTextHeight(text, fontSize, lineHeight);
    var point = {
      x,
      y: y - height
    };
    if (textAlign) {
      if (textAlign === 'end' || textAlign === 'right') {
        point.x -= width;
      } else if (textAlign === 'center') {
        point.x -= width / 2;
      }
    }
    if (textBaseline) {
      if (textBaseline === 'top') {
        point.y += height;
      } else if (textBaseline === 'middle') {
        point.y += height / 2;
      }
    }
    bbox = {
      x: point.x,
      y: point.y,
      width,
      height
    };
  }
  return bbox;
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/path.js
import {
  Quad as QuadUtil,
  Cubic as CubicUtil,
  Arc as EllipseArcUtil
} from '/cdn/v99/@antv/g-math@0.1.7/es2022/g-math.development.js';
import { path2Segments } from '/cdn/v99/@antv/path-util@2.0.15/es2022/path-util.development.js';
import { isNumberEqual, max as max2, min as min2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function getPathBox(segments, lineWidth) {
  var xArr = [];
  var yArr = [];
  var segmentsWithAngle = [];
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    var currentPoint = segment.currentPoint,
      params = segment.params,
      prePoint = segment.prePoint;
    var box2 = void 0;
    switch (segment.command) {
      case 'Q':
        box2 = QuadUtil.box(prePoint[0], prePoint[1], params[1], params[2], params[3], params[4]);
        break;
      case 'C':
        box2 = CubicUtil.box(
          prePoint[0],
          prePoint[1],
          params[1],
          params[2],
          params[3],
          params[4],
          params[5],
          params[6]
        );
        break;
      case 'A':
        var arcParams = segment.arcParams;
        box2 = EllipseArcUtil.box(
          arcParams.cx,
          arcParams.cy,
          arcParams.rx,
          arcParams.ry,
          arcParams.xRotation,
          arcParams.startAngle,
          arcParams.endAngle
        );
        break;
      default:
        xArr.push(currentPoint[0]);
        yArr.push(currentPoint[1]);
        break;
    }
    if (box2) {
      segment.box = box2;
      xArr.push(box2.x, box2.x + box2.width);
      yArr.push(box2.y, box2.y + box2.height);
    }
    if (lineWidth && (segment.command === 'L' || segment.command === 'M') && segment.prePoint && segment.nextPoint) {
      segmentsWithAngle.push(segment);
    }
  }
  xArr = xArr.filter(function(item) {
    return !Number.isNaN(item) && item !== Infinity && item !== -Infinity;
  });
  yArr = yArr.filter(function(item) {
    return !Number.isNaN(item) && item !== Infinity && item !== -Infinity;
  });
  var minX = min2(xArr);
  var minY = min2(yArr);
  var maxX = max2(xArr);
  var maxY = max2(yArr);
  if (segmentsWithAngle.length === 0) {
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  for (var i = 0; i < segmentsWithAngle.length; i++) {
    var segment = segmentsWithAngle[i];
    var currentPoint = segment.currentPoint;
    var extra = void 0;
    if (currentPoint[0] === minX) {
      extra = getExtraFromSegmentWithAngle(segment, lineWidth);
      minX = minX - extra.xExtra;
    } else if (currentPoint[0] === maxX) {
      extra = getExtraFromSegmentWithAngle(segment, lineWidth);
      maxX = maxX + extra.xExtra;
    }
    if (currentPoint[1] === minY) {
      extra = getExtraFromSegmentWithAngle(segment, lineWidth);
      minY = minY - extra.yExtra;
    } else if (currentPoint[1] === maxY) {
      extra = getExtraFromSegmentWithAngle(segment, lineWidth);
      maxY = maxY + extra.yExtra;
    }
  }
  return {
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  };
}
function getExtraFromSegmentWithAngle(segment, lineWidth) {
  var prePoint = segment.prePoint,
    currentPoint = segment.currentPoint,
    nextPoint = segment.nextPoint;
  var currentAndPre = Math.pow(currentPoint[0] - prePoint[0], 2) + Math.pow(currentPoint[1] - prePoint[1], 2);
  var currentAndNext = Math.pow(currentPoint[0] - nextPoint[0], 2) + Math.pow(currentPoint[1] - nextPoint[1], 2);
  var preAndNext = Math.pow(prePoint[0] - nextPoint[0], 2) + Math.pow(prePoint[1] - nextPoint[1], 2);
  var currentAngle = Math.acos(
    (currentAndPre + currentAndNext - preAndNext) / (2 * Math.sqrt(currentAndPre) * Math.sqrt(currentAndNext))
  );
  if (!currentAngle || Math.sin(currentAngle) === 0 || isNumberEqual(currentAngle, 0)) {
    return {
      xExtra: 0,
      yExtra: 0
    };
  }
  var xAngle = Math.abs(Math.atan2(nextPoint[1] - currentPoint[1], nextPoint[0] - currentPoint[0]));
  var yAngle = Math.abs(Math.atan2(nextPoint[0] - currentPoint[0], nextPoint[1] - currentPoint[1]));
  xAngle = xAngle > Math.PI / 2 ? Math.PI - xAngle : xAngle;
  yAngle = yAngle > Math.PI / 2 ? Math.PI - yAngle : yAngle;
  var extra = {
    xExtra:
      Math.cos(currentAngle / 2 - xAngle) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0,
    yExtra:
      Math.cos(yAngle - currentAngle / 2) * ((lineWidth / 2) * (1 / Math.sin(currentAngle / 2))) - lineWidth / 2 || 0
  };
  return extra;
}
function path_default(shape) {
  var attrs = shape.attr();
  var path = attrs.path,
    stroke = attrs.stroke;
  var lineWidth = stroke ? attrs.lineWidth : 0;
  var segments = shape.get('segments') || path2Segments(path);
  var _a = getPathBox(segments, lineWidth),
    x = _a.x,
    y = _a.y,
    width = _a.width,
    height = _a.height;
  var bbox = {
    minX: x,
    minY: y,
    maxX: x + width,
    maxY: y + height
  };
  bbox = mergeArrowBBox(shape, bbox);
  return {
    x: bbox.minX,
    y: bbox.minY,
    width: bbox.maxX - bbox.minX,
    height: bbox.maxY - bbox.minY
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/line.js
function line_default(shape) {
  var attrs = shape.attr();
  var x1 = attrs.x1,
    y1 = attrs.y1,
    x2 = attrs.x2,
    y2 = attrs.y2;
  var minX = Math.min(x1, x2);
  var maxX = Math.max(x1, x2);
  var minY = Math.min(y1, y2);
  var maxY = Math.max(y1, y2);
  var bbox = {
    minX,
    maxX,
    minY,
    maxY
  };
  bbox = mergeArrowBBox(shape, bbox);
  return {
    x: bbox.minX,
    y: bbox.minY,
    width: bbox.maxX - bbox.minX,
    height: bbox.maxY - bbox.minY
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/ellipse.js
function ellipse_default(shape) {
  var attrs = shape.attr();
  var x = attrs.x,
    y = attrs.y,
    rx = attrs.rx,
    ry = attrs.ry;
  return {
    x: x - rx,
    y: y - ry,
    width: rx * 2,
    height: ry * 2
  };
}

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/bbox/index.js
register('rect', rect_default);
register('image', rect_default);
register('circle', circle_default);
register('marker', circle_default);
register('polyline', polyline_default);
register('polygon', polygon_default);
register('text', text_default);
register('path', path_default);
register('line', line_default);
register('ellipse', ellipse_default);

// esm-build-ccab3aef7a2fed77ae9ae122cc3035c3d54f7947-0e3b6b02/node_modules/@antv/g-base/esm/index.js
var version = '0.5.11';
export {
  canvas_default as AbstractCanvas,
  group_default as AbstractGroup,
  shape_default as AbstractShape,
  base_default as Base,
  graph_event_default as Event,
  path_exports as PathUtil,
  assembleFont,
  getMethod as getBBoxMethod,
  getOffScreenContext,
  getTextHeight,
  invert,
  isAllowCapture,
  multiplyVec2,
  register as registerBBox,
  registerEasing,
  version
};
