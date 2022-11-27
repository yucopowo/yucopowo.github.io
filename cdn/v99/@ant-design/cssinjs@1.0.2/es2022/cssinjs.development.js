/* esm.sh - esbuild bundle(@ant-design/cssinjs@1.0.2) es2022 development */
// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  updateCSS as updateCSS2,
  removeCSS as removeCSS2
} from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/dynamicCSS.development.js';
import canUseDom2 from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
import hash2 from '/cdn/v99/@emotion/hash@0.8.0/es2022/hash.development.js';
import unitless from '/cdn/v99/@emotion/unitless@0.7.5/es2022/unitless.development.js';
import { compile, serialize, stringify } from '/cdn/v99/stylis@4.1.3/es2022/stylis.development.js';

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/StyleContext.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/Cache.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
var Entity = /* @__PURE__ */ (function() {
  function Entity2() {
    _classCallCheck(this, Entity2);
    this.cache = /* @__PURE__ */ new Map();
  }
  _createClass(Entity2, [
    {
      key: 'get',
      value: function get(keys) {
        return this.cache.get(keys.join('%')) || null;
      }
    },
    {
      key: 'update',
      value: function update(keys, valueFn) {
        var path = keys.join('%');
        var prevValue = this.cache.get(path);
        var nextValue = valueFn(prevValue);
        if (nextValue === null) {
          this.cache.delete(path);
        } else {
          this.cache.set(path, nextValue);
        }
      }
    }
  ]);
  return Entity2;
})();
var Cache_default = Entity;

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/StyleContext.js
var ATTR_TOKEN = 'data-token-hash';
var ATTR_MARK = 'data-css-hash';
var ATTR_DEV_CACHE_PATH = 'data-dev-cache-path';
var CSS_IN_JS_INSTANCE = '__cssinjs_instance__';
var CSS_IN_JS_INSTANCE_ID = Math.random()
  .toString(12)
  .slice(2);
