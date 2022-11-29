/* esm.sh - esbuild bundle(@emotion/react@11.10.5) es2022 development */
var __global$ = globalThis || (typeof window !== 'undefined' ? window : self);
// esm-build-c49a59af8b7f85070ea7dc77343aa2ec56ded044-cb815c71/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
import {
  createElement as createElement2,
  useContext as useContext2,
  useRef,
  Fragment as Fragment2
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import '/cdn/v99/@emotion/cache@11.10.5/es2022/cache.development.js';

// esm-build-c49a59af8b7f85070ea7dc77343aa2ec56ded044-cb815c71/node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js
import {
  createContext,
  useContext,
  forwardRef,
  createElement,
  Fragment
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import createCache from '/cdn/v99/@emotion/cache@11.10.5/es2022/cache.development.js';
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import weakMemoize from '/cdn/v99/@emotion/weak-memoize@0.3.0/es2022/weak-memoize.development.js';

// esm-build-c49a59af8b7f85070ea7dc77343aa2ec56ded044-cb815c71/node_modules/@emotion/react/_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js
import hoistNonReactStatics$1 from '/cdn/v99/hoist-non-react-statics@3.3.2/es2022/hoist-non-react-statics.development.js';
var hoistNonReactStatics = function(targetComponent, sourceComponent) {
  return hoistNonReactStatics$1(targetComponent, sourceComponent);
};
var emotion_react_isolated_hnrs_browser_esm_default = hoistNonReactStatics;

// esm-build-c49a59af8b7f85070ea7dc77343aa2ec56ded044-cb815c71/node_modules/@emotion/react/dist/emotion-element-6a883da9.browser.esm.js
import {
  getRegisteredStyles,
  registerStyles,
  insertStyles
} from '/cdn/v99/@emotion/utils@1.2.0/es2022/utils.development.js';
import { serializeStyles } from '/cdn/v99/@emotion/serialize@1.1.1/es2022/serialize.development.js';
import { useInsertionEffectAlwaysWithSyncFallback } from '/cdn/v99/@emotion/use-insertion-effect-with-fallbacks@1.0.0/es2022/use-insertion-effect-with-fallbacks.development.js';
var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* @__PURE__ */ createContext(
  typeof HTMLElement !== 'undefined'
    ? /* @__PURE__ */ createCache({
        key: 'css'
      })
    : null
);
if (true) {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}
var CacheProvider = EmotionCacheContext.Provider;
var __unsafe_useEmotionCache = function useEmotionCache() {
  return useContext(EmotionCacheContext);
};
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ forwardRef(function(props, ref) {
    var cache = useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext = /* @__PURE__ */ createContext({});
if (true) {
  ThemeContext.displayName = 'EmotionThemeContext';
}
var useTheme = function useTheme2() {
  return useContext(ThemeContext);
};
var getTheme = function getTheme2(outerTheme, theme) {
  if (typeof theme === 'function') {
    var mergedTheme = theme(outerTheme);
    if (mergedTheme == null || typeof mergedTheme !== 'object' || Array.isArray(mergedTheme)) {
      throw new Error('[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!');
    }
    return mergedTheme;
  }
  if (theme == null || typeof theme !== 'object' || Array.isArray(theme)) {
    throw new Error('[ThemeProvider] Please make your theme prop a plain object');
  }
  return _extends({}, outerTheme, theme);
};
var createCacheWithTheme = /* @__PURE__ */ weakMemoize(function(outerTheme) {
  return weakMemoize(function(theme) {
    return getTheme(outerTheme, theme);
  });
});
var ThemeProvider = function ThemeProvider2(props) {
  var theme = useContext(ThemeContext);
  if (props.theme !== theme) {
    theme = createCacheWithTheme(theme)(props.theme);
  }
  return /* @__PURE__ */ createElement(
    ThemeContext.Provider,
    {
      value: theme
    },
    props.children
  );
};
function withTheme(Component) {
  var componentName = Component.displayName || Component.name || 'Component';
  var render = function render2(props, ref) {
    var theme = useContext(ThemeContext);
    return /* @__PURE__ */ createElement(
      Component,
      _extends(
        {
          theme,
          ref
        },
        props
      )
    );
  };
  var WithTheme = /* @__PURE__ */ forwardRef(render);
  WithTheme.displayName = 'WithTheme(' + componentName + ')';
  return emotion_react_isolated_hnrs_browser_esm_default(WithTheme, Component);
}
var getLastPart = function getLastPart2(functionName) {
  var parts = functionName.split('.');
  return parts[parts.length - 1];
};
var getFunctionNameFromStackTraceLine = function getFunctionNameFromStackTraceLine2(line) {
  var match = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(line);
  if (match) return getLastPart(match[1]);
  match = /^([A-Za-z0-9$.]+)@/.exec(line);
  if (match) return getLastPart(match[1]);
  return void 0;
};
var internalReactFunctionNames = /* @__PURE__ */ new Set([
  'renderWithHooks',
  'processChild',
  'finishClassComponent',
  'renderToString'
]);
var sanitizeIdentifier = function sanitizeIdentifier2(identifier) {
  return identifier.replace(/\$/g, '-');
};
var getLabelFromStackTrace = function getLabelFromStackTrace2(stackTrace) {
  if (!stackTrace) return void 0;
  var lines = stackTrace.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var functionName = getFunctionNameFromStackTraceLine(lines[i]);
    if (!functionName) continue;
    if (internalReactFunctionNames.has(functionName)) break;
    if (/^[A-Z]/.test(functionName)) return sanitizeIdentifier(functionName);
  }
  return void 0;
};
var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';
var createEmotionProps = function createEmotionProps2(type, props) {
  if (typeof props.css === 'string' && props.css.indexOf(':') !== -1) {
    throw new Error(
      "Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" +
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
  if (
    !!props.css &&
    (typeof props.css !== 'object' || typeof props.css.name !== 'string' || props.css.name.indexOf('-') === -1)
  ) {
    var label = getLabelFromStackTrace(new Error().stack);
    if (label) newProps[labelPropName] = label;
  }
  return newProps;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(function(props, cache, ref) {
  var cssProp = props.css;
  if (typeof cssProp === 'string' && cache.registered[cssProp] !== void 0) {
    cssProp = cache.registered[cssProp];
  }
  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';
  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + ' ';
  }
  var serialized = serializeStyles(registeredStyles, void 0, useContext(ThemeContext));
  if (serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];
    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }
  className += cache.key + '-' + serialized.name;
  var newProps = {};
  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && key !== labelPropName) {
      newProps[key] = props[key];
    }
  }
  newProps.ref = ref;
  newProps.className = className;
  return /* @__PURE__ */ createElement(
    Fragment,
    null,
    /* @__PURE__ */ createElement(Insertion, {
      cache,
      serialized,
      isStringTag: typeof WrappedComponent === 'string'
    }),
    /* @__PURE__ */ createElement(WrappedComponent, newProps)
  );
});
if (true) {
  Emotion.displayName = 'EmotionCssPropInternal';
}

// esm-build-c49a59af8b7f85070ea7dc77343aa2ec56ded044-cb815c71/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
import '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import '/cdn/v99/@emotion/weak-memoize@0.3.0/es2022/weak-memoize.development.js';
import '/cdn/v99/hoist-non-react-statics@3.3.2/es2022/hoist-non-react-statics.development.js';
import {
  insertStyles as insertStyles2,
  registerStyles as registerStyles2,
  getRegisteredStyles as getRegisteredStyles2
} from '/cdn/v99/@emotion/utils@1.2.0/es2022/utils.development.js';
import { serializeStyles as serializeStyles2 } from '/cdn/v99/@emotion/serialize@1.1.1/es2022/serialize.development.js';
import {
  useInsertionEffectWithLayoutFallback,
  useInsertionEffectAlwaysWithSyncFallback as useInsertionEffectAlwaysWithSyncFallback2
} from '/cdn/v99/@emotion/use-insertion-effect-with-fallbacks@1.0.0/es2022/use-insertion-effect-with-fallbacks.development.js';
var pkg = {
  name: '@emotion/react',
  version: '11.10.5',
  main: 'dist/emotion-react.cjs.js',
  module: 'dist/emotion-react.esm.js',
  browser: {
    './dist/emotion-react.esm.js': './dist/emotion-react.browser.esm.js'
  },
  exports: {
    '.': {
      module: {
        worker: './dist/emotion-react.worker.esm.js',
        browser: './dist/emotion-react.browser.esm.js',
        default: './dist/emotion-react.esm.js'
      },
      default: './dist/emotion-react.cjs.js'
    },
    './jsx-runtime': {
      module: {
        worker: './jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js',
        browser: './jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js',
        default: './jsx-runtime/dist/emotion-react-jsx-runtime.esm.js'
      },
      default: './jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js'
    },
    './_isolated-hnrs': {
      module: {
        worker: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js',
        browser: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js',
        default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js'
      },
      default: './_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js'
    },
    './jsx-dev-runtime': {
      module: {
        worker: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js',
        browser: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js',
        default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js'
      },
      default: './jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js'
    },
    './package.json': './package.json',
    './types/css-prop': './types/css-prop.d.ts',
    './macro': './macro.js'
  },
  types: 'types/index.d.ts',
  files: [
    'src',
    'dist',
    'jsx-runtime',
    'jsx-dev-runtime',
    '_isolated-hnrs',
    'types/*.d.ts',
    'macro.js',
    'macro.d.ts',
    'macro.js.flow'
  ],
  sideEffects: false,
  author: 'Emotion Contributors',
  license: 'MIT',
  scripts: {
    'test:typescript': 'dtslint types'
  },
  dependencies: {
    '@babel/runtime': '^7.18.3',
    '@emotion/babel-plugin': '^11.10.5',
    '@emotion/cache': '^11.10.5',
    '@emotion/serialize': '^1.1.1',
    '@emotion/use-insertion-effect-with-fallbacks': '^1.0.0',
    '@emotion/utils': '^1.2.0',
    '@emotion/weak-memoize': '^0.3.0',
    'hoist-non-react-statics': '^3.3.1'
  },
  peerDependencies: {
    '@babel/core': '^7.0.0',
    react: '>=16.8.0'
  },
  peerDependenciesMeta: {
    '@babel/core': {
      optional: true
    },
    '@types/react': {
      optional: true
    }
  },
  devDependencies: {
    '@babel/core': '^7.18.5',
    '@definitelytyped/dtslint': '0.0.112',
    '@emotion/css': '11.10.5',
    '@emotion/css-prettifier': '1.1.1',
    '@emotion/server': '11.10.0',
    '@emotion/styled': '11.10.5',
    'html-tag-names': '^1.1.2',
    react: '16.14.0',
    'svg-tag-names': '^1.1.1',
    typescript: '^4.5.5'
  },
  repository: 'https://github.com/emotion-js/emotion/tree/main/packages/react',
  publishConfig: {
    access: 'public'
  },
  'umd:main': 'dist/emotion-react.umd.min.js',
  preconstruct: {
    entrypoints: ['./index.js', './jsx-runtime.js', './jsx-dev-runtime.js', './_isolated-hnrs.js'],
    umdName: 'emotionReact',
    exports: {
      envConditions: ['browser', 'worker'],
      extra: {
        './types/css-prop': './types/css-prop.d.ts',
        './macro': './macro.js'
      }
    }
  }
};
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
  var serialized = serializeStyles2([styles], void 0, useContext2(ThemeContext));
  var sheetRef = useRef();
  useInsertionEffectWithLayoutFallback(
    function() {
      var key = cache.key + '-global';
      var sheet = new cache.sheet.constructor({
        key,
        nonce: cache.sheet.nonce,
        container: cache.sheet.container,
        speedy: cache.sheet.isSpeedy
      });
      var rehydrating = false;
      var node = document.querySelector('style[data-emotion="' + key + ' ' + serialized.name + '"]');
      if (cache.sheet.tags.length) {
        sheet.before = cache.sheet.tags[0];
      }
      if (node !== null) {
        rehydrating = true;
        node.setAttribute('data-emotion', key);
        sheet.hydrate([node]);
      }
      sheetRef.current = [sheet, rehydrating];
      return function() {
        sheet.flush();
      };
    },
    [cache]
  );
  useInsertionEffectWithLayoutFallback(
    function() {
      var sheetRefCurrent = sheetRef.current;
      var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];
      if (rehydrating) {
        sheetRefCurrent[1] = false;
        return;
      }
      if (serialized.next !== void 0) {
        insertStyles2(cache, serialized.next, true);
      }
      if (sheet.tags.length) {
        var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
        sheet.before = element;
        sheet.flush();
      }
      cache.insert('', serialized, sheet, false);
    },
    [cache, serialized.name]
  );
  return null;
});
if (true) {
  Global.displayName = 'EmotionGlobal';
}
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles2(args);
}
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
          if (arg.styles !== void 0 && arg.name !== void 0) {
            console.error(
              'You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.'
            );
          }
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
var Insertion3 = function Insertion4(_ref) {
  var cache = _ref.cache,
    serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectAlwaysWithSyncFallback2(function() {
    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles2(cache, serializedArr[i], false);
    }
  });
  return null;
};
var ClassNames = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var hasRendered = false;
  var serializedArr = [];
  var css2 = function css3() {
    if (hasRendered && true) {
      throw new Error('css can only be used during render');
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var serialized = serializeStyles2(args, cache.registered);
    serializedArr.push(serialized);
    registerStyles2(cache, serialized, false);
    return cache.key + '-' + serialized.name;
  };
  var cx = function cx2() {
    if (hasRendered && true) {
      throw new Error('cx can only be used during render');
    }
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return merge(cache.registered, css2, classnames(args));
  };
  var content = {
    css: css2,
    cx,
    theme: useContext2(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /* @__PURE__ */ createElement2(
    Fragment2,
    null,
    /* @__PURE__ */ createElement2(Insertion3, {
      cache,
      serializedArr
    }),
    ele
  );
});
if (true) {
  ClassNames.displayName = 'EmotionClassNames';
}
if (true) {
  isBrowser = true;
  isTestEnv = typeof jest !== 'undefined' || typeof vi !== 'undefined';
  if (isBrowser && !isTestEnv) {
    globalContext = typeof globalThis !== 'undefined' ? globalThis : isBrowser ? window : __global$;
    globalKey = '__EMOTION_REACT_' + pkg.version.split('.')[0] + '__';
    if (globalContext[globalKey]) {
      console.warn(
        'You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used.'
      );
    }
    globalContext[globalKey] = true;
  }
}
var isBrowser;
var isTestEnv;
var globalContext;
var globalKey;
export {
  CacheProvider,
  ClassNames,
  Global,
  ThemeContext,
  ThemeProvider,
  __unsafe_useEmotionCache,
  jsx as createElement,
  css,
  jsx,
  keyframes,
  useTheme,
  withEmotionCache,
  withTheme
};
