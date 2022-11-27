/* esm.sh - esbuild bundle(d3-interpolate@1.4.0) es2022 development */
// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/value.js
import { color } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/rgb.js
import { rgb as colorRgb } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/basis.js
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1,
    t3 = t2 * t1;
  return (
    ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6
  );
}
function basis_default(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? ((t = 1), n - 1) : Math.floor(t * n),
      v1 = values[i],
      v2 = values[i + 1],
      v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
      v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/basisClosed.js
function basisClosed_default(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
      v0 = values[(i + n - 1) % n],
      v1 = values[i % n],
      v2 = values[(i + 1) % n],
      v3 = values[(i + 2) % n];
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/constant.js
function constant_default(x) {
  return function() {
    return x;
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/color.js
function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return (
    (a = Math.pow(a, y)),
    (b = Math.pow(b, y) - a),
    (y = 1 / y),
    function(t) {
      return Math.pow(a + t * b, y);
    }
  );
}
function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : constant_default(isNaN(a) ? b : a);
}
function gamma(y) {
  return (y = +y) === 1
    ? nogamma
    : function(a, b) {
        return b - a ? exponential(a, b, y) : constant_default(isNaN(a) ? b : a);
      };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : constant_default(isNaN(a) ? b : a);
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/rgb.js
var rgb_default = (function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb(start, end) {
    var r = color2((start = colorRgb(start)).r, (end = colorRgb(end)).r),
      g = color2(start.g, end.g),
      b = color2(start.b, end.b),
      opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + '';
    };
  }
  rgb.gamma = rgbGamma;
  return rgb;
})(1);
function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
      r = new Array(n),
      g = new Array(n),
      b = new Array(n),
      i,
      color2;
    for (i = 0; i < n; ++i) {
      color2 = colorRgb(colors[i]);
      r[i] = color2.r || 0;
      g[i] = color2.g || 0;
      b[i] = color2.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color2.opacity = 1;
    return function(t) {
      color2.r = r(t);
      color2.g = g(t);
      color2.b = b(t);
      return color2 + '';
    };
  };
}
var rgbBasis = rgbSpline(basis_default);
var rgbBasisClosed = rgbSpline(basisClosed_default);

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/numberArray.js
function numberArray_default(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
    c = b.slice(),
    i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/array.js
function array_default(a, b) {
  return (isNumberArray(b) ? numberArray_default : genericArray)(a, b);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0,
    na = a ? Math.min(nb, a.length) : 0,
    x = new Array(na),
    c = new Array(nb),
    i;
  for (i = 0; i < na; ++i) x[i] = value_default(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/date.js
function date_default(a, b) {
  var d = new Date();
  return (
    (a = +a),
    (b = +b),
    function(t) {
      return d.setTime(a * (1 - t) + b * t), d;
    }
  );
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/number.js
function number_default(a, b) {
  return (
    (a = +a),
    (b = +b),
    function(t) {
      return a * (1 - t) + b * t;
    }
  );
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/object.js
function object_default(a, b) {
  var i = {},
    c = {},
    k;
  if (a === null || typeof a !== 'object') a = {};
  if (b === null || typeof b !== 'object') b = {};
  for (k in b) {
    if (k in a) {
      i[k] = value_default(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/string.js
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var reB = new RegExp(reA.source, 'g');
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + '';
  };
}
function string_default(a, b) {
  var bi = (reA.lastIndex = reB.lastIndex = 0),
    am,
    bm,
    bs,
    i = -1,
    s = [],
    q = [];
  (a = a + ''), (b = b + '');
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs;
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i]) s[i] += bm;
      else s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({
        i,
        x: number_default(am, bm)
      });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs;
    else s[++i] = bs;
  }
  return s.length < 2
    ? q[0]
      ? one(q[0].x)
      : zero(b)
    : ((b = q.length),
      function(t) {
        for (var i2 = 0, o; i2 < b; ++i2) s[(o = q[i2]).i] = o.x(t);
        return s.join('');
      });
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/value.js
function value_default(a, b) {
  var t = typeof b,
    c;
  return b == null || t === 'boolean'
    ? constant_default(b)
    : (t === 'number'
        ? number_default
        : t === 'string'
        ? (c = color(b))
          ? ((b = c), rgb_default)
          : string_default
        : b instanceof color
        ? rgb_default
        : b instanceof Date
        ? date_default
        : isNumberArray(b)
        ? numberArray_default
        : Array.isArray(b)
        ? genericArray
        : (typeof b.valueOf !== 'function' && typeof b.toString !== 'function') || isNaN(b)
        ? object_default
        : number_default)(a, b);
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/discrete.js
function discrete_default(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/hue.js
function hue_default(a, b) {
  var i = hue(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/round.js
function round_default(a, b) {
  return (
    (a = +a),
    (b = +b),
    function(t) {
      return Math.round(a * (1 - t) + b * t);
    }
  );
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/transform/decompose.js
var degrees = 180 / Math.PI;
var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function decompose_default(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if ((scaleX = Math.sqrt(a * a + b * b))) (a /= scaleX), (b /= scaleX);
  if ((skewX = a * c + b * d)) (c -= a * skewX), (d -= b * skewX);
  if ((scaleY = Math.sqrt(c * c + d * d))) (c /= scaleY), (d /= scaleY), (skewX /= scaleY);
  if (a * d < b * c) (a = -a), (b = -b), (skewX = -skewX), (scaleX = -scaleX);
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX,
    scaleY
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/transform/parse.js
var cssNode;
var cssRoot;
var cssView;
var svgNode;
function parseCss(value) {
  if (value === 'none') return identity;
  if (!cssNode)
    (cssNode = document.createElement('DIV')), (cssRoot = document.documentElement), (cssView = document.defaultView);
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue('transform');
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(',');
  return decompose_default(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}
function parseSvg(value) {
  if (value == null) return identity;
  if (!svgNode) svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  svgNode.setAttribute('transform', value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
  value = value.matrix;
  return decompose_default(value.a, value.b, value.c, value.d, value.e, value.f);
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/transform/index.js
function interpolateTransform(parse, pxComma, pxParen, degParen) {
  function pop(s) {
    return s.length ? s.pop() + ' ' : '';
  }
  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push('translate(', null, pxComma, null, pxParen);
      q.push(
        {
          i: i - 4,
          x: number_default(xa, xb)
        },
        {
          i: i - 2,
          x: number_default(ya, yb)
        }
      );
    } else if (xb || yb) {
      s.push('translate(' + xb + pxComma + yb + pxParen);
    }
  }
  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360;
      else if (b - a > 180) a += 360;
      q.push({
        i: s.push(pop(s) + 'rotate(', null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + 'rotate(' + b + degParen);
    }
  }
  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({
        i: s.push(pop(s) + 'skewX(', null, degParen) - 2,
        x: number_default(a, b)
      });
    } else if (b) {
      s.push(pop(s) + 'skewX(' + b + degParen);
    }
  }
  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + 'scale(', null, ',', null, ')');
      q.push(
        {
          i: i - 4,
          x: number_default(xa, xb)
        },
        {
          i: i - 2,
          x: number_default(ya, yb)
        }
      );
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + 'scale(' + xb + ',' + yb + ')');
    }
  }
  return function(a, b) {
    var s = [],
      q = [];
    (a = parse(a)), (b = parse(b));
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null;
    return function(t) {
      var i = -1,
        n = q.length,
        o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join('');
    };
  };
}
var interpolateTransformCss = interpolateTransform(parseCss, 'px, ', 'px)', 'deg)');
var interpolateTransformSvg = interpolateTransform(parseSvg, ', ', ')', ')');

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/zoom.js
var rho = Math.SQRT2;
var rho2 = 2;
var rho4 = 4;
var epsilon2 = 1e-12;
function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}
function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}
function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}
function zoom_default(p0, p1) {
  var ux0 = p0[0],
    uy0 = p0[1],
    w0 = p0[2],
    ux1 = p1[0],
    uy1 = p1[1],
    w1 = p1[2],
    dx = ux1 - ux0,
    dy = uy1 - uy0,
    d2 = dx * dx + dy * dy,
    i,
    S;
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
    };
  } else {
    var d1 = Math.sqrt(d2),
      b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
      b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
      r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
      r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
        coshr0 = cosh(r0),
        u = (w0 / (rho2 * d1)) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [ux0 + u * dx, uy0 + u * dy, (w0 * coshr0) / cosh(rho * s + r0)];
    };
  }
  i.duration = S * 1e3;
  return i;
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/hsl.js
import { hsl as colorHsl } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';
function hsl(hue2) {
  return function(start, end) {
    var h = hue2((start = colorHsl(start)).h, (end = colorHsl(end)).h),
      s = nogamma(start.s, end.s),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + '';
    };
  };
}
var hsl_default = hsl(hue);
var hslLong = hsl(nogamma);

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/lab.js
import { lab as colorLab } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';
function lab(start, end) {
  var l = nogamma((start = colorLab(start)).l, (end = colorLab(end)).l),
    a = nogamma(start.a, end.a),
    b = nogamma(start.b, end.b),
    opacity = nogamma(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + '';
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/hcl.js
import { hcl as colorHcl } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';
function hcl(hue2) {
  return function(start, end) {
    var h = hue2((start = colorHcl(start)).h, (end = colorHcl(end)).h),
      c = nogamma(start.c, end.c),
      l = nogamma(start.l, end.l),
      opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + '';
    };
  };
}
var hcl_default = hcl(hue);
var hclLong = hcl(nogamma);

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/cubehelix.js
import { cubehelix as colorCubehelix } from '/cdn/v99/d3-color@1.4.1/es2022/d3-color.development.js';
function cubehelix(hue2) {
  return (function cubehelixGamma(y) {
    y = +y;
    function cubehelix2(start, end) {
      var h = hue2((start = colorCubehelix(start)).h, (end = colorCubehelix(end)).h),
        s = nogamma(start.s, end.s),
        l = nogamma(start.l, end.l),
        opacity = nogamma(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + '';
      };
    }
    cubehelix2.gamma = cubehelixGamma;
    return cubehelix2;
  })(1);
}
var cubehelix_default = cubehelix(hue);
var cubehelixLong = cubehelix(nogamma);

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/piecewise.js
function piecewise(interpolate, values) {
  var i = 0,
    n = values.length - 1,
    v = values[0],
    I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, (v = values[++i]));
  return function(t) {
    var i2 = Math.max(0, Math.min(n - 1, Math.floor((t *= n))));
    return I[i2](t - i2);
  };
}

// esm-build-854bfb08d8fdc872e900b0bb99829223dfc8502d-5cf6fc9b/node_modules/d3-interpolate/src/quantize.js
function quantize_default(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
}
export {
  value_default as interpolate,
  array_default as interpolateArray,
  basis_default as interpolateBasis,
  basisClosed_default as interpolateBasisClosed,
  cubehelix_default as interpolateCubehelix,
  cubehelixLong as interpolateCubehelixLong,
  date_default as interpolateDate,
  discrete_default as interpolateDiscrete,
  hcl_default as interpolateHcl,
  hclLong as interpolateHclLong,
  hsl_default as interpolateHsl,
  hslLong as interpolateHslLong,
  hue_default as interpolateHue,
  lab as interpolateLab,
  number_default as interpolateNumber,
  numberArray_default as interpolateNumberArray,
  object_default as interpolateObject,
  rgb_default as interpolateRgb,
  rgbBasis as interpolateRgbBasis,
  rgbBasisClosed as interpolateRgbBasisClosed,
  round_default as interpolateRound,
  string_default as interpolateString,
  interpolateTransformCss,
  interpolateTransformSvg,
  zoom_default as interpolateZoom,
  piecewise,
  quantize_default as quantize
};
