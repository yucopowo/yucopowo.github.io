/* esm.sh - esbuild bundle(@styled-system/typography@5.1.2) es2022 development */
// esm-build-b009ec0edd26e6cae0c788afd8112a44883e568d-b68d4e6d/node_modules/@styled-system/typography/dist/index.esm.js
import { system } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var defaults = {
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
var config = {
  fontFamily: {
    property: 'fontFamily',
    scale: 'fonts'
  },
  fontSize: {
    property: 'fontSize',
    scale: 'fontSizes',
    defaultScale: defaults.fontSizes
  },
  fontWeight: {
    property: 'fontWeight',
    scale: 'fontWeights'
  },
  lineHeight: {
    property: 'lineHeight',
    scale: 'lineHeights'
  },
  letterSpacing: {
    property: 'letterSpacing',
    scale: 'letterSpacings'
  },
  textAlign: true,
  fontStyle: true
};
var typography = system(config);
var index_esm_default = typography;
export { index_esm_default as default, typography };
