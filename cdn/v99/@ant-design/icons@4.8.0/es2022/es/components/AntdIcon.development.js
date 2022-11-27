/* esm.sh - esbuild bundle(@ant-design/icons@4.8.0/es/components/AntdIcon) es2022 development */
// esm-build-ac405f2bf4af5c373f3949ad13b834a8038a4ea3-453cbe11/node_modules/@ant-design/icons/es/components/AntdIcon.js
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import _defineProperty from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/defineProperty.development.js';
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import classNames from '/cdn/v99/classnames@2.3.2/es2022/classnames.development.js';
import Context from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/components/Context.development.js';
import ReactIcon from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/components/IconBase.development.js';
import {
  getTwoToneColor,
  setTwoToneColor
} from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/components/twoTonePrimaryColor.development.js';
import { normalizeTwoToneColors } from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/utils.development.js';
var _excluded = ['className', 'icon', 'spin', 'rotate', 'tabIndex', 'onClick', 'twoToneColor'];
setTwoToneColor('#1890ff');
var Icon = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className,
    icon = props.icon,
    spin = props.spin,
    rotate = props.rotate,
    tabIndex = props.tabIndex,
    onClick = props.onClick,
    twoToneColor = props.twoToneColor,
    restProps = _objectWithoutProperties(props, _excluded);
  var _React$useContext = React.useContext(Context),
    _React$useContext$pre = _React$useContext.prefixCls,
    prefixCls = _React$useContext$pre === void 0 ? 'anticon' : _React$useContext$pre,
    rootClassName = _React$useContext.rootClassName;
  var classString = classNames(
    rootClassName,
    prefixCls,
    ((_classNames = {}),
    _defineProperty(_classNames, ''.concat(prefixCls, '-').concat(icon.name), !!icon.name),
    _defineProperty(_classNames, ''.concat(prefixCls, '-spin'), !!spin || icon.name === 'loading'),
    _classNames),
    className
  );
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate
    ? {
        msTransform: 'rotate('.concat(rotate, 'deg)'),
        transform: 'rotate('.concat(rotate, 'deg)')
      }
    : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React.createElement(
    'span',
    _objectSpread(
      _objectSpread(
        {
          role: 'img',
          'aria-label': icon.name
        },
        restProps
      ),
      {},
      {
        ref,
        tabIndex: iconTabIndex,
        onClick,
        className: classString
      }
    ),
    /* @__PURE__ */ React.createElement(ReactIcon, {
      icon,
      primaryColor,
      secondaryColor,
      style: svgStyle
    })
  );
});
Icon.displayName = 'AntdIcon';
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;
export { AntdIcon_default as default };
