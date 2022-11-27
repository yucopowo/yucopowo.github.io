/* esm.sh - esbuild bundle(rc-pagination@3.2.0) es2022 development */
// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/Pagination.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _classCallCheck2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React3, { cloneElement, isValidElement } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/Pager.js
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var Pager = function Pager2(props) {
  var _classNames;
  var prefixCls = ''.concat(props.rootPrefixCls, '-item');
  var cls = classNames(
    prefixCls,
    ''.concat(prefixCls, '-').concat(props.page),
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-active'), props.active),
    _defineProperty(_classNames, ''.concat(prefixCls, '-disabled'), !props.page),
    _defineProperty(_classNames, props.className, !!props.className),
    _classNames)
  );
  var handleClick = function handleClick2() {
    props.onClick(props.page);
  };
  var handleKeyPress = function handleKeyPress2(e) {
    props.onKeyPress(e, props.onClick, props.page);
  };
  return /* @__PURE__ */ React.createElement(
    'li',
    {
      title: props.showTitle ? props.page : null,
      className: cls,
      onClick: handleClick,
      onKeyPress: handleKeyPress,
      tabIndex: '0'
    },
    props.itemRender(
      props.page,
      'page',
      /* @__PURE__ */ React.createElement(
        'a',
        {
          rel: 'nofollow'
        },
        props.page
      )
    )
  );
};
var Pager_default = Pager;

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/Options.js
import _classCallCheck from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/classCallCheck.development.js';
import _createClass from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createClass.development.js';
import _inherits from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/inherits.development.js';
import _createSuper from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/createSuper.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/KeyCode.js
var KeyCode_default = {
  ZERO: 48,
  NINE: 57,
  NUMPAD_ZERO: 96,
  NUMPAD_NINE: 105,
  BACKSPACE: 8,
  DELETE: 46,
  ENTER: 13,
  ARROW_UP: 38,
  ARROW_DOWN: 40
};

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/Options.js
var Options = /* @__PURE__ */ (function(_React$Component) {
  _inherits(Options2, _React$Component);
  var _super = _createSuper(Options2);
  function Options2() {
    var _this;
    _classCallCheck(this, Options2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.state = {
      goInputText: ''
    };
    _this.buildOptionText = function(value) {
      return ''.concat(value, ' ').concat(_this.props.locale.items_per_page);
    };
    _this.changeSize = function(value) {
      _this.props.changeSize(Number(value));
    };
    _this.handleChange = function(e) {
      _this.setState({
        goInputText: e.target.value
      });
    };
    _this.handleBlur = function(e) {
      var _this$props = _this.props,
        goButton = _this$props.goButton,
        quickGo = _this$props.quickGo,
        rootPrefixCls = _this$props.rootPrefixCls;
      var goInputText = _this.state.goInputText;
      if (goButton || goInputText === '') {
        return;
      }
      _this.setState({
        goInputText: ''
      });
      if (
        e.relatedTarget &&
        (e.relatedTarget.className.indexOf(''.concat(rootPrefixCls, '-item-link')) >= 0 ||
          e.relatedTarget.className.indexOf(''.concat(rootPrefixCls, '-item')) >= 0)
      ) {
        return;
      }
      quickGo(_this.getValidValue());
    };
    _this.go = function(e) {
      var goInputText = _this.state.goInputText;
      if (goInputText === '') {
        return;
      }
      if (e.keyCode === KeyCode_default.ENTER || e.type === 'click') {
        _this.setState({
          goInputText: ''
        });
        _this.props.quickGo(_this.getValidValue());
      }
    };
    return _this;
  }
  _createClass(Options2, [
    {
      key: 'getValidValue',
      value: function getValidValue() {
        var goInputText = this.state.goInputText;
        return !goInputText || isNaN(goInputText) ? void 0 : Number(goInputText);
      }
    },
    {
      key: 'getPageSizeOptions',
      value: function getPageSizeOptions() {
        var _this$props2 = this.props,
          pageSize = _this$props2.pageSize,
          pageSizeOptions = _this$props2.pageSizeOptions;
        if (
          pageSizeOptions.some(function(option) {
            return option.toString() === pageSize.toString();
          })
        ) {
          return pageSizeOptions;
        }
        return pageSizeOptions.concat([pageSize.toString()]).sort(function(a, b) {
          var numberA = isNaN(Number(a)) ? 0 : Number(a);
          var numberB = isNaN(Number(b)) ? 0 : Number(b);
          return numberA - numberB;
        });
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;
        var _this$props3 = this.props,
          pageSize = _this$props3.pageSize,
          locale = _this$props3.locale,
          rootPrefixCls = _this$props3.rootPrefixCls,
          changeSize = _this$props3.changeSize,
          quickGo = _this$props3.quickGo,
          goButton = _this$props3.goButton,
          selectComponentClass = _this$props3.selectComponentClass,
          buildOptionText = _this$props3.buildOptionText,
          selectPrefixCls = _this$props3.selectPrefixCls,
          disabled = _this$props3.disabled;
        var goInputText = this.state.goInputText;
        var prefixCls = ''.concat(rootPrefixCls, '-options');
        var Select = selectComponentClass;
        var changeSelect = null;
        var goInput = null;
        var gotoButton = null;
        if (!changeSize && !quickGo) {
          return null;
        }
        var pageSizeOptions = this.getPageSizeOptions();
        if (changeSize && Select) {
          var options = pageSizeOptions.map(function(opt, i) {
            return /* @__PURE__ */ React2.createElement(
              Select.Option,
              {
                key: i,
                value: opt.toString()
              },
              (buildOptionText || _this2.buildOptionText)(opt)
            );
          });
          changeSelect = /* @__PURE__ */ React2.createElement(
            Select,
            {
              disabled,
              prefixCls: selectPrefixCls,
              showSearch: false,
              className: ''.concat(prefixCls, '-size-changer'),
              optionLabelProp: 'children',
              dropdownMatchSelectWidth: false,
              value: (pageSize || pageSizeOptions[0]).toString(),
              onChange: this.changeSize,
              getPopupContainer: function getPopupContainer(triggerNode) {
                return triggerNode.parentNode;
              },
              'aria-label': locale.page_size,
              defaultOpen: false
            },
            options
          );
        }
        if (quickGo) {
          if (goButton) {
            gotoButton =
              typeof goButton === 'boolean'
                ? /* @__PURE__ */ React2.createElement(
                    'button',
                    {
                      type: 'button',
                      onClick: this.go,
                      onKeyUp: this.go,
                      disabled,
                      className: ''.concat(prefixCls, '-quick-jumper-button')
                    },
                    locale.jump_to_confirm
                  )
                : /* @__PURE__ */ React2.createElement(
                    'span',
                    {
                      onClick: this.go,
                      onKeyUp: this.go
                    },
                    goButton
                  );
          }
          goInput = /* @__PURE__ */ React2.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-quick-jumper')
            },
            locale.jump_to,
            /* @__PURE__ */ React2.createElement('input', {
              disabled,
              type: 'text',
              value: goInputText,
              onChange: this.handleChange,
              onKeyUp: this.go,
              onBlur: this.handleBlur,
              'aria-label': locale.page
            }),
            locale.page,
            gotoButton
          );
        }
        return /* @__PURE__ */ React2.createElement(
          'li',
          {
            className: ''.concat(prefixCls)
          },
          changeSelect,
          goInput
        );
      }
    }
  ]);
  return Options2;
})(React2.Component);
Options.defaultProps = {
  pageSizeOptions: ['10', '20', '50', '100']
};
var Options_default = Options;

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/locale/zh_CN.js
var zh_CN_default = {
  items_per_page: '\u6761/\u9875',
  jump_to: '\u8DF3\u81F3',
  jump_to_confirm: '\u786E\u5B9A',
  page: '\u9875',
  prev_page: '\u4E0A\u4E00\u9875',
  next_page: '\u4E0B\u4E00\u9875',
  prev_5: '\u5411\u524D 5 \u9875',
  next_5: '\u5411\u540E 5 \u9875',
  prev_3: '\u5411\u524D 3 \u9875',
  next_3: '\u5411\u540E 3 \u9875',
  page_size: '\u9875\u7801'
};

