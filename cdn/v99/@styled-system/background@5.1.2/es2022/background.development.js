/* esm.sh - esbuild bundle(@styled-system/background@5.1.2) es2022 development */
// esm-build-c0fafe6f2aea5ac4910731c8a4f8f0aa9d42b31a-f2254df6/node_modules/@styled-system/background/dist/index.esm.js
import { system } from '/cdn/v99/@styled-system/core@5.1.2/es2022/core.development.js';
var config = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true
};
config.bgImage = config.backgroundImage;
config.bgSize = config.backgroundSize;
config.bgPosition = config.backgroundPosition;
config.bgRepeat = config.backgroundRepeat;
var background = system(config);
var index_esm_default = background;
export { background, index_esm_default as default };
