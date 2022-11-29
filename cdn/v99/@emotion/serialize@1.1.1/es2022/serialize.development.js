/* esm.sh - esbuild bundle(@emotion/serialize@1.1.1) es2022 development */
// esm-build-611411ad143b06046ad54b9ba31e04e576c3f39c-24b8c8f3/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js
import hashString from '/cdn/v99/@emotion/hash@0.9.0/es2022/hash.development.js';
import unitless from '/cdn/v99/@emotion/unitless@0.8.0/es2022/unitless.development.js';
import memoize from '/cdn/v99/@emotion/memoize@0.8.0/es2022/memoize.development.js';
var ILLEGAL_ESCAPE_SEQUENCE_ERROR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`;
var UNDEFINED_AS_OBJECT_KEY_ERROR =
  "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== 'boolean';
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName': {
      if (typeof value === 'string') {
        return value.replace(animationRegex, function(match, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitless[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }
  return value;
};
if (true) {
  contentValuePattern = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  oldProcessStyleValue = processStyleValue;
  msPattern = /^-ms-/;
  hyphenPattern = /-(.)/g;
  hyphenatedCache = {};
  processStyleValue = function processStyleValue3(key, value) {
    if (key === 'content') {
      if (
        typeof value !== 'string' ||
        (contentValues.indexOf(value) === -1 &&
          !contentValuePattern.test(value) &&
          (value.charAt(0) !== value.charAt(value.length - 1) || (value.charAt(0) !== '"' && value.charAt(0) !== "'")))
      ) {
        throw new Error(
          "You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" +
            value +
            '"\'`'
        );
      }
    }
    var processed = oldProcessStyleValue(key, value);
    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === void 0) {
      hyphenatedCache[key] = true;
      console.error(
        'Using kebab-case for css properties in objects is not supported. Did you mean ' +
          key.replace(msPattern, 'ms-').replace(hyphenPattern, function(str, _char) {
            return _char.toUpperCase();
          }) +
          '?'
      );
    }
    return processed;
  };
}
var contentValuePattern;
var contentValues;
var oldProcessStyleValue;
var msPattern;
var hyphenPattern;
var hyphenatedCache;
var noComponentSelectorMessage =
  'Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.';
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }
  if (interpolation.__emotion_styles !== void 0) {
    if (interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error(noComponentSelectorMessage);
    }
    return interpolation;
  }
  switch (typeof interpolation) {
    case 'boolean': {
      return '';
    }
    case 'object': {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next = interpolation.next;
        if (next !== void 0) {
          while (next !== void 0) {
            cursor = {
              name: next.name,
              styles: next.styles,
              next: cursor
            };
            next = next.next;
          }
        }
        var styles = interpolation.styles + ';';
        if (interpolation.map !== void 0) {
          styles += interpolation.map;
        }
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case 'function': {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      } else if (true) {
        console.error(
          "Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`"
        );
      }
      break;
    }
    case 'string':
      if (true) {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function(match, p1, p2) {
          var fakeVarName = 'animation' + matched.length;
          matched.push('const ' + fakeVarName + ' = keyframes`' + p2.replace(/^@keyframes animation-\w+/, '') + '`');
          return '${' + fakeVarName + '}';
        });
        if (matched.length) {
          console.error(
            '`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n' +
              [].concat(matched, ['`' + replaced + '`']).join('\n') +
              '\n\nYou should wrap it with `css` like this:\n\n' +
              ('css`' + replaced + '`')
          );
        }
      }
      break;
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = '';
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ';';
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== void 0) {
          string += _key + '{' + registered[value] + '}';
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ':' + processStyleValue(_key, value) + ';';
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && true) {
          throw new Error(noComponentSelectorMessage);
        }
        if (
          Array.isArray(value) &&
          typeof value[0] === 'string' &&
          (registered == null || registered[value[0]] === void 0)
        ) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ':' + processStyleValue(_key, value[_i]) + ';';
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case 'animation':
            case 'animationName': {
              string += processStyleName(_key) + ':' + interpolated + ';';
              break;
            }
            default: {
              if (_key === 'undefined') {
                console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
              }
              string += _key + '{' + interpolated + '}';
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;
if (true) {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
}
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = '';
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (strings[0] === void 0) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }
    styles += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      if (strings[i] === void 0) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }
      styles += strings[i];
    }
  }
  var sourceMap;
  if (true) {
    styles = styles.replace(sourceMapPattern, function(match2) {
      sourceMap = match2;
      return '';
    });
  }
  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match;
  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + match[1];
  }
  var name = hashString(styles) + identifierName;
  if (true) {
    return {
      name,
      styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }
  return {
    name,
    styles,
    next: cursor
  };
};
export { serializeStyles };
