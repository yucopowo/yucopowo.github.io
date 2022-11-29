/* esm.sh - esbuild bundle(@emotion/core@10.3.1) es2022 development */
// esm-build-42d12101fb1514a6609c8bb9bdd0902facf6a03f-af3bcd33/node_modules/@emotion/core/dist/core.esm.js
import _inheritsLoose2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inheritsLoose.development.js';
import {
  createElement as createElement2,
  Component as Component2,
  Fragment as Fragment2
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import '/cdn/v99/@emotion/cache@10.0.29/es2022/cache.development.js';

// esm-build-42d12101fb1514a6609c8bb9bdd0902facf6a03f-af3bcd33/node_modules/@emotion/core/dist/emotion-element-39b82f0b.esm.js
import _inheritsLoose from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inheritsLoose.development.js';
import {
  createContext,
  forwardRef,
  createElement,
  Component,
  Fragment
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import createCache from '/cdn/v99/@emotion/cache@10.0.29/es2022/cache.development.js';
import { getRegisteredStyles, insertStyles } from '/cdn/v99/@emotion/utils@0.11.3/es2022/utils.development.js';
import { serializeStyles } from '/cdn/v99/@emotion/serialize@0.11.16/es2022/serialize.development.js';
var isBrowser = typeof document !== 'undefined';
var hasOwnProperty = Object.prototype.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ createContext(typeof HTMLElement !== 'undefined' ? createCache() : null);
var ThemeContext = /* @__PURE__ */ createContext({});
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  var render3 = function render4(props, ref) {
    return /* @__PURE__ */ createElement(EmotionCacheContext.Consumer, null, function(cache) {
      return func(props, cache, ref);
    });
  };
  return /* @__PURE__ */ forwardRef(render3);
};
if (!isBrowser) {
  BasicProvider = /* @__PURE__ */ (function(_React$Component) {
    _inheritsLoose(BasicProvider2, _React$Component);
    function BasicProvider2(props, context, updater) {
      var _this;
      _this = _React$Component.call(this, props, context, updater) || this;
      _this.state = {
        value: createCache()
      };
      return _this;
    }
    var _proto = BasicProvider2.prototype;
    _proto.render = function render3() {
      return /* @__PURE__ */ createElement(
        EmotionCacheContext.Provider,
        this.state,
        this.props.children(this.state.value)
      );
    };
    return BasicProvider2;
  })(Component);
  withEmotionCache = function withEmotionCache3(func) {
    return function(props) {
      return /* @__PURE__ */ createElement(EmotionCacheContext.Consumer, null, function(context) {
        if (context === null) {
          return /* @__PURE__ */ createElement(BasicProvider, null, function(newContext) {
            return func(props, newContext);
          });
        } else {
          return func(props, context);
        }
      });
    };
  };
}
var BasicProvider;
var sanitizeIdentifier = function sanitizeIdentifier2(identifier) {
  return identifier.replace(/\$/g, '-');
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps2(type, props) {
  if (typeof props.css === 'string' && props.css.indexOf(':') !== -1) {
    throw new Error(
      "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/css' like this: css`" +
        props.css +
        '`'
    );
  }
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  if (true) {
    var error = new Error();
    if (error.stack) {
      var match = error.stack.match(
        /at (?:Object\.|Module\.|)(?:jsx|createEmotionProps).*\n\s+at (?:Object\.|)([A-Z][A-Za-z$]+) /
      );
      if (!match) {
        match = error.stack.match(/.*\n([A-Z][A-Za-z$]+)@/);
      }
      if (match) {
        newProps[labelPropName] = sanitizeIdentifier(match[1]);
      }
    }
  }
  return newProps;
};
var Noop = function Noop2() {
  return null;
};
var render = function render2(cache, props, theme, ref) {
  var cssProp = theme === null ? props.css : props.css(theme);
  if (typeof cssProp === 'string' && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var type = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + ' ';
  }
  var serialized = serializeStyles(registeredStyles);
  if (serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }
  var rules = insertStyles(cache, serialized, typeof type === 'string');
  className += cache.key + '-' + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  var ele = /* @__PURE__ */ createElement(type, newProps);
  var possiblyStyleElement = /* @__PURE__ */ createElement(Noop, null);
  if (!isBrowser && rules !== void 0) {
    var _ref;
    var serializedNames = serialized.name;
    var next = serialized.next;
    while (next !== void 0) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }
    possiblyStyleElement = /* @__PURE__ */ createElement(
      'style',
      ((_ref = {}),
      (_ref['data-emotion-' + cache.key] = serializedNames),
      (_ref.dangerouslySetInnerHTML = {
        __html: rules
      }),
      (_ref.nonce = cache.sheet.nonce),
      _ref)
    );
  }
  return /* @__PURE__ */ createElement(Fragment, null, possiblyStyleElement, ele);
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  if (typeof props.css === 'function') {
    return /* @__PURE__ */ createElement(ThemeContext.Consumer, null, function(theme) {
      return render(cache, props, theme, ref);
    });
  }
  return render(cache, props, null, ref);
});
if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}

