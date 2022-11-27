/* esm.sh - esbuild bundle(@ant-design/icons@4.8.0/es/components/IconBase) es2022 development */
// esm-build-ac405f2bf4af5c373f3949ad13b834a8038a4ea3-453cbe11/node_modules/@ant-design/icons/es/components/IconBase.js
import _objectWithoutProperties from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectWithoutProperties.development.js';
import _objectSpread from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/objectSpread2.development.js';
import {
  generate,
  getSecondaryColor,
  isIconDefinition,
  warning,
  useInsertStyles
} from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/utils.development.js';
var _excluded = ['icon', 'className', 'onClick', 'style', 'primaryColor', 'secondaryColor'];
var twoToneColorPalette = {
  primaryColor: '#333',
  secondaryColor: '#E6E6E6',
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor,
    secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon = props.icon,
    className = props.className,
    onClick = props.onClick,
    style = props.style,
    primaryColor = props.primaryColor,
    secondaryColor = props.secondaryColor,
    restProps = _objectWithoutProperties(props, _excluded);
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles();
  warning(isIconDefinition(icon), 'icon should be icon definiton, but got '.concat(icon));
  if (!isIconDefinition(icon)) {
    return null;
  }
  var target = icon;
  if (target && typeof target.icon === 'function') {
    target = _objectSpread(
      _objectSpread({}, target),
      {},
      {
        icon: target.icon(colors.primaryColor, colors.secondaryColor)
      }
    );
  }
  return generate(
    target.icon,
    'svg-'.concat(target.name),
    _objectSpread(
      {
        className,
        onClick,
        style,
        'data-icon': target.name,
        width: '1em',
        height: '1em',
        fill: 'currentColor',
        'aria-hidden': 'true'
      },
      restProps
    )
  );
};
IconBase.displayName = 'IconReact';
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;
export { IconBase_default as default };