function createCache() {
  if (typeof document !== 'undefined') {
    var styles = document.body.querySelectorAll('style['.concat(ATTR_MARK, ']'));
    var firstChild = document.head.firstChild;
    Array.from(styles).forEach(function(style) {
      style[CSS_IN_JS_INSTANCE] = style[CSS_IN_JS_INSTANCE] || CSS_IN_JS_INSTANCE_ID;
      document.head.insertBefore(style, firstChild);
    });
    var styleHash = {};
    Array.from(document.querySelectorAll('style['.concat(ATTR_MARK, ']'))).forEach(function(style) {
      var hash4 = style.getAttribute(ATTR_MARK);
      if (styleHash[hash4]) {
        if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
          var _style$parentNode;
          (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0
            ? void 0
            : _style$parentNode.removeChild(style);
        }
      } else {
        styleHash[hash4] = true;
      }
    });
  }
  return new Cache_default();
}
var StyleContext = /* @__PURE__ */ React.createContext({
  hashPriority: 'low',
  cache: createCache(),
  defaultCache: true
});
var StyleProvider = function StyleProvider2(props) {
  var autoClear = props.autoClear,
    mock = props.mock,
    cache = props.cache,
    hashPriority = props.hashPriority,
    children = props.children;
  var _React$useContext = React.useContext(StyleContext),
    parentCache = _React$useContext.cache,
    parentAutoClear = _React$useContext.autoClear,
    parentMock = _React$useContext.mock,
    parentDefaultCache = _React$useContext.defaultCache,
    parentHashPriority = _React$useContext.hashPriority;
  var context = React.useMemo(
    function() {
      return {
        autoClear: autoClear !== null && autoClear !== void 0 ? autoClear : parentAutoClear,
        mock: mock !== null && mock !== void 0 ? mock : parentMock,
        cache: cache || parentCache || createCache(),
        defaultCache: !cache && parentDefaultCache,
        hashPriority: hashPriority !== null && hashPriority !== void 0 ? hashPriority : parentHashPriority
      };
    },
    [
      autoClear,
      parentAutoClear,
      parentMock,
      parentCache,
      mock,
      cache,
      parentDefaultCache,
      hashPriority,
      parentHashPriority
    ]
  );
  return /* @__PURE__ */ React.createElement(
    StyleContext.Provider,
    {
      value: context
    },
    children
  );
};
var StyleContext_default = StyleContext;

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useHMR.js
var webpackHMR = false;
function useDevHMR() {
  return webpackHMR;
}
var useHMR_default = false ? useProdHMR : useDevHMR;
if (typeof module !== 'undefined' && module && module.hot) {
  win = window;
  if (typeof win.webpackHotUpdate === 'function') {
    originWebpackHotUpdate = win.webpackHotUpdate;
    win.webpackHotUpdate = function() {
      webpackHMR = true;
      setTimeout(function() {
        webpackHMR = false;
      }, 0);
      return originWebpackHotUpdate.apply(void 0, arguments);
    };
  }
}
var win;
var originWebpackHotUpdate;

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useGlobalCache.js
function useClientCache(prefix, keyPath, cacheFn, onCacheRemove) {
  var _React$useContext = React2.useContext(StyleContext_default),
    globalCache = _React$useContext.cache;
  var fullPath = [prefix].concat(_toConsumableArray(keyPath));
  var HMRUpdate = useHMR_default();
  React2.useMemo(
    function() {
      globalCache.update(fullPath, function(prevCache) {
        var _ref = prevCache || [],
          _ref2 = _slicedToArray(_ref, 2),
          _ref2$ = _ref2[0],
          times = _ref2$ === void 0 ? 0 : _ref2$,
          cache = _ref2[1];
        var tmpCache = cache;
        if (cache && HMRUpdate) {
          onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(tmpCache, HMRUpdate);
          tmpCache = null;
        }
        var mergedCache = tmpCache || cacheFn();
        return [times + 1, mergedCache];
      });
    },
    [fullPath.join('_')]
  );
  React2.useEffect(function() {
    return function() {
      globalCache.update(fullPath, function(prevCache) {
        var _ref3 = prevCache || [],
          _ref4 = _slicedToArray(_ref3, 2),
          _ref4$ = _ref4[0],
          times = _ref4$ === void 0 ? 0 : _ref4$,
          cache = _ref4[1];
        var nextCount = times - 1;
        if (nextCount === 0) {
          onCacheRemove === null || onCacheRemove === void 0 ? void 0 : onCacheRemove(cache, false);
          return null;
        }
        return [times - 1, cache];
      });
    };
  }, fullPath);
  return globalCache.get(fullPath)[1];
}

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/util.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import hash from '/cdn/v99/@emotion/hash@0.8.0/es2022/hash.development.js';
import devWarning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import { updateCSS, removeCSS } from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/dynamicCSS.development.js';
import canUseDom from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/canUseDom.development.js';
function flattenToken(token) {
  var str = '';
  Object.keys(token).forEach(function(key) {
    var value = token[key];
    str += key;
    if (value && _typeof(value) === 'object') {
      str += flattenToken(value);
    } else {
      str += value;
    }
  });
  return str;
}
function token2key(token, slat) {
  return hash(''.concat(slat, '_').concat(flattenToken(token)));
}
function warning(message, path) {
  devWarning(false, '[Ant Design CSS-in-JS] '.concat(path ? "Error in '".concat(path, "': ") : '').concat(message));
}
var styleValidate = function styleValidate2(key, value) {
  var info = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var path = info.path,
    hashId = info.hashId;
  switch (key) {
    case 'content':
      var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
      var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
      if (
        typeof value !== 'string' ||
        (contentValues.indexOf(value) === -1 &&
          !contentValuePattern.test(value) &&
          (value.charAt(0) !== value.charAt(value.length - 1) || (value.charAt(0) !== '"' && value.charAt(0) !== "'")))
      ) {
        warning(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(
            value,
            '"\'`'
          ),
          path
        );
      }
      return;
    case 'marginLeft':
    case 'marginRight':
    case 'paddingLeft':
    case 'paddingRight':
    case 'left':
    case 'right':
    case 'borderLeft':
    case 'borderLeftWidth':
    case 'borderLeftStyle':
    case 'borderLeftColor':
    case 'borderRight':
    case 'borderRightWidth':
    case 'borderRightStyle':
    case 'borderRightColor':
    case 'borderTopLeftRadius':
    case 'borderTopRightRadius':
    case 'borderBottomLeftRadius':
    case 'borderBottomRightRadius':
      warning(
        "You seem to be using non-logical property '".concat(
          key,
          "' which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties."
        ),
        path
      );
      return;
    case 'margin':
    case 'padding':
    case 'borderWidth':
    case 'borderStyle':
      if (typeof value === 'string') {
        var valueArr = value.split(' ').map(function(item) {
          return item.trim();
        });
        if (valueArr.length === 4 && valueArr[1] !== valueArr[3]) {
          warning(
            "You seem to be using '"
              .concat(key, "' property with different left ")
              .concat(key, ' and right ')
              .concat(
                key,
                ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.'
              ),
            path
          );
        }
      }
      return;
    case 'clear':
    case 'textAlign':
      if (value === 'left' || value === 'right') {
        warning(
          "You seem to be using non-logical value '"
            .concat(value, "' of ")
            .concat(
              key,
              ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.'
            ),
          path
        );
      }
      return;
    case 'borderRadius':
      if (typeof value === 'string') {
        var radiusGroups = value.split('/').map(function(item) {
          return item.trim();
        });
        var invalid = radiusGroups.reduce(function(result, group) {
          if (result) {
            return result;
          }
          var radiusArr = group.split(' ').map(function(item) {
            return item.trim();
          });
          if (radiusArr.length >= 2 && radiusArr[0] !== radiusArr[1]) {
            return true;
          }
          if (radiusArr.length === 3 && radiusArr[1] !== radiusArr[2]) {
            return true;
          }
          if (radiusArr.length === 4 && radiusArr[2] !== radiusArr[3]) {
            return true;
          }
          return result;
        }, false);
        if (invalid) {
          warning(
            "You seem to be using non-logical value '"
              .concat(value, "' of ")
              .concat(
                key,
                ', which is not compatible with RTL mode. Please use logical properties and values instead. For more information: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Logical_Properties.'
              ),
            path
          );
        }
      }
      return;
    case 'animation':
      if (hashId && value !== 'none') {
        warning(
          "You seem to be using hashed animation '".concat(
            value,
            "', in which case 'animationName' with Keyframe as value is recommended."
          ),
          path
        );
      }
    default:
      return;
  }
};
var layerKey = 'layer-'
  .concat(Date.now(), '-')
  .concat(Math.random())
  .replace(/\./g, '');
