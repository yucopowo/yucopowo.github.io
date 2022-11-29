/* esm.sh - esbuild bundle(@emotion/cache@11.10.5) es2022 development */
// esm-build-f37ea72d642bc0280c956875bc98fbe52616b9cf-8f32394a/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js
import { StyleSheet } from '/cdn/v99/@emotion/sheet@1.2.1/es2022/sheet.development.js';
import {
  dealloc,
  alloc,
  next,
  token,
  from,
  peek,
  delimit,
  slice,
  position,
  RULESET,
  combine,
  match,
  serialize,
  copy,
  replace,
  WEBKIT,
  MOZ,
  MS,
  KEYFRAMES,
  DECLARATION,
  hash,
  charat,
  strlen,
  indexof,
  stringify,
  COMMENT,
  rulesheet,
  middleware,
  compile
} from '/cdn/v99/stylis@4.1.3/es2022/stylis.development.js';
import '/cdn/v99/@emotion/weak-memoize@0.3.0/es2022/weak-memoize.development.js';
import '/cdn/v99/@emotion/memoize@0.8.0/es2022/memoize.development.js';
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character = 0;
  while (true) {
    previous = character;
    character = peek();
    if (previous === 38 && character === 12) {
      points[index] = 1;
    }
    if (token(character)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character = 44;
  do {
    switch (token(character)) {
      case 0:
        if (character === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character);
        break;
      case 4:
        if (character === 44) {
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character);
    }
  } while ((character = next()));
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== 'rule' || !element.parent || element.length < 1) {
    return;
  }
  var value = element.value,
    parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + ' ' + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === 'decl') {
    var value = element.value;
    if (value.charCodeAt(0) === 108 && value.charCodeAt(2) === 98) {
      element['return'] = '';
      element.value = '';
    }
  }
};
var ignoreFlag =
  'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
var isIgnoringComment = function isIgnoringComment2(element) {
  return element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};
var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm2(cache) {
  return function(element, index, children) {
    if (element.type !== 'rule' || cache.compat) return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);
    if (unsafePseudoClasses) {
      var isNested = element.parent === children[0];
      var commentContainer = isNested ? children[0].children : children;
      for (var i = commentContainer.length - 1; i >= 0; i--) {
        var node = commentContainer[i];
        if (node.line < element.line) {
          break;
        }
        if (node.column < element.column) {
          if (isIgnoringComment(node)) {
            return;
          }
          break;
        }
      }
      unsafePseudoClasses.forEach(function(unsafePseudoClass) {
        console.error(
          'The pseudo class "' +
            unsafePseudoClass +
            '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
            unsafePseudoClass.split('-child')[0] +
            '-of-type".'
        );
      });
    }
  };
};
var isImportRule = function isImportRule2(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};
var isPrependedWithRegularRules = function isPrependedWithRegularRules2(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }
  return false;
};
var nullifyElement = function nullifyElement2(element) {
  element.type = '';
  element.value = '';
  element['return'] = '';
  element.children = '';
  element.props = '';
};
var incorrectImportAlarm = function incorrectImportAlarm2(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }
  if (element.parent) {
    console.error(
      "`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."
    );
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error(
      "`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."
    );
    nullifyElement(element);
  }
};
function prefix(value, length) {
  switch (hash(value, length)) {
    case 5103:
      return WEBKIT + 'print-' + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    case 6060:
      return (
        WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value
      );
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    case 6187:
      return (
        replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value
      );
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1$`$1');
    case 4968:
      return (
        replace(
          replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'),
          /s.+-b[^;]+/,
          'justify'
        ) +
        WEBKIT +
        value +
        value
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length > 6)
        switch (charat(value, length + 1)) {
          case 109:
            if (charat(value, length + 4) !== 45) break;
          case 102:
            return (
              replace(
                value,
                /(.+:)(.+)-([^]+)/,
                '$1' + WEBKIT + '$2-$3$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')
              ) + value
            );
          case 115:
            return ~indexof(value, 'stretch')
              ? prefix(replace(value, 'stretch', 'fill-available'), length) + value
              : value;
        }
      break;
    case 4949:
      if (charat(value, length + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        case 101:
          return (
            replace(
              value,
              /(.+:)([^;!]+)(;|!.+)?/,
              '$1' +
                WEBKIT +
                (charat(value, 14) === 45 ? 'inline-' : '') +
                'box$3$1' +
                WEBKIT +
                '$2$3$1' +
                MS +
                '$2box$3'
            ) + value
          );
      }
      break;
    case 5936:
      switch (charat(value, length + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element['return'])
      switch (element.type) {
        case DECLARATION:
          element['return'] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize(
            [
              copy(element, {
                value: replace(element.value, '@', '@' + WEBKIT)
              })
            ],
            callback
          );
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ':read-only':
                case ':read-write':
                  return serialize(
                    [
                      copy(element, {
                        props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
                      })
                    ],
                    callback
                  );
                case '::placeholder':
                  return serialize(
                    [
                      copy(element, {
                        props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
                      }),
                      copy(element, {
                        props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
                      }),
                      copy(element, {
                        props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
                      })
                    ],
                    callback
                  );
              }
              return '';
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (!key) {
    throw new Error(
      "You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\nIf multiple caches share the same key they might \"fight\" for each other's style elements."
    );
  }
  if (key === 'css') {
    var ssrStyles = document.querySelectorAll('style[data-emotion]:not([data-s])');
    Array.prototype.forEach.call(ssrStyles, function(node) {
      var dataEmotionAttribute = node.getAttribute('data-emotion');
      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }
      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed'
      );
    }
  }
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + key + ' "]'), function(node) {
      var attrib = node.getAttribute('data-emotion').split(' ');
      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }
      nodesToHydrate.push(node);
    });
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  if (true) {
    omnipresentPlugins.push(
      createUnsafeSelectorsAlarm({
        get compat() {
          return cache.compat;
        }
      }),
      incorrectImportAlarm
    );
  }
  {
    var currentSheet;
    var finalizingPlugins = [
      stringify,
      true
        ? function(element) {
            if (!element.root) {
              if (element['return']) {
                currentSheet.insert(element['return']);
              } else if (element.value && element.type !== COMMENT) {
                currentSheet.insert(element.value + '{}');
              }
            }
          }
        : rulesheet(function(rule) {
            currentSheet.insert(rule);
          })
    ];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      if (serialized.map !== void 0) {
        currentSheet = {
          insert: function insert2(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }
      stylis(selector ? selector + '{' + serialized.styles + '}' : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var emotion_cache_browser_esm_default = createCache;
export { emotion_cache_browser_esm_default as default };
