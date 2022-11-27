/* esm.sh - esbuild bundle(@antv/color-util@2.0.6) es2022 development */
// esm-build-f5b6f53248bb0b954439cf5a9ea8b0ad837bd091-ab383ded/node_modules/@antv/color-util/esm/index.js
import { map, memoize, isString, each } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var RGB_REG = /rgba?\(([\s.,0-9]+)\)/;
var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/gi;
var isGradientColor = function(val) {
  return /^[r,R,L,l]{1}[\s]*\(/.test(val);
};
var createTmp = function() {
  var i = document.createElement('i');
  i.title = 'Web Colour Picker';
  i.style.display = 'none';
  document.body.appendChild(i);
  return i;
};
var getValue = function(start, end, percent, index) {
  return start[index] + (end[index] - start[index]) * percent;
};
function arr2rgb(arr) {
  return '#' + toHex(arr[0]) + toHex(arr[1]) + toHex(arr[2]);
}
var rgb2arr = function(str) {
  return [parseInt(str.substr(1, 2), 16), parseInt(str.substr(3, 2), 16), parseInt(str.substr(5, 2), 16)];
};
var toHex = function(value) {
  var x16Value = Math.round(value).toString(16);
  return x16Value.length === 1 ? '0' + x16Value : x16Value;
};
var calColor = function(points, percent) {
  var fixedPercent = isNaN(Number(percent)) || percent < 0 ? 0 : percent > 1 ? 1 : Number(percent);
  var steps = points.length - 1;
  var step = Math.floor(steps * fixedPercent);
  var left = steps * fixedPercent - step;
  var start = points[step];
  var end = step === steps ? start : points[step + 1];
  return arr2rgb([getValue(start, end, left, 0), getValue(start, end, left, 1), getValue(start, end, left, 2)]);
};
var iEl;
var toRGB = function(color) {
  if (color[0] === '#' && color.length === 7) {
    return color;
  }
  if (!iEl) {
    iEl = createTmp();
  }
  iEl.style.color = color;
  var rst = document.defaultView.getComputedStyle(iEl, '').getPropertyValue('color');
  var matches = RGB_REG.exec(rst);
  var cArray = matches[1].split(/\s*,\s*/).map(function(s) {
    return Number(s);
  });
  rst = arr2rgb(cArray);
  return rst;
};
var gradient = function(colors) {
  var colorArray = isString(colors) ? colors.split('-') : colors;
  var points = map(colorArray, function(color) {
    return rgb2arr(color.indexOf('#') === -1 ? toRGB(color) : color);
  });
  return function(percent) {
    return calColor(points, percent);
  };
};
var toCSSGradient = function(gradientColor) {
  if (isGradientColor(gradientColor)) {
    var cssColor_1;
    var steps = void 0;
    if (gradientColor[0] === 'l') {
      var arr = regexLG.exec(gradientColor);
      var angle = +arr[1] + 90;
      steps = arr[2];
      cssColor_1 = 'linear-gradient(' + angle + 'deg, ';
    } else if (gradientColor[0] === 'r') {
      cssColor_1 = 'radial-gradient(';
      var arr = regexRG.exec(gradientColor);
      steps = arr[4];
    }
    var colorStops_1 = steps.match(regexColorStop);
    each(colorStops_1, function(item, index) {
      var itemArr = item.split(':');
      cssColor_1 += itemArr[1] + ' ' + itemArr[0] * 100 + '%';
      if (index !== colorStops_1.length - 1) {
        cssColor_1 += ', ';
      }
    });
    cssColor_1 += ')';
    return cssColor_1;
  }
  return gradientColor;
};
var esm_default = {
  rgb2arr,
  gradient,
  toRGB: memoize(toRGB),
  toCSSGradient
};
export { esm_default as default };
