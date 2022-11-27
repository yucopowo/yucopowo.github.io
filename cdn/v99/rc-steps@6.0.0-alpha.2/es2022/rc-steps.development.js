/* esm.sh - esbuild bundle(rc-steps@6.0.0-alpha.2) es2022 development */
// esm-build-ea861f70d317c2f3affe7efffec94fb2c40c22a8-b9c20f90/node_modules/rc-steps/es/Steps.js
import _extends2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties2 from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import classNames2 from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import React2 from '/cdn/stable/react@18.2.0/es2022/react.development.js';

// esm-build-ea861f70d317c2f3affe7efffec94fb2c40c22a8-b9c20f90/node_modules/rc-steps/es/Step.js
import _extends from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/extends.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
var _excluded = [
  'className',
  'prefixCls',
  'style',
  'active',
  'status',
  'iconPrefix',
  'icon',
  'wrapperStyle',
  'stepNumber',
  'disabled',
  'description',
  'title',
  'subTitle',
  'progressDot',
  'stepIcon',
  'tailContent',
  'icons',
  'stepIndex',
  'onStepClick',
  'onClick',
  'render'
];
function isString(str) {
  return typeof str === 'string';
}
function Step(props) {
  var _classNames2;
  var className = props.className,
    prefixCls = props.prefixCls,
    style = props.style,
    active = props.active,
    status = props.status,
    iconPrefix = props.iconPrefix,
    icon = props.icon,
    wrapperStyle = props.wrapperStyle,
    stepNumber = props.stepNumber,
    disabled = props.disabled,
    description = props.description,
    title = props.title,
    subTitle = props.subTitle,
    progressDot = props.progressDot,
    stepIcon = props.stepIcon,
    tailContent = props.tailContent,
    icons = props.icons,
    stepIndex = props.stepIndex,
    onStepClick = props.onStepClick,
    onClick = props.onClick,
    render = props.render,
    restProps = _objectWithoutProperties(props, _excluded);
  var onInternalClick = function onInternalClick2() {
    if (onClick) {
      onClick.apply(void 0, arguments);
    }
    onStepClick(stepIndex);
  };
  var renderIconNode = function renderIconNode2() {
    var _classNames;
    var iconNode;
    var iconClassName = classNames(
      ''.concat(prefixCls, '-icon'),
      ''.concat(iconPrefix, 'icon'),
      ((_classNames = {}),
      _defineProperty(_classNames, ''.concat(iconPrefix, 'icon-').concat(icon), icon && isString(icon)),
      _defineProperty(
        _classNames,
        ''.concat(iconPrefix, 'icon-check'),
        !icon && status === 'finish' && ((icons && !icons.finish) || !icons)
      ),
      _defineProperty(
        _classNames,
        ''.concat(iconPrefix, 'icon-cross'),
        !icon && status === 'error' && ((icons && !icons.error) || !icons)
      ),
      _classNames)
    );
    var iconDot = /* @__PURE__ */ React.createElement('span', {
      className: ''.concat(prefixCls, '-icon-dot')
    });
    if (progressDot) {
      if (typeof progressDot === 'function') {
        iconNode = /* @__PURE__ */ React.createElement(
          'span',
          {
            className: ''.concat(prefixCls, '-icon')
          },
          progressDot(iconDot, {
            index: stepNumber - 1,
            status,
            title,
            description
          })
        );
      } else {
        iconNode = /* @__PURE__ */ React.createElement(
          'span',
          {
            className: ''.concat(prefixCls, '-icon')
          },
          iconDot
        );
      }
    } else if (icon && !isString(icon)) {
      iconNode = /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-icon')
        },
        icon
      );
    } else if (icons && icons.finish && status === 'finish') {
      iconNode = /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-icon')
        },
        icons.finish
      );
    } else if (icons && icons.error && status === 'error') {
      iconNode = /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-icon')
        },
        icons.error
      );
    } else if (icon || status === 'finish' || status === 'error') {
      iconNode = /* @__PURE__ */ React.createElement('span', {
        className: iconClassName
      });
    } else {
      iconNode = /* @__PURE__ */ React.createElement(
        'span',
        {
          className: ''.concat(prefixCls, '-icon')
        },
        stepNumber
      );
    }
    if (stepIcon) {
      iconNode = stepIcon({
        index: stepNumber - 1,
        status,
        title,
        description,
        node: iconNode
      });
    }
    return iconNode;
  };
  var mergedStatus = status || 'wait';
  var classString = classNames(
    ''.concat(prefixCls, '-item'),
    ''.concat(prefixCls, '-item-').concat(mergedStatus),
    className,
    ((_classNames2 = {}),
    _defineProperty(_classNames2, ''.concat(prefixCls, '-item-custom'), icon),
    _defineProperty(_classNames2, ''.concat(prefixCls, '-item-active'), active),
    _defineProperty(_classNames2, ''.concat(prefixCls, '-item-disabled'), disabled === true),
    _classNames2)
  );
  var stepItemStyle = _objectSpread({}, style);
  var accessibilityProps = {};
  if (onStepClick && !disabled) {
    accessibilityProps.role = 'button';
    accessibilityProps.tabIndex = 0;
    accessibilityProps.onClick = onInternalClick;
  }
  var stepNode = /* @__PURE__ */ React.createElement(
    'div',
    _extends({}, restProps, {
      className: classString,
      style: stepItemStyle
    }),
    /* @__PURE__ */ React.createElement(
      'div',
      _extends(
        {
          onClick
        },
        accessibilityProps,
        {
          className: ''.concat(prefixCls, '-item-container')
        }
      ),
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-item-tail')
        },
        tailContent
      ),
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-item-icon')
        },
        renderIconNode()
      ),
      /* @__PURE__ */ React.createElement(
        'div',
        {
          className: ''.concat(prefixCls, '-item-content')
        },
        /* @__PURE__ */ React.createElement(
          'div',
          {
            className: ''.concat(prefixCls, '-item-title')
          },
          title,
          subTitle &&
            /* @__PURE__ */ React.createElement(
              'div',
              {
                title: typeof subTitle === 'string' ? subTitle : void 0,
                className: ''.concat(prefixCls, '-item-subtitle')
              },
              subTitle
            )
        ),
        description &&
          /* @__PURE__ */ React.createElement(
            'div',
            {
              className: ''.concat(prefixCls, '-item-description')
            },
            description
          )
      )
    )
  );
  if (render) {
    stepNode = render(stepNode) || null;
  }
  return stepNode;
}
var Step_default = Step;

