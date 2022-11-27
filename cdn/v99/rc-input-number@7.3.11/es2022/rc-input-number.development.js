/* esm.sh - esbuild bundle(rc-input-number@7.3.11) es2022 development */
// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/InputNumber.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import { useLayoutUpdateEffect } from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useLayoutEffect.development.js';
import { composeRef } from '/cdn/v99/rc-util@5.24.6/es2022/es/ref.development.js';

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/utils/MiniDecimal.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/utils/supportUtil.js
function supportBigInt() {
  return typeof BigInt === 'function';
}

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/utils/numberUtil.js
function trimNumber(numStr) {
  var str = numStr.trim();
  var negative = str.startsWith('-');
  if (negative) {
    str = str.slice(1);
  }
  str = str
    .replace(/(\.\d*[^0])0*$/, '$1')
    .replace(/\.0*$/, '')
    .replace(/^0+/, '');
  if (str.startsWith('.')) {
    str = '0'.concat(str);
  }
  var trimStr = str || '0';
  var splitNumber = trimStr.split('.');
  var integerStr = splitNumber[0] || '0';
  var decimalStr = splitNumber[1] || '0';
  if (integerStr === '0' && decimalStr === '0') {
    negative = false;
  }
  var negativeStr = negative ? '-' : '';
  return {
    negative,
    negativeStr,
    trimStr,
    integerStr,
    decimalStr,
    fullStr: ''.concat(negativeStr).concat(trimStr)
  };
}
function isE(number) {
  var str = String(number);
  return !Number.isNaN(Number(str)) && str.includes('e');
}
function getNumberPrecision(number) {
  var numStr = String(number);
  if (isE(number)) {
    var precision = Number(numStr.slice(numStr.indexOf('e-') + 2));
    var decimalMatch = numStr.match(/\.(\d+)/);
    if (decimalMatch === null || decimalMatch === void 0 ? void 0 : decimalMatch[1]) {
      precision += decimalMatch[1].length;
    }
    return precision;
  }
  return numStr.includes('.') && validateNumber(numStr) ? numStr.length - numStr.indexOf('.') - 1 : 0;
}
function num2str(number) {
  var numStr = String(number);
  if (isE(number)) {
    if (number > Number.MAX_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MAX_SAFE_INTEGER);
    }
    if (number < Number.MIN_SAFE_INTEGER) {
      return String(supportBigInt() ? BigInt(number).toString() : Number.MIN_SAFE_INTEGER);
    }
    numStr = number.toFixed(getNumberPrecision(numStr));
  }
  return trimNumber(numStr).fullStr;
}
function validateNumber(num) {
  if (typeof num === 'number') {
    return !Number.isNaN(num);
  }
  if (!num) {
    return false;
  }
  return /^\s*-?\d+(\.\d+)?\s*$/.test(num) || /^\s*-?\d+\.\s*$/.test(num) || /^\s*-?\.\d+\s*$/.test(num);
}
function getDecupleSteps(step) {
  var stepStr = typeof step === 'number' ? num2str(step) : trimNumber(step).fullStr;
  var hasPoint = stepStr.includes('.');
  if (!hasPoint) {
    return step + '0';
  }
  return trimNumber(stepStr.replace(/(\d)\.(\d)/g, '$1$2.')).fullStr;
}

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/utils/MiniDecimal.js
var NumberDecimal = /* @__PURE__ */ (function() {
  function NumberDecimal2(value) {
    _classCallCheck(this, NumberDecimal2);
    this.origin = '';
    this.number = void 0;
    this.empty = void 0;
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    this.number = Number(value);
  }
  _createClass(NumberDecimal2, [
    {
      key: 'negate',
      value: function negate() {
        return new NumberDecimal2(-this.toNumber());
      }
    },
    {
      key: 'add',
      value: function add(value) {
        if (this.isInvalidate()) {
          return new NumberDecimal2(value);
        }
        var target = Number(value);
        if (Number.isNaN(target)) {
          return this;
        }
        var number = this.number + target;
        if (number > Number.MAX_SAFE_INTEGER) {
          return new NumberDecimal2(Number.MAX_SAFE_INTEGER);
        }
        if (number < Number.MIN_SAFE_INTEGER) {
          return new NumberDecimal2(Number.MIN_SAFE_INTEGER);
        }
        var maxPrecision = Math.max(getNumberPrecision(this.number), getNumberPrecision(target));
        return new NumberDecimal2(number.toFixed(maxPrecision));
      }
    },
    {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.empty;
      }
    },
    {
      key: 'isNaN',
      value: function isNaN() {
        return Number.isNaN(this.number);
      }
    },
    {
      key: 'isInvalidate',
      value: function isInvalidate() {
        return this.isEmpty() || this.isNaN();
      }
    },
    {
      key: 'equals',
      value: function equals(target) {
        return this.toNumber() === (target === null || target === void 0 ? void 0 : target.toNumber());
      }
    },
    {
      key: 'lessEquals',
      value: function lessEquals(target) {
        return this.add(target.negate().toString()).toNumber() <= 0;
      }
    },
    {
      key: 'toNumber',
      value: function toNumber() {
        return this.number;
      }
    },
    {
      key: 'toString',
      value: function toString() {
        var safe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (!safe) {
          return this.origin;
        }
        if (this.isInvalidate()) {
          return '';
        }
        return num2str(this.number);
      }
    }
  ]);
  return NumberDecimal2;
})();
var BigIntDecimal = /* @__PURE__ */ (function() {
  function BigIntDecimal2(value) {
    _classCallCheck(this, BigIntDecimal2);
    this.origin = '';
    this.negative = void 0;
    this.integer = void 0;
    this.decimal = void 0;
    this.decimalLen = void 0;
    this.empty = void 0;
    this.nan = void 0;
    if ((!value && value !== 0) || !String(value).trim()) {
      this.empty = true;
      return;
    }
    this.origin = String(value);
    if (value === '-') {
      this.nan = true;
      return;
    }
    var mergedValue = value;
    if (isE(mergedValue)) {
      mergedValue = Number(mergedValue);
    }
    mergedValue = typeof mergedValue === 'string' ? mergedValue : num2str(mergedValue);
    if (validateNumber(mergedValue)) {
      var trimRet = trimNumber(mergedValue);
      this.negative = trimRet.negative;
      var numbers = trimRet.trimStr.split('.');
      this.integer = BigInt(numbers[0]);
      var decimalStr = numbers[1] || '0';
      this.decimal = BigInt(decimalStr);
      this.decimalLen = decimalStr.length;
    } else {
      this.nan = true;
    }
  }
  _createClass(BigIntDecimal2, [
    {
      key: 'getMark',
      value: function getMark() {
        return this.negative ? '-' : '';
      }
    },
    {
      key: 'getIntegerStr',
      value: function getIntegerStr() {
        return this.integer.toString();
      }
    },
    {
      key: 'getDecimalStr',
      value: function getDecimalStr() {
        return this.decimal.toString().padStart(this.decimalLen, '0');
      }
    },
    {
      key: 'alignDecimal',
      value: function alignDecimal(decimalLength) {
        var str = ''
          .concat(this.getMark())
          .concat(this.getIntegerStr())
          .concat(this.getDecimalStr().padEnd(decimalLength, '0'));
        return BigInt(str);
      }
    },
    {
      key: 'negate',
      value: function negate() {
        var clone = new BigIntDecimal2(this.toString());
        clone.negative = !clone.negative;
        return clone;
      }
    },
    {
      key: 'add',
      value: function add(value) {
        if (this.isInvalidate()) {
          return new BigIntDecimal2(value);
        }
        var offset = new BigIntDecimal2(value);
        if (offset.isInvalidate()) {
          return this;
        }
        var maxDecimalLength = Math.max(this.getDecimalStr().length, offset.getDecimalStr().length);
        var myAlignedDecimal = this.alignDecimal(maxDecimalLength);
        var offsetAlignedDecimal = offset.alignDecimal(maxDecimalLength);
        var valueStr = (myAlignedDecimal + offsetAlignedDecimal).toString();
        var _trimNumber = trimNumber(valueStr),
          negativeStr = _trimNumber.negativeStr,
          trimStr = _trimNumber.trimStr;
        var hydrateValueStr = ''.concat(negativeStr).concat(trimStr.padStart(maxDecimalLength + 1, '0'));
        return new BigIntDecimal2(
          ''.concat(hydrateValueStr.slice(0, -maxDecimalLength), '.').concat(hydrateValueStr.slice(-maxDecimalLength))
        );
      }
    },
    {
      key: 'isEmpty',
      value: function isEmpty() {
        return this.empty;
      }
    },
    {
      key: 'isNaN',
      value: function isNaN() {
        return this.nan;
      }
    },
    {
      key: 'isInvalidate',
      value: function isInvalidate() {
        return this.isEmpty() || this.isNaN();
      }
    },
    {
      key: 'equals',
      value: function equals(target) {
        return this.toString() === (target === null || target === void 0 ? void 0 : target.toString());
      }
    },
    {
      key: 'lessEquals',
      value: function lessEquals(target) {
        return this.add(target.negate().toString()).toNumber() <= 0;
      }
    },
    {
      key: 'toNumber',
      value: function toNumber() {
        if (this.isNaN()) {
          return NaN;
        }
        return Number(this.toString());
      }
    },
    {
      key: 'toString',
      value: function toString() {
        var safe = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
        if (!safe) {
          return this.origin;
        }
        if (this.isInvalidate()) {
          return '';
        }
        return trimNumber(
          ''
            .concat(this.getMark())
            .concat(this.getIntegerStr(), '.')
            .concat(this.getDecimalStr())
        ).fullStr;
      }
    }
  ]);
  return BigIntDecimal2;
})();
function getMiniDecimal(value) {
  if (supportBigInt()) {
    return new BigIntDecimal(value);
  }
  return new NumberDecimal(value);
}
function toFixed(numStr, separatorStr, precision) {
  var cutOnly = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  if (numStr === '') {
    return '';
  }
  var _trimNumber2 = trimNumber(numStr),
    negativeStr = _trimNumber2.negativeStr,
    integerStr = _trimNumber2.integerStr,
    decimalStr = _trimNumber2.decimalStr;
  var precisionDecimalStr = ''.concat(separatorStr).concat(decimalStr);
  var numberWithoutDecimal = ''.concat(negativeStr).concat(integerStr);
  if (precision >= 0) {
    var advancedNum = Number(decimalStr[precision]);
    if (advancedNum >= 5 && !cutOnly) {
      var advancedDecimal = getMiniDecimal(numStr).add(
        ''
          .concat(negativeStr, '0.')
          .concat('0'.repeat(precision))
          .concat(10 - advancedNum)
      );
      return toFixed(advancedDecimal.toString(), separatorStr, precision, cutOnly);
    }
    if (precision === 0) {
      return numberWithoutDecimal;
    }
    return ''
      .concat(numberWithoutDecimal)
      .concat(separatorStr)
      .concat(decimalStr.padEnd(precision, '0').slice(0, precision));
  }
  if (precisionDecimalStr === '.0') {
    return numberWithoutDecimal;
  }
  return ''.concat(numberWithoutDecimal).concat(precisionDecimalStr);
}

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/StepHandler.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import isMobile from '/cdn/v99/rc-util@5.24.6/es2022/es/isMobile.development.js';
var STEP_INTERVAL = 200;
var STEP_DELAY = 600;
function StepHandler(_ref) {
  var prefixCls = _ref.prefixCls,
    upNode = _ref.upNode,
    downNode = _ref.downNode,
    upDisabled = _ref.upDisabled,
    downDisabled = _ref.downDisabled,
    onStep = _ref.onStep;
  var stepTimeoutRef = React.useRef();
  var onStepRef = React.useRef();
  onStepRef.current = onStep;
  var onStepMouseDown = function onStepMouseDown2(e, up) {
    e.preventDefault();
    onStepRef.current(up);
    function loopStep() {
      onStepRef.current(up);
      stepTimeoutRef.current = setTimeout(loopStep, STEP_INTERVAL);
    }
    stepTimeoutRef.current = setTimeout(loopStep, STEP_DELAY);
  };
  var onStopStep = function onStopStep2() {
    clearTimeout(stepTimeoutRef.current);
  };
  React.useEffect(function() {
    return onStopStep;
  }, []);
  if (isMobile()) {
    return null;
  }
  var handlerClassName = ''.concat(prefixCls, '-handler');
  var upClassName = classNames(
    handlerClassName,
    ''.concat(handlerClassName, '-up'),
    _defineProperty({}, ''.concat(handlerClassName, '-up-disabled'), upDisabled)
  );
  var downClassName = classNames(
    handlerClassName,
    ''.concat(handlerClassName, '-down'),
    _defineProperty({}, ''.concat(handlerClassName, '-down-disabled'), downDisabled)
  );
  var sharedHandlerProps = {
    unselectable: 'on',
    role: 'button',
    onMouseUp: onStopStep,
    onMouseLeave: onStopStep
  };
  return /* @__PURE__ */ React.createElement(
    'div',
    {
      className: ''.concat(handlerClassName, '-wrap')
    },
    /* @__PURE__ */ React.createElement(
      'span',
      _extends({}, sharedHandlerProps, {
        onMouseDown: function onMouseDown(e) {
          onStepMouseDown(e, true);
        },
        'aria-label': 'Increase Value',
        'aria-disabled': upDisabled,
        className: upClassName
      }),
      upNode ||
        /* @__PURE__ */ React.createElement('span', {
          unselectable: 'on',
          className: ''.concat(prefixCls, '-handler-up-inner')
        })
    ),
    /* @__PURE__ */ React.createElement(
      'span',
      _extends({}, sharedHandlerProps, {
        onMouseDown: function onMouseDown(e) {
          onStepMouseDown(e, false);
        },
        'aria-label': 'Decrease Value',
        'aria-disabled': downDisabled,
        className: downClassName
      }),
      downNode ||
        /* @__PURE__ */ React.createElement('span', {
          unselectable: 'on',
          className: ''.concat(prefixCls, '-handler-down-inner')
        })
    )
  );
}

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/hooks/useCursor.js
import { useRef as useRef2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function useCursor(input, focused) {
  var selectionRef = useRef2(null);
  function recordCursor() {
    try {
      var start = input.selectionStart,
        end = input.selectionEnd,
        value = input.value;
      var beforeTxt = value.substring(0, start);
      var afterTxt = value.substring(end);
      selectionRef.current = {
        start,
        end,
        value,
        beforeTxt,
        afterTxt
      };
    } catch (e) {}
  }
  function restoreCursor() {
    if (input && selectionRef.current && focused) {
      try {
        var value = input.value;
        var _selectionRef$current = selectionRef.current,
          beforeTxt = _selectionRef$current.beforeTxt,
          afterTxt = _selectionRef$current.afterTxt,
          start = _selectionRef$current.start;
        var startPos = value.length;
        if (value.endsWith(afterTxt)) {
          startPos = value.length - selectionRef.current.afterTxt.length;
        } else if (value.startsWith(beforeTxt)) {
          startPos = beforeTxt.length;
        } else {
          var beforeLastChar = beforeTxt[start - 1];
          var newIndex = value.indexOf(beforeLastChar, start - 1);
          if (newIndex !== -1) {
            startPos = newIndex + 1;
          }
        }
        input.setSelectionRange(startPos, startPos);
      } catch (e) {
        warning(false, 'Something warning of cursor restore. Please fire issue about this: '.concat(e.message));
      }
    }
  }
  return [recordCursor, restoreCursor];
}

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/hooks/useFrame.js
import { useRef as useRef3, useEffect as useEffect2 } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
var useFrame_default = function() {
  var idRef = useRef3(0);
  var cleanUp = function cleanUp2() {
    raf.cancel(idRef.current);
  };
  useEffect2(function() {
    return cleanUp;
  }, []);
  return function(callback) {
    cleanUp();
    idRef.current = raf(function() {
      callback();
    });
  };
};

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/InputNumber.js
var _excluded = [
  'prefixCls',
  'className',
  'style',
  'min',
  'max',
  'step',
  'defaultValue',
  'value',
  'disabled',
  'readOnly',
  'upHandler',
  'downHandler',
  'keyboard',
  'controls',
  'stringMode',
  'parser',
  'formatter',
  'precision',
  'decimalSeparator',
  'onChange',
  'onInput',
  'onPressEnter',
  'onStep'
];
var getDecimalValue = function getDecimalValue2(stringMode, decimalValue) {
  if (stringMode || decimalValue.isEmpty()) {
    return decimalValue.toString();
  }
  return decimalValue.toNumber();
};
var getDecimalIfValidate = function getDecimalIfValidate2(value) {
  var decimal = getMiniDecimal(value);
  return decimal.isInvalidate() ? null : decimal;
};
var InputNumber = /* @__PURE__ */ React2.forwardRef(function(props, ref) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-input-number' : _props$prefixCls,
    className = props.className,
    style = props.style,
    min = props.min,
    max = props.max,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    defaultValue = props.defaultValue,
    value = props.value,
    disabled = props.disabled,
    readOnly = props.readOnly,
    upHandler = props.upHandler,
    downHandler = props.downHandler,
    keyboard = props.keyboard,
    _props$controls = props.controls,
    controls = _props$controls === void 0 ? true : _props$controls,
    stringMode = props.stringMode,
    parser = props.parser,
    formatter = props.formatter,
    precision = props.precision,
    decimalSeparator = props.decimalSeparator,
    onChange = props.onChange,
    onInput = props.onInput,
    onPressEnter = props.onPressEnter,
    onStep = props.onStep,
    inputProps = _objectWithoutProperties(props, _excluded);
  var inputClassName = ''.concat(prefixCls, '-input');
  var inputRef = React2.useRef(null);
  var _React$useState = React2.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    focus = _React$useState2[0],
    setFocus = _React$useState2[1];
  var userTypingRef = React2.useRef(false);
  var compositionRef = React2.useRef(false);
  var shiftKeyRef = React2.useRef(false);
  var _React$useState3 = React2.useState(function() {
      return getMiniDecimal(value !== null && value !== void 0 ? value : defaultValue);
    }),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    decimalValue = _React$useState4[0],
    setDecimalValue = _React$useState4[1];
  function setUncontrolledDecimalValue(newDecimal) {
    if (value === void 0) {
      setDecimalValue(newDecimal);
    }
  }
  var getPrecision = React2.useCallback(
    function(numStr, userTyping) {
      if (userTyping) {
        return void 0;
      }
      if (precision >= 0) {
        return precision;
      }
      return Math.max(getNumberPrecision(numStr), getNumberPrecision(step));
    },
    [precision, step]
  );
  var mergedParser = React2.useCallback(
    function(num) {
      var numStr = String(num);
      if (parser) {
        return parser(numStr);
      }
      var parsedStr = numStr;
      if (decimalSeparator) {
        parsedStr = parsedStr.replace(decimalSeparator, '.');
      }
      return parsedStr.replace(/[^\w.-]+/g, '');
    },
    [parser, decimalSeparator]
  );
  var inputValueRef = React2.useRef('');
  var mergedFormatter = React2.useCallback(
    function(number, userTyping) {
      if (formatter) {
        return formatter(number, {
          userTyping,
          input: String(inputValueRef.current)
        });
      }
      var str = typeof number === 'number' ? num2str(number) : number;
      if (!userTyping) {
        var mergedPrecision = getPrecision(str, userTyping);
        if (validateNumber(str) && (decimalSeparator || mergedPrecision >= 0)) {
          var separatorStr = decimalSeparator || '.';
          str = toFixed(str, separatorStr, mergedPrecision);
        }
      }
      return str;
    },
    [formatter, getPrecision, decimalSeparator]
  );
  var _React$useState5 = React2.useState(function() {
      var initValue = defaultValue !== null && defaultValue !== void 0 ? defaultValue : value;
      if (decimalValue.isInvalidate() && ['string', 'number'].includes(_typeof(initValue))) {
        return Number.isNaN(initValue) ? '' : initValue;
      }
      return mergedFormatter(decimalValue.toString(), false);
    }),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    inputValue = _React$useState6[0],
    setInternalInputValue = _React$useState6[1];
  inputValueRef.current = inputValue;
  function setInputValue(newValue, userTyping) {
    setInternalInputValue(
      mergedFormatter(newValue.isInvalidate() ? newValue.toString(false) : newValue.toString(!userTyping), userTyping)
    );
  }
  var maxDecimal = React2.useMemo(
    function() {
      return getDecimalIfValidate(max);
    },
    [max, precision]
  );
  var minDecimal = React2.useMemo(
    function() {
      return getDecimalIfValidate(min);
    },
    [min, precision]
  );
  var upDisabled = React2.useMemo(
    function() {
      if (!maxDecimal || !decimalValue || decimalValue.isInvalidate()) {
        return false;
      }
      return maxDecimal.lessEquals(decimalValue);
    },
    [maxDecimal, decimalValue]
  );
  var downDisabled = React2.useMemo(
    function() {
      if (!minDecimal || !decimalValue || decimalValue.isInvalidate()) {
        return false;
      }
      return decimalValue.lessEquals(minDecimal);
    },
    [minDecimal, decimalValue]
  );
  var _useCursor = useCursor(inputRef.current, focus),
    _useCursor2 = _slicedToArray(_useCursor, 2),
    recordCursor = _useCursor2[0],
    restoreCursor = _useCursor2[1];
  var getRangeValue = function getRangeValue2(target) {
    if (maxDecimal && !target.lessEquals(maxDecimal)) {
      return maxDecimal;
    }
    if (minDecimal && !minDecimal.lessEquals(target)) {
      return minDecimal;
    }
    return null;
  };
  var isInRange = function isInRange2(target) {
    return !getRangeValue(target);
  };
  var triggerValueUpdate = function triggerValueUpdate2(newValue, userTyping) {
    var updateValue = newValue;
    var isRangeValidate = isInRange(updateValue) || updateValue.isEmpty();
    if (!updateValue.isEmpty() && !userTyping) {
      updateValue = getRangeValue(updateValue) || updateValue;
      isRangeValidate = true;
    }
    if (!readOnly && !disabled && isRangeValidate) {
      var numStr = updateValue.toString();
      var mergedPrecision = getPrecision(numStr, userTyping);
      if (mergedPrecision >= 0) {
        updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision));
        if (!isInRange(updateValue)) {
          updateValue = getMiniDecimal(toFixed(numStr, '.', mergedPrecision, true));
        }
      }
      if (!updateValue.equals(decimalValue)) {
        setUncontrolledDecimalValue(updateValue);
        onChange === null || onChange === void 0
          ? void 0
          : onChange(updateValue.isEmpty() ? null : getDecimalValue(stringMode, updateValue));
        if (value === void 0) {
          setInputValue(updateValue, userTyping);
        }
      }
      return updateValue;
    }
    return decimalValue;
  };
  var onNextPromise = useFrame_default();
  var collectInputValue = function collectInputValue2(inputStr) {
    recordCursor();
    setInternalInputValue(inputStr);
    if (!compositionRef.current) {
      var finalValue = mergedParser(inputStr);
      var finalDecimal = getMiniDecimal(finalValue);
      if (!finalDecimal.isNaN()) {
        triggerValueUpdate(finalDecimal, true);
      }
    }
    onInput === null || onInput === void 0 ? void 0 : onInput(inputStr);
    onNextPromise(function() {
      var nextInputStr = inputStr;
      if (!parser) {
        nextInputStr = inputStr.replace(/。/g, '.');
      }
      if (nextInputStr !== inputStr) {
        collectInputValue2(nextInputStr);
      }
    });
  };
  var onCompositionStart = function onCompositionStart2() {
    compositionRef.current = true;
  };
  var onCompositionEnd = function onCompositionEnd2() {
    compositionRef.current = false;
    collectInputValue(inputRef.current.value);
  };
  var onInternalInput = function onInternalInput2(e) {
    collectInputValue(e.target.value);
  };
  var onInternalStep = function onInternalStep2(up) {
    var _inputRef$current;
    if ((up && upDisabled) || (!up && downDisabled)) {
      return;
    }
    userTypingRef.current = false;
    var stepDecimal = getMiniDecimal(shiftKeyRef.current ? getDecupleSteps(step) : step);
    if (!up) {
      stepDecimal = stepDecimal.negate();
    }
    var target = (decimalValue || getMiniDecimal(0)).add(stepDecimal.toString());
    var updatedValue = triggerValueUpdate(target, false);
    onStep === null || onStep === void 0
      ? void 0
      : onStep(getDecimalValue(stringMode, updatedValue), {
          offset: shiftKeyRef.current ? getDecupleSteps(step) : step,
          type: up ? 'up' : 'down'
        });
    (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0
      ? void 0
      : _inputRef$current.focus();
  };
  var flushInputValue = function flushInputValue2(userTyping) {
    var parsedValue = getMiniDecimal(mergedParser(inputValue));
    var formatValue = parsedValue;
    if (!parsedValue.isNaN()) {
      formatValue = triggerValueUpdate(parsedValue, userTyping);
    } else {
      formatValue = decimalValue;
    }
    if (value !== void 0) {
      setInputValue(decimalValue, false);
    } else if (!formatValue.isNaN()) {
      setInputValue(formatValue, false);
    }
  };
  var onBeforeInput = function onBeforeInput2() {
    userTypingRef.current = true;
  };
  var onKeyDown = function onKeyDown2(event) {
    var which = event.which,
      shiftKey = event.shiftKey;
    userTypingRef.current = true;
    if (shiftKey) {
      shiftKeyRef.current = true;
    } else {
      shiftKeyRef.current = false;
    }
    if (which === KeyCode.ENTER) {
      if (!compositionRef.current) {
        userTypingRef.current = false;
      }
      flushInputValue(false);
      onPressEnter === null || onPressEnter === void 0 ? void 0 : onPressEnter(event);
    }
    if (keyboard === false) {
      return;
    }
    if (!compositionRef.current && [KeyCode.UP, KeyCode.DOWN].includes(which)) {
      onInternalStep(KeyCode.UP === which);
      event.preventDefault();
    }
  };
  var onKeyUp = function onKeyUp2() {
    userTypingRef.current = false;
    shiftKeyRef.current = false;
  };
  var onBlur = function onBlur2() {
    flushInputValue(false);
    setFocus(false);
    userTypingRef.current = false;
  };
  useLayoutUpdateEffect(
    function() {
      if (!decimalValue.isInvalidate()) {
        setInputValue(decimalValue, false);
      }
    },
    [precision]
  );
  useLayoutUpdateEffect(
    function() {
      var newValue = getMiniDecimal(value);
      setDecimalValue(newValue);
      var currentParsedValue = getMiniDecimal(mergedParser(inputValue));
      if (!newValue.equals(currentParsedValue) || !userTypingRef.current || formatter) {
        setInputValue(newValue, userTypingRef.current);
      }
    },
    [value]
  );
  useLayoutUpdateEffect(
    function() {
      if (formatter) {
        restoreCursor();
      }
    },
    [inputValue]
  );
  return /* @__PURE__ */ React2.createElement(
    'div',
    {
      className: classNames2(
        prefixCls,
        className,
        ((_classNames = {}),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-focused'), focus),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-disabled'), disabled),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-readonly'), readOnly),
        _defineProperty2(_classNames, ''.concat(prefixCls, '-not-a-number'), decimalValue.isNaN()),
        _defineProperty2(
          _classNames,
          ''.concat(prefixCls, '-out-of-range'),
          !decimalValue.isInvalidate() && !isInRange(decimalValue)
        ),
        _classNames)
      ),
      style,
      onFocus: function onFocus() {
        setFocus(true);
      },
      onBlur,
      onKeyDown,
      onKeyUp,
      onCompositionStart,
      onCompositionEnd,
      onBeforeInput
    },
    controls &&
      /* @__PURE__ */ React2.createElement(StepHandler, {
        prefixCls,
        upNode: upHandler,
        downNode: downHandler,
        upDisabled,
        downDisabled,
        onStep: onInternalStep
      }),
    /* @__PURE__ */ React2.createElement(
      'div',
      {
        className: ''.concat(inputClassName, '-wrap')
      },
      /* @__PURE__ */ React2.createElement(
        'input',
        _extends2(
          {
            autoComplete: 'off',
            role: 'spinbutton',
            'aria-valuemin': min,
            'aria-valuemax': max,
            'aria-valuenow': decimalValue.isInvalidate() ? null : decimalValue.toString(),
            step
          },
          inputProps,
          {
            ref: composeRef(inputRef, ref),
            className: inputClassName,
            value: inputValue,
            onChange: onInternalInput,
            disabled,
            readOnly
          }
        )
      )
    )
  );
});
InputNumber.displayName = 'InputNumber';
var InputNumber_default = InputNumber;

// esm-build-bb1ba8596a906950f6a43d550af376ecbcc58c06-59d7c15f/node_modules/rc-input-number/es/index.js
var es_default = InputNumber_default;
export { es_default as default };
