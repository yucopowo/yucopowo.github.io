/* esm.sh - esbuild bundle(styled-system@5.1.5) es2022 development */
// esm-build-71eb823e7f2b2ea100780b750944603736bdb5fa-6c4fa5fb/node_modules/styled-system/dist/index.esm.js
import { createStyleFunction, createParser } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
import layout from '/cdn/v99/@styled-system/layout@5.1.2/es2022/layout.development.js';
import color from '/cdn/v99/@styled-system/color@5.1.2/es2022/color.development.js';
import typography from '/cdn/v99/@styled-system/typography@5.1.2/es2022/typography.development.js';
import flexbox from '/cdn/v99/@styled-system/flexbox@5.1.2/es2022/flexbox.development.js';
import grid from '/cdn/v99/@styled-system/grid@5.1.2/es2022/grid.development.js';
import border from '/cdn/v99/@styled-system/border@5.1.5/es2022/border.development.js';
import background from '/cdn/v99/@styled-system/background@5.1.2/es2022/background.development.js';
import position from '/cdn/v99/@styled-system/position@5.1.2/es2022/position.development.js';
import {
  get,
  createParser as createParser2,
  createStyleFunction as createStyleFunction2,
  compose,
  system
} from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
import { margin, padding, space } from '/cdn/v99/@styled-system/space@5.1.2/es2022/space.development.js';
import { color as color2 } from '/cdn/v99/@styled-system/color@5.1.2/es2022/color.development.js';
import { layout as layout2 } from '/cdn/v99/@styled-system/layout@5.1.2/es2022/layout.development.js';
import { typography as typography2 } from '/cdn/v99/@styled-system/typography@5.1.2/es2022/typography.development.js';
import { flexbox as flexbox2 } from '/cdn/v99/@styled-system/flexbox@5.1.2/es2022/flexbox.development.js';
import { border as border2 } from '/cdn/v99/@styled-system/border@5.1.5/es2022/border.development.js';
import { background as background2 } from '/cdn/v99/@styled-system/background@5.1.2/es2022/background.development.js';
import { position as position2 } from '/cdn/v99/@styled-system/position@5.1.2/es2022/position.development.js';
import { grid as grid2 } from '/cdn/v99/@styled-system/grid@5.1.2/es2022/grid.development.js';
import { shadow } from '/cdn/v99/@styled-system/shadow@5.1.2/es2022/shadow.development.js';
import {
  default as default2,
  default as default3
} from '/cdn/v99/@styled-system/shadow@5.1.2/es2022/shadow.development.js';
import {
  variant,
  buttonStyle,
  textStyle,
  colorStyle
} from '/cdn/v99/@styled-system/variant@5.1.5/es2022/variant.development.js';
import { default as default4 } from '/cdn/v99/@styled-system/border@5.1.5/es2022/border.development.js';
var width = layout.width;
var height = layout.height;
var minWidth = layout.minWidth;
var minHeight = layout.minHeight;
var maxWidth = layout.maxWidth;
var maxHeight = layout.maxHeight;
var size = layout.size;
var verticalAlign = layout.verticalAlign;
var display = layout.display;
var overflow = layout.overflow;
var overflowX = layout.overflowX;
var overflowY = layout.overflowY;
var opacity = color.opacity;
var fontSize = typography.fontSize;
var fontFamily = typography.fontFamily;
var fontWeight = typography.fontWeight;
var lineHeight = typography.lineHeight;
var textAlign = typography.textAlign;
var fontStyle = typography.fontStyle;
var letterSpacing = typography.letterSpacing;
var alignItems = flexbox.alignItems;
var alignContent = flexbox.alignContent;
var justifyItems = flexbox.justifyItems;
var justifyContent = flexbox.justifyContent;
var flexWrap = flexbox.flexWrap;
var flexDirection = flexbox.flexDirection;
var flex = flexbox.flex;
var flexGrow = flexbox.flexGrow;
var flexShrink = flexbox.flexShrink;
var flexBasis = flexbox.flexBasis;
var justifySelf = flexbox.justifySelf;
var alignSelf = flexbox.alignSelf;
var order = flexbox.order;
var gridGap = grid.gridGap;
var gridColumnGap = grid.gridColumnGap;
var gridRowGap = grid.gridRowGap;
var gridColumn = grid.gridColumn;
var gridRow = grid.gridRow;
var gridAutoFlow = grid.gridAutoFlow;
var gridAutoColumns = grid.gridAutoColumns;
var gridAutoRows = grid.gridAutoRows;
var gridTemplateColumns = grid.gridTemplateColumns;
var gridTemplateRows = grid.gridTemplateRows;
var gridTemplateAreas = grid.gridTemplateAreas;
var gridArea = grid.gridArea;
var borderWidth = border.borderWidth;
var borderStyle = border.borderStyle;
var borderColor = border.borderColor;
var borderTop = border.borderTop;
var borderRight = border.borderRight;
var borderBottom = border.borderBottom;
var borderLeft = border.borderLeft;
var borderRadius = border.borderRadius;
var backgroundImage = background.backgroundImage;
var backgroundSize = background.backgroundSize;
var backgroundPosition = background.backgroundPosition;
var backgroundRepeat = background.backgroundRepeat;
var zIndex = position.zIndex;
var top = position.top;
var right = position.right;
var bottom = position.bottom;
var left = position.left;
var style = function style2(_ref) {
  var prop = _ref.prop,
    cssProperty = _ref.cssProperty,
    alias = _ref.alias,
    key = _ref.key,
    transformValue = _ref.transformValue,
    scale = _ref.scale,
    properties = _ref.properties;
  var config = {};
  config[prop] = createStyleFunction({
    properties,
    property: cssProperty || prop,
    scale: key,
    defaultScale: scale,
    transform: transformValue
  });
  if (alias) config[alias] = config[prop];
  var parse = createParser(config);
  return parse;
};
export {
  alignContent,
  alignItems,
  alignSelf,
  background2 as background,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  border2 as border,
  borderBottom,
  borderColor,
  borderLeft,
  borderRadius,
  borderRight,
  borderStyle,
  borderTop,
  borderWidth,
  default4 as borders,
  bottom,
  default2 as boxShadow,
  buttonStyle,
  color2 as color,
  colorStyle,
  compose,
  createParser2 as createParser,
  createStyleFunction2 as createStyleFunction,
  display,
  flex,
  flexBasis,
  flexDirection,
  flexGrow,
  flexShrink,
  flexWrap,
  flexbox2 as flexbox,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  get,
  grid2 as grid,
  gridArea,
  gridAutoColumns,
  gridAutoFlow,
  gridAutoRows,
  gridColumn,
  gridColumnGap,
  gridGap,
  gridRow,
  gridRowGap,
  gridTemplateAreas,
  gridTemplateColumns,
  gridTemplateRows,
  height,
  justifyContent,
  justifyItems,
  justifySelf,
  layout2 as layout,
  left,
  letterSpacing,
  lineHeight,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  opacity,
  order,
  overflow,
  overflowX,
  overflowY,
  padding,
  position2 as position,
  right,
  shadow,
  size,
  space,
  style,
  system,
  textAlign,
  default3 as textShadow,
  textStyle,
  top,
  typography2 as typography,
  variant,
  verticalAlign,
  width,
  zIndex
};
