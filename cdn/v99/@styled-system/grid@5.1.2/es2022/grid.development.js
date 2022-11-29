/* esm.sh - esbuild bundle(@styled-system/grid@5.1.2) es2022 development */
// esm-build-1383ba33e54328946be39ea9850546cf1fc13149-70105551/node_modules/@styled-system/grid/dist/index.esm.js
import { system } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var defaults = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512]
};
var config = {
  gridGap: {
    property: 'gridGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
    defaultScale: defaults.space
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true
};
var grid = system(config);
var index_esm_default = grid;
export { index_esm_default as default, grid };
