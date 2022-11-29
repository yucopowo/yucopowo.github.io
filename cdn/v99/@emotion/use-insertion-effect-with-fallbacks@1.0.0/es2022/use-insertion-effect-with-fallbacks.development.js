/* esm.sh - esbuild bundle(@emotion/use-insertion-effect-with-fallbacks@1.0.0) es2022 development */
// esm-build-34ffa4638b966e893f215b3eb0695a1329e3007e-5877b100/node_modules/@emotion/use-insertion-effect-with-fallbacks/dist/emotion-use-insertion-effect-with-fallbacks.browser.esm.js
import * as React from '/cdn/stable/react@18.2.0/es2022/react.development.js';
import { useLayoutEffect } from '/cdn/stable/react@18.2.0/es2022/react.development.js';
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect2 = React['useInsertionEffect'] ? React['useInsertionEffect'] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect2 || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect2 || useLayoutEffect;
export { useInsertionEffectAlwaysWithSyncFallback, useInsertionEffectWithLayoutFallback };
