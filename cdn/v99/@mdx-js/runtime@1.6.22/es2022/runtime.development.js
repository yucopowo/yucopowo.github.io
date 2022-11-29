/* esm.sh - esbuild bundle(@mdx-js/runtime@1.6.22) es2022 development */
// esm-build-8c1d1b222a89ea7a075aedbef03309b450f96fc5-65aefa3c/node_modules/@mdx-js/runtime/dist/esm.js
import React from '/cdn/stable/react@16.14.0/es2022/react.development.js';
import { transform } from '/cdn/v99/buble-jsx-only@0.19.8/es2022/buble-jsx-only.development.js';
import mdx from '/cdn/v99/@mdx-js/mdx@1.6.22/es2022/mdx.development.js';
import { mdx as mdx$1, MDXProvider } from '/cdn/v99/@mdx-js/react@1.6.22/es2022/react.development.js';
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }
  return target;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf2(o2, p2) {
      o2.__proto__ = p2;
      return o2;
    };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct2(Parent2, args2, Class2) {
      var a = [null];
      a.push.apply(a, args2);
      var Constructor = Function.bind.apply(Parent2, a);
      var instance = new Constructor();
      if (Class2) _setPrototypeOf(instance, Class2.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
  if (typeof Symbol !== 'undefined' && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
var index = function(_ref) {
  var _ref$scope = _ref.scope,
    scope = _ref$scope === void 0 ? {} : _ref$scope,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    _ref$remarkPlugins = _ref.remarkPlugins,
    remarkPlugins = _ref$remarkPlugins === void 0 ? [] : _ref$remarkPlugins,
    _ref$rehypePlugins = _ref.rehypePlugins,
    rehypePlugins = _ref$rehypePlugins === void 0 ? [] : _ref$rehypePlugins,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, ['scope', 'components', 'remarkPlugins', 'rehypePlugins', 'children']);
  var fullScope = _objectSpread2(
    {
      mdx: mdx$1,
      MDXProvider,
      components,
      props
    },
    scope
  );
  var jsx = mdx
    .sync(children, {
      remarkPlugins,
      rehypePlugins,
      skipExport: true
    })
    .trim();
  var code;
  try {
    code = transform(jsx, {
      objectAssign: 'Object.assign'
    }).code;
  } catch (err) {
    console.error(err);
    throw err;
  }
  var keys = Object.keys(fullScope);
  var values = Object.values(fullScope);
  var fn = _construct(
    Function,
    ['_fn', 'React'].concat(_toConsumableArray(keys), [
      ''.concat(
        code,
        '\n\n    return React.createElement(MDXProvider, { components },\n      React.createElement(MDXContent, props)\n    );'
      )
    ])
  );
  return fn.apply(void 0, [{}, React].concat(_toConsumableArray(values)));
};
var esm_default = index;
export { esm_default as default };
