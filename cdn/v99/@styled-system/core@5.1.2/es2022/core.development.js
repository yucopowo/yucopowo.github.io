/* esm.sh - esbuild bundle(@styled-system/core@5.1.2) es2022 development */
// esm-build-df764917c0f595153a53aa1860d23cbebf8eea22-28db0d98/node_modules/@styled-system/core/dist/index.esm.js
import assign from '/cdn/v99/object-assign@4.1.1/es2022/object-assign.development.js';
var merge = function merge2(a, b) {
  var result = assign({}, a, b);
  for (var key in a) {
    var _assign;
    if (!a[key] || typeof b[key] !== 'object') continue;
    assign(result, ((_assign = {}), (_assign[key] = assign(a[key], b[key])), _assign));
  }
  return result;
};
var sort = function sort2(obj) {
  var next = {};
  Object.keys(obj)
    .sort(function(a, b) {
      return a.localeCompare(b, void 0, {
        numeric: true,
        sensitivity: 'base'
      });
    })
    .forEach(function(key) {
      next[key] = obj[key];
    });
  return next;
};
var defaults = {
  breakpoints: [40, 52, 64].map(function(n) {
    return n + 'em';
  })
};
var createMediaQuery = function createMediaQuery2(n) {
  return '@media screen and (min-width: ' + n + ')';
};
var getValue = function getValue2(n, scale) {
  return get(scale, n, n);
};
var get = function get2(obj, key, def, p, undef) {
  key = key && key.split ? key.split('.') : [key];
  for (p = 0; p < key.length; p++) {
    obj = obj ? obj[key[p]] : undef;
  }
  return obj === undef ? def : obj;
};
var createParser = function createParser2(config) {
  var cache = {};
  var parse = function parse2(props) {
    var styles = {};
    var shouldSort = false;
    var isCacheDisabled = props.theme && props.theme.disableStyledSystemCache;
    for (var key in props) {
      if (!config[key]) continue;
      var sx = config[key];
      var raw = props[key];
      var scale = get(props.theme, sx.scale, sx.defaults);
      if (typeof raw === 'object') {
        cache.breakpoints =
          (!isCacheDisabled && cache.breakpoints) || get(props.theme, 'breakpoints', defaults.breakpoints);
        if (Array.isArray(raw)) {
          cache.media = (!isCacheDisabled && cache.media) || [null].concat(cache.breakpoints.map(createMediaQuery));
          styles = merge(styles, parseResponsiveStyle(cache.media, sx, scale, raw, props));
          continue;
        }
        if (raw !== null) {
          styles = merge(styles, parseResponsiveObject(cache.breakpoints, sx, scale, raw, props));
          shouldSort = true;
        }
        continue;
      }
      assign(styles, sx(raw, scale, props));
    }
    if (shouldSort) {
      styles = sort(styles);
    }
    return styles;
  };
  parse.config = config;
  parse.propNames = Object.keys(config);
  parse.cache = cache;
  var keys = Object.keys(config).filter(function(k) {
    return k !== 'config';
  });
  if (keys.length > 1) {
    keys.forEach(function(key) {
      var _createParser;
      parse[key] = createParser2(((_createParser = {}), (_createParser[key] = config[key]), _createParser));
    });
  }
  return parse;
};
var parseResponsiveStyle = function parseResponsiveStyle2(mediaQueries, sx, scale, raw, _props) {
  var styles = {};
  raw.slice(0, mediaQueries.length).forEach(function(value, i) {
    var media = mediaQueries[i];
    var style = sx(value, scale, _props);
    if (!media) {
      assign(styles, style);
    } else {
      var _assign2;
      assign(styles, ((_assign2 = {}), (_assign2[media] = assign({}, styles[media], style)), _assign2));
    }
  });
  return styles;
};
var parseResponsiveObject = function parseResponsiveObject2(breakpoints, sx, scale, raw, _props) {
  var styles = {};
  for (var key in raw) {
    var breakpoint = breakpoints[key];
    var value = raw[key];
    var style = sx(value, scale, _props);
    if (!breakpoint) {
      assign(styles, style);
    } else {
      var _assign3;
      var media = createMediaQuery(breakpoint);
      assign(styles, ((_assign3 = {}), (_assign3[media] = assign({}, styles[media], style)), _assign3));
    }
  }
  return styles;
};
var createStyleFunction = function createStyleFunction2(_ref) {
  var properties = _ref.properties,
    property = _ref.property,
    scale = _ref.scale,
    _ref$transform = _ref.transform,
    transform = _ref$transform === void 0 ? getValue : _ref$transform,
    defaultScale = _ref.defaultScale;
  properties = properties || [property];
  var sx = function sx2(value, scale2, _props) {
    var result = {};
    var n = transform(value, scale2, _props);
    if (n === null) return;
    properties.forEach(function(prop) {
      result[prop] = n;
    });
    return result;
  };
  sx.scale = scale;
  sx.defaults = defaultScale;
  return sx;
};
var system = function system2(args) {
  if (args === void 0) {
    args = {};
  }
  var config = {};
  Object.keys(args).forEach(function(key) {
    var conf = args[key];
    if (conf === true) {
      config[key] = createStyleFunction({
        property: key,
        scale: key
      });
      return;
    }
    if (typeof conf === 'function') {
      config[key] = conf;
      return;
    }
    config[key] = createStyleFunction(conf);
  });
  var parser = createParser(config);
  return parser;
};
var compose = function compose2() {
  var config = {};
  for (var _len = arguments.length, parsers = new Array(_len), _key = 0; _key < _len; _key++) {
    parsers[_key] = arguments[_key];
  }
  parsers.forEach(function(parser2) {
    if (!parser2 || !parser2.config) return;
    assign(config, parser2.config);
  });
  var parser = createParser(config);
  return parser;
};
export { compose, createParser, createStyleFunction, get, merge, system };
