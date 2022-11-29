/* esm.sh - esbuild bundle(@emotion/cache@10.0.29) es2022 development */
// esm-build-ca7f5fcf753e1ad4578ff3e58d4e53c976e269ac-29ae4e45/node_modules/@emotion/cache/dist/cache.esm.js
import { StyleSheet } from '/cdn/v99/@emotion/sheet@0.9.4/es2022/sheet.development.js';
import Stylis from '/cdn/v99/@emotion/stylis@0.8.5/es2022/stylis.development.js';
import weakMemoize from '/cdn/v99/@emotion/weak-memoize@0.2.5/es2022/weak-memoize.development.js';
var delimiter = '/*|*/';
var needle = delimiter + '}';
function toSheet(block) {
  if (block) {
    Sheet.current.insert(block + '}');
  }
}
var Sheet = {
  current: null
};
var ruleSheet = function ruleSheet2(context, content, selectors, parents, line, column, length, ns, depth, at) {
  switch (context) {
    case 1: {
      switch (content.charCodeAt(0)) {
        case 64: {
          Sheet.current.insert(content + ';');
          return '';
        }
        case 108: {
          if (content.charCodeAt(2) === 98) {
            return '';
          }
        }
      }
      break;
    }
    case 2: {
      if (ns === 0) return content + delimiter;
      break;
    }
    case 3: {
      switch (ns) {
        case 102:
        case 112: {
          Sheet.current.insert(selectors[0] + content);
          return '';
        }
        default: {
          return content + (at === 0 ? delimiter : '');
        }
      }
    }
    case -2: {
      content.split(needle).forEach(toSheet);
    }
  }
};
var removeLabel = function removeLabel2(context, content) {
  if (context === 1 && content.charCodeAt(0) === 108 && content.charCodeAt(2) === 98) {
    return '';
  }
};
var isBrowser = typeof document !== 'undefined';
var rootServerStylisCache = {};
var getServerStylisCache = isBrowser
  ? void 0
  : weakMemoize(function() {
      var getCache = weakMemoize(function() {
        return {};
      });
      var prefixTrueCache = {};
      var prefixFalseCache = {};
      return function(prefix) {
        if (prefix === void 0 || prefix === true) {
          return prefixTrueCache;
        }
        if (prefix === false) {
          return prefixFalseCache;
        }
        return getCache(prefix);
      };
    });
var createCache = function createCache2(options) {
  if (options === void 0) options = {};
  var key = options.key || 'css';
  var stylisOptions;
  if (options.prefix !== void 0) {
    stylisOptions = {
      prefix: options.prefix
    };
  }
  var stylis = new Stylis(stylisOptions);
  if (true) {
    if (/[^a-z-]/.test(key)) {
      throw new Error(
        'Emotion key must only contain lower case alphabetical characters and - but "' + key + '" was passed'
      );
    }
  }
  var inserted = {};
  var container;
  if (isBrowser) {
    container = options.container || document.head;
    var nodes = document.querySelectorAll('style[data-emotion-' + key + ']');
    Array.prototype.forEach.call(nodes, function(node) {
      var attrib = node.getAttribute('data-emotion-' + key);
      attrib.split(' ').forEach(function(id) {
        inserted[id] = true;
      });
      if (node.parentNode !== container) {
        container.appendChild(node);
      }
    });
  }
  var _insert;
  if (isBrowser) {
    stylis.use(options.stylisPlugins)(ruleSheet);
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      Sheet.current = sheet;
      if (serialized.map !== void 0) {
        var map = serialized.map;
        Sheet.current = {
          insert: function insert2(rule) {
            sheet.insert(rule + map);
          }
        };
      }
      stylis(selector, serialized.styles);
      if (shouldCache) {
        cache.inserted[name] = true;
      }
    };
  } else {
    stylis.use(removeLabel);
    var serverStylisCache = rootServerStylisCache;
    if (options.stylisPlugins || options.prefix !== void 0) {
      stylis.use(options.stylisPlugins);
      serverStylisCache = getServerStylisCache(options.stylisPlugins || rootServerStylisCache)(options.prefix);
    }
    var getRules = function getRules2(selector, serialized) {
      var name = serialized.name;
      if (serverStylisCache[name] === void 0) {
        serverStylisCache[name] = stylis(selector, serialized.styles);
      }
      return serverStylisCache[name];
    };
    _insert = function _insert2(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);
      if (cache.compat === void 0) {
        if (shouldCache) {
          cache.inserted[name] = true;
        }
        if (serialized.map !== void 0) {
          return rules + serialized.map;
        }
        return rules;
      } else {
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }
  if (true) {
    var commentStart = /\/\*/g;
    var commentEnd = /\*\//g;
    stylis.use(function(context, content) {
      switch (context) {
        case -1: {
          while (commentStart.test(content)) {
            commentEnd.lastIndex = commentStart.lastIndex;
            if (commentEnd.test(content)) {
              commentStart.lastIndex = commentEnd.lastIndex;
              continue;
            }
            throw new Error('Your styles have an unterminated comment ("/*" without corresponding "*/").');
          }
          commentStart.lastIndex = 0;
          break;
        }
      }
    });
    stylis.use(function(context, content, selectors) {
      switch (context) {
        case -1: {
          var flag =
            'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';
          var unsafePseudoClasses = content.match(/(:first|:nth|:nth-last)-child/g);
          if (unsafePseudoClasses && cache.compat !== true) {
            unsafePseudoClasses.forEach(function(unsafePseudoClass) {
              var ignoreRegExp = new RegExp(unsafePseudoClass + '.*\\/\\* ' + flag + ' \\*\\/');
              var ignore = ignoreRegExp.test(content);
              if (unsafePseudoClass && !ignore) {
                console.error(
                  'The pseudo class "' +
                    unsafePseudoClass +
                    '" is potentially unsafe when doing server-side rendering. Try changing it to "' +
                    unsafePseudoClass.split('-child')[0] +
                    '-of-type".'
                );
              }
            });
          }
          break;
        }
      }
    });
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  return cache;
};
var cache_esm_default = createCache;
export { cache_esm_default as default };
