/* esm.sh - esbuild bundle(@antv/adjust@0.2.5) es2022 development */
// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/adjust.js
import * as _ from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/constant.js
var DEFAULT_Y = 0;
var MARGIN_RATIO = 1 / 2;
var DODGE_RATIO = 1 / 2;
var GAP = 0.05;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/adjust.js
var Adjust = (function() {
  function Adjust2(cfg) {
    var xField = cfg.xField,
      yField = cfg.yField,
      _a = cfg.adjustNames,
      adjustNames = _a === void 0 ? ['x', 'y'] : _a,
      dimValuesMap = cfg.dimValuesMap;
    this.adjustNames = adjustNames;
    this.xField = xField;
    this.yField = yField;
    this.dimValuesMap = dimValuesMap;
  }
  Adjust2.prototype.isAdjust = function(dim) {
    return this.adjustNames.indexOf(dim) >= 0;
  };
  Adjust2.prototype.getAdjustRange = function(dim, dimValue, values) {
    var yField = this.yField;
    var index = values.indexOf(dimValue);
    var length = values.length;
    var pre;
    var next;
    if (!yField && this.isAdjust('y')) {
      pre = 0;
      next = 1;
    } else if (length > 1) {
      pre = values[index === 0 ? 0 : index - 1];
      next = values[index === length - 1 ? length - 1 : index + 1];
      if (index !== 0) {
        pre += (dimValue - pre) / 2;
      } else {
        pre -= (next - dimValue) / 2;
      }
      if (index !== length - 1) {
        next -= (next - dimValue) / 2;
      } else {
        next += (dimValue - values[length - 2]) / 2;
      }
    } else {
      pre = dimValue === 0 ? 0 : dimValue - 0.5;
      next = dimValue === 0 ? 1 : dimValue + 0.5;
    }
    return {
      pre,
      next
    };
  };
  Adjust2.prototype.adjustData = function(groupedDataArray, mergedData) {
    var _this = this;
    var dimValuesMap = this.getDimValues(mergedData);
    _.each(groupedDataArray, function(dataArray, index) {
      _.each(dimValuesMap, function(values, dim) {
        _this.adjustDim(dim, values, dataArray, index);
      });
    });
  };
  Adjust2.prototype.groupData = function(data, dim) {
    _.each(data, function(record) {
      if (record[dim] === void 0) {
        record[dim] = DEFAULT_Y;
      }
    });
    return _.groupBy(data, dim);
  };
  Adjust2.prototype.adjustDim = function(dim, values, data, index) {};
  Adjust2.prototype.getDimValues = function(mergedData) {
    var _a = this,
      xField = _a.xField,
      yField = _a.yField;
    var dimValuesMap = _.assign({}, this.dimValuesMap);
    var dims = [];
    if (xField && this.isAdjust('x')) {
      dims.push(xField);
    }
    if (yField && this.isAdjust('y')) {
      dims.push(yField);
    }
    dims.forEach(function(dim2) {
      if (dimValuesMap && dimValuesMap[dim2]) {
        return;
      }
      dimValuesMap[dim2] = _.valuesOfKey(mergedData, dim2).sort(function(v1, v2) {
        return v1 - v2;
      });
    });
    if (!yField && this.isAdjust('y')) {
      var dim = 'y';
      dimValuesMap[dim] = [DEFAULT_Y, 1];
    }
    return dimValuesMap;
  };
  return Adjust2;
})();
var adjust_default = Adjust;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/factory.js
var ADJUST_MAP = {};
var getAdjust = function(type) {
  return ADJUST_MAP[type.toLowerCase()];
};
var registerAdjust = function(type, ctor) {
  if (getAdjust(type)) {
    throw new Error("Adjust type '" + type + "' existed.");
  }
  ADJUST_MAP[type.toLowerCase()] = ctor;
};

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/dodge.js
import { __extends } from '/cdn/v99/tslib@1.14.1/es2022/tslib.development.js';
import * as _2 from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Dodge = (function(_super) {
  __extends(Dodge2, _super);
  function Dodge2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.cacheMap = {};
    _this.adjustDataArray = [];
    _this.mergeData = [];
    var _a = cfg.marginRatio,
      marginRatio = _a === void 0 ? MARGIN_RATIO : _a,
      _b = cfg.dodgeRatio,
      dodgeRatio = _b === void 0 ? DODGE_RATIO : _b,
      dodgeBy = cfg.dodgeBy,
      intervalPadding = cfg.intervalPadding,
      dodgePadding = cfg.dodgePadding,
      xDimensionLength = cfg.xDimensionLength,
      groupNum = cfg.groupNum,
      defaultSize = cfg.defaultSize,
      maxColumnWidth = cfg.maxColumnWidth,
      minColumnWidth = cfg.minColumnWidth,
      columnWidthRatio = cfg.columnWidthRatio,
      customOffset = cfg.customOffset;
    _this.marginRatio = marginRatio;
    _this.dodgeRatio = dodgeRatio;
    _this.dodgeBy = dodgeBy;
    _this.intervalPadding = intervalPadding;
    _this.dodgePadding = dodgePadding;
    _this.xDimensionLegenth = xDimensionLength;
    _this.groupNum = groupNum;
    _this.defaultSize = defaultSize;
    _this.maxColumnWidth = maxColumnWidth;
    _this.minColumnWidth = minColumnWidth;
    _this.columnWidthRatio = columnWidthRatio;
    _this.customOffset = customOffset;
    return _this;
  }
  Dodge2.prototype.process = function(groupDataArray) {
    var groupedDataArray = _2.clone(groupDataArray);
    var mergeData = _2.flatten(groupedDataArray);
    var dodgeBy = this.dodgeBy;
    var adjustDataArray = dodgeBy ? _2.group(mergeData, dodgeBy) : groupedDataArray;
    this.cacheMap = {};
    this.adjustDataArray = adjustDataArray;
    this.mergeData = mergeData;
    this.adjustData(adjustDataArray, mergeData);
    this.adjustDataArray = [];
    this.mergeData = [];
    return groupedDataArray;
  };
  Dodge2.prototype.adjustDim = function(dim, values, data, frameIndex) {
    var _this = this;
    var customOffset = this.customOffset;
    var map2 = this.getDistribution(dim);
    var groupData = this.groupData(data, dim);
    _2.each(groupData, function(group2, key) {
      var range;
      if (values.length === 1) {
        range = {
          pre: values[0] - 1,
          next: values[0] + 1
        };
      } else {
        range = _this.getAdjustRange(dim, parseFloat(key), values);
      }
      _2.each(group2, function(d) {
        var value = d[dim];
        var valueArr = map2[value];
        var valIndex = valueArr.indexOf(frameIndex);
        if (!_2.isNil(customOffset)) {
          var pre = range.pre,
            next = range.next;
          d[dim] = _2.isFunction(customOffset) ? customOffset(d, range) : (pre + next) / 2 + customOffset;
        } else {
          d[dim] = _this.getDodgeOffset(range, valIndex, valueArr.length);
        }
      });
    });
    return [];
  };
  Dodge2.prototype.getDodgeOffset = function(range, idx, len) {
    var _a = this,
      dodgeRatio = _a.dodgeRatio,
      marginRatio = _a.marginRatio,
      intervalPadding = _a.intervalPadding,
      dodgePadding = _a.dodgePadding;
    var pre = range.pre,
      next = range.next;
    var tickLength = next - pre;
    var position;
    if (!_2.isNil(intervalPadding) && _2.isNil(dodgePadding) && intervalPadding >= 0) {
      var offset = this.getIntervalOnlyOffset(len, idx);
      position = pre + offset;
    } else if (!_2.isNil(dodgePadding) && _2.isNil(intervalPadding) && dodgePadding >= 0) {
      var offset = this.getDodgeOnlyOffset(len, idx);
      position = pre + offset;
    } else if (!_2.isNil(intervalPadding) && !_2.isNil(dodgePadding) && intervalPadding >= 0 && dodgePadding >= 0) {
      var offset = this.getIntervalAndDodgeOffset(len, idx);
      position = pre + offset;
    } else {
      var width = (tickLength * dodgeRatio) / len;
      var margin = marginRatio * width;
      var offset =
        (1 / 2) * (tickLength - len * width - (len - 1) * margin) +
        ((idx + 1) * width + idx * margin) -
        (1 / 2) * width -
        (1 / 2) * tickLength;
      position = (pre + next) / 2 + offset;
    }
    return position;
  };
  Dodge2.prototype.getIntervalOnlyOffset = function(len, idx) {
    var _a = this,
      defaultSize = _a.defaultSize,
      intervalPadding = _a.intervalPadding,
      xDimensionLegenth = _a.xDimensionLegenth,
      groupNum = _a.groupNum,
      dodgeRatio = _a.dodgeRatio,
      maxColumnWidth = _a.maxColumnWidth,
      minColumnWidth = _a.minColumnWidth,
      columnWidthRatio = _a.columnWidthRatio;
    var normalizedIntervalPadding = intervalPadding / xDimensionLegenth;
    var normalizedDodgePadding =
      (((1 - (groupNum - 1) * normalizedIntervalPadding) / groupNum) * dodgeRatio) / (len - 1);
    var geomWidth =
      ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
    geomWidth = !_2.isNil(columnWidthRatio) ? (1 / groupNum / len) * columnWidthRatio : geomWidth;
    if (!_2.isNil(maxColumnWidth)) {
      var normalizedMaxWidht = maxColumnWidth / xDimensionLegenth;
      geomWidth = Math.min(geomWidth, normalizedMaxWidht);
    }
    if (!_2.isNil(minColumnWidth)) {
      var normalizedMinWidht = minColumnWidth / xDimensionLegenth;
      geomWidth = Math.max(geomWidth, normalizedMinWidht);
    }
    geomWidth = defaultSize ? defaultSize / xDimensionLegenth : geomWidth;
    normalizedDodgePadding =
      ((1 - (groupNum - 1) * normalizedIntervalPadding) / groupNum - len * geomWidth) / (len - 1);
    var offset =
      ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + (1 / 2) * normalizedIntervalPadding) * groupNum -
      normalizedIntervalPadding / 2;
    return offset;
  };
  Dodge2.prototype.getDodgeOnlyOffset = function(len, idx) {
    var _a = this,
      defaultSize = _a.defaultSize,
      dodgePadding = _a.dodgePadding,
      xDimensionLegenth = _a.xDimensionLegenth,
      groupNum = _a.groupNum,
      marginRatio = _a.marginRatio,
      maxColumnWidth = _a.maxColumnWidth,
      minColumnWidth = _a.minColumnWidth,
      columnWidthRatio = _a.columnWidthRatio;
    var normalizedDodgePadding = dodgePadding / xDimensionLegenth;
    var normalizedIntervalPadding = (1 * marginRatio) / (groupNum - 1);
    var geomWidth =
      ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
    geomWidth = columnWidthRatio ? (1 / groupNum / len) * columnWidthRatio : geomWidth;
    if (!_2.isNil(maxColumnWidth)) {
      var normalizedMaxWidht = maxColumnWidth / xDimensionLegenth;
      geomWidth = Math.min(geomWidth, normalizedMaxWidht);
    }
    if (!_2.isNil(minColumnWidth)) {
      var normalizedMinWidht = minColumnWidth / xDimensionLegenth;
      geomWidth = Math.max(geomWidth, normalizedMinWidht);
    }
    geomWidth = defaultSize ? defaultSize / xDimensionLegenth : geomWidth;
    normalizedIntervalPadding =
      (1 - (geomWidth * len + normalizedDodgePadding * (len - 1)) * groupNum) / (groupNum - 1);
    var offset =
      ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + (1 / 2) * normalizedIntervalPadding) * groupNum -
      normalizedIntervalPadding / 2;
    return offset;
  };
  Dodge2.prototype.getIntervalAndDodgeOffset = function(len, idx) {
    var _a = this,
      intervalPadding = _a.intervalPadding,
      dodgePadding = _a.dodgePadding,
      xDimensionLegenth = _a.xDimensionLegenth,
      groupNum = _a.groupNum;
    var normalizedIntervalPadding = intervalPadding / xDimensionLegenth;
    var normalizedDodgePadding = dodgePadding / xDimensionLegenth;
    var geomWidth =
      ((1 - normalizedIntervalPadding * (groupNum - 1)) / groupNum - normalizedDodgePadding * (len - 1)) / len;
    var offset =
      ((1 / 2 + idx) * geomWidth + idx * normalizedDodgePadding + (1 / 2) * normalizedIntervalPadding) * groupNum -
      normalizedIntervalPadding / 2;
    return offset;
  };
  Dodge2.prototype.getDistribution = function(dim) {
    var groupedDataArray = this.adjustDataArray;
    var cacheMap = this.cacheMap;
    var map2 = cacheMap[dim];
    if (!map2) {
      map2 = {};
      _2.each(groupedDataArray, function(data, index) {
        var values = _2.valuesOfKey(data, dim);
        if (!values.length) {
          values.push(0);
        }
        _2.each(values, function(val) {
          if (!map2[val]) {
            map2[val] = [];
          }
          map2[val].push(index);
        });
      });
      cacheMap[dim] = map2;
    }
    return map2;
  };
  return Dodge2;
})(adjust_default);
var dodge_default = Dodge;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/jitter.js
import { __extends as __extends2 } from '/cdn/v99/tslib@1.14.1/es2022/tslib.development.js';
import * as _3 from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
function randomNumber(min, max) {
  return (max - min) * Math.random() + min;
}
var Jitter = (function(_super) {
  __extends2(Jitter2, _super);
  function Jitter2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Jitter2.prototype.process = function(groupDataArray) {
    var groupedDataArray = _3.clone(groupDataArray);
    var mergeData = _3.flatten(groupedDataArray);
    this.adjustData(groupedDataArray, mergeData);
    return groupedDataArray;
  };
  Jitter2.prototype.adjustDim = function(dim, values, dataArray) {
    var _this = this;
    var groupDataArray = this.groupData(dataArray, dim);
    return _3.each(groupDataArray, function(data, dimValue) {
      return _this.adjustGroup(data, dim, parseFloat(dimValue), values);
    });
  };
  Jitter2.prototype.getAdjustOffset = function(range) {
    var pre = range.pre,
      next = range.next;
    var margin = (next - pre) * GAP;
    return randomNumber(pre + margin, next - margin);
  };
  Jitter2.prototype.adjustGroup = function(group2, dim, dimValue, values) {
    var _this = this;
    var range = this.getAdjustRange(dim, dimValue, values);
    _3.each(group2, function(data) {
      data[dim] = _this.getAdjustOffset(range);
    });
    return group2;
  };
  return Jitter2;
})(adjust_default);
var jitter_default = Jitter;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/stack.js
import { __assign, __extends as __extends3 } from '/cdn/v99/tslib@1.14.1/es2022/tslib.development.js';
import * as _4 from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Cache2 = _4.Cache;
var Stack = (function(_super) {
  __extends3(Stack2, _super);
  function Stack2(cfg) {
    var _this = _super.call(this, cfg) || this;
    var _a = cfg.adjustNames,
      adjustNames = _a === void 0 ? ['y'] : _a,
      _b = cfg.height,
      height = _b === void 0 ? NaN : _b,
      _c = cfg.size,
      size = _c === void 0 ? 10 : _c,
      _d = cfg.reverseOrder,
      reverseOrder = _d === void 0 ? false : _d;
    _this.adjustNames = adjustNames;
    _this.height = height;
    _this.size = size;
    _this.reverseOrder = reverseOrder;
    return _this;
  }
  Stack2.prototype.process = function(groupDataArray) {
    var _a = this,
      yField = _a.yField,
      reverseOrder = _a.reverseOrder;
    var d = yField ? this.processStack(groupDataArray) : this.processOneDimStack(groupDataArray);
    return reverseOrder ? this.reverse(d) : d;
  };
  Stack2.prototype.reverse = function(groupedDataArray) {
    return groupedDataArray.slice(0).reverse();
  };
  Stack2.prototype.processStack = function(groupDataArray) {
    var _a = this,
      xField = _a.xField,
      yField = _a.yField,
      reverseOrder = _a.reverseOrder;
    var groupedDataArray = reverseOrder ? this.reverse(groupDataArray) : groupDataArray;
    var positive = new Cache2();
    var negative = new Cache2();
    return groupedDataArray.map(function(dataArray) {
      return dataArray.map(function(data) {
        var _a2;
        var x = _4.get(data, xField, 0);
        var y = _4.get(data, [yField]);
        var xKey = x.toString();
        y = _4.isArray(y) ? y[1] : y;
        if (!_4.isNil(y)) {
          var cache = y >= 0 ? positive : negative;
          if (!cache.has(xKey)) {
            cache.set(xKey, 0);
          }
          var xValue = cache.get(xKey);
          var newXValue = y + xValue;
          cache.set(xKey, newXValue);
          return __assign(__assign({}, data), ((_a2 = {}), (_a2[yField] = [xValue, newXValue]), _a2));
        }
        return data;
      });
    });
  };
  Stack2.prototype.processOneDimStack = function(groupDataArray) {
    var _this = this;
    var _a = this,
      xField = _a.xField,
      height = _a.height,
      reverseOrder = _a.reverseOrder;
    var yField = 'y';
    var groupedDataArray = reverseOrder ? this.reverse(groupDataArray) : groupDataArray;
    var cache = new Cache2();
    return groupedDataArray.map(function(dataArray) {
      return dataArray.map(function(data) {
        var _a2;
        var size = _this.size;
        var xValue = data[xField];
        var stackHeight = (size * 2) / height;
        if (!cache.has(xValue)) {
          cache.set(xValue, stackHeight / 2);
        }
        var stackValue = cache.get(xValue);
        cache.set(xValue, stackValue + stackHeight);
        return __assign(__assign({}, data), ((_a2 = {}), (_a2[yField] = stackValue), _a2));
      });
    });
  };
  return Stack2;
})(adjust_default);
var stack_default = Stack;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/adjusts/symmetric.js
import { __assign as __assign2, __extends as __extends4 } from '/cdn/v99/tslib@1.14.1/es2022/tslib.development.js';
import * as _5 from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Symmetric = (function(_super) {
  __extends4(Symmetric2, _super);
  function Symmetric2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Symmetric2.prototype.process = function(groupDataArray) {
    var mergeData = _5.flatten(groupDataArray);
    var _a = this,
      xField = _a.xField,
      yField = _a.yField;
    var cache = this.getXValuesMaxMap(mergeData);
    var max = Math.max.apply(
      Math,
      Object.keys(cache).map(function(key) {
        return cache[key];
      })
    );
    return _5.map(groupDataArray, function(dataArray) {
      return _5.map(dataArray, function(data) {
        var _a2, _b;
        var yValue = data[yField];
        var xValue = data[xField];
        if (_5.isArray(yValue)) {
          var off_1 = (max - cache[xValue]) / 2;
          return __assign2(
            __assign2({}, data),
            ((_a2 = {}),
            (_a2[yField] = _5.map(yValue, function(y) {
              return off_1 + y;
            })),
            _a2)
          );
        }
        var offset = (max - yValue) / 2;
        return __assign2(__assign2({}, data), ((_b = {}), (_b[yField] = [offset, yValue + offset]), _b));
      });
    });
  };
  Symmetric2.prototype.getXValuesMaxMap = function(mergeData) {
    var _this = this;
    var _a = this,
      xField = _a.xField,
      yField = _a.yField;
    var groupDataArray = _5.groupBy(mergeData, function(data) {
      return data[xField];
    });
    return _5.mapValues(groupDataArray, function(dataArray) {
      return _this.getDimMaxValue(dataArray, yField);
    });
  };
  Symmetric2.prototype.getDimMaxValue = function(mergeData, dim) {
    var dimValues = _5.map(mergeData, function(data) {
      return _5.get(data, dim, []);
    });
    var flattenValues = _5.flatten(dimValues);
    return Math.max.apply(Math, flattenValues);
  };
  return Symmetric2;
})(adjust_default);
var symmetric_default = Symmetric;

// esm-build-33df46375853c5cb9e7fe42ab3c43027caff7048-eaec520d/node_modules/@antv/adjust/esm/index.js
registerAdjust('Dodge', dodge_default);
registerAdjust('Jitter', jitter_default);
registerAdjust('Stack', stack_default);
registerAdjust('Symmetric', symmetric_default);
export { adjust_default as Adjust, getAdjust, registerAdjust };
