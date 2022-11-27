/* esm.sh - esbuild bundle(rc-field-form@1.27.3) es2022 development */
// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/index.js
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/Field.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import toChildrenArray from '/cdn/v99/rc-util@5.24.6/es2022/es/Children/toArray.development.js';
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/FieldContext.js
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var HOOK_MARK = 'RC_FORM_INTERNAL_HOOKS';
var warningFunc = function warningFunc2() {
  warning(false, 'Can not find FormContext. Please make sure you wrap Field under Form.');
};
var Context = /* @__PURE__ */ React.createContext({
  getFieldValue: warningFunc,
  getFieldsValue: warningFunc,
  getFieldError: warningFunc,
  getFieldWarning: warningFunc,
  getFieldsError: warningFunc,
  isFieldsTouched: warningFunc,
  isFieldTouched: warningFunc,
  isFieldValidating: warningFunc,
  isFieldsValidating: warningFunc,
  resetFields: warningFunc,
  setFields: warningFunc,
  setFieldValue: warningFunc,
  setFieldsValue: warningFunc,
  validateFields: warningFunc,
  submit: warningFunc,
  getInternalHooks: function getInternalHooks() {
    warningFunc();
    return {
      dispatch: warningFunc,
      initEntityValue: warningFunc,
      registerField: warningFunc,
      useSubscribe: warningFunc,
      setInitialValues: warningFunc,
      destroyForm: warningFunc,
      setCallbacks: warningFunc,
      registerWatch: warningFunc,
      getFields: warningFunc,
      setValidateMessages: warningFunc,
      setPreserve: warningFunc,
      getInitialValue: warningFunc
    };
  }
});
var FieldContext_default = Context;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/typeUtil.js
function toArray(value) {
  if (value === void 0 || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/validateUtil.js
import _toConsumableArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _regeneratorRuntime from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/regeneratorRuntime.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _asyncToGenerator from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/asyncToGenerator.development.js';
import RawAsyncValidator from '/cdn/v99/async-validator@4.2.5/es2022/async-validator.development.js';
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/messages.js
var typeTemplate = "'${name}' is not a valid ${type}";
var defaultValidateMessages = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
};

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/valueUtil.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import get from '/cdn/v99/rc-util@5.24.6/es2022/es/utils/get.development.js';
import set from '/cdn/v99/rc-util@5.24.6/es2022/es/utils/set.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/cloneDeep.js
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
function cloneDeep(val) {
  if (Array.isArray(val)) {
    return cloneArrayDeep(val);
  } else if (_typeof(val) === 'object' && val !== null) {
    return cloneObjectDeep(val);
  }
  return val;
}
function cloneObjectDeep(val) {
  if (Object.getPrototypeOf(val) === Object.prototype) {
    var res = {};
    for (var key in val) {
      res[key] = cloneDeep(val[key]);
    }
    return res;
  }
  return val;
}
function cloneArrayDeep(val) {
  return val.map(function(item) {
    return cloneDeep(item);
  });
}
var cloneDeep_default = cloneDeep;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/valueUtil.js
function getNamePath(path) {
  return toArray(path);
}
function getValue(store, namePath) {
  var value = get(store, namePath);
  return value;
}
function setValue(store, namePath, value) {
  var removeIfUndefined = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  var newStore = set(store, namePath, value, removeIfUndefined);
  return newStore;
}
function cloneByNamePathList(store, namePathList) {
  var newStore = {};
  namePathList.forEach(function(namePath) {
    var value = getValue(store, namePath);
    newStore = setValue(newStore, namePath, value);
  });
  return newStore;
}
function containsNamePath(namePathList, namePath) {
  return (
    namePathList &&
    namePathList.some(function(path) {
      return matchNamePath(path, namePath);
    })
  );
}
function isObject(obj) {
  return _typeof2(obj) === 'object' && obj !== null && Object.getPrototypeOf(obj) === Object.prototype;
}
function internalSetValues(store, values) {
  var newStore = Array.isArray(store) ? _toConsumableArray(store) : _objectSpread({}, store);
  if (!values) {
    return newStore;
  }
  Object.keys(values).forEach(function(key) {
    var prevValue = newStore[key];
    var value = values[key];
    var recursive = isObject(prevValue) && isObject(value);
    newStore[key] = recursive ? internalSetValues(prevValue, value || {}) : cloneDeep_default(value);
  });
  return newStore;
}
function setValues(store) {
  for (var _len = arguments.length, restValues = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    restValues[_key - 1] = arguments[_key];
  }
  return restValues.reduce(function(current, newStore) {
    return internalSetValues(current, newStore);
  }, store);
}
function matchNamePath(namePath, changedNamePath) {
  if (!namePath || !changedNamePath || namePath.length !== changedNamePath.length) {
    return false;
  }
  return namePath.every(function(nameUnit, i) {
    return changedNamePath[i] === nameUnit;
  });
}
function isSimilar(source, target) {
  if (source === target) {
    return true;
  }
  if ((!source && target) || (source && !target)) {
    return false;
  }
  if (!source || !target || _typeof2(source) !== 'object' || _typeof2(target) !== 'object') {
    return false;
  }
  var sourceKeys = Object.keys(source);
  var targetKeys = Object.keys(target);
  var keys = new Set([].concat(sourceKeys, targetKeys));
  return _toConsumableArray(keys).every(function(key) {
    var sourceValue = source[key];
    var targetValue = target[key];
    if (typeof sourceValue === 'function' && typeof targetValue === 'function') {
      return true;
    }
    return sourceValue === targetValue;
  });
}
function defaultGetValueFromEvent(valuePropName) {
  var event = arguments.length <= 1 ? void 0 : arguments[1];
  if (event && event.target && _typeof2(event.target) === 'object' && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}
function move(array, moveIndex, toIndex) {
  var length = array.length;
  if (moveIndex < 0 || moveIndex >= length || toIndex < 0 || toIndex >= length) {
    return array;
  }
  var item = array[moveIndex];
  var diff = moveIndex - toIndex;
  if (diff > 0) {
    return [].concat(
      _toConsumableArray(array.slice(0, toIndex)),
      [item],
      _toConsumableArray(array.slice(toIndex, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, length))
    );
  }
  if (diff < 0) {
    return [].concat(
      _toConsumableArray(array.slice(0, moveIndex)),
      _toConsumableArray(array.slice(moveIndex + 1, toIndex + 1)),
      [item],
      _toConsumableArray(array.slice(toIndex + 1, length))
    );
  }
  return array;
}

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/validateUtil.js
var AsyncValidator = RawAsyncValidator;
function replaceMessage(template, kv) {
  return template.replace(/\$\{\w+\}/g, function(str) {
    var key = str.slice(2, -1);
    return kv[key];
  });
}
var CODE_LOGIC_ERROR = 'CODE_LOGIC_ERROR';
function validateRule(_x, _x2, _x3, _x4, _x5) {
  return _validateRule.apply(this, arguments);
}
function _validateRule() {
  _validateRule = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee2(name, value, rule, options, messageVariables) {
      var cloneRule, originValidator, subRuleField, validator, messages, result, subResults, kv, fillVariableResult;
      return _regeneratorRuntime().wrap(
        function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                cloneRule = _objectSpread2({}, rule);
                delete cloneRule.ruleIndex;
                if (cloneRule.validator) {
                  originValidator = cloneRule.validator;
                  cloneRule.validator = function() {
                    try {
                      return originValidator.apply(void 0, arguments);
                    } catch (error) {
                      console.error(error);
                      return Promise.reject(CODE_LOGIC_ERROR);
                    }
                  };
                }
                subRuleField = null;
                if (cloneRule && cloneRule.type === 'array' && cloneRule.defaultField) {
                  subRuleField = cloneRule.defaultField;
                  delete cloneRule.defaultField;
                }
                validator = new AsyncValidator(_defineProperty({}, name, [cloneRule]));
                messages = setValues({}, defaultValidateMessages, options.validateMessages);
                validator.messages(messages);
                result = [];
                _context2.prev = 9;
                _context2.next = 12;
                return Promise.resolve(
                  validator.validate(_defineProperty({}, name, value), _objectSpread2({}, options))
                );
              case 12:
                _context2.next = 17;
                break;
              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2['catch'](9);
                if (_context2.t0.errors) {
                  result = _context2.t0.errors.map(function(_ref4, index) {
                    var message = _ref4.message;
                    var mergedMessage = message === CODE_LOGIC_ERROR ? messages.default : message;
                    return /* @__PURE__ */ React2.isValidElement(mergedMessage)
                      ? /* @__PURE__ */ React2.cloneElement(mergedMessage, {
                          key: 'error_'.concat(index)
                        })
                      : mergedMessage;
                  });
                }
              case 17:
                if (!(!result.length && subRuleField)) {
                  _context2.next = 22;
                  break;
                }
                _context2.next = 20;
                return Promise.all(
                  value.map(function(subValue, i) {
                    return validateRule(
                      ''.concat(name, '.').concat(i),
                      subValue,
                      subRuleField,
                      options,
                      messageVariables
                    );
                  })
                );
              case 20:
                subResults = _context2.sent;
                return _context2.abrupt(
                  'return',
                  subResults.reduce(function(prev, errors) {
                    return [].concat(_toConsumableArray2(prev), _toConsumableArray2(errors));
                  }, [])
                );
              case 22:
                kv = _objectSpread2(
                  _objectSpread2({}, rule),
                  {},
                  {
                    name,
                    enum: (rule.enum || []).join(', ')
                  },
                  messageVariables
                );
                fillVariableResult = result.map(function(error) {
                  if (typeof error === 'string') {
                    return replaceMessage(error, kv);
                  }
                  return error;
                });
                return _context2.abrupt('return', fillVariableResult);
              case 25:
              case 'end':
                return _context2.stop();
            }
          }
        },
        _callee2,
        null,
        [[9, 14]]
      );
    })
  );
  return _validateRule.apply(this, arguments);
}
function validateRules(namePath, value, rules, options, validateFirst, messageVariables) {
  var name = namePath.join('.');
  var filledRules = rules
    .map(function(currentRule, ruleIndex) {
      var originValidatorFunc = currentRule.validator;
      var cloneRule = _objectSpread2(
        _objectSpread2({}, currentRule),
        {},
        {
          ruleIndex
        }
      );
      if (originValidatorFunc) {
        cloneRule.validator = function(rule, val, callback) {
          var hasPromise = false;
          var wrappedCallback = function wrappedCallback2() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            Promise.resolve().then(function() {
              warning2(
                !hasPromise,
                'Your validator function has already return a promise. `callback` will be ignored.'
              );
              if (!hasPromise) {
                callback.apply(void 0, args);
              }
            });
          };
          var promise = originValidatorFunc(rule, val, wrappedCallback);
          hasPromise = promise && typeof promise.then === 'function' && typeof promise.catch === 'function';
          warning2(hasPromise, '`callback` is deprecated. Please return a promise instead.');
          if (hasPromise) {
            promise
              .then(function() {
                callback();
              })
              .catch(function(err) {
                callback(err || ' ');
              });
          }
        };
      }
      return cloneRule;
    })
    .sort(function(_ref, _ref2) {
      var w1 = _ref.warningOnly,
        i1 = _ref.ruleIndex;
      var w2 = _ref2.warningOnly,
        i2 = _ref2.ruleIndex;
      if (!!w1 === !!w2) {
        return i1 - i2;
      }
      if (w1) {
        return 1;
      }
      return -1;
    });
  var summaryPromise;
  if (validateFirst === true) {
    summaryPromise = new Promise(
      /* @__PURE__ */ (function() {
        var _ref3 = _asyncToGenerator(
          /* @__PURE__ */ _regeneratorRuntime().mark(function _callee(resolve, reject) {
            var i, rule, errors;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    i = 0;
                  case 1:
                    if (!(i < filledRules.length)) {
                      _context.next = 12;
                      break;
                    }
                    rule = filledRules[i];
                    _context.next = 5;
                    return validateRule(name, value, rule, options, messageVariables);
                  case 5:
                    errors = _context.sent;
                    if (!errors.length) {
                      _context.next = 9;
                      break;
                    }
                    reject([
                      {
                        errors,
                        rule
                      }
                    ]);
                    return _context.abrupt('return');
                  case 9:
                    i += 1;
                    _context.next = 1;
                    break;
                  case 12:
                    resolve([]);
                  case 13:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee);
          })
        );
        return function(_x6, _x7) {
          return _ref3.apply(this, arguments);
        };
      })()
    );
  } else {
    var rulePromises = filledRules.map(function(rule) {
      return validateRule(name, value, rule, options, messageVariables).then(function(errors) {
        return {
          errors,
          rule
        };
      });
    });
    summaryPromise = (validateFirst ? finishOnFirstFailed(rulePromises) : finishOnAllFailed(rulePromises)).then(
      function(errors) {
        return Promise.reject(errors);
      }
    );
  }
  summaryPromise.catch(function(e) {
    return e;
  });
  return summaryPromise;
}
function finishOnAllFailed(_x8) {
  return _finishOnAllFailed.apply(this, arguments);
}
function _finishOnAllFailed() {
  _finishOnAllFailed = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee3(rulePromises) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              return _context3.abrupt(
                'return',
                Promise.all(rulePromises).then(function(errorsList) {
                  var _ref5;
                  var errors = (_ref5 = []).concat.apply(_ref5, _toConsumableArray2(errorsList));
                  return errors;
                })
              );
            case 1:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  );
  return _finishOnAllFailed.apply(this, arguments);
}
function finishOnFirstFailed(_x9) {
  return _finishOnFirstFailed.apply(this, arguments);
}
function _finishOnFirstFailed() {
  _finishOnFirstFailed = _asyncToGenerator(
    /* @__PURE__ */ _regeneratorRuntime().mark(function _callee4(rulePromises) {
      var count;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch ((_context4.prev = _context4.next)) {
            case 0:
              count = 0;
              return _context4.abrupt(
                'return',
                new Promise(function(resolve) {
                  rulePromises.forEach(function(promise) {
                    promise.then(function(ruleError) {
                      if (ruleError.errors.length) {
                        resolve([ruleError]);
                      }
                      count += 1;
                      if (count === rulePromises.length) {
                        resolve([]);
                      }
                    });
                  });
                })
              );
            case 2:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4);
    })
  );
  return _finishOnFirstFailed.apply(this, arguments);
}

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/Field.js
var _excluded = ['name'];
var EMPTY_ERRORS = [];
function requireUpdate(shouldUpdate, prev, next, prevValue, nextValue, info) {
  if (typeof shouldUpdate === 'function') {
    return shouldUpdate(
      prev,
      next,
      'source' in info
        ? {
            source: info.source
          }
        : {}
    );
  }
  return prevValue !== nextValue;
}
var Field = /* @__PURE__ */ (function(_React$Component) {
  _inherits(Field2, _React$Component);
  var _super = _createSuper(Field2);
  function Field2(props) {
    var _this;
    _classCallCheck(this, Field2);
    _this = _super.call(this, props);
    _this.state = {
      resetCount: 0
    };
    _this.cancelRegisterFunc = null;
    _this.mounted = false;
    _this.touched = false;
    _this.dirty = false;
    _this.validatePromise = null;
    _this.prevValidating = void 0;
    _this.errors = EMPTY_ERRORS;
    _this.warnings = EMPTY_ERRORS;
    _this.cancelRegister = function() {
      var _this$props = _this.props,
        preserve = _this$props.preserve,
        isListField = _this$props.isListField,
        name = _this$props.name;
      if (_this.cancelRegisterFunc) {
        _this.cancelRegisterFunc(isListField, preserve, getNamePath(name));
      }
      _this.cancelRegisterFunc = null;
    };
    _this.getNamePath = function() {
      var _this$props2 = _this.props,
        name = _this$props2.name,
        fieldContext = _this$props2.fieldContext;
      var _fieldContext$prefixN = fieldContext.prefixName,
        prefixName = _fieldContext$prefixN === void 0 ? [] : _fieldContext$prefixN;
      return name !== void 0 ? [].concat(_toConsumableArray3(prefixName), _toConsumableArray3(name)) : [];
    };
    _this.getRules = function() {
      var _this$props3 = _this.props,
        _this$props3$rules = _this$props3.rules,
        rules = _this$props3$rules === void 0 ? [] : _this$props3$rules,
        fieldContext = _this$props3.fieldContext;
      return rules.map(function(rule) {
        if (typeof rule === 'function') {
          return rule(fieldContext);
        }
        return rule;
      });
    };
    _this.refresh = function() {
      if (!_this.mounted) return;
      _this.setState(function(_ref) {
        var resetCount = _ref.resetCount;
        return {
          resetCount: resetCount + 1
        };
      });
    };
    _this.triggerMetaEvent = function(destroy) {
      var onMetaChange = _this.props.onMetaChange;
      onMetaChange === null || onMetaChange === void 0
        ? void 0
        : onMetaChange(
            _objectSpread3(
              _objectSpread3({}, _this.getMeta()),
              {},
              {
                destroy
              }
            )
          );
    };
    _this.onStoreChange = function(prevStore, namePathList, info) {
      var _this$props4 = _this.props,
        shouldUpdate = _this$props4.shouldUpdate,
        _this$props4$dependen = _this$props4.dependencies,
        dependencies = _this$props4$dependen === void 0 ? [] : _this$props4$dependen,
        onReset = _this$props4.onReset;
      var store = info.store;
      var namePath = _this.getNamePath();
      var prevValue = _this.getValue(prevStore);
      var curValue = _this.getValue(store);
      var namePathMatch = namePathList && containsNamePath(namePathList, namePath);
      if (info.type === 'valueUpdate' && info.source === 'external' && prevValue !== curValue) {
        _this.touched = true;
        _this.dirty = true;
        _this.validatePromise = null;
        _this.errors = EMPTY_ERRORS;
        _this.warnings = EMPTY_ERRORS;
        _this.triggerMetaEvent();
      }
      switch (info.type) {
        case 'reset':
          if (!namePathList || namePathMatch) {
            _this.touched = false;
            _this.dirty = false;
            _this.validatePromise = null;
            _this.errors = EMPTY_ERRORS;
            _this.warnings = EMPTY_ERRORS;
            _this.triggerMetaEvent();
            onReset === null || onReset === void 0 ? void 0 : onReset();
            _this.refresh();
            return;
          }
          break;
        case 'remove': {
          if (shouldUpdate) {
            _this.reRender();
            return;
          }
          break;
        }
        case 'setField': {
          if (namePathMatch) {
            var data = info.data;
            if ('touched' in data) {
              _this.touched = data.touched;
            }
            if ('validating' in data && !('originRCField' in data)) {
              _this.validatePromise = data.validating ? Promise.resolve([]) : null;
            }
            if ('errors' in data) {
              _this.errors = data.errors || EMPTY_ERRORS;
            }
            if ('warnings' in data) {
              _this.warnings = data.warnings || EMPTY_ERRORS;
            }
            _this.dirty = true;
            _this.triggerMetaEvent();
            _this.reRender();
            return;
          }
          if (
            shouldUpdate &&
            !namePath.length &&
            requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info)
          ) {
            _this.reRender();
            return;
          }
          break;
        }
        case 'dependenciesUpdate': {
          var dependencyList = dependencies.map(getNamePath);
          if (
            dependencyList.some(function(dependency) {
              return containsNamePath(info.relatedFields, dependency);
            })
          ) {
            _this.reRender();
            return;
          }
          break;
        }
        default:
          if (
            namePathMatch ||
            ((!dependencies.length || namePath.length || shouldUpdate) &&
              requireUpdate(shouldUpdate, prevStore, store, prevValue, curValue, info))
          ) {
            _this.reRender();
            return;
          }
          break;
      }
      if (shouldUpdate === true) {
        _this.reRender();
      }
    };
    _this.validateRules = function(options) {
      var namePath = _this.getNamePath();
      var currentValue = _this.getValue();
      var rootPromise = Promise.resolve().then(function() {
        if (!_this.mounted) {
          return [];
        }
        var _this$props5 = _this.props,
          _this$props5$validate = _this$props5.validateFirst,
          validateFirst = _this$props5$validate === void 0 ? false : _this$props5$validate,
          messageVariables = _this$props5.messageVariables;
        var _ref2 = options || {},
          triggerName = _ref2.triggerName;
        var filteredRules = _this.getRules();
        if (triggerName) {
          filteredRules = filteredRules
            .filter(function(rule) {
              return rule;
            })
            .filter(function(rule) {
              var validateTrigger = rule.validateTrigger;
              if (!validateTrigger) {
                return true;
              }
              var triggerList = toArray(validateTrigger);
              return triggerList.includes(triggerName);
            });
        }
        var promise = validateRules(namePath, currentValue, filteredRules, options, validateFirst, messageVariables);
        promise
          .catch(function(e) {
            return e;
          })
          .then(function() {
            var ruleErrors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : EMPTY_ERRORS;
            if (_this.validatePromise === rootPromise) {
              var _ruleErrors$forEach;
              _this.validatePromise = null;
              var nextErrors = [];
              var nextWarnings = [];
              (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0
                ? void 0
                : _ruleErrors$forEach.call(ruleErrors, function(_ref3) {
                    var warningOnly = _ref3.rule.warningOnly,
                      _ref3$errors = _ref3.errors,
                      errors = _ref3$errors === void 0 ? EMPTY_ERRORS : _ref3$errors;
                    if (warningOnly) {
                      nextWarnings.push.apply(nextWarnings, _toConsumableArray3(errors));
                    } else {
                      nextErrors.push.apply(nextErrors, _toConsumableArray3(errors));
                    }
                  });
              _this.errors = nextErrors;
              _this.warnings = nextWarnings;
              _this.triggerMetaEvent();
              _this.reRender();
            }
          });
        return promise;
      });
      _this.validatePromise = rootPromise;
      _this.dirty = true;
      _this.errors = EMPTY_ERRORS;
      _this.warnings = EMPTY_ERRORS;
      _this.triggerMetaEvent();
      _this.reRender();
      return rootPromise;
    };
    _this.isFieldValidating = function() {
      return !!_this.validatePromise;
    };
    _this.isFieldTouched = function() {
      return _this.touched;
    };
    _this.isFieldDirty = function() {
      if (_this.dirty || _this.props.initialValue !== void 0) {
        return true;
      }
      var fieldContext = _this.props.fieldContext;
      var _fieldContext$getInte = fieldContext.getInternalHooks(HOOK_MARK),
        getInitialValue = _fieldContext$getInte.getInitialValue;
      if (getInitialValue(_this.getNamePath()) !== void 0) {
        return true;
      }
      return false;
    };
    _this.getErrors = function() {
      return _this.errors;
    };
    _this.getWarnings = function() {
      return _this.warnings;
    };
    _this.isListField = function() {
      return _this.props.isListField;
    };
    _this.isList = function() {
      return _this.props.isList;
    };
    _this.isPreserve = function() {
      return _this.props.preserve;
    };
    _this.getMeta = function() {
      _this.prevValidating = _this.isFieldValidating();
      var meta = {
        touched: _this.isFieldTouched(),
        validating: _this.prevValidating,
        errors: _this.errors,
        warnings: _this.warnings,
        name: _this.getNamePath()
      };
      return meta;
    };
    _this.getOnlyChild = function(children) {
      if (typeof children === 'function') {
        var meta = _this.getMeta();
        return _objectSpread3(
          _objectSpread3({}, _this.getOnlyChild(children(_this.getControlled(), meta, _this.props.fieldContext))),
          {},
          {
            isFunction: true
          }
        );
      }
      var childList = toChildrenArray(children);
      if (childList.length !== 1 || !(/* @__PURE__ */ React3.isValidElement(childList[0]))) {
        return {
          child: childList,
          isFunction: false
        };
      }
      return {
        child: childList[0],
        isFunction: false
      };
    };
    _this.getValue = function(store) {
      var getFieldsValue = _this.props.fieldContext.getFieldsValue;
      var namePath = _this.getNamePath();
      return getValue(store || getFieldsValue(true), namePath);
    };
    _this.getControlled = function() {
      var childProps = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      var _this$props6 = _this.props,
        trigger = _this$props6.trigger,
        validateTrigger = _this$props6.validateTrigger,
        getValueFromEvent = _this$props6.getValueFromEvent,
        normalize2 = _this$props6.normalize,
        valuePropName = _this$props6.valuePropName,
        getValueProps = _this$props6.getValueProps,
        fieldContext = _this$props6.fieldContext;
      var mergedValidateTrigger = validateTrigger !== void 0 ? validateTrigger : fieldContext.validateTrigger;
      var namePath = _this.getNamePath();
      var getInternalHooks3 = fieldContext.getInternalHooks,
        getFieldsValue = fieldContext.getFieldsValue;
      var _getInternalHooks = getInternalHooks3(HOOK_MARK),
        dispatch = _getInternalHooks.dispatch;
      var value = _this.getValue();
      var mergedGetValueProps =
        getValueProps ||
        function(val) {
          return _defineProperty2({}, valuePropName, val);
        };
      var originTriggerFunc = childProps[trigger];
      var control = _objectSpread3(_objectSpread3({}, childProps), mergedGetValueProps(value));
      control[trigger] = function() {
        _this.touched = true;
        _this.dirty = true;
        _this.triggerMetaEvent();
        var newValue;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (getValueFromEvent) {
          newValue = getValueFromEvent.apply(void 0, args);
        } else {
          newValue = defaultGetValueFromEvent.apply(void 0, [valuePropName].concat(args));
        }
        if (normalize2) {
          newValue = normalize2(newValue, value, getFieldsValue(true));
        }
        dispatch({
          type: 'updateValue',
          namePath,
          value: newValue
        });
        if (originTriggerFunc) {
          originTriggerFunc.apply(void 0, args);
        }
      };
      var validateTriggerList = toArray(mergedValidateTrigger || []);
      validateTriggerList.forEach(function(triggerName) {
        var originTrigger = control[triggerName];
        control[triggerName] = function() {
          if (originTrigger) {
            originTrigger.apply(void 0, arguments);
          }
          var rules = _this.props.rules;
          if (rules && rules.length) {
            dispatch({
              type: 'validateField',
              namePath,
              triggerName
            });
          }
        };
      });
      return control;
    };
    if (props.fieldContext) {
      var getInternalHooks2 = props.fieldContext.getInternalHooks;
      var _getInternalHooks2 = getInternalHooks2(HOOK_MARK),
        initEntityValue = _getInternalHooks2.initEntityValue;
      initEntityValue(_assertThisInitialized(_this));
    }
    return _this;
  }
  _createClass(Field2, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props7 = this.props,
          shouldUpdate = _this$props7.shouldUpdate,
          fieldContext = _this$props7.fieldContext;
        this.mounted = true;
        if (fieldContext) {
          var getInternalHooks2 = fieldContext.getInternalHooks;
          var _getInternalHooks3 = getInternalHooks2(HOOK_MARK),
            registerField = _getInternalHooks3.registerField;
          this.cancelRegisterFunc = registerField(this);
        }
        if (shouldUpdate === true) {
          this.reRender();
        }
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.cancelRegister();
        this.triggerMetaEvent(true);
        this.mounted = false;
      }
    },
    {
      key: 'reRender',
      value: function reRender() {
        if (!this.mounted) return;
        this.forceUpdate();
      }
    },
    {
      key: 'render',
      value: function render() {
        var resetCount = this.state.resetCount;
        var children = this.props.children;
        var _this$getOnlyChild = this.getOnlyChild(children),
          child = _this$getOnlyChild.child,
          isFunction = _this$getOnlyChild.isFunction;
        var returnChildNode;
        if (isFunction) {
          returnChildNode = child;
        } else if (/* @__PURE__ */ React3.isValidElement(child)) {
          returnChildNode = /* @__PURE__ */ React3.cloneElement(child, this.getControlled(child.props));
        } else {
          warning3(!child, '`children` of Field is not validate ReactElement.');
          returnChildNode = child;
        }
        return /* @__PURE__ */ React3.createElement(
          React3.Fragment,
          {
            key: resetCount
          },
          returnChildNode
        );
      }
    }
  ]);
  return Field2;
})(React3.Component);
Field.contextType = FieldContext_default;
Field.defaultProps = {
  trigger: 'onChange',
  valuePropName: 'value'
};
function WrapperField(_ref5) {
  var name = _ref5.name,
    restProps = _objectWithoutProperties(_ref5, _excluded);
  var fieldContext = React3.useContext(FieldContext_default);
  var namePath = name !== void 0 ? getNamePath(name) : void 0;
  var key = 'keep';
  if (!restProps.isListField) {
    key = '_'.concat((namePath || []).join('_'));
  }
  if (restProps.preserve === false && restProps.isListField && namePath.length <= 1) {
    warning3(false, '`preserve` should not apply on Form.List fields.');
  }
  return /* @__PURE__ */ React3.createElement(
    Field,
    _extends(
      {
        key,
        name: namePath
      },
      restProps,
      {
        fieldContext
      }
    )
  );
}
var Field_default = WrapperField;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/List.js
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _toConsumableArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/ListContext.js
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var ListContext = /* @__PURE__ */ React4.createContext(null);
var ListContext_default = ListContext;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/List.js
var List = function List2(_ref) {
  var name = _ref.name,
    initialValue = _ref.initialValue,
    children = _ref.children,
    rules = _ref.rules,
    validateTrigger = _ref.validateTrigger;
  var context = React5.useContext(FieldContext_default);
  var keyRef = React5.useRef({
    keys: [],
    id: 0
  });
  var keyManager = keyRef.current;
  var prefixName = React5.useMemo(
    function() {
      var parentPrefixName = getNamePath(context.prefixName) || [];
      return [].concat(_toConsumableArray4(parentPrefixName), _toConsumableArray4(getNamePath(name)));
    },
    [context.prefixName, name]
  );
  var fieldContext = React5.useMemo(
    function() {
      return _objectSpread4(
        _objectSpread4({}, context),
        {},
        {
          prefixName
        }
      );
    },
    [context, prefixName]
  );
  var listContext = React5.useMemo(
    function() {
      return {
        getKey: function getKey(namePath) {
          var len = prefixName.length;
          var pathName = namePath[len];
          return [keyManager.keys[pathName], namePath.slice(len + 1)];
        }
      };
    },
    [prefixName]
  );
  if (typeof children !== 'function') {
    warning4(false, 'Form.List only accepts function as children.');
    return null;
  }
  var shouldUpdate = function shouldUpdate2(prevValue, nextValue, _ref2) {
    var source = _ref2.source;
    if (source === 'internal') {
      return false;
    }
    return prevValue !== nextValue;
  };
  return /* @__PURE__ */ React5.createElement(
    ListContext_default.Provider,
    {
      value: listContext
    },
    /* @__PURE__ */ React5.createElement(
      FieldContext_default.Provider,
      {
        value: fieldContext
      },
      /* @__PURE__ */ React5.createElement(
        Field_default,
        {
          name: [],
          shouldUpdate,
          rules,
          validateTrigger,
          initialValue,
          isList: true
        },
        function(_ref3, meta) {
          var _ref3$value = _ref3.value,
            value = _ref3$value === void 0 ? [] : _ref3$value,
            onChange = _ref3.onChange;
          var getFieldValue = context.getFieldValue;
          var getNewValue = function getNewValue2() {
            var values = getFieldValue(prefixName || []);
            return values || [];
          };
          var operations = {
            add: function add(defaultValue, index) {
              var newValue = getNewValue();
              if (index >= 0 && index <= newValue.length) {
                keyManager.keys = [].concat(
                  _toConsumableArray4(keyManager.keys.slice(0, index)),
                  [keyManager.id],
                  _toConsumableArray4(keyManager.keys.slice(index))
                );
                onChange(
                  [].concat(
                    _toConsumableArray4(newValue.slice(0, index)),
                    [defaultValue],
                    _toConsumableArray4(newValue.slice(index))
                  )
                );
              } else {
                if (index < 0 || index > newValue.length) {
                  warning4(false, 'The second parameter of the add function should be a valid positive number.');
                }
                keyManager.keys = [].concat(_toConsumableArray4(keyManager.keys), [keyManager.id]);
                onChange([].concat(_toConsumableArray4(newValue), [defaultValue]));
              }
              keyManager.id += 1;
            },
            remove: function remove(index) {
              var newValue = getNewValue();
              var indexSet = new Set(Array.isArray(index) ? index : [index]);
              if (indexSet.size <= 0) {
                return;
              }
              keyManager.keys = keyManager.keys.filter(function(_, keysIndex) {
                return !indexSet.has(keysIndex);
              });
              onChange(
                newValue.filter(function(_, valueIndex) {
                  return !indexSet.has(valueIndex);
                })
              );
            },
            move: function move2(from, to) {
              if (from === to) {
                return;
              }
              var newValue = getNewValue();
              if (from < 0 || from >= newValue.length || to < 0 || to >= newValue.length) {
                return;
              }
              keyManager.keys = move(keyManager.keys, from, to);
              onChange(move(newValue, from, to));
            }
          };
          var listValue = value || [];
          if (!Array.isArray(listValue)) {
            listValue = [];
            if (true) {
              warning4(false, "Current value of '".concat(prefixName.join(' > '), "' is not an array type."));
            }
          }
          return children(
            listValue.map(function(__, index) {
              var key = keyManager.keys[index];
              if (key === void 0) {
                keyManager.keys[index] = keyManager.id;
                key = keyManager.keys[index];
                keyManager.id += 1;
              }
              return {
                name: index,
                key,
                isListField: true
              };
            }),
            operations,
            meta
          );
        }
      )
    )
  );
};
var List_default = List;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/useForm.js
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _toConsumableArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _createClass3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _classCallCheck3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import warning5 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/asyncUtil.js
function allPromiseFinish(promiseList) {
  var hasError = false;
  var count = promiseList.length;
  var results = [];
  if (!promiseList.length) {
    return Promise.resolve([]);
  }
  return new Promise(function(resolve, reject) {
    promiseList.forEach(function(promise, index) {
      promise
        .catch(function(e) {
          hasError = true;
          return e;
        })
        .then(function(result) {
          count -= 1;
          results[index] = result;
          if (count > 0) {
            return;
          }
          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
    });
  });
}

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/utils/NameMap.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _toConsumableArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
var SPLIT = '__@field_split__';
function normalize(namePath) {
  return namePath
    .map(function(cell) {
      return ''.concat(_typeof3(cell), ':').concat(cell);
    })
    .join(SPLIT);
}
var NameMap = /* @__PURE__ */ (function() {
  function NameMap2() {
    _classCallCheck2(this, NameMap2);
    this.kvs = /* @__PURE__ */ new Map();
  }
  _createClass2(NameMap2, [
    {
      key: 'set',
      value: function set2(key, value) {
        this.kvs.set(normalize(key), value);
      }
    },
    {
      key: 'get',
      value: function get2(key) {
        return this.kvs.get(normalize(key));
      }
    },
    {
      key: 'update',
      value: function update(key, updater) {
        var origin = this.get(key);
        var next = updater(origin);
        if (!next) {
          this.delete(key);
        } else {
          this.set(key, next);
        }
      }
    },
    {
      key: 'delete',
      value: function _delete(key) {
        this.kvs.delete(normalize(key));
      }
    },
    {
      key: 'map',
      value: function map(callback) {
        return _toConsumableArray5(this.kvs.entries()).map(function(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];
          var cells = key.split(SPLIT);
          return callback({
            key: cells.map(function(cell) {
              var _cell$match = cell.match(/^([^:]*):(.*)$/),
                _cell$match2 = _slicedToArray(_cell$match, 3),
                type = _cell$match2[1],
                unit = _cell$match2[2];
              return type === 'number' ? Number(unit) : unit;
            }),
            value
          });
        });
      }
    },
    {
      key: 'toJSON',
      value: function toJSON() {
        var json = {};
        this.map(function(_ref3) {
          var key = _ref3.key,
            value = _ref3.value;
          json[key.join('.')] = value;
          return null;
        });
        return json;
      }
    }
  ]);
  return NameMap2;
})();
var NameMap_default = NameMap;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/useForm.js
var _excluded2 = ['name', 'errors'];
var FormStore = /* @__PURE__ */ _createClass3(function FormStore2(forceRootUpdate) {
  var _this = this;
  _classCallCheck3(this, FormStore2);
  this.formHooked = false;
  this.forceRootUpdate = void 0;
  this.subscribable = true;
  this.store = {};
  this.fieldEntities = [];
  this.initialValues = {};
  this.callbacks = {};
  this.validateMessages = null;
  this.preserve = null;
  this.lastValidatePromise = null;
  this.getForm = function() {
    return {
      getFieldValue: _this.getFieldValue,
      getFieldsValue: _this.getFieldsValue,
      getFieldError: _this.getFieldError,
      getFieldWarning: _this.getFieldWarning,
      getFieldsError: _this.getFieldsError,
      isFieldsTouched: _this.isFieldsTouched,
      isFieldTouched: _this.isFieldTouched,
      isFieldValidating: _this.isFieldValidating,
      isFieldsValidating: _this.isFieldsValidating,
      resetFields: _this.resetFields,
      setFields: _this.setFields,
      setFieldValue: _this.setFieldValue,
      setFieldsValue: _this.setFieldsValue,
      validateFields: _this.validateFields,
      submit: _this.submit,
      _init: true,
      getInternalHooks: _this.getInternalHooks
    };
  };
  this.getInternalHooks = function(key) {
    if (key === HOOK_MARK) {
      _this.formHooked = true;
      return {
        dispatch: _this.dispatch,
        initEntityValue: _this.initEntityValue,
        registerField: _this.registerField,
        useSubscribe: _this.useSubscribe,
        setInitialValues: _this.setInitialValues,
        destroyForm: _this.destroyForm,
        setCallbacks: _this.setCallbacks,
        setValidateMessages: _this.setValidateMessages,
        getFields: _this.getFields,
        setPreserve: _this.setPreserve,
        getInitialValue: _this.getInitialValue,
        registerWatch: _this.registerWatch
      };
    }
    warning5(false, '`getInternalHooks` is internal usage. Should not call directly.');
    return null;
  };
  this.useSubscribe = function(subscribable) {
    _this.subscribable = subscribable;
  };
  this.prevWithoutPreserves = null;
  this.setInitialValues = function(initialValues, init) {
    _this.initialValues = initialValues || {};
    if (init) {
      var _this$prevWithoutPres;
      var nextStore = setValues({}, initialValues, _this.store);
      (_this$prevWithoutPres = _this.prevWithoutPreserves) === null || _this$prevWithoutPres === void 0
        ? void 0
        : _this$prevWithoutPres.map(function(_ref) {
            var namePath = _ref.key;
            nextStore = setValue(nextStore, namePath, getValue(initialValues, namePath));
          });
      _this.prevWithoutPreserves = null;
      _this.updateStore(nextStore);
    }
  };
  this.destroyForm = function() {
    var prevWithoutPreserves = new NameMap_default();
    _this.getFieldEntities(true).forEach(function(entity) {
      if (!_this.isMergedPreserve(entity.isPreserve())) {
        prevWithoutPreserves.set(entity.getNamePath(), true);
      }
    });
    _this.prevWithoutPreserves = prevWithoutPreserves;
  };
  this.getInitialValue = function(namePath) {
    var initValue = getValue(_this.initialValues, namePath);
    return namePath.length ? cloneDeep_default(initValue) : initValue;
  };
  this.setCallbacks = function(callbacks) {
    _this.callbacks = callbacks;
  };
  this.setValidateMessages = function(validateMessages) {
    _this.validateMessages = validateMessages;
  };
  this.setPreserve = function(preserve) {
    _this.preserve = preserve;
  };
  this.watchList = [];
  this.registerWatch = function(callback) {
    _this.watchList.push(callback);
    return function() {
      _this.watchList = _this.watchList.filter(function(fn) {
        return fn !== callback;
      });
    };
  };
  this.notifyWatch = function() {
    var namePath = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (_this.watchList.length) {
      var values = _this.getFieldsValue();
      _this.watchList.forEach(function(callback) {
        callback(values, namePath);
      });
    }
  };
  this.timeoutId = null;
  this.warningUnhooked = function() {
    if (!_this.timeoutId && typeof window !== 'undefined') {
      _this.timeoutId = setTimeout(function() {
        _this.timeoutId = null;
        if (!_this.formHooked) {
          warning5(
            false,
            'Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?'
          );
        }
      });
    }
  };
  this.updateStore = function(nextStore) {
    _this.store = nextStore;
  };
  this.getFieldEntities = function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    if (!pure) {
      return _this.fieldEntities;
    }
    return _this.fieldEntities.filter(function(field) {
      return field.getNamePath().length;
    });
  };
  this.getFieldsMap = function() {
    var pure = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var cache = new NameMap_default();
    _this.getFieldEntities(pure).forEach(function(field) {
      var namePath = field.getNamePath();
      cache.set(namePath, field);
    });
    return cache;
  };
  this.getFieldEntitiesForNamePathList = function(nameList) {
    if (!nameList) {
      return _this.getFieldEntities(true);
    }
    var cache = _this.getFieldsMap(true);
    return nameList.map(function(name) {
      var namePath = getNamePath(name);
      return (
        cache.get(namePath) || {
          INVALIDATE_NAME_PATH: getNamePath(name)
        }
      );
    });
  };
  this.getFieldsValue = function(nameList, filterFunc) {
    _this.warningUnhooked();
    if (nameList === true && !filterFunc) {
      return _this.store;
    }
    var fieldEntities = _this.getFieldEntitiesForNamePathList(Array.isArray(nameList) ? nameList : null);
    var filteredNameList = [];
    fieldEntities.forEach(function(entity) {
      var _entity$isListField;
      var namePath = 'INVALIDATE_NAME_PATH' in entity ? entity.INVALIDATE_NAME_PATH : entity.getNamePath();
      if (
        !nameList &&
        ((_entity$isListField = entity.isListField) === null || _entity$isListField === void 0
          ? void 0
          : _entity$isListField.call(entity))
      ) {
        return;
      }
      if (!filterFunc) {
        filteredNameList.push(namePath);
      } else {
        var meta = 'getMeta' in entity ? entity.getMeta() : null;
        if (filterFunc(meta)) {
          filteredNameList.push(namePath);
        }
      }
    });
    return cloneByNamePathList(_this.store, filteredNameList.map(getNamePath));
  };
  this.getFieldValue = function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    return getValue(_this.store, namePath);
  };
  this.getFieldsError = function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntitiesForNamePathList(nameList);
    return fieldEntities.map(function(entity, index) {
      if (entity && !('INVALIDATE_NAME_PATH' in entity)) {
        return {
          name: entity.getNamePath(),
          errors: entity.getErrors(),
          warnings: entity.getWarnings()
        };
      }
      return {
        name: getNamePath(nameList[index]),
        errors: [],
        warnings: []
      };
    });
  };
  this.getFieldError = function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.errors;
  };
  this.getFieldWarning = function(name) {
    _this.warningUnhooked();
    var namePath = getNamePath(name);
    var fieldError = _this.getFieldsError([namePath])[0];
    return fieldError.warnings;
  };
  this.isFieldsTouched = function() {
    _this.warningUnhooked();
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var arg0 = args[0],
      arg1 = args[1];
    var namePathList;
    var isAllFieldsTouched = false;
    if (args.length === 0) {
      namePathList = null;
    } else if (args.length === 1) {
      if (Array.isArray(arg0)) {
        namePathList = arg0.map(getNamePath);
        isAllFieldsTouched = false;
      } else {
        namePathList = null;
        isAllFieldsTouched = arg0;
      }
    } else {
      namePathList = arg0.map(getNamePath);
      isAllFieldsTouched = arg1;
    }
    var fieldEntities = _this.getFieldEntities(true);
    var isFieldTouched = function isFieldTouched2(field) {
      return field.isFieldTouched();
    };
    if (!namePathList) {
      return isAllFieldsTouched ? fieldEntities.every(isFieldTouched) : fieldEntities.some(isFieldTouched);
    }
    var map = new NameMap_default();
    namePathList.forEach(function(shortNamePath) {
      map.set(shortNamePath, []);
    });
    fieldEntities.forEach(function(field) {
      var fieldNamePath = field.getNamePath();
      namePathList.forEach(function(shortNamePath) {
        if (
          shortNamePath.every(function(nameUnit, i) {
            return fieldNamePath[i] === nameUnit;
          })
        ) {
          map.update(shortNamePath, function(list) {
            return [].concat(_toConsumableArray6(list), [field]);
          });
        }
      });
    });
    var isNamePathListTouched = function isNamePathListTouched2(entities) {
      return entities.some(isFieldTouched);
    };
    var namePathListEntities = map.map(function(_ref2) {
      var value = _ref2.value;
      return value;
    });
    return isAllFieldsTouched
      ? namePathListEntities.every(isNamePathListTouched)
      : namePathListEntities.some(isNamePathListTouched);
  };
  this.isFieldTouched = function(name) {
    _this.warningUnhooked();
    return _this.isFieldsTouched([name]);
  };
  this.isFieldsValidating = function(nameList) {
    _this.warningUnhooked();
    var fieldEntities = _this.getFieldEntities();
    if (!nameList) {
      return fieldEntities.some(function(testField) {
        return testField.isFieldValidating();
      });
    }
    var namePathList = nameList.map(getNamePath);
    return fieldEntities.some(function(testField) {
      var fieldNamePath = testField.getNamePath();
      return containsNamePath(namePathList, fieldNamePath) && testField.isFieldValidating();
    });
  };
  this.isFieldValidating = function(name) {
    _this.warningUnhooked();
    return _this.isFieldsValidating([name]);
  };
  this.resetWithFieldInitialValue = function() {
    var info = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var cache = new NameMap_default();
    var fieldEntities = _this.getFieldEntities(true);
    fieldEntities.forEach(function(field) {
      var initialValue = field.props.initialValue;
      var namePath = field.getNamePath();
      if (initialValue !== void 0) {
        var records = cache.get(namePath) || /* @__PURE__ */ new Set();
        records.add({
          entity: field,
          value: initialValue
        });
        cache.set(namePath, records);
      }
    });
    var resetWithFields = function resetWithFields2(entities) {
      entities.forEach(function(field) {
        var initialValue = field.props.initialValue;
        if (initialValue !== void 0) {
          var namePath = field.getNamePath();
          var formInitialValue = _this.getInitialValue(namePath);
          if (formInitialValue !== void 0) {
            warning5(
              false,
              "Form already set 'initialValues' with path '".concat(
                namePath.join('.'),
                "'. Field can not overwrite it."
              )
            );
          } else {
            var records = cache.get(namePath);
            if (records && records.size > 1) {
              warning5(
                false,
                "Multiple Field with path '".concat(
                  namePath.join('.'),
                  "' set 'initialValue'. Can not decide which one to pick."
                )
              );
            } else if (records) {
              var originValue = _this.getFieldValue(namePath);
              if (!info.skipExist || originValue === void 0) {
                _this.updateStore(setValue(_this.store, namePath, _toConsumableArray6(records)[0].value));
              }
            }
          }
        }
      });
    };
    var requiredFieldEntities;
    if (info.entities) {
      requiredFieldEntities = info.entities;
    } else if (info.namePathList) {
      requiredFieldEntities = [];
      info.namePathList.forEach(function(namePath) {
        var records = cache.get(namePath);
        if (records) {
          var _requiredFieldEntitie;
          (_requiredFieldEntitie = requiredFieldEntities).push.apply(
            _requiredFieldEntitie,
            _toConsumableArray6(
              _toConsumableArray6(records).map(function(r) {
                return r.entity;
              })
            )
          );
        }
      });
    } else {
      requiredFieldEntities = fieldEntities;
    }
    resetWithFields(requiredFieldEntities);
  };
  this.resetFields = function(nameList) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (!nameList) {
      _this.updateStore(setValues({}, _this.initialValues));
      _this.resetWithFieldInitialValue();
      _this.notifyObservers(prevStore, null, {
        type: 'reset'
      });
      _this.notifyWatch();
      return;
    }
    var namePathList = nameList.map(getNamePath);
    namePathList.forEach(function(namePath) {
      var initialValue = _this.getInitialValue(namePath);
      _this.updateStore(setValue(_this.store, namePath, initialValue));
    });
    _this.resetWithFieldInitialValue({
      namePathList
    });
    _this.notifyObservers(prevStore, namePathList, {
      type: 'reset'
    });
    _this.notifyWatch(namePathList);
  };
  this.setFields = function(fields) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    var namePathList = [];
    fields.forEach(function(fieldData) {
      var name = fieldData.name,
        errors = fieldData.errors,
        data = _objectWithoutProperties2(fieldData, _excluded2);
      var namePath = getNamePath(name);
      namePathList.push(namePath);
      if ('value' in data) {
        _this.updateStore(setValue(_this.store, namePath, data.value));
      }
      _this.notifyObservers(prevStore, [namePath], {
        type: 'setField',
        data: fieldData
      });
    });
    _this.notifyWatch(namePathList);
  };
  this.getFields = function() {
    var entities = _this.getFieldEntities(true);
    var fields = entities.map(function(field) {
      var namePath = field.getNamePath();
      var meta = field.getMeta();
      var fieldData = _objectSpread5(
        _objectSpread5({}, meta),
        {},
        {
          name: namePath,
          value: _this.getFieldValue(namePath)
        }
      );
      Object.defineProperty(fieldData, 'originRCField', {
        value: true
      });
      return fieldData;
    });
    return fields;
  };
  this.initEntityValue = function(entity) {
    var initialValue = entity.props.initialValue;
    if (initialValue !== void 0) {
      var namePath = entity.getNamePath();
      var prevValue = getValue(_this.store, namePath);
      if (prevValue === void 0) {
        _this.updateStore(setValue(_this.store, namePath, initialValue));
      }
    }
  };
  this.isMergedPreserve = function(fieldPreserve) {
    var mergedPreserve = fieldPreserve !== void 0 ? fieldPreserve : _this.preserve;
    return mergedPreserve !== null && mergedPreserve !== void 0 ? mergedPreserve : true;
  };
  this.registerField = function(entity) {
    _this.fieldEntities.push(entity);
    var namePath = entity.getNamePath();
    _this.notifyWatch([namePath]);
    if (entity.props.initialValue !== void 0) {
      var prevStore = _this.store;
      _this.resetWithFieldInitialValue({
        entities: [entity],
        skipExist: true
      });
      _this.notifyObservers(prevStore, [entity.getNamePath()], {
        type: 'valueUpdate',
        source: 'internal'
      });
    }
    return function(isListField, preserve) {
      var subNamePath = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      _this.fieldEntities = _this.fieldEntities.filter(function(item) {
        return item !== entity;
      });
      if (!_this.isMergedPreserve(preserve) && (!isListField || subNamePath.length > 1)) {
        var defaultValue = isListField ? void 0 : _this.getInitialValue(namePath);
        if (
          namePath.length &&
          _this.getFieldValue(namePath) !== defaultValue &&
          _this.fieldEntities.every(function(field) {
            return !matchNamePath(field.getNamePath(), namePath);
          })
        ) {
          var _prevStore = _this.store;
          _this.updateStore(setValue(_prevStore, namePath, defaultValue, true));
          _this.notifyObservers(_prevStore, [namePath], {
            type: 'remove'
          });
          _this.triggerDependenciesUpdate(_prevStore, namePath);
        }
      }
      _this.notifyWatch([namePath]);
    };
  };
  this.dispatch = function(action) {
    switch (action.type) {
      case 'updateValue': {
        var namePath = action.namePath,
          value = action.value;
        _this.updateValue(namePath, value);
        break;
      }
      case 'validateField': {
        var _namePath = action.namePath,
          triggerName = action.triggerName;
        _this.validateFields([_namePath], {
          triggerName
        });
        break;
      }
      default:
    }
  };
  this.notifyObservers = function(prevStore, namePathList, info) {
    if (_this.subscribable) {
      var mergedInfo = _objectSpread5(
        _objectSpread5({}, info),
        {},
        {
          store: _this.getFieldsValue(true)
        }
      );
      _this.getFieldEntities().forEach(function(_ref3) {
        var onStoreChange = _ref3.onStoreChange;
        onStoreChange(prevStore, namePathList, mergedInfo);
      });
    } else {
      _this.forceRootUpdate();
    }
  };
  this.triggerDependenciesUpdate = function(prevStore, namePath) {
    var childrenFields = _this.getDependencyChildrenFields(namePath);
    if (childrenFields.length) {
      _this.validateFields(childrenFields);
    }
    _this.notifyObservers(prevStore, childrenFields, {
      type: 'dependenciesUpdate',
      relatedFields: [namePath].concat(_toConsumableArray6(childrenFields))
    });
    return childrenFields;
  };
  this.updateValue = function(name, value) {
    var namePath = getNamePath(name);
    var prevStore = _this.store;
    _this.updateStore(setValue(_this.store, namePath, value));
    _this.notifyObservers(prevStore, [namePath], {
      type: 'valueUpdate',
      source: 'internal'
    });
    _this.notifyWatch([namePath]);
    var childrenFields = _this.triggerDependenciesUpdate(prevStore, namePath);
    var onValuesChange = _this.callbacks.onValuesChange;
    if (onValuesChange) {
      var changedValues = cloneByNamePathList(_this.store, [namePath]);
      onValuesChange(changedValues, _this.getFieldsValue());
    }
    _this.triggerOnFieldsChange([namePath].concat(_toConsumableArray6(childrenFields)));
  };
  this.setFieldsValue = function(store) {
    _this.warningUnhooked();
    var prevStore = _this.store;
    if (store) {
      var nextStore = setValues(_this.store, store);
      _this.updateStore(nextStore);
    }
    _this.notifyObservers(prevStore, null, {
      type: 'valueUpdate',
      source: 'external'
    });
    _this.notifyWatch();
  };
  this.setFieldValue = function(name, value) {
    _this.setFields([
      {
        name,
        value
      }
    ]);
  };
  this.getDependencyChildrenFields = function(rootNamePath) {
    var children = /* @__PURE__ */ new Set();
    var childrenFields = [];
    var dependencies2fields = new NameMap_default();
    _this.getFieldEntities().forEach(function(field) {
      var dependencies = field.props.dependencies;
      (dependencies || []).forEach(function(dependency) {
        var dependencyNamePath = getNamePath(dependency);
        dependencies2fields.update(dependencyNamePath, function() {
          var fields = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          fields.add(field);
          return fields;
        });
      });
    });
    var fillChildren = function fillChildren2(namePath) {
      var fields = dependencies2fields.get(namePath) || /* @__PURE__ */ new Set();
      fields.forEach(function(field) {
        if (!children.has(field)) {
          children.add(field);
          var fieldNamePath = field.getNamePath();
          if (field.isFieldDirty() && fieldNamePath.length) {
            childrenFields.push(fieldNamePath);
            fillChildren2(fieldNamePath);
          }
        }
      });
    };
    fillChildren(rootNamePath);
    return childrenFields;
  };
  this.triggerOnFieldsChange = function(namePathList, filedErrors) {
    var onFieldsChange = _this.callbacks.onFieldsChange;
    if (onFieldsChange) {
      var fields = _this.getFields();
      if (filedErrors) {
        var cache = new NameMap_default();
        filedErrors.forEach(function(_ref4) {
          var name = _ref4.name,
            errors = _ref4.errors;
          cache.set(name, errors);
        });
        fields.forEach(function(field) {
          field.errors = cache.get(field.name) || field.errors;
        });
      }
      var changedFields = fields.filter(function(_ref5) {
        var fieldName = _ref5.name;
        return containsNamePath(namePathList, fieldName);
      });
      onFieldsChange(changedFields, fields);
    }
  };
  this.validateFields = function(nameList, options) {
    _this.warningUnhooked();
    var provideNameList = !!nameList;
    var namePathList = provideNameList ? nameList.map(getNamePath) : [];
    var promiseList = [];
    _this.getFieldEntities(true).forEach(function(field) {
      if (!provideNameList) {
        namePathList.push(field.getNamePath());
      }
      if ((options === null || options === void 0 ? void 0 : options.recursive) && provideNameList) {
        var namePath = field.getNamePath();
        if (
          namePath.every(function(nameUnit, i) {
            return nameList[i] === nameUnit || nameList[i] === void 0;
          })
        ) {
          namePathList.push(namePath);
        }
      }
      if (!field.props.rules || !field.props.rules.length) {
        return;
      }
      var fieldNamePath = field.getNamePath();
      if (!provideNameList || containsNamePath(namePathList, fieldNamePath)) {
        var promise = field.validateRules(
          _objectSpread5(
            {
              validateMessages: _objectSpread5(_objectSpread5({}, defaultValidateMessages), _this.validateMessages)
            },
            options
          )
        );
        promiseList.push(
          promise
            .then(function() {
              return {
                name: fieldNamePath,
                errors: [],
                warnings: []
              };
            })
            .catch(function(ruleErrors) {
              var _ruleErrors$forEach;
              var mergedErrors = [];
              var mergedWarnings = [];
              (_ruleErrors$forEach = ruleErrors.forEach) === null || _ruleErrors$forEach === void 0
                ? void 0
                : _ruleErrors$forEach.call(ruleErrors, function(_ref6) {
                    var warningOnly = _ref6.rule.warningOnly,
                      errors = _ref6.errors;
                    if (warningOnly) {
                      mergedWarnings.push.apply(mergedWarnings, _toConsumableArray6(errors));
                    } else {
                      mergedErrors.push.apply(mergedErrors, _toConsumableArray6(errors));
                    }
                  });
              if (mergedErrors.length) {
                return Promise.reject({
                  name: fieldNamePath,
                  errors: mergedErrors,
                  warnings: mergedWarnings
                });
              }
              return {
                name: fieldNamePath,
                errors: mergedErrors,
                warnings: mergedWarnings
              };
            })
        );
      }
    });
    var summaryPromise = allPromiseFinish(promiseList);
    _this.lastValidatePromise = summaryPromise;
    summaryPromise
      .catch(function(results) {
        return results;
      })
      .then(function(results) {
        var resultNamePathList = results.map(function(_ref7) {
          var name = _ref7.name;
          return name;
        });
        _this.notifyObservers(_this.store, resultNamePathList, {
          type: 'validateFinish'
        });
        _this.triggerOnFieldsChange(resultNamePathList, results);
      });
    var returnPromise = summaryPromise
      .then(function() {
        if (_this.lastValidatePromise === summaryPromise) {
          return Promise.resolve(_this.getFieldsValue(namePathList));
        }
        return Promise.reject([]);
      })
      .catch(function(results) {
        var errorList = results.filter(function(result) {
          return result && result.errors.length;
        });
        return Promise.reject({
          values: _this.getFieldsValue(namePathList),
          errorFields: errorList,
          outOfDate: _this.lastValidatePromise !== summaryPromise
        });
      });
    returnPromise.catch(function(e) {
      return e;
    });
    return returnPromise;
  };
  this.submit = function() {
    _this.warningUnhooked();
    _this
      .validateFields()
      .then(function(values) {
        var onFinish = _this.callbacks.onFinish;
        if (onFinish) {
          try {
            onFinish(values);
          } catch (err) {
            console.error(err);
          }
        }
      })
      .catch(function(e) {
        var onFinishFailed = _this.callbacks.onFinishFailed;
        if (onFinishFailed) {
          onFinishFailed(e);
        }
      });
  };
  this.forceRootUpdate = forceRootUpdate;
});
function useForm(form) {
  var formRef = React6.useRef();
  var _React$useState = React6.useState({}),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    forceUpdate = _React$useState2[1];
  if (!formRef.current) {
    if (form) {
      formRef.current = form;
    } else {
      var forceReRender = function forceReRender2() {
        forceUpdate({});
      };
      var formStore = new FormStore(forceReRender);
      formRef.current = formStore.getForm();
    }
  }
  return [formRef.current];
}
var useForm_default = useForm;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/Form.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _objectWithoutProperties3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/FormContext.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var FormContext = /* @__PURE__ */ React7.createContext({
  triggerFormChange: function triggerFormChange() {},
  triggerFormFinish: function triggerFormFinish() {},
  registerForm: function registerForm() {},
  unregisterForm: function unregisterForm() {}
});
var FormProvider = function FormProvider2(_ref) {
  var validateMessages = _ref.validateMessages,
    onFormChange = _ref.onFormChange,
    onFormFinish = _ref.onFormFinish,
    children = _ref.children;
  var formContext = React7.useContext(FormContext);
  var formsRef = React7.useRef({});
  return /* @__PURE__ */ React7.createElement(
    FormContext.Provider,
    {
      value: _objectSpread6(
        _objectSpread6({}, formContext),
        {},
        {
          validateMessages: _objectSpread6(_objectSpread6({}, formContext.validateMessages), validateMessages),
          triggerFormChange: function triggerFormChange2(name, changedFields) {
            if (onFormChange) {
              onFormChange(name, {
                changedFields,
                forms: formsRef.current
              });
            }
            formContext.triggerFormChange(name, changedFields);
          },
          triggerFormFinish: function triggerFormFinish2(name, values) {
            if (onFormFinish) {
              onFormFinish(name, {
                values,
                forms: formsRef.current
              });
            }
            formContext.triggerFormFinish(name, values);
          },
          registerForm: function registerForm2(name, form) {
            if (name) {
              formsRef.current = _objectSpread6(
                _objectSpread6({}, formsRef.current),
                {},
                _defineProperty3({}, name, form)
              );
            }
            formContext.registerForm(name, form);
          },
          unregisterForm: function unregisterForm2(name) {
            var newForms = _objectSpread6({}, formsRef.current);
            delete newForms[name];
            formsRef.current = newForms;
            formContext.unregisterForm(name);
          }
        }
      )
    },
    children
  );
};
var FormContext_default = FormContext;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/Form.js
var _excluded3 = [
  'name',
  'initialValues',
  'fields',
  'form',
  'preserve',
  'children',
  'component',
  'validateMessages',
  'validateTrigger',
  'onValuesChange',
  'onFieldsChange',
  'onFinish',
  'onFinishFailed'
];
var Form = function Form2(_ref, ref) {
  var name = _ref.name,
    initialValues = _ref.initialValues,
    fields = _ref.fields,
    form = _ref.form,
    preserve = _ref.preserve,
    children = _ref.children,
    _ref$component = _ref.component,
    Component2 = _ref$component === void 0 ? 'form' : _ref$component,
    validateMessages = _ref.validateMessages,
    _ref$validateTrigger = _ref.validateTrigger,
    validateTrigger = _ref$validateTrigger === void 0 ? 'onChange' : _ref$validateTrigger,
    onValuesChange = _ref.onValuesChange,
    _onFieldsChange = _ref.onFieldsChange,
    _onFinish = _ref.onFinish,
    onFinishFailed = _ref.onFinishFailed,
    restProps = _objectWithoutProperties3(_ref, _excluded3);
  var formContext = React8.useContext(FormContext_default);
  var _useForm = useForm_default(form),
    _useForm2 = _slicedToArray3(_useForm, 1),
    formInstance = _useForm2[0];
  var _formInstance$getInte = formInstance.getInternalHooks(HOOK_MARK),
    useSubscribe = _formInstance$getInte.useSubscribe,
    setInitialValues = _formInstance$getInte.setInitialValues,
    setCallbacks = _formInstance$getInte.setCallbacks,
    setValidateMessages = _formInstance$getInte.setValidateMessages,
    setPreserve = _formInstance$getInte.setPreserve,
    destroyForm = _formInstance$getInte.destroyForm;
  React8.useImperativeHandle(ref, function() {
    return formInstance;
  });
  React8.useEffect(
    function() {
      formContext.registerForm(name, formInstance);
      return function() {
        formContext.unregisterForm(name);
      };
    },
    [formContext, formInstance, name]
  );
  setValidateMessages(_objectSpread7(_objectSpread7({}, formContext.validateMessages), validateMessages));
  setCallbacks({
    onValuesChange,
    onFieldsChange: function onFieldsChange(changedFields) {
      formContext.triggerFormChange(name, changedFields);
      if (_onFieldsChange) {
        for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          rest[_key - 1] = arguments[_key];
        }
        _onFieldsChange.apply(void 0, [changedFields].concat(rest));
      }
    },
    onFinish: function onFinish(values2) {
      formContext.triggerFormFinish(name, values2);
      if (_onFinish) {
        _onFinish(values2);
      }
    },
    onFinishFailed
  });
  setPreserve(preserve);
  var mountRef = React8.useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }
  React8.useEffect(function() {
    return destroyForm;
  }, []);
  var childrenNode;
  var childrenRenderProps = typeof children === 'function';
  if (childrenRenderProps) {
    var values = formInstance.getFieldsValue(true);
    childrenNode = children(values, formInstance);
  } else {
    childrenNode = children;
  }
  useSubscribe(!childrenRenderProps);
  var prevFieldsRef = React8.useRef();
  React8.useEffect(
    function() {
      if (!isSimilar(prevFieldsRef.current || [], fields || [])) {
        formInstance.setFields(fields || []);
      }
      prevFieldsRef.current = fields;
    },
    [fields, formInstance]
  );
  var formContextValue = React8.useMemo(
    function() {
      return _objectSpread7(
        _objectSpread7({}, formInstance),
        {},
        {
          validateTrigger
        }
      );
    },
    [formInstance, validateTrigger]
  );
  var wrapperNode = /* @__PURE__ */ React8.createElement(
    FieldContext_default.Provider,
    {
      value: formContextValue
    },
    childrenNode
  );
  if (Component2 === false) {
    return wrapperNode;
  }
  return /* @__PURE__ */ React8.createElement(
    Component2,
    _extends2({}, restProps, {
      onSubmit: function onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      },
      onReset: function onReset(event) {
        var _restProps$onReset;
        event.preventDefault();
        formInstance.resetFields();
        (_restProps$onReset = restProps.onReset) === null || _restProps$onReset === void 0
          ? void 0
          : _restProps$onReset.call(restProps, event);
      }
    }),
    wrapperNode
  );
};
var Form_default = Form;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/useWatch.js
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import warning6 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import {
  useState as useState2,
  useContext as useContext5,
  useEffect as useEffect2,
  useRef as useRef5,
  useMemo as useMemo3
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function stringify(value) {
  try {
    return JSON.stringify(value);
  } catch (err) {
    return Math.random();
  }
}
function useWatch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _args$ = args[0],
    dependencies = _args$ === void 0 ? [] : _args$,
    form = args[1];
  var _useState = useState2(),
    _useState2 = _slicedToArray4(_useState, 2),
    value = _useState2[0],
    setValue2 = _useState2[1];
  var valueStr = useMemo3(
    function() {
      return stringify(value);
    },
    [value]
  );
  var valueStrRef = useRef5(valueStr);
  valueStrRef.current = valueStr;
  var fieldContext = useContext5(FieldContext_default);
  var formInstance = form || fieldContext;
  var isValidForm = formInstance && formInstance._init;
  if (true) {
    warning6(
      args.length === 2 ? (form ? isValidForm : true) : isValidForm,
      'useWatch requires a form instance since it can not auto detect from context.'
    );
  }
  var namePath = getNamePath(dependencies);
  var namePathRef = useRef5(namePath);
  namePathRef.current = namePath;
  useEffect2(
    function() {
      if (!isValidForm) {
        return;
      }
      var getFieldsValue = formInstance.getFieldsValue,
        getInternalHooks2 = formInstance.getInternalHooks;
      var _getInternalHooks = getInternalHooks2(HOOK_MARK),
        registerWatch = _getInternalHooks.registerWatch;
      var cancelRegister = registerWatch(function(store) {
        var newValue = getValue(store, namePathRef.current);
        var nextValueStr = stringify(newValue);
        if (valueStrRef.current !== nextValueStr) {
          valueStrRef.current = nextValueStr;
          setValue2(newValue);
        }
      });
      var initialValue = getValue(getFieldsValue(), namePathRef.current);
      setValue2(initialValue);
      return cancelRegister;
    },
    [isValidForm]
  );
  return value;
}
var useWatch_default = useWatch;

// esm-build-bdf15616a9acedb4d49586e0fc2b70595a0b0b86-949c784b/node_modules/rc-field-form/es/index.js
var InternalForm = /* @__PURE__ */ React9.forwardRef(Form_default);
var RefForm = InternalForm;
RefForm.FormProvider = FormProvider;
RefForm.Field = Field_default;
RefForm.List = List_default;
RefForm.useForm = useForm_default;
RefForm.useWatch = useWatch_default;
var es_default = RefForm;
export {
  Field_default as Field,
  FieldContext_default as FieldContext,
  FormProvider,
  List_default as List,
  ListContext_default as ListContext,
  es_default as default,
  useForm_default as useForm,
  useWatch_default as useWatch
};