// esm-build-42d12101fb1514a6609c8bb9bdd0902facf6a03f-af3bcd33/node_modules/@emotion/core/dist/core.esm.js
import {
  insertStyles as insertStyles2,
  getRegisteredStyles as getRegisteredStyles2
} from '/cdn/v99/@emotion/utils@0.11.3/es2022/utils.development.js';
import { serializeStyles as serializeStyles2 } from '/cdn/v99/@emotion/serialize@0.11.16/es2022/serialize.development.js';
import { StyleSheet } from '/cdn/v99/@emotion/sheet@0.9.4/es2022/sheet.development.js';
import css from '/cdn/v99/@emotion/css@10.0.27/es2022/css.development.js';
import { default as default2 } from '/cdn/v99/@emotion/css@10.0.27/es2022/css.development.js';
var jsx = function jsx2(type, props) {
  var args = arguments;
  if (props == null || !hasOwnProperty.call(props, 'css')) {
    return createElement2.apply(void 0, args);
  }
  var argsLength = args.length;
  var createElementArgArray = new Array(argsLength);
  createElementArgArray[0] = Emotion;
  createElementArgArray[1] = createEmotionProps(type, props);
  for (var i = 2; i < argsLength; i++) {
    createElementArgArray[i] = args[i];
  }
  return createElement2.apply(null, createElementArgArray);
};
var warnedAboutCssPropForGlobal = false;
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  if (!warnedAboutCssPropForGlobal && (props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }
  var styles = props.styles;
  if (typeof styles === 'function') {
    return /* @__PURE__ */ createElement2(ThemeContext.Consumer, null, function(theme) {
      var serialized2 = serializeStyles2([styles(theme)]);
      return /* @__PURE__ */ createElement2(InnerGlobal, {
        serialized: serialized2,
        cache
      });
    });
  }
  var serialized = serializeStyles2([styles]);
  return /* @__PURE__ */ createElement2(InnerGlobal, {
    serialized,
    cache
  });
});
var InnerGlobal = /* @__PURE__ */ (function(_React$Component) {
  _inheritsLoose2(InnerGlobal2, _React$Component);
  function InnerGlobal2(props, context, updater) {
    return _React$Component.call(this, props, context, updater) || this;
  }
  var _proto = InnerGlobal2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.sheet = new StyleSheet({
      key: this.props.cache.key + '-global',
      nonce: this.props.cache.sheet.nonce,
      container: this.props.cache.sheet.container
    });
    var node = document.querySelector(
      'style[data-emotion-' + this.props.cache.key + '="' + this.props.serialized.name + '"]'
    );
    if (node !== null) {
      this.sheet.tags.push(node);
    }
    if (this.props.cache.sheet.tags.length) {
      this.sheet.before = this.props.cache.sheet.tags[0];
    }
    this.insertStyles();
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.serialized.name !== this.props.serialized.name) {
      this.insertStyles();
    }
  };
  _proto.insertStyles = function insertStyles$1() {
    if (this.props.serialized.next !== void 0) {
      insertStyles2(this.props.cache, this.props.serialized.next, true);
    }
    if (this.sheet.tags.length) {
      var element = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
      this.sheet.before = element;
      this.sheet.flush();
    }
    this.props.cache.insert('', this.props.serialized, this.sheet, false);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.sheet.flush();
  };
  _proto.render = function render3() {
    if (!isBrowser) {
      var serialized = this.props.serialized;
      var serializedNames = serialized.name;
      var serializedStyles = serialized.styles;
      var next = serialized.next;
      while (next !== void 0) {
        serializedNames += ' ' + next.name;
        serializedStyles += next.styles;
        next = next.next;
      }
      var shouldCache = this.props.cache.compat === true;
      var rules = this.props.cache.insert(
        '',
        {
          name: serializedNames,
          styles: serializedStyles
        },
        this.sheet,
        shouldCache
      );
      if (!shouldCache) {
        var _ref;
        return /* @__PURE__ */ createElement2(
          'style',
          ((_ref = {}),
          (_ref['data-emotion-' + this.props.cache.key] = serializedNames),
          (_ref.dangerouslySetInnerHTML = {
            __html: rules
          }),
          (_ref.nonce = this.props.cache.sheet.nonce),
          _ref)
        );
      }
    }
    return null;
  };
  return InnerGlobal2;
})(Component2);
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = 'animation-' + insertable.name;
  return {
    name,
    styles: '@keyframes ' + name + '{' + insertable.styles + '}',
    anim: 1,
    toString: function toString() {
      return '_EMO_' + this.name + '_' + this.styles + '_EMO_';
    }
  };
};
var classnames = function classnames2(args) {
  var len = args.length;
  var i = 0;
  var cls = '';
  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;
    switch (typeof arg) {
      case 'boolean':
        break;
      case 'object': {
        if (Array.isArray(arg)) {
          toAdd = classnames2(arg);
        } else {
          toAdd = '';
          for (var k in arg) {
            if (arg[k] && k) {
              toAdd && (toAdd += ' ');
              toAdd += k;
            }
          }
        }
        break;
      }
      default: {
        toAdd = arg;
      }
    }
    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }
  return cls;
};
function merge(registered, css2, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles2(registered, registeredStyles, className);
  if (registeredStyles.length < 2) {
    return className;
  }
  return rawClassName + css2(registeredStyles);
}
var Noop3 = function Noop4() {
  return null;
};
var ClassNames = withEmotionCache(function(props, context) {
  return /* @__PURE__ */ createElement2(ThemeContext.Consumer, null, function(theme) {
    var rules = '';
    var serializedHashes = '';
    var hasRendered = false;
    var css2 = function css3() {
      if (hasRendered && true) {
        throw new Error('css can only be used during render');
      }
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      var serialized = serializeStyles2(args, context.registered);
      if (isBrowser) {
        insertStyles2(context, serialized, false);
      } else {
        var res = insertStyles2(context, serialized, false);
        if (res !== void 0) {
          rules += res;
        }
      }
      if (!isBrowser) {
        serializedHashes += ' ' + serialized.name;
      }
      return context.key + '-' + serialized.name;
    };
    var cx = function cx2() {
      if (hasRendered && true) {
        throw new Error('cx can only be used during render');
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return merge(context.registered, css2, classnames(args));
    };
    var content = {
      css: css2,
      cx,
      theme
    };
    var ele = props.children(content);
    hasRendered = true;
    var possiblyStyleElement = /* @__PURE__ */ createElement2(Noop3, null);
    if (!isBrowser && rules.length !== 0) {
      var _ref;
      possiblyStyleElement = /* @__PURE__ */ createElement2(
        'style',
        ((_ref = {}),
        (_ref['data-emotion-' + context.key] = serializedHashes.substring(1)),
        (_ref.dangerouslySetInnerHTML = {
          __html: rules
        }),
        (_ref.nonce = context.sheet.nonce),
        _ref)
      );
    }
    return /* @__PURE__ */ createElement2(Fragment2, null, possiblyStyleElement, ele);
  });
});
export {
  CacheProvider,
  ClassNames,
  Global,
  ThemeContext,
  jsx as createElement,
  default2 as css,
  jsx,
  keyframes,
  withEmotionCache
};
