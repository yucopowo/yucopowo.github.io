/* esm.sh - esbuild bundle(@antv/attr@0.3.3) es2022 development */
// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/base.js
import { isArray, isNil, isString } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var toScaleString = function(scale, value) {
  if (isString(value)) {
    return value;
  }
  return scale.invert(scale.scale(value));
};
var Attribute = (function() {
  function Attribute2(cfg) {
    this.names = [];
    this.scales = [];
    this.linear = false;
    this.values = [];
    this.callback = function() {
      return [];
    };
    this._parseCfg(cfg);
  }
  Attribute2.prototype.mapping = function() {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    var values = params.map(function(param, idx) {
      return _this._toOriginParam(param, _this.scales[idx]);
    });
    return this.callback.apply(this, values);
  };
  Attribute2.prototype.getLinearValue = function(percent) {
    var steps = this.values.length - 1;
    var step = Math.floor(steps * percent);
    var leftPercent = steps * percent - step;
    var start = this.values[step];
    var end = step === steps ? start : this.values[step + 1];
    return start + (end - start) * leftPercent;
  };
  Attribute2.prototype.getNames = function() {
    var scales = this.scales;
    var names = this.names;
    var length = Math.min(scales.length, names.length);
    var rst = [];
    for (var i = 0; i < length; i += 1) {
      rst.push(names[i]);
    }
    return rst;
  };
  Attribute2.prototype.getFields = function() {
    return this.scales.map(function(scale) {
      return scale.field;
    });
  };
  Attribute2.prototype.getScale = function(name) {
    return this.scales[this.names.indexOf(name)];
  };
  Attribute2.prototype.defaultCallback = function() {
    var _this = this;
    var params = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      params[_i] = arguments[_i];
    }
    if (params.length === 0) {
      return this.values;
    }
    return params.map(function(param, idx) {
      var scale = _this.scales[idx];
      return scale.type === 'identity' ? scale.values[0] : _this._getAttributeValue(scale, param);
    });
  };
  Attribute2.prototype._parseCfg = function(cfg) {
    var _this = this;
    var _a = cfg.type,
      type = _a === void 0 ? 'base' : _a,
      _b = cfg.names,
      names = _b === void 0 ? [] : _b,
      _c = cfg.scales,
      scales = _c === void 0 ? [] : _c,
      _d = cfg.values,
      values = _d === void 0 ? [] : _d,
      callback = cfg.callback;
    this.type = type;
    this.scales = scales;
    this.values = values;
    this.names = names;
    this.callback = function() {
      var params = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        params[_i] = arguments[_i];
      }
      if (callback) {
        var ret = callback.apply(void 0, params);
        if (!isNil(ret)) {
          return [ret];
        }
      }
      return _this.defaultCallback.apply(_this, params);
    };
  };
  Attribute2.prototype._getAttributeValue = function(scale, value) {
    if (scale.isCategory && !this.linear) {
      var idx = scale.translate(value);
      return this.values[idx % this.values.length];
    }
    var percent = scale.scale(value);
    return this.getLinearValue(percent);
  };
  Attribute2.prototype._toOriginParam = function(param, scale) {
    return !scale.isLinear
      ? isArray(param)
        ? param.map(function(p) {
            return toScaleString(scale, p);
          })
        : toScaleString(scale, param)
      : param;
  };
  return Attribute2;
})();
var base_default = Attribute;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/color.js
import { __extends } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import colorUtil from '/cdn/v99/@antv/color-util@2.0.6/es2022/color-util.development.js';
import { isString as isString2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Color = (function(_super) {
  __extends(Color2, _super);
  function Color2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'color';
    _this.names = ['color'];
    if (isString2(_this.values)) {
      _this.linear = true;
    }
    _this.gradient = colorUtil.gradient(_this.values);
    return _this;
  }
  Color2.prototype.getLinearValue = function(percent) {
    return this.gradient(percent);
  };
  return Color2;
})(base_default);
var color_default = Color;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/opacity.js
import { __extends as __extends2 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Opacity = (function(_super) {
  __extends2(Opacity2, _super);
  function Opacity2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'opacity';
    _this.names = ['opacity'];
    return _this;
  }
  return Opacity2;
})(base_default);
var opacity_default = Opacity;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/position.js
import { __extends as __extends3 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
import { isArray as isArray2, isNil as isNil2 } from '/cdn/v99/@antv/util@2.0.17/es2022/util.development.js';
var Position = (function(_super) {
  __extends3(Position2, _super);
  function Position2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.names = ['x', 'y'];
    _this.type = 'position';
    return _this;
  }
  Position2.prototype.mapping = function(x, y) {
    var _a = this.scales,
      scaleX = _a[0],
      scaleY = _a[1];
    if (isNil2(x) || isNil2(y)) {
      return [];
    }
    return [
      isArray2(x)
        ? x.map(function(xi) {
            return scaleX.scale(xi);
          })
        : scaleX.scale(x),
      isArray2(y)
        ? y.map(function(yi) {
            return scaleY.scale(yi);
          })
        : scaleY.scale(y)
    ];
  };
  return Position2;
})(base_default);
var position_default = Position;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/shape.js
import { __extends as __extends4 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Shape = (function(_super) {
  __extends4(Shape2, _super);
  function Shape2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'shape';
    _this.names = ['shape'];
    return _this;
  }
  Shape2.prototype.getLinearValue = function(percent) {
    var idx = Math.round((this.values.length - 1) * percent);
    return this.values[idx];
  };
  return Shape2;
})(base_default);
var shape_default = Shape;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/attributes/size.js
import { __extends as __extends5 } from '/cdn/v99/tslib@2.4.1/es2022/tslib.development.js';
var Size = (function(_super) {
  __extends5(Size2, _super);
  function Size2(cfg) {
    var _this = _super.call(this, cfg) || this;
    _this.type = 'size';
    _this.names = ['size'];
    return _this;
  }
  return Size2;
})(base_default);
var size_default = Size;

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/interface.js
import { Scale } from '/cdn/v99/@antv/scale@0.3.18/es2022/scale.development.js';

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/factory.js
var ATTRIBUTE_MAP = {};
var getAttribute = function(type) {
  return ATTRIBUTE_MAP[type.toLowerCase()];
};
var registerAttribute = function(type, ctor) {
  if (getAttribute(type)) {
    throw new Error("Attribute type '" + type + "' existed.");
  }
  ATTRIBUTE_MAP[type.toLowerCase()] = ctor;
};

// esm-build-4e889c5516a4eaf7e6ac9d90a7b4c6efb957203a-a3483908/node_modules/@antv/attr/esm/index.js
registerAttribute('Color', color_default);
registerAttribute('Opacity', opacity_default);
registerAttribute('Position', position_default);
registerAttribute('Shape', shape_default);
registerAttribute('Size', size_default);
export {
  base_default as Attribute,
  color_default as Color,
  opacity_default as Opacity,
  position_default as Position,
  Scale,
  shape_default as Shape,
  size_default as Size,
  getAttribute,
  registerAttribute
};
