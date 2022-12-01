/* esm.sh - esbuild bundle(react-syntax-highlighter@15.5.0) es2022 development */
// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/highlight.js
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/objectWithoutProperties.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/toConsumableArray.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/defineProperty.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/create-element.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/defineProperty.development.js';
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
function powerSetPermutations(arr) {
  var arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    return [arr[0], arr[1], ''.concat(arr[0], '.').concat(arr[1]), ''.concat(arr[1], '.').concat(arr[0])];
  }
  if (arrLength === 3) {
    return [
      arr[0],
      arr[1],
      arr[2],
      ''.concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0])
    ];
  }
  if (arrLength >= 4) {
    return [
      arr[0],
      arr[1],
      arr[2],
      arr[3],
      ''.concat(arr[0], '.').concat(arr[1]),
      ''.concat(arr[0], '.').concat(arr[2]),
      ''.concat(arr[0], '.').concat(arr[3]),
      ''.concat(arr[1], '.').concat(arr[0]),
      ''.concat(arr[1], '.').concat(arr[2]),
      ''.concat(arr[1], '.').concat(arr[3]),
      ''.concat(arr[2], '.').concat(arr[0]),
      ''.concat(arr[2], '.').concat(arr[1]),
      ''.concat(arr[2], '.').concat(arr[3]),
      ''.concat(arr[3], '.').concat(arr[0]),
      ''.concat(arr[3], '.').concat(arr[1]),
      ''.concat(arr[3], '.').concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[3], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[3]),
      ''
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[3], '.')
        .concat(arr[0]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[2], '.')
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[1], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[0], '.')
        .concat(arr[2], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[0], '.')
        .concat(arr[2]),
      ''
        .concat(arr[3], '.')
        .concat(arr[1], '.')
        .concat(arr[2], '.')
        .concat(arr[0]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[0], '.')
        .concat(arr[1]),
      ''
        .concat(arr[3], '.')
        .concat(arr[2], '.')
        .concat(arr[1], '.')
        .concat(arr[0])
    ];
  }
}
var classNameCombinations = {};
function getClassNameCombinations(classNames) {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  var key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
}
function createStyleObject(classNames) {
  var elementStyle = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var stylesheet = arguments.length > 2 ? arguments[2] : void 0;
  var nonTokenClassNames = classNames.filter(function(className) {
    return className !== 'token';
  });
  var classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(function(styleObject, className) {
    return _objectSpread(_objectSpread({}, styleObject), stylesheet[className]);
  }, elementStyle);
}
function createClassNameString(classNames) {
  return classNames.join(' ');
}
function createChildren(stylesheet, useInlineStyles) {
  var childrenCount = 0;
  return function(children) {
    childrenCount += 1;
    return children.map(function(child, i) {
      return createElement({
        node: child,
        stylesheet,
        useInlineStyles,
        key: 'code-segment-'.concat(childrenCount, '-').concat(i)
      });
    });
  };
}
function createElement(_ref) {
  var node = _ref.node,
    stylesheet = _ref.stylesheet,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    useInlineStyles = _ref.useInlineStyles,
    key = _ref.key;
  var properties = node.properties,
    type = node.type,
    TagName = node.tagName,
    value = node.value;
  if (type === 'text') {
    return value;
  } else if (TagName) {
    var childrenCreator = createChildren(stylesheet, useInlineStyles);
    var props;
    if (!useInlineStyles) {
      props = _objectSpread(
        _objectSpread({}, properties),
        {},
        {
          className: createClassNameString(properties.className)
        }
      );
    } else {
      var allStylesheetSelectors = Object.keys(stylesheet).reduce(function(classes, selector) {
        selector.split('.').forEach(function(className2) {
          if (!classes.includes(className2)) classes.push(className2);
        });
        return classes;
      }, []);
      var startingClassName = properties.className && properties.className.includes('token') ? ['token'] : [];
      var className =
        properties.className &&
        startingClassName.concat(
          properties.className.filter(function(className2) {
            return !allStylesheetSelectors.includes(className2);
          })
        );
      props = _objectSpread(
        _objectSpread({}, properties),
        {},
        {
          className: createClassNameString(className) || void 0,
          style: createStyleObject(properties.className, Object.assign({}, properties.style, style), stylesheet)
        }
      );
    }
    var children = childrenCreator(node.children);
    return /* @__PURE__ */ React.createElement(
      TagName,
      _extends(
        {
          key
        },
        props
      ),
      children
    );
  }
}

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/checkForListedLanguage.js
var checkForListedLanguage_default = function(astGenerator, language) {
  var langs = astGenerator.listLanguages();
  return langs.indexOf(language) !== -1;
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/highlight.js
var _excluded = [
  'language',
  'children',
  'style',
  'customStyle',
  'codeTagProps',
  'useInlineStyles',
  'showLineNumbers',
  'showInlineLineNumbers',
  'startingLineNumber',
  'lineNumberContainerStyle',
  'lineNumberStyle',
  'wrapLines',
  'wrapLongLines',
  'lineProps',
  'renderer',
  'PreTag',
  'CodeTag',
  'code',
  'astGenerator'
];
function ownKeys2(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys2(Object(source), true).forEach(function(key) {
          _defineProperty2(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys2(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}
var newLineRegex = /\n/g;
function getNewLines(str) {
  return str.match(newLineRegex);
}
function getAllLineNumbers(_ref) {
  var lines = _ref.lines,
    startingLineNumber = _ref.startingLineNumber,
    style = _ref.style;
  return lines.map(function(_, i) {
    var number = i + startingLineNumber;
    return /* @__PURE__ */ React2.createElement(
      'span',
      {
        key: 'line-'.concat(i),
        className: 'react-syntax-highlighter-line-number',
        style: typeof style === 'function' ? style(number) : style
      },
      ''.concat(number, '\n')
    );
  });
}
function AllLineNumbers(_ref2) {
  var codeString = _ref2.codeString,
    codeStyle = _ref2.codeStyle,
    _ref2$containerStyle = _ref2.containerStyle,
    containerStyle =
      _ref2$containerStyle === void 0
        ? {
            float: 'left',
            paddingRight: '10px'
          }
        : _ref2$containerStyle,
    _ref2$numberStyle = _ref2.numberStyle,
    numberStyle = _ref2$numberStyle === void 0 ? {} : _ref2$numberStyle,
    startingLineNumber = _ref2.startingLineNumber;
  return /* @__PURE__ */ React2.createElement(
    'code',
    {
      style: Object.assign({}, codeStyle, containerStyle)
    },
    getAllLineNumbers({
      lines: codeString.replace(/\n$/, '').split('\n'),
      style: numberStyle,
      startingLineNumber
    })
  );
}
function getEmWidthOfNumber(num) {
  return ''.concat(num.toString().length, '.25em');
}
function getInlineLineNumber(lineNumber, inlineLineNumberStyle) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(lineNumber),
      className: ['comment', 'linenumber', 'react-syntax-highlighter-line-number'],
      style: inlineLineNumberStyle
    },
    children: [
      {
        type: 'text',
        value: lineNumber
      }
    ]
  };
}
function assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber) {
  var defaultLineNumberStyle = {
    display: 'inline-block',
    minWidth: getEmWidthOfNumber(largestLineNumber),
    paddingRight: '1em',
    textAlign: 'right',
    userSelect: 'none'
  };
  var customLineNumberStyle = typeof lineNumberStyle === 'function' ? lineNumberStyle(lineNumber) : lineNumberStyle;
  var assembledStyle = _objectSpread2(_objectSpread2({}, defaultLineNumberStyle), customLineNumberStyle);
  return assembledStyle;
}
function createLineElement(_ref3) {
  var children = _ref3.children,
    lineNumber = _ref3.lineNumber,
    lineNumberStyle = _ref3.lineNumberStyle,
    largestLineNumber = _ref3.largestLineNumber,
    showInlineLineNumbers = _ref3.showInlineLineNumbers,
    _ref3$lineProps = _ref3.lineProps,
    lineProps = _ref3$lineProps === void 0 ? {} : _ref3$lineProps,
    _ref3$className = _ref3.className,
    className = _ref3$className === void 0 ? [] : _ref3$className,
    showLineNumbers = _ref3.showLineNumbers,
    wrapLongLines = _ref3.wrapLongLines;
  var properties = typeof lineProps === 'function' ? lineProps(lineNumber) : lineProps;
  properties['className'] = className;
  if (lineNumber && showInlineLineNumbers) {
    var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber, largestLineNumber);
    children.unshift(getInlineLineNumber(lineNumber, inlineLineNumberStyle));
  }
  if (wrapLongLines & showLineNumbers) {
    properties.style = _objectSpread2(
      _objectSpread2({}, properties.style),
      {},
      {
        display: 'flex'
      }
    );
  }
  return {
    type: 'element',
    tagName: 'span',
    properties,
    children
  };
}
function flattenCodeTree(tree) {
  var className = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  var newTree = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
  for (var i = 0; i < tree.length; i++) {
    var node = tree[i];
    if (node.type === 'text') {
      newTree.push(
        createLineElement({
          children: [node],
          className: _toConsumableArray(new Set(className))
        })
      );
    } else if (node.children) {
      var classNames = className.concat(node.properties.className);
      flattenCodeTree(node.children, classNames).forEach(function(i2) {
        return newTree.push(i2);
      });
    }
  }
  return newTree;
}
function processLines(
  codeTree,
  wrapLines,
  lineProps,
  showLineNumbers,
  showInlineLineNumbers,
  startingLineNumber,
  largestLineNumber,
  lineNumberStyle,
  wrapLongLines
) {
  var _ref4;
  var tree = flattenCodeTree(codeTree.value);
  var newTree = [];
  var lastLineBreakIndex = -1;
  var index = 0;
  function createWrappedLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return createLineElement({
      children: children2,
      lineNumber: lineNumber2,
      lineNumberStyle,
      largestLineNumber,
      showInlineLineNumbers,
      lineProps,
      className,
      showLineNumbers,
      wrapLongLines
    });
  }
  function createUnwrappedLine(children2, lineNumber2) {
    if (showLineNumbers && lineNumber2 && showInlineLineNumbers) {
      var inlineLineNumberStyle = assembleLineNumberStyles(lineNumberStyle, lineNumber2, largestLineNumber);
      children2.unshift(getInlineLineNumber(lineNumber2, inlineLineNumberStyle));
    }
    return children2;
  }
  function createLine(children2, lineNumber2) {
    var className = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return wrapLines || className.length > 0
      ? createWrappedLine(children2, lineNumber2, className)
      : createUnwrappedLine(children2, lineNumber2);
  }
  var _loop = function _loop2() {
    var node = tree[index];
    var value = node.children[0].value;
    var newLines = getNewLines(value);
    if (newLines) {
      var splitValue = value.split('\n');
      splitValue.forEach(function(text, i) {
        var lineNumber2 = showLineNumbers && newTree.length + startingLineNumber;
        var newChild = {
          type: 'text',
          value: ''.concat(text, '\n')
        };
        if (i === 0) {
          var _children = tree.slice(lastLineBreakIndex + 1, index).concat(
            createLineElement({
              children: [newChild],
              className: node.properties.className
            })
          );
          var _line = createLine(_children, lineNumber2);
          newTree.push(_line);
        } else if (i === splitValue.length - 1) {
          var stringChild = tree[index + 1] && tree[index + 1].children && tree[index + 1].children[0];
          var lastLineInPreviousSpan = {
            type: 'text',
            value: ''.concat(text)
          };
          if (stringChild) {
            var newElem = createLineElement({
              children: [lastLineInPreviousSpan],
              className: node.properties.className
            });
            tree.splice(index + 1, 0, newElem);
          } else {
            var _children2 = [lastLineInPreviousSpan];
            var _line2 = createLine(_children2, lineNumber2, node.properties.className);
            newTree.push(_line2);
          }
        } else {
          var _children3 = [newChild];
          var _line3 = createLine(_children3, lineNumber2, node.properties.className);
          newTree.push(_line3);
        }
      });
      lastLineBreakIndex = index;
    }
    index++;
  };
  while (index < tree.length) {
    _loop();
  }
  if (lastLineBreakIndex !== tree.length - 1) {
    var children = tree.slice(lastLineBreakIndex + 1, tree.length);
    if (children && children.length) {
      var lineNumber = showLineNumbers && newTree.length + startingLineNumber;
      var line = createLine(children, lineNumber);
      newTree.push(line);
    }
  }
  return wrapLines ? newTree : (_ref4 = []).concat.apply(_ref4, newTree);
}
function defaultRenderer(_ref5) {
  var rows = _ref5.rows,
    stylesheet = _ref5.stylesheet,
    useInlineStyles = _ref5.useInlineStyles;
  return rows.map(function(node, i) {
    return createElement({
      node,
      stylesheet,
      useInlineStyles,
      key: 'code-segement'.concat(i)
    });
  });
}
function isHighlightJs(astGenerator) {
  return astGenerator && typeof astGenerator.highlightAuto !== 'undefined';
}
function getCodeTree(_ref6) {
  var astGenerator = _ref6.astGenerator,
    language = _ref6.language,
    code = _ref6.code,
    defaultCodeValue = _ref6.defaultCodeValue;
  if (isHighlightJs(astGenerator)) {
    var hasLanguage = checkForListedLanguage_default(astGenerator, language);
    if (language === 'text') {
      return {
        value: defaultCodeValue,
        language: 'text'
      };
    } else if (hasLanguage) {
      return astGenerator.highlight(language, code);
    } else {
      return astGenerator.highlightAuto(code);
    }
  }
  try {
    return language && language !== 'text'
      ? {
          value: astGenerator.highlight(code, language)
        }
      : {
          value: defaultCodeValue
        };
  } catch (e) {
    return {
      value: defaultCodeValue
    };
  }
}
function highlight_default(defaultAstGenerator, defaultStyle) {
  return function SyntaxHighlighter3(_ref7) {
    var language = _ref7.language,
      children = _ref7.children,
      _ref7$style = _ref7.style,
      style = _ref7$style === void 0 ? defaultStyle : _ref7$style,
      _ref7$customStyle = _ref7.customStyle,
      customStyle = _ref7$customStyle === void 0 ? {} : _ref7$customStyle,
      _ref7$codeTagProps = _ref7.codeTagProps,
      codeTagProps =
        _ref7$codeTagProps === void 0
          ? {
              className: language ? 'language-'.concat(language) : void 0,
              style: _objectSpread2(
                _objectSpread2({}, style['code[class*="language-"]']),
                style['code[class*="language-'.concat(language, '"]')]
              )
            }
          : _ref7$codeTagProps,
      _ref7$useInlineStyles = _ref7.useInlineStyles,
      useInlineStyles = _ref7$useInlineStyles === void 0 ? true : _ref7$useInlineStyles,
      _ref7$showLineNumbers = _ref7.showLineNumbers,
      showLineNumbers = _ref7$showLineNumbers === void 0 ? false : _ref7$showLineNumbers,
      _ref7$showInlineLineN = _ref7.showInlineLineNumbers,
      showInlineLineNumbers = _ref7$showInlineLineN === void 0 ? true : _ref7$showInlineLineN,
      _ref7$startingLineNum = _ref7.startingLineNumber,
      startingLineNumber = _ref7$startingLineNum === void 0 ? 1 : _ref7$startingLineNum,
      lineNumberContainerStyle = _ref7.lineNumberContainerStyle,
      _ref7$lineNumberStyle = _ref7.lineNumberStyle,
      lineNumberStyle = _ref7$lineNumberStyle === void 0 ? {} : _ref7$lineNumberStyle,
      wrapLines = _ref7.wrapLines,
      _ref7$wrapLongLines = _ref7.wrapLongLines,
      wrapLongLines = _ref7$wrapLongLines === void 0 ? false : _ref7$wrapLongLines,
      _ref7$lineProps = _ref7.lineProps,
      lineProps = _ref7$lineProps === void 0 ? {} : _ref7$lineProps,
      renderer = _ref7.renderer,
      _ref7$PreTag = _ref7.PreTag,
      PreTag = _ref7$PreTag === void 0 ? 'pre' : _ref7$PreTag,
      _ref7$CodeTag = _ref7.CodeTag,
      CodeTag = _ref7$CodeTag === void 0 ? 'code' : _ref7$CodeTag,
      _ref7$code = _ref7.code,
      code = _ref7$code === void 0 ? (Array.isArray(children) ? children[0] : children) || '' : _ref7$code,
      astGenerator = _ref7.astGenerator,
      rest = _objectWithoutProperties(_ref7, _excluded);
    astGenerator = astGenerator || defaultAstGenerator;
    var allLineNumbers = showLineNumbers
      ? /* @__PURE__ */ React2.createElement(AllLineNumbers, {
          containerStyle: lineNumberContainerStyle,
          codeStyle: codeTagProps.style || {},
          numberStyle: lineNumberStyle,
          startingLineNumber,
          codeString: code
        })
      : null;
    var defaultPreStyle = style.hljs ||
      style['pre[class*="language-"]'] || {
        backgroundColor: '#fff'
      };
    var generatorClassName = isHighlightJs(astGenerator) ? 'hljs' : 'prismjs';
    var preProps = useInlineStyles
      ? Object.assign({}, rest, {
          style: Object.assign({}, defaultPreStyle, customStyle)
        })
      : Object.assign({}, rest, {
          className: rest.className ? ''.concat(generatorClassName, ' ').concat(rest.className) : generatorClassName,
          style: Object.assign({}, customStyle)
        });
    if (wrapLongLines) {
      codeTagProps.style = _objectSpread2(
        _objectSpread2({}, codeTagProps.style),
        {},
        {
          whiteSpace: 'pre-wrap'
        }
      );
    } else {
      codeTagProps.style = _objectSpread2(
        _objectSpread2({}, codeTagProps.style),
        {},
        {
          whiteSpace: 'pre'
        }
      );
    }
    if (!astGenerator) {
      return /* @__PURE__ */ React2.createElement(
        PreTag,
        preProps,
        allLineNumbers,
        /* @__PURE__ */ React2.createElement(CodeTag, codeTagProps, code)
      );
    }
    if ((wrapLines === void 0 && renderer) || wrapLongLines) wrapLines = true;
    renderer = renderer || defaultRenderer;
    var defaultCodeValue = [
      {
        type: 'text',
        value: code
      }
    ];
    var codeTree = getCodeTree({
      astGenerator,
      language,
      code,
      defaultCodeValue
    });
    if (codeTree.language === null) {
      codeTree.value = defaultCodeValue;
    }
    var largestLineNumber = codeTree.value.length + startingLineNumber;
    var rows = processLines(
      codeTree,
      wrapLines,
      lineProps,
      showLineNumbers,
      showInlineLineNumbers,
      startingLineNumber,
      largestLineNumber,
      lineNumberStyle,
      wrapLongLines
    );
    return /* @__PURE__ */ React2.createElement(
      PreTag,
      preProps,
      /* @__PURE__ */ React2.createElement(
        CodeTag,
        codeTagProps,
        !showInlineLineNumbers && allLineNumbers,
        renderer({
          rows,
          stylesheet: style,
          useInlineStyles
        })
      )
    );
  };
}

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/styles/hljs/default-style.js
var default_style_default = {
  hljs: {
    display: 'block',
    overflowX: 'auto',
    padding: '0.5em',
    background: '#F0F0F0',
    color: '#444'
  },
  'hljs-subst': {
    color: '#444'
  },
  'hljs-comment': {
    color: '#888888'
  },
  'hljs-keyword': {
    fontWeight: 'bold'
  },
  'hljs-attribute': {
    fontWeight: 'bold'
  },
  'hljs-selector-tag': {
    fontWeight: 'bold'
  },
  'hljs-meta-keyword': {
    fontWeight: 'bold'
  },
  'hljs-doctag': {
    fontWeight: 'bold'
  },
  'hljs-name': {
    fontWeight: 'bold'
  },
  'hljs-type': {
    color: '#880000'
  },
  'hljs-string': {
    color: '#880000'
  },
  'hljs-number': {
    color: '#880000'
  },
  'hljs-selector-id': {
    color: '#880000'
  },
  'hljs-selector-class': {
    color: '#880000'
  },
  'hljs-quote': {
    color: '#880000'
  },
  'hljs-template-tag': {
    color: '#880000'
  },
  'hljs-deletion': {
    color: '#880000'
  },
  'hljs-title': {
    color: '#880000',
    fontWeight: 'bold'
  },
  'hljs-section': {
    color: '#880000',
    fontWeight: 'bold'
  },
  'hljs-regexp': {
    color: '#BC6060'
  },
  'hljs-symbol': {
    color: '#BC6060'
  },
  'hljs-variable': {
    color: '#BC6060'
  },
  'hljs-template-variable': {
    color: '#BC6060'
  },
  'hljs-link': {
    color: '#BC6060'
  },
  'hljs-selector-attr': {
    color: '#BC6060'
  },
  'hljs-selector-pseudo': {
    color: '#BC6060'
  },
  'hljs-literal': {
    color: '#78A960'
  },
  'hljs-built_in': {
    color: '#397300'
  },
  'hljs-bullet': {
    color: '#397300'
  },
  'hljs-code': {
    color: '#397300'
  },
  'hljs-addition': {
    color: '#397300'
  },
  'hljs-meta': {
    color: '#1f7199'
  },
  'hljs-meta-string': {
    color: '#4d99bf'
  },
  'hljs-emphasis': {
    fontStyle: 'italic'
  },
  'hljs-strong': {
    fontWeight: 'bold'
  }
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/default-highlight.js
import lowlight from '/cdn/v99/lowlight@1.20.0/es2022/lowlight.development.js';

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/languages/hljs/supported-languages.js
var supported_languages_default = [
  '1c',
  'abnf',
  'accesslog',
  'actionscript',
  'ada',
  'angelscript',
  'apache',
  'applescript',
  'arcade',
  'arduino',
  'armasm',
  'asciidoc',
  'aspectj',
  'autohotkey',
  'autoit',
  'avrasm',
  'awk',
  'axapta',
  'bash',
  'basic',
  'bnf',
  'brainfuck',
  'c-like',
  'c',
  'cal',
  'capnproto',
  'ceylon',
  'clean',
  'clojure-repl',
  'clojure',
  'cmake',
  'coffeescript',
  'coq',
  'cos',
  'cpp',
  'crmsh',
  'crystal',
  'csharp',
  'csp',
  'css',
  'd',
  'dart',
  'delphi',
  'diff',
  'django',
  'dns',
  'dockerfile',
  'dos',
  'dsconfig',
  'dts',
  'dust',
  'ebnf',
  'elixir',
  'elm',
  'erb',
  'erlang-repl',
  'erlang',
  'excel',
  'fix',
  'flix',
  'fortran',
  'fsharp',
  'gams',
  'gauss',
  'gcode',
  'gherkin',
  'glsl',
  'gml',
  'go',
  'golo',
  'gradle',
  'groovy',
  'haml',
  'handlebars',
  'haskell',
  'haxe',
  'hsp',
  'htmlbars',
  'http',
  'hy',
  'inform7',
  'ini',
  'irpf90',
  'isbl',
  'java',
  'javascript',
  'jboss-cli',
  'json',
  'julia-repl',
  'julia',
  'kotlin',
  'lasso',
  'latex',
  'ldif',
  'leaf',
  'less',
  'lisp',
  'livecodeserver',
  'livescript',
  'llvm',
  'lsl',
  'lua',
  'makefile',
  'markdown',
  'mathematica',
  'matlab',
  'maxima',
  'mel',
  'mercury',
  'mipsasm',
  'mizar',
  'mojolicious',
  'monkey',
  'moonscript',
  'n1ql',
  'nginx',
  'nim',
  'nix',
  'node-repl',
  'nsis',
  'objectivec',
  'ocaml',
  'openscad',
  'oxygene',
  'parser3',
  'perl',
  'pf',
  'pgsql',
  'php-template',
  'php',
  'plaintext',
  'pony',
  'powershell',
  'processing',
  'profile',
  'prolog',
  'properties',
  'protobuf',
  'puppet',
  'purebasic',
  'python-repl',
  'python',
  'q',
  'qml',
  'r',
  'reasonml',
  'rib',
  'roboconf',
  'routeros',
  'rsl',
  'ruby',
  'ruleslanguage',
  'rust',
  'sas',
  'scala',
  'scheme',
  'scilab',
  'scss',
  'shell',
  'smali',
  'smalltalk',
  'sml',
  'sqf',
  'sql',
  'sql_more',
  'stan',
  'stata',
  'step21',
  'stylus',
  'subunit',
  'swift',
  'taggerscript',
  'tap',
  'tcl',
  'thrift',
  'tp',
  'twig',
  'typescript',
  'vala',
  'vbnet',
  'vbscript-html',
  'vbscript',
  'verilog',
  'vhdl',
  'vim',
  'x86asm',
  'xl',
  'xml',
  'xquery',
  'yaml',
  'zephir'
];

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/default-highlight.js
var highlighter = highlight_default(lowlight, default_style_default);
highlighter.supportedLanguages = supported_languages_default;
var default_highlight_default = highlighter;

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/async-syntax-highlighter.js
import _asyncToGenerator from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/asyncToGenerator.development.js';
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/extends.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/inherits.development.js';
import _possibleConstructorReturn from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/possibleConstructorReturn.development.js';
import _getPrototypeOf from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/getPrototypeOf.development.js';
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/defineProperty.development.js';
import _regeneratorRuntime from '/cdn/v99/@babel/runtime@7.20.1/es2022/regenerator.development.js';
import React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}
var async_syntax_highlighter_default = function(options) {
  var loader4 = options.loader,
    isLanguageRegistered3 = options.isLanguageRegistered,
    registerLanguage3 = options.registerLanguage,
    languageLoaders = options.languageLoaders,
    noAsyncLoadingLanguages = options.noAsyncLoadingLanguages;
  var ReactAsyncHighlighter = /* @__PURE__ */ (function(_React$PureComponent) {
    _inherits(ReactAsyncHighlighter2, _React$PureComponent);
    var _super = _createSuper(ReactAsyncHighlighter2);
    function ReactAsyncHighlighter2() {
      _classCallCheck(this, ReactAsyncHighlighter2);
      return _super.apply(this, arguments);
    }
    _createClass(
      ReactAsyncHighlighter2,
      [
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate() {
            if (!ReactAsyncHighlighter2.isRegistered(this.props.language) && languageLoaders) {
              this.loadLanguage();
            }
          }
        },
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this = this;
            if (!ReactAsyncHighlighter2.astGeneratorPromise) {
              ReactAsyncHighlighter2.loadAstGenerator();
            }
            if (!ReactAsyncHighlighter2.astGenerator) {
              ReactAsyncHighlighter2.astGeneratorPromise.then(function() {
                _this.forceUpdate();
              });
            }
            if (!ReactAsyncHighlighter2.isRegistered(this.props.language) && languageLoaders) {
              this.loadLanguage();
            }
          }
        },
        {
          key: 'loadLanguage',
          value: function loadLanguage() {
            var _this2 = this;
            var language = this.props.language;
            if (language === 'text') {
              return;
            }
            ReactAsyncHighlighter2.loadLanguage(language)
              .then(function() {
                return _this2.forceUpdate();
              })
              ['catch'](function() {});
          }
        },
        {
          key: 'normalizeLanguage',
          value: function normalizeLanguage(language) {
            return ReactAsyncHighlighter2.isSupportedLanguage(language) ? language : 'text';
          }
        },
        {
          key: 'render',
          value: function render() {
            return /* @__PURE__ */ React3.createElement(
              ReactAsyncHighlighter2.highlightInstance,
              _extends2({}, this.props, {
                language: this.normalizeLanguage(this.props.language),
                astGenerator: ReactAsyncHighlighter2.astGenerator
              })
            );
          }
        }
      ],
      [
        {
          key: 'preload',
          value: function preload() {
            return ReactAsyncHighlighter2.loadAstGenerator();
          }
        },
        {
          key: 'loadLanguage',
          value: (function() {
            var _loadLanguage = _asyncToGenerator(
              /* @__PURE__ */ _regeneratorRuntime.mark(function _callee(language) {
                var languageLoader;
                return _regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch ((_context.prev = _context.next)) {
                      case 0:
                        languageLoader = languageLoaders[language];
                        if (!(typeof languageLoader === 'function')) {
                          _context.next = 5;
                          break;
                        }
                        return _context.abrupt('return', languageLoader(ReactAsyncHighlighter2.registerLanguage));
                      case 5:
                        throw new Error('Language '.concat(language, ' not supported'));
                      case 6:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee);
              })
            );
            function loadLanguage(_x) {
              return _loadLanguage.apply(this, arguments);
            }
            return loadLanguage;
          })()
        },
        {
          key: 'isSupportedLanguage',
          value: function isSupportedLanguage(language) {
            return ReactAsyncHighlighter2.isRegistered(language) || typeof languageLoaders[language] === 'function';
          }
        },
        {
          key: 'loadAstGenerator',
          value: function loadAstGenerator() {
            ReactAsyncHighlighter2.astGeneratorPromise = loader4().then(function(astGenerator) {
              ReactAsyncHighlighter2.astGenerator = astGenerator;
              if (registerLanguage3) {
                ReactAsyncHighlighter2.languages.forEach(function(language, name) {
                  return registerLanguage3(astGenerator, name, language);
                });
              }
            });
            return ReactAsyncHighlighter2.astGeneratorPromise;
          }
        }
      ]
    );
    return ReactAsyncHighlighter2;
  })(React3.PureComponent);
  _defineProperty3(ReactAsyncHighlighter, 'astGenerator', null);
  _defineProperty3(ReactAsyncHighlighter, 'highlightInstance', highlight_default(null, {}));
  _defineProperty3(ReactAsyncHighlighter, 'astGeneratorPromise', null);
  _defineProperty3(ReactAsyncHighlighter, 'languages', /* @__PURE__ */ new Map());
  _defineProperty3(
    ReactAsyncHighlighter,
    'supportedLanguages',
    options.supportedLanguages || Object.keys(languageLoaders || {})
  );
  _defineProperty3(ReactAsyncHighlighter, 'isRegistered', function(language) {
    if (noAsyncLoadingLanguages) {
      return true;
    }
    if (!registerLanguage3) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (!ReactAsyncHighlighter.astGenerator) {
      return ReactAsyncHighlighter.languages.has(language);
    }
    return isLanguageRegistered3(ReactAsyncHighlighter.astGenerator, language);
  });
  _defineProperty3(ReactAsyncHighlighter, 'registerLanguage', function(name, language) {
    if (!registerLanguage3) {
      throw new Error("Current syntax highlighter doesn't support registration of languages");
    }
    if (ReactAsyncHighlighter.astGenerator) {
      return registerLanguage3(ReactAsyncHighlighter.astGenerator, name, language);
    } else {
      ReactAsyncHighlighter.languages.set(name, language);
    }
  });
  return ReactAsyncHighlighter;
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/async-languages/create-language-async-loader.js
import _asyncToGenerator2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/asyncToGenerator.development.js';
import _regeneratorRuntime2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/regenerator.development.js';
var create_language_async_loader_default = function(name, loader4) {
  return /* @__PURE__ */ (function() {
    var _ref = _asyncToGenerator2(
      /* @__PURE__ */ _regeneratorRuntime2.mark(function _callee(registerLanguage3) {
        var module;
        return _regeneratorRuntime2.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return loader4();
              case 2:
                module = _context.sent;
                registerLanguage3(name, module['default'] || module);
              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    );
    return function(_x) {
      return _ref.apply(this, arguments);
    };
  })();
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/async-languages/hljs.js
var hljs_default = {
  oneC: create_language_async_loader_default('oneC', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_oneC" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/1c.development.js'
    );
  }),
  abnf: create_language_async_loader_default('abnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_abnf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/abnf.development.js'
    );
  }),
  accesslog: create_language_async_loader_default('accesslog', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_accesslog" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/accesslog.development.js'
    );
  }),
  actionscript: create_language_async_loader_default('actionscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_actionscript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/actionscript.development.js'
    );
  }),
  ada: create_language_async_loader_default('ada', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ada" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ada.development.js'
    );
  }),
  angelscript: create_language_async_loader_default('angelscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_angelscript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/angelscript.development.js'
    );
  }),
  apache: create_language_async_loader_default('apache', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_apache" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/apache.development.js'
    );
  }),
  applescript: create_language_async_loader_default('applescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_applescript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/applescript.development.js'
    );
  }),
  arcade: create_language_async_loader_default('arcade', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_arcade" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/arcade.development.js'
    );
  }),
  arduino: create_language_async_loader_default('arduino', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_arduino" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/arduino.development.js'
    );
  }),
  armasm: create_language_async_loader_default('armasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_armasm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/armasm.development.js'
    );
  }),
  asciidoc: create_language_async_loader_default('asciidoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_asciidoc" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/asciidoc.development.js'
    );
  }),
  aspectj: create_language_async_loader_default('aspectj', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_aspectj" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/aspectj.development.js'
    );
  }),
  autohotkey: create_language_async_loader_default('autohotkey', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_autohotkey" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/autohotkey.development.js'
    );
  }),
  autoit: create_language_async_loader_default('autoit', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_autoit" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/autoit.development.js'
    );
  }),
  avrasm: create_language_async_loader_default('avrasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_avrasm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/avrasm.development.js'
    );
  }),
  awk: create_language_async_loader_default('awk', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_awk" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/awk.development.js'
    );
  }),
  axapta: create_language_async_loader_default('axapta', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_axapta" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/axapta.development.js'
    );
  }),
  bash: create_language_async_loader_default('bash', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_bash" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/bash.development.js'
    );
  }),
  basic: create_language_async_loader_default('basic', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_basic" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/basic.development.js'
    );
  }),
  bnf: create_language_async_loader_default('bnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_bnf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/bnf.development.js'
    );
  }),
  brainfuck: create_language_async_loader_default('brainfuck', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_brainfuck" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/brainfuck.development.js'
    );
  }),
  cLike: create_language_async_loader_default('cLike', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_cLike" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/c-like.development.js'
    );
  }),
  c: create_language_async_loader_default('c', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_c" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/c.development.js'
    );
  }),
  cal: create_language_async_loader_default('cal', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_cal" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/cal.development.js'
    );
  }),
  capnproto: create_language_async_loader_default('capnproto', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_capnproto" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/capnproto.development.js'
    );
  }),
  ceylon: create_language_async_loader_default('ceylon', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ceylon" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ceylon.development.js'
    );
  }),
  clean: create_language_async_loader_default('clean', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_clean" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/clean.development.js'
    );
  }),
  clojureRepl: create_language_async_loader_default('clojureRepl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_clojureRepl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/clojure-repl.development.js'
    );
  }),
  clojure: create_language_async_loader_default('clojure', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_clojure" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/clojure.development.js'
    );
  }),
  cmake: create_language_async_loader_default('cmake', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_cmake" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/cmake.development.js'
    );
  }),
  coffeescript: create_language_async_loader_default('coffeescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_coffeescript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/coffeescript.development.js'
    );
  }),
  coq: create_language_async_loader_default('coq', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_coq" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/coq.development.js'
    );
  }),
  cos: create_language_async_loader_default('cos', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_cos" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/cos.development.js'
    );
  }),
  cpp: create_language_async_loader_default('cpp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_cpp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/cpp.development.js'
    );
  }),
  crmsh: create_language_async_loader_default('crmsh', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_crmsh" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/crmsh.development.js'
    );
  }),
  crystal: create_language_async_loader_default('crystal', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_crystal" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/crystal.development.js'
    );
  }),
  csharp: create_language_async_loader_default('csharp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_csharp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/csharp.development.js'
    );
  }),
  csp: create_language_async_loader_default('csp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_csp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/csp.development.js'
    );
  }),
  css: create_language_async_loader_default('css', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_css" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/css.development.js'
    );
  }),
  d: create_language_async_loader_default('d', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_d" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/d.development.js'
    );
  }),
  dart: create_language_async_loader_default('dart', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dart" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dart.development.js'
    );
  }),
  delphi: create_language_async_loader_default('delphi', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_delphi" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/delphi.development.js'
    );
  }),
  diff: create_language_async_loader_default('diff', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_diff" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/diff.development.js'
    );
  }),
  django: create_language_async_loader_default('django', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_django" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/django.development.js'
    );
  }),
  dns: create_language_async_loader_default('dns', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dns" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dns.development.js'
    );
  }),
  dockerfile: create_language_async_loader_default('dockerfile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dockerfile" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dockerfile.development.js'
    );
  }),
  dos: create_language_async_loader_default('dos', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dos" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dos.development.js'
    );
  }),
  dsconfig: create_language_async_loader_default('dsconfig', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dsconfig" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dsconfig.development.js'
    );
  }),
  dts: create_language_async_loader_default('dts', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dts" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dts.development.js'
    );
  }),
  dust: create_language_async_loader_default('dust', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_dust" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/dust.development.js'
    );
  }),
  ebnf: create_language_async_loader_default('ebnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ebnf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ebnf.development.js'
    );
  }),
  elixir: create_language_async_loader_default('elixir', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_elixir" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/elixir.development.js'
    );
  }),
  elm: create_language_async_loader_default('elm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_elm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/elm.development.js'
    );
  }),
  erb: create_language_async_loader_default('erb', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_erb" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/erb.development.js'
    );
  }),
  erlangRepl: create_language_async_loader_default('erlangRepl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_erlangRepl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/erlang-repl.development.js'
    );
  }),
  erlang: create_language_async_loader_default('erlang', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_erlang" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/erlang.development.js'
    );
  }),
  excel: create_language_async_loader_default('excel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_excel" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/excel.development.js'
    );
  }),
  fix: create_language_async_loader_default('fix', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_fix" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/fix.development.js'
    );
  }),
  flix: create_language_async_loader_default('flix', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_flix" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/flix.development.js'
    );
  }),
  fortran: create_language_async_loader_default('fortran', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_fortran" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/fortran.development.js'
    );
  }),
  fsharp: create_language_async_loader_default('fsharp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_fsharp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/fsharp.development.js'
    );
  }),
  gams: create_language_async_loader_default('gams', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gams" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gams.development.js'
    );
  }),
  gauss: create_language_async_loader_default('gauss', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gauss" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gauss.development.js'
    );
  }),
  gcode: create_language_async_loader_default('gcode', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gcode" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gcode.development.js'
    );
  }),
  gherkin: create_language_async_loader_default('gherkin', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gherkin" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gherkin.development.js'
    );
  }),
  glsl: create_language_async_loader_default('glsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_glsl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/glsl.development.js'
    );
  }),
  gml: create_language_async_loader_default('gml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gml.development.js'
    );
  }),
  go: create_language_async_loader_default('go', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_go" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/go.development.js'
    );
  }),
  golo: create_language_async_loader_default('golo', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_golo" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/golo.development.js'
    );
  }),
  gradle: create_language_async_loader_default('gradle', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_gradle" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/gradle.development.js'
    );
  }),
  groovy: create_language_async_loader_default('groovy', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_groovy" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/groovy.development.js'
    );
  }),
  haml: create_language_async_loader_default('haml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_haml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/haml.development.js'
    );
  }),
  handlebars: create_language_async_loader_default('handlebars', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_handlebars" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/handlebars.development.js'
    );
  }),
  haskell: create_language_async_loader_default('haskell', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_haskell" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/haskell.development.js'
    );
  }),
  haxe: create_language_async_loader_default('haxe', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_haxe" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/haxe.development.js'
    );
  }),
  hsp: create_language_async_loader_default('hsp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_hsp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/hsp.development.js'
    );
  }),
  htmlbars: create_language_async_loader_default('htmlbars', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_htmlbars" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/htmlbars.development.js'
    );
  }),
  http: create_language_async_loader_default('http', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_http" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/http.development.js'
    );
  }),
  hy: create_language_async_loader_default('hy', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_hy" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/hy.development.js'
    );
  }),
  inform7: create_language_async_loader_default('inform7', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_inform7" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/inform7.development.js'
    );
  }),
  ini: create_language_async_loader_default('ini', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ini" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ini.development.js'
    );
  }),
  irpf90: create_language_async_loader_default('irpf90', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_irpf90" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/irpf90.development.js'
    );
  }),
  isbl: create_language_async_loader_default('isbl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_isbl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/isbl.development.js'
    );
  }),
  java: create_language_async_loader_default('java', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_java" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/java.development.js'
    );
  }),
  javascript: create_language_async_loader_default('javascript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_javascript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/javascript.development.js'
    );
  }),
  jbossCli: create_language_async_loader_default('jbossCli', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_jbossCli" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/jboss-cli.development.js'
    );
  }),
  json: create_language_async_loader_default('json', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_json" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/json.development.js'
    );
  }),
  juliaRepl: create_language_async_loader_default('juliaRepl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_juliaRepl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/julia-repl.development.js'
    );
  }),
  julia: create_language_async_loader_default('julia', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_julia" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/julia.development.js'
    );
  }),
  kotlin: create_language_async_loader_default('kotlin', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_kotlin" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/kotlin.development.js'
    );
  }),
  lasso: create_language_async_loader_default('lasso', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_lasso" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/lasso.development.js'
    );
  }),
  latex: create_language_async_loader_default('latex', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_latex" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/latex.development.js'
    );
  }),
  ldif: create_language_async_loader_default('ldif', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ldif" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ldif.development.js'
    );
  }),
  leaf: create_language_async_loader_default('leaf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_leaf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/leaf.development.js'
    );
  }),
  less: create_language_async_loader_default('less', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_less" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/less.development.js'
    );
  }),
  lisp: create_language_async_loader_default('lisp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_lisp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/lisp.development.js'
    );
  }),
  livecodeserver: create_language_async_loader_default('livecodeserver', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_livecodeserver" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/livecodeserver.development.js'
    );
  }),
  livescript: create_language_async_loader_default('livescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_livescript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/livescript.development.js'
    );
  }),
  llvm: create_language_async_loader_default('llvm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_llvm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/llvm.development.js'
    );
  }),
  lsl: create_language_async_loader_default('lsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_lsl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/lsl.development.js'
    );
  }),
  lua: create_language_async_loader_default('lua', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_lua" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/lua.development.js'
    );
  }),
  makefile: create_language_async_loader_default('makefile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_makefile" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/makefile.development.js'
    );
  }),
  markdown: create_language_async_loader_default('markdown', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_markdown" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/markdown.development.js'
    );
  }),
  mathematica: create_language_async_loader_default('mathematica', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mathematica" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mathematica.development.js'
    );
  }),
  matlab: create_language_async_loader_default('matlab', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_matlab" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/matlab.development.js'
    );
  }),
  maxima: create_language_async_loader_default('maxima', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_maxima" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/maxima.development.js'
    );
  }),
  mel: create_language_async_loader_default('mel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mel" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mel.development.js'
    );
  }),
  mercury: create_language_async_loader_default('mercury', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mercury" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mercury.development.js'
    );
  }),
  mipsasm: create_language_async_loader_default('mipsasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mipsasm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mipsasm.development.js'
    );
  }),
  mizar: create_language_async_loader_default('mizar', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mizar" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mizar.development.js'
    );
  }),
  mojolicious: create_language_async_loader_default('mojolicious', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_mojolicious" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/mojolicious.development.js'
    );
  }),
  monkey: create_language_async_loader_default('monkey', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_monkey" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/monkey.development.js'
    );
  }),
  moonscript: create_language_async_loader_default('moonscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_moonscript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/moonscript.development.js'
    );
  }),
  n1ql: create_language_async_loader_default('n1ql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_n1ql" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/n1ql.development.js'
    );
  }),
  nginx: create_language_async_loader_default('nginx', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_nginx" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/nginx.development.js'
    );
  }),
  nim: create_language_async_loader_default('nim', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_nim" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/nim.development.js'
    );
  }),
  nix: create_language_async_loader_default('nix', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_nix" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/nix.development.js'
    );
  }),
  nodeRepl: create_language_async_loader_default('nodeRepl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_nodeRepl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/node-repl.development.js'
    );
  }),
  nsis: create_language_async_loader_default('nsis', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_nsis" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/nsis.development.js'
    );
  }),
  objectivec: create_language_async_loader_default('objectivec', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_objectivec" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/objectivec.development.js'
    );
  }),
  ocaml: create_language_async_loader_default('ocaml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ocaml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ocaml.development.js'
    );
  }),
  openscad: create_language_async_loader_default('openscad', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_openscad" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/openscad.development.js'
    );
  }),
  oxygene: create_language_async_loader_default('oxygene', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_oxygene" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/oxygene.development.js'
    );
  }),
  parser3: create_language_async_loader_default('parser3', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_parser3" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/parser3.development.js'
    );
  }),
  perl: create_language_async_loader_default('perl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_perl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/perl.development.js'
    );
  }),
  pf: create_language_async_loader_default('pf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_pf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/pf.development.js'
    );
  }),
  pgsql: create_language_async_loader_default('pgsql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_pgsql" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/pgsql.development.js'
    );
  }),
  phpTemplate: create_language_async_loader_default('phpTemplate', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_phpTemplate" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/php-template.development.js'
    );
  }),
  php: create_language_async_loader_default('php', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_php" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/php.development.js'
    );
  }),
  plaintext: create_language_async_loader_default('plaintext', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_plaintext" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/plaintext.development.js'
    );
  }),
  pony: create_language_async_loader_default('pony', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_pony" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/pony.development.js'
    );
  }),
  powershell: create_language_async_loader_default('powershell', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_powershell" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/powershell.development.js'
    );
  }),
  processing: create_language_async_loader_default('processing', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_processing" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/processing.development.js'
    );
  }),
  profile: create_language_async_loader_default('profile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_profile" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/profile.development.js'
    );
  }),
  prolog: create_language_async_loader_default('prolog', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_prolog" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/prolog.development.js'
    );
  }),
  properties: create_language_async_loader_default('properties', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_properties" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/properties.development.js'
    );
  }),
  protobuf: create_language_async_loader_default('protobuf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_protobuf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/protobuf.development.js'
    );
  }),
  puppet: create_language_async_loader_default('puppet', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_puppet" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/puppet.development.js'
    );
  }),
  purebasic: create_language_async_loader_default('purebasic', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_purebasic" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/purebasic.development.js'
    );
  }),
  pythonRepl: create_language_async_loader_default('pythonRepl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_pythonRepl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/python-repl.development.js'
    );
  }),
  python: create_language_async_loader_default('python', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_python" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/python.development.js'
    );
  }),
  q: create_language_async_loader_default('q', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_q" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/q.development.js'
    );
  }),
  qml: create_language_async_loader_default('qml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_qml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/qml.development.js'
    );
  }),
  r: create_language_async_loader_default('r', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_r" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/r.development.js'
    );
  }),
  reasonml: create_language_async_loader_default('reasonml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_reasonml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/reasonml.development.js'
    );
  }),
  rib: create_language_async_loader_default('rib', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_rib" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/rib.development.js'
    );
  }),
  roboconf: create_language_async_loader_default('roboconf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_roboconf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/roboconf.development.js'
    );
  }),
  routeros: create_language_async_loader_default('routeros', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_routeros" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/routeros.development.js'
    );
  }),
  rsl: create_language_async_loader_default('rsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_rsl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/rsl.development.js'
    );
  }),
  ruby: create_language_async_loader_default('ruby', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ruby" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ruby.development.js'
    );
  }),
  ruleslanguage: create_language_async_loader_default('ruleslanguage', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_ruleslanguage" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/ruleslanguage.development.js'
    );
  }),
  rust: create_language_async_loader_default('rust', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_rust" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/rust.development.js'
    );
  }),
  sas: create_language_async_loader_default('sas', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_sas" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/sas.development.js'
    );
  }),
  scala: create_language_async_loader_default('scala', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_scala" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/scala.development.js'
    );
  }),
  scheme: create_language_async_loader_default('scheme', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_scheme" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/scheme.development.js'
    );
  }),
  scilab: create_language_async_loader_default('scilab', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_scilab" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/scilab.development.js'
    );
  }),
  scss: create_language_async_loader_default('scss', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_scss" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/scss.development.js'
    );
  }),
  shell: create_language_async_loader_default('shell', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_shell" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/shell.development.js'
    );
  }),
  smali: create_language_async_loader_default('smali', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_smali" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/smali.development.js'
    );
  }),
  smalltalk: create_language_async_loader_default('smalltalk', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_smalltalk" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/smalltalk.development.js'
    );
  }),
  sml: create_language_async_loader_default('sml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_sml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/sml.development.js'
    );
  }),
  sqf: create_language_async_loader_default('sqf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_sqf" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/sqf.development.js'
    );
  }),
  sql: create_language_async_loader_default('sql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_sql" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/sql.development.js'
    );
  }),
  sqlMore: create_language_async_loader_default('sqlMore', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_sqlMore" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/sql_more.development.js'
    );
  }),
  stan: create_language_async_loader_default('stan', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_stan" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/stan.development.js'
    );
  }),
  stata: create_language_async_loader_default('stata', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_stata" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/stata.development.js'
    );
  }),
  step21: create_language_async_loader_default('step21', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_step21" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/step21.development.js'
    );
  }),
  stylus: create_language_async_loader_default('stylus', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_stylus" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/stylus.development.js'
    );
  }),
  subunit: create_language_async_loader_default('subunit', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_subunit" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/subunit.development.js'
    );
  }),
  swift: create_language_async_loader_default('swift', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_swift" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/swift.development.js'
    );
  }),
  taggerscript: create_language_async_loader_default('taggerscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_taggerscript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/taggerscript.development.js'
    );
  }),
  tap: create_language_async_loader_default('tap', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_tap" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/tap.development.js'
    );
  }),
  tcl: create_language_async_loader_default('tcl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_tcl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/tcl.development.js'
    );
  }),
  thrift: create_language_async_loader_default('thrift', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_thrift" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/thrift.development.js'
    );
  }),
  tp: create_language_async_loader_default('tp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_tp" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/tp.development.js'
    );
  }),
  twig: create_language_async_loader_default('twig', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_twig" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/twig.development.js'
    );
  }),
  typescript: create_language_async_loader_default('typescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_typescript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/typescript.development.js'
    );
  }),
  vala: create_language_async_loader_default('vala', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vala" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vala.development.js'
    );
  }),
  vbnet: create_language_async_loader_default('vbnet', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vbnet" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vbnet.development.js'
    );
  }),
  vbscriptHtml: create_language_async_loader_default('vbscriptHtml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vbscriptHtml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vbscript-html.development.js'
    );
  }),
  vbscript: create_language_async_loader_default('vbscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vbscript" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vbscript.development.js'
    );
  }),
  verilog: create_language_async_loader_default('verilog', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_verilog" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/verilog.development.js'
    );
  }),
  vhdl: create_language_async_loader_default('vhdl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vhdl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vhdl.development.js'
    );
  }),
  vim: create_language_async_loader_default('vim', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_vim" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/vim.development.js'
    );
  }),
  x86asm: create_language_async_loader_default('x86asm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_x86asm" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/x86asm.development.js'
    );
  }),
  xl: create_language_async_loader_default('xl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_xl" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/xl.development.js'
    );
  }),
  xml: create_language_async_loader_default('xml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_xml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/xml.development.js'
    );
  }),
  xquery: create_language_async_loader_default('xquery', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_xquery" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/xquery.development.js'
    );
  }),
  yaml: create_language_async_loader_default('yaml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_yaml" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/yaml.development.js'
    );
  }),
  zephir: create_language_async_loader_default('zephir', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_highlight_zephir" */
      '/v99/highlight.js@10.7.3/es2022/lib/languages/zephir.development.js'
    );
  })
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/light-async.js
var light_async_default = async_syntax_highlighter_default({
  loader: function loader() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/lowlight-import" */
      '/v99/lowlight@1.20.0/es2022/lib/core.development.js'
    ).then(function(module) {
      return module['default'] || module;
    });
  },
  isLanguageRegistered: function isLanguageRegistered(instance, language) {
    return !!checkForListedLanguage_default(instance, language);
  },
  languageLoaders: hljs_default,
  registerLanguage: function registerLanguage(instance, name, language) {
    return instance.registerLanguage(name, language);
  }
});

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/light.js
import lowlight2 from '/cdn/v99/lowlight@1.20.0/es2022/lib/core.development.js';
var SyntaxHighlighter = highlight_default(lowlight2, {});
SyntaxHighlighter.registerLanguage = lowlight2.registerLanguage;
var light_default = SyntaxHighlighter;

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/async-languages/prism.js
var prism_default = {
  abap: create_language_async_loader_default('abap', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_abap" */
      '/v99/refractor@3.6.0/es2022/lang/abap.development.js'
    );
  }),
  abnf: create_language_async_loader_default('abnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_abnf" */
      '/v99/refractor@3.6.0/es2022/lang/abnf.development.js'
    );
  }),
  actionscript: create_language_async_loader_default('actionscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_actionscript" */
      '/v99/refractor@3.6.0/es2022/lang/actionscript.development.js'
    );
  }),
  ada: create_language_async_loader_default('ada', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ada" */
      '/v99/refractor@3.6.0/es2022/lang/ada.development.js'
    );
  }),
  agda: create_language_async_loader_default('agda', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_agda" */
      '/v99/refractor@3.6.0/es2022/lang/agda.development.js'
    );
  }),
  al: create_language_async_loader_default('al', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_al" */
      '/v99/refractor@3.6.0/es2022/lang/al.development.js'
    );
  }),
  antlr4: create_language_async_loader_default('antlr4', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_antlr4" */
      '/v99/refractor@3.6.0/es2022/lang/antlr4.development.js'
    );
  }),
  apacheconf: create_language_async_loader_default('apacheconf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_apacheconf" */
      '/v99/refractor@3.6.0/es2022/lang/apacheconf.development.js'
    );
  }),
  apex: create_language_async_loader_default('apex', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_apex" */
      '/v99/refractor@3.6.0/es2022/lang/apex.development.js'
    );
  }),
  apl: create_language_async_loader_default('apl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_apl" */
      '/v99/refractor@3.6.0/es2022/lang/apl.development.js'
    );
  }),
  applescript: create_language_async_loader_default('applescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_applescript" */
      '/v99/refractor@3.6.0/es2022/lang/applescript.development.js'
    );
  }),
  aql: create_language_async_loader_default('aql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_aql" */
      '/v99/refractor@3.6.0/es2022/lang/aql.development.js'
    );
  }),
  arduino: create_language_async_loader_default('arduino', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_arduino" */
      '/v99/refractor@3.6.0/es2022/lang/arduino.development.js'
    );
  }),
  arff: create_language_async_loader_default('arff', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_arff" */
      '/v99/refractor@3.6.0/es2022/lang/arff.development.js'
    );
  }),
  asciidoc: create_language_async_loader_default('asciidoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_asciidoc" */
      '/v99/refractor@3.6.0/es2022/lang/asciidoc.development.js'
    );
  }),
  asm6502: create_language_async_loader_default('asm6502', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_asm6502" */
      '/v99/refractor@3.6.0/es2022/lang/asm6502.development.js'
    );
  }),
  asmatmel: create_language_async_loader_default('asmatmel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_asmatmel" */
      '/v99/refractor@3.6.0/es2022/lang/asmatmel.development.js'
    );
  }),
  aspnet: create_language_async_loader_default('aspnet', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_aspnet" */
      '/v99/refractor@3.6.0/es2022/lang/aspnet.development.js'
    );
  }),
  autohotkey: create_language_async_loader_default('autohotkey', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_autohotkey" */
      '/v99/refractor@3.6.0/es2022/lang/autohotkey.development.js'
    );
  }),
  autoit: create_language_async_loader_default('autoit', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_autoit" */
      '/v99/refractor@3.6.0/es2022/lang/autoit.development.js'
    );
  }),
  avisynth: create_language_async_loader_default('avisynth', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_avisynth" */
      '/v99/refractor@3.6.0/es2022/lang/avisynth.development.js'
    );
  }),
  avroIdl: create_language_async_loader_default('avroIdl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_avroIdl" */
      '/v99/refractor@3.6.0/es2022/lang/avro-idl.development.js'
    );
  }),
  bash: create_language_async_loader_default('bash', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bash" */
      '/v99/refractor@3.6.0/es2022/lang/bash.development.js'
    );
  }),
  basic: create_language_async_loader_default('basic', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_basic" */
      '/v99/refractor@3.6.0/es2022/lang/basic.development.js'
    );
  }),
  batch: create_language_async_loader_default('batch', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_batch" */
      '/v99/refractor@3.6.0/es2022/lang/batch.development.js'
    );
  }),
  bbcode: create_language_async_loader_default('bbcode', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bbcode" */
      '/v99/refractor@3.6.0/es2022/lang/bbcode.development.js'
    );
  }),
  bicep: create_language_async_loader_default('bicep', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bicep" */
      '/v99/refractor@3.6.0/es2022/lang/bicep.development.js'
    );
  }),
  birb: create_language_async_loader_default('birb', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_birb" */
      '/v99/refractor@3.6.0/es2022/lang/birb.development.js'
    );
  }),
  bison: create_language_async_loader_default('bison', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bison" */
      '/v99/refractor@3.6.0/es2022/lang/bison.development.js'
    );
  }),
  bnf: create_language_async_loader_default('bnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bnf" */
      '/v99/refractor@3.6.0/es2022/lang/bnf.development.js'
    );
  }),
  brainfuck: create_language_async_loader_default('brainfuck', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_brainfuck" */
      '/v99/refractor@3.6.0/es2022/lang/brainfuck.development.js'
    );
  }),
  brightscript: create_language_async_loader_default('brightscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_brightscript" */
      '/v99/refractor@3.6.0/es2022/lang/brightscript.development.js'
    );
  }),
  bro: create_language_async_loader_default('bro', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bro" */
      '/v99/refractor@3.6.0/es2022/lang/bro.development.js'
    );
  }),
  bsl: create_language_async_loader_default('bsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_bsl" */
      '/v99/refractor@3.6.0/es2022/lang/bsl.development.js'
    );
  }),
  c: create_language_async_loader_default('c', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_c" */
      '/v99/refractor@3.6.0/es2022/lang/c.development.js'
    );
  }),
  cfscript: create_language_async_loader_default('cfscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cfscript" */
      '/v99/refractor@3.6.0/es2022/lang/cfscript.development.js'
    );
  }),
  chaiscript: create_language_async_loader_default('chaiscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_chaiscript" */
      '/v99/refractor@3.6.0/es2022/lang/chaiscript.development.js'
    );
  }),
  cil: create_language_async_loader_default('cil', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cil" */
      '/v99/refractor@3.6.0/es2022/lang/cil.development.js'
    );
  }),
  clike: create_language_async_loader_default('clike', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_clike" */
      '/v99/refractor@3.6.0/es2022/lang/clike.development.js'
    );
  }),
  clojure: create_language_async_loader_default('clojure', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_clojure" */
      '/v99/refractor@3.6.0/es2022/lang/clojure.development.js'
    );
  }),
  cmake: create_language_async_loader_default('cmake', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cmake" */
      '/v99/refractor@3.6.0/es2022/lang/cmake.development.js'
    );
  }),
  cobol: create_language_async_loader_default('cobol', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cobol" */
      '/v99/refractor@3.6.0/es2022/lang/cobol.development.js'
    );
  }),
  coffeescript: create_language_async_loader_default('coffeescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_coffeescript" */
      '/v99/refractor@3.6.0/es2022/lang/coffeescript.development.js'
    );
  }),
  concurnas: create_language_async_loader_default('concurnas', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_concurnas" */
      '/v99/refractor@3.6.0/es2022/lang/concurnas.development.js'
    );
  }),
  coq: create_language_async_loader_default('coq', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_coq" */
      '/v99/refractor@3.6.0/es2022/lang/coq.development.js'
    );
  }),
  cpp: create_language_async_loader_default('cpp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cpp" */
      '/v99/refractor@3.6.0/es2022/lang/cpp.development.js'
    );
  }),
  crystal: create_language_async_loader_default('crystal', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_crystal" */
      '/v99/refractor@3.6.0/es2022/lang/crystal.development.js'
    );
  }),
  csharp: create_language_async_loader_default('csharp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_csharp" */
      '/v99/refractor@3.6.0/es2022/lang/csharp.development.js'
    );
  }),
  cshtml: create_language_async_loader_default('cshtml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cshtml" */
      '/v99/refractor@3.6.0/es2022/lang/cshtml.development.js'
    );
  }),
  csp: create_language_async_loader_default('csp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_csp" */
      '/v99/refractor@3.6.0/es2022/lang/csp.development.js'
    );
  }),
  cssExtras: create_language_async_loader_default('cssExtras', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cssExtras" */
      '/v99/refractor@3.6.0/es2022/lang/css-extras.development.js'
    );
  }),
  css: create_language_async_loader_default('css', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_css" */
      '/v99/refractor@3.6.0/es2022/lang/css.development.js'
    );
  }),
  csv: create_language_async_loader_default('csv', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_csv" */
      '/v99/refractor@3.6.0/es2022/lang/csv.development.js'
    );
  }),
  cypher: create_language_async_loader_default('cypher', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_cypher" */
      '/v99/refractor@3.6.0/es2022/lang/cypher.development.js'
    );
  }),
  d: create_language_async_loader_default('d', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_d" */
      '/v99/refractor@3.6.0/es2022/lang/d.development.js'
    );
  }),
  dart: create_language_async_loader_default('dart', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dart" */
      '/v99/refractor@3.6.0/es2022/lang/dart.development.js'
    );
  }),
  dataweave: create_language_async_loader_default('dataweave', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dataweave" */
      '/v99/refractor@3.6.0/es2022/lang/dataweave.development.js'
    );
  }),
  dax: create_language_async_loader_default('dax', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dax" */
      '/v99/refractor@3.6.0/es2022/lang/dax.development.js'
    );
  }),
  dhall: create_language_async_loader_default('dhall', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dhall" */
      '/v99/refractor@3.6.0/es2022/lang/dhall.development.js'
    );
  }),
  diff: create_language_async_loader_default('diff', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_diff" */
      '/v99/refractor@3.6.0/es2022/lang/diff.development.js'
    );
  }),
  django: create_language_async_loader_default('django', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_django" */
      '/v99/refractor@3.6.0/es2022/lang/django.development.js'
    );
  }),
  dnsZoneFile: create_language_async_loader_default('dnsZoneFile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dnsZoneFile" */
      '/v99/refractor@3.6.0/es2022/lang/dns-zone-file.development.js'
    );
  }),
  docker: create_language_async_loader_default('docker', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_docker" */
      '/v99/refractor@3.6.0/es2022/lang/docker.development.js'
    );
  }),
  dot: create_language_async_loader_default('dot', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_dot" */
      '/v99/refractor@3.6.0/es2022/lang/dot.development.js'
    );
  }),
  ebnf: create_language_async_loader_default('ebnf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ebnf" */
      '/v99/refractor@3.6.0/es2022/lang/ebnf.development.js'
    );
  }),
  editorconfig: create_language_async_loader_default('editorconfig', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_editorconfig" */
      '/v99/refractor@3.6.0/es2022/lang/editorconfig.development.js'
    );
  }),
  eiffel: create_language_async_loader_default('eiffel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_eiffel" */
      '/v99/refractor@3.6.0/es2022/lang/eiffel.development.js'
    );
  }),
  ejs: create_language_async_loader_default('ejs', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ejs" */
      '/v99/refractor@3.6.0/es2022/lang/ejs.development.js'
    );
  }),
  elixir: create_language_async_loader_default('elixir', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_elixir" */
      '/v99/refractor@3.6.0/es2022/lang/elixir.development.js'
    );
  }),
  elm: create_language_async_loader_default('elm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_elm" */
      '/v99/refractor@3.6.0/es2022/lang/elm.development.js'
    );
  }),
  erb: create_language_async_loader_default('erb', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_erb" */
      '/v99/refractor@3.6.0/es2022/lang/erb.development.js'
    );
  }),
  erlang: create_language_async_loader_default('erlang', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_erlang" */
      '/v99/refractor@3.6.0/es2022/lang/erlang.development.js'
    );
  }),
  etlua: create_language_async_loader_default('etlua', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_etlua" */
      '/v99/refractor@3.6.0/es2022/lang/etlua.development.js'
    );
  }),
  excelFormula: create_language_async_loader_default('excelFormula', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_excelFormula" */
      '/v99/refractor@3.6.0/es2022/lang/excel-formula.development.js'
    );
  }),
  factor: create_language_async_loader_default('factor', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_factor" */
      '/v99/refractor@3.6.0/es2022/lang/factor.development.js'
    );
  }),
  falselang: create_language_async_loader_default('falselang', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_falselang" */
      '/v99/refractor@3.6.0/es2022/lang/false.development.js'
    );
  }),
  firestoreSecurityRules: create_language_async_loader_default('firestoreSecurityRules', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_firestoreSecurityRules" */
      '/v99/refractor@3.6.0/es2022/lang/firestore-security-rules.development.js'
    );
  }),
  flow: create_language_async_loader_default('flow', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_flow" */
      '/v99/refractor@3.6.0/es2022/lang/flow.development.js'
    );
  }),
  fortran: create_language_async_loader_default('fortran', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_fortran" */
      '/v99/refractor@3.6.0/es2022/lang/fortran.development.js'
    );
  }),
  fsharp: create_language_async_loader_default('fsharp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_fsharp" */
      '/v99/refractor@3.6.0/es2022/lang/fsharp.development.js'
    );
  }),
  ftl: create_language_async_loader_default('ftl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ftl" */
      '/v99/refractor@3.6.0/es2022/lang/ftl.development.js'
    );
  }),
  gap: create_language_async_loader_default('gap', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gap" */
      '/v99/refractor@3.6.0/es2022/lang/gap.development.js'
    );
  }),
  gcode: create_language_async_loader_default('gcode', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gcode" */
      '/v99/refractor@3.6.0/es2022/lang/gcode.development.js'
    );
  }),
  gdscript: create_language_async_loader_default('gdscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gdscript" */
      '/v99/refractor@3.6.0/es2022/lang/gdscript.development.js'
    );
  }),
  gedcom: create_language_async_loader_default('gedcom', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gedcom" */
      '/v99/refractor@3.6.0/es2022/lang/gedcom.development.js'
    );
  }),
  gherkin: create_language_async_loader_default('gherkin', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gherkin" */
      '/v99/refractor@3.6.0/es2022/lang/gherkin.development.js'
    );
  }),
  git: create_language_async_loader_default('git', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_git" */
      '/v99/refractor@3.6.0/es2022/lang/git.development.js'
    );
  }),
  glsl: create_language_async_loader_default('glsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_glsl" */
      '/v99/refractor@3.6.0/es2022/lang/glsl.development.js'
    );
  }),
  gml: create_language_async_loader_default('gml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gml" */
      '/v99/refractor@3.6.0/es2022/lang/gml.development.js'
    );
  }),
  gn: create_language_async_loader_default('gn', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_gn" */
      '/v99/refractor@3.6.0/es2022/lang/gn.development.js'
    );
  }),
  goModule: create_language_async_loader_default('goModule', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_goModule" */
      '/v99/refractor@3.6.0/es2022/lang/go-module.development.js'
    );
  }),
  go: create_language_async_loader_default('go', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_go" */
      '/v99/refractor@3.6.0/es2022/lang/go.development.js'
    );
  }),
  graphql: create_language_async_loader_default('graphql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_graphql" */
      '/v99/refractor@3.6.0/es2022/lang/graphql.development.js'
    );
  }),
  groovy: create_language_async_loader_default('groovy', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_groovy" */
      '/v99/refractor@3.6.0/es2022/lang/groovy.development.js'
    );
  }),
  haml: create_language_async_loader_default('haml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haml" */
      '/v99/refractor@3.6.0/es2022/lang/haml.development.js'
    );
  }),
  handlebars: create_language_async_loader_default('handlebars', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_handlebars" */
      '/v99/refractor@3.6.0/es2022/lang/handlebars.development.js'
    );
  }),
  haskell: create_language_async_loader_default('haskell', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haskell" */
      '/v99/refractor@3.6.0/es2022/lang/haskell.development.js'
    );
  }),
  haxe: create_language_async_loader_default('haxe', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_haxe" */
      '/v99/refractor@3.6.0/es2022/lang/haxe.development.js'
    );
  }),
  hcl: create_language_async_loader_default('hcl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hcl" */
      '/v99/refractor@3.6.0/es2022/lang/hcl.development.js'
    );
  }),
  hlsl: create_language_async_loader_default('hlsl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hlsl" */
      '/v99/refractor@3.6.0/es2022/lang/hlsl.development.js'
    );
  }),
  hoon: create_language_async_loader_default('hoon', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hoon" */
      '/v99/refractor@3.6.0/es2022/lang/hoon.development.js'
    );
  }),
  hpkp: create_language_async_loader_default('hpkp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hpkp" */
      '/v99/refractor@3.6.0/es2022/lang/hpkp.development.js'
    );
  }),
  hsts: create_language_async_loader_default('hsts', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_hsts" */
      '/v99/refractor@3.6.0/es2022/lang/hsts.development.js'
    );
  }),
  http: create_language_async_loader_default('http', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_http" */
      '/v99/refractor@3.6.0/es2022/lang/http.development.js'
    );
  }),
  ichigojam: create_language_async_loader_default('ichigojam', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ichigojam" */
      '/v99/refractor@3.6.0/es2022/lang/ichigojam.development.js'
    );
  }),
  icon: create_language_async_loader_default('icon', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_icon" */
      '/v99/refractor@3.6.0/es2022/lang/icon.development.js'
    );
  }),
  icuMessageFormat: create_language_async_loader_default('icuMessageFormat', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_icuMessageFormat" */
      '/v99/refractor@3.6.0/es2022/lang/icu-message-format.development.js'
    );
  }),
  idris: create_language_async_loader_default('idris', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_idris" */
      '/v99/refractor@3.6.0/es2022/lang/idris.development.js'
    );
  }),
  iecst: create_language_async_loader_default('iecst', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_iecst" */
      '/v99/refractor@3.6.0/es2022/lang/iecst.development.js'
    );
  }),
  ignore: create_language_async_loader_default('ignore', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ignore" */
      '/v99/refractor@3.6.0/es2022/lang/ignore.development.js'
    );
  }),
  inform7: create_language_async_loader_default('inform7', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_inform7" */
      '/v99/refractor@3.6.0/es2022/lang/inform7.development.js'
    );
  }),
  ini: create_language_async_loader_default('ini', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ini" */
      '/v99/refractor@3.6.0/es2022/lang/ini.development.js'
    );
  }),
  io: create_language_async_loader_default('io', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_io" */
      '/v99/refractor@3.6.0/es2022/lang/io.development.js'
    );
  }),
  j: create_language_async_loader_default('j', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_j" */
      '/v99/refractor@3.6.0/es2022/lang/j.development.js'
    );
  }),
  java: create_language_async_loader_default('java', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_java" */
      '/v99/refractor@3.6.0/es2022/lang/java.development.js'
    );
  }),
  javadoc: create_language_async_loader_default('javadoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javadoc" */
      '/v99/refractor@3.6.0/es2022/lang/javadoc.development.js'
    );
  }),
  javadoclike: create_language_async_loader_default('javadoclike', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javadoclike" */
      '/v99/refractor@3.6.0/es2022/lang/javadoclike.development.js'
    );
  }),
  javascript: create_language_async_loader_default('javascript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javascript" */
      '/v99/refractor@3.6.0/es2022/lang/javascript.development.js'
    );
  }),
  javastacktrace: create_language_async_loader_default('javastacktrace', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_javastacktrace" */
      '/v99/refractor@3.6.0/es2022/lang/javastacktrace.development.js'
    );
  }),
  jexl: create_language_async_loader_default('jexl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jexl" */
      '/v99/refractor@3.6.0/es2022/lang/jexl.development.js'
    );
  }),
  jolie: create_language_async_loader_default('jolie', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jolie" */
      '/v99/refractor@3.6.0/es2022/lang/jolie.development.js'
    );
  }),
  jq: create_language_async_loader_default('jq', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jq" */
      '/v99/refractor@3.6.0/es2022/lang/jq.development.js'
    );
  }),
  jsExtras: create_language_async_loader_default('jsExtras', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsExtras" */
      '/v99/refractor@3.6.0/es2022/lang/js-extras.development.js'
    );
  }),
  jsTemplates: create_language_async_loader_default('jsTemplates', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsTemplates" */
      '/v99/refractor@3.6.0/es2022/lang/js-templates.development.js'
    );
  }),
  jsdoc: create_language_async_loader_default('jsdoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsdoc" */
      '/v99/refractor@3.6.0/es2022/lang/jsdoc.development.js'
    );
  }),
  json: create_language_async_loader_default('json', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_json" */
      '/v99/refractor@3.6.0/es2022/lang/json.development.js'
    );
  }),
  json5: create_language_async_loader_default('json5', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_json5" */
      '/v99/refractor@3.6.0/es2022/lang/json5.development.js'
    );
  }),
  jsonp: create_language_async_loader_default('jsonp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsonp" */
      '/v99/refractor@3.6.0/es2022/lang/jsonp.development.js'
    );
  }),
  jsstacktrace: create_language_async_loader_default('jsstacktrace', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsstacktrace" */
      '/v99/refractor@3.6.0/es2022/lang/jsstacktrace.development.js'
    );
  }),
  jsx: create_language_async_loader_default('jsx', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_jsx" */
      '/v99/refractor@3.6.0/es2022/lang/jsx.development.js'
    );
  }),
  julia: create_language_async_loader_default('julia', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_julia" */
      '/v99/refractor@3.6.0/es2022/lang/julia.development.js'
    );
  }),
  keepalived: create_language_async_loader_default('keepalived', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_keepalived" */
      '/v99/refractor@3.6.0/es2022/lang/keepalived.development.js'
    );
  }),
  keyman: create_language_async_loader_default('keyman', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_keyman" */
      '/v99/refractor@3.6.0/es2022/lang/keyman.development.js'
    );
  }),
  kotlin: create_language_async_loader_default('kotlin', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_kotlin" */
      '/v99/refractor@3.6.0/es2022/lang/kotlin.development.js'
    );
  }),
  kumir: create_language_async_loader_default('kumir', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_kumir" */
      '/v99/refractor@3.6.0/es2022/lang/kumir.development.js'
    );
  }),
  kusto: create_language_async_loader_default('kusto', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_kusto" */
      '/v99/refractor@3.6.0/es2022/lang/kusto.development.js'
    );
  }),
  latex: create_language_async_loader_default('latex', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_latex" */
      '/v99/refractor@3.6.0/es2022/lang/latex.development.js'
    );
  }),
  latte: create_language_async_loader_default('latte', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_latte" */
      '/v99/refractor@3.6.0/es2022/lang/latte.development.js'
    );
  }),
  less: create_language_async_loader_default('less', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_less" */
      '/v99/refractor@3.6.0/es2022/lang/less.development.js'
    );
  }),
  lilypond: create_language_async_loader_default('lilypond', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lilypond" */
      '/v99/refractor@3.6.0/es2022/lang/lilypond.development.js'
    );
  }),
  liquid: create_language_async_loader_default('liquid', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_liquid" */
      '/v99/refractor@3.6.0/es2022/lang/liquid.development.js'
    );
  }),
  lisp: create_language_async_loader_default('lisp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lisp" */
      '/v99/refractor@3.6.0/es2022/lang/lisp.development.js'
    );
  }),
  livescript: create_language_async_loader_default('livescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_livescript" */
      '/v99/refractor@3.6.0/es2022/lang/livescript.development.js'
    );
  }),
  llvm: create_language_async_loader_default('llvm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_llvm" */
      '/v99/refractor@3.6.0/es2022/lang/llvm.development.js'
    );
  }),
  log: create_language_async_loader_default('log', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_log" */
      '/v99/refractor@3.6.0/es2022/lang/log.development.js'
    );
  }),
  lolcode: create_language_async_loader_default('lolcode', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lolcode" */
      '/v99/refractor@3.6.0/es2022/lang/lolcode.development.js'
    );
  }),
  lua: create_language_async_loader_default('lua', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_lua" */
      '/v99/refractor@3.6.0/es2022/lang/lua.development.js'
    );
  }),
  magma: create_language_async_loader_default('magma', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_magma" */
      '/v99/refractor@3.6.0/es2022/lang/magma.development.js'
    );
  }),
  makefile: create_language_async_loader_default('makefile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_makefile" */
      '/v99/refractor@3.6.0/es2022/lang/makefile.development.js'
    );
  }),
  markdown: create_language_async_loader_default('markdown', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markdown" */
      '/v99/refractor@3.6.0/es2022/lang/markdown.development.js'
    );
  }),
  markupTemplating: create_language_async_loader_default('markupTemplating', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markupTemplating" */
      '/v99/refractor@3.6.0/es2022/lang/markup-templating.development.js'
    );
  }),
  markup: create_language_async_loader_default('markup', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_markup" */
      '/v99/refractor@3.6.0/es2022/lang/markup.development.js'
    );
  }),
  matlab: create_language_async_loader_default('matlab', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_matlab" */
      '/v99/refractor@3.6.0/es2022/lang/matlab.development.js'
    );
  }),
  maxscript: create_language_async_loader_default('maxscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_maxscript" */
      '/v99/refractor@3.6.0/es2022/lang/maxscript.development.js'
    );
  }),
  mel: create_language_async_loader_default('mel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mel" */
      '/v99/refractor@3.6.0/es2022/lang/mel.development.js'
    );
  }),
  mermaid: create_language_async_loader_default('mermaid', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mermaid" */
      '/v99/refractor@3.6.0/es2022/lang/mermaid.development.js'
    );
  }),
  mizar: create_language_async_loader_default('mizar', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mizar" */
      '/v99/refractor@3.6.0/es2022/lang/mizar.development.js'
    );
  }),
  mongodb: create_language_async_loader_default('mongodb', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_mongodb" */
      '/v99/refractor@3.6.0/es2022/lang/mongodb.development.js'
    );
  }),
  monkey: create_language_async_loader_default('monkey', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_monkey" */
      '/v99/refractor@3.6.0/es2022/lang/monkey.development.js'
    );
  }),
  moonscript: create_language_async_loader_default('moonscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_moonscript" */
      '/v99/refractor@3.6.0/es2022/lang/moonscript.development.js'
    );
  }),
  n1ql: create_language_async_loader_default('n1ql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_n1ql" */
      '/v99/refractor@3.6.0/es2022/lang/n1ql.development.js'
    );
  }),
  n4js: create_language_async_loader_default('n4js', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_n4js" */
      '/v99/refractor@3.6.0/es2022/lang/n4js.development.js'
    );
  }),
  nand2tetrisHdl: create_language_async_loader_default('nand2tetrisHdl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nand2tetrisHdl" */
      '/v99/refractor@3.6.0/es2022/lang/nand2tetris-hdl.development.js'
    );
  }),
  naniscript: create_language_async_loader_default('naniscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_naniscript" */
      '/v99/refractor@3.6.0/es2022/lang/naniscript.development.js'
    );
  }),
  nasm: create_language_async_loader_default('nasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nasm" */
      '/v99/refractor@3.6.0/es2022/lang/nasm.development.js'
    );
  }),
  neon: create_language_async_loader_default('neon', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_neon" */
      '/v99/refractor@3.6.0/es2022/lang/neon.development.js'
    );
  }),
  nevod: create_language_async_loader_default('nevod', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nevod" */
      '/v99/refractor@3.6.0/es2022/lang/nevod.development.js'
    );
  }),
  nginx: create_language_async_loader_default('nginx', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nginx" */
      '/v99/refractor@3.6.0/es2022/lang/nginx.development.js'
    );
  }),
  nim: create_language_async_loader_default('nim', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nim" */
      '/v99/refractor@3.6.0/es2022/lang/nim.development.js'
    );
  }),
  nix: create_language_async_loader_default('nix', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nix" */
      '/v99/refractor@3.6.0/es2022/lang/nix.development.js'
    );
  }),
  nsis: create_language_async_loader_default('nsis', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_nsis" */
      '/v99/refractor@3.6.0/es2022/lang/nsis.development.js'
    );
  }),
  objectivec: create_language_async_loader_default('objectivec', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_objectivec" */
      '/v99/refractor@3.6.0/es2022/lang/objectivec.development.js'
    );
  }),
  ocaml: create_language_async_loader_default('ocaml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ocaml" */
      '/v99/refractor@3.6.0/es2022/lang/ocaml.development.js'
    );
  }),
  opencl: create_language_async_loader_default('opencl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_opencl" */
      '/v99/refractor@3.6.0/es2022/lang/opencl.development.js'
    );
  }),
  openqasm: create_language_async_loader_default('openqasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_openqasm" */
      '/v99/refractor@3.6.0/es2022/lang/openqasm.development.js'
    );
  }),
  oz: create_language_async_loader_default('oz', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_oz" */
      '/v99/refractor@3.6.0/es2022/lang/oz.development.js'
    );
  }),
  parigp: create_language_async_loader_default('parigp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_parigp" */
      '/v99/refractor@3.6.0/es2022/lang/parigp.development.js'
    );
  }),
  parser: create_language_async_loader_default('parser', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_parser" */
      '/v99/refractor@3.6.0/es2022/lang/parser.development.js'
    );
  }),
  pascal: create_language_async_loader_default('pascal', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pascal" */
      '/v99/refractor@3.6.0/es2022/lang/pascal.development.js'
    );
  }),
  pascaligo: create_language_async_loader_default('pascaligo', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pascaligo" */
      '/v99/refractor@3.6.0/es2022/lang/pascaligo.development.js'
    );
  }),
  pcaxis: create_language_async_loader_default('pcaxis', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pcaxis" */
      '/v99/refractor@3.6.0/es2022/lang/pcaxis.development.js'
    );
  }),
  peoplecode: create_language_async_loader_default('peoplecode', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_peoplecode" */
      '/v99/refractor@3.6.0/es2022/lang/peoplecode.development.js'
    );
  }),
  perl: create_language_async_loader_default('perl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_perl" */
      '/v99/refractor@3.6.0/es2022/lang/perl.development.js'
    );
  }),
  phpExtras: create_language_async_loader_default('phpExtras', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_phpExtras" */
      '/v99/refractor@3.6.0/es2022/lang/php-extras.development.js'
    );
  }),
  php: create_language_async_loader_default('php', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_php" */
      '/v99/refractor@3.6.0/es2022/lang/php.development.js'
    );
  }),
  phpdoc: create_language_async_loader_default('phpdoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_phpdoc" */
      '/v99/refractor@3.6.0/es2022/lang/phpdoc.development.js'
    );
  }),
  plsql: create_language_async_loader_default('plsql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_plsql" */
      '/v99/refractor@3.6.0/es2022/lang/plsql.development.js'
    );
  }),
  powerquery: create_language_async_loader_default('powerquery', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_powerquery" */
      '/v99/refractor@3.6.0/es2022/lang/powerquery.development.js'
    );
  }),
  powershell: create_language_async_loader_default('powershell', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_powershell" */
      '/v99/refractor@3.6.0/es2022/lang/powershell.development.js'
    );
  }),
  processing: create_language_async_loader_default('processing', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_processing" */
      '/v99/refractor@3.6.0/es2022/lang/processing.development.js'
    );
  }),
  prolog: create_language_async_loader_default('prolog', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_prolog" */
      '/v99/refractor@3.6.0/es2022/lang/prolog.development.js'
    );
  }),
  promql: create_language_async_loader_default('promql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_promql" */
      '/v99/refractor@3.6.0/es2022/lang/promql.development.js'
    );
  }),
  properties: create_language_async_loader_default('properties', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_properties" */
      '/v99/refractor@3.6.0/es2022/lang/properties.development.js'
    );
  }),
  protobuf: create_language_async_loader_default('protobuf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_protobuf" */
      '/v99/refractor@3.6.0/es2022/lang/protobuf.development.js'
    );
  }),
  psl: create_language_async_loader_default('psl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_psl" */
      '/v99/refractor@3.6.0/es2022/lang/psl.development.js'
    );
  }),
  pug: create_language_async_loader_default('pug', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pug" */
      '/v99/refractor@3.6.0/es2022/lang/pug.development.js'
    );
  }),
  puppet: create_language_async_loader_default('puppet', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_puppet" */
      '/v99/refractor@3.6.0/es2022/lang/puppet.development.js'
    );
  }),
  pure: create_language_async_loader_default('pure', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_pure" */
      '/v99/refractor@3.6.0/es2022/lang/pure.development.js'
    );
  }),
  purebasic: create_language_async_loader_default('purebasic', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_purebasic" */
      '/v99/refractor@3.6.0/es2022/lang/purebasic.development.js'
    );
  }),
  purescript: create_language_async_loader_default('purescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_purescript" */
      '/v99/refractor@3.6.0/es2022/lang/purescript.development.js'
    );
  }),
  python: create_language_async_loader_default('python', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_python" */
      '/v99/refractor@3.6.0/es2022/lang/python.development.js'
    );
  }),
  q: create_language_async_loader_default('q', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_q" */
      '/v99/refractor@3.6.0/es2022/lang/q.development.js'
    );
  }),
  qml: create_language_async_loader_default('qml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_qml" */
      '/v99/refractor@3.6.0/es2022/lang/qml.development.js'
    );
  }),
  qore: create_language_async_loader_default('qore', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_qore" */
      '/v99/refractor@3.6.0/es2022/lang/qore.development.js'
    );
  }),
  qsharp: create_language_async_loader_default('qsharp', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_qsharp" */
      '/v99/refractor@3.6.0/es2022/lang/qsharp.development.js'
    );
  }),
  r: create_language_async_loader_default('r', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_r" */
      '/v99/refractor@3.6.0/es2022/lang/r.development.js'
    );
  }),
  racket: create_language_async_loader_default('racket', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_racket" */
      '/v99/refractor@3.6.0/es2022/lang/racket.development.js'
    );
  }),
  reason: create_language_async_loader_default('reason', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_reason" */
      '/v99/refractor@3.6.0/es2022/lang/reason.development.js'
    );
  }),
  regex: create_language_async_loader_default('regex', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_regex" */
      '/v99/refractor@3.6.0/es2022/lang/regex.development.js'
    );
  }),
  rego: create_language_async_loader_default('rego', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rego" */
      '/v99/refractor@3.6.0/es2022/lang/rego.development.js'
    );
  }),
  renpy: create_language_async_loader_default('renpy', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_renpy" */
      '/v99/refractor@3.6.0/es2022/lang/renpy.development.js'
    );
  }),
  rest: create_language_async_loader_default('rest', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rest" */
      '/v99/refractor@3.6.0/es2022/lang/rest.development.js'
    );
  }),
  rip: create_language_async_loader_default('rip', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rip" */
      '/v99/refractor@3.6.0/es2022/lang/rip.development.js'
    );
  }),
  roboconf: create_language_async_loader_default('roboconf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_roboconf" */
      '/v99/refractor@3.6.0/es2022/lang/roboconf.development.js'
    );
  }),
  robotframework: create_language_async_loader_default('robotframework', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_robotframework" */
      '/v99/refractor@3.6.0/es2022/lang/robotframework.development.js'
    );
  }),
  ruby: create_language_async_loader_default('ruby', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_ruby" */
      '/v99/refractor@3.6.0/es2022/lang/ruby.development.js'
    );
  }),
  rust: create_language_async_loader_default('rust', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_rust" */
      '/v99/refractor@3.6.0/es2022/lang/rust.development.js'
    );
  }),
  sas: create_language_async_loader_default('sas', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sas" */
      '/v99/refractor@3.6.0/es2022/lang/sas.development.js'
    );
  }),
  sass: create_language_async_loader_default('sass', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sass" */
      '/v99/refractor@3.6.0/es2022/lang/sass.development.js'
    );
  }),
  scala: create_language_async_loader_default('scala', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scala" */
      '/v99/refractor@3.6.0/es2022/lang/scala.development.js'
    );
  }),
  scheme: create_language_async_loader_default('scheme', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scheme" */
      '/v99/refractor@3.6.0/es2022/lang/scheme.development.js'
    );
  }),
  scss: create_language_async_loader_default('scss', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_scss" */
      '/v99/refractor@3.6.0/es2022/lang/scss.development.js'
    );
  }),
  shellSession: create_language_async_loader_default('shellSession', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_shellSession" */
      '/v99/refractor@3.6.0/es2022/lang/shell-session.development.js'
    );
  }),
  smali: create_language_async_loader_default('smali', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_smali" */
      '/v99/refractor@3.6.0/es2022/lang/smali.development.js'
    );
  }),
  smalltalk: create_language_async_loader_default('smalltalk', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_smalltalk" */
      '/v99/refractor@3.6.0/es2022/lang/smalltalk.development.js'
    );
  }),
  smarty: create_language_async_loader_default('smarty', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_smarty" */
      '/v99/refractor@3.6.0/es2022/lang/smarty.development.js'
    );
  }),
  sml: create_language_async_loader_default('sml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sml" */
      '/v99/refractor@3.6.0/es2022/lang/sml.development.js'
    );
  }),
  solidity: create_language_async_loader_default('solidity', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_solidity" */
      '/v99/refractor@3.6.0/es2022/lang/solidity.development.js'
    );
  }),
  solutionFile: create_language_async_loader_default('solutionFile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_solutionFile" */
      '/v99/refractor@3.6.0/es2022/lang/solution-file.development.js'
    );
  }),
  soy: create_language_async_loader_default('soy', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_soy" */
      '/v99/refractor@3.6.0/es2022/lang/soy.development.js'
    );
  }),
  sparql: create_language_async_loader_default('sparql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sparql" */
      '/v99/refractor@3.6.0/es2022/lang/sparql.development.js'
    );
  }),
  splunkSpl: create_language_async_loader_default('splunkSpl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_splunkSpl" */
      '/v99/refractor@3.6.0/es2022/lang/splunk-spl.development.js'
    );
  }),
  sqf: create_language_async_loader_default('sqf', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sqf" */
      '/v99/refractor@3.6.0/es2022/lang/sqf.development.js'
    );
  }),
  sql: create_language_async_loader_default('sql', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_sql" */
      '/v99/refractor@3.6.0/es2022/lang/sql.development.js'
    );
  }),
  squirrel: create_language_async_loader_default('squirrel', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_squirrel" */
      '/v99/refractor@3.6.0/es2022/lang/squirrel.development.js'
    );
  }),
  stan: create_language_async_loader_default('stan', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_stan" */
      '/v99/refractor@3.6.0/es2022/lang/stan.development.js'
    );
  }),
  stylus: create_language_async_loader_default('stylus', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_stylus" */
      '/v99/refractor@3.6.0/es2022/lang/stylus.development.js'
    );
  }),
  swift: create_language_async_loader_default('swift', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_swift" */
      '/v99/refractor@3.6.0/es2022/lang/swift.development.js'
    );
  }),
  systemd: create_language_async_loader_default('systemd', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_systemd" */
      '/v99/refractor@3.6.0/es2022/lang/systemd.development.js'
    );
  }),
  t4Cs: create_language_async_loader_default('t4Cs', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Cs" */
      '/v99/refractor@3.6.0/es2022/lang/t4-cs.development.js'
    );
  }),
  t4Templating: create_language_async_loader_default('t4Templating', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Templating" */
      '/v99/refractor@3.6.0/es2022/lang/t4-templating.development.js'
    );
  }),
  t4Vb: create_language_async_loader_default('t4Vb', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_t4Vb" */
      '/v99/refractor@3.6.0/es2022/lang/t4-vb.development.js'
    );
  }),
  tap: create_language_async_loader_default('tap', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tap" */
      '/v99/refractor@3.6.0/es2022/lang/tap.development.js'
    );
  }),
  tcl: create_language_async_loader_default('tcl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tcl" */
      '/v99/refractor@3.6.0/es2022/lang/tcl.development.js'
    );
  }),
  textile: create_language_async_loader_default('textile', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_textile" */
      '/v99/refractor@3.6.0/es2022/lang/textile.development.js'
    );
  }),
  toml: create_language_async_loader_default('toml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_toml" */
      '/v99/refractor@3.6.0/es2022/lang/toml.development.js'
    );
  }),
  tremor: create_language_async_loader_default('tremor', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tremor" */
      '/v99/refractor@3.6.0/es2022/lang/tremor.development.js'
    );
  }),
  tsx: create_language_async_loader_default('tsx', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tsx" */
      '/v99/refractor@3.6.0/es2022/lang/tsx.development.js'
    );
  }),
  tt2: create_language_async_loader_default('tt2', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_tt2" */
      '/v99/refractor@3.6.0/es2022/lang/tt2.development.js'
    );
  }),
  turtle: create_language_async_loader_default('turtle', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_turtle" */
      '/v99/refractor@3.6.0/es2022/lang/turtle.development.js'
    );
  }),
  twig: create_language_async_loader_default('twig', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_twig" */
      '/v99/refractor@3.6.0/es2022/lang/twig.development.js'
    );
  }),
  typescript: create_language_async_loader_default('typescript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_typescript" */
      '/v99/refractor@3.6.0/es2022/lang/typescript.development.js'
    );
  }),
  typoscript: create_language_async_loader_default('typoscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_typoscript" */
      '/v99/refractor@3.6.0/es2022/lang/typoscript.development.js'
    );
  }),
  unrealscript: create_language_async_loader_default('unrealscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_unrealscript" */
      '/v99/refractor@3.6.0/es2022/lang/unrealscript.development.js'
    );
  }),
  uorazor: create_language_async_loader_default('uorazor', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_uorazor" */
      '/v99/refractor@3.6.0/es2022/lang/uorazor.development.js'
    );
  }),
  uri: create_language_async_loader_default('uri', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_uri" */
      '/v99/refractor@3.6.0/es2022/lang/uri.development.js'
    );
  }),
  v: create_language_async_loader_default('v', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_v" */
      '/v99/refractor@3.6.0/es2022/lang/v.development.js'
    );
  }),
  vala: create_language_async_loader_default('vala', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vala" */
      '/v99/refractor@3.6.0/es2022/lang/vala.development.js'
    );
  }),
  vbnet: create_language_async_loader_default('vbnet', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vbnet" */
      '/v99/refractor@3.6.0/es2022/lang/vbnet.development.js'
    );
  }),
  velocity: create_language_async_loader_default('velocity', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_velocity" */
      '/v99/refractor@3.6.0/es2022/lang/velocity.development.js'
    );
  }),
  verilog: create_language_async_loader_default('verilog', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_verilog" */
      '/v99/refractor@3.6.0/es2022/lang/verilog.development.js'
    );
  }),
  vhdl: create_language_async_loader_default('vhdl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vhdl" */
      '/v99/refractor@3.6.0/es2022/lang/vhdl.development.js'
    );
  }),
  vim: create_language_async_loader_default('vim', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_vim" */
      '/v99/refractor@3.6.0/es2022/lang/vim.development.js'
    );
  }),
  visualBasic: create_language_async_loader_default('visualBasic', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_visualBasic" */
      '/v99/refractor@3.6.0/es2022/lang/visual-basic.development.js'
    );
  }),
  warpscript: create_language_async_loader_default('warpscript', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_warpscript" */
      '/v99/refractor@3.6.0/es2022/lang/warpscript.development.js'
    );
  }),
  wasm: create_language_async_loader_default('wasm', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wasm" */
      '/v99/refractor@3.6.0/es2022/lang/wasm.development.js'
    );
  }),
  webIdl: create_language_async_loader_default('webIdl', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_webIdl" */
      '/v99/refractor@3.6.0/es2022/lang/web-idl.development.js'
    );
  }),
  wiki: create_language_async_loader_default('wiki', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wiki" */
      '/v99/refractor@3.6.0/es2022/lang/wiki.development.js'
    );
  }),
  wolfram: create_language_async_loader_default('wolfram', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wolfram" */
      '/v99/refractor@3.6.0/es2022/lang/wolfram.development.js'
    );
  }),
  wren: create_language_async_loader_default('wren', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_wren" */
      '/v99/refractor@3.6.0/es2022/lang/wren.development.js'
    );
  }),
  xeora: create_language_async_loader_default('xeora', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xeora" */
      '/v99/refractor@3.6.0/es2022/lang/xeora.development.js'
    );
  }),
  xmlDoc: create_language_async_loader_default('xmlDoc', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xmlDoc" */
      '/v99/refractor@3.6.0/es2022/lang/xml-doc.development.js'
    );
  }),
  xojo: create_language_async_loader_default('xojo', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xojo" */
      '/v99/refractor@3.6.0/es2022/lang/xojo.development.js'
    );
  }),
  xquery: create_language_async_loader_default('xquery', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_xquery" */
      '/v99/refractor@3.6.0/es2022/lang/xquery.development.js'
    );
  }),
  yaml: create_language_async_loader_default('yaml', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_yaml" */
      '/v99/refractor@3.6.0/es2022/lang/yaml.development.js'
    );
  }),
  yang: create_language_async_loader_default('yang', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_yang" */
      '/v99/refractor@3.6.0/es2022/lang/yang.development.js'
    );
  }),
  zig: create_language_async_loader_default('zig', function() {
    return import(
      /* webpackChunkName: "react-syntax-highlighter_languages_refractor_zig" */
      '/v99/refractor@3.6.0/es2022/lang/zig.development.js'
    );
  })
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/prism-async-light.js
var prism_async_light_default = async_syntax_highlighter_default({
  loader: function loader2() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-core-import" */
      '/v99/refractor@3.6.0/es2022/core.development.js'
    ).then(function(module) {
      return module['default'] || module;
    });
  },
  isLanguageRegistered: function isLanguageRegistered2(instance, language) {
    return instance.registered(language);
  },
  languageLoaders: prism_default,
  registerLanguage: function registerLanguage2(instance, name, language) {
    return instance.register(language);
  }
});

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/languages/prism/supported-languages.js
var supported_languages_default2 = [
  'abap',
  'abnf',
  'actionscript',
  'ada',
  'agda',
  'al',
  'antlr4',
  'apacheconf',
  'apex',
  'apl',
  'applescript',
  'aql',
  'arduino',
  'arff',
  'asciidoc',
  'asm6502',
  'asmatmel',
  'aspnet',
  'autohotkey',
  'autoit',
  'avisynth',
  'avro-idl',
  'bash',
  'basic',
  'batch',
  'bbcode',
  'bicep',
  'birb',
  'bison',
  'bnf',
  'brainfuck',
  'brightscript',
  'bro',
  'bsl',
  'c',
  'cfscript',
  'chaiscript',
  'cil',
  'clike',
  'clojure',
  'cmake',
  'cobol',
  'coffeescript',
  'concurnas',
  'coq',
  'cpp',
  'crystal',
  'csharp',
  'cshtml',
  'csp',
  'css-extras',
  'css',
  'csv',
  'cypher',
  'd',
  'dart',
  'dataweave',
  'dax',
  'dhall',
  'diff',
  'django',
  'dns-zone-file',
  'docker',
  'dot',
  'ebnf',
  'editorconfig',
  'eiffel',
  'ejs',
  'elixir',
  'elm',
  'erb',
  'erlang',
  'etlua',
  'excel-formula',
  'factor',
  'false',
  'firestore-security-rules',
  'flow',
  'fortran',
  'fsharp',
  'ftl',
  'gap',
  'gcode',
  'gdscript',
  'gedcom',
  'gherkin',
  'git',
  'glsl',
  'gml',
  'gn',
  'go-module',
  'go',
  'graphql',
  'groovy',
  'haml',
  'handlebars',
  'haskell',
  'haxe',
  'hcl',
  'hlsl',
  'hoon',
  'hpkp',
  'hsts',
  'http',
  'ichigojam',
  'icon',
  'icu-message-format',
  'idris',
  'iecst',
  'ignore',
  'inform7',
  'ini',
  'io',
  'j',
  'java',
  'javadoc',
  'javadoclike',
  'javascript',
  'javastacktrace',
  'jexl',
  'jolie',
  'jq',
  'js-extras',
  'js-templates',
  'jsdoc',
  'json',
  'json5',
  'jsonp',
  'jsstacktrace',
  'jsx',
  'julia',
  'keepalived',
  'keyman',
  'kotlin',
  'kumir',
  'kusto',
  'latex',
  'latte',
  'less',
  'lilypond',
  'liquid',
  'lisp',
  'livescript',
  'llvm',
  'log',
  'lolcode',
  'lua',
  'magma',
  'makefile',
  'markdown',
  'markup-templating',
  'markup',
  'matlab',
  'maxscript',
  'mel',
  'mermaid',
  'mizar',
  'mongodb',
  'monkey',
  'moonscript',
  'n1ql',
  'n4js',
  'nand2tetris-hdl',
  'naniscript',
  'nasm',
  'neon',
  'nevod',
  'nginx',
  'nim',
  'nix',
  'nsis',
  'objectivec',
  'ocaml',
  'opencl',
  'openqasm',
  'oz',
  'parigp',
  'parser',
  'pascal',
  'pascaligo',
  'pcaxis',
  'peoplecode',
  'perl',
  'php-extras',
  'php',
  'phpdoc',
  'plsql',
  'powerquery',
  'powershell',
  'processing',
  'prolog',
  'promql',
  'properties',
  'protobuf',
  'psl',
  'pug',
  'puppet',
  'pure',
  'purebasic',
  'purescript',
  'python',
  'q',
  'qml',
  'qore',
  'qsharp',
  'r',
  'racket',
  'reason',
  'regex',
  'rego',
  'renpy',
  'rest',
  'rip',
  'roboconf',
  'robotframework',
  'ruby',
  'rust',
  'sas',
  'sass',
  'scala',
  'scheme',
  'scss',
  'shell-session',
  'smali',
  'smalltalk',
  'smarty',
  'sml',
  'solidity',
  'solution-file',
  'soy',
  'sparql',
  'splunk-spl',
  'sqf',
  'sql',
  'squirrel',
  'stan',
  'stylus',
  'swift',
  'systemd',
  't4-cs',
  't4-templating',
  't4-vb',
  'tap',
  'tcl',
  'textile',
  'toml',
  'tremor',
  'tsx',
  'tt2',
  'turtle',
  'twig',
  'typescript',
  'typoscript',
  'unrealscript',
  'uorazor',
  'uri',
  'v',
  'vala',
  'vbnet',
  'velocity',
  'verilog',
  'vhdl',
  'vim',
  'visual-basic',
  'warpscript',
  'wasm',
  'web-idl',
  'wiki',
  'wolfram',
  'wren',
  'xeora',
  'xml-doc',
  'xojo',
  'xquery',
  'yaml',
  'yang',
  'zig'
];

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/prism-async.js
var prism_async_default = async_syntax_highlighter_default({
  loader: function loader3() {
    return import(
      /* webpackChunkName:"react-syntax-highlighter/refractor-import" */
      '/v99/refractor@3.6.0/es2022/refractor.development.js'
    ).then(function(module) {
      return module['default'] || module;
    });
  },
  noAsyncLoadingLanguages: true,
  supportedLanguages: supported_languages_default2
});

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/prism-light.js
import refractor from '/cdn/v99/refractor@3.6.0/es2022/core.development.js';
var SyntaxHighlighter2 = highlight_default(refractor, {});
SyntaxHighlighter2.registerLanguage = function(_, language) {
  return refractor.register(language);
};
SyntaxHighlighter2.alias = function(name, aliases) {
  return refractor.alias(name, aliases);
};
var prism_light_default = SyntaxHighlighter2;

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/styles/prism/prism.js
var prism_default2 = {
  'code[class*="language-"]': {
    color: 'black',
    background: 'none',
    textShadow: '0 1px white',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none'
  },
  'pre[class*="language-"]': {
    color: 'black',
    background: '#f5f2f0',
    textShadow: '0 1px white',
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: '1em',
    textAlign: 'left',
    whiteSpace: 'pre',
    wordSpacing: 'normal',
    wordBreak: 'normal',
    wordWrap: 'normal',
    lineHeight: '1.5',
    MozTabSize: '4',
    OTabSize: '4',
    tabSize: '4',
    WebkitHyphens: 'none',
    MozHyphens: 'none',
    msHyphens: 'none',
    hyphens: 'none',
    padding: '1em',
    margin: '.5em 0',
    overflow: 'auto'
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'pre[class*="language-"]::selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'pre[class*="language-"] ::selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'code[class*="language-"]::selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  'code[class*="language-"] ::selection': {
    textShadow: 'none',
    background: '#b3d4fc'
  },
  ':not(pre) > code[class*="language-"]': {
    background: '#f5f2f0',
    padding: '.1em',
    borderRadius: '.3em',
    whiteSpace: 'normal'
  },
  comment: {
    color: 'slategray'
  },
  prolog: {
    color: 'slategray'
  },
  doctype: {
    color: 'slategray'
  },
  cdata: {
    color: 'slategray'
  },
  punctuation: {
    color: '#999'
  },
  namespace: {
    Opacity: '.7'
  },
  property: {
    color: '#905'
  },
  tag: {
    color: '#905'
  },
  boolean: {
    color: '#905'
  },
  number: {
    color: '#905'
  },
  constant: {
    color: '#905'
  },
  symbol: {
    color: '#905'
  },
  deleted: {
    color: '#905'
  },
  selector: {
    color: '#690'
  },
  'attr-name': {
    color: '#690'
  },
  string: {
    color: '#690'
  },
  char: {
    color: '#690'
  },
  builtin: {
    color: '#690'
  },
  inserted: {
    color: '#690'
  },
  operator: {
    color: '#9a6e3a',
    background: 'hsla(0, 0%, 100%, .5)'
  },
  entity: {
    color: '#9a6e3a',
    background: 'hsla(0, 0%, 100%, .5)',
    cursor: 'help'
  },
  url: {
    color: '#9a6e3a',
    background: 'hsla(0, 0%, 100%, .5)'
  },
  '.language-css .token.string': {
    color: '#9a6e3a',
    background: 'hsla(0, 0%, 100%, .5)'
  },
  '.style .token.string': {
    color: '#9a6e3a',
    background: 'hsla(0, 0%, 100%, .5)'
  },
  atrule: {
    color: '#07a'
  },
  'attr-value': {
    color: '#07a'
  },
  keyword: {
    color: '#07a'
  },
  function: {
    color: '#DD4A68'
  },
  'class-name': {
    color: '#DD4A68'
  },
  regex: {
    color: '#e90'
  },
  important: {
    color: '#e90',
    fontWeight: 'bold'
  },
  variable: {
    color: '#e90'
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic'
  }
};

// esm-build-a33988b96bfd5ceff683f7c05be64717b5b1ad70-d247bea3/node_modules/react-syntax-highlighter/dist/esm/prism.js
import refractor2 from '/cdn/v99/refractor@3.6.0/es2022/refractor.development.js';
var highlighter2 = highlight_default(refractor2, prism_default2);
highlighter2.supportedLanguages = supported_languages_default2;
var prism_default3 = highlighter2;
export {
  light_default as Light,
  light_async_default as LightAsync,
  prism_default3 as Prism,
  prism_async_default as PrismAsync,
  prism_async_light_default as PrismAsyncLight,
  prism_light_default as PrismLight,
  createElement,
  default_highlight_default as default
};