// esm-build-c03f8a448caa61b7e434a04cdd7bcb97274f365e-b3deef84/node_modules/rc-pagination/es/Pagination.js
function noop() {}
function isInteger(v) {
  var value = Number(v);
  return typeof value === 'number' && !isNaN(value) && isFinite(value) && Math.floor(value) === value;
}
function defaultItemRender(page, type, element) {
  return element;
}
function calculatePage(p, state, props) {
  var pageSize = typeof p === 'undefined' ? state.pageSize : p;
  return Math.floor((props.total - 1) / pageSize) + 1;
}
var Pagination = /* @__PURE__ */ (function(_React$Component) {
  _inherits2(Pagination2, _React$Component);
  var _super = _createSuper2(Pagination2);
  function Pagination2(props) {
    var _this;
    _classCallCheck2(this, Pagination2);
    _this = _super.call(this, props);
    _this.getJumpPrevPage = function() {
      return Math.max(1, _this.state.current - (_this.props.showLessItems ? 3 : 5));
    };
    _this.getJumpNextPage = function() {
      return Math.min(
        calculatePage(void 0, _this.state, _this.props),
        _this.state.current + (_this.props.showLessItems ? 3 : 5)
      );
    };
    _this.getItemIcon = function(icon, label) {
      var prefixCls = _this.props.prefixCls;
      var iconNode =
        icon ||
        /* @__PURE__ */ React3.createElement('button', {
          type: 'button',
          'aria-label': label,
          className: ''.concat(prefixCls, '-item-link')
        });
      if (typeof icon === 'function') {
        iconNode = /* @__PURE__ */ React3.createElement(icon, _objectSpread({}, _this.props));
      }
      return iconNode;
    };
    _this.savePaginationNode = function(node) {
      _this.paginationNode = node;
    };
    _this.isValid = function(page) {
      var total = _this.props.total;
      return isInteger(page) && page !== _this.state.current && isInteger(total) && total > 0;
    };
    _this.shouldDisplayQuickJumper = function() {
      var _this$props = _this.props,
        showQuickJumper = _this$props.showQuickJumper,
        total = _this$props.total;
      var pageSize = _this.state.pageSize;
      if (total <= pageSize) {
        return false;
      }
      return showQuickJumper;
    };
    _this.handleKeyDown = function(e) {
      if (e.keyCode === KeyCode_default.ARROW_UP || e.keyCode === KeyCode_default.ARROW_DOWN) {
        e.preventDefault();
      }
    };
    _this.handleKeyUp = function(e) {
      var value = _this.getValidValue(e);
      var currentInputValue = _this.state.currentInputValue;
      if (value !== currentInputValue) {
        _this.setState({
          currentInputValue: value
        });
      }
      if (e.keyCode === KeyCode_default.ENTER) {
        _this.handleChange(value);
      } else if (e.keyCode === KeyCode_default.ARROW_UP) {
        _this.handleChange(value - 1);
      } else if (e.keyCode === KeyCode_default.ARROW_DOWN) {
        _this.handleChange(value + 1);
      }
    };
    _this.handleBlur = function(e) {
      var value = _this.getValidValue(e);
      _this.handleChange(value);
    };
    _this.changePageSize = function(size) {
      var current = _this.state.current;
      var newCurrent = calculatePage(size, _this.state, _this.props);
      current = current > newCurrent ? newCurrent : current;
      if (newCurrent === 0) {
        current = _this.state.current;
      }
      if (typeof size === 'number') {
        if (!('pageSize' in _this.props)) {
          _this.setState({
            pageSize: size
          });
        }
        if (!('current' in _this.props)) {
          _this.setState({
            current,
            currentInputValue: current
          });
        }
      }
      _this.props.onShowSizeChange(current, size);
      if ('onChange' in _this.props && _this.props.onChange) {
        _this.props.onChange(current, size);
      }
    };
    _this.handleChange = function(page) {
      var _this$props2 = _this.props,
        disabled = _this$props2.disabled,
        onChange = _this$props2.onChange;
      var _this$state = _this.state,
        pageSize = _this$state.pageSize,
        current = _this$state.current,
        currentInputValue = _this$state.currentInputValue;
      if (_this.isValid(page) && !disabled) {
        var currentPage = calculatePage(void 0, _this.state, _this.props);
        var newPage = page;
        if (page > currentPage) {
          newPage = currentPage;
        } else if (page < 1) {
          newPage = 1;
        }
        if (!('current' in _this.props)) {
          _this.setState({
            current: newPage
          });
        }
        if (newPage !== currentInputValue) {
          _this.setState({
            currentInputValue: newPage
          });
        }
        onChange(newPage, pageSize);
        return newPage;
      }
      return current;
    };
    _this.prev = function() {
      if (_this.hasPrev()) {
        _this.handleChange(_this.state.current - 1);
      }
    };
    _this.next = function() {
      if (_this.hasNext()) {
        _this.handleChange(_this.state.current + 1);
      }
    };
    _this.jumpPrev = function() {
      _this.handleChange(_this.getJumpPrevPage());
    };
    _this.jumpNext = function() {
      _this.handleChange(_this.getJumpNextPage());
    };
    _this.hasPrev = function() {
      return _this.state.current > 1;
    };
    _this.hasNext = function() {
      return _this.state.current < calculatePage(void 0, _this.state, _this.props);
    };
    _this.runIfEnter = function(event, callback) {
      if (event.key === 'Enter' || event.charCode === 13) {
        for (
          var _len = arguments.length, restParams = new Array(_len > 2 ? _len - 2 : 0), _key = 2;
          _key < _len;
          _key++
        ) {
          restParams[_key - 2] = arguments[_key];
        }
        callback.apply(void 0, restParams);
      }
    };
    _this.runIfEnterPrev = function(e) {
      _this.runIfEnter(e, _this.prev);
    };
    _this.runIfEnterNext = function(e) {
      _this.runIfEnter(e, _this.next);
    };
    _this.runIfEnterJumpPrev = function(e) {
      _this.runIfEnter(e, _this.jumpPrev);
    };
    _this.runIfEnterJumpNext = function(e) {
      _this.runIfEnter(e, _this.jumpNext);
    };
    _this.handleGoTO = function(e) {
      if (e.keyCode === KeyCode_default.ENTER || e.type === 'click') {
        _this.handleChange(_this.state.currentInputValue);
      }
    };
    var hasOnChange = props.onChange !== noop;
    var hasCurrent = 'current' in props;
    if (hasCurrent && !hasOnChange) {
      console.warn(
        'Warning: You provided a `current` prop to a Pagination component without an `onChange` handler. This will render a read-only component.'
      );
    }
    var _current = props.defaultCurrent;
    if ('current' in props) {
      _current = props.current;
    }
    var _pageSize = props.defaultPageSize;
    if ('pageSize' in props) {
      _pageSize = props.pageSize;
    }
    _current = Math.min(_current, calculatePage(_pageSize, void 0, props));
    _this.state = {
      current: _current,
      currentInputValue: _current,
      pageSize: _pageSize
    };
    return _this;
  }
  _createClass2(
    Pagination2,
    [
      {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
          var prefixCls = this.props.prefixCls;
          if (prevState.current !== this.state.current && this.paginationNode) {
            var lastCurrentNode = this.paginationNode.querySelector(
              '.'.concat(prefixCls, '-item-').concat(prevState.current)
            );
            if (lastCurrentNode && document.activeElement === lastCurrentNode) {
              lastCurrentNode.blur();
            }
          }
        }
      },
      {
        key: 'getValidValue',
        value: function getValidValue(e) {
          var inputValue = e.target.value;
          var allPages = calculatePage(void 0, this.state, this.props);
          var currentInputValue = this.state.currentInputValue;
          var value;
          if (inputValue === '') {
            value = inputValue;
          } else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
          } else if (inputValue >= allPages) {
            value = allPages;
          } else {
            value = Number(inputValue);
          }
          return value;
        }
      },
      {
        key: 'getShowSizeChanger',
        value: function getShowSizeChanger() {
          var _this$props3 = this.props,
            showSizeChanger = _this$props3.showSizeChanger,
            total = _this$props3.total,
            totalBoundaryShowSizeChanger = _this$props3.totalBoundaryShowSizeChanger;
          if (typeof showSizeChanger !== 'undefined') {
            return showSizeChanger;
          }
          return total > totalBoundaryShowSizeChanger;
        }
      },
      {
        key: 'renderPrev',
        value: function renderPrev(prevPage) {
          var _this$props4 = this.props,
            prevIcon = _this$props4.prevIcon,
            itemRender = _this$props4.itemRender;
          var prevButton = itemRender(prevPage, 'prev', this.getItemIcon(prevIcon, 'prev page'));
          var disabled = !this.hasPrev();
          return /* @__PURE__ */ isValidElement(prevButton)
            ? /* @__PURE__ */ cloneElement(prevButton, {
                disabled
              })
            : prevButton;
        }
      },
      {
        key: 'renderNext',
        value: function renderNext(nextPage) {
          var _this$props5 = this.props,
            nextIcon = _this$props5.nextIcon,
            itemRender = _this$props5.itemRender;
          var nextButton = itemRender(nextPage, 'next', this.getItemIcon(nextIcon, 'next page'));
          var disabled = !this.hasNext();
          return /* @__PURE__ */ isValidElement(nextButton)
            ? /* @__PURE__ */ cloneElement(nextButton, {
                disabled
              })
            : nextButton;
        }
      },
      {
        key: 'render',
        value: function render() {
          var _this2 = this;
          var _this$props6 = this.props,
            prefixCls = _this$props6.prefixCls,
            className = _this$props6.className,
            style = _this$props6.style,
            disabled = _this$props6.disabled,
            hideOnSinglePage = _this$props6.hideOnSinglePage,
            total = _this$props6.total,
            locale = _this$props6.locale,
            showQuickJumper = _this$props6.showQuickJumper,
            showLessItems = _this$props6.showLessItems,
            showTitle = _this$props6.showTitle,
            showTotal = _this$props6.showTotal,
            simple = _this$props6.simple,
            itemRender = _this$props6.itemRender,
            showPrevNextJumpers = _this$props6.showPrevNextJumpers,
            jumpPrevIcon = _this$props6.jumpPrevIcon,
            jumpNextIcon = _this$props6.jumpNextIcon,
            selectComponentClass = _this$props6.selectComponentClass,
            selectPrefixCls = _this$props6.selectPrefixCls,
            pageSizeOptions = _this$props6.pageSizeOptions;
          var _this$state2 = this.state,
            current = _this$state2.current,
            pageSize = _this$state2.pageSize,
            currentInputValue = _this$state2.currentInputValue;
          if (hideOnSinglePage === true && total <= pageSize) {
            return null;
          }
          var allPages = calculatePage(void 0, this.state, this.props);
          var pagerList = [];
          var jumpPrev = null;
          var jumpNext = null;
          var firstPager = null;
          var lastPager = null;
          var gotoButton = null;
          var goButton = showQuickJumper && showQuickJumper.goButton;
          var pageBufferSize = showLessItems ? 1 : 2;
          var prevPage = current - 1 > 0 ? current - 1 : 0;
          var nextPage = current + 1 < allPages ? current + 1 : allPages;
          var dataOrAriaAttributeProps = Object.keys(this.props).reduce(function(prev, key) {
            if (key.substr(0, 5) === 'data-' || key.substr(0, 5) === 'aria-' || key === 'role') {
              prev[key] = _this2.props[key];
            }
            return prev;
          }, {});
          var totalText =
            showTotal &&
            /* @__PURE__ */ React3.createElement(
              'li',
              {
                className: ''.concat(prefixCls, '-total-text')
              },
              showTotal(total, [
                total === 0 ? 0 : (current - 1) * pageSize + 1,
                current * pageSize > total ? total : current * pageSize
              ])
            );
          if (simple) {
            if (goButton) {
              if (typeof goButton === 'boolean') {
                gotoButton = /* @__PURE__ */ React3.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: this.handleGoTO,
                    onKeyUp: this.handleGoTO
                  },
                  locale.jump_to_confirm
                );
              } else {
                gotoButton = /* @__PURE__ */ React3.createElement(
                  'span',
                  {
                    onClick: this.handleGoTO,
                    onKeyUp: this.handleGoTO
                  },
                  goButton
                );
              }
              gotoButton = /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle
                    ? ''
                        .concat(locale.jump_to)
                        .concat(current, '/')
                        .concat(allPages)
                    : null,
                  className: ''.concat(prefixCls, '-simple-pager')
                },
                gotoButton
              );
            }
            return /* @__PURE__ */ React3.createElement(
              'ul',
              _extends(
                {
                  className: classNames2(
                    prefixCls,
                    ''.concat(prefixCls, '-simple'),
                    _defineProperty2({}, ''.concat(prefixCls, '-disabled'), disabled),
                    className
                  ),
                  style,
                  ref: this.savePaginationNode
                },
                dataOrAriaAttributeProps
              ),
              totalText,
              /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle ? locale.prev_page : null,
                  onClick: this.prev,
                  tabIndex: this.hasPrev() ? 0 : null,
                  onKeyPress: this.runIfEnterPrev,
                  className: classNames2(
                    ''.concat(prefixCls, '-prev'),
                    _defineProperty2({}, ''.concat(prefixCls, '-disabled'), !this.hasPrev())
                  ),
                  'aria-disabled': !this.hasPrev()
                },
                this.renderPrev(prevPage)
              ),
              /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle ? ''.concat(current, '/').concat(allPages) : null,
                  className: ''.concat(prefixCls, '-simple-pager')
                },
                /* @__PURE__ */ React3.createElement('input', {
                  type: 'text',
                  value: currentInputValue,
                  disabled,
                  onKeyDown: this.handleKeyDown,
                  onKeyUp: this.handleKeyUp,
                  onChange: this.handleKeyUp,
                  onBlur: this.handleBlur,
                  size: '3'
                }),
                /* @__PURE__ */ React3.createElement(
                  'span',
                  {
                    className: ''.concat(prefixCls, '-slash')
                  },
                  '/'
                ),
                allPages
              ),
              /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle ? locale.next_page : null,
                  onClick: this.next,
                  tabIndex: this.hasPrev() ? 0 : null,
                  onKeyPress: this.runIfEnterNext,
                  className: classNames2(
                    ''.concat(prefixCls, '-next'),
                    _defineProperty2({}, ''.concat(prefixCls, '-disabled'), !this.hasNext())
                  ),
                  'aria-disabled': !this.hasNext()
                },
                this.renderNext(nextPage)
              ),
              gotoButton
            );
          }
          if (allPages <= 3 + pageBufferSize * 2) {
            var pagerProps = {
              locale,
              rootPrefixCls: prefixCls,
              onClick: this.handleChange,
              onKeyPress: this.runIfEnter,
              showTitle,
              itemRender
            };
            if (!allPages) {
              pagerList.push(
                /* @__PURE__ */ React3.createElement(
                  Pager_default,
                  _extends({}, pagerProps, {
                    key: 'noPager',
                    page: 1,
                    className: ''.concat(prefixCls, '-item-disabled')
                  })
                )
              );
            }
            for (var i = 1; i <= allPages; i += 1) {
              var active = current === i;
              pagerList.push(
                /* @__PURE__ */ React3.createElement(
                  Pager_default,
                  _extends({}, pagerProps, {
                    key: i,
                    page: i,
                    active
                  })
                )
              );
            }
          } else {
            var prevItemTitle = showLessItems ? locale.prev_3 : locale.prev_5;
            var nextItemTitle = showLessItems ? locale.next_3 : locale.next_5;
            if (showPrevNextJumpers) {
              jumpPrev = /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle ? prevItemTitle : null,
                  key: 'prev',
                  onClick: this.jumpPrev,
                  tabIndex: '0',
                  onKeyPress: this.runIfEnterJumpPrev,
                  className: classNames2(
                    ''.concat(prefixCls, '-jump-prev'),
                    _defineProperty2({}, ''.concat(prefixCls, '-jump-prev-custom-icon'), !!jumpPrevIcon)
                  )
                },
                itemRender(this.getJumpPrevPage(), 'jump-prev', this.getItemIcon(jumpPrevIcon, 'prev page'))
              );
              jumpNext = /* @__PURE__ */ React3.createElement(
                'li',
                {
                  title: showTitle ? nextItemTitle : null,
                  key: 'next',
                  tabIndex: '0',
                  onClick: this.jumpNext,
                  onKeyPress: this.runIfEnterJumpNext,
                  className: classNames2(
                    ''.concat(prefixCls, '-jump-next'),
                    _defineProperty2({}, ''.concat(prefixCls, '-jump-next-custom-icon'), !!jumpNextIcon)
                  )
                },
                itemRender(this.getJumpNextPage(), 'jump-next', this.getItemIcon(jumpNextIcon, 'next page'))
              );
            }
            lastPager = /* @__PURE__ */ React3.createElement(Pager_default, {
              locale,
              last: true,
              rootPrefixCls: prefixCls,
              onClick: this.handleChange,
              onKeyPress: this.runIfEnter,
              key: allPages,
              page: allPages,
              active: false,
              showTitle,
              itemRender
            });
            firstPager = /* @__PURE__ */ React3.createElement(Pager_default, {
              locale,
              rootPrefixCls: prefixCls,
              onClick: this.handleChange,
              onKeyPress: this.runIfEnter,
              key: 1,
              page: 1,
              active: false,
              showTitle,
              itemRender
            });
            var left = Math.max(1, current - pageBufferSize);
            var right = Math.min(current + pageBufferSize, allPages);
            if (current - 1 <= pageBufferSize) {
              right = 1 + pageBufferSize * 2;
            }
            if (allPages - current <= pageBufferSize) {
              left = allPages - pageBufferSize * 2;
            }
            for (var _i = left; _i <= right; _i += 1) {
              var _active = current === _i;
              pagerList.push(
                /* @__PURE__ */ React3.createElement(Pager_default, {
                  locale,
                  rootPrefixCls: prefixCls,
                  onClick: this.handleChange,
                  onKeyPress: this.runIfEnter,
                  key: _i,
                  page: _i,
                  active: _active,
                  showTitle,
                  itemRender
                })
              );
            }
            if (current - 1 >= pageBufferSize * 2 && current !== 1 + 2) {
              pagerList[0] = /* @__PURE__ */ cloneElement(pagerList[0], {
                className: ''.concat(prefixCls, '-item-after-jump-prev')
              });
              pagerList.unshift(jumpPrev);
            }
            if (allPages - current >= pageBufferSize * 2 && current !== allPages - 2) {
              pagerList[pagerList.length - 1] = /* @__PURE__ */ cloneElement(pagerList[pagerList.length - 1], {
                className: ''.concat(prefixCls, '-item-before-jump-next')
              });
              pagerList.push(jumpNext);
            }
            if (left !== 1) {
              pagerList.unshift(firstPager);
            }
            if (right !== allPages) {
              pagerList.push(lastPager);
            }
          }
          var prevDisabled = !this.hasPrev() || !allPages;
          var nextDisabled = !this.hasNext() || !allPages;
          return /* @__PURE__ */ React3.createElement(
            'ul',
            _extends(
              {
                className: classNames2(
                  prefixCls,
                  className,
                  _defineProperty2({}, ''.concat(prefixCls, '-disabled'), disabled)
                ),
                style,
                ref: this.savePaginationNode
              },
              dataOrAriaAttributeProps
            ),
            totalText,
            /* @__PURE__ */ React3.createElement(
              'li',
              {
                title: showTitle ? locale.prev_page : null,
                onClick: this.prev,
                tabIndex: prevDisabled ? null : 0,
                onKeyPress: this.runIfEnterPrev,
                className: classNames2(
                  ''.concat(prefixCls, '-prev'),
                  _defineProperty2({}, ''.concat(prefixCls, '-disabled'), prevDisabled)
                ),
                'aria-disabled': prevDisabled
              },
              this.renderPrev(prevPage)
            ),
            pagerList,
            /* @__PURE__ */ React3.createElement(
              'li',
              {
                title: showTitle ? locale.next_page : null,
                onClick: this.next,
                tabIndex: nextDisabled ? null : 0,
                onKeyPress: this.runIfEnterNext,
                className: classNames2(
                  ''.concat(prefixCls, '-next'),
                  _defineProperty2({}, ''.concat(prefixCls, '-disabled'), nextDisabled)
                ),
                'aria-disabled': nextDisabled
              },
              this.renderNext(nextPage)
            ),
            /* @__PURE__ */ React3.createElement(Options_default, {
              disabled,
              locale,
              rootPrefixCls: prefixCls,
              selectComponentClass,
              selectPrefixCls,
              changeSize: this.getShowSizeChanger() ? this.changePageSize : null,
              current,
              pageSize,
              pageSizeOptions,
              quickGo: this.shouldDisplayQuickJumper() ? this.handleChange : null,
              goButton
            })
          );
        }
      }
    ],
    [
      {
        key: 'getDerivedStateFromProps',
        value: function getDerivedStateFromProps(props, prevState) {
          var newState = {};
          if ('current' in props) {
            newState.current = props.current;
            if (props.current !== prevState.current) {
              newState.currentInputValue = newState.current;
            }
          }
          if ('pageSize' in props && props.pageSize !== prevState.pageSize) {
            var current = prevState.current;
            var newCurrent = calculatePage(props.pageSize, prevState, props);
            current = current > newCurrent ? newCurrent : current;
            if (!('current' in props)) {
              newState.current = current;
              newState.currentInputValue = current;
            }
            newState.pageSize = props.pageSize;
          }
          return newState;
        }
      }
    ]
  );
  return Pagination2;
})(React3.Component);
Pagination.defaultProps = {
  defaultCurrent: 1,
  total: 0,
  defaultPageSize: 10,
  onChange: noop,
  className: '',
  selectPrefixCls: 'rc-select',
  prefixCls: 'rc-pagination',
  selectComponentClass: null,
  hideOnSinglePage: false,
  showPrevNextJumpers: true,
  showQuickJumper: false,
  showLessItems: false,
  showTitle: true,
  onShowSizeChange: noop,
  locale: zh_CN_default,
  style: {},
  itemRender: defaultItemRender,
  totalBoundaryShowSizeChanger: 50
};
var Pagination_default = Pagination;
export { Pagination_default as default };
