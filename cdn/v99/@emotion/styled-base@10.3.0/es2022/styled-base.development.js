/* esm.sh - esbuild bundle(@emotion/styled-base@10.3.0) es2022 development */
// esm-build-dce630208886a4f8d290dcd7773e8a228085c935-4cf54ee6/node_modules/@emotion/styled-base/dist/styled-base.esm.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import { createElement, Fragment } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import isPropValid from '/cdn/v99/@emotion/is-prop-valid@0.8.8/es2022/is-prop-valid.development.js';
import { withEmotionCache, ThemeContext } from '/cdn/v99/@emotion/core@10.3.1/es2022/core.development.js';
import { getRegisteredStyles, insertStyles } from '/cdn/v99/@emotion/utils@0.11.3/es2022/utils.development.js';
import { serializeStyles } from '/cdn/v99/@emotion/serialize@0.11.16/es2022/serialize.development.js';
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== 'theme' && key !== 'innerRef';
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === 'string' && tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
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
function _objectSpread(target) {
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
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var isBrowser = typeof document !== 'undefined';
var Noop = function Noop2() {
  return null;
};
var createStyled = function createStyled2(tag, options) {
  if (true) {
    if (tag === void 0) {
      throw new Error(
        'You are trying to create a styled element with an undefined component.\nYou may have forgotten to import it.'
      );
    }
  }
  var identifierName;
  var shouldForwardProp;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
    shouldForwardProp =
      tag.__emotion_forwardProp && options.shouldForwardProp
        ? function(propName) {
            return tag.__emotion_forwardProp(propName) && options.shouldForwardProp(propName);
          }
        : options.shouldForwardProp;
  }
  var isReal = tag.__emotion_real === tag;
  var baseTag = (isReal && tag.__emotion_base) || tag;
  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }
  var defaultShouldForwardProp = shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function() {
    var args = arguments;
    var styles = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles.push('label:' + identifierName + ';');
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles.push.apply(styles, args);
    } else {
      if (args[0][0] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        if (args[0][i] === void 0) {
          console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
        }
        styles.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, context, ref) {
      return /* @__PURE__ */ createElement(ThemeContext.Consumer, null, function(theme) {
        var finalTag = (shouldUseAs && props.as) || baseTag;
        var className = '';
        var classInterpolations = [];
        var mergedProps = props;
        if (props.theme == null) {
          mergedProps = {};
          for (var key in props) {
            mergedProps[key] = props[key];
          }
          mergedProps.theme = theme;
        }
        if (typeof props.className === 'string') {
          className = getRegisteredStyles(context.registered, classInterpolations, props.className);
        } else if (props.className != null) {
          className = props.className + ' ';
        }
        var serialized = serializeStyles(styles.concat(classInterpolations), context.registered, mergedProps);
        var rules = insertStyles(context, serialized, typeof finalTag === 'string');
        className += context.key + '-' + serialized.name;
        if (targetClassName !== void 0) {
          className += ' ' + targetClassName;
        }
        var finalShouldForwardProp =
          shouldUseAs && shouldForwardProp === void 0
            ? getDefaultShouldForwardProp(finalTag)
            : defaultShouldForwardProp;
        var newProps = {};
        for (var _key in props) {
          if (shouldUseAs && _key === 'as') continue;
          if (finalShouldForwardProp(_key)) {
            newProps[_key] = props[_key];
          }
        }
        newProps.className = className;
        newProps.ref = ref || props.innerRef;
        if (props.innerRef) {
          console.error(
            '`innerRef` is deprecated and will be removed in a future major version of Emotion, please use the `ref` prop instead' +
              (identifierName === void 0 ? '' : ' in the usage of `' + identifierName + '`')
          );
        }
        var ele = /* @__PURE__ */ createElement(finalTag, newProps);
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
            (_ref['data-emotion-' + context.key] = serializedNames),
            (_ref.dangerouslySetInnerHTML = {
              __html: rules
            }),
            (_ref.nonce = context.sheet.nonce),
            _ref)
          );
        }
        return /* @__PURE__ */ createElement(Fragment, null, possiblyStyleElement, ele);
      });
    });
    Styled.displayName =
      identifierName !== void 0
        ? identifierName
        : 'Styled(' +
          (typeof baseTag === 'string' ? baseTag : baseTag.displayName || baseTag.name || 'Component') +
          ')';
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === void 0 && true) {
          return 'NO_COMPONENT_SELECTOR';
        }
        return '.' + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(
        nextTag,
        nextOptions !== void 0 ? _objectSpread({}, options || {}, {}, nextOptions) : options
      ).apply(void 0, styles);
    };
    return Styled;
  };
};
var styled_base_esm_default = createStyled;
export { styled_base_esm_default as default };