// esm-build-ea861f70d317c2f3affe7efffec94fb2c40c22a8-b9c20f90/node_modules/rc-steps/es/Steps.js
var _excluded2 = [
  'prefixCls',
  'style',
  'className',
  'children',
  'direction',
  'type',
  'labelPlacement',
  'iconPrefix',
  'status',
  'size',
  'current',
  'progressDot',
  'stepIcon',
  'initial',
  'icons',
  'onChange',
  'itemRender',
  'items'
];
function Steps(props) {
  var _classNames;
  var _props$prefixCls = props.prefixCls,
    prefixCls = _props$prefixCls === void 0 ? 'rc-steps' : _props$prefixCls,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style,
    className = props.className,
    children = props.children,
    _props$direction = props.direction,
    direction = _props$direction === void 0 ? 'horizontal' : _props$direction,
    _props$type = props.type,
    type = _props$type === void 0 ? 'default' : _props$type,
    _props$labelPlacement = props.labelPlacement,
    labelPlacement = _props$labelPlacement === void 0 ? 'horizontal' : _props$labelPlacement,
    _props$iconPrefix = props.iconPrefix,
    iconPrefix = _props$iconPrefix === void 0 ? 'rc' : _props$iconPrefix,
    _props$status = props.status,
    status = _props$status === void 0 ? 'process' : _props$status,
    size = props.size,
    _props$current = props.current,
    current = _props$current === void 0 ? 0 : _props$current,
    _props$progressDot = props.progressDot,
    progressDot = _props$progressDot === void 0 ? false : _props$progressDot,
    stepIcon = props.stepIcon,
    _props$initial = props.initial,
    initial = _props$initial === void 0 ? 0 : _props$initial,
    icons = props.icons,
    onChange = props.onChange,
    itemRender = props.itemRender,
    _props$items = props.items,
    items = _props$items === void 0 ? [] : _props$items,
    restProps = _objectWithoutProperties2(props, _excluded2);
  var isNav = type === 'navigation';
  var isInline = type === 'inline';
  var mergedProgressDot = isInline || progressDot;
  var mergedDirection = isInline ? 'horizontal' : direction;
  var mergedSize = isInline ? void 0 : size;
  var adjustedLabelPlacement = mergedProgressDot ? 'vertical' : labelPlacement;
  var classString = classNames2(
    prefixCls,
    ''.concat(prefixCls, '-').concat(mergedDirection),
    className,
    ((_classNames = {}),
    _defineProperty2(_classNames, ''.concat(prefixCls, '-').concat(mergedSize), mergedSize),
    _defineProperty2(
      _classNames,
      ''.concat(prefixCls, '-label-').concat(adjustedLabelPlacement),
      mergedDirection === 'horizontal'
    ),
    _defineProperty2(_classNames, ''.concat(prefixCls, '-dot'), !!mergedProgressDot),
    _defineProperty2(_classNames, ''.concat(prefixCls, '-navigation'), isNav),
    _defineProperty2(_classNames, ''.concat(prefixCls, '-inline'), isInline),
    _classNames)
  );
  var onStepClick = function onStepClick2(next) {
    if (onChange && current !== next) {
      onChange(next);
    }
  };
  var renderStep = function renderStep2(item, index) {
    var mergedItem = _objectSpread2({}, item);
    var stepNumber = initial + index;
    if (status === 'error' && index === current - 1) {
      mergedItem.className = ''.concat(prefixCls, '-next-error');
    }
    if (!mergedItem.status) {
      if (stepNumber === current) {
        mergedItem.status = status;
      } else if (stepNumber < current) {
        mergedItem.status = 'finish';
      } else {
        mergedItem.status = 'wait';
      }
    }
    if (isInline) {
      mergedItem.icon = void 0;
      mergedItem.subTitle = void 0;
    }
    if (!mergedItem.render && itemRender) {
      mergedItem.render = function(stepItem) {
        return itemRender(mergedItem, stepItem);
      };
    }
    return /* @__PURE__ */ React2.createElement(
      Step_default,
      _extends2({}, mergedItem, {
        active: stepNumber === current,
        stepNumber: stepNumber + 1,
        stepIndex: stepNumber,
        key: stepNumber,
        prefixCls,
        iconPrefix,
        wrapperStyle: style,
        progressDot: mergedProgressDot,
        stepIcon,
        icons,
        onStepClick: onChange && onStepClick
      })
    );
  };
  return /* @__PURE__ */ React2.createElement(
    'div',
    _extends2(
      {
        className: classString,
        style
      },
      restProps
    ),
    items
      .filter(function(item) {
        return item;
      })
      .map(renderStep)
  );
}
Steps.Step = Step_default;
var Steps_default = Steps;

// esm-build-ea861f70d317c2f3affe7efffec94fb2c40c22a8-b9c20f90/node_modules/rc-steps/es/index.js
var es_default = Steps_default;
export { Step_default as Step, es_default as default };
