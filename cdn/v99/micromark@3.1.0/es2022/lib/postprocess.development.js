/* esm.sh - esbuild bundle(micromark@3.1.0/lib/postprocess.js) es2022 development */
// esm-build-6f09ccb452bd8c6125b32707d185f1f7d2bf589f-ffc9f837/node_modules/micromark/dev/lib/postprocess.js
import { subtokenize } from '/cdn/v99/micromark-util-subtokenize@1.0.2/es2022/micromark-util-subtokenize.development.js';
function postprocess(events) {
  while (!subtokenize(events)) {}
  return events;
}
export { postprocess };