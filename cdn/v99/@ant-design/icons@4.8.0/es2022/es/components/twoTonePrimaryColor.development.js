/* esm.sh - esbuild bundle(@ant-design/icons@4.8.0/es/components/twoTonePrimaryColor) es2022 development */
// esm-build-ac405f2bf4af5c373f3949ad13b834a8038a4ea3-453cbe11/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
import _slicedToArray from '/cdn/v99/@babel/runtime@7.20.1/es2022/helpers/esm/slicedToArray.development.js';
import ReactIcon from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/components/IconBase.development.js';
import { normalizeTwoToneColors } from '/cdn/v99/@ant-design/icons@4.8.0/es2022/es/utils.development.js';
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor),
    _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2),
    primaryColor = _normalizeTwoToneColo2[0],
    secondaryColor = _normalizeTwoToneColo2[1];
  return ReactIcon.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = ReactIcon.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}
export { getTwoToneColor, setTwoToneColor };
