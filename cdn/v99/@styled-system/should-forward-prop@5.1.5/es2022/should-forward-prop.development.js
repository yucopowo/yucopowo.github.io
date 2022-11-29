/* esm.sh - esbuild bundle(@styled-system/should-forward-prop@5.1.5) es2022 development */
// esm-build-377d9ec082d20c74821fc9cd2673c4617c4f4658-bec027ef/node_modules/@styled-system/should-forward-prop/dist/index.esm.js
import memoize from '/cdn/v99/@emotion/memoize@0.7.5/es2022/memoize.development.js';
import isPropValid from '/cdn/v99/@emotion/is-prop-valid@0.8.8/es2022/is-prop-valid.development.js';
import {
  compose,
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle
} from '/cdn/v99/styled-system@5.1.5/es2022/styled-system.development.js';
var all = compose(
  space,
  typography,
  color,
  layout,
  flexbox,
  border,
  background,
  position,
  grid,
  shadow,
  buttonStyle,
  textStyle,
  colorStyle
);
var props = all.propNames;
var createShouldForwardProp = function createShouldForwardProp2(props2) {
  var regex = new RegExp('^(' + props2.join('|') + ')$');
  return memoize(function(prop) {
    return isPropValid(prop) && !regex.test(prop);
  });
};
var index_esm_default = createShouldForwardProp(props);
export { createShouldForwardProp, index_esm_default as default, props };
