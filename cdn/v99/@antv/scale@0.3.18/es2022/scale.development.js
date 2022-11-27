/* esm.sh - esbuild bundle(@antv/scale@0.3.18) es2022 development */
// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/base.js
import {
  assign,
  isEmpty,
  isFunction,
  isNil,
  isNumber,
  isObject,
  isString,
  map
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/register.js
var methodCache = {};
function getTickMethod(key) {
  return methodCache[key];
}
function registerTickMethod(key, method) {
  methodCache[key] = method;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/base.js
var Scale = (function() {
  function Scale2(cfg) {
    this.type = 'base';
    this.isCategory = false;
    this.isLinear = false;
    this.isContinuous = false;
    this.isIdentity = false;
    this.values = [];
    this.range = [0, 1];
    this.ticks = [];
    this.__cfg__ = cfg;
    this.initCfg();
    this.init();
  }
  Scale2.prototype.translate = function(v) {
    return v;
  };
  Scale2.prototype.change = function(cfg) {
    assign(this.__cfg__, cfg);
    this.init();
  };
  Scale2.prototype.clone = function() {
    return this.constructor(this.__cfg__);
  };
  Scale2.prototype.getTicks = function() {
    var _this = this;
    return map(this.ticks, function(tick, idx) {
      if (isObject(tick)) {
        return tick;
      }
      return {
        text: _this.getText(tick, idx),
        tickValue: tick,
        value: _this.scale(tick)
      };
    });
  };
  Scale2.prototype.getText = function(value, key) {
    var formatter = this.formatter;
    var res = formatter ? formatter(value, key) : value;
    if (isNil(res) || !isFunction(res.toString)) {
      return '';
    }
    return res.toString();
  };
  Scale2.prototype.getConfig = function(key) {
    return this.__cfg__[key];
  };
  Scale2.prototype.init = function() {
    assign(this, this.__cfg__);
    this.setDomain();
    if (isEmpty(this.getConfig('ticks'))) {
      this.ticks = this.calculateTicks();
    }
  };
  Scale2.prototype.initCfg = function() {};
  Scale2.prototype.setDomain = function() {};
  Scale2.prototype.calculateTicks = function() {
    var tickMethod = this.tickMethod;
    var ticks = [];
    if (isString(tickMethod)) {
      var method = getTickMethod(tickMethod);
      if (!method) {
        throw new Error('There is no method to to calculate ticks!');
      }
      ticks = method(this);
    } else if (isFunction(tickMethod)) {
      ticks = tickMethod(this);
    }
    return ticks;
  };
  Scale2.prototype.rangeMin = function() {
    return this.range[0];
  };
  Scale2.prototype.rangeMax = function() {
    return this.range[1];
  };
  Scale2.prototype.calcPercent = function(value, min, max) {
    if (isNumber(value)) {
      return (value - min) / (max - min);
    }
    return NaN;
  };
  Scale2.prototype.calcValue = function(percent, min, max) {
    return min + percent * (max - min);
  };
  return Scale2;
})();
var base_default = Scale;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/category/base.js
import { __extends, __spreadArrays } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isNil as isNil2, isNumber as isNumber2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Category = (function(_super) {
  __extends(Category2, _super);
  function Category2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'cat';
    _this.isCategory = true;
    return _this;
  }
  Category2.prototype.buildIndexMap = function() {
    if (!this.translateIndexMap) {
      this.translateIndexMap = /* @__PURE__ */ new Map();
      for (var i = 0; i < this.values.length; i++) {
        this.translateIndexMap.set(this.values[i], i);
      }
    }
  };
  Category2.prototype.translate = function(value) {
    this.buildIndexMap();
    var idx = this.translateIndexMap.get(value);
    if (idx === void 0) {
      idx = isNumber2(value) ? value : NaN;
    }
    return idx;
  };
  Category2.prototype.scale = function(value) {
    var order = this.translate(value);
    var percent = this.calcPercent(order, this.min, this.max);
    return this.calcValue(percent, this.rangeMin(), this.rangeMax());
  };
  Category2.prototype.invert = function(scaledValue) {
    var domainRange = this.max - this.min;
    var percent = this.calcPercent(scaledValue, this.rangeMin(), this.rangeMax());
    var idx = Math.round(domainRange * percent) + this.min;
    if (idx < this.min || idx > this.max) {
      return NaN;
    }
    return this.values[idx];
  };
  Category2.prototype.getText = function(value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    var v = value;
    if (isNumber2(value) && !this.values.includes(value)) {
      v = this.values[v];
    }
    return _super.prototype.getText.apply(this, __spreadArrays([v], args));
  };
  Category2.prototype.initCfg = function() {
    this.tickMethod = 'cat';
  };
  Category2.prototype.setDomain = function() {
    if (isNil2(this.getConfig('min'))) {
      this.min = 0;
    }
    if (isNil2(this.getConfig('max'))) {
      var size2 = this.values.length;
      this.max = size2 > 1 ? size2 - 1 : size2;
    }
    if (this.translateIndexMap) {
      this.translateIndexMap = void 0;
    }
  };
  return Category2;
})(base_default);
var base_default2 = Category;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/category/time.js
import { __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each, isNumber as isNumber3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/time.js
import { isDate, isString as isString2, last } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
import fecha from '/cdn/v99/fecha@4.2.3/es2022/fecha.development.js';
import * as fecha1 from '/cdn/v99/fecha@4.2.3/es2022/fecha.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/bisector.js
import { isNil as isNil3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function bisector_default(getter) {
  return function(a, x, _lo, _hi) {
    var lo = isNil3(_lo) ? 0 : _lo;
    var hi = isNil3(_hi) ? a.length : _hi;
    while (lo < hi) {
      var mid = (lo + hi) >>> 1;
      if (getter(a[mid]) > x) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/time.js
var FORMAT_METHOD = 'format';
function timeFormat(time, mask) {
  var method = fecha1[FORMAT_METHOD] || fecha[FORMAT_METHOD];
  return method(time, mask);
}
function toTimeStamp(value) {
  if (isString2(value)) {
    if (value.indexOf('T') > 0) {
      value = new Date(value).getTime();
    } else {
      value = new Date(value.replace(/-/gi, '/')).getTime();
    }
  }
  if (isDate(value)) {
    value = value.getTime();
  }
  return value;
}
var SECOND = 1e3;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var MONTH = DAY * 31;
var YEAR = DAY * 365;
var intervals = [
  ['HH:mm:ss', SECOND],
  ['HH:mm:ss', SECOND * 10],
  ['HH:mm:ss', SECOND * 30],
  ['HH:mm', MINUTE],
  ['HH:mm', MINUTE * 10],
  ['HH:mm', MINUTE * 30],
  ['HH', HOUR],
  ['HH', HOUR * 6],
  ['HH', HOUR * 12],
  ['YYYY-MM-DD', DAY],
  ['YYYY-MM-DD', DAY * 4],
  ['YYYY-WW', DAY * 7],
  ['YYYY-MM', MONTH],
  ['YYYY-MM', MONTH * 4],
  ['YYYY-MM', MONTH * 6],
  ['YYYY', DAY * 380]
];
function getTickInterval(min, max, tickCount) {
  var target = (max - min) / tickCount;
  var idx =
    bisector_default(function(o) {
      return o[1];
    })(intervals, target) - 1;
  var interval = intervals[idx];
  if (idx < 0) {
    interval = intervals[0];
  } else if (idx >= intervals.length) {
    interval = last(intervals);
  }
  return interval;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/category/time.js
var TimeCat = (function(_super) {
  __extends2(TimeCat2, _super);
  function TimeCat2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'timeCat';
    return _this;
  }
  TimeCat2.prototype.translate = function(value) {
    value = toTimeStamp(value);
    var index = this.values.indexOf(value);
    if (index === -1) {
      if (isNumber3(value) && value < this.values.length) {
        index = value;
      } else {
        index = NaN;
      }
    }
    return index;
  };
  TimeCat2.prototype.getText = function(value, tickIndex) {
    var index = this.translate(value);
    if (index > -1) {
      var result = this.values[index];
      var formatter = this.formatter;
      result = formatter ? formatter(result, tickIndex) : timeFormat(result, this.mask);
      return result;
    }
    return value;
  };
  TimeCat2.prototype.initCfg = function() {
    this.tickMethod = 'time-cat';
    this.mask = 'YYYY-MM-DD';
    this.tickCount = 7;
  };
  TimeCat2.prototype.setDomain = function() {
    var values = this.values;
    each(values, function(v, i) {
      values[i] = toTimeStamp(v);
    });
    values.sort(function(v1, v2) {
      return v1 - v2;
    });
    _super.prototype.setDomain.call(this);
  };
  return TimeCat2;
})(base_default2);
var time_default = TimeCat;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/linear.js
import { __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/base.js
import { __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  filter,
  getRange,
  head,
  isNil as isNil4,
  last as last2
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Continuous = (function(_super) {
  __extends3(Continuous2, _super);
  function Continuous2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.isContinuous = true;
    return _this;
  }
  Continuous2.prototype.scale = function(value) {
    if (isNil4(value)) {
      return NaN;
    }
    var rangeMin = this.rangeMin();
    var rangeMax = this.rangeMax();
    var max = this.max;
    var min = this.min;
    if (max === min) {
      return rangeMin;
    }
    var percent = this.getScalePercent(value);
    return rangeMin + percent * (rangeMax - rangeMin);
  };
  Continuous2.prototype.init = function() {
    _super.prototype.init.call(this);
    var ticks = this.ticks;
    var firstTick = head(ticks);
    var lastTick = last2(ticks);
    if (firstTick < this.min) {
      this.min = firstTick;
    }
    if (lastTick > this.max) {
      this.max = lastTick;
    }
    if (!isNil4(this.minLimit)) {
      this.min = firstTick;
    }
    if (!isNil4(this.maxLimit)) {
      this.max = lastTick;
    }
  };
  Continuous2.prototype.setDomain = function() {
    var _a = getRange(this.values),
      min = _a.min,
      max = _a.max;
    if (isNil4(this.min)) {
      this.min = min;
    }
    if (isNil4(this.max)) {
      this.max = max;
    }
    if (this.min > this.max) {
      this.min = min;
      this.max = max;
    }
  };
  Continuous2.prototype.calculateTicks = function() {
    var _this = this;
    var ticks = _super.prototype.calculateTicks.call(this);
    if (!this.nice) {
      ticks = filter(ticks, function(tick) {
        return tick >= _this.min && tick <= _this.max;
      });
    }
    return ticks;
  };
  Continuous2.prototype.getScalePercent = function(value) {
    var max = this.max;
    var min = this.min;
    return (value - min) / (max - min);
  };
  Continuous2.prototype.getInvertPercent = function(value) {
    return (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
  };
  return Continuous2;
})(base_default);
var base_default3 = Continuous;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/linear.js
var Linear = (function(_super) {
  __extends4(Linear2, _super);
  function Linear2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'linear';
    _this.isLinear = true;
    return _this;
  }
  Linear2.prototype.invert = function(value) {
    var percent = this.getInvertPercent(value);
    return this.min + percent * (this.max - this.min);
  };
  Linear2.prototype.initCfg = function() {
    this.tickMethod = 'wilkinson-extended';
    this.nice = false;
  };
  return Linear2;
})(base_default3);
var linear_default = Linear;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/log.js
import { __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/math.js
import { each as each2, isNil as isNil5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function calBase(a, b) {
  var e = Math.E;
  var value;
  if (b >= 0) {
    value = Math.pow(e, Math.log(b) / a);
  } else {
    value = Math.pow(e, Math.log(-b) / a) * -1;
  }
  return value;
}
function log(a, b) {
  if (a === 1) {
    return 1;
  }
  return Math.log(b) / Math.log(a);
}
function getLogPositiveMin(values, base, max) {
  if (isNil5(max)) {
    max = Math.max.apply(null, values);
  }
  var positiveMin = max;
  each2(values, function(value) {
    if (value > 0 && value < positiveMin) {
      positiveMin = value;
    }
  });
  if (positiveMin === max) {
    positiveMin = max / base;
  }
  if (positiveMin > 1) {
    positiveMin = 1;
  }
  return positiveMin;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/log.js
var Log = (function(_super) {
  __extends5(Log2, _super);
  function Log2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'log';
    return _this;
  }
  Log2.prototype.invert = function(value) {
    var base = this.base;
    var max = log(base, this.max);
    var rangeMin = this.rangeMin();
    var range = this.rangeMax() - rangeMin;
    var min;
    var positiveMin = this.positiveMin;
    if (positiveMin) {
      if (value === 0) {
        return 0;
      }
      min = log(base, positiveMin / base);
      var appendPercent = (1 / (max - min)) * range;
      if (value < appendPercent) {
        return (value / appendPercent) * positiveMin;
      }
    } else {
      min = log(base, this.min);
    }
    var percent = (value - rangeMin) / range;
    var tmp = percent * (max - min) + min;
    return Math.pow(base, tmp);
  };
  Log2.prototype.initCfg = function() {
    this.tickMethod = 'log';
    this.base = 10;
    this.tickCount = 6;
    this.nice = true;
  };
  Log2.prototype.setDomain = function() {
    _super.prototype.setDomain.call(this);
    var min = this.min;
    if (min < 0) {
      throw new Error('When you use log scale, the minimum value must be greater than zero!');
    }
    if (min === 0) {
      this.positiveMin = getLogPositiveMin(this.values, this.base, this.max);
    }
  };
  Log2.prototype.getScalePercent = function(value) {
    var max = this.max;
    var min = this.min;
    if (max === min) {
      return 0;
    }
    if (value <= 0) {
      return 0;
    }
    var base = this.base;
    var positiveMin = this.positiveMin;
    if (positiveMin) {
      min = (positiveMin * 1) / base;
    }
    var percent;
    if (value < positiveMin) {
      percent = value / positiveMin / (log(base, max) - log(base, min));
    } else {
      percent = (log(base, value) - log(base, min)) / (log(base, max) - log(base, min));
    }
    return percent;
  };
  return Log2;
})(base_default3);
var log_default = Log;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/pow.js
import { __extends as __extends6 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Pow = (function(_super) {
  __extends6(Pow2, _super);
  function Pow2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'pow';
    return _this;
  }
  Pow2.prototype.invert = function(value) {
    var percent = this.getInvertPercent(value);
    var exponent = this.exponent;
    var max = calBase(exponent, this.max);
    var min = calBase(exponent, this.min);
    var tmp = percent * (max - min) + min;
    var factor = tmp >= 0 ? 1 : -1;
    return Math.pow(tmp, exponent) * factor;
  };
  Pow2.prototype.initCfg = function() {
    this.tickMethod = 'pow';
    this.exponent = 2;
    this.tickCount = 5;
    this.nice = true;
  };
  Pow2.prototype.getScalePercent = function(value) {
    var max = this.max;
    var min = this.min;
    if (max === min) {
      return 0;
    }
    var exponent = this.exponent;
    var percent =
      (calBase(exponent, value) - calBase(exponent, min)) / (calBase(exponent, max) - calBase(exponent, min));
    return percent;
  };
  return Pow2;
})(base_default3);
var pow_default = Pow;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/time.js
import { __extends as __extends7 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import {
  each as each3,
  isDate as isDate2,
  isNil as isNil6,
  isNumber as isNumber4,
  isString as isString3
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Time = (function(_super) {
  __extends7(Time2, _super);
  function Time2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'time';
    return _this;
  }
  Time2.prototype.getText = function(value, index) {
    var numberValue = this.translate(value);
    var formatter = this.formatter;
    return formatter ? formatter(numberValue, index) : timeFormat(numberValue, this.mask);
  };
  Time2.prototype.scale = function(value) {
    var v = value;
    if (isString3(v) || isDate2(v)) {
      v = this.translate(v);
    }
    return _super.prototype.scale.call(this, v);
  };
  Time2.prototype.translate = function(v) {
    return toTimeStamp(v);
  };
  Time2.prototype.initCfg = function() {
    this.tickMethod = 'time-pretty';
    this.mask = 'YYYY-MM-DD';
    this.tickCount = 7;
    this.nice = false;
  };
  Time2.prototype.setDomain = function() {
    var values = this.values;
    var minConfig = this.getConfig('min');
    var maxConfig = this.getConfig('max');
    if (!isNil6(minConfig) || !isNumber4(minConfig)) {
      this.min = this.translate(this.min);
    }
    if (!isNil6(maxConfig) || !isNumber4(maxConfig)) {
      this.max = this.translate(this.max);
    }
    if (values && values.length) {
      var timeStamps_1 = [];
      var min_1 = Infinity;
      var secondMin_1 = min_1;
      var max_1 = 0;
      each3(values, function(v) {
        var timeStamp = toTimeStamp(v);
        if (isNaN(timeStamp)) {
          throw new TypeError('Invalid Time: ' + v + ' in time scale!');
        }
        if (min_1 > timeStamp) {
          secondMin_1 = min_1;
          min_1 = timeStamp;
        } else if (secondMin_1 > timeStamp) {
          secondMin_1 = timeStamp;
        }
        if (max_1 < timeStamp) {
          max_1 = timeStamp;
        }
        timeStamps_1.push(timeStamp);
      });
      if (values.length > 1) {
        this.minTickInterval = secondMin_1 - min_1;
      }
      if (isNil6(minConfig)) {
        this.min = min_1;
      }
      if (isNil6(maxConfig)) {
        this.max = max_1;
      }
    }
  };
  return Time2;
})(linear_default);
var time_default2 = Time;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/quantize.js
import { __extends as __extends8 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { each as each4, head as head2, last as last3 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Quantize = (function(_super) {
  __extends8(Quantize2, _super);
  function Quantize2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'quantize';
    return _this;
  }
  Quantize2.prototype.invert = function(value) {
    var ticks = this.ticks;
    var length = ticks.length;
    var percent = this.getInvertPercent(value);
    var minIndex = Math.floor(percent * (length - 1));
    if (minIndex >= length - 1) {
      return last3(ticks);
    }
    if (minIndex < 0) {
      return head2(ticks);
    }
    var minTick = ticks[minIndex];
    var nextTick = ticks[minIndex + 1];
    var minIndexPercent = minIndex / (length - 1);
    var maxIndexPercent = (minIndex + 1) / (length - 1);
    return minTick + ((percent - minIndexPercent) / (maxIndexPercent - minIndexPercent)) * (nextTick - minTick);
  };
  Quantize2.prototype.initCfg = function() {
    this.tickMethod = 'r-pretty';
    this.tickCount = 5;
    this.nice = true;
  };
  Quantize2.prototype.calculateTicks = function() {
    var ticks = _super.prototype.calculateTicks.call(this);
    if (!this.nice) {
      if (last3(ticks) !== this.max) {
        ticks.push(this.max);
      }
      if (head2(ticks) !== this.min) {
        ticks.unshift(this.min);
      }
    }
    return ticks;
  };
  Quantize2.prototype.getScalePercent = function(value) {
    var ticks = this.ticks;
    if (value < head2(ticks)) {
      return 0;
    }
    if (value > last3(ticks)) {
      return 1;
    }
    var minIndex = 0;
    each4(ticks, function(tick, index) {
      if (value >= tick) {
        minIndex = index;
      } else {
        return false;
      }
    });
    return minIndex / (ticks.length - 1);
  };
  return Quantize2;
})(base_default3);
var quantize_default = Quantize;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/continuous/quantile.js
import { __extends as __extends9 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Quantile = (function(_super) {
  __extends9(Quantile2, _super);
  function Quantile2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'quantile';
    return _this;
  }
  Quantile2.prototype.initCfg = function() {
    this.tickMethod = 'quantile';
    this.tickCount = 5;
    this.nice = true;
  };
  return Quantile2;
})(quantize_default);
var quantile_default = Quantile;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/factory.js
var map2 = {};
function getClass(key) {
  return map2[key];
}
function registerClass(key, cls) {
  if (getClass(key)) {
    throw new Error("type '" + key + "' existed.");
  }
  map2[key] = cls;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/identity/index.js
import { __extends as __extends10 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isNumber as isNumber5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Identity = (function(_super) {
  __extends10(Identity2, _super);
  function Identity2() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this;
    _this.type = 'identity';
    _this.isIdentity = true;
    return _this;
  }
  Identity2.prototype.calculateTicks = function() {
    return this.values;
  };
  Identity2.prototype.scale = function(value) {
    if (this.values[0] !== value && isNumber5(value)) {
      return value;
    }
    return this.range[0];
  };
  Identity2.prototype.invert = function(value) {
    var range = this.range;
    if (value < range[0] || value > range[1]) {
      return NaN;
    }
    return this.values[0];
  };
  return Identity2;
})(base_default);
var identity_default = Identity;

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/cat.js
import {
  filter as filter2,
  isNil as isNil7,
  isNumber as isNumber6,
  last as last4
} from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function calculateCatTicks(cfg) {
  var values = cfg.values,
    tickInterval = cfg.tickInterval,
    tickCount = cfg.tickCount,
    showLast = cfg.showLast;
  if (isNumber6(tickInterval)) {
    var ticks_1 = filter2(values, function(__, i2) {
      return i2 % tickInterval === 0;
    });
    var lastValue = last4(values);
    if (showLast && last4(ticks_1) !== lastValue) {
      ticks_1.push(lastValue);
    }
    return ticks_1;
  }
  var len = values.length;
  var min = cfg.min,
    max = cfg.max;
  if (isNil7(min)) {
    min = 0;
  }
  if (isNil7(max)) {
    max = values.length - 1;
  }
  if (!isNumber6(tickCount) || tickCount >= len) return values.slice(min, max + 1);
  if (tickCount <= 0 || max <= 0) return [];
  var interval = tickCount === 1 ? len : Math.floor(len / (tickCount - 1));
  var ticks = [];
  var idx = min;
  for (var i = 0; i < tickCount; i++) {
    if (idx >= max) break;
    idx = Math.min(min + i * interval, max);
    if (i === tickCount - 1 && showLast) ticks.push(values[max]);
    else ticks.push(values[idx]);
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/d3-linear.js
import { head as head3, isNil as isNil9, last as last5 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/d3-linear.js
function d3Linear(cfg) {
  var min = cfg.min,
    max = cfg.max,
    nice = cfg.nice,
    tickCount = cfg.tickCount;
  var linear2 = new D3Linear();
  linear2.domain([min, max]);
  if (nice) {
    linear2.nice(tickCount);
  }
  return linear2.ticks(tickCount);
}
var DEFAULT_COUNT = 5;
var e10 = Math.sqrt(50);
var e5 = Math.sqrt(10);
var e2 = Math.sqrt(2);
var D3Linear = (function() {
  function D3Linear2() {
    this._domain = [0, 1];
  }
  D3Linear2.prototype.domain = function(domain) {
    if (domain) {
      this._domain = Array.from(domain, Number);
      return this;
    }
    return this._domain.slice();
  };
  D3Linear2.prototype.nice = function(count) {
    var _a, _b;
    if (count === void 0) {
      count = DEFAULT_COUNT;
    }
    var d = this._domain.slice();
    var i0 = 0;
    var i1 = this._domain.length - 1;
    var start = this._domain[i0];
    var stop = this._domain[i1];
    var step;
    if (stop < start) {
      (_a = [stop, start]), (start = _a[0]), (stop = _a[1]);
      (_b = [i1, i0]), (i0 = _b[0]), (i1 = _b[1]);
    }
    step = tickIncrement(start, stop, count);
    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = tickIncrement(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = tickIncrement(start, stop, count);
    }
    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      this.domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      this.domain(d);
    }
    return this;
  };
  D3Linear2.prototype.ticks = function(count) {
    if (count === void 0) {
      count = DEFAULT_COUNT;
    }
    return d3ArrayTicks(this._domain[0], this._domain[this._domain.length - 1], count || DEFAULT_COUNT);
  };
  return D3Linear2;
})();
function d3ArrayTicks(start, stop, count) {
  var reverse;
  var i = -1;
  var n;
  var ticks;
  var step;
  (stop = +stop), (start = +start), (count = +count);
  if (start === stop && count > 0) {
    return [start];
  }
  if ((reverse = stop < start)) {
    (n = start), (start = stop), (stop = n);
  }
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) {
    return [];
  }
  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array((n = Math.ceil(stop - start + 1)));
    while (++i < n) {
      ticks[i] = (start + i) * step;
    }
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array((n = Math.ceil(start - stop + 1)));
    while (++i < n) {
      ticks[i] = (start - i) / step;
    }
  }
  if (reverse) {
    ticks.reverse();
  }
  return ticks;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count);
  var power = Math.floor(Math.log(step) / Math.LN10);
  var error = step / Math.pow(10, power);
  return power >= 0
    ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
    : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/interval.js
import { fixedBase } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function snapMultiple(v, base, snapType) {
  var div;
  if (snapType === 'ceil') {
    div = Math.ceil(v / base);
  } else if (snapType === 'floor') {
    div = Math.floor(v / base);
  } else {
    div = Math.round(v / base);
  }
  return div * base;
}
function intervalTicks(min, max, interval) {
  var minTick = snapMultiple(min, interval, 'floor');
  var maxTick = snapMultiple(max, interval, 'ceil');
  minTick = fixedBase(minTick, interval);
  maxTick = fixedBase(maxTick, interval);
  var ticks = [];
  var availableInterval = Math.max((maxTick - minTick) / (Math.pow(2, 12) - 1), interval);
  for (var i = minTick; i <= maxTick; i = i + availableInterval) {
    var tickValue = fixedBase(i, availableInterval);
    ticks.push(tickValue);
  }
  return {
    min: minTick,
    max: maxTick,
    ticks
  };
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/strict-limit.js
import { isNil as isNil8 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function strictLimit(cfg, defaultMin, defaultMax) {
  var _a;
  var minLimit = cfg.minLimit,
    maxLimit = cfg.maxLimit,
    min = cfg.min,
    max = cfg.max,
    _b = cfg.tickCount,
    tickCount = _b === void 0 ? 5 : _b;
  var tickMin = isNil8(minLimit) ? (isNil8(defaultMin) ? min : defaultMin) : minLimit;
  var tickMax = isNil8(maxLimit) ? (isNil8(defaultMax) ? max : defaultMax) : maxLimit;
  if (tickMin > tickMax) {
    (_a = [tickMin, tickMax]), (tickMax = _a[0]), (tickMin = _a[1]);
  }
  if (tickCount <= 2) {
    return [tickMin, tickMax];
  }
  var step = (tickMax - tickMin) / (tickCount - 1);
  var ticks = [];
  for (var i = 0; i < tickCount; i++) {
    ticks.push(tickMin + step * i);
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/d3-linear.js
function d3LinearTickMethod(cfg) {
  var min = cfg.min,
    max = cfg.max,
    tickInterval = cfg.tickInterval,
    minLimit = cfg.minLimit,
    maxLimit = cfg.maxLimit;
  var ticks = d3Linear(cfg);
  if (!isNil9(minLimit) || !isNil9(maxLimit)) {
    return strictLimit(cfg, head3(ticks), last5(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min, max, tickInterval).ticks;
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/linear.js
import { head as head5, isNil as isNil10, last as last7 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/extended.js
import { head as head4, indexOf, size, last as last6 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/pretty-number.js
function prettyNumber(n) {
  return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(15));
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/extended.js
var DEFAULT_Q = [1, 5, 2, 2.5, 4, 3];
var eps = Number.EPSILON * 100;
function mod(n, m) {
  return ((n % m) + m) % m;
}
function round(n) {
  return Math.round(n * 1e12) / 1e12;
}
function simplicity(q, Q, j, lmin, lmax, lstep) {
  var n = size(Q);
  var i = indexOf(Q, q);
  var v = 0;
  var m = mod(lmin, lstep);
  if ((m < eps || lstep - m < eps) && lmin <= 0 && lmax >= 0) {
    v = 1;
  }
  return 1 - i / (n - 1) - j + v;
}
function simplicityMax(q, Q, j) {
  var n = size(Q);
  var i = indexOf(Q, q);
  var v = 1;
  return 1 - i / (n - 1) - j + v;
}
function density(k, m, dMin, dMax, lMin, lMax) {
  var r = (k - 1) / (lMax - lMin);
  var rt = (m - 1) / (Math.max(lMax, dMax) - Math.min(dMin, lMin));
  return 2 - Math.max(r / rt, rt / r);
}
function densityMax(k, m) {
  if (k >= m) {
    return 2 - (k - 1) / (m - 1);
  }
  return 1;
}
function coverage(dMin, dMax, lMin, lMax) {
  var range = dMax - dMin;
  return 1 - (0.5 * (Math.pow(dMax - lMax, 2) + Math.pow(dMin - lMin, 2))) / Math.pow(0.1 * range, 2);
}
function coverageMax(dMin, dMax, span) {
  var range = dMax - dMin;
  if (span > range) {
    var half = (span - range) / 2;
    return 1 - Math.pow(half, 2) / Math.pow(0.1 * range, 2);
  }
  return 1;
}
function legibility() {
  return 1;
}
function extended(dMin, dMax, n, onlyLoose, Q, w) {
  if (n === void 0) {
    n = 5;
  }
  if (onlyLoose === void 0) {
    onlyLoose = true;
  }
  if (Q === void 0) {
    Q = DEFAULT_Q;
  }
  if (w === void 0) {
    w = [0.25, 0.2, 0.5, 0.05];
  }
  var m = n < 0 ? 0 : Math.round(n);
  if (Number.isNaN(dMin) || Number.isNaN(dMax) || typeof dMin !== 'number' || typeof dMax !== 'number' || !m) {
    return {
      min: 0,
      max: 0,
      ticks: []
    };
  }
  if (dMax - dMin < 1e-15 || m === 1) {
    return {
      min: dMin,
      max: dMax,
      ticks: [dMin]
    };
  }
  if (dMax - dMin > 1e148) {
    var count = n || 5;
    var step_1 = (dMax - dMin) / count;
    return {
      min: dMin,
      max: dMax,
      ticks: Array(count)
        .fill(null)
        .map(function(_, idx) {
          return prettyNumber(dMin + step_1 * idx);
        })
    };
  }
  var best = {
    score: -2,
    lmin: 0,
    lmax: 0,
    lstep: 0
  };
  var j = 1;
  while (j < Infinity) {
    for (var i = 0; i < Q.length; i += 1) {
      var q = Q[i];
      var sm = simplicityMax(q, Q, j);
      if (w[0] * sm + w[1] + w[2] + w[3] < best.score) {
        j = Infinity;
        break;
      }
      var k = 2;
      while (k < Infinity) {
        var dm = densityMax(k, m);
        if (w[0] * sm + w[1] + w[2] * dm + w[3] < best.score) {
          break;
        }
        var delta = (dMax - dMin) / (k + 1) / j / q;
        var z = Math.ceil(Math.log10(delta));
        while (z < Infinity) {
          var step = j * q * Math.pow(10, z);
          var cm = coverageMax(dMin, dMax, step * (k - 1));
          if (w[0] * sm + w[1] * cm + w[2] * dm + w[3] < best.score) {
            break;
          }
          var minStart = Math.floor(dMax / step) * j - (k - 1) * j;
          var maxStart = Math.ceil(dMin / step) * j;
          if (minStart <= maxStart) {
            var count = maxStart - minStart;
            for (var i_1 = 0; i_1 <= count; i_1 += 1) {
              var start = minStart + i_1;
              var lMin = start * (step / j);
              var lMax = lMin + step * (k - 1);
              var lStep = step;
              var s = simplicity(q, Q, j, lMin, lMax, lStep);
              var c = coverage(dMin, dMax, lMin, lMax);
              var g = density(k, m, dMin, dMax, lMin, lMax);
              var l = legibility();
              var score = w[0] * s + w[1] * c + w[2] * g + w[3] * l;
              if (score > best.score && (!onlyLoose || (lMin <= dMin && lMax >= dMax))) {
                best.lmin = lMin;
                best.lmax = lMax;
                best.lstep = lStep;
                best.score = score;
              }
            }
          }
          z += 1;
        }
        k += 1;
      }
    }
    j += 1;
  }
  var lmax = prettyNumber(best.lmax);
  var lmin = prettyNumber(best.lmin);
  var lstep = prettyNumber(best.lstep);
  var tickCount = Math.floor(round((lmax - lmin) / lstep)) + 1;
  var ticks = new Array(tickCount);
  ticks[0] = prettyNumber(lmin);
  for (var i = 1; i < tickCount; i++) {
    ticks[i] = prettyNumber(ticks[i - 1] + lstep);
  }
  return {
    min: Math.min(dMin, head4(ticks)),
    max: Math.max(dMax, last6(ticks)),
    ticks
  };
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/linear.js
function linear(cfg) {
  var min = cfg.min,
    max = cfg.max,
    tickCount = cfg.tickCount,
    nice = cfg.nice,
    tickInterval = cfg.tickInterval,
    minLimit = cfg.minLimit,
    maxLimit = cfg.maxLimit;
  var ticks = extended(min, max, tickCount, nice).ticks;
  if (!isNil10(minLimit) || !isNil10(maxLimit)) {
    return strictLimit(cfg, head5(ticks), last7(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min, max, tickInterval).ticks;
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/log.js
function calculateLogTicks(cfg) {
  var base = cfg.base,
    tickCount = cfg.tickCount,
    min = cfg.min,
    max = cfg.max,
    values = cfg.values;
  var minTick;
  var maxTick = log(base, max);
  if (min > 0) {
    minTick = Math.floor(log(base, min));
  } else {
    var positiveMin = getLogPositiveMin(values, base, max);
    minTick = Math.floor(log(base, positiveMin));
  }
  var count = maxTick - minTick;
  var avg = Math.ceil(count / tickCount);
  var ticks = [];
  for (var i = minTick; i < maxTick + avg; i = i + avg) {
    ticks.push(Math.pow(base, i));
  }
  if (min <= 0) {
    ticks.unshift(0);
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/util/pretty.js
function pretty(min, max, m) {
  if (m === void 0) {
    m = 5;
  }
  if (min === max) {
    return {
      max,
      min,
      ticks: [min]
    };
  }
  var n = m < 0 ? 0 : Math.round(m);
  if (n === 0)
    return {
      max,
      min,
      ticks: []
    };
  var h = 1.5;
  var h5 = 0.5 + 1.5 * h;
  var d = max - min;
  var c = d / n;
  var base = Math.pow(10, Math.floor(Math.log10(c)));
  var unit = base;
  if (2 * base - c < h * (c - unit)) {
    unit = 2 * base;
    if (5 * base - c < h5 * (c - unit)) {
      unit = 5 * base;
      if (10 * base - c < h * (c - unit)) {
        unit = 10 * base;
      }
    }
  }
  var nu = Math.ceil(max / unit);
  var ns = Math.floor(min / unit);
  var hi = Math.max(nu * unit, max);
  var lo = Math.min(ns * unit, min);
  var size2 = Math.floor((hi - lo) / unit) + 1;
  var ticks = new Array(size2);
  for (var i = 0; i < size2; i++) {
    ticks[i] = prettyNumber(lo + i * unit);
  }
  return {
    min: lo,
    max: hi,
    ticks
  };
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/pow.js
function calculatePowTicks(cfg) {
  var exponent = cfg.exponent,
    tickCount = cfg.tickCount;
  var max = Math.ceil(calBase(exponent, cfg.max));
  var min = Math.floor(calBase(exponent, cfg.min));
  var ticks = pretty(min, max, tickCount).ticks;
  return ticks.map(function(tick) {
    var factor = tick >= 0 ? 1 : -1;
    return Math.pow(tick, exponent) * factor;
  });
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/quantile.js
function quantileSorted(x, p) {
  var idx = x.length * p;
  if (p === 1) {
    return x[x.length - 1];
  } else if (p === 0) {
    return x[0];
  } else if (idx % 1 !== 0) {
    return x[Math.ceil(idx) - 1];
  } else if (x.length % 2 === 0) {
    return (x[idx - 1] + x[idx]) / 2;
  } else {
    return x[idx];
  }
}
function calculateTicks(cfg) {
  var tickCount = cfg.tickCount,
    values = cfg.values;
  if (!values || !values.length) {
    return [];
  }
  var sorted = values.slice().sort(function(a, b) {
    return a - b;
  });
  var ticks = [];
  for (var i = 0; i < tickCount; i++) {
    var p = i / (tickCount - 1);
    ticks.push(quantileSorted(sorted, p));
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/r-prettry.js
import { head as head6, isNil as isNil11, last as last8 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function linearPretty(cfg) {
  var min = cfg.min,
    max = cfg.max,
    tickCount = cfg.tickCount,
    tickInterval = cfg.tickInterval,
    minLimit = cfg.minLimit,
    maxLimit = cfg.maxLimit;
  var ticks = pretty(min, max, tickCount).ticks;
  if (!isNil11(minLimit) || !isNil11(maxLimit)) {
    return strictLimit(cfg, head6(ticks), last8(ticks));
  }
  if (tickInterval) {
    return intervalTicks(min, max, tickInterval).ticks;
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/time.js
function calculateTimeTicks(cfg) {
  var min = cfg.min,
    max = cfg.max,
    minTickInterval = cfg.minTickInterval;
  var tickInterval = cfg.tickInterval;
  var tickCount = cfg.tickCount;
  if (tickInterval) {
    tickCount = Math.ceil((max - min) / tickInterval);
  } else {
    tickInterval = getTickInterval(min, max, tickCount)[1];
    var count = (max - min) / tickInterval;
    var ratio = count / tickCount;
    if (ratio > 1) {
      tickInterval = tickInterval * Math.ceil(ratio);
    }
    if (minTickInterval && tickInterval < minTickInterval) {
      tickInterval = minTickInterval;
    }
  }
  tickInterval = Math.max(Math.floor((max - min) / (Math.pow(2, 12) - 1)), tickInterval);
  var ticks = [];
  for (var i = min; i < max + tickInterval; i += tickInterval) {
    ticks.push(i);
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/time-cat.js
import { __assign } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
function timeCat(cfg) {
  var ticks = calculateCatTicks(
    __assign(
      {
        showLast: true
      },
      cfg
    )
  );
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/time-pretty.js
function getYear(date) {
  return new Date(date).getFullYear();
}
function createYear(year) {
  return new Date(year, 0, 1).getTime();
}
function getMonth(date) {
  return new Date(date).getMonth();
}
function diffMonth(min, max) {
  var minYear = getYear(min);
  var maxYear = getYear(max);
  var minMonth = getMonth(min);
  var maxMonth = getMonth(max);
  return (maxYear - minYear) * 12 + ((maxMonth - minMonth) % 12);
}
function creatMonth(year, month) {
  return new Date(year, month, 1).getTime();
}
function diffDay(min, max) {
  return Math.ceil((max - min) / DAY);
}
function diffHour(min, max) {
  return Math.ceil((max - min) / HOUR);
}
function diffMinus(min, max) {
  return Math.ceil((max - min) / (60 * 1e3));
}
function timePretty(cfg) {
  var min = cfg.min,
    max = cfg.max,
    minTickInterval = cfg.minTickInterval,
    tickCount = cfg.tickCount;
  var tickInterval = cfg.tickInterval;
  var ticks = [];
  if (!tickInterval) {
    tickInterval = (max - min) / tickCount;
    if (minTickInterval && tickInterval < minTickInterval) {
      tickInterval = minTickInterval;
    }
  }
  tickInterval = Math.max(Math.floor((max - min) / (Math.pow(2, 12) - 1)), tickInterval);
  var minYear = getYear(min);
  if (tickInterval > YEAR) {
    var maxYear = getYear(max);
    var yearInterval = Math.ceil(tickInterval / YEAR);
    for (var i = minYear; i <= maxYear + yearInterval; i = i + yearInterval) {
      ticks.push(createYear(i));
    }
  } else if (tickInterval > MONTH) {
    var monthInterval = Math.ceil(tickInterval / MONTH);
    var mmMoth = getMonth(min);
    var dMonths = diffMonth(min, max);
    for (var i = 0; i <= dMonths + monthInterval; i = i + monthInterval) {
      ticks.push(creatMonth(minYear, i + mmMoth));
    }
  } else if (tickInterval > DAY) {
    var date = new Date(min);
    var year = date.getFullYear();
    var month = date.getMonth();
    var mday = date.getDate();
    var day = Math.ceil(tickInterval / DAY);
    var ddays = diffDay(min, max);
    for (var i = 0; i < ddays + day; i = i + day) {
      ticks.push(new Date(year, month, mday + i).getTime());
    }
  } else if (tickInterval > HOUR) {
    var date = new Date(min);
    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();
    var hour = date.getHours();
    var hours = Math.ceil(tickInterval / HOUR);
    var dHours = diffHour(min, max);
    for (var i = 0; i <= dHours + hours; i = i + hours) {
      ticks.push(new Date(year, month, day, hour + i).getTime());
    }
  } else if (tickInterval > MINUTE) {
    var dMinus = diffMinus(min, max);
    var minutes = Math.ceil(tickInterval / MINUTE);
    for (var i = 0; i <= dMinus + minutes; i = i + minutes) {
      ticks.push(min + i * MINUTE);
    }
  } else {
    var interval = tickInterval;
    if (interval < SECOND) {
      interval = SECOND;
    }
    var minSecond = Math.floor(min / SECOND) * SECOND;
    var dSeconds = Math.ceil((max - min) / SECOND);
    var seconds = Math.ceil(interval / SECOND);
    for (var i = 0; i < dSeconds + seconds; i = i + seconds) {
      ticks.push(minSecond + i * SECOND);
    }
  }
  if (ticks.length >= 512) {
    console.warn(
      'Notice: current ticks length(' +
        ticks.length +
        ') >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ' +
        tickInterval +
        ') is too small, increase the value to solve the problem!'
    );
  }
  return ticks;
}

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/tick-method/index.js
registerTickMethod('cat', calculateCatTicks);
registerTickMethod('time-cat', timeCat);
registerTickMethod('wilkinson-extended', linear);
registerTickMethod('r-pretty', linearPretty);
registerTickMethod('time', calculateTimeTicks);
registerTickMethod('time-pretty', timePretty);
registerTickMethod('log', calculateLogTicks);
registerTickMethod('pow', calculatePowTicks);
registerTickMethod('quantile', calculateTicks);
registerTickMethod('d3-linear', d3LinearTickMethod);

// esm-build-74cc2cb8b7a369c6745cc054b3f3136b0152944b-aea524c8/node_modules/@antv/scale/esm/index.js
registerClass('cat', base_default2);
registerClass('category', base_default2);
registerClass('identity', identity_default);
registerClass('linear', linear_default);
registerClass('log', log_default);
registerClass('pow', pow_default);
registerClass('time', time_default2);
registerClass('timeCat', time_default);
registerClass('quantize', quantize_default);
registerClass('quantile', quantile_default);
export {
  base_default2 as Category,
  identity_default as Identity,
  linear_default as Linear,
  log_default as Log,
  pow_default as Pow,
  quantile_default as Quantile,
  quantize_default as Quantize,
  base_default as Scale,
  time_default2 as Time,
  time_default as TimeCat,
  getClass as getScale,
  getTickMethod,
  registerClass as registerScale,
  registerTickMethod
};