var layerWidth = '903px';
function supportSelector(styleStr, handleElement) {
  if (canUseDom()) {
    var _ele$parentNode;
    updateCSS(styleStr, layerKey);
    var ele = document.createElement('div');
    ele.style.position = 'fixed';
    ele.style.left = '0';
    ele.style.top = '0';
    handleElement === null || handleElement === void 0 ? void 0 : handleElement(ele);
    document.body.appendChild(ele);
    if (true) {
      ele.innerHTML = 'Test';
      ele.style.zIndex = '9999999';
    }
    var support = getComputedStyle(ele).width === layerWidth;
    (_ele$parentNode = ele.parentNode) === null || _ele$parentNode === void 0
      ? void 0
      : _ele$parentNode.removeChild(ele);
    removeCSS(layerKey);
    return support;
  }
  return false;
}
var canLayer = void 0;
function supportLayer() {
  if (canLayer === void 0) {
    canLayer = supportSelector(
      '@layer '
        .concat(layerKey, ' { .')
        .concat(layerKey, ' { width: ')
        .concat(layerWidth, '!important; } }'),
      function(ele) {
        ele.className = layerKey;
      }
    );
  }
  return canLayer;
}

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useStyleRegister.js
var isClientSide = canUseDom2();
var SKIP_CHECK = '_skip_check_';
function normalizeStyle(styleStr) {
  var serialized = serialize(compile(styleStr), stringify);
  return serialized.replace(/\{%%%\:[^;];}/g, ';');
}
function isCompoundCSSProperty(value) {
  return _typeof2(value) === 'object' && value && SKIP_CHECK in value;
}
var animationStatistics = {};
function injectSelectorHash(key, hashId, hashPriority) {
  if (!hashId) {
    return key;
  }
  var hashClassName = '.'.concat(hashId);
  var hashSelector = hashPriority === 'low' ? ':where('.concat(hashClassName, ')') : hashClassName;
  var keys = key.split(',').map(function(k) {
    var _firstPath$match;
    var fullPath = k.trim().split(/\s+/);
    var firstPath = fullPath[0] || '';
    var htmlElement =
      ((_firstPath$match = firstPath.match(/^\w+/)) === null || _firstPath$match === void 0
        ? void 0
        : _firstPath$match[0]) || '';
    firstPath = ''
      .concat(htmlElement)
      .concat(hashSelector)
      .concat(firstPath.slice(htmlElement.length));
    return [firstPath].concat(_toConsumableArray2(fullPath.slice(1))).join(' ');
  });
  return keys.join(',');
}
var globalEffectStyleKeys = /* @__PURE__ */ new Set();
var parseStyle = function parseStyle2(interpolation) {
  var config = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var _ref =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : {
            root: true
          },
    root = _ref.root,
    injectHash = _ref.injectHash;
  var hashId = config.hashId,
    layer = config.layer,
    path = config.path,
    hashPriority = config.hashPriority;
  var styleStr = '';
  var effectStyle = {};
  function parseKeyframes(keyframes) {
    var animationName = keyframes.getName(hashId);
    if (!effectStyle[animationName]) {
      var _parseStyle = parseStyle2(keyframes.style, config, {
          root: false
        }),
        _parseStyle2 = _slicedToArray2(_parseStyle, 1),
        parsedStr = _parseStyle2[0];
      effectStyle[animationName] = '@keyframes '.concat(keyframes.getName(hashId)).concat(parsedStr);
    }
  }
  function flattenList(list) {
    var fullList = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    list.forEach(function(item) {
      if (Array.isArray(item)) {
        flattenList(item, fullList);
      } else if (item) {
        fullList.push(item);
      }
    });
    return fullList;
  }
  var flattenStyleList = flattenList(Array.isArray(interpolation) ? interpolation : [interpolation]);
  flattenStyleList.forEach(function(originStyle) {
    var style = typeof originStyle === 'string' && !root ? {} : originStyle;
    if (typeof style === 'string') {
      styleStr += ''.concat(style, '\n');
    } else if (style._keyframe) {
      parseKeyframes(style);
    } else {
      Object.keys(style).forEach(function(key) {
        var value = style[key];
        if (
          _typeof2(value) === 'object' &&
          value &&
          (key !== 'animationName' || !value._keyframe) &&
          !isCompoundCSSProperty(value)
        ) {
          var subInjectHash = false;
          var mergedKey = key.trim();
          var nextRoot = false;
          if ((root || injectHash) && hashId) {
            if (mergedKey.startsWith('@')) {
              subInjectHash = true;
            } else {
              mergedKey = injectSelectorHash(key, hashId, hashPriority);
            }
          } else if (root && !hashId && (mergedKey === '&' || mergedKey === '')) {
            mergedKey = '';
            nextRoot = true;
          }
          var _parseStyle3 = parseStyle2(
              value,
              _objectSpread(
                _objectSpread({}, config),
                {},
                {
                  path: ''.concat(path, ' -> ').concat(mergedKey)
                }
              ),
              {
                root: nextRoot,
                injectHash: subInjectHash
              }
            ),
            _parseStyle4 = _slicedToArray2(_parseStyle3, 2),
            parsedStr = _parseStyle4[0],
            childEffectStyle = _parseStyle4[1];
          effectStyle = _objectSpread(_objectSpread({}, effectStyle), childEffectStyle);
          styleStr += ''.concat(mergedKey).concat(parsedStr);
        } else {
          var _value$value;
          var actualValue =
            (_value$value = value === null || value === void 0 ? void 0 : value.value) !== null &&
            _value$value !== void 0
              ? _value$value
              : value;
          if (_typeof2(value) !== 'object' || !(value === null || value === void 0 ? void 0 : value[SKIP_CHECK])) {
            styleValidate(key, actualValue, {
              path,
              hashId
            });
          }
          var styleName = key.replace(/[A-Z]/g, function(match) {
            return '-'.concat(match.toLowerCase());
          });
          var formatValue = actualValue;
          if (!unitless[key] && typeof formatValue === 'number' && formatValue !== 0) {
            formatValue = ''.concat(formatValue, 'px');
          }
          if (key === 'animationName' && (value === null || value === void 0 ? void 0 : value._keyframe)) {
            parseKeyframes(value);
            formatValue = value.getName(hashId);
          }
          styleStr += ''.concat(styleName, ':').concat(formatValue, ';');
        }
      });
    }
  });
  if (!root) {
    styleStr = '{'.concat(styleStr, '}');
  } else if (layer && supportLayer()) {
    var layerCells = layer.split(',');
    var layerName = layerCells[layerCells.length - 1].trim();
    styleStr = '@layer '.concat(layerName, ' {').concat(styleStr, '}');
    if (layerCells.length > 1) {
      styleStr = '@layer '.concat(layer, '{%%%:%}').concat(styleStr);
    }
  }
  return [styleStr, effectStyle];
};
function uniqueHash(path, styleStr) {
  return hash2(''.concat(path.join('%')).concat(styleStr));
}
function Empty() {
  return null;
}
function useStyleRegister(info, styleFn) {
  var token = info.token,
    path = info.path,
    hashId = info.hashId,
    layer = info.layer;
  var _React$useContext = React3.useContext(StyleContext_default),
    autoClear = _React$useContext.autoClear,
    mock = _React$useContext.mock,
    defaultCache = _React$useContext.defaultCache,
    hashPriority = _React$useContext.hashPriority;
  var tokenKey = token._tokenKey;
  var fullPath = [tokenKey].concat(_toConsumableArray2(path));
  var isMergedClientSide = isClientSide;
  if (mock !== void 0) {
    isMergedClientSide = mock === 'client';
  }
  var _useGlobalCache = useClientCache(
      'style',
      fullPath,
      function() {
        var styleObj = styleFn();
        var _parseStyle5 = parseStyle(styleObj, {
            hashId,
            hashPriority,
            layer,
            path: path.join('-')
          }),
          _parseStyle6 = _slicedToArray2(_parseStyle5, 2),
          parsedStyle = _parseStyle6[0],
          effectStyle = _parseStyle6[1];
        var styleStr = normalizeStyle(parsedStyle);
        var styleId = uniqueHash(fullPath, styleStr);
        animationStatistics = {};
        if (isMergedClientSide) {
          var style = updateCSS2(styleStr, styleId, {
            mark: ATTR_MARK,
            prepend: 'queue'
          });
          style[CSS_IN_JS_INSTANCE] = CSS_IN_JS_INSTANCE_ID;
          style.setAttribute(ATTR_TOKEN, tokenKey);
          if (true) {
            style.setAttribute(ATTR_DEV_CACHE_PATH, fullPath.join('|'));
          }
          Object.keys(effectStyle).forEach(function(effectKey) {
            if (!globalEffectStyleKeys.has(effectKey)) {
              globalEffectStyleKeys.add(effectKey);
              updateCSS2(normalizeStyle(effectStyle[effectKey]), '_effect-'.concat(effectKey), {
                mark: ATTR_MARK,
                prepend: 'queue'
              });
            }
          });
        }
        return [styleStr, tokenKey, styleId];
      },
      function(_ref2, fromHMR) {
        var _ref3 = _slicedToArray2(_ref2, 3),
          styleId = _ref3[2];
        if ((fromHMR || autoClear) && isClientSide) {
          removeCSS2(styleId, {
            mark: ATTR_MARK
          });
        }
      }
    ),
    _useGlobalCache2 = _slicedToArray2(_useGlobalCache, 3),
    cachedStyleStr = _useGlobalCache2[0],
    cachedTokenKey = _useGlobalCache2[1],
    cachedStyleId = _useGlobalCache2[2];
  return function(node) {
    var styleNode;
    if (isMergedClientSide || !defaultCache) {
      styleNode = /* @__PURE__ */ React3.createElement(Empty, null);
    } else {
      var _objectSpread22;
      styleNode = /* @__PURE__ */ React3.createElement(
        'style',
        _objectSpread(
          _objectSpread(
            {},
            ((_objectSpread22 = {}),
            _defineProperty(_objectSpread22, ATTR_TOKEN, cachedTokenKey),
            _defineProperty(_objectSpread22, ATTR_MARK, cachedStyleId),
            _objectSpread22)
          ),
          {},
          {
            dangerouslySetInnerHTML: {
              __html: cachedStyleStr
            }
          }
        )
      );
    }
    return /* @__PURE__ */ React3.createElement(React3.Fragment, null, styleNode, node);
  };
}
function extractStyle(cache) {
  var styleKeys = Array.from(cache.cache.keys()).filter(function(key) {
    return key.startsWith('style%');
  });
  var styleText = '';
  styleKeys.forEach(function(key) {
    var _cache$cache$get$ = _slicedToArray2(cache.cache.get(key)[1], 3),
      styleStr = _cache$cache$get$[0],
      tokenKey = _cache$cache$get$[1],
      styleId = _cache$cache$get$[2];
    styleText += '<style '
      .concat(ATTR_TOKEN, '="')
      .concat(tokenKey, '" ')
      .concat(ATTR_MARK, '="')
      .concat(styleId, '">')
      .concat(styleStr, '</style>');
  });
  return styleText;
}

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/hooks/useCacheToken.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import hash3 from '/cdn/v99/@emotion/hash@0.8.0/es2022/hash.development.js';
var EMPTY_OVERRIDE = {};
var hashPrefix = true ? 'css-dev-only-do-not-override' : 'css';
var tokenKeys = /* @__PURE__ */ new Map();
function recordCleanToken(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) + 1);
}
function removeStyleTags(key) {
  if (typeof document !== 'undefined') {
    var styles = document.querySelectorAll('style['.concat(ATTR_TOKEN, '="').concat(key, '"]'));
    styles.forEach(function(style) {
      if (style[CSS_IN_JS_INSTANCE] === CSS_IN_JS_INSTANCE_ID) {
        var _style$parentNode;
        (_style$parentNode = style.parentNode) === null || _style$parentNode === void 0
          ? void 0
          : _style$parentNode.removeChild(style);
      }
    });
  }
}
function cleanTokenStyle(tokenKey) {
  tokenKeys.set(tokenKey, (tokenKeys.get(tokenKey) || 0) - 1);
  var tokenKeyList = Array.from(tokenKeys.keys());
  var cleanableKeyList = tokenKeyList.filter(function(key) {
    var count = tokenKeys.get(key) || 0;
    return count <= 0;
  });
  if (cleanableKeyList.length < tokenKeyList.length) {
    cleanableKeyList.forEach(function(key) {
      removeStyleTags(key);
      tokenKeys.delete(key);
    });
  }
}
function useCacheToken(theme, tokens) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var _option$salt = option.salt,
    salt = _option$salt === void 0 ? '' : _option$salt,
    _option$override = option.override,
    override = _option$override === void 0 ? EMPTY_OVERRIDE : _option$override,
    formatToken = option.formatToken;
  var mergedToken = React4.useMemo(
    function() {
      return Object.assign.apply(Object, [{}].concat(_toConsumableArray3(tokens)));
    },
    [tokens]
  );
  var tokenStr = React4.useMemo(
    function() {
      return flattenToken(mergedToken);
    },
    [mergedToken]
  );
  var overrideTokenStr = React4.useMemo(
    function() {
      return flattenToken(override);
    },
    [override]
  );
  var cachedToken = useClientCache(
    'token',
    [salt, theme.id, tokenStr, overrideTokenStr],
    function() {
      var derivativeToken = theme.getDerivativeToken(mergedToken);
      var mergedDerivativeToken = _objectSpread2(_objectSpread2({}, derivativeToken), override);
      if (formatToken) {
        mergedDerivativeToken = formatToken(mergedDerivativeToken);
      }
      var tokenKey = token2key(mergedDerivativeToken, salt);
      mergedDerivativeToken._tokenKey = tokenKey;
      recordCleanToken(tokenKey);
      var hashId = ''.concat(hashPrefix, '-').concat(hash3(tokenKey));
      mergedDerivativeToken._hashId = hashId;
      return [mergedDerivativeToken, hashId];
    },
    function(cache) {
      cleanTokenStyle(cache[0]._tokenKey);
    }
  );
  return cachedToken;
}

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/Keyframes.js
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
var Keyframe = /* @__PURE__ */ (function() {
  function Keyframe2(name, style) {
    _classCallCheck2(this, Keyframe2);
    this.name = void 0;
    this.style = void 0;
    this._keyframe = true;
    this.name = name;
    this.style = style;
  }
  _createClass2(Keyframe2, [
    {
      key: 'getName',
      value: function getName() {
        var hashId = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '';
        return hashId ? ''.concat(hashId, '-').concat(this.name) : this.name;
      }
    }
  ]);
  return Keyframe2;
})();
var Keyframes_default = Keyframe;

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/theme/ThemeCache.js
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _classCallCheck3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
function sameDerivativeOption(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  for (var i = 0; i < left.length; i++) {
    if (left[i] !== right[i]) {
      return false;
    }
  }
  return true;
}
var ThemeCache = /* @__PURE__ */ (function() {
  function ThemeCache2() {
    _classCallCheck3(this, ThemeCache2);
    this.cache = void 0;
    this.keys = void 0;
    this.cacheCallTimes = void 0;
    this.cache = /* @__PURE__ */ new Map();
    this.keys = [];
    this.cacheCallTimes = 0;
  }
  _createClass3(ThemeCache2, [
    {
      key: 'size',
      value: function size() {
        return this.keys.length;
      }
    },
    {
      key: 'internalGet',
      value: function internalGet(derivativeOption) {
        var _cache2, _cache3;
        var updateCallTimes = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        var cache = {
          map: this.cache
        };
        derivativeOption.forEach(function(derivative) {
          if (!cache) {
            cache = void 0;
          } else {
            var _cache, _cache$map;
            cache =
              (_cache = cache) === null || _cache === void 0
                ? void 0
                : (_cache$map = _cache.map) === null || _cache$map === void 0
                ? void 0
                : _cache$map.get(derivative);
          }
        });
        if (((_cache2 = cache) === null || _cache2 === void 0 ? void 0 : _cache2.value) && updateCallTimes) {
          cache.value[1] = this.cacheCallTimes++;
        }
        return (_cache3 = cache) === null || _cache3 === void 0 ? void 0 : _cache3.value;
      }
    },
    {
      key: 'get',
      value: function get(derivativeOption) {
        var _this$internalGet;
        return (_this$internalGet = this.internalGet(derivativeOption, true)) === null || _this$internalGet === void 0
          ? void 0
          : _this$internalGet[0];
      }
    },
    {
      key: 'has',
      value: function has(derivativeOption) {
        return !!this.internalGet(derivativeOption);
      }
    },
    {
      key: 'set',
      value: function set(derivativeOption, value) {
        var _this = this;
        if (!this.has(derivativeOption)) {
          if (this.size() + 1 > ThemeCache2.MAX_CACHE_SIZE + ThemeCache2.MAX_CACHE_OFFSET) {
            var _this$keys$reduce = this.keys.reduce(
                function(result, key) {
                  var _result = _slicedToArray3(result, 2),
                    callTimes = _result[1];
                  if (_this.internalGet(key)[1] < callTimes) {
                    return [key, _this.internalGet(key)[1]];
                  }
                  return result;
                },
                [this.keys[0], this.cacheCallTimes]
              ),
              _this$keys$reduce2 = _slicedToArray3(_this$keys$reduce, 1),
              targetKey = _this$keys$reduce2[0];
            this.delete(targetKey);
          }
          this.keys.push(derivativeOption);
        }
        var cache = this.cache;
        derivativeOption.forEach(function(derivative, index) {
          if (index === derivativeOption.length - 1) {
            cache.set(derivative, {
              value: [value, _this.cacheCallTimes++]
            });
          } else {
            var cacheValue = cache.get(derivative);
            if (!cacheValue) {
              cache.set(derivative, {
                map: /* @__PURE__ */ new Map()
              });
            } else if (!cacheValue.map) {
              cacheValue.map = /* @__PURE__ */ new Map();
            }
            cache = cache.get(derivative).map;
          }
        });
      }
    },
    {
      key: 'deleteByPath',
      value: function deleteByPath(currentCache, derivatives) {
        var cache = currentCache.get(derivatives[0]);
        if (derivatives.length === 1) {
          var _cache$value;
          if (!cache.map) {
            currentCache.delete(derivatives[0]);
          } else {
            currentCache.set(derivatives[0], {
              map: cache.map
            });
          }
          return (_cache$value = cache.value) === null || _cache$value === void 0 ? void 0 : _cache$value[0];
        }
        var result = this.deleteByPath(cache.map, derivatives.slice(1));
        if ((!cache.map || cache.map.size === 0) && !cache.value) {
          currentCache.delete(derivatives[0]);
        }
        return result;
      }
    },
    {
      key: 'delete',
      value: function _delete(derivativeOption) {
        if (this.has(derivativeOption)) {
          this.keys = this.keys.filter(function(item) {
            return !sameDerivativeOption(item, derivativeOption);
          });
          return this.deleteByPath(this.cache, derivativeOption);
        }
        return void 0;
      }
    }
  ]);
  return ThemeCache2;
})();
ThemeCache.MAX_CACHE_SIZE = 20;
ThemeCache.MAX_CACHE_OFFSET = 5;

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/theme/Theme.js
import _classCallCheck4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import { warning as warning2 } from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
var uuid = 0;
var Theme = /* @__PURE__ */ (function() {
  function Theme2(derivatives) {
    _classCallCheck4(this, Theme2);
    this.derivatives = void 0;
    this.id = void 0;
    this.derivatives = Array.isArray(derivatives) ? derivatives : [derivatives];
    this.id = uuid;
    if (derivatives.length === 0) {
      warning2(derivatives.length > 0, '[Ant Design CSS-in-JS] Theme should have at least one derivative function.');
    }
    uuid += 1;
  }
  _createClass4(Theme2, [
    {
      key: 'getDerivativeToken',
      value: function getDerivativeToken(token) {
        return this.derivatives.reduce(function(result, derivative) {
          return derivative(token, result);
        }, void 0);
      }
    }
  ]);
  return Theme2;
})();

// esm-build-70cdae7b643858ca6fa69d6143a897cb574c548a-c07d39f9/node_modules/@ant-design/cssinjs/es/theme/createTheme.js
var cacheThemes = new ThemeCache();
function createTheme(derivatives) {
  var derivativeArr = Array.isArray(derivatives) ? derivatives : [derivatives];
  if (!cacheThemes.has(derivativeArr)) {
    cacheThemes.set(derivativeArr, new Theme(derivativeArr));
  }
  return cacheThemes.get(derivativeArr);
}
export {
  Keyframes_default as Keyframes,
  StyleProvider,
  Theme,
  createCache,
  createTheme,
  extractStyle,
  useCacheToken,
  useStyleRegister
};
