/* esm.sh - esbuild bundle(rc-picker@3.1.2) es2022 development */
// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/Picker.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _extends20 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty11 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React33 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames9 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import warning4 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import useMergedState2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/PickerPanel.js
import _defineProperty9 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _extends19 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _slicedToArray4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React28 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames7 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode3 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import warning from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import useMergedState from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/index.js
import _extends4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React10 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames3 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/TimeHeader.js
import * as React7 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/Header.js
import * as React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/PanelContext.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var PanelContext = /* @__PURE__ */ React.createContext({});
var PanelContext_default = PanelContext;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/Header.js
var HIDDEN_STYLE = {
  visibility: 'hidden'
};
function Header(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$prevIcon = _ref.prevIcon,
    prevIcon = _ref$prevIcon === void 0 ? '\u2039' : _ref$prevIcon,
    _ref$nextIcon = _ref.nextIcon,
    nextIcon = _ref$nextIcon === void 0 ? '\u203A' : _ref$nextIcon,
    _ref$superPrevIcon = _ref.superPrevIcon,
    superPrevIcon = _ref$superPrevIcon === void 0 ? '\xAB' : _ref$superPrevIcon,
    _ref$superNextIcon = _ref.superNextIcon,
    superNextIcon = _ref$superNextIcon === void 0 ? '\xBB' : _ref$superNextIcon,
    onSuperPrev = _ref.onSuperPrev,
    onSuperNext = _ref.onSuperNext,
    onPrev = _ref.onPrev,
    onNext = _ref.onNext,
    children = _ref.children;
  var _React$useContext = React2.useContext(PanelContext_default),
    hideNextBtn = _React$useContext.hideNextBtn,
    hidePrevBtn = _React$useContext.hidePrevBtn;
  return /* @__PURE__ */ React2.createElement(
    'div',
    {
      className: prefixCls
    },
    onSuperPrev &&
      /* @__PURE__ */ React2.createElement(
        'button',
        {
          type: 'button',
          onClick: onSuperPrev,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-super-prev-btn'),
          style: hidePrevBtn ? HIDDEN_STYLE : {}
        },
        superPrevIcon
      ),
    onPrev &&
      /* @__PURE__ */ React2.createElement(
        'button',
        {
          type: 'button',
          onClick: onPrev,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-prev-btn'),
          style: hidePrevBtn ? HIDDEN_STYLE : {}
        },
        prevIcon
      ),
    /* @__PURE__ */ React2.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-view')
      },
      children
    ),
    onNext &&
      /* @__PURE__ */ React2.createElement(
        'button',
        {
          type: 'button',
          onClick: onNext,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-next-btn'),
          style: hideNextBtn ? HIDDEN_STYLE : {}
        },
        nextIcon
      ),
    onSuperNext &&
      /* @__PURE__ */ React2.createElement(
        'button',
        {
          type: 'button',
          onClick: onSuperNext,
          tabIndex: -1,
          className: ''.concat(prefixCls, '-super-next-btn'),
          style: hideNextBtn ? HIDDEN_STYLE : {}
        },
        superNextIcon
      )
  );
}
var Header_default = Header;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DecadePanel/index.js
import _extends3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React6 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DecadePanel/DecadeHeader.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React3 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function DecadeHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecades = props.onPrevDecades,
    onNextDecades = props.onNextDecades;
  var _React$useContext = React3.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endYear = startYear + DECADE_DISTANCE_COUNT - 1;
  return /* @__PURE__ */ React3.createElement(
    Header_default,
    _extends({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevDecades,
      onSuperNext: onNextDecades
    }),
    startYear,
    '-',
    endYear
  );
}
var DecadeHeader_default = DecadeHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DecadePanel/DecadeBody.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React5 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/PanelBody.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React4 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/timeUtil.js
function setTime(generateConfig, date, hour, minute, second) {
  var nextTime = generateConfig.setHour(date, hour);
  nextTime = generateConfig.setMinute(nextTime, minute);
  nextTime = generateConfig.setSecond(nextTime, second);
  return nextTime;
}
function setDateTime(generateConfig, date, defaultDate) {
  if (!defaultDate) {
    return date;
  }
  var newDate = date;
  newDate = generateConfig.setHour(newDate, generateConfig.getHour(defaultDate));
  newDate = generateConfig.setMinute(newDate, generateConfig.getMinute(defaultDate));
  newDate = generateConfig.setSecond(newDate, generateConfig.getSecond(defaultDate));
  return newDate;
}
function getLowerBoundTime(hour, minute, second, hourStep, minuteStep, secondStep) {
  var lowerBoundHour = Math.floor(hour / hourStep) * hourStep;
  if (lowerBoundHour < hour) {
    return [lowerBoundHour, 60 - minuteStep, 60 - secondStep];
  }
  var lowerBoundMinute = Math.floor(minute / minuteStep) * minuteStep;
  if (lowerBoundMinute < minute) {
    return [lowerBoundHour, lowerBoundMinute, 60 - secondStep];
  }
  var lowerBoundSecond = Math.floor(second / secondStep) * secondStep;
  return [lowerBoundHour, lowerBoundMinute, lowerBoundSecond];
}
function getLastDay(generateConfig, date) {
  var year = generateConfig.getYear(date);
  var month = generateConfig.getMonth(date) + 1;
  var endDate = generateConfig.getEndDate(generateConfig.getFixedDate(''.concat(year, '-').concat(month, '-01')));
  var lastDay = generateConfig.getDate(endDate);
  var monthShow = month < 10 ? '0'.concat(month) : ''.concat(month);
  return ''
    .concat(year, '-')
    .concat(monthShow, '-')
    .concat(lastDay);
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/PanelBody.js
function PanelBody(_ref) {
  var prefixCls = _ref.prefixCls,
    disabledDate = _ref.disabledDate,
    onSelect = _ref.onSelect,
    picker = _ref.picker,
    rowNum = _ref.rowNum,
    colNum = _ref.colNum,
    prefixColumn = _ref.prefixColumn,
    rowClassName = _ref.rowClassName,
    baseDate = _ref.baseDate,
    getCellClassName = _ref.getCellClassName,
    getCellText = _ref.getCellText,
    getCellNode = _ref.getCellNode,
    getCellDate = _ref.getCellDate,
    generateConfig = _ref.generateConfig,
    titleCell = _ref.titleCell,
    headerCells = _ref.headerCells;
  var _React$useContext = React4.useContext(PanelContext_default),
    onDateMouseEnter = _React$useContext.onDateMouseEnter,
    onDateMouseLeave = _React$useContext.onDateMouseLeave,
    mode = _React$useContext.mode;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var rows = [];
  for (var i = 0; i < rowNum; i += 1) {
    var row = [];
    var rowStartDate = void 0;
    var _loop = function _loop2(j2) {
      var _objectSpread22;
      var offset = i * colNum + j2;
      var currentDate = getCellDate(baseDate, offset);
      var disabled = getCellDateDisabled({
        cellDate: currentDate,
        mode,
        disabledDate,
        generateConfig
      });
      if (j2 === 0) {
        rowStartDate = currentDate;
        if (prefixColumn) {
          row.push(prefixColumn(rowStartDate));
        }
      }
      var title = titleCell && titleCell(currentDate);
      row.push(
        /* @__PURE__ */ React4.createElement(
          'td',
          {
            key: j2,
            title,
            className: classNames(
              cellPrefixCls,
              _objectSpread(
                ((_objectSpread22 = {}),
                _defineProperty(_objectSpread22, ''.concat(cellPrefixCls, '-disabled'), disabled),
                _defineProperty(
                  _objectSpread22,
                  ''.concat(cellPrefixCls, '-start'),
                  getCellText(currentDate) === 1 || (picker === 'year' && Number(title) % 10 === 0)
                ),
                _defineProperty(
                  _objectSpread22,
                  ''.concat(cellPrefixCls, '-end'),
                  title === getLastDay(generateConfig, currentDate) || (picker === 'year' && Number(title) % 10 === 9)
                ),
                _objectSpread22),
                getCellClassName(currentDate)
              )
            ),
            onClick: function onClick() {
              if (!disabled) {
                onSelect(currentDate);
              }
            },
            onMouseEnter: function onMouseEnter() {
              if (!disabled && onDateMouseEnter) {
                onDateMouseEnter(currentDate);
              }
            },
            onMouseLeave: function onMouseLeave() {
              if (!disabled && onDateMouseLeave) {
                onDateMouseLeave(currentDate);
              }
            }
          },
          getCellNode
            ? getCellNode(currentDate)
            : /* @__PURE__ */ React4.createElement(
                'div',
                {
                  className: ''.concat(cellPrefixCls, '-inner')
                },
                getCellText(currentDate)
              )
        )
      );
    };
    for (var j = 0; j < colNum; j += 1) {
      _loop(j);
    }
    rows.push(
      /* @__PURE__ */ React4.createElement(
        'tr',
        {
          key: i,
          className: rowClassName && rowClassName(rowStartDate)
        },
        row
      )
    );
  }
  return /* @__PURE__ */ React4.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-body')
    },
    /* @__PURE__ */ React4.createElement(
      'table',
      {
        className: ''.concat(prefixCls, '-content')
      },
      headerCells &&
        /* @__PURE__ */ React4.createElement(
          'thead',
          null,
          /* @__PURE__ */ React4.createElement('tr', null, headerCells)
        ),
      /* @__PURE__ */ React4.createElement('tbody', null, rows)
    )
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DecadePanel/DecadeBody.js
var DECADE_COL_COUNT = 3;
var DECADE_ROW_COUNT = 4;
function DecadeBody(props) {
  var DECADE_UNIT_DIFF_DES = DECADE_UNIT_DIFF - 1;
  var prefixCls = props.prefixCls,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var yearNumber = generateConfig.getYear(viewDate);
  var decadeYearNumber = Math.floor(yearNumber / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
  var startDecadeYear = Math.floor(yearNumber / DECADE_DISTANCE_COUNT) * DECADE_DISTANCE_COUNT;
  var endDecadeYear = startDecadeYear + DECADE_DISTANCE_COUNT - 1;
  var baseDecadeYear = generateConfig.setYear(
    viewDate,
    startDecadeYear - Math.ceil((DECADE_COL_COUNT * DECADE_ROW_COUNT * DECADE_UNIT_DIFF - DECADE_DISTANCE_COUNT) / 2)
  );
  var getCellClassName = function getCellClassName2(date) {
    var _ref;
    var startDecadeNumber = generateConfig.getYear(date);
    var endDecadeNumber = startDecadeNumber + DECADE_UNIT_DIFF_DES;
    return (
      (_ref = {}),
      _defineProperty2(
        _ref,
        ''.concat(cellPrefixCls, '-in-view'),
        startDecadeYear <= startDecadeNumber && endDecadeNumber <= endDecadeYear
      ),
      _defineProperty2(_ref, ''.concat(cellPrefixCls, '-selected'), startDecadeNumber === decadeYearNumber),
      _ref
    );
  };
  return /* @__PURE__ */ React5.createElement(
    PanelBody,
    _extends2({}, props, {
      rowNum: DECADE_ROW_COUNT,
      colNum: DECADE_COL_COUNT,
      baseDate: baseDecadeYear,
      getCellText: function getCellText(date) {
        var startDecadeNumber = generateConfig.getYear(date);
        return ''.concat(startDecadeNumber, '-').concat(startDecadeNumber + DECADE_UNIT_DIFF_DES);
      },
      getCellClassName,
      getCellDate: function getCellDate(date, offset) {
        return generateConfig.addYear(date, offset * DECADE_UNIT_DIFF);
      }
    })
  );
}
var DecadeBody_default = DecadeBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/uiUtil.js
import _toConsumableArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/toConsumableArray.development.js';
import KeyCode from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
import raf from '/cdn/v99/rc-util@5.24.6/es2022/es/raf.development.js';
import isVisible from '/cdn/v99/rc-util@5.24.6/es2022/es/Dom/isVisible.development.js';
var scrollIds = /* @__PURE__ */ new Map();
function waitElementReady(element, callback) {
  var id;
  function tryOrNextFrame() {
    if (isVisible(element)) {
      callback();
    } else {
      id = raf(function() {
        tryOrNextFrame();
      });
    }
  }
  tryOrNextFrame();
  return function() {
    raf.cancel(id);
  };
}
function scrollTo(element, to, duration) {
  if (scrollIds.get(element)) {
    cancelAnimationFrame(scrollIds.get(element));
  }
  if (duration <= 0) {
    scrollIds.set(
      element,
      requestAnimationFrame(function() {
        element.scrollTop = to;
      })
    );
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = (difference / duration) * 10;
  scrollIds.set(
    element,
    requestAnimationFrame(function() {
      element.scrollTop += perTick;
      if (element.scrollTop !== to) {
        scrollTo(element, to, duration - 10);
      }
    })
  );
}
function createKeyDownHandler(event, _ref) {
  var onLeftRight = _ref.onLeftRight,
    onCtrlLeftRight = _ref.onCtrlLeftRight,
    onUpDown = _ref.onUpDown,
    onPageUpDown = _ref.onPageUpDown,
    onEnter = _ref.onEnter;
  var which = event.which,
    ctrlKey = event.ctrlKey,
    metaKey = event.metaKey;
  switch (which) {
    case KeyCode.LEFT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(-1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(-1);
        return true;
      }
      break;
    case KeyCode.RIGHT:
      if (ctrlKey || metaKey) {
        if (onCtrlLeftRight) {
          onCtrlLeftRight(1);
          return true;
        }
      } else if (onLeftRight) {
        onLeftRight(1);
        return true;
      }
      break;
    case KeyCode.UP:
      if (onUpDown) {
        onUpDown(-1);
        return true;
      }
      break;
    case KeyCode.DOWN:
      if (onUpDown) {
        onUpDown(1);
        return true;
      }
      break;
    case KeyCode.PAGE_UP:
      if (onPageUpDown) {
        onPageUpDown(-1);
        return true;
      }
      break;
    case KeyCode.PAGE_DOWN:
      if (onPageUpDown) {
        onPageUpDown(1);
        return true;
      }
      break;
    case KeyCode.ENTER:
      if (onEnter) {
        onEnter();
        return true;
      }
      break;
  }
  return false;
}
function getDefaultFormat(format, picker, showTime, use12Hours) {
  var mergedFormat = format;
  if (!mergedFormat) {
    switch (picker) {
      case 'time':
        mergedFormat = use12Hours ? 'hh:mm:ss a' : 'HH:mm:ss';
        break;
      case 'week':
        mergedFormat = 'gggg-wo';
        break;
      case 'month':
        mergedFormat = 'YYYY-MM';
        break;
      case 'quarter':
        mergedFormat = 'YYYY-[Q]Q';
        break;
      case 'year':
        mergedFormat = 'YYYY';
        break;
      default:
        mergedFormat = showTime ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
    }
  }
  return mergedFormat;
}
function getInputSize(picker, format, generateConfig) {
  var defaultSize = picker === 'time' ? 8 : 10;
  var length = typeof format === 'function' ? format(generateConfig.getNow()).length : format.length;
  return Math.max(defaultSize, length) + 2;
}
var globalClickFunc = null;
var clickCallbacks = /* @__PURE__ */ new Set();
function addGlobalMouseDownEvent(callback) {
  if (!globalClickFunc && typeof window !== 'undefined' && window.addEventListener) {
    globalClickFunc = function globalClickFunc2(e) {
      _toConsumableArray(clickCallbacks).forEach(function(queueFunc) {
        queueFunc(e);
      });
    };
    window.addEventListener('mousedown', globalClickFunc);
  }
  clickCallbacks.add(callback);
  return function() {
    clickCallbacks.delete(callback);
    if (clickCallbacks.size === 0) {
      window.removeEventListener('mousedown', globalClickFunc);
      globalClickFunc = null;
    }
  };
}
function getTargetFromEvent(e) {
  var target = e.target;
  if (e.composed && target.shadowRoot) {
    var _e$composedPath;
    return (
      ((_e$composedPath = e.composedPath) === null || _e$composedPath === void 0
        ? void 0
        : _e$composedPath.call(e)[0]) || target
    );
  }
  return target;
}
var getYearNextMode = function getYearNextMode2(next) {
  if (next === 'month' || next === 'date') {
    return 'year';
  }
  return next;
};
var getMonthNextMode = function getMonthNextMode2(next) {
  if (next === 'date') {
    return 'month';
  }
  return next;
};
var getQuarterNextMode = function getQuarterNextMode2(next) {
  if (next === 'month' || next === 'date') {
    return 'quarter';
  }
  return next;
};
var getWeekNextMode = function getWeekNextMode2(next) {
  if (next === 'date') {
    return 'week';
  }
  return next;
};
var PickerModeMap = {
  year: getYearNextMode,
  month: getMonthNextMode,
  quarter: getQuarterNextMode,
  week: getWeekNextMode,
  time: null,
  date: null
};
function elementsContains(elements, target) {
  return elements.some(function(ele) {
    return ele && ele.contains(target);
  });
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DecadePanel/index.js
var DECADE_UNIT_DIFF = 10;
var DECADE_DISTANCE_COUNT = DECADE_UNIT_DIFF * 10;
function DecadePanel(props) {
  var prefixCls = props.prefixCls,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    operationRef = props.operationRef,
    onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = ''.concat(prefixCls, '-decade-panel');
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          onSelect(generateConfig.addYear(viewDate, diff * DECADE_UNIT_DIFF * DECADE_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('year', viewDate);
        }
      });
    }
  };
  var onDecadesChange = function onDecadesChange2(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * DECADE_DISTANCE_COUNT);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onInternalSelect = function onInternalSelect2(date) {
    onSelect(date, 'mouse');
    onPanelChange('year', date);
  };
  return /* @__PURE__ */ React6.createElement(
    'div',
    {
      className: panelPrefixCls
    },
    /* @__PURE__ */ React6.createElement(
      DecadeHeader_default,
      _extends3({}, props, {
        prefixCls,
        onPrevDecades: function onPrevDecades() {
          onDecadesChange(-1);
        },
        onNextDecades: function onNextDecades() {
          onDecadesChange(1);
        }
      })
    ),
    /* @__PURE__ */ React6.createElement(
      DecadeBody_default,
      _extends3({}, props, {
        prefixCls,
        onSelect: onInternalSelect
      })
    )
  );
}
var DecadePanel_default = DecadePanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/dateUtil.js
var WEEK_DAY_COUNT = 7;
function isNullEqual(value1, value2) {
  if (!value1 && !value2) {
    return true;
  }
  if (!value1 || !value2) {
    return false;
  }
  return void 0;
}
function isSameDecade(generateConfig, decade1, decade2) {
  var equal = isNullEqual(decade1, decade2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  var num1 = Math.floor(generateConfig.getYear(decade1) / 10);
  var num2 = Math.floor(generateConfig.getYear(decade2) / 10);
  return num1 === num2;
}
function isSameYear(generateConfig, year1, year2) {
  var equal = isNullEqual(year1, year2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return generateConfig.getYear(year1) === generateConfig.getYear(year2);
}
function getQuarter(generateConfig, date) {
  var quota = Math.floor(generateConfig.getMonth(date) / 3);
  return quota + 1;
}
function isSameQuarter(generateConfig, quarter1, quarter2) {
  var equal = isNullEqual(quarter1, quarter2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return (
    isSameYear(generateConfig, quarter1, quarter2) &&
    getQuarter(generateConfig, quarter1) === getQuarter(generateConfig, quarter2)
  );
}
function isSameMonth(generateConfig, month1, month2) {
  var equal = isNullEqual(month1, month2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return (
    isSameYear(generateConfig, month1, month2) && generateConfig.getMonth(month1) === generateConfig.getMonth(month2)
  );
}
function isSameDate(generateConfig, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return (
    generateConfig.getYear(date1) === generateConfig.getYear(date2) &&
    generateConfig.getMonth(date1) === generateConfig.getMonth(date2) &&
    generateConfig.getDate(date1) === generateConfig.getDate(date2)
  );
}
function isSameTime(generateConfig, time1, time2) {
  var equal = isNullEqual(time1, time2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return (
    generateConfig.getHour(time1) === generateConfig.getHour(time2) &&
    generateConfig.getMinute(time1) === generateConfig.getMinute(time2) &&
    generateConfig.getSecond(time1) === generateConfig.getSecond(time2)
  );
}
function isSameWeek(generateConfig, locale, date1, date2) {
  var equal = isNullEqual(date1, date2);
  if (typeof equal === 'boolean') {
    return equal;
  }
  return generateConfig.locale.getWeek(locale, date1) === generateConfig.locale.getWeek(locale, date2);
}
function isEqual(generateConfig, value1, value2) {
  return isSameDate(generateConfig, value1, value2) && isSameTime(generateConfig, value1, value2);
}
function isInRange(generateConfig, startDate, endDate, current) {
  if (!startDate || !endDate || !current) {
    return false;
  }
  return (
    !isSameDate(generateConfig, startDate, current) &&
    !isSameDate(generateConfig, endDate, current) &&
    generateConfig.isAfter(current, startDate) &&
    generateConfig.isAfter(endDate, current)
  );
}
function getWeekStartDate(locale, generateConfig, value) {
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale);
  var monthStartDate = generateConfig.setDate(value, 1);
  var startDateWeekDay = generateConfig.getWeekDay(monthStartDate);
  var alignStartDate = generateConfig.addDate(monthStartDate, weekFirstDay - startDateWeekDay);
  if (
    generateConfig.getMonth(alignStartDate) === generateConfig.getMonth(value) &&
    generateConfig.getDate(alignStartDate) > 1
  ) {
    alignStartDate = generateConfig.addDate(alignStartDate, -7);
  }
  return alignStartDate;
}
function getClosingViewDate(viewDate, picker, generateConfig) {
  var offset = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  switch (picker) {
    case 'year':
      return generateConfig.addYear(viewDate, offset * 10);
    case 'quarter':
    case 'month':
      return generateConfig.addYear(viewDate, offset);
    default:
      return generateConfig.addMonth(viewDate, offset);
  }
}
function formatValue(value, _ref) {
  var generateConfig = _ref.generateConfig,
    locale = _ref.locale,
    format = _ref.format;
  return typeof format === 'function' ? format(value) : generateConfig.locale.format(locale.locale, value, format);
}
function parseValue(value, _ref2) {
  var generateConfig = _ref2.generateConfig,
    locale = _ref2.locale,
    formatList = _ref2.formatList;
  if (!value || typeof formatList[0] === 'function') {
    return null;
  }
  return generateConfig.locale.parse(locale.locale, value, formatList);
}
function getCellDateDisabled(_ref3) {
  var cellDate = _ref3.cellDate,
    mode = _ref3.mode,
    disabledDate = _ref3.disabledDate,
    generateConfig = _ref3.generateConfig;
  if (!disabledDate) return false;
  var getDisabledFromRange = function getDisabledFromRange2(currentMode, start, end) {
    var current = start;
    while (current <= end) {
      var _date = void 0;
      switch (currentMode) {
        case 'date': {
          _date = generateConfig.setDate(cellDate, current);
          if (!disabledDate(_date)) {
            return false;
          }
          break;
        }
        case 'month': {
          _date = generateConfig.setMonth(cellDate, current);
          if (
            !getCellDateDisabled({
              cellDate: _date,
              mode: 'month',
              generateConfig,
              disabledDate
            })
          ) {
            return false;
          }
          break;
        }
        case 'year': {
          _date = generateConfig.setYear(cellDate, current);
          if (
            !getCellDateDisabled({
              cellDate: _date,
              mode: 'year',
              generateConfig,
              disabledDate
            })
          ) {
            return false;
          }
          break;
        }
      }
      current += 1;
    }
    return true;
  };
  switch (mode) {
    case 'date':
    case 'week': {
      return disabledDate(cellDate);
    }
    case 'month': {
      var startDate = 1;
      var endDate = generateConfig.getDate(generateConfig.getEndDate(cellDate));
      return getDisabledFromRange('date', startDate, endDate);
    }
    case 'quarter': {
      var startMonth = Math.floor(generateConfig.getMonth(cellDate) / 3) * 3;
      var endMonth = startMonth + 2;
      return getDisabledFromRange('month', startMonth, endMonth);
    }
    case 'year': {
      return getDisabledFromRange('month', 0, 11);
    }
    case 'decade': {
      var year = generateConfig.getYear(cellDate);
      var startYear = Math.floor(year / DECADE_UNIT_DIFF) * DECADE_UNIT_DIFF;
      var endYear = startYear + DECADE_UNIT_DIFF - 1;
      return getDisabledFromRange('year', startYear, endYear);
    }
  }
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/TimeHeader.js
function TimeHeader(props) {
  var _React$useContext = React7.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value,
    format = props.format;
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /* @__PURE__ */ React7.createElement(
    Header_default,
    {
      prefixCls: headerPrefixCls
    },
    value
      ? formatValue(value, {
          locale,
          format,
          generateConfig
        })
      : '\xA0'
  );
}
var TimeHeader_default = TimeHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/TimeBody.js
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React9 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import useMemo2 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/TimeUnitColumn.js
import _defineProperty3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React8 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useRef, useLayoutEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function TimeUnitColumn(props) {
  var prefixCls = props.prefixCls,
    units = props.units,
    onSelect = props.onSelect,
    value = props.value,
    active = props.active,
    hideDisabledOptions = props.hideDisabledOptions;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var _React$useContext = React8.useContext(PanelContext_default),
    open = _React$useContext.open;
  var ulRef = useRef(null);
  var liRefs = useRef(/* @__PURE__ */ new Map());
  var scrollRef = useRef();
  useLayoutEffect(
    function() {
      var li = liRefs.current.get(value);
      if (li && open !== false) {
        scrollTo(ulRef.current, li.offsetTop, 120);
      }
    },
    [value]
  );
  useLayoutEffect(
    function() {
      if (open) {
        var li = liRefs.current.get(value);
        if (li) {
          scrollRef.current = waitElementReady(li, function() {
            scrollTo(ulRef.current, li.offsetTop, 0);
          });
        }
      }
      return function() {
        var _scrollRef$current;
        (_scrollRef$current = scrollRef.current) === null || _scrollRef$current === void 0
          ? void 0
          : _scrollRef$current.call(scrollRef);
      };
    },
    [open]
  );
  return /* @__PURE__ */ React8.createElement(
    'ul',
    {
      className: classNames2(
        ''.concat(prefixCls, '-column'),
        _defineProperty3({}, ''.concat(prefixCls, '-column-active'), active)
      ),
      ref: ulRef,
      style: {
        position: 'relative'
      }
    },
    units.map(function(unit) {
      var _classNames2;
      if (hideDisabledOptions && unit.disabled) {
        return null;
      }
      return /* @__PURE__ */ React8.createElement(
        'li',
        {
          key: unit.value,
          ref: function ref(element) {
            liRefs.current.set(unit.value, element);
          },
          className: classNames2(
            cellPrefixCls,
            ((_classNames2 = {}),
            _defineProperty3(_classNames2, ''.concat(cellPrefixCls, '-disabled'), unit.disabled),
            _defineProperty3(_classNames2, ''.concat(cellPrefixCls, '-selected'), value === unit.value),
            _classNames2)
          ),
          onClick: function onClick() {
            if (unit.disabled) {
              return;
            }
            onSelect(unit.value);
          }
        },
        /* @__PURE__ */ React8.createElement(
          'div',
          {
            className: ''.concat(cellPrefixCls, '-inner')
          },
          unit.label
        )
      );
    })
  );
}
var TimeUnitColumn_default = TimeUnitColumn;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/miscUtil.js
function leftPad(str, length) {
  var fill = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0';
  var current = String(str);
  while (current.length < length) {
    current = ''.concat(fill).concat(str);
  }
  return current;
}
var tuple = function tuple2() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args;
};
function toArray(val) {
  if (val === null || val === void 0) {
    return [];
  }
  return Array.isArray(val) ? val : [val];
}
function getDataOrAriaProps(props) {
  var retProps = {};
  Object.keys(props).forEach(function(key) {
    if (
      (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role' || key === 'name') &&
      key.substr(0, 7) !== 'data-__'
    ) {
      retProps[key] = props[key];
    }
  });
  return retProps;
}
function getValue(values, index) {
  return values ? values[index] : null;
}
function updateValues(values, value, index) {
  var newValues = [getValue(values, 0), getValue(values, 1)];
  newValues[index] = typeof value === 'function' ? value(newValues[index]) : value;
  if (!newValues[0] && !newValues[1]) {
    return null;
  }
  return newValues;
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/TimeBody.js
function shouldUnitsUpdate(prevUnits, nextUnits) {
  if (prevUnits.length !== nextUnits.length) return true;
  for (var i = 0; i < prevUnits.length; i += 1) {
    if (prevUnits[i].disabled !== nextUnits[i].disabled) return true;
  }
  return false;
}
function generateUnits(start, end, step, disabledUnits) {
  var units = [];
  for (var i = start; i <= end; i += step) {
    units.push({
      label: leftPad(i, 2),
      value: i,
      disabled: (disabledUnits || []).includes(i)
    });
  }
  return units;
}
function TimeBody(props) {
  var generateConfig = props.generateConfig,
    prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    activeColumnIndex = props.activeColumnIndex,
    value = props.value,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    use12Hours = props.use12Hours,
    _props$hourStep = props.hourStep,
    hourStep = _props$hourStep === void 0 ? 1 : _props$hourStep,
    _props$minuteStep = props.minuteStep,
    minuteStep = _props$minuteStep === void 0 ? 1 : _props$minuteStep,
    _props$secondStep = props.secondStep,
    secondStep = _props$secondStep === void 0 ? 1 : _props$secondStep,
    disabledHours = props.disabledHours,
    disabledMinutes = props.disabledMinutes,
    disabledSeconds = props.disabledSeconds,
    disabledTime = props.disabledTime,
    hideDisabledOptions = props.hideDisabledOptions,
    onSelect = props.onSelect;
  var columns = [];
  var contentPrefixCls = ''.concat(prefixCls, '-content');
  var columnPrefixCls = ''.concat(prefixCls, '-time-panel');
  var isPM;
  var originHour = value ? generateConfig.getHour(value) : -1;
  var hour = originHour;
  var minute = value ? generateConfig.getMinute(value) : -1;
  var second = value ? generateConfig.getSecond(value) : -1;
  var now = generateConfig.getNow();
  var _React$useMemo = React9.useMemo(
      function() {
        if (disabledTime) {
          var disabledConfig = disabledTime(now);
          return [disabledConfig.disabledHours, disabledConfig.disabledMinutes, disabledConfig.disabledSeconds];
        }
        return [disabledHours, disabledMinutes, disabledSeconds];
      },
      [disabledHours, disabledMinutes, disabledSeconds, disabledTime, now]
    ),
    _React$useMemo2 = _slicedToArray(_React$useMemo, 3),
    mergedDisabledHours = _React$useMemo2[0],
    mergedDisabledMinutes = _React$useMemo2[1],
    mergedDisabledSeconds = _React$useMemo2[2];
  var setTime2 = function setTime3(isNewPM, newHour, newMinute, newSecond) {
    var newDate = value || generateConfig.getNow();
    var mergedHour = Math.max(0, newHour);
    var mergedMinute = Math.max(0, newMinute);
    var mergedSecond = Math.max(0, newSecond);
    newDate = setTime(
      generateConfig,
      newDate,
      !use12Hours || !isNewPM ? mergedHour : mergedHour + 12,
      mergedMinute,
      mergedSecond
    );
    return newDate;
  };
  var rawHours = generateUnits(0, 23, hourStep, mergedDisabledHours && mergedDisabledHours());
  var memorizedRawHours = useMemo2(
    function() {
      return rawHours;
    },
    rawHours,
    shouldUnitsUpdate
  );
  if (use12Hours) {
    isPM = hour >= 12;
    hour %= 12;
  }
  var _React$useMemo3 = React9.useMemo(
      function() {
        if (!use12Hours) {
          return [false, false];
        }
        var AMPMDisabled = [true, true];
        memorizedRawHours.forEach(function(_ref) {
          var disabled = _ref.disabled,
            hourValue = _ref.value;
          if (disabled) return;
          if (hourValue >= 12) {
            AMPMDisabled[1] = false;
          } else {
            AMPMDisabled[0] = false;
          }
        });
        return AMPMDisabled;
      },
      [use12Hours, memorizedRawHours]
    ),
    _React$useMemo4 = _slicedToArray(_React$useMemo3, 2),
    AMDisabled = _React$useMemo4[0],
    PMDisabled = _React$useMemo4[1];
  var hours = React9.useMemo(
    function() {
      if (!use12Hours) return memorizedRawHours;
      return memorizedRawHours
        .filter(
          isPM
            ? function(hourMeta) {
                return hourMeta.value >= 12;
              }
            : function(hourMeta) {
                return hourMeta.value < 12;
              }
        )
        .map(function(hourMeta) {
          var hourValue = hourMeta.value % 12;
          var hourLabel = hourValue === 0 ? '12' : leftPad(hourValue, 2);
          return _objectSpread2(
            _objectSpread2({}, hourMeta),
            {},
            {
              label: hourLabel,
              value: hourValue
            }
          );
        });
    },
    [use12Hours, isPM, memorizedRawHours]
  );
  var minutes = generateUnits(0, 59, minuteStep, mergedDisabledMinutes && mergedDisabledMinutes(originHour));
  var seconds = generateUnits(0, 59, secondStep, mergedDisabledSeconds && mergedDisabledSeconds(originHour, minute));
  operationRef.current = {
    onUpDown: function onUpDown(diff) {
      var column = columns[activeColumnIndex];
      if (column) {
        var valueIndex = column.units.findIndex(function(unit) {
          return unit.value === column.value;
        });
        var unitLen = column.units.length;
        for (var i = 1; i < unitLen; i += 1) {
          var nextUnit = column.units[(valueIndex + diff * i + unitLen) % unitLen];
          if (nextUnit.disabled !== true) {
            column.onSelect(nextUnit.value);
            break;
          }
        }
      }
    }
  };
  function addColumnNode(condition, node, columnValue, units, onColumnSelect) {
    if (condition !== false) {
      columns.push({
        node: /* @__PURE__ */ React9.cloneElement(node, {
          prefixCls: columnPrefixCls,
          value: columnValue,
          active: activeColumnIndex === columns.length,
          onSelect: onColumnSelect,
          units,
          hideDisabledOptions
        }),
        onSelect: onColumnSelect,
        value: columnValue,
        units
      });
    }
  }
  addColumnNode(
    showHour,
    /* @__PURE__ */ React9.createElement(TimeUnitColumn_default, {
      key: 'hour'
    }),
    hour,
    hours,
    function(num) {
      onSelect(setTime2(isPM, num, minute, second), 'mouse');
    }
  );
  addColumnNode(
    showMinute,
    /* @__PURE__ */ React9.createElement(TimeUnitColumn_default, {
      key: 'minute'
    }),
    minute,
    minutes,
    function(num) {
      onSelect(setTime2(isPM, hour, num, second), 'mouse');
    }
  );
  addColumnNode(
    showSecond,
    /* @__PURE__ */ React9.createElement(TimeUnitColumn_default, {
      key: 'second'
    }),
    second,
    seconds,
    function(num) {
      onSelect(setTime2(isPM, hour, minute, num), 'mouse');
    }
  );
  var PMIndex = -1;
  if (typeof isPM === 'boolean') {
    PMIndex = isPM ? 1 : 0;
  }
  addColumnNode(
    use12Hours === true,
    /* @__PURE__ */ React9.createElement(TimeUnitColumn_default, {
      key: '12hours'
    }),
    PMIndex,
    [
      {
        label: 'AM',
        value: 0,
        disabled: AMDisabled
      },
      {
        label: 'PM',
        value: 1,
        disabled: PMDisabled
      }
    ],
    function(num) {
      onSelect(setTime2(!!num, hour, minute, second), 'mouse');
    }
  );
  return /* @__PURE__ */ React9.createElement(
    'div',
    {
      className: contentPrefixCls
    },
    columns.map(function(_ref2) {
      var node = _ref2.node;
      return node;
    })
  );
}
var TimeBody_default = TimeBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/TimePanel/index.js
var countBoolean = function countBoolean2(boolList) {
  return boolList.filter(function(bool) {
    return bool !== false;
  }).length;
};
function TimePanel(props) {
  var generateConfig = props.generateConfig,
    _props$format = props.format,
    format = _props$format === void 0 ? 'HH:mm:ss' : _props$format,
    prefixCls = props.prefixCls,
    active = props.active,
    operationRef = props.operationRef,
    showHour = props.showHour,
    showMinute = props.showMinute,
    showSecond = props.showSecond,
    _props$use12Hours = props.use12Hours,
    use12Hours = _props$use12Hours === void 0 ? false : _props$use12Hours,
    onSelect = props.onSelect,
    value = props.value;
  var panelPrefixCls = ''.concat(prefixCls, '-time-panel');
  var bodyOperationRef = React10.useRef();
  var _React$useState = React10.useState(-1),
    _React$useState2 = _slicedToArray2(_React$useState, 2),
    activeColumnIndex = _React$useState2[0],
    setActiveColumnIndex = _React$useState2[1];
  var columnsCount = countBoolean([showHour, showMinute, showSecond, use12Hours]);
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          setActiveColumnIndex((activeColumnIndex + diff + columnsCount) % columnsCount);
        },
        onUpDown: function onUpDown(diff) {
          if (activeColumnIndex === -1) {
            setActiveColumnIndex(0);
          } else if (bodyOperationRef.current) {
            bodyOperationRef.current.onUpDown(diff);
          }
        },
        onEnter: function onEnter() {
          onSelect(value || generateConfig.getNow(), 'key');
          setActiveColumnIndex(-1);
        }
      });
    },
    onBlur: function onBlur() {
      setActiveColumnIndex(-1);
    }
  };
  return /* @__PURE__ */ React10.createElement(
    'div',
    {
      className: classNames3(panelPrefixCls, _defineProperty4({}, ''.concat(panelPrefixCls, '-active'), active))
    },
    /* @__PURE__ */ React10.createElement(
      TimeHeader_default,
      _extends4({}, props, {
        format,
        prefixCls
      })
    ),
    /* @__PURE__ */ React10.createElement(
      TimeBody_default,
      _extends4({}, props, {
        prefixCls,
        activeColumnIndex,
        operationRef: bodyOperationRef
      })
    )
  );
}
var TimePanel_default = TimePanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatetimePanel/index.js
import _extends8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread4 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _typeof from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _slicedToArray3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React15 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames5 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import KeyCode2 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatePanel/index.js
import _extends7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import * as React14 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames4 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatePanel/DateBody.js
import _extends5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React12 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/RangeContext.js
import * as React11 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var RangeContext = /* @__PURE__ */ React11.createContext({});
var RangeContext_default = RangeContext;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useCellClassName.js
import _defineProperty5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
function useCellClassName(_ref) {
  var cellPrefixCls = _ref.cellPrefixCls,
    generateConfig = _ref.generateConfig,
    rangedValue = _ref.rangedValue,
    hoverRangedValue = _ref.hoverRangedValue,
    isInView = _ref.isInView,
    isSameCell = _ref.isSameCell,
    offsetCell = _ref.offsetCell,
    today = _ref.today,
    value = _ref.value;
  function getClassName(currentDate) {
    var _ref2;
    var prevDate = offsetCell(currentDate, -1);
    var nextDate = offsetCell(currentDate, 1);
    var rangeStart = getValue(rangedValue, 0);
    var rangeEnd = getValue(rangedValue, 1);
    var hoverStart = getValue(hoverRangedValue, 0);
    var hoverEnd = getValue(hoverRangedValue, 1);
    var isRangeHovered = isInRange(generateConfig, hoverStart, hoverEnd, currentDate);
    function isRangeStart(date) {
      return isSameCell(rangeStart, date);
    }
    function isRangeEnd(date) {
      return isSameCell(rangeEnd, date);
    }
    var isHoverStart = isSameCell(hoverStart, currentDate);
    var isHoverEnd = isSameCell(hoverEnd, currentDate);
    var isHoverEdgeStart = (isRangeHovered || isHoverEnd) && (!isInView(prevDate) || isRangeEnd(prevDate));
    var isHoverEdgeEnd = (isRangeHovered || isHoverStart) && (!isInView(nextDate) || isRangeStart(nextDate));
    return (
      (_ref2 = {}),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-in-view'), isInView(currentDate)),
      _defineProperty5(
        _ref2,
        ''.concat(cellPrefixCls, '-in-range'),
        isInRange(generateConfig, rangeStart, rangeEnd, currentDate)
      ),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-start'), isRangeStart(currentDate)),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-end'), isRangeEnd(currentDate)),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-start-single'), isRangeStart(currentDate) && !rangeEnd),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-end-single'), isRangeEnd(currentDate) && !rangeStart),
      _defineProperty5(
        _ref2,
        ''.concat(cellPrefixCls, '-range-start-near-hover'),
        isRangeStart(currentDate) &&
          (isSameCell(prevDate, hoverStart) || isInRange(generateConfig, hoverStart, hoverEnd, prevDate))
      ),
      _defineProperty5(
        _ref2,
        ''.concat(cellPrefixCls, '-range-end-near-hover'),
        isRangeEnd(currentDate) &&
          (isSameCell(nextDate, hoverEnd) || isInRange(generateConfig, hoverStart, hoverEnd, nextDate))
      ),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-hover'), isRangeHovered),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-hover-start'), isHoverStart),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-hover-end'), isHoverEnd),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-hover-edge-start'), isHoverEdgeStart),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-range-hover-edge-end'), isHoverEdgeEnd),
      _defineProperty5(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-start-near-range'),
        isHoverEdgeStart && isSameCell(prevDate, rangeEnd)
      ),
      _defineProperty5(
        _ref2,
        ''.concat(cellPrefixCls, '-range-hover-edge-end-near-range'),
        isHoverEdgeEnd && isSameCell(nextDate, rangeStart)
      ),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-today'), isSameCell(today, currentDate)),
      _defineProperty5(_ref2, ''.concat(cellPrefixCls, '-selected'), isSameCell(value, currentDate)),
      _ref2
    );
  }
  return getClassName;
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatePanel/DateBody.js
function DateBody(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    prefixColumn = props.prefixColumn,
    locale = props.locale,
    rowCount = props.rowCount,
    viewDate = props.viewDate,
    value = props.value,
    dateRender = props.dateRender;
  var _React$useContext = React12.useContext(RangeContext_default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var baseDate = getWeekStartDate(locale.locale, generateConfig, viewDate);
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var weekFirstDay = generateConfig.locale.getWeekFirstDay(locale.locale);
  var today = generateConfig.getNow();
  var headerCells = [];
  var weekDaysLocale =
    locale.shortWeekDays ||
    (generateConfig.locale.getShortWeekDays ? generateConfig.locale.getShortWeekDays(locale.locale) : []);
  if (prefixColumn) {
    headerCells.push(
      /* @__PURE__ */ React12.createElement('th', {
        key: 'empty',
        'aria-label': 'empty cell'
      })
    );
  }
  for (var i = 0; i < WEEK_DAY_COUNT; i += 1) {
    headerCells.push(
      /* @__PURE__ */ React12.createElement(
        'th',
        {
          key: i
        },
        weekDaysLocale[(i + weekFirstDay) % WEEK_DAY_COUNT]
      )
    );
  }
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    today,
    value,
    generateConfig,
    rangedValue: prefixColumn ? null : rangedValue,
    hoverRangedValue: prefixColumn ? null : hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameDate(generateConfig, current, target);
    },
    isInView: function isInView(date) {
      return isSameMonth(generateConfig, date, viewDate);
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addDate(date, offset);
    }
  });
  var getCellNode = dateRender
    ? function(date) {
        return dateRender(date, today);
      }
    : void 0;
  return /* @__PURE__ */ React12.createElement(
    PanelBody,
    _extends5({}, props, {
      rowNum: rowCount,
      colNum: WEEK_DAY_COUNT,
      baseDate,
      getCellNode,
      getCellText: generateConfig.getDate,
      getCellClassName,
      getCellDate: generateConfig.addDate,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale,
          format: 'YYYY-MM-DD',
          generateConfig
        });
      },
      headerCells
    })
  );
}
var DateBody_default = DateBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatePanel/DateHeader.js
import _extends6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React13 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function DateHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextMonth = props.onNextMonth,
    onPrevMonth = props.onPrevMonth,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick,
    onMonthClick = props.onMonthClick;
  var _React$useContext = React13.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var monthsLocale =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var month = generateConfig.getMonth(viewDate);
  var yearNode = /* @__PURE__ */ React13.createElement(
    'button',
    {
      type: 'button',
      key: 'year',
      onClick: onYearClick,
      tabIndex: -1,
      className: ''.concat(prefixCls, '-year-btn')
    },
    formatValue(viewDate, {
      locale,
      format: locale.yearFormat,
      generateConfig
    })
  );
  var monthNode = /* @__PURE__ */ React13.createElement(
    'button',
    {
      type: 'button',
      key: 'month',
      onClick: onMonthClick,
      tabIndex: -1,
      className: ''.concat(prefixCls, '-month-btn')
    },
    locale.monthFormat
      ? formatValue(viewDate, {
          locale,
          format: locale.monthFormat,
          generateConfig
        })
      : monthsLocale[month]
  );
  var monthYearNodes = locale.monthBeforeYear ? [monthNode, yearNode] : [yearNode, monthNode];
  return /* @__PURE__ */ React13.createElement(
    Header_default,
    _extends6({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onPrev: onPrevMonth,
      onNext: onNextMonth,
      onSuperNext: onNextYear
    }),
    monthYearNodes
  );
}
var DateHeader_default = DateHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatePanel/index.js
var DATE_ROW_COUNT = 6;
function DatePanel(props) {
  var prefixCls = props.prefixCls,
    _props$panelName = props.panelName,
    panelName = _props$panelName === void 0 ? 'date' : _props$panelName,
    keyboardConfig = props.keyboardConfig,
    active = props.active,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onViewDateChange = props.onViewDateChange,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-').concat(panelName, '-panel');
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(
        event,
        _objectSpread3(
          {
            onLeftRight: function onLeftRight(diff) {
              _onSelect(generateConfig.addDate(value || viewDate, diff), 'key');
            },
            onCtrlLeftRight: function onCtrlLeftRight(diff) {
              _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
            },
            onUpDown: function onUpDown(diff) {
              _onSelect(generateConfig.addDate(value || viewDate, diff * WEEK_DAY_COUNT), 'key');
            },
            onPageUpDown: function onPageUpDown(diff) {
              _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
            }
          },
          keyboardConfig
        )
      );
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  var onMonthChange = function onMonthChange2(diff) {
    var newDate = generateConfig.addMonth(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ React14.createElement(
    'div',
    {
      className: classNames4(panelPrefixCls, _defineProperty6({}, ''.concat(panelPrefixCls, '-active'), active))
    },
    /* @__PURE__ */ React14.createElement(
      DateHeader_default,
      _extends7({}, props, {
        prefixCls,
        value,
        viewDate,
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onPrevMonth: function onPrevMonth() {
          onMonthChange(-1);
        },
        onNextMonth: function onNextMonth() {
          onMonthChange(1);
        },
        onMonthClick: function onMonthClick() {
          onPanelChange('month', viewDate);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        }
      })
    ),
    /* @__PURE__ */ React14.createElement(
      DateBody_default,
      _extends7({}, props, {
        onSelect: function onSelect(date) {
          return _onSelect(date, 'mouse');
        },
        prefixCls,
        value,
        viewDate,
        rowCount: DATE_ROW_COUNT
      })
    )
  );
}
var DatePanel_default = DatePanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/DatetimePanel/index.js
var ACTIVE_PANEL = tuple('date', 'time');
function DatetimePanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    generateConfig = props.generateConfig,
    value = props.value,
    defaultValue = props.defaultValue,
    disabledTime = props.disabledTime,
    showTime = props.showTime,
    onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-datetime-panel');
  var _React$useState = React15.useState(null),
    _React$useState2 = _slicedToArray3(_React$useState, 2),
    activePanel = _React$useState2[0],
    setActivePanel = _React$useState2[1];
  var dateOperationRef = React15.useRef({});
  var timeOperationRef = React15.useRef({});
  var timeProps = _typeof(showTime) === 'object' ? _objectSpread4({}, showTime) : {};
  function getNextActive(offset) {
    var activeIndex = ACTIVE_PANEL.indexOf(activePanel) + offset;
    var nextActivePanel = ACTIVE_PANEL[activeIndex] || null;
    return nextActivePanel;
  }
  var onBlur = function onBlur2(e) {
    if (timeOperationRef.current.onBlur) {
      timeOperationRef.current.onBlur(e);
    }
    setActivePanel(null);
  };
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      if (event.which === KeyCode2.TAB) {
        var nextActivePanel = getNextActive(event.shiftKey ? -1 : 1);
        setActivePanel(nextActivePanel);
        if (nextActivePanel) {
          event.preventDefault();
        }
        return true;
      }
      if (activePanel) {
        var ref = activePanel === 'date' ? dateOperationRef : timeOperationRef;
        if (ref.current && ref.current.onKeyDown) {
          ref.current.onKeyDown(event);
        }
        return true;
      }
      if ([KeyCode2.LEFT, KeyCode2.RIGHT, KeyCode2.UP, KeyCode2.DOWN].includes(event.which)) {
        setActivePanel('date');
        return true;
      }
      return false;
    },
    onBlur,
    onClose: onBlur
  };
  var onInternalSelect = function onInternalSelect2(date, source) {
    var selectedDate = date;
    if (source === 'date' && !value && timeProps.defaultValue) {
      selectedDate = generateConfig.setHour(selectedDate, generateConfig.getHour(timeProps.defaultValue));
      selectedDate = generateConfig.setMinute(selectedDate, generateConfig.getMinute(timeProps.defaultValue));
      selectedDate = generateConfig.setSecond(selectedDate, generateConfig.getSecond(timeProps.defaultValue));
    } else if (source === 'time' && !value && defaultValue) {
      selectedDate = generateConfig.setYear(selectedDate, generateConfig.getYear(defaultValue));
      selectedDate = generateConfig.setMonth(selectedDate, generateConfig.getMonth(defaultValue));
      selectedDate = generateConfig.setDate(selectedDate, generateConfig.getDate(defaultValue));
    }
    if (onSelect) {
      onSelect(selectedDate, 'mouse');
    }
  };
  var disabledTimes = disabledTime ? disabledTime(value || null) : {};
  return /* @__PURE__ */ React15.createElement(
    'div',
    {
      className: classNames5(panelPrefixCls, _defineProperty7({}, ''.concat(panelPrefixCls, '-active'), activePanel))
    },
    /* @__PURE__ */ React15.createElement(
      DatePanel_default,
      _extends8({}, props, {
        operationRef: dateOperationRef,
        active: activePanel === 'date',
        onSelect: function onSelect2(date) {
          onInternalSelect(
            setDateTime(generateConfig, date, !value && _typeof(showTime) === 'object' ? showTime.defaultValue : null),
            'date'
          );
        }
      })
    ),
    /* @__PURE__ */ React15.createElement(
      TimePanel_default,
      _extends8(
        {},
        props,
        {
          format: void 0
        },
        timeProps,
        disabledTimes,
        {
          disabledTime: null,
          defaultValue: void 0,
          operationRef: timeOperationRef,
          active: activePanel === 'time',
          onSelect: function onSelect2(date) {
            onInternalSelect(date, 'time');
          }
        }
      )
    )
  );
}
var DatetimePanel_default = DatetimePanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/WeekPanel/index.js
import _extends9 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty8 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React16 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames6 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
function WeekPanel(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    value = props.value;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var prefixColumn = function prefixColumn2(date) {
    return /* @__PURE__ */ React16.createElement(
      'td',
      {
        key: 'week',
        className: classNames6(cellPrefixCls, ''.concat(cellPrefixCls, '-week'))
      },
      generateConfig.locale.getWeek(locale.locale, date)
    );
  };
  var rowPrefixCls = ''.concat(prefixCls, '-week-panel-row');
  var rowClassName = function rowClassName2(date) {
    return classNames6(
      rowPrefixCls,
      _defineProperty8({}, ''.concat(rowPrefixCls, '-selected'), isSameWeek(generateConfig, locale.locale, value, date))
    );
  };
  return /* @__PURE__ */ React16.createElement(
    DatePanel_default,
    _extends9({}, props, {
      panelName: 'week',
      prefixColumn,
      rowClassName,
      keyboardConfig: {
        onLeftRight: null
      }
    })
  );
}
var WeekPanel_default = WeekPanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/MonthPanel/index.js
import _extends12 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React19 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/MonthPanel/MonthHeader.js
import _extends10 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React17 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function MonthHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;
  var _React$useContext = React17.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /* @__PURE__ */ React17.createElement(
    Header_default,
    _extends10({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onSuperNext: onNextYear
    }),
    /* @__PURE__ */ React17.createElement(
      'button',
      {
        type: 'button',
        onClick: onYearClick,
        className: ''.concat(prefixCls, '-year-btn')
      },
      formatValue(viewDate, {
        locale,
        format: locale.yearFormat,
        generateConfig
      })
    )
  );
}
var MonthHeader_default = MonthHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/MonthPanel/MonthBody.js
import _extends11 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React18 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var MONTH_COL_COUNT = 3;
var MONTH_ROW_COUNT = 4;
function MonthBody(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig,
    monthCellRender = props.monthCellRender;
  var _React$useContext = React18.useContext(RangeContext_default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameMonth(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset);
    }
  });
  var monthsLocale =
    locale.shortMonths ||
    (generateConfig.locale.getShortMonths ? generateConfig.locale.getShortMonths(locale.locale) : []);
  var baseMonth = generateConfig.setMonth(viewDate, 0);
  var getCellNode = monthCellRender
    ? function(date) {
        return monthCellRender(date, locale);
      }
    : void 0;
  return /* @__PURE__ */ React18.createElement(
    PanelBody,
    _extends11({}, props, {
      rowNum: MONTH_ROW_COUNT,
      colNum: MONTH_COL_COUNT,
      baseDate: baseMonth,
      getCellNode,
      getCellText: function getCellText(date) {
        return locale.monthFormat
          ? formatValue(date, {
              locale,
              format: locale.monthFormat,
              generateConfig
            })
          : monthsLocale[generateConfig.getMonth(date)];
      },
      getCellClassName,
      getCellDate: generateConfig.addMonth,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale,
          format: 'YYYY-MM',
          generateConfig
        });
      }
    })
  );
}
var MonthBody_default = MonthBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/MonthPanel/index.js
function MonthPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-month-panel');
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * MONTH_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange('date', value || viewDate);
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ React19.createElement(
    'div',
    {
      className: panelPrefixCls
    },
    /* @__PURE__ */ React19.createElement(
      MonthHeader_default,
      _extends12({}, props, {
        prefixCls,
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        }
      })
    ),
    /* @__PURE__ */ React19.createElement(
      MonthBody_default,
      _extends12({}, props, {
        prefixCls,
        onSelect: function onSelect(date) {
          _onSelect(date, 'mouse');
          onPanelChange('date', date);
        }
      })
    )
  );
}
var MonthPanel_default = MonthPanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/QuarterPanel/index.js
import _extends15 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React22 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/QuarterPanel/QuarterHeader.js
import _extends13 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React20 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function QuarterHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    locale = props.locale,
    viewDate = props.viewDate,
    onNextYear = props.onNextYear,
    onPrevYear = props.onPrevYear,
    onYearClick = props.onYearClick;
  var _React$useContext = React20.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  return /* @__PURE__ */ React20.createElement(
    Header_default,
    _extends13({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevYear,
      onSuperNext: onNextYear
    }),
    /* @__PURE__ */ React20.createElement(
      'button',
      {
        type: 'button',
        onClick: onYearClick,
        className: ''.concat(prefixCls, '-year-btn')
      },
      formatValue(viewDate, {
        locale,
        format: locale.yearFormat,
        generateConfig
      })
    )
  );
}
var QuarterHeader_default = QuarterHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/QuarterPanel/QuarterBody.js
import _extends14 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React21 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var QUARTER_COL_COUNT = 4;
var QUARTER_ROW_COUNT = 1;
function QuarterBody(props) {
  var prefixCls = props.prefixCls,
    locale = props.locale,
    value = props.value,
    viewDate = props.viewDate,
    generateConfig = props.generateConfig;
  var _React$useContext = React21.useContext(RangeContext_default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var cellPrefixCls = ''.concat(prefixCls, '-cell');
  var getCellClassName = useCellClassName({
    cellPrefixCls,
    value,
    generateConfig,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameQuarter(generateConfig, current, target);
    },
    isInView: function isInView() {
      return true;
    },
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addMonth(date, offset * 3);
    }
  });
  var baseQuarter = generateConfig.setDate(generateConfig.setMonth(viewDate, 0), 1);
  return /* @__PURE__ */ React21.createElement(
    PanelBody,
    _extends14({}, props, {
      rowNum: QUARTER_ROW_COUNT,
      colNum: QUARTER_COL_COUNT,
      baseDate: baseQuarter,
      getCellText: function getCellText(date) {
        return formatValue(date, {
          locale,
          format: locale.quarterFormat || '[Q]Q',
          generateConfig
        });
      },
      getCellClassName,
      getCellDate: function getCellDate(date, offset) {
        return generateConfig.addMonth(date, offset * 3);
      },
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale,
          format: 'YYYY-[Q]Q',
          generateConfig
        });
      }
    })
  );
}
var QuarterBody_default = QuarterBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/QuarterPanel/index.js
function QuarterPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    onPanelChange = props.onPanelChange,
    _onSelect = props.onSelect;
  var panelPrefixCls = ''.concat(prefixCls, '-quarter-panel');
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addMonth(value || viewDate, diff * 3), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        }
      });
    }
  };
  var onYearChange = function onYearChange2(diff) {
    var newDate = generateConfig.addYear(viewDate, diff);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ React22.createElement(
    'div',
    {
      className: panelPrefixCls
    },
    /* @__PURE__ */ React22.createElement(
      QuarterHeader_default,
      _extends15({}, props, {
        prefixCls,
        onPrevYear: function onPrevYear() {
          onYearChange(-1);
        },
        onNextYear: function onNextYear() {
          onYearChange(1);
        },
        onYearClick: function onYearClick() {
          onPanelChange('year', viewDate);
        }
      })
    ),
    /* @__PURE__ */ React22.createElement(
      QuarterBody_default,
      _extends15({}, props, {
        prefixCls,
        onSelect: function onSelect(date) {
          _onSelect(date, 'mouse');
        }
      })
    )
  );
}
var QuarterPanel_default = QuarterPanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/YearPanel/index.js
import _extends18 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React25 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/YearPanel/YearHeader.js
import _extends16 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React23 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function YearHeader(props) {
  var prefixCls = props.prefixCls,
    generateConfig = props.generateConfig,
    viewDate = props.viewDate,
    onPrevDecade = props.onPrevDecade,
    onNextDecade = props.onNextDecade,
    onDecadeClick = props.onDecadeClick;
  var _React$useContext = React23.useContext(PanelContext_default),
    hideHeader = _React$useContext.hideHeader;
  if (hideHeader) {
    return null;
  }
  var headerPrefixCls = ''.concat(prefixCls, '-header');
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  return /* @__PURE__ */ React23.createElement(
    Header_default,
    _extends16({}, props, {
      prefixCls: headerPrefixCls,
      onSuperPrev: onPrevDecade,
      onSuperNext: onNextDecade
    }),
    /* @__PURE__ */ React23.createElement(
      'button',
      {
        type: 'button',
        onClick: onDecadeClick,
        className: ''.concat(prefixCls, '-decade-btn')
      },
      startYear,
      '-',
      endYear
    )
  );
}
var YearHeader_default = YearHeader;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/YearPanel/YearBody.js
import _extends17 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import * as React24 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var YEAR_COL_COUNT = 3;
var YEAR_ROW_COUNT = 4;
function YearBody(props) {
  var prefixCls = props.prefixCls,
    value = props.value,
    viewDate = props.viewDate,
    locale = props.locale,
    generateConfig = props.generateConfig;
  var _React$useContext = React24.useContext(RangeContext_default),
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var yearPrefixCls = ''.concat(prefixCls, '-cell');
  var yearNumber = generateConfig.getYear(viewDate);
  var startYear = Math.floor(yearNumber / YEAR_DECADE_COUNT) * YEAR_DECADE_COUNT;
  var endYear = startYear + YEAR_DECADE_COUNT - 1;
  var baseYear = generateConfig.setYear(
    viewDate,
    startYear - Math.ceil((YEAR_COL_COUNT * YEAR_ROW_COUNT - YEAR_DECADE_COUNT) / 2)
  );
  var isInView = function isInView2(date) {
    var currentYearNumber = generateConfig.getYear(date);
    return startYear <= currentYearNumber && currentYearNumber <= endYear;
  };
  var getCellClassName = useCellClassName({
    cellPrefixCls: yearPrefixCls,
    value,
    generateConfig,
    rangedValue,
    hoverRangedValue,
    isSameCell: function isSameCell(current, target) {
      return isSameYear(generateConfig, current, target);
    },
    isInView,
    offsetCell: function offsetCell(date, offset) {
      return generateConfig.addYear(date, offset);
    }
  });
  return /* @__PURE__ */ React24.createElement(
    PanelBody,
    _extends17({}, props, {
      rowNum: YEAR_ROW_COUNT,
      colNum: YEAR_COL_COUNT,
      baseDate: baseYear,
      getCellText: generateConfig.getYear,
      getCellClassName,
      getCellDate: generateConfig.addYear,
      titleCell: function titleCell(date) {
        return formatValue(date, {
          locale,
          format: 'YYYY',
          generateConfig
        });
      }
    })
  );
}
var YearBody_default = YearBody;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/panels/YearPanel/index.js
var YEAR_DECADE_COUNT = 10;
function YearPanel(props) {
  var prefixCls = props.prefixCls,
    operationRef = props.operationRef,
    onViewDateChange = props.onViewDateChange,
    generateConfig = props.generateConfig,
    value = props.value,
    viewDate = props.viewDate,
    sourceMode = props.sourceMode,
    _onSelect = props.onSelect,
    onPanelChange = props.onPanelChange;
  var panelPrefixCls = ''.concat(prefixCls, '-year-panel');
  operationRef.current = {
    onKeyDown: function onKeyDown(event) {
      return createKeyDownHandler(event, {
        onLeftRight: function onLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff), 'key');
        },
        onCtrlLeftRight: function onCtrlLeftRight(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_DECADE_COUNT), 'key');
        },
        onUpDown: function onUpDown(diff) {
          _onSelect(generateConfig.addYear(value || viewDate, diff * YEAR_COL_COUNT), 'key');
        },
        onEnter: function onEnter() {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', value || viewDate);
        }
      });
    }
  };
  var onDecadeChange = function onDecadeChange2(diff) {
    var newDate = generateConfig.addYear(viewDate, diff * 10);
    onViewDateChange(newDate);
    onPanelChange(null, newDate);
  };
  return /* @__PURE__ */ React25.createElement(
    'div',
    {
      className: panelPrefixCls
    },
    /* @__PURE__ */ React25.createElement(
      YearHeader_default,
      _extends18({}, props, {
        prefixCls,
        onPrevDecade: function onPrevDecade() {
          onDecadeChange(-1);
        },
        onNextDecade: function onNextDecade() {
          onDecadeChange(1);
        },
        onDecadeClick: function onDecadeClick() {
          onPanelChange('decade', viewDate);
        }
      })
    ),
    /* @__PURE__ */ React25.createElement(
      YearBody_default,
      _extends18({}, props, {
        prefixCls,
        onSelect: function onSelect(date) {
          onPanelChange(sourceMode === 'date' ? 'date' : 'month', date);
          _onSelect(date, 'mouse');
        }
      })
    )
  );
}
var YearPanel_default = YearPanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/getExtraFooter.js
import * as React26 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getExtraFooter(prefixCls, mode, renderExtraFooter) {
  if (!renderExtraFooter) {
    return null;
  }
  return /* @__PURE__ */ React26.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-footer-extra')
    },
    renderExtraFooter(mode)
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/getRanges.js
import * as React27 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getRanges(_ref) {
  var prefixCls = _ref.prefixCls,
    _ref$components = _ref.components,
    components = _ref$components === void 0 ? {} : _ref$components,
    needConfirmButton = _ref.needConfirmButton,
    onNow = _ref.onNow,
    onOk = _ref.onOk,
    okDisabled = _ref.okDisabled,
    showNow = _ref.showNow,
    locale = _ref.locale;
  var presetNode;
  var okNode;
  if (needConfirmButton) {
    var Button = components.button || 'button';
    if (onNow && showNow !== false) {
      presetNode = /* @__PURE__ */ React27.createElement(
        'li',
        {
          className: ''.concat(prefixCls, '-now')
        },
        /* @__PURE__ */ React27.createElement(
          'a',
          {
            className: ''.concat(prefixCls, '-now-btn'),
            onClick: onNow
          },
          locale.now
        )
      );
    }
    okNode =
      needConfirmButton &&
      /* @__PURE__ */ React27.createElement(
        'li',
        {
          className: ''.concat(prefixCls, '-ok')
        },
        /* @__PURE__ */ React27.createElement(
          Button,
          {
            disabled: okDisabled,
            onClick: onOk
          },
          locale.ok
        )
      );
  }
  if (!presetNode && !okNode) {
    return null;
  }
  return /* @__PURE__ */ React27.createElement(
    'ul',
    {
      className: ''.concat(prefixCls, '-ranges')
    },
    presetNode,
    okNode
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/PickerPanel.js
function PickerPanel(props) {
  var _classNames;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-picker' : _ref$prefixCls,
    className = _ref.className,
    style = _ref.style,
    locale = _ref.locale,
    generateConfig = _ref.generateConfig,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    pickerValue = _ref.pickerValue,
    defaultPickerValue = _ref.defaultPickerValue,
    disabledDate = _ref.disabledDate,
    mode = _ref.mode,
    _ref$picker = _ref.picker,
    picker = _ref$picker === void 0 ? 'date' : _ref$picker,
    _ref$tabIndex = _ref.tabIndex,
    tabIndex = _ref$tabIndex === void 0 ? 0 : _ref$tabIndex,
    showNow = _ref.showNow,
    showTime = _ref.showTime,
    showToday = _ref.showToday,
    renderExtraFooter = _ref.renderExtraFooter,
    hideHeader = _ref.hideHeader,
    onSelect = _ref.onSelect,
    onChange = _ref.onChange,
    onPanelChange = _ref.onPanelChange,
    onMouseDown = _ref.onMouseDown,
    onPickerValueChange = _ref.onPickerValueChange,
    _onOk = _ref.onOk,
    components = _ref.components,
    direction = _ref.direction,
    _ref$hourStep = _ref.hourStep,
    hourStep = _ref$hourStep === void 0 ? 1 : _ref$hourStep,
    _ref$minuteStep = _ref.minuteStep,
    minuteStep = _ref$minuteStep === void 0 ? 1 : _ref$minuteStep,
    _ref$secondStep = _ref.secondStep,
    secondStep = _ref$secondStep === void 0 ? 1 : _ref$secondStep;
  var needConfirmButton = (picker === 'date' && !!showTime) || picker === 'time';
  var isHourStepValid = 24 % hourStep === 0;
  var isMinuteStepValid = 60 % minuteStep === 0;
  var isSecondStepValid = 60 % secondStep === 0;
  if (true) {
    warning(!value || generateConfig.isValidate(value), 'Invalidate date pass to `value`.');
    warning(!value || generateConfig.isValidate(value), 'Invalidate date pass to `defaultValue`.');
    warning(isHourStepValid, '`hourStep` '.concat(hourStep, ' is invalid. It should be a factor of 24.'));
    warning(isMinuteStepValid, '`minuteStep` '.concat(minuteStep, ' is invalid. It should be a factor of 60.'));
    warning(isSecondStepValid, '`secondStep` '.concat(secondStep, ' is invalid. It should be a factor of 60.'));
  }
  var panelContext = React28.useContext(PanelContext_default);
  var operationRef = panelContext.operationRef,
    onContextSelect = panelContext.onSelect,
    hideRanges = panelContext.hideRanges,
    defaultOpenValue = panelContext.defaultOpenValue;
  var _React$useContext = React28.useContext(RangeContext_default),
    inRange = _React$useContext.inRange,
    panelPosition = _React$useContext.panelPosition,
    rangedValue = _React$useContext.rangedValue,
    hoverRangedValue = _React$useContext.hoverRangedValue;
  var panelRef = React28.useRef({});
  var initRef = React28.useRef(true);
  var _useMergedState = useMergedState(null, {
      value,
      defaultValue,
      postState: function postState(val) {
        if (!val && defaultOpenValue && picker === 'time') {
          return defaultOpenValue;
        }
        return val;
      }
    }),
    _useMergedState2 = _slicedToArray4(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setInnerValue = _useMergedState2[1];
  var _useMergedState3 = useMergedState(null, {
      value: pickerValue,
      defaultValue: defaultPickerValue || mergedValue,
      postState: function postState(date) {
        var now2 = generateConfig.getNow();
        if (!date) {
          return now2;
        }
        if (!mergedValue && showTime) {
          var defaultDateObject = _typeof2(showTime) === 'object' ? showTime.defaultValue : defaultValue;
          return setDateTime(generateConfig, Array.isArray(date) ? date[0] : date, defaultDateObject || now2);
        }
        return Array.isArray(date) ? date[0] : date;
      }
    }),
    _useMergedState4 = _slicedToArray4(_useMergedState3, 2),
    viewDate = _useMergedState4[0],
    setInnerViewDate = _useMergedState4[1];
  var setViewDate = function setViewDate2(date) {
    setInnerViewDate(date);
    if (onPickerValueChange) {
      onPickerValueChange(date);
    }
  };
  var getInternalNextMode = function getInternalNextMode2(nextMode) {
    var getNextMode = PickerModeMap[picker];
    if (getNextMode) {
      return getNextMode(nextMode);
    }
    return nextMode;
  };
  var _useMergedState5 = useMergedState(
      function() {
        if (picker === 'time') {
          return 'time';
        }
        return getInternalNextMode('date');
      },
      {
        value: mode
      }
    ),
    _useMergedState6 = _slicedToArray4(_useMergedState5, 2),
    mergedMode = _useMergedState6[0],
    setInnerMode = _useMergedState6[1];
  React28.useEffect(
    function() {
      setInnerMode(picker);
    },
    [picker]
  );
  var _React$useState = React28.useState(function() {
      return mergedMode;
    }),
    _React$useState2 = _slicedToArray4(_React$useState, 2),
    sourceMode = _React$useState2[0],
    setSourceMode = _React$useState2[1];
  var onInternalPanelChange = function onInternalPanelChange2(newMode, viewValue) {
    var nextMode = getInternalNextMode(newMode || mergedMode);
    setSourceMode(mergedMode);
    setInnerMode(nextMode);
    if (onPanelChange && (mergedMode !== nextMode || isEqual(generateConfig, viewDate, viewDate))) {
      onPanelChange(viewValue, nextMode);
    }
  };
  var triggerSelect = function triggerSelect2(date, type) {
    var forceTriggerSelect = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (mergedMode === picker || forceTriggerSelect) {
      setInnerValue(date);
      if (onSelect) {
        onSelect(date);
      }
      if (onContextSelect) {
        onContextSelect(date, type);
      }
      if (
        onChange &&
        !isEqual(generateConfig, date, mergedValue) &&
        !(disabledDate !== null && disabledDate !== void 0 && disabledDate(date))
      ) {
        onChange(date);
      }
    }
  };
  var onInternalKeyDown = function onInternalKeyDown2(e) {
    if (panelRef.current && panelRef.current.onKeyDown) {
      if (
        [
          KeyCode3.LEFT,
          KeyCode3.RIGHT,
          KeyCode3.UP,
          KeyCode3.DOWN,
          KeyCode3.PAGE_UP,
          KeyCode3.PAGE_DOWN,
          KeyCode3.ENTER
        ].includes(e.which)
      ) {
        e.preventDefault();
      }
      return panelRef.current.onKeyDown(e);
    }
    {
      warning(false, 'Panel not correct handle keyDown event. Please help to fire issue about this.');
      return false;
    }
  };
  var onInternalBlur = function onInternalBlur2(e) {
    if (panelRef.current && panelRef.current.onBlur) {
      panelRef.current.onBlur(e);
    }
  };
  if (operationRef && panelPosition !== 'right') {
    operationRef.current = {
      onKeyDown: onInternalKeyDown,
      onClose: function onClose() {
        if (panelRef.current && panelRef.current.onClose) {
          panelRef.current.onClose();
        }
      }
    };
  }
  React28.useEffect(
    function() {
      if (value && !initRef.current) {
        setInnerViewDate(value);
      }
    },
    [value]
  );
  React28.useEffect(function() {
    initRef.current = false;
  }, []);
  var panelNode;
  var pickerProps = _objectSpread5(
    _objectSpread5({}, props),
    {},
    {
      operationRef: panelRef,
      prefixCls,
      viewDate,
      value: mergedValue,
      onViewDateChange: setViewDate,
      sourceMode,
      onPanelChange: onInternalPanelChange,
      disabledDate
    }
  );
  delete pickerProps.onChange;
  delete pickerProps.onSelect;
  switch (mergedMode) {
    case 'decade':
      panelNode = /* @__PURE__ */ React28.createElement(
        DecadePanel_default,
        _extends19({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    case 'year':
      panelNode = /* @__PURE__ */ React28.createElement(
        YearPanel_default,
        _extends19({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    case 'month':
      panelNode = /* @__PURE__ */ React28.createElement(
        MonthPanel_default,
        _extends19({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    case 'quarter':
      panelNode = /* @__PURE__ */ React28.createElement(
        QuarterPanel_default,
        _extends19({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    case 'week':
      panelNode = /* @__PURE__ */ React28.createElement(
        WeekPanel_default,
        _extends19({}, pickerProps, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    case 'time':
      delete pickerProps.showTime;
      panelNode = /* @__PURE__ */ React28.createElement(
        TimePanel_default,
        _extends19({}, pickerProps, _typeof2(showTime) === 'object' ? showTime : null, {
          onSelect: function onSelect2(date, type) {
            setViewDate(date);
            triggerSelect(date, type);
          }
        })
      );
      break;
    default:
      if (showTime) {
        panelNode = /* @__PURE__ */ React28.createElement(
          DatetimePanel_default,
          _extends19({}, pickerProps, {
            onSelect: function onSelect2(date, type) {
              setViewDate(date);
              triggerSelect(date, type);
            }
          })
        );
      } else {
        panelNode = /* @__PURE__ */ React28.createElement(
          DatePanel_default,
          _extends19({}, pickerProps, {
            onSelect: function onSelect2(date, type) {
              setViewDate(date);
              triggerSelect(date, type);
            }
          })
        );
      }
  }
  var extraFooter;
  var rangesNode;
  var onNow = function onNow2() {
    var now2 = generateConfig.getNow();
    var lowerBoundTime = getLowerBoundTime(
      generateConfig.getHour(now2),
      generateConfig.getMinute(now2),
      generateConfig.getSecond(now2),
      isHourStepValid ? hourStep : 1,
      isMinuteStepValid ? minuteStep : 1,
      isSecondStepValid ? secondStep : 1
    );
    var adjustedNow = setTime(generateConfig, now2, lowerBoundTime[0], lowerBoundTime[1], lowerBoundTime[2]);
    triggerSelect(adjustedNow, 'submit');
  };
  if (!hideRanges) {
    extraFooter = getExtraFooter(prefixCls, mergedMode, renderExtraFooter);
    rangesNode = getRanges({
      prefixCls,
      components,
      needConfirmButton,
      okDisabled: !mergedValue || (disabledDate && disabledDate(mergedValue)),
      locale,
      showNow,
      onNow: needConfirmButton && onNow,
      onOk: function onOk() {
        if (mergedValue) {
          triggerSelect(mergedValue, 'submit', true);
          if (_onOk) {
            _onOk(mergedValue);
          }
        }
      }
    });
  }
  var todayNode;
  if (showToday && mergedMode === 'date' && picker === 'date' && !showTime) {
    var now = generateConfig.getNow();
    var todayCls = ''.concat(prefixCls, '-today-btn');
    var disabled = disabledDate && disabledDate(now);
    todayNode = /* @__PURE__ */ React28.createElement(
      'a',
      {
        className: classNames7(todayCls, disabled && ''.concat(todayCls, '-disabled')),
        'aria-disabled': disabled,
        onClick: function onClick() {
          if (!disabled) {
            triggerSelect(now, 'mouse', true);
          }
        }
      },
      locale.today
    );
  }
  return /* @__PURE__ */ React28.createElement(
    PanelContext_default.Provider,
    {
      value: _objectSpread5(
        _objectSpread5({}, panelContext),
        {},
        {
          mode: mergedMode,
          hideHeader: 'hideHeader' in props ? hideHeader : panelContext.hideHeader,
          hidePrevBtn: inRange && panelPosition === 'right',
          hideNextBtn: inRange && panelPosition === 'left'
        }
      )
    },
    /* @__PURE__ */ React28.createElement(
      'div',
      {
        tabIndex,
        className: classNames7(
          ''.concat(prefixCls, '-panel'),
          className,
          ((_classNames = {}),
          _defineProperty9(
            _classNames,
            ''.concat(prefixCls, '-panel-has-range'),
            rangedValue && rangedValue[0] && rangedValue[1]
          ),
          _defineProperty9(
            _classNames,
            ''.concat(prefixCls, '-panel-has-range-hover'),
            hoverRangedValue && hoverRangedValue[0] && hoverRangedValue[1]
          ),
          _defineProperty9(_classNames, ''.concat(prefixCls, '-panel-rtl'), direction === 'rtl'),
          _classNames)
        ),
        style,
        onKeyDown: onInternalKeyDown,
        onBlur: onInternalBlur,
        onMouseDown
      },
      panelNode,
      extraFooter || rangesNode || todayNode
        ? /* @__PURE__ */ React28.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-footer')
            },
            extraFooter,
            rangesNode,
            todayNode
          )
        : null
    )
  );
}
var PickerPanel_default = PickerPanel;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/PickerTrigger.js
import _defineProperty10 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import * as React29 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames8 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Trigger from '/cdn/v99/rc-trigger@5.3.4/es2022/rc-trigger.development.js';
var BUILT_IN_PLACEMENTS = {
  bottomLeft: {
    points: ['tl', 'bl'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  bottomRight: {
    points: ['tr', 'br'],
    offset: [0, 4],
    overflow: {
      adjustX: 1,
      adjustY: 1
    }
  },
  topLeft: {
    points: ['bl', 'tl'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  },
  topRight: {
    points: ['br', 'tr'],
    offset: [0, -4],
    overflow: {
      adjustX: 0,
      adjustY: 1
    }
  }
};
function PickerTrigger(_ref) {
  var _classNames;
  var prefixCls = _ref.prefixCls,
    popupElement = _ref.popupElement,
    popupStyle = _ref.popupStyle,
    visible = _ref.visible,
    dropdownClassName = _ref.dropdownClassName,
    dropdownAlign = _ref.dropdownAlign,
    transitionName = _ref.transitionName,
    getPopupContainer = _ref.getPopupContainer,
    children = _ref.children,
    range = _ref.range,
    popupPlacement = _ref.popupPlacement,
    direction = _ref.direction;
  var dropdownPrefixCls = ''.concat(prefixCls, '-dropdown');
  var getPopupPlacement = function getPopupPlacement2() {
    if (popupPlacement !== void 0) {
      return popupPlacement;
    }
    return direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  };
  return /* @__PURE__ */ React29.createElement(
    Trigger,
    {
      showAction: [],
      hideAction: [],
      popupPlacement: getPopupPlacement(),
      builtinPlacements: BUILT_IN_PLACEMENTS,
      prefixCls: dropdownPrefixCls,
      popupTransitionName: transitionName,
      popup: popupElement,
      popupAlign: dropdownAlign,
      popupVisible: visible,
      popupClassName: classNames8(
        dropdownClassName,
        ((_classNames = {}),
        _defineProperty10(_classNames, ''.concat(dropdownPrefixCls, '-range'), range),
        _defineProperty10(_classNames, ''.concat(dropdownPrefixCls, '-rtl'), direction === 'rtl'),
        _classNames)
      ),
      popupStyle,
      getPopupContainer
    },
    children
  );
}
var PickerTrigger_default = PickerTrigger;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/usePickerInput.js
import _slicedToArray5 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import {
  useState as useState4,
  useEffect as useEffect2,
  useRef as useRef5
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import KeyCode4 from '/cdn/v99/rc-util@5.24.6/es2022/es/KeyCode.development.js';
function usePickerInput(_ref) {
  var open = _ref.open,
    value = _ref.value,
    isClickOutside = _ref.isClickOutside,
    triggerOpen = _ref.triggerOpen,
    forwardKeyDown = _ref.forwardKeyDown,
    _onKeyDown = _ref.onKeyDown,
    blurToCancel = _ref.blurToCancel,
    onSubmit = _ref.onSubmit,
    onCancel = _ref.onCancel,
    _onFocus = _ref.onFocus,
    _onBlur = _ref.onBlur;
  var _useState = useState4(false),
    _useState2 = _slicedToArray5(_useState, 2),
    typing = _useState2[0],
    setTyping = _useState2[1];
  var _useState3 = useState4(false),
    _useState4 = _slicedToArray5(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var preventBlurRef = useRef5(false);
  var valueChangedRef = useRef5(false);
  var preventDefaultRef = useRef5(false);
  var inputProps = {
    onMouseDown: function onMouseDown() {
      setTyping(true);
      triggerOpen(true);
    },
    onKeyDown: function onKeyDown(e) {
      var preventDefault = function preventDefault2() {
        preventDefaultRef.current = true;
      };
      _onKeyDown(e, preventDefault);
      if (preventDefaultRef.current) return;
      switch (e.which) {
        case KeyCode4.ENTER: {
          if (!open) {
            triggerOpen(true);
          } else if (onSubmit() !== false) {
            setTyping(true);
          }
          e.preventDefault();
          return;
        }
        case KeyCode4.TAB: {
          if (typing && open && !e.shiftKey) {
            setTyping(false);
            e.preventDefault();
          } else if (!typing && open) {
            if (!forwardKeyDown(e) && e.shiftKey) {
              setTyping(true);
              e.preventDefault();
            }
          }
          return;
        }
        case KeyCode4.ESC: {
          setTyping(true);
          onCancel();
          return;
        }
      }
      if (!open && ![KeyCode4.SHIFT].includes(e.which)) {
        triggerOpen(true);
      } else if (!typing) {
        forwardKeyDown(e);
      }
    },
    onFocus: function onFocus(e) {
      setTyping(true);
      setFocused(true);
      if (_onFocus) {
        _onFocus(e);
      }
    },
    onBlur: function onBlur(e) {
      if (preventBlurRef.current || !isClickOutside(document.activeElement)) {
        preventBlurRef.current = false;
        return;
      }
      if (blurToCancel) {
        setTimeout(function() {
          var _document = document,
            activeElement = _document.activeElement;
          while (activeElement && activeElement.shadowRoot) {
            activeElement = activeElement.shadowRoot.activeElement;
          }
          if (isClickOutside(activeElement)) {
            onCancel();
          }
        }, 0);
      } else if (open) {
        triggerOpen(false);
        if (valueChangedRef.current) {
          onSubmit();
        }
      }
      setFocused(false);
      if (_onBlur) {
        _onBlur(e);
      }
    }
  };
  useEffect2(
    function() {
      valueChangedRef.current = false;
    },
    [open]
  );
  useEffect2(
    function() {
      valueChangedRef.current = true;
    },
    [value]
  );
  useEffect2(function() {
    return addGlobalMouseDownEvent(function(e) {
      var target = getTargetFromEvent(e);
      if (open) {
        var clickedOutside = isClickOutside(target);
        if (!clickedOutside) {
          preventBlurRef.current = true;
          requestAnimationFrame(function() {
            preventBlurRef.current = false;
          });
        } else if (!focused || clickedOutside) {
          triggerOpen(false);
        }
      }
    });
  });
  return [
    inputProps,
    {
      focused,
      typing
    }
  ];
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useTextValueMapping.js
import _slicedToArray6 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React30 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useTextValueMapping(_ref) {
  var valueTexts = _ref.valueTexts,
    onTextChange = _ref.onTextChange;
  var _React$useState = React30.useState(''),
    _React$useState2 = _slicedToArray6(_React$useState, 2),
    text = _React$useState2[0],
    setInnerText = _React$useState2[1];
  var valueTextsRef = React30.useRef([]);
  valueTextsRef.current = valueTexts;
  function triggerTextChange(value) {
    setInnerText(value);
    onTextChange(value);
  }
  function resetText() {
    setInnerText(valueTextsRef.current[0]);
  }
  React30.useEffect(
    function() {
      if (
        valueTexts.every(function(valText) {
          return valText !== text;
        })
      ) {
        resetText();
      }
    },
    [valueTexts.join('||')]
  );
  return [text, triggerTextChange, resetText];
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useValueTexts.js
import shallowEqual from '/cdn/v99/shallowequal@1.1.0/es2022/shallowequal.development.js';
import useMemo3 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMemo.development.js';
function useValueTexts(value, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  return useMemo3(
    function() {
      if (!value) {
        return [[''], ''];
      }
      var firstValueText = '';
      var fullValueTexts = [];
      for (var i = 0; i < formatList.length; i += 1) {
        var format = formatList[i];
        var formatStr = formatValue(value, {
          generateConfig,
          locale,
          format
        });
        fullValueTexts.push(formatStr);
        if (i === 0) {
          firstValueText = formatStr;
        }
      }
      return [fullValueTexts, firstValueText];
    },
    [value, formatList],
    function(prev, next) {
      return prev[0] !== next[0] || !shallowEqual(prev[1], next[1]);
    }
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useHoverValue.js
import _slicedToArray7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import {
  useState as useState6,
  useEffect as useEffect4,
  useRef as useRef7
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useHoverValue(valueText, _ref) {
  var formatList = _ref.formatList,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale;
  var _useState = useState6(null),
    _useState2 = _slicedToArray7(_useState, 2),
    value = _useState2[0],
    internalSetValue = _useState2[1];
  var raf2 = useRef7(null);
  function setValue(val) {
    var immediately = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    cancelAnimationFrame(raf2.current);
    if (immediately) {
      internalSetValue(val);
      return;
    }
    raf2.current = requestAnimationFrame(function() {
      internalSetValue(val);
    });
  }
  var _useValueTexts = useValueTexts(value, {
      formatList,
      generateConfig,
      locale
    }),
    _useValueTexts2 = _slicedToArray7(_useValueTexts, 2),
    firstText = _useValueTexts2[1];
  function onEnter(date) {
    setValue(date);
  }
  function onLeave() {
    var immediately = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    setValue(null, immediately);
  }
  useEffect4(
    function() {
      onLeave(true);
    },
    [valueText]
  );
  useEffect4(function() {
    return function() {
      return cancelAnimationFrame(raf2.current);
    };
  }, []);
  return [firstText, onEnter, onLeave];
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/utils/warnUtil.js
import warning2 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function legacyPropsWarning(props) {
  var picker = props.picker,
    disabledHours = props.disabledHours,
    disabledMinutes = props.disabledMinutes,
    disabledSeconds = props.disabledSeconds;
  if (picker === 'time' && (disabledHours || disabledMinutes || disabledSeconds)) {
    warning2(
      false,
      "'disabledHours', 'disabledMinutes', 'disabledSeconds' will be removed in the next major version, please use 'disabledTime' instead."
    );
  }
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/usePresets.js
import * as React31 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import warning3 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
function usePresets(presets, legacyRanges) {
  return React31.useMemo(
    function() {
      if (presets) {
        return presets;
      }
      if (legacyRanges) {
        warning3(false, '`ranges` is deprecated. Please use `presets` instead.');
        var rangeLabels = Object.keys(legacyRanges);
        return rangeLabels.map(function(label) {
          var range = legacyRanges[label];
          var newValues = typeof range === 'function' ? range() : range;
          return {
            label,
            value: newValues
          };
        });
      }
      return [];
    },
    [presets, legacyRanges]
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/PresetPanel.js
import * as React32 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function PresetPanel(props) {
  var prefixCls = props.prefixCls,
    presets = props.presets,
    _onClick = props.onClick,
    onHover = props.onHover;
  if (!presets.length) {
    return null;
  }
  return /* @__PURE__ */ React32.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-presets')
    },
    /* @__PURE__ */ React32.createElement(
      'ul',
      null,
      presets.map(function(_ref, index) {
        var label = _ref.label,
          value = _ref.value;
        return /* @__PURE__ */ React32.createElement(
          'li',
          {
            key: index,
            onClick: function onClick() {
              _onClick(value);
            },
            onMouseEnter: function onMouseEnter() {
              onHover === null || onHover === void 0 ? void 0 : onHover(value);
            },
            onMouseLeave: function onMouseLeave() {
              onHover === null || onHover === void 0 ? void 0 : onHover(null);
            }
          },
          label
        );
      })
    )
  );
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/Picker.js
function InnerPicker(props) {
  var _classNames2;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-picker' : _ref$prefixCls,
    id = _ref.id,
    tabIndex = _ref.tabIndex,
    style = _ref.style,
    className = _ref.className,
    dropdownClassName = _ref.dropdownClassName,
    dropdownAlign = _ref.dropdownAlign,
    popupStyle = _ref.popupStyle,
    transitionName = _ref.transitionName,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale,
    inputReadOnly = _ref.inputReadOnly,
    allowClear = _ref.allowClear,
    autoFocus = _ref.autoFocus,
    showTime = _ref.showTime,
    _ref$picker = _ref.picker,
    picker = _ref$picker === void 0 ? 'date' : _ref$picker,
    format = _ref.format,
    use12Hours = _ref.use12Hours,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    presets = _ref.presets,
    open = _ref.open,
    defaultOpen = _ref.defaultOpen,
    defaultOpenValue = _ref.defaultOpenValue,
    suffixIcon = _ref.suffixIcon,
    clearIcon = _ref.clearIcon,
    disabled = _ref.disabled,
    disabledDate = _ref.disabledDate,
    placeholder = _ref.placeholder,
    getPopupContainer = _ref.getPopupContainer,
    pickerRef = _ref.pickerRef,
    panelRender = _ref.panelRender,
    onChange = _ref.onChange,
    onOpenChange = _ref.onOpenChange,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onContextMenu = _ref.onContextMenu,
    onClick = _ref.onClick,
    _onKeyDown = _ref.onKeyDown,
    _onSelect = _ref.onSelect,
    direction = _ref.direction,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete,
    inputRender = _ref.inputRender;
  var inputRef = React33.useRef(null);
  var needConfirmButton = (picker === 'date' && !!showTime) || picker === 'time';
  var presetList = usePresets(presets);
  if (true) {
    legacyPropsWarning(props);
  }
  var formatList = toArray(getDefaultFormat(format, picker, showTime, use12Hours));
  var panelDivRef = React33.useRef(null);
  var inputDivRef = React33.useRef(null);
  var containerRef = React33.useRef(null);
  var _useMergedState = useMergedState2(null, {
      value,
      defaultValue
    }),
    _useMergedState2 = _slicedToArray8(_useMergedState, 2),
    mergedValue = _useMergedState2[0],
    setInnerValue = _useMergedState2[1];
  var _React$useState = React33.useState(mergedValue),
    _React$useState2 = _slicedToArray8(_React$useState, 2),
    selectedValue = _React$useState2[0],
    setSelectedValue = _React$useState2[1];
  var operationRef = React33.useRef(null);
  var _useMergedState3 = useMergedState2(false, {
      value: open,
      defaultValue: defaultOpen,
      postState: function postState(postOpen) {
        return disabled ? false : postOpen;
      },
      onChange: function onChange2(newOpen) {
        if (onOpenChange) {
          onOpenChange(newOpen);
        }
        if (!newOpen && operationRef.current && operationRef.current.onClose) {
          operationRef.current.onClose();
        }
      }
    }),
    _useMergedState4 = _slicedToArray8(_useMergedState3, 2),
    mergedOpen = _useMergedState4[0],
    triggerInnerOpen = _useMergedState4[1];
  var _useValueTexts = useValueTexts(selectedValue, {
      formatList,
      generateConfig,
      locale
    }),
    _useValueTexts2 = _slicedToArray8(_useValueTexts, 2),
    valueTexts = _useValueTexts2[0],
    firstValueText = _useValueTexts2[1];
  var _useTextValueMapping = useTextValueMapping({
      valueTexts,
      onTextChange: function onTextChange(newText) {
        var inputDate = parseValue(newText, {
          locale,
          formatList,
          generateConfig
        });
        if (inputDate && (!disabledDate || !disabledDate(inputDate))) {
          setSelectedValue(inputDate);
        }
      }
    }),
    _useTextValueMapping2 = _slicedToArray8(_useTextValueMapping, 3),
    text = _useTextValueMapping2[0],
    triggerTextChange = _useTextValueMapping2[1],
    resetText = _useTextValueMapping2[2];
  var triggerChange = function triggerChange2(newValue) {
    setSelectedValue(newValue);
    setInnerValue(newValue);
    if (onChange && !isEqual(generateConfig, mergedValue, newValue)) {
      onChange(
        newValue,
        newValue
          ? formatValue(newValue, {
              generateConfig,
              locale,
              format: formatList[0]
            })
          : ''
      );
    }
  };
  var triggerOpen = function triggerOpen2(newOpen) {
    if (disabled && newOpen) {
      return;
    }
    triggerInnerOpen(newOpen);
  };
  var forwardKeyDown = function forwardKeyDown2(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      return operationRef.current.onKeyDown(e);
    }
    {
      warning4(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  };
  var onInternalClick = function onInternalClick2() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    onClick === null || onClick === void 0 ? void 0 : onClick.apply(void 0, args);
    if (inputRef.current) {
      inputRef.current.focus();
      triggerOpen(true);
    }
  };
  var _usePickerInput = usePickerInput({
      blurToCancel: needConfirmButton,
      open: mergedOpen,
      value: text,
      triggerOpen,
      forwardKeyDown,
      isClickOutside: function isClickOutside(target) {
        return !elementsContains([panelDivRef.current, inputDivRef.current, containerRef.current], target);
      },
      onSubmit: function onSubmit() {
        if (!selectedValue || (disabledDate && disabledDate(selectedValue))) {
          return false;
        }
        triggerChange(selectedValue);
        triggerOpen(false);
        resetText();
        return true;
      },
      onCancel: function onCancel() {
        triggerOpen(false);
        setSelectedValue(mergedValue);
        resetText();
      },
      onKeyDown: function onKeyDown(e, preventDefault) {
        _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
      },
      onFocus,
      onBlur
    }),
    _usePickerInput2 = _slicedToArray8(_usePickerInput, 2),
    inputProps = _usePickerInput2[0],
    _usePickerInput2$ = _usePickerInput2[1],
    focused = _usePickerInput2$.focused,
    typing = _usePickerInput2$.typing;
  React33.useEffect(
    function() {
      if (!mergedOpen) {
        setSelectedValue(mergedValue);
        if (!valueTexts.length || valueTexts[0] === '') {
          triggerTextChange('');
        } else if (firstValueText !== text) {
          resetText();
        }
      }
    },
    [mergedOpen, valueTexts]
  );
  React33.useEffect(
    function() {
      if (!mergedOpen) {
        resetText();
      }
    },
    [picker]
  );
  React33.useEffect(
    function() {
      setSelectedValue(mergedValue);
    },
    [mergedValue]
  );
  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      },
      blur: function blur() {
        if (inputRef.current) {
          inputRef.current.blur();
        }
      }
    };
  }
  var _useHoverValue = useHoverValue(text, {
      formatList,
      generateConfig,
      locale
    }),
    _useHoverValue2 = _slicedToArray8(_useHoverValue, 3),
    hoverValue = _useHoverValue2[0],
    onEnter = _useHoverValue2[1],
    onLeave = _useHoverValue2[2];
  var panelProps = _objectSpread6(
    _objectSpread6({}, props),
    {},
    {
      className: void 0,
      style: void 0,
      pickerValue: void 0,
      onPickerValueChange: void 0,
      onChange: null
    }
  );
  var panelNode = /* @__PURE__ */ React33.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-panel-layout')
    },
    /* @__PURE__ */ React33.createElement(PresetPanel, {
      prefixCls,
      presets: presetList,
      onClick: function onClick2(nextValue) {
        triggerChange(nextValue);
        triggerOpen(false);
      }
    }),
    /* @__PURE__ */ React33.createElement(
      PickerPanel_default,
      _extends20({}, panelProps, {
        generateConfig,
        className: classNames9(_defineProperty11({}, ''.concat(prefixCls, '-panel-focused'), !typing)),
        value: selectedValue,
        locale,
        tabIndex: -1,
        onSelect: function onSelect(date) {
          _onSelect === null || _onSelect === void 0 ? void 0 : _onSelect(date);
          setSelectedValue(date);
        },
        direction,
        onPanelChange: function onPanelChange(viewDate, mode) {
          var onPanelChange2 = props.onPanelChange;
          onLeave(true);
          onPanelChange2 === null || onPanelChange2 === void 0 ? void 0 : onPanelChange2(viewDate, mode);
        }
      })
    )
  );
  if (panelRender) {
    panelNode = panelRender(panelNode);
  }
  var panel = /* @__PURE__ */ React33.createElement(
    'div',
    {
      className: ''.concat(prefixCls, '-panel-container'),
      ref: panelDivRef,
      onMouseDown: function onMouseDown2(e) {
        e.preventDefault();
      }
    },
    panelNode
  );
  var suffixNode;
  if (suffixIcon) {
    suffixNode = /* @__PURE__ */ React33.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-suffix')
      },
      suffixIcon
    );
  }
  var clearNode;
  if (allowClear && mergedValue && !disabled) {
    clearNode = /* @__PURE__ */ React33.createElement(
      'span',
      {
        onMouseDown: function onMouseDown2(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        onMouseUp: function onMouseUp2(e) {
          e.preventDefault();
          e.stopPropagation();
          triggerChange(null);
          triggerOpen(false);
        },
        className: ''.concat(prefixCls, '-clear'),
        role: 'button'
      },
      clearIcon ||
        /* @__PURE__ */ React33.createElement('span', {
          className: ''.concat(prefixCls, '-clear-btn')
        })
    );
  }
  var mergedInputProps = _objectSpread6(
    _objectSpread6(
      _objectSpread6(
        {
          id,
          tabIndex,
          disabled,
          readOnly: inputReadOnly || typeof formatList[0] === 'function' || !typing,
          value: hoverValue || text,
          onChange: function onChange2(e) {
            triggerTextChange(e.target.value);
          },
          autoFocus,
          placeholder,
          ref: inputRef,
          title: text
        },
        inputProps
      ),
      {},
      {
        size: getInputSize(picker, formatList[0], generateConfig)
      },
      getDataOrAriaProps(props)
    ),
    {},
    {
      autoComplete
    }
  );
  var inputNode = inputRender
    ? inputRender(mergedInputProps)
    : /* @__PURE__ */ React33.createElement('input', mergedInputProps);
  if (true) {
    warning4(
      !defaultOpenValue,
      '`defaultOpenValue` may confuse user for the current value status. Please use `defaultValue` instead.'
    );
  }
  var onContextSelect = function onContextSelect2(date, type) {
    if (type === 'submit' || (type !== 'key' && !needConfirmButton)) {
      triggerChange(date);
      triggerOpen(false);
    }
  };
  var popupPlacement = direction === 'rtl' ? 'bottomRight' : 'bottomLeft';
  return /* @__PURE__ */ React33.createElement(
    PanelContext_default.Provider,
    {
      value: {
        operationRef,
        hideHeader: picker === 'time',
        onSelect: onContextSelect,
        open: mergedOpen,
        defaultOpenValue,
        onDateMouseEnter: onEnter,
        onDateMouseLeave: onLeave
      }
    },
    /* @__PURE__ */ React33.createElement(
      PickerTrigger_default,
      {
        visible: mergedOpen,
        popupElement: panel,
        popupStyle,
        prefixCls,
        dropdownClassName,
        dropdownAlign,
        getPopupContainer,
        transitionName,
        popupPlacement,
        direction
      },
      /* @__PURE__ */ React33.createElement(
        'div',
        {
          ref: containerRef,
          className: classNames9(
            prefixCls,
            className,
            ((_classNames2 = {}),
            _defineProperty11(_classNames2, ''.concat(prefixCls, '-disabled'), disabled),
            _defineProperty11(_classNames2, ''.concat(prefixCls, '-focused'), focused),
            _defineProperty11(_classNames2, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
            _classNames2)
          ),
          style,
          onMouseDown,
          onMouseUp,
          onMouseEnter,
          onMouseLeave,
          onContextMenu,
          onClick: onInternalClick
        },
        /* @__PURE__ */ React33.createElement(
          'div',
          {
            className: classNames9(
              ''.concat(prefixCls, '-input'),
              _defineProperty11({}, ''.concat(prefixCls, '-input-placeholder'), !!hoverValue)
            ),
            ref: inputDivRef
          },
          inputNode,
          suffixNode,
          clearNode
        )
      )
    )
  );
}
var Picker = /* @__PURE__ */ (function(_React$Component) {
  _inherits(Picker2, _React$Component);
  var _super = _createSuper(Picker2);
  function Picker2() {
    var _this;
    _classCallCheck(this, Picker2);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty11(_assertThisInitialized(_this), 'pickerRef', /* @__PURE__ */ React33.createRef());
    _defineProperty11(_assertThisInitialized(_this), 'focus', function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    });
    _defineProperty11(_assertThisInitialized(_this), 'blur', function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    });
    return _this;
  }
  _createClass(Picker2, [
    {
      key: 'render',
      value: function render() {
        return /* @__PURE__ */ React33.createElement(
          InnerPicker,
          _extends20({}, this.props, {
            pickerRef: this.pickerRef
          })
        );
      }
    }
  ]);
  return Picker2;
})(React33.Component);
var Picker_default = Picker;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/RangePicker.js
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _assertThisInitialized2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/assertThisInitialized.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import _extends21 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _typeof3 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/typeof.development.js';
import _objectSpread7 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty12 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _slicedToArray10 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React36 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import {
  useRef as useRef10,
  useEffect as useEffect6,
  useState as useState9
} from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames10 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import warning5 from '/cdn/v99/rc-util@5.24.6/es2022/es/warning.development.js';
import useMergedState3 from '/cdn/v99/rc-util@5.24.6/es2022/es/hooks/useMergedState.development.js';

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useRangeDisabled.js
import * as React34 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function useRangeDisabled(_ref, disabledStart, disabledEnd) {
  var picker = _ref.picker,
    locale = _ref.locale,
    selectedValue = _ref.selectedValue,
    disabledDate = _ref.disabledDate,
    disabled = _ref.disabled,
    generateConfig = _ref.generateConfig;
  var startDate = getValue(selectedValue, 0);
  var endDate = getValue(selectedValue, 1);
  function weekFirstDate(date) {
    return generateConfig.locale.getWeekFirstDate(locale.locale, date);
  }
  function monthNumber(date) {
    var year = generateConfig.getYear(date);
    var month = generateConfig.getMonth(date);
    return year * 100 + month;
  }
  function quarterNumber(date) {
    var year = generateConfig.getYear(date);
    var quarter = getQuarter(generateConfig, date);
    return year * 10 + quarter;
  }
  var disabledStartDate = React34.useCallback(
    function(date) {
      if (disabledDate && disabledDate(date)) {
        return true;
      }
      if (disabled[1] && endDate) {
        return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
      }
      if (disabledStart && endDate) {
        switch (picker) {
          case 'quarter':
            return quarterNumber(date) > quarterNumber(endDate);
          case 'month':
            return monthNumber(date) > monthNumber(endDate);
          case 'week':
            return weekFirstDate(date) > weekFirstDate(endDate);
          default:
            return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(date, endDate);
        }
      }
      return false;
    },
    [disabledDate, disabled[1], endDate, disabledStart]
  );
  var disabledEndDate = React34.useCallback(
    function(date) {
      if (disabledDate && disabledDate(date)) {
        return true;
      }
      if (disabled[0] && startDate) {
        return !isSameDate(generateConfig, date, endDate) && generateConfig.isAfter(startDate, date);
      }
      if (disabledEnd && startDate) {
        switch (picker) {
          case 'quarter':
            return quarterNumber(date) < quarterNumber(startDate);
          case 'month':
            return monthNumber(date) < monthNumber(startDate);
          case 'week':
            return weekFirstDate(date) < weekFirstDate(startDate);
          default:
            return !isSameDate(generateConfig, date, startDate) && generateConfig.isAfter(startDate, date);
        }
      }
      return false;
    },
    [disabledDate, disabled[0], startDate, disabledEnd]
  );
  return [disabledStartDate, disabledEndDate];
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/hooks/useRangeViewDates.js
import _slicedToArray9 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import * as React35 from '/cdn/stable/react@18.2.0/es2022/react.development.js';
function getStartEndDistance(startDate, endDate, picker, generateConfig) {
  var startNext = getClosingViewDate(startDate, picker, generateConfig, 1);
  function getDistance(compareFunc) {
    if (compareFunc(startDate, endDate)) {
      return 'same';
    }
    if (compareFunc(startNext, endDate)) {
      return 'closing';
    }
    return 'far';
  }
  switch (picker) {
    case 'year':
      return getDistance(function(start, end) {
        return isSameDecade(generateConfig, start, end);
      });
    case 'quarter':
    case 'month':
      return getDistance(function(start, end) {
        return isSameYear(generateConfig, start, end);
      });
    default:
      return getDistance(function(start, end) {
        return isSameMonth(generateConfig, start, end);
      });
  }
}
function getRangeViewDate(values, index, picker, generateConfig) {
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  if (index === 0) {
    return startDate;
  }
  if (startDate && endDate) {
    var distance = getStartEndDistance(startDate, endDate, picker, generateConfig);
    switch (distance) {
      case 'same':
        return startDate;
      case 'closing':
        return startDate;
      default:
        return getClosingViewDate(endDate, picker, generateConfig, -1);
    }
  }
  return startDate;
}
function useRangeViewDates(_ref) {
  var values = _ref.values,
    picker = _ref.picker,
    defaultDates = _ref.defaultDates,
    generateConfig = _ref.generateConfig;
  var _React$useState = React35.useState(function() {
      return [getValue(defaultDates, 0), getValue(defaultDates, 1)];
    }),
    _React$useState2 = _slicedToArray9(_React$useState, 2),
    defaultViewDates = _React$useState2[0],
    setDefaultViewDates = _React$useState2[1];
  var _React$useState3 = React35.useState(null),
    _React$useState4 = _slicedToArray9(_React$useState3, 2),
    viewDates = _React$useState4[0],
    setInternalViewDates = _React$useState4[1];
  var startDate = getValue(values, 0);
  var endDate = getValue(values, 1);
  function getViewDate(index) {
    if (defaultViewDates[index]) {
      return defaultViewDates[index];
    }
    return (
      getValue(viewDates, index) ||
      getRangeViewDate(values, index, picker, generateConfig) ||
      startDate ||
      endDate ||
      generateConfig.getNow()
    );
  }
  function setViewDate(viewDate, index) {
    if (viewDate) {
      var newViewDates = updateValues(viewDates, viewDate, index);
      setDefaultViewDates(updateValues(defaultViewDates, null, index) || [null, null]);
      var anotherIndex = (index + 1) % 2;
      if (!getValue(values, anotherIndex)) {
        newViewDates = updateValues(newViewDates, viewDate, anotherIndex);
      }
      setInternalViewDates(newViewDates);
    } else if (startDate || endDate) {
      setInternalViewDates(null);
    }
  }
  return [getViewDate, setViewDate];
}

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/RangePicker.js
function reorderValues(values, generateConfig) {
  if (values && values[0] && values[1] && generateConfig.isAfter(values[0], values[1])) {
    return [values[1], values[0]];
  }
  return values;
}
function canValueTrigger(value, index, disabled, allowEmpty) {
  if (value) {
    return true;
  }
  if (allowEmpty && allowEmpty[index]) {
    return true;
  }
  if (disabled[(index + 1) % 2]) {
    return true;
  }
  return false;
}
function InnerRangePicker(props) {
  var _classNames2, _classNames3, _classNames4;
  var _ref = props,
    _ref$prefixCls = _ref.prefixCls,
    prefixCls = _ref$prefixCls === void 0 ? 'rc-picker' : _ref$prefixCls,
    id = _ref.id,
    style = _ref.style,
    className = _ref.className,
    popupStyle = _ref.popupStyle,
    dropdownClassName = _ref.dropdownClassName,
    transitionName = _ref.transitionName,
    dropdownAlign = _ref.dropdownAlign,
    getPopupContainer = _ref.getPopupContainer,
    generateConfig = _ref.generateConfig,
    locale = _ref.locale,
    placeholder = _ref.placeholder,
    autoFocus = _ref.autoFocus,
    disabled = _ref.disabled,
    format = _ref.format,
    _ref$picker = _ref.picker,
    picker = _ref$picker === void 0 ? 'date' : _ref$picker,
    showTime = _ref.showTime,
    use12Hours = _ref.use12Hours,
    _ref$separator = _ref.separator,
    separator = _ref$separator === void 0 ? '~' : _ref$separator,
    value = _ref.value,
    defaultValue = _ref.defaultValue,
    defaultPickerValue = _ref.defaultPickerValue,
    open = _ref.open,
    defaultOpen = _ref.defaultOpen,
    disabledDate = _ref.disabledDate,
    _disabledTime = _ref.disabledTime,
    dateRender = _ref.dateRender,
    panelRender = _ref.panelRender,
    presets = _ref.presets,
    ranges = _ref.ranges,
    allowEmpty = _ref.allowEmpty,
    allowClear = _ref.allowClear,
    suffixIcon = _ref.suffixIcon,
    clearIcon = _ref.clearIcon,
    pickerRef = _ref.pickerRef,
    inputReadOnly = _ref.inputReadOnly,
    mode = _ref.mode,
    renderExtraFooter = _ref.renderExtraFooter,
    onChange = _ref.onChange,
    onOpenChange = _ref.onOpenChange,
    onPanelChange = _ref.onPanelChange,
    onCalendarChange = _ref.onCalendarChange,
    _onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    onMouseDown = _ref.onMouseDown,
    onMouseUp = _ref.onMouseUp,
    onMouseEnter = _ref.onMouseEnter,
    onMouseLeave = _ref.onMouseLeave,
    onClick = _ref.onClick,
    _onOk = _ref.onOk,
    _onKeyDown = _ref.onKeyDown,
    components = _ref.components,
    order = _ref.order,
    direction = _ref.direction,
    activePickerIndex = _ref.activePickerIndex,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? 'off' : _ref$autoComplete;
  var needConfirmButton = (picker === 'date' && !!showTime) || picker === 'time';
  var openRecordsRef = useRef10({});
  var containerRef = useRef10(null);
  var panelDivRef = useRef10(null);
  var startInputDivRef = useRef10(null);
  var endInputDivRef = useRef10(null);
  var separatorRef = useRef10(null);
  var startInputRef = useRef10(null);
  var endInputRef = useRef10(null);
  var arrowRef = useRef10(null);
  if (true) {
    legacyPropsWarning(props);
  }
  var formatList = toArray(getDefaultFormat(format, picker, showTime, use12Hours));
  var _useMergedState = useMergedState3(0, {
      value: activePickerIndex
    }),
    _useMergedState2 = _slicedToArray10(_useMergedState, 2),
    mergedActivePickerIndex = _useMergedState2[0],
    setMergedActivePickerIndex = _useMergedState2[1];
  var operationRef = useRef10(null);
  var mergedDisabled = React36.useMemo(
    function() {
      if (Array.isArray(disabled)) {
        return disabled;
      }
      return [disabled || false, disabled || false];
    },
    [disabled]
  );
  var _useMergedState3 = useMergedState3(null, {
      value,
      defaultValue,
      postState: function postState(values) {
        return picker === 'time' && !order ? values : reorderValues(values, generateConfig);
      }
    }),
    _useMergedState4 = _slicedToArray10(_useMergedState3, 2),
    mergedValue = _useMergedState4[0],
    setInnerValue = _useMergedState4[1];
  var _useRangeViewDates = useRangeViewDates({
      values: mergedValue,
      picker,
      defaultDates: defaultPickerValue,
      generateConfig
    }),
    _useRangeViewDates2 = _slicedToArray10(_useRangeViewDates, 2),
    getViewDate = _useRangeViewDates2[0],
    setViewDate = _useRangeViewDates2[1];
  var _useMergedState5 = useMergedState3(mergedValue, {
      postState: function postState(values) {
        var postValues = values;
        if (mergedDisabled[0] && mergedDisabled[1]) {
          return postValues;
        }
        for (var i = 0; i < 2; i += 1) {
          if (mergedDisabled[i] && !getValue(postValues, i) && !getValue(allowEmpty, i)) {
            postValues = updateValues(postValues, generateConfig.getNow(), i);
          }
        }
        return postValues;
      }
    }),
    _useMergedState6 = _slicedToArray10(_useMergedState5, 2),
    selectedValue = _useMergedState6[0],
    setSelectedValue = _useMergedState6[1];
  var _useMergedState7 = useMergedState3([picker, picker], {
      value: mode
    }),
    _useMergedState8 = _slicedToArray10(_useMergedState7, 2),
    mergedModes = _useMergedState8[0],
    setInnerModes = _useMergedState8[1];
  useEffect6(
    function() {
      setInnerModes([picker, picker]);
    },
    [picker]
  );
  var triggerModesChange = function triggerModesChange2(modes, values) {
    setInnerModes(modes);
    if (onPanelChange) {
      onPanelChange(values, modes);
    }
  };
  var _useRangeDisabled = useRangeDisabled(
      {
        picker,
        selectedValue,
        locale,
        disabled: mergedDisabled,
        disabledDate,
        generateConfig
      },
      openRecordsRef.current[1],
      openRecordsRef.current[0]
    ),
    _useRangeDisabled2 = _slicedToArray10(_useRangeDisabled, 2),
    disabledStartDate = _useRangeDisabled2[0],
    disabledEndDate = _useRangeDisabled2[1];
  var _useMergedState9 = useMergedState3(false, {
      value: open,
      defaultValue: defaultOpen,
      postState: function postState(postOpen) {
        return mergedDisabled[mergedActivePickerIndex] ? false : postOpen;
      },
      onChange: function onChange2(newOpen) {
        if (onOpenChange) {
          onOpenChange(newOpen);
        }
        if (!newOpen && operationRef.current && operationRef.current.onClose) {
          operationRef.current.onClose();
        }
      }
    }),
    _useMergedState10 = _slicedToArray10(_useMergedState9, 2),
    mergedOpen = _useMergedState10[0],
    triggerInnerOpen = _useMergedState10[1];
  var startOpen = mergedOpen && mergedActivePickerIndex === 0;
  var endOpen = mergedOpen && mergedActivePickerIndex === 1;
  var _useState = useState9(0),
    _useState2 = _slicedToArray10(_useState, 2),
    popupMinWidth = _useState2[0],
    setPopupMinWidth = _useState2[1];
  useEffect6(
    function() {
      if (!mergedOpen && containerRef.current) {
        setPopupMinWidth(containerRef.current.offsetWidth);
      }
    },
    [mergedOpen]
  );
  var triggerRef = React36.useRef();
  function _triggerOpen(newOpen, index) {
    if (newOpen) {
      clearTimeout(triggerRef.current);
      openRecordsRef.current[index] = true;
      setMergedActivePickerIndex(index);
      triggerInnerOpen(newOpen);
      if (!mergedOpen) {
        setViewDate(null, index);
      }
    } else if (mergedActivePickerIndex === index) {
      triggerInnerOpen(newOpen);
      var openRecords = openRecordsRef.current;
      triggerRef.current = setTimeout(function() {
        if (openRecords === openRecordsRef.current) {
          openRecordsRef.current = {};
        }
      });
    }
  }
  function triggerOpenAndFocus(index) {
    _triggerOpen(true, index);
    setTimeout(function() {
      var inputRef = [startInputRef, endInputRef][index];
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  }
  function triggerChange(newValue, sourceIndex) {
    var values = newValue;
    var startValue = getValue(values, 0);
    var endValue = getValue(values, 1);
    if (startValue && endValue && generateConfig.isAfter(startValue, endValue)) {
      if (
        (picker === 'week' && !isSameWeek(generateConfig, locale.locale, startValue, endValue)) ||
        (picker === 'quarter' && !isSameQuarter(generateConfig, startValue, endValue)) ||
        (picker !== 'week' &&
          picker !== 'quarter' &&
          picker !== 'time' &&
          !isSameDate(generateConfig, startValue, endValue))
      ) {
        if (sourceIndex === 0) {
          values = [startValue, null];
          endValue = null;
        } else {
          startValue = null;
          values = [null, endValue];
        }
        openRecordsRef.current = _defineProperty12({}, sourceIndex, true);
      } else if (picker !== 'time' || order !== false) {
        values = reorderValues(values, generateConfig);
      }
    }
    setSelectedValue(values);
    var startStr2 =
      values && values[0]
        ? formatValue(values[0], {
            generateConfig,
            locale,
            format: formatList[0]
          })
        : '';
    var endStr2 =
      values && values[1]
        ? formatValue(values[1], {
            generateConfig,
            locale,
            format: formatList[0]
          })
        : '';
    if (onCalendarChange) {
      var _info = {
        range: sourceIndex === 0 ? 'start' : 'end'
      };
      onCalendarChange(values, [startStr2, endStr2], _info);
    }
    var canStartValueTrigger = canValueTrigger(startValue, 0, mergedDisabled, allowEmpty);
    var canEndValueTrigger = canValueTrigger(endValue, 1, mergedDisabled, allowEmpty);
    var canTrigger = values === null || (canStartValueTrigger && canEndValueTrigger);
    if (canTrigger) {
      setInnerValue(values);
      if (
        onChange &&
        (!isEqual(generateConfig, getValue(mergedValue, 0), startValue) ||
          !isEqual(generateConfig, getValue(mergedValue, 1), endValue))
      ) {
        onChange(values, [startStr2, endStr2]);
      }
    }
    var nextOpenIndex = null;
    if (sourceIndex === 0 && !mergedDisabled[1]) {
      nextOpenIndex = 1;
    } else if (sourceIndex === 1 && !mergedDisabled[0]) {
      nextOpenIndex = 0;
    }
    if (
      nextOpenIndex !== null &&
      nextOpenIndex !== mergedActivePickerIndex &&
      (!openRecordsRef.current[nextOpenIndex] || !getValue(values, nextOpenIndex)) &&
      getValue(values, sourceIndex)
    ) {
      triggerOpenAndFocus(nextOpenIndex);
    } else {
      _triggerOpen(false, sourceIndex);
    }
  }
  var forwardKeyDown = function forwardKeyDown2(e) {
    if (mergedOpen && operationRef.current && operationRef.current.onKeyDown) {
      return operationRef.current.onKeyDown(e);
    }
    {
      warning5(false, 'Picker not correct forward KeyDown operation. Please help to fire issue about this.');
      return false;
    }
  };
  var sharedTextHooksProps = {
    formatList,
    generateConfig,
    locale
  };
  var _useValueTexts = useValueTexts(getValue(selectedValue, 0), sharedTextHooksProps),
    _useValueTexts2 = _slicedToArray10(_useValueTexts, 2),
    startValueTexts = _useValueTexts2[0],
    firstStartValueText = _useValueTexts2[1];
  var _useValueTexts3 = useValueTexts(getValue(selectedValue, 1), sharedTextHooksProps),
    _useValueTexts4 = _slicedToArray10(_useValueTexts3, 2),
    endValueTexts = _useValueTexts4[0],
    firstEndValueText = _useValueTexts4[1];
  var _onTextChange = function onTextChange(newText, index) {
    var inputDate = parseValue(newText, {
      locale,
      formatList,
      generateConfig
    });
    var disabledFunc = index === 0 ? disabledStartDate : disabledEndDate;
    if (inputDate && !disabledFunc(inputDate)) {
      setSelectedValue(updateValues(selectedValue, inputDate, index));
      setViewDate(inputDate, index);
    }
  };
  var _useTextValueMapping = useTextValueMapping({
      valueTexts: startValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 0);
      }
    }),
    _useTextValueMapping2 = _slicedToArray10(_useTextValueMapping, 3),
    startText = _useTextValueMapping2[0],
    triggerStartTextChange = _useTextValueMapping2[1],
    resetStartText = _useTextValueMapping2[2];
  var _useTextValueMapping3 = useTextValueMapping({
      valueTexts: endValueTexts,
      onTextChange: function onTextChange(newText) {
        return _onTextChange(newText, 1);
      }
    }),
    _useTextValueMapping4 = _slicedToArray10(_useTextValueMapping3, 3),
    endText = _useTextValueMapping4[0],
    triggerEndTextChange = _useTextValueMapping4[1],
    resetEndText = _useTextValueMapping4[2];
  var _useState3 = useState9(null),
    _useState4 = _slicedToArray10(_useState3, 2),
    rangeHoverValue = _useState4[0],
    setRangeHoverValue = _useState4[1];
  var _useState5 = useState9(null),
    _useState6 = _slicedToArray10(_useState5, 2),
    hoverRangedValue = _useState6[0],
    setHoverRangedValue = _useState6[1];
  var _useHoverValue = useHoverValue(startText, {
      formatList,
      generateConfig,
      locale
    }),
    _useHoverValue2 = _slicedToArray10(_useHoverValue, 3),
    startHoverValue = _useHoverValue2[0],
    onStartEnter = _useHoverValue2[1],
    onStartLeave = _useHoverValue2[2];
  var _useHoverValue3 = useHoverValue(endText, {
      formatList,
      generateConfig,
      locale
    }),
    _useHoverValue4 = _slicedToArray10(_useHoverValue3, 3),
    endHoverValue = _useHoverValue4[0],
    onEndEnter = _useHoverValue4[1],
    onEndLeave = _useHoverValue4[2];
  var onDateMouseEnter = function onDateMouseEnter2(date) {
    setHoverRangedValue(updateValues(selectedValue, date, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartEnter(date);
    } else {
      onEndEnter(date);
    }
  };
  var onDateMouseLeave = function onDateMouseLeave2() {
    setHoverRangedValue(updateValues(selectedValue, null, mergedActivePickerIndex));
    if (mergedActivePickerIndex === 0) {
      onStartLeave();
    } else {
      onEndLeave();
    }
  };
  var getSharedInputHookProps = function getSharedInputHookProps2(index, resetText) {
    return {
      blurToCancel: needConfirmButton,
      forwardKeyDown,
      onBlur,
      isClickOutside: function isClickOutside(target) {
        return !elementsContains(
          [panelDivRef.current, startInputDivRef.current, endInputDivRef.current, containerRef.current],
          target
        );
      },
      onFocus: function onFocus(e) {
        setMergedActivePickerIndex(index);
        if (_onFocus) {
          _onFocus(e);
        }
      },
      triggerOpen: function triggerOpen(newOpen) {
        _triggerOpen(newOpen, index);
      },
      onSubmit: function onSubmit() {
        if (!selectedValue || (disabledDate && disabledDate(selectedValue[index]))) {
          return false;
        }
        triggerChange(selectedValue, index);
        resetText();
      },
      onCancel: function onCancel() {
        _triggerOpen(false, index);
        setSelectedValue(mergedValue);
        resetText();
      }
    };
  };
  var _usePickerInput = usePickerInput(
      _objectSpread7(
        _objectSpread7({}, getSharedInputHookProps(0, resetStartText)),
        {},
        {
          open: startOpen,
          value: startText,
          onKeyDown: function onKeyDown(e, preventDefault) {
            _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
          }
        }
      )
    ),
    _usePickerInput2 = _slicedToArray10(_usePickerInput, 2),
    startInputProps = _usePickerInput2[0],
    _usePickerInput2$ = _usePickerInput2[1],
    startFocused = _usePickerInput2$.focused,
    startTyping = _usePickerInput2$.typing;
  var _usePickerInput3 = usePickerInput(
      _objectSpread7(
        _objectSpread7({}, getSharedInputHookProps(1, resetEndText)),
        {},
        {
          open: endOpen,
          value: endText,
          onKeyDown: function onKeyDown(e, preventDefault) {
            _onKeyDown === null || _onKeyDown === void 0 ? void 0 : _onKeyDown(e, preventDefault);
          }
        }
      )
    ),
    _usePickerInput4 = _slicedToArray10(_usePickerInput3, 2),
    endInputProps = _usePickerInput4[0],
    _usePickerInput4$ = _usePickerInput4[1],
    endFocused = _usePickerInput4$.focused,
    endTyping = _usePickerInput4$.typing;
  var onPickerClick = function onPickerClick2(e) {
    if (onClick) {
      onClick(e);
    }
    if (!mergedOpen && !startInputRef.current.contains(e.target) && !endInputRef.current.contains(e.target)) {
      if (!mergedDisabled[0]) {
        triggerOpenAndFocus(0);
      } else if (!mergedDisabled[1]) {
        triggerOpenAndFocus(1);
      }
    }
  };
  var onPickerMouseDown = function onPickerMouseDown2(e) {
    if (onMouseDown) {
      onMouseDown(e);
    }
    if (
      mergedOpen &&
      (startFocused || endFocused) &&
      !startInputRef.current.contains(e.target) &&
      !endInputRef.current.contains(e.target)
    ) {
      e.preventDefault();
    }
  };
  var startStr =
    mergedValue && mergedValue[0]
      ? formatValue(mergedValue[0], {
          locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig
        })
      : '';
  var endStr =
    mergedValue && mergedValue[1]
      ? formatValue(mergedValue[1], {
          locale,
          format: 'YYYYMMDDHHmmss',
          generateConfig
        })
      : '';
  useEffect6(
    function() {
      if (!mergedOpen) {
        setSelectedValue(mergedValue);
        if (!startValueTexts.length || startValueTexts[0] === '') {
          triggerStartTextChange('');
        } else if (firstStartValueText !== startText) {
          resetStartText();
        }
        if (!endValueTexts.length || endValueTexts[0] === '') {
          triggerEndTextChange('');
        } else if (firstEndValueText !== endText) {
          resetEndText();
        }
      }
    },
    [mergedOpen, startValueTexts, endValueTexts]
  );
  useEffect6(
    function() {
      setSelectedValue(mergedValue);
    },
    [startStr, endStr]
  );
  if (true) {
    if (
      value &&
      Array.isArray(disabled) &&
      ((getValue(disabled, 0) && !getValue(value, 0)) || (getValue(disabled, 1) && !getValue(value, 1)))
    ) {
      warning5(false, '`disabled` should not set with empty `value`. You should set `allowEmpty` or `value` instead.');
    }
  }
  if (pickerRef) {
    pickerRef.current = {
      focus: function focus() {
        if (startInputRef.current) {
          startInputRef.current.focus();
        }
      },
      blur: function blur() {
        if (startInputRef.current) {
          startInputRef.current.blur();
        }
        if (endInputRef.current) {
          endInputRef.current.blur();
        }
      }
    };
  }
  var presetList = usePresets(presets, ranges);
  function renderPanel() {
    var panelPosition = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var panelProps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var panelHoverRangedValue = null;
    if (
      mergedOpen &&
      hoverRangedValue &&
      hoverRangedValue[0] &&
      hoverRangedValue[1] &&
      generateConfig.isAfter(hoverRangedValue[1], hoverRangedValue[0])
    ) {
      panelHoverRangedValue = hoverRangedValue;
    }
    var panelShowTime = showTime;
    if (showTime && _typeof3(showTime) === 'object' && showTime.defaultValue) {
      var timeDefaultValues = showTime.defaultValue;
      panelShowTime = _objectSpread7(
        _objectSpread7({}, showTime),
        {},
        {
          defaultValue: getValue(timeDefaultValues, mergedActivePickerIndex) || void 0
        }
      );
    }
    var panelDateRender = null;
    if (dateRender) {
      panelDateRender = function panelDateRender2(date, today) {
        return dateRender(date, today, {
          range: mergedActivePickerIndex ? 'end' : 'start'
        });
      };
    }
    return /* @__PURE__ */ React36.createElement(
      RangeContext_default.Provider,
      {
        value: {
          inRange: true,
          panelPosition,
          rangedValue: rangeHoverValue || selectedValue,
          hoverRangedValue: panelHoverRangedValue
        }
      },
      /* @__PURE__ */ React36.createElement(
        PickerPanel_default,
        _extends21({}, props, panelProps, {
          dateRender: panelDateRender,
          showTime: panelShowTime,
          mode: mergedModes[mergedActivePickerIndex],
          generateConfig,
          style: void 0,
          direction,
          disabledDate: mergedActivePickerIndex === 0 ? disabledStartDate : disabledEndDate,
          disabledTime: function disabledTime(date) {
            if (_disabledTime) {
              return _disabledTime(date, mergedActivePickerIndex === 0 ? 'start' : 'end');
            }
            return false;
          },
          className: classNames10(
            _defineProperty12(
              {},
              ''.concat(prefixCls, '-panel-focused'),
              mergedActivePickerIndex === 0 ? !startTyping : !endTyping
            )
          ),
          value: getValue(selectedValue, mergedActivePickerIndex),
          locale,
          tabIndex: -1,
          onPanelChange: function onPanelChange2(date, newMode) {
            if (mergedActivePickerIndex === 0) {
              onStartLeave(true);
            }
            if (mergedActivePickerIndex === 1) {
              onEndLeave(true);
            }
            triggerModesChange(
              updateValues(mergedModes, newMode, mergedActivePickerIndex),
              updateValues(selectedValue, date, mergedActivePickerIndex)
            );
            var viewDate = date;
            if (panelPosition === 'right' && mergedModes[mergedActivePickerIndex] === newMode) {
              viewDate = getClosingViewDate(viewDate, newMode, generateConfig, -1);
            }
            setViewDate(viewDate, mergedActivePickerIndex);
          },
          onOk: null,
          onSelect: void 0,
          onChange: void 0,
          defaultValue: mergedActivePickerIndex === 0 ? getValue(selectedValue, 1) : getValue(selectedValue, 0)
        })
      )
    );
  }
  var arrowLeft = 0;
  var panelLeft = 0;
  if (mergedActivePickerIndex && startInputDivRef.current && separatorRef.current && panelDivRef.current) {
    arrowLeft = startInputDivRef.current.offsetWidth + separatorRef.current.offsetWidth;
    var arrowMarginLeft =
      arrowRef.current.offsetLeft > arrowLeft ? arrowRef.current.offsetLeft - arrowLeft : arrowRef.current.offsetLeft;
    if (
      panelDivRef.current.offsetWidth &&
      arrowRef.current.offsetWidth &&
      arrowLeft >
        panelDivRef.current.offsetWidth - arrowRef.current.offsetWidth - (direction === 'rtl' ? 0 : arrowMarginLeft)
    ) {
      panelLeft = arrowLeft;
    }
  }
  var arrowPositionStyle =
    direction === 'rtl'
      ? {
          right: arrowLeft
        }
      : {
          left: arrowLeft
        };
  function renderPanels() {
    var panels;
    var extraNode = getExtraFooter(prefixCls, mergedModes[mergedActivePickerIndex], renderExtraFooter);
    var rangesNode = getRanges({
      prefixCls,
      components,
      needConfirmButton,
      okDisabled:
        !getValue(selectedValue, mergedActivePickerIndex) ||
        (disabledDate && disabledDate(selectedValue[mergedActivePickerIndex])),
      locale,
      onOk: function onOk() {
        if (getValue(selectedValue, mergedActivePickerIndex)) {
          triggerChange(selectedValue, mergedActivePickerIndex);
          if (_onOk) {
            _onOk(selectedValue);
          }
        }
      }
    });
    if (picker !== 'time' && !showTime) {
      var viewDate = getViewDate(mergedActivePickerIndex);
      var nextViewDate = getClosingViewDate(viewDate, picker, generateConfig);
      var currentMode = mergedModes[mergedActivePickerIndex];
      var showDoublePanel = currentMode === picker;
      var leftPanel = renderPanel(showDoublePanel ? 'left' : false, {
        pickerValue: viewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(newViewDate, mergedActivePickerIndex);
        }
      });
      var rightPanel = renderPanel('right', {
        pickerValue: nextViewDate,
        onPickerValueChange: function onPickerValueChange(newViewDate) {
          setViewDate(getClosingViewDate(newViewDate, picker, generateConfig, -1), mergedActivePickerIndex);
        }
      });
      if (direction === 'rtl') {
        panels = /* @__PURE__ */ React36.createElement(
          React36.Fragment,
          null,
          rightPanel,
          showDoublePanel && leftPanel
        );
      } else {
        panels = /* @__PURE__ */ React36.createElement(
          React36.Fragment,
          null,
          leftPanel,
          showDoublePanel && rightPanel
        );
      }
    } else {
      panels = renderPanel();
    }
    var mergedNodes = /* @__PURE__ */ React36.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-panel-layout')
      },
      /* @__PURE__ */ React36.createElement(PresetPanel, {
        prefixCls,
        presets: presetList,
        onClick: function onClick2(nextValue) {
          triggerChange(nextValue, null);
          _triggerOpen(false, mergedActivePickerIndex);
        },
        onHover: function onHover(hoverValue) {
          setRangeHoverValue(hoverValue);
        }
      }),
      /* @__PURE__ */ React36.createElement(
        'div',
        null,
        /* @__PURE__ */ React36.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-panels')
          },
          panels
        ),
        (extraNode || rangesNode) &&
          /* @__PURE__ */ React36.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-footer')
            },
            extraNode,
            rangesNode
          )
      )
    );
    if (panelRender) {
      mergedNodes = panelRender(mergedNodes);
    }
    return /* @__PURE__ */ React36.createElement(
      'div',
      {
        className: ''.concat(prefixCls, '-panel-container'),
        style: {
          marginLeft: panelLeft
        },
        ref: panelDivRef,
        onMouseDown: function onMouseDown2(e) {
          e.preventDefault();
        }
      },
      mergedNodes
    );
  }
  var rangePanel = /* @__PURE__ */ React36.createElement(
    'div',
    {
      className: classNames10(
        ''.concat(prefixCls, '-range-wrapper'),
        ''.concat(prefixCls, '-').concat(picker, '-range-wrapper')
      ),
      style: {
        minWidth: popupMinWidth
      }
    },
    /* @__PURE__ */ React36.createElement('div', {
      ref: arrowRef,
      className: ''.concat(prefixCls, '-range-arrow'),
      style: arrowPositionStyle
    }),
    renderPanels()
  );
  var suffixNode;
  if (suffixIcon) {
    suffixNode = /* @__PURE__ */ React36.createElement(
      'span',
      {
        className: ''.concat(prefixCls, '-suffix')
      },
      suffixIcon
    );
  }
  var clearNode;
  if (
    allowClear &&
    ((getValue(mergedValue, 0) && !mergedDisabled[0]) || (getValue(mergedValue, 1) && !mergedDisabled[1]))
  ) {
    clearNode = /* @__PURE__ */ React36.createElement(
      'span',
      {
        onMouseDown: function onMouseDown2(e) {
          e.preventDefault();
          e.stopPropagation();
        },
        onMouseUp: function onMouseUp2(e) {
          e.preventDefault();
          e.stopPropagation();
          var values = mergedValue;
          if (!mergedDisabled[0]) {
            values = updateValues(values, null, 0);
          }
          if (!mergedDisabled[1]) {
            values = updateValues(values, null, 1);
          }
          triggerChange(values, null);
          _triggerOpen(false, mergedActivePickerIndex);
        },
        className: ''.concat(prefixCls, '-clear')
      },
      clearIcon ||
        /* @__PURE__ */ React36.createElement('span', {
          className: ''.concat(prefixCls, '-clear-btn')
        })
    );
  }
  var inputSharedProps = {
    size: getInputSize(picker, formatList[0], generateConfig)
  };
  var activeBarLeft = 0;
  var activeBarWidth = 0;
  if (startInputDivRef.current && endInputDivRef.current && separatorRef.current) {
    if (mergedActivePickerIndex === 0) {
      activeBarWidth = startInputDivRef.current.offsetWidth;
    } else {
      activeBarLeft = arrowLeft;
      activeBarWidth = endInputDivRef.current.offsetWidth;
    }
  }
  var activeBarPositionStyle =
    direction === 'rtl'
      ? {
          right: activeBarLeft
        }
      : {
          left: activeBarLeft
        };
  var onContextSelect = function onContextSelect2(date, type) {
    var values = updateValues(selectedValue, date, mergedActivePickerIndex);
    if (type === 'submit' || (type !== 'key' && !needConfirmButton)) {
      triggerChange(values, mergedActivePickerIndex);
      if (mergedActivePickerIndex === 0) {
        onStartLeave();
      } else {
        onEndLeave();
      }
    } else {
      setSelectedValue(values);
    }
  };
  return /* @__PURE__ */ React36.createElement(
    PanelContext_default.Provider,
    {
      value: {
        operationRef,
        hideHeader: picker === 'time',
        onDateMouseEnter,
        onDateMouseLeave,
        hideRanges: true,
        onSelect: onContextSelect,
        open: mergedOpen
      }
    },
    /* @__PURE__ */ React36.createElement(
      PickerTrigger_default,
      {
        visible: mergedOpen,
        popupElement: rangePanel,
        popupStyle,
        prefixCls,
        dropdownClassName,
        dropdownAlign,
        getPopupContainer,
        transitionName,
        range: true,
        direction
      },
      /* @__PURE__ */ React36.createElement(
        'div',
        _extends21(
          {
            ref: containerRef,
            className: classNames10(
              prefixCls,
              ''.concat(prefixCls, '-range'),
              className,
              ((_classNames2 = {}),
              _defineProperty12(
                _classNames2,
                ''.concat(prefixCls, '-disabled'),
                mergedDisabled[0] && mergedDisabled[1]
              ),
              _defineProperty12(
                _classNames2,
                ''.concat(prefixCls, '-focused'),
                mergedActivePickerIndex === 0 ? startFocused : endFocused
              ),
              _defineProperty12(_classNames2, ''.concat(prefixCls, '-rtl'), direction === 'rtl'),
              _classNames2)
            ),
            style,
            onClick: onPickerClick,
            onMouseEnter,
            onMouseLeave,
            onMouseDown: onPickerMouseDown,
            onMouseUp
          },
          getDataOrAriaProps(props)
        ),
        /* @__PURE__ */ React36.createElement(
          'div',
          {
            className: classNames10(
              ''.concat(prefixCls, '-input'),
              ((_classNames3 = {}),
              _defineProperty12(_classNames3, ''.concat(prefixCls, '-input-active'), mergedActivePickerIndex === 0),
              _defineProperty12(_classNames3, ''.concat(prefixCls, '-input-placeholder'), !!startHoverValue),
              _classNames3)
            ),
            ref: startInputDivRef
          },
          /* @__PURE__ */ React36.createElement(
            'input',
            _extends21(
              {
                id,
                disabled: mergedDisabled[0],
                readOnly: inputReadOnly || typeof formatList[0] === 'function' || !startTyping,
                value: startHoverValue || startText,
                onChange: function onChange2(e) {
                  triggerStartTextChange(e.target.value);
                },
                autoFocus,
                placeholder: getValue(placeholder, 0) || '',
                ref: startInputRef
              },
              startInputProps,
              inputSharedProps,
              {
                autoComplete
              }
            )
          )
        ),
        /* @__PURE__ */ React36.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-range-separator'),
            ref: separatorRef
          },
          separator
        ),
        /* @__PURE__ */ React36.createElement(
          'div',
          {
            className: classNames10(
              ''.concat(prefixCls, '-input'),
              ((_classNames4 = {}),
              _defineProperty12(_classNames4, ''.concat(prefixCls, '-input-active'), mergedActivePickerIndex === 1),
              _defineProperty12(_classNames4, ''.concat(prefixCls, '-input-placeholder'), !!endHoverValue),
              _classNames4)
            ),
            ref: endInputDivRef
          },
          /* @__PURE__ */ React36.createElement(
            'input',
            _extends21(
              {
                disabled: mergedDisabled[1],
                readOnly: inputReadOnly || typeof formatList[0] === 'function' || !endTyping,
                value: endHoverValue || endText,
                onChange: function onChange2(e) {
                  triggerEndTextChange(e.target.value);
                },
                placeholder: getValue(placeholder, 1) || '',
                ref: endInputRef
              },
              endInputProps,
              inputSharedProps,
              {
                autoComplete
              }
            )
          )
        ),
        /* @__PURE__ */ React36.createElement('div', {
          className: ''.concat(prefixCls, '-active-bar'),
          style: _objectSpread7(
            _objectSpread7({}, activeBarPositionStyle),
            {},
            {
              width: activeBarWidth,
              position: 'absolute'
            }
          )
        }),
        suffixNode,
        clearNode
      )
    )
  );
}
var RangePicker = /* @__PURE__ */ (function(_React$Component) {
  _inherits2(RangePicker2, _React$Component);
  var _super = _createSuper2(RangePicker2);
  function RangePicker2() {
    var _this;
    _classCallCheck2(this, RangePicker2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty12(_assertThisInitialized2(_this), 'pickerRef', /* @__PURE__ */ React36.createRef());
    _defineProperty12(_assertThisInitialized2(_this), 'focus', function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.focus();
      }
    });
    _defineProperty12(_assertThisInitialized2(_this), 'blur', function() {
      if (_this.pickerRef.current) {
        _this.pickerRef.current.blur();
      }
    });
    return _this;
  }
  _createClass2(RangePicker2, [
    {
      key: 'render',
      value: function render() {
        return /* @__PURE__ */ React36.createElement(
          InnerRangePicker,
          _extends21({}, this.props, {
            pickerRef: this.pickerRef
          })
        );
      }
    }
  ]);
  return RangePicker2;
})(React36.Component);
var RangePicker_default = RangePicker;

// esm-build-6a0ed2b2df8259283e4bcd13d6ac1893d35e15fd-c0a7d659/node_modules/rc-picker/es/index.js
var es_default = Picker_default;
export { PickerPanel_default as PickerPanel, RangePicker_default as RangePicker, es_default as default };
